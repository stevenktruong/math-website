import { importKatex, importHighlightStylesheet } from "vendors";

import * as React from "react";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";

import Layout from "components/Layout";
import Note from "components/Note";

import { publicRuntimeConfig, substituteVariables } from "helpers";

import data from "lib/data";
import { processorWithMathWithMacros } from "lib/processors";

import { Quarter } from "types";

interface Props {
    classData: {
        year: number;
        quarter: Quarter;
        course: string;
    };
    noteName: string;
    contentHtml: string;
}

interface Params extends ParsedUrlQuery {
    classCode: string;
    noteName: string;
}

const counters = [
    { tag: "remark", display: () => `<h6>Remark.</h6>` },
    { tag: "example", display: (count: number) => `<h6 id="example-${count}">Example ${count}.</h6>` },
    { tag: "exercise", display: (count: number) => `<h6 id="exercise-${count}">Exercise ${count}.</h6>` },
    { tag: "solution", display: () => `<h6>Solution.</h6>` },
    {
        tag: "proof",
        display: () => `<h6>Proof.</h6>`,
        after: () => '<span class="qed-square">$\\square$</span>',
    },
];

const boxedEnvironments = ["theorem", "definition", "proposition", "lemma", "corollary"];

export default class NotePage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    {importKatex}
                    {importHighlightStylesheet}
                    <title>{this.props.noteName}</title>
                </Head>
                <Layout {...this.props} rightSide={<Note {...this.props} />} />
            </>
        );
    }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const { classes } = data;
    const paths: { params: Params }[] = [];
    Object.values(classes).forEach((clazz) => {
        Object.entries(clazz.notes)
            .filter(([, note]) => note.getMeta().publish || process.env.URL_ENV === "development")
            .map(([noteName]) => {
                paths.push({
                    params: {
                        classCode: clazz.classCode,
                        noteName,
                    },
                });
            });
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
    const { classes } = data;
    const { classCode, noteName } = context.params!;
    const clazz = classes[classCode];
    const note = clazz.notes[noteName];

    let substitutedContent = substituteVariables(note.getContent(), {
        assetsFolder: `${publicRuntimeConfig.staticFolder}/classes/${classCode}/${noteName}`,
    });

    // Add counters, e.g., Example 1, Exercise 2, etc.
    counters.forEach((counter) => {
        let count = 0;
        substitutedContent = substitutedContent.replace(
            new RegExp(`(<${counter.tag} ?.*>)`, "g"),
            (match, fullTag) => `${fullTag}\n${counter.display(++count)}\n`
        );

        substitutedContent = substitutedContent.replace(
            new RegExp(`\n(</${counter.tag}>)`, "g"),
            (match, endTag) => `${counter.after ? counter.after() : ""}\n\n${endTag}`
        );
    });

    // Format boxed environment headers, e.g., <theorem>, <definition>
    boxedEnvironments.forEach((tag) => {
        substitutedContent = substitutedContent.replace(
            new RegExp(`(<${tag} ?.*>) ?(.+)?`, "g"),
            (match, fullTag, description) =>
                `${fullTag}\n<h6>${tag.replace(tag[0], tag[0].toUpperCase())}${
                    description ? ` (${description})` : ""
                }</h6>`
        );
    });

    return {
        props: {
            classData: {
                year: clazz.year,
                quarter: clazz.quarter,
                course: clazz.index.getMeta().course,
            },
            noteName: note.getMeta().title,
            contentHtml: processorWithMathWithMacros(clazz.macros).processSync(substitutedContent).toString(),
        },
    };
};
