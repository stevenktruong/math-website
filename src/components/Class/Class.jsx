import Link from "next/link";
import contactInformation from "config/contactInformation.json";
import styles from "./Class.module.scss";

export default class Contact extends React.Component {
    render() {
        const classData = this.props.classData;
        const classNotes = this.props.classNotes;
        return (
            <section className={styles.Class}>
                <h2>
                    MATH {classData.course.toUpperCase()}: {classData.courseDescription}
                </h2>
                <h3>
                    {classData.quarter} 20{classData.year}
                </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Instructor</td>
                            <td>
                                <a href={classData.instructorUrl}>{classData.instructor}</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Sections</td>
                            <td>
                                {classData.discussions.map(discussion => (
                                    <div>
                                        {discussion.section}: {discussion.time}, {discussion.location}
                                    </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>{contactInformation.email.value}</td>
                        </tr>
                        <tr>
                            <td>Office Hours</td>
                            <td>
                                {classData.officeHours.map(officeHour => (
                                    <div>
                                        {officeHour.section}: {officeHour.time}, {officeHour.location}
                                    </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Links</td>
                            <td>
                                {classData.links.map(link => (
                                    <div>
                                        <a href={link.url} target="_blank">
                                            {link.title}
                                        </a>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            </section>
        );
    }
}
