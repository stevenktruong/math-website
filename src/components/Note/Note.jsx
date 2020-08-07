import Link from "next/link";
import styles from "./Note.module.scss";

export default class Note extends React.Component {
    render() {
        const classData = this.props.classData;
        const noteData = this.props.noteData;
        return (
            <section className={styles.Note}>
                <h2>
                    <Link href="/teaching/[classCode]" as={`/teaching/${classData.classCode}`}>
                        <a>
                            MATH {classData.course.toUpperCase()}, {classData.quarter} 20{classData.year}
                        </a>
                    </Link>
                </h2>
                <h3>{noteData.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
            </section>
        );
    }
}
