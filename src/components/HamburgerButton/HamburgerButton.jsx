import React from "react";

import styles from "./HamburgerButton.module.scss";

export default class HamburgerButton extends React.Component {
    constructor(props) {
        super(props);

        const value = props.value;
        this.state = {
            active: value ? value : false,
        };
    }

    updateState() {
        this.setState({ active: this.props.value });
    }

    render() {
        return (
            <div
                className={styles.HamburgerButton}
                onClick={async () => {
                    await this.props.onClick();
                    this.updateState();
                }}
            >
                <div
                    className={this.state.active ? `${styles.TopBar} ${styles.TopBarActive}` : `${styles.TopBar}`}
                ></div>
                <div
                    className={
                        this.state.active ? `${styles.MiddleBar} ${styles.MiddleBarActive}` : `${styles.MiddleBar}`
                    }
                ></div>
                <div
                    className={
                        this.state.active ? `${styles.BottomBar} ${styles.BottomBarActive}` : `${styles.BottomBar}`
                    }
                ></div>
            </div>
        );
    }

    componentDidUpdate() {
        if (this.props.value !== this.state.active) this.updateState();
    }
}
