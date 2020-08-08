import Link from "next/link";

import contact from "config/contact.json";
import { formatCourseTitle, formatQuarterYear } from "helpers";

import styles from "./Class.module.scss";

const displayClassInformation = {
    instructor: {
        title: "Instructor",
        format: classData => (
            <a href={classData.instructorUrl} target="_blank">
                {classData.instructor}
            </a>
        ),
    },
    sections: {
        title: "Sections",
        format: classData =>
            classData.discussions.map(discussion => (
                <div>
                    {discussion.section}: {discussion.time}, {discussion.location}
                </div>
            )),
    },
    email: {
        title: "E-mail",
        format: classData => contact.email.value,
    },
    officeHours: {
        title: "Office Hours",
        format: classData =>
            classData.discussions.map(discussion => (
                <div>
                    {discussion.section}: {discussion.time}, {discussion.location}
                </div>
            )),
    },
    links: {
        title: "Links",
        format: classData =>
            classData.links.map(link => (
                <div>
                    <a href={link.url} target="_blank">
                        {link.title}
                    </a>
                </div>
            )),
    },
};

export default class Contact extends React.Component {
    render() {
        const classData = this.props.classData;
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
                                    <td key={`${key}content`}>{displayClassInformation[key].format(classData)}</td>
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
                                    >
                                        <a>{classNote.title}</a>
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
