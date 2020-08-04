import Head from "next/head";
import Layout from "components/Layout";
import About from "components/About";
import Contact from "components/Contact";
import * as React from "react";
import Me from "components/Me";

export default class Home extends React.Component {
    render() {
        return (
            <Layout
                leftSide={<Me />}
                rightSide={
                    <div>
                        <About />
                        <Contact />
                    </div>
                }
            >
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <title>Steven Truong</title>
                </Head>
            </Layout>
        );
    }
}
