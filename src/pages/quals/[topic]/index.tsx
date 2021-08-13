import * as React from "react";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";

import Layout from "components/Layout";
import Qual from "components/Qual";

import { problemTopicsFormatting } from "helpers";
import { formatQuarter, publicRuntimeConfig, sortQuarters } from "helpers";

import data from "lib/data";
import { baseProcessor } from "lib/processors";

interface Props {
    formattedTopicName: string;
    contentHtml: string;
}

interface Params extends ParsedUrlQuery {
    topic: string;
}

export default class TopicPage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <title>{this.props.formattedTopicName} Qualifying Exam</title>
                </Head>
                <Layout formattedTopicName={this.props.formattedTopicName} rightSide={<Qual {...this.props} />} />
            </>
        );
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { quals } = data;
    const paths: { params: Params }[] = Object.keys(quals).map((unformattedTopicName) => {
        return {
            params: {
                topic: unformattedTopicName,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
    const { quals } = data;
    const { topic } = context.params!;
    const qual = quals[topic];

    let content = qual.index.content;

    // For each exam, add a header with the date followed by a list of (custom syntax representing) the problems
    Object.values(qual.exams)
        .sort((a, b): number => {
            if (a.year !== b.year) return a.year < b.year ? -1 : 1;
            return sortQuarters(a.quarter, b.quarter);
        })
        .forEach((exam) => {
            content +=
                `\n## ${formatQuarter(exam.quarter)} 20${exam.year.toString().padStart(2, "0")}\n` +
                Object.keys(exam.problems)
                    .sort((a, b) => Number(a) - Number(b))
                    .map(
                        (problemNumber) =>
                            `- problems::${exam.year.toString().padStart(2, "0")}${exam.quarter}.${problemNumber}.md`
                    )
                    .join("\n");
        });

    let contentHtml = baseProcessor.processSync(content).toString();

    // Parse the custom syntax above into HTML
    contentHtml = contentHtml.replace(
        /problems::([0-9]{2}[fs])\.([0-9]{1,2}).md/g,
        (match, examDate, problemNumber) =>
            `<a href="${publicRuntimeConfig.staticFolder}/quals/${topic}/${examDate}.${problemNumber}">Problem ${problemNumber}</a>` +
            problemTopicsFormatting(qual.exams[examDate].problems[problemNumber].meta.topics)
    );

    return {
        props: {
            formattedTopicName: qual.index.meta.title,
            contentHtml,
        },
    };
};
