import React from "react";
import styles from "./About.module.scss";

export default class About extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        return (
            <section className={styles.About}>
                <h2>About</h2>
                <div dangerouslySetInnerHTML={{ __html: personalData.contentHtml }} />
            </section>
        );
    }
}
