import * as React from "react";
import Head from "next/head";

import linkedinMeta from "config/linkedinMeta";
import Layout from "components/Layout";
import Teaching from "components/Teaching";
import { getSortedClassesData } from "lib/classes";

export default class Home extends React.Component {
    render() {
        const fileData = this.props.fileData;
        return (
            <>
                <Head>
                    <title>Teaching</title>
                    {linkedinMeta}
                </Head>
                <Layout rightSide={<Teaching fileData={fileData} />} />
            </>
        );
    }
}

export const getStaticProps = () => {
    const classesData = getSortedClassesData();
    return {
        props: {
            fileData: {
                classesData,
            },
        },
    };
};
