import React from "react";

import styles from "./Note.module.scss";

interface Props {
    contentHtml: string;
}

export default class Note extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <section className={styles.Note}>
                <div dangerouslySetInnerHTML={{ __html: this.props.contentHtml }} />
            </section>
        );
    }
}
