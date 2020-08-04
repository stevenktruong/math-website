import styles from "./Class.module.css";

export default class Contact extends React.Component {
    render() {
        const classData = this.props.classData;
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
                            <td>Discussion Section</td>
                            <td>{classData.discussion.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td>Discussion Time</td>
                            <td>{classData.discussionTime}</td>
                        </tr>
                        <tr>
                            <td>Discussion Location</td>
                            <td>{classData.location}</td>
                        </tr>
                        <tr>
                            <td>Office Hours</td>
                            <td>
                                {classData.myOfficeHours}
                                <br />
                                {classData.myOffice}
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
            </section>
        );
    }
}
