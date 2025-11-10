import React from "react";

import { TableFormatting } from "types";

import styles from "./Contact.module.scss";

interface Props {
    // office: string;
    email: string;
    // address: string[];
    // fax: string;
}

/**
 * Specifies how the contact table should be formatted
 */
const contactFormatting: TableFormatting = {
    // office: {
    //     title: "Office",
    //     format: (personalData: Props) => personalData.office,
    // },
    email: {
        title: "E-mail",
        format: (personalData: Props) => personalData.email,
    },
    // address: {
    //     title: "Address",
    //     format: (personalData: Props) =>
    //         personalData.address.map((line, i) => <div key={`addressLine${i}`}>{line}</div>),
    // },
    // fax: {
    //     title: "Fax",
    //     format: (personalData: Props) => personalData.fax,
    // },
};

export default class Contact extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <div className="tableContainer">
                    <table>
                        <tbody>
                            {Object.keys(contactFormatting).map((key) => (
                                <tr key={`${key}`}>
                                    <td key={`${key}Title`}>{contactFormatting[key].title}</td>
                                    <td key={`${key}Content`}>{contactFormatting[key].format(this.props)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}
