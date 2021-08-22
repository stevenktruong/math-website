import * as React from "react";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";

import Class from "components/Class";
import Layout from "components/Layout";

import { noteTagsFormatting } from "helpers";
import { formatQuarterYear, publicRuntimeConfig } from "helpers";

import data from "lib/data";
import { processorWithMathWithMacros } from "lib/processors";

import { Meeting } from "models/Class.model";

import { ClassCode, Link, Quarter } from "types";

interface Props {
    instructor: string;
    instructorUrl: URL;
    sections: Meeting[];
    officeHours: Meeting[];
    email: string;
    links: Link[];

    course: string;
    quarter: Quarter;
    year: number;
    courseDescription: string;
    contentHtml: string;
}

interface Params extends ParsedUrlQuery {
    classCode: string;
}

export default class ClassPage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <title>
                        {this.props.course} ({formatQuarterYear(this.props.quarter, this.props.year)})
                    </title>
                </Head>
                <Layout classData={{ ...this.props }} rightSide={<Class {...this.props} />} />
            </>
        );
    }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const { classes } = data;
    const paths: { params: Params }[] = Object.keys(classes).map((clazz) => {
        return {
            params: {
                classCode: clazz as ClassCode,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
    const { personal, classes } = data;
    const { classCode } = context.params!;
    const clazz = classes[classCode];
    const classMeta = clazz.index.getMeta();

    let contentHtml = processorWithMathWithMacros(clazz.macros).processSync(clazz.index.getContent()).toString();

    // Parse announcements syntax into a table
    const announcements = new RegExp('<h2 id="announcements">Announcements</h2>').test(contentHtml);
    if (announcements) {
        // Start the table
        contentHtml = contentHtml.replace(
            new RegExp('(<h2 id="announcements">Announcements</h2>)\n<ul>'),
            (match, noUl) => `${noUl}\n<div class="tableContainer"><table id="announcements-table"><tbody>`
        );

        // Close the table after the last announcement
        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>\n</ul>"),
            (match, date, announcement) => `<tr><td>${date}</td><td>${announcement}</td></tr>\n</tbody></table></div>`
        );

        // Parse the remaining lines in the table
        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>", "g"),
            (match, date, announcement) => `<tr><td>${date}</td>\n<td>${announcement}</td></tr>`
        );
    }

    // Parse notes syntax into a link to the note
    contentHtml = contentHtml.replace(
        new RegExp("notes::(.+?).md", "g"),
        (match, noteName) =>
            `<a href="${publicRuntimeConfig.staticFolder}/teaching/${classCode}/${noteName}">${
                clazz.notes[noteName].getMeta().title
            }</a>` + noteTagsFormatting(clazz.notes[noteName].getMeta().tags)
    );

    return {
        props: {
            instructor: classMeta.instructor,
            instructorUrl: classMeta.instructorUrl,
            sections: classMeta.discussions,
            officeHours: classMeta.officeHours,
            email: personal.getMeta().email,
            links: classMeta.links,

            course: classMeta.course,
            quarter: clazz.quarter,
            year: clazz.year,
            courseDescription: classMeta.courseDescription,
            contentHtml,
        },
    };
};
