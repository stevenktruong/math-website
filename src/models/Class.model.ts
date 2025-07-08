import fs from "fs";
import path from "path";

import { readDirectoryContents } from "lib/data";

import { ClassCode, Link, MarkdownFile, Quarter } from "types";

export class Class {
    static INDEX_FILE = "index.md";
    static MACROS_FILE = "macros.json";
    static NOTES_DIR = "notes";

    constructor(classPath: string) {
        // Read in data from the name of the class folder
        this.classCode = path.parse(classPath).base as Class["classCode"]; // E.g., 20f.31b.1
        const match = this.classCode.match(/^([0-9]{2})([fwsa])\.([0-9]{1,3}[a-z]{0,2})\.([0-9]{1,2})$/)!;

        this.year = Number(match[1]);
        this.quarter = match[2] as Class["quarter"];
        this.course = match[3];
        this.lecture = Number(match[4]);

        // Read in data from the folder contents
        this.index = new ClassIndex(path.join(classPath, Class.INDEX_FILE));
        this.macros = JSON.parse(fs.readFileSync(path.join(classPath, Class.MACROS_FILE), "utf8"));
        this.notes = {};
        readDirectoryContents(path.join(classPath, Class.NOTES_DIR))
            .filter((noteFileName) => noteFileName.endsWith(".md"))
            .map(
                (noteFileName) =>
                    (this.notes[path.parse(noteFileName).name] = new Note(
                        path.join(classPath, Class.NOTES_DIR, noteFileName)
                    ))
            );
    }

    // Information contained just from the folder name
    classCode: ClassCode;
    year: number;
    quarter: Quarter;
    course: string;
    lecture: number;

    index: ClassIndex;
    macros: JSON;
    notes: Record<string, Note>;
}

export interface Meeting {
    section: string;
    days: string;
    time: `${string} - ${string}`;
    location: string;
    link?: URL;
}

export class ClassIndex extends MarkdownFile<{
    course: `${string} ${string}`;
    courseDescription: string;
    section: string;
    instructor: string;
    instructorUrl: URL;
    discussions: Meeting[];
    officeHours: Meeting[];
    links: Link[];
}> {}

export class Note extends MarkdownFile<{
    title: string;
    date: Date;
    tags: string[];
    publish: boolean;
}> {}
