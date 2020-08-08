import Link from "next/link";
import HamburgerButton from "components/HamburgerButton";
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
    constructor(props) {
        super(props);

        this.state = {
            mobileMenuActive: false,
        };
    }

    toggleMobileMenu() {
        const newState = !this.state.mobileMenuActive;
        this.setState({ mobileMenuActive: newState });
    }

    renderListOfButtons(isMobile = false) {
        return (
            <ul className={isMobile ? styles.ShowButtons : null}>
                {Object.keys(navLinks).map((key, i) => (
                    <li key={key} className={i === Object.keys(navLinks).length - 1 ? "clearfix" : null}>
                        <Link href={navLinks[key].href}>
                            <a onClick={() => this.toggleMobileMenu()}>{navLinks[key].title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const mobileMenuActive = this.state.mobileMenuActive;
        return (
            <nav className={styles.Navbar}>
                <div className={styles.Desktop}>{this.renderListOfButtons()}</div>
                <div className={styles.Mobile}>
                    <div className={styles.NavbarBar}></div>
                    <HamburgerButton value={mobileMenuActive} onClick={() => this.toggleMobileMenu()} />
                    {this.renderListOfButtons(mobileMenuActive)}
                </div>
            </nav>
        );
    }
}
