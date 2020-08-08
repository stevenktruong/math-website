import Link from "next/link";
import { formatCourseTitle, formatQuarterYear } from "helpers";
import styles from "./Class.module.scss";

const displayClassInformation = {
    instructor: {
        title: "Instructor",
        format: classData => (
            <a href={classData.instructorUrl} key="instructorLink">
                {classData.instructor}
            </a>
        ),
    },
    sections: {
        title: "Sections",
        format: classData =>
            classData.discussions.map(
                discussion => `${discussion.section}: ${discussion.time}, ${discussion.location}`
            ),
    },
    email: {
        title: "E-mail",
        format: personalData => personalData.email,
    },
    officeHours: {
        title: "Office Hours",
        format: classData =>
            classData.discussions.map(
                discussion => `${discussion.section}: ${discussion.time}, ${discussion.location}`
            ),
    },
    links: {
        title: "Links",
        format: classData =>
            classData.links.map((link, index) => (
                <div key={`linksDiv${index}`}>
                    <a href={link.url} key={`linksAnchor${index}`}>
                        {link.title}
                    </a>
                </div>
            )),
    },
};

export default class Class extends React.Component {
    render() {
        const personalData = this.props.personalData;
        const classData = {
            email: personalData.email,
            ...this.props.classData,
        };
        const classNotes = this.props.classNotes;
        return (
            <div className={styles.Class}>
                <section>
                    <h2>
                        {formatCourseTitle(classData.course)}: {classData.courseDescription}
                    </h2>
                    <h3>{formatQuarterYear(classData.quarter, classData.year)}</h3>
                    <table>
                        <tbody>
                            {Object.keys(displayClassInformation).map(key => (
                                <tr key={key}>
                                    <td key={`${key}Title`}>{displayClassInformation[key].title}</td>
                                    <td key={`${key}Content`}>{displayClassInformation[key].format(classData)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <div dangerouslySetInnerHTML={{ __html: classData.contentHtml }} />
                {classNotes.length ? (
                    <section>
                        <h3>Notes</h3>
                        <ul>
                            {classNotes.map(classNote => (
                                <li key={classNote.noteName}>
                                    <Link
                                        href="/teaching/[...classNote]"
                                        as={`/teaching/${classData.classCode}/${classNote.noteName}`}
                                        key={`${classNote}Link`}
                                    >
                                        <a key={`${classNote}Anchor`}>{classNote.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </div>
        );
    }
}
