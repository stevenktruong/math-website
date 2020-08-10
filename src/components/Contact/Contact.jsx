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
        const fileData = this.props.fileData;
        const personalData = fileData.personalData;
        return (
            <section className={styles.Contact}>
                <h2>Contact</h2>
                <div className="tableContainer">
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
                </div>
            </section>
        );
    }
}
