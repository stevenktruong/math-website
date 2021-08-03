import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Options } from "hast-util-raw";
import { Plugin } from "unified";
import unified from "unified";

import remark from "remark";
// @ts-ignore
import highlight from "remark-highlight.js";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import slug from "remark-slug";
import toc from "remark-toc";

import katex from "rehype-katex";
import raw from "rehype-raw";
import stringify from "rehype-stringify";

import { ClassCode } from "models/ClassData.model";

import { MarkdownFile } from "types";

export const dataDirectory = path.join(process.cwd(), "data");

/**
 * Replace {{ variable }} with value
 * @param input is the input to be modified
 * @param variables is a map containing the desired substitutions
 */
export const substituteVariables: (input: string, variables: Record<string, string>) => string = (input, variables) => {
    return Object.keys(variables).reduce(
        (acc, key) => acc.replace(new RegExp(`\{{2} ${key} \}{2}`, "g"), variables[key]),
        input
    );
};

/**
 * Parse the math macros file into a Javascript object
 * @param macrosPath is the path to the desired math macros
 */
export const getMathMacros: (macrosPath: string) => string = (macrosPath) => {
    if (!fs.existsSync(macrosPath)) return {};

    const fileContents = fs.readFileSync(macrosPath, "utf-8");
    return JSON.parse(fileContents);
};

/**
 * Returns a processor that does the bare-bones Markdown -> HTML conversion
 */
export const baseProcessor: () => unified.Processor<remark.RemarkOptions> = () =>
    remark().use(remark2rehype, { allowDangerousHtml: true }).use(raw).use(stringify);

/**
 * Returns a processor with qual topic-specific math macros included in the Markdown -> HTML conversion
 * @param topic is the qual topic the macros correspond to
 */
export const processorWithMathForTopic: (topic: string) => unified.Processor<remark.RemarkOptions> = (topic) =>
    remark()
        .use(toc, { maxDepth: 3 })
        .use(slug)
        .use(math)
        .use(highlight as Plugin<[Options?]>)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex, {
            trust: true,
            strict: false,
            macros: getMathMacros(path.join(dataDirectory, `quals/${topic}/macros.json`)),
        })
        .use(raw)
        .use(stringify);

/**
 * Returns a processor with class-specific math macros included in the Markdown -> HTML conversion
 * @param classCode denotes the class the macros correspond to
 */
export const processorWithMathForClassCode: (classCode: ClassCode) => unified.Processor<remark.RemarkOptions> = (
    classCode
) =>
    remark()
        .use(toc, { maxDepth: 3 })
        .use(slug)
        .use(math)
        .use(highlight as Plugin<[Options?]>)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex, {
            trust: true,
            strict: false,
            macros: getMathMacros(path.join(dataDirectory, `classes/${classCode}/macros.json`)),
        })
        .use(raw)
        .use(stringify);

/**
 * Returns the contents of a directory as an array of strings
 * @param folderPath is the directory to be read
 */
export const readDirectoryContents: (folderPath: string) => string[] = (folderPath) => {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
};

/**
 * Separates a Markdown file into its metadata and content
 * @param filePath is the path to the Markdown file
 */
export const readMarkdown: (filePath: string) => MarkdownFile = (filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
        contents: matterResult.content,
        meta: matterResult.data,
    };
};
