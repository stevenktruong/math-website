import React from "react";

import styles from "./Qual.module.scss";

interface Props {
    formattedTopicName: string;
    contentHtml: string;
}

export default class Qual extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <div className={styles.Topic}>
                <section>
                    <h1>{this.props.formattedTopicName}</h1>
                    <div dangerouslySetInnerHTML={{ __html: this.props.contentHtml }} />
                </section>
            </div>
        );
    }
}
