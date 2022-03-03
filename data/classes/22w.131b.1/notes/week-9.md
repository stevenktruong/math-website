---
title: Week 9 Discussion Notes
date: "2022-03-03"
tags:
    - differentiability and uniform convergence
    - Stone-Weierstrass
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Uniform Convergence and Differentiability

In [Week 7](../week-7#example-5), we saw that even if $f_n \to f$ uniformly, $f$ is not guaranteed to be differentiability at even a single point. This tells us that uniform convergence of $f_n$ is independent from the differentiability of $f$, so our conditions will need to look relatively different:

<theorem>

Assume that $\func{f_n,g}{\br{a,b}}{\R}$ are functions such that:

1. $f_n'$ exists for all $n \in \N$
2. $f_n' \to g$ uniformly on $\br{a, b}$
3. there exists $x_0 \in \br{a, b}$ such that $\set{f_n\p{x_0}}_n$ converges

Then $f_n$ converges uniformly to a function $f$ on $\br{a, b}$ and $f$ is differentiable with $f' = g$ on $\p{a, b}$.

</theorem>

<remark>

The theorem tells us that under the conditions above, we can swap limits in the following:

$$
\lim_{n\to\infty} \lim_{h\to0} \frac{f_n\p{x+h} - f_n\p{x}}{h}
    = \lim_{h\to0} \lim_{n\to\infty} \frac{f_n\p{x+h} - f_n\p{x}}{h}
$$

The proof of the theorem is quite hard, which tells you that swapping limits is hard in general, so always take a second to think before you try swapping things!

</remark>

This theorem is very useful when dealing with power series. For now, I'll illustrate its usefulness with a concrete example:

<example>

Let $f\p{x} = \sum_{n=0}^\infty x^n$. Show that $f$ is differentiable on $\p{-1, 1}$ and that

$$
f'\p{x} = \sum_{n=1}^\infty nx^{n-1}.
$$

</example>

<solution>

Notice that the formula for $f'$ says

$$
\deriv{}{x} \sum_{n=0}^\infty x^n = \sum_{n=0}^\infty \deriv{}{x} x^n.
$$

To take a derivative, we need to take a limit, and to calculate an infinite sum, we need to take another limit. This tells us that even though it looks obvious, this fact **is not trivial** since we need to interchange two limits.

To show that $f$ is differentiable on $\p{-1, 1}$, we can just show that $f$ is differentiable on any strict subset $\p{-r, r}$, where $0 \leq r < 1$. We want to restrict ourselves to a smaller set for two reasons:

1. Differentiability is a local property (i.e., $f'\p{x}$ only depends on values of $f$ really close to $x$), meaning we don't have to use the whole set to prove things about it.
2. Bad things happen close to the endpoints $-1$ and $1$, so we want to avoid them.

Let $f_N\p{x} = \sum_{n=0}^N x^n$. We'll try to apply the theorem above to this sequence.

Because $f_N$ is a _finite_ sum, we already know

$$
f_N'\p{x} = \sum_{n=1}^N nx^{n-1},
$$

so (i) holds. To show (ii), we need to show that $f_N'$ converges uniformly, i.e., we need to show that an infinite series of functions converges uniformly. This tells us that we'll want to use the Weierstrass M-test, so first calculate

$$
\sup_{x \in \br{-r,r}}{\abs{nx^{n-1}}} = nr^{n-1}.
$$

To show that $\sum_{n=1}^\infty nr^{n-1}$ converges, we'll use the root test. Recall that $\lim_{n\to\infty} n^{\frac{1}{n}} = 1$, so by our limit laws,

$$
\lim_{n\to\infty} \abs{nr^{n-1}}^{\frac{1}{n}}
    = \p{\lim_{n\to\infty} n^{\frac{1}{n}}}\p{\lim_{n\to\infty} r^{\frac{n-1}{n}}}
    = r \in \p{0, 1}.
$$

(We also used the fact that $r^x$ is continuous here.) This step is also where working on the compact set $\br{-r, r}$ pays off, since the root test would be inconclusive if we tried to use it on the whole interval. The root test tells us

$$
\sum_{n=1}^\infty \sup_{x \in \br{-r,r}}{\abs{nx^{n-1}}}
    = \sum_{n=1}^\infty nr^{n-1}
    < \infty,
$$

and so by the Weierstrass M-test, $f_N'$ converges uniformly to $g\p{x} = \sum_{n=1}^\infty nx^{n-1}$, so (ii) holds.

Finally, a power series always converges at its center, i.e., $f_N\p{0} = 1$, which converges as $N \to \infty$, so (iii) holds. By the theorem, $f$ is differentiable on $\p{-r, r}$ and

$$
f'\p{x} = \sum_{n=1}^\infty nx^{n-1}.
$$

for any $x \in \p{-r, r}$.

Given any $x \in \p{-1, 1}$, we can find $0 \leq r < 1$ (e.g., $r = \frac{\abs{x}+1}{2}$) such that $x \in \p{-r, r}$, so we conclude that $f$ is differentiable on all of $\p{-1, 1}$ with the same formula above.

</solution>

<exercise>

With the same $f$ as above, show that $F\p{x} = \sum_{n=0}^\infty \frac{x^{n+1}}{n+1}$ is an antiderivative for $f$.

_Hint:_ Show that $F' = f$ (as opposed to trying to show that $\int f\p{x} \,\diff{x} = F\p{x} + C$). The proof should look mostly the same as the example.

</exercise>

## Stone-Weierstrass

<theorem> Stone-Weierstrass

Let $\p{X, d}$ be a compact metric space and let $A \subseteq C\p{X, \R}$ be a subset such that:

1. $1 \in A$
2. ($A$ is an $\R$-algebra) for any $f, g \in A$ and $\lambda \in A$, we have $\lambda f + g, fg \in A$
3. ($A$ separates points) for any $x \neq y$ in $X$, there exists $f \in A$ such that $f\p{x} \neq g\p{x}$

Then $A$ is dense in $C\p{X, \R}$.

</theorem>

This theorem is important because continuous functions are determined uniquely by their values on dense sets:

<proposition>

Let $f \in C\p{X, \R}$ and assume that $A$ is a dense subset of $X$ (i.e., that $\cl{A} = X$). If $f\p{a} = 0$ for all $a \in A$, then $f\p{x} = 0$ for all $x \in X$.

</proposition>

<proof>

Let $x \in X$. By density of $A$, there exists a sequence $\set{a_n}_n \subseteq A$ such that $a_n \to x$. Thus, by continuity of $f$,

$$
f\p{x}
    = f\p{\lim_{n\to\infty} a_n}
    = \lim_{n\to\infty} f\p{a_n}
    = \lim_{n\to\infty} 0
    = 0.
$$

</proof>

<corollary>

Let $f, g \in C\p{X, \R}$ and assume that $A$ is dense a dense subset of $X$. If $f\p{a} = g\p{a}$ for all $a \in A$, then $f\p{x} = g\p{x}$ for all $x \in X$.

</corollary>

<proof>

$h = f - g \in C\p{X, \R}$ and is $0$ on a dense set, so $h = 0$ on all of $X$, i.e., $f\p{x} = g\p{x}$ for all $x \in X$.

</proof>

<example>

Show that there is exactly one linear function $F \in C\p{X, \R}$, where $X = C\p{\br{0,1}, \R}$, such that $F\p{x^{2n}} = 1$ for all $n \geq 0$.

</example>

<solution>

To prove something like this, we need to show two things:

1. Existence: there is at least one $F$ that works.
2. Uniqueness: there is at most one $F$ that works.

To show existence, we can just give an example of a function. Define $\func{F}{X}{\R}$ via $F\p{f} = f\p{1}$ (so $F$ sends a continuous function $f$ to a number by evaluating it at $x = 1$). We need to show that $F$ is linear and continuous: let $f, g \in X$ and let $\lambda \in \R$. Then

$$
\begin{aligned}
    F\p{\lambda f + g}
        &= \p{\lambda f + g}\p{1} \\
        &= \lambda f\p{1} + g\p{1} \\
        &= \lambda F\p{f} + F\p{g},
\end{aligned}
$$

so $F$ is linear. To show continuity,

$$
\begin{aligned}
    \abs{F\p{f} - F\p{g}}
        &= \abs{f\p{1} - g\p{1}} \\
        &\leq \sup_{x \in \br{0,1}}{\abs{f\p{x} - g\p{x}}} \\
        &= d_\infty\p{f, g},
\end{aligned}
$$

i.e., $F$ is Lipschitz, hence continuous (by a old homework problem). This proves existence.

To show uniqueness, let $G$ be another such function, i.e., $G$ is a continuous linear function such that $G\p{x^{2n}} = 1$ for all $n \geq 0$. We need to show that $F = G$ on all of $X$. Notice that

$$
\begin{aligned}
    F\p{\sum_{n=0}^N a_nx^{2n}}
        &= \sum_{n=0}^N a_n F\p{x^{2n}}
            && \p{F\text{ is linear}} \\
        &= \sum_{n=0}^N a_n G\p{x^{2n}}
            && \p{F\p{x^{2n}} = 1 = G\p{x^{2n}}} \\
        &= G\p{\sum_{n=0}^N a_n x^{2n}},
            && \p{G\text{ is linear}}
\end{aligned}
$$

so $F = G$ on the set

$$
A = \set{\sum_{n=0}^N a_nx^{2n} \st N \in \N,\ a_n \in \R} \subseteq X.
$$

If we can show that $A$ is dense in $X$, then by the corollary above, we get $F = G$ on all of $X$. To show that, we can use Stone-Weierstrass:

(i) holds since if $n = 0$, then $1 = x^{2n} \in A$. To show (ii), let $f\p{x} = \sum_{n=0}^N a_nx^{2n}$, $g\p{x} = \sum_{m=0}^M b_mx^{2m}$, and $\lambda \in \R$. Without loss of generality, we may assume that $N \leq M$ (otherwise, we can just swap the roles of $f$ and $g$), so we get

$$
\begin{gathered}
    \lambda f\p{x} + g\p{x}
        = \sum_{n=0}^N \p{\lambda a_n + b_n} x^{2n} + \sum_{n=N+1}^M b_n x^{2n} \in A \\
    f\p{x}g\p{x}
        = \sum_{n=0}^N \sum_{m=0}^M \p{a_nb_m} x^{2\p{n+m}} \in A,
\end{gathered}
$$

so $A$ is an $\R$-algebra. Finally, for (iii), notice that $x^2 \in A$ is injective, so if $x \neq y$ in $\br{0, 1}$, then $x^2 \neq y^2$. Thus, $A$ separates points.

By Stone-Weierstrass, $A$ is dense in $X$, so $F = G$ on all of $X$, which proves uniqueness.

</solution>

## True or False

<example>

True or false: _If $f_n \to f$ uniformly on compact sets of $\R$, then $f_n \to f$ uniformly on all of $\R$._

</example>

<solution>

This is false. A simple example is a moving step function, i.e.,

$$
f_n\p{x}
    =
        \begin{cases}
            1 & \text{if } x \in \br{n, n+1}, \\
            0 & \text{otherwise}.
        \end{cases}
$$

Any compact set $K \subseteq \R$ is bounded, so there exists $N \in \N$ such that $\sup{K} < N$. Thus, $f_n\p{x} = 0$ on $K$ for all $n \geq N$, so $f_n \to f$ uniformly on $K$, hence on any compact set. However,

$$
\sup_{x \in \R}{\abs{f_n\p{x} - 0}} = 1,
$$

so $f_n$ does not converge uniformly to $0$ on _all_ of $\R$.

</solution>
