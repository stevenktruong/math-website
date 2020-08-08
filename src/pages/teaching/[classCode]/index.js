import * as React from "react";
import Head from "next/head";

import Layout from "components/Layout";
import Class from "components/Class";
import { getSortedNotesDataForClass } from "lib/notes";
import { getAllClassPaths, getClassData } from "lib/classes";
import { formatCourseTitle, formatQuarterYear } from "helpers";

export default class ClassPage extends React.Component {
    render() {
        const classData = this.props.classData;
        return (
            <>
                <Head>
                    <title>
                        {formatCourseTitle(classData.course)} ({formatQuarterYear(classData.quarter, classData.year)})
                    </title>
                </Head>
                <Layout rightSide={<Class classData={classData} classNotes={this.props.classNotes} />} />
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

export const getStaticProps = async ({ params }) => {
    const classData = await getClassData(params.classCode);
    const classNotes = await getSortedNotesDataForClass(params.classCode);
    return {
        props: {
            classData,
            classNotes,
        },
    };
};
