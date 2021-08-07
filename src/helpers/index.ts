import getConfig from "next/config";

import { Quarter } from "types";

/**
 * Specifies how MTWRF should be formatted in office hours and discussions lists, e.g., MT -> MoTu, but for now, we just fix the letters
 */
const daysOfTheWeekTable: Record<string, string> = {
    U: "U",
    M: "M",
    T: "T",
    W: "W",
    R: "R",
    F: "F",
    S: "S",
};

const fullQuarterName: Record<Quarter, string> = {
    f: "Fall",
    w: "Winter",
    s: "Spring",
};

export const { publicRuntimeConfig = {} } = getConfig() || {};

/**
 * Formats a quarter, e.g., f -> Fall
 * @param quarter
 */
export const formatQuarter = (quarter: Quarter): string => fullQuarterName[quarter];

/**
 * Formats a given quarter and year, e.g., (Fall, 20) becomes "Fall 2020".
 * @param quarter is the school quarter (e.g., Fall, Winter, Spring)
 * @param year is the year the class took place (2019 or 19 is okay)
 */
export const formatQuarterYear = (quarter: Quarter, year: number): string =>
    `${formatQuarter(quarter)} 20${(year % 100).toString().padStart(2, "0")}`;

/**
 * Formats a given course and description, e.g., (MATH 32A, Calculus of Several Variables) becomes
 * "MATH 32A: Calculus of Several Variables".
 * @param course
 * @param description
 */
export const formatCourseWithDescription = (course: string, description: string): string =>
    `${course.toUpperCase()}: ${description}`;

/**
 * Converts a string of days to use their display day, e.g., MTR -> MoTuTh
 * @param {string} days
 */
export const daysOfTheWeekFormatting = (days: string): string => {
    return days
        .split("")
        .map((day) => daysOfTheWeekTable[day])
        .join("");
};

/**
 * Transforms a list of tags (i.e., topics covered in a note) into custom HTML
 * @param {string[]} tags
 */
export const noteTagsFormatting: (tags: string[]) => string = (tags) =>
    tags
        ? `<div class="note-tag-container">${tags
              .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
              .map((tag) => `<span>${tag}</span>`)
              .join(", ")}</div>`
        : "";

/**
 * Transforms a list of topics (i.e., topics used for a qual problem) into custom HTML
 * @param {string[]} tags
 */
export const problemTopicsFormatting: (topics: string[]) => string = (topics) =>
    topics
        ? `<div class="problem-topics-container">${topics
              .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
              .map((topic) => `<span>${topic}</span>`)
              .join(", ")}</div>`
        : "";

/**
 * Replace {{ variable }} with value
 * @param input is the input to be modified
 * @param variables is a map containing the desired substitutions
 */
export const substituteVariables = (input: string, variables: Record<string, string>): string => {
    return Object.keys(variables).reduce(
        (acc, key) => acc.replace(new RegExp(`{{2} ${key} }{2}`, "g"), variables[key]),
        input
    );
};

/**
 * Given an array, create an sorting function to match the order in the array
 * @param order is an array that specifies an order (e.g., [Spring, Fall, Winter])
 */
const customSortOrder = (order: string[]): ((a: string, b: string) => number) => {
    const indexMap: Record<string, number> = {};
    order.forEach((item, i) => (indexMap[item] = i));
    return (a: string, b: string) => indexMap[a] - indexMap[b];
};

export const sortQuarters: (a: Quarter, b: Quarter) => number = customSortOrder(["w", "s", "f"]);
