---
title: Week 4 Discussion Notes
date: "2022-01-27"
tags:
    - compactness
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Homework Comments

### Giving Examples

When a problem asks you to give an example of something, you need to prove that your example works! For example, one of the problem asked you to find open sets $A_n \subseteq \R$ such that $\bigcap_{n=1}^\infty A_n$ is neither open nor closed. Many of you just wrote

$$
A_n = \p{0, 1 + \frac{1}{n}}
\implies \bigcap_{n=1}^\infty A_n = \poc{0, 1}
$$

and left it at that. I wanted to have seen proof that the intersection is what you said it was, like the following:

"$\supseteq$"

Note that $\poc{0, 1} \subseteq A_n$ for all $n \geq 1$, so by definition, $\poc{0, 1} \subseteq \bigcap_{n=1}^\infty A_n$.

"$\subseteq$"

Let $x \in \bigcap_{n=1}^\infty A_n$. By definition, this means that $0 < x < 1 + \frac{1}{n}$. Since all limits as $n\to\infty$ exist, we get

$$
0 < x \leq \lim_{n\to\infty} \p{1 + \frac{1}{n}} = 1
\iff x \in \poc{0, 1},
$$

so the two sets are equal.

### Limit Laws

I saw a very common error while grading the problem about equivalent metrics:

<example>

Let $c > 0$, and assume $\set{a_n}_n, \set{b_n}_n$ are sequences such that

$$
0 \leq ca_n \leq b_n
\quad\text{and}\quad
\lim_{n\to\infty} b_n = 0.
$$

The following argument is wrong:

> $$
> \begin{aligned}
>     \lim_{n\to\infty} ca_n = \lim_{n\to\infty} b_n = 0
>         &\quad \p{\text{squeeze theorem}} \\
>     \implies c \lim_{n\to\infty} a_n = 0
>         &\quad \p{\text{limit law}} \\
>     \implies \lim_{n\to\infty} a_n = 0.
> \end{aligned}
> $$

The very first mistake made is in the second implication, where a limit law was used. Remember that to use a limit law, **all related limits must exist.** For this problem, we don't know if $\lim_{n\to\infty} a_n$ exists, so you can't apply any limit laws here.

It's easy to fix this argument, though. We just have to do things in a different order: divide by $c$ _first_ to get

$$
0 \leq a_n \leq \frac{b_n}{c}.
$$

Then the squeeze theorem tells us two things: $\lim_{n\to\infty} a_n$ exists and that

$$
\begin{aligned}
    \lim_{n\to\infty} a_n
        &= \lim_{n\to\infty} \frac{b_n}{c} \\
        &= \frac{1}{c} \lim_{n\to\infty} b_n
            && \p{\text{limit law; } \lim_{n\to\infty} b_n \text{ exists}} \\
        &= 0.
\end{aligned}
$$

</example>

## Compact Metric Spaces

<definition>

Let $\p{X, d}$ be a metric space. Then $X$ is **compact** if every sequence has a convergent subsequence.

</definition>

It might not seem like it now, but compactness is one of the most important concepts in analysis. It will become much more clear once we start talking about continuity, but for now, we'll just try to gain some intuition for it.

I personally like to describe compact sets as sets which are "self-contained" or sets where there's "no escape." To illustrate:

<example>

1. $\br{0, 1}$ (with respect to the Euclidean metric) is compact. (This is the Bolzano-Weierstrass theorem from MATH 131A.)
    - This is usually the first example that pops up in my head when I think about compactness.
2. $\p{0, 1}$ is not compact.
    - For example, $a_n = 1 - \frac{1}{n}$ has no convergent subsequence. In other words, this sequence "escapes" the set $\p{0, 1}$.
3. $\R$ is not compact.
    - For example, $a_n = n$ has no convergent subsequence. This sequence "escapes to infinity."

</example>

One of the most important theorems regarding compact sets is the following:

<theorem id="heine-borel"> Heine-Borel

Let $\p{X, d}$ be a metric space and let $E \subseteq X$ be a subset. The following are equivalent:

1. $E \subseteq X$ is compact (with respect to the restricted metric).
2. $E$ is complete and totally bounded.
3. Every open cover of $E$ has a finite subcover.

</theorem>

<remark>

In more abstract settings (e.g., topological spaces), (iii) is usually the definition of compactness. This is because it requires the least amount of machinery to state: it doesn't refer to the metric at all, but only the open sets in your space.

Generally, to prove a set is compact, you will want to try to use (i) or (ii), and if you want to use compactness of a set, (i) and (iii) are usually the most useful.

</remark>

<example>

Show that $\br{0, 1}^2$ is compact (with respect to the Euclidean metric $d_{\ell^2}$).

</example>

<solution>

Let $\set{x^{\p{n}}}_n$ be a sequence in $\br{0, 1}^2$. If we look at the first coordinate of all these elements, then we get a sequence $\set{x^{\p{n}}_1}_n$ of elements in $\br{0, 1}$. But $\br{0, 1}$ is compact, so there exists a subsequence $n_1\p{k}$ of $n$ and $x_1 \in \br{0, 1}$ such that

$$
\lim_{k\to\infty} x^{\p{n_1\p{k}}}_1 = x_1.
$$

Now we have a subsequence of vectors $\set{x^{\p{n_1\p{k}}}}_k$ whose first coordinates converges. However, it's still possible that the second coordinate does not converge, so we will need to run the same argument again:

$\set{x^{\p{n_1\p{k}}}_2}_k$ is a sequence of elements in $\br{0, 1}$, so by compactness again, we get a subsequence $n_2\p{k}$ of $n_1\p{k}$ (so $n_2\p{k}$ is a sub-subsequence) and $x_2 \in \br{0, 1}$ such that

$$
\lim_{k\to\infty} x^{\p{n_2\p{k}}}_2 = x_2.
$$

Here's where it's important that we took a subsequence of our first subsequence: because $\set{x^{\p{n_1\p{k}}}_1}_k$ was a convergent sequence, any subsequence is still convergent and converges to the same limit. In other words,

$$
\lim_{k\to\infty} x^{\p{n_2\p{k}}}_1 = x_1
$$

still. Thus,

$$
x^{\p{n_2\p{k}}}
    = \p{x^{\p{n_2\p{k}}}_1, x^{\p{n_2\p{k}}}_2}
    \xrightarrow{k\to\infty} \p{x_1, x_2}
$$

(since convergence in each coordinate with respect to the absolute value is equivalent to convergence of the entire vector in $d_{\ell^2}$). In summary, we found a subsequence of $\set{x^{\p{n}}}_n$ which converges, so $\br{0, 1}^2$ is compact.

</solution>

<remark>

While the proof had a lot of writing, the idea is relatively simple: apply compactness in each coordinate to get a subsequence that converges in each coordinate. The key detail is that we took a sub-subsequence to make sure that the first coordinate still converges when working on the second coordinate.

</remark>

<exercise>

Show that $\br{0, 1}^k$ is compact.

</exercise>

<example>

Let $X$ be an infinite set with the discrete metric. Prove that $X$ is not compact.

</example>

<solution>

There are multiple ways to prove this:

1. Using (i) in [Heine-Borel](#heine-borel), we just need to construct a sequence which has no convergent subsequence. Here, it's important that $X$ is infinite:

    Let $x_1 \in X$ be any point. Since $X$ is infinite, this means $X \setminus \set{x_1} \neq \emptyset$, so there exists $x_2 \in X \setminus \set{x_1}$, i.e., $x_1 \neq x_2$. Now suppose we have chosen $x_1, \ldots, x_k \in X$ which are all distinct. Then because $X$ is infinite, we know $X \setminus \set{x_1, \ldots, x_k} \neq \emptyset$, so there exists $x_{k+1} \in X$ which is different from $x_1, \ldots, x_k$.

    By induction, we obtain a sequence $\set{x_n}_n$ of $X$ such that if $n \neq m$, then $x_n \neq x_m$. Thus, given any subsequence $n\p{k}$,

    $$
    d\p{x_{n\p{k}}, x_{n\p{k+1}}} = 1
    $$

    for all $k \geq 1$, so this subsequence cannot converge. Hence, $\set{x_n}_n$ has no convergent subsequence, so $X$ is not compact.

2. Using (ii), we need to show that $X$ is not complete or not totally bounded. We already know that $X$ is complete (any metric space with the discrete metric is complete), so we'll want to prove that $X$ is not totally bounded.

    Recall that $B\p{x, 1} = \set{x}$ for any $x \in X$. Thus, if we set $\epsilon = 1$, any finite collection of open balls $B\p{x_1, 1}, \ldots, B\p{x_n, 1}$ satisfies

    $$
    \bigcup_{i=1}^n B\p{x_i, 1}
        = \bigcup_{i=1}^n \set{x_i}
        = \set{x_1, \ldots, x_n}.
    $$

    But $X$ is infinite, so this can't cover $X$, i.e., $X$ is not totally bounded.

3. To prove this using (iii), we can use the same approach as using (ii). Notice that

    $$
    X
        = \bigcup_{x \in X} \set{x}
        = \bigcup_{x \in X} B\p{x, 1}.
    $$

    Given any finite subcollection $B\p{x_1, 1}, \ldots, B\p{x_n, 1}$, we have

    $$
    \bigcup_{i=1}^n B\p{x_i, 1}
        = \set{x_1, \ldots, x_n}
    $$

    like before. Thus, $\set{B\p{x, 1}}_{x \in X}$ is an open cover that does not have a finite subcover, so $X$ is not compact.

</solution>

<example>

Show that $C\p{\br{0, 1}}$ is not compact with respect to the $\sup$-metric.

</example>

<solution>

If $f_n\p{x} = n$, then any subsequence is unbounded, i.e.,

$$
\lim_{k\to\infty} f_{n\p{k}}\p{x} = \infty
$$

for all $x \in \br{0, 1}$. Thus, no subsequence can converge in $C\p{\br{0, 1}}$, so $C\p{\br{0, 1}}$ is not compact.

(In this example, our sequence "escapes to infinity.")

</solution>

<example>

Show that the closed unit ball in $C\p{\br{0, 1}}$ is not compact with respect to the $\sup$-metric, i.e., show that the set

$$
B = \set{f \in C\p{\br{0, 1}} \st \sup_{x \in \br{0, 1}} \abs{f\p{x}} \leq 1}
$$

is not compact.

</example>

<solution>

If $f_n\p{x} = x^n$, then

$$
\lim_{n\to\infty} f_n\p{x}
    =
        \begin{cases}
            0 & \text{if } 0 \leq x < 1, \\
            1 & \text{if } x = 1.
        \end{cases}
$$

Suppose $\set{f_n}_n$ has a convergent subsequence $\set{f_{n\p{k}}}_k$, i.e., there exists $f \in C\p{\br{0, 1}}$ such that $f_{n\p{k}}$ converges uniformly to $f$. The uniform and pointwise limits of a sequence of functions (if they both exist) must be the same:

$$
f\p{x}
    = \lim_{k\to\infty} f_{n\p{k}}\p{x}
    =
        \begin{cases}
            0 & \text{if } 0 \leq x < 1, \\
            1 & \text{if } x = 1.
        \end{cases}
$$

But this contradicts the fact that $f$ was continuous. Thus, $\set{f_n}_n$ has no convergent subsequence, so $B$ is not compact.

(In this example, our sequence "escapes" the set $C\p{\br{0, 1}}$ altogether.)

</solution>

## Homework Hints

### Problem 5

**Reminder:** Infinite sums are defined as **limits**, i.e.,

$$
\sum_{n=1}^\infty \abs{a_n}
    = \lim_{N\to\infty} \sum_{n=1}^N \abs{a_n}.
$$

This means that when proving the triangle inequality, you should use a limit law at some point.

_Hint:_ You can write

$$
\set{\set{a_n}_n \in \ell^1\p{\N} \st \sum_{n=1}^\infty \abs{a_n} \leq 1}
    = \set{\set{a_n}_n \in \ell^1\p{\N} \st \sum_{n=1}^\infty \abs{a_n - 0} \leq 1}.
$$

If you understand what this hint means, then showing the the set is closed and bounded is a one-liner.
