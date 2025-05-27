---
title: Midterm 2 Partial Solutions
date: "2025-05-26"
tags:
    - uniform convergence
publish: yes
---

# Midterm 2

This page will only include solutions to Problems 1 and 2, which were the ones I graded. The professor will provide solutions for Problems 3 and 4 elsewhere.

The solutions I write down here would receive full points from me. They aren't the only solutions that can receive full points, of course.

## Table of Contents

## Problem 1

1. Let $\p{f_n}_{n=1}^\infty$ be a sequence of functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and $\func{f}{X}{Y}$ another function. Let $E \subseteq X$. State the definition of the sequence $\p{f_n}_{n=1}^\infty$ converging uniformly to $f$ on $E$.

2. Let $\p{f_n}_{n=1}^\infty$ be a sequence of functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and $\func{f}{X}{Y}$ be another function. Suppose all $f_n$'s are bounded functions on $X$ (that is, for every $n \in \N$, there exists $K_n > 0$ such that $\abs{f_n\p{x}} \leq K_n$ for all $x \in X$), and the sequence $\p{f_n}_{n=1}^\infty$ converges uniformly to $f$ on $X$. Show that there exists $K > 0$ such that $\abs{f_n\p{x}} \leq K$ for all $x \in X$ and all $n \in \N$.

<solution>

1.  $$
    \forall \varepsilon > 0\ \exists N \in \N\ \forall n \geq N\ \forall x \in E : d_Y\p{f_n\p{x}, f\p{x}} < \varepsilon
    $$

2.  Since $\p{f_n}_{n=1}^\infty$ converges uniformly, it is uniformly Cauchy. Thus, there exists $N \in \N$ such that

    $$
    x \in X,\ n \geq N \implies \abs{f_n\p{x} - f_N\p{x}} \leq 1.
    $$

    Since $f_N$ is bounded, there exists $K_N$ such that $\abs{f_N\p{x}} \leq K_N$ for any $x \in X$. Thus, by the triangle inequality,

    $$
    \abs{f_n\p{x}}
      \leq \abs{f_n\p{x} - f_N\p{x}} + \abs{f_N\p{x}}
      \leq 1 + K_N
    $$

    for $x \in X$ and $n \geq N$. Thus, we may take

    $$
    K \coloneqq \max\set{K_1, \ldots, K_{N-1}, 1 + K_N}.
    $$

    Indeed, we have $K \geq 1 + K_N$, so for any $n \geq N$, we have $\abs{f_n\p{x}} \leq K$ for all $x \in X$, and if $1 \leq n < N$, then $\abs{f_n\p{x}} \leq K_n \leq K$ for all $x \in X$ as well.

</solution>

## Problem 2

1. State the Weierstrass $M$-test.
2. Let $f\p{x} = \sum_{k=1}^\infty f_k\p{x}$ where $f_k\p{x} = \frac{\sin\p{kx}}{k^3}$. Show that $f\p{x}$ is differentiable on $\br{-\pi, \pi}$. (You can use without proof that the series $\sum_{k=1}^\infty f_k\p{x}$ converges for every $x$. Notice $f\p{0} = 0$.)

<solution>

1. Let $\p{f_n}_{n=1}^\infty$ be a sequence of bounded, real-valued functions on a metric space $\p{X, d_X}$. If

    $$
    \sum_{n=1}^\infty \norm{f_n}_\infty
    $$

    converges, then $\sum_{n=1}^\infty f_n$ converges uniformly to some function $f$.

2. We will use Theorem 3.7.1 to the sequence of partial sums $F_n \coloneqq \sum_{k=1}^n f_k$. To this end, we only need to check three things:

    - $F_n$ is differentiable with continuous derivative.

    - $F_n$ converges uniformly.

    - $F_n$ converges at at least one $x \in \br{-\pi, \pi}$.

    Since $\sin\p{x}$ is smooth, it is differentiable with continuous derivative. Thus, $F_n$ is differentiable and $F_n'$ is a sum of continuous functions, hence continuous itself. For the second condition, we use the $M$-test. Notice that

    $$
    \abs{f_k'\p{x}}
      = \abs{\frac{\cos\p{kx}}{k^2}}
      \leq \frac{1}{k^2}.
    $$

    Thus, $\norm{f_k'}_\infty \leq \frac{1}{k^2}$, and $\sum_{k=1}^\infty \frac{1}{k^2}$ converges by the $p$-test with $p = 2 > 1$, so by comparison, $\sum_{k=1}^\infty \lVert f_k' \rVert_\infty$ also converges. By the $M$-test, this implies that $\sum_{k=1}^\infty f_k'$ converges uniformly. Lastly, like the hint suggests, $\sum_{k=1}^\infty f_k\p{0}$ converges (to $0$). We may apply Theorem 3.7.1, which then implies that that $f$ is differentiable on $\br{-\pi, \pi}$ with

    $$
    f'\p{x} = \sum_{k=1}^\infty \frac{\cos\p{kx}}{k^2}.
    $$

</solution>
