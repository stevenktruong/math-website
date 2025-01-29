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

</solution>

## Exercise 4.11

Consider $a, b \in \R$ where $a < b$. Use denseness of $\Q$ to show there are infinitely many rationals between $a$ and $b$.

<solution>

Suppose otherwise, and that there are only finitely many rationals between $a$ and $b$. Let

$$
S = \set{q \in \Q \mid a < q < b}.
$$

By assumption, $S$ is a finite set, so it has a minimum (check this!). Let $q_0 = \min S$. Since $q_0 \in S$, this means $a < q_0$, so by density of $\Q$, there exists $q' \in \Q$ such that $a < q' < q_0 < b$. But this means $q' \in S$ and $q'$ is strictly smaller than $q_0 = \min S$, which is a contradiction.

</solution>

<exercise>

Show that if $S$ is a finite set, then $\min S$ exists. (_Hint_: Use induction on the number of elements in $S$.)

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
