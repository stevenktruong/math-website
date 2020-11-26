import * as React from "react";
import Head from "next/head";

import { getSortedTopicsData } from "lib/topics";
import Layout from "components/Layout";
import Quals from "components/Quals";

export default class QualsPage extends React.Component {
    render() {
        const fileData = this.props.fileData;
        return (
            <>
                <Head>
                    <title>Qualifying Exams</title>
                </Head>
                <Layout rightSide={<Quals fileData={fileData} />} fileData={fileData} />
            </>
        );
    }
}

export const getStaticProps = () => {
    const topicsData = getSortedTopicsData();
    return {
        props: {
            fileData: {
                topicsData,
            },
        },
    };
};
