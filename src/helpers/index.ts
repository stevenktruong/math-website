import getConfig from "next/config";

import { Quarter } from "types";

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
    `${formatQuarter(quarter)} 20${year % 100}`;

/**
 * Formats a given course and description, e.g., (MATH 32A, Calculus of Several Variables) becomes
 * "MATH 32A: Calculus of Several Variables".
 * @param course
 * @param description
 */
export const formatCourseWithDescription = (course: string, description: string): string =>
    `${course.toUpperCase()}: ${description}`;

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
