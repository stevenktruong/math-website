import fs from "fs";
import path from "path";

import { readMarkdown, baseProcessor } from "./helpers";

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
    const file = readMarkdown(fullPath);

    const contentHtml = baseProcessor().processSync(file.contents).toString();

    return {
        contentHtml,
        ...file.meta,
    };
};
