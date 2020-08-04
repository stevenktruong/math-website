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

const getAllClassCodes = () => {
    const fileNames = fs.readdirSync(classesDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                classCode: fileName.replace(/\.md$/, ""),
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
 *       discussion,
 *       ...metadata (see the .md file)
 *   }
 */
const getSortedClassesData = () => {
    const fileNames = fs.readdirSync(classesDirectory);
    return fileNames
        .map(fileName => {
            const classCode = fileName.replace(/\.md$/, "");

            const fullPath = path.join(classesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            return {
                classCode,
                ...parseClassCode(classCode),
                ...matterResult.data,
            };
        })
        .sort(sortClasses);
};

/**
 * Like getSortedClassesData(), but for a specific class and all includes the markdown converted to HTML.
 * @param {string} classCode - The code of the class, e.g., 20f-31a-2b
 */
const getClassData = async classCode => {
    const fullPath = path.join(classesDirectory, `${classCode}.md`);
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

const parseClassCode = code => {
    const match = code.match(/^([0-9]{2})([fws])-([0-9]{1,3}[a-z]{0,2})-([0-9][a-z]?)$/);
    return {
        year: match[1],
        quarter: quarterList[match[2]],
        course: match[3],
        discussion: match[4],
    };
};

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

    return a.discussion < b.discussion ? 1 : -1;
};

export { getAllClassCodes, getSortedClassesData, getClassData };
