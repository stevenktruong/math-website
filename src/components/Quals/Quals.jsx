import Link from "next/link";
import { formatQuarterYear, formatCourseWithDescription } from "helpers";
import styles from "./Quals.module.scss";

export default class Quals extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const topicsData = fileData.topicsData;
        return (
            <section className={styles.Quals}>
                <h1>Qualifying Exams</h1>
                <ul>
                    {topicsData.map(topicData => (
                        <li key={topicData.topic}>
                            <Link
                                href="/quals/[...topic]"
                                as={`/quals/${topicData.topic}`}
                                key={`${topicData.topic}Link`}
                            >
                                <a key={`${topicData.topic}Anchor`}>{topicData.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
