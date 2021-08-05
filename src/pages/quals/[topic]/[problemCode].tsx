import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Problem from "components/Problem";

import { importKatex } from "config/externalImports";

import { formatQuarterYear } from "helpers";

import { getAllProblemsPaths, getProblemDataForTopic } from "lib/problems";
import { getTopicData } from "lib/topics";

import { FileData, IParams } from "types";

interface Props {
    fileData: FileData;
}

export default class ProblemPage extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const problemData = fileData.problemData!;

        return (
            <>
                <Head>
                    {importKatex}
                    <title>
                        {formatQuarterYear(problemData.quarter, problemData.year)} - Problem {problemData.problemNumber}
                    </title>
                </Head>
                <Layout rightSide={<Problem fileData={fileData} />} fileData={fileData} />
            </>
        );
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProblemsPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { topic, problemCode } = context.params as IParams;
    const topicData = getTopicData(topic!);
    const problemData = getProblemDataForTopic(topic!, problemCode!);
    return {
        props: {
            fileData: {
                topicData,
                problemData,
            },
        },
    };
};
