---
title: Homework 1
date: "2025-04-21"
tags:
    - sequences
    - compactness
    - completeness
publish: yes
---

# Homework 1

## Table of Contents

## Exercise 1.1.13

Prove Proposition 1.1.19.

<proposition> 1.1.19

Let $X$ be any set, and let $d_{\mathrm{disc}}$ be the discrete metric on $X$. Let $\p{x^{\p{n}}}_{n=m}^\infty$ be a sequence of points in $X$, and let $x$ be a point in $X$. Then $\p{x^{\p{n}}}_{n=m}^\infty$ converges to $x$ with respect to the discrete metric $d_{\mathrm{disc}}$ if and only if there exists an $N \geq m$ such that $x^{\p{n}} = x$ for all $n \geq N$.

</proposition>

<solution>

"$\implies$"

Assume $\p{x^{\p{n}}}_{n=m}^\infty$ converges to $x$. Then applying the definition of convergence with $\varepsilon = \frac{1}{2}$, we find $N \geq m$ such that

$$
n \geq N \implies d_{\mathrm{disc}}\p{x^{\p{n}}, x} < \frac{1}{2}.
$$

But $d_{\mathrm{disc}}\p{x^{\p{n}}, x} \in \set{0, 1}$, so this means $d_{\mathrm{disc}}\p{x^{\p{n}}, x} = 0$. By the definition of a metric space, this means $x^{\p{n}} = x$ for $n \geq N$.

"$\impliedby$"

Let $N \geq m$ be such that $x^{\p{n}} = x$ for all $n \geq N$. Given any $\varepsilon > 0$, if $n \geq N$, then

$$
d_{\mathrm{disc}}\p{x^{\p{n}}, x}
  = d_{\mathrm{disc}}\p{x, x}
  = 0
  < \varepsilon.
$$

</solution>

## Exercise 1.4.7

Prove Proposition 1.4.12.

<proposition> 1.4.12

1. Let $\p{X, d}$ be a metric space, and let $\p{Y, \left. d \right\rvert_{Y \times Y}}$ be a subspace of $\p{X, d}$. If $\p{Y, \left. d \right\rvert_{Y \times Y}}$ is complete, then $Y$ must be closed in $X$.

2. Conversely, suppose that $\p{X, d}$ is a complete metric space, and $Y$ is a closed subset of $X$. Then the subspace $\p{Y, \left. d \right\rvert_{Y \times Y}}$ is also complete.

</proposition>

<solution>

This problem is really a test of your ability to use the definitions precisely, i.e., understand which definitions are applied in the metric space $\p{X, d}$ versus $\p{Y, \left. d \right\rvert_{Y \times Y}}$. **Everything I wrote down is needed to have a completely correct proof**, so pay close attention to when I use $d$ versus $\left. d \right\rvert_{Y \times Y}$.

1. Assume $\p{Y, \left. d \right\rvert_{Y \times Y}}$ is complete and let $\p{y_n}_n \subseteq Y$ be a sequence which converges to some $x_0 \in X$ with respect to $d$. Then $\p{y_n}_n$ is Cauchy in $\p{X, d}$, but because $\p{y_n}_n \subseteq Y$, we have

    $$
    d\p{y_n, x_0} = \left. d \right\rvert_{Y \times Y}\p{y_n, x_0},
    $$

    which implies that $\p{y_n}_n$ is also Cauchy in $\p{Y, \left. d \right\rvert_{Y \times Y}}$. Since $Y$ is complete, this means that $\p{y_n}_n$ converges to some $y_0 \in Y$ with respect to $\left. d \right\rvert_{Y \times Y}$. By uniqueness of limits, we must have $x_0 = y_0 \in Y$, so $Y$ is closed in $\p{X, d}$.

2. Assume that $Y$ is closed in $\p{X, d}$ and let $\p{y_n}_n \subseteq Y$ be a Cauchy sequence in $\p{Y, \left. d \right\rvert_{Y \times Y}}$. As above,

    $$
    d\p{y_n, y_m} = \left. d \right\rvert_{Y \times Y}\p{y_n, y_m},
    $$

    which implies that $\p{y_n}_n$ is also Cauchy in $\p{X, d}$. Since $\p{X, d}$ is complete, there exists $x_0 \in X$ such that $y_n \to x_0$ with respect to $d$. But $\p{y_n}_n \subseteq Y$, so because $Y$ is closed, this means $x_0 \in Y$. Finally,

    $$
    \left. d \right\rvert_{Y \times Y}\p{y_n, x_0}
      = d\p{y_n, x_0}
      \xrightarrow{n\to\infty} 0,
    $$

    so $y_n \to x_0$ with respect to $\left. d \right\rvert_{Y \times Y}$.

</solution>

## Exercise 1.5.2

Prove Proposition 1.5.5.

<proposition> 1.5.5

Let $\p{X, d}$ be a compact metric space. Then $\p{X, d}$ is both complete and bounded.

</proposition>

<solution>

**$\p{X, d}$ is complete**:

Let $\p{x_n}_n \subseteq X$ be a Cauchy sequence. Since $X$ is compact, there exists a subsequence $\p{x_{n_k}}_k$ which converges to some $x_0 \in X$. We now need to show that the original sequence also converges to $x_0$. Let $\varepsilon > 0$. Then there exists $N \in \N$ such that if $k, \ell \geq N$, then

$$
d\p{x_k, x_\ell} < \frac{\varepsilon}{2}.
$$

In particular, if $\ell \geq N$, then $n_\ell \geq \ell \geq N$, so $d\p{x_k, x_{n_\ell}} < \frac{\varepsilon}{2}$. Finally, because $x_{n_k} \to x_0$, there exists $\ell_0 \geq N$ such that $d\p{x_{n_{\ell_0}}, x_0} < \frac{\varepsilon}{2}$. Putting everything together, we get for $k \geq N$,

$$
d\p{x_k, x_0}
  \leq d\p{x_k, x_{\ell_0}} + d\p{x_{\ell_0}, x_0}
  < \varepsilon.
$$

**$\p{X, d}$ is bounded**:

Suppose $X$ is not bounded and let $x_1 \in X$. Then $X \subsetneq B\p{x_1, 1}$, so there exists $x_2 \in X \setminus B\p{x_1, 1}$. Notice that $X \subsetneq B\p{x_1, 1} \cup B\p{x_2, 1}$, or else

$$
X \subseteq B\p{x_1, 1} \cup B\p{x_2, 1}
  \subseteq B\p{x_1, d\p{x_1, x_2} + 1}.
$$

Now suppose we have chosen $x_1, \ldots, x_n$ such that $x_k \in X \setminus \bigcup_{i=1}^{k-1} B\p{x_i, 1}$ for all $2 \leq k \leq n$. Then $X \subsetneq \bigcup_{i=1}^n B\p{x_i, n}$, or else

$$
X \subseteq B\p{x_1, \max\set{d\p{x_1, x_i} \mid 2 \leq i \leq n} + 1}.
$$

(Check this!) Thus, there exists $x_{n+1} \in X \setminus \bigcup_{i=1}^n B\p{x_i, n}$. By induction, we have constructed a sequence $\p{x_n}_n$ with the property $x_n \in X \setminus \bigcup_{i=1}^{n-1} B\p{x_i, 1}$ for all $n \in \N$. In particular, if $n < m$, then

$$
x_m \notin B\p{x_n, 1} \iff d\p{x_n, x_m} \geq 1.
$$

Thus, no subsequence can possibly be Cauchy, so no subsequence can possibly be convergent, i.e., $X$ is not compact.

</solution>
