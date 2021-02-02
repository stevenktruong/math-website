---
title: Week 4 Discussion Notes
date: "2021-01-25"
tags:
    - supremums
    - sequences
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Supremums and Infimums

<definition>

Let $S \subseteq \R$ be a non-empty set. If there exists $x \in S$ such that $s \leq x$ for all $s \in S$, then we call $x$ the **maximum** of $S$ and we write $x = \max{S}$.

</definition>

<exercise>

Define $\min{S}$.

</exercise>

At first glance, $\max{S}$ and $\sup{S}$ look like the same thing. However, there's a key difference: $\max{S}$ has to be an element of $S$, but $\sup{S}$ doesn't have to be.

<example>

If $S = \pco{0, 1}$, then $S$ has no maximum, but $\sup{S} = 1$.

On the other hand, if $S = \br{0, 1}$, then $\max{S} = \sup{S} = 1$.

</example>

<example>

(4.8) Let $S$ and $T$ be non-empty subsets of $\R$ such that $s \leq t$ for all $s \in S$ and $t \in T$.

1. Observe that $S$ is bounded above and $T$ is bounded below.
2. Prove $\sup{S} \leq \inf{T}$.

</example>

<solution>

1. Any element of $T$ is an upper bound of $S$, and any element of $S$ is a lower bound of $T$.
2. If $t \in T$, then $t$ is an upper bound for $S$, so by definition, $\sup{S} \leq t$. This means that $\sup{S}$ is a lower bound for $T$, so $\sup{S} \leq \inf{T}$.

</solution>

## Density of $\Q$ in $\R$

<theorem>

For any $a, b \in R$ with $a < b$, there exists a rational $q \in \Q$ such that $q \in \p{a, b}$.

</theorem>

We know that $\Q$ has gaps in it, which is why we work with $\R$. However, the fact that $\Q$ is dense means that the gaps are very "tiny". In other words, no matter how far you zoom in, you'll always see infinitely many rational numbers.

<example>

(4.11) Consider $a, b \in \R$ where $a < b$. Show that there are infinitely many rationals between $a$ and $b$.

</example>

<solution>

(Hint) You can use induction with the following statement to prove this: "there are at least $n$ rationals in $\p{a, b}$" for all $n \in \N$. You could also do this by contradiction—either is fine.

</solution>

## Sequences

<definition>

A **sequence** is a function $\func{s}{\N}{\R}$, where we write $s_n = s\p{n}$ and $\set{s_n}_n = \set{s_n \mid n \in \N}$.

If there exists $L \in \R$ such that:

> For all $\epsilon > 0$, there exists $N \in \R$ such that $\abs{s_n - L} < \epsilon$ for all $N > N$,

we say that $s_n$ **converges to $L$** and we write $\displaystyle \lim_{n\to\infty} = L$. Otherwise, if no such $L$ exists, then we say that $s_n$ is **divergent**.

</definition>

Intuitively, the limit of a sequence is what it gets "really close to" as $n$ "gets really big". To make this more precise, we need to quantify two things:

-   "really close to" (this is $\epsilon$)
-   "gets really big" (this is $N$)

With this interpretation, you can read the definition like this:

> If $n$ is large enough, we can make $\abs{s_n - L}$ as small as we want.

The definition is (somewhat) intuitive, but using the definition to prove things is generally pretty tricky.

<example>

(Similar to 8.1(c)) Prove $\displaystyle \lim_{n\to\infty} \frac{4n+3}{7n-5} = \frac{4}{7}$.

</example>

<solution>

When proving limits, we're given an $\epsilon > 0$ (something out of your control), and we need to find $N$ (something you _can_ control). The general strategy is to work backwards: start with

$$
\abs{\frac{4n+3}{7n-5} - \frac{4}{7}}
    = \abs{\frac{21 + 20}{7\p{7n-5}}}
    = \frac{41}{7\p{7n-5}}
$$

when $n \geq 1$. In the end, we want to make this quantity smaller than $\epsilon$, so it's okay to look at bigger quantities. If we make the denominator smaller, then we get something bigger:

$$
\abs{\frac{41}{7\p{7n-5}}}
    \leq \frac{41}{7\p{7n - 5n}}
    = \frac{41}{14n}.
$$

If we can make $\frac{41}{14n} < \epsilon$, then we're done. We're in good shape because we can:

$$
\frac{41}{14n} < \epsilon
\iff n > \frac{41}{14\epsilon}.
$$

None of what I wrote above is a proof (though it almost looks like one); it's just scratch work that I used to figure out what $N$ needs to be. Given an $\epsilon > 0$, our candidate for $N$ is $\frac{41}{14\epsilon}$, and it's now time to verify that this works. The following is the beginning of the proof of the limit:

Let $\epsilon > 0$. If we set $N = \frac{41}{14\epsilon}$, then if $n > N$,

$$
\begin{aligned}
    \abs{s_n - L}
         = \abs{\frac{4n+3}{7n-5} - \frac{4}{7}}
         = \frac{41}{7\p{7n-5}}
        &\leq \frac{41}{14n} \\
        &< \frac{41}{14N} \\
        &= \frac{41}{14\p{41/14\epsilon}} \\
        &= \epsilon.
\end{aligned}
$$

$\epsilon$ was arbitrary, so what we wrote works for _any_ $\epsilon$, which completes the proof.

</solution>

<example>

(Similar to 8.1(d)) Prove $\displaystyle \lim_{n\to\infty} \frac{n+3}{n^2-3} = 0$.

</example>

<solution>

We're going to apply the same strategy and work backwards: if $n > 2$, then

$$
\abs{\frac{n + 3}{n^2 - 3}}
= \frac{n + 3}{n^2 - 3}
\leq \frac{n + 3}{n^2 - 9}
= \frac{n + 3}{\p{n + 3}\p{n - 3}}
= \frac{1}{n - 3}.
$$

Like before, if we can make $\frac{1}{n - 3} < \epsilon$, then that gives us our candidate for $N$:

$$
\frac{1}{n - 3} < \epsilon
\iff n > 3 + \frac{1}{\epsilon}.
$$

So $N = 3 + \frac{1}{\epsilon}$ should work. We just need to prove that this works:

Let $\epsilon > 0$. If $N = 3 + \frac{1}{\epsilon}$, then for $n > N$, we get

$$
\begin{aligned}
    \abs{s_n - L}
         = \abs{\frac{n + 3}{n^2 - 3}}
         = \frac{n + 3}{n^2 - 3}
        &\leq \frac{n + 3}{n^2 - 9} \\
        &= \frac{1}{n - 3} \\
        &< \frac{1}{N - 3} \\
        &= \frac{1}{3 + \frac{1}{\epsilon} - 3} \\
        &= \epsilon.
\end{aligned}
$$

</solution>

To summarize, this is the basic strategy for proving limits through the definition:

1. Work backwards and use inequalities figure out a candidate for $N$.
    - Generally, you want to make the numerator bigger (in absolute value) and/or the denominator smaller (in absolute value).
2. Write out the proof with your candidate of $N$.
    - If you set it up right, then your proof will just look like what you wrote in step 1, but in reverse.

The definition can also be used to prove some useful facts about limits.

<proposition>

Let $\set{s_n}_n$ be a sequence. Suppose $s_n > 0$ for all $n \geq 1$ and that $L = \lim_{n\to\infty} s_n$ exists. Then $L \geq 0$.

</proposition>

<proof>

Intuitively, it's obvious. However, proving it is a bit tricky since we need to use the definition of a limit. We'll do this by contradiction: assume for the sake of contradiction that $L < 0$. We then have the following picture:

<img src="{{ assetsFolder }}/images/limit-closure.png" width=400px>

The definition of a limit tells you that for any $\epsilon > 0$, eventually all the points in your sequence lie in the interval $\p{L - \epsilon, L + \epsilon}$. From the picture, you should be able to see why that's impossible: if $\epsilon$ is small enough, then that implies that the sequence is eventually negative, which is a contradiction. Now we need to write that down:

If $\epsilon$ is too large, then we won't get a contradiction. Thus, we need to be smart about how we pick it. Based on the picture, if we let $\epsilon$ be half the distance from $L$ to $0$, then we should be able to get a contradiction, i.e., let $\epsilon = \frac{\abs{L}}{2} = -\frac{L}{2} > 0$. By definition of the limit, there exists $N \in \R$ such that if $n > N$, then $\abs{s_n - L} < \epsilon$. But this means

$$
-\epsilon < s_n - L < \epsilon
\implies s_n < L + \epsilon = L - \frac{L}{2} = \frac{L}{2} < 0,
$$

which is impossible, so $L \geq 0$ to begin with.

</proof>

<remark>

Notice that even though $s_n$ is strictly positive for all $n$, its limit can still be equal to $0$. For example, $s_n = \frac{1}{n}$ has limit $0$ even though all of its terms are $0$.

</remark>
