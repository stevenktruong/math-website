import path from "path";

import { noteTagsFormatting } from "config/formatting";

import { customSortOrder, publicRuntimeConfig } from "helpers";

import { ClassCode, ClassData, ParsedClassCode } from "models/ClassData.model";
import { NoteData } from "models/NoteData.model";

import { getNotesDataForClass } from "./notes";
import { dataDirectory, processorWithMathForClassCode, readDirectoryContents, readMarkdown } from "./utils";

const classesDirectory = path.join(dataDirectory, "classes");

const quarterList: Record<string, string> = {
    f: "Fall",
    w: "Winter",
    s: "Spring",
};

// A course refers to the content, a class refers to a particular instance of a course

export const getAllClassPaths = () => {
    return readDirectoryContents(classesDirectory).map((classCode) => {
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
        .map((classCode) => {
            const filePath = path.join(classesDirectory, `${classCode}/index.md`);
            const file = readMarkdown(filePath);

            return {
                classCode,
                ...parseClassCode(classCode as ClassCode),
                ...file.meta,
            } as ClassData;
        })
        .sort(sortClasses);
};

/**
 * Like getSortedClassesData(), but for a specific class and all includes the markdown converted to HTML.
 * @param {string} classCode - The code of the class, e.g., 31a.1.20f
 */
export const getClassData: (classCode: ClassCode) => ClassData = (classCode) => {
    const filePath = path.join(classesDirectory, `${classCode}/index.md`);
    const file = readMarkdown(filePath);

    let contentHtml = processorWithMathForClassCode(classCode).processSync(file.contents).toString();

    // Create announcements table
    const announcements = new RegExp('<h2 id="announcements">Announcements</h2>').test(contentHtml);
    if (announcements) {
        contentHtml = contentHtml.replace(
            new RegExp('(<h2 id="announcements">Announcements</h2>)\n<ul>'),
            (match, noUl) => `${noUl}\n<div class="tableContainer"><table id="announcements-table"><tbody>`
        );

        // We need to end the table at the last announcement
        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>\n</ul>"),
            (match, date, announcement) => `<tr><td>${date}</td><td>${announcement}</td></tr>\n</tbody></table></div>`
        );

        contentHtml = contentHtml.replace(
            new RegExp("<li>\\| ([0-9/]+?) \\| (.+?)</li>", "g"),
            (match, date, announcement) => `<tr><td>${date}</td>\n<td>${announcement}</td></tr>`
        );
    }

    // Replace notes macro
    const notesData: Record<string, NoteData> = getNotesDataForClass(classCode);
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
    } as ClassData;
};

/**
 * E.g., converts "20f.31b.1" to
 * {
 *     year: "20",
 *     quarter: "Fall",
 *     courseNumber: "31b",
 *     lecture: "1"
 * }
 * @param classCode is the code to be parsed
 */
export const parseClassCode: (classCode: ClassCode) => ParsedClassCode = (classCode) => {
    const match = classCode.match(/^([0-9]{2})([fws])\.([0-9]{1,3}[a-z]{0,2})\.([0-9]{1,2})$/)!;

    return {
        year: match[1],
        quarter: quarterList[match[2]],
        courseNumber: match[3],
        lecture: match[4],
    } as ParsedClassCode;
};

/**
 * Sort by year, then quarter, then course, then lecture number.
 */
const sortClasses = (a: ClassData, b: ClassData) => {
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
