---
title: Worksheet 4
date: "2023-05-01"
tags:
    - matrix representations
publish: yes
---

# Worksheet 4

## Problem 3

Let $V = \C$ be the vector space of complex numbers over the field $\R$. Define the function $\func{T}{V}{V}$ by $T\p{z} = \conj{z}$, where $\conj{z}$ is the complex conjugate of $z$.

1. Prove that $T$ is additive.
2. Prove that $T$ is linear.
3. Let $\beta = \set{1, i}$. Prove that $\beta$ is a basis of $V$ over $\R$.
4. Compute $\br{T}_\beta$.

<solution>

Complex conjugation is defined as follows: given $z \in \C$, we can always write $z = a + bi$, where $a, b \in \R$. Then

$$
\conj{z} \coloneqq a - bi.
$$

1. Let $z, w \in \C$. Then there exist $a, b, c, d \in \R$ such that $z = a + bi$ and $w = c + di$. Recall that with this notation, addition in $\C$ is defined as $z + w = \p{a + c} + \p{b + d}i$. Thus,

    $$
    \begin{aligned}
      T\p{z + w}
        &= \conj{z + w} \\
        &= \conj{\p{a + c} + \p{b + d}i} \\
        &= a + c - \p{b + d}i \\
        &= \p{a - bi} + \p{c - di} \\
        &= \conj{z} + \conj{w} \\
        &= T\p{z} + T\p{w}.
    \end{aligned}
    $$

2. Let $z = a + bi \in \C$ and let $c \in \R$. Note that by definition, $cz = ca + cbi$, and that $ca, cb \in \R$. Thus,

    $$
    \begin{aligned}
      T\p{cz}
        &= \conj{cz} \\
        &= \overline{ca + cbi} \\
        &= ca - cbi \\
        &= c\p{a - bi} \\
        &= c \conj{z} \\
        &= cT\p{z}.
    \end{aligned}
    $$

3. By definition, $\beta$ spans $V$ (every complex number can be written in the form $a + bi$, where $a, b \in \R$). We only need to show that $\beta$ is linearly independent. Assume that $z = a + bi = 0$ for some $a, b \in \R$. Then because $T$ is linear, we have $T\p{z} = 0$. Thus,

    $$
    \begin{cases}
      0 = z + T\p{z} = \p{a + bi} + \p{a - bi} = 2a, \\
      0 = z - T\p{z} = \p{a + bi} - \p{a - bi} = 2bi.
    \end{cases}
    $$

    Thus, $a = b = 0$ (since $2 \neq 0$ and $i \neq 0$ in $\C$).

4. Recall that

    $$
    \br{T}_\beta
      = \begin{pmatrix}
          \vert & \vert \\
          \br{T\p{1}}_\beta & \br{T\p{i}}_\beta \\
          \vert & \vert
        \end{pmatrix},
    $$

    so we just need to write $T\p{1}$ and $T\p{i}$ as linear combinations of $\beta$:

    $$
    \begin{aligned}
      T\p{1} = 1 = 1 + 0i
        &\implies \br{T\p{1}}_\beta = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \\
      T\p{i} = -i = 0 + \p{-1}i
        &\implies \br{T\p{i}}_\beta = \begin{pmatrix} \phantom{-}0 \\ -1 \end{pmatrix}
    \end{aligned}
    $$

    Putting everything together,

    $$
    \br{T}_\beta
      = \begin{pmatrix}
          1 & \phantom{-}0 \\
          0 & -1
        \end{pmatrix}.
    $$

</solution>

## Problem 5

Let $V$ be a vector space of dimension $n$, let $\func{T}{V}{V}$ be a linear function. Suppose that $W$ is a $T$-invariant subspace of $V$ with dimension $k$. Show that there exists a basis $\beta$ of $V$ such that

$$
\br{T}_\beta = \begin{pmatrix} A & B \\ O & C \end{pmatrix},
$$

where $A$ is a $k \times k$ matrix, $B$ is a $k \times \p{n - k}$ matrix, $C$ is an $\p{n - k} \times \p{n - k}$ matrix, and $O$ is the $\p{n - k} \times k$ zero matrix.

<solution>

If $\beta = \set{v_1, v_2, \ldots, v_n}$ is a basis of $V$, then recall that

$$
\br{T}_\beta
  = \begin{pmatrix}
      \vert & \vert &  & \vert \\
      \br{T\p{v_1}}_\beta & \br{T\p{v_2}}_\beta & \cdots & \br{T\p{v_n}}_\beta \\
      \vert & \vert &  & \vert \\
    \end{pmatrix}.
$$

So we need to find a basis $\beta$ such that if $1 \leq i \leq k$, then

$$
\br{T\p{v_i}}_\beta
  = \begin{pmatrix} a_{1i} \\ a_{2i} \\ \vdots \\ a_{ki} \\ 0 \\ \vdots \\ 0 \end{pmatrix}
  \iff T\p{v_i} = a_{1i} v_1 + a_{2i} v_2 + \cdots + a_{ki} v_k + 0v_{k+1} + \cdots + 0v_n,
$$

i.e., a basis such that $T\p{v_i}$ can be written as a linear combination of just the first $k$ basis vectors.

Let $\set{v_1, v_2, \ldots, v_k}$ be a basis of $W$, and extend this to a basis $\beta = \set{v_1, v_2, \ldots, v_k, v_{k+1}, \ldots, v_n}$ of $V$. Let $1 \leq i \leq k$. Since $W$ is $T$-invariant and $v_i \in W$, this means that $T\p{v_i} \in W$. But $\set{v_1, v_2, \ldots, v_k}$ is a basis of $W$, so in particular, $W = \span\set{v_1, v_2, \ldots, v_k}$. Thus, by definition of span, there exist scalars $a_{1i}, a_{2i}, \ldots, a_{ki} \in \F$ such that

$$
\begin{aligned}
  T\p{v_i}
    &= a_{1i} v_1 + a_{2i} v_2 + \cdots + a_{ki} v_k \\
    &= a_{1i} v_1 + a_{2i} v_2 + \cdots + a_{ki} v_k + 0v_{k+1} + \cdots + 0v_n.
\end{aligned}
$$

Hence, the claim holds with $A$ defined by $A_{ij} = a_{ij}$.

Note that we can always write $T$ as an $n \times n$ matrix, so we don't need to deal with $B$ or $C$ since we didn't make any assumptions on the last $n - k$ columns of $\br{T}_\beta$. We only needed to deal with the first $k$ columns and show that they have the special form above.

</solution>
