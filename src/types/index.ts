import { ParsedUrlQuery } from "querystring";

import { ClassCode, ClassData } from "models/ClassData.model";
import { NoteData } from "models/NoteData.model";
import { PersonalData } from "models/PersonalData.model";
import { ProblemCode, ProblemData } from "models/ProblemData.model";
import { TopicData } from "models/TopicData.model";

/**
 * Represents the parameters from dynamic routing
 */
export interface IParams extends ParsedUrlQuery {
    // /teaching/[classCode]/[noteName]
    classCode?: ClassCode;
    noteName?: string;

    // /quals/[topic]/[problemCode]
    topic?: string;
    problemCode?: ProblemCode;
}

/**
 * Represents a read Markdown file
 */
export interface MarkdownFile {
    contents: string;
    meta: Record<string, any>;
}

/**
 * Represents data from the data/ directory
 */
export interface FileData {
    personalData?: PersonalData;

    classData?: ClassData;
    classesData?: ClassData[];

    noteData?: NoteData;

    topicData?: TopicData;
    topicsData?: TopicData[];

    problemData?: ProblemData;
}
