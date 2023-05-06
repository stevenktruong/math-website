---
title: Worksheet 5
date: "2023-05-04"
tags:
    - inverses
publish: yes
---

# Worksheet 5

## Problem 2

Let $A$ be invertible.

1. Show that $A^t$ is invertible.
2. Prove that $\p{A^t}^{-1} = \p{A^{-1}}^t$.

<solution>

We will do both parts at the same time by giving a left and right inverse for $A^t$. Recall that

$$
\p{AB}^t = B^t A^t.
$$

Note that the order of multiplication is reversed when we take transposes. Since $A$ is invertible, $A^{-1}$ exists and

$$
\begin{cases}
  AA^{-1} = I_n, \\
  A^{-1}A = I_n.
\end{cases}
$$

Since $I_n^t = I_n$, transposing both sides of the equations above yields

$$
\begin{cases}
  \p{A^{-1}}^tA^t = \p{AA^{-1}}^t = I_n^t = I_n, \\
  A^t\p{A^{-1}}^t = \p{A^{-1}A}^t = I_n^t = I_n.
\end{cases}
$$

In summary,

$$
\p{A^{-1}}^tA^t = A^t\p{A^{-1}}^t = I_n.
$$

$A^t$ has a left and right inverse, so it's invertible, and we have shown that the left and right inverse are both $\p{A^{-1}}^t$, i.e., $\p{A^t}^{-1} = \p{A^{-1}}^t$.

</solution>

## Problem 6

Let $A$ and $B$ be $n \times n$ matrices such that $AB = I_n$.

1. Prove that $A$ and $B$ are invertible.
2. Prove that $A = B^{-1}$ and $B = A^{-1}$.
3. State and prove analogous results for linear transformations defined on finite-dimensional vector spaces.

<solution>

1. Note that $A$ is surjective: given $w \in \F^n$, we have

    $$
    \p{AB}w = I_nw = w
    \implies A\p{Bw} = w
    $$

    since matrix multiplication is associative. If we set $v = Bw \in \F^n$, then $Av = w$, so because $w$ was arbitrary, this shows that $A$ is surjective.

    Because $A$ is a square matrix, surjective is equivalent to invertible, so $A$ is invertible.

2. Now that we know that $A$ is invertible, we know that $A^{-1}$ exists. Thus, multiplying both sides of $AB = I_n$ by $A^{-1}$,

    $$
    A^{-1}AB = A^{-1}I_n
    \implies B = A^{-1}.
    $$

    Hence, $B$ is equal to the invertible matrix $A^{-1}$, so $B$ itself is invertible with $B^{-1} = \p{A^{-1}}^{-1} = A$.

3. Let $\func{T}{V}{W}$, $\func{S}{W}{V}$ be linear maps between vector spaces, where $\dim{V} = \dim{W} = n < \infty$. If $T \circ S = I_W$, then $T$ and $S$ are both invertible with $T = S^{-1}$ and $S = T^{-1}$.

    To prove this, let's show that $T$ is surjective. The proof is the same as before: let $w \in W$, and notice that

    $$
    \p{T \circ S}\p{w} = I_W\p{w}
    \implies T\p{S\p{w}} = w.
    $$

    As before, setting $v = S\p{w}$ gives $T\p{v} = w$, so $T$ is surjective, hence invertible. I'll reprove this here in case you haven't seen this fact:

    Because $T$ is surjective, it follows that $\dim R\p{T} = \dim W = n$. Since $V$ is finite-dimensional, we may apply rank-nullity to get

    $$
    \begin{aligned}
      \dim V = \dim R\p{T} + \dim N\p{T}
        &\implies n = n + \dim N\p{T} \\
        &\implies \dim N\p{T} = 0 \\
        &\implies N\p{T} = \set{0},
    \end{aligned}
    $$

    so $T$ is injective. Thus, $T$ is a bijection, and the inverse of a linear map is linear, so $T$ is an isomorphism. (Recall that isomorphism here means that $T$ is a linear bijection _and_ that $T^{-1}$ is a linear map.)

    The same calculations as above still work:

    $$
    T^{-1} \circ T \circ S = T^{-1} \circ I_W
    \implies S = T^{-1}
    \implies S^{-1} = \p{T^{-1}}^{-1} = T.
    $$

</solution>

Alternatively, you could have shown that $B$ is injective, hence invertible.

<exercise>

Let $A$ be an $n \times m$ matrix and $B$ be an $m \times n$ matrix such that $AB = I_n$. Show that $B$ is injective.

</exercise>
