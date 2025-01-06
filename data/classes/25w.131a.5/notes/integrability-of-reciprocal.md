---
title: Integrability of 1/f
date: "2023-04-30"
tags:
    - Riemann integral
publish: yes
---

# Integrability of $\frac{1}{f}$

## Table of Contents

## Swapping Argument

This first section isn't too important, but I figured it'd be good for you to see the precise statement of the swapping argument done in class. (I did this in office hours, but I really overcomplicated it and made a mistake proving it, but this version should be correct.)

<lemma>

Let $I \subseteq \R$ be a (non-empty) interval and $\func{h}{I}{\R}$ be a function such that $h\p{x, y} = -h\p{y, x}$ for all $x, y \in I$. Then

$$
\sup_{x, y \in I} h\p{x, y} = \sup_{x, y \in I} \abs{h\p{x, y}}.
$$

</lemma>

<proof>

Since $h\p{x, y} \leq \abs{h\p{x, y}}$, we already have

$$
\sup_{x, y \in I} h\p{x, y} \leq \sup_{x, y \in I} \abs{h\p{x, y}}.
$$

For the reverse inequality, let $u, v \in I$. Then there are two cases: $h\p{u, v} \geq 0$ and $h\p{u, v} < 0$. In the first case,

$$
\abs{h\p{u, v}} = h\p{u, v} \leq \sup_{x, y \in I} h\p{x, y}.
$$

In the second case,

$$
\abs{h\p{u, v}} = -h\p{u, v} = h\p{v, u} \leq \sup_{x, y \in I} h\p{x, y}.
$$

Thus, we have established the inequality

$$
\abs{h\p{u, v}} \leq \sup_{x, y \in I} h\p{x, y}
$$

for all $u, v \in I$, which proves the lemma.

</proof>

In the problem below, we will use this lemma twice: once on the function $h\p{x, y} = \frac{1}{f\p{x}} - \frac{1}{f\p{y}}$ and again on $h\p{x, y} = f\p{x} - f\p{y}$. The lemma will tell us

$$
\begin{gathered}
  \sup_{x, y \in I} \p{\frac{1}{f\p{x}} - \frac{1}{f\p{y}}} = \sup_{x, y \in I} \abs{\frac{1}{f\p{x}} - \frac{1}{f\p{y}}} \\[4ex]
  \sup_{x, y \in I} \p{f\p{x} - f\p{y}} = \sup_{x, y \in I} \abs{f\p{x} - f\p{y}}.
\end{gathered}
$$

## The Problem

<proposition>

Assume $\func{f}{\br{a,b}}{\R}$ is a Riemann integrable function and that there exists $c > 0$ such that $\abs{f\p{x}} \geq c$ for all $x \in \br{a, b}$. Then $\frac{1}{f}$ is also Riemann integrable.

</proposition>

**Scratchwork**: Given $\epsilon > 0$, we need to find a partition $P$ of $\br{a, b}$ such that

$$
U\p{\frac{1}{f}, P} - L\p{\frac{1}{f}, P} < \epsilon.
$$

The only real fact we have to work with is that $f$ is Riemann integrable, so we need to relate $U\p{\frac{1}{f}, P} - L\p{\frac{1}{f}, P}$ to $\p{f, P} - L\p{f, P}$. Let $P$ be an partition of $\br{a, b}$. Then

$$
U\p{\frac{1}{f}, P} - L\p{\frac{1}{f}, P}
  = \sum_{k=1}^n \br{M\p{\frac{1}{f}, \br{t_{k-1}, t_k}} - m\p{\frac{1}{f}, \br{t_{k-1}, t_k}}} \p{t_k - t_{k-1}}.
$$

Let $I_k = \br{t_{k-1}, t_k}$. Our goal is to bound $M\p{\frac{1}{f}, I_k} - m\p{\frac{1}{f}, I_k}$ by (a constant independent of $k$ and $P$) times $M\p{f, I_k} - m\p{f, I_k}$.

$$
\begin{aligned}
  M\p{\frac{1}{f}, I_k} - m\p{\frac{1}{f}, I_k}
    &= \sup_{x \in I_k} \frac{1}{f\p{x}} + \sup_{y \in I_k} \p{-\frac{1}{f\p{y}}} \\
    &= \sup_{x, y \in I_k} \p{\frac{1}{f\p{x}} - \frac{1}{f\p{y}}} \\
    &= \sup_{x, y \in I_k} \abs{\frac{1}{f\p{x}} - \frac{1}{f\p{y}}}
      && \p{\text{Lemma}} \\
    &= \sup_{x, y \in I_k} \abs{\frac{f\p{x} - f\p{y}}{f\p{x} f\p{y}}} \\
    &\leq \frac{1}{c^2} \sup_{x, y \in I_k} \abs{f\p{x} - f\p{y}}
      && \p{\frac{1}{\abs{f\p{x}}} \leq \frac{1}{c}} \\
    &= \frac{1}{c^2} \sup_{x, y \in I_k} \p{f\p{x} - f\p{y}}
      && \p{\text{Lemma again}} \\
    &= \frac{1}{c^2} \br{\sup_{x \in I_k} f\p{x} - \inf_{y \in I_k} f\p{y}} \\
    &=  \frac{1}{c^2} \br{M\p{f, I_k} - m\p{f, I_k}}.
\end{aligned}
$$

This tells us how to pick our partition.

<proof>

Let $\epsilon > 0$. Since $f$ is Riemann integrable, there exists a partition $P$ of $\br{a, b}$ such that

$$
U\p{f, P} - L\p{f, P} < c^2 \varepsilon.
$$

By the calculation above,

$$
\begin{aligned}
  U\p{\frac{1}{f}, P} - L\p{\frac{1}{f}, P}
    &= \sum_{k=1}^n \underbrace{\br{M\p{\frac{1}{f}, \br{t_{k-1}, t_k}} - m\p{\frac{1}{f}, \br{t_{k-1}, t_k}}}}_{\leq \frac{1}{c^2} \br{M\p{f, I_k} - m\p{f, I_k}}} \p{t_k - t_{k-1}} \\
    &\leq \frac{1}{c^2} \sum_{k=1}^n \br{M\p{f, I_k} - m\p{f, I_k}} \p{t_k - t_{k-1}} \\
    &= \frac{1}{c^2} \br{U\p{f, P} - L\p{f, P}} \\
    &< \frac{1}{c^2} \cdot c^2\epsilon \\
    &= \epsilon.
\end{aligned}
$$

</proof>
