import getConfig from "next/config";
import styles from "./Me.module.scss";

const { publicRuntimeConfig = {} } = getConfig() || {};

export default class Me extends React.Component {
    render() {
        return (
            <div className={styles.Me}>
                <h1>{this.props.personalData.fullName}</h1>
                <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
            </div>
        );
    }
}
