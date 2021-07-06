---
title: Week 1 Discussion Notes
date: "2020-10-08"
tags:
    - symbols
    - notation
    - functions
    - inverses
publish: yes
---

# Week 1 Discussion Notes

## Table of Contents

## Symbols

Here are a bunch of symbols that you'll probably see during lecture (and if you're a math major, for the rest of your life).

<definition>

-   $\mathbb{R} = \text{ the set of real numbers } = \p{-\infty, \infty}$
-   $\in\: =$ "is in" or "is an element of"
-   $\exists\: =$ "there exists"
-   $\forall\: =$ "for all" or "for any" or "for every"
-   $\implies\: =$ "implies"

</definition>

<example>

$\exists$ water $\in$ my fridge

$\forall$ student $\in$ MATH 31B, the student is an undergraduate

you are here $\implies$ you $\in$ MATH 31B

you are here $\ \ \not\!\!\!\implies$ you are awake

## Set Notation

You're probably familiar with intervals to specify sets (e.g., $\p{a, b}$, $\br{a, b}$, etc.). While these are useful, some sets may be hard or tedious to write as intervals, so we're going to introduce a new, more general way to specify sets.

<example>

$\set{x \in \R \mid x \neq 0} = \p{-\infty, 0} \cup \p{0, \infty} = \mathbb{R} \setminus \set{0}$

</example>

<example>

The domain of $f\p{x} = \tan{x}$ is $\set{x \in \R \mid x \neq \frac{\pi}{2} + \pi n,\ n \text{ is an integer}}$.

</example>

<exercise>

Write $\set{x \in \R \mid a < x \text{ and } x \leq b}$ as an interval.

</exercise>

<exercise>

Write the domain of $f\p{x} = \cot{x}$ using this notation.

</exercise>

## Functions

A function $f$ always comains with a domain $D$, and the range of $f$ is determined by $D$. If the domain isn't specified, then it's usually taken to be the largest set where $f$ is defined.

<example>

If $f\p{x} = \frac{1}{x}$ and $D$ is not specified, then we assume $D = \set{x \in \R \mid x \neq 0}$.

</example>

<example>

Let $f\p{x} = x^2$.

-   $D = \R \implies R = \left[ 0, \infty \right)$
    <img src="{{ assetsFolder }}/images/x^2-1.png" height=200px, style="margin: 0;">

-   $D = \left[ 0, \infty \right) \implies R = \left[ 0, \infty \right)$
    <img src="{{ assetsFolder }}/images/x^2-2.png" height=200px, style="margin: 0;">

-   $D = \set{x \in \R \mid x > 2} \implies R = \p{4, \infty}$
    <img src="{{ assetsFolder }}/images/x^2-3.png" height=200px, style="margin: 0;">

</example>

## Inverses

### What is an Inverse?

Given a function $f$, we'd like to know if we can go "backwards" from $f$. This is useful if you need to solve something like $f\p{x} = y$; if we can "undo" $f$, then we automatically have the solution to the equation. This can be done if $f$ is invertible:

<definition>

Let $f$ have domain $D$ and range $R$. If $\exists g$ with domain $R$ and range $D$ such that

-   $f\p{g\p{x}} = x\quad\forall x \in R$ and
-   $g\p{f\p{x}} = x\quad\forall x \in D$,

then we say $f$ is **invertible** and we call $f^{-1} = g$ the **inverse** of $f$.

<img src="{{ assetsFolder }}/images/inverse.png" height=400px>

</definition>

### When is there an Inverse?

So when does $f$ have an inverse? Let's look at a situation where $f$ does _not_ have one.

<img src="{{ assetsFolder }}/images/no-inverse.png" height=400px>

$f$ doesn't have an inverse here because we can't go backwards from $y$ to get both $a$ and $b$. Indeed, any function $g$ with domain $R$ will map $y$ to either $a$ or $b$, but not both. The problem is that $f$ maps two different elements to the same thing, so if we prevent this, $f$ will have an inverse.

To prevent this, we need $f$ to map two different elements to two different things. More succinctly, $a \neq b \implies f\p{a} \neq f\p{b}$. If $f$ satisfies this, then we call $f$ one-to-one, but this isn't the only way to tell if $f$ is one-to-one:

<definition> one-to-one

Let $f$ have domain $D$, and suppose one of the following is true about $f$:

-   $a \neq b \implies f\p{a} \neq f\p{b}\ \forall a, b \in D$ or
-   $f\p{x} = y$ has exactly one solution $\forall y \in R$ or
-   $f\p{a} = f\p{b} \implies a = b\ \forall a, b \in D$ or
-   $f$ passes the horizontal line test.

Then we say $f$ is **one-to-one** or **injective**.

</definition>

Notice that the domain is very important when determining whether $f$ is one-to-one or not.

<example>

Let $f\p{x} = x^2$.

-   If $D = \R$, then $f$ _is not_ one-to-one.
    <img src="{{ assetsFolder }}/images/not-injective.png" height=400px>

    $f\p{x} = 1$ has two solutions: $-1$ and $1$.

-   If $D = \left[ 0, \infty \right)$, then $f$ _is_ one-to-one.
    <img src="{{ assetsFolder }}/images/injective.png" height=400px>

    Since $f$ is one-to-one, it has an inverse, which is $f^{-1}\p{x} = \sqrt{x}$.

</example>
