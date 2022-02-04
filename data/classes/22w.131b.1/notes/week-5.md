---
title: Week 5 Discussion Notes
date: "2022-02-03"
tags:
    - continuity
    - compactness
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Homework Comments

To prove the triangle inequality for the $\ell^1$ metric, you needed to use a limit law:

$$
\begin{aligned}
    \sum_{n=1}^\infty \abs{a_n - b_n}
        &= \lim_{N\to\infty} \sum_{n=1}^N \abs{a_n - b_n} \\
        &\leq \lim_{N\to\infty} \p{\sum_{n=1}^N \abs{a_n - c_n} + \sum_{n=1}^N \abs{c_n - b_n}} \\
        &= \lim_{N\to\infty} \sum_{n=1}^N \abs{a_n - c_n} + \lim_{N\to\infty} \sum_{n=1}^N \abs{c_n - b_n}
            && \p{\text{limit law; both sums converge}} \\
        &= \sum_{n=1}^\infty \abs{a_n - c_n} + \sum_{n=1}^\infty \abs{c_n - b_n}.
\end{aligned}
$$

Also, to show that the unit ball

$$
B = \set{\set{a_n}_n \in \ell^1 \st \sum_{n=1}^\infty \abs{a_n} \leq 1}
$$

is closed and bounded, my hint was to try to get you to recognize this set as

$$
B = \set{x \in \ell^1 \st d\p{x, 0} \leq 1},
$$

i.e., as a closed ball. We proved in lecture that closed balls are closed, and this set is bounded because $B \subseteq B_2\p{0}$ (remember that our definition of bounded involves containing the set in an _open_ ball).

## Continuity

<definition>

A function $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ is **continuous at $x_0 \in X$** if for for every $\epsilon > 0$, there exists $\delta > 0$ such that

$$
d_X\p{x, x_0} < \delta \implies d_Y\p{f\p{x}, f\p{x_0}} < \epsilon.
$$

If $f$ is continuous at every $x_0 \in X$, then we say that $f$ is **continuous**.

</definition>

<theorem>

Let $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ be a function. The following are equivalent:

1. $f$ is continuous.
2. For any $x \in X$ and any sequence $\set{x_n}_n$ in $X$ such that $x_n \xrightarrow{d_X} x$, we have $f\p{x_n} \xrightarrow{d_Y} f\p{x}$.
3. For any open set $V \subseteq Y$, the preimage $f^{-1}\p{V}$ is open.
4. For any closed set $F \subseteq Y$, the preimage $f^{-1}\p{F}$ is closed.

</theorem>

<remark>

Note that (iii) doesn't refer to the metric at all, so in more advanced math classes, (iii) is usually taken to be the definition of continuity.

</remark>

We like continuity because it lets us move limits around. For example, we can rewrite (ii) as

$$
\lim_{n\to\infty} f\p{x_n} = f\p{\lim_{n\to\infty} x_n}.
$$

Continuity is one of the biggest reasons why we're studying metric spaces to begin with. Before, we only had continuity defined for functions involving real numbers, but there are plenty of interesting functions defined on more general metric spaces. For example, the Fourier transform is defined on function spaces, and we can now talk about whether it's continuous or not.

Now that we have the notion of continuity, a reasonable question to ask if whether every metric space has a (non-trivial) continuous function or not. The answer is yes:

<example>

Let $\p{X, d}$ be a (non-empty) metric space. For a fixed $y \in X$, define $\func{f}{X}{\R}$ via $f\p{x} = d\p{x, y}$. Show that $f$ is continuous.

</example>

<solution>

For this problem, we'll want to work directly from the definition. Let $\epsilon > 0$. Like usual, we're going to work backwards to find $\delta$:

$$
\abs{f\p{x} - f\p{x_0}}
    = \abs{d\p{x, y} - d\p{x, x_0}}
    \leq d\p{x, x_0}
$$

by the reverse triangle inequality. So, if we let $\delta = \epsilon$, then whenever $d\p{x, x_0} < \delta$, we have

$$
\abs{f\p{x} - f\p{x_0}}
    \leq d\p{x, x_0}
    < \delta
    = \epsilon,
$$

so $f$ is continuous.

</solution>

<example>

Let $\p{X, d}$ be a metric space with the discrete metric and $\p{Y, d}$ be any metric space. Then every function $\func{f}{X}{Y}$ is continuous.

</example>

<solution>

For this problem, (iii) is the easiest to prove: given any open set $V \subseteq Y$, the preimage $f^{-1}\p{V}$ is automatically open because every set is open with the discrete metric.

</solution>

<example>

Let

$$
\begin{gathered}
    X = \set{\set{a_n}_n \in \ell^\infty \st \lim_{n\to\infty} a_n \text{ exists}} \\
    d\p{\set{a_n}_n, \set{b_n}_n} = \sup_n{\abs{a_n - b_n}},
\end{gathered}
$$

i.e., $X$ is the set of bounded convergent sequences. Define $\func{f}{X}{\R}$ via

$$
f\p{\set{a_n}_n} = \lim_{n\to\infty} a_n.
$$

Show that $f$ is continuous.

</example>

<solution>

For this problem, (iii) and (iv) aren't that useful just because it's hard to make sense of $f^{-1}\p{V}$. So, we'll want to use an $\epsilon$-$\delta$ proof.

Let $\epsilon > 0$. Working backwards,

$$
\begin{aligned}
    \abs{f\p{\set{a_n}_n} - f\p{\set{b_n}_n}}
        &= \abs{\lim_{n\to\infty} a_n - \lim_{n\to\infty} b_n} \\
        &= \abs{\lim_{n\to\infty} \p{a_n - b_n}}
            && \p{\text{limit law}} \\
        &= \lim_{n\to\infty} \abs{a_n - b_n}
            && \p{\abs{\:\cdot\:}\text{ is continuous}}.
\end{aligned}
$$

Notice that by definition,

$$
\abs{a_n - b_n}
    \leq \sup_n{\abs{a_n - b_n}}
    = d\p{\set{a_n}_n - \set{b_n}_n},
$$

so we get

$$
\abs{f\p{\set{a_n}_n} - f\p{\set{b_n}_n}}
    \leq d\p{\set{a_n}_n - \set{b_n}_n}.
$$

Thus, setting $\delta = \epsilon$ works.

</solution>

## Compactness and Continuity

<prop>

Let $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ be continuous. Then for any compact set $K \subseteq X$, its image $f\p{K} \subseteq Y$ is compact.

</prop>

Usually, we say "the continuous image of a compact set is compact."

<example>

If $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ is a continuous bijection, then is $f^{-1}$ also continuous?

</example>

<solution>

No. For example, let $\func{f}{\p{\R, d_{\mathrm{disc}}}}{\p{\R, \abs{\:\cdot\:}}}$ be given by $f\p{x} = x$. Then $f$ is continuous since every function on a discrete metric space is continuous, but its inverse $\func{f^{-1}}{\p{\R, \abs{\:\cdot\:}}}{\p{\R, d_{\mathrm{disc}}}}$ is not:

Let $V = \set{0}$, which is open since every set in a discrete metric space is open. But

$$
\p{f^{-1}}^{-1}\p{V}
    = f\p{\set{0}}
    = \set{0}
$$

is _not_ open with respect to the absolute value metric. This means that $f^{-1}$ is not continuous.

</solution>

However, with a few more assumptions on $X$, we can guarantee that $f^{-1}$ is automatically continuous:

<example>

Let $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ be a continuous function. If $X$ is compact, then $f^{-1}$ is also continuous.

</example>

<solution>

We're going to prove this by using (iv). Let $F \subseteq X$ be a closed set. Since $X$ is compact, this means that $F$ is also compact, so because $f$ is continuous,

$$
\p{f^{-1}}^{-1}\p{F}
    = f\p{F}
    \subseteq Y
$$

is also compact, hence closed. In other words, the preimage of every closed set in $X$ under $f^{-1}$ is closed, so $f^{-1}$ is continuous.

</solution>
