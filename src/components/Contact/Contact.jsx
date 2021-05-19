import React from "react";
import { contactFormatting } from "config/formatting";
import styles from "./Contact.module.scss";

export default class Contact extends React.Component {
    render() {
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <div className="tableContainer">
                    <table>
                        <tbody>
                            {Object.keys(contactFormatting).map(key => (
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
    }
}
