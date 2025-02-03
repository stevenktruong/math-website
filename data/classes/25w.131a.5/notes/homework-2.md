---
title: Homework 2
date: "2025-01-28"
tags:
    - absolute value
    - density
publish: yes
---

# Homework 2

## Table of Contents

## Exercise 3.5

1. Show $\abs{b} \leq a$ if and only if $-a \leq b \leq a$.
2. Prove $\abs{\abs{a} - \abs{b}} \leq \abs{a - b}$ for all $a, b \in \R$.

<solution>

1. First, notice that because $\abs{b} \geq 0$, we also have $a \geq 0$. There are two cases: $b \geq 0$ and $b < 0$. If $b \geq 0$, then

    $$
    -a \leq 0 \leq b = \abs{b} \leq a.
    $$

    Similarly, if $b < 0$, then

    $$
    -a \leq -\abs{b} = b \leq 0 \leq a.
    $$

2. By the triangle inequality,

    $$
    \abs{a} = \abs{\p{a - b} + b} \leq \abs{a - b} + \abs{b}
    \implies \abs{a} - \abs{b} \leq \abs{a - b}.
    $$

    This is true for any $a, b \in \R$. In particular, swapping $a$ and $b$ gives the inequality

    $$
    \abs{b} - \abs{a} \leq \abs{b - a} = \abs{a - b}.
    \implies -\abs{a - b} \leq \abs{a} - \abs{b}.
    $$

    By part (1), we're done.

### Common Mistakes

A lot of you did something like this for part (1) in the "$\implies$" direction: You showed

$$
\begin{cases}
    b \geq 0 \implies b \leq a, \\
    b < 0 \implies -a \leq b,
\end{cases}
$$

and concluded that $-a \leq b \leq a$. This isn't quite enough. You need to show _both_ inequalities in _both_ cases. In other words, a correct solution needs to show

$$
\begin{cases}
    b \geq 0 \implies -a \leq b \leq a, \\
    b < 0 \implies -a \leq b \leq a.
\end{cases}
$$

</solution>

## Exercise 4.11

Consider $a, b \in \R$ where $a < b$. Use denseness of $\Q$ to show there are infinitely many rationals between $a$ and $b$.

<solution>

### Solution 1 (proof by contradiction)

Suppose otherwise, and that there are only finitely many rationals between $a$ and $b$. Let

$$
S = \set{q \in \Q \mid a < q < b}.
$$

Note that $S \neq \emptyset$ by density of $\Q$. By assumption, $S$ is a finite set, so it has a minimum (check this!). Let $q_0 = \min S$. Since $q_0 \in S$, this means $a < q_0$, so by density of $\Q$, there exists $q' \in \Q$ such that $a < q' < q_0 < b$. But this means $q' \in S$ and $q'$ is strictly smaller than $q_0 = \min S$, which is a contradiction.

### Solution 2 (direct proof)

While this proof _technically_ requires a proof by induction, I won't be picky about it as long as the main details are present in your proof. I'll prove the following statement by induction:

$$
P_n = ``\text{there exist } r_1, \ldots, r_n \in \Q \text{ such that } a < r_1 < \cdots < r_n < b".
$$

Note that in $P_n$, $r_1, \ldots, r_n$ are all distinct because of the strict inequalities.

**Base case:** When $n = 1$, we use density of $\Q$ on $\p{a, b}$ to find $r_1 \in \Q$ such that $a < r_1 < b$.

**Inductive step:** Suppose we have $r_1, \ldots, r_n \in \Q$ such that $a < r_1 < \cdots < r_n < b$. By density of $\Q$ applied to the interval $\p{r_n, b}$, we obtain $r_{n+1} \in \Q$ such that $r_n < r_{n+1} < b$.

Thus, for every $n \in \N$, there exists at least $n$ rational numbers in $\p{a, b}$, so there must exist infinitely many rational numbers in $\p{a, b}$.

### Common Mistakes

The main issue I saw with proofs was that students just said to "repeat this process" infinitely many times, but "this process" was not very clearly defined. For example, I saw this multiple times:

> By density of $\Q$, there exists $r_1 \in \Q$ such that $a < r_1 < b$. By density again, there exists $r_2 \in \Q$ such that $r_1 < r_2 < b$. Repeating this process, we get infinitely many rational numbers between $a$ and $b$.

While the idea is correct, the details are not all there. For example, how should I pick the endpoints for the next step? If I used $r_1 < b$ again, then I would get $r_3 \in \Q$ such that $r_1 < r_3 < b$. However, maybe I'm unlucky and it turns out that $r_3 = r_2$. You have to describe a process that lets me always pick a brand new rational number.

</solution>

<exercise>

Show that if $S$ is a non-empty finite set, then $\min S$ exists. (_Hint_: Use induction on the number of elements in $S$.)

</exercise>

## Exercise 4.12

Let $\mathbb{I}$ be the set of real numbers that are not rational; elements of $\mathbb{I}$ are called _irrational numbers_. Prove if $a < b$, then there exists $x \in \mathbb{I}$ such that $a < x < b$.

<solution>

We follow the hint. Let $S = \set{r + \sqrt{2} \st r \in \Q}$. Suppose for the sake of contradiction that there exists $s = r + \sqrt{2} \in S$ such that $s \in \Q$. Then

$$
\sqrt{2} = s - r \in \Q,
$$

which is impossible. Thus, $S \subseteq \mathbb{I}$. By density, there exists $q \in \Q$ such that $a - \sqrt{2} < q < b - \sqrt{2}$. Then

$$
a < q + \sqrt{2} < b.
$$

But as we showed above, $q + \sqrt{2} \in S$, hence irrational.

</solution>
