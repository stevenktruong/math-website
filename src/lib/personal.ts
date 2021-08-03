import path from "path";

import { PersonalData } from "models/PersonalData.model";

import { readMarkdown, baseProcessor } from "./utils";

const dataDirectory = path.join(process.cwd(), "data");

/**
 * Returns my bio and contact information. The result should look like:
 *
 *   {
 *       contentHtml: bio,
 *       fullName: ...
 *       office: ...
 *       email: ...
 *       address: [ ... ]
 *   }
 */
export const getPersonalData: () => PersonalData = () => {
    const fullPath = path.join(dataDirectory, "personal.md");
    const file = readMarkdown(fullPath);

    const contentHtml = baseProcessor().processSync(file.contents).toString();

    return {
        contentHtml,
        ...file.meta,
    } as PersonalData;
};
