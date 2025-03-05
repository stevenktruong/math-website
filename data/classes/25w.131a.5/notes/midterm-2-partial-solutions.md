---
title: Midterm 2 Partial Solutions
date: "2025-03-02"
tags:
    - limits
    - series
publish: yes
---

# Midterm 2

This page will only include solutions to Problems 1 and 3, which were the ones I graded. The professor will provide solutions for Problems 2 and 4 elsewhere.

The solutions I write down here would receive full points from me. They aren't the only solutions that can receive full points, of course.

## Table of Contents

## Problem 1

Let $\p{a_n}_{n \in \N}$ be a sequence of real numbers.

1. State the definition of a sequence being Cauchy.
2. Suppose that for every $k \in \N$, there exist $N \in \N$ and $b_k \in \R$ such that for every $n > N$, we have $\abs{a_n - b_k} < \frac{1}{k}$. Prove that $\p{a_n}_{n \in \N}$ is Cauchy.

<solution>

1. For every $\varepsilon > 0$, there exists $N \in \N$ such that $n, m \geq N$ implies $\abs{a_n - a_m} < \varepsilon$.

2. Let $\varepsilon > 0$ and pick $k \in \N$ such that $\frac{1}{k} < \frac{\varepsilon}{2}$. Let $N$ and $b_k$ be as in the problem statement. Then by the triangle inequality, for all $n, m \geq N$ we have

    $$
    \abs{a_n - a_m}
        \leq \abs{a_n - b_k} + \abs{b_k - a_m}
        < \frac{2}{k}
        < \varepsilon.
    $$

</solution>

## Problem 3

Prove that the series $\sum_n a_n$ converges where $a_n = \frac{n^2}{2^n}$ for all $n \in \N$.

<solution>

We have

$$
\abs{\frac{a_{n+1}}{a_n}}
    = \frac{\p{n + 1}^2}{2^{n+1}} \cdot \frac{2^n}{n^2}
    = \frac{\p{n + 1}^2}{n^2} \cdot \frac{1}{2}
    \xrightarrow{n\to\infty} \frac{1}{2}.
$$

In particular, because the limit exists, we have

$$
\limsup_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}
    = \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}
    = \frac{1}{2}
    < 1.
$$

Thus, by the ratio test, the series converges. (If you used the root test, you'll get the same limit as long as you remembered $\lim_{n\to\infty} n^{\frac{1}{n}} = 1$.)

</solution>
