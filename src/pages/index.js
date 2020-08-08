import * as React from "react";
import Head from "next/head";

import { getPersonalData } from "lib/personal";
import Layout from "components/Layout";
import Contact from "components/Contact";
import About from "components/About";
import Me from "components/Me";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Steven Truong</title>
                </Head>
                <Layout
                    leftSide={<Me />}
                    rightSide={
                        <>
                            <About personalData={this.props.personalData} />
                            <Contact personalData={this.props.personalData} />
                        </>
                    }
                />
            </>
        );
    }
}

export const getStaticProps = () => {
    const personalData = getPersonalData();
    return {
        props: {
            personalData,
        },
    };
};
