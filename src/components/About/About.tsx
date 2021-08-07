import React from "react";

import styles from "./About.module.scss";

interface Props {
    contentHtml: string;
}

export default class About extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <section className={styles.About}>
                <h2>About</h2>
                <div dangerouslySetInnerHTML={{ __html: this.props.contentHtml }} />
            </section>
        );
    }
}
