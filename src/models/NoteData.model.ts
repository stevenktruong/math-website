export interface NoteData {
    noteName: string;
    contentHtml: string;

    // Markdown meta
    title: string;
    date: Date;
    tags: string[];
    publish: string;
}
