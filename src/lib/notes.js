import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

import { publicRuntimeConfig } from "helpers";
import {
    processorWithMathForClassCode,
    substituteVariables,
    dataDirectory,
    readDirectoryContents,
    readMarkdown,
} from "./utils";
import { getAllClassPaths } from "./classes";

export const getAllNotePaths = () => {
    const notesPaths = [];

    getAllClassPaths().forEach(classPath => {
        const notesDirectory = path.join(dataDirectory, `classes/${classPath.params.classCode}/notes`);

        notesPaths.push(
            ...readDirectoryContents(notesDirectory)
                .filter(noteFileName => {
                    const filePath = path.join(notesDirectory, noteFileName);
                    const file = readMarkdown(filePath);
                    return file.meta.publish === "yes" || process.env.URL_ENV === "development";
                })
                .map(noteFileName => {
                    return {
                        params: {
                            classCode: classPath.params.classCode,
                            noteName: noteFileName.replace(/\.md$/, ""),
                        },
                    };
                })
        );
    });

    return notesPaths;
};

/**
 * Sorts from oldest to newest.
 * @param {string} classCode - classCode to get note data for
 */
export const getSortedNotesDataForClass = classCode => {
    const notesDirectory = path.join(dataDirectory, `classes/${classCode}/notes`);

    return readDirectoryContents(notesDirectory)
        .map(noteFileName => {
            const filePath = path.join(dataDirectory, `classes/${classCode}/notes/${noteFileName}`);
            const file = readMarkdown(filePath);

            return {
                noteName: noteFileName.replace(/\.md$/, ""),
                ...file.meta,
            };
        })
        .filter(noteData => noteData.publish === "yes" || process.env.URL_ENV === "development")
        .sort((a, b) => moment(b.date).diff(moment(a.date)));
};

/**
 * Gets metadata and HTML (with math rendered) for a specified note.
 * @param {string} classCode - Class to get data for.
 * @param {string} noteName - Note name WITHOUT the extension .md.
 */
export const getNoteDataForClass = (classCode, noteName) => {
    const filePath = path.join(dataDirectory, `classes/${classCode}/notes/${noteName}.md`);
    const file = readMarkdown(filePath);

    const substitutedContent = substituteVariables(file.contents, {
        assetsFolder: `${publicRuntimeConfig.staticFolder}/classes/${classCode}/${noteName}`,
    });

    const contentHtml = processorWithMathForClassCode(classCode).processSync(substitutedContent).toString();

    return {
        noteName,
        contentHtml,
        ...file.meta,
    };
};
