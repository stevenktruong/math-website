---
title: Worksheet 7
date: "2023-05-22"
tags:
    - eigenvalues
    - determinants
publish: yes
---

# Worksheet 7

## Problem 1

Let $V$ be a finite dimensional vector space over $\R$. Show that if $\dim V$ is odd, then every $T \in \mathcal{L}\p{V}$ has an eigenvalue.

<solution>

$T$ is not assumed to be a matrix, so we can't jump straight into characteristic polynomials. Instead, we need to start with a matrix representation of $T$.

Let $\beta$ be a basis of $V$ and consider the matrix $A = \br{T}_\beta$. Since the underlying field is $\R$, we can use calculus. The characteristic polynomial $\func{p_A}{\R}{\R}$ is a continuous function, so we may invoke the intermediate value theorem. Since $p_A$ is an odd degree polynomial, there are two cases:

$$
\begin{cases}
  \displaystyle\lim_{\lambda\to\infty} p_A\p{\lambda} = \infty, \\[2ex]
  \displaystyle\lim_{\lambda\to-\infty} p_A\p{\lambda} = -\infty
\end{cases}
\quad\text{or}\quad
\begin{cases}
  \displaystyle\lim_{\lambda\to\infty} p_A\p{\lambda} = -\infty, \\[2ex]
  \displaystyle\lim_{\lambda\to-\infty} p_A\p{\lambda} = \infty.
\end{cases}
$$

In either case, the intermediate value theorem tells us that $p_A$ is surjective. In particular, there exists $\lambda \in \R$ such that $p_A\p{\lambda} = 0$, i.e., $\lambda$ is an eigenvalue of $A$, so there exists a non-zero vector $\br{v}_\beta$ such that $A\br{v}_\beta = \lambda \br{v}_\beta$. But this means

$$
\br{Tv}_\beta
  = A\br{v}_\beta
  = \lambda\br{v}_\beta
  = \br{\lambda v}_\beta
\iff
Tv = \lambda v.
$$

Thus, because $v \neq 0$, it follows that $\lambda$ is an eigenvalue of $T$.

</solution>

## Problem 6

Let $V$ be a vector space over $\F$ of dimension $n$, let $T \in \mathcal{L}\p{V}$, let $\beta$ be an ordered basis of $V$. The _determinant_ of $T$, denoted $\det T$ is defined as $\det T = \det \br{T}_\beta$.

1. Prove that the determinant of $T$ is independent of the choice of $\beta$. Namely, prove that if $\beta$ and $\gamma$ are two ordered bases of $V$, then $\det \br{T}_\beta = \det \br{T}_\gamma$.
2. Prove that $T$ is invertible if and only if $\det T \neq 0$.
3. Prove that if $T$ is invertible, then $\det\p{T^{-1}} = \p{\det T}^{-1}$.
4. Prove that if $S \in \mathcal{L}\p{V}$, then $\det\p{TS} = \det\p{T} \det\p{S}$.
5. Prove that if $\lambda \in \F$, then $\det\p{T - \lambda \operatorname{id}_V} = \det\p{\br{T}_\beta - \lambda I_n}$.

<solution>

As before, all the facts we know about determinants only apply to (square) matrices. $T$ does not have to be a matrix, but because $\det T$ is defined using a matrix representation of $T$, these properties will follow by carefully applying the corresponding properties on the matrix $\br{T}_\beta$.

1. Recall that

    $$
    \br{T}_\beta
      = \br{I}_\gamma^\beta \br{T}_\gamma \br{I}_\beta^\gamma
      = \p{\br{I}_\beta^\gamma}^{-1} \br{T}_\gamma \br{I}_\beta^\gamma.
    $$

    Thus, because the matrix determinant is multiplicative,

    $$
    \begin{aligned}
      \det \br{T}_\beta
        &= \det \p{\p{\br{I}_\beta^\gamma}^{-1} \br{T}_\gamma \br{I}_\beta^\gamma} \\
        &= \det\p{\br{I}_\beta^\gamma}^{-1} \det\br{T}_\gamma \det\br{I}_\beta^\gamma \\
        &= \det\p{\p{\br{I}_\beta^\gamma}^{-1}} \det\p{\br{I}_\beta^\gamma} \det\p{\br{T}_\gamma} \\
        &= \det\p{I_n} \det\p{\br{T}_\gamma} \\
        &= \det\br{T}_\gamma.
    \end{aligned}
    $$

2. This follows from the fact that a matrix $A$ is invertible if and only if $\det A \neq 0$. In the following, we apply this fact to $A = \br{T}_\beta$.

    $$
    \begin{aligned}
      T\text{ is invertible}
        &\iff \br{T}_\beta\text{ is invertible} \\
        &\iff \det\br{T}_\beta \neq 0 \\
        &\iff \det T \neq 0.
    \end{aligned}
    $$

    The last equivalence holds since $\det T = \det\br{T}_\beta$ by definition.

3. From Part 2, we know $\det T \neq 0$, so $\p{\det T}^{-1}$ is well-defined. Thus,

    $$
    \begin{aligned}
      1
        &= \det I_n \\
        &= \det \br{TT^{-1}}_\beta \\
        &= \det \p{\br{T}_\beta \br{T^{-1}}_\beta} \\
        &= \det\p{\br{T}_\beta} \det\p{\br{T^{-1}}_\beta} \\
        &= \det\p{T} \det \p{T^{-1}} \\
      \implies
      \det\p{T^{-1}}
        &= \p{\det T}^{-1}.
    \end{aligned}
    $$

    (Note that I can't say $\det\p{TT^{-1}} = \det\p{T} \det \p{T^{-1}}$ right away since we only know that the determinant is multiplicative for **matrices**. We prove this in the next part, though.)

4. Recall that $\br{TS}_\beta = \br{T}_\beta \br{S}_\beta$. Thus,

    $$
    \begin{aligned}
      \det\p{TS}
        &= \det \br{TS}_\beta \\
        &= \det\p{\br{T}_\beta \br{S}_\beta} \\
        &= \det \br{T}_\beta \det \br{S}_\beta \\
        &= \det\p{T} \det\p{S}.
    \end{aligned}
    $$

5. This follows from the fact that $\br{\operatorname{id}_V}_\beta = I_n$, where $n = \dim V$, and linearity of taking matrix representations:

    $$
    \br{T - \lambda \operatorname{id}_V}_\beta
      = \br{T}_\beta - \lambda \br{\operatorname{id}_V}_\beta
      = \br{T}_\beta - \lambda I_n.
    $$

    Thus, by definition,

    $$
    \det\p{T - \lambda \operatorname{id}_V}
      = \det \br{T - \lambda \operatorname{id}_V}_\beta
      = \det\p{\br{T}_\beta - \lambda I_n}.
    $$

</solution>
