import * as React from "react";
import { withRouter } from "next/router";

import styles from "./Breadcrumbs.module.scss";

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { router: props.router };
    }

    render() {
        const currentPath = this.state.router.asPath.split("/").slice(1);
        return (
            <div className={styles.Breadcrumbs}>
                <a className={styles.Crumb} href="/" key="Home">
                    home
                </a>
                {currentPath.map((level, index) => {
                    const isLast = index === currentPath.length - 1;
                    return (
                        <>
                            {" > "}
                            {!isLast ? (
                                <>
                                    <a
                                        href={`/${currentPath.slice(0, index + 1).join("/")}`}
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
