import React from "react";

import { FileData } from "types";

import styles from "./Note.module.scss";

interface Props {
    fileData: FileData;
}

export default class Note extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const noteData = fileData.noteData!;

        return (
            <section className={styles.Note}>
                <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
            </section>
        );
    };
}
