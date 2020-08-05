import Head from "next/head";
import Layout from "components/Layout";
import Teaching from "components/Teaching";
import * as React from "react";
import { getSortedClassesData } from "lib/classes";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Teaching</title>
                </Head>
                <Layout rightSide={<Teaching classesData={this.props.classesData} />} />
            </>
        );
    }
}

export const getStaticProps = async ({ params }) => {
    const classesData = await getSortedClassesData();
    return {
        props: {
            classesData,
        },
    };
};
