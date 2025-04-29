---
title: Midterm 1 Partial Solutions
date: "2025-04-28"
tags:
    - metric spaces
    - compactness
publish: yes
---

# Midterm 1

This page will only include solutions to Problems 1 and 4, which were the ones I graded. The professor will provide solutions for Problems 2 and 3 elsewhere.

The solutions I write down here would receive full points from me. They aren't the only solutions that can receive full points, of course.

## Table of Contents

## Problem 1

Let $\p{X, d}$ be a metric space, and let $E, F$ be open subsets of $X$. Suppose $E \cap F \neq \emptyset$ and $E \cap \partial F \neq \emptyset$. For any $x \in E \cap \partial F$, show that $x \in \cl{E \cap F}$. (_Hint_: you can use the fact that for any $x \in X$, $x \in \cl{E \cap F}$ if and only if for all $r > 0$, $B\p{x, r} \cap \p{E \cap F} \neq \emptyset$.)

<solution>

Fix $x \in E \cap \partial F$. Since $x \in E$ and $E$ is open, there exists $r_0 > 0$ such that $B\p{x_0, r} \subseteq E$.

Now let $r > 0$. There are two cases: $r \leq r_0$ and $r > r_0$.

**Case 1**: $r \leq r_0$

In this case, $B\p{x, r} \subseteq B\p{x, r_0} \subseteq E$. Moreover, because $x \in \partial F$, we have $B\p{x, r} \cap F \neq \emptyset$. Thus

$$
\emptyset
  \neq B\p{x, r} \cap F
  = B\p{x, r_0} \cap E \cap F
$$

in this case.

**Case 2**: $r > r_0$

Here, we have instead $B\p{x, r_0} \subseteq B\p{x, r}$. As above, we have

$$
\begin{aligned}
  \emptyset
    &\neq B\p{x, r_0} \cap F
        &&\p{x \in \partial F} \\
    &= B\p{x, r_0} \cap E \cap F
        && \p{B\p{x, r_0} \subseteq E} \\
    &\subseteq B\p{x, r} \cap E \cap F,
        && \p{r_0 < r}
\end{aligned}
$$

so $B\p{x, r_0} \cap E \cap F \neq \emptyset$ in this case also.

In all cases, we have shown $B\p{x, r_0} \cap E \cap F \neq \emptyset$, so $x$ is an adherent point of $E \cap F$.

</solution>

## Problem 4

Let $\func{f}{X}{Y}$ be a continuous map from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$. Let $K \subseteq X$ be any compact subset of $X$. Prove that the image $f\p{K} \coloneqq \set{f\p{x} \mid x \in K}$ of $Y$ is also compact.

<solution>

### Solution 1 (using open covers)

Let $\set{U_\alpha}_{\alpha \in I}$ be an open cover of $f\p{K}$. Since $f$ is continuous, $f^{-1}\p{U_\alpha}$ is open in $X$ for any $\alpha \in I$. Moreover,

$$
\begin{aligned}
  K
    \subseteq f^{-1}\p{f\p{K}}
    \subseteq f^{-1}\p{\bigcup_{\alpha \in I} U_{\alpha}}
    = \bigcup_{\alpha \in I} f^{-1}\p{U_{\alpha}}
\end{aligned}
$$

In other words, $\set{f^{-1}\p{U_\alpha}}_{\alpha \in I}$ is an open cover of $K$, so since $K$ is compact, there exist $\alpha_1, \ldots, \alpha_n \in I$ such that $\set{f^{-1}\p{U_{\alpha_1}}, \ldots, f^{-1}\p{U_{\alpha_n}}}$ is a finite subcover of $K$. Finally,

$$
f\p{K}
    \subseteq f\p{\bigcup_{i=1}^n f^{-1}\p{U_{\alpha_i}}}
    \subseteq \bigcup_{i=1}^n U_{\alpha_i},
$$

so $\set{U_{\alpha_1}, \ldots, U_{\alpha_n}}$ is a finite subcover of $f\p{K}$.

</solution>

### Solution 2 (using sequences)

Let $\p{y_n}_n \subseteq f\p{K}$ be an arbitrary sequence. By definition, for each $n \in \N$, there exists $x_n \in K$ such that $y_n = f\p{x_n}$. Since $K$ is compact, there exists a subsequence $\p{x_{n_k}}_k$ which converges to some $x_0 \in K$. By continuity of $f$,

$$
\lim_{k\to\infty} y_{n_k}
  = \lim_{k\to\infty} f\p{x_{n_k}}
  = f\p{x_0} \in f\p{K},
$$

which shows that $\p{y_{n_k}}_k$ is a convergent subsequence of $\p{y_n}_n$. Thus, $f\p{K}$ is compact.
