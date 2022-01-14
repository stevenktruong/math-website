---
title: Week 2 Discussion Notes
date: "2022-01-13"
tags:
    - metric space topology
publish: yes
---

# Week 2 Discussion Notes

## Table of Contents

## Metric Space Topology

### Open Balls

<definition>

Let $\p{X, d}$ be a metric space. If $x \in X$ and $r > 0$, then the **open ball** of radius $r$ centered at $x$ is

$$
B\p{x, r}
    = \set{y \in X \mid d\p{x, y} < r}.
$$

</definition>

When talking about topology (i.e., open sets, closed sets, etc.), open balls are like the "atoms." They're going to be the main object used in the definitions and concepts of this section.

<definition>

Let $\p{X, d}$ be a metric space and $E \subseteq X$ be a subset.

1. The **interior** of $E$, denoted $\Int{E}$, is the set of points $x \in X$ where there exists $r > 0$ such that $B\p{x, r} \subseteq E$.
2. The **exterior** of $E$, denoted $\Ext{E}$, is the set of points $x \in X$ where there exists $r > 0$ such that $B\p{x, r} \subseteq X \setminus E$.
3. The **boundary** of $E$, denoted $\bd{E}$, is the set of points that are not in $\Int{E}$ or $\Ext{E}$.

</definition>

<example>

<img src="{{ assetsFolder }}/images/int-ext-bd.png" width=100% />

(Anything dashed is not included in the set.)

</example>

### Open and Closed Sets

<definition>

Let $\p{X, d}$ be a metric space and $E \subseteq X$ be a subset.

1. $E$ is **open** if for every $x \in E$, there exists $r > 0$ such that $B\p{x, r} \subseteq E$.
2. $E$ is **closed** if its complement $X \setminus E$ is open.

</definition>

One thing to note that is open is _not_ the opposite of closed.

<example>

Let $\p{X, d} = \p{\R, \abs{\:\cdot\:}}$.

1. $E = \p{0, 1}$ is an open set, but not closed.
    - $E = \p{0, 1} = B\p{\frac{1}{2}, \frac{1}{2}}$, so it's an open set. On the other hand, its complement is $\R \setminus E = \poc{-\infty, 0} \cup \pco{1, \infty}$, which is not open. For example, $1$ is not in the interior of $\R \setminus E$.
2. $E = \br{0, 1}$ is a closed set, but not open.
    - Its complement is $\R \setminus E = \p{-\infty, 0} \cup \p{1, \infty}$, which is open. However, $E$ itself is not open since, for example, $0$ is not in the interior of $E$.
3. $E = \pco{0, 1}$ is neither open nor closed.
    - $E$ is not open since $0$ is not in the interior of $E$. On the other hand, its complement $\R \setminus E = \p{-\infty, 0} \cup \pco{1, \infty}$ is not open, since $1$ is not in the interior of $X \setminus E$.
4. $E = \R$ is both open and closed.
    - $E$ is definitely open since every open ball is a subset of $E$, i.e., a subset of the whole space. On the other hand, $\R \setminus \R = \emptyset$, which is open. (This is an example of a vacuous truth. The empty set satisfies the definition of an open set because there are no elements to check the condition on.)

</example>

The next two propositions tell you how open/closed sets interact with unions/intersections:

<proposition>

Let $\p{X, d}$ be a metric space.

1. $\emptyset, X$ are both open.
2. If $\set{U_i}_{i \in I}$ is a collection of open sets indexed by $I$, then its union $\bigcup_{i \in I} U_i$ is also open.

    $$
    ``\text{Open sets are closed under arbitrary unions.}"
    $$

3. If $U_1, \ldots, U_n$ are open sets, then their intersection $U_1 \cap \cdots \cap U_n$ is also open.

    $$
    ``\text{Open sets are closed under finite intersections.}"
    $$

</proposition>

<proposition>

Let $\p{X, d}$ be a metric space.

1. $\emptyset, X$ are both closed.
2. If $\set{F_i}_{i \in I}$ is a collection of closed sets indexed by $I$, then its union $\bigcap_{i \in I} F_i$ is also closed.

    $$
    ``\text{Closed sets are closed under arbitrary intersections.}"
    $$

3. If $F_1, \ldots, F_n$ are closed sets, then their union $F_1 \cup \cdots \cup F_n$ is also closed.

    $$
    ``\text{Closed sets are closed under finite unions.}"
    $$

</proposition>

The takeaway from these propositions is this:

1. Open sets interact nicely with unions.
2. Closed sets interact nicely with intersections.

### Adherent Points and Closure

<definition>

Let $\p{X, d}$ be a metric space and $E \subseteq X$ be a subset. Then $x \in X$ (note that $x$ is not required to be an element of $E$) is an **adherent point** of $E$ if for every $r > 0$, we have $B\p{x, r} \cap E \neq \emptyset$. The set of adherent points of $E$ is called the **closure** of $E$ and is denoted $\cl{E}$.

</definition>

Let's take another look at the definition of an adherent point:

$$
\text{for all } r > 0,\ B\p{x, r} \cap E \neq \emptyset.
$$

We can write it like this:

$$
\text{for all } r > 0, \text{ there exists } y \in E \text{ such that } d\p{x, y} < r.
$$

When you look at this definition, you should be thinking of what happens when $r$ is really small. Then you can interpret an adherent point as follows:

$$
``x \text{ is an adherent point of } E \text{ if it can be approximated by elements in } E."
$$

By quantifying what this means in different ways, you can find different ways of defining an adherent point:

<proposition>

Let $\p{X, d}$ be a metric space and $E \subseteq X$ a subset. The following are equivalent:

1. $x$ is an adherent point of $E$.
2. $x \in \cl{E}$.
3. $x \notin \Ext{E}$.
4. There exists a sequence $\set{x_n}_n$ of elements in $E$ such that $\lim_{n\to\infty} x_n = x$.

</proposition>

<remark>

To interpret (iii), if $x \in \Ext{E}$, then $x$ is far away from $E$, so it cannot be approximated by elements in $E$. Thus, if $x \notin \Ext{E}$, then it's close to $E$, so it's an adherent point.

</remark>

## Examples

<example>

Let $\p{X, d} = \p{\R, \abs{\:\cdot\:}}$. Show that $\cl{\Q} = \R$.

</example>

<solution>

Recall that $\Q$ is **dense** in $\R$: given any $a < b$, there exists an element $q \in \Q$ such that $a < q < b$. Rewriting,

$$
a < q < b \iff q \in \p{a, b},
$$

so $\Q$ intersects every open interval in $\R$.

To show that $\cl{\Q} = \R$, we need to show that every element $x \in \R$ is an adherent point of $\Q$, i.e., for every $r > 0$, we have $B\p{x, r} \cap \Q \neq \emptyset$. But $B\p{x, r} = \p{x - r, x + r}$, so by density of $\Q$, we see

$$
B\p{x, r} \cap \Q
    = \p{x - r, x + r} \cap \Q
    \neq \emptyset,
$$

so $x \in \cl{\Q}$. Thus, $\cl{\Q} = \R$, which was what we wanted to show.

</solution>

<example>

(This example might be a little too hard for this class, but it's a good problem to chew on to test your analysis knowledge.)

Consider the metric space given by

$$
\begin{aligned}
    X
        &= \ell^1\p{\N} \\
        &= \set{\text{absolutely summable real sequences}} \\
        &= \set{\left. \func{a_n}{\N}{\R} \st \sum_{n=1}^\infty \abs{a_n} < \infty \right.} \\
    d\p{a, b} &= \sum_{n=1}^\infty \abs{a_n - b_n}.
\end{aligned}
$$

Let

$$
E = \set{\text{sequences in } \ell^1\p{\N} \text{ with at most finitely many non-zero terms}}.
$$

Show that $E$ is dense in $\ell^1\p{\N}$, i.e., show $\cl{E} = \ell^1\p{\N}$.

</example>

<solution>

We need to show, given $a = \set{a_n}_n \in \ell^1\p{\N}$ and $\epsilon > 0$, that

$$
B\p{a, \epsilon} \cap E \neq \emptyset.
$$

Equivalently, we need to find an element $b = \set{b_n}_n \in E$ (i.e., an element with at most finitely many non-zero terms) such that

$$
d\p{a, b} < \epsilon
\iff \sum_{n=1}^\infty \abs{a_n - b_n} < \epsilon.
$$

Let's work backwards to find $b$: given any $b \in E$, $b$ has only finitely many non-zero terms, so there exists $N$ such that $b_n = 0$ for $n \geq N$. Thus,

$$
\begin{aligned}
    d\p{a, b}
        &= \sum_{n=1}^\infty \abs{a_n - b_n} \\
        &= \sum_{n=1}^N \abs{a_n - b_n} + \sum_{n=N+1}^\infty \abs{a_n - 0} \\
        &= \sum_{n=1}^N \abs{a_n - b_n} + \sum_{n=N+1}^\infty \abs{a_n}.
\end{aligned}
$$

To make this quantity small, remember that we have the freedom to choose what each $b_n$ can be. So, we can simply set $b_n = a_n$ for $1 \leq n \leq N$ to make the first sum vanish:

$$
d\p{a, b}
    = \sum_{n=N+1}^\infty \abs{a_n}.
$$

To finish the proof, it suffices to show that there exists $N$ such that the tail of this sum is smaller than $\epsilon$. But the sequence $a$ is absolutely summable, which means that

$$
\lim_{N\to\infty} \sum_{n=N+1}^\infty \abs{a_n}
    = 0.
$$

Thus, we can find $N$ so that $\sum_{n=N+1}^\infty \abs{a_n} < \epsilon$.

Let's put everything together: let $\epsilon > 0$, and let $N$ be as in the previous sentence. Set

$$
b_n
    =
        \begin{cases}
            a_n & \text{if } 1 \leq n \leq N, \\
            0   & \text{if } n > N.
        \end{cases}
$$

By construction, $b = \set{b_n}_n$ only has finitely many non-zero terms, so $b \in E$. Moreover,

$$
\begin{aligned}
    d\p{a, b}
        &= \sum_{n=1}^\infty \abs{a_n - b_n} \\
        &= \sum_{n=N+1}^\infty \abs{a_n} \\
        &< \epsilon.
\end{aligned}
$$

So $b \in B\p{a, \epsilon} \cap E$, and because $\epsilon$ was arbitrary, it follows that $a \in \cl{E}$. Since $a$ was also arbitrary, we conclude that $\cl{E} = \ell^1\p{\N}$.

</solution>
