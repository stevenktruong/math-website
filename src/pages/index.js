import Head from "next/head";
import Layout from "components/Layout";
import About from "components/About";
import Contact from "components/Contact";
import * as React from "react";
import Me from "components/Me";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Steven Truong</title>
                </Head>
                <Layout
                    leftSide={<Me />}
                    rightSide={
                        <div>
                            <About />
                            <Contact />
                        </div>
                    }
                />
            </div>
        );
    }
}
