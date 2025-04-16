---
title: Homework 1
date: "2025-04-15"
tags:
    - metric space topology
publish: yes
---

# Homework 1

## Table of Contents

## Problem 1

Prove the remaining implications in Proposition 1.1.18:

Let $\p{x^{\p{k}}}_k$ be a sequence in $\R^n$.

1. If $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^1}$, then $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^2}$.
2. If $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^\infty}$, then $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^1}$.
3. If $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^1}$, then $\p{x^{\p{k}}}_k$ converges with respect to $d_{\ell^\infty}$.

<solution>

1. Given $x, y \in \R^n$,

    $$
    \begin{aligned}
      \p{d_{\ell^1}\p{x, y}}^2
         = \p{\sum_{i=1}^n \abs{x_i - y_i}}^2
        &= \sum_{i=1}^n \abs{x_i - y_i}^2 + \underbrace{\sum_{i \neq j} \abs{x_i - y_i} \abs{x_j - y_j}}_{\geq 0} \\
        &\geq \sum_{i=1}^n \abs{x_i - y_i}^2 \\
        &= \p{d_{\ell^2}\p{x, y}}^2.
    \end{aligned}
    $$

    Thus, because metrics are non-negative,

    $$
    d_{\ell^2}\p{x, y} \leq d_{\ell^1}\p{x, y}.
    $$

    In particular, if $\lim_{k\to\infty} d_{\ell^1}\p{x^{\p{k}}, x^{\p{0}}} = 0$, then by the squeeze theorem,

    $$
    d_{\ell^2}\p{x^{\p{k}}, x^{\p{0}}}
      \leq d_{\ell^1}\p{x^{\p{k}}, x^{\p{0}}}
      \xrightarrow{k\to\infty} 0.
    $$

2. Given $x, y \in \R^n$,

    $$
    \begin{aligned}
      d_{\ell^1}\p{x, y}
         = \sum_{i=1}^n \abs{x_i - y_i}
         \leq \sum_{i=1}^n \max_{j=1,\ldots,n} \abs{x_j - y_j}
        &= n d_{\ell^\infty}\p{x, y}.
    \end{aligned}
    $$

    The claim follows from the squeeze theorem like in part (1).

3. Given $x, y \in \R^n$, for any $1 \leq i \leq n$, we have

    $$
    \abs{x_i - y_i}
      \leq \sum_{j=1}^n \abs{x_j - y_j}
      = d_{\ell^1}\p{x, y}.
    $$

    Thus, because this inequality holds uniformly for all $1 \leq i \leq n$,

    $$
    d_{\ell^\infty}\p{x, y}
      = \max_{i=1,\ldots,n} \abs{x_i - y_i}
      \leq d_{\ell^1}\p{x, y}.
    $$

    The claim follows from the squeeze theorem like in part (1).

</solution>

## Problem 3

Prove Proposition 1.2.10.

<proposition> 1.2.10

Let $\p{X, d}$ be a metric space, let $E$ be a subset of $X$, and let $x_0$ be a point in $X$. Then the following statements are logically equivalent.

1. $x_0$ is an adherent point of $E$.
2. $x_0$ is either an interior point or a boundary point of $E$.
3. There exists a sequence $\p{x_n}_{n=1}^\infty$ in $E$ which converges to $x_0$ with respect to the metric $d$.

</proposition>

<solution>

We will show (i) $\iff$ (ii), and then (i) $\implies$ (iii) $\implies$ (i).

**(i) $\iff$ (ii)**:

Recall that $X = \Int\p{E} \cup \partial E \cup \Ext\p{E}$ and that this is a _disjoint_ union. Thus, it suffices to show that $x_0 \notin \Ext\p{E}$. Notice that

$$
\p{\forall r > 0 : B\p{x_0, r} \cap E \neq \emptyset}
  \iff \neg \p{\exists r > 0 : B\p{x_0, r} \cap E = \emptyset}.
$$

In other words,

$$
x_0\text{ is an adherent point} \iff x \notin \Ext\p{E}.
$$

**(i) $\implies$ (iii)**:

By definition,

$$
\forall r > 0 : B\p{x_0, r} \cap E \neq \emptyset.
$$

Thus, for each $n \in \N$, we have $B\p{x_0, \frac{1}{n}} \cap E \neq \emptyset$. Let $x_n \in B\p{x_0, \frac{1}{n}} \cap E$ (this is where we use [(countable) choice](https://en.wikipedia.org/wiki/Axiom_of_countable_choice), but this detail isn't that important to us in this class.) Thus, we get a sequence $\p{x_n}_n \subseteq E$ such that

$$
d\p{x_n, x_0} \leq \frac{1}{n} \xrightarrow{n\to\infty} 0,
$$

so $\p{x_n}_n$ converges to $x_0$ by the squeeze theorem.

**(iii) $\implies$ (i)**:

Let $r > 0$. Since $\p{x_n}_n$ converges to $x_0$, there exists $n \in \N$ such that

$$
d\p{x_n, x_0} < r
\implies x_n \in B\p{x_0, r}.
$$

Since $x_n \in E$ by assumption, this means $x_n \in B\p{x_0, r} \cap E$, i.e., this is a non-empty set.

</solution>

## Problem 5

Prove Proposition 1.3.4(b).

<proposition> 1.3.4

Let $\p{X, d}$ be a metric space, let $Y$ be a subset of $X$, and let $E$ be a subset of $Y$.

1. $E$ is relatively open with respect to $Y$ if and only if $E = V \cap Y$ for some set $V \subseteq X$ which is open in $X$.
2. $E$ is relatively closed with respect to $Y$ if and only if $E = K \cap Y$ for some set $K \subseteq X$ which is closed in $X$.

</proposition>

<solution>

While Solution 1 is much easier than Solution 2, I _highly_ recommend that you understand Solution 2 as well since it requires more understanding of the metric space definitions--it's very good practice.

Throughout this problem, I'll be using Proposition 1.2.15 (the long one) many times without mentioning it explicitly.

### Solution 1 (using part (i))

"$\implies$"

Assume $E$ is relatively closed with respect to $Y$. Then $Y \setminus E$ is open in $Y$, so by part (i), there exists $V \subseteq X$ which is open in $X$ such that $Y \setminus E = V \cap Y$. Notice that

$$
\begin{aligned}
  E
    &= Y \setminus \p{Y \setminus E} \\
    &= Y \cap \p{X \setminus \p{V \cap Y}} \\
    &= Y \cap \p{\p{X \setminus V} \cup \p{X \setminus Y}} \\
    &= \p{Y \cap \p{X \setminus V}} \cup \underbrace{\p{Y \cap \p{X \setminus Y}}}_{=\emptyset} \\
    &= Y \cap \p{X \setminus V}.
\end{aligned}
$$

Since $V$ was open in $X$, it follows that $K \coloneqq X \setminus V$ is closed in $X$.

"$\impliedby$"

Assume that $E = K \cap Y$ for some set $K \subseteq X$ which is closed in $X$. Then by a similar computation as above,

$$
Y \setminus E
  = Y \setminus \p{K \cap Y}
  = Y \cap \p{X \setminus K}.
$$

Since $K$ is closed in $X$, $V \coloneqq X \setminus K$ is open in $X$. Thus, part (i), $Y \setminus E$ is open in $Y$, and hence $E$ is closed in $Y$.

### Solution 2 (from the definitions)

"$\implies$"

Assume that $E$ is closed in $Y$. We let $K \coloneqq \cl{E}$, where the closure is taken with respect to $X$. We immediately have $E \subseteq \cl{E} \cap Y$, so it remains to check the reverse inclusion.

Let $x_0 \in \cl{E} \cap Y$. We will show that $x_0$ is an adherent point of $E$ in $\p{Y, d_{Y \times Y}}$. Let $r > 0$. Notice that because $x_0 \in Y$,

$$
B_Y\p{x_0, r}
  = B_X\p{x_0, r} \cap Y.
$$

Thus,

$$
\begin{aligned}
  B_Y\p{x_0, r} \cap E
    &= B_X\p{x_0, r} \cap E \cap Y \\
    &= B_X\p{x_0, r} \cap E
      && \p{E \subseteq Y} \\
    &\neq \emptyset.
      && \p{x_0 \in \cl{E}}
\end{aligned}
$$

Since $r$ was arbitrary, this means $x_0$ is an adherent point of $E$ in $Y$. But $E$ is closed in $Y$, so $x_0 \in E$.

"$\impliedby$"

Assume that $E = K \cap Y$, where $K$ is a closed set in $X$. We will show that $E$ contains all of its adherent points in $Y$.

Let $y_0 \in Y$ be an adherent point of $E$ in $\p{Y, d_{Y \times Y}}$. Since $E = K \cap Y$, we only need to show that $y_0 \in K$. Moreover, $K$ is closed in $\p{X, d}$, so it further suffices to show that $y_0$ is an adherent point of $K$ in $\p{X, d}$. Let $r > 0$ and notice that

$$
\begin{gathered}
  E = K \cap Y
    \implies E \subseteq K, \\
  B_Y\p{y_0, r} = B_X\p{y_0, r} \cap Y
    \implies B_Y\p{y_0, r} \subseteq B_X\p{y_0, r}.
\end{gathered}
$$

In particular,

$$
B_X\p{y_0, r} \cap K
  \supseteq B_Y\p{y_0, r} \cap E,
$$

which is non-empty since $y_0$ is an adherent point of $E$ in $\p{Y, d_{Y \times Y}}$. Thus, $y_0$ is an adherent point of $K$, which completes the proof.

</solution>
