import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Note from "components/Note";

import { importKatex, importHighlightStylesheet } from "config/externalImports";

import { getClassData } from "lib/classes";
import { getNoteDataForClass, getAllNotePaths } from "lib/notes";

import { FileData, IParams } from "types";

interface Props {
    fileData: FileData;
}

export default class NotePage extends React.Component<Props> {
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
    const { classCode, noteName } = context.params as IParams;
    const classData = getClassData(classCode!);
    const noteData = getNoteDataForClass(classCode!, noteName!);
    return {
        props: {
            fileData: {
                classData,
                noteData,
            },
        },
    };
};
