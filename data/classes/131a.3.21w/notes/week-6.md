---
title: Week 6 Discussion Notes
date: "2021-02-09"
tags:
    - Cauchy sequences
    - monotone sequences
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Monotone Sequences

<definition>

Let $\set{s_n}_{n \geq m}$ be a sequence.

1. $\set{s_n}_{n \geq m}$ is **increasing** if $s_n \leq s_{n+1}$ for all $n \geq m$.
2. $\set{s_n}_{n \geq m}$ is **decreasing** if $s_{n+1} \leq s_n$ for all $n \geq m$.
3. $\set{s_n}_{n \geq m}$ is **monotone** if it's increasing or decreasing.

</definition>

A general trend in math is that [monotone](https://en.wikipedia.org/wiki/Monotonic_function) [things](https://en.wikipedia.org/wiki/Monotone_convergence_theorem) tend to have nice properties, which is why we're interested in them. With sequences, we have the following theorem:

<theorem id="monotone-convergence">

All bounded monotone sequences converge.

</theorem>

As you may guess, a bounded increasing sequence converges to its supremum, and a bounded decreasing sequence converges to its infimum. This is a very useful tool when working with recursive sequences.

<example> (10.9)

Let $s_1 = 1$ and $s_{n+1} = \p{\frac{n}{n+1}} s_n^2$ for $n \geq 1$.

1. Prove that $\displaystyle \lim_{n\to\infty} s_n$ exists.
2. Prove $\displaystyle  \lim_{n\to\infty} s_n = 0$.

</example>

<solution>

You may be tempted to do the following: (which is wrong!)

> If we take limits on both sides, then we get the equation $s = s^2$, so $s = 0$ or $s = 1$. Since $s_n < 1$ for $n \geq 1$, this means $s \neq 1$, so $s = 0$.

The problem is the very first step: this fake proof is trying to apply the limit laws **without knowing if the limits exist or not**. This is why it's important to do (1) before doing (2).

1. Generally, when you're given a recursive sequence like this, you want to prove that it's bounded and monotone (usual by induction, though it's not always necessary). We want to figure out whether the sequence is increasing or decreasing, so a good way to start is to write out a few terms and take a guess:

    $$
    s_1 = 1,\ s_2 = \frac{2}{3},\ s_3 = \frac{1}{3}.
    $$

    Based on this, we're going to guess that $s_n$ is decreasing. Since anything square is non-negative, we automatically get the lower bound $s_n \geq 0$. Next, we need to try to prove that the sequence is decreasing, i.e., we want to show that $s_{n+1} \leq s_n$. Generally, however, it's usually _much_ easier to show that $s_{n+1} - s_n \leq 0$, so let's see what happens:

    $$
    \begin{aligned}
        s_{n+1} - s_n
            &= \frac{n}{n + 1} s_n^2 - s_n \\
            &\leq \frac{n + 1}{n + 1} s_n^2 - s_n \\
            &= s_n\p{s_n - 1}.
    \end{aligned}
    $$

    If we can show that $s_n - 1 \leq 0$, then we will have shown that the sequence decreases, so let's try to do that by induction:

    **Base case:** ($n = 1$)

    $s_1 = 1 \leq 1$, so the base case holds.

    **Inductive step:**

    Assume that $s_n \leq 1$. We need to show that $s_{n+1} \leq 1$ also:

    $$
    s_{n+1}
        = \frac{n}{n + 1} s_n^2
        \leq \frac{n + 1}{n + 1} \cdot 1^2
        = 1.
    $$

    Thus, the inductive step holds, so $s_n \leq 1$ for all $n \geq 1$. This also proves that $s_{n+1} \leq s_n$ for all $n \geq 1$, which means that $\set{s_n}_n$ is a decreasing sequence bounded below, so it converges.

2. Now that we know that the sequence converges, _now_ we can take limits on both sides. Let $s = \lim_{n\to\infty} s_n$, so by our limit laws,

    $$
    \begin{gathered}
        \lim_{n\to\infty} s_{n+1}
            = \lim_{n\to\infty} \frac{n}{n + 1} s_n^2
            = \p{\lim_{n\to\infty} \frac{n}{n + 1}} \p{\lim_{n\to\infty} s_n^2} \\
        \implies
            s = 1 \cdot s^2 = s^2.
    \end{gathered}
    $$

    Thus, $s\p{s - 1} = 0$, which means $s = 0$ or $s = 1$. We saw that $s_n$ is decreasing, so $s_n \leq s_2 = \frac{2}{3}$ for all $n \geq 2$. This means that $s < 1$, so $s = 0$.

</solution>

## Constructing Sequences

This is an important technique and is best illustrated through an example.

<example>

Let $a \in \R$. Then there exists a sequence of rational numbers $\set{q_n}_n$ which decrease to $a$.

</example>

<solution>

The main idea is to use density of rationals over and over again, but in a careful way to get the properties we want. There are two things we want from our sequence:

1. It gets closer and closer to $a$. For concreteness, we want $a \leq q_n \leq a + \frac{1}{n}$ for each $n \geq 1$, but you can replace $\frac{1}{n}$ with any other positive sequence that converges to $0$ (another good choice is $\frac{1}{2^n}$).
2. It is a decreasing sequence.

To construct a sequence, we generally want to do it by induction and making sure that at each step, we pick a rational number that does both of these.

**Base case:** ($n = 1$)

Since $\Q$ is dense in $\R$, there exists a rational $q_1 \in \p{a, a + 1}$. To illustrate the inductive step, I will also do the case $n = 2$ by hand:

To accomplish (1), we want $q_2 \in \p{a, a + \frac{1}{2}}$. However, we need to also guarantee that $q_2 \leq q_1$, so we also need to require that $q_2 \in \p{a, q_1}$. Let $\epsilon = \min\,\set{\frac{1}{2}, q_1 - a}$, so $\p{a, a + \epsilon}$ is a non-empty interval. Thus, because $\Q$ is dense, there exists a rational $q_2 \in \p{a, a + \epsilon}$, and this satisfies both (1) and (2).

**Inductive step:**

Now suppose we have chosen $q_1, \ldots, q_n$ such that $q_k \in \p{a, a + \frac{1}{k}}$ and $a \leq q_n \leq q_{n-1} \leq \cdots \leq q_1$. Let $\epsilon = \min\,\set{\frac{1}{n+1}, q_n - a}$, so $\p{a, a + \epsilon}$ is a non-empty interval. By density of $\Q$, there exists a rational $q_{n+1} \in \p{a, a + \epsilon}$, and by construction,

$$
a \leq q_{n+1} \leq a + \epsilon \leq a + \frac{1}{n+1}
\quad\text{and}\quad
a \leq q_{n+1} \leq a + \p{q_n - a} = q_n.
$$

Thus, the inductive step holds. By induction, we obtain a decreasing sequence $\set{q_n}_n$ such that $q_n \in \p{a, a + \frac{1}{n}}$ for each $n \geq 1$, i.e., $a \leq q_n \leq a + \frac{1}{n}$. By the [squeeze theorem](../week-5#squeeze-theorem), $\lim_{n\to\infty} q_n = a$, which completes the proof.

</solution>

## Cauchy Sequences

<definition>

A sequence $\set{s_n}_n$ is **Cauchy** if for all $\epsilon > 0$, there exists $N \in \R$ such that $\abs{s_n - s_k} < \epsilon$ whenever $n > N$ and $k > N$.

</definition>

This definition looks a lot like the [definition of a limit](../week-4#sequence), but there is an important difference: there is no limit specified. Instead, we just put another term of the sequence in the absolute values.

You're probably thinking "what's the point?" which is a valid question. The point is the following theorem:

<theorem>

A sequence is Cauchy if and only if it is convergent.

</theorem>

The "if and only if" tells you that the definition of Cauchy sequences and the definition of a convergent sequence **describe the same thing**. The key difference, though, is that in the definition of a Cauchy sequence, **we don't have to know what the limit is**. Generally, this is very useful when you do more abstract math since you have less information about the sequences you're working with.

<example>

Let's say we want to show that an infinite sum converges: $\displaystyle \sum_{n=1}^\infty s_n$, which is defined to be $\displaystyle \lim_{N\to\infty} \sum_{n=1}^N s_n$. We're already cheating here, since we're defining the infinite sum to be the limit of something that we don't even know exists or not.

We can't really use the definition of a limit since we don't know if the limit even exists, but if we use the Cauchy definition of a convergent sequence, then we're in good shape: we just need to show that the sequence $\set{\displaystyle\sum_{n=1}^N s_n}_N$ is Cauchy, and this is fine since every term in the sequence is a _finite_ sum, so we're dealing with things that we _know_ exist.

</example>

<definition>

Let $\set{s_n}_n$ be a sequence.

1. The **limit superior** of $\set{s_n}_n$ is

    $$
    \limsup_{n\to\infty} s_n = \lim_{N\to\infty} \sup\,\set{s_n \mid n > N}.
    $$

2. The **limit inferior** of $\set{s_n}_n$ is

    $$
    \limsup_{n\to\infty} s_n = \lim_{N\to\infty} \inf\,\set{s_n \mid n > N}.
    $$

</definition>

<remark>

Let $u_N = \sup\,\set{s_n \mid n > N}$. Notice that $\set{s_n \mid n > N + 1} \subseteq \set{s_n \mid n > N}$, so by the properties of the supremum,

$$
\sup\,\set{s_n \mid n > N + 1} \leq \sup\,\set{s_n \mid n > N}
\implies u_{N+1} \leq u_N,
$$

i.e., $\set{u_N}_N$ is a decreasing sequence. This tells you that $\limsup_{n\to\infty} s_n$, which is equal to $\lim_{N\to\infty} u_N$, always makes sense. If $\set{u_N}_N$ is bounded, then it converges by the [earlier theorem](#monotone-convergence). Otherwise, it diverges to $-\infty$. In the first case, this tells you that

$$
\limsup_{n\to\infty} s_n
    = \inf_N \sup\,\set{s_n \mid n > N}.
$$

Similarly,

$$
\liminf_{n\to\infty} s_n
    = \sup_N \inf\,\set{s_n \mid n > N}.
$$

</remark>

Intuitively, $\limsup_{n\to\infty} s_n$ is the "biggest thing $s_n$ can converge to" and $\liminf_{n\to\infty} s_n$ is the "smallest thing $s_n$ can converge to". For example:

<example>

Let $s_n = \p{-1}^n$. Look at the following "subsequences":

$$
\begin{array}{l|rrrrrrr}
    s_n & -1 & 1 & -1 & 1 & -1 & 1 & \cdots \\\hline
        & -1 &   & -1 &   & -1 &   & \cdots \\
        &    & 1 &    & 1 &    & 1 & \cdots
\end{array}
$$

If we only look at the odd terms (second row), then we get a "subsequence" which converges to $-1$. Similarly, if we look at the even terms (third row), we get one that converges to $1$. This tells us that

$$
\limsup_{n\to\infty} s_n = 1
\quad\text{and}\quad
\liminf_{n\to\infty} s_n = -1.
$$

</example>

<example>

Let $s_n = \sin\p{\frac{n\pi}{3}}$. This oscillates as follows:

$$
\frac{\sqrt{3}}{2},
\ \frac{\sqrt{3}}{2},
\ 0,
\ -\frac{\sqrt{3}}{2},
\ -\frac{\sqrt{3}}{2},
\ 0,
\ \frac{\sqrt{3}}{2},
\ \frac{\sqrt{3}}{2},
\ \cdots
$$

As you can imagine,

$$
\limsup_{n\to\infty} s_n = \frac{\sqrt{3}}{2}
\quad\text{and}\quad
\liminf_{n\to\infty} s_n = -\frac{\sqrt{3}}{2}.
$$

</example>
