import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Topic from "components/Topic";

import { getAllTopicPaths, getTopicData } from "lib/topics";

import { FileData, IParams } from "types";

interface Props {
    fileData: FileData;
}

export default class TopicPage extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const topicData = fileData.topicData!;

        return (
            <>
                <Head>
                    <title>{topicData.title} Qualifying Exam</title>
                </Head>
                <Layout rightSide={<Topic fileData={fileData} />} fileData={fileData} />
            </>
        );
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllTopicPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { topic } = context.params as IParams;
    const topicData = getTopicData(topic!);
    return {
        props: {
            fileData: {
                topicData,
            },
        },
    };
};
