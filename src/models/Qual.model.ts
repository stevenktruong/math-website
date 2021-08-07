import fs from "fs";
import path from "path";

import { readDirectoryContents, readMarkdown } from "lib/data";

import { MarkdownFile, Quarter } from "types";

export class Qual {
    static INDEX_FILE = "index.md";
    static MACROS_FILE = "macros.json";
    static EXAMS_DIR = "exams";

    constructor(qualPath: string) {
        this.topic = path.parse(qualPath).base;
        this.index = new QualIndex(path.join(qualPath, Qual.INDEX_FILE));
        this.macros = JSON.parse(fs.readFileSync(path.join(qualPath, Qual.MACROS_FILE), "utf8"));
        this.exams = {};
        readDirectoryContents(path.join(qualPath, Qual.EXAMS_DIR)).forEach(
            (examDirectoryName) =>
                (this.exams[examDirectoryName] = new Exam(path.join(qualPath, Qual.EXAMS_DIR, examDirectoryName)))
        );
    }

    topic: string; // Folder name

    index: QualIndex;
    macros: JSON;
    exams: Record<string, Exam>;
}

export class QualIndex implements MarkdownFile {
    constructor(qualIndexPath: string) {
        const { content, meta } = readMarkdown(qualIndexPath);
        this.content = content;
        this.meta = meta as QualIndex["meta"];
    }

    content: string;
    meta: {
        title: string; // Display name
    };
}

export class Exam {
    constructor(examPath: string) {
        const examCode = path.parse(examPath).name;
        const match = examCode.match(/^([0-9]{2})([fs])$/)!;

        this.year = Number(match[1]);
        this.quarter = match[2] as Quarter;
        this.problems = {};
        readDirectoryContents(examPath).map(
            (problemFileName) =>
                (this.problems[Number(path.parse(problemFileName).name)] = new Problem(
                    path.join(examPath, problemFileName)
                ))
        );
    }

    // Information contained just from the folder name
    year: number;
    quarter: Quarter;

    problems: Record<number, Problem>;
}

export class Problem implements MarkdownFile {
    constructor(problemPath: string) {
        const { content, meta } = readMarkdown(problemPath);
        this.content = content;
        this.meta = meta as Problem["meta"];
    }

    content: string;
    meta: {
        topics: string[];
    };
}
