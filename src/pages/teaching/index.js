import Head from "next/head";
import Layout from "components/Layout";
import Teaching from "components/Teaching";
import * as React from "react";
import { getSortedClassesData } from "lib/classes";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Teaching</title>
                </Head>
                <Layout
                    rightSide={
                        <div>
                            <Teaching classesData={this.props.classesData} />
                        </div>
                    }
                />
            </div>
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
