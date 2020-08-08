import styles from "./About.module.scss";

export default class About extends React.Component {
    render() {
        return (
            <section className={styles.About}>
                <h2>About</h2>
                <div dangerouslySetInnerHTML={{ __html: this.props.personalData.contentHtml }} />
            </section>
        );
    }
}
