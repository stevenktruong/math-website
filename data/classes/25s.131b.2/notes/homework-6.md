---
title: Homework 6
date: "2025-05-18"
tags:
    - power series
    - differentiation
publish: yes
---

# Homework 6

## Table of Contents

## Problem 4

Prove Theorem 4.1.6(iv)(v). (_Hints_: For (iv), use Theorem 3.7.1. For (v), use Corollary 3.6.2.)

<theorem> 4.1.6

Let $\sum_{n=0}^{\infty} c_n \p{x - a}^n$ be a formal power series, and let $R$ be its radius of convergence.

1. (Divergence outside of the radius of convergence) If $x \in \R$ is such that $\abs{x - a} > R$, then the series $\sum_{n=0}^{\infty} c_n \p{x - a}^n$ is divergent for that value of $x$.

2. (Convergence inside the radius of convergence) If $x \in \R$ is such that $\abs{x - a} < R$, then the series $\sum_{n=0}^{\infty} c_n \p{x - a}^n$ is absolutely convergent for that value of $x$.

3. (Uniform convergence on compact sets) For any $0 < r < R$, the series $\sum_{n=0}^{\infty} c_n \p{x - a}^n$ converges uniformly to $f$ on the compact interval $\br{a - r, a + r}$. In particular, $f$ is continuous on $\p{a - R, a + R}$.

4. (Differentiation of power series) The function $f$ is differentiable on $\p{a - R, a + R}$, and for any $0 < r < R$, the series $\sum_{n=1}^{\infty} n c_n \p{x - a}^{n - 1}$ converges uniformly to $f'$ on the interval $\br{a - r, a + r}$.

5. (Integration of power series) For any closed interval $\br{y, z}$ contained in $\p{a - R, a + R}$, we have

$$
\int_{\br{y, z}} f(x) \, dx = \sum_{n=0}^{\infty} c_n \frac{\p{z - a}^{n+1} - \p{y - a}^{n+1}}{n+1}.
$$

For parts (iii)-(iv) we assume that $R > 0$ (i.e., the series converges at at least one other point than $x = a$). Let $f\colon \p{a - R, a + R} \to \R$ be the function $f\p{x} \coloneqq \sum_{n=0}^{\infty} c_n \p{x - a}^n$; this function is guaranteed to exist by part (b).

</theorem>

<theorem> 3.7.1

Let $\br{a, b}$ be an interval, and for every integer $n \geq 1$, let $f_n\colon \br{a, b} \to \R$ be a differentiable function whose derivative $f_n'\colon \br{a, b} \to \R$ is continuous.

Suppose that the derivatives $f_n'$ converge uniformly to a function $g\colon \br{a, b} \to \R$. Suppose also that there exists a point $x_0$ such that the limit $\lim_{n \to \infty} f_n(x_0)$ exists.

Then the functions $f_n$ converge uniformly to a differentiable function $f$, and the derivative of $f$ equals $g$.

</theorem>

<corollary> 3.6.2

Let $\br{a, b}$ be an interval, and let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of Riemann-integrable functions on $\br{a, b}$ such that the series $\sum_{n=1}^\infty f^{\p{n}}$ is uniformly convergent. Then we have

$$
\sum_{n=1}^\infty \int_{\br{a, b}} f^{\p{n}}
  = \int_{\br{a, b}} \sum_{n=1}^\infty f^{\p{n}}.
$$

</corollary>

<solution>

**(iv)**:

To this end, we fix $0 < r < R$ and let

$$
F_n \coloneqq \sum_{k=0}^n c_k\p{x - a}^k.
$$

For each $n \geq 0$, $F_n$ is a polynomial, hence differentiable with continuous derivative. Moreover,

$$
\limsup_{n\to\infty} \abs{nc_n}^{\frac{1}{n}} = \lim_{n\to\infty} \abs{n}^{\frac{1}{n}} \limsup_{n\to\infty} \abs{c_n}^{\frac{1}{n}} = \frac{1}{R},
$$

so by (iii), $\sum_{n=1}^\infty nc_n\p{x - a}^{n-1}$ converges uniformly on $\br{a - r, a + r}$. In other words,

$$
F_n' = \sum_{k=1}^n kc_k\p{x - a}^{k-1} \xrightarrow{n\to\infty} \sum_{n=1}^\infty nc_n\p{x - a}^{n-1}
$$

uniformly on $\br{a - r, a + r}$. Lastly, $F_n\p{a} = c_0$, so $\p{F_n\p{a}}_n$ converges to $c_0$, so by Theorem 3.7.1,

$$
f'\p{x}
  = \lim_{n\to\infty} F_n'
  = \sum_{n=1}^\infty nc_n\p{x - a}^{n-1}
$$

on $\p{a - r, a + r}$. Since $0 < r < R$ was arbitrary, this implies that $f$ is differentiable on $\p{a - R, a + R}$ with the formula above.

**(v)**:

Since $\br{y, z} \subseteq \p{a - R, a + R}$, there exists $0 < r < R$ such that $\br{y, z} \subseteq \br{a - r, a + r}$. By (iii), $f$ converges uniformly on $\br{a - r, a + r}$, hence uniformly on $\br{y, z}$ as well. Thus, by Corollary 3.6.2.

$$
\int_{\br{y, z}} f
  = \sum_{n=0}^\infty \int_{\br{y, z}} c_n\p{x - a}^n \,\diff{x}.
$$

The formula follows by integrating

$$
\int_{\br{y, z}} c_n\p{x - a}^n \,\diff{x}
  = c_n \frac{\p{z - a}^{n+1} - \p{y - a}^{n+1}}{n + 1}.
$$

</solution>

## Problem 5

Prove Proposition 4.2.6. (_Hint_: induct on $k$ and use Theorem 4.1.6(iv).)

<proposition> 4.2.6

Let $E$ be a subset of $\R$, let $a$ be an interior point of $E$, and let $f$ be a function which is real analytic at $a$, thus there is an $r > 0$ for which we have the power series expansion

$$
f\p{x} = \sum_{n=0}^{\infty} c_n \p{x - a}^n
$$

for all $x \in \p{a - r, a + r}$. Then for every $k \geq 0$, the function $f$ is $k$-times differentiable on $\p{a - r, a + r}$, and for each $k \geq 0$, the $k$-th derivative is given by

$$
\begin{aligned}
f^{\p{k}}\p{x}
  &= \sum_{n=0}^{\infty} c_{n+k} \p{n+1}\p{n+2} \cdots \p{n+k} \p{x - a}^n \\
  &= \sum_{n=0}^{\infty} c_{n+k} \frac{\p{n+k}!}{n!} \p{x - a}^n
\end{aligned}
$$

for all $x \in \p{a - r, a + r}$.

</proposition>

<solution>

Theorem 4.1.6(iv) is given above. We will prove the following statement for all $k \geq 0$ by induction:

$$
P\p{k} = \br{f^{\p{k}}\p{x} = \sum_{n=0}^{\infty} c_{n+k} \frac{\p{n+k}!}{n!} \p{x - a}^n \text{ for } x \in \p{a - r, a + r}}.
$$

**Base case**: $k = 0$

In this case, $P\p{0}$ is the statement

$$
f^{\p{0}}\p{x} = \sum_{n=0}^{\infty} c_n \p{x - a}^n \text{ for } x \in \p{a - r, a + r},
$$

which holds by assumption.

**Inductive step**:

Suppose $P\p{k}$ holds for some $k \geq 0$. In particular, $f^{\p{k}}$ is real analytic with positive radius of convergence (it's at least $r$), so by Theorem 4.1.6(iv),

$$
f^{\p{k+1}}\p{x}
  = \sum_{n=1}^{\infty} nc_{n+k} \frac{\p{n+k}!}{n!} \p{x - a}^{n-1} \text{ for } x \in \p{a - r, a + r}.
$$

Reindexing by replacing $n \to n + 1$ (which we can do since $n$ is just a dummy variable in the sum), we see

$$
\begin{aligned}
  f^{\p{k+1}}\p{x}
    &= \sum_{n=0}^{\infty} \p{n+1}c_{n+k+1} \frac{\p{n+k+1}!}{\p{n+1}!} \p{x - a}^n \\
    &= \sum_{n=0}^{\infty} c_{n+k+1} \frac{\p{n+k+1}!}{n!} \p{x - a}^n
\end{aligned}
$$

for $x \in \p{a - r, a + r}$. Thus, $P\p{k+1}$ holds are we are done.

</solution>

## Problem 7

Let $a, b$ be real numbers, and let $n \geq 0$ be an integer. Prove the identity

$$
\p{x - a}^n = \sum_{m=0}^{n} \frac{n!}{m!\p{n - m}!} \p{b - a}^{n - m} \p{x - b}^m
$$

for any real number $x$. (_Hint_: use the binomial formula, Exercise 7.1.4.)

Explain why this identity is consistent with Taylor’s theorem and Exercise 4.2.1. (Note however that Taylor’s theorem cannot be rigorously applied until one verifies Exercise 4.2.6 below.)

<solution>

By the binomial theorem,

$$
\p{x - a}^n
  = \br{\p{b - a} + \p{x - b}}^n
  = \sum_{m=0}^n \frac{n!}{m!\p{n - m}!} \p{b - a}^{n - m} \p{x - b}^m.
$$

If $f\p{x} = \p{x - a}^n$ is real analytic at $b$, then Taylor's theorem says that

$$
\p{x - a}^n = \sum_{m=0}^\infty \frac{f^{\p{m}}\p{b}}{m!} \p{x - a}^m.
$$

On the other hand, Exercise 4.2.1 says

$$
f^{\p{m}}\p{b}
  = \begin{cases}
      \frac{n!}{\p{n-m}!} \p{b - a}^{n-m} & \text{if } 0 \leq m \leq n, \\
      0 & \text{if } m > n.
    \end{cases}
$$

Thus, in this case, Taylor's theorem reduces to

$$
\sum_{m=0}^\infty \frac{f^{\p{m}}\p{b}}{m!} \p{x - a}^m
  = \sum_{m=0}^n \frac{1}{m!} \br{\frac{n!}{\p{n-m}!} \p{b - a}^{n-m}} \p{x - a}^m,
$$

which agrees with the binomial theorem.

</solution>
