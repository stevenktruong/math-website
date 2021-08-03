import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Note from "components/Note";

import { importKatex, importHighlightStylesheet } from "config/externalImports";

import { getClassData } from "lib/classes";
import { getNoteDataForClass, getAllNotePaths } from "lib/notes";

import { ClassCode } from "models/ClassData.model";

import { FileData, IParams } from "types";

interface NotePageProps {
    fileData: FileData;
}

export default class NotePage extends React.Component<NotePageProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const noteData = fileData.noteData!;

        return (
            <>
                <Head>
                    {importKatex}
                    {importHighlightStylesheet}
                    <title>{noteData.title}</title>
                </Head>
                <Layout rightSide={<Note fileData={fileData} />} fileData={fileData} />
            </>
        );
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllNotePaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as IParams;
    const classData = getClassData(params.classCode as ClassCode);
    const noteData = getNoteDataForClass(params.classCode as ClassCode, params.noteName!);
    return {
        props: {
            fileData: {
                classData,
                noteData,
            },
        },
    };
};
