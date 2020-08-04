import getConfig from "next/config";
import styles from "./Me.module.css";

const { publicRuntimeConfig = {} } = getConfig() || {};

export default class Me extends React.Component {
    render() {
        return (
            <div className={styles.Me}>
                <h1>Steven Truong</h1>
                <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
            </div>
        );
    }
}
