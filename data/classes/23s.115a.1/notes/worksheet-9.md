---
title: Worksheet 9
date: "2023-06-04"
tags:
    - inner products
publish: yes
---

# Worksheet 9

## Problem 3

Let $V$ be an inner product space, let $W$ be a finite-dimensional subspace of $V$. Prove that if $x \notin W$, then there exists $y \in W^\perp$ with $\inner{x, y} \neq 0$.

<solution>

Recall that $V = W \oplus W^\perp$ (via orthogonal projection), so we can write

$$
x = x_W + x_{W^\perp},
$$

where $x_W \in W$ and $x_{W^\perp} \in W^\perp$. Note that $x_{W^\perp} \neq 0$: if this were not the case, then $x = x_W \in W$, which is impossible. Thus, if we set $y = x_{W^\perp}$, then

$$
\begin{aligned}
  \inner{x, y}
    &= \inner{x_W + y, y} \\
    &= \inner{x_W, y} + \inner{y, y} \\
    &= \norm{y}^2 \\
    &> 0.
\end{aligned}
$$

The penultimate inequality follows from the fact that $y$ is orthogonal to every vector in $W$, and $\norm{y}$ is strictly larger than $0$ since $y \neq 0$.

</solution>

## Problem 4

Let $V$ be a finite-dimensional inner product space, let $W$ be a subspace of $V$. Prove that $V/W$ is isomorphic to $W^\perp$.

<solution>

There are two different ways to do this:

1. Every finite-dimensional vector space over a field $\F$ is isomorphic to $\F^n$ for some $n$, so we can try proving $\dim\p{V/W} = \dim\p{W^\perp}$.
2. We can try to find a linear isomorphism $T\colon W^\perp \to V/W$.

**Method 1**

Let $\dim V = n$ and $\dim W = m$. Recall that because $V, W$ are both finite-dimensional that $\dim\p{V/W} = n - m$. To show $\dim\p{W^\perp} = n - m$, we need to find a basis for $W^\perp$.

Let $\set{v_1, \ldots, v_m}$ be an orthonormal basis (it's very important that we pick an _orthonormal_ basis for this to work) for $W$, and extend it into an orthonormal basis $\beta = \set{v_1, \ldots, v_m, \ldots, v_n}$ for $V$. We will show that $\set{v_{m+1}, \ldots, v_n}$ is a basis for $W^\perp$.

First, the set $\set{v_{m+1}, \ldots, v_n}$ is linearly independent since $\beta$ was. Next, we need to show that it spans $W^\perp$. Let $v \in W^\perp$. Since $\beta$ was an orthonormal basis for $V$, we can write

$$
v = \inner{v, v_1}v_1 + \cdots + \inner{v, v_m}v_m + \cdots + \inner{v, v_n}v_n.
$$

But $v \in W^\perp$ and $v_1, \ldots, v_m \in W^\perp$, so $\inner{v, v_1} = \cdots = \inner{v, v_m} = 0$. Thus,

$$
v = \inner{v, v_{m+1}}v_{m+1} + \cdots + \inner{v, v_n}v_n.
$$

This means $v \in \span\set{v_{m+1}, \ldots, v_n}$, so the set spans. Thus, this set is a basis for $W^\perp$ and has $n - m$ vectors, so $\dim W^\perp = n - m$.

**Method 2**

Define $T\colon W^\perp \to V/W$ by

$$
T\p{v} = v + W.
$$

This map is linear: given $u, v \in W^\perp$ and a scalar $c \in \F$, the definitions of addition and scalar multiplication in $V/W$ tell us

$$
\begin{aligned}
  T\p{cu + v}
    &= \p{cu + v} + W \\
    &= c\p{u + W} + \p{v + W} \\
    &= cT\p{u} + T\p{v},
\end{aligned}
$$

so $T$ is linear. Let's show that $T$ is one-to-one: let $v \in N\p{T}$. Then

$$
v + W
  = T\p{v}
  = W,
$$

so $v \in W$. But $v \in W^\perp$, so $v \in W \cap W^\perp = \set{\vec{0}}$, and so $v = \vec{0}$. This shows that $N\p{T} = \set{0}$, so $T$ is one-to-one.

Now let's show that $T$ is onto. Let $v + W \in V/W$. Note that we **can't** just say that

$$
T\p{v} = v + W.
$$

This is because $v$ does not have to be in $W^\perp$. However, if we could replace $v$ with a vector $y \in W^\perp$ such that $v + W = y + W$, then $T\p{y} = v + W$ and we are done. The "natural" way to do this is to write

$$
v = v_W + v_{W^\perp}
$$

where $v_W \in W$ and $v_{W^\perp} \in W^\perp$ as in Problem 3. Thus, by definition of $v + W$, we have

$$
v + W
  = \p{v_W + v_{W^\perp}} + W
  = v_{W^\perp} + W,
$$

since $v_W \in W$. Hence, we have

$$
T\p{v_{W^\perp}} = v_{W^\perp} + W = v + W,
$$

so $T$ is onto.

We have shown that $T$ is an invertible linear map, so it's automatically an isomorphism.

</solution>
