---
title: Week 6 Discussion Notes
date: "2022-05-09"
tags:
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Continuous Random Variables

A **continuous random variable** $X$ is a random variable with a **probability density function (pdf)**, that is, a non-negative function $f_X$ such that

$$
\int_{-\infty}^\infty f_X\p{x} \,\diff{x} = 1
\quad\text{and}\quad
\P\p{a \leq X \leq b} = \int_a^b f_X\p{x} \,\diff{x}.
$$

We can include or exclude the endpoints and get the same number, since the integral of any function over a single point is $0$. Compare with discrete random variables:

$$
\begin{array}{rll}
    & \text{discrete} & \text{continuous} \\[1ex]\hline\\[-2ex]
    \text{distribution} & \P\p{X = x} = f\p{x} \text{ (pmf)} & \P\p{a \leq X \leq b} = \int_a^b f\p{x} \,\diff{x} \text{ (pdf)} \\[1ex]
    \E\br{u\p{X}} & \sum_{x \in S_X} u\p{x} f\p{x} & \int_{-\infty}^\infty u\p{x}f\p{x} \,\diff{x} \\[1ex]\hline
\end{array}
$$

One thing that _all_ random variables in common, though, is the definition of the **cumulative density function (cdf)**:

$$
F\p{x} = \P\p{X \leq x}
$$

A cdf is essentially equivalent to a pdf. By this, I mean that if you know one, then you can calculate the other: for a continuous random variable,

$$
F\p{x} = \int_{-\infty}^x f\p{x} \,\diff{x}
\quad\text{and}\quad f\p{x} = F'\p{x}
$$

and for a discrete random variable taking values in $\N$,

$$
F\p{x} = \sum_{\substack{k \in S_X \\ k \leq x}} f\p{x}
\quad\text{and}\quad f\p{x} = F\p{x} - F\p{x-1}.
$$

## Examples

<example>

1. Calculate
    $$
    \sum_{n=2}^\infty \frac{e^{\p{2n+1}t}}{\p{2n+1}!}.
    $$
2. Calculate
    $$
    \int_1^\infty xe^{-x} \,\diff{x}.
    $$

</example>

<solution>

1. First, recall that

    $$
    \begin{aligned}
        e^z &= 1 + \frac{z}{1!} + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots \\
        e^{-z} &= 1 - \frac{z}{1!} + \frac{z^2}{2!} - \frac{z^3}{3!} + \cdots
    \end{aligned}
    $$

    So if we subtract them (and divide by $2$), we get just the odd terms:

    $$
    \frac{e^z - e^{-z}}{2}
        = \frac{z}{1!} + \frac{z^3}{3!} + \cdots
        = \sum_{n=0}^\infty \frac{z^{2n+1}}{\p{2n+1}!}.
    $$

    To compute our sum, we need to plug in $z = e^t$ to get

    $$
    \begin{aligned}
        \frac{e^{e^t} - e^{-e^t}}{2}
            &= \sum_{n=0}^\infty \frac{\p{e^t}^{2n+1}}{\p{2n+1}!} \\
            &= \sum_{n=0}^\infty \frac{e^{\p{2n+1}t}}{\p{2n+1}!} \\
            &= \frac{e^t}{1!} + \frac{e^{3t}}{3!} + \sum_{n=2}^\infty \frac{e^{\p{2n+1}t}}{\p{2n+1}!}.
    \end{aligned}
    $$

    Rearranging,

    $$
    \sum_{n=2}^\infty \frac{e^{\p{2n+1}t}}{\p{2n+1}!}
        = \boxed{\frac{e^{e^t} - e^{-e^t}}{2} - \frac{e^t}{1!} - \frac{e^{3t}}{3!}}.
    $$

2. Recall integration by parts:

    $$
    \int u \,\diff{v} = uv - \int v \,\diff{u}
    $$

    Pick the parts

    $$
    u = x,
    \quad \diff{v} = e^{-x} \,\diff{x}
    \implies \diff{u} = \diff{x}, \quad v = -e^{-x},
    $$

    which gives

    $$
    \int xe^{-x} \,\diff{x}
        = -xe^{-x} + \int e^{-x} \,\diff{x}
        = -xe^{-x} - e^{-x} + C.
    $$

    Applying the bounds and using the fact that $\lim_{x\to\infty} \frac{x}{e^x} = 0$, we get

    $$
    \int_1^\infty xe^{-x} \,\diff{x}
        = 0 - \p{-e^{-1} - e^{-1}}
        = \boxed{\frac{2}{e}}.
    $$

</solution>

<example> (3.1-20)

Let $X$ have pdf

$$
f\p{x} =
    \begin{cases}
        x,              & \text{if } 0 \leq x < 1, \\
        \frac{c}{x^3},  & \text{if } 1 \leq x < \infty, \\
        0,              & \text{elsewhere}.
    \end{cases}
$$

1. Find $c$ so that $f$ is a pdf.
2. Find the mean of $X$ (if it exists).
3. Find the variance of $X$ (if it exists).

</example>

<solution>

1. For $f$ to be a pdf, we need to make sure it integrates to $1$:

    $$
    \begin{aligned}
        1
            &= \int_{-\infty}^\infty f\p{x} \,\diff{x} \\
            &= \int_0^1 x \,\diff{x} + \int_1^\infty \frac{c}{x^3} \,\diff{x} \\
            &= \frac{1}{2} + \frac{1}{2c}.
    \end{aligned}
    $$

    Solving, we get

    $$
    \boxed{c = 1}.
    $$

2. Like before, we need to split up the integral:

    $$
    \begin{aligned}
        \E\br{X}
            &= \int_0^1 x^2 \,\diff{x} + \int_1^\infty \frac{1}{x^2} \,\diff{x} \\
            &= \frac{1}{3} + 1 \\
            &= \frac{4}{3}.
    \end{aligned}
    $$

3. To calculate $\Var{X}$, we can just (try to) calculate $\E{X^2}$:

    $$
    \E\br{X^2} = \int_0^1 x^3 \,\diff{x} + \int_1^\infty \frac{1}{x} \,\diff{x}
    $$

    But the second integral doesn't converge, so the variance doesn't exist.

</solution>

<example>

Let $X$ be uniformly distributed on $\br{0, 2}$. Find the pdf of $Y = X^2$.

</example>

<solution>

The general strategy is as follows:

1. Find the support of $Y$ (i.e., the possible values of $Y$).
2. Compute the cdf (not pdf) of $Y$, and then differentiate to get the pdf.

Since $X$ ranges over $\br{0, 2}$, when we square $X$, the possible values range over $\br{0, 4}$. Now we look for the cdf:

$$
\begin{aligned}
    F_Y\p{y}
        &= \P\p{Y \leq y} \\
        &= \P\p{X^2 \leq y} \\
        &= \P\p{X \leq \sqrt{y}}
            && \p{X \geq 0,\text{ so we can ignore negative values}} \\
        &= \int_0^{\sqrt{y}} \frac{1}{2} \,\diff{x} \\
        &= \frac{\sqrt{y}}{2}.
\end{aligned}
$$

Thus,

$$
f_Y\p{y}
    = F'\p{y}
    = \boxed{\frac{1}{4\sqrt{y}},\quad 0 \leq y \leq 4}.
$$

</solution>

<example> (3.4-11)

Assume $X \sim \operatorname{Exp}\p{\lambda}$ is such that $\E\br{X} = 5$. If $Y = \max\set{X, 3}$, calculate $\E\br{Y}$.

</example>

<solution>

First, we need to figure out $\lambda$. The mean of an exponential distribution is $\frac{1}{\lambda}$, so

$$
\frac{1}{\lambda} = \E\br{X} = 5
\implies \lambda = \frac{1}{5}.
$$

Next, to calculate the expectation, we can view $Y = u\p{X}$, where $u\p{x} = \max\set{x, 3}$. Thus,

$$
\begin{aligned}
    \E\br{Y}
        &= \E\br{u\p{X}} \\
        &= \int_{-\infty}^\infty u\p{x} f\p{x} \,\diff{x} \\
        &= \int_0^3 3f\p{x} \,\diff{x} + \int_3^\infty xf\p{x} \,\diff{x} \\
        &= \int_0^3 \frac{3}{5} e^{-\frac{x}{5}} \,\diff{x} + \int_3^\infty \frac{x}{5} e^{-\frac{x}{5}} \,\diff{x} \\
        &= \boxed{3 + 5e^{-\frac{3}{5}}}.
\end{aligned}
$$

</solution>

<example> (3.4-21)

Assume $X$ has the pdf

$$
f\p{x} = \frac{3x^2}{120^3} e^{-\p{\frac{x}{120}}^3} \quad\text{for } 0 < x < \infty.
$$

Find $\E\br{X}$.

</example>

<solution>

Using the change of variables $u = \p{\frac{x}{120}}^3$, we get

$$
\diff{u} = \frac{3x^2}{120^3} \,\diff{x}
\quad\text{and}\quad x = 120u^{\frac{1}{3}}.
$$

Plugging these into the integral for the expectation,

$$
\begin{aligned}
    \E{\br{X}}
        &= \int_{-\infty}^\infty xf\p{x} \,\diff{x} \\
        &= \int_0^\infty x \cdot \frac{3x^2}{120^3} e^{-\p{\frac{x}{120}}^3} \,\diff{x} \\
        &= \int_0^\infty 120u^{\frac{1}{3}} e^{-u} \,\diff{u} \\
        &= 120 \int_0^\infty u^{\frac{4}{3}-1} e^{-u} \,\diff{u} \\
        &= \boxed{120 \Gamma\p{\frac{4}{3}}}.
\end{aligned}
$$

Recall that the **Gamma function** is

$$
\Gamma\p{z} = \int_0^\infty x^{z-1} e^{-x} \,\diff{x}.
$$

</solution>
