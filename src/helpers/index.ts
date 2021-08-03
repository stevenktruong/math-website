import getConfig from "next/config";

export const { publicRuntimeConfig = {} } = getConfig() || {};

/**
 * Formats a given quarter and year, e.g., (Fall, 20) becomes "Fall 2020".
 * @param quarter is the school quarter (e.g., Fall, Winter, Spring)
 * @param year is the last 2 digits of the year the class took place
 */
export const formatQuarterYear = (quarter: string, year: string): string => `${quarter} 20${year}`;

/**
 * Formats a given course and description, e.g., (MATH 32A, Calculus of Several Variables) becomes
 * "MATH 32A: Calculus of Several Variables".
 * @param course
 * @param description
 */
export const formatCourseWithDescription = (course: string, description: string): string => `${course}: ${description}`;

/**
 * Given an array, create an sorting function to match the order in the array
 * @param order is an array that specifies an order (e.g., [Spring, Fall, Winter])
 */
export const customSortOrder = (order: string[]): ((a: string, b: string) => number) => {
    const indexMap: Record<string, number> = {};
    order.forEach((item, i) => (indexMap[item] = i));
    return (a: string, b: string) => indexMap[a] - indexMap[b];
};
