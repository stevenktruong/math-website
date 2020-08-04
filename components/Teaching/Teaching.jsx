import Link from "next/link";
import styles from "./Teaching.module.css";

export default class Teaching extends React.Component {
    render() {
        const classesData = this.props.classesData;
        const firstQuarterYear = {
            year: classesData[0].year,
            quarter: classesData[0].quarter,
        };

        const classesDataByYear = {};
        classesData.reduce((acc, cur) => {
            const key = `${acc.quarter} 20${acc.year}`;
            if (!classesDataByYear[key]) {
                classesDataByYear[key] = [];
            }

            if (cur.year === acc.year && cur.quarter === acc.quarter) {
                classesDataByYear[key].push(cur);
            }

            return {
                year: cur.year,
                quarter: cur.quarter,
            };
        }, firstQuarterYear);

        return (
            <section className={styles.Teaching}>
                <h2>Teaching</h2>
                <table>
                    <tbody>
                        {Object.keys(classesDataByYear).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}`}>{key}</td>
                                <td key={`${key}Classes`}>
                                    {classesDataByYear[key].map((classData, i) => (
                                        <React.Fragment key={`${key}Class${i}`}>
                                            <Link href={`/teaching/${classData.classCode}`}>
                                                <a>MATH {classData.course}</a>
                                            </Link>
                                            <br />
                                        </React.Fragment>
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
