---
title: Week 8 Discussion Notes
date: "2021-02-23"
tags:
    - continuity
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Homework Comments

### 9.3

Here is the problem statement:

> Suppose $\displaystyle\lim_{n\to\infty} a_n = a$, $\displaystyle\lim_{n\to\infty} b_n = b$, and $s_n = \dfrac{a_n^3+4a_n}{b_n^2+1}$. Prove $\displaystyle\lim_{n\to\infty} s_n = \frac{a^3 + 4a}{b^2 + a}$ **carefully**, using the limit theorems.

I emphasized the word "carefully" because it's the reason why I was fairly strict with grading. Many of you had something like this as the first line:

$$
\lim_{n\to\infty} s_n
    = \frac{\lim_{n\to\infty} \p{a_n^3 + 4a_n}}{\lim_{n\to\infty} \p{b_n^2 + 1}}
    \quad \p{\text{Theorem 9.6}}
$$

Theorem 9.6 says the following:

> If $\set{s_n}_n$ converges to $s$ and $\set{t_n}_n$ converges to $t$ with $t \neq 0$, then $\set{\frac{t_n}{s_n}}_n$ converges to $\frac{t}{s}$.

Remember that you need to check assumptions before using a fact. The assumptions for Theorem 9.6 are that $\displaystyle\lim_{n\to\infty} s_n$ and $\displaystyle\lim_{n\to\infty} t_n$ exist. In other words, if you wrote the line above before checking that the limits of the numerator and denominator exist, **you used Theorem 9.6 before checking all assumptions**. So while you get the "correct" answer in the end, the reasoning is wrong, which is why I took off a lot of points.

To prove this properly, Theorem 9.6 turns out to be the _last_ limit law that you use in this problem. A correct solution would look like the following:

By Theorem 9.4,

$$
\lim_{n\to\infty} a_n^3
    = \p{\lim_{n\to\infty} a_n}^3
    = a^3
\quad\text{and}\quad
\lim_{n\to\infty} b_n^2
    = \p{\lim_{n\to\infty} b_n}^2
    = b^2,
$$

and by Theorem 9.2, $\displaystyle\lim_{n\to\infty} 4a_n = 4a$. Thus, by Theorem 9.3,

$$
\begin{aligned}
    \lim_{n\to\infty} \p{a_n^3 + 4a_n}
         = \p{\lim_{n\to\infty} a_n^3} + \p{\lim_{n\to\infty} 4a_n}
        &= a^3 + 4a,
    \quad\text{and} \\
    \lim_{n\to\infty} \p{b_n^2 + 1}
         = \p{\lim_{n\to\infty} b_n^2} + \p{\lim_{n\to\infty} 1}
        &= b^2 + 1.
\end{aligned}
$$

Since $b^2 + 1 \geq 1$, we know that $b^2 + 1 \neq 0$, so _now_ we can apply Theorem 9.6 to get

$$
\lim_{n\to\infty} s_n
    = \frac{\lim_{n\to\infty} \p{a_n^3 + 4a_n}}{\lim_{n\to\infty} \p{b_n^2 + 1}}
    = \frac{a^3 + 4a}{b^2 + 1}.
$$

## Continuity

### Introduction

<definition>

Suppose $\func{f}{D}{\R}$ is a function. Then $f$ is **continuous at $x_0 \in D$** if one of the following holds:

1. If $\set{x_n}_n$ is a sequence in $D$ converging to $x_0$, then $\set{f\p{x_n}}_n$ converges to $f\p{x_0}$.
2. For any $\epsilon > 0$, there exists $\delta > 0$ such that whenever $y \in D$ satisfies $\abs{x_0 - y} < \delta$, then $\abs{f\p{x_0} - f\p{y}} < \epsilon$.

</definition>

<remark>

From lecture, you already know that (i) and (ii) are equivalent definitions, which means we can use whichever one's more convenient for us. As a rule of thumb, (i) is easier to use to prove something is discontinuous, and (ii) is easier to use to prove something is continuous.

</remark>

<example> (17.10(b))

Prove that

$$
f\p{x}
    =   \begin{cases}
            \sin{\frac{1}{x}}   & \text{if } x > 0, \\
            0                   & \text{if } x = 0
        \end{cases}
$$

is not continuous at $x_0 = 0$.

</example>

<solution>

Following the remark above, we're going to want to use (i). To prove discontinuity, we just need to find a sequence $\set{x_n}_n$ in $\pco{0, \infty}$ such that $\set{x_n}_n$ converges to $0$, but $\set{f\p{x_n}}_n$ does _not_ converge to $f\p{0} = 0$. Since $\sin{\theta} = 1$ at $\frac{\pi}{2} + 2\pi n$ for all $n \in \N$, we can set

$$
\frac{1}{x_n} = \frac{\pi}{2} + 2\pi n
\implies x_n = \frac{1}{\frac{\pi}{2} + 2\pi n}.
$$

Then $x_n \to 0$ as $n \to \infty$, but $f\p{x_n} = 1$ for all $n \in \N$, so $f$ is not continuous at $x_0 = 0$.

</solution>

<example> (17.4)

Prove that $\sqrt{x}$ is continuous on $\pco{0, \infty}$.

</example>

<solution>

We're going to use definition (ii) here, which means that we want to show an inequality of the form

$$
\abs{\sqrt{x_0} - \sqrt{y}} < \epsilon,
$$

so let's take a look at the left-hand side:

$$
\abs{\sqrt{x_0} - \sqrt{y}} \cdot \abs{\frac{\sqrt{x_0} + \sqrt{y}}{\sqrt{x_0} + \sqrt{y}}}
    = \frac{\abs{x_0 - y}}{\sqrt{x_0} + \sqrt{y}}
    \leq \frac{\abs{x_0 - y}}{\sqrt{x_0}}.
$$

This inequality is okay except when $x_0 = 0$, which tells me that I want to deal with this case separately.

Let $\epsilon > 0$. If $x_0 = 0$, then if $\abs{y} < \delta$,

$$
\abs{\sqrt{y}}
    = \sqrt{y}
    < \sqrt{\delta}.
$$

So, $\delta = \epsilon^2$ gives $\abs{\sqrt{y}} < \epsilon$, so $\sqrt{x}$ is continuous at $x_0 = 0$.

If $x_0 \neq 0$, then we can use the inequality above: if $\abs{x_0 - y} < \delta$, then

$$
\abs{\sqrt{x_0} - \sqrt{y}}
    \leq \frac{\abs{x_0 - y}}{\sqrt{x_0}}
    < \frac{\delta}{\sqrt{x_0}}.
$$

Thus, $\delta = \epsilon\sqrt{x_0}$ works: $\abs{\sqrt{x_0} - \sqrt{y}} < \epsilon\frac{\sqrt{x_0}}{\sqrt{x_0}} = \epsilon$. Thus, $\sqrt{x}$ is continuous on all of $\pco{0, \infty}$.

</solution>

Another consequence of the sequence definition of continuity is that facts about sequences translate directly into facts about continuity.

<theorem>

Suppose $\func{f}{D}{\R}$ and $\func{g}{D}{\R}$ are continuous functions. Then:

1. $f + g$ is continuous.
2. $fg$ is continuous.
3. $\frac{f}{g}$ is continuous at all points $x_0 \in D$ such that $g\p{x_0} \neq 0$.

</theorem>

<proof> (sketch)

Continuity at a point $x_0 \in D$ basically boils down to sequences. For $f + g$, if $\set{x_n}_n$ is a sequence in $D$ that converges to $x_0$, then we need to show that $\set{\p{f + g}\p{x_n}}_n$ converges to $\p{f + g}\p{x_0}$, but this boils down to the [limit laws for sequences](../week-5#limit-laws).

</proof>

This theorem tells us that sequences help us with proving continuity. The converse is also true: we can use continuity to help us calculate limits.

<example>

Calculate $\displaystyle\lim_{n\to\infty} e^{1/n}$.

</example>

<solution>

$e^x$ is continuous (which is a fact we'll just take for granted), and $\frac{1}{n}$ converges to $0$. Thus, by the sequence definition of continuity,

$$
\lim_{n\to\infty} e^{1/n}
    = e^{\lim_{n\to\infty} \p{1/n}}
    = e^0
    = 1.
$$

</solution>

To end this section, here's an important connection between density and continuity:

<proposition>

Let $\func{f}{\R}{\R}$ and $\func{g}{\R}{\R}$ be continuous functions such that $f\p{q} = g\p{q}$ for all $q \in \Q$. Then $f = g$ everywhere.

</proposition>

<remark>

The idea behind this fact is that a continuous function will "fill in gaps" through limits. For example, let's say I give you all the information about a function $f\p{x}$ except at a single point:

<img src="{{ assetsFolder }}/images/continuity-density.png" width=40%>

Because of continuity, there's only one way you can fill in the gap. In other words, information about a continuous function except at one point is the same thing as information about the continuous function everywhere.

The proposition says something a bit stronger: information about a continuous function at the rational numbers is the same as information about the function on the whole real line.

</remark>

<proof>

To prove the statement, we just need to use density of $\Q$. Let $x_0 \in \R$, so by density of $\Q$, there exists a sequence of rational numbers $\set{q_n}_n$ which converge to $x_0$. Since we know that $f$ and $g$ agree at every rational, we have $f\p{q_n} = g\p{q_n}$ for all $n$. Then by the sequence definition of continuity,

$$
f\p{x_0}
    = \lim_{n\to\infty} f\p{q_n}
    = \lim_{n\to\infty} g\p{q_n}
    = g\p{x_0}.
$$

Since $x_0$ was arbitrary, this means $f = g$ everywhere on $\R$, which was what we wanted to show.

</proof>

## True or False

<example>

True or false: _$\func{f}{\R \setminus \set{0}}{\R}$ defined by $f\p{x} = \frac{1}{x}$ is continuous._

</example>

<solution>

True. Continuity of a function only depends on points in the domain. $x_0 = 0$ is a problematic point for $f$, but $0$ is outside the domain of $f$, so we don't care what happens there.

</solution>

<example>

True or false: _If $f + g$ is continuous, then $f$ or $g$ is must be continuous at at least one point._

</example>

<solution>

False. For example, let

$$
f\p{x}
    =   \begin{cases}
            1 & \text{if } x \in \Q, \\
            0 & \text{otherwise}.
        \end{cases}
$$

Then if $g = -f$, we get $f + g = 0$ which is continuous everywhere, but $f$ and $g$ are both discontinuous everywhere. This is because $\Q$ and $\R \setminus \Q$ are both dense in $\R$, so given any $x_0 \in \R$, there exist a sequence $\set{q_n}_n$ of rational numbers and a sequence $\set{r_n}_n$ of irrational numbers which both converge to $x_0$. But

$$
f\p{q_n} = 1
\quad\text{and}\quad
f\p{r_n} = 0
\quad\text{for all } n \in \N,
$$

so by the sequence definition of continuity, $f$ is discontinuous everywhere.

</solution>

<example>

True or false: _If $f + g$ is continuous and $f$ is continuous, then $g$ is continuous._

</example>

<solution>

True. You can write

$$
g = \underbrace{\p{f + g}}_{\text{continuous}} + \underbrace{\p{-f}}_{\text{continuous}},
$$

so $g$ is a sum of continuous functions, hence continuous.

</solution>
