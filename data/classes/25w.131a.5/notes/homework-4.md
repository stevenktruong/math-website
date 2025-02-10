---
title: Homework 4
date: "2025-02-09"
tags:
    - limits
publish: yes
---

# Homework 4

## Table of Contents

## Exercise 9.12(a)

Assume $s_n \neq 0$ and that the limit $L = \lim_{n\to\infty} \abs{\frac{s_{n+1}}{s_n}}$ exists. Show that if $L < 1$, then $\lim_{n\to\infty} s_n = 0$. (_Hint_: Select $a$ so that $L < a < 1$ and optain $N$ so that $\abs{s_{n+1}} < a\abs{s_n}$ for $n \geq N$. Then show $\abs{s_n} < a^{n-N} \abs{s_N}$ for $n > N$.)

<solution>

Let $a = \frac{L + 1}{2} < 1$. Then because $\varepsilon = a - L > 0$, there exists $N$ such that for all $n \geq N$,

$$
\abs{\abs{\frac{s_{n+1}}{s_n}} - L} < a - L
\implies \abs{s_{n+1}} < a\abs{s_n}. \tag{$*$}
$$

(Scratchwork: To see where we get the inductive hypothesis, you can just write out what happens when iterating the inequality. For example, if $n \geq N$, then $n + 1 \geq N$ as well, so

$$
\abs{s_{n+2}} < a\abs{s_{n+1}} < a^2 \abs{s_n}.
$$

The inductive hypothesis should be clear from here.) We will show that for any $n \geq N$, we have

$$
\abs{s_{n+k}} < a^k \abs{s_n}
\quad\text{for all}\quad k \geq 1. \tag{$\dagger$}
$$

We proceed by induction on $k$.

**Base case**: $\p{k = 1}$ This is just ($*$) above.

**Inductive step**: Assume $\abs{s_{n+k}} < a^k \abs{s_n}$. Then applying ($*$) and the inductive hypothesis gives

$$
\begin{aligned}
    \abs{s_{n+k+1}}
        &< a\abs{s_{n+k}}
            && \p{\text{$\p{*}$ applied to $n + k \geq N$}} \\
        &< a \cdot a^k \abs{s_n}
            && \p{\text{inductive hypothesis}} \\
        &= a^{k+1} \abs{s_n}.
\end{aligned}
$$

In particular, ($\dagger$) implies (by replacing $n$ with $N$ and $k$ with $n - N$)

$$
\abs{s_n} < a^{n-N} \abs{s_N}
\quad\text{for all}\quad n > N.
$$

Note that we need $n > N$ instead of just $n \geq N$ since we need $k \geq 1$ to apply ($\dagger$). Finally, since $\abs{a} < 1$, we can Theorem 9.7(b), so by the squeeze lemma, $\abs{s_n}$ converges and

$$
\lim_{n\to\infty} \abs{s_n} \leq \lim_{n\to\infty} a^{n-N} \abs{s_N} = 0.
$$

Here, we used that $N$, and hence $s_N$, are constants. This implies (by a previous homework problem) that $\lim_{n\to\infty} s_n = 0$ as well.

</solution>

## Exercise 10.6

1. Let $\p{s_n}$ be a sequence such that

    $$
    \abs{s_{n+1} - s_n} < 2^{-n}
    \quad\text{for all}\quad n \in \N.
    $$

    Prove $\p{s_n}$ is a Cauchy sequence and hence a convergent sequence.

2. Is the result in (a) true if we only assume $\abs{s_{n+1} - s_n} < \frac{1}{n}$ for all $n \in \N$?

<solution>

1. By the triangle inequality (and technically induction) and the assumption on $\p{s_n}$, we have for $k \geq 0$

    $$
    \begin{aligned}
        \abs{s_{n+k} - s_n}
             = \abs{\sum_{i=n}^{n+k-1} \p{s_{i+1} - s_i}}
            &\leq \sum_{i=n}^{n+k-1} \abs{s_{i+1} - s_i} \\
            &< \sum_{i=n}^{n+k-1} 2^{-i} \\
            &< \sum_{i=n}^\infty 2^{-i} \\
            &= 2^{-n+1}. \tag{$*$}
    \end{aligned}
    $$

    Let $\varepsilon > 0$. Since $2^{-n+1} \to 0$ (by Theorem 9.7(c) with $a = \frac{1}{2}$), there exists $N$ such that if $n \geq N$, then $2^{-n+1} < \varepsilon$. Let $n, m \geq N$. Without loss of generality, we may assume $m \geq n$; in the case $m < n$, we simply swap $m$ and $n$ in the following. By ($*$),

    $$
    \abs{s_m - s_n}
        = \abs{s_{n+\p{m-n}} - s_n}
        < 2^{-n+1}
        < \varepsilon.
    $$

2. No. For example, if $s_n = \sum_{i=1}^n \frac{1}{i}$, then

    $$
    s_{n+1} - s_n = \frac{1}{n+1} < \frac{1}{n},
    $$

    but $\p{s_n}$ diverges (it's the harmonic series).

### Common Mistakes

The only mistake I saw often was in part (2). Basically, if you write something like this:

> No, because by the same argument above, we have
>
> $$
> \abs{s_{n+k} - s_n} < \sum_{i=n}^{n+k-1} \frac{1}{i},
> $$
>
> and the right-hand side diverges, so the result in (1) does not hold.

While nothing you wrote is incorrect, this argument just doesn't answer the question. All this shows is that our _proof of (1) no longer works_, but doesn't show that the result is false. For instance, what if there's a better proof that works in both cases that we don't know about?

To show that there's no proof possible, you just need to give a counter-example.

</solution>

## Exercise 10.7

Let $S$ be a bounded nonempty subset of $\R$ such that $\sup S$ is not in $S$. Prove there is a sequence $\p{s_n}$ of points in $S$ such that $\lim_{n\to\infty} s_n = \sup S$.

<solution>

Let $n \in \N$. Then because $\sup S$ is the _least_ upper bound of $S$, $\sup S - \frac{1}{n}$ cannot be an upper bound for $S$. Thus, there exists $s_n \in S$ such that

$$
\sup S - \frac{1}{n} \leq s_n
\implies \abs{s_n - \sup S} \leq \frac{1}{n}.
$$

(Note that I used $s_n \leq \sup S$ to get the inequality with an absolute value.) Thus, (by the [axiom of countable choice](https://en.wikipedia.org/wiki/Axiom_of_countable_choice)) we get a sequence $\p{s_n}$ of elements in $S$ such that $\abs{s_n - \sup S} \leq \frac{1}{n}$. By the squeeze theorem, we immediately get $s_n \to \sup S$.

</solution>
