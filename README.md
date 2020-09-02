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
```

## `./data/classes/[classCode]/index.md`

### Metadata

```yml
courseDescription: official class description
section: section I'm teaching
instructor: name of the instructor
instructorUrl: URL to instructor's website
discussions:
    - section: section this information applies to
      time: [MTWRF] [START] - [END]
      location: where the discussion takes place
officeHours:
    - section: section this information applies to
      time: [MTWRF] [START] - [END]
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

### `./data/classes/[classCode]/notes/[noteName].md`

Notes for students to read and review from.

Use the custom `<theorem>` tag for boxed theorems.

### Metadata

```yml
title: title of the notes
date: date for the notes (notes will be sorted based on this)
publish: whether the page will be visible or not on the website
```
