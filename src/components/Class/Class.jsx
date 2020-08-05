import Link from "next/link";
import contactInformation from "globals/contactInformation.json";
import styles from "./Class.module.css";

export default class Contact extends React.Component {
    render() {
        const classData = this.props.classData;
        const classNotes = this.props.classNotes;
        return (
            <section className={styles.Class}>
                <h2>
                    MATH {classData.course.toUpperCase()}, {classData.quarter} 20{classData.year}
                </h2>
                <h3>{classData.courseDescription}</h3>
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
                                    <>
                                        {discussion.section}: {discussion.time}, {discussion.location}
                                        <br />
                                    </>
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
                                    <>
                                        {officeHour.section}: {officeHour.time}, {officeHour.location}
                                        <br />
                                    </>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Class Website</td>
                            <td>
                                <a href={classData.classWebsite} target="_blank">
                                    {classData.classWebsite}
                                </a>
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
