import * as React from "react";
import getConfig from "next/config";
import { withRouter } from "next/router";

import { formatCourseTitle, formatQuarterYear } from "helpers";
import styles from "./Breadcrumbs.module.scss";

const { publicRuntimeConfig = {} } = getConfig() || {};

const separator = ">";
const backSeparator = "<";
const displayBreadcrumb = {
    teaching: {
        sourceProp: null,
        format: () => "Teaching",
    },
    classCode: {
        sourceProp: "classData",
        format: classData =>
            `${formatCourseTitle(classData.course)} (${formatQuarterYear(classData.quarter, classData.year)})`,
    },
    noteName: {
        sourceProp: "noteData",
        format: noteData => noteData.title,
    },
};

class Breadcrumbs extends React.Component {
    render() {
        const router = this.props.router;

        // This should not be rendered on the homepage
        if (router.pathname === "/") return null;

        // E.g., /teaching/123a.2.20f/file-1#theorem-1/ -> [ "", "teaching", "123a.2.20f", "file-1#theorem-1", "" ], so we strip away the empty spaces and navigation
        const currentDynamicPath = router.pathname
            .split("/")
            .slice(1)
            .map(level => level.split("#")[0])
            .map(level => level.match(/\[?([a-zA-Z]+)\]?/)[1]);

        // Substitute query parameters into the path
        const currentPath = currentDynamicPath.map(level => (router.query[level] ? router.query[level] : level));
        if (currentPath[currentPath.length - 1] === "") currentPath.pop();

        const titles = [
            ...currentPath.map((level, index) => {
                // E.g., classCode
                const query = currentDynamicPath[index];

                // Display data associated with the levelType
                const breadcrumbType = displayBreadcrumb[query];

                // Place to pull information from
                const sourcePropName = breadcrumbType.sourceProp;

                // E.g., teaching doesn't need any data
                if (!sourcePropName) return breadcrumbType.format();

                // From the data source, format the breadcrumb
                const sourceProp = this.props.fileData[sourcePropName];
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
                    const isSecondToLast = index === currentPath.length - 2;
                    const isLast = index === currentPath.length - 1;
                    return (
                        <React.Fragment key={`${level}Fragment`}>
                            <span className={styles.Separator} key={`${level}Separator`}>{`${separator}`}</span>

                            {/* The last breadcrumb is not an anchor */}
                            {!isLast ? (
                                <>
                                    <a
                                        href={`${publicRuntimeConfig.staticFolder}/${currentPath
                                            .slice(0, index + 1)
                                            .join("/")}`}
                                        className={styles.Crumb}
                                        key={level}
                                    >
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
                                // Last breadcrumb is the location and is unclickable
                                <span className={styles.Crumb} key={level}>
                                    {titles[index]}
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(Breadcrumbs);
