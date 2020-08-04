import Head from "next/head";
import { getAllClassCodes, getClassData } from "lib/classes";
import Layout from "components/Layout";
import Class from "components/Class";
import * as React from "react";

export default class ClassPage extends React.Component {
    render() {
        const classData = this.props.classData;
        return (
            <Layout rightSide={<Class classData={classData} />}>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <title>
                        MATH {classData.course.toUpperCase()}, {classData.quarter} 20{classData.year}
                    </title>
                </Head>
            </Layout>
        );
    }
}

export const getStaticPaths = () => {
    const paths = getAllClassCodes();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const classData = await getClassData(params.classCode);
    return {
        props: {
            classData,
        },
    };
};
