# Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Development](#development)
-   [Content](#content)
    -   [Assets](#assets)
    -   [`./data/personal.md`](#datapersonalmd)
        -   [Metadata](#metadata)
    -   [`./data/classes/[classCode]/index.md`](#dataclassesclasscodeindexmd)
        -   [Announcements Table](#announcements-table)
        -   [Note Links](#note-links)
        -   [Metadata](#metadata-1)
    -   [`./data/classes/[classCode]/macros.json`](#dataclassesclasscodemacrosjson)
    -   [`./data/classes/[classCode]/notes/[noteName].md`](#dataclassesclasscodenotesnotenamemd)
        -   [Custom Tags](#custom-tags)
            -   [Boxed Sections](#boxed-sections)
            -   [Counters](#counters)
        -   [Metadata](#metadata-2)
    -   [`./data/quals/[topic]/index.md`](#dataqualstopicindexmd)
        -   [Metadata](#metadata-3)
    -   [`./data/quals/[topic]/macros.json`](#dataqualstopicmacrosjson)
    -   [`./data/quals/[topic]/problems/[problemCode].md`](#dataqualstopicproblemsproblemcodemd)
        -   [Custom Tags](#custom-tags-1)
        -   [Metadata](#metadata-4)

# Development

The static site can be built with `yarn build:dev` or `yarn build:production`. The only difference between the two is the base path (the live website has index `/~steven` instead of just `/`).

A local webserver can be started with `yarn dev`.

# Content

All content is contained in `./data` or `./public`. The folder structure is as follows:

```
.
+-- data
    +-- personal.md
    +-- classes/[classCode]
        +-- index.md
        +-- macros.json
        +-- notes
            +-- [noteName].md
    +-- quals/[topic]
        +-- index.md
        +-- macros.json
        +-- problems
            +-- [problemCode]
+-- public
    +-- classes
        +-- [classCode]
            +-- [noteName]
```

## Assets

Assets for a note `[noteName].md` in the class `[classCode]` should be placed in `./public/classes/[classCode]/[noteName]`. The assets can then be accessed with `{{ assetsFolder }}` in the Markdown file.

## `./data/personal.md`

Contains the blurb on the "About Me" section at the index.

### Metadata

```yml
fullName: my full name
office: my office
email: my (obfuscated) email address
address: an array; each line is a line in the address
fax: my (or the math office's) fax number
```

## `./data/classes/[classCode]/index.md`

Contains all the data about the class, including announcements and policies.

### Announcements Table

In the announcements section, each line should be in the form `| [MM/DD/YY] | [announcement]` for it to be added to the table.

### Note Links

All instances of `notes::[noteName].md` will be replaced with `noteName`'s title that links to the actual note.

### Metadata

```yml
courseDescription: official class description
section: section I'm teaching
instructor: name of the instructor
instructorUrl: URL to instructor's website
discussions:
    - section: section this information applies to
      days: [MTWRF]
      time: [START] - [END]
      location: where the discussion takes place
officeHours:
    - section: section this information applies to
      days: [MTWRF]
      time: [START] - [END]
      location: where the office hours take place
links:
    - title: title for the link
      url: the link
```

## `./data/classes/[classCode]/macros.json`

Defines LaTeX macros for the class. They will mainly be used in the notes.

```json
{
    "\\commandName": "macro",
    ...
}
```

## `./data/classes/[classCode]/notes/[noteName].md`

Notes for students to read and review from.

### Custom Tags

#### Boxed Sections

-   `<theorem>`
-   `<definition>`
-   `<proposition>`

These content in each of these tags is boxed. Text in the same line but after the opening tag are put in parentheses. For example, `<theorem> Cauchy` will automatically insert `Theorem (Cauchy)` at the beginning of the content.

#### Counters

-   `<exercise>`
-   `<example>`
-   `<solution>`

Examples and exercises are counted automatically as the Markdown file is read. For example, the second `<example>` tag in the document will be formatted as `Example 2.` without needing to count manually.

### Metadata

```yml
title: title of the notes
date: YYYY-MM-DD (just for reference)
tags: list of tags related to the notes (e.g., topics covered)
publish: whether the page will be visible or not on the website
```

## `./data/quals/[topic]/index.md`

Contains the full title of the qual topic and some basic information about my solutions. For example, collaborators and resources should be named here.

The page for a qual topic is generated by taking `index.md` and (at build time) generating the list of the qual problems by year and quarter.

### Metadata

```yml
title: Full topic name
```

## `./data/quals/[topic]/macros.json`

Defines LaTeX macros for the qual topic.

```json
{
    "\\commandName": "macro",
    ...
}
```

## `./data/quals/[topic]/problems/[problemCode].md`

Contains the problem statement and a solution.

### Custom Tags

-   `<problem>`
-   `<solution>`

Mainly used for styling. Currently, `<problem>` doesn't do anything, and `<solution>` puts an italicized "Solution." at the beginning of the solution.

### Metadata

```yml
topics: a list of topics relevant to the problem (e.g., Lp spaces)
related: a list of related problems
```
