---
title: Week 6 Discussion Notes
date: "2020-11-10"
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Partial Fractions

### Overview

You usually want to use partial fractions when you want to integrate a rational function, i.e., a function of the form

$$
\frac{p\p{x}}{q\p{x}},
$$

where $p$ and $q$ are polynomials. For example, the result of partial fractions looks something like

$$
\frac{1}{\p{x - 1}\p{x - 2}} = \frac{1}{x - 2} - \frac{1}{x - 1}.
$$

As you can imagine, the left side is hard to integrate, but the right side is a lot easier to integrate.

### Process

When setting up the partial fractions, you want to look at the factors of $q$. Here're the rules for the setup:

**Linear Factors**

For every factor of $q$ of the form $\p{x + a}^n$, you need to include the following sum:

$$
\frac{a_1}{x + a} + \frac{a_2}{\p{x + a}^2} + \cdots + \frac{a_n}{\p{x + a}^n}.
$$

**Quadratic Factors**

For factors of the form $\p{x^2 + ax + b}^n$, you need

$$
\frac{a_1x + b_1}{x^2 + ax + b} + \frac{a_2x + b_2}{\p{x^2 + ax + b}^2} + \cdots + \frac{a_nx + b_n}{\p{x^2 + ax + b}^n}.
$$

Once you have the setup, you need to solve for all the constants.

### Examples

<example>

Calculate $\displaystyle \int \frac{9}{\p{x + 1}\p{x^2 - 2x + 6}} \,\diff{x}$.

</example>

<solution>

First, we're gonna use partial fractions. Our setup will look like:

$$
\begin{aligned}
    \frac{9}{\p{x + 1}\p{x^2 - 2x + 6}}
        &= \frac{A}{x + 1} + \frac{Bx + C}{x^2 - 2x + 6} \\
    \implies
    9
        &= A\p{x^2 - 2x + 6} + \p{Bx + C}\p{x + 1}.
\end{aligned}
$$

This equality is true **as functions**, i.e., no matter what you plug in for $x$, the equality is still true. That's going to be our main strategy for solving for these coefficients.

$$
\begin{aligned}
x = -1
    &\implies 9 = A\p{\p{-1}^2 - 2\p{-1} + 6} + \p{B\p{-1} + C}\p{-1 + 1} \\
    &\phantom{\implies} 9 = 9A \\
    &\phantom{\implies} \colorbox{red}{$A = 1$} \\
x = 0
    &\implies 9 = 6A + C \\
    &\phantom{\implies} 9 = 6 + C \\
    &\phantom{\implies} \colorbox{red}{$C = 3$} \\
x = 1
    &\implies 9 = A\p{1 - 2 + 6} + \p{B + C}\p{1 + 1} \\
    &\phantom{\implies} 9 = 5A + 2B + 2C \\
    &\phantom{\implies} 9 = 5 + 2B + 6 \\
    &\phantom{\implies} -2 = B \\
    &\phantom{\implies} \colorbox{red}{$B = -1$}
\end{aligned}
$$

So, our partial fraction decomposition tells us that

$$
\int \frac{9}{\p{x + 1}\p{x^2 - 2x + 6}} \,\diff{x} = \int \frac{1}{x + 1} + \frac{-x + 3}{x^2 - 2x + 6} \,\diff{x}.
$$

We know how to integrate the first term:

$$
\int \frac{\diff{x}}{x + 1}
    = \ln\abs{x + 1} + C,
$$

so we need to figure out how to do the second one.

Our goal is to use the $u$-substitution $u = x^2 - 2x + 6 \implies \diff{u} = 2x - 2 \,\diff{x}$. In order to be able to use it, we need to get $2x - 2$ into the numerator somehow. What we're going to do is force the situation that we want by multiplying by $1$ and adding by $0$:

$$
\begin{aligned}
    \int \frac{-x + 3}{x^2 - 2x + 6} \,\diff{x}
        &= \int \frac{-2}{-2} \cdot \frac{-x + 3}{x^2 - 2x + 6} \,\diff{x} \\
        &= -\frac{1}{2} \int \frac{2x - 6}{x^2 - 2x + 6} \,\diff{x} \\
        &= -\frac{1}{2} \int \frac{2x + \p{-2 + 2} - 6}{x^2 - 2x + 6} \,\diff{x} \\
        &= -\frac{1}{2} \int \frac{2x - 2}{x^2 - 2x + 6} + \frac{-4}{x^2 - 2x + 6} \,\diff{x} \\
        &= -\frac{1}{2} \int \frac{2x - 2}{x^2 - 2x + 6} \,\diff{x} - \frac{1}{2} \int \frac{-4}{x^2 - 2x + 6} \,\diff{x} \\
        &= -\frac{1}{2} \int \frac{2x - 2}{x^2 - 2x + 6} \,\diff{x} + \int \frac{2}{x^2 - 2x + 6} \,\diff{x}.
\end{aligned}
$$

We can integrate the first term with the $u$-substitution specified earlier:

$$
\begin{aligned}
-\frac{1}{2} \int \frac{2x - 2}{x^2 - 2x + 6} \,\diff{x}
     = -\frac{1}{2} \int \frac{\diff{u}}{u}
    &= -\frac{1}{2} \ln\abs{u} + C \\
    &= -\frac{1}{2} \ln\abs{x^2 - 2x + 6} + C.
\end{aligned}
$$

So, to finish the problem, we have to integrate the last term. If we complete the square, we get $x^2 - 2x + 6 = \p{x - 1}^2 + 5$, so we can use the trig sub

$$
x - 1 = \sqrt{5} \tan\theta
\implies
\diff{x} = \sqrt{5} \sec^2\theta \,\diff\theta.
$$

This turns the integral into

$$
\begin{aligned}
    \int \frac{2}{x^2 - 2x + 6} \,\diff{x}
         = \int \frac{2}{\p{x - 1}^2 + 5} \,\diff{x}
        &= \int \frac{2\sqrt{5} \sec^2\theta}{\p{\sqrt{5}\tan\theta}^2 + 5} \,\diff\theta \\
        &= \int \frac{2\sqrt{5} \sec^2\theta}{5\tan^2\theta + 5} \,\diff\theta \\
        &= \int \frac{2\sqrt{5} \sec^2\theta}{5\p{\tan^2\theta + 1}} \,\diff\theta \\
        &= \int \frac{2\sqrt{5} \sec^2\theta}{5\sec^2\theta} \,\diff\theta \\
        &= \frac{2}{\sqrt{5}} \int \diff\theta \\
        &= \frac{2}{\sqrt{5}} \theta + C \\
        &= \frac{2}{\sqrt{5}} \tan^{-1}\p{\frac{x - 1}{\sqrt{5}}} + C.
\end{aligned}
$$

Putting everything together, our final answer is

$$
\int \frac{9}{\p{x + 1}\p{x^2 - 2x + 6}} \,\diff{x}
    = \boxed{\ln\abs{x + 1} - \frac{1}{2} \ln\abs{x^2 - 2x + 6} + \frac{2}{\sqrt{5}} \tan^{-1}\p{\frac{x - 1}{\sqrt{5}}} + C}.
$$

</solution>

## Improper Integrals

### Introduction

You're (hopefully) familiar with the Riemann integral: for a function continuous on an interval $\br{a, b}$, we can calculate its definite integral on this interval:

$$
\int_a^b f\p{x} \,\diff{x}.
$$

The idea of **improper integrals** is to look at integrals where $f$ may not be defined on all of $\br{a, b}$, or integrals where $b = \infty$:

<definition>

###### Definition

Let $f\p{x}$ be a function. If $f$ is not defined at $a$, then we have the following **improper integral** of $f$:

$$
\int_a^b f\p{x} \,\diff{x} = \lim_{t \to a^+} \int_t^b f\p{x} \,\diff{x}.
$$

Similarly, if $f$ is not defined at $b$, then

$$
\int_a^b f\p{x} \,\diff{x} = \lim_{t \to b^-} \int_a^t f\p{x} \,\diff{x}.
$$

If $b = \infty$, we also define

$$
\int_a^\infty f\p{x} \,\diff{x} = \lim_{t \to \infty} \int_a^t f\p{x} \,\diff{x}.
$$

If the limit of one of these integrals exists and is a real number, then we say that integral **converges**. Otherwise, in the case that the limit does not exist (including the case where the limit is $\infty$), we say that the integral **diverges**.

</definition>

In most cases, you won't be able to calculate an improper integral directly, but you'll be able to figure out if it converges or diverges (which is what the next couple weeks of the class will involve).

Here are the main examples of convergent and divergent integrals (which can be calculated directly):

### Examples

<example>

($p$-integrals) Let $a > 0$. Determine the values of $p$ such that the improper integrals

$$
\int_0^a \frac{\diff{x}}{x^p}
\quad\text{and}\quad
\int_a^\infty \frac{\diff{x}}{x^p} \,\diff{x}
$$

converge or diverge.

</example>

<solution>

For these integrals, we can evaluate them and take limits directly. If $p = 1$, then

$$
\int_s^t \frac{\diff{x}}{x}
    = \ln\abs{x} \Big\rvert_s^t
    = \ln\abs{t} - \ln\abs{s}.
$$

Since

$$
\lim_{t\to\infty} \ln\abs{t} = \infty
\quad\text{and}\quad
\lim_{t\to0^+} \ln\abs{t} = -\infty,
$$

we get

$$
\begin{aligned}
    \int_0^a \frac{\diff{x}}{x}
        &= \lim_{t\to0^+} \p{\ln\abs{a} - \ln\abs{t}} = \infty \\
    \int_a^\infty \frac{\diff{x}}{x}
        &= \lim_{t\to0^+} \p{\ln\abs{t} - \ln\abs{a}} = \infty,
\end{aligned}
$$

so both integrals diverge in this case. If $p \neq 1$, then

$$
\int_s^t \frac{1}{x^p} \,\diff{x}
    = \left. \frac{x^{1-p}}{1 - p} \right\rvert_s^t
    = \frac{t^{1-p}}{1 - p} - \frac{s^{1-p}}{1 - p}.
$$

If $p > 1$, then the exponent of $t^{1-p}$ is negative, so

$$
\begin{aligned}
    \int_0^a \frac{\diff{x}}{x^p}
        &= \lim_{t\to0^-} \p{\frac{a^{1-p}}{1 - p} - \frac{t^{1-p}}{1 - p}} = \infty \\
    \int_a^\infty \frac{\diff{x}}{x^p}
        &= \lim_{t\to\infty} \p{\frac{t^{1-p}}{1 - p} - \frac{a^{1-p}}{1 - p}} = -\frac{a^{1-p}}{1 - p}.
\end{aligned}
$$

Similarly, if $p < 1$, then $t^{1-p}$ has a positive exponent, so

$$
\begin{aligned}
    \int_0^a \frac{\diff{x}}{x^p}
        &= \lim_{t\to0^-} \p{\frac{a^{1-p}}{1 - p} - \frac{t^{1-p}}{1 - p}} = \frac{a^{1-p}}{1 - p} \\
    \int_a^\infty \frac{\diff{x}}{x^p}
        &= \lim_{t\to\infty} \p{\frac{t^{1-p}}{1 - p} - \frac{a^{1-p}}{1 - p}} = \infty.
\end{aligned}
$$

In summary,

$$
\begin{aligned}
    \int_0^a \frac{\diff{x}}{x^p}
        &=
            \begin{cases}
                \text{converges} & \text{if } p < 1, \\
                \text{diverges} & \text{if } p \geq 1
            \end{cases} \\
    \int_a^\infty \frac{\diff{x}}{x^p}
        &=
            \begin{cases}
                \text{diverges} & \text{if } p \leq 1, \\
                \text{converges} & \text{if } p > 1.
            \end{cases}
\end{aligned}
$$

</solution>

### Pitfalls

A pretty common error when determining convergence and divergence is that you forget to check where your function is not defined. For example, the following calculation is **wrong**:

$$
\int_{-1}^1 \frac{\diff{x}}{x^2} = \left. -\frac{1}{x} \right\rvert_{-1}^1 = -1 - 1 = -2,
$$

but we know from $p$-integrals that this should diverge, so this calculation is wrong. The reason why is because this is actually an improper integral, so we should have split it up to begin with:

$$
\int_{-1}^1 \frac{\diff{x}}{x^2}
    = \lim_{t\to0^-} \int_{-1}^0 \frac{\diff{x}}{x^2} + \lim_{t\to0^+} \int_t^1 \frac{\diff{x}}{x^2},
$$

and both integrals diverge, so the original integral must also diverge.

### Direct Comparison

As a quick preview, we're going to quickly talk about direct comparison.

<theorem>

###### Theorem (direct comparison)

Suppose $f\p{x}$ and $g\p{x}$ are functions which satisfy $0 \leq f\p{x} \leq g\p{x}$. Then

$$
\int_a^b g\p{x} \,\diff{x} \text{ converges}
    \implies \int_a^b f\p{x} \,\diff{x} \text{ converges}
$$

and

$$
\int_a^b f\p{x} \,\diff{x} \text{ diverges}
    \implies \int_a^b f\p{x} \,\diff{x} \text{ diverges}.
$$

This includes the case when $b = \infty$.

</theorem>

The picture looks something like this:

<img src="{{ assetsFolder }}/images/direct-comparison.png" width=600px>

Hopefully, it's intuitive to you why this is true: if the area under $g$ is finite, then the area under $f$ should be smaller, so it should also be finite. Similarly, if $f$ has infinite area, then $g$ has a larger area, so it should have infinite area as well.

The assumption that everything is non-negative is important so that we can "squeeze" $f$ with $g$. Consider something like this:

<img src="{{ assetsFolder }}/images/direct-comparison-counter.png" width=600px>

The integrals $\int_a^\infty f\p{x} \,\diff{x}$ and $\int_a^\infty g\p{x} \,\diff{x}$ in this case have no relation to each other, so direct comparison does not apply in this scenario.
