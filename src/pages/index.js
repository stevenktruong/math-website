import * as React from "react";
import Head from "next/head";

import { getPersonalData } from "lib/personal";
import Layout from "components/Layout";
import Contact from "components/Contact";
import About from "components/About";
import Me from "components/Me";

export default class Home extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        return (
            <>
                <Head>
                    <title>{personalData.fullName}</title>
                </Head>
                <Layout
                    leftSide={<Me fileData={fileData} />}
                    rightSide={
                        <>
                            <About fileData={fileData} />
                            <Contact fileData={fileData} />
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
            fileData: {
                personalData,
            },
        },
    };
};
