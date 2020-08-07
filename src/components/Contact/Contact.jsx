import contactInformation from "config/contactInformation.json";
import styles from "./Contact.module.scss";

const contactDisplayName = {
    office: "Office",
    phone: "Phone",
    email: "E-mail",
    address: "Address",
};

export default class Contact extends React.Component {
    render() {
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <table>
                    <tbody>
                        {Object.keys(contactInformation).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Name`}>{contactDisplayName[key]}</td>
                                <td key={`${key}Value`}>
                                    {contactInformation[key].map((line, i) => (
                                        <div key={`${key}Line${i}`}>{line}</div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
