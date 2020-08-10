import Link from "next/link";
import { formatCourseTitle, formatQuarterYear } from "helpers";
import styles from "./Teaching.module.scss";

export default class Teaching extends React.Component {
    /**
     * Create an object of the following form:
     *
     *   {
     *       "Fall 2020": [ classData ]
     *   }
     */
    createMapFromQuarterToClasses = () => {
        const fileData = this.props.fileData;
        const classesData = fileData.classesData;
        const classesDataByQuarter = {};

        if (classesData.length) {
            const firstQuarterYear = {
                year: classesData[0].year,
                quarter: classesData[0].quarter,
            };

            classesData.reduce((acc, cur) => {
                const key = formatQuarterYear(cur.quarter, cur.year);
                if (!classesDataByQuarter[key]) {
                    classesDataByQuarter[key] = [];
                }

                if (cur.year === acc.year && cur.quarter === acc.quarter) {
                    classesDataByQuarter[key].push(cur);
                } else {
                    classesDataByQuarter[key] = [cur];
                }

                return {
                    year: cur.year,
                    quarter: cur.quarter,
                };
            }, firstQuarterYear);
        }

        return classesDataByQuarter;
    };

    render() {
        const classesData = this.props.classesData;
        const classesDataByQuarter = this.createMapFromQuarterToClasses();
        return (
            <section className={styles.Teaching}>
                <h2>Teaching</h2>
                <table>
                    <tbody>
                        {Object.keys(classesDataByQuarter).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Quarter`}>{key}</td>
                                <td key={`${key}Classes`}>
                                    {classesDataByQuarter[key].map((classData, i) => (
                                        <div key={`${key}Class${i}`}>
                                            <Link
                                                href={"/teaching/[classCode]"}
                                                as={`/teaching/${classData.classCode}`}
                                            >
                                                <a>{formatCourseTitle(classData.course)}</a>
                                            </Link>
                                            : {classData.courseDescription}
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
