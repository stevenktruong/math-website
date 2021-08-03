import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Class from "components/Class";
import Layout from "components/Layout";

import { formatQuarterYear } from "helpers";

import { getAllClassPaths, getClassData } from "lib/classes";
import { getPersonalData } from "lib/personal";

import { ClassCode } from "models/ClassData.model";

import { FileData, IParams } from "types";

interface ClassPageProps {
    fileData: FileData;
}

export default class ClassPage extends React.Component<ClassPageProps> {
    render() {
        const fileData = this.props.fileData;
        const classData = fileData.classData!;

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

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllClassPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as IParams;
    const personalData = getPersonalData();
    const classData = getClassData(params.classCode as ClassCode);
    return {
        props: {
            fileData: {
                personalData,
                classData,
            },
        },
    };
};
