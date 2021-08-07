import path from "path";

import { readDirectoryContents, readMarkdown } from "lib/data";

import { MarkdownFile } from "types";

import { Class } from "./Class.model";
import { Qual } from "./Qual.model";

/**
 * Represents the data folder
 */
export class Data {
    static PERSONAL_FILE = "personal.md";
    static CLASSES_DIR = "classes";
    static QUALS_DIR = "quals";

    constructor(dataPath: string) {
        this.personal = new Personal(path.join(dataPath, Data.PERSONAL_FILE));

        this.classes = {};
        readDirectoryContents(path.join(dataPath, Data.CLASSES_DIR)).forEach((classDirectoryName) => {
            this.classes[classDirectoryName] = new Class(path.join(dataPath, Data.CLASSES_DIR, classDirectoryName));
        });

        this.quals = {};
        readDirectoryContents(path.join(dataPath, Data.QUALS_DIR)).forEach(
            (qualDirectoryName) =>
                (this.quals[qualDirectoryName] = new Qual(path.join(dataPath, Data.QUALS_DIR, qualDirectoryName)))
        );
    }

    personal: Personal;
    classes: Record<string, Class>;
    quals: Record<string, Qual>;
}

export class Personal implements MarkdownFile {
    constructor(personalPath: string) {
        const { content, meta } = readMarkdown(personalPath);
        this.content = content;
        this.meta = meta as Personal["meta"];
    }

    content: string;
    meta: {
        fullName: string;
        pronouns: string;
        office: string;
        email: string;
        address: string[];
        fax: string;
    };
}
