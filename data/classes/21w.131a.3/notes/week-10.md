---
title: Week 10 Discussion Notes
date: "2021-03-09"
tags:
    - limits of functions
    - differentiation
publish: yes
---

# Week 10 Discussion Notes

## Table of Contents

## Limits of Functions

<definition>

Given a function $\func{f}{D}{\R}$, we say that $\displaystyle\lim_{x\to a} f\p{x} = L$ if for every sequence $\set{x_n}_n \subseteq D \setminus \set{a}$ such that $x_n \to a$, we have $\displaystyle\lim_{n\to\infty} f\p{x_n} = L$.

</definition>

Compare with the definition of continuity:

> $\func{f}{D}{\R}$ is continuous at $a \in D$ if for every sequence $\set{x_n}_n \subseteq D$ such that $x_n \to a$, we have $\displaystyle\lim_{n\to\infty} f\p{x_n} = L$.

The difference here is that in continuity, the terms of the sequence are allowed to be $a$, but in the definition of a limit, the elements of your sequence are **not** allowed to be $a$. Beyond that, there's not much else to say. Everything is defined in terms of sequences, so as you would expect, all the usual limit laws apply.

<example>

Show that $\displaystyle\lim_{x\to1} \p{\frac{x^{1/3} - 1}{x - 1}}\p{x^2 + 1} = \frac{2}{3}$.

</example>

<solution>

Recall that $a^3 - b^3 = \p{a - b}\p{a^2 + ab + b^2}$. If we set $a = x^{1/3}$ and $b = 1$, then

$$
x - 1
    = \p{x^{1/3}}^3 - 1
    = \p{x^{1/3} - 1}\p{x^{2/3} + x^{1/3} + 1},
$$

so

$$
\begin{gathered}
    \frac{x^{1/3} - 1}{x - 1}
        = \frac{x^{1/3} - 1}{\p{x^{1/3} - 1}\p{x^{2/3} + x^{1/3} + 1}}
        = \frac{1}{x^{2/3} + x^{1/3} + 1} \\
    \implies
    \lim_{x\to1} \frac{x^{1/3} - 1}{x - 1}
        = \lim_{x\to1} \frac{1}{x^{2/3} + x^{1/3} + 1}
        = \frac{1}{3}.
\end{gathered}
$$

Since polynomials are continuous, we also have $\displaystyle\lim_{x\to1} \p{x^2 + 1} = 2$, so by the limit laws,

$$
\lim_{x\to1} \p{\frac{x^{1/3} - 1}{x - 1}}\p{x^2 + 1}
    = \p{\lim_{x\to1} \frac{x^{1/3} - 1}{x - 1}} \p{\lim_{x\to1} \p{x^2 + 1}}
    = \frac{1}{3} \cdot 2
    = \frac{2}{3}.
$$

</solution>

## Derivatives

<definition>

Let $I \subseteq \R$ be an interval and $\func{f}{I}{\R}$ be a function. Then $f$ is **differentiable at $a \in I$** if

$$
f'\p{a}
    = \lim_{x\to a} \frac{f\p{x} - f\p{a}}{x - a}
$$

exists and is finite. In this case, we say $f'\p{a}$ is the **derivative of $f$ at $a$**.

</definition>

Here are some very useful formulas for calculating derivatives:

<proposition>

Suppose $f, g$ are differentiable at $a \in \R$ and let $c \in \R$. Then

1. $cf$ is differentiable at $a$ and $\p{cf}'\p{a} = cf'\p{a}$.
2. $f + g$ is differentiable at $a$ and $\p{f + g}'\p{a} = f'\p{a} + g'\p{a}$.
3. (**product rule**) $fg$ is differentiable at $a$ and $\p{fg}'\p{a} = f'\p{a}g\p{a} + f\p{a}g'\p{a}$.
4. (**quotient rule**) If $g\p{a} \neq 0$, then $\frac{f}{g}$ is differentiable at $a$ and $\p{\frac{f}{g}}'\p{a} = \frac{f'\p{a}g\p{a} - f\p{a}g'\p{a}}{\br{g\p{a}}^2}$.

</proposition>

<theorem> chain rule

Let $a \in \R$. If $f$ is differentiable at $g\p{a}$ and $g$ is differentiable at $a$, then $f \circ g$ is differentiable at $a$ and $\p{f \circ g}'\p{a} = f'\p{g\p{a}} g'\p{a}$.

</theorem>

The rest of the notes will be dedicated to examples, since there's not much else to talk about.

<example> (28.8)

Let $f\p{x} = x^2$ for $x$ rational and $f\p{x} = 0$ for $x$ irrational. Show that $f$ is differentiable at $x = 0$.

</example>

<solution>

First, let's look at a **wrong** answer:

> Notice that $f'\p{x} = 2x$ if $x$ is rational. Thus, $f'\p{0} = 0$.

The problem with this statement is that $f$ is not continuous if $x \neq 0$, which means that $f'\p{x}$ doesn't exist for $x \neq 0$. As a result, "$f'\p{x}$ if $x$ is rational" is meaningless. This tells us that our formulas above won't be useful for this problem, and we'll have to do it directly from the definition.

We want to calculate $\lim_{x\to0} \frac{f\p{x} - f\p{0}}{x - 0}$, so it'll be a good idea to see what the function in the limit looks like. If $x \neq 0$, then

$$
\frac{f\p{x} - f\p{0}}{x - 0}
    = \frac{f\p{x}}{x}
    =   \begin{cases}
            x & \text{if } x \text{ is rational}, \\
            0   & \text{otherwise}.
        \end{cases}
$$

This limit should be $0$, so let's try to prove that. Let $\set{x_n}_n$ be a sequence such that $x_n \neq 0$ for all $n$ and $x_n \to 0$. Let $\epsilon > 0$, so by definition, there exists $N \in \R$ such that if $n > N$, then $\abs{x_n} < \epsilon$. Thus,

$$
\begin{aligned}
    \abs{\frac{f\p{x_n} - f\p{0}}{x_n - 0}}
        &=  \begin{cases}
                \abs{x_n} & \text{if } x_n \text{ is rational}, \\
                0   & \text{otherwise}
            \end{cases} \\
        &< \epsilon,
\end{aligned}
$$

since it's less than $\epsilon$ in both cases. Thus, because $\set{x_n}_n$ was an arbitrary sequence,

$$
f'\p{0}
    = \lim_{x\to0} \frac{f\p{x} - f\p{0}}{x - 0}
    = 0.
$$

</solution>

<example> (28.14)

Suppose $f$ is differentiable at $a$. Prove:

1. $\displaystyle \lim_{h\to0} \frac{f\p{a + h} - f\p{a}}{h} = f'\p{a}$
2. $\displaystyle \lim_{h\to0} \frac{f\p{a + h} - f\p{a - h}}{2h} = f'\p{a}$

</example>

<solution>

1. Since $f$ is differentiable at $a$, we know that for any sequence $\set{x_n}_n$ such that $x_n \neq a$ and $x_n \to a$, we have

    $$
    f'\p{a}
        = \lim_{n\to\infty} \frac{f\p{x_n} - f\p{a}}{x_n - a}.
    $$

    Let $\set{h_n}_n$ be a sequence such that $h_n \neq 0$ and $h_n \to 0$. Notice that $a + h_n \neq a$ for all $n$ and $a + h_n \to 0$, so if we set $x_n = a + h_n$, we can apply the equation above to get

    $$
    \begin{aligned}
        \lim_{n\to\infty} \frac{f\p{a + h_n} - f\p{a}}{h_n}
            &= \lim_{n\to\infty} \frac{f\p{a + h_n} - f\p{a}}{\p{a + h_n} - a} \\
            &= \lim_{n\to\infty} \frac{f\p{x_n} - f\p{a}}{x_n - a} \\
            &= f'\p{a}.
    \end{aligned}
    $$

    Since $\set{h_n}_n$ was an arbitrary sequence, it follows that

    $$
    \lim_{h\to0} \frac{f\p{a + h} - f\p{a}}{h}
        = f'\p{a}.
    $$

2. Notice that

    $$
    \begin{aligned}
        \frac{f\p{a + h} - f\p{a - h}}{2h}
            &= \frac{f\p{a + h} - f\p{a} + f\p{a} - f\p{a - h}}{2h} \\
            &= \frac{1}{2} \p{\frac{f\p{a + h} - f\p{a}}{h} + \frac{f\p{a} - f\p{a - h}}{h}} \\
            &= \frac{1}{2} \p{\frac{f\p{a + h} - f\p{a}}{h} + \frac{f\p{a + \p{-h}} - f\p{a}}{\p{-h}}}.
    \end{aligned}
    $$

    We can calculate the limit of both terms in the parentheses by the definition of the derivative, so by the limit laws,

    $$
    \begin{aligned}
        \lim_{h\to0} \frac{f\p{a + h} - f\p{a - h}}{2h}
            &= \lim_{h\to0} \frac{1}{2} \p{\frac{f\p{a + h} - f\p{a}}{h} + \frac{f\p{a + \p{-h}} - f\p{a}}{\p{-h}}} \\
            &= \frac{1}{2} \p{f'\p{a} + f'\p{a}} \\
            &= f'\p{a}.
    \end{aligned}
    $$

</solution>

<example>

True or false: <i>If $\displaystyle \lim_{h\to0} \frac{f\p{a + h} - f\p{a - h}}{2h}$ exists and is finite, then $f$ is differentiable at $a$.</i>

</example>

<solution>

False. The exercise above tells us that _if_ the derivative exists, _then_ we can calculate $f'\p{a}$ using the above formula. If the derivative doesn't exist, then the formula may no longer be true. For example, if $f\p{x} = \abs{x}$, then

$$
\lim_{h\to0} \frac{f\p{a + h} - f\p{a - h}}{2h}
    = \lim_{h\to0} \frac{\abs{h} - \abs{-h}}{2h}
    = 0,
$$

but $f$ is not differentiable at $x = 0$.

</solution>

<example> (28.16)

Let $f$ be a function defined on an open interval $I$ containing $a$. Show that $f'\p{a}$ exists if and only if there is a function $\epsilon\p{x}$ defined on $I$ and a real number $b$ such that

$$
f\p{x} - f\p{a}
    = \p{x - a}\p{b - \epsilon\p{x}}
\quad\text{and}\quad
\lim_{x\to a} \epsilon\p{x} = 0.
$$

</example>

<solution>

"$\implies$"

Suppose $f'\p{a}$ exists. Let's try to reverse engineer what $\epsilon$ and $b$ would have to be:

$$
f\p{x} - f\p{a} = \p{x - a}\p{b - \epsilon\p{x}}
\implies
\epsilon\p{x} = b - \frac{f\p{x} - f\p{a}}{x - a}.
$$

For $\epsilon\p{x}$ to tend to $0$ as $x \to 0$, we would need $b = f'\p{a}$, by the definition of the derivative. Now let's prove that this works:

Technically, $\epsilon$ is defined on $I \setminus \set{a}$, but its value at $x = a$ doesn't matter since we're taking limits, so we can set it to be any number we like to get a function defined on $I$. Then

$$
f\p{x} - f\p{a} = \p{x - a}\p{f'\p{a} - \epsilon\p{x}}
$$

just by definition of $\epsilon\p{x}$, and by our choice of $b$, we get $\displaystyle\lim_{x\to a} \epsilon\p{x} = 0$ automatically.

"$\impliedby$"

Suppose that $\epsilon\p{x}$ and $b$ exist as in the problem statement. By rearranging the equation in the problem statement and applying limit laws,

$$
\begin{aligned}
    \frac{f\p{x} - f\p{a}}{x - a}
        &= b - \epsilon\p{x} \\
    \implies
    \lim_{x\to a} \frac{f\p{x} - f\p{a}}{x - a}
        &= \lim_{x\to a} \p{b - \epsilon\p{x}} \\
        &= b - \lim_{x\to a} \epsilon\p{x} \\
        &= b,
\end{aligned}
$$

so by definition of the derivative, $f'\p{a}$ exists and is equal to $b$.

</solution>
