---
title: Week 6 Discussion Notes
date: "2021-11-07"
tags:
    - power series
    - convergence tests
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Power Series

Power series are a special type of infinite series:

<definition>

Let $\displaystyle F\p{x} = \sum_{n=0}^\infty a_n\p{x - c}^n$. $F$ is called a **power series** and we call $c$ the **center** of $F$.

</definition>

Power series are great because they have a bunch of nice properties (during discussion, I only talked about the first property):

<proposition> properties of power series

Let $\displaystyle F\p{x} = \sum_{n=0}^\infty a_n\p{x - c}^n$ be a power series.

1. There exists a number $R \in \br{0, \infty}$ called the **radius of convergence of $F$** such that if $\abs{x - c} < R$, then $F$ converges absolutely and if $\abs{x - c} > R$, then $F$ diverges. If $R = 0$, then the series only converges at its center and if $R = \infty$, then $F$ converges absolutely everywhere.
2. The coefficients can be expressed in terms of the derivatives of $F$:

    $$
    a_n = \frac{F^{\p{n}}\p{c}}{n!}
    $$

3. You can differentiate term-by-term, i.e., you can pretend the sum isn't there and take the derivative like normal:

    $$
    F'\p{x} = \sum_{n=1}^\infty na_n\p{x - c}^{n-1}
    $$

    $F'$ is also a power series and it has the same radius of convergence as $F$ (but not necessarily the same _interval_ of convergence).

4. You can also integrate term-by-term:

    $$
    \int F\p{x} \,\diff{x} = C + \sum_{n=0}^\infty \frac{a_n}{n+1} \p{x - c}^{n+1}
    $$

    Like $F'$, the antiderivative of $F$ is a power series with the same radius of convergence as $F$ (but not necessarily the same _interval_ of convergence).

</proposition>

<example>

We've already seen an example of a power series: if we replace $r$ with $x$ in the geometric series, then we get

$$
\sum_{n=0}^\infty r^n = \frac{1}{1 - r}
\rightsquigarrow \sum_{n=0}^\infty x^n = \frac{1}{1 - x},
$$

and this converges if and only if $\abs{x} < 1$. Thus, the geometric series above is an example of a power series centered at $0$ and with interval of convergence $\p{-1, 1}$.

</example>

A common type of problem involving power series is finding its interval of convergence:

<example>

Find the interval of convergence of $\displaystyle\sum_{n=1}^\infty \frac{3^n x^n}{n^3}$.

</example>

<solution>

For these types of questions, there's a step-by-step way to solve them:

1. Use the ratio or root test to find the radius of convergence.
2. Check whether the series converges at the endpoints.

For this series, we'll use the ratio test:

$$
\begin{aligned}
    \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}
        &= \lim_{n\to\infty} \frac{3^{n+1} \abs{x}^{n+1}}{\p{n+1}^3} \frac{n^3}{3^n \abs{x}^n} \\
        &= \lim_{n\to\infty} 3 \abs{x} \p{\frac{n}{n+1}}^3 \\
        &= 3\abs{x}.
\end{aligned}
$$

The ratio test tells us that the series will converge absolutely if

$$
3\abs{x} < 1
\iff \abs{x} < \frac{1}{3}
\iff x \in \p{-\frac{1}{3}, \frac{1}{3}}.
$$

This tells us that the radius of convergence is $\frac{1}{3}$. Now we need to check the endpoints:

$x = -\frac{1}{3}$:

We get

$$
\sum_{n=1}^\infty \frac{3^n \p{-\frac{1}{3}}^n}{n^3}
    = \sum_{n=1}^\infty \frac{\p{-1}^n}{n^3},
$$

which converges, for example, by the alternating series test. (Alternatively, you can say that it converges _absolutely_ by the $p$-test.)

$x = \frac{1}{3}$:

We get a similar series in this case:

$$
\sum_{n=1}^\infty \frac{3^n \p{\frac{1}{3}}^n}{n^3}
    = \sum_{n=1}^\infty \frac{1}{n^3},
$$

and this converges by the $p$-test.

Thus, the interval of convergence of this power series is

$$
\boxed{\br{-\frac{1}{3}, \frac{1}{3}}}.
$$

</solution>

## Convergence Tests

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty \frac{n\sqrt{n}}{n^4 + \ln{n}}$ converges.

</example>

<solution>

Heuristically, $\ln{n}$ grows very, very slow, so if $n$ is very large,

$$
\frac{n\sqrt{n}}{n^4 + \ln{n}}
    \approx \frac{n\sqrt{n}}{n^4}
    = \frac{1}{n^{5/2}}.
$$

So, we'll try to apply the limit test with $b_n = \frac{1}{n^{5/2}}$, which is summable by the $p$-test.

$$
\begin{aligned}
    \lim_{n\to\infty} \frac{\frac{n\sqrt{n}}{n^4 + \ln{n}}}{\frac{1}{n^{5/2}}}
        &= \lim_{n\to\infty} \frac{n^4}{n^4 + \ln{n}} \cdot \frac{\frac{1}{n^4}}{\frac{1}{n^4}} \\
        &= \lim_{n\to\infty} \frac{1}{1 + \frac{\ln{n}}{n^4}} \\
        &= 1,
\end{aligned}
$$

so the limit test tells us that because $\sum_{n=1}^\infty \frac{1}{n^{5/2}}$ converges, $\sum_{n=1}^\infty \frac{n\sqrt{n}}{n^4 + \ln{n}}$ also converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty \frac{\cos{n\pi}}{\sqrt{n}}$ converges.

</example>

<solution>

The trick for this is to notice that $\cos{n\pi} = \p{-1}^n$, so the series is

$$
\sum_{n=0}^\infty \frac{\cos{n\pi}}{\sqrt{n}}
    = \sum_{n=0}^\infty \frac{\p{-1}^n}{\sqrt{n}},
$$

and this converges by the alternating series test.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty n\sin\p{\frac{1}{n^2}}$ converges.

</example>

<solution>

Recall from last week the fact that $\lim_{x\to0} \frac{\sin{x}}{x} = 1$. Heuristically, this means that if $x \approx 0$, then

$$
\frac{\sin{x}}{x} \approx 1
\implies \sin{x} \approx x.
$$

Specializing to our problem, if $n$ is large enough, then $\frac{1}{n^2} \approx 0$, so if we plug in $x = \frac{1}{n^2}$, we get

$$
\sin\p{\frac{1}{n^2}} \approx \frac{1}{n^2}
\implies
n\sin\p{\frac{1}{n^2}} \approx \frac{1}{n}.
$$

This tells us to try $b_n = \frac{1}{n}$ with limit comparison:

$$
\lim_{n\to\infty} \frac{n\sin\p{\frac{1}{n^2}}}{\frac{1}{n}}
    = \lim_{n\to\infty} \frac{\sin\p{\frac{1}{n^2}}}{\frac{1}{n^2}}
    = 1.
$$

But $\sum_{n=1}^\infty \frac{1}{n}$ diverges by the $p$-test, so by the limit comparison test, $\sum_{n=1}^\infty n\sin\p{\frac{1}{n^2}}$ also diverges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty \p{1 - \cos\p{\frac{1}{n}}}$ converges.

</example>

<solution>

Like the previous example, we'll use a "well-known" limit to do this problem:

$$
\lim_{x\to0} \frac{1 - \cos{x}}{x^2} = \frac{1}{2}.
$$

You can prove this as follows:

$$
\begin{aligned}
    \lim_{x\to0} \frac{1 - \cos{x}}{x^2} \cdot \frac{1 + \cos{x}}{1 + \cos{x}}
        &= \lim_{x\to0} \frac{\sin^2{x}}{x^2} \frac{1}{1 + \cos{x}} \\
        &= \lim_{x\to0} \p{\frac{\sin{x}}{x}}^2 \frac{1}{1 + \cos{x}} \\
        &= \frac{1}{2}.
\end{aligned}
$$

So, we get the following heuristic: if $x \approx 0$, then

$$
\frac{1 - \cos{x}}{x^2} \approx \frac{1}{2}
\implies 1 - \cos{x} \approx \frac{x^2}{2}.
$$

If we plug in $x = \frac{1}{n}$, then

$$
1 - \cos\p{\frac{1}{n}} \approx \frac{1}{2n^2}.
$$

From here, you can use $b_n = \frac{1}{n^2}$ (or $b_n = \frac{1}{2n^2}$; both will work) in the limit comparison test. Then

$$
\lim_{n\to\infty} \frac{1 - \cos\p{\frac{1}{n}}}{\frac{1}{n^2}}
    = \lim_{n\to\infty} \frac{1 - \cos\p{\frac{1}{n}}}{\p{\frac{1}{n}}^2}
    = \frac{1}{2}.
$$

The $p$-test tells us that $\sum_{n=1}^\infty \frac{1}{n^2}$ converges, so by limit comparison, $\sum_{n=1}^\infty \p{1 - \cos\p{\frac{1}{n}}}$ also converges.

</solution>

<example>

True or false:

> If $\sum_n a_n$ converges absolutely, then $\sum_n a_n^2$ converges.

</example>

<solution>

This is true. Since $\sum_n \abs{a_n}$ converges, we know that

$$
\lim_{n\to\infty} \abs{a_n} = 0.
$$

This means that eventually, $\abs{a_n} \leq 1$. Mathematically, this means there exists $N > 0$ such that if $n \geq N$, then $\abs{a_n} \leq 1$. So, if $n \geq N$, then

$$
\begin{aligned}
    a_n^2
        &= \abs{a_n}^2 \\
        &= \abs{a_n} \cdot \abs{a_n} \\
        &\leq 1 \cdot \abs{a_n} \\
        &= \abs{a_n}.
\end{aligned}
$$

Since $\sum_{n=N}^\infty \abs{a_n}$ converges, direct comparison tells us that $\sum_{n=N}^\infty a_n^2$ also converges, so

$$
\sum_{n=1}^\infty a_n^2
    = \sum_{n=1}^{N-1} a_n^2 + \sum_{n=N}^\infty a_n^2,
$$

i.e., this is the sum of two convergent series, so the entire series converges.

</solution>
