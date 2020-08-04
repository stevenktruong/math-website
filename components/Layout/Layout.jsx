import Navbar from "components/Navbar";
import styles from "./Layout.module.css";

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.Layout}>
                <Navbar />
                <span className={styles.LeftSide}>{this.props.leftSide}</span>
                <span className={styles.RightSide}>{this.props.rightSide}</span>
            </div>
        );
    }
}
