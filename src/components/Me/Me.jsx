import React from "react";
import { publicRuntimeConfig } from "helpers";
import styles from "./Me.module.scss";

export default class Me extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        return (
            <div className={styles.Me}>
                <div className={styles.Name}>
                    <h1>{personalData.fullName}</h1>
                    <h2>{personalData.pronouns}</h2>
                </div>
                <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
            </div>
        );
    }
}
