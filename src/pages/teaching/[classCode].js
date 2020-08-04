import Head from "next/head";
import { getAllClassCodes, getClassData } from "lib/classes";
import Layout from "components/Layout";
import Class from "components/Class";
import * as React from "react";

export default class ClassPage extends React.Component {
    render() {
        const classData = this.props.classData;
        return (
            <div>
                <Head>
                    <title>
                        MATH {classData.course.toUpperCase()}, {classData.quarter} 20{classData.year}
                    </title>
                </Head>
                <Layout rightSide={<Class classData={classData} />} />
            </div>
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
