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

const counters = [
    { tag: "remark", display: () => `<h6>Remark.</h6>` },
    { tag: "example", display: count => `<h6 id="example-${count}">Example ${count}.</h6>` },
    { tag: "exercise", display: count => `<h6 id="exercise-${count}">Exercise ${count}.</h6>` },
    { tag: "solution", display: () => `<h6>Solution.</h6>` },
    {
        tag: "proof",
        display: () => `<h6>Proof.</h6>`,
        after: () => '<span class="qed-square">$\\square$</span>',
    },
];

const boxedEnvironments = ["theorem", "definition", "proposition"];

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
 * A map from the note filename to the note data
 * @param {string} classCode - classCode to get note data for
 */
export const getNotesDataForClass = classCode => {
    const notesDirectory = path.join(dataDirectory, `classes/${classCode}/notes`);
    const notesData = {};

    readDirectoryContents(notesDirectory)
        .map(noteFileName => {
            const filePath = path.join(notesDirectory, noteFileName);
            const file = readMarkdown(filePath);

            return {
                noteName: noteFileName.replace(/\.md$/, ""),
                ...file.meta,
            };
        })
        .filter(noteData => noteData.publish === "yes" || process.env.URL_ENV === "development")
        .forEach(noteData => (notesData[noteData.noteName] = noteData));

    return notesData;
};

/**
 * Gets metadata and HTML (with math rendered) for a specified note.
 * @param {string} classCode - Class to get data for.
 * @param {string} noteName - Note name WITHOUT the extension .md.
 */
export const getNoteDataForClass = (classCode, noteName) => {
    const filePath = path.join(dataDirectory, `classes/${classCode}/notes/${noteName}.md`);
    const file = readMarkdown(filePath);

    let substitutedContent = substituteVariables(file.contents, {
        assetsFolder: `${publicRuntimeConfig.staticFolder}/classes/${classCode}/${noteName}`,
    });

    // Add counters
    counters.forEach(counter => {
        let count = 0;
        substitutedContent = substitutedContent.replace(
            new RegExp(`(<${counter.tag} ?.*>)`, "g"),
            (match, fullTag) => `${fullTag}\n${counter.display(++count)}\n`
        );

        substitutedContent = substitutedContent.replace(
            new RegExp(`\n(</${counter.tag}>)`, "g"),
            (match, endTag) => `${counter.after ? counter.after() : ""}\n\n${endTag}`
        );
    });

    // Format boxed environment headers, e.g., <theorem>, <definition>
    boxedEnvironments.forEach(tag => {
        substitutedContent = substitutedContent.replace(
            new RegExp(`(<${tag} ?.*>) ?(.+)?`, "g"),
            (match, fullTag, description) =>
                `${fullTag}\n<h6>${tag.replace(tag[0], tag[0].toUpperCase())}${
                    description ? ` (${description})` : ""
                }</h6>`
        );
    });

    const contentHtml = processorWithMathForClassCode(classCode).processSync(substitutedContent).toString();

    return {
        noteName,
        contentHtml,
        ...file.meta,
    };
};
