---
title: Worksheet 2
date: "2023-05-01"
tags:
    - linear independence
publish: yes
---

# Worksheet 2

## Problem 4

Let $V$ be a vector space, let $u, v \in V$ be distinct. Show that $\set{u, v}$ is linearly dependent if and only if $u$ and $v$ are multiples of each other.

<solution>

We have two directions to prove.

"$\implies$"

Assume that $\set{u, v}$ is linearly dependent. Then there exist $a, b \in \F$ not both zero such that $au + bv = 0$. If $a \neq 0$, then we may multiply both sides by $a^{-1}$ to get

$$
u + \frac{b}{a} v = 0 \implies u = \p{-\frac{b}{a}} v.
$$

Otherwise, $b \neq 0$, and we analogously get

$$
v = \p{-\frac{a}{b}} u,
$$

so in both cases, $u$ and $v$ are multiples of each.

"$\impliedby$"

Suppose $u$ and $v$ are multiples of each other. Without loss of generality, we assume that $u$ is a multiple of $v$, i.e., there exists a scalar $c \in \F$ such that $u = cv$. In the other case, we can swap $u$ and $v$ in the following proof. Rearranging $u = cv$, we get

$$
0 = u - cv = 1u + \p{-c}v.
$$

Thus, the zero vector is a non-trivial linear combination of $u$ and $v$ since $1 \neq 0$, so $\set{u, v}$ is linearly dependent.

</solution>

## Problem 5

Let $\F$ be a field of characteristic not equal to two, and let $V$ be a vector space over $\F$.

1. Let $u, v \in V$ be distinct. Prove that $\set{u, v}$ is linearly independent if and only if $\set{u + v, u - v}$ is linearly independent. What goes wrong if $\F$ has characteristic two?
2. Let $u, v, w \in V$ be distinct. Prove that $\set{u, v, w}$ is linearly independent if and only if $\set{u + v, u + w, v + w}$ is linearly independent. What goes wrong if $\F$ has characteristic two?

<solution>

1. "$\implies$"

    Assume that $\set{u, v}$ is linearly independent. Let's show that $\set{u + v, u - v}$ is linearly independent. Suppose we have scalars $a, b \in \F$ such that

    $$
    a\p{u + v} + b\p{u - v} = 0.
    $$

    We need to show that $a = b = 0$. Distributing and refactoring, we get

    $$
    \p{a + b}u + \p{a - b}v = 0,
    $$

    but $\set{u, v}$ is linearly independent, so this forces

    $$
    \begin{cases}
      a + b = 0, \\
      a - b = 0.
    \end{cases}
    $$

    Adding the equations together and subtracting them, we get the system

    $$
    \begin{cases}
      2a = 0, \\
      2b = 0.
    \end{cases}
    $$

    Since $\F$ has characteristic different from $2$, we know $2 \neq 0$, so $\frac{1}{2} \in \F$. Thus, multiplying the equations by $\frac{1}{2}$, we get $a = b = 0$.

    "$\impliedby$"

    Assume that $\set{u + v, u - v}$ is linearly independent. Now assume $a, b \in \F$ are such that $au + bv = 0$. We need to show that $a = b = 0$.

    In order to use the fact that $\set{u + v, u - v}$, we need to turn $au + bv$ into a linear combination of $u + v$ and $u - v$. Let's work backwards: assume there were scalars $c, d \in \F$ such that

    $$
    \begin{aligned}
      au + bv
        &= c\p{u + v} + d\p{u - v} \\
        &= \p{c + d}u + \p{c - d}v.
    \end{aligned}
    $$

    By comparing coefficients, we know that if we could solve

    $$
    \begin{cases}
      a = c + d, \\
      b = c - d
    \end{cases}
    $$

    for $c$ and $d$, then our idea works. Adding and subtracting, this system becomes

    $$
    \begin{cases}
      a + b = 2c, \\
      a - b = 2d.
    \end{cases}
    $$

    Like before, because $\F$ has characteristic not equal to $2$, we can divide by $2$, so

    $$
    \begin{cases}
      c = \frac{a + b}{2}, \\
      d = \frac{a - b}{2}.
    \end{cases}
    $$

    With these choices of $c$ and $d$, we have

    $$
    0
      = au + bv
      = \p{\frac{a+b}{2}}\p{u + v} + \p{\frac{a-b}{2}}\p{u - v}.
    $$

    So because $\set{u + v, u - v}$ is linearly independent, this forces the coefficients to be $0$:

    $$
    \begin{cases}
      \frac{a + b}{2} = 0, \\
      \frac{a - b}{2} = 0.
    \end{cases}
    $$

    Solving like before, we get $a = b = 0$.

    If $\F$ has characteristic $2$, then $1 + 1 = 2 = 0$, so $1 = -1$. This means that $u - v = u + \p{-1}v = u + v$, and so $\set{u + v, u - v}$ can never be linearly dependent. As a concrete example, let $\F = \Z_2$ and $V = \F^2$. Then if $u = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $v = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, then $\set{u, v}$ is linearly independent, but

    $$
    u + v = \begin{pmatrix} 1 \\ 1 \end{pmatrix}
    \quad\text{and}\quad
    u - v = \begin{pmatrix} \phantom{-}1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}.
    $$

2. This is almost identical to part 1, so I'll omit it.

</solution>
