---
title: Week 9 Discussion Notes
date: "2021-03-01"
tags:
    - continuity
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Homework Comments

### 11.11

I saw a lot of people write something like this:

> By Theorem 11.4, every sequence has an increasing subsequence.

Here is the statement of Theorem 11.4:

> Every sequence $\set{s_n}_n$ has a monotonic subsequence.

Notice that the theorem only says that every sequence has a **monotonic** sequence, which is why the statement is false. It's possible for a sequence to have no increasing subsequences, e.g., if $s_n = \frac{1}{n}$, then every subsequence of $\set{s_n}_n$ is decreasing. However, in this problem, you can show that the monotone sequence you get does actually increase.

### 12.2

I saw the following (incorrect) statements pop up a bunch of times:

> $\displaystyle\limsup_{n\to\infty} s_n = 0 \implies \limsup_{n\to\infty} \,\abs{s_n} = 0$

Basically, this boils down to the fact that it's possible for

$$
\abs{\sup\,\set{x \mid x \in S}}
    \neq \sup\,\set{\abs{x} \mid x \in S}.
$$

For example, if $S = \br{-1, 0}$, then $\sup{S} = 0$, but $\set{\abs{x} \mid x \in S} = \br{0, 1}$ has supremum $1$. As for a counterexample for this specific statement, the sequence $s_n = -1 + \p{-1}^n$ works. This is the sequence that alternates between $0$ and $-2$, so

$$
\limsup_{n\to\infty} s_n = 0
\quad\text{but}\quad
\limsup_{n\to\infty} \,\abs{s_n} = 2.
$$

I also saw something like:

> $\displaystyle\limsup_{n\to\infty} \,\abs{s_n} = -\liminf_{n\to\infty} \,\abs{-s_n}$

The following statement _is_ true:

$$
\limsup_{n\to\infty} t_n = -\liminf_{n\to\infty} \,\p{-t_n}.
$$

In this problem, we have $t_n = \abs{s_n}$, so substituting in,

$$
\limsup_{n\to\infty} \,\abs{s_n} = -\liminf_{n\to\infty} \,\p{-\abs{s_n}},
$$

i.e., the negative sign goes _outside_ of the absolute values. As a counterexample, the sequence $s_n = 1$ works:

$$
\limsup_{n\to\infty} \,\abs{s_n} = 1
\quad\text{but}\quad
-\liminf_{n\to\infty} \,\abs{-s_n} = -1.
$$

## Continuous Functions

Since things don't seem to be too hard this week, I decided to do a fun example.

<example>

Let $\func{f}{\R}{\R}$ be a continuous function such that $f\p{1} = 1$ such that $f\p{1} = 1$ and $f\p{nx} = nf\p{x}$ for any $n \in \Z$ and $x \in \R$. Then $f\p{x} = x$ for all $x \in \R$.

</example>

<solution>

The idea here is that it's hard to show directly for any $x \in \R$ that this equality is true, since it's hard to connect irrational numbers to the conditions given to you. Instead, however, we can show that it's true for $x \in \Q$, and by a [proposition from last week](../week-8#continuity-density), it follows that $f\p{x} = x$ everywhere.

First, if we set $x = 1$, then for $n \in \Z$, we get

$$
f\p{n}
    = f\p{n \cdot 1}
    = nf\p{1}
    = n.
$$

Next, we can let $x = \frac{1}{n}$ to get

$$
f\p{1}
    = f\p{n \cdot \frac{1}{n}}
    = nf\p{\frac{1}{n}}
\implies f\p{\frac{1}{n}} = \frac{1}{n}.
$$

Finally, if $m, n \in \N$, then

$$
f\p{\frac{m}{n}}
    = mf\p{\frac{1}{n}}
    = \frac{m}{n}.
$$

Thus, $f\p{q} = q$ for all $q \in \Q$, so by density, we have $f\p{x} = x$ for all $x \in \R$.

</solution>

### Properties

<definition>

Let $\func{f}{D}{\R}$ be a function. Then the **image** of a set $A \subseteq D$ under $f$ is $f\p{A} = \set{f\p{x} \mid x \in A}$.

</definition>

Basically, the image tells you all the points that $f$ attains when you restrict the domain to $A$.

<example>

Let $f\p{x} = x^2$. Then

-   $f\p{\R} = \pco{0, \infty}$
-   $f\p{\set{-1, 0, 1, 2, 3}} = \set{0, 1, 4, 9}$

</example>

Next are two very important theorems about continuous functions:

<theorem> extreme value theorem

If $\func{f}{\br{a,b}}{\R}$ is continuous, then $f$ is bounded and there exist $s_0, s_1 \in \br{a, b}$ such that $f\p{s_0} \leq f\p{x} \leq f\p{s_1}$ for all $x \in \br{a, b}$.

</theorem>

In short, this tells you that on a closed and bounded interval, $f$ is bounded and attains both its minimum and maximum. (In general, we say that the image of a [compact](https://en.wikipedia.org/wiki/Compact_space) set under a continuous function is compact, but this is beyond the scope of this class.)

<theorem> intermediate value theorem

Let $I \subseteq \R$ be an interval. If $\func{f}{I}{\R}$ is a continuous function, then $f\p{I}$ is an interval.

</theorem>

This basically tells you that continuous functions can't "jump" on an interval. (In general, the continuous image of a [connected](https://en.wikipedia.org/wiki/Connected_space) set is connected, but like compactness, this is beyond our class.)

<example> (18.5)

Let $f$ and $g$ be continuous functions on $\br{a, b}$ such that $f\p{a} \geq g\p{a}$ and $f\p{b} \leq g\p{b}$. Prove $f\p{x_0} = g\p{x_0}$ for at least one $x_0 \in \br{a, b}$.

</example>

<solution>

For problems like these, you usually want to use the intermediate value theorem. That only involves a single function, though, so you need to turn $f$ and $g$ into a single function. Notice that

$$
f\p{x} = g\p{x}
\iff f\p{x} - g\p{x} = 0,
$$

so we'll set $h\p{x} = f\p{x} - g\p{x}$. Then

$$
h\p{a} = f\p{a} - g\p{a} \geq 0
\quad\text{and}\quad
h\p{b} = f\p{b} - g\p{b} \leq 0.
$$

Thus, by the intermediate value theorem, $h$ attains every value in the interval $\br{h\p{b}, h\p{a}}$, which contains $0$. In other words, there exists $x_0 \in \br{a, b}$ such that $h\p{x_0} = 0$, which means $f\p{x_0} = g\p{x_0}$.

</solution>

<example> (18.8)

Suppose $f$ is a real-valued continuous function on $\R$ and $f\p{a}f\p{b} < 0$ for some $a, b \in \R$. Prove there exists $x$ between $a$ and $b$ such that $f\p{x} = 0$.

</example>

<solution> (Hint)

$f\p{a}f\p{b} < 0$ tells you that $a \neq b$ and $f\p{a}, f\p{b}$ have different signs (you should prove this). From there, you should break up the problem into different cases based on the signs of $f\p{a}, f\p{b}$ and apply the intermediate value theorem.

</solution>

## Uniform Continuity

<definition>

Let $\func{f}{D}{\R}$. Then $f$ is **uniformly continuous** on $D$ if for all $\epsilon > 0$, there exists $\delta > 0$ such that $\abs{f\p{x} - f\p{y}} < \epsilon$ whenever $x, y \in D$ satisfy $\abs{x - y} < \delta$.

</definition>

<remark>

Compare this with our usual definition of continuity:

> For all $x \in D$ and $\epsilon > 0$, there exists $\delta > 0$ such that $\abs{f\p{x} - f\p{y}} < \epsilon$ when $y \in D$ satisfies $\abs{x - y} < \delta$.

Notice that $\delta$ may depend on $x$, i.e., given a different $x \in D$, you may have to pick a different $\delta$ for regular continuity. However, for uniform continuity, you can find a $\delta$ that works for _all_ values of $x \in D$.

This concept is useful when we need to bound a lot of values of $f$ at the same time, e.g., when finding inequalities for integrals or sums relating to continuous functions.

</remark>

<example>

Show that $x^3$ is uniformly continuous on $\br{0, 1}$ with the $\epsilon$-$\delta$ definition.

</example>

<solution>

Let $\epsilon > 0$ and $x, y \in \br{0, 1}$. Then

$$
\begin{aligned}
    \abs{x^3 - y^3}
        &= \abs{x - y}\abs{x^2 + xy + y^2}
            && \p{\text{difference of cubes}} \\
        &\leq \abs{x - y}\p{\abs{x}^2 + \abs{x}\abs{y} + \abs{y}^2}
            && \p{\text{triangle inequality}} \\
        &\leq 3\abs{x - y},
\end{aligned}
$$

since $\abs{x}, \abs{y} \leq 1$. Thus, let $\delta = \frac{\epsilon}{3}$ (which only depends on $\epsilon$ and not the actual values of $x$ and $y$) so that if $\abs{x - y} < \delta$, then

$$
\abs{x^3 - y^3}
    \leq 3\abs{x - y}
    < 3\delta
    = \epsilon,
$$

so $x^3$ is uniformly continuous on $\br{0, 1}$.

</solution>

## True or False

<example>

True or false: _If $f$ and $g$ are uniformly continuous on $\R$, then so is $fg$._

</example>

<solution>

False. If $f\p{x} = g\p{x} = x$, then $f\p{x}g\p{x} = x^2$, which is not uniformly continuous on $\R$.

</solution>

<example>

True or false: _If $f$ and $g$ are uniformly continuous on $\R$, then so is $f + g$._

</example>

<solution>

True. Let $\epsilon > 0$ and notice that by the triangle inequality,

$$
\begin{aligned}
    \abs{\p{f + g}\p{x} - \p{f + g}\p{y}}
        &= \abs{\p{f\p{x} - f\p{y}} + \p{g\p{x} - g\p{y}}} \\
        &\leq \abs{f\p{x} - f\p{y}} + \abs{g\p{x} - g\p{y}}.
\end{aligned}
$$

Since $f$ is uniformly continuous on $\R$, there exists $\delta_1 > 0$ such that if $\abs{x - y} < \delta_1$, then $\abs{f\p{x} - f\p{y}} < \frac{\epsilon}{2}$. Similarly, because $g$ is uniformly continuous on $\R$, there exists $\delta_2 > 0$ so that if $\abs{x - y} < \delta_2$, then $\abs{g\p{x} - g\p{y}} < \frac{\epsilon}{2}$.

Let $\delta = \min\,\set{\delta_1, \delta_2}$, so if $\abs{x - y} < \delta$, then $\abs{x - y} < \delta_1$ and $\abs{x - y} < \delta_2$, and so

$$
\abs{\p{f + g}\p{x} - \p{f + g}\p{y}}
    \leq \abs{f\p{x} - f\p{y}} + \abs{g\p{x} - g\p{y}}
    < \frac{\epsilon}{2} + \frac{\epsilon}{2}
    = \epsilon,
$$

so $f + g$ is uniformly continuous on $\R$.

</solution>
