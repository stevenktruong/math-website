import * as React from "react";
import Head from "next/head";

import Problem from "components/Problem";
import Layout from "components/Layout";
import { importKatex } from "config/externalImports";
import { getTopicData } from "lib/topics";
import { getAllProblemsPaths, getProblemDataForTopic } from "lib/problems";
import { formatQuarterYear } from "helpers";

export default class ProblemPage extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const problemData = fileData.problemData;
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
    }
}

export const getStaticPaths = () => {
    const paths = getAllProblemsPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params }) => {
    const topicData = getTopicData(params.topic);
    const problemData = getProblemDataForTopic(params.topic, params.problemCode);
    return {
        props: {
            fileData: {
                topicData,
                problemData,
            },
        },
    };
};
