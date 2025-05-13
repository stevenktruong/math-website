---
title: Homework 4
date: "2025-05-12"
tags:
    - uniform convergence
    - uniform continuity
publish: yes
---

# Homework 4

## Table of Contents

## Exercise 3.3.2

Prove Proposition 3.3.3. (_Hint_: this is very similar to Theorem 3.3.1. Theorem 3.3.1 cannot be used to prove Proposition 3.3.3, however it is possible to use Proposition 3.3.3 to prove Theorem 3.3.1.)

<proposition> 3.3.3

Let $\p{X, d_X}$ and $\p{Y, d_Y}$ be metric spaces, with $Y$ complete, and let $E$ be a subset of $X$. Let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of functions from $E$ to $Y$, and suppose that this sequence converges uniformly in $E$ to some function $\func{f}{E}{Y}$. Let $x_0 \in X$ be an adherent point of $E$, and suppose that for each $n$ the limit $\lim_{x\to x_0; x \in E} f^{\p{n}}\p{x}$ exists. Then the limit $\lim_{x\to x_0; x\in E} f\p{x}$ also exists, and is equal to the limit of the sequence $\p{\lim_{x\to x_0; x\in E} f^{\p{n}}\p{x}}_{n=1}^\infty$; in other words, we have the interchange of limits

$$
\lim_{n\to\infty} \lim_{x \to x_0; x \in E} f^{\p{n}}\p{x} = \lim_{x\to x_0; x \in E} \lim_{n\to\infty} f^{\p{n}}\p{x}.
$$

</proposition>

<solution>

Let $L_n \coloneqq \lim_{x \to x_0; x \in E} f^{\p{n}}\p{x}$. There are two things to prove: that $\p{L_n}_n \subseteq Y$ converges to some $L \in Y$ and that $\lim_{x \to x_0; x \in E} f\p{x} = L$.

**$\p{L_n}_n$ converges**:

Since $Y$ is complete, it suffices to show that $\p{L_n}_n$ is Cauchy. Let $\varepsilon > 0$. Since $f^{\p{n}} \to f$ uniformly on $E$, there exists $N \in \N$ such that

$$
n, m \geq N \implies \sup_{x \in E} d_Y\p{f^{\p{n}}\p{x}, f^{\p{m}}\p{x}} < \frac{\varepsilon}{3}. \tag{$*$}
$$

By definition of $L_n$, for each $n \in \N$, there exists $\delta_n > 0$ such that

$$
d_X\p{x, x_0} < \delta_n \implies d_Y\p{f^{\p{n}}\p{x}, L_n} < \frac{\varepsilon}{3}. \tag{$\dagger$}
$$

Fix $n, m \geq N$ and set $\delta_{nm} = \min \set{\delta_n, \delta_m}$. Since $x_0 \in \cl{E}$, there exists $x_{nm} \in E \cap B\p{x_0, \delta_{nm}}$. By the triangle inequality,

$$
\begin{aligned}
  d_Y\p{L_n, L_m}
    &\leq d_Y\p{L_n, f^{\p{n}}\p{x_{nm}}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{n}}\p{x_{nm}}, f^{\p{m}}\p{x_{nm}}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{m}}\p{x_{nm}}, L_m}.
\end{aligned}
$$

By construction, we have $d_X\p{x_{nm}, x_0} < \delta_n$ and $d_X\p{x_{nm}, x_0} < \delta_m$, we can apply ($\dagger$) to the first and third terms. Lastly, because $x_{nm} \in E$ and $n, m \geq N$, we can apply ($*$) to the second term. Putting everything together, we have

$$
d_Y\p{L_n, L_m}
  < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3}
  = \varepsilon
$$

for all $n, m \geq N$. Thus, $\p{L_n}_n$ is Cauchy.

**$\lim_{x\to x_0; x \in E} f\p{x} = L$**:

Let $\varepsilon > 0$. By uniform convergence, there exists $N_1 \in \N$ such that

$$
n \geq N_1 \implies \sup_{x \in E} d_Y\p{f\p{x}, f^{\p{n}}\p{x}} < \frac{\varepsilon}{3}. \tag{$*$}
$$

As above, for any $n \in \N$, there exists $\delta_n > 0$ such that

$$
d_X\p{x, x_0} < \delta_n \implies d_Y\p{f^{\p{n}}\p{x}, L_n} < \frac{\varepsilon}{3}. \tag{$\dagger$}
$$

Lastly, because $L_n \to L$, there exists $N_2 \in \N$ such that

$$
n \geq N_2 \implies \sup_{x \in E} d_Y\p{L_n, L} < \frac{\varepsilon}{3}. \tag{$\ddagger$}
$$

Let $n_0 = \max\set{N_1, N_2}$ and let $x \in E$ be such that $d_X\p{x, x_0} < \delta_{n_0}$. By the triangle inequality,

$$
\begin{aligned}
  d_Y\p{f\p{x}, L}
    &\leq d_Y\p{f\p{x}, f^{\p{n_0}}\p{x}} \\
      &\hspace{0.5in} + d_Y\p{f^{\p{n_0}}\p{x}, L_{n_0}} \\
      &\hspace{0.5in} + d_Y\p{L_{n_0}, L}.
\end{aligned}
$$

Since $n_0 \geq N_1$, the first term is less than $\frac{\varepsilon}{3}$ by ($*$). Similarly, because $n_0 \geq N_2$ also, we may apply ($\ddagger$) to see that the third term is also less than $\frac{\varepsilon}{3}$. Finally, because $d_X\p{x, x_0} < \delta_{n_0}$, ($\dagger$) implies that the second term is also bounded by $\frac{\varepsilon}{3}$. Putting everything together,

$$
d_Y\p{f\p{x}, L_n}
  < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3}
  = \varepsilon.
$$

This completes the proof.

</solution>

## Exercise 3.3.4

Prove Proposition 3.3.4. (_Hint_: again, this is similar to Theorem 3.3.1 and Proposition 3.3.3, although the statements are slightly different, and one cannot deduce this directly from the other two results.)

<proposition> 3.3.4

Let $\p{f^{\p{n}}}_{n=1}^\infty$ be a sequence of continuous functions from one metric space $\p{X, d_X}$ to another $\p{Y, d_Y}$, and suppose that this sequence converges uniformly to another function $\func{f}{X}{Y}$. Let $x^{\p{n}}$ be a sequence of points in$ X$ which converge to some limit $x$. Then $f^{\p{n}}\p{x^{\p{n}}}$ converges (in $Y$) to $f\p{x}$.

</proposition>

<solution>

Let $\varepsilon > 0$. Since $f^{\p{n}} \to f$ uniformly, there exists $N_1 \in \N$ such that

$$
n \geq N_1 \implies \sup_{z \in X} d_Y\p{f\p{z}, f^{\p{n}}\p{z}} < \frac{\varepsilon}{2}. \tag{$*$}
$$

Because continuity is preserved under uniform limits, we immediately have that $f$ is continuous. Thus, because $x^{\p{n}} \to x$, we know $f\p{x^{\p{n}}} \to f\p{x}$ as well, so there exists $N_2 \in \N$ such that

$$
n \geq N_2 \implies d_Y\p{f\p{x^{\p{n}}}, f\p{x}} < \frac{\varepsilon}{2}. \tag{$\dagger$}
$$

Let $n \geq \max\set{N_1, N_2}$. Then by the triangle inequality,

$$
\begin{aligned}
  d_Y\p{f^{\p{n}}\p{x^{\p{n}}}}
    &\leq d_Y\p{f^{\p{n}}\p{x^{\p{n}}}, f\p{x^{\p{n}}}} \\
      &\hspace{0.5in}+ d_Y\p{f\p{x^{\p{n}}}, f\p{x}}.
\end{aligned}
$$

As before, since $n \geq N_1$, ($*$) may be applied to the first term and because $n \geq N_2$ also, ($\dagger$) may be applied to the second term. Thus,

$$
d_Y\p{f^{\p{n}}\p{x^{\p{n}}}}
  < \frac{\varepsilon}{2} + \frac{\varepsilon}{2}
  = \varepsilon.
$$

</solution>
