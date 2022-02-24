---
title: Week 8 Discussion Notes
date: "2022-02-24"
tags:
    - infinite series
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Infinite Series

<definition>

Let $\p{X, d_X}$ be a metric space and $\p{Y, \norm{\:\cdot\:}_Y}$ be a normed vector space. Let $f_n \in B\p{X, Y}$ be a sequence of functions. We say

1. $\sum_{n=1}^\infty f_n$ **converges pointwise** if for all $x \in X$, $\sum_{n=1}^N f_n\p{x}$ converges as $N \to \infty$.
2. $\sum_{n=1}^\infty f_n$ **converges uniformly** if $\sum_{n=1}^N f_n$ converges uniformly as $N \to \infty$.
3. $\sum_{n=1}^\infty f_n$ **converges pointwise absolutely** if for all $x \in X$, $\sum_{n=1}^N \norm{f_n\p{x}}_Y$ converges as $N \to \infty$.
4. $\sum_{n=1}^\infty f_n$ **converges uniformly absolutely** if $\sum_{n=1}^N \sup_{x \in X}\norm{f_n\p{x}}_Y$ converges as $N \to \infty$.

</definition>

<remark>

The main reason we want $\p{Y, \norm{\:\cdot\:}_Y}$ to be a normed vector space instead of just a metric space is because we need to be able to add functions together, and in general metric spaces, we don't have a notion of addition.

Also, in most cases, $\p{Y, \norm{\:\cdot\:}_Y} = \p{\R, \abs{\:\cdot\:}}$.

</remark>

<theorem> Weierstrass M-test

Let $\p{X, d_X}$, $\p{Y, \norm{\:\cdot\:}_Y}$, and $f_n \in B\p{X, Y}$ be as above. If $Y$ is complete (with respect to the metric induced by the norm), then (iv) $\implies$ (ii).

</theorem>

Since $\R$ is complete, the Weierstrass M-test will be our main way of proving uniform convergence of series for most problems.

<example>

Let $f_n\p{x} = x^n$, where $X = \p{-1, 1}$ and $Y = \R$. Show that $\sum_{n=1}^\infty x^n$ converges uniformly on any compact subset of $\p{-1, 1}$, but not uniformly on all of $\p{-1, 1}$.

</example>

<solution>

Without loss of generality, we may assume that our compact set is $\br{-r, r}$. Indeed, given any compact set $K \subseteq \p{-1, 1}$, we have

$$
K \subseteq \bigcup_{r \in \p{0, 1}} \p{-r, r}
$$

so by compactness, there exist $0 < r_1 < r_2 < \cdots < r_n < 1$ such that

$$
K \subseteq \bigcup_{i=1}^n \p{-r_i, r_i} = \p{-r_n, r_n}.
$$

Since $K$ is closed, $K = \cl{K} \subseteq \cl{\p{-r_n, r_n}} = \br{-r_n, r_n}$. Thus, if the series converges uniformly on $\br{-r_n, r_n}$, then it converges uniformly on $K$ also.

Now, let $0 \leq r < 1$. Then

$$
\sup_{x \in \br{-r,r}} \abs{x^n}
    = r^n
\implies \sum_{n=1}^\infty \sup_{x \in \br{-r,r}} \abs{x^n}
    =  \sum_{n=1}^\infty r^n
    < \infty,
$$

since it is a geometric series with ratio $\abs{r} < 1$. By the Weierstrass M-test, we get $\sum_{n=1}^\infty x^n$ converges uniformly on $\br{-r, r}$, hence on any compact subset of $\p{-1, 1}$.

To show that the convergence is not uniform on all of $\p{-1, 1}$, we proceed by contradiction. Assume that $\sum_{n=1}^\infty x^n$ converges uniformly on $\p{-1, 1}$. Since the pointwise and uniform limits (when they exist) must agree, this means

$$
\sum_{n=1}^N x^n \xrightarrow{N\to\infty} \frac{1}{1 - x}
$$

uniformly on $\p{-1, 1}$. But $\sum_{n=1}^N x^n \in B\p{X, \R}$ and $B\p{X, \R}$ is complete, i.e., uniform limits of bounded functions are bounded, which implies $\frac{1}{1 - x}$ is bounded on $\p{-1, 1}$, a contradiction. Thus, the series does not converge uniformly on all of $\p{-1, 1}$.

</solution>

<example>

Prove that $\sum_{n=1}^\infty \frac{nx}{1 + n^5x^2}$ converges uniformly on $\R$.

</example>

<solution>

Our main tool is the Weierstrass M-test, so let's try to calculate

$$
\sup_{x \in \R}{\abs{f_n\p{x}}}
\quad\text{where}\quad f_n\p{x} = \frac{nx}{1 + n^5x^2}.
$$

We'll try to maximize it using the first derivative test. Since $f_n$ is an odd function, to maximize $\abs{f_n}$ on all of $\R$, we can just maximize $f_n$ for $x \geq 0$:

$$
f_n'\p{x} = \frac{n - n^6x^2}{\p{1 + n^5x^2}^2} = 0
\implies x = n^{-\frac{5}{2}}
$$

Also,

$$
f_n\p{n^{-\frac{5}{2}}} = \frac{1}{2n^{-\frac{3}{2}}} > 0.
$$

Now we need to prove that this actually gives us the global maximum of $f_n$. Notice that

$$
\lim_{x\to\infty} f_n\p{x}
    = \lim_{x\to\infty} \frac{\frac{n}{x}}{\frac{1}{x^2} + n^5}
    = \frac{0}{n^5}
    = 0.
$$

(We're allowed to use limit laws since the limit of the denominator is non-zero.)

Thus, because $f_n\p{n^{-\frac{5}{2}}} > 0$, there exists $M > 0$ such that if $x \geq M$, then $f_n\p{x} < f_n\p{n^{-\frac{5}{2}}}$. The next part of the argument is a little tricky, so let me break it down into steps:

1. If $x \geq M$, then $f_n\p{x}$ is strictly smaller than $f_n\p{n^{-\frac{3}{2}}}$, so if $f_n$ has a maximum, it must occur on the interval $\br{0, M}$.
2. $\br{0, M}$ is compact and $f_n$ is continuous, so $f_n$ must have a maximum on $\br{0, M}$. In other words, $f_n$ has a global maximum.
3. Since $f_n$ is differentiable on $\br{0, M}$, the maximizer $x_{\mathrm{max}}$ of $f_n$ must be a critical point, i.e., $f_n'\p{x_{\mathrm{max}}} = 0$.
4. The only critical point of $f_n$ is $n^{-\frac{5}{2}}$, so $x_{\mathrm{max}} = n^{-\frac{5}{2}}$.

In summary,

$$
\sup_{x \in \R}{\abs{f_n\p{x}}}
    = f_n\p{n^{-\frac{5}{2}}}
    = \frac{1}{2n^{\frac{3}{2}}},
$$

so by the $p$-series test with $p = \frac{3}{2} > 1$,

$$
\sum_{n=1}^\infty \sup_{x \in \R}{\abs{f_n\p{x}}}
    = \sum_{n=1}^\infty \frac{1}{2n^{\frac{3}{2}}}
    < \infty.
$$

So by the Weierstrass M-test, the series converges uniformly on $\R$.

</solution>

<example>

Show that $\sum_{n=1}^\infty \frac{n^2 + x^4}{n^4 + x^2}$ converges to a continuous function on $\R$.

</example>

<solution>

**Warning:** It might be tempting to try to prove that the series converges uniformly on $\R$ (since that would imply that the series converges to a continuous function), but this series does _not_ converge uniformly on $\R$. Indeed, let $f\p{x} = \sum_{n=1}^\infty \frac{n^2 + x^4}{n^4 + x^2}$, and because all terms are positive,

$$
\abs{f\p{x} - \sum_{n=1}^\infty \frac{n^2 + x^4}{n^4 + x^2}}
    = \sum_{n=N+1}^\infty \frac{n^2 + x^4}{n^4 + x^2}
    \geq \frac{\p{N+1}^2 + x^4}{\p{N+1}^4 + x^2}.
$$

($f$ is larger than its partial sums, so we can drop the absolute value, and a sum of positive numbers is at least one of its terms, e.g., the first one.)

But

$$
\lim_{x\to\infty} \frac{\p{N+1}^2 + x^4}{\p{N+1}^4 + x^2} = \infty
\implies \sup_{x \in \R}{\abs{f\p{x} - \sum_{n=1}^\infty \frac{n^2 + x^4}{n^4 + x^2}}} = \infty,
$$

so the series does not converge uniformly.

Instead, our strategy is to prove that the series converges uniformly on _compact intervals_. If we manage to do this, then given any $x \in \R$, there exists $R > 0$ such that $x \in \p{-R, R}$, so

$$
\begin{aligned}
    \sum_{n=1}^\infty \frac{n^2 + x^4}{n^4 + x^2} \text{ converges uniformly on } \br{-R, R}
        &\implies f \text{ is continuous on } \br{-R, R} \\
        &\implies f \text{ is continuous at } x.
\end{aligned}
$$

This works for any $x \in \R$, so we would show that $f$ is continuous on $\R$. So, we need to show that the sum converges uniformly on $\br{-R, R}$ for any $R > 0$. As before, our main tool is the Weierstrass M-test, so if $x \in \br{-R, R}$, then

$$
\begin{gathered}
    \frac{n^2 + x^4}{n^4 + x^2}
        \leq \frac{n^2 + x^4}{n^4}
        \leq \frac{1}{n^2} + \frac{R^4}{n^4} \\
    \implies \sup_{x \in \br{-R, R}} \frac{n^2 + x^4}{n^4 + x^2}
        \leq \frac{1}{n^2} + \frac{R^4}{n^4}.
\end{gathered}
$$

By the $p$-series test again with $p = 2 > 1$ and $p = 4 > 1$, we get

$$
\sum_{n=1}^\infty \sup_{x \in \br{-R, R}} \frac{n^2 + x^4}{n^4 + x^2}
    \leq \sum_{n=1}^\infty \p{\frac{1}{n^2} + \frac{R^4}{n^4}}
    < \infty.
$$

Thus, by the Weierstrass M-test, the series converges uniformly on $\br{-R, R}$.

</solution>
