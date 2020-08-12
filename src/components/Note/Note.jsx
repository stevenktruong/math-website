import styles from "./Note.module.scss";

export default class Note extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const classData = fileData.classData;
        const noteData = fileData.noteData;
        return (
            <section className={styles.Note}>
                <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
            </section>
        );
    }
}
