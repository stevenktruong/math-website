---
title: Homework 8
date: "2025-03-10"
tags:
    - differentiation
    - mean value theorem
publish: yes
---

# Homework 8

## Table of Contents

## Exercise 19.8

1. Use the Mean Value theorem to prove

    $$
    \abs{\sin{x} - \sin{y}} \leq \abs{x - y}
    $$

    for all $x, y \in \R$; see the proof of Theorem 19.6.

2. Show $\sin x$ is uniformly continuous on $\R$.

<solution>

1. Let $x, y \in \R$. By the mean value theorem, there exists $c$ between $x$ and $y$ such that

    $$
    \sin{x} - \sin{y} = \p{x - y} \cos{c}.
    $$

    But $\abs{\cos{\theta}} \leq \theta$ for any $\theta \in \R$, so taking absolute values, we get

    $$
    \abs{\sin{x} - \sin{y}}
        = \abs{\p{x - y} \cos{c}}
        \leq \abs{x - y}.
    $$

2. Given $\varepsilon > 0$, we can just set $\delta = \varepsilon$. If $\abs{x - y} < \delta$, then by (1), we have

    $$
    \abs{\sin{x} - \sin{y}}
        \leq \abs{x - y}
        < \delta
        = \varepsilon.
    $$

</solution>

## Exercise 28.4 (not graded)

Let $f\p{x} = x^2 \sin\frac{1}{x}$ for $x \neq 0$ and $f\p{0} = 0$.

1. Use Theorem 28.3 and 28.4 to show $f$ is differentiable at each $a \neq 0$ and calculate $f'\p{a}$. Use, without proof, the fact that $\sin{x}$ is differentiable and that $\cos{x}$ is its derivative.
2. Use the definition to show $f$ is differentiable at $x = 0$ and $f'\p{0} = 0$.
3. Show $f'$ is not continuous at $x = 0$.

<solution>

1. By the product rule and chain rule,

    $$
    f'\p{a} = 2a \sin\frac{1}{a} - \cos\frac{1}{a}.
    $$

2. We have

    $$
    \abs{\frac{f\p{x} - f\p{0}}{x - 0}}
        = \abs{\frac{x^2\sin\frac{1}{x}}{x}}
        = \abs{x\sin \frac{1}{x}}
        \leq \abs{x}.
    $$

    By the squeeze theorem (which still applies to limits of functions by using the sequential definition of limits), since $\abs{x} \to 0$ as $x \to 0$, we see that $f$ is differentiable at $0$ and $f'\p{0} = 0$.

3. Let $x_n = \frac{1}{2\pi n}$ so that $x_n \to 0$. Then

    $$
    f'\p{x_n}
        = \frac{1}{\pi n} \sin\p{2\pi n} - \cos\p{2\pi n}
        = 1
    $$

    for all $n$. Thus, $f'\p{x_n} \to 1$, but $f'\p{0} = 0$.

</solution>

## Exercise 28.16

Let $f$ be a function defined on an open interval $I$ containing $a$. Show $f'\p{a}$ exists if and only if there is a function $\varepsilon\p{x}$ defined on $I$ such that

$$
f\p{x} - f\p{a} = \p{x - a}\br{f'\p{a} - \varepsilon\p{x}}
\quad\text{and}\quad \lim_{x\to a} \varepsilon\p{x} = 0.
$$

<solution>

"$\implies$"

Assume $f'\p{a}$ exists; that is, the limit

$$
\lim_{x\to a} \frac{f\p{x} - f\p{a}}{x - a}
$$

exists. Let

$$
\varepsilon\p{x} \coloneqq
    \begin{cases}
        f'\p{a} - \frac{f\p{x} - f\p{a}}{x - a} & \text{if } a \neq 0, \\
        0 & \text{if } a = 0.
    \end{cases}
$$

(You can figure this out by just solving for $\varepsilon\p{x}$ in the equation they give you. Also, it doesn't matter what the value of $\varepsilon\p{a}$ is as long as you define it.) Then it's easy to check that

$$
f\p{x} - f\p{a} = \p{x - a}\br{f'\p{a} - \varepsilon\p{x}},
$$

so it remains to check that $\lim_{x\to a} \varepsilon\p{x} = 0$. By limit laws, it exists and

$$
\begin{aligned}
    \lim_{x\to a} \varepsilon\p{x}
        &= \lim_{x\to a} \br{f'\p{a} - \frac{f\p{x} - f\p{a}}{x - a}} \\
        &= f'\p{a} - \lim_{x\to a} \frac{f\p{x} - f\p{a}}{x - a} \\
        &= f'\p{a} - f'\p{a} \\
        &= 0.
\end{aligned}
$$

"$\impliedby$"

Suppose there exist a number $L \in \R$ and a function $\varepsilon\p{x}$ such that

$$
f\p{x} - f\p{a} = \p{x - a}\br{L - \varepsilon\p{x}}
\quad\text{and}\quad \lim_{x\to a} \varepsilon\p{x} = 0.
$$

By limit laws again $f$ is differentiable at $a$ with

$$
\begin{aligned}
    \lim_{x\to a} \frac{f\p{x} - f\p{a}}{x - a}
        &= \lim_{x\to a} \br{L - \varepsilon\p{x}} \\
        &= L - \lim_{x\to a} \varepsilon\p{x} \\
        &= L.
\end{aligned}
$$

### Common Mistakes

The most common mistake I saw was trying to do something like this to try to show that $\lim_{x\to a} \varepsilon\p{x} = 0$:

> $$
> f'\p{a}
>     = \lim_{x\to a} \br{\frac{f\p{x} - f\p{a}}{x - a}}
>     = \lim_{x\to a} \br{f'\p{a} - \varepsilon\p{x}}
>     = f'\p{a} - \lim_{x\to a} \varepsilon\p{x}.
> $$
>
> Thus, solving gives $\lim_{x\to a} \varepsilon\p{x} = 0$.

The issue with this is that the argument only says this: if $\lim_{x\to a} \varepsilon\p{x}$ exists, then it must be $0$. However, you need to show that $\lim_{x\to a} \varepsilon\p{x}$ exists to begin with. In other words, you can't just take limits on both sides and solve. The easiest way to do this is to use limit laws, which tells you that the limit exists and tells you have to compute the limit--you kill two birds with one stone.

This argument can be fixed, though it requires a little bit of work. See the following exercise.

<exercise>

Assume that $\p{a_n}_n, \p{b_n}_n$ are sequences such that $\p{a_n}_n$ and $\p{a_n + b_n}_n$ converge. Show that $\p{b_n}_n$ also converges.

</exercise>

</solution>
