import Head from "next/head";

import { publicRuntimeConfig } from "helpers";
import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";

import styles from "./Layout.module.scss";

export default class Layout extends React.Component {
    render() {
        const fileData = this.props.fileData;
        return (
            <>
                <div className={styles.Layout}>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <link rel="icon" type="image/ico" href={`${publicRuntimeConfig.staticFolder}/favicon.ico`} />
                    </Head>
                    <Navbar />
                    <Breadcrumbs fileData={fileData} />
                    <span className={styles.LeftSide}>{this.props.leftSide}</span>
                    <span className={styles.RightSide}>{this.props.rightSide}</span>
                </div>
            </>
        );
    }
}
