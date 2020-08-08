import * as React from "react";
import Head from "next/head";

import Layout from "components/Layout";
import Class from "components/Class";
import { getAllClassPaths, getClassData } from "lib/classes";
import { getSortedNotesDataForClass } from "lib/notes";
import { getPersonalData } from "lib/personal";
import { formatCourseTitle, formatQuarterYear } from "helpers";

export default class ClassPage extends React.Component {
    render() {
        const personalData = this.props.personalData;
        const classData = this.props.classData;
        return (
            <>
                <Head>
                    <title>
                        {formatCourseTitle(classData.course)} ({formatQuarterYear(classData.quarter, classData.year)})
                    </title>
                </Head>
                <Layout
                    rightSide={
                        <Class personalData={personalData} classData={classData} classNotes={this.props.classNotes} />
                    }
                />
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
    const classNotes = getSortedNotesDataForClass(params.classCode);
    return {
        props: {
            personalData,
            classData,
            classNotes,
        },
    };
};
