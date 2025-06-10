---
title: Homework 9
date: "2025-06-10"
tags:
    - inner products
    - Fourier stuff
publish: yes
---

# Homework 9

## Table of Contents

## Exercise 5.3.3

Prove Corollary 5.3.6. (_Hint_: use Lemma 5.3.5. For the second identity, either use Pythagoras’ theorem and induction, or substitute $f = \sum_{n=-N}^N c_n e_n$ and expand everything out.)

<corollary> 5.3.6

Let $f = \sum_{n=-N}^N c_n e_n$ be a trigonometric polynomial. Then we have the formula

$$
c_n = \inner{f, e_n}
$$

for all integers $-N \leq n \leq N$. Also, we have $0 = \inner{f, e_n}$ whenever $n > N$ or $n < -N$. Also, we have the identity

$$
\norm{f}_2^2 = \sum_{n=-N}^N \abs{c_n}^2.
$$

</corollary>

<solution>

Recall that $\set{e_n}_{n \in \Z}$ is orthonormal, which means that $\inner{e_n, e_m} = \delta_{nm}$. If $-N \leq n \leq N$, then

$$
\inner{f, e_n}
  = \sum_{m=-N}^N c_m \inner{e_n, e_m}
  = c_n.
$$

If $n \notin \br{-N, N}$, then for all $n \neq m$ for all $m \in \br{-N, N}$, so

$$
\inner{f, e_n}
  = \sum_{m=-N}^N c_m \inner{e_n, e_m}
  = \sum_{m=-N}^N 0
  = 0.
$$

Finally,

$$
\begin{aligned}
  \norm{f}_2^2
    &= \inner{\sum_{n=-N}^N c_ne_n, \sum_{m=-N}^N c_me_m} \\
    &= \sum_{n=-N}^N \sum_{m=-N}^N c_n \conj{c_m} \inner{e_n, e_m} \\
    &= \sum_{n=-N}^N c_n \conj{c_n} \\
    &= \sum_{n=-N}^N \abs{c_n}^2.
\end{aligned}
$$

</solution>

## Exercise 5.5.4

Let $f \in C\p{\R/\Z; \C}$ be a function which is differentiable, and whose derivative $f'$ is also continuous (where we define derivatives of complex-valued functions in the same way as for their real-valued counterparts). Show that $f'$ also lies in $C\p{\R/\Z; \C}$, and that $\widehat{f'}\p{n} = 2\pi in\widehat{f}\p{n}$ for all integers $n$.

<solution>

If we set $g\p{x} = f\p{x + 1}$, then $f\p{x} = g\p{x}$ since $f$ is $\Z$-periodic. Thus, $f' = g'$ and by the chain rule, $f'\p{x} = f'\p{x + 1}$. Lastly, integrating by parts with

$$
\diff u = f'\p{x} \,\diff{x},
\quad v = e^{-2\pi inx}
\implies u = f\p{x},
\quad \diff v = -2\pi in e^{-2\pi inx} \,\diff{x},
$$

we get

$$
\begin{aligned}
  \widehat{f'}\p{n}
     = \inner{f', e_n}
    &= \int_0^1 f'\p{x} e^{-2\pi inx} \,\diff{x} \\
    &= \left. f\p{x} e^{-2\pi inx} \right\rvert_{x=0}^{x=1} + 2\pi in \int_0^1 f\p{x} e^{-2\pi inx} \,\diff{x} \\
    &= 2\pi in \inner{f, e_n} \\
    &= 2\pi in \widehat{f}\p{n}.
\end{aligned}
$$

Here, we used that $f\p{x} e^{-2\pi inx}$ is $\Z$-periodic to eliminate the boundary terms.

</solution>
