import React from "react";

import { publicRuntimeConfig } from "helpers";

import { FileData } from "types";

import styles from "./Me.module.scss";

interface Props {
    fileData: FileData;
}

export default class Me extends React.Component<Props> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData!;

        return (
            <div className={styles.Me}>
                <div className={styles.Name}>
                    <h1>{personalData.fullName}</h1>
                    <h2>{personalData.pronouns}</h2>
                </div>
                <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
            </div>
        );
    };
}
