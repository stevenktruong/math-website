import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const classesDirectory = path.join(process.cwd(), "classes");

const quarterList = {
    f: "Fall",
    w: "Winter",
    s: "Spring",
};

// A course refers to the content, a class refers to a particular instance of a course

export const getAllClassPaths = () => {
    const classCodes = fs.readdirSync(classesDirectory);
    return classCodes.map(classCode => {
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
    const classCodes = fs.readdirSync(classesDirectory);
    return classCodes
        .map(classCode => {
            const fullPath = path.join(classesDirectory, `${classCode}/index.md`);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            return {
                classCode,
                ...parseClassCode(classCode),
                ...matterResult.data,
            };
        })
        .sort(sortClasses)
        .reverse();
};

/**
 * Like getSortedClassesData(), but for a specific class and all includes the markdown converted to HTML.
 * @param {string} classCode - The code of the class, e.g., 31a.1.20f
 */
export const getClassData = async classCode => {
    const fullPath = path.join(classesDirectory, `${classCode}/index.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        classCode,
        ...parseClassCode(classCode),
        contentHtml,
        ...matterResult.data,
    };
};

export const parseClassCode = classCode => {
    const match = classCode.match(/^([0-9]{1,3}[a-z]{0,2})\.([0-9]{1,2})\.([0-9]{2})([fws])$/);

    return {
        course: match[1],
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
        return a.year < b.year ? 1 : -1;
    }

    if (a.quarter !== b.quarter) {
        return a.quarter === "w" || b.quarter === "f" ? 1 : -1;
    }

    if (a.course !== b.course) {
        return a.course < b.course ? 1 : -1;
    }

    return a.lecture < b.lecture ? 1 : -1;
};
