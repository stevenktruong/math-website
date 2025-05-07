---
title: Homework 4
date: "2025-05-06"
tags:
    - continuity
    - uniform convergence
publish: yes
---

# Homework 4

## Table of Contents

## Problem 3

Prove (iii) in Proposition 3.1.5 is equivalent to Definition 3.1.1.

<definition> 3.1.1

Let $\p{X, d_X}$ and $\p{Y, d_Y}$ be metric spaces, let $E$ be a subset of $X$, and let $\func{f}{E}{Y}$ be a function. If $x_0 \in X$ is an adherent point of $E$, and $L \in Y$, we say that _$f\p{x}$ converges to $L$ in $Y$ as $x$ converges to $x_0$ in $E$_, or write $\lim_{x\to x0; x \in E} f\p{x} = L$, if for every $\varepsilon > 0$ there exists a $\delta > 0$ such that $d_Y\p{f\p{x}, L} < \varepsilon$ for all $x \in E$ such that $d_X\p{x, x_0} < \delta$.

</definition>

<proposition> 3.1.5

Let $\p{X, d_X}$ and $\p{Y, d_Y}$ be metric spaces, let $E$ be a subset of $X$, and let $\func{f}{E}{Y}$ be a function. Let $x_0 \in X$ be an adherent point of $E$ and $L \in Y$. Then the following four statements are logically equivalent:

1. $\lim_{x\to x0; x \in E} f\p{x} = L$.
2. For every sequence $\p{x^{\p{n}}}_{n=1}^\infty$ in $E$ which converges to $x_0$ with respect to the metric $d_X$, the sequence $\p{f\p{x^{\p{n}}}}_{n=1}^\infty$ converges to $L$ with respect to the metric $d_Y$.
3. For every open set $V \subseteq Y$ which contains $L$, there exists an open set $U \subseteq X$ containing $x_0$ such that $f\p{U \cap E} \subseteq V$.
4. If one defines the functions $\func{g}{E \cup \set{x_0}}{Y}$ be defining $g\p{x_0} \coloneqq L$, and $g\p{x} \coloneqq f\p{x}$ for $x \in E \setminus \set{x_0}$, then $g$ is continuous at $x_0$. Furthermore, if $x_0 \in E$, then $f\p{x_0} = L$.

</proposition>

<solution>

**(i) $\implies$ (iii)**:

Assume the $\varepsilon$-$\delta$ definition holds and let $V \subseteq Y$ be an open set containing $L$. Since $V$ is open, there exists $\varepsilon > 0$ such that $B_Y\p{L, \varepsilon} \subseteq V$, and by (i), there exists $\delta > 0$ such that

$$
\forall x \in E : d_X\p{x, x_0} < \delta \implies d_Y\p{f\p{x}, L} < \varepsilon.
$$

Equivalently,

$$
\br{\forall x \in E \cap B_X\p{x_0, \delta} : f\p{x} \in B_Y\p{L, \varepsilon}}
  \iff f\p{B_X\p{x_0, \delta} \cap E} \subseteq B_Y\p{L, \varepsilon}.
$$

Take $U = B_X\p{x_0, \delta}$, which is open since open balls are open in any metric space. Then $x_0 \in U$ by construction and the above shows that

$$
f\p{U \cap E} \subseteq B_Y\p{L, \varepsilon} \subseteq V.
$$

**(i) $\impliedby$ (iii)**:

Assume that (iii) holds and let $\varepsilon > 0$. Let $V = B_Y\p{L, \varepsilon}$, which is open since open balls are open. By (iii), there exists an open set $U$ containing $x_0$ such that $f\p{U \cap E} \subseteq B\p{L, \varepsilon}$. Since $U$ is open, there exists $\delta > 0$ such that $B_X\p{x_0, \delta} \subseteq U$. Then

$$
f\p{B_X\p{x_0, \delta} \cap E}
  \subseteq f\p{U \cap E}
  \subseteq B_Y\p{L, \varepsilon},
$$

or equivalently,

$$
\begin{gathered}
\br{\forall x \in B_X\p{x_0, \delta} \cap E : f\p{x} \in B_Y\p{L, \varepsilon}} \\
  \iff \br{\forall x \in E : d_X\p{x, x_0} < \delta \implies d_Y\p{f\p{x}, L} < \varepsilon}.
\end{gathered}
$$

Since $\varepsilon$ was arbitrary, we are done.

</solution>

## Problem 6

Prove Theorem 3.3.1. Explain briefly why your proof requires uniform convergence, and why pointwise convergence would not suffice. (_Hints_: it is easiest to use the "epsilon-delta" definition of continuity from Definition 2.1.1. You may find the triangle inequality

$$
\begin{aligned}
  d_Y\p{f\p{x}, f\p{x_0}}
    &\leq d_Y\p{f\p{x}, f^{\p{n}}\p{x}} + d_Y\p{f^{\p{n}}\p{x}, f^{\p{n}}\p{x_0}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{n}}\p{x_0}, f\p{x_0}}
\end{aligned}
$$

useful. Also, you may need to divide $\varepsilon$ as $\varepsilon = \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3}$. Finally, it is possible to prove Theorem 3.3.1 from Proposition 3.3.3, but you may find it easier conceptually to prove Theorem 3.3.1 first.)

<theorem> 3.3.1

Suppose $\p{f^{\p{n}}}_{n=1}^\infty$ is a sequence of functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and suppose that this sequence converges uniformly to another function $\func{f}{X}{Y}$. Let $x_0$ be a point in $X$. If the functions $f^{\p{n}}$ are continuous at $x_0$ for each $n$, then the limiting function $f$ is also continuous at $x_0$.

</theorem>

<solution>

Let $\varepsilon > 0$. Since $f^{\p{n}} \to f$ uniformly, there exists $N \in \N$ such that

$$
\forall n \geq N\ \forall x \in X : d_Y\p{f^{\p{n}}\p{x}, f\p{x}} < \frac{\varepsilon}{3}. \tag{$*$}
$$

Moreover, because each $f^{\p{n}}$ is continuous at $x_0$, there exists $\delta_n > 0$ such that

$$
d_X\p{x, x_0} < \delta_n \implies d_Y\p{f^{\p{n}}\p{x}, f^{\p{n}}\p{x_0}} < \frac{\varepsilon}{3}. \tag{$\dagger$}
$$

Fix $n_0 = N$ and let $\delta = \delta_{n_0}$. If $d_X\p{x, x_0} < \delta$, then

$$
\begin{aligned}
  d_Y\p{f\p{x}, f\p{x_0}}
    &\leq d_Y\p{f\p{x}, f^{\p{n_0}}\p{x}} + d_Y\p{f^{\p{n_0}}\p{x}, f^{\p{n_0}}\p{x_0}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{n_0}}\p{x_0}, f\p{x_0}} \\
    &< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon.
\end{aligned}
$$

For the first and third terms, we have $n_0 \geq N$, so ($*$) is applicable. Lastly, for the second term, we assumed $d_X\p{x, x_0} < \delta_{n_0}$, so ($\dagger$) is applicable.

The proof fails when we only assume pointwise convergence since to make the first term above less than $\frac{\varepsilon}{3}$, we need to pick $n_0 = n_0\p{x}$, i.e., $n_0$ would have to depend on $x$. However, to bound the second term, we would then need $x$ to satisfy $d_X\p{x, x_0} < \delta_{n_0\p{x}}$. Thus, we end up with a circular dependency: $\delta$ would have to be chosen based on $x$, but $x$ itself depends on $\delta$.

</solution>

## Problem 8

Give an example to show that Proposition 3.3.6 fails if the phrase "converges uniformly" is replaced by "converges pointwise". (_Hint_: some of the examples already given earlier will already work here.)

<proposition> 3.3.6

Let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and suppose that this sequence converges uniformly to another function $\func{f}{X}{Y}$. If the functions $f^{\p{n}}$ are bounded on $X$ for each $n$, then the limiting function $f$ is also bounded on $X$.

</proposition>

<solution>

There are a lot of examples that work. For example, if $X = Y = \R$, let

$$
f^{\p{n}}\p{x}
  = \begin{cases}
      x & \text{if } -n \leq x \leq n, \\
      0 & \text{otherwise}.
    \end{cases}
$$

Then $\abs{f^{\p{n}}\p{x}} \leq n$ for all $x \in \R$ and $n \in \N$, but $f^{\p{n}}\p{x} \to x$, and $x$ is unbounded (e.g., $\lim_{x\to+\infty} x = \infty$).

</solution>
