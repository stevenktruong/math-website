---
title: Homework 5
date: "2025-05-13"
tags:
    - uniform convergence
    - integration
publish: yes
---

# Homework 5

## Table of Contents

## Problem 2

Prove Theorem 3.4.5. (Hint: this is similar, but not identical, to the proof of Theorem 3.3.1).

<theorem> 3.4.5

Let $\p{X, d_X}$ be a metric space, and let $\p{Y, d_Y}$ be a complete metric space. The space $\p{C\p{X \to Y}, \left. d_{B\p{X \to Y}} \right\rvert_{C\p{X \to Y} \times C\p{X \to Y}}}$ is a complete subspace of $\p{B\p{X \to Y}, d_{B\p{X \to Y}}}$. In other words, every Cauchy sequence of functions in $C\p{X \to Y}$ converges to a function in $C\p{X \to Y}$.

</theorem>

<solution>

Let $\p{f^{\p{n}}}_n$ be a Cauchy sequence in $C\p{X \to Y}$. Then given $x \in X$ and $\varepsilon > 0$, there exists $N \in \N$ such that for any $n, m \geq N$, we have

$$
d_Y\p{f^{\p{n}}\p{x}, f^{\p{m}}\p{x}}
  \leq \sup_{z \in X} d_Y\p{f^{\p{n}}\p{z}, f^{\p{m}}\p{z}}
  = d_{B\p{X \to Y}}\p{f^{\p{n}}, f^{\p{m}}}
  < \varepsilon.
$$

In particular, this shows that for every $x \in X$, $\p{f^{\p{n}}\p{x}}_n$ is a Cauchy sequence in $Y$, so by completeness, it converges. Define

$$
f\p{x} \coloneqq \lim_{n\to\infty} f^{\p{n}}\p{x}.
$$

Notice that if $f^{\p{n}} \to f$ uniformly, then because each $f^{\p{n}}$ is continuous and bounded, $f$ itself is automatically continuous and bounded. Thus, it remains to prove uniform convergence.

Let $\varepsilon > 0$. As before, there exists $N \in \N$ such that

$$
n, m \geq N
  \implies \sup_{z \in X} d_Y\p{f^{\p{n}}\p{z}, f^{\p{m}}\p{z}} < \frac{\varepsilon}{2}. \tag{$*$}
$$

On the other hand, by pointwise convergence, for any $x \in X$, there exists $N_x \in \N$ such that

$$
n \geq N_x
  \implies d_Y\p{f^{\p{n}}\p{x}, f\p{x}} < \frac{\varepsilon}{2}. \tag{$\dagger$}
$$

Fix $n \geq N$ and $x \in X$. Set $m_x = \max\set{N, N_x}$, so by the triangle inequality,

$$
\begin{aligned}
  d_Y\p{f\p{x}, f^{\p{n}}\p{x}}
    &\leq d_Y\p{f^{\p{n}}\p{x}, f^{\p{m_x}}\p{x}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{m_x}}\p{x}, f\p{x}}.
\end{aligned}
$$

Since $n, m_x \geq N$, ($*$) is applicable, so the first term is less than $\frac{\varepsilon}{2}$. Similarly, $m_x \geq N_x$, so the second term is also bounded by $\frac{\varepsilon}{2}$ by ($\dagger$). Putting everything together,

$$
d_Y\p{f\p{x}, f^{\p{n}}\p{x}}
  < \frac{\varepsilon}{2} + \frac{\varepsilon}{2}
  = \varepsilon.
$$

Since $n \geq N$ and $x \in X$ were arbitrary, this shows that

$$
\forall n \geq N\ \forall x \in X : d_Y\p{f\p{x}, f^{\p{n}}\p{x}} < \varepsilon,
$$

which is uniform convergence.

</solution>

## Problem 4

Use Theorem 3.6.1 to prove Corollary 3.6.2.

<corollary> 3.6.2

Let $\br{a, b}$ be an interval, and let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of Riemann-integrable functions on $\br{a, b}$ such that the series $\sum_{n=1}^\infty f^{\p{n}}$ is uniformly convergent. Then we have

$$
\sum_{n=1}^\infty \int_{\br{a,b}} f^{\p{n}} = \int_{\br{a,b}} \sum_{n=1}^\infty f^{\p{n}}.
$$

</corollary>

<theorem> 3.6.1

Let $\br{a, b}$ be an interval, and for each integer $n \geq 1$, let $\func{f^{\p{n}}}{\br{a, b}}{\R}$ be a Riemann-integrable function. Suppose $f^{\p{n}}$ converges uniformly on $\br{a, b}$ to a function $\func{f}{\br{a, b}}{\R}$. Then $f$ is also Riemann-integrable, and

$$
\lim_{n\to\infty} \int_{\br{a,b}} f^{\p{n}} = \int_{\br{a,b}} f.
$$

</theorem>

<solution>

Consider the sequence of partial sums $F^{\p{n}} \coloneqq \sum_{k=1}^n f^{\p{k}}$. By definition, $F^{\p{n}} \to F \coloneqq \sum_{n=1}^\infty f^{\p{n}}$ uniformly, so by Theorem 3.6.1, $F$ is Riemann-integrable and

$$
\lim_{n\to\infty} \sum_{k=1}^n \int_{\br{a,b}} f^{\p{n}}
  = \lim_{n\to\infty} \int_{\br{a,b}} F^{\p{n}}
  = \int_{\br{a,b}} F
  = \int_{\br{a,b}} \sum_{n=1}^\infty f^{\p{n}}.
$$

In other words, the partial sums $\p{\sum_{k=1}^n \int_{\br{a,b}} f^{\p{k}}}_n$ converges and

$$
\sum_{n=1}^\infty \int_{\br{a,b}} f^{\p{n}} = \int_{\br{a,b}} \sum_{n=1}^\infty f^{\p{n}}.
$$

</solution>
