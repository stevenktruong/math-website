---
title: Worksheet 8
date: "2023-05-29"
tags:
    - eigenvalues
publish: yes
---

# Worksheet 8

## Problem 3

Let $A \in M_{n \times n}\p{\F}$ be similar to an upper-triangular matrix, and suppose that $A$ has distinct eigenvalues $\lambda_1, \ldots, \lambda_k$ with corresponding algebraic multiplicities $m_1, \ldots, m_k$.

1. Prove that $\tr A = \sum_{i=1}^k m_i\lambda_i$.
2. Prove that $\det A = \prod_{i=1}^k \lambda_i^{m_i}$.

<solution>

This follows from two facts:

1. If $A$ and $B$ are similar, then they have the same eigenvalues.
2. The eigenvalues of an upper-triangular matrix are its diagonal entries.

Fact 1 follows from the fact that if $B = QAQ^{-1}$, then

$$
\det\p{B - \lambda I}
  = \det\p{Q\p{A - \lambda I}Q^{-1}}
  = \det\p{A - \lambda I},
$$

i.e., $A$ and $B$ have the same characteristic equation. For Fact 2, if $A$ is upper-triangular with diagonal entries $a_1, \ldots, a_n$, then because $A - \lambda I$ is also upper-triangular with diagonal entries $a_1 - \lambda, \ldots, a_n - \lambda$, the characteristic equation of $A$ is

$$
p_A\p{\lambda} = \det\p{A - \lambda I} = \prod_{i=1}^n \p{a_i - \lambda}.
$$

Thus, the roots of $p_A$ are exactly the diagonal entries, so the eigenvalues of $A$ are also just the diagonal entries.

1. Note that $\tr\p{AB} = \tr\p{BA}$ from a simple calculation:

    $$
    \begin{aligned}
      \tr\p{AB}
         = \sum_{i=1}^n \p{AB}_{ii}
        &= \sum_{i=1}^n \sum_{j=1}^n A_{ij} B_{ji} \\
        &= \sum_{j=1}^n \sum_{i=1}^n B_{ji} A_{ij} \\
        &= \sum_{j=1}^n \p{BA}_{jj} \\
        &= \tr\p{BA}.
    \end{aligned}
    $$

    Thus, if $A = QUQ^{-1}$, where $U$ is an upper-triangular matrix, then

    $$
    \tr A
      = \tr\p{QUQ^{-1}}
      = \tr\p{Q^{-1}QU}
      = \tr U.
    $$

    But the diagonal entries of $U$ are the eigenvalues of $A$ counted with multiplicity, so

    $$
    \tr U = \sum_{i=1}^k m_i\lambda_i.
    $$

2. Again, write $A = QUQ^{-1}$, where $U$ is upper-triangular. Then the determinant of $U$ is just the product of the diagonal entries, which are the eigenvalues of $A$ counted with multiplicity. Thus,

    $$
    \det A
      = \det U
      = \prod_{i=1}^k \lambda_i^{m_i}.
    $$

</solution>

## Problem 4

Let $V$ be a finite dimensional vector space over $\F$, let $T \in \mathcal{L}\p{V}$ be invertible.

1. Prove that if $\lambda$ is an eigenvalue of $T$, then $\lambda^{-1}$ is an eigenvalue of $T^{-1}$.
2. Prove that the eigenspace of $T$ corresponding to $\lambda$ is the same as the eigenspace of $T^{-1}$ corresponding to $\lambda^{-1}$.
3. Prove that if $T$ is diagonalizable, then $T^{-1}$ is diagonalizable.

<solution>

These all follow from the fact that $v$ is an eigenvector for $T$ if and only if it's an eigenvector for $T^{-1}$. If $v$ is an eigenvector for $T$ with eigenvalue $\lambda$, then

$$
T\p{v} = \lambda v
\implies v = \lambda T^{-1}\p{v}
\implies T^{-1}\p{v} = \lambda^{-1} v.
$$

Note that because $T$ is invertible, $\lambda \neq 0$, so $\lambda^{-1}$ is well-defined.

Since $v$ is an eigenvector of $T$, we know that $v \neq 0$, so this precisely says that $v$ is an eigenvector for $T$ with eigenvalue $\lambda^{-1}$. Applying the forward direction with $T, \lambda$ replaced with $T^{-1}, \lambda^{-1}$ and noting that $\p{T^{-1}}^{-1} = T$ and $\p{\lambda^{-1}}^{-1} = \lambda$ gives the reverse direction. (Alternatively, you can just do the same computation, but in reverse.)

1. Our computation above shows that if $\lambda$ is an eigenvalue for $T$, then $\lambda^{-1}$ is an eigenvalue for $T^{-1}$.

2. Recall that the eigenspace of $T$ corresponding to $\lambda$ is the set

    $$
    E_\lambda\p{T} = \set{v \in V \mid T\p{v} = \lambda v}.
    $$

    We showed that $T\p{v} = \lambda v$ if and only if $T^{-1}\p{v} = \lambda^{-1} v$, and this implies $E_\lambda\p{T} = E_{\lambda^{-1}}\p{T^{-1}}$.

3. Let $\beta = \set{v_1, \ldots, v_n}$ be an eigenbasis of $V$ for $T$. Then $\beta$ is also a set of eigenvectors for $T^{-1}$. Since $\beta$ was a basis of $V$, this means that $\beta$ is also an eigenbasis of $V$ for $T^{-1}$.

</solution>
