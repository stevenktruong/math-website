import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import math from "remark-math";
import katex from "rehype-katex";
import remark2rehype from "remark-rehype";
import stringify from "rehype-stringify";
import moment from "moment";
import { getAllClassPaths } from "./classes";

const classesDirectory = path.join(process.cwd(), "classes");

export const getAllNotePaths = () => {
    const classCodes = getAllClassPaths();
    const classNotes = [];
    classCodes.forEach(classPath => {
        const notesDirectory = path.join(classesDirectory, `${classPath.params.classCode}/notes`);
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

    const contentHtml = await remark()
        .use(math)
        .use(remark2rehype)
        .use(katex)
        .use(stringify)
        .process(matterResult.content)
        .then(vfile => vfile.contents);

    return {
        noteName,
        contentHtml,
        ...matterResult.data,
    };
};
