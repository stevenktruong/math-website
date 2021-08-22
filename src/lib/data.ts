import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Data } from "models/Data.model";

/**
 * Returns the contents of a directory as an array of strings
 * @param folderPath is the directory to be read
 */
export const readDirectoryContents = (folderPath: string): string[] => {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
};

/**
 * Separates a Markdown file into its metadata and content
 * @param filePath is the path to the Markdown file
 */
export const readMarkdown = (filePath: string): { content: string; meta: Record<string, any> } => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
        content: matterResult.content,
        meta: matterResult.data,
    };
};

/**
 * Instance of the data folder
 */
export default new Data(path.join(process.cwd(), "data"));
