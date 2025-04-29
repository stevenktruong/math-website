---
title: Homework 2
date: "2025-04-28"
tags:
    - sequences
    - compactness
    - uniform continuity
publish: yes
---

# Homework 2

## Table of Contents

## Exercise 1.5.6

Prove Corollary 1.5.9. (_Hint_: work in the compact metric space $\p{K_1, \left. d \right\rvert_{K_1 \times K_1}}$, and consider the sets $V_n \coloneqq K_1 \setminus K_n$, which are open on $K_1$. Assume for sake of contradiction that $\bigcap_{n=1}^\infty K_n = \emptyset$, and then apply Theorem 1.5.8.)

<corollary> 1.5.9

Let $\p{X, d}$ be a metric space, and let $K_1, K_2, K_3, \ldots$ be a sequence of non-empty compact subsets of $X$ such that

$$
K_1 \supseteq K_2 \supseteq K_3 \supseteq \cdots.
$$

Then the intersection $\bigcap_{n=1}^\infty K_n$ is non-empty.

</corollary>

<solution>

### Solution 1 (using open sets)

This is the solution suggested by the hint. Note that $V_n = K_1 \cap \p{X \setminus K_n}$. Since $K_n$ is compact, it's automatically closed, so $X \setminus K_n$ is open. Thus, $V_n$ is relatively open in $K_1$. Following the hint, we assume that $\bigcap_{n=1}^\infty K_n = \emptyset$, which implies

$$
\bigcup_{n=1}^\infty V_n
  = K_1 \setminus \bigcap_{n=1}^\infty K_n
  = K_1.
$$

In other words, $\set{V_n}_{n \in \N}$ is an open cover of $K_1$, so because $K_1$ is compact, there exist $n_1 < n_2 < \cdots n_k$ such that $\set{V_{n_1}, \ldots, V_{n_k}}$ is a finite subcover of $K_1$. Since $K_n \supseteq K_{n+1}$ for all $n$, we have $V_n \subseteq V_{n+1}$ for all $n$. Thus,

$$
K_1 = V_{n_1} \cup \cdots \cup V_{n_k} = V_{n_k} = K_1 \setminus K_{n_k}.
$$

But this implies that $K_{n_k} = \emptyset$, which is impossible.

### Solution 2 (using sequences)

For each $n \in \N$, we let $x_n \in K_n$ and consider the sequence $\p{x_n}_n \subseteq K_1$. Since $K_1$ is compact, there exists a subsequence $\p{x_{n_k}}_k$ which converges to some $x_0 \in K_1$. Since $\p{n_k}_k$ is a subsequence, we have $n_k \geq k$ for each $k$. Thus, given $\ell \in \N$, because $K_n \supseteq K_{n+1}$ for all $n$, we get

$$
x_{n_k} \in K_k \subseteq K_\ell \quad \forall k \geq \ell.
$$

In other words, $\p{x_{n_k}}_{k=\ell}^\infty \subseteq K_\ell$ and $x_{n_k} \to x_0$, so because compact sets are closed, we get $x_0 \in K_\ell$. Since $\ell$ was arbitrary, this shows

$$
x_0 \in \bigcap_{n=1}^\infty K_n,
$$

i.e., the intersection is non-empty.

</solution>

## Exercise 1.5.7

Prove Theorem 1.5.10. (_Hint_: for part (iii), you may wish to use (ii), and first prove that every singleton set is compact.)

<theorem> 1.5.10

Let $\p{X, d}$ be a metric space.

1. If $Y$ is a compact subset of $X$, and $Z \subseteq Y$, then $Z$ is compact if and only if $Z$ is closed.

2. If $Y_1, \ldots, Y_n$ are a finite collection of compact subsets of $X$, then their union $Y_1 \cup \cdots \cup Y_n$ is also compact.

3. Every finite subset of $X$ (including the empty set) is compact.

</theorem>

<solution>

1. "$\implies$"

    We have already proven that compact sets are closed (this is Corollary 1.5.6).

    $\impliedby$

    Assume $Z$ is closed and let $\p{z_n}_n \subseteq Z$ be a sequence. Then $\p{z_n}_n \subseteq Y$, so because $Y$ is compact, there exists a subsequence $\p{z_{n_k}}_k$ which converges to some $y_0 \in Y$. But $\p{z_{n_k}}_k \subseteq Z$ and $z_{n_k} \to y_0$, so because $Z$ is closed, we have $y_0 \in Z$. Thus, $Z$ is compact.

2. Let $\set{U_\alpha}_{\alpha \in I}$ be an open cover of $Y_1 \cup \cdots \cup Y_n$. Notice that for any $1 \leq i \leq n$,

    $$
    Y_i \subseteq \bigcup_{j=1}^n Y_j \subseteq \bigcup_{\alpha \in I} U_\alpha.
    $$

    In other words, $\set{U_\alpha}_{\alpha \in I}$ is also an open cover of each $Y_i$, which is compact, so there exists a finite subset $F_i \subseteq I$ such that $\set{U_\alpha}_{\alpha \in F_i}$ is an open cover of $Y_i$. Then

    $$
    \bigcup_{i=1}^n Y_i
      \subseteq \bigcup_{i=1}^n \bigcup_{\alpha \in F_i} U_\alpha,
    $$

    i.e., $\set{U_\alpha \mid \alpha \in F_1 \cup \cdots \cup F_n}$ is an open cover of the union, and it is finite since each $F_i$ is a finite set.

3. Let $E \subseteq X$ be a finite subset and $\set{U_\alpha}_{\alpha \in I}$ be an open cover of $E$. If $E = \emptyset$, then $E \subseteq U_\alpha$ for any $\alpha \in I$, so $E$ is compact.

    Next, if $E = \set{x}$ is a singleton set, then because $\set{U_\alpha}_{\alpha \in I}$ covers $E$, there exists $\alpha_0 \in I$ such that $x \in U_{\alpha_0}$. Then $E \subseteq U_{\alpha_0}$, so $E$ is compact.

    Finally, if $E = \set{x_1, \ldots, x_n}$, then

    $$
    E = \bigcup_{i=1}^n \set{x_i}.
    $$

    Applying (ii) with $Y_i = \set{x_i}$, which we just proved is compact, shows that $E$ is also compact.

</solution>

## Exercise 2.3.4

Let $\p{X, d_X}$, $\p{Y, d_Y}$, $\p{Z, d_Z}$ be metric spaces, and let $\func{f}{X}{Y}$ and $\func{g}{Y}{Z}$ be uniformly continuous functions. Show that $\func{g \circ f}{X}{Z}$ is also uniformly continuous.

<solution>

Let $\varepsilon > 0$. Since $g$ is uniformly continuous, there exists $\eta > 0$ such that

$$
\forall y, y' \in Y : d_Y\p{y, y'} < \eta \implies d_Z\p{g\p{y}, g\p{y'}} < \varepsilon. \tag{$*$}
$$

Similarly, because $f$ is uniformly continuous, there exists $\delta > 0$ such that

$$
\forall x, x' \in X : d_X\p{x, x'} < \delta \implies d_Y\p{f\p{x}, f\p{x'}} < \eta. \tag{$\dagger$}
$$

Putting it all together, if $d_X\p{x, x'} < \delta$, then by ($\dagger$), $d_Y\p{f\p{x}, f\p{x'}} < \eta$, so applying ($*$) with $\p{y, y'} = \p{f\p{x}, f\p{x'}}$, we get $d_Z\p{g\p{f\p{x}}, g\p{f\p{x'}}} < \varepsilon$.

</solution>
