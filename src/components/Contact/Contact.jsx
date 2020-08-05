import contactInformation from "globals/contactInformation.json";
import styles from "./Contact.module.css";

export default class Contact extends React.Component {
    render() {
        return (
            <section className={styles.Contact}>
                <h2>Contact Information</h2>
                <table>
                    <tbody>
                        {Object.keys(contactInformation).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Name`}>{contactInformation[key].contactKey}</td>
                                <td key={`${key}Value`}>
                                    {contactInformation[key].value.map((line, i) => (
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
