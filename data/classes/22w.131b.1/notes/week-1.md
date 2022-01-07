---
title: Week 1 Discussion Notes
date: "2022-01-06"
tags:
    - metric spaces
publish: yes
---

# Week 1 Discussion Notes

## Table of Contents

## Metric Spaces

When working with metric spaces, there are two main examples you want to have in mind:

1. $\p{\R, \abs{\,\cdot\,}}$, which is useful to have in the back of your mind when doing proofs for general metric spaces.
2. $\p{\R^2, \text{Euclidean distance}}$, which is useful when drawing pictures (this will be an especially helpful example when we get to point-set topology).

<definition> metric spaces

Let $X$ be a non-empty set. A function $\func{d}{X \times X}{\pco{0, \infty}}$ is called a **metric** on $X$ if:

1. $d\p{x, y} = 0 \iff x = y$
2. (symmetry) $d\p{x, y} = d\p{y, x}$
3. (triangle inequality) $d\p{x, y} \leq d\p{x, z} + d\p{z, y}$

The tuple $\p{X, d}$ is called a **metric space**.

</definition>

In analysis, one of the most important concepts is convergence, i.e., limits:

<definition>

Let $\p{X, d}$ be a metric space. We say that a sequence $\p{x_n}$ **converges** to $x$ with respect to the metric $d$ if $\lim_{n\to\infty} d\p{x_n, x} = 0$.

Equivalently, if for any $\epsilon > 0$, there exists $N$ such that if $n \geq N$, then $d\p{x_n, x} < \epsilon$.

</definition>

### Motivation

<example>

Let $X = C\p{\br{0, 1}}$ be the set of continuous functions on the interval $\br{0, 1}$. We will consider two metrics on this set:

$$
\begin{aligned}
    d_1\p{f, g} &= \int_0^1 \abs{f\p{x} - g\p{x}} \,\diff{x} \\
    d_2\p{f, g} &= \sup_{x \in \br{0,1}} \abs{f\p{x} - g\p{x}}
\end{aligned}
$$

(In the live discussion, I flipped these.)

Consider the sequence $f_n\p{x} = x^n$. In the first metric,

$$
d_1\p{f_n, 0}
    = \int_0^1 x^n \,\diff{x}
    = \frac{1}{n + 1}
    \xrightarrow{n\to\infty} 0.
$$

In the second metric,

$$
d_2\p{f_n, 0}
    = \sup_{x \in \br{0,1}} x^n
    = 1.
$$

Our calculations show that $f_n$ converges to $0$ with respect to $d_1$ (which is called the $L^1$-metric), but it does _not_ converge with respect to $d_2$ (which is called the $\sup$-metric or $L^\infty$-metric).

**Moral:** Different metrics capture different types of convergence.

In analysis, one of the central concepts is convergence, and metrics are an important way to describe the type of convergence we have.

</example>

### Examples

<example> (Exercise 1.1.10)

Let $X = \R^n$ and let

$$
\begin{aligned}
    d_{\ell^2}\p{x, y} &= \p{\sum_{i=1}^n \abs{x_i - y_i}^2}^{1/2}, \\
    d_{\ell^\infty}\p{x, y} &= \sup_{1 \leq i \leq n} \abs{x_i - y_i}.
\end{aligned}
$$

Show that

$$
\frac{1}{\sqrt{n}} d_{\ell^2}\p{x, y} \leq d_{\ell^\infty}\p{x, y} \leq d_{\ell^2}\p{x, y}.
$$

</example>

<solution>

There are two inequalities to show:

$$
\frac{1}{\sqrt{n}} d_{\ell^2}\p{x, y} \leq d_{\ell^\infty}\p{x, y}
\quad\text{and}\quad
d_{\ell^\infty}\p{x, y} \leq d_{\ell^2}\p{x, y}.
$$

Let's start with the first one. Notice that by definition of a supremum,

$$
\abs{x_i - y_i} \leq d_{\ell^\infty}\p{x, y}
$$

for any $1 \leq i \leq n$. Thus,

$$
\begin{aligned}
    d_{\ell^2}\p{x, y}
        &= \p{\sum_{i=1}^n \abs{x_i - y_i}^2}^{1/2} \\
        &\leq \p{\sum_{i=1}^n d_{\ell^\infty}\p{x, y}^2}^{1/2} \\
        &= \p{n d_{\ell^\infty}\p{x, y}^2}^{1/2} \\
        &= \sqrt{n} d_{\ell^\infty}\p{x, y} \\
    \implies
    \frac{1}{\sqrt{n}} d_{\ell^2}\p{x, y}
        &\leq d_{\ell^\infty}\p{x, y},
\end{aligned}
$$

which proves the first inequality. For the second inequality, we want to prove a statement about a supremum-we want to show that

$$
\sup_{1 \leq i \leq n} \abs{x_i - y_i}
    \leq d_{\ell^2}\p{x, y}.
$$

When you want to prove something like this, you almost _never_ want to find an inequality with the supremum directly. Instead, you want to find an upper bound for every element you take the supremum of, i.e., you want to find an upper bound for $\abs{x_k - y_k}$ that works for each $1 \leq k \leq n$ (I switched to $k$ here since I want to use $i$ for the index in the sum):

$$
\begin{aligned}
    \abs{x_k - y_k}
        &= \p{\abs{x_k - y_k}^2}^{1/2} \\
        &\leq \p{\sum_{i=1}^n \abs{x_k - y_k}^2}^{1/2} \\
        &= d_{\ell^2}\p{x, y}.
\end{aligned}
$$

Thus, $d_{\ell^2}\p{x, y}$ is an upper bound for the set $\set{\abs{x_i - y_i} \mid 1 \leq i \leq n}$, so because the supremum is the _least_ upper bound, you immediately get

$$
d_{\ell^\infty}\p{x, y}
    = \sup_{1 \leq i \leq n} \abs{x_i - y_i}
    \leq d_{\ell^2}\p{x, y}.
$$

</solution>

<example> (Exercise 1.1.13)

Let $X$ be any set, and let $d$ be the discrete metric on $X$:

$$
d\p{x, y}
    =   \begin{cases}
            0 & \text{if } x = y, \\
            1 & \text{if } x \neq y.
        \end{cases}
$$

Show that $\p{x_n}$ converges to $x$ with respect to the discrete metric if and only if there exists an $N$ such that $x_n = x$ for all $n \geq N$.

</example>

<solution>

There are two implications to prove:

"$\impliedby$"

Assume that there exists $N$ such that $x_n = x$ for all $n \geq N$. Given any $\epsilon > 0$, if $n \geq N$, then

$$
d\p{x_n, x}
    = d\p{x, x}
    = 0
    < \epsilon.
$$

Thus, $\p{x_n}$ converges to $x$ with respect to the discrete metric. (We never used the fact that $d$ is the discrete metric, so in this case, $\p{x_n}$ actually converges to $x$ with respect to _any_ metric.)

"$\implies$"

Now assume that $\p{x_n}$ converges to $x$ with respect to the discrete metric. This means that given _any_ $\epsilon > 0$, there exists $N$ such that if $n \geq N$, then $d\p{x_n, x} < \epsilon$.

Here, we will need to use the fact that $d$ is the discrete metric: if we pick $\epsilon = \frac{1}{2}$, then there exists an $N$ so that if $n \geq N$, then $d\p{x_n, x} < \frac{1}{2}$. But $d$ is the discrete metric, so the only way this can occur is if $d\p{x_n, x} = 0$, i.e., $x_n = x$. Thus, we have shown that if $n \geq N$, then $x_n = x$, which was what we wanted to show.

</solution>
