---
title: Worksheet 6
date: "2023-05-12"
tags:
    - determinants
publish: yes
---

# Worksheet 6

Throughout this page, I will be using Laplace expansion repeatedly to calculate determinants of matrices. If you don't remember/know what that is, here are some resources:

-   [YouTube video that computes a $4 \times 4$ matrix determinant](https://www.youtube.com/watch?v=fWzUwrt1Z0s)
-   [Overview of determinants with examples](https://math.libretexts.org/Courses/Community_College_of_Denver/MAT_2562_Differential_Equations_with_Linear_Algebra/12%3A_Matrices_and_Determinants/12.08%3A_Basic_Techniques_of_Determinants)

## Problem 1

1. Denote by $T_{ij}$ the elementary matrix obtained by exchanging the $i$-th row and $j$-th rows. Write $T_{ij}$ in matrix form. Compute $\det\p{T_{ij}}$. Prove that $\det\p{T_{ij}^t} = \det\p{T_{ij}}$. Prove that $T_{ij}^{-1} = T_{ij}$.

2. Denote by $D_i\p{m}$ the elementary matrix obtained by multiplying the $i$-th row by a scalar $m$. Write $D_i\p{m}$ in matrix for. Compute $\det\p{D_i\p{m}}$. Prove that $\det\p{D_i\p{m}^t} = \det\p{D_i\p{m}}$. Prove that $D_i\p{m}$ is invertible if $m \neq 0$ with $D_i\p{m}^{-1} = D_i\p{m^{-1}}$.

3. We denote by $L_{ij}\p{m}$ the elementary matrix obtained by adding to the $i$-th row the $j$-th row multiplied by a scalar $m$. Write $L_{ij}\p{m}$ in matrix form. Compute $\det\p{L_{ij}\p{m}}$. Prove that $\det\p{L_{ij}\p{m}^t} = \det\p{L_{ij}\p{m}}$. Prove that $L_{ij}\p{m}^{-1} = L_{ij}\p{-m}$.

<solution>

1. To compute $T_{ij}$, we can just figure out what it does to the standard basis $\set{e_1, \ldots, e_n}$ of $\F^n$. If $k \notin \set{i, j}$, then the $i$-th and $j$-th rows of $e_k$ (or in other words, the $i$-th and $j$-th entries of $e_k$) are both $0$, so swapping those rows does nothing. I.e., $T_{ij} e_k = e_k$. However, if $k = i$, then we swap a $1$ in the $i$-th entry with a $0$ in the $j$-th entry, so $T_{ij} e_i = e_j$. Similarly, $T_{ij} e_j = e_i$. Thus, $T_{ij}$ looks like

    $$
    \begin{aligned}
      T_{ij}
        &= \begin{pmatrix}
             T_{ij}e_1 & \cdots & T_{ij}e_i & \cdots & T_{ij}e_j & \cdots & T_{ij}e_n
           \end{pmatrix} \\
        &= \begin{pmatrix}
              1 \\
              & \ddots \\
              & & 0 & \cdots & 1 \\
              & & \vdots & \ddots & \vdots  \\
              & & 1 & \cdots & 0 \\
              & & & & & \ddots \\
              & & & & & & 1
           \end{pmatrix}.
    \end{aligned}
    $$

    Most entries are $0$ except on the diagonal and the $1$'s the were moved off the diagonal. The off-diagonal $1$'s have indices $\p{i, j}$ and $\p{j, i}$.

    To compute the determinant, we perform Laplace expansion on the $i$-th column first. Assuming $i < j$, this expansion gives

    $$
    \det\p{T_{ij}}
      = \p{-1}^{j+i}
       \det
        \begin{pmatrix}
          1 \\
          & \ddots \\
          & & 1 & \cdots & 1 \\
          & & & \ddots & \vdots  \\
          & & & & 0 \\
          & & & & & \ddots \\
          & & & & & & 1
        \end{pmatrix}.
    $$

    The matrix in the determinant is the minor we get from removing the $j$-th row and $i$-th column. Since the $j$-th row is below the top-right $1$, its row index doesn't change. However, because the $i$-column is to the left, we shifted it to the left by $1$. Thus, the $1$ has index $\p{i, j-1}$. Laplace expanding in the $\p{j-1}$-th column gives

    $$
    \det\p{T_{ij}}
      = \p{-1}^{j+i} \p{-1}^{i+\p{j-1}} \det \begin{pmatrix} 1 \\ & 1 \\ & & \ddots \\ & & & 1\end{pmatrix}
      = \p{-1}^{2j+2i-1}
      = -1.
    $$

    Here, we used the fact that $\det I_n = 1$.

    Next, $\det\p{T_{ij}^t} = \det\p{T_{ij}}$ since this is true for any matrix (or alternatively, you can say that $T_{ij}$ is symmetric, so it's equal to its transpose).

    Lastly, to show that $T_{ij}$ is its own inverse, we can just check it on a basis. If $k \notin \set{i, j}$, then

    $$
    T_{ij}\p{T_{ij}e_k} = T_{ij}e_k = e_k.
    $$

    And for $k = i$,

    $$
    T_{ij}\p{T_{ij}e_i} = T_{ij}\p{e_j} = e_i
    $$

    and similarly for $k = j$. Thus, $T_{ij}^2 = I_n$ holds on a basis, and by linearity, it holds everywhere, so $T_{ij}^{-1} = T_{ij}$.

2. Like before, we can compute $D_i\p{m}$ on a basis. If $k \neq i$, then $D_i\p{m}e_k = e_k$. Otherwise, $D_i\p{m}e_i = me_i$, so

    $$
    D_i\p{m}
      = \begin{pmatrix}
          1 \\
          & \ddots \\
          & & m \\
          & & & \ddots \\
          & & & & 1
        \end{pmatrix}.
    $$

    Here, $D_i\p{m}$ is $0$ except on the diagonal. At the $\p{i, i}$-th entry, it has an $m$, and it has a $1$ everywhere else on the diagonal. Since the determinant of an upper-triangular matrix is just the product of the diagonal entries (you can prove this by induction and Laplace expansion),

    $$
    \det\p{D_i\p{m}} = 1 \times \cdots \times m \times \cdots \times 1 = m.
    $$

    Like before, $\det\p{D_i\p{m}^t} = \det\p{D_i\p{m}}$ since it's symmetric. Lastly, if $m \neq 0$, then we can just check that $D_i\p{m^{-1}}$ is an inverse on a basis. If $k \neq i$, then

    $$
    D_i\p{m^{-1}}\p{D_i\p{m}e_k} = D_i\p{m^{-1}}e_k = e_k
    $$

    and if $k = i$,

    $$
    \begin{aligned}
      D_i\p{m^{-1}}\p{D_i\p{m}e_i}
        &= D_i\p{m^{-1}}\p{me_k} \\
        &= m \p{D_i\p{m}^{-1}e_i} \\
        &= mm^{-1}e_i \\
        &= e_i.
    \end{aligned}
    $$

    Thus, $D_i\p{m^{-1}}$ is a left-inverse for $D_i\p{m}$, and because $D_i\p{m}$ is a square matrix, it follows that it's also a right-inverse. In other words, $D_i\p{m}^{-1} = D_i\p{m^{-1}}$.

3. I will assume that $i \neq j$. Otherwise, $L_{ii}\p{m} = D_i\p{1 + m}$, which is the previous case.

    When $k \neq j$, the $j$-th row of $e_k$ is $0$, so adding the $j$-th row of $e_k$ to anything doesn't change it. Thus, $L_{ij}\p{m}e_k = e_k$. On the other hand, if $k = j$, then we add $m$ to the $i$-th row of $e_k$, which gives $L_{ij}\p{m}e_j = e_j + me_i$. Hence,

    $$
    L_{ij}\p{m}
      = \begin{pmatrix}
          1 \\
          & \ddots \\
          & & 1 & \cdots & m \\
          & & & \ddots & \vdots  \\
          & & & & 1 \\
          & & & & & \ddots \\
          & & & & & & 1
        \end{pmatrix}.
    $$

    Like before, every entry is $0$ except on the diagonal, which are all $1$'s, and except at the $\p{i, j}$-th entry, which is $m$. This is an upper-triangular matrix with all $1$'s on the diagonal, so its determinant is

    $$
    \det\p{L_{ij}\p{m}} = 1.
    $$

    Note that $L_{ij}\p{m}^t$ is a lower-triangular matrix, but the determinant of this matrix has the same property: it's the product of its diagonal entries, so $\det\p{L_{ij}\p{m}^t} = 1$ also.

    Lastly, if $k \neq j$, then

    $$
    L_{ij}\p{-m}\p{L_{ij}\p{m}e_k} = L_{ij}\p{-m}e_k = e_k,
    $$

    and if $k = j$,

    $$
    \begin{aligned}
      L_{ij}\p{-m}\p{L_{ij}\p{m}e_j}
        &= L_{ij}\p{-m}\p{e_j + me_i} \\
        &= L_{ij}\p{-m}e_j + mL_{ij}\p{-m}e_i \\
        &= e_j - me_i + me_i \\
        &= e_j.
    \end{aligned}
    $$

    Thus, $L_{ij}\p{-m}$ is a left-inverse and $L_{ij}\p{m}$ is a square matrix, it is invertible with $L_{ij}\p{m}^{-1} = L_{ij}\p{-m}$.

</solution>

## Problem 5

Let $M \in M_{n \times n}\p{\C}$, define the matrix $\conj{M}$ via $\p{\conj{M}}_{ij} = \conj{M_{ij}}$ for all $i, j \in \set{1, \ldots, n}$.

1. Prove that $\det\p{\conj{M}} = \conj{\det\p{M}}$.
2. Prove that $\conj{M^t} = \p{\conj{M}}^t$. Define $M^* = \conj{M^t}$.
3. A matrix $Q \in M_{n \times n}\p{\C}$ is called _unitary_ if $QQ^* = I_n$. Prove that if $Q$ is unitary, then $\abs{\det Q} = 1$.

<solution>

The definition of the determinant we're using is

$$
\det\p{M} = \sum_{j=1}^n \p{-1}^{i+j} M_{ij} \det\p{\widehat{M}_{ij}},
$$

where $i \in \set{1, \ldots, n}$ is any index, $\widehat{M}_{ij}$ is the minor of $M$ we get from removing the $i$-th row and $j$-th column (i.e., the row and column that contains $M_{ij}$). Thus, if $M$ is an $n \times n$ matrix, then $\widehat{M}_{ij}$ is an $\p{n-1} \times \p{n-1}$ matrix.

1. We prove this by induction. The base case is $n = 1$, where $M = \p{m_{11}}$. Then

    $$
    \det\p{\conj{M}} = \det\p{\conj{m_{11}}} = \conj{m_{11}} = \conj{\det\p{M}},
    $$

    so the base case holds. For the inductive step, assume that $\det\p{\conj{N}} = \conj{\det\p{N}}$ for any $n \times n$ matrix $N$. We need to show it holds for any $\p{n+1} \times \p{n+1}$ matrix. Let $M$ be an $\p{n+1} \times \p{n+1}$ matrix. Then

    $$
    \det\p{\conj{M}}
      = \sum_{j=1}^n \p{-1}^{i+j} \conj{M_{ij}} \det\p{\widehat{\conj{M_{ij}}}}.
    $$

    Note that $\widehat{\conj{M_{ij}}}$ is an $n \times n$ matrix, so by the inductive hypothesis,

    $$
    \det\p{\widehat{\conj{M_{ij}}}}
      = \conj{\det\p{\widehat{M_{ij}}}}.
    $$

    Also, recall that complex conjugation is additive and multiplicative: for $z, w \in \C$, we have $\conj{z + w} = \conj{z} = \conj{w}$ and $\conj{zw} = \conj{z} \conj{w}$. Lastly, note that $\conj{\p{-1}^{i+j}} = \p{-1}^{i+j}$ since it's a real number. Putting everything together,

    $$
    \begin{aligned}
      \det\p{\conj{M}}
        &= \sum_{j=1}^n \p{-1}^{i+j} \conj{M_{ij}} \det\p{\conj{\widehat{M}_{ij}}} \\
        &= \sum_{j=1}^n \conj{\p{-1}^{i+j}} \conj{M_{ij}} \conj{\det\p{\widehat{M_{ij}}}} \\
        &= \conj{\sum_{j=1}^n \p{-1}^{i+j} M_{ij} \det\p{\widehat{M_{ij}}}} \\
        &= \conj{\det\p{M}}.
    \end{aligned}
    $$

2. Recall that $\p{A^t}_{ij} = A_{ji}$ for any matrix $A$. Thus,

    $$
    \p{\conj{M^t}}_{ij}
      = \conj{\p{M^t}_{ij}}
      = \conj{M_{ji}}
      = \p{\conj{M}}_{ji}
      = \p{\p{\conj{M}}^t}_{ij}.
    $$

3. Recall that if $A, B$ are square, then $\det\p{AB} = \det\p{A} \det\p{B}$. Thus, if we compute the determinant on both sides of $QQ^* = I_n$, then

    $$
    \det\p{Q} \det\p{Q^*} = \det\p{QQ^*} = \det\p{I_n} = 1.
    $$

    But by the first part,

    $$
    \det\p{Q^*}
      = \det\p{\conj{Q^t}}
      = \conj{\det\p{Q^t}}
      = \conj{\det\p{Q}}.
    $$

    Lastly, recall that if $z \in \C$, then $z\conj{z} = \abs{z}^2$, so

    $$
    1
      = \det\p{Q} \det\p{Q^*}
      = \det\p{Q} \conj{\det\p{Q}}
      = \abs{\det\p{Q}}^2,
    $$

    which implies that $\abs{\det\p{Q}} = 1$.

</solution>
