import getConfig from "next/config";
import About from "components/About";
import styles from "./Me.module.css";

const { publicRuntimeConfig = {} } = getConfig() || {};

export default class Me extends React.Component {
    render() {
        return (
            <div className={styles.Me}>
                <div className={styles.ImageContainer}>
                    <img alt="me" src={`${publicRuntimeConfig.staticFolder}/images/me.jpg`} />
                </div>
                <div className={styles.AboutContainer}>
                    <h2>Steven Truong</h2>
                    <p>
                        I am a first year Ph.D. student in pure mathematics at UCLA. I was also an undergraduate at
                        UCLA, where I obtained both my B.S. in Mathematics of Computation and my M.A. in
                        Mathematics&nbsp;
                        <a href="https://www.math.ucla.edu/ugrad/scholar" target="_blank">
                            concurrently
                        </a>
                        .
                    </p>
                </div>
            </div>
        );
    }
}
