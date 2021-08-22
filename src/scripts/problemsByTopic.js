import { readMarkdown } from "../lib/utils.js";

import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

const readDirectoryContents = (folderPath) => {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
};

const qualsDirectory = path.join(dataDirectory, "quals/analysis/problems");
const quals = readDirectoryContents(qualsDirectory);

const topicToProblemsMap = quals.reduce((acc, cur) => {
    const problemsDirectory = path.join(qualsDirectory, cur);
    const problems = readDirectoryContents(problemsDirectory);

    for (const problem of problems) {
        const problemCode = `${cur}.${problem.split(".")[0]}`;
        const topics = readMarkdown(path.join(problemsDirectory, problem)).getMeta().topics;

        for (const topic of topics) {
            if (Object.keys(acc).includes(topic)) {
                acc[topic].push(problemCode);
            } else {
                acc[topic] = [problemCode];
            }
        }
    }

    return acc;
}, {});

const sortedTopics = Object.keys(topicToProblemsMap).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
);
for (const topic of sortedTopics) {
    console.log(topic.padEnd(40) + topicToProblemsMap[topic].map((s) => `${s}`.padEnd(6)).join(" "));
}
