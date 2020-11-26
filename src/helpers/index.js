import getConfig from "next/config";

export const { publicRuntimeConfig = {} } = getConfig() || {};

export const formatQuarterYear = (quarter, year) => `${quarter} 20${year}`;
export const formatCourseWithDescription = (course, description) => `${course}: ${description}`;

export const customSortOrder = order => {
    const indexMap = {};
    order.forEach((item, i) => (indexMap[item] = i));

    return (a, b) => indexMap[a] - indexMap[b];
};
