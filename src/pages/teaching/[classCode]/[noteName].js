import * as React from "react";
import Head from "next/head";

import { importKatex } from "config/externalImports";
import Layout from "components/Layout";
import Note from "components/Note";
import { getClassData } from "lib/classes";
import { getNoteDataForClass, getAllNotePaths } from "lib/notes";
import { formatCourseTitle, formatQuarterYear } from "helpers";

export default class NotePage extends React.Component {
    render() {
        const classData = this.props.classData;
        const noteData = this.props.noteData;
        return (
            <>
                <Head>
                    {importKatex}
                    <title>{noteData.title}</title>
                </Head>
                <Layout
                    rightSide={<Note classData={classData} noteData={noteData} />}
                    classData={classData}
                    noteData={noteData}
                />
            </>
        );
    }
}

export const getStaticPaths = () => {
    const paths = getAllNotePaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params }) => {
    const classData = getClassData(params.classCode);
    const noteData = getNoteDataForClass(params.classCode, params.noteName);
    return {
        props: {
            classData,
            noteData,
        },
    };
};
