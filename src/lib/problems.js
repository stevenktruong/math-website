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
        readDirectoryContents(qualTopicDirectory).forEach(examDate => {
            const examDateDirectory = path.join(qualTopicDirectory, examDate);

            readDirectoryContents(examDateDirectory).forEach(problemFileName => {
                problemPaths.push({
                    params: {
                        topic: topicPath.params.topic,
                        problemCode: `${examDate}.${problemFileName.replace(/\.md$/, "")}`,
                    },
                });
            });
        });
    });

    return problemPaths;
};

/**
 * A map from problem code for a topic to the problem data
 * @param {string} topic - topic to get the problems for
 */
export const getProblemsDataForTopic = topic => {
    const problemsData = {};
    getSortedProblemsDataForTopic(topic).forEach(problemData => {
        problemsData[problemData.problemCode] = problemData;
    });
    return problemsData;
};

/**
 * A list of the problem data for a topic
 * @param {string} topic - topic to get the problems for
 */
export const getSortedProblemsDataForTopic = topic => {
    const problemsDirectory = path.join(dataDirectory, `quals/${topic}/problems`);
    const sortedProblemsData = [];

    readDirectoryContents(problemsDirectory).forEach(examDate => {
        const examDateDirectory = path.join(problemsDirectory, examDate);

        readDirectoryContents(examDateDirectory).forEach(problemFileName => {
            const filePath = path.join(examDateDirectory, problemFileName);
            const file = readMarkdown(filePath);

            const problemCode = `${examDate}.${problemFileName.replace(/\.md$/, "")}`;

            sortedProblemsData.push({
                problemCode,
                ...parseProblemCode(problemCode),
                ...file.meta,
            });
        });
    });

    return sortedProblemsData.sort(sortProblems);
};

/**
 * Gets metadata and HTML (with math rendered) for a specific problem
 * @param {string} topic - Topic the problem belongs to
 * @param {string} problemCode - E.g., 09f.1
 */
export const getProblemDataForTopic = (topic, problemCode) => {
    const parsedProblemCode = parseProblemCode(problemCode);

    const filePath = path.join(
        dataDirectory,
        `quals/${topic}/problems/${parsedProblemCode.year}${parsedProblemCode.quarterUnformatted}/${parsedProblemCode.problemNumber}.md`
    );
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
        quarterUnformatted: match[2],
        quarter: quarterList[match[2]],
        problemNumber: Number(match[3]),
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
