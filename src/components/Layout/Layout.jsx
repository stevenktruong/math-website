import Head from "next/head";
import getConfig from "next/config";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import styles from "./Layout.module.scss";

const { publicRuntimeConfig = {} } = getConfig() || {};

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.Layout}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link rel="icon" type="image/ico" href={`${publicRuntimeConfig.staticFolder}/favicon.ico`} />
                </Head>
                <Navbar />
                <span className={styles.LeftSide}>{this.props.leftSide}</span>
                <span className={styles.RightSide}>{this.props.rightSide}</span>
                <Footer />
            </div>
        );
    }
}
