import React, { ReactNode } from "react";

import Head from "next/head";

import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";

import { publicRuntimeConfig } from "helpers";

import { FileData } from "types";

import styles from "./Layout.module.scss";

interface LayoutProps {
    fileData: FileData;
    leftSide?: ReactNode;
    rightSide: ReactNode;
}

export default class Layout extends React.Component<LayoutProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;

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
                    <Breadcrumbs fileData={fileData} />
                    <span className={styles.LeftSide}>{this.props.leftSide}</span>
                    <span className={styles.RightSide}>{this.props.rightSide}</span>
                </div>
            </>
        );
    };
}
