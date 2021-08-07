import React, { ReactNode } from "react";

import Head from "next/head";

import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";

import { publicRuntimeConfig } from "helpers";

import { Quarter } from "types";

import styles from "./Layout.module.scss";

interface Props {
    leftSide?: ReactNode;
    rightSide: ReactNode;

    // /teaching/[classCode]/[noteName]
    classData?: {
        year: number;
        quarter: Quarter;
        course: string;
    };
    noteName?: string;

    // /quals/[topic]/[problemCode]
    formattedTopicName?: string;
    problemData?: {
        year: number;
        quarter: Quarter;
        problemNumber: number;
    };
}

export default class Layout extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <>
                <div className={styles.Layout}>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <meta name="format-detection" content="telephone=no"></meta>
                        <link rel="icon" type="image/ico" href={`${publicRuntimeConfig.staticFolder}/favicon.ico`} />
                    </Head>
                    <Navbar />
                    <Breadcrumbs {...this.props} />
                    <span className={styles.LeftSide}>{this.props.leftSide}</span>
                    <span className={styles.RightSide}>{this.props.rightSide}</span>
                </div>
            </>
        );
    }
}
