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
                            <Contact {...this.props} />
                            <About contentHtml={this.props.aboutHtml} />
                        </>
                    }
                />
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const { personal } = data;
    const personalMeta = personal.getMeta();

    return {
        props: {
            fullName: personalMeta.fullName,
            pronouns: personalMeta.pronouns,

            aboutHtml: baseProcessor.processSync(personal.getContent()).toString(),

            office: personalMeta.office,
            email: personalMeta.email,
            address: personalMeta.address,
            fax: personalMeta.fax,
        },
    };
};
