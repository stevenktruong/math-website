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
