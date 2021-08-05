import React from "react";

import Link from "next/link";

import HamburgerButton from "components/HamburgerButton";

import { navLinks } from "config/formatting";

import styles from "./Navbar.module.scss";

interface State {
    mobileMenuActive: boolean;
}

export default class Navbar extends React.Component<any, State> {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(props: any) {
        super(props);

        this.state = {
            mobileMenuActive: false,
        };
    }

    toggleMobileMenu = async (): Promise<void> => {
        const newState = !this.state.mobileMenuActive;
        await this.setState({ mobileMenuActive: newState });
    };

    renderListOfButtons = (isMobile = false): JSX.Element => {
        return (
            <ul className={isMobile ? styles.ShowButtons : null}>
                {Object.keys(navLinks).map((key, i) => (
                    <li key={key} className={i === Object.keys(navLinks).length - 1 ? "clearfix" : undefined}>
                        <Link href={navLinks[key].href}>
                            <a onClick={() => this.toggleMobileMenu()}>{navLinks[key].title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    render = (): JSX.Element => {
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
    };
}
