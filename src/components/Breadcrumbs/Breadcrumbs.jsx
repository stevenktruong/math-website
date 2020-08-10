import * as React from "react";
import getConfig from "next/config";
import { withRouter } from "next/router";

import styles from "./Breadcrumbs.module.scss";

const { publicRuntimeConfig = {} } = getConfig() || {};

const separator = ">";

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { router: props.router };
    }

    render() {
        // E.g., /teaching/123a.2.20f/ -> [ "", "teaching", "123a.2.20f", "" ], so we strip away the empty spaces
        const currentPath = this.state.router.asPath.split("/").slice(1);
        if (currentPath[currentPath.length - 1] === "") currentPath.pop();
        return (
            <div className={styles.Breadcrumbs}>
                <a className={styles.Crumb} href={`${publicRuntimeConfig.staticFolder}/`} key="Home">
                    home
                </a>
                {currentPath.map((level, index) => {
                    const isLast = index === currentPath.length - 1;
                    return (
                        <>
                            {` ${separator} `}
                            {!isLast ? (
                                <>
                                    <a
                                        href={`${publicRuntimeConfig.staticFolder}/${currentPath
                                            .slice(0, index + 1)
                                            .join("/")}`}
                                        className={styles.Crumb}
                                        key={level}
                                    >
                                        {level}
                                    </a>
                                </>
                            ) : (
                                <span className={styles.Crumb} key={level}>
                                    {level}
                                </span>
                            )}
                        </>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(Breadcrumbs);
