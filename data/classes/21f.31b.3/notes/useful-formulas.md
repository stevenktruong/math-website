---
title: Useful Formulas
date: "2021-12-03"
publish: yes
---

# Useful Formulas

## Table of Contents

# Trigonometry

## Identities

### Pythagorean Identities

$$
\begin{gathered}
    \cos^2{\theta} + \sin^2{\theta} = 1 \\
    \tan^2{\theta} + 1 = \sec^2{\theta} \\
    \cot^2{\theta} + 1 = \csc^2{\theta}
\end{gathered}
$$

### Angle-Sum Identities

$$
\begin{aligned}
    \sin\p{\alpha + \beta} &= \sin{\alpha}\cos{\beta} + \sin{\beta}\cos{\alpha} \\
    \cos\p{\alpha + \beta} &= \cos{\alpha}\cos{\beta} - \sin{\alpha}\sin{\beta}
\end{aligned}
$$

From these, you can derive the double-angle identities by plugging in $\alpha = \beta = \theta$:

$$
\begin{aligned}
    \sin{2\theta} &= 2\sin{\theta}\cos{\theta} \\
    \cos{2\theta}
        &= \cos^2{\theta} - \sin^2{\theta} \\
        &= 2\cos^2{\theta} - 1 \\
        &= 1 - 2\sin^2{\theta}.
\end{aligned}
$$

If you solve for $\cos^2{\theta}$ and $\sin^2{\theta}$, respectively, you get

$$
\begin{aligned}
    \cos^2{\theta} &= \frac{1 + \cos{2\theta}}{2} \\
    \sin^2{\theta} &= \frac{1 - \cos{2\theta}}{2}.
\end{aligned}
$$

You can also derive the [sum-to-product identities](https://openstax.org/books/precalculus/pages/7-4-sum-to-product-and-product-to-sum-formulas) from these, but I'm not sure if you'll need them.

## Integrals

Note that a lot of the following derivatives and integrals look really similar. You really only need to remember the ones for $\sin{x}$, $\tan{x}$, and $\sec{x}$, and the ones for $\cos{x}$, $\cot{x}$, and $\csc{x}$ will look almost exactly the same, except you have a minus sign in front.

$$
\begin{aligned}
    \int \tan{x} \,\diff{x} &= \phantom{-}\ln{\abs{\sec{x}}} + C \\
    \int \cot{x} \,\diff{x} &= -\ln{\abs{\csc{x}}} + C \\
    \int \sec{x} \,\diff{x} &= \phantom{-}\ln{\abs{\sec{x} + \tan{x}}} + C \\
    \int \csc{x} \,\diff{x} &= -\ln{\abs{\csc{x} + \cot{x}}} + C
\end{aligned}
$$

## Inverse Functions

### Derivatives

$$
\begin{aligned}
    \deriv{}{x} \arcsin{x} &= \phantom{-}\frac{1}{\sqrt{1 - x^2}} \\
    \deriv{}{x} \arctan{x} &= \phantom{-}\frac{1}{1 + x^2} \\
    \deriv{}{x} \arcsec{x} &= \phantom{-}\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    \deriv{}{x} \arccos{x} &= -\frac{1}{\sqrt{1 - x^2}} \\
    \deriv{}{x} \arccot{x} &= -\frac{1}{1 + x^2} \\
    \deriv{}{x} \arccsc{x} &= -\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
\end{aligned}
$$

### Integrals

Any time you have a formula for a derivative, you automatically get a formula for an integral by going backwards:

$$
\begin{aligned}
    \int \frac{1}{\sqrt{1 - x^2}} \,\diff{x} &= \arcsin{x} + C \\
    \int \frac{1}{1 + x^2} \,\diff{x} &= \arctan{x} + C \\
    \int \frac{1}{\abs{x}\sqrt{x^2 - 1}} \,\diff{x} &= \arcsec{x} + C
\end{aligned}
$$

# Series

## Convergence Tests

<theorem> divergence test

Let $\set{a_n}$ be a sequence. If $\displaystyle \lim_{n\to\infty} a_n$ does not exist or if it exists and is not $0$, then $\displaystyle \sum_{n=0}^\infty a_n$ diverges.

</theorem>

<theorem> direct comparison test

Suppose $0 \leq a_n \leq b_n$ for $n \geq M$ for some $M > 0$. Then:

-   If $\displaystyle \sum_{n=0}^\infty a_n$ diverges, then $\displaystyle \sum_{n=0}^\infty b_n$ diverges as well.
-   If $\displaystyle \sum_{n=0}^\infty b_n$ converges, then $\displaystyle \sum_{n=0}^\infty a_n$ converges as well.

</theorem>

<theorem> limit comparison test

</theorem>

<theorem> ratio test

Let $\displaystyle L = \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}$.

-   If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
-   If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
-   If $L = 1$, then the ratio test is inconclusive.

</theorem>

<theorem> root test

Let $\displaystyle L = \lim_{n\to\infty} \abs{a_n}^{1/n}$.

-   If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
-   If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
-   If $L = 1$, then the root test is inconclusive.

</theorem>

<theorem> alternating series test

Let $\set{a_n}$ be a sequence of the form $a_n = \p{-1}^n b_n$, where $b_n \geq 0$, is decreasing, and $\displaystyle\lim_{n\to\infty} b_n = 0$. Then $\displaystyle \sum_{n=0}^\infty a_n$ converges.

</theorem>

## Common Power Series Expansions

$$
\begin{array}{rcllll}
    \hline \\[-2ex]
    f\p{x}
        & =
        & T\p{x} \\[1ex] \hline \\[-2ex]
    \displaystyle\frac{1}{1 - x}
        & =
        & \displaystyle\sum_{n=0}^\infty x^n
        & =
        & \displaystyle 1 + x + x^2 + x^3 + \cdots
        & \text{for } x \in \p{-1, 1} \\[3ex]
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
        & \text{for } x \in \R \\[3ex]\hline
\end{array}
$$

## Finding Power Series Expansions

Usually, you will want to start from one of the common power series expansions above and use the following operations to get new ones:

1. Multiplying by $Cx^k$
2. Plugging in $Cx^k$
3. Differentiating
4. Integrating

**Important:** If you differentiate or integrate a power series, the endpoints of the interval of convergence stays the same, _but you have to check whether the new series converges or diverges at the endpoints._

# Taylor Polynomials

The $n$-th degree Taylor polynomial of a function $f\p{x}$ centered at $a$ is

$$
T_nf\p{x} = \sum_{k=0}^n \frac{f^{\p{k}\p{a}}}{k!} \p{x - a}^k.
$$

## Error Bound

<theorem> error bound

Let $f\p{x}$ be differentiable (at least) $n+1$ times, and let $T_nf\p{x}$ be the $n$-th degree Taylor polynomial of $f$ centered at $a$. Then

$$
\abs{T_nf\p{x} - f\p{x}} \leq \frac{K}{\p{n+1}!} \abs{x - a}^{n+1},
$$

where $K$ is an upper bound for $\abs{f^{\p{n+1}}}$ between $x$ and $a$, i.e., on the interval $\br{a, x}$ or $\br{x, a}$, depending on whether $a \leq x$ or $x \leq a$.

</theorem>
