import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Quals from "components/Quals";

import { getSortedTopicsData } from "lib/topics";

import { FileData } from "types";

interface Props {
    fileData: FileData;
}

export default class QualsPage extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;

        return (
            <>
                <Head>
                    <title>Qualifying Exams</title>
                </Head>
                <Layout rightSide={<Quals fileData={fileData} />} fileData={fileData} />
            </>
        );
    };
}

export const getStaticProps: GetStaticProps = async () => {
    const topicsData = getSortedTopicsData();
    return {
        props: {
            fileData: {
                topicsData,
            },
        },
    };
};
