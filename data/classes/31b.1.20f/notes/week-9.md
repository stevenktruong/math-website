---
title: Week 9 Discussion Notes
date: "2020-11-30"
tags:
  - convergence of infinite series
  - integration
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Absolute Convergence

<definition>

Let $\set{a_n}$ be a sequence.

- If $\displaystyle \sum_{n=0}^\infty \abs{a_n}$ converges, then we say that the series is **absolutely convergent**.
- If $\displaystyle \sum_{n=0}^\infty a_n$ converges, but it does not converge absolutely, then we say that the series is **conditionally convergent**.

</definition>

## Convergence Tests

For your convenience, I'm going to restate all of the convergence tests here.

### Divergence Test

<theorem> divergence test

Let $\set{a_n}$ be a sequence. If $\displaystyle \lim_{n\to\infty} a_n$ does not exist or if it exists and is not $0$, then $\displaystyle \sum_{n=0}^\infty a_n$ diverges.

</theorem>

This should always be the first thing you try. Most of the time, it'll be inconclusive, though.

### Integral Test

<theorem> integral test

Let $\set{a_n}$ be a sequence and suppose that there is a function $f$ such that $f\p{n} = a_n$ for all $n \geq M$ for some $M > 0$. If $f\p{x}$ is positive, decreasing, and continuous on $\pco{1, \infty}$, then

$$
\sum_{n=1}^\infty a_n \text{ converges} \iff \int_1^\infty f\p{x} \,\diff{x} \text{ converges}.
$$

</theorem>

This one is pretty useful when it works, but as you can imagine, it can be really hard to use if your function is hard to integrate. The main application is convergence of $p$-series:

<example>

Determine when $\displaystyle \sum_{n=1}^\infty \frac{1}{n^p}$ converges.

</example>

<solution>

Here, $f\p{x} = x^{-p}$, which is continuous and non-negative when $x \geq 1$. Also, $f'\p{x} = -px^{-p-1} < 0$ if $x \geq 1$, too, so $f$ is decreasing on $\pco{1, \infty}$, which means that the integral test applies.

The improper integral $\int_1^\infty \frac{1}{x^p} \,\diff{x}$ converges if $p > 1$ and diverges if $p \leq 1$ by the theorem on $p$-integrals. By the integral test, this means that $\sum_{n=1}^\infty \frac{1}{n^p}$ converges if and only if $p > 1$.

</solution>

### Direct Comparison Test

<theorem> direct comparison test

Suppose $0 \leq a_n \leq b_n$ for $n \geq M$ for some $M > 0$. Then:

- If $\displaystyle \sum_{n=0}^\infty a_n$ diverges, then $\displaystyle \sum_{n=0}^\infty b_n$ diverges as well.
- If $\displaystyle \sum_{n=0}^\infty b_n$ converges, then $\displaystyle \sum_{n=0}^\infty a_n$ converges as well.

</theorem>

### Limit Comparison Test

<theorem> limit comparison test

Suppose $a_n \geq 0$ and $b_n \geq 0$ for $n \geq M$ for some $M > 0$. Let $\displaystyle L = \lim_{n\to\infty} \frac{a_n}{b_n}$.

- If $L \in \p{0, \infty}$, then $\displaystyle \sum_{n=0}^\infty a_n$ converges if and only if $\displaystyle \sum_{n=0}^\infty b_n$ converges.
- If $L = 0$ and $\displaystyle \sum_{n=0}^\infty b_n$ converges, then $\displaystyle \sum_{n=0}^\infty a_n$ converges as well.
- If $L = \infty$ and $\displaystyle \sum_{n=0}^\infty a_n$ converges, then $\displaystyle \sum_{n=0}^\infty b_n$ converges as well.

</theorem>

The case when $L = \p{0, \infty}$ is when this is most useful, in my experience. If $L = 0$ or $L = \infty$, you can usually use direct comparison instead.

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \frac{n}{n^3 + n^2 + 7}$ converges.

</example>

<solution>

Intuitively, when $n$ is very large, the main terms that matter are the leading terms:

$$
\frac{n}{n^3 + n^2 + 7} \approx \frac{n}{n^3} = \frac{1}{n^2},
$$

so intuitively, this should converge. The limit test makes this rigorous:

$$
\begin{aligned}
    \lim_{n\to\infty} \frac{\frac{n}{n^3 + n^2 + 7}}{\frac{1}{n^2}}
        &= \lim_{n\to\infty} \frac{n^3}{n^3 + n^2 + 7} \cdot \frac{\frac{1}{n^3}}{\frac{1}{n^3}} \\
        &= \lim_{n\to\infty} \frac{1}{1 + \frac{1}{n} + \frac{7}{n^3}} \\
        &= 1.
\end{aligned}
$$

$\sum_{n=1}^\infty \frac{1}{n^2}$ converges because it's a $p$-series, so by the limit comparison test, $\sum_{n=1}^\infty \frac{n}{n^3 + n^2 + 7}$ converges also.

</solution>

### Ratio Test

<theorem> ratio test

Let $\displaystyle L = \lim_{n\to\infty} \abs{\frac{a_{n+1}}{a_n}}$.

- If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
- If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
- If $L = 1$, then the ratio test is inconclusive.

</theorem>

### Root Test

<theorem> root test

Let $\displaystyle L = \lim_{n\to\infty} \abs{a_n}^{1/n}$.

- If $L < 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ converges absolutely.
- If $L > 1$, then $\displaystyle \sum_{n=1}^\infty a_n$ diverges.
- If $L = 1$, then the root test is inconclusive.

</theorem>

The ratio test and root test are pretty similar in that if one is inconclusive, the other one probably will be, too. They also "measure" how fast the terms $a_n$ converge to $0$.

- If $L < 1$, then the terms converge fast enough that the whole series converges.

- If $L > 1$, then the terms converge too slow so the series diverges.

- If $L = 1$, the rate is somewhere in between too fast and too slow, which is why they're inconclusive.

### Alternating Series Test

<theorem> alternating series test

Let $\set{a_n}$ be a sequence of the form $a_n = \p{-1}^{n-1}b_n$, where $b_n > 0$ and $b_n \geq b_{n+1}$ for $n \geq 1$. Then $\displaystyle \sum_{n=0}^\infty a_n$ converges.

</theorem>

In this case, $\displaystyle \sum_{n=0}^\infty a_n$ is called an **alternating series**, since the terms alternate signs at each step.

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \frac{\p{-1}^n}{n}$ converges or not.

</example>

<solution>

We have an alternating series with $b_n = \frac{1}{n}$, which decreases to $0$. So, by the alternating series test, $\sum_{n=1}^\infty \frac{\p{-1}^n}{n}$ converges.

This is an example of a conditionally convergent series, since the harmonic series diverges.

</solution>

## Midterm Review

### Integration

<example>

Evaluate $\displaystyle \int \ln\p{x^2 + 9} \,\diff{x}$.

</example>

<solution>

Substitutions don't look very helpful here, so we're going to try integration by parts with $u = \ln\p{x^2 + 9}$ and $\diff{v} = \diff{x}$. Then

$$
\diff{u} = \frac{2x}{x^2 + 9} \,\diff{x}
\quad\text{and}\quad
v = x,
$$

and the integral becomes

$$
\int \ln\p{x^2 + 9} \,\diff{x}
    = x\ln\p{x^2 + 9} - \int \frac{2x^2}{x^2 + 9} \,\diff{x}.
$$

After doing a long division, we get

$$
\int \frac{2x^2}{x^2 + 9} \,\diff{x}
    = \int 2 - \frac{18}{x^2 + 9} \,\diff{x}
    = 2x - 6\arctan\p{\frac{x}{3}} + C.
$$

You can integrate the fraction by using a table or using the trig sub $x = 3\tan\theta$. Putting everything together,

$$
\int \ln\p{x^2 + 9} \,\diff{x}
    = \boxed{x\ln\p{x^2 + 9} - 2x + 6\arctan\p{\frac{x}{3}} + C}.
$$

</solution>

<example>

Evaluate $\displaystyle \int \frac{x}{x^4 + 1} \,\diff{x}$.

</example>

<solution>

I see an $x$ in the numerator, so $u = x^2$ is probably a good start: $\diff{u} = 2x \,\diff{x}$ and

$$
\int \frac{x}{x^4 + 1} \,\diff{x}
    = \frac{1}{2} \int \frac{\diff{u}}{u^2 + 1}
    = \frac{1}{2} \arctan{u} + C
    = \boxed{\frac{1}{2} \arctan\p{x^2} + C}.
$$

</solution>

<example>

Evaluate $\displaystyle \int \frac{\cos{x}}{2\sin^2{x} + 7\sin{x} + 6} \,\diff{x}$.

</example>

<solution>

Because of the $\cos{x}$ in the numerator and all the $\sin{x}$ terms in the denominator, I'm going to start with $u = \sin{x} \implies \diff{u} = \cos{x} \,\diff{x}$. The integral then turns into

$$
\int \frac{\cos{x}}{2\sin^2{x} + 7\sin{x} + 6} \,\diff{x}
    = \int \frac{\diff{u}}{2u^2 + 7u + 6}.
$$

You can factor $2u^2 + 7u + 6 = \p{2u + 3}\p{u + 2}$, so by partial fractions, we end up with

$$
\frac{1}{2u^2 + 7u + 6}
    = \frac{1}{\p{2u + 3}\p{u + 2}}
    = \frac{2}{2u + 3} - \frac{1}{u + 2}.
$$

So, when we integrate, we just end up with

$$
\begin{aligned}
    \int \frac{\diff{u}}{2u^2 + 7u + 6}
        &= \ln\p{2u + 3} - \ln\p{u + 2} + C \\
        &= \boxed{\ln\p{2\sin{x} + 3} - \ln\p{\sin{x} + 2} + C}.
\end{aligned}
$$

</solution>

### Infinite Series

<example>

Calculate $\displaystyle \sum_{n=-1}^\infty \frac{2^{n+3}}{3^n}$.

</example>

<solution>

We can factor out a $2^3$ to get

$$
\begin{aligned}
    \sum_{n=-1}^\infty \frac{2^{n+3}}{3^n}
         = 2^3 \sum_{n=-1}^\infty \frac{2^n}{3^n}
        &= 2^3 \sum_{n=-1}^\infty \p{\frac{2}{3}}^n \\
        &= 2^3 \frac{\p{\frac{2}{3}}^{-1}}{1 - \frac{2}{3}} \\
        &= 8 \cdot \frac{3}{2} \cdot 3 \\
        &= \boxed{36}.
\end{aligned}
$$

</solution>

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty \frac{2^{2n}}{n!}$ converges or not.

</example>

<solution>

As a rule of thumb, if you see factorials and/or powers of $n$, the ratio test will usually work:

$$
\begin{aligned}
    \lim_{n\to\infty} \abs{\frac{\frac{2^{2\p{n+1}}}{\p{n+1}!}}{\frac{2^{2n}}{n!}}}
        &= \lim_{n\to\infty} \frac{2^{2\p{n+1}}}{\p{n+1}!} \cdot \frac{n!}{2^{2n}} \\
        &= \lim_{n\to\infty} \frac{n!}{\p{n+1}!} \cdot \frac{2^{2n+2}}{2^{2n}} \\
        &= \lim_{n\to\infty} \frac{1}{n + 1} \cdot 2^2 \\
        &= 0 \\
        &< 1,
\end{aligned}
$$

so by the ratio test, the series converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=2}^\infty \frac{1}{\ln^3{n}}$ converges or not.

</example>

<solution>

The intuition here is that $\ln{n}$ grows really, really slowly, which means that the terms here should go to $0$ really, really slowly. So, this sum should diverge.

When you see logarithms, it's good to keep in mind that $\ln{n} \leq n^a$ for _any_ $a > 0$ if $n$ is large enough. If we cube both sides and rearrange the inequality, then

$$
\frac{1}{n^{3a}} \leq \frac{1}{\ln^3{n}}.
$$

To use comparison, we want to pick $a$ so that the smaller integral diverges. $a = \frac{1}{3}$ works here: if $n$ is large enough, then

$$
0 \leq \frac{1}{n} \leq \frac{1}{\ln^3{n}},
$$

so by direct comparison, the series diverges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \frac{\ln{n}}{n^2}$ converges or not.

</example>

<solution>

$\ln{n}$ grows really slowly, so intuitively, it shouldn't affect the speed at which $\frac{1}{n^2}$ goes to $0$ by very much, so the series should converge.

The same idea works here: $\ln{n} \leq n^a$ if $n$ is large enough, so

$$
\frac{\ln{n}}{n^2} \leq \frac{n^a}{n^2} = \frac{1}{n^{2-a}}.
$$

To use comparison, we should pick $a$ so that the bigger series still converges. $a = \frac{1}{2}$ works here (we just need to make sure $2 - a > 1$), so for $n$ large enough,

$$
0 \leq \frac{\ln{n}}{n^2} \leq \frac{1}{n^{3/2}}.
$$

Thus, by direct comparison, the series converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \sin\p{\frac{1}{n^2}}$ converges or not.

</example>

<solution>

If you recall,

$$
\lim_{x\to0} \frac{\sin{x}}{x} = 1.
$$

Intuitively, this means that if $x$ is really small, then $\sin{x} \approx x$. If we replace $x$ with $\frac{1}{n^2}$, we get $\sin\p{\frac{1}{n^2}} \approx \frac{1}{n^2}$, so the series should converge. When our intuition is based on approximations, the limit test will usually work:

$$
\lim_{n\to\infty} \frac{\sin\p{\frac{1}{n^2}}}{\frac{1}{n^2}} = 1.
$$

I used the limit above to calculate this: as long as whatever's inside $\sin{x}$ and the denominator are the same and goes to $0$, the limit is $1$.

When $n$ is large enough, $\frac{1}{n^2} < \pi$, so $\sin\p{\frac{1}{n^2}} \geq 0$ when this happens. Thus, by limit comparison, the series converges.

</solution>
