import React from "react";

import { formatQuarterYear } from "helpers";

import { Quarter } from "types";

import styles from "./Problem.module.scss";

interface Props {
    year: number;
    quarter: Quarter;
    problemNumber: number;
    contentHtml: string;
}

export default class Problem extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <section className={styles.Problem}>
                <h1>
                    {formatQuarterYear(this.props.quarter, this.props.year)} - Problem {this.props.problemNumber}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.contentHtml }} />
            </section>
        );
    }
}
