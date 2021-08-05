import React from "react";

import { formatQuarterYear } from "helpers";

import { ClassData } from "models/ClassData.model";
import { NoteData } from "models/NoteData.model";
import { PersonalData } from "models/PersonalData.model";
import { ProblemData } from "models/ProblemData.model";
import { TopicData } from "models/TopicData.model";

// Specify how to transform data into text/HTML

/**
 * Specifies how data should be formatted into a breadcrumb
 */
export interface BreadcrumbFormatting {
    [key: string]: {
        sourceProp: string | null;
        format: (data?: any) => string;
    };
}

/**
 * Specifies how data should be formatted into a table
 */
export interface TableFormatting {
    [key: string]: {
        title: string | null;
        format: (data?: any) => string | JSX.Element | JSX.Element[];
    };
}

/**
 * Specifies how MTWRF should be formatted in office hours and discussions lists, e.g., MT -> MoTu, but for now, we just fix the letters
 */
export const daysOfTheWeekTable: Record<string, string> = {
    U: "U",
    M: "M",
    T: "T",
    W: "W",
    R: "R",
    F: "F",
    S: "S",
};

/**
 * Specifies the links in the navigation bar/hamburger menu
 */
export const navLinks: Record<string, Record<string, string>> = {
    home: {
        title: "Home",
        href: "/",
    },
    teaching: {
        title: "Teaching",
        href: "/teaching",
    },
    quals: {
        title: "Qualifying Exams",
        href: "/quals",
    },
    cv: {
        title: "CV",
        href: "/files/cv.pdf",
    },
};

/**
 * Converts a string of days to use their display day, e.g., MTR -> MoTuTh
 * @param {string} days
 */
export const daysOfTheWeekFormatting = (days: string): string => {
    return days
        .split("")
        .map((day) => daysOfTheWeekTable[day])
        .join("");
};

/**
 * Transforms a list of tags (i.e., topics covered in a note) into custom HTML
 * @param {string[]} tags
 */
export const noteTagsFormatting: (tags: string[]) => string = (tags) =>
    tags
        ? `<div class="note-tag-container">${tags
              .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
              .map((tag) => `<span>${tag}</span>`)
              .join(", ")}</div>`
        : "";

/**
 * Transforms a list of topics (i.e., topics used for a qual problem) into custom HTML
 * @param {string[]} tags
 */
export const problemTopicsFormatting: (topics: string[]) => string = (topics) =>
    topics
        ? `<div class="problem-topics-container">${topics
              .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
              .map((topic) => `<span>${topic}</span>`)
              .join(", ")}</div>`
        : "";

export const breadcrumbFormatting: BreadcrumbFormatting = {
    teaching: {
        sourceProp: null,
        format: () => "Teaching",
    },
    classCode: {
        sourceProp: "classData",
        format: (classData: ClassData) =>
            `${classData.course} (${formatQuarterYear(classData.quarter, classData.year)})`,
    },
    noteName: {
        sourceProp: "noteData",
        format: (noteData: NoteData) => noteData.title,
    },
    quals: {
        sourceProp: null,
        format: () => "Qualifying Exams",
    },
    topic: {
        sourceProp: "topicData",
        format: (topicData: TopicData) => topicData.title,
    },
    problemCode: {
        sourceProp: "problemData",
        format: (problemData: ProblemData) =>
            `${formatQuarterYear(problemData.quarter, problemData.year)} - Problem ${problemData.problemNumber}`,
    },
};

/**
 * Specifies how the contact table should be formatted
 */
export const contactFormatting: TableFormatting = {
    office: {
        title: "Office",
        format: (personalData: PersonalData) => personalData.office,
    },
    email: {
        title: "E-mail",
        format: (personalData: PersonalData) => personalData.email,
    },
    address: {
        title: "Address",
        format: (personalData: PersonalData) =>
            personalData.address.map((line, i) => <div key={`addressLine${i}`}>{line}</div>),
    },
    fax: {
        title: "Fax",
        format: (personalData: PersonalData) => personalData.fax,
    },
};

/**
 * Specifies how the class information table should be displayed
 */
export const classFormatting: TableFormatting = {
    instructor: {
        title: "Instructor",
        format: (classData: ClassData) => (
            <a href={classData.instructorUrl} key="instructorLink">
                {classData.instructor}
            </a>
        ),
    },
    sections: {
        title: "Sections",
        format: (classData: ClassData) =>
            classData.discussions.map((discussion) => (
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
        format: (classData: ClassData) =>
            classData.officeHours.map((officeHour) => (
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
        format: (personalData: PersonalData) => personalData.email,
    },
    links: {
        title: "Links",
        format: (classData: ClassData) =>
            classData.links.map((link, index) => (
                <div key={`linksDiv${index}`}>
                    <a href={link.url} key={`linksAnchor${index}`}>
                        {link.title}
                    </a>
                </div>
            )),
    },
};
