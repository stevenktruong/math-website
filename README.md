# Table of Contents

-   [Development](#development)
-   [Content](#content)
    -   [Assets](#assets)
    -   [`./data/personal.md`](#datapersonalmd)
        -   [Metadata](#metadata)
    -   [`./data/classes/[classCode]/index.md`](#dataclassesclasscodeindexmd)
        -   [Metadata](#metadata-1)
    -   [`./data/classes/[classCode]/macros.json`](#dataclassesclasscodemacrosjson)
    -   [`./data/classes/[classCode]/notes/[noteName].md`](#dataclassesclasscodenotesnotenamemd)
        -   [Custom Tags](#custom-tags)
        -   [Metadata](#metadata-2)

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

These content in each of these tags is boxed. In these tags, content in `<h6>` tags (or after `######`) will be used as inline headers.

#### Counters

-   `<example>`
-   `<solution>`
-   `<exercise>`

Examples and exercises are counted automatically as the Markdown file is read. For example, the second `<example>` tag in the document will be formatted as `Example 2.` without needing to count manually.

### Metadata

```yml
title: title of the notes
date: date for the notes (notes will be sorted based on this)
tags: list of tags related to the notes (e.g., topics covered)
publish: whether the page will be visible or not on the website
```
