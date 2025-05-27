---
title: Homework 6
date: "2025-05-26"
tags:
    - exponential functions
publish: yes
---

# Homework 6

## Table of Contents

## Exercise 4.5.3

Prove Proposition 4.5.4. (_Hint_: first prove the claim when $x$ is a natural number. Then prove it when $x$ is an integer. Then prove it when $x$ is a rational. Then use the fact that real numbers are the limits of rational numbers to prove it for all real numbers. You may find the exponent laws (Proposition 6.7.3) to be useful.)

<proposition> 4.5.4

For any real number $x$, we have $\exp\p{x} = e^x$.

</proposition>

<solution>

By definition, $e^1 = \exp\p{1}$. When $n \in \N$, we have

$$
e^n = e^{\sum_{i=1}^n 1} = \prod_{i=1}^n e^1 = \prod_{i=1}^n \exp\p{1} = \exp\p{\sum_{i=1}^n 1} = \exp\p{n}.
$$

Here, we have used the fact that both $e^x$ and $\exp\p{x}$ satisfy the identity $f\p{x + y} = f\p{x}f\p{y}$ (and induction). Moreover, because they both satisfy $f\p{-x} = \frac{1}{f\p{x}}$, we get

$$
e^{-n} = \frac{1}{e^n} = \frac{1}{\exp\p{n}} = \exp\p{-n},
$$

so this proves equality for $x \in \Z$. Next, suppose $\frac{p}{q} \in \Q$. Then by $f\p{x + y} = f\p{x}f\p{y}$ again,

$$
\p{e^{\frac{p}{q}}}^q
  = e^p
  = \exp\p{p}
  = \p{\exp\p{\frac{p}{q}}}^q.
$$

Here, the second equality holds since $p \in \N$. Because $e^x > 0$ and $\exp\p{x} > 0$ for any $x \in \R$, this implies that

$$
e^{\frac{p}{q}} = \exp\p{\frac{p}{q}},
$$

which settles the equality for $x \in \Q$. Finally, given any $x \in \R$, by density of $\Q$, there exists a sequence $\p{q_n}_n \subseteq \Q$ such that $q_n \to x$. Thus, because $e^x$ and $\exp\p{x}$ are both continuous functions and agree at rational numbers,

$$
e^x
  = \lim_{n\to\infty} e^{q_n}
  = \lim_{n\to\infty} \exp\p{q_n}
  = \exp\p{x}.
$$

</solution>

## Exercise 4.5.4

Let $\func{f}{\R}{\R}$ be the function defined by setting $f\p{x} \coloneqq \exp\p{-\frac{1}{x}}$ when $x > 0$, and $f\p{x} \coloneqq 0$ when $x \leq 0$. Prove that $f$ is infinitely differentiable, and $f^{\p{k}}\p{0} = 0$ for every integer $k \geq 0$, but that $f$ is not real analytic at $0$.

<solution>

When $x < 0$, $f\p{x}$ is identically $0$, so it's automatically smooth there. For $x > 0$, $f\p{x}$ is the composition of the two smooth functions $\exp\p{x}$ and $-\frac{1}{x}$, so it is also smooth there. It remains to check what happens at $x = 0$. We will prove the following claim by induction.

$$
P\p{k} = \br{\exists \text{ a rational function } R_k\p{x}\ \forall x > 0 : f^{\p{k}}\p{x} = R_k\p{x} e^{-\frac{1}{x}} \text{ and } f^{\p{k}}\p{0} = 0}.
$$

**Base case**: $k = 0$

In this case, $P\p{0}$ holds with $R_k\p{x} = 1$ and from the definition of $f$.

**Inductive step**:

Suppose $P\p{k}$ holds for some $k \in \N$. Then $R_k\p{x} = \frac{p\p{x}}{q\p{x}}$ for some polynomial functions $p\p{x}, q\p{x}$. Then

$$
f^{\p{k+1}}\p{x}
  = \br{\frac{p'\p{x}q\p{x} - q'\p{x}p\p{x}}{q\p{x}^2} - \frac{p\p{x}}{x^2 q\p{x}}} e^{-\frac{1}{x}}.
$$

Since $p'\p{x}q\p{x} - q'\p{x}p\p{x}$, $q\p{x}^2$, $p\p{x}$, and $x^2 q\p{x}$, it follows that the first part of $P\p{k+1}$ holds with

$$
R_{k+1}\p{x} = \frac{p'\p{x}q\p{x} - q'\p{x}p\p{x}}{q\p{x}^2} - \frac{p\p{x}}{x^2 q\p{x}}.
$$

To complete the proof, for any $k \in \N$, $R_k\p{x}$ is a rational function, so there exists $m \in \Z$ such that $\lim_{x\to0} x^m R_k\p{x}$ exists. (You can factor the denominator of $R_k\p{x}$ into the form $x^m r\p{x}$, where $m$ is the multiplicity of the root $0$ of the denominator. Then $r$ is continuous and $r\p{0} \neq 0$.) Moreover, by [Exercise 4.5.8](/teaching/25s.131b.2/homework-7/#problem-6),

$$
\lim_{y\to\infty} \frac{e^y}{y^{m+1}} = \infty,
$$

so by composing limits,

$$
\lim_{x\to0^+} \frac{e^{-\frac{1}{x}}}{x^{m+1}}
  = \lim_{y\to\infty} \frac{y^{m+1}}{e^y}
  = 0.
$$

Putting everything together,

$$
\lim_{x\to0^+} \frac{f^{\p{k}}\p{x} - f^{\p{k}}\p{0}}{x}
  = \lim_{x\to0^+} x^m R_k\p{x} \cdot \frac{e^{-\frac{1}{x}}}{x^{m+1}}
  = 0,
$$

and because $f^{\p{k}}\p{x} = 0$ for $x < 0$, we automatically have

$$
\lim_{x\to0^-} \frac{f^{\p{k}}\p{x} - f^{\p{k}}\p{0}}{x}
  = 0.
$$

Thus, $f^{\p{k+1}}\p{0} = 0$. By induction, we have shown that $f$ is smooth and $f^{\p{k}}\p{0} = 0$ for all $k \in \N$. Finally, if $f$ were real analytic at $0$, then there exists $r > 0$ such that

$$
f\p{x} = \sum_{n=0}^\infty c_n x^n
$$

for $x \in \p{-r, r}$. By Taylor's theorem we necessarily have $c_n = \frac{f^{\p{n}}}{n!} = 0$. But this would imply that

$$
0 < e^{-\frac{2}{r}} = f\p{\frac{r}{2}} = 0,
$$

which is impossible, so $f$ is not real analytic at $0$.

</solution>
