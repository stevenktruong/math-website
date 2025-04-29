---
title: Homework 3
date: "2025-04-28"
tags:
    - compactness
publish: yes
---

# Homework 3

## Table of Contents

## Problem 1

Show (iii) $\implies$ (i) and (iv) $\iff$ (i) of Theorem 2.1.5 and give examples of:

1. A continuous function $\func{f}{X}{Y}$ such that there exists some open set $U \subseteq X$ such that $f\p{U}$ is not open in $Y$;

2. A continuous function $\func{f}{X}{Y}$ such that there exists some closed set $K \subseteq X$ such that $f\p{K}$ is not closed in $Y$.

<theorem> 2.1.5

Let $\p{X, d_X}$ be a metric space, and let $\p{Y, d_Y}$ be another metric space. Let $\func{f}{X}{Y}$ be a function. Then the following four statements are equivalent:

1. f is continuous.
2. Whenever $\p{x^{\p{n}}}_{n=1}^\infty$ is a sequence in $X$ which converges to some point $x_0 \in X$ with respect to the metric $d_X$, the sequence $\p{f\p{x^{\p{n}}}}_{n=1}^\infty$ converges to $f\p{x_0}$ with respect to the metric $d_Y$.
3. Whenever $V$ is an open set in $Y$, the set $f^{-1}\p{V} \coloneqq \set{x \in X \st f\p{x} \in V}$ is an open set in $X$.
4. Whenever $F$ is a closed set in $Y$, the set $f^{-1}\p{F} \coloneqq \set{x \in X \mid f\p{x} \in F}$ is a closed set in $X$.

</theorem>

<solution>

**(iii) $\implies$ (i)**:

Let $x_0 \in X$ and $\varepsilon > 0$. Consider $B_Y\p{f\p{x_0}, \varepsilon}$, which is an open set (by the long proposition). Thus, by assumption, $f^{-1}\p{B_Y\p{f\p{x_0}, \varepsilon}}$ is also open and contains $x_0$ by construction. Thus, (by the long proposition again, $x_0$ is an interior point, so) there exists $\delta > 0$ such that $B_X\p{x_0, \delta} \subseteq f^{-1}\p{B_Y\p{f\p{x_0}, \varepsilon}}$. In other words,

$$
\begin{aligned}
  d_X\p{x, x_0} < \delta
    &\implies x \in B_X\p{x_0, \delta} \\
    &\implies x \in f^{-1}\p{B_Y\p{f\p{x_0}, \varepsilon}} \\
    &\implies f\p{x} \in B_Y\p{f\p{x_0}, \varepsilon} \\
    &\implies d_Y\p{f\p{x}, f\p{x_0}} < \varepsilon,
\end{aligned}
$$

so $f$ is continuous at $x_0$ because $\varepsilon$ was arbitrary. Since $x_0$ was also arbitrary, this shows that $f$ is continuous.

**(iii) $\iff$ (iv)**:

Given any subset $E \subseteq Y$, we have

$$
\begin{aligned}
  x \in f^{-1}\p{Y \setminus E}
    &\iff f\p{x} \in Y \setminus E \\
    &\iff f\p{x} \notin E \\
    &\iff x \notin f^{-1}\p{E} \\
    &\iff x \in X \setminus f^{-1}\p{E}.
\end{aligned}
$$

In other words,

$$
f^{-1}\p{Y \setminus E} = X \setminus f^{-1}\p{E}. \tag{$*$}
$$

If (iii) holds, then given a closed set $F \subseteq Y$, (the long proposition implies) its complement $Y \setminus F$ is open, so by (iii), $f^{-1}\p{Y \setminus F}$ is open and by ($*$), its complement is $f^{-1}\p{F}$ and must be closed.

Similarly, if (iv) holds, then given an open $V \subseteq Y$, its complement $Y \setminus V$ is closed. Using (iv), $f^{-1}\p{Y \setminus V}$ is closed and using ($*$) again, we see $f^{-1}\p{V}$ must be open.

**Examples**

1. Let $X = Y = \R$ and consider the constant function $f\p{x} = 0$, which is trivially continuous. Then $U = X$ is open (since the entire metric space is both open and closed in itself), but $f\p{U} = \set{0}$, which is not open in $\R$.

2. Let $X = Y = \R$ and consider the function $f\p{x} = \frac{1}{1 + x^2}$, which is continuous since $1 + x^2$ is continuous and is never $0$. If we take $K = \R$, then $K$ is closed (by the same reasoning above) and $f\p{K} = \poc{0, 1}$, which is not closed in $\R$.

### Common Mistakes

The most common mistakes were giving examples since the choice of $X$ and $Y$ can make or break your example. For example, if you define $\func{f}{\R}{\set{0}}$ by $f\p{x} = 0$, then while it's true that $f\p{\R} = \set{0}$ still, the problem is that in the (discrete) metric space $\set{0}$, the singleton $\set{0}$ is open.

Similarly, I saw some students use $\func{f}{\R}{\pco{0, \infty}}$, $f\p{x} = x^2$, and $U = \p{-1, 1}$. The issue here is that $\pco{0, \infty}$ has different open sets from $\R$ itself. Indeed, $f\p{U} = \poc{0, 1}$ which is not open in $\R$, but is _relatively open_ in $\pco{0, \infty}$ since

$$
\pco{0, 1} = \p{-1, 1} \cap \pco{0, \infty}.
$$

See Proposition 1.3.4.

</solution>

## Problem 4

Prove Proposition 2.3.2. (_Hint_: modify the proof of Proposition 9.6.7.)

<proposition> 2.3.2; Maximum principle

Let $\p{X, d}$ be a compact metric space, and let $\func{f}{X}{\R}$ be a continuous function. Then $f$ is bounded. Furthermore, if $X$ is non-empty, then $f$ attains its maximum at some point $x_{\max} \in X$ and also attains its minimum at some point $x_{\min} \in X$.

</proposition>

<solution>

First, if we can show that all continuous functions on compact metric spaces attain a maximum, then they also attain a minimum. Indeed, note that $-f$ is continuous, so there exists $x_{\min} \in X$ such that $-f\p{x_{\min}} = \sup \p{-f\p{X}}$ by assumption. Finally, recall from 131A that

$$
\inf f\p{X}
  = -\sup \p{-f\p{X}}.
  = -\p{-f\p{x_{\min}}}
  = f\p{x_{\min}},
$$

so $f$ also attains a minimum. Thus, we only need to show that $f$ attains its maximum. (Alternatively, you can just redo the whole proof with $\sup f\p{X}$ replaced with $\inf f\p{X}$.)

Since $X$ is compact and $f$ is continuous, its image $f\p{X}$ is also compact, which means $f$ is automatically bounded. If $X \neq \emptyset$, then $f\p{X} \neq \emptyset$ and is bounded, so $\sup f\p{X}$ exists in $\R$. Recall (from 131A) that there is a sequence $\p{y_n}_n \subseteq f\p{X}$ such that $y_n \to \sup f\p{X}$.

From here, there are two ways to finish the problem.

### Solution 1 (using abstract nonsense)

We have shown that $\sup f\p{X}$ is an adherent point of $f\p{X}$. Since $f\p{X}$ is compact, it is also closed, so $\sup f\p{X} \in f\p{X}$ or in other words, there exists $x_{\max} \in X$ such that $f\p{x_{\max}} = \sup f\p{X}$.

### Solution 2 (using sequences)

By definition of $f\p{X}$, for each $n \in \N$, there exists $x_n \in X$ such that $f\p{x_n} = y_n$. Since $X$ is compact, there is a convergent subsequence $\p{x_{n_k}}_k$ which converges to some $x_0 \in X$. Thus, because $f$ is continuous,

$$
f\p{x_0}
  = \lim_{k\to\infty} f\p{x_{n_k}}
  = \lim_{k\to\infty} y_{n_k}
  = \sup f\p{X},
$$

so we can take $x_{\max} = x_0$.

</solution>
