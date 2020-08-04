import styles from "./Contact.module.css";

export default class Contact extends React.Component {
    render() {
        return (
            <section className={styles.Contact}>
                <h2>Contact Information</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Office</td>
                            <td>TBD</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>TBD</td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>steven [at] math [dot] ucla [dot] edu</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
