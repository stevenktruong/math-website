import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Teaching from "components/Teaching";

import { sortQuarters } from "helpers";

import data from "lib/data";

import { ClassCode, Quarter } from "types";

interface Props {
    sortedClassData: {
        classCode: ClassCode;
        year: number;
        quarter: Quarter;
        course: string;
        courseDescription: string;
    }[];
}

export default class TeachingPage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <title>Teaching</title>
                </Head>
                <Layout rightSide={<Teaching {...this.props} />} />
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const { classes } = data;

    // Sort classes by year, then quarter, then course, then lecture
    const sortedClassData = Object.values(classes)
        .sort((a, b) => {
            if (a.year !== b.year) {
                return a.year < b.year ? -1 : 1;
            }

            if (a.quarter !== b.quarter) {
                return sortQuarters(a.quarter, b.quarter);
            }

            if (a.course !== b.course) {
                return a.course < b.course ? -1 : 1;
            }

            return a.lecture < b.lecture ? -1 : 1;
        })
        .map((clazz) => {
            return {
                classCode: clazz.classCode,
                year: clazz.year,
                quarter: clazz.quarter,
                course: clazz.index.meta.course,
                courseDescription: clazz.index.meta.courseDescription,
            };
        });

    return {
        props: {
            sortedClassData,
        },
    };
};
