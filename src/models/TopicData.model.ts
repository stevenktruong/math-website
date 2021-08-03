export interface TopicData {
    topic: string;
    title: string; // Formatted topic name, e.g., "Differential Geometry"
    contentHtml: string;
    [key: string]: string;
}
