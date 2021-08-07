import React from "react";

import Link from "next/link";

import { formatCourseWithDescription, formatQuarter, sortQuarters } from "helpers";

import { ClassCode, Quarter } from "types";

import styles from "./Teaching.module.scss";

interface Props {
    sortedClassData: ClassData[]; // Sorted by year, then quarter, then course, then lecture number
}

interface ClassData {
    classCode: ClassCode;
    year: number;
    quarter: Quarter;
    course: string;
    courseDescription: string;
}

export default class Teaching extends React.Component<Props> {
    /**
     * Create an object of the following form:
     *
     *   {
     *       "2020": {
     *           "Fall": [ classData ]
     *       }
     *   }
     */
    createMapFromQuarterToClasses(): Record<number, Record<Quarter, ClassData[]>> {
        const classesDataByQuarter: Record<number, Record<Quarter, ClassData[]>> = {};

        const { sortedClassData } = this.props;
        if (sortedClassData.length) {
            const firstQuarterYear = {
                year: sortedClassData[0].year,
                quarter: sortedClassData[0].quarter,
            };

            sortedClassData.reduce((acc, cur) => {
                if (!classesDataByQuarter[cur.year]) {
                    classesDataByQuarter[cur.year] = {} as Record<Quarter, ClassData[]>;
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
    }

    render(): JSX.Element {
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
                                .map((year) => (
                                    <React.Fragment key={`${year}`}>
                                        {(Object.keys(classesDataByQuarter[Number(year)]) as Quarter[])
                                            .sort(sortQuarters)
                                            .reverse() // Most recent classes first
                                            .map((quarter: Quarter, i) => (
                                                <React.Fragment key={`${year}${quarter}Fragment`}>
                                                    {/* Each row corresponds to a quarter */}
                                                    <tr key={`${year}${quarter}`}>
                                                        <td key={`${year}${quarter}KeyYear`}>
                                                            {i === 0 ? `20${year}` : null}
                                                        </td>
                                                        <td key={`${year}${quarter}Key`}>{formatQuarter(quarter)}</td>

                                                        {/* Link of links to classes for a particular quarter */}
                                                        <td key={`${year}${quarter}KeyClasses`}>
                                                            {classesDataByQuarter[Number(year)][quarter].map(
                                                                (classData, i) => (
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
                                                                )
                                                            )}
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                    </React.Fragment>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}
