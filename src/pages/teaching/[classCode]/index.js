import Head from "next/head";
import { getAllClassPaths, getClassData } from "lib/classes";
import Layout from "components/Layout";
import Class from "components/Class";
import * as React from "react";
import { getSortedNotesDataForClass } from "lib/notes";

export default class ClassPage extends React.Component {
    render() {
        const classData = this.props.classData;
        return (
            <>
                <Head>
                    <title>
                        MATH {classData.course.toUpperCase()} ({classData.quarter} 20{classData.year})
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
