import React from "react";

import { classFormatting } from "config/formatting";

import { formatQuarterYear } from "helpers";

import { FileData } from "types";

import styles from "./Class.module.scss";

interface ClassProps {
    fileData: FileData;
}

export default class Class extends React.Component<ClassProps> {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData!;
        const classData = {
            email: personalData.email,
            ...fileData.classData!,
        };

        return (
            <div className={styles.Class}>
                <section>
                    <h1>
                        {classData.course}: {classData.courseDescription}
                    </h1>
                    <h3>{formatQuarterYear(classData.quarter, classData.year)}</h3>
                    <div className="tableContainer tableContainer--last-is-link">
                        <table id={styles.InfoTable}>
                            <tbody>
                                {Object.keys(classFormatting).map((key) => (
                                    <tr key={key}>
                                        <td key={`${key}Title`}>{classFormatting[key].title}</td>
                                        <td key={`${key}Content`}>{classFormatting[key].format(classData)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <div dangerouslySetInnerHTML={{ __html: classData.contentHtml }} />
                {/* {classNotes.length ? (
                    <section>
                        <h2>Notes</h2>
                        <ul>
                            {classNotes.map(classNote => (
                                <li key={classNote.noteName}>
                                    <Link
                                        href="/teaching/[...classNote]"
                                        as={`/teaching/${classData.classCode}/${classNote.noteName}`}
                                        key={`${classNote}Link`}
                                    >
                                        <a key={`${classNote}Anchor`}>{classNote.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null} */}
            </div>
        );
    }
}
