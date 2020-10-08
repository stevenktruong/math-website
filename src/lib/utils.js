import fs from "fs";
import path from "path";
import remark from "remark";
import matter from "gray-matter";
import highlight from "rehype-highlight";
import math from "remark-math";
import katex from "rehype-katex";
import rehype2react from "rehype-react";
import remark2rehype from "remark-rehype";
import stringify from "rehype-stringify";
import raw from "rehype-raw";

export const dataDirectory = path.join(process.cwd(), "data");

/**
 * Replace {{ variable }} with value
 */
export const substituteVariables = (input, variables) => {
    return Object.keys(variables).reduce(
        (acc, key) => acc.replace(new RegExp(`\{{2} ${key} \}{2}`, "g"), variables[key]),
        input
    );
};

/**
 * Parse the math macros file for a set of class notes
 */
export const getMathMacros = classCode => {
    const macrosPath = path.join(dataDirectory, `classes/${classCode}/macros.json`);

    if (!fs.existsSync(macrosPath)) return {};

    const fileContents = fs.readFileSync(macrosPath, "utf-8");
    return JSON.parse(fileContents);
};

export const baseProcessor = () => remark().use(remark2rehype, { allowDangerousHtml: true }).use(raw).use(stringify);

export const processorWithMathForClassCode = classCode =>
    remark()
        .use(math)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex, {
            trust: true,
            strict: false,
            macros: getMathMacros(classCode),
        })
        .use(highlight)
        .use(raw)
        .use(stringify);

export const readDirectoryContents = folderPath => {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
};

export const readMarkdown = filePath => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
        contents: matterResult.content,
        meta: matterResult.data,
    };
};
