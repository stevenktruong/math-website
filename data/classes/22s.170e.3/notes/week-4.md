---
title: Week 4 Discussion Notes
date: "2022-04-21"
tags:
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Examples

<example>

How many ternary strings of length $n$ have exactly $k$ $1$'s? (Here, a **ternary string** is a string consisting of only $0$'s, $1$'s, and $2$'s.)

</example>

<solution>

To specify such a string, there are two steps:

1. I have to tell you where the $1$'s go
2. I have to tell you what the remaining numbers are.

For (1), I have to choose the locations of the $1$'s, so there are $\binom{n}{k}$ ways to specify the $1$'s. For the remaining $n-k$ numbers, I have two choices: $0$ or $2$, so there are $2^{n-k}$ ways to specify the remaining characters. Overall, the number of strings is

$$
\boxed{\binom{n}{k} \times 2^{n-k}}.
$$

</solution>

<example>

Calculate $\sum_{k=0}^n \binom{n}{k}$.

</example>

<solution>

This one is sort of a trick. If you remember the binomial theorem, it says

$$
\p{a + b}^n = \sum_{k=0}^n \binom{n}{k} a^n b^{n-k}.
$$

If we set $a = b = 1$, then

$$
\sum_{k=0}^n \binom{n}{k} = \p{1 + 1}^n = \boxed{2^n}.
$$

</solution>

<example> (BOGO sort)

You randomly reorder $1, 2, \ldots, n$ repeatedly until you get the original ordering back. What is the expected number of times you have to reorder the numbers until this happens?

</example>

<solution>

This problem is asking us to find the expectation of some random variable, so there are two steps:

1. Figure out what the random variable is.
2. Calculate its expectation.

The random variable here is the number of times you reorder the numbers, which I'll call $N$. Notice that the value of $N$ is the number of attempts we need before we succeed at getting the numbers in their original order, so $N$ is a geometric random variable with probability of success $p = \frac{1}{n!}$ (there are $n!$ different orderings of these numbers, and we only want $1$ of them). Thus,

$$
\E\br{N} = \frac{1}{p} = \boxed{n!}.
$$

</solution>

<remark>

During discussion, someone asked me to derive the expectation of a geometric random variable, so let $X \sim \mathrm{Geom}\p{p}$. By definition,

$$
\P\p{X = k} = \p{1 - p}^{k-1}p,\quad k \geq 1.
$$

The expectation is then

$$
\E\br{X}
    = \sum_{k=1}^\infty k\p{1 - p}^{k-1}p.
$$

To calculate this sum, recall the geometric series:

$$
\sum_{k=0}^\infty x^k = \frac{1}{1 - x}
\implies \sum_{k=1}^\infty kx^{k-1} = \frac{1}{\p{1 - x}^2}.
$$

(I got the second equation by taking the derivative on both sides.) If you plug in $x = 1 - p$, then you get

$$
\sum_{k=1}^\infty k\p{1 - p}^{k-1}
    = \frac{1}{\p{1 - \p{1 - p}}^2}
    = \frac{1}{p^2}.
$$

Plugging this in, we get

$$
\E\br{X} = \frac{1}{p^2} \cdot p = \frac{1}{p}.
$$

</remark>

<example> (2.3-11)

If the moment-generating function of $X$ is

$$
M\p{t} = \frac{2}{5} e^t + \frac{1}{5} e^{2t} + \frac{2}{5} e^{3t},
$$

find the mean, variance, and pmf of $X$.

</example>

<solution>

Recall that

$$
\E\br{X} = M'\p{0}
\quad\text{and}\quad \Var\p{X} = M''\p{0} - \br{M'\p{0}}^2.
$$

Taking derivatives,

$$
\begin{gathered}
    M'\p{t} = \frac{2}{5} e^t + \frac{2}{5} e^{2t} + \frac{6}{5} e^{3t}
        \implies M'\p{0} = 2 \\
    M''\p{t} = \frac{2}{5} e^t + \frac{4}{5} e^{2t} + \frac{18}{5} e^{3t}
        \implies M''\p{0} = \frac{24}{5}.
\end{gathered}
$$

Plugging everything in,

$$
\begin{gathered}
    \E\br{X} = \boxed{2} \\
    \Var\p{X} = \frac{24}{5} - 2^2 = \boxed{\frac{4}{5}}.
\end{gathered}
$$

Finally, to get the pmf of $X$, recall that

$$
M_X\p{t}
    = \E\br{e^{tX}}
    = \sum_{k \in S_X} e^{kt} \P\p{X = k}.
$$

By comparing coefficients, we get:

$$
\boxed{
    \begin{aligned}
        \P\p{X = 1} &= \frac{2}{5} \\
        \P\p{X = 2} &= \frac{1}{5} \\
        \P\p{X = 3} &= \frac{2}{5}
    \end{aligned}
}
$$

</solution>

<example> (2.3-16)

Let $X$ equal the number of flips of a fair coin that are required to observe the same face on consecutive flips.

1. Find the pmf of $X$.
2. Find the mgf of $X$.
3. Use the mgf of $X$ to find the mean and variance of $X$.
4. Find $\P\p{X \leq 3}$, $\P\p{X \geq 5}$, $\P\p{X = 3}$.

</example>

<solution>

1. Generally, before trying to calculate the pmf directly, you'll want to try it for a few numbers first to get an idea of what the answer should be.

    If $X = 2$, this means that the our flips were $HH$ or $TT$. These both occur with probability $\frac{1}{4}$, so you get $\P\p{X = 2} = \frac{1}{4} \cdot 2 = \frac{1}{2}$.

    If $X = 3$, then the flips were either $THH$ or $HTT$. Like before, these both have probability $\frac{1}{8}$, so $\P\p{X = 3} = \frac{1}{8} \cdot 2 = \frac{1}{4}$.

    For general $X = k$, you may have noticed that the final two flips determine the rest of the flips: if our sequence ends with $THH$, then the remaining ones have to alternate between $T$ and $H$, and similarly for $HTT$. So, no matter what, there are only $2$ ways to win, and these occur with probability $\frac{1}{2^k}$ (we flipped a coin $k$ times), so

    $$
    \boxed{\P\p{X = k} = \frac{1}{2^k} \cdot 2 = \frac{1}{2^{k-1}},\quad k \geq 2}.
    $$

2. By definition,

    $$
    \begin{aligned}
        M\p{t}
             = \E\br{e^{tX}}
            &= \sum_{k=2}^\infty e^{kt} \frac{1}{2^{k-1}} \\
            &= 2 \sum_{k=2}^\infty \frac{\p{e^t}^k}{2^k} \\
            &= 2 \sum_{k=2}^\infty \p{\frac{e^t}{2}}^k \\
            &= 2 \frac{\p{\frac{e^t}{2}}^2}{1 - \frac{e^t}{2}} \\
            &= \boxed{\frac{e^{2t}}{1 - e^t}}.
    \end{aligned}
    $$

    (The sum in the third line is a geometric series, which we know the formula for. See the remark below.) This formula is valid when the common ratio is less than $1$, i.e.,

    $$
    \abs{\frac{e^t}{2}} < 1
    \iff e^t < 2
    \iff t < \ln{2}.
    $$

3. Just use the formulas

    $$
    \E\br{X} = M'\p{0}
    \quad\text{and}\quad \Var\p{X} = M''\p{0} - \br{M'\p{0}}^2.
    $$

    (I was too lazy to do this in discussion.)

4. Using our pmf in part (1),

    $$
    \begin{aligned}
        \P\p{X \leq 3} &= \P\p{X = 2} + \P\p{X = 3} = \boxed{\frac{3}{4}} \\
        \P\p{X \geq 5} &= \sum_{k=5}^\infty \frac{1}{2^{k-1}} = \frac{\frac{1}{2^4}}{1 - \frac{1}{2}} = \boxed{\frac{1}{8}} \\
        \P\p{X = 3} &= \boxed{\frac{1}{4}}.
    \end{aligned}
    $$

</solution>

<remark>

Recall that a geometric series is a series of the form

$$
\sum_{k=k_0}^\infty r^k,
$$

where $r$ is called the **common ratio**. This series converges if and only if $\abs{r} < 1$, and it converges to

$$
\sum_{k=k_0}^\infty r^k
    = \frac{r^{k_0}}{1 - r}.
$$

Note that the numerator on the RHS is the first term in the series (i.e., the number we get when we plug in $k = k_0$).

</remark>
