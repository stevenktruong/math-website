import Link from "next/link";
import { formatCourseTitle, formatQuarterYear } from "helpers";
import styles from "./Note.module.scss";

export default class Note extends React.Component {
    render() {
        const classData = this.props.classData;
        const noteData = this.props.noteData;
        return (
            <section className={styles.Note}>
                <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
            </section>
        );
    }
}
