import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const dataDirectory = path.join(process.cwd(), "data");

/**
 * Returns my bio and contact information. The result should look like:
 *
 *   {
 *       contentHtml: bio,
 *       fullName: ...
 *       office: ...
 *       phone: ...
 *       email: ...
 *       address: [ ... ]
 *   }
 */
export const getPersonalData = () => {
    const fullPath = path.join(dataDirectory, "personal.md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const contentHtml = remark().use(html).processSync(matterResult.content).toString();

    return {
        contentHtml,
        ...matterResult.data,
    };
};
