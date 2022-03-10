---
title: Week 10 Discussion Notes
date: "2022-03-10"
tags:
    - real analytic functions
    - inner products
publish: yes
---

# Week 10 Discussion Notes

## Table of Contents

## Real Analytic Functions

<definition>

Let $U \subseteq \R$ be an open set and $\func{f}{U}{\R}$ be a function. We say that $f$ is **real analytic** on $U$ if for every $a \in U$, there exists $r > 0$ such that

$$
f\p{x} = \sum_{n=0}^\infty c_{a,n}\p{x - a}^n
\quad\text{for } x \in B\p{a, r}.
$$

</definition>

<remark>

One thing important to keep in mind is that the coefficients can be different depending on the center $a$. For example, if $f = 0$ on $\p{0, 1}$ and $f = 1$ on $\p{2, 3}$, then $f$ is real analytic, but

$$
\begin{aligned}
    f\p{x} &= 0 + 0 + \cdots \quad\text{on } \p{0, 1} \\
    f\p{x} &= 1 + 0 + \cdots \quad\text{on } \p{2, 3}.
\end{aligned}
$$

</remark>

<example>

$\frac{1}{1 - x} = \sum_{n=0}^\infty x^n$ is real analytic on $\p{-1, 1}$. (It's actually real analytic on $\p{-\infty, 1}$, but of course, the power series expansion will be different from the above when $a < -1$.)

</example>

<theorem>

Let $f$ be a real analytic function on an interval $I \subseteq \R$. Assume that the set $E = \set{x \st f\p{x} = 0}$ is non-empty and that there exists $a_0 \in E$ and a sequence $a_k \in E \setminus \set{a_0}$ such that $a_k \to a_0$ ($a_0$ is called an **accumulation point of $E$**). Then $f = 0$ on $I$.

</theorem>

<proof>

**Claim:** $f = 0$ in an open interval around $a_0$.

Since $f$ is real analytic at $a_0$, there exists $r > 0$ such that

$$
f\p{x} = \sum_{n=0}^\infty c_n\p{x - a_0}^n
\quad\text{for } x \in B\p{a_0, r}.
$$

Suppose $f \neq 0$ on $B\p{a_0, r}$. Then at least one of the coefficients $c_n$ must be non-zero or else the series expansion is just $0$. Let $n_0$ be the first number such that $c_{n_0} \neq 0$. Then

$$
f\p{x}
    = \sum_{n=n_0}^\infty c_n\p{x - a_0}^n
    = \p{x - a_0}^{n_0} \underbrace{\sum_{n=n_0}^\infty c_n\p{x - a_0}^{n-n_0}}_{\eqqcolon\,g\p{x}}.
$$

Notice that

$$
\lim_{n\to\infty} \abs{c_n\p{x - a_0}^{n-n_0}}^{\frac{1}{n}}
    = \abs{x - a_0}\lim_{n\to\infty} \abs{c_n}^{\frac{1}{n}}
$$

(the second limit exists since it's the reciprocal of the radius of convergence of $f$ at $a$, which is at least $r$). Thus, $g$ is also real analytic at $a$, and in particular, $g$ is continuous.

Since $a_k \in E$,

$$
0
    = f\p{a_k}
    = \p{x - a_0}^{n_0} g\p{a_k}.
$$

Moreover, because $a_k \neq a_0$ for any $k$, we can divide to get

$$
g\p{a_k} = 0
\implies g\p{a_0} = \lim_{k\to\infty} g\p{a_k} = 0
$$

by continuity of $g$. But

$$
g\p{a_0} = 0 \implies c_{n_0} = 0,
$$

a contradiction. Thus, $c_n = 0$ for all $n$, so $f$ is $0$ on $B\p{a_0, r}$.

**Claim:** The set $A = \set{a \st f\p{x} = 0 \text{ in a neighborhood of } a}$ is non-empty, open, and closed.

From the first claim, we already have $a_0 \in A$, so $A$ is non-empty.

To see that $A$ is open, let $a \in A$, so by definition, there exists $r > 0$ such that $f = 0$ on $B\p{a, r}$. Since open balls are open, for any $a' \in B\p{a, r}$, there exists $r' > 0$ such that $B\p{a', r'} \subseteq B\p{a, r}$. But this means that $f = 0$ on $B\p{a', r'}$. Since $a'$ was arbitrary, this shows $B\p{a, r} \subseteq A$, so $A$ is open.

Finally, to see that $A$ is closed, assume there exists $a \in \cl{A} \setminus A$. By definition, there exists a sequence $b_k \in A \setminus \set{a}$ such that $b_k \to a$. But notice that $a, b_k \in E$ by definition, so by the first claim, this means that $a \in A$, a contradiction. Thus, $A = \cl{A}$, so $A$ is closed.

**Claim:** $A = I$, i.e., $f = 0$ on all of $I$.

$A$ is open, and because $A$ is closed, $A^\comp$ is also open. Moreover, $A \cup A^\comp = I$. Thus, because $I$ is connected and $A$ is non-empty, it follows that $A = I$. (Otherwise, if $A^\comp \neq \emptyset$, then $I$ is the union of two disjoint, non-empty, and open sets, which would imply that $I$ is disconnected.)

</proof>

## Inner Products

<definition>

Let $V$ be a real or complex vector space. Then an **inner product** $\inner{\,\cdot\,, \,\cdot\,}$ is a function $V \times V \to \p{\R \text{ or } \C}$ which is:

1. (conjugate symmetric) $\inner{x, y} = \overline{\inner{y, x}}$
2. (linear in the first argument) $\inner{x + \lambda y, z} = \inner{x, y} + \lambda \inner{y, z}$
3. (positive definite) If $x \neq 0$, then $\inner{x, x} \in \p{0, \infty}$

</definition>

<example>

The dot product on $\R^n$, i.e.,

$$
x \cdot y = \sum_{i=1}^n x_iy_i
$$

is an inner product on $\R^n$. Recall that

$$
x \cdot y = \norm{x} \norm{y} \cos{\theta},
$$

so intuitively, inner products allow us to talk about angles in more general vector spaces.

</example>

<lemma>

The function

$$
\inner{f, g} = \int_0^1 f\p{x} \overline{g\p{x}} \,\diff{x}
$$

defines an inner product on $C\p{\br{0, 1}}$. Thus,

$$
\norm{f}_2
    \coloneqq \sqrt{\inner{f, f}}
    = \p{\int_0^1 \abs{f\p{x}}^2 \,\diff{x}}^{\frac{1}{2}}
$$

defines a norm on $C\p{\br{0, 1}}$ called the **$L^2$-norm**.

</lemma>

<remark>

$C\p{\br{0, 1}}$ is _not_ complete with respect to the $L^2$-norm.

</remark>

<example>

Use Gram-Schmidt to find an orthonormal basis for $V = \span\set{1, x}$, where the span is taken over $\R$.

</example>

<solution>

We can take $e_1 = 1$ since $1$ is already normalized. Then

$$
u_2
    = x - \proj_{e_1}\p{x}
    = x - \inner{x, e_1}e_1.
$$

Here,

$$
\inner{x, e_1} = \int_0^1 x \cdot 1 \,\diff{x} = \frac{1}{2},
$$

so $u_2 = x - \frac{1}{2}$. Now we just need to normalize it:

$$
\norm{u_2}_2 = \p{\int_0^1 \p{x - \frac{1}{2}}^2 \,\diff{x}}^{\frac{1}{2}} = \frac{1}{2\sqrt{3}}
\implies e_2 = \frac{u_2}{\norm{u_2}_2} = 2x\sqrt{3} - \sqrt{3}.
$$

Thus,

$$
\boxed{\set{1, 2x\sqrt{3} - \sqrt{3}}}
$$

is an orthonormal basis for $V$.

</solution>

<example>

Find the function in $V = \span\set{1, x}$ that minimizes the $L^2$-distance to $x^2$.

</example>

<solution>

Recall that the minimizer is the orthogonal projection of $x^2$ to $V$. This is

$$
\proj_V\p{x^2}
    = \inner{x^2, e_1}e_1 + \inner{x^2, e_2}e_2,
$$

where $\set{e_1, e_2}$ is the orthonormal basis from the previous problem. Thus,

$$
\begin{gathered}
    \inner{x^2, e_1}
        = \int_0^1 x^2 \cdot 1 \,\diff{x}
        = \frac{1}{3} \\
    \inner{x^2, e_2}
        = \int_0^1 x^2\p{2x\sqrt{3} - \sqrt{3}} \,\diff{x}
        = \frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{3},
\end{gathered}
$$

so the minimizer is

$$
\boxed{\frac{1}{3} + \p{\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{3}}\p{2x\sqrt{3} - \sqrt{3}}}.
$$

</solution>
