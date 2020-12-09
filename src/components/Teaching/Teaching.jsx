import Link from "next/link";
import { formatQuarterYear, formatCourseWithDescription, customSortOrder } from "helpers";
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
                    <table>
                        <tbody>
                            {/* Generate table of classes */}
                            {Object.keys(classesDataByQuarter)
                                .sort()
                                .reverse() // Most recent classes first
                                .map(year => (
                                    <React.Fragment key={`${year}`}>
                                        {Object.keys(classesDataByQuarter[year])
                                            .sort(customSortOrder(["Fall", "Spring", "Winter"])) // Most recent classes first
                                            .map((quarter, i) => (
                                                <React.Fragment key={`${year}${quarter}Fragment`}>
                                                    {/* Each row corresponds to a quarter */}
                                                    <tr key={`${year}${quarter}`}>
                                                        <td key={`${year}${quarter}KeyYear`}>
                                                            {i === 0 ? `20${year}` : null}
                                                        </td>
                                                        <td key={`${year}${quarter}Key`}>{quarter}</td>

                                                        {/* Link of links to classes for a particular quarter */}
                                                        <td key={`${year}${quarter}KeyClasses`}>
                                                            {classesDataByQuarter[year][quarter].map((classData, i) => (
                                                                <div key={`${year}${quarter}Class${i}`}>
                                                                    <Link
                                                                        href={"/teaching/[classCode]"}
                                                                        as={`/teaching/${classData.classCode}`}
                                                                        key={`${year}${quarter}Class${i}Link`}
                                                                    >
                                                                        <a key={`${year}${quarter}Class${i}Anchor`}>
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
                                    </React.Fragment>
                                ))}{" "}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}
