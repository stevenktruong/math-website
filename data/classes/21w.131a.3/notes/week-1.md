---
title: Week 1 Discussion Notes
date: "2021-01-05"
tags:
    - symbols
    - set theory
    - counterexamples
publish: yes
---

# Week 1 Discussion Notes

## Table of Contents

## Symbols

<definition>

-   $\forall\: =$ "for all" or "for any" or "for every"
-   $\exists\: =$ "there exists"
-   $\in\: =$ "is in" or "is an element of"
-   $\implies\: =$ "implies"
-   $\subseteq\: =$ "subset"
-   $\subsetneq\: =$ "proper subset"

</definition>

These will be your best friends in this class, so get used to using them all the time.

<remark>

A weird thing is that a lot of mathematicians use "$\subset$" and "$\subseteq$" to mean the same thing, even though everyone uses "$<$" and "$\leq$" mean different things.

</remark>

## Set Theory

### Common Sets

Here are some very common sets that we'll be using throughout the class:

-   $\emptyset\: =$ "empty set"
-   $\N = \set{1, 2, 3, \ldots} =$ "natural numbers" (in our textbook, natural numbers start at $1$, but that might not be the case in other books)
-   $\Z = \set{\ldots, -2, -1, 0, 1, 2, \ldots} =$ "integers"
-   $2\Z = \set{2n \mid n \in \Z} =$ "even integers"
-   $\Q =$ "rational numbers"
-   $\R =$ "real numbers"

We will be covering the construction of these sets (especially $\Q$ and $\R$) in great detail a little later in the class, but these are the sets that you "know" already.

<remark>

$\emptyset$ is a subset of every set. The idea goes like this: if $\emptyset$ were **not** a subset of $A$, then there exists $x \in \emptyset$ such that $x \notin A$. But $\emptyset$ has no elements, so $\emptyset \subseteq A$. This is an example of a [vacuous truth](https://en.wikipedia.org/wiki/Vacuous_truth).

</remark>

### Set Operations

<definition>

Let $A, B$ be sets. Then

1. The **union** of $A$ and $B$ is $A \cup B = \set{x \mid x \in A \text{ or } x \in B}$.
2. The **intersection** of $A$ and $B$ is $A \cap B = \set{x \mid x \in A \text{ and } x \in B}$.
3. The **complement** of $A$ is $A^\comp = \set{x \mid x \notin A}$.

</definition>

Let's understand these one-by-one:

1. Taking the union of $A$ and $B$ just means dumping everything in $A$ and everything in $B$ into one bigger set.
2. The intersection of $A$ and $B$ means everything that's in both sets.
3. The complement of $A$ is everything that's outside of $A$ (i.e., everything that's not an element of $A$).

Now that we have some basic set operations, it's natural to ask what happens when we mix them together:

<proposition> De Morgan's laws

Let $A, B$ be sets. Then

1. $\p{A \cup B}^\comp = A^\comp \cap B^\comp$
2. $\p{A \cap B}^\comp = A^\comp \cup B^\comp$

</proposition>

<proof>

(i): If $x \in A \cup B$, then $x$ is in _at least one_ of $A$ or $B$. The negation of "at least one" is "none," so $x \notin A \cup B$ if and only if $x \notin A$ and $x \notin B$, which means

$$
\p{A \cup B}^\comp
    = \set{x \mid x \notin A \text{ and } x \notin B}
    = A^\comp \cap B^\comp.
$$

Here's the picture:

<img src="{{ assetsFolder }}/images/demorgan-acupb.png" width=100% />

(ii): The idea is the same: if $x \in A \cap B$, then $x$ is in _both_ $A$ and $B$. The negation of "both" is "at most one," so $x \notin A \cap B$ if and only if $x \notin A$ or $x \notin B$. This means

$$
\p{A \cap B}^\comp
    = \set{x \mid x \notin A \text{ or } x \notin B}
    = A^\comp \cup B^\comp.
$$

</proof>

<exercise>

Draw a picture for $\p{A \cap B}^\comp$.

</exercise>

<definition>

Let $A, B$ be sets. Then

1. The **power set** of $A$ is $\pow\p{A} = \set{B \mid B \subseteq A}$.
2. The **cartesian product** of $A$ and $B$ is $A \times B = \set{\p{a, b} \mid a \in A \text{ and } x \in B}$.

</definition>

Like before, here's a less mathy way of looking at these sets:

1. The power set of $A$ is the set of subsets of $A$, so it's a _set of sets_.
2. The cartesian product of $A$ and $B$ just means you pick one element of $A$ and one element of $B$ and put them in a pair.

<example>

If $A = \set{0, 1, 2}$, then

$$
\pow\p{A}
    = \set{\emptyset, \set{0}, \set{1}, \set{2}, \set{0, 1}, \set{0, 2}, \set{1, 2}, \set{0, 1, 2}}.
$$

</example>

<example>

If $A = \set{\emptyset, 1}$, then

$$
\pow\p{A}
    = \set{\emptyset, \set{\emptyset}, \set{1}, \set{\emptyset, 1}}.
$$

Notice that $A \neq \set{1}$ and that $\emptyset$ is _both_ a subset of $A$ and an element of $A$.

</example>

<example>

$\R \times \R = \set{\p{x, y} \mid x \in \R \text{ and } y \in \R}$. This is the 2D plane, and we also write it as $\R^2$.

</example>

## Counterexamples

It's good to know a lot of counterexamples to prevent you from writing down things that are wrong. A lot of times, something is "intuitively true," but turns out to be false. For example, when I took Calc AB in high school, I wrote something like this:

> Since $f$ is continuous, it is differentiable somewhere.

I now know how wrong I was, but as a beginner, this made sense to me since it was true for every example I could think of. The issue was that I wasn't exposed to enough counterexamples. This statement is false because there are [functions which are continuous everywhere, but differentiable nowhere](https://en.wikipedia.org/wiki/Weierstrass_function).

### Examples

<example>

True or false: _If $f$ is continuous at $x_0$, then it's continuous on an interval containing $x_0$._

</example>

<solution>

This one is false. For example,

$$
f\p{x}
    =
        \begin{cases}
            x & \text{if } x \in \Q, \\
            0 & \text{otherwise}.
        \end{cases}
$$

The graph looks something like this:

<img src="{{ assetsFolder }}/images/continuous-one-point.png" width=400px />

At any point $x \neq 0$ you're going to "jump" between the lines $y = 0$ and $y = x$, so you're discontinuous if $x \neq 0$. However, if you follow both lines to $x = 0$, they both converge to $0$, which is why $f$ is continuous at $x = 0$.

</solution>

<example>

True or false: _If $f_n$ is continuous and converges to the $0$ function, then $\int_0^1 f_n\p{x} \,\diff{x}$ converges to $0$ also._

</example>

<solution>

This is false. See this [Desmos graph](https://www.desmos.com/calculator/hzycszqche).

To see why $f_n$ converges to $0$, you can slide $x_0$ to be any number in $\br{0, 1}$. You'll see that if $n$ is large enough, then the spike won't include $x = x_0$. But no matter what $n$ is, my example always has $\int_0^1 f_n\p{x} \,\diff{x} = 1$, so the integrals can't converge to $0$.

</solution>

<example>

True or false: _If $f$ is continuous, then the image of $\p{a, b}$ is still an interval._ (An interval is anything of the form $\p{c, d}, \pco{c, d}, \poc{c, d}$, or $\br{c, d}$.)

</example>

<solution>

This is true because of the intermediate value theorem (it's a bit technical to explain in detail, though, but we'll revisit this in the future). This is also related to something called [connectedness](https://en.wikipedia.org/wiki/Connected_space), which is covered in MATH 131B.

</solution>

The main takeaway from these examples is that there is bad intuition and good intuition. Knowing counterexamples helps you get rid of the bad intuition, which helps you avoid making mistakes.
