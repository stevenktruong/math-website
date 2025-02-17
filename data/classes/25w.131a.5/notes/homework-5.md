---
title: Homework 5
date: "2025-02-15"
tags:
    - subsequences
    - limits
publish: yes
---

# Homework 5

## Table of Contents

## Exercise 10.2

Prove that bounded, decreasing sequences converge.

<solution>

Let $\p{s_n}$ be a bounded, decreasing sequence. Then the set $\set{s_n \mid n \in \N}$ is non-empty and bounded below, so $s = \inf S$ exists. We will show that $s_n \to s$.

Let $\varepsilon > 0$. Then $s + \varepsilon$ is not a lower bound for $\p{s_n}$, so there exists $N \in \N$ such that $s_N < s + \varepsilon$. Since $\p{s_n}$ is decreasing, we get

$$
s_n \leq s_N < s + \varepsilon
\quad\text{for all } n \geq N.
$$

Moreover, $s_n - s \geq 0$ by definition of $s$, so for all $n \geq N$,

$$
\abs{s_n - s}
    = s_n - s
    < \varepsilon.
$$

</solution>

## Exercise 11.7

Let $\p{r_n}$ be an enumeration of the set $\Q$ of all rational numbers. Show there exists a subsequence $\p{r_{n_k}}$ such that $\lim_{k\to\infty} r_{n_k} = +\infty$.

<solution>

I will give two solutions--one that just uses a theorem, and one that's more explicit in the construction. Either is fine, of course, but I suggest you understand the explicit construction.

### Solution 1 (by Theorem 11.2)

$\Q$ is unbounded (e.g., $\N \subseteq \Q$), so because $\p{r_n}$ is an enumeration of $\Q$, it follows that $\p{r_n}$ itself is unbounded. Thus, by THeorem 11.2(ii), there exists a subsequence which diverges to $+\infty$.

### Solution 2 (by construction)

Since $\p{r_n}$ is unbounded, $1$ is not an upper bound for $\p{r_n}$. Thus, there exists $n_1 \in \N$ such that $r_{n_1} \geq 1$.

We proceed by induction. Suppose we have chosen $n_1 < n_2 < \cdots < n_k$ such that $r_{n_k} \geq k$. Notice that

$$
S_k \coloneqq \Q \setminus \set{r_1, r_2, \ldots, r_{n_k}}
$$

is still an unbounded set since we only remove finitely many elements. Thus, in particular, $k + 1$ is not an upper bound for $S_k$, so there exists $r_{n_{k+1}} \in S_k$ such that $r_{n_{k+1}} \geq k + 1$. By definition of $S_k$, we immediately have $n_{k+1} > n_k$ as well.

Thus, we have shown that there exists a subsequence $\p{r_{n_k}}$ such that $r_{n_k} \geq k$, which implies $r_{n_k} \to +\infty$.

</solution>

## Exercise 11.9

1. Show the closed interval $\br{a, b}$ is a closed set.
2. Is there a sequence $\p{s_n}$ such that $\p{0, 1}$ is its set of subsequential limits?

<solution>

1. Let $\p{s_n}$ be a convergent sequence of elements in $\br{a, b}$ and let $s = \lim_{n\to\infty} s_n$. By definition, $a \leq s_n \leq b$, so by the lemma from discussion, $a \leq s \leq b$, which means $s \in \br{a, b}$.

2. No. Suppose there were such a sequence $\p{s_n}$. Recall that

    $$
    \limsup_{n\to\infty} s_n = \sup{\p{0, 1}} = 1.
    $$

    But we also showed that $\limsup_{n\to\infty} s_n$ itself is a subsequential limit, which means $1 \in \p{0, 1}$, which is impossible.

</solution>
