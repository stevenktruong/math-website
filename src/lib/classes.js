import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { noteTagsFormatting } from "config/formatting";
import { customSortOrder, publicRuntimeConfig } from "helpers";
import { dataDirectory, processorWithMathForClassCode, readDirectoryContents, readMarkdown } from "./utils";
import { getNotesDataForClass } from "./notes";

const classesDirectory = path.join(dataDirectory, "classes");

const quarterList = {
    f: "Fall",
    w: "Winter",
    s: "Spring",
};

// A course refers to the content, a class refers to a particular instance of a course

export const getAllClassPaths = () => {
    return readDirectoryContents(classesDirectory).map(classCode => {
        return {
            params: {
                classCode,
            },
        };
    });
};

/**
 * The result looks like the following:
 *
 *   {
 *       classCode,
 *       year,
 *       quarter,
 *       course,
 *       section,
 *       ...metadata (see the .md file)
 *   }
 *
 * The classes are sorted from most recent to least.
 */
export const getSortedClassesData = () => {
    return readDirectoryContents(classesDirectory)
        .map(classCode => {
            const filePath = path.join(classesDirectory, `${classCode}/index.md`);
            const file = readMarkdown(filePath);

            return {
                classCode,
                ...parseClassCode(classCode),
                ...file.meta,
            };
        })
        .sort(sortClasses);
};

/**
 * Like getSortedClassesData(), but for a specific class and all includes the markdown converted to HTML.
 * @param {string} classCode - The code of the class, e.g., 31a.1.20f
 */
export const getClassData = classCode => {
    const filePath = path.join(classesDirectory, `${classCode}/index.md`);
    const file = readMarkdown(filePath);

    // Create announcements table
    let substitutedContent = file.contents;

    const announcements = new RegExp("## Announcements").test(substitutedContent);
    if (announcements) {
        substitutedContent = substitutedContent.replace(
            new RegExp("## Announcements"),
            match => `${match}\n<div class="tableContainer"><table id="announcements-table">\n<tbody>`
        );

        substitutedContent = substitutedContent.replace(
            new RegExp("\\| ([0-9/]+?) \\| (.+?)\n\\|", "g"),
            (match, date, announcement, followedBy) => `<tr>\n<td>${date}</td>\n<td>${announcement}</td>\n</tr>\n|`
        );

        // We need to end the table at the last announcement
        substitutedContent = substitutedContent.replace(
            new RegExp("\\| ([0-9/]+?) \\| (.+?)\n"),
            (match, date, announcement) =>
                `<tr>\n<td>${date}</td>\n<td>${announcement}</td>\n</tr>\n</tbody>\n</table>\n</div>\n`
        );
    }

    let contentHtml = processorWithMathForClassCode(classCode).processSync(substitutedContent).toString();

    // Replace notes macro
    const notesData = getNotesDataForClass(classCode);
    contentHtml = contentHtml.replace(
        new RegExp("notes::(.+?).md", "g"),
        (match, noteName) =>
            `<a href="${publicRuntimeConfig.staticFolder}/teaching/${classCode}/${noteName}">${notesData[noteName].title}</a>` +
            noteTagsFormatting(notesData[noteName].tags)
    );

    return {
        classCode,
        ...parseClassCode(classCode),
        contentHtml,
        ...file.meta,
    };
};

export const parseClassCode = classCode => {
    const match = classCode.match(/^([0-9]{1,3}[a-z]{0,2})\.([0-9]{1,2})\.([0-9]{2})([fws])$/);

    return {
        courseNumber: match[1],
        lecture: match[2],
        year: match[3],
        quarter: quarterList[match[4]],
    };
};

/**
 * Sort by year, then quarter, then course, then lecture number.
 */
const sortClasses = (a, b) => {
    if (a.year !== b.year) {
        return a.year < b.year ? -1 : 1;
    }

    if (a.quarter !== b.quarter) {
        return customSortOrder(["Winter", "Spring", "Fall"])(a.quarter, b.quarter);
    }

    if (a.course !== b.course) {
        return a.course < b.course ? -1 : 1;
    }

    return a.lecture < b.lecture ? -1 : 1;
};
