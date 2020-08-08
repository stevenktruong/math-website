import contact from "config/contact.json";
import styles from "./Contact.module.scss";

const displayContact = {
    office: {
        title: "Office",
        format: contact => contact.office,
    },
    phone: {
        title: "Phone",
        format: contact => contact.phone,
    },
    email: {
        title: "E-mail",
        format: contact => contact.email,
    },
    address: {
        title: "Address",
        format: contact => contact.address.map((line, i) => <div key={`addressLine${i}`}>{line}</div>),
    },
};

export default class Contact extends React.Component {
    render() {
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <table>
                    <tbody>
                        {Object.keys(displayContact).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Title`}>{displayContact[key].title}</td>
                                <td key={`${key}Content`}>{displayContact[key].format(contact)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
