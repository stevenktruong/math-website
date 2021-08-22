import * as React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import About from "components/About";
import Contact from "components/Contact";
import Layout from "components/Layout";
import Me from "components/Me";

import data from "lib/data";
import { baseProcessor } from "lib/processors";

interface Props {
    fullName: string;
    pronouns: string;

    aboutHtml: string;

    office: string;
    email: string;
    address: string[];
    fax: string;
}

export default class Home extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <title>{this.props.fullName}</title>
                </Head>
                <Layout
                    leftSide={<Me {...this.props} />}
                    rightSide={
                        <>
                            <About contentHtml={this.props.aboutHtml} />
                            <Contact {...this.props} />
                        </>
                    }
                />
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const { personal } = data;

    return {
        props: {
            fullName: personal.getMeta().fullName,
            pronouns: personal.getMeta().pronouns,

            aboutHtml: baseProcessor.processSync(personal.getContent()).toString(),

            office: personal.getMeta().office,
            email: personal.getMeta().email,
            address: personal.getMeta().address,
            fax: personal.getMeta().fax,
        },
    };
};
