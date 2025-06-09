---
title: Homework 9
date: "2025-06-08"
tags:
    - periodic functions
    - inner products
    - convolution
publish: yes
---

# Homework 9

## Table of Contents

## Problem 2

Prove Lemma 5.2.7. (_Hint_: use Lemma 5.2.5 frequently. For the Cauchy--Schwarz inequality, begin with the positivity property $\inner{f, f} \geq 0$, but with $f$ replaced by the function $f \norm{g}_2^2 - \inner{f, g}g$, and then simplify using Lemma 5.2.5. You may have to treat the case $\norm{g}_2 = 0$ separately. Use the Cauchy--Schwarz inequality to prove the triangle inequality.)

<lemma> 5.2.7

Let $f, g \in C\p{\R/Z; \C}$.

1. (Non-degeneracy) We have $\norm{f}_2 = 0$ if and only if $f = 0$.
2. (Cauchy--Schwarz inequality) We have $\abs{\inner{f, g}} \leq \norm{f}_2 \norm{g}_2$.
3. (Triangle inequality) We have $\norm{f + g}_2 \leq \norm{f}_2 + \norm{g}_2$.
4. (Pythagoras' theorem) If $\inner{f, g} = 0$, then $\norm{f + g}_2^2 = \norm{f}_2^2 + \norm{g}_2^2$.
5. (Homogeneity) We have $\norm{cf}_2 = \abs{c} \norm{f}_2$ for all $c \in \C$.

</lemma>

<lemma> 5.2.5

Let $f, g, h \in \C\p{\R/\Z; \C}$.

1. (Hermitian property) We have $\inner{g, f} = \conj{\inner{f, g}}$.
2. (Positivity) We have $\inner{f, f} \geq 0$. Furthermore, we have $\inner{f, f} = 0$ if and only if $f = 0$ (i.e., $f\p{x} = 0$ for all $x \in \R$).
3. (Linearity in the first variable) We have $\inner{f + g, h} = \inner{f, h} + \inner{g, h}$. For any complex number $c$, we have $\inner{cf, g} = c\inner{f, g}$.
4. (Antilinearity in the second variable) We have $\inner{f, g + h} = \inner{f, g} + \inner{f, h}$. For any complex number $c$, we have $\inner{f, cg} = \conj{c} \inner{f, g}$.

</lemma>

<solution>

1. At this stage, we have already proven that $\inner{-, -}$ is an inner product. Thus, $\norm{f}_2 = 0 \iff \inner{f, f} = 0 \iff f = 0$.
2. Following the hint,

    $$
    \begin{aligned}
      0
        &\leq \inner{f \norm{g}_2^2 - \inner{f, g}g, f \norm{g}_2^2 - \inner{f, g}g} \\
        &= \norm{f}_2^2 \norm{g}_2^4 + \abs{\inner{f, g}}^2 \norm{g}_2^2 - \norm{g}_2^2 \conj{\inner{f, g}} \inner{f, g} - \norm{g}_2^2 \inner{f, g} \conj{\inner{f, g}} \\
        &= \norm{f}_2^2 \norm{g}_2^4 - \abs{\inner{f, g}}^2 \norm{g}_2^2.
    \end{aligned}
    $$

    Rearranging, we get

    $$
    \abs{\inner{f, g}}^2 \norm{g}_2^2 \leq \norm{f}_2^2 \norm{g}_2^4.
    $$

    if $\norm{g}_2 = 0$, then $g = 0$ and the Cauchy--Schwarz inequality is trivial. Otherwise, we may divide through by $\norm{g}_2^2$ and take square roots to get

    $$
    \abs{\inner{f, g}} \leq \norm{f}_2 \norm{g}_2.
    $$

3. We square both sides, apply the triangle inequality (for complex numbers), and Cauchy--Schwarz, which give

    $$
    \norm{f + g}_2^2
      \leq \norm{f}_2^2 + \norm{g}_2^2 + 2\abs{\inner{f, g}}
      \leq \norm{f}_2^2 + \norm{g}_2^2 + 2\norm{f}_2\norm{g}_2
      = \p{\norm{f}_2 + \norm{g}_2}^2.
    $$

    Taking square roots gives the triangle inequality.

4. Note that if $\inner{f, g} = 0$, then $\inner{g, f} = \conj{\inner{f, g}} = 0$. Thus,

    $$
    \norm{f + g}_2^2
      = \norm{f}_2^2 + \norm{g}_2^2 + \inner{f, g} + \inner{g, f}
      = \norm{f}_2^2 + \norm{g}_2^2.
    $$

5. We have

    $$
    \norm{cf}
      = \inner{cf, cf}
      = \abs{c}^2 \inner{f, f}
      = \abs{c}^2 \norm{f}_2^2.
    $$

    Taking square roots gives the identity.

</solution>

## Problem 6

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

## Problem 7

Prove Lemma 5.4.4. (_Hint_: to prove that $f * g$ is continuous, you will have to do something like use the fact that $f$ is bounded, and $g$ is uniformly continuous, or vice versa. To prove that $f*g = g*f$, you will need to use the periodicity to "cut and paste" the interval $\br{0, 1}$.)

<lemma> 5.4.4

Let $f, g, h \in C\p{\R/\Z; \C}$.

1. (Closure) The convolution $f * g$ is continuous and $\Z$-periodic. In other words, $f * g \in C\p{\R/Z; \C}$.
2. (Commutativity) We have $f * g = g * f$.
3. (Bilinearity) We have $f * \p{g + h} = f*g + f*h$ and $\p{f + g} * h = f*h + g*h$. For any complex number $c$, we have $c\p{f*g} = \p{cf}*g = f*\p{cg}$.

</lemma>

<solution>

1. If $\norm{f}_\infty = 0$, then $f * g = 0 \in C\p{\R/\Z; \C}$. Otherwise, since $g \in C\p{\R/\Z; \C}$, it is uniformly continuous, so given $\varepsilon > 0$, there exists $\delta > 0$ such that

    $$
    \abs{z - z'} < \delta \implies \abs{g\p{z} - g\p{z'}} < \frac{\varepsilon}{\norm{f}_\infty}.
    $$

    Assume $\abs{x - x'} < \delta$. Then for any $y \in \br{0, 1}$, we have $\abs{\p{x - y} - \p{x' - y}} = \abs{x - x'} < \delta$, and so

    $$
    \begin{aligned}
      \abs{\p{f * g}\p{x} - \p{f * g}\p{x'}}
        &\leq \int_0^1 \abs{f\p{y}} \abs{g\p{x - y} - g\p{x' - y}} \,\diff{y} \\
        &< \int_0^1 \norm{f}_\infty \cdot \frac{\varepsilon}{\norm{f}_\infty} \,\diff{y} \\
        &= \varepsilon.
    \end{aligned}
    $$

    This shows that $f * g$ is continuous. To show $\Z$-periodicity,

    $$
    \p{f * g}\p{x + 1}
      = \int_0^1 f\p{y}g\p{x + 1 - y} \,\diff{y}
      = \int_0^1 f\p{y}g\p{x - y} \,\diff{y}
      = \p{f * g}\p{x}
    $$

    by $\Z$-periodicity of $g$.

2. First, for any $h \in C\p{\R/\Z; \C}$ and $k \in \Z$, the substitution $u = y + k$ gives

    $$
    \int_a^b h\p{y} \,\diff{y}
      = \int_{a+k}^{b+k} h\p{u - k} \,\diff{u}
      = \int_{a+k}^{b+k} h\p{y} \,\diff{y}. \tag{$*$}
    $$

    (In the last line, $u$ is a dummy variable, so I can swap it for any symbol I like.)

    In the following computation, we let $k = \lfloor x \rfloor$ and use the substitution $u = x - y$.

    $$
    \begin{aligned}
      \p{f * g}\p{x}
        &= \int_0^1 f\p{y} g\p{x - y} \,\diff{y} \\
        &= -\int_x^{x-1} f\p{x - u} g\p{u} \,\diff{u} \\
        &= \int_{x-1}^x g\p{u} f\p{x - u} \,\diff{u} \\
        &= \int_{x-1}^k g\p{u} f\p{x - u} \,\diff{u} + \int_k^x g\p{u} f\p{x - u} \,\diff{u}.
    \end{aligned}
    $$

    By ($*$) above, $\int_k^x g\p{u} f\p{x - u} \,\diff{u} = \int_{k-1}^{x-1} g\p{u} f\p{x - u} \,\diff{u}$, so by ($*$) again,

    $$
    \begin{aligned}
      \p{f * g}\p{x}
        &= \int_{x-1}^k g\p{u} f\p{x - u} \,\diff{u} + \int_{k-1}^{x-1} g\p{u} f\p{x - u} \,\diff{u} \\
        &= \int_{k-1}^k g\p{u} f\p{x - u} \,\diff{u} \\
        &= \int_0^1 g\p{u} f\p{x - u} \,\diff{u} \\
        &= \p{g * f}\p{x}.
    \end{aligned}
    $$

3. Since convolution is commutative, it suffices to show that it is linear in the first component. By linearity of the Riemann integral,

    $$
    \begin{aligned}
      \br{\p{f + cg} * h}\p{x}
        &= \int_0^1 \p{f + cg}\p{y} h\p{x - y} \,\diff{y} \\
        &= \int_0^1 f\p{y} h\p{x - y} \,\diff{y} + c\int_0^1 g\p{y} h\p{x - y} \,\diff{y} \\
        &= \p{f * h}\p{x} + c\p{g * h}\p{x}.
    \end{aligned}
    $$

    Plugging in $f = 0$ gives homogeneity, and $c = 1$ gives additivity.

</solution>
