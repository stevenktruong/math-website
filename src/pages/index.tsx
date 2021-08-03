import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import About from "components/About";
import Contact from "components/Contact";
import Layout from "components/Layout";
import Me from "components/Me";

import { getPersonalData } from "lib/personal";

import { FileData } from "types";

interface HomeProps {
    fileData: FileData;
}

export default class Home extends React.Component<HomeProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData!;

        return (
            <>
                <Head>
                    <title>{personalData.fullName}</title>
                </Head>
                <Layout
                    fileData={fileData}
                    leftSide={<Me fileData={fileData} />}
                    rightSide={
                        <>
                            <About fileData={fileData} />
                            <Contact fileData={fileData} />
                        </>
                    }
                />
            </>
        );
    };
}

export const getStaticProps: GetStaticProps = async () => {
    const personalData = getPersonalData();
    return {
        props: {
            fileData: {
                personalData,
            },
        },
    };
};
