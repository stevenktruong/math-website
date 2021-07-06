---
title: Quiz 3 Solutions
date: "2020-12-07"
publish: yes
---

# Quiz 2 Solutions

## Table of Contents

## Question 1

If $f\p{x} = \displaystyle\sum_{n=0}^\infty c_nx^n = 0$ for all $x$ in an interval $\p{-a, a}$, then $c_n = 0$ for all $n$.

<solution>

True.

The coefficients are given by $c_n = \displaystyle \frac{f^{\p{n}}\p{0}}{n!}$, so if $f\p{x} = 0$, then $f^{\p{n}}\p{0} = 0$ for all $n \geq 1$. Thus, $c_n = 0$ for all $n \geq 1$.

</solution>

## Question 2

If $a_n > 0$ and $\displaystyle \sum_n a_n$ converges, then $\displaystyle \sum_n a_n^2$ converges.

<solution>

True.

Since $\displaystyle \sum_n a_n$ converges, we know that $\displaystyle \lim_{n\to\infty} a_n = 0$. This means there exists $M > 0$ such that if $n \geq M$, then $a_n \leq 1 \implies 0 \leq a_n^2 \leq a_n$. Thus, $\displaystyle \sum_n a_n^2$ converges by direct comparison.

</solution>

## Question 3

Find all possible values of $x$ for which the series $\displaystyle \sum_{n=0}^\infty \frac{9 + x^n}{5^n}$ converges.

<solution>

$-5 < x < 5$.

Since $\displaystyle \sum_{n=0}^\infty \frac{x^n}{5^n}$ is a geometric series, it converges if and only if $\abs{x} < 5$, so we need to check what happens if $\abs{x} \geq 5$.

If $x = 5$, then

$$
\lim_{n\to\infty} \frac{9 + 5^n}{5^n} = 1 \neq 0,
$$

so the series diverges in this case. Similarly, if $x = -5$, then

$$
\frac{9 + \p{-5}^n}{5^n}
    = \frac{9}{5^n} + \p{-1}^n,
$$

which doesn't converge, so the series diverges in this case, too. Finally, if $\abs{x} > 5$, then

$$
\lim_{n\to\infty} \frac{9 + x^n}{5^n} = \infty,
$$

so the series diverges when $\abs{x} \geq 5$. This means that the interval of convergence is $-5 < x < 5$.

</solution>

## Question 4

Which of the following alternating series converge conditionally, but not absolutely?

1. $\displaystyle\sum_{n=2}^\infty \frac{\p{-1}^n}{\sqrt{n}\ln{n}}$
2. $\displaystyle\sum_{n=2}^\infty \frac{\p{-1}^n}{n\p{\ln{n}}^2}$
3. $\displaystyle\sum_{n=1}^\infty \frac{\cos\p{\pi n}}{2^{n-3}}$

<solution>

Only (1).

It should be easy to see that these all converge conditionally by the alternating series test. For the third one, $\cos\p{\pi n} = \p{-1}^n$, which is why the test applies.

1. If $n$ is big enough, then $\ln{n} \leq \sqrt{n}$. If we multiply both sides by $\sqrt{n}$, we get $\sqrt{n}\ln{n} \leq n$ for large $n$, so

    $$
    0 \leq \frac{1}{n} \leq \frac{1}{\sqrt{n}\ln{n}}.
    $$

    The smaller series diverges by $p$-series, so by direct comparison, the larger series diverges, which is why (1) is conditionally convergent.

2. In this case, the integral test applies. If we set $u = \ln{x}$, then $\diff{u} = \frac{\diff{x}}{x}$, which gives

    $$
    \int_2^\infty \frac{\diff{x}}{x\p{\ln{x}}^2}
        = \int_{\ln{2}}^\infty \frac{\diff{u}}{u^2},
    $$

    which converges by $p$-integrals. By the integral test, (2) converges absolutely.

3. If we take absolute values, then the series is the geometric series

    $$
    \sum_{n=1}^\infty \frac{1}{2^{n-3}} = \frac{1}{8} \sum_{n=1}^\infty \p{\frac{1}{2}}^n,
    $$

    so (3) converges absolutely.

</solution>

## Question 5

Find the power series representation centered at $0$ of the function $f\p{x} = \ln\p{1 + x}$ for $\abs{x} < 1$.

<solution>

We can start with the geometric series:

$$
\frac{1}{1 - x} = \sum_{n=0}^\infty x^n.
$$

If we replace $x$ with $-x$, then we get

$$
\frac{1}{1 + x} = \sum_{n=0}^\infty \p{-1}^nx^n.
$$

If we integrate both sides, we get

$$
\ln\p{1 + x}
    = C + \sum_{n=0}^\infty \p{-1}^n \frac{x^{n+1}}{n+1}.
$$

Plugging in $x = 0$, we get $0 = \ln{1} = C$, so our final answer is

$$
\ln\p{1 + x}
    = \boxed{\sum_{n=0}^\infty \p{-1}^n \frac{x^{n+1}}{n+1}
    = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots}.
$$

</solution>
