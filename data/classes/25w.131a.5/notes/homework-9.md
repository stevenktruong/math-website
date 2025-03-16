---
title: Homework 9
date: "2025-03-15"
tags:
    - mean value theorem
    - integration
publish: yes
---

# Homework 9

## Table of Contents

## Exercise 29.4

Let $f$ and $g$ be differentiable functions on an open interval $I$. Suppose $a, b$ in $I$ satisfy $a < b$ and $f\p{a} = f\p{b} = 0$. Show $f'\p{X} = f\p{x}g'\p{x} = 0$ for some $x \in \p{a, b}$. _Hint_: Consider $h\p{X} = f\p{X} e^{g\p{x}}$.

<solution>

Since $f$, $g$, and $e^x$ are differentiable on $I$, the product rule and chain rule imply that $h$ is also differentiable on $I$ with

$$
h'\p{x} = f'\p{x}e^{g\p{x}} + f\p{x}g'\p{x} e^{g\p{x}}.
$$

Moreover, since $f\p{a} = f\p{b} = 0$, we immediately see that $h\p{a} = h\p{b} = 0$ as well. Thus, by Rolle's theorem, there exists $x \in \p{a, b}$ such that

$$
    f'\p{x}e^{g\p{x}} + f\p{x}g'\p{x} e^{g\p{x}} = 0
    \implies f'\p{x} + f\p{x}g'\p{x},
$$

where in the last step, we used that $e^t \neq 0$ for all $t \in \R$ to divide through by $e^{g\p{x}}$.

</solution>

## Exercise 32.6

Let $f$ be a bounded function on $\br{a, b}$. Suppose there exist sequences $\p{U_n}$ and $\p{L_n}$ upper and lower Darboux sums for $f$ such that $\lim_{n\to\infty} \p{U_n - L_n} = 0$. Show $f$ is integrable and $\int_a^b f = \lim_{n\to\infty} U_n = \lim_{n\to\infty} L_n$.

<solution>

Since $f$ is bounded, $U\p{f}$ and $L\p{f}$ are well-defined. Moreover, Theorem 32.4 and the definitions of $U\p{f}$ and $L\p{f}$ imply

$$
0 \leq U\p{f} - L\p{f} \leq U_n - L_n \xrightarrow{n\to\infty} 0.
$$

Thus, $U\p{f} = L\p{f}$, so $f$ is integrable. Next,

$$
L_n \leq L\p{f} = \int_a^b f = U\p{f} \leq U_n
\implies 0 \leq \int_a^b f - L_n \leq U_n - L_n.
$$

By the squeeze theorem, $\lim_{n\to\infty} \p{\int_a^b f - L_n} = 0$, which also implies that $\lim_{n\to\infty} L_n = \int_a^b f$ (since $\int_a^b f$ is a constant!). Finally,

$$
U_n = \p{U_n - L_n} + L_n \xrightarrow{n\to\infty} \int_a^b f
$$

as well (by limit laws).

### Common Mistakes

The most common big mistake I saw was something like this:

> Since $\lim_{n\to\infty} \p{U_n - L_n} = 0$, we have $\lim_{n\to\infty} U_n = \lim_{n\to\infty} L_n$. Thus, ...

Remember that limits are additive _when both limits exist_--take another look at the assumptions of Theorem 9.3.

In the same vein, many students who made this mistake also made the following one:

> We must have $\lim_{n\to\infty} U_n = U\p{f}$ and $\lim_{n\to\infty} L_n = L\p{f}$, so ...

Even if you did know that $\p{U_n}$ and $\p{L_n}$ both converge to the same number, more work needs to be done to show that $\lim_{n\to\infty} U_n = U\p{f}$ and $\lim_{n\to\infty} L_n = L\p{f}$. To prove this, you would need to use Theorem 32.4 and the definitions of $U\p{f}$ and $L\p{f}$ (that they're the supremum and infimum of some set, respectively).

Lastly, the most common small mistake was this:

> Since $\lim_{n\to\infty} \p{U_n - L_n} = 0$, given any $\varepsilon > 0$ we have a partition $P_n$ such that
>
> $$
> U\p{f, P_n} - L\p{f, P_n} = U_n - L_n < \varepsilon
> $$
>
> for sufficiently large $n$. Thus, $f$ is integrable by Theorem 32.5.

The issue here is that you're not given that $U_n$ and $L_n$ correspond to the same partition, so you can't invoke Theorem 32.5 immediately. However, there is an easy fix: you do know that $U_n = U\p{f, P_n}$ and $L_n = L\p{f, Q_n}$ for some partitions $P_n, Q_n$, so by Lemma 32.2 applied to the common refinement $P_n \cup Q_n \subseteq P_n, Q_n$,

$$
U\p{f, P_n \cup Q_n} - L\p{f, P_n \cup Q_n}
    \leq U\p{f, P_n} - L\p{f, Q_n}.
$$

</solution>
