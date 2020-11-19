---
title: Week 7 Discussion Notes
date: "2020-11-19"
publish: yes
---

# Week 7 Discussion Notes

## Table of Contents

## Direct Comparison

As a reminder, here's the statement of direct comparison:

<theorem>

###### Theorem (direct comparison test for integrals)

Suppose $0 \leq g\p{x} \leq f\p{x}$. Then for $-\infty \leq a < b \leq \infty$ (i.e., the upper and lower bounds are allowed to be infinite):

-   If $\displaystyle \int_a^b g\p{x} \,\diff{x}$ diverges, then $\displaystyle \int_a^b f\p{x} \,\diff{x}$ diverges as well.
-   If $\displaystyle \int_a^b f\p{x} \,\diff{x}$ converges, then $\displaystyle \int_a^b g\p{x} \,\diff{x}$ converges as well.

</theorem>

See [Week 6 Notes](week-6#direct-comparison) for some pictures and intuition for the theorem. So now that we have a good conceptual handle on comparison, how do we use it?

When approaching a problem, you should try to have an idea of whether an integral will converge or diverge (I'll talk about this more during the examples):

-   If you want to show that $\int_a^b f\p{x} \,\diff{x}$ converges, you need to find a larger function $g\p{x}$.
-   If you want to show that $\int_a^b f\p{x} \,\diff{x}$ diverges, you need to find a smaller (but still non-negative) function $g\p{x}$.

There are two main strategies for getting this inequalities:

### Modifying $f\p{x}$

Here, you'll want to modify $f\p{x}$ to get a slightly bigger or slightly smaller function. Usually, $f\p{x}$ is a fraction, so if both the numerator and denominator are non-negative, then:

-   To get a bigger function, you can make the numerator bigger or the denominator smaller.
-   To get a smaller function, you can make the numerator smaller or the denominator bigger.

<example> (8.7.74)

Determine whether $\displaystyle \int_1^\infty \frac{\diff{x}}{\p{x + x^2}^{1/3}}$ converges or not.

</example>

<solution>

First, we need to "feel out" the integral. When $x$ is really big, then $x + x^2 \approx x^2$, since the higher power terms will dominate. So, intuitively, we have

$$
\frac{1}{\p{x + x^2}^{1/3}} \approx \frac{1}{\p{x^2}^{1/3}} = \frac{1}{x^{2/3}},
$$

which should diverge. So, we need to find a function smaller than the integrand, which can do by making the denominator bigger. The integral is on the interval where $x \geq 1$, so we get $x^2 \geq x$ (by multiplying by $x$ on both sides of the first inequality), which means

$$
\p{x + x^2}^{1/3} \leq \p{x^2 + x^2}^{1/3} = \p{2x^2}^{1/3} = 2^{1/3} x^{2/3}.
$$

By flipping things over, we get the inequality

$$
0 \leq \frac{1}{2^{1/3} x^{2/3}} \leq \frac{1}{\p{x + x^2}^{1/3}}.
$$

By $p$-integrals, $\int_1^\infty \frac{\diff{x}}{2^{1/3} x^{2/3}}$ diverges, so by direct comparison, so does $\int_1^\infty \frac{\diff{x}}{\p{x + x^2}^{1/3}}$.

</solution>

<example> (8.7.75)

Determine whether $\displaystyle \int_0^1 \frac{\diff{x}}{xe^x + x^2}$ converges or not.

</example>

<solution>

Like before, we want to get a feel for the integral. When $x$ is really small, $x^2$ doesn't really make a big impact on the integral compared to $x$, so $xe^x + x^2 \approx xe^x$ (similar to how $x + x^2 \approx x^2$ when $x$ is really big). Also, $e^x$ is harmless if $x$ is small, since $e^0 = 1$, so we roughly get

$$
\frac{1}{xe^x + x^2} \approx \frac{1}{xe^x} \approx \frac{1}{x},
$$

which diverges by $p$-integrals, so we want to show that the integral diverges. We can do this by finding a smaller function, which we can do by making the denominator bigger like before.

Since the integral is over $0 \leq x \leq 1$, we get $x^2 \leq x$ on this interval, which means that $xe^x + x^2 \leq xe^x + x$. Also, $e^x$ is an increasing function, so its maximum is at $x = 1$, which gives $xe^x \leq ex$. Thus, $xe^x + x^2 \leq \p{e + 1}x$ and by flipping things over,

$$
0 \leq \frac{1}{\p{e + 1}x} \leq \frac{1}{xe^x + x^2}.
$$

The smaller integral diverges by $p$-itnegrals, so by direct comparison, $\int_0^1 \frac{\diff{x}}{xe^x + x^2}$ diverges, too.

</solution>

### Taking Limits

It might help to brush up on [what a limit _means_](https://tutorial.math.lamar.edu/classes/calcI/defnoflimit.aspx). With that said, taking limits will help us prove inequalities for large values of $x$, which is best illustrated through examples:

<example> (8.7.60(a))

Show that if $a > 0$, then $\displaystyle \lim_{x\to\infty} \frac{x^a}{\ln{x}} \implies x^a > 2\ln{x}$ for $x$ large enough.

</example>

<solution>

For this problem, we're already given the limit, so we just need to prove the inequality. The definition of the limit tells us that:

$$
\text{For all $M > 0$, there exists $N > 0$ such that if $x \geq N$, then $\dfrac{x^a}{\ln{x}} > M$.}
$$

Intuitively, the limit tells us that if $x$ is large enough ("... there exists $N > 0$ such that if $x \geq N$ ..."), then $\frac{x^a}{\ln{x}}$ becomes very big as well ("... $\frac{x^a}{\ln{x}} > M$"). The "for all $M > 0$" part tells you that you can make your function as big as you want.

The definition says something works for _any_ $M > 0$, so it means it'll work for a specific $M$. If we set $M = 2$, then there exists $N > 0$ such that whenever $x \geq N$, we have

$$
\frac{x^a}{\ln{x}} > 2 \implies x^a > 2\ln{x}.
$$

</solution>

## Sequences

### Definition

<definition>

###### Definition

A sequence $\set{a_n}$ is an ordered list of numbers, where $a_n$ is the $n$-th term of the sequence.

</definition>

Sequences are just infinitely long lists of numbers. For example:

$$
\begin{gathered}
    1, 2, 3, 4, 5, 6, 7, \ldots \\
    0, 1, 1, 2, 3, 5, 8, \ldots
\end{gathered}
$$

are both sequences.

### Limits

When looking at sequences, we're basically only concerned with limits as $n \to \infty$. Like usual, if the limit exists, then we say that the sequence **converges**, and if it doesn't, we say that the sequence **diverges**.

The usual limit laws also apply. For example, assuming all the limits exist,

$$
\begin{aligned}
    \lim_{n\to\infty} \p{a_n + b_n}
        &= \lim_{n\to\infty} a_n + \lim_{n\to\infty} b_n \\
    \lim_{n\to\infty} \p{a_nb_n}
        &= \p{\lim_{n\to\infty} a_n} \p{\lim_{n\to\infty} b_n},
\end{aligned}
$$

and so on. One very useful way of taking limits is replacing $n$ with $x$ and calculating them as usual, e.g., with L'Hôpital's rule.

<example>

Calculate $\displaystyle \lim_{n\to\infty} \frac{n^2 + 1}{n^2 + 7}$.

</example>

<solution>

$$
\begin{aligned}
    \lim_{n\to\infty} \frac{n^2 + 1}{n^2 + 7}
        &= \lim_{x\to\infty} \frac{x^2 + 1}{x^2 + 7} \\
        &\overset{H}{=} \lim_{x\to\infty} \frac{2x}{2x} \\
        &= 1.
\end{aligned}
$$

</solution>

**Warning:** If you replace $n$ with $x$ and the limit does not exist, then you can't make any conclusions about the original limit:

<example>

Calculate $\displaystyle \lim_{n\to\infty} \sin\p{n\pi}$.

</example>

<solution>

You may be tempted to say

$$
\lim_{n\to\infty} \sin\p{n\pi}
    = \lim_{x\to\infty} \sin\p{x\pi}
    = \mathrm{DNE},
$$

since $\sin\p{x\pi}$ oscillates. This is **wrong** because while $\sin\p{x\pi}$ does indeed oscillate, $\sin\p{n\pi}$ does not:

$$
\begin{aligned}
    \sin\p{0} &= 0 \\
    \sin\p{\pi} &= 0 \\
    \sin\p{2\pi} &= 0 \\
    &\,\,\,\vdots
\end{aligned}
$$

This means that $\sin\p{n\pi}$ is $0$ for any integer $n$, so

$$
\lim_{n\to\infty} \sin\p{n\pi} = \boxed{0}.
$$

</solution>

## Homework

### 8.7.60(a)

See [Example 3](#example-3).

### 8.7.70

Here, you'll want to recall that $\sinh{x} = \frac{1}{2}\p{e^x - e^{-x}}$, so you can rewrite the integral as

$$
\int_1^\infty \frac{\ln{x}}{\sinh{x}} \,\diff{x}
    = \int_1^\infty \frac{2\ln{x}}{e^x - e^{-x}} \,\diff{x}.
$$

When $x$ is large, $e^{-x} \approx 0$, so the integrand is roughly

$$
\frac{2\ln{x}}{e^x - e^{-x}} \approx \frac{2\ln{x}}{e^x} \leq \frac{x}{e^x},
$$

so you can tackle this with direct comparison. To get the inequality, see [this section](#taking-limits) or [#134](https://campuswire.com/c/G6D8D17EE/feed/134) on Campuswire.

### 8.7.96(c)

From (b), we're given that

$$
\int x^p \ln{x} \,\diff{x}
    = \frac{x^{p+1}}{p + 1}\p{\ln{x} - \frac{1}{p + 1}} + C.
$$

So, since the integrand isn't defined at $0$, we need to take a limit to calculate the integral:

$$
\begin{aligned}
    \int_0^1 x^p \ln{x} \,\diff{x}
        &= \lim_{t\to0^+} \int_t^1 x^p \ln{x} \,\diff{x} \\
        &= \lim_{t\to0^+} \p{\frac{1^{p+1}}{p + 1}\p{\ln{1} - \frac{1}{p + 1}} - \frac{t^{p+1}}{p + 1}\p{\ln{t} - \frac{1}{p + 1}}} \\
        &= \lim_{t\to0^+} \p{\frac{1}{p + 1}\p{- \frac{1}{p + 1}} - \frac{t^{p+1}}{p + 1}\p{\ln{t} - \frac{1}{p + 1}}} \\
        &= \lim_{t\to0^+} \p{-\frac{1}{\p{p + 1}^2} - \frac{t^{p+1}\ln{t}}{p + 1} + \frac{t^{p+1}}{\p{p + 1}^2}} \\
        &= \lim_{t\to0^+} \frac{t^{p+1} - t^{p+1}\p{p + 1}\ln{t} - 1}{\p{p + 1}^2} \\
        &= \lim_{t\to0^+} \frac{t^{p+1}\p{1 - \p{p + 1}\ln{t}} - 1}{\p{p + 1}^2}.
\end{aligned}
$$

If $p < -1$, then $p + 1 < 0$, so so $\p{p + 1}\ln{t}$ is positive as $t \to 0^+$. This means that,

$$
\begin{aligned}
    \lim_{t\to0^+} t^{p+1} &= \infty \\
    \lim_{t\to0^+} \p{1 - \p{p+1}\ln{t}} &= -\infty,
\end{aligned}
$$

which means that the integral diverges in this case.

If $p > -1$, then $p + 1 > 0$, $\lim_{t\to0^+} t^{p+1}\p{1 - \p{p+1}\ln{t}}$ has the form $0 \cdot \infty$, so you can tackle this using L'Hôpital's.
