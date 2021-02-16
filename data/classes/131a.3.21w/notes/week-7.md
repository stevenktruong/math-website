---
title: Week 7 Discussion Notes
date: "2021-02-16"
tags:
    - midterm
    - subsequences
publish: yes
---

# Week 7 Discussion Notes

## Table of Contents

## Midterm

I'm just gonna do two problems that I thought were relatively interesting.

### Problem 2

Use induction to prove that $2^n \leq \p{n+1}!$ for all $n \geq 0$.

<solution>

**Base case:** ($n = 0$)

When $n = 0$, we get $2^0 = 1 = 1!$, so the base case holds.

**Inductive step:**

Suppose $2^n \leq \p{n+1}!$. We want to show that $2^{n+1} \leq \p{n+2}!$ also. First, notice that since $n \geq 0$, we get $n + 2 \geq 2$. Thus,

$$
2^{n+1}
    = 2 \cdot 2^n
    \leq \p{n+2} \cdot \p{n+1}!
    = \p{n+2}!.
$$

By induction, the inequality holds for all $n \geq 0$.

</solution>

### Problem 4

Let $\set{s_n}_n$ be a recursive sequence such that $s_0 = \frac{1}{2}$ and $s_{n+1} = s_n^3$ for all $n \geq 0$.

1. Prove that $s_n \in \br{0, 1}$ for all $n \geq 0$.
2. Prove that $s_n$ is decreasing.
3. Prove that $s_n$ is convergent and $\displaystyle\lim_{n\to\infty} s_n = 0$.

<solution>

1. We'll do this by induction.

    **Base case:** ($n = 0$)

    By definition, $s_0 = \frac{1}{2} \in \br{0, 1}$ already, so the base case holds.

    **Inductive step:**

    Suppose that $s_n \in \br{0, 1}$, or equivalently, that $0 \leq s_n \leq 1$. Then by cubing everything, we get

    $$
    0^3 \leq s_n^3 \leq 1^3
    \implies 0 \leq s_{n+1} \leq 1,
    $$

    since $s_{n+1} = s_n^3$ by definition. Thus, by induction, $s_n \in \br{0, 1}$ for all $n \geq 0$.

2. First, notice that

    $$
    s_n - s_{n+1}
        = s_n - s_n^3
        = s_n\p{1 - s_n^2}.
    $$

    By (1), we know that $s_n \geq 0$, and because $s_n \in \br{0, 1}$, we also know that $s_n^2 \leq 1$. Thus, $1 - s_n^2 \geq 0$, so $s_n - s_{n+1} \geq 0$ also, i.e., $s_n \geq s_{n+1}$, so $s_n$ is decreasing.

3. By (1) and (2), we see that $s_n$ is a bounded monotone sequence, so it converges to some $s$. Thus, by the limit laws, we can take limits on both sides of the recursive relation:

    $$
    s_{n+1} = s_n^3
    \implies s = s^3
    \implies s\p{1 - s^2} = 0.
    $$

    So, there are three possibilities: $s \in \set{-1, 0, 1}$. Since $s_n \geq 0$ for all $n \geq 0$, we get $s \geq 0$, so $s \neq -1$. Because $s_n$ is decreasing, we also know that $s_n \leq s_0 = \frac{1}{2}$, so $s \leq \frac{1}{2}$ also. Thus, $s = 0$.

</solution>

## Subsequences

<definition>

Let $\set{s_n}_{n \geq m}$ be a sequence. We say another sequence $\set{t_k}_{k \geq 1}$ is a **subsequence** of $\set{s_n}_{n \geq m}$ if there exist integers

$$
m \leq n_1 < n_2 < \cdots
$$

such that $t_k = s_{n_k}$.

</definition>

<example>

If $s_n = \p{-1}^n$, then $s_{2k} = 1$ and $s_{2k+1} = -1$.

</example>

Subsequences are similar to subsets, but with one important distinction: you have to respect the ordering of the original sequence. For example, if $s_n = n$, then

$$
1, 3, 2, 4, 5, \ldots
$$

is **not** a subsequence of $\set{s_n}_n$.

<theorem> Bolzano-Weierstrass

Every bounded sequence has a convergent subsequence.

</theorem>

This is a very important [idea](https://en.wikipedia.org/wiki/Compact_space) in analysis, but it's won't be particularly useful for us while we're looking at regular sequences.

<theorem>

A sequence $\set{s_n}_n$ converges if and only if every subsequence of $\set{s_n}_n$ converges to the same limit.

</theorem>

This theorem is useful for us because it gives us another way to prove that sequence diverges. Instead of using the $\epsilon$ definition of a limit, we can just find two subsequences which converge to different numbers.

<example>

Let $s_n = \p{-1}^n\p{1 + \frac{1}{n}}$. Notice that

$$
s_{2k} = 1 + \frac{1}{2k} \xrightarrow{k\to\infty} 1
\quad\text{and}\quad
s_{2k+1} = -\p{1 + \frac{1}{2k+1}} \xrightarrow{k\to\infty} -1,
$$

so $\set{s_n}_n$ diverges.

</example>

<example>

Let $s_n = \abs{\cos{\frac{n\pi}{3}}}$. Then

$$
s_{3k} = 1
\quad\text{and}\quad
s_{3k+1} = \frac{1}{2},
$$

so $\set{s_n}_n$ must diverge.

</example>

<example> (9.9)

This example will be helpful for one of the homework problems this week.

Suppose there exists $N_0$ such that $s_n \leq t_n$ for all $n > N_0$.

1. Prove that if $\displaystyle\lim_{n\to\infty} s_n = \infty$, then $\displaystyle\lim_{n\to\infty} t_n = \infty$.
2. Prove that if $\displaystyle\lim_{n\to\infty} s_n$ and $\displaystyle\lim_{n\to\infty} t_n$ exist, then $\displaystyle\lim_{n\to\infty} s_n \leq \displaystyle\lim_{n\to\infty} t_n$.

</example>

<solution>

1. Let $M > 0$. Since $\displaystyle\lim_{n\to\infty} s_n = \infty$, there exists $N_1 \in \R$ such that if $n > N_1$, then $s_n \geq M$. Thus, if $n > \max\,\set{N_0, N_1}$, we get

    $$
    M \leq s_n \leq t_n.
    $$

    Since $M$ was arbitrary, this proves that $\displaystyle\lim_{n\to\infty} t_n = \infty$ also.

2. In Week 4, I proved a [fact about non-negative sequences](../week-4#non-zero-sequences): if $\set{a_n}_n$ is a sequence such that $a_n \geq 0$ for all $n \geq 0$ and that $\displaystyle\lim_{n\to\infty} a_n$ exists, then $\displaystyle\lim_{n\to\infty} a_n \geq 0$.

    If we set $a_n = t_n - s_n$, then $a_n \geq 0$ (technically only for $n > N_0$, but this doesn't make a big difference since we're working with limits), then because all the limits in question exist, the proposition and the limit laws tell us

    $$
    \lim_{n\to\infty} t_n - \lim_{n\to\infty} s_n
        = \lim_{n\to\infty} \p{t_n - s_n}
        \geq 0
    \implies
    \lim_{n\to\infty} s_n \leq \lim_{n\to\infty} t_n.
    $$

    Alternatively, if we didn't have this theorem, we can also prove it using the $\epsilon$ definition directly. Let $s = \displaystyle\lim_{n\to\infty} s_n$ and $t = \displaystyle\lim_{n\to\infty} t_n$, and suppose for the sake of contradiction that $s > t$.

    The idea is this: eventually, $s_n$ should be very close to $s$, and $t_n$ should be very close to $t$. If they're close enough, then we should eventually end up with $s_n > t_n$, which contradicts our assumption that $s_n \leq t_n$ for $n > N_0$.

    Let $\epsilon = \frac{s - t}{2}$, i.e., half the distance between $s$ and $t$. Since $s = \displaystyle\lim_{n\to\infty} s_n$, there exists $N_1 \in \R$ such that if $n > N_1$, then

    $$
    \begin{aligned}
        \abs{s_n - s} < \epsilon
            &\implies s_n - s > - \epsilon \\
            &\implies s_n > s - \epsilon = s - \p{\frac{s - t}{2}} = \frac{s + t}{2}.
    \end{aligned}
    $$

    Similarly, there exists $N_2 \in \R$ such that if $n > N_2$, then

    $$
    \begin{aligned}
        \abs{t_n - t} < \epsilon
            &\implies t_n - t < \epsilon \\
            &\implies t_n < t + \epsilon = t + \frac{t - s}{2} = \frac{s + t}{2}.
        \end{aligned}
    $$

    Thus, if $n > \max\,\set{N_0, N_1, N_2}$, then

    $$
    t_n
        \underbrace{<}_{n > N_2} \frac{s + t}{2}
        \underbrace{<}_{n > N_1} s_n
        \underbrace{\leq}_{n > N_0} t_n
    $$

    which is a contradiction.

</solution>

<example> (basically 11.11)

Let $S$ be a bounded set. Prove that there is a decreasing sequence $\set{s_n}_n$ of points in $S$ such that $\displaystyle\lim_{n\to\infty} s_n = \inf{S}$.

</example>

</solution>

First, if $\inf{S} \in S$, then we can just set $s_n = \inf{S}$ for all $n \geq 1$. Thus, from now on, we will assume that $\inf{S} \notin S$.

Our strategy will be to construct a sequence that satisfies two properties:

1. $s_n \leq \inf{S} + \frac{1}{n}$.
2. $s_{n+1} \leq s_n$ for all $n \geq 0$.

As before, (1) is here to make sure $\set{s_n}_n$ actually converges to $\inf{S}$, and (2) is here to make sure the sequence is decreasing. We can do this by induction:

**Base case:** ($n = 1$)

Since $\inf{S}$ is the _greatest_ lower bound, this means that $\inf{S} + 1$ cannot be a lower bound. Thus, there exists $s_1 \in S$ such that $s \leq \inf{S} + 1$.

**Inductive step:**

Suppose we have $s_1, \ldots, s_n \in S$ such that $s_k \leq \inf{S} + \frac{1}{k}$ for all $1 \leq k \leq n$ and so that $s_1 \geq s_2 \geq \cdots \geq s_n$. We need to find $s_{n+1} \in S$ such that $s_{n+1} \leq \inf{S} + \frac{1}{n+1}$ and $s_{n+1} \leq s_n$.

As before, we know that $\inf{S} + \frac{1}{n+1}$ cannot be a lower bound for $S$. Similarly, because $\inf{S} \notin S$, we get $\inf{S} < s_n$, so $s_n$ is not a lower bound for $S$ either. Hence if we set $\epsilon = \min\,\set{\frac{1}{n+1}, s_n - \inf{S}}$, then $\epsilon > 0$, so $\inf{S} + \epsilon$ is not a lower bound for $S$. By definition, there exists $s_{n+1} \in S$ such that $s_{n+1} \leq \inf{S} + \epsilon$. Thus,

$$
\begin{aligned}
    \epsilon \leq \frac{1}{n+1} &\implies s_{n+1} \leq \inf{S} + \frac{1}{n+1} \\
    \epsilon \leq s_n - \inf{S} &\implies s_{n+1} \leq \inf{S} + \p{s_n - \inf{S}} = s_n.
\end{aligned}
$$

By induction, we have a decreasing sequence $\set{s_n}_n$ of elements in $S$ such that $s_n \leq \inf{S} + \frac{1}{n}$. Since $\inf{S}$ is a lower bound for $S$, we have

$$
\inf{S} \leq s_n \leq \inf{S} + \frac{1}{n}
$$

for all $n \geq 1$. By the [squeeze theorem](../week-6#squeeze-theorem), we get $\displaystyle\lim_{n\to\infty} s_n = \inf{S}$.

</solution>
