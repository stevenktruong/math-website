import * as React from "react";

import { NextRouter, withRouter } from "next/router";

import { breadcrumbFormatting } from "config/formatting";

import { publicRuntimeConfig } from "helpers";

import { FileData } from "types";

import styles from "./Breadcrumbs.module.scss";

const separator = ">";
const backSeparator = "<";

interface BreadcrumbsProps {
    fileData: FileData;
    router: NextRouter;
}

class Breadcrumbs extends React.Component<BreadcrumbsProps> {
    render = (): JSX.Element => {
        const router = this.props.router;

        // This should not be rendered on the homepage
        if (router.pathname === "/") return null;

        // E.g., if we visit "/teaching/123a.2.20f/file-1#theorem-1/", we want currentPath to become [ "teaching", "123a.2.20f", "file-1" ]

        // The pathname is the general dynamic path, e.g., /teaching/[classCode]/[noteName]#tag/
        const currentDynamicPath = router.pathname
            .split("/") // [ "", "teaching", "[classCode]", "[noteName]#tag", "" ]
            .slice(1) // [ "teaching", "[classCode]", "[noteName]#tag", "" ]
            .map((level) => level.split("#")[0]) // [ "teaching", "[classCode]", "[noteName]", "" ]
            .map((level) => level.match(/\[?([a-zA-Z]+)\]?/)![1]); // [ "teaching", "classCode", "noteName", "" ]

        // Substitute query parameters into the path
        const currentPath = currentDynamicPath.map((level) => (router.query[level] as string) || level);
        if (currentPath[currentPath.length - 1] === "") currentPath.pop();

        const titles = [
            ...currentPath.map((level, index) => {
                // E.g., classCode
                const query = currentDynamicPath[index];

                // Display data associated with the levelType
                const breadcrumbType = breadcrumbFormatting[query];

                // Place to pull information from
                const sourcePropName = breadcrumbType.sourceProp;

                // E.g., teaching doesn't need any data
                if (!sourcePropName) return breadcrumbType.format();

                // From the data source, format the breadcrumb
                const sourceProp = this.props.fileData[sourcePropName as keyof FileData];
                return sourceProp ? breadcrumbType.format(sourceProp) : level;
            }),
        ];

        return (
            <div className={styles.Breadcrumbs}>
                <a className={styles.Crumb} href={`${publicRuntimeConfig.staticFolder}/`} key="Home">
                    <span className={styles.BackSeparator} key={`homeBackSeparator`}>{`${backSeparator}`}</span>
                    Home
                </a>
                {currentPath.map((level, index) => {
                    const href = `${publicRuntimeConfig.staticFolder}/${currentPath.slice(0, index + 1).join("/")}`;
                    const isSecondToLast = index === currentPath.length - 2;
                    const isLast = index === currentPath.length - 1;
                    return (
                        <React.Fragment key={`${level}Fragment`}>
                            <span className={styles.Separator} key={`${level}Separator`}>{`${separator}`}</span>

                            {/* The last breadcrumb is not an anchor */}
                            {!isLast ? (
                                <>
                                    <a href={href} className={styles.Crumb} key={level}>
                                        {/* On smaller screens, we only have a breadcrumb to the previous page */}
                                        {isSecondToLast ? (
                                            <span
                                                className={styles.BackSeparator}
                                                key={`${level}BackSeparator`}
                                            >{`${backSeparator}`}</span>
                                        ) : null}
                                        {titles[index]}
                                    </a>
                                </>
                            ) : (
                                <span className={styles.Crumb} key={level}>
                                    {titles[index]}
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    };
}

export default withRouter(Breadcrumbs);
