---
title: Homework 3
date: "2025-05-06"
tags:
    - uniform convergence
    - uniform continuity
publish: yes
---

# Homework 3

## Table of Contents

## Exercise 3.2.1

The purpose of this exercise is to demonstrate a concrete relationship between continuity and pointwise convergence, and between uniform continuity and uniform convergence. Let $\func{f}{\R}{\R}$ be a function. For any $a \in \R$, let $\func{f_a}{\R}{\R}$ be the shifted function $f_a\p{x} \coloneqq f\p{x - a}$.

1. Show that $f$ is continuous if and only if, whenever $\p{a_n}_{n=0}^\infty$ is a sequence of real numbers which converges to zero, the shifted functions $f_{a_n}$ converge pointwise to $f$.
2. Show that $f$ is uniformly continuous if and only if, whenever $\p{a_n}_{n=0}^\infty$ is a sequence of real numbers which converges to zero, the shifted functions $f_{a_n}$ converge uniformly to $f$.

<solution>

1. **$\implies$**:

    Suppose $f$ is continuous and let $\p{a_n}_{n=1}^\infty$ be a sequence which converges to $0$. Let $\varepsilon > 0$ and $x_0 \in \R$. Since $f$ is continuous at $x_0$, there exists $\delta > 0$ (which depends on $x_0$) such that

    $$
    \forall x \in \R : \abs{x - x_0} < \delta \implies \abs{f\p{x} - f\p{x_0}} < \varepsilon.
    $$

    Since $a_n \to 0$, there exists $N \in \N$ such that

    $$
    n \geq N \implies \abs{a_n} < \delta.
    $$

    In particular, if $n \geq N$, then

    $$
    \abs{\p{x_0 - a_n} - x_0} = \abs{a_n} < \delta.
    $$

    Thus,

    $$
    \abs{f_{a_n}\p{x_0} - f\p{x_0}}
      = \abs{f\p{x_0 - a_n} - f\p{x_0}} < \varepsilon
    $$

    for $n \geq N$. Since $x_0$ and $\varepsilon$ were arbitrary, this shows that $f_{a_n} \to f$ pointwise.

    **$\impliedby$**:

    Suppose $f$ were not continuous. Then

    $$
    \exists x_0 \in \R\ \exists \varepsilon_0 > 0\ \forall \delta > 0\ \exists x \in \R : \abs{x - x_0} < \delta \text{ but } \abs{f\p{x} - f\p{x_0}} \geq \varepsilon_0.
    $$

    Let $x_0 \in \R$ and $\varepsilon_0 > 0$ be as in the negation. Applying the assumption to $\delta = \frac{1}{n}$, we get a sequence $\p{x_n}_n$ such that $\abs{x_n - x_0} < \frac{1}{n}$ and $\abs{f\p{x_n} - f\p{x_0}} \geq \varepsilon_0$ for all $n \in \N$.

    By the squeeze theorem, $a_n \coloneqq x_0 - x_n \to 0$, but

    $$
    \abs{f_{a_n}\p{x_0} - f\p{x_0}}
      = \abs{f\p{x_n} - f\p{x_0}} \geq \varepsilon_0,
    $$

    so $f_{a_n}$ does not converge to $f$ at $x_0$.

2. **$\implies$**:

    Suppose $f$ is uniformly continuous and let $\p{a_n}_{n=1}^\infty$ be a sequence which converges to $0$. Let $\varepsilon > 0$. Since $f$ is uniformly continuous, there exists $\delta > 0$ such that

    $$
    \forall x, y \in \R : \abs{x - y} < \delta \implies \abs{f\p{x} - f\p{y}} < \varepsilon.
    $$

    Since $a_n \to 0$, there exists $N \in \N$ such that

    $$
    n \geq N \implies \abs{a_n} < \delta.
    $$

    In particular, if $n \geq N$ and $x_0 \in \R$, then

    $$
    \abs{\p{x_0 - a_n} - x_0} = \abs{a_n} < \delta.
    $$

    Thus, since $x_0$ was arbitrary,

    $$
    \forall x_0 \in \R :
    \abs{f_{a_n}\p{x_0} - f\p{x_0}}
      = \abs{f\p{x_0 - a_n} - f\p{x_0}} < \varepsilon
    $$

    for $n \geq N$. Since $\varepsilon$ was arbitrary, this shows that $f_{a_n} \to f$ uniformly.

    **$\impliedby$**:

    Suppose $f$ were not uniformly continuous. Then

    $$
    \exists \varepsilon_0 > 0\ \forall \delta > 0\ \exists x, y \in \R : \abs{x - y} < \delta \text{ but } \abs{f\p{x} - f\p{y}} \geq \varepsilon_0.
    $$

    Let $\varepsilon_0 > 0$ be as in the negation. Applying the assumption to $\delta = \frac{1}{n}$, we get sequences $\p{x_n}_n, \p{y_n}_n$ such that $\abs{x_n - y_n} < \frac{1}{n}$ and $\abs{f\p{x_n} - f\p{y_n}} \geq \varepsilon_0$ for all $n \in \N$.

    By the squeeze theorem, $a_n \coloneqq y_n - x_n \to 0$, but

    $$
    \abs{f_{a_n}\p{y_n} - f\p{y_n}}
      = \abs{f\p{x_n} - f\p{y_n}} \geq \varepsilon_0,
    $$

    which implies

    $$
    0 < \varepsilon_0 \leq \sup_{x \in \R} \abs{f_{a_n}\p{x} - f\p{x}},
    $$

    so $f_{a_n}$ cannot converge to $f$ uniformly.

</solution>

## Exercise 3.2.2(i)(ii)

1. Let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and let $\func{f}{X}{Y}$ be another function from $X$ to $Y$. Show that if $f^{\p{n}}$ converges uniformly to $f$, then $f^{\p{n}}$ also converges pointwise to $f$.
2. For each integer $n \geq 1$, let $\func{f^{\p{n}}}{\p{-1, 1}}{\R}$ be the function $f^{\p{n}}\p{x} \coloneqq x^n$. Prove that $f^{\p{n}}$ converges pointwise to the zero function $0$, but does not converge uniformly to any function $\func{f}{\p{-1, 1}}{\R}$.

<solution>

1. Given $x \in X$, we have

    $$
    d_Y\p{f\p{x}, f^{\p{n}}\p{x}}
      \leq \sup_{z \in X} d_Y\p{f\p{z}, f^{\p{n}}\p{z}}
      \xrightarrow{n\to\infty} 0
    $$

    since $f^{\p{n}} \to f$ uniformly. Thus, by the squeeze theorem, $f^{\p{n}}\p{x} \to f\p{x}$, so since $x$ was arbitrary, this shows that $f^{\p{n}} \to f$ pointwise.

2. For any $x \in \p{-1, 1}$, we have $\abs{x} < 1$, so we have $\abs{x}^n \to 0$. This shows that $f^{\p{n}} \to 0$ pointwise. Now suppose for the sake of contradiction that $f^{\p{n}} \to f$ uniformly for some function $\func{f}{\p{-1, 1}}{\R}$. By (a), $f^{\p{n}} \to f$ pointwise, so by uniqueness, $f^{\p{n}}$ converges to $0$ uniformly. However, for all $n \in \N$,

    $$
    \sup_{x \in \p{-1, 1}} \abs{x^n - 0} = 1
    $$

    (it's clear that $\abs{x^n} \leq 1$ and conversely, $\lim_{x\to1^-} x^n = 1$). In particular, $\sup_{x \in \p{-1, 1}} \abs{x^n - 0} \not\to 0$, so $x^n$ cannot converge uniformly to $0$, which is a contradiction.

</solution>

## Exercise 3.2.4

Let $\func{f_n}{X}{Y}$ be a sequence of bounded functions from one metric space $\p{X, d_X}$ to another metric space $\p{Y, d_Y}$. Suppose that $f_n$ converges uniformly to another function $\func{f}{X}{Y}$. Suppose that $f$ is a bounded function; i.e., there exists a ball $B_{\p{Y,d_Y}}\p{y_0, R}$ in $Y$ such that $f\p{x} \in B_{\p{Y,d_Y}}\p{y_0, R}$ for all $x \in X$. Show that the sequence $f_n$ is _uniformly bounded_; i.e., there exists a ball $B_{\p{Y,d_Y}}\p{y_0, R}$ in $Y$ such that $f_n\p{x} \in B_{\p{Y,d_Y}}\p{y_0, R}$ for all $x \in X$ and all positive integers $n$.

<solution>

Since $f$ is bounded, there exist $y_0 \in Y$ and $R > 0$ such that $f\p{x} \in B_Y\p{y_0, R}$ for all $x \in X$. Since $f^{\p{n}} \to f$ uniformly, there exists $N \in \N$ such that

$$
\sup_{x \in X} d_Y\p{f\p{x}, f^{\p{n}}\p{x}} < 1.
$$

Thus, for any $x \in X$ and $n \geq N$, we have

$$
d_Y\p{f^{\p{n}}\p{x}, y_0}
  \leq d_Y\p{f^{\p{n}}\p{x}, f\p{x}} + d_Y\p{f\p{x}, y_0}
  < 1 + R.
$$

In other words, $f^{\p{n}}\p{x} \in B_Y\p{y_0, R + 1}$ for all $x \in X$ and $n \geq N$. It remains to handle $f^{\p{1}}, \ldots, f^{\p{N-1}}$. For each $1 \leq n \leq N - 1$, there exist $y_i \in Y$ and $R_i > 0$ such that $f^{\p{i}}\p{x} \in B_Y\p{y_i, R_i}$ for all $x \in X$. Set

$$
R' = \max_{1 \leq i \leq N - 1} d_Y\p{y_i, y_0} + \max_{1 \leq i \leq N - 1} R_i + \p{R + 1}.
$$

Let $x \in X$ and $n \in \N$. If $1 \leq n \leq N - 1$, then

$$
\begin{aligned}
  d_Y\p{f^{\p{n}}\p{x}, y_0}
    &\leq d_Y\p{f^{\p{n}}\p{x}, y_n} + d_Y\p{y_0, y_n} \\
    &< \max_{1 \leq i \leq N - 1} R_i + \max_{1 \leq i \leq N - 1} d_Y\p{y_i, y_0} \\
    &\leq R'.
\end{aligned}
$$

Otherwise, if $n \geq N$, then

$$
d_Y\p{f^{\p{n}}\p{x}, y_0}
  < R + 1
  \leq R'.
$$

Thus, in all cases, we have shown $f^{\p{n}}\p{x} \in B_Y\p{y_0, R'}$, as desired.

</solution>
