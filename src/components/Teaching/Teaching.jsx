import Link from "next/link";
import styles from "./Teaching.module.css";

export default class Teaching extends React.Component {
    render() {
        const classesData = this.props.classesData;
        const classesDataByYear = {};

        if (classesData.length) {
            const firstQuarterYear = {
                year: classesData[0].year,
                quarter: classesData[0].quarter,
            };

            classesData.reduce((acc, cur) => {
                const key = `${cur.quarter} 20${cur.year}`;
                if (!classesDataByYear[key]) {
                    classesDataByYear[key] = [];
                }

                if (cur.year === acc.year && cur.quarter === acc.quarter) {
                    classesDataByYear[key].push(cur);
                } else {
                    classesDataByYear[key] = [cur];
                }

                return {
                    year: cur.year,
                    quarter: cur.quarter,
                };
            }, firstQuarterYear);
        }

        return (
            <section className={styles.Teaching}>
                <h2>Teaching</h2>
                <table>
                    <tbody>
                        {Object.keys(classesDataByYear).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Quarter`}>{key}</td>
                                <td key={`${key}Classes`}>
                                    {classesDataByYear[key].map((classData, i) => (
                                        <div key={`${key}Class${i}`}>
                                            <Link
                                                href={"/teaching/[classCode]"}
                                                as={`/teaching/${classData.classCode}`}
                                            >
                                                <a>MATH {classData.course.toUpperCase()}</a>
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
