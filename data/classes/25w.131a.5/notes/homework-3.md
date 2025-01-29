---
title: Homework 3
date: "2025-01-28"
tags:
    - limits
publish: yes
---

# Homework 3

## Table of Contents

## Exercise 8.6(a)

Let $\p{s_n}$ be a sequence in $\R$. Prove that $\lim_{n\to\infty} s_n = 0$ if and only if $\lim_{n\to\infty} \abs{s_n} = 0$.

<solution>

"$\implies$"

Let $\varepsilon > 0$. Since $\lim_{n\to\infty} s_n = 0$, there exists $N \in \R$ such that if $n > N$, then $\abs{s_n - 0} < \varepsilon$. This same $N$ will work for $\abs{s_n}$. Since $\abs{s_n} \geq 0$, we have

$$
\abs{\abs{s_n} - 0} = \abs{s_n - 0} < \varepsilon
$$

for $n > N$.

</solution>

## Exercise 8.7(b)

Show that $s_n = \p{-1}^n n$ does not converge.

<solution>

Note: There are a lot of ways to do this problem. This is the one that first came to my mind.

Suppose for the sake of contradiction that $\p{s_n}$ does converge to some $s \in \R$. Let $\varepsilon = \frac{1}{2}$. Then there exists $N \in \R$ such that if $n > N$, then

$$
\abs{s_n - s} < \frac{1}{2}
\implies s - \frac{1}{2} < \p{-1}^n n < s + \frac{1}{2}.
$$

In particular, $2n > N$, so

$$
s - \frac{1}{2} < 2n < s + \frac{1}{2}
\implies 2n - \frac{1}{2} < s.
$$

On the other hand, we have $2n + 1 > N$, so

$$
s - \frac{1}{2} < -\p{2n + 1} < s + \frac{1}{2}
\implies s < -\p{2n + \frac{1}{2}}.
$$

But this implies

$$
0 \leq 2n - \frac{1}{2} < s < -\p{2n + \frac{1}{2}} \leq 0,
$$

which is a contradiction.

</solution>

## Exercise 9.4

Let $s_1 = 1$ and for $n \geq 1$ let $s_{n+1} = \sqrt{s_n + 1}$.

1. List the first four terms of $\p{s_n}$.
2. It turns out that $\p{s_n}$ converges. Assume this fact and prove the limit is $\frac{1}{2} \p{1 + \sqrt{5}}$.

<solution>

1. $1, \sqrt{2}, \sqrt{\sqrt{2} + 1}, \sqrt{\sqrt{\sqrt{2} + 1} + 1}$
2. Assuming $\p{s_n}$ converges, we use Example 5 from the book (which I showed you in discussion), to get

    $$
    \lim_{n\to\infty} \sqrt{s_n + 1} = \sqrt{s + 1}.
    $$

    On the other hand, it's not too hard to show that $\lim_{n\to\infty} s_{n+1} = s$ also. Thus, we get

    $$
    s
        = \lim_{n\to\infty} s_{n+1}
        \lim_{n\to\infty} \sqrt{s_n + 1}
        = \sqrt{s + 1}.
    $$

    This implies $s^2 - s - 1 = 0$, so

    $$
    s \in \set{\frac{1 + \sqrt{5}}{2}, \frac{1 - \sqrt{5}}{2}}.
    $$

    You can show by induction that $s_n \geq 0$ for all $n$, which implies $s \geq 0$ as well (why?). In particular, this eliminates $\frac{1 - \sqrt{5}}{2}$, so

    $$
    s = \frac{1 + \sqrt{5}}{2}.
    $$

</solution>

<exercise>

Show that if $n_0 \in \N$ and $\lim_{n\to\infty} s_n = s$, then $\lim_{n\to\infty} s_{n+n_0} = s$ as well. (_Hint_: Take the $N$ you get from $\p{s_n}$ and use $N' = N - n_0$.)

</exercise>

<exercise>

1. Show that if $s_n \geq 0$ for all $n \geq 1$ and $\lim_{n\to\infty} s_n = s$, then $s \geq 0$ as well.
2. Give a counter-example to show that this statement is false with strict inequalities, i.e., to show that the statement

    > If $s_n > 0$ for all $n \geq 1$ and $\lim_{n\to\infty} s_n = s$, then $s > 0$ as well.

    is **false**.

</exercise>
