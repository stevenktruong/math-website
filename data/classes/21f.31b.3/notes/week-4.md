---
title: Week 4 Discussion Notes
date: "2021-10-23"
tags:
    - series
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Infinite Series

<definition>

The **infinite sum** of a sequence $\p{a_n}_n$ of numbers is defined to be the limit of the partial sums:

$$
\sum_{n=1}^\infty a_n = \lim_{N\to\infty} \sum_{n=1}^N a_n.
$$

</definition>

For most of this class, we'll be concerned with whether an infinite series converges or diverges, i.e., whether the sequence of partial sums $\p{\sum_{n=1}^N a_n}_N$ has a limit or not. There are a handful of special cases where we _can_ calculate the actual sum, though:

### Geometric Series

Here's one formula for the geometric series:

<theorem>

If $\abs{r} < 1$, then $\sum_{n=0}^\infty r^n$ exists and

$$
\sum_{n=0}^\infty r^n
    = 1 + r + r^2 + \cdots
    = \frac{1}{1 - r}.
$$

</theorem>

There are more formulas that are more general, but in my opinion this is the easiest to remember, and if you remember this one, you can apply it to any geometric series:

<example>

Calculate $\displaystyle \sum_{n=3}^\infty 5 \cdot \frac{2^{3n+2}}{3^{2n+3}}$.

</example>

<solution>

To use the formula, we need to rewrite the sum into a form that lets us apply it easily.

Using the basic properties of exponentials, we get

$$
\begin{aligned}
    2^{3n+2}
        &= \p{2^3}^n \cdot 2^2
         = 8^n \cdot 2^2 \\
    3^{2n+3}
        &= \p{3^2}^n \cdot 3^3
         = 9^n \cdot 3^3,
\end{aligned}
$$

so the sum becomes

$$
\begin{aligned}
    \sum_{n=3}^\infty 5 \cdot \frac{2^{3n+2}}{3^{2n+3}}
        &= \sum_{n=3}^\infty 5 \cdot \frac{8^n \cdot 2^2}{9^n \cdot 3^3} \\
        &= \frac{5 \cdot 2^2}{3^3} \sum_{n=3}^\infty \p{\frac{8}{9}}^n \\
        &= \frac{5 \cdot 2^2}{3^3} \br{\p{\frac{8}{9}}^3 + \p{\frac{8}{9}}^4 + \p{\frac{8}{9}}^5 + \cdots} \\
        &= \frac{5 \cdot 2^2}{3^3} \p{\frac{8}{9}}^3 \br{1 + \frac{8}{9} + \p{\frac{8}{9}}^2 + \cdots} \\
        &= \frac{5 \cdot 2^2}{3^3} \p{\frac{2^3}{3^2}}^3 \frac{1}{1 - \frac{8}{9}} \\
        &= \frac{5 \cdot 2^2}{3^3} \frac{2^9}{3^6} \frac{1}{\frac{1}{9}} \\
        &= \frac{5 \cdot 2^{11}}{3^9} \cdot 3^2 \\
        &= \boxed{\frac{5 \cdot 2^{11}}{3^7}}.
\end{aligned}
$$

</solution>

### Telescoping Series

The other main type of series where you can calculate sums are ones that **telescope**, meaning sums where all but finitely many terms cancel out.

<example>

Calculate $\displaystyle \sum_{n=3}^\infty \frac{5}{4n^2 - 9}$.

</example>

<solution>

Notice that

$$
\frac{1}{2n - 3} - \frac{1}{2n + 3}
    = \frac{6}{4n^2 - 9}.
$$

So, we get

$$
\begin{aligned}
    \sum_{n=3}^\infty \frac{5}{4n^2 - 9}
        &= \sum_{n=3}^\infty \frac{5}{6} \cdot \frac{6}{4n^2 - 9} \\
        &= \frac{5}{6} \sum_{n=3}^\infty \p{\frac{1}{2n - 3} - \frac{1}{2n + 3}}.
\end{aligned}
$$

From here, it's always a good idea to look at the partial sums and write out some terms to figure out what cancels out:

$$
\begin{aligned}
    \sum_{n=3}^N \p{\frac{1}{2n - 3} - \frac{1}{2n + 3}}
        &= \frac{1}{3} + \frac{1}{5} + \frac{1}{7} + \cancel{\frac{1}{9}} + \bcancel{\frac{1}{11}} + \cdots + \cancel{\frac{1}{2N - 3}} \\
            &\qquad - \p{\cancel{\frac{1}{9}} + \bcancel{\frac{1}{11}} + \cdots + \cancel{\frac{1}{2N - 3}} + \frac{1}{2N - 1} + \frac{1}{2N + 1} + \frac{1}{2N + 3}} \\
        &= \frac{1}{3} + \frac{1}{5} + \frac{1}{7} - \frac{1}{2N - 1} - \frac{1}{2N + 1} - \frac{1}{2N + 3}.
\end{aligned}
$$

So, because the infinite sum is (defined to be) the limit of the partial sums,

$$
\begin{aligned}
    \sum_{n=3}^\infty \frac{5}{4n^2 - 9}
        &= \frac{5}{6} \lim_{N\to\infty} \sum_{n=3}^N \p{\frac{1}{2n - 3} - \frac{1}{2n + 3}} \\
        &= \frac{5}{6} \lim_{N\to\infty} \sum_{n=3}^N \p{\frac{1}{3} + \frac{1}{5} + \frac{1}{7} - \frac{1}{2N - 1} - \frac{1}{2N + 1} - \frac{1}{2N + 3}} \\
        &= \boxed{\frac{5}{6}\p{\frac{1}{3} + \frac{1}{5} + \frac{1}{7}}}.
\end{aligned}
$$

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \ln\p{\frac{n + 1}{n}}$ converges or diverges.

</example>

<solution>

If you use the properties of logarithms, you get

$$
\ln\p{\frac{n+1}{n}} = \ln\p{n+1} - \ln{n}.
$$

So the partial sums look like

$$
\begin{aligned}
    \sum_{n=1}^N \ln\p{\frac{n + 1}{n}}
        &= \sum_{n=1}^N \p{\ln\p{n+1} - \ln{n}} \\
        &= \cancel{\ln{2}} + \bcancel{\ln{3}} + \cdots + \cancel{\ln{N}} \\
            &\quad - \p{\ln{1} + \cancel{\ln{2}} + \bcancel{\ln{3}} + \cdots + \cancel{\ln{N}} + \ln\p{N+1}} \\
        &= \ln\p{N + 1}
\end{aligned}
$$

(since $\ln{1} = 0$). So

$$
\lim_{N\to\infty} \sum_{n=1}^N \ln\p{\frac{n+1}{n}}
    = \lim_{N\to\infty} \ln\p{N + 1}
    = \infty,
$$

which means the infinite sum diverges.

</solution>

<example>

Calculate $\displaystyle \sum_{n=1}^\infty \br{\sin^2\p{\frac{\pi}{2n}} - \sin^2\p{\frac{\pi}{2n + 2}}}$.

</example>

<solution>

Like before, we just need to look at the partial sums:

$$
\begin{aligned}
    \sum_{n=1}^N \br{\sin^2\p{\frac{\pi}{2n}} - \sin^2\p{\frac{\pi}{2n + 2}}}
        &= \sin^2\p{\frac{\pi}{2}} + \cancel{\sin^2\p{\frac{\pi}{4}}} + \bcancel{\sin^2\p{\frac{\pi}{6}}} + \cdots + \cancel{\sin^2\p{\frac{\pi}{2N}}} \\
            &\quad - \br{\cancel{\sin^2\p{\frac{\pi}{4}}} + \bcancel{\sin^2\p{\frac{\pi}{6}}} + \cdots + \cancel{\sin^2\p{\frac{\pi}{2N}}} + \sin^2\p{\frac{\pi}{2N+2}}} \\
        &= 1 - \sin^2\p{\frac{\pi}{2N+2}}.
\end{aligned}
$$

So, when you take limits, you get

$$
\lim_{N\to\infty} \sum_{n=1}^N \br{\sin^2\p{\frac{\pi}{2n}} - \sin^2\p{\frac{\pi}{2n + 2}}}
    = \lim_{N\to\infty} \p{1 - \sin^2\p{\frac{\pi}{2N+2}}}
    = \boxed{1}.
$$

</solution>

## Other Problems

<example>

For this example, we're going to use the fact that

$$
\lim_{\theta\to0} \frac{\sin\theta}{\theta} = 1.
$$

For this limit, what matters is that what's inside the sine and in the denominator are the same, and that they both go to $0$. So for example,

$$
\lim_{x\to0} \frac{\sin{2x}}{x} \neq 1
$$

since $2x$ and $x$ are not the same. Instead, if you multiply and divide by $2$, you get

$$
\lim_{x\to0} \frac{\sin{2x}}{x}
    = \lim_{x\to0} 2 \cdot \frac{\sin{2x}}{2x}
    = 2.
$$

With this in mind, without using L'Hôpital's rule, calculate the limit

$$
\lim_{x\to1} \frac{\sin\p{x^2 - 4x + 3}}{x - 1}.
$$

</example>

<solution>

We can factor $x^2 - 4x + 3 = \p{x - 1}\p{x - 3}$, so we end up with

$$
\lim_{x\to1} \frac{\sin\p{x^2 - 4x + 3}}{x - 1}
    = \lim_{x\to1} \frac{\sin\p{\p{x - 1}\p{x - 3}}}{x - 1}.
$$

Finally, we just need to make sure what's inside the sine and what's in the denominator are the same, so we can multiply and divide by $x - 3$ to get

$$
\lim_{x\to1} \frac{\sin\p{\p{x - 1}\p{x - 3}}}{\p{x - 1}\p{x - 3}} \cdot \p{x - 3}
    = \boxed{-2}.
$$

</solution>

<example>

Calculate $\displaystyle \int \tan^2{x} \,\diff{x}$.

</example>

<solution>

If you use the identity $\tan^2{x} + 1 = \sec^2{x}$, then this becomes

$$
\int \tan^2{x} \,\diff{x}
    = \int \sec^2{x} - 1 \,\diff{x}
    = \boxed{\tan{x} - x + C}.
$$

</solution>
