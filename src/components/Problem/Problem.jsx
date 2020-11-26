import styles from "./Problem.module.scss";

import { formatQuarterYear } from "helpers";

export default class Problem extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const problemData = fileData.problemData;
        return (
            <section className={styles.Problem}>
                <h1>
                    {formatQuarterYear(problemData.quarter, problemData.year)} - Problem {problemData.problemNumber}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: problemData.contentHtml }} />
            </section>
        );
    }
}
