---
title: Worksheet 9
date: "2023-06-05"
tags:
    - adjoints
publish: yes
---

# Worksheet 10

## Problem 1

Let $V$ be a finite-dimensional inner product space, let $T \in \mathcal{L}\p{V}$. Prove that $\lambda$ is an eigenvalue of $T$ if and only if $\conj{\lambda}$ is an eigenvalue of $T^*$.

<solution>

Recall that a linear map $S \in \mathcal{L}\p{V}$ is invertible if and only if $S^*$ is invertible. Applying this to $S = T - \lambda \operatorname{id}_V$, we get

$$
\begin{aligned}
  \lambda\text{ is an eigenvalue of }T
    &\iff T - \lambda \operatorname{id}_V\text{ is not invertible} \\
    &\iff \p{T - \lambda \operatorname{id}_V}^*\text{ is not invertible} \\
    &\iff T^* - \conj{\lambda} \operatorname{id}_V\text{ is not invertible} \\
    &\iff \conj{\lambda}\text{ is an eigenvalue of }T^*.
\end{aligned}
$$

</solution>

## Problem 7

Let $V$ be a complex inner product space, let $T \in \mathcal{L}\p{V}$. Define $T_1 = \frac{T + T^*}{2}$ and $T_2 = i\frac{T^* - T}{2}$.

1. Prove that $T_1$ and $T_2$ are self-adjoint and that $T = T_1 + iT_2$.
2. Suppose that $T = U_1 + iU_2$ for $U_1, U_2 \in \mathcal{L}\p{V}$ self-adjoint. Prove that $U_1 = T_1$ and $U_2 = T_2$.
3. Prove that $T$ is normal if and only if $T_1T_2 = T_2T_1$.

<solution>

1. Recall that $T^{**} = T$. Then we check

    $$
    \begin{gathered}
      \p{T_1}^*
        = \p{\frac{T + T^*}{2}}^*
        = \frac{T^* + T}{2}
        = T_1 \\
      \p{T_2}^*
        = \p{i\frac{T^* - T}{2}}^*
        = -i \frac{T - T^*}{2}
        = T_2.
    \end{gathered}
    $$

    Note that for $T_2$, we used the fact that $\conj{i} = -i$. Lastly, because $i^2 = -1$,

    $$
    T_1 + iT_2
      = \frac{T + T^*}{2} - \frac{T^* - T}{2}
      = T.
    $$

2. Note that since $\p{U_1}^* = U_1$ and $\p{U_2}^* = U_2$, we have

    $$
    \begin{cases}
      T = U_1 + iU_2, \\
      T^* = U_1 - iU_2.
    \end{cases}
    $$

    Adding the equations, we get

    $$
    T + T^* = 2U_1
    \implies U_1 = \frac{T + T^*}{2} = T_1.
    $$

    Similarly, subtracting them gives

    $$
    T - T^* = 2iU_2
    \implies U_2
        = \frac{T - T^*}{2i} \cdot \frac{i}{i}
        = i\frac{T^* - T}{2}
        = T_2.
    $$

3. We need to show that $TT^* = T^*T$. We can just expand

    $$
    \begin{aligned}
      TT^*
        &= \p{T_1 + iT_2}\p{T_1 - iT_2} \\
        &= T_1^2 + iT_2T_1 - iT_1T_2 + T_2^2 \\
        &= T_1^2 + iT_1T_2 - iT_2T_1 + T_2^2 \\
        &= \p{T_1 - iT_2}\p{T_1 + iT_2} \\
        &= T^*T.
    \end{aligned}
    $$

    Note that in the third-to-last equality, we used $T_1T_2 = T_2T_1$.

</solution>
