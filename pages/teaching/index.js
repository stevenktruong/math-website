import Head from "next/head";
import Layout from "components/Layout";
import Teaching from "components/Teaching";
import * as React from "react";
import { getSortedClassesData } from "lib/classes";

export default class Home extends React.Component {
    render() {
        return (
            <Layout
                rightSide={
                    <div>
                        <Teaching classesData={this.props.classesData} />
                    </div>
                }
            >
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <title>Teaching</title>
                </Head>
            </Layout>
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
