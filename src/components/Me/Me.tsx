import React from "react";

import { publicRuntimeConfig } from "helpers";

import styles from "./Me.module.scss";

interface Props {
    fullName: string;
    pronouns: string;
}

export default class Me extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <div className={styles.Me}>
                <div className={styles.Name}>
                    <h1>{this.props.fullName}</h1>
                    <h2>{this.props.pronouns}</h2>
                </div>
                <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
            </div>
        );
    }
}
