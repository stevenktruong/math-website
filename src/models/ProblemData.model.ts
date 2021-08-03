export interface ProblemData {
    problemCode: ProblemCode;
    quarter: string;
    year: string;
    problemNumber: number;
    contentHtml: string;

    // Markdown meta
    topics: string[];
}

export type ProblemCode = `${number}${string}.${number}`;

export interface ParsedProblemCode {
    year: string;
    quarterUnformatted: string;
    quarter: string;
    problemNumber: number;
}
