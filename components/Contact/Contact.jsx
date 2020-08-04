import personal from "globals/personal.json";
import styles from "./Contact.module.css";

export default class Contact extends React.Component {
    render() {
        return (
            <section className={styles.Contact}>
                <h2>Contact Information</h2>
                <table>
                    <tbody>
                        {Object.keys(personal).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Name`}>{personal[key].contactKey}</td>
                                <td key={`${key}Value`}>
                                    {personal[key].value.map((line, i) => (
                                        <React.Fragment key={`${key}Line${i}`}>
                                            {line}
                                            <br />
                                        </React.Fragment>
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
