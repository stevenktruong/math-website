import Link from "next/link";
import styles from "./Navbar.module.scss";

const navLinks = {
    home: {
        title: "Home",
        href: "/",
    },
    teaching: {
        title: "Teaching",
        href: "/teaching",
    },
};

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className={styles.Navbar}>
                <ul>
                    {Object.keys(navLinks).map((key, i) => (
                        <li key={key} className={i === Object.keys(navLinks).length - 1 ? "clearfix" : null}>
                            <Link href={navLinks[key].href}>
                                <a>{navLinks[key].title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
