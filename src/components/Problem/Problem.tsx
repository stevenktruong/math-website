import React from "react";

import { formatQuarterYear } from "helpers";

import { FileData } from "types";

import styles from "./Problem.module.scss";

interface ProblemProps {
    fileData: FileData;
}

export default class Problem extends React.Component<ProblemProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const problemData = fileData.problemData!;

        return (
            <section className={styles.Problem}>
                <h1>
                    {formatQuarterYear(problemData.quarter, problemData.year)} - Problem {problemData.problemNumber}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: problemData.contentHtml }} />
            </section>
        );
    };
}
