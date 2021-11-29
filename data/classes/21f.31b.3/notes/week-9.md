---
title: Week 9 Discussion Notes
date: "2021-11-28"
tags:
    - functions and inverses
    - inverse trig functions
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Functions

A function $f$ always comes with a domain $D$, and the range of $f$ is determined by $D$. If the domain isn't specified, then it's usually taken to be the largest set where $f$ is defined.

<example>

If $f\p{x} = \frac{1}{x}$ and $D$ is not specified, then we assume $D = \set{x \in \R \mid x \neq 0}$.

</example>

<example>

Let $f\p{x} = x^2$.

-   $D = \R \implies R = \left[ 0, \infty \right)$
    <img src="{{ assetsFolder }}/images/x^2-1.png" height=200px, style="margin: 0;">

-   $D = \left[ 0, \infty \right) \implies R = \left[ 0, \infty \right)$
    <img src="{{ assetsFolder }}/images/x^2-2.png" height=200px, style="margin: 0;">

-   $D = \set{x \in \R \mid x > 2} \implies R = \p{4, \infty}$
    <img src="{{ assetsFolder }}/images/x^2-3.png" height=200px, style="margin: 0;">

</example>

## Inverses

### What is an Inverse?

Given a function $f$, we'd like to know if we can go "backwards" from $f$. This is useful if you need to solve something like $f\p{x} = y$; if we can "undo" $f$, then we automatically have the solution to the equation. This can be done if $f$ is invertible:

<definition>

Let $f$ have domain $D$ and range $R$. If $\exists g$ with domain $R$ and range $D$ such that

-   $f\p{g\p{x}} = x$ for all $x \in R$ and
-   $g\p{f\p{x}} = x$ for all $x \in D$,

then we say $f$ is **invertible** and we call $f^{-1} = g$ the **inverse** of $f$.

<img src="{{ assetsFolder }}/images/inverse.png" height=400px>

</definition>

### When is there an Inverse?

So when does $f$ have an inverse? Let's look at a situation where $f$ does _not_ have one.

<img src="{{ assetsFolder }}/images/no-inverse.png" height=400px>

$f$ doesn't have an inverse here because we can't go backwards from $y$ to get both $a$ and $b$. Indeed, any function $g$ with domain $R$ will map $y$ to either $a$ or $b$, but not both. The problem is that $f$ maps two different elements to the same thing, so if we prevent this, $f$ will have an inverse.

To prevent this, we need $f$ to map two different elements to two different things. More succinctly, $a \neq b \implies f\p{a} \neq f\p{b}$. If $f$ satisfies this, then we call $f$ one-to-one, but this isn't the only way to tell if $f$ is one-to-one:

<definition> one-to-one

Let $f$ have domain $D$, and suppose one of the following is true about $f$:

-   $a \neq b \implies f\p{a} \neq f\p{b}$ for any $a, b \in D$ or
-   $f\p{x} = y$ has exactly one solution for every $y \in R$ or
-   $f\p{a} = f\p{b} \implies a = b$ for any $a, b \in D$ or
-   $f$ passes the horizontal line test.

Then we say $f$ is **one-to-one** or **injective**.

</definition>

Notice that the domain is very important when determining whether $f$ is one-to-one or not.

<example>

Let $f\p{x} = x^2$.

-   If $D = \R$, then $f$ _is not_ one-to-one.
    <img src="{{ assetsFolder }}/images/not-injective.png" height=400px>

    $f\p{x} = 1$ has two solutions: $-1$ and $1$.

-   If $D = \left[ 0, \infty \right)$, then $f$ _is_ one-to-one.
    <img src="{{ assetsFolder }}/images/injective.png" height=400px>

    Since $f$ is one-to-one, it has an inverse, which is $f^{-1}\p{x} = \sqrt{x}$.

</example>

## Inverse Trigonometric Functions

### Definitions

In order to define inverse trig functions, we need to find domains so that they are one-to-one without changing their ranges. Because trig functions oscillate, there are a lot of intervals like these, so which one do we take? $0$ is a nice number, so we are going to look for a domain containing $0$ which doesn't change the range of our function.

Take a look at the graph of $\sin{x}$:

<img src="{{ assetsFolder }}/images/sinx.png" height=300px>

As you can see, $\br{-\frac{\pi}{2}, \frac{\pi}{2}}$ does the trick. On this interval, $\sin{x}$ passes the horizontal line test and it hits every point in its range, $\br{-1, 1}$.

Now look at $\cos{x}$:

<img src="{{ assetsFolder }}/images/cosx.png" height=300px>

There are two intervals in this case: $\br{-\pi, 0}$ and $\br{0, \pi}$. Hopefully, you agree that $\br{0, \pi}$ is "nicer" than the other one since it contains only positive numbers, so we're going to restrict $\cos{x}$ to $\br{0, \pi}$ when defining the inverse.

The last one we're going to look at is $\tan{x}$:

<img src="{{ assetsFolder }}/images/tanx.png" height=300px>

As in the case with $\cos{x}$, we have multiple choices, but I think it's clear that $\p{-\frac{\pi}{2}, \frac{\pi}{2}}$ is the "nicest" interval we can use.

We can play the same game with the rest of the trig functions, and what we get are the following inverse functions:

<definition id="inverse-trig"> inverse trigonometric functions

We define the inverses of trig functions via the following tables:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
    f\p{x} & f^{-1}\p{x} & \text{range} \\ \hline
    \sin{x} & \arcsin{x} & \br{-\frac{\pi}{2}, \frac{\pi}{2}} \\
    \csc{x} & \arccsc{x} & \left\lbrack -\frac{\pi}{2}, 0 \right\rparen \cup \left\lparen 0, \frac{\pi}{2} \right\rbrack \\
    \tan{x} & \arctan{x} & \p{-\frac{\pi}{2}, \frac{\pi}{2}}
\end{array}
$$

$$
\def\arraystretch{1.5}
\begin{array}{lll}
    f\p{x} & f^{-1}\p{x} & \text{range} \\ \hline
    \cos{x} & \arccos{x} & \br{0, \pi} \\
    \sec{x} & \arcsec{x} & \left\lbrack 0, \frac{\pi}{2} \right\rparen \cup \left\lparen \frac{\pi}{2}, \pi \right\rbrack \\
    \cot{x} & \arccot{x} & \p{0, \pi}
\end{array}
$$

</definition>

We get the range of $f^{-1}\p{x}$ by swapping the domain and range of $f\p{x}$.

<exercise>

Figure out the domains of the inverse trig functions.

</exercise>

One thing to notice is how I arranged the tables. If you look at the top table, the ranges are all $\br{-\frac{\pi}{2}, \frac{\pi}{2}}$ with some points removed, i.e., the range of $\arcsin{x}$ with some points removed. Similarly, the bottom table ranges are all the range of $\arccos{x}$ with some points removed.

The way I remember how to group them are as follows: if $\sin{x}$ is the "main" function (e.g., $\csc{x} = \frac{1}{\sin{x}}$), then the range is related to $\arcsin{x}$. Similarly, if $\cos{x}$ is the "main" function, then the range will be related to $\arccos{x}$.

### Derivatives

Now that we have the inverses, let's talk about their derivatives:

<theorem>

$$
\begin{aligned}
    &\deriv{}{x} \arcsin{x} &=& \phantom{-}\frac{1}{\sqrt{1 - x^2}} \\
    &\deriv{}{x} \arccos{x} &=& -\frac{1}{\sqrt{1 - x^2}} \\
    &\deriv{}{x} \arctan{x} &=& \phantom{-}\frac{1}{1 + x^2} \\
    &\deriv{}{x} \arcsec{x} &=& \phantom{-}\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    &\deriv{}{x} \arccsc{x} &=& -\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    &\deriv{}{x} \arccot{x} &=& -\frac{1}{1 + x^2} \\
\end{aligned}
$$

</theorem>

These are all done by implicit differentiation, and I'll show one of them:

<example>

Prove that $\deriv{}{x} \arcsec{x} = \frac{1}{\abs{x}\sqrt{x^2 - 1}}$.

</example>

<solution>

To start, I'm going to set $y = \arcsec{x}$. Since $\arcsec{x}$ and $\sec{x}$ are inverses, we can apply $\sec{\theta}$ to both sides to get $\sec{y} = x$. Now we can take derivatives on both sides to get

$$
\p{\sec{y}\tan{y}} y' = 1
\implies
y' = \frac{1}{\sec{y}\tan{y}}.
$$

To finish the problem, we need to get the right-hand side in terms of $x$. We already know that $\sec{y} = x$, so we need to handle $\tan{y}$. We can use the following trig identity to relate $\tan{y}$ to $\sec{y} = x$:

$$
\begin{aligned}
    \tan^2{y} + 1 = \sec^2{y} = x^2
    &\implies \tan^2{y} = x^2 - 1 \\
    &\implies \tan{y} = \pm\sqrt{x^2 - 1}.
\end{aligned}
$$

We need to figure out when the sign is positive and when the sign is negative, so we need to break it into two cases:

**Case 1:** $\sec{y} = x > 0$

Since $y = \arcsec{x}$, $y$ is in the range of $\arcsec{x}$, so $y$ is in the first or second quadrant.

<img src="{{ assetsFolder }}/images/arcsecx-range.png" height=300px>

Since $\sec{y} > 0$, this means that $\cos{y} > 0$, which means that $y$ must be in Quadrant I. In this quadrant, $\tan{y} > 0$, so $\tan{y} = \sqrt{x^2 - 1}$ in this case.

**Case 2:** $\sec{y} = x < 0$

We can use the same argument: in this case, $\cos{y} < 0$, so $y$ is in Quadrant II, which means that $\tan{y} < 0$. Thus, $\tan{y} = -\sqrt{x^2 - 1}$ in this case.

Now that we have established the signs of $\tan{y}$, we just need to plug it back into our original function. There are two cases, so we end up with a piecewise function:

$$
\begin{aligned}
    y'
        &= \frac{1}{x\tan{y}} \\
        &= \begin{cases}
             \dfrac{1}{\phantom{-}x\sqrt{x^2 - 1}} & \text{if } x > 0 \\[2ex]
             \dfrac{1}{-x\sqrt{x^2 - 1}} & \text{if } x < 0
           \end{cases} \\
        &= \frac{1}{\abs{x}\sqrt{x^2 - 1}}.
\end{aligned}
$$

The last equality comes from the fact that $\abs{x} = x$ if $x > 0$ and $-x$ if $x < 0$.

</solution>

## Integration by Parts

<theorem> integration by parts

If $u$ and $v$ are functions, then

$$
\int u \,\diff{v} = uv - \int v \,\diff{u}.
$$

</theorem>

Given an integral, you're free to choose $u$ and $\diff{v}$ however you like. However, the main issue after applying the formula is the integral term $\int v \,\diff{u}$, so before you start, try to think about what $v \,\diff{u}$ looks like.

The way I remember the formula is that you pick one thing to differentiate ($u$) and one thing to integrate ($\diff{v}$). Then you integrate first to get $uv$ and then differentiate after to get $v \,\diff{u}$.

### Examples

<example>

Calculate $\displaystyle \int x\sin{x} \,\diff{x}$.

</example>

<solution>

For this problem, you'll want to differentiate $x$ because it will just become $1$. If you integrate $x \,\diff{x}$, then you end up with $\frac{1}{2} x^2$, which is more complicated. So, we'll use $u = x$ and $\diff{v} = \sin{x} \,\diff{x}$, which gives us

$$
\diff{u} = \diff{x}
\quad\text{and}\quad
v = -\cos{x}.
$$

Thus,

$$
\begin{aligned}
    \int x\sin{x} \,\diff{x}
        &= -x\cos{x} - \int -\cos{x} \,\diff{x} \\
        &= -x\cos{x} + \int \cos{x} \,\diff{x} \\
        &= \boxed{-x\cos{x} + \sin{x} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \cos^{-1}{x} \,\diff{x}$.

</example>

<solution>

Even though there's only one term, we can still use integration by parts because $\cos^{-1}{x} = \cos^{-1}{x} \cdot 1$. Choose $\diff{v} = \cos^{-1}{x} \,\diff{x}$ isn't going to do anything for us because we don't know how to integrate it (yet), so we need to let $u = \cos^{-1}{x}$ and $\diff{v} = \diff{x}$ instead. Then

$$
\diff{u} = -\frac{\diff{x}}{\sqrt{1 - x^2}}
\quad\text{and}\quad
v = x.
$$

So if we integrate by parts, we get

$$
\begin{aligned}
    \int \cos^{-1}{x} \,\diff{x}
        &= x\cos^{-1}{x} - \int -\frac{x}{\sqrt{1 - x^2}} \,\diff{x} \\
        &= x\cos^{-1}{x} + \int \frac{x}{\sqrt{1 - x^2}} \,\diff{x} \\
        &= \boxed{x\cos^{-1}{x} - \sqrt{1 - x^2} + C}.
\end{aligned}
$$

(To calculate the integral, you can use $u = 1 - x^2$.)

</solution>

<example>

Calculate $\displaystyle \int \ln{x} \,\diff{x}$.

</example>

<solution>

Like the example before, we can let $u = \ln{x}$ and $\diff{v} = \diff{x}$. Then

$$
\diff{u} = \frac{\diff{x}}{x}
\quad\text{and}\quad
v = x,
$$

so we get

$$
\begin{aligned}
    \int \ln{x} \,\diff{x}
        &= x\ln{x} - \int x \cdot \frac{1}{x} \,\diff{x} \\
        &= x\ln{x} - \int \,\diff{x} \\
        &= \boxed{x\ln{x} - x + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{\ln{x}}{x^3} \,\diff{x}$.

</example>

<solution>

I want to differentiate $\ln{x}$ because it gives me $\frac{1}{x}$, which plays nicely with all the other terms. So, we want to choose $u = \ln{x}$ and $\diff{v} = \frac{1}{x^3} \,\diff{x}$, which gives

$$
\diff{u} = \frac{\diff{x}}{x}
\quad\text{and}\quad
v = -\frac{1}{2x^2}.
$$

Then the integral becomes

$$
\begin{aligned}
    \int \frac{\ln{x}}{x^3} \,\diff{x}
        &= -\frac{\ln{x}}{2x^2} - \int -\frac{\diff{x}}{2x^3} \\
        &= -\frac{\ln{x}}{2x^2} + \int \frac{\diff{x}}{2x^3} \\
        &= -\frac{\ln{x}}{2x^2} - \frac{1}{4x^2} + C \\
        &= \boxed{-\p{\frac{2\ln{x} - 1}{4x^2}} + C}.
\end{aligned}
$$

</solution>
