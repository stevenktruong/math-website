import * as React from "react";
import Head from "next/head";

import Layout from "components/Layout";
import Topic from "components/Topic";
import { getAllTopicPaths, getTopicData } from "lib/topics";

export default class TopicPage extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const topicData = fileData.topicData;
        return (
            <>
                <Head>
                    <title>{topicData.title} Qualifying Exam</title>
                </Head>
                <Layout rightSide={<Topic fileData={fileData} />} fileData={fileData} />
            </>
        );
    }
}

export const getStaticPaths = () => {
    const paths = getAllTopicPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params }) => {
    const topicData = getTopicData(params.topic);
    return {
        props: {
            fileData: {
                topicData,
            },
        },
    };
};
