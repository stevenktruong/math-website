import React from "react";

import { FileData } from "types";

import styles from "./Topic.module.scss";

interface TopicProps {
    fileData: FileData;
}

export default class Topic extends React.Component<TopicProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const topicData = fileData.topicData!;

        return (
            <div className={styles.Topic}>
                <section>
                    <h1>{topicData.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: topicData.contentHtml }} />
                </section>
            </div>
        );
    };
}
