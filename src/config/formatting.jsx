import { formatQuarterYear } from "helpers";

// Transform data into formatted text/HTML

export const daysOfTheWeekTable = {
    U: "U",
    M: "M",
    T: "T",
    W: "W",
    R: "R",
    F: "F",
    S: "S",
};

/**
 * Converts a string of days to use their display day, e.g., MTR -> MoTuTh
 * @param {string} days
 */
export const daysOfTheWeekFormatting = days => {
    return Object.keys(daysOfTheWeekTable).reduce((acc, cur) => {
        return acc.replace(new RegExp(`${cur}`), daysOfTheWeekTable[cur]);
    }, days);
};

export const breadcrumbFormatting = {
    teaching: {
        sourceProp: null,
        format: () => "Teaching",
    },
    classCode: {
        sourceProp: "classData",
        format: classData => `${classData.course} (${formatQuarterYear(classData.quarter, classData.year)})`,
    },
    noteName: {
        sourceProp: "noteData",
        format: noteData => noteData.title,
    },
};

export const contactFormatting = {
    office: {
        title: "Office",
        format: personalData => personalData.office,
    },
    email: {
        title: "E-mail",
        format: personalData => personalData.email,
    },
    address: {
        title: "Address",
        format: personalData => personalData.address.map((line, i) => <div key={`addressLine${i}`}>{line}</div>),
    },
    fax: {
        title: "Fax",
        format: personalData => personalData.fax,
    },
};

export const classFormatting = {
    instructor: {
        title: "Instructor",
        format: classData => (
            <a href={classData.instructorUrl} key="instructorLink">
                {classData.instructor}
            </a>
        ),
    },
    sections: {
        title: "Sections",
        format: classData =>
            classData.discussions.map(discussion => (
                <table key={`${discussion.section}DiscussionTable`}>
                    <tbody key={`${discussion.section}DiscussionTableBody`}>
                        <tr key={`${discussion.section}Discussion`}>
                            <td key={`${discussion.section}DiscussionSection`}>{discussion.section}</td>
                            <td key={`${discussion.section}DiscussionDay`}>
                                {daysOfTheWeekFormatting(discussion.days)}
                            </td>
                            <td key={`${discussion.section}DiscussionTime`}>{discussion.time}</td>
                            <td key={`${discussion.section}DiscussionLocation`}>{discussion.location}</td>
                        </tr>
                    </tbody>
                </table>
            )),
    },
    officeHours: {
        title: "Office Hours",
        format: classData =>
            classData.officeHours.map(officeHour => (
                <table key={`${officeHour.section}OfficeHoursTable`}>
                    <tbody key={`${officeHour.section}OfficeHoursTableBody`}>
                        <tr key={`${officeHour.section}OfficeHours`}>
                            <td key={`${officeHour.section}OfficeHoursSection`}>{officeHour.section}</td>
                            <td key={`${officeHour.section}OfficeHoursDay`}>
                                {daysOfTheWeekFormatting(officeHour.days)}
                            </td>
                            <td key={`${officeHour.section}OfficeHoursTime`}>{officeHour.time}</td>
                            <td key={`${officeHour.section}OfficeHoursLocation`}>{officeHour.location}</td>
                        </tr>
                    </tbody>
                </table>
            )),
    },
    email: {
        title: "E-mail",
        format: personalData => personalData.email,
    },
    links: {
        title: "Links",
        format: classData =>
            classData.links.map((link, index) => (
                <div key={`linksDiv${index}`}>
                    <a href={link.url} key={`linksAnchor${index}`}>
                        {link.title}
                    </a>
                </div>
            )),
    },
};
