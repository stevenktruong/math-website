---
title: Homework 8
date: "2025-06-08"
tags:
    - periodic functions
    - inner products
publish: yes
---

# Homework 8

## Table of Contents

## Exercise 5.1.2

Prove Lemma 5.1.5. (_Hint_: for (i), first show that $f$ is bounded on $\br{0, 1}$.)

<lemma> 5.1.5

1. (Boundedness) If $f \in C\p{\R/\Z; \C}$, then $f$ is bounded (i.e., there exists a real number $M>0$ such that $\abs{f\p{x}} \leq M$ for all $x \in \R$).
2. (Vector space and algebra properties) If $f, g \in C\p{\R/\Z; \C}$, then the functions $f+g$, $f-g$, and $fg$ are also in $C\p{\R/\Z; \C}$. Also, if $c$ is any complex number, then the function $cf$ is also in $C\p{\R/\Z; \C}$.
3. (Closure under uniform limits) If $\p{f_n}_{n=1}^\infty$ is a sequence of functions in $C\p{\R/\Z; \C}$ which converges uniformly to another function $\func{f}{\R}{\C}$, then $f$ is also in $C\p{\R/\Z; \C}$.

</lemma>

<solution>

1. $\br{0, 1}$ is compact and $f$ is continuous, so by the extreme value theorem, there exists $M > 0$ such that $\abs{f\p{x}} \leq M$ for $x \in \br{0, 1}$. Given an arbitrary $x \in \R$, there exist $k \in \Z$ and $r \in \br{0, 1}$ such that $x = k + r$, so

    $$
    \abs{f\p{x}}
      = \abs{f\p{r}}
      \leq M.
    $$

2. Sums, products, and scalar multiplication all preserve continuity, so all these functions are continuous. To check $\Z$-periodicity,

    $$
    \p{f + cg}\p{x + 1}
      = f\p{x + 1} + cg\p{x + 1}
      = f\p{x} + cg\p{x}
      = \p{f + cg}\p{x}.
    $$

    Using $c = \pm 1$ shows that $f \pm g$ is $\Z$-periodic. Setting $f = 0$, we see that $cg$ is $\Z$-periodic. Lastly,

    $$
    \p{fg}\p{x + 1}
      = f\p{x+1} g\p{x+1}
      = f\p{x} g\p{x}
      = \p{fg}\p{x},
    $$

    so $fg$ is also $\Z$-periodic.

3. Since $f$ is the uniform limit of the continuous functions $f_n$, $f$ is automatically continuous. By $\Z$-periodicity of $f_n$ for each $n \in \N$,

    $$
    f\p{x+1}
      = \lim_{n\to\infty} f_n\p{x}
      = \lim_{n\to\infty} f_n\p{x+1}
      = f\p{x},
    $$

    so $f$ is $\Z$-periodic.

</solution>

## Exercise 5.2.1

Prove Lemma 5.2.5. (_Hint_: the last part of (ii) is a little tricky. You may need to prove by contradiction, assuming that $f$ is not the zero function, and then show that $\int_{\br{0,1}} \abs{f\p{x}}^2$ is strictly positive. You will need to use the fact that $f$, and hence $\abs{f}$, is continuous, to do this.)

<lemma> 5.2.5

Let $f, g, h \in \C\p{\R/\Z; \C}$.

1. (Hermitian property) We have $\inner{g, f} = \conj{\inner{f, g}}$.
2. (Positivity) We have $\inner{f, f} \geq 0$. Furthermore, we have $\inner{f, f} = 0$ if and only if $f = 0$ (i.e., $f\p{x} = 0$ for all $x \in \R$).
3. (Linearity in the first variable) We have $\inner{f + g, h} = \inner{f, h} + \inner{g, h}$. For any complex number $c$, we have $\inner{cf, g} = c\inner{f, g}$.
4. (Antilinearity in the second variable) We have $\inner{f, g + h} = \inner{f, g} + \inner{f, h}$. For any complex number $c$, we have $\inner{f, cg} = \conj{c} \inner{f, g}$.

</lemma>

<solution>

Note that if $f = u + iv$, where $u, v$ are real-valued functions, then

$$
\int_0^1 u + iv = \int_0^1 u + i\int_0^1 v.
$$

In particular, by linearity of integration,

$$
\conj{\int_0^1 f} = \int_0^1 u - i\int_0^1 v = \int_0^1 \conj{f}. \tag{$*$}
$$

1. From ($*$),

    $$
    \conj{\inner{f, g}}
      = \conj{\int_0^1 f\conj{g}}
      = \int_0^1 \conj{f}g
      = \int_0^1 g\conj{f}
      = \inner{g, f}.
    $$

2. For any $f \in C\p{\R/\Z; \C}$, $\inner{f, f} = \int_0^1 \abs{f}^2 \geq 0$, where we used $z\conj{z} = \abs{z}^2$ for any complex number $z$. If $f = 0$, then $\inner{f, f} = \int_0^1 0 = 0$. Conversely, suppose $f \neq 0$. Then there exists $x_0 \in \br{0, 1}$ such that $\abs{f\p{x_0}} > 0$. Let $\varepsilon = \frac{\abs{f\p{x_0}}}{2} > 0$, so by continuity of $\abs{f}$, there exists $\delta > 0$ such that

    $$
    x \in \p{x_0 - \delta, x_0 + \delta} \cap \p{0, 1} \implies \abs{f\p{x}} > \abs{f\p{x_0}} - \varepsilon = \varepsilon.
    $$

    Let $\p{a, b} = \p{x_0 - \delta, x_0 + \delta} \cap \p{0, 1}$ and note that $a < b$. Then

    $$
    \inner{f, f}
      = \int_0^1 \abs{f}^2
      \geq \int_a^b \varepsilon^2
      = \varepsilon^2 \p{b - a}
      > 0.
    $$

3. This follows from linearity of integration.
4. Using (1) and (iii),

    $$
    \inner{f, g + ch}
      = \conj{\inner{g + ch, f}}
      = \conj{\inner{g, f}} + \conj{c} \conj{\inner{h, f}}
       = \inner{f, g} + \conj{c} \inner{f, h}.
    $$

    Setting $c = 1$, we get the first part, and setting $g = 0$, we get the second part.

</solution>
