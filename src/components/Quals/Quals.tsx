import React from "react";

import Link from "next/link";

import styles from "./Quals.module.scss";

interface Props {
    qualTopics: {
        unformattedName: string;
        formattedName: string;
    }[];
}

export default class Quals extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <section className={styles.Quals}>
                <h1>Qualifying Exams</h1>
                <ul>
                    {this.props.qualTopics.map((topic) => (
                        <li key={topic.unformattedName}>
                            <Link
                                href="/quals/[...topic]"
                                as={`/quals/${topic.unformattedName}`}
                                key={`${topic.unformattedName}Link`}
                            >
                                <a key={`${topic}Anchor`}>{topic.formattedName}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
