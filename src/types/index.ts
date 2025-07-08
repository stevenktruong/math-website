import { readMarkdown } from "lib/data";

/**
 * M represents the meta in the front matter of the Markdown file. The behavior of
 * this class determines whether data is lazy, singleton, etc.
 */
export class MarkdownFile<M extends Record<string, any>> {
    filePath: string;
    // content?: string;
    // meta?: M;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // readFile(): void {
    //     const { content, meta } = readMarkdown(this.filePath);
    //     this.content = content;
    //     this.meta = meta as M;
    // }

    getContent(): string {
        const { content } = readMarkdown(this.filePath);
        return content;
    }

    getMeta(): M {
        const { meta } = readMarkdown(this.filePath);
        return meta as M;
    }
}

/**
 * Represents a link via its presentation and the underlying URL
 */
export interface Link {
    title: string;
    url: URL;
}

/**
 * Uniquely identifies a class
 */
export type ClassCode = `${number}${string}.${number}${string}.${number}`;

export type Quarter = "f" | "w" | "s" | "a";

/**
 * Specifies how data should be formatted into a table
 */
export interface TableFormatting {
    [key: string]: {
        title: string | null;
        format: (data?: any) => string | JSX.Element | JSX.Element[];
    };
}
