---
title: Week 8 Discussion Notes
date: "2021-11-21"
tags:
    - Taylor polynomial error bound
    - Taylor series
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Error Bound for Taylor Polynomial

Recall that the purpose of a Taylor polynomial is to approximate a function $f$ near some point $a$ (called the center of the polynomial). So naturally, we want to have a rough idea of how good the estimate is, which leads to the following result:

<theorem> (error bound)

Let $f\p{x}$ be differentiable (at least) $n+1$ times, and let $T_nf\p{x}$ be the $n$-th degree Taylor polynomial of $f$ centered at $a$. Then

$$
\abs{T_nf\p{x} - f\p{x}} \leq \frac{K}{\p{n+1}!} \abs{x - a}^{n+1},
$$

where $K$ is an upper bound for $\abs{f^{\p{n+1}}}$ between $x$ and $a$, i.e., on the interval $\br{a, x}$ or $\br{x, a}$, depending on whether $a \leq x$ or $x \leq a$.

</theorem>

<example>

Find $n$ such that

$$
\abs{\cos{0.1} - T_n\p{0.1}} \leq 10^{-7}
$$

where $T_n$ is the $n$-th degree Taylor polynomial of $\cos{x}$ centered at $a = 0$.

</example>

<solution>

To use the error bound, we just need to figure out what to use for $K$, meaning we need an upper bound for $\cos^{\p{n+1}}\p{x}$ on the interval $\br{0, 0.1}$. In this case, the derivatives of $\cos{x}$ are $\pm\sin{x}$ or $\pm\cos{x}$, so no matter what $n$ is, we know

$$
\abs{\cos^{\p{n+1}}\p{x}} \leq 1.
$$

Thus, $K = 1$ works (but anything larger than $1$ could also work, e.g., you could use $K = 10$ or $20$ if you wanted to). Plugging this into the error bound,

$$
\abs{\cos{0.1} - T_n\p{0.1}} \leq \frac{0.1^{n+1}}{\p{n+1}!}
$$

and we want this to be less than $10^{-7}$. From here, you just need to plug in values for $n$ until you get something that works:

$$
\begin{array}{rcr}
    \hline \\[-2ex]
    n && \dfrac{0.1^{n+1}}{\p{n+1}!} \\[2.5ex]\hline \\[-2ex]
    1 && 5.00 \times 10^{-3} \\
    2 && \approx 1.67 \times 10^{-4} \\
    3 && \approx 4.17 \times 10^{-6} \\
    4 && \approx 8.33 \times 10^{-8} \\[0.5ex]\hline
\end{array}
$$

So, the first $n$ that works is $\boxed{n = 4}$. (You can also use any bigger values of $n$.)

</solution>

<example>

Let $f\p{x} = \ln{x}$ and $T_nf\p{x}$ be the $n$-th degree Taylor polynomial of $f$ centered at $a = 1$. If $c > 1$, show that

$$
\abs{\ln{c} - T_n\p{c}} \leq \frac{\abs{c - 1}^{n+1}}{n+1}.
$$

</example>

<solution>

As you can guess, we're going to want to use the error bound again, so as before, we need to find an upper bound $K$ for $\abs{f^{\p{n+1}}}$ on the interval $\br{1, c}$. For the first couple derivatives, we get

$$
\begin{aligned}
    f'\p{x} &= \phantom{-}\frac{1}{x} \\
    f''\p{x} &= -\frac{1}{x^2} \\
    f'''\p{x} &= \phantom{-}\frac{2}{x^3} \\
    f^{\p{4}}\p{x} &= -\frac{3 \cdot 2}{x^4} \\
    &\,\,\,\vdots
\end{aligned}
$$

So, the pattern is

$$
f^{\p{n}}\p{x} = \p{-1}^{n-1} \frac{\p{n-1}!}{x^n}
\implies \abs{f^{\p{n+1}}\p{x}} = \frac{n!}{\abs{x}^{n+1}}.
$$

To find $K$, we need to find an upper bound for this function on the interval $\br{1, c}$. To get something as big as possible, we can try to make the denominator as small as possible on this interval, i.e., $x = 1$ should give us an upper bound:

$$
\abs{f^{\p{n+1}}\p{x}}
    \leq \abs{f^{\p{n+1}}\p{1}}
    = n!,
$$

so $K = n!$ works. Thus, the error bound gives

$$
\abs{\ln{c} - T_n\p{c}}
    \leq \frac{n!\abs{c - 1}^{n+1}}{\p{n+1}!}
    = \frac{\abs{c - 1}^{n+1}}{n + 1}.
$$

</solution>

## Taylor Series

<definition>

Let $f\p{x}$ be infinitely differentiable at $x = a$. Then its **Taylor series centered at $x = a$** is

$$
T\p{x} = \sum_{n=0}^\infty \frac{f^{\p{n}}\p{a}}{n!}\p{x - a}^n.
$$

</definition>

**Warning:** It's important to distinguish $f$ from its Taylor series. Here's an important fact:

1. Every infinitely differentiable function $f$ has a Taylor series (you can always make one using the formula in the definition).
2. _Not_ every function $f$ is represented by its Taylor series, i.e., the Taylor series might not always converge to $f$ itself.

<example>

Let

$$
f\p{x}
    =   \begin{cases}
            e^{-1/x^2}  & \text{if } x \neq 0, \\
            0           & \text{if } x = 0.
        \end{cases}
$$

This function has the property that $f^{\p{n}}\p{0} = 0$, which means that its Taylor series centered at $a = 0$ is

$$
Tf\p{x} = \sum_{n=0}^\infty \frac{0}{n!} x^n = 0,
$$

i.e., $Tf$ converges to the constant function $0$ everywhere. However, $f\p{x} \neq 0$ anywhere except $x = 0$.

$f\p{x}$ is an example of a function with a Taylor series that converges everywhere, but agrees with $f\p{x}$ at the center and nowhere else.

</example>

Despite this, Taylor series are still useful in a lot of cases. We already know a couple of functions that are represented by its Taylor series:

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

It's good to have these off the top of your head since they can be useful for calculating series.

<example>

Calculate

$$
1 - \frac{\pi^2}{4^2 \cdot 2!} + \frac{\pi^4}{4^4 \cdot 4!} - \frac{\pi^6}{4^6 \cdot 6!} + \cdots.
$$

</example>

<solution>

When given a series with its terms written out, you should try to write it in sigma notation:

$$
\sum_{n=0}^\infty \p{-1}^n \frac{\pi^{2n}}{4^{2n} \cdot \p{2n}!}.
$$

From here, you should hopefully recognize the Taylor series expansion for $\cos{x}$. If you stare at it, you'll see that its the Taylor series with $x = \frac{\pi}{2}$ plugged in:

$$
\begin{aligned}
    1 - \frac{\pi^2}{4^2 \cdot 2!} + \frac{\pi^4}{4^4 \cdot 4!} - \frac{\pi^6}{4^6 \cdot 6!} + \cdots
        &= \sum_{n=0}^\infty \p{-1}^n \frac{\pi^{2n}}{4^{2n} \cdot \p{2n}!} \\
        &= \sum_{n=0}^\infty \p{-1}^n \frac{\p{\frac{\pi}{4}}^{2n}}{\p{2n}!} \\
        &= \cos\p{\frac{\pi}{4}} \\
        &= \boxed{\frac{1}{\sqrt{2}}}.
\end{aligned}
$$

</solution>

<example>

Calculate

$$
\sum_{n=2}^\infty \frac{2^{n+3}}{n!}.
$$

</example>

<solution>

Hopefully, the power series expansion for $e^x$ stands out here. Let's try to rewrite the sum so it looks more like the series expansion:

$$
\sum_{n=2}^\infty \frac{2^{n+3}}{n!}
    = 8\sum_{n=2}^\infty \frac{2^n}{n!}.
$$

Now it's _almost_ like $e^2$, but the lower bound isn't correct, and this means that we're missing some terms. To make it more clear, we can write it like this:

$$
\begin{aligned}
    \sum_{n=2}^\infty \frac{2^n}{n!}
        &= \frac{2^2}{2!} + \frac{2^3}{3!} + \frac{2^4}{4!} + \cdots \\
    e^2
        = \sum_{n=0}^\infty \frac{2^n}{n!}
        &= 1 + 2 + \frac{2^2}{2!} + \frac{2^3}{3!} + \frac{2^4}{4!} + \cdots \\
        &= 1 + 2 + \sum_{n=2}^\infty \frac{2^n}{n!}.
\end{aligned}
$$

Thus, if we add the first two terms, then we get $e^2$:

$$
\begin{aligned}
    8\sum_{n=2}^\infty \frac{2^n}{n!}
        &= 8\p{\p{1 + 2} - \p{1 + 2} + \sum_{n=2}^\infty \frac{2^n}{n!}} \\
        &= 8\p{-3 + \p{1 + 2 \sum_{n=2}^\infty \frac{2^n}{n!}}} \\
        &= \boxed{8\p{e^2 - 3}}.
\end{aligned}
$$

</solution>
