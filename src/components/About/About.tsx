import React from "react";

import { FileData } from "types";

import styles from "./About.module.scss";

interface AboutProps {
    fileData: FileData;
}

export default class About extends React.Component<AboutProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData!;

        return (
            <section className={styles.About}>
                <h2>About</h2>
                <div dangerouslySetInnerHTML={{ __html: personalData.contentHtml }} />
            </section>
        );
    };
}
