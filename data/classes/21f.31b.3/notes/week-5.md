---
title: Week 5 Discussion Notes
date: "2021-10-28"
tags:
    - convergence tests
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Convergence Tests

For your convenience, I'm going to restate all of the convergence tests here.

### Divergence Test

<theorem> divergence test

Let $\set{a_n}$ be a sequence. If $\displaystyle \lim_{n\to\infty} a_n$ does not exist or if it exists and is not $0$, then $\displaystyle \sum_{n=0}^\infty a_n$ diverges.

</theorem>

This should always be the first thing you try. Most of the time, it'll be inconclusive, though.

### Direct Comparison Test

<theorem> direct comparison test

Suppose $0 \leq a_n \leq b_n$ for $n \geq M$ for some $M > 0$. Then:

-   If $\displaystyle \sum_{n=0}^\infty a_n$ diverges, then $\displaystyle \sum_{n=0}^\infty b_n$ diverges as well.
-   If $\displaystyle \sum_{n=0}^\infty b_n$ converges, then $\displaystyle \sum_{n=0}^\infty a_n$ converges as well.

</theorem>

### Limit Comparison Test

<theorem> limit comparison test

Suppose $a_n \geq 0$ and $b_n \geq 0$ for $n \geq M$ for some $M > 0$. Let $\displaystyle L = \lim_{n\to\infty} \frac{a_n}{b_n}$.

-   If $L \in \p{0, \infty}$, then $\displaystyle \sum_{n=0}^\infty a_n$ converges if and only if $\displaystyle \sum_{n=0}^\infty b_n$ converges.
-   If $L = 0$ and $\displaystyle \sum_{n=0}^\infty b_n$ converges, then $\displaystyle \sum_{n=0}^\infty a_n$ converges as well.
-   If $L = \infty$ and $\displaystyle \sum_{n=0}^\infty a_n$ converges, then $\displaystyle \sum_{n=0}^\infty b_n$ converges as well.

</theorem>

The case when $L = \p{0, \infty}$ is when this is most useful, in my experience. If $L = 0$ or $L = \infty$, you can usually use direct comparison instead.

### Ratio Test

<theorem> ratio test

Let $\displaystyle L = \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}$.

-   If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
-   If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
-   If $L = 1$, then the ratio test is inconclusive.

</theorem>

### Root Test

<theorem> root test

Let $\displaystyle L = \lim_{n\to\infty} \abs{a_n}^{1/n}$.

-   If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
-   If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
-   If $L = 1$, then the root test is inconclusive.

</theorem>

The ratio test and root test are pretty similar in that if one is inconclusive, the other one probably will be, too. They also "measure" how fast the terms $a_n$ converge to $0$.

-   If $L < 1$, then the terms converge fast enough that the whole series converges.

-   If $L > 1$, then the terms converge too slow so the series diverges.

-   If $L = 1$, the rate is somewhere in between too fast and too slow, which is why they're inconclusive.

### Alternating Series Test

<theorem> alternating series test

Let $\set{a_n}$ be a sequence of the form $a_n = \p{-1}^n b_n$, where $b_n \geq 0$, is decreasing, and $\displaystyle\lim_{n\to\infty} b_n = 0$. Then $\displaystyle \sum_{n=0}^\infty a_n$ converges.

</theorem>

## Examples

The best way to really learn these tests is to practice using them.

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \frac{1}{2^n + 3^n}$ converges.

</example>

<solution>

If I remove $3^n$ from the denominator, I get something bigger:

$$
\frac{1}{2^n + 3^n}
    \leq \frac{1}{2^n}.
$$

All the terms are non-negative, and $\sum_{n=1}^\infty \frac{1}{2^n}$ converges because it's a geometric series with $\abs{r} = \frac{1}{2} < 1$. So, by direct comparison, I get that $\sum_{n=1}^\infty \frac{1}{2^n + 3^n}$ also converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \frac{n}{n^3 + n^2 + 7}$ converges.

</example>

<solution>

Intuitively, when $n$ is very large, the main terms that matter are the leading terms:

$$
\frac{n}{n^3 + n^2 + 7} \approx \frac{n}{n^3} = \frac{1}{n^2},
$$

so intuitively, this should converge. The limit test makes this rigorous:

$$
\begin{aligned}
    \lim_{n\to\infty} \frac{\frac{n}{n^3 + n^2 + 7}}{\frac{1}{n^2}}
        &= \lim_{n\to\infty} \frac{n^3}{n^3 + n^2 + 7} \cdot \frac{\frac{1}{n^3}}{\frac{1}{n^3}} \\
        &= \lim_{n\to\infty} \frac{1}{1 + \frac{1}{n} + \frac{7}{n^3}} \\
        &= 1.
\end{aligned}
$$

$\sum_{n=1}^\infty \frac{1}{n^2}$ converges because it's a $p$-series with $p = 2 > 1$, so by the limit comparison test, $\sum_{n=1}^\infty \frac{n}{n^3 + n^2 + 7}$ converges also.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty \frac{2^{2n}}{n!}$ converges.

</example>

<solution>

As a rule of thumb, if you ever see exponentials and/or factorials, the root or ratio test will do the trick. In this problem, the limit in the ratio test is easier to calculate:

$$
\begin{aligned}
    \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}
        &= \lim_{n\to\infty} \frac{2^{2\p{n+1}}}{\p{n+1}!} \cdot \frac{n!}{2^{2n}} \\
        &= \lim_{n\to\infty} \frac{2^{2n+2}}{2^{2n}} \cdot \frac{n!}{\p{n+1}!} \\
        &= \lim_{n\to\infty} \frac{2^2}{n+1} \\
        &= 0.
\end{aligned}
$$

$0$ is smaller than $1$, so the ratio test tells us that our series converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \p{-1}^n \frac{1}{\sqrt{n}}$ converges.

</example>

<solution>

Whenever you see something like $\p{-1}^n$, chances are, you will want to use the alternating series test. To use it, there're just three things to check:

1. $\frac{1}{\sqrt{n}} \geq 0$
2. $\frac{1}{\sqrt{n}}$ is decreasing
3. $\lim_{n\to\infty} \frac{1}{\sqrt{n}} = 0$

These are all clear because of the properties of $\sqrt{n}$, so by the alternating series test, the series converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \p{-1}^n \frac{n^2}{2n^2 - 1}$ converges.

</example>

<solution>

It might be tempting to immediately try the alternating series test, but it won't work for this problem. You should always start with the divergence test: in this problem,

$$
\lim_{n\to\infty} \underbrace{\p{-1}^n}_{\text{diverges}} \underbrace{\frac{n^2}{2n^2 - 1}}_{\text{converges to } \frac{1}{2}}
    = \dne.
$$

So, the divergence test tells us that the series diverges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \sin\p{\frac{1}{n^2}}$ converges.

</example>

<solution>

To solve this, you'll want to remember this limit:

$$
\lim_{x\to0} \frac{\sin{x}}{x} = 1.
$$

Heuristically, this tells you that if $x \approx 0$, then

$$
\frac{\sin{x}}{x} \approx 1
\implies \sin{x} \approx x.
$$

In our problem, if $n$ is really large, then $\frac{1}{n^2} \approx 0$, so

$$
\sin\p{\frac{1}{n^2}} \approx \frac{1}{n^2}.
$$

This tells us what to use with limit comparison:

$$
\lim_{n\to\infty} \abs{\frac{\sin\p{\frac{1}{n^2}}}{\frac{1}{n^2}}} = 1,
$$

and because $\sum_{n=1}^\infty \frac{1}{n^2}$ is a $p$-series with $p = 2 > 1$, it converges. Thus, by the limit comparison test, $\sum_{n=1}^\infty \sin\p{\frac{1}{n^2}}$ converges (absolutely).

</solution>

<example>

True or false:

> If $\displaystyle \sum_n a_n$ and $\displaystyle \sum_n b_n$ both converge, then $\displaystyle \sum_n a_nb_n$ converges.

</example>

<solution>

This is false. For example, if $a_n = b_n = \p{-1}^n \frac{1}{\sqrt{n}}$, then both $\sum_n a_n, \sum_n b_n$ converge by [Example 4](#example-4), but

$$
\sum_n a_nb_n = \sum_n \frac{1}{n}
$$

is the harmonic series, which diverges.

</solution>
