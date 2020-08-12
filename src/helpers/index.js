import getConfig from "next/config";

export const { publicRuntimeConfig = {} } = getConfig() || {};

export const formatCourseTitle = course => `MATH ${course.toUpperCase()}`;
export const formatQuarterYear = (quarter, year) => `${quarter} 20${year}`;
export const formatCourseWithDescription = (course, description) => `${formatCourseTitle(course)}: ${description}`;
