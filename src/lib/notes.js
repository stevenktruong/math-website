import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import math from "remark-math";
import katex from "rehype-katex";
import remark2rehype from "remark-rehype";
import stringify from "rehype-stringify";
import moment from "moment";

import getConfig from "next/config";
import { getAllClassPaths } from "./classes";

const classesDirectory = path.join(process.cwd(), "classes");
const { publicRuntimeConfig = {} } = getConfig() || {};

export const getAllNotePaths = () => {
    const classCodes = getAllClassPaths();
    const classNotes = [];
    classCodes.forEach(classPath => {
        const notesDirectory = path.join(classesDirectory, `${classPath.params.classCode}/notes`);

        if (!fs.existsSync(notesDirectory)) return;

        const noteFileNames = fs.readdirSync(notesDirectory);
        classNotes.push(
            ...noteFileNames.map(noteFileName => {
                return {
                    params: {
                        classCode: classPath.params.classCode,
                        noteName: noteFileName.replace(/\.md$/, ""),
                    },
                };
            })
        );
    });

    return classNotes;
};

/**
 * Sorts from oldest to newest.
 * @param {string} classCode - classCode to get note data for
 */
export const getSortedNotesDataForClass = classCode => {
    const notesDirectory = path.join(classesDirectory, `${classCode}/notes`);

    if (!fs.existsSync(notesDirectory)) return [];

    const noteFileNames = fs.readdirSync(notesDirectory);
    return noteFileNames
        .map(noteFileName => {
            const fullPath = path.join(classesDirectory, `${classCode}/notes/${noteFileName}`);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            return {
                noteName: noteFileName.replace(/\.md$/, ""),
                ...matterResult.data,
            };
        })
        .sort((a, b) => moment(b).diff(moment(a)));
};

/**
 * Gets metadata and HTML (with math rendered) for a specified note.
 * @param {string} classCode - Class to get data for.
 * @param {string} noteName - Note name WITHOUT the extension .md.
 */
export const getNoteDataForClass = async (classCode, noteName) => {
    const fullPath = path.join(classesDirectory, `${classCode}/notes/${noteName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    const substitutedContent = substituteVariable(
        matterResult.content,
        "assetsFolder",
        `${publicRuntimeConfig.staticFolder}/images/${classCode}/${noteName}`
    );

    const contentHtml = await remark()
        .use(math)
        .use(remark2rehype)
        .use(katex, { macros: getMathMacros(classCode) })
        .use(stringify)
        .process(substitutedContent)
        .then(vfile => vfile.toString());

    return {
        noteName,
        contentHtml,
        ...matterResult.data,
    };
};

/**
 * Replace {{ variable }} with value
 */
const substituteVariable = (input, variable, value) => {
    return input.replace(new RegExp(`\{{2} ${variable} \}{2}`), value);
};

/**
 * Parse the math macros file for a set of class notes
 */
const getMathMacros = classCode => {
    const macrosPath = path.join(classesDirectory, `${classCode}/macros.json`);
    const fileContents = fs.readFileSync(macrosPath, "utf-8");
    return JSON.parse(fileContents);
};
