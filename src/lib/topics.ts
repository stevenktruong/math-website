import path from "path";

import { problemTopicsFormatting } from "config/formatting";

import { publicRuntimeConfig } from "helpers";

import { ProblemData } from "models/ProblemData.model";
import { TopicData } from "models/TopicData.model";

import { IParams } from "types";

import { getProblemsDataForTopic, getSortedProblemsDataForTopic } from "./problems";
import { dataDirectory, processorWithMathForTopic, readDirectoryContents, readMarkdown } from "./utils";

const topicsDirectory = path.join(dataDirectory, "quals");

/**
 * Get a list of all available topics /quals/
 */
export const getAllTopicPaths: () => { params: IParams }[] = () => {
    return readDirectoryContents(topicsDirectory).map((topic) => {
        return {
            params: {
                topic,
            },
        };
    });
};

/**
 * Get a list of a topics data sorted by the name of the topic
 */
export const getSortedTopicsData: () => TopicData[] = () => {
    return readDirectoryContents(topicsDirectory)
        .map((topic) => {
            const filePath = path.join(topicsDirectory, `${topic}/index.md`);
            const file = readMarkdown(filePath);

            return {
                topic,
                ...file.meta,
            } as TopicData;
        })
        .sort((a, b) => (a.topic < b.topic ? -1 : 1));
};

/**
 * Like getSortedTopicsData, but for a specific topic and includes the content in the Markdown converted to HTML
 * @param {string} topic - E.g., analysis
 */
export const getTopicData: (topic: string) => TopicData = (topic) => {
    const filePath = path.join(topicsDirectory, `${topic}/index.md`);
    const file = readMarkdown(filePath);

    let contents = file.contents;

    // Insert problems list into the Markdown before processing for the table of contents
    const problemsData = getSortedProblemsDataForTopic(topic);
    const problemsDataByQuarter = createMapFromQuarterToProblemsData(problemsData);

    Object.keys(problemsDataByQuarter)
        .sort()
        .forEach((year) => {
            Object.keys(problemsDataByQuarter[year]).forEach((quarter) => {
                contents +=
                    `\n## ${quarter} 20${year}\n` +
                    problemsDataByQuarter[year][quarter]
                        .sort((a, b) => a.problemNumber - b.problemNumber)
                        .map((problemData) => `- problems::${problemData.problemCode}.md`)
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
    } as TopicData;
};

/**
 * Given a sorted list of problems, make a map that looks like the following:
 *
 * {
 *     "09": {
 *         Fall: {
 *             [ problemData ]
 *         }
 *     }
 * }
 * @param problemsData - a sorted list of problem data
 */
export const createMapFromQuarterToProblemsData: (
    problemsData: ProblemData[]
) => Record<string, Record<string, ProblemData[]>> = (problemsData) => {
    const problemsDataByQuarter: Record<string, Record<string, ProblemData[]>> = {};

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
