---
title: Worksheet 1
date: "2023-04-30"
tags:
    - axioms
publish: yes
---

# Worksheet 1

## Problem 3

Let $V = \F\br{x_1, \ldots, x_n}$ be the space of polynomials in $n$-variables. A polynomial $f \in V$ is said to be _homogeneous of degree $k$_ if the degree (i.e. the sum of the exponents) of each non-zero term of $f$ is $k$. A polynomial $f \in V$ is said to be _symmetric_ if exchanging any two variables yields the same polynomial, namely $f\p{x_1, \ldots, x_i, \ldots x_j, \ldots, x_n} = f\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n}$ for all $i, j \in \set{1, \ldots, n}$.

1. Prove that $V$ is a vector space.
2. Prove that the space of homogeneous degree $k$ polynomials form a subspace of $V$.
3. Prove that the space of symmetric polynomials in $n$ variables is a subspace of $V$.

<solution>

First, note that addition and scalar multiplication are defined as follows. Let

$$
  f = \sum_{i_1,i_2\ldots,i_n=0}^\infty a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n},
  \quad
  g = \sum_{i_1,i_2\ldots,i_n=0}^\infty b_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n},
$$

where $a_{i_1 i_2 \cdots i_n}, b_{i_1 i_2 \cdots i_n}$ are zero except for only finitely many indices $\p{i_1, i_2, \ldots, i_n}$, and $c \in \F$. Then

$$
\begin{aligned}
  f + g &\coloneqq \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
  cf &\coloneqq \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ca_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}.
\end{aligned}
$$

1. We just need to check the axioms.

(VS 1) Let $f, g \in V$ be as above. Then

$$
\begin{aligned}
  f + g
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{b_{i_1 i_2 \cdots i_n} + a_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}
      && \p{\p{\F, +} \text{ is commutative}} \\
    &= g + f.
\end{aligned}
$$

(VS 2) Let $f, g \in V$ be as above, and let

$$
h = \sum_{i_1,i_2\ldots,i_n=0}^\infty c_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n}.
$$

Then

$$
\begin{aligned}
  \p{f + g} + h
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} + \sum_{i_1,i_2\ldots,i_n=0}^\infty c_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{\p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} + c_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + \p{b_{i_1 i_2 \cdots i_n} + c_{i_1 i_2 \cdots i_n}}} x_1^{i_1} \cdots x_n^{i_n}
      && \p{\p{\F, +} \text{ is associative}} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n} + \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{b_{i_1 i_2 \cdots i_n} + c_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= f + \p{g + h}.
\end{aligned}
$$

(VS 3) The zero vector is

$$
0_V = \sum_{i_1,i_2\ldots,i_n=0}^\infty 0_\F x_1^{i_1} \cdots x_n^{i_n}.
$$

Indeed, given $f \in V$ as above,

$$
\begin{aligned}
  f + 0_V
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + 0_\F} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n}
      && \p{0_\F \text{ is the additive identity in }\F} \\
    &= f.
\end{aligned}
$$

(VS 4) Given $f \in V$ as above, note that $-a_{i_1 i_2 \cdots i_n} \in \F$ since $\F$ is a field. Thus, if we set

$$
g = \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{-a_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n},
$$

then

$$
\begin{aligned}
  f + g
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + \p{-a_{i_1 i_2 \cdots i_n} }} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty 0_\F x_1^{i_1} \cdots x_n^{i_n} \\
    &= 0_V.
\end{aligned}
$$

(VS 5) Given $f \in V$ as above,

$$
\begin{aligned}
  1_\F f
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{1_\F a_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n}
      && \p{1_\F \text{ is the multiplicative identity in }\F} \\
    &= f.
\end{aligned}
$$

(VS 6) Let $f \in V$ be as above, and $b, c \in \F$. Then

$$
\begin{aligned}
  \p{bc}f
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{\p{bc} a_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{b \p{ca_{i_1 i_2 \cdots i_n}}} x_1^{i_1} \cdots x_n^{i_n}
      && \p{\p{\F, \,\cdot\,} \text{ is associative}} \\
    &= b \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ca_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= b\p{cf}.
\end{aligned}
$$

(VS 7) Let $f, g \in V$ be as above and $c \in \F$. Then

$$
\begin{aligned}
  c\p{f + g}
    &= c\sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{c\p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ca_{i_1 i_2 \cdots i_n} + cb_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}
      && \p{\p{\F, +, \,\cdot\,}\text{ is distributive}} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ca_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} + \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{cb_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= cf + cg.
\end{aligned}
$$

(VS 8) Let $f \in V$ be as above and $b, c \in \F$. Then

$$
\begin{aligned}
  \p{b + c}f
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{\p{b + c}a_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ba_{i_1 i_2 \cdots i_n} + ca_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}
      && \p{\p{\F, +, \,\cdot\,}\text{ is distributive}} \\
    &= \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ba_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} + \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{ca_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n} \\
    &= bf + cf.
\end{aligned}
$$

2. There are three things to check. Let $f, g \in V$ be as above, $c \in \F$, and we further assume that $f, g$ are homogeneous. Then $0_V$ is homogeneous of degree $k$ vacuously (there are no non-zero terms to check the condition on).

    Next, let's show that $f + g$ are homogeneous of degree $k$. Recall that

    $$
    f + g = \sum_{i_1,i_2\ldots,i_n=0}^\infty \p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}.
    $$

    We need to show that if $\p{a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n}} x_1^{i_1} \cdots x_n^{i_n}$ is a non-zero term, then $i_1 + i_2 + \cdots + i_n = k$. Assume this term is non-zero, which means that $a_{i_1 i_2 \cdots i_n} + b_{i_1 i_2 \cdots i_n} \neq 0$. Thus, at least one of $a_{i_1 i_2 \cdots i_n}$ and $b_{i_1 i_2 \cdots i_n}$ is non-zero. Without loss of generality, we assume that $a_{i_1 i_2 \cdots i_n} \neq 0$. Otherwise, we can replace $a_{i_1 i_2 \cdots i_n}$ with $b_{i_1 i_2 \cdots i_n}$ in the following proof.

    Since $a_{i_1 i_2 \cdots i_n} \neq 0$, we know that $a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n}$ is a non-zero term of $f$. But $f$ is homogeneous of degree $k$, so by definition, $i_1 + i_2 + \cdots + i_n = k$. This shows that $f + g$ is homogeneous of degree $k$.

    Lastly, we need to show that $cf$ is homogeneous of degree $k$. If $c = 0$, then $cf = 0$, which we already know is homogeneous of degree $k$. Otherwise, suppose $\p{ca_{i_1 i_2 \cdots i_n}}x_1^{i_1} \cdots x_n^{i_n}$ is a non-zero term of $cf$. Then because $c \neq 0$, we know that $a_{i_1 i_2 \cdots i_n} \neq 0$. Thus, $a_{i_1 i_2 \cdots i_n} x_1^{i_1} \cdots x_n^{i_n}$ is a non-zero term of $f$, so by degree-$k$ homogeneity of $f$, we have $i_1 + i_2 + \cdots + i_n = k$, so $cf$ is homogeneous of degree $k$.

3. Let $f, g \in V$ be symmetric and let $c \in \F$. Note that $0_\F$ is symmetric since all its terms are zero, so after exchanging any two variables, all the terms will still remain zero. Next,

    $$
    \begin{aligned}
      \p{f + g}\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n}
        &= f\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n} + g\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n} \\
        &= f\p{x_1, \ldots, x_i, \ldots, x_j, \ldots, x_n} + g\p{x_1, \ldots, x_i, \ldots, x_j, \ldots, x_n}
          && \p{f, g\text{ are symmetric}} \\
        &= \p{f + g}\p{x_1, \ldots, x_i, \ldots, x_j, \ldots, x_n}
    \end{aligned}
    $$

    Similarly,

    $$
    \begin{aligned}
      \p{cf}\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n}
        &= cf\p{x_1, \ldots, x_j, \ldots, x_i, \ldots, x_n} \\
        &= cf\p{x_1, \ldots, x_i, \ldots, x_j, \ldots, x_n}
          && \p{f\text{ is symmetric}} \\
        &= \p{cf}\p{x_1, \ldots, x_i, \ldots, x_j, \ldots, x_n}
    \end{aligned}
    $$

</solution>

## Problem 5

Let $V = \set{\p{a_1, a_2} \mid a_1, a_2 \in \R}$. Define addition of elements of $V$ coordinate-wise. For $\p{a_1, a_2} \in V$ and $c \in \R$, define

$$
c\p{a_1, a_2}
  = \begin{cases}
      \p{0, 0} & \text{if } c = 0, \\
      \p{ca_1, \frac{a_2}{c}} & \text{if } c \neq 0.
    \end{cases}
$$

Is $V$ a vector space over $\R$ with these operations? Justify your answer.

<solution>

No. For example, (VS 8) fails:

$$
\p{1 + 1} \cdot \p{1, 1} = 2 \cdot \p{1, 1} = \p{2, \frac{1}{2}}
$$

and

$$
1 \cdot \p{1, 1} + 1 \cdot \p{1, 1} = \p{1, 1} + \p{1, 1} = \p{2, 2},
$$

but these are different since $2 \neq \frac{1}{2}$.

</solution>
