import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Class from "components/Class";
import Layout from "components/Layout";

import { noteTagsFormatting } from "helpers";
import { formatQuarterYear, publicRuntimeConfig } from "helpers";

import data from "lib/data";
import { processorWithMathWithMacros } from "lib/processors";

import { Meeting } from "models/Class.model";

import { ClassCode, IParams, Link, Quarter } from "types";

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

export const getStaticPaths: GetStaticPaths = async () => {
    const { classes } = data;
    const paths: { params: IParams }[] = Object.keys(classes).map((clazz) => {
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

export const getStaticProps: GetStaticProps = async (context) => {
    const { personal, classes } = data;
    const { classCode } = context.params as IParams;
    const clazz = classes[classCode!];

    // Parse custom syntax
    let contentHtml = processorWithMathWithMacros(clazz.macros).processSync(clazz.index.content).toString();

    // Create announcements table
    const announcements = new RegExp('<h2 id="announcements">Announcements</h2>').test(contentHtml);
    if (announcements) {
        contentHtml = contentHtml.replace(
            new RegExp('(<h2 id="announcements">Announcements</h2>)\n<ul>'),
            (match, noUl) => `${noUl}\n<div class="tableContainer"><table id="announcements-table"><tbody>`
        );

        // We need to end the table at the last announcement
        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>\n</ul>"),
            (match, date, announcement) => `<tr><td>${date}</td><td>${announcement}</td></tr>\n</tbody></table></div>`
        );

        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>", "g"),
            (match, date, announcement) => `<tr><td>${date}</td>\n<td>${announcement}</td></tr>`
        );
    }

    contentHtml = contentHtml.replace(
        new RegExp("notes::(.+?).md", "g"),
        (match, noteName) =>
            `<a href="${publicRuntimeConfig.staticFolder}/teaching/${classCode}/${noteName}">${clazz.notes[noteName].meta.title}</a>` +
            noteTagsFormatting(clazz.notes[noteName].meta.tags)
    );

    return {
        props: {
            instructor: clazz.index.meta.instructor,
            instructorUrl: clazz.index.meta.instructorUrl,
            sections: clazz.index.meta.discussions,
            officeHours: clazz.index.meta.officeHours,
            email: personal.meta.email,
            links: clazz.index.meta.links,

            course: clazz.index.meta.course,
            quarter: clazz.quarter,
            year: clazz.year,
            courseDescription: clazz.index.meta.courseDescription,
            contentHtml,
        },
    };
};
