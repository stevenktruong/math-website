---
title: Week 10 Discussion Notes
date: "2020-12-08"
tags:
    - power series
    - Taylor series
publish: yes
---

# Week 10 Discussion Notes

## Table of Contents

## Power Series

Here is probably the most important thing you learn in this class:

<definition>

Let $\displaystyle F\p{x} = \sum_{n=0}^\infty a_n\p{x - c}^n$. $F$ is called a **power series** and we call $c$ the **center** of $F$.

</definition>

Power series are great because they have a bunch of nice properties:

<proposition> properties of power series

Let $\displaystyle F\p{x} = \sum_{n=0}^\infty a_n\p{x - c}^n$ be a power series.

1. There exists a number $R \in \br{0, \infty}$ called the **radius of convergence of $F$** such that if $\abs{x - c} < R$, then $F$ converges absolutely and if $\abs{x - c} > R$, then $F$ diverges. If $R = 0$, then the series only converges at its center and if $R = \infty$, then $F$ converges absolutely everywhere.
2. The coefficients can be expressed in terms of the derivatives of $F$:

    $$
    a_n = \frac{F^{\p{n}}\p{c}}{n!}
    $$

3. You can differentiate term-by-term, i.e., you can pretend the sum isn't there and take the derivative like normal:

    $$
    F'\p{x} = \sum_{n=1}^\infty na_n\p{x - c}^{n-1}
    $$

    $F'$ is also a power series and it has the same radius as $F$.

4. You can also integrate term-by-term:

    $$
    \int F\p{x} \,\diff{x} = C + \sum_{n=0}^\infty \frac{a_n}{n+1} \p{x - c}^{n+1}
    $$

    Like $F'$, the antiderivative of $F$ is a power series with the same radius of convergence as $F$.

</proposition>

The reason why power series are so important are because they're used for Taylor series:

## Taylor Series

### Taylor Polynomials

If you look in the previous section, given a power series $F$, we know its derivatives right away from the coefficients. So, it's natural to wonder what happens if you go the other way, which is what Taylor series are all about.

<definition>

Let $f$ be a function with $n$ derivatives. Then the **$n$-th Taylor polynomial** centered at $x = c$ for $f$ is

$$
\begin{aligned}
T_n\p{x}
    &= f\p{c} + f'\p{c}\p{x - c} + \frac{f''\p{c}}{2}\p{x - c}^2 + \cdots + \frac{f^{\p{n}}\p{c}}{n!}\p{x - c}^n \\
    &= \sum_{k=0}^n \frac{f^{\p{k}}\p{c}}{k!}\p{x - c}^k.
\end{aligned}
$$

If $c = 0$, then the Taylor polynomial is also called the **Maclaurin polynomial**.

</definition>

If $n = 1$, then you get $T_1\p{x} = f\p{c} + f'\p{c}\p{x - c}$, which is the tangent line to $f$ at $x = c$, which is the linear function that best approximates $f$ near $x = c$. Building off of that, we can interpret $T_n\p{x}$ as the $n$-th degree polynomial that best approximates $f$ near $x = c$.

With this interpretation, a natural question is how good is this approximation? This is answered with the following error bound:

<theorem id="error-bound">

Suppose $f^{\p{n+1}}$ exists and is continuous. Then if $\abs{f^{\p{n+1}}\p{u}} \leq K$ for all $u$ between $c$ and $x$, then

$$
\abs{T_n\p{x} - f\p{x}} \leq \frac{K}{\p{n + 1}!}\abs{x - c}^{n+1}.
$$

</theorem>

Notice that $K$ depends on $x$, i.e., if you change $x$, you have to recalculate $K$. Also notice that if $x$ is really far away from $c$, then $\abs{x - c}^{n+1}$ becomes very large, and if $x$ is really close to $c$, then $\abs{x - c}^{n+1}$ becomes very small, which aligns with the interpretation that $T_n\p{x}$ best approximates $f$ near $x = c$.

Here's a helpful mnemonic to help you remember the error bound formula: if you have $T_n\p{x}$, then the "next term" in the polynomial would look like

$$
\frac{f^{\p{n+1}}\p{c}}{\p{n + 1}!}\p{x - c}^{n+1}.
$$

Put everything in absolute values and replace $\abs{f^{\p{n+1}}\p{c}}$ with the upper bound $K$, and that gives you

$$
\frac{\abs{f^{\p{n+1}}\p{c}}}{\p{n + 1}!}\abs{x - c}^{n+1}
\rightsquigarrow \frac{K}{\p{n + 1}!}\abs{x - c}^{n+1}.
$$

### Taylor Series

Taylor polynomials already look like power series, except Taylor polynomials are finite sums. Once you turn it into an infinite sum, you get a Taylor series:

<definition>

Let $f$ be an infinitely differentiable function. Then the **Taylor series** of $f$ at $x = c$ is

$$
T\p{x} = \sum_{n=0}^\infty \frac{f^{\p{n}}\p{c}}{n!}\p{x - c}^n.
$$

If $c = 0$, then $T\p{x}$ is also called the **Maclaurin series** of $f$.

</definition>

You would hope that because Taylor polynomials are good approximations of $f$ that Taylor series should be an "infinitely good" approximation of $f$, i.e., the Taylor series of $f$ converges to $f$. Unfortunately, that isn't always the case.

<example>

Let

$$
f\p{x}
    =
        \begin{cases}
            e^{-1/x^2}  & \text{if } x \neq 0, \\
            0           & \text{if } x = 0.
        \end{cases}
$$

Then $f$ has the (unfortunate) property that $f^{\p{n}}\p{0} = 0$ for all $n \geq 1$. This means that the Taylor series of $f$ is given by $T\p{x} = 0$, which means that $T\p{x}$ only converges to $f$ at the center $x = 0$.

</example>

On the other hand, there are still a lot of functions whose Taylor series _do_ converge to their associated function.

<proposition> common Taylor series expansions

The following functions have Taylor series which converge to them on the specified interval:

$$
\begin{array}{rcllll}
    f\p{x}
        & =
        & T\p{x} \\[1ex] \hline \\[-1ex]
    e^x & =
        & \displaystyle\sum_{n=0}^\infty \frac{x^n}{n!}
        & =
        & \displaystyle 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
        & \text{for } x \in \R \\[3ex]
    \sin{x}
        & =
        & \displaystyle\sum_{n=0}^\infty \p{-1}^n\frac{x^{2n+1}}{\p{2n+1}!}
        & =
        & \displaystyle x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
        & \text{for } x \in \R \\[3ex]
    \cos{x}
        & =
        & \displaystyle\sum_{n=0}^\infty \p{-1}^n\frac{x^{2n}}{\p{2n}!}
        & =
        & \displaystyle 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
        & \text{for } x \in \R \\[3ex]
    \displaystyle\frac{1}{1 - x}
        & =
        & \displaystyle\sum_{n=0}^\infty x^n
        & =
        & \displaystyle 1 + x + x^2 + x^3 + \cdots
        & \text{for } x \in \p{-1, 1}
\end{array}
$$

Here, $n! = 1 \cdot 2 \cdot 3 \cdots \p{n-1} \cdot n$ with $0! = 1$.

</proposition>

From these, you can derive a lot of other Taylor series as well.

<example>

Find the Maclaurin series for $\arctan{x}$.

</example>

<solution>

We can start with the geometric series:

$$
\frac{1}{1 - x} = \sum_{n=0}^\infty x^n.
$$

If we replace $x$ with $-x^2$, then we get

$$
\frac{1}{1 + x^2} = \sum_{n=0}^\infty \p{-1}^n x^{2n}.
$$

Integrating on both sides,

$$
\arctan{x} = C + \sum_{n=0}^\infty \p{-1}^n\frac{x^{2n+1}}{2n + 1}.
$$

To solve for the constant, we can plug in $0$ on both sides which gives $C = 0$, so

$$
\arctan{x} = \sum_{n=0}^\infty \p{-1}^n \frac{x^{2n+1}}{2n + 1}
\quad\text{for } \abs{x} < 1.
$$

</solution>

## Examples

<example>

Calculate $\displaystyle \sum_{n=1}^\infty nx^n$.

</example>

<solution>

We can start with the geometric series and differentiate term-by-term:

$$
\frac{1}{1 - x} = \sum_{n=0}^\infty x^n \implies \frac{1}{\p{1 - x}^2} = \sum_{n=1}^\infty nx^{n-1}.
$$

We're really close--we're just off by a factor $x$, which we can just multiply in:

$$
\sum_{n=1}^\infty nx^n = \boxed{\frac{x}{\p{1 - x}^2}}.
$$

</solution>

<example>

Find the interval of convergence of $\displaystyle \sum_{n=1}^\infty \frac{3^nx^n}{n^3}$.

</example>

<solution>

When calculating intervals of convergence, you should always start with the root test or ratio test. In this problem, I'm going to use the ratio test:

$$
\lim_{n\to\infty} \abs{\frac{3^{n+1}x^{n+1}}{\p{n+1}^3} \cdot \frac{n^3}{3^nx^n}}
    = \lim_{n\to\infty} \abs{3x} \cdot \p{\frac{n}{n + 1}}^3
    = \abs{3x}.
$$

Thus, the series converges if $\abs{3x} < 1 \iff \abs{x} < \frac{1}{3}$ and diverges if $\abs{3x} > 1 \iff \abs{x} > \frac{1}{3}$.

After calculating the radius of convergence, you always want to check the endpoints next:

$x = \frac{1}{3}$: Substituting in, the series becomes

$$
\sum_{n=1}^\infty \frac{3^n\frac{1}{3^n}}{n^3} = \sum_{n=1}^\infty \frac{1}{n^3},
$$

which converges by $p$-series.

$x = -\frac{1}{3}$: Similarly,

$$
\sum_{n=1}^\infty \frac{3^n\frac{\p{-1}^n}{3^n}}{n^3} = \sum_{n=1}^\infty \frac{\p{-1}^n}{n^3},
$$

which converges absolutely by $p$-series (or if you like, it converges by the alternating series test).

So, overall, the interval of convergence is

$$
\boxed{\br{-\frac{1}{3}, \frac{1}{3}}}.
$$

</solution>

<example>

Find $n$ such that $\abs{e - T_n\p{1}} < 10^{-8}$, where $T_n$ is the $n$-th Maclaurin polynomial for $f\p{x} = e^x$.

</example>

<solution>

We want to use the [error bound](#error-bound). The first step would be to figure out what $K$ is in this case: $f^{\p{n+1}}\p{u} = e^x$. Since $e^x$ is an increasing function, it is bounded at the largest value of $x$ possible, which is, in this case, is at $x = 1$, so we can use $K = e^1 = e$. The theorem then tells us that

$$
\abs{e - T_n\p{1}} \leq \frac{e\abs{1}^{n+1}}{\p{n + 1}!} = \frac{e}{\p{n + 1}!} < 10^{-8}.
$$

To finish off the problem, we need to solve for $n$ that makes the last inequality true. You can do this by plugging in numbers into your calculator (e.g., try $n = 1, 2, 3, \ldots$ since $n$ is an integer). You should end up finding that the first $n$ that works is

$$
\boxed{n = 11}.
$$

</solution>

<example>

Calculate $\displaystyle 1 - \frac{\pi^2}{4^2 \cdot 2!} + \frac{\pi^4}{4^4 \cdot 4!} - \frac{\pi^6}{4^6 \cdot 6!} + \cdots$.

</example>

<solution>

Whenever you see a problem like, you always want to figure out the pattern. After some trial and error, you should end up with

$$
\sum_{n=0}^\infty \p{-1}^n \frac{\pi^{2n}}{4^{2n}\p{2n}!}.
$$

The $2n$'s should hopefully be familiar to you--compare the sum to

$$
\cos{x} = \sum_{n=0}^\infty \p{-1}^n \frac{x^{2n}}{\p{2n}!}.
$$

If you close enough, you'll see that the sum is just the power series of $\cos{x}$ evaluated at $x = \frac{\pi}{4}$, i.e.,

$$
\sum_{n=0}^\infty \p{-1}^n \frac{\pi^{2n}}{4^{2n}\p{2n}!}
    = \cos\frac{\pi}{4}
    = \boxed{\frac{\sqrt{2}}{2}}.
$$

</solution>

<example>

Calculate $\displaystyle \sum_{n=2}^\infty \frac{2^{n+3}}{n!}$.

</example>

<solution>

Like the previous problem, we're going to want to use a Taylor series to calculate this. The $n!$ should alert you to $e^x$, which has the expansion

$$
e^x = \sum_{n=0}^\infty \frac{x^n}{n!}.
$$

It looks close, but we need to fiddle with our series first to get it into the right form. For example, the index is off.

$$
\begin{aligned}
   \sum_{n=2}^\infty \frac{2^{n+3}}{n!}
        = 2^3 \sum_{n=2}^\infty \frac{2^n}{n!}
       &= 8\p{\sum_{n=0}^\infty \frac{2^n}{n!} - \frac{2^0}{0!} - \frac{2^1}{1!}} \\
       &= 8\p{e^2 - 1 - 2} \\
       &= \boxed{8\p{e^2 - 3}}.
\end{aligned}
$$

</solution>
