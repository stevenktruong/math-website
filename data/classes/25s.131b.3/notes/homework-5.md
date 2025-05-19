---
title: Homework 5
date: "2025-05-18"
tags:
    - power series
    - differentiation
publish: yes
---

# Homework 5

## Table of Contents

## Exercise 3.7.1

Complete the proof of Theorem 3.7.1. Compare this theorem with Example 1.2.10, and explain why this example does not contradict the theorem.

<theorem> 3.7.1

Let $\br{a, b}$ be an interval, and for every integer $n \geq 1$, let $f_n\colon \br{a, b} \to \R$ be a differentiable function whose derivative $f_n'\colon \br{a, b} \to \R$ is continuous.

Suppose that the derivatives $f_n'$ converge uniformly to a function $g\colon \br{a, b} \to \R$. Suppose also that there exists a point $x_0$ such that the limit $\lim_{n \to \infty} f_n(x_0)$ exists.

Then the functions $f_n$ converge uniformly to a differentiable function $f$, and the derivative of $f$ equals $g$.

</theorem>

<solution>

To complete the proof, it remains to show that $f_n \to f$ uniformly and that $f$ is differentiable with $f' = g$, where

$$
f\p{x} \coloneqq L - \int_{\br{a, x_0}} g + \int_{\br{a, x}} g,
\quad L \coloneqq \lim_{n\to\infty} f_n\p{x_0}.
$$

Since $f_n'$ is continuous, it is automatically Riemann integrable. Thus, we may apply the fundamental theorem of calculus to write

$$
f_n\p{x} = f_n\p{x_0} - \int_{\br{a, x_0}} f_n' + \int_{\br{a, x}} f_n'
$$

for any $x \in \br{a, b}$. Thus, for any $x \in \br{a, b}$, we have by the triangle inequality

$$
\begin{aligned}
  \abs{f_n\p{x} - f\p{x}}
    &= \abs{f_n\p{x_0} - \int_{\br{a, x_0}} f_n' + \int_{\br{a, x}} f_n' - \p{L - \int_{\br{a, x_0}} g + \int_{\br{a, x}} g}} \\
    &\leq \abs{f_n\p{x_0} - L} + \int_{\br{a, x_0}} \abs{f_n' - g} + \int_{\br{a, x}} \abs{f_n' - g} \\
    &\leq \abs{f_n\p{x_0} - L} + 2\p{b - a} \norm{f_n' - g}_\infty.
\end{aligned}
$$

Since $x$ was arbitrary, we immediately get

$$
\norm{f_n - f}_\infty
  \leq \abs{f_n\p{x_0} - L} + 2\p{b - a} \norm{f_n' - g}_\infty.
$$

$\abs{f_n\p{x_0} - L} \to 0$ by definition of $L$ and $\norm{f_n' - g}_\infty \to 0$ since $f_n' \to g$ uniformly. Thus, by the squeeze theorem, $\norm{f_n - f}_\infty \to 0$, i.e., $f_n \to f$ uniformly.

Finally, notice that $g$ is continuous since it is the uniform limit of continuous functions. Thus, the fundamental theorem of calculus implies that $f$ is differentiable with $f' = g$.

</solution>

## Exercise 4.2.3

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

<solution>

We will prove the following statement for all $k \geq 0$ by induction:

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
