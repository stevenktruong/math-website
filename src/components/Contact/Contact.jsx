import styles from "./Contact.module.scss";

const displayContact = {
    office: {
        title: "Office",
        format: personalData => personalData.office,
    },
    phone: {
        title: "Phone",
        format: personalData => personalData.phone,
    },
    email: {
        title: "E-mail",
        format: personalData => personalData.email,
    },
    address: {
        title: "Address",
        format: personalData => personalData.address.map((line, i) => <div key={`addressLine${i}`}>{line}</div>),
    },
};

export default class Contact extends React.Component {
    render() {
        const personalData = this.props.personalData;
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <table>
                    <tbody>
                        {Object.keys(displayContact).map(key => (
                            <tr key={`${key}`}>
                                <td key={`${key}Title`}>{displayContact[key].title}</td>
                                <td key={`${key}Content`}>{displayContact[key].format(personalData)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
