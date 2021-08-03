import React from "react";

import { contactFormatting } from "config/formatting";

import { FileData } from "types";

import styles from "./Contact.module.scss";

interface ContactProps {
    fileData: FileData;
}

export default class Contact extends React.Component<ContactProps> {
    render = (): JSX.Element => {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData!;

        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <div className="tableContainer">
                    <table>
                        <tbody>
                            {Object.keys(contactFormatting).map((key) => (
                                <tr key={`${key}`}>
                                    <td key={`${key}Title`}>{contactFormatting[key].title}</td>
                                    <td key={`${key}Content`}>{contactFormatting[key].format(personalData)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    };
}
