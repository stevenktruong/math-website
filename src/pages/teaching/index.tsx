import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Teaching from "components/Teaching";

import { getSortedClassesData } from "lib/classes";

import { FileData } from "types";

interface Props {
    fileData: FileData;
}

export default class TeachingPage extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;

        return (
            <>
                <Head>
                    <title>Teaching</title>
                </Head>
                <Layout fileData={fileData} rightSide={<Teaching fileData={fileData} />} />
            </>
        );
    };
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
