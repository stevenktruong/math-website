---
title: Homework 7
date: "2025-05-26"
tags:
    - real analytic
publish: yes
---

# Homework 7

## Table of Contents

## Problem 4

Prove that the natural logarithm function is real analytic on $\p{0, +\infty}$.

<solution>

Let $a > 0$. By the geometric series, we have

$$
\frac{1}{x}
  = \frac{1}{a} \cdot \frac{1}{1 + \frac{x-a}{a}}
  = \frac{1}{a} \sum_{n=0}^\infty \p{-\frac{x - a}{a}}^n
  = \sum_{n=0}^\infty \frac{\p{-1}^n}{a^{n+1}} \p{x - a}^n,
$$

and this equality is valid for $\abs{\frac{x - a}{a}} < 1 \iff \abs{x - a} < a \iff x \in \p{0, 2a}$. In other words, $\frac{1}{x}$ is real analytic at $a$ with radius of convergence $a$. Moreover, if $\abs{x - a} < a$, then $\br{a, x}$ (or $\br{x, a}$, if $x < a$) is a subset of $\p{0, 2a}$. Thus, the equality at ($*$) below is valid for these $x$'s.

$$
\begin{aligned}
  \log x
    &= \log a + \int_a^x \frac{1}{t} \,\diff{t} \\
    &= \log a + \int_a^x \sum_{n=0}^\infty \frac{\p{-1}^n}{a^{n+1}} \p{t - a}^n \,\diff{t} \\
    &= \log a + \sum_{n=0}^\infty \int_a^x \frac{\p{-1}^n}{a^{n+1}} \p{t - a}^n \,\diff{t}
      && \p{*} \\
    &= \log a + \sum_{n=0}^\infty \frac{\p{-1}^n}{a^{n+1}\p{n + 1}} \p{x - a}^{n+1} \\
    &= \log a + \sum_{n=1}^\infty \frac{\p{-1}^{n-1}}{a^n n} \p{x - a}^n.
\end{aligned}
$$

Thus, for $x \in \p{0, 2a}$, we have $\log x = \sum_{n=0}^\infty c_n\p{x - a}^n$, where

$$
c_n =
  \begin{dcases}
    \log a & \text{if } n = 0, \\[1ex]
    \frac{\p{-1}^{n-1}}{a^n n} & \text{if } n > 1.
  \end{dcases},
$$

so $\log x$ is real analytic at $a$. Since $a$ was arbitrary, this shows that $\log x$ is real analytic on $\p{0, +\infty}$.

</solution>

## Problem 6

Let $m > 0$ be an integer. Show that

$$
\lim_{x\to+\infty} \frac{e^x}{x^m} = +\infty.
$$

(_Hint_: what happens to the ratio between $e^{x+1}/\p{x+1}^m$ and $e^x/x^m$ as $x \to +\infty$?)

<solution>

Following the hint, we have

$$
\lim_{x\to+\infty} \left. \frac{e^{x+1}}{\p{x+1}^m} \middle/ \frac{e^x}{x^m} \right.
  = \lim_{x\to+\infty} e \p{\frac{x}{x + 1}}^m
  = e.
$$

In particular, there exists $N \in \N$ such that if $x \geq N$, then $\frac{e^{x+1}}{\p{x+1}^m} \geq 2 \frac{e^x}{x^m}$. Lastly, notice that

$$
\frac{\diff}{\diff x} \frac{e^x}{x^m}
  = \frac{x^m e^x - mx^{m-1} e^x}{x^{2m}}
  = \frac{x^{m-1} e^x \p{x - m}}{x^{2m}},
$$

so $\frac{e^x}{x^m}$ is strictly increasing if $x > m$. Putting everything together, if $x \geq 2N + m + 1$, then

$$
\frac{e^x}{x^m}
  \geq 2^N \frac{e^{x - N}}{\p{x - N}^m}
  \geq 2^N \frac{e^{m + 1}}{\p{m + 1}^m},
$$

where we used $x - N > m + 1$. Since $2^N \to \infty$ as $N \to \infty$, this completes the proof.

</solution>
