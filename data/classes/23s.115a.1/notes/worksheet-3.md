---
title: Worksheet 3
date: "2023-05-01"
tags:
    - rank-nullity
publish: yes
---

# Worksheet 3

## Problem 2

See [these notes](../../23s.115a.1/formal-calculus).

## Problem 5

Let $V$ and $W$ be finite-dimensional vector spaces and $\func{T}{V}{W}$ be a linear function.

1. Prove that if $\dim V < \dim W$, then $T$ cannot be surjective.
2. Prove that if $\dim V > \dim W$, then $T$ cannot be injective.

<solution>

Since $V$ is finite-dimensional and $T$ is linear, we may use the rank-nullity theorem, which tells us that

$$
\dim R\p{T} + \dim N\p{T} = \dim V.
$$

Here, $R\p{T}$ is the range of $T$ and $N\p{T}$ is the null-space (or kernel) of $T$.

1. Since $\dim V < \dim W$ and $0 \leq \dim N\p{T}$, we get

    $$
    \begin{aligned}
      \dim R\p{T}
        &\leq \dim R\p{T} + \dim N\p{T} \\
        &= \dim V \\
        &< \dim W.
    \end{aligned}
    $$

    If $T$ were surjective, then $R\p{T} = W \implies \dim R\p{T} = \dim W$, which is impossible.

2. Since $R\p{T} \subseteq W$, we know $\dim R\p{T} \leq \dim W$. Thus, by rank-nullity,

    $$
    \begin{aligned}
      \dim N\p{T}
        &= \dim V - \dim R\p{T} \\
        &\geq \dim V - \dim W \\
        &> 0.
    \end{aligned}
    $$

    Thus, $N\p{T}$ is non-trivial (i.e., $N\p{T} \neq \set{0}$), so $T$ cannot be injective.

</solution>
