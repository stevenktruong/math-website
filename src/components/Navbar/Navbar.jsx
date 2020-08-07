import Link from "next/link";
import styles from "./Navbar.module.scss";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className={styles.Navbar}>
                <ul>
                    <li key="home">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li key="teaching" className="clearfix">
                        <Link href="/teaching">
                            <a>Teaching</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
