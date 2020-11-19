import * as React from "react";
import Head from "next/head";

import Layout from "components/Layout";
import Class from "components/Class";
import { getAllClassPaths, getClassData } from "lib/classes";
import { getPersonalData } from "lib/personal";
import { formatQuarterYear } from "helpers";

export default class ClassPage extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        const classData = fileData.classData;
        return (
            <>
                <Head>
                    <title>
                        {classData.course} ({formatQuarterYear(classData.quarter, classData.year)})
                    </title>
                </Head>
                <Layout rightSide={<Class fileData={fileData} />} fileData={fileData} />
            </>
        );
    }
}

export const getStaticPaths = () => {
    const paths = getAllClassPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params }) => {
    const personalData = getPersonalData();
    const classData = getClassData(params.classCode);
    return {
        props: {
            fileData: {
                personalData,
                classData,
            },
        },
    };
};
