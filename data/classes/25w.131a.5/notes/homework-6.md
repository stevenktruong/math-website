---
title: Homework 6
date: "2025-02-23"
tags:
    - continuity
    - series
publish: yes
---

# Homework 6

## Table of Contents

## Exercise 14.12 (not graded)

Let $\p{a_n}_{n \in \N}$ be a sequence such that $\liminf_{n\to\infty} \abs{a_n} = 0$. Prove there is a subsequence $\p{a_{n_k}}_{k \in \N}$ such that $\sum_{k=1}^\infty a_{n_k}$ converges.

<solution>

Since $\liminf_{n\to\infty} \abs{a_n} = 0$, there is a subsequence $\p{a_{n_k}}_{k \in \N}$ such that $\abs{a_{n_k}} \to 0$. We will show that $\p{a_{n_k}}$ has a _further_ subsequence which is summable.

Without loss of generality, by passing to a subsequence, we may assume that $\lim_{n\to\infty} \abs{a_n} = 0$. (What this means is that I replaced $\p{a_n}_n$ in the problem with the subsequence $\p{a_{n_k}}_k$ I found in the previous paragraph. Because we only care about subsequences in this problem, I'm allowed to do this.) We will find a subsequence $\p{a_{n_k}}_k$ such that

$$
\abs{a_{n_k}} \leq \frac{1}{k^2}.
$$

Note that the choice of $\frac{1}{k^2}$ is not _that_ important. As long as you pick something summable, then the following proof will still work. For example, I could have used $\frac{1}{2^k}$ or $\frac{1}{k^{\frac{3}{2}}}$ instead.

First, using $\varepsilon = 1$, there exists $a_{n_1}$ such that $\abs{a_{n_1}} \leq 1$. Now suppose we have chosen $a_{n_1}, \ldots, a_{n_k}$ such that $n_1 < n_2 < \cdots < n_k$ and $\abs{a_{n_k}} \leq \frac{1}{k^2}$. Then because $\abs{a_n} \to 0$, setting $\varepsilon = \frac{1}{\p{k + 1}^2}$, there exists $n_{k+1} > n_k$ so that $\abs{a_{n_{k+1}}} \leq \frac{1}{\p{k + 1}^2}$.

By induction, we have found a subsequence $\p{a_{n_k}}_k$ of $\p{a_n}_n$ such that $\abs{a_{n_k}} \leq \frac{1}{k^2}$. By comparison,

$$
0 \leq \sum_k \abs{a_{n_k}} \leq \sum_k \frac{1}{k^2} < \infty,
$$

so $\sum_k a_{n_k}$ is (absolutely convergent, hence) convergent.

</solution>

## Exercise 15.7

1. Prove if $\p{a_n}$ is a decreasing sequence of real numbers and if $\sum_n a_n$ converges, then $\lim_{n\to\infty} na_n = 0$. (_Hint_: Consider $\abs{a_{N+1} + a_{N+2} + \cdots + a_n}$ for suitable $N$.)
2. Use (a) to give another proof that $\sum_n \frac{1}{n}$ diverges.

<solution>

1. First, notice because $\sum_n a_n$ converges and $\p{a_n}$ is decreasing that $a_n \geq 0$. Otherwise, $\sum_n a_n \leq \sum_n a_1 = -\infty$. If $n > N$, then because $\p{a_n}$ is a decreasing sequence,

    $$
    \begin{gathered}
        \sum_{k=N+1}^n a_k
            \geq \sum_{k=N+1}^n a_n
            = \p{n - N} a_n \\
        \implies na_n
            \leq Na_n + \sum_{k=N+1}^n a_k
            \leq Na_n + \sum_{k=N+1}^\infty a_k. \quad\p{*}
    \end{gathered}
    $$

    From here, there are two ways you could complete the problem.

    **$\varepsilon$-$N$ proof**: Since $\sum_n a_n$ converges, its tails converge to $0$. More precisely, $\lim_{N\to\infty} \sum_{k=N+1}^\infty a_k = 0$. Let $\varepsilon > 0$. This means that there exists $N$ so that $\sum_{k=N+1}^\infty a_k < \frac{\varepsilon}{2}$. Fix this $N$ and notice that $\lim_{n\to\infty} Na_n = 0$, so there exists $N'$ such that $Na_n < \frac{\varepsilon}{2}$ for $n > N'$. Putting everything together, if $n > \max\set{N, N'}$, then

    $$
    na_n
        \leq Na_n + \sum_{k=N+1}^\infty a_k
        < \frac{\varepsilon}{2} + \frac{\varepsilon}{2}
        = \varepsilon.
    $$

    **With $\limsup$**: A slicker way to finish up the proof is as follows. We can't send $n \to \infty$ in ($*$) because we don't know if $na_n$ converges or not. But recall that $\limsup_{n\to\infty} na_n$ always exists, so $\p{*}$ implies

    $$
    \limsup_{n\to\infty} na_n
        \leq \limsup_{n\to\infty} Na_n + \limsup_{n\to\infty} \sum_{k=N+1}^\infty a_k
        = \sum_{k=N+1}^\infty a_k.
    $$

    But $\limsup_{n\to\infty} na_n$ does not depend on $N$, so it's actually constant as $N \to \infty$. Thus,

    $$
    \limsup_{n\to\infty} na_n
        \leq \lim_{N\to\infty} \sum_{k=N+1}^\infty a_k
        = 0.
    $$

    Since $na_n = \abs{na_n}$, this means $\limsup_{n\to\infty} \abs{na_n} = 0$, which implies that $\p{na_n}_n$ itself converges with $\lim_{n\to\infty} na_n = 0$ (see Exercise 12.2 from the book, which we also did in discussion).

2. First, $\p{\frac{1}{n}}_n$ is decreasing since

    $$
    \frac{1}{n + 1} - \frac{1}{n}
        = -\frac{1}{n\p{n+1}}
        \leq 0.
    $$

    But $\lim_{n\to\infty} n \cdot \frac{1}{n} = 1 \neq 0$, so by (the contrapositive of) (a), $\sum_n \frac{1}{n}$ diverges.

</solution>

## Exercise 17.4

Prove the function $\sqrt{x}$ is continuous on its domain $\pco{0, \infty}$. _Hint_: Apply Example 5 in $\S8$.

<solution>

### Solution 1 (by using sequences)

Let $f\p{x} = \sqrt{x}$. Let $x_0 \in \pco{0, \infty}$ and let $\p{x_n}_n$ be a sequence in $\pco{0, \infty}$ such that $x_n \to x_0$. By Example 5,

$$
\lim_{n\to\infty} f\p{x_n}
    = \lim_{n\to\infty} \sqrt{x_n}
    = \sqrt{x_0}
    = f\p{x_0},
$$

so $\sqrt{x}$ is continuous at $x_0$.

### Solution 2 (by $\varepsilon$-$\delta$)

This proof is almost identical to the proof of Example 5, so I'll skip some of the details.

Let $\varepsilon > 0$. If $x_0 = 0$, then

$$
\abs{x} < \varepsilon^2
\implies \abs{\sqrt{x} - \sqrt{x_0}}
    = \sqrt{x}
    < \varepsilon.
$$

Now suppose $x_0 \neq 0$. If $\abs{x - x_0} < \varepsilon \sqrt{x_0}$, then

$$
\abs{\sqrt{x} - \sqrt{x_0}}
    = \frac{\abs{x - x_0}}{\sqrt{x} + \sqrt{x_0}}
    \leq \frac{\abs{x - x_0}}{\sqrt{x_0}}
    < \varepsilon.
$$

</solution>
