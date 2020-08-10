import Head from "next/head";
import getConfig from "next/config";
import { withRouter } from "next/router";

import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";

import styles from "./Layout.module.scss";

const { publicRuntimeConfig = {} } = getConfig() || {};

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isHome: props.router.asPath === "/" };
    }

    render() {
        return (
            <>
                <div className={styles.Layout}>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <link rel="icon" type="image/ico" href={`${publicRuntimeConfig.staticFolder}/favicon.ico`} />
                    </Head>
                    <Navbar />
                    {!this.state.isHome ? <Breadcrumbs /> : null}
                    <span className={styles.LeftSide}>{this.props.leftSide}</span>
                    <span className={styles.RightSide}>{this.props.rightSide}</span>
                </div>
            </>
        );
    }
}

export default withRouter(Layout);
