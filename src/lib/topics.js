import fs from "fs";
import path from "path";

import { publicRuntimeConfig } from "helpers";
import { dataDirectory, processorWithMathForTopic, readDirectoryContents, readMarkdown } from "./utils";
import {
    getProblemDataForTopic,
    getProblemsDataForTopic,
    getSortedProblemsDataForTopic,
    parseProblemCode,
} from "./problems";
import { problemTopicsFormatting } from "config/formatting";

const topicsDirectory = path.join(dataDirectory, "quals");

export const getAllTopicPaths = () => {
    return readDirectoryContents(topicsDirectory).map(topic => {
        return {
            params: {
                topic,
            },
        };
    });
};

export const getSortedTopicsData = () => {
    return readDirectoryContents(topicsDirectory)
        .map(topic => {
            const filePath = path.join(topicsDirectory, `${topic}/index.md`);
            const file = readMarkdown(filePath);

            return {
                topic,
                ...file.meta,
            };
        })
        .sort((a, b) => (a.topic < b.topic ? -1 : 1));
};

/**
 * Like getSortedTopicsData(), but for a specific topic and includes the content in the Markdown converted to HTML
 * @param {string} topic - E.g., analysis
 */
export const getTopicData = topic => {
    const filePath = path.join(topicsDirectory, `${topic}/index.md`);
    const file = readMarkdown(filePath);

    let contents = file.contents;

    // Insert problems list into the Markdown before processing for the table of contents
    const problemsData = getSortedProblemsDataForTopic(topic);
    const problemsDataByQuarter = createMapFromQuarterToProblemsData(problemsData);

    Object.keys(problemsDataByQuarter)
        .sort()
        .forEach(year => {
            Object.keys(problemsDataByQuarter[year]).forEach(quarter => {
                contents +=
                    `\n## ${quarter} 20${year}\n` +
                    problemsDataByQuarter[year][quarter]
                        .sort((a, b) => a.problemNumber - b.problemNumber)
                        .map(problemData => `- problems::${problemData.problemCode}.md`)
                        .join("\n");
            });
        });

    let contentHtml = processorWithMathForTopic(topic).processSync(contents).toString();
    const problemsDataMap = getProblemsDataForTopic(topic);
    contentHtml = contentHtml.replace(
        new RegExp("problems::(.+?).md", "g"),
        (match, problemCode) =>
            `<a href="${publicRuntimeConfig.staticFolder}/quals/${topic}/${problemCode}">Problem ${problemsDataMap[problemCode].problemNumber}</a>` +
            problemTopicsFormatting(problemsDataMap[problemCode].topics)
    );

    return {
        topic,
        contentHtml,
        ...file.meta,
    };
};

/**
 * Given a sorted list of problems, make a map that looks like the following
 * {
 *     "09": {
 *         Fall: {
 *             [ problemData ]
 *         }
 *     }
 * }
 * @param {problemData[]} problemsData - a sorted list of problem data
 */
export const createMapFromQuarterToProblemsData = problemsData => {
    const problemsDataByQuarter = {};

    if (problemsData.length) {
        const firstQuarterYear = {
            year: problemsData[0].year,
            quarter: problemsData[0].quarter,
        };

        problemsData.reduce((acc, cur) => {
            if (!problemsDataByQuarter[cur.year]) {
                problemsDataByQuarter[cur.year] = {};
            }

            if (!problemsDataByQuarter[cur.year][cur.quarter]) {
                problemsDataByQuarter[cur.year][cur.quarter] = [];
            }

            problemsDataByQuarter[cur.year][cur.quarter].push(cur);

            return {
                year: cur.year,
                quarter: cur.quarter,
            };
        }, firstQuarterYear);
    }

    return problemsDataByQuarter;
};
