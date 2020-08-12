import * as React from "react";
import Head from "next/head";

import { importKatex } from "config/externalImports";
import Layout from "components/Layout";
import Note from "components/Note";
import { getClassData } from "lib/classes";
import { getNoteDataForClass, getAllNotePaths } from "lib/notes";

export default class NotePage extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const classData = fileData.classData;
        const noteData = fileData.noteData;
        return (
            <>
                <Head>
                    {importKatex}
                    <title>{noteData.title}</title>
                </Head>
                <Layout rightSide={<Note fileData={fileData} />} fileData={fileData} />
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
            fileData: {
                classData,
                noteData,
            },
        },
    };
};
