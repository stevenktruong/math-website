import Link from "next/link";
import styles from "./Navbar.module.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className={styles.Navbar}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="clearfix">
                        <Link href="/">
                            <a>Teaching</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
