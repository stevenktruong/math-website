import styles from "./About.module.css";

export default class About extends React.Component {
    render() {
        return (
            <section className={styles.About}>
                <h2>About Me</h2>
                <p>
                    I am a first year Ph.D. student in pure mathematics at UCLA. I was also an undergraduate at UCLA,
                    where I obtained both my B.S. in Mathematics of Computation and my M.A. in Mathematics&nbsp;
                    <a href="https://www.math.ucla.edu/ugrad/scholar" target="_blank">
                        concurrently
                    </a>
                    .
                </p>
            </section>
        );
    }
}
