---
title: Homework 7
date: "2025-03-02"
tags:
    - continuity
    - intermediate value theorem
publish: yes
---

# Homework 7

## Table of Contents

## Exercise 17.6

A _rational function_ is a function $f$ of the form $\frac{p}{q}$ where $p$ and $q$ are polynomial functions. The domain of $f$ is $\set{x \in \R \mid q\p{x} \neq 0}$. Prove every rational function is continuous. _Hint_: Use Exercise 17.5.

<solution>

By Exercise 17.5, polynomials are continuous functions on $\R$. (This is not hard to prove--you can prove that $x^n$ is continuous for each $n \in \N$ by induction; then every polynomial is a finite linear combination of these.) Thus, by Theorem 17.4(iii), $\frac{p}{q}$ is continuous at $x_0$ provided $q\p{x_0} \neq 0$, which is exactly the domain of $f$.

</solution>

## Exercise 18.4

Let $S \subseteq \R$ and suppose there exists a sequence $\p{x_n}$ in $S$ converging to a number $x_0 \notin S$. Show there exists an unbounded continuous function on $S$.

<solution>

Consider $f\p{x} = \frac{1}{x - x_0}$. Since $x_0 \notin S$, it follows that $x - x_0 \neq 0$ for all $x \in S$. In particular, by Theorem 17.4(iii) again, $f$ is a continuous function on $S$.

To show that $f$ is unbounded, let $M > 0$. Since $x_n \to x_0$, there exists $n \in \N$ such that $\abs{x_n - x_0} < \frac{1}{M}$, so for this $n$, we have

$$
\abs{f\p{x_n}} = \frac{1}{\abs{x_n - x_0}} > M.
$$

Since $M$ was arbitrary, this means $f$ is unbounded.

</solution>

## Exercise 18.10

Suppose $f$ is continuous on $\br{0, 2}$ and $f\p{0} = f\p{2}$. Prove there exist $x, y \in \br{0, 2}$ such that $\abs{y - x} = 1$ and $f\p{x} = f\p{y}$. _Hint_: Consider $g\p{x} = f\p{x + 1} - f\p{x}$ on $\br{0, 1}$.

<solution>

We follow the hint. Note that $x \mapsto f\p{x + 1}$ is continuous since it is the composition of two continuous functions, so $g$ itself is continuous since it is the difference of two continuous functions.

By definition, we have

$$
g\p{0} = f\p{1} - f\p{0} = -\p{f\p{0} - f\p{1}} = -g\p{1}.
$$

Thus, $0$ lies between (or is one of) $g\p{0}$ and $g\p{1}$. Thus, by the intermediate value theorem, there exists $x_0 \in \br{0, 1}$ such that $g\p{x_0} = 0$. But this is equivalent to

$$
f\p{x_0 + 1} = f\p{x_0},
$$

so we are done by setting $\p{x, y} = \p{x_0, x_0 + 1}$.

</solution>
