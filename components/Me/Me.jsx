import styles from "./Me.module.css";

export default class Me extends React.Component {
    render() {
        return (
            <div className={styles.Me}>
                <h1>Steven Truong</h1>
                <img alt="me" src="images/me.jpg" />
            </div>
        );
    }
}
