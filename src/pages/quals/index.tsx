import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import Quals from "components/Quals";

import data from "lib/data";

interface Props {
    qualTopics: {
        unformattedName: string;
        formattedName: string;
    }[];
}

export default class QualsPage extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <title>Qualifying Exams</title>
                </Head>
                <Layout rightSide={<Quals qualTopics={this.props.qualTopics} />} />
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const { quals } = data;
    const qualTopics = Object.entries(quals).map(([unformattedName, qual]) => {
        return {
            unformattedName,
            formattedName: qual.index.getMeta().title,
        };
    });

    return {
        props: {
            qualTopics,
        },
    };
};
