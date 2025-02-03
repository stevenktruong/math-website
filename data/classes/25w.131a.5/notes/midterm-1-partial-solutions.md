---
title: Midterm 1 Partial Solutions
date: "2025-01-28"
tags:
    - density
    - limits
publish: yes
---

# Midterm 1

This page will only include solutions to Problems 1 and 4, which were the ones I graded. The professor will provide solutions for Problems 2 and 3 elsewhere.

The solutions I write down here would receive full points from me. They aren't the only solutions that can receive full points, of course.

## Table of Contents

## Problem 1

1. State Denseness of $\Q$.
2. Let $a$ be a real number. Prove that the set $S = \set{r \in \Q \mid r < a}$ does not have a maximum.

<solution>

1. For any $a, b \in \R$ such that $a < b$, there exists $q \in \Q$ such that $a < q < b$.
2. Suppose $S$ has a maximum, say, $q_0 \in S$. Since $q_0 \in S$, we have $q_0 < a$, so by density of $\Q$, there exists $q' \in \Q$ such that $q_0 < q' < a$. But this means $q' \in S$ is a larger element than $q_0$, which is impossible.

</solution>

## Problem 4

Let $t_1 = 2$ and $t_{n+1} = \frac{t_n^2 + 4}{5}$ for every $n \in \N$. Then $\p{t_n}$ converges to a positive number $t > 0$. Find $t$ (you may use without proof the fact that $0 < t_n < 3$ for all $n \in \N$, but you need to justify all other steps).

<solution>

Since $5 \neq 0$, we may apply limit laws and the fact that $\lim_{n\to\infty} t_{n+1} = t$ to get

$$
\lim_{n\to\infty} t_{n+1} = \lim_{n\to\infty}  \frac{t_n^2 + 4}{5}
\implies t = \frac{t^2 + 4}{5}.
$$

Thus, $t$ satisfies $t^2 - 5t + 4 = 0$, so $t \in \set{1, 4}$. Since $0 < t_n < 3$, the [lemma from discussion](../homework-3#limit-inequality-lemma) tells us $0 \leq t \leq 3$ (notice the _non-strict_ inequalities). In particular, this means $t \neq 4$, so $t = 1$.

</solution>
