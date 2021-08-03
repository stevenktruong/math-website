import path from "path";

import { problemTopicsFormatting } from "config/formatting";

import { customSortOrder, publicRuntimeConfig, formatQuarterYear } from "helpers";

import { ProblemCode, ProblemData } from "models/ProblemData.model";

import { IParams } from "types";

import { getAllTopicPaths } from "./topics";
import { dataDirectory, readDirectoryContents, readMarkdown, processorWithMathForTopic } from "./utils";

const quarterList: Record<string, string> = {
    f: "Fall",
    s: "Spring",
};

const customTags = [
    // { tag: "problem", display: () => `<h6>Problem.</h6>` },
    { tag: "solution", display: () => `<h6>Solution.</h6>` },
];

/**
 * Get a list of all available paths starting with /quals/
 */
export const getAllProblemsPaths: () => { params: IParams }[] = () => {
    const problemPaths: { params: IParams }[] = [];

    getAllTopicPaths().forEach((topicPath) => {
        const qualTopicDirectory = path.join(dataDirectory, `quals/${topicPath.params.topic}/problems`);
        readDirectoryContents(qualTopicDirectory).forEach((examDate) => {
            const examDateDirectory = path.join(qualTopicDirectory, examDate);

            readDirectoryContents(examDateDirectory).forEach((problemFileName) => {
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
export const getProblemsDataForTopic: (topic: string) => Record<string, ProblemData> = (topic) => {
    const problemsData: Record<string, ProblemData> = {};
    getSortedProblemsDataForTopic(topic).forEach((problemData) => {
        problemsData[problemData.problemCode] = problemData;
    });
    return problemsData;
};

/**
 * A list of the problem data for a topic
 * @param {string} topic - topic to get the problems for
 */
export const getSortedProblemsDataForTopic: (topic: string) => ProblemData[] = (topic) => {
    const problemsDirectory = path.join(dataDirectory, `quals/${topic}/problems`);
    const sortedProblemsData: ProblemData[] = [];

    readDirectoryContents(problemsDirectory).forEach((examDate) => {
        const examDateDirectory = path.join(problemsDirectory, examDate);

        readDirectoryContents(examDateDirectory).forEach((problemFileName) => {
            const filePath = path.join(examDateDirectory, problemFileName);
            const file = readMarkdown(filePath);

            const problemCode = `${examDate}.${problemFileName.replace(/\.md$/, "")}` as ProblemCode;

            sortedProblemsData.push(({
                problemCode,
                ...parseProblemCode(problemCode),
                ...file.meta,
            } as unknown) as ProblemData);
        });
    });

    return sortedProblemsData.sort(sortProblems);
};

/**
 * Gets metadata and HTML (with math rendered) for a specific problem
 * @param {string} topic - Topic the problem belongs to
 * @param {string} problemCode - E.g., 09f.1
 */
export const getProblemDataForTopic = (topic: string, problemCode: ProblemCode) => {
    const { year, quarterUnformatted, problemNumber } = parseProblemCode(problemCode);

    const filePath = path.join(
        dataDirectory,
        `quals/${topic}/problems/${year}${quarterUnformatted}/${problemNumber}.md`
    );
    const file = readMarkdown(filePath);

    let content = file.contents;

    content = problemTopicsFormatting(file.meta.topics) + content;

    // Add counters
    customTags.forEach((customTag) => {
        content = content.replace(
            new RegExp(`<${customTag.tag}>`, "g"),
            () => `<${customTag.tag}>\n${customTag.display()}\n`
        );
    });

    let contentHtml = processorWithMathForTopic(topic).processSync(content).toString();

    // Replace quals macro
    contentHtml = contentHtml.replace(new RegExp("quals::(.+?).md", "g"), (match, problemCode) => {
        const problemData = parseProblemCode(problemCode);
        return `<a href="${publicRuntimeConfig.staticFolder}/quals/${topic}/${problemCode}">${formatQuarterYear(
            problemData.quarter,
            problemData.year
        )} - Problem ${problemData.problemNumber}</a>`;
    });

    return {
        problemCode,
        contentHtml,
        ...parseProblemCode(problemCode),
        ...file.meta,
    };
};

export const parseProblemCode = (problemCode: ProblemCode) => {
    const match = problemCode.match(/^([0-9]{2})([fs])\.([0-9]+)$/)!;

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
const sortProblems = (a: ProblemData, b: ProblemData) => {
    if (a.year !== b.year) {
        return a.year < b.year ? -1 : 1;
    }

    if (a.quarter !== b.quarter) {
        return customSortOrder(["Spring", "Fall"])(a.quarter, b.quarter);
    }

    return 0;
};
