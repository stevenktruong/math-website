export interface ClassData {
    classCode: ClassCode;

    year: string;
    quarter: string;
    courseNumber: string;
    lecture: string;

    contentHtml: string;

    course: string;
    courseDescription: string;
    section: string;
    instructor: string;
    instructorUrl: string;
    discussions: Discussion[];
    officeHours: OfficeHours[];
    links: Links[];
}

export type ClassCode = `${number}${string}.${number}${string}.${number}`;

export interface ParsedClassCode {
    year: string;
    quarter: string;
    courseNumber: string;
    lecture: string;
}

export interface Discussion {
    section: string;
    days: string;
    time: string;
    location: string;
    link: string;
}

export interface OfficeHours {
    section: string;
    days: string;
    time: string;
    location: string;
    link: string;
}

export interface Links {
    title: string;
    url: string;
}
