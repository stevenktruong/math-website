import Link from "next/link";
import { formatQuarterYear, formatCourseWithDescription } from "helpers";
import styles from "./Teaching.module.scss";

export default class Teaching extends React.Component {
    /**
     * Create an object of the following form:
     *
     *   {
     *       "2020": {
     *           "Fall": [ classData ]
     *       }
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
                if (!classesDataByQuarter[cur.year]) {
                    classesDataByQuarter[cur.year] = {};
                }

                if (!classesDataByQuarter[cur.year][cur.quarter]) {
                    classesDataByQuarter[cur.year][cur.quarter] = [];
                }

                classesDataByQuarter[cur.year][cur.quarter].push(cur);

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
                <h1>Teaching</h1>
                <div className="tableContainer tableContainer--last-is-link">
                    {Object.keys(classesDataByQuarter).map(year => (
                        <>
                            <h2>20{year}</h2>
                            <table>
                                <tbody>
                                    {Object.keys(classesDataByQuarter[year]).map(quarter => (
                                        <React.Fragment key={`${year}${quarter}Fragment`}>
                                            <tr key={`${year}${quarter}`}>
                                                <td key={`${year}${quarter}Key`}>{quarter}</td>
                                                <td key={`${year}${quarter}KeyClasses`}>
                                                    {classesDataByQuarter[year][quarter].map((classData, i) => (
                                                        <div key={`${year}${quarter}Class${i}`}>
                                                            <Link
                                                                href={"/teaching/[classCode]"}
                                                                as={`/teaching/${classData.classCode}`}
                                                            >
                                                                <a>
                                                                    {formatCourseWithDescription(
                                                                        classData.course,
                                                                        classData.courseDescription
                                                                    )}
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ))}
                </div>
            </section>
        );
    }
}
