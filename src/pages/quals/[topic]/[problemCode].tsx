import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Problem from "components/Problem";

import { importKatex } from "config/externalImports";
import { problemTopicsFormatting } from "config/formatting";

import { formatQuarterYear, publicRuntimeConfig } from "helpers";

import data from "lib/data";
import { processorWithMathWithMacros } from "lib/processors";

import { IParams, Quarter } from "types";

interface Props {
    year: number;
    quarter: Quarter;
    problemNumber: number;

    formattedTopicName: string;
    contentHtml: string;
}

const customTags = [
    // { tag: "problem", display: () => `<h6>Problem.</h6>` },
    { tag: "solution", display: () => `<h6>Solution.</h6>` },
];

export default class ProblemPage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    {importKatex}
                    <title>
                        {formatQuarterYear(this.props.quarter, this.props.year)} - Problem {this.props.problemNumber}
                    </title>
                </Head>
                <Layout
                    formattedTopicName={this.props.formattedTopicName}
                    problemData={this.props}
                    rightSide={<Problem {...this.props} />}
                />
            </>
        );
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { quals } = data;
    const paths: { params: IParams }[] = [];
    Object.entries(quals).forEach(([unformattedTopicName, qual]) => {
        Object.entries(qual.exams).forEach(([, exam]) => {
            Object.keys(exam.problems).forEach((problemNumber) => {
                paths.push({
                    params: {
                        topic: unformattedTopicName,
                        problemCode: `${exam.year.toString().padStart(2, "0")}${exam.quarter}.${Number(problemNumber)}`,
                    },
                });
            });
        });
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { quals } = data;
    const { topic, problemCode } = context.params as IParams;
    const qual = quals[topic!];
    const exam = qual.exams[problemCode!.split(".")[0]];
    const problemNumber = Number(problemCode!.split(".")[1]);
    const problem = exam.problems[problemNumber];

    let content = problemTopicsFormatting(problem.meta.topics) + problem.content;

    // Add counters
    customTags.forEach((customTag) => {
        content = content.replace(
            new RegExp(`<${customTag.tag}>`, "g"),
            () => `<${customTag.tag}>\n${customTag.display()}\n`
        );
    });

    let contentHtml = processorWithMathWithMacros(qual.macros).processSync(content).toString();

    // Replace quals macro
    contentHtml = contentHtml.replace(/quals::(.+?).md/g, (match, problemCode) => {
        return `<a href="${publicRuntimeConfig.staticFolder}/quals/${topic}/${problemCode}">${formatQuarterYear(
            exam.quarter,
            exam.year
        )} - Problem ${problemNumber}</a>`;
    });

    return {
        props: {
            quarter: exam.quarter,
            year: exam.year,
            problemNumber,

            formattedTopicName: qual.index.meta.title,
            contentHtml,
        },
    };
};
