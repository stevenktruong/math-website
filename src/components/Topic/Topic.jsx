import Link from "next/link";
import { formatQuarterYear, formatCourseWithDescription } from "helpers";
import styles from "./Topic.module.scss";

export default class Topic extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const topicData = fileData.topicData;
        return (
            <div className={styles.Topic}>
                <section>
                    <h1>{topicData.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: topicData.contentHtml }} />
                </section>
            </div>
        );
    }
}
