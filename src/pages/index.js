import Head from "next/head";
import Layout from "components/Layout";
import Contact from "components/Contact";
import About from "components/About";
import Me from "components/Me";
import * as React from "react";

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
                            <About />
                            <Contact />
                        </>
                    }
                />
            </>
        );
    }
}
