---
title: Homework 8
date: "2025-06-01"
tags:
    - trigonometric functions
publish: yes
---

# Homework 8

## Table of Contents

## Problem 5

Let $z$ be a nonzero complex number. Using Exercise 4.7.4, show that there is exactly one pair of real numbers $r, \theta$ such that $r > 0$, $\theta \in \pco{-\pi, \pi}$, and $z = re^{i\theta}$. (This is sometimes known as the _standard polar representation_ of $z$.)

<solution>

Let $r = \abs{z}$ so that $\abs{\frac{z}{r}}^2 = \p{\operatorname{Re}\frac{z}{r}}^2 + \p{\operatorname{Im}\frac{z}{r}}^2 = 1$. Thus, by Exercise 4.7.4, there exists a unique $\theta \in \pco{-\pi, \pi}$ such that $\frac{z}{r} = \cos\theta + i\sin\theta = e^{i\theta}$. Thus, we have $z = re^{i\theta}$.

Conversely, suppose $z = re^{i\theta} = se^{i\alpha}$ where $\theta, \alpha \in \pco{-\pi, \pi}$. Since $\abs{e^{ix}} = 1$ for any $x \in \R$, we automatically get $r = s = \abs{z}$. Dividing through by $r$, we see $e^{i\theta} = e^{i\alpha}$, so by the uniqueness of $\theta$ from Exercise 4.7.4, we have $\theta = \alpha$.

</solution>

## Problem 6

Let $\tan \colon \p{-\frac{\pi}{2}, \frac{\pi}{2}} \to \R$ be the tangent function $\tan\p{x} \coloneqq \frac{\sin\p{x}}{\cos\p{x}}$. Show that $\tan$ is differentiable and monotone increasing, with $\deriv{}{x} \tan\p{x} = 1 + \tan^2\p{x}$, and that $\lim_{x\to\frac{\pi}{2}} \tan\p{x} = +\infty$ and $\lim_{x\to−\frac{\pi}{2}} \tan\p{x} = -\infty$. Conclude that $\tan$ is in fact a bijection from $\p{-\frac{\pi}{2}, \frac{\pi}{2}} \to \R$, and thus has an inverse function $\tan^{−1} \colon \R \to \p{-\frac{\pi}{2}, \frac{\pi}{2}}$ (this function is called the _arctangent function_). Show that $\tan^{−1}$ is differentiable and $\deriv{}{x} \tan^{-1}\p{x} = \frac{1}{1 + x^2}$.

<solution>

Since $\sin\p{x}$, $\cos\p{x}$ are differentiable and $\cos\p{x} \neq 0$ on $\p{-\frac{\pi}{2}, \frac{\pi}{2}}$, the quotient rule implies that $\tan\p{x}$ is differentiable with

$$
\deriv{}{x} \tan\p{x} = \frac{\cos^2\p{x} + \sin^2\p{x}}{\cos^2\p{x}} = 1 + \tan^2\p{x}.
$$

Note that $\deriv{}{x} \tan\p{x} \geq 1 > 0$ for all $x$, so $\tan\p{x}$ is strictly increasing, hence injective.

Next, the definition of $\pi$ and the identity $\sin\p{2x} = 2\sin\p{x}\cos\p{x}$ imply that $\frac{\pi}{2}$ is the smallest positive $0$ of $\cos\p{x}$. Since $\cos\p{x}$ is even, continuous, and $\cos\p{0} = 1 > 0$, it follows from the intermediate value theorem that $\cos\p{x} > 0$ on $\p{-\frac{\pi}{2}, \frac{\pi}{2}}$. Moreover, we already know that $\sin\p{x} > 0$ on $\p{0, \pi}$.

In summary, $\tan\p{x} > 0$ for $x \in \p{0, \frac{\pi}{2}}$, $\lim_{x\to\frac{\pi}{2}} \cos\p{x} = 0$, and $\lim_{x\to\frac{\pi}{2}} \sin\p{x} = \sin\p{\frac{\pi}{2}} > 0$, so

$$
\lim_{x\to\frac{\pi}{2}} \tan\p{x} = +\infty.
$$

Since $\tan\p{x}$ is odd, we immediately get

$$
\lim_{x\to-\frac{\pi}{2}} \tan\p{x}
  = \lim_{x\to\frac{\pi}{2}} \tan\p{-x}
  = \lim_{x\to\frac{\pi}{2}} \p{-\tan\p{x}}
  = -\infty
$$

as well. The intermediate value theorem implies that $\tan$ is surjective. Indeed, $\tan$ is differentiable, so it's automatically continuous. Given $y \in \R$, we let $M = \abs{y} + 1$. By the limits we computed above, there exist $x_1, x_2 \in \p{-\frac{\pi}{2}, \frac{\pi}{2}}$ such that

$$
\tan\p{x_1} < -M < y < M < \tan\p{x_2}.
$$

Putting everything together, $\tan$ is a bijection, so $\tan^{-1}$ exists. Moreover, as we showed earlier, $\deriv{}{x} \tan\p{x} > 0$ and is continuous, so by the inverse function theorem, $\tan^{-1}$ is differentiable everywhere and satisfies

$$
\deriv{}{x} \tan^{-1}\p{x} = \frac{1}{1 + \tan^2\p{\tan^{-1}\p{x}}} = \frac{1}{1 + x^2}.
$$

</solution>
