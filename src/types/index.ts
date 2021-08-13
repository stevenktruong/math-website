/**
 * Represents a read Markdown file
 */
export interface MarkdownFile {
    content: string;
    meta: Record<string, any>;
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

export type Quarter = "f" | "w" | "s";

/**
 * Specifies how data should be formatted into a table
 */
export interface TableFormatting {
    [key: string]: {
        title: string | null;
        format: (data?: any) => string | JSX.Element | JSX.Element[];
    };
}
