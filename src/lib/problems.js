import fs from "fs";
import path from "path";

import { customSortOrder, publicRuntimeConfig } from "helpers";
import {
    processorWithMathForClassCode,
    substituteVariables,
    dataDirectory,
    readDirectoryContents,
    readMarkdown,
    processorWithMathForTopic,
} from "./utils";
import { getAllTopicPaths } from "./topics";

const quarterList = {
    f: "Fall",
    s: "Spring",
};

const customTags = [
    // { tag: "problem", display: () => `<h6>Problem.</h6>` },
    { tag: "solution", display: () => `<h6>Solution.</h6>` },
];

export const getAllProblemsPaths = () => {
    const problemPaths = [];

    getAllTopicPaths().forEach(topicPath => {
        const qualTopicDirectory = path.join(dataDirectory, `quals/${topicPath.params.topic}/problems`);
        problemPaths.push(
            ...readDirectoryContents(qualTopicDirectory).map(problemFileName => {
                return {
                    params: {
                        topic: topicPath.params.topic,
                        problemCode: problemFileName.replace(/\.md$/, ""),
                    },
                };
            })
        );
    });

    return problemPaths;
};

/**
 * A map from problem code for a topic to the problem data
 * @param {string} topic - topic to get the problems for
 */
export const getProblemsDataForTopic = topic => {
    const problemsData = {};
    getSortedProblemsDataForTopic(topic).forEach(problemData => (problemsData[problemData.problemCode] = problemData));
    return problemsData;
};

/**
 * A list of the problem data for a topic
 * @param {string} topic - topic to get the problems for
 */
export const getSortedProblemsDataForTopic = topic => {
    const problemsDirectory = path.join(dataDirectory, `quals/${topic}/problems`);

    return readDirectoryContents(problemsDirectory)
        .map(problemFileName => {
            const filePath = path.join(dataDirectory, `quals/${topic}/problems/${problemFileName}`);
            const file = readMarkdown(filePath);

            const problemCode = problemFileName.replace(/\.md$/, "");

            return {
                problemCode,
                ...parseProblemCode(problemCode),
                ...file.meta,
            };
        })
        .sort(sortProblems);
};

/**
 * Gets metadata and HTML (with math rendered) for a specific problem
 * @param {string} topic - Topic the problem belongs to
 * @param {string} problemCode - Filename WITHOUT .md at the end
 */
export const getProblemDataForTopic = (topic, problemCode) => {
    const filePath = path.join(dataDirectory, `quals/${topic}/problems/${problemCode}.md`);
    const file = readMarkdown(filePath);

    let content = file.contents;

    // Add counters
    customTags.forEach(customTag => {
        content = content.replace(
            new RegExp(`<${customTag.tag}>`, "g"),
            () => `<${customTag.tag}>\n${customTag.display()}\n`
        );
    });

    const contentHtml = processorWithMathForTopic(topic).processSync(content).toString();

    return {
        problemCode,
        contentHtml,
        ...parseProblemCode(problemCode),
        ...file.meta,
    };
};

export const parseProblemCode = problemCode => {
    const match = problemCode.match(/^([0-9]{2})([fs])\.([0-9]+)$/);

    return {
        year: match[1],
        quarter: quarterList[match[2]],
        problemNumber: match[3],
    };
};

/**
 * Sort by year, then quarter
 */
const sortProblems = (a, b) => {
    if (a.year !== b.year) {
        return a.year < b.year ? -1 : 1;
    }

    if (a.quarter !== b.quarter) {
        return customSortOrder(["Spring", "Fall"])(a.quarter, b.quarter);
    }

    return 0;
};
