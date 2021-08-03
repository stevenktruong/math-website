import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Teaching from "components/Teaching";

import { getSortedClassesData } from "lib/classes";

import { FileData } from "types";

interface TeachingPageProps {
    fileData: FileData;
}

export default class TeachingPage extends React.Component<TeachingPageProps> {
    render() {
        const fileData = this.props.fileData;

        return (
            <>
                <Head>
                    <title>Teaching</title>
                </Head>
                <Layout fileData={fileData} rightSide={<Teaching fileData={fileData} />} />
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const classesData = getSortedClassesData();
    return {
        props: {
            fileData: {
                classesData,
            },
        },
    };
};
