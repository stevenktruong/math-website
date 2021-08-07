import * as React from "react";

import { NextRouter, withRouter } from "next/router";

import { formatQuarterYear, publicRuntimeConfig } from "helpers";

import { Quarter } from "types";

import styles from "./Breadcrumbs.module.scss";

const separator = ">";
const backSeparator = "<";

interface Props {
    router: NextRouter;

    // /teaching/[classCode]/[noteName]
    classData?: {
        year: number;
        quarter: Quarter;
        course: string;
    };
    noteName?: string;

    // /quals/[topic]/[problemCode]
    formattedTopicName?: string;
    problemData?: {
        year: number;
        quarter: Quarter;
        problemNumber: number;
    };
}

const breadcrumbFormatting: Record<string, (props: Props) => string> = {
    // Any subpath of /teaching/[classCode]/[noteName]
    teaching: () => "Teaching",
    classCode: (props: Props) => {
        const classData = props.classData!;
        return `${classData.course} (${formatQuarterYear(classData.quarter, classData.year)})`;
    },
    noteName: (props: Props) => props.noteName!,

    // Any subpath of /quals/[topic]/[problemCode]
    quals: () => "Qualifying Exams",
    topic: (props: Props) => props.formattedTopicName!,
    problemCode: (props: Props) => {
        const problemData = props.problemData!;
        return `${formatQuarterYear(problemData.quarter, problemData.year)} - Problem ${problemData.problemNumber}`;
    },
};

class Breadcrumbs extends React.Component<Props> {
    render(): JSX.Element {
        const router = this.props.router;

        // This should not be rendered on the homepage
        if (router.pathname === "/") return <></>;

        // E.g., if we visit "/teaching/123a.2.20f/file-1#theorem-1/", we want currentPath to become [ "teaching", "123a.2.20f", "file-1" ]

        // router.pathname is the general dynamic path, e.g., /teaching/[classCode]/[noteName]#tag/
        const currentDynamicPath = router.pathname
            .split("/") // [ "", "teaching", "[classCode]", "[noteName]#tag", "" ]
            .slice(1) // [ "teaching", "[classCode]", "[noteName]#tag", "" ]
            .map((level) => level.split("#")[0]) // [ "teaching", "[classCode]", "[noteName]", "" ]
            .map((level) => level.match(/\[?([a-zA-Z]+)\]?/)![1]); // [ "teaching", "classCode", "noteName", "" ]

        // Substitute query parameters into the path, so we get [ "teaching", "123a.2.20f", "file-1", "" ]
        const currentPath = currentDynamicPath.map((level) => (router.query[level] as string) || level);
        if (currentPath[currentPath.length - 1] === "") currentPath.pop();

        const titles = [
            ...currentPath.map((level, index) => {
                // E.g., classCode
                const query = currentDynamicPath[index];

                // If a format is specified, use it; otherwise, just return the corresponding string in the URL
                return Object.keys(breadcrumbFormatting).includes(query)
                    ? breadcrumbFormatting[query](this.props)
                    : level;
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
    }
}

export default withRouter(Breadcrumbs);
