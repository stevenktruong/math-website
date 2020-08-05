import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { getClassData } from "lib/classes";
import { getNoteDataForClass, getAllNotePaths } from "lib/notes";
import Layout from "components/Layout";

export default class Note extends React.Component {
    render() {
        const classData = this.props.classData;
        const noteData = this.props.noteData;
        return (
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.css"
                        integrity="sha384-qCEsSYDSH0x5I45nNW4oXemORUZnYFtPy/FqB/OjqxabTMW5HVaaH9USK4fN3goV"
                        crossOrigin="anonymous"
                    ></link>
                    <title>
                        MATH {classData.course} - {noteData.title}
                    </title>
                </Head>
                <Layout
                    rightSide={
                        <section>
                            <h2>
                                <Link href="/teaching/[classCode]" as={`/teaching/${classData.classCode}`}>
                                    <a>
                                        MATH {classData.course}, {classData.quarter} 20{classData.year}
                                    </a>
                                </Link>
                                &nbsp;- {noteData.title}
                            </h2>

                            <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
                        </section>
                    }
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

export const getStaticProps = async ({ params }) => {
    const classData = await getClassData(params.classCode);
    const noteData = await getNoteDataForClass(params.classCode, params.noteName);
    return {
        props: {
            classData,
            noteData,
        },
    };
};
