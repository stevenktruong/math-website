import React from "react";

import { daysOfTheWeekFormatting } from "config/formatting";

import { formatCourseWithDescription, formatQuarterYear } from "helpers";

import { Meeting } from "models/Class.model";

import { Link, Quarter, TableFormatting } from "types";

import styles from "./Class.module.scss";

interface Props {
    instructor: string;
    instructorUrl: URL;
    sections: Meeting[];
    officeHours: Meeting[];
    email: string;
    links: Link[];

    year: number;
    quarter: Quarter;
    course: string;
    courseDescription: string;
    contentHtml: string;
}

/**
 * Specifies how the class information table should be displayed
 */
const classFormatting: TableFormatting = {
    instructor: {
        title: "Instructor",
        format: (props: Props) => (
            <a href={props.instructorUrl.href} key="instructorLink">
                {props.instructor}
            </a>
        ),
    },
    sections: {
        title: "Sections",
        format: (props: Props) =>
            props.sections.map((discussion) => (
                <table key={`${discussion.section}DiscussionTable`}>
                    <tbody key={`${discussion.section}DiscussionTableBody`}>
                        <tr key={`${discussion.section}Discussion`}>
                            <td key={`${discussion.section}DiscussionSection`}>{discussion.section}</td>
                            <td key={`${discussion.section}DiscussionDay`}>
                                {daysOfTheWeekFormatting(discussion.days)}
                            </td>
                            <td key={`${discussion.section}DiscussionStart`}>{discussion.time.split("-")[0].trim()}</td>
                            <td key={`${discussion.section}DiscussionTimeHyphen`}>-</td>
                            <td key={`${discussion.section}DiscussionEnd`}>{discussion.time.split("-")[1].trim()}</td>
                            <td key={`${discussion.section}DiscussionLocation`}>
                                {discussion.link ? (
                                    <a href={`${discussion.link}`} key={`${discussion.section}DiscussionLocationLink`}>
                                        {discussion.location}
                                    </a>
                                ) : (
                                    discussion.location
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )),
    },
    officeHours: {
        title: "Office Hours",
        format: (props: Props) =>
            props.officeHours.map((officeHour) => (
                <table key={`${officeHour.section}OfficeHoursTable`}>
                    <tbody key={`${officeHour.section}OfficeHoursTableBody`}>
                        <tr key={`${officeHour.section}OfficeHours`}>
                            <td key={`${officeHour.section}OfficeHoursSection`}>{officeHour.section}</td>
                            <td key={`${officeHour.section}OfficeHoursDay`}>
                                {daysOfTheWeekFormatting(officeHour.days)}
                            </td>
                            <td key={`${officeHour.section}OfficeHoursStart`}>
                                {officeHour.time.split("-")[0].trim()}
                            </td>
                            <td key={`${officeHour.section}OfficeHoursTimeHyphen`}>-</td>
                            <td key={`${officeHour.section}OfficeHoursEnd`}>{officeHour.time.split("-")[1].trim()}</td>
                            <td key={`${officeHour.section}OfficeHoursLocation`}>
                                {" "}
                                {officeHour.link ? (
                                    <a href={`${officeHour.link}`} key={`${officeHour.section}OfficeHoursLocationLink`}>
                                        {officeHour.location}
                                    </a>
                                ) : (
                                    officeHour.location
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )),
    },
    email: {
        title: "E-mail",
        format: (props: Props) => props.email,
    },
    links: {
        title: "Links",
        format: (props: Props) =>
            props.links.map((link, index) => (
                <div key={`linksDiv${index}`}>
                    <a href={link.url.href} key={`linksAnchor${index}`}>
                        {link.title}
                    </a>
                </div>
            )),
    },
};

export default class Class extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <div className={styles.Class}>
                <section>
                    <h1>{formatCourseWithDescription(this.props.course, this.props.courseDescription)}</h1>
                    <h3>{formatQuarterYear(this.props.quarter, this.props.year)}</h3>
                    <div className="tableContainer tableContainer--last-is-link">
                        <table id={styles.InfoTable}>
                            <tbody>
                                {Object.keys(classFormatting).map((key) => (
                                    <tr key={key}>
                                        <td key={`${key}Title`}>{classFormatting[key].title}</td>
                                        <td key={`${key}Content`}>{classFormatting[key].format(this.props)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <div dangerouslySetInnerHTML={{ __html: this.props.contentHtml }} />
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
