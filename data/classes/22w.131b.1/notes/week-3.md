---
title: Week 3 Discussion Notes
date: "2022-01-19"
tags:
    - cauchy sequences
    - completeness
publish: yes
---

# Week 3 Discussion Notes

## Table of Contents

## Homework Comments

### Limits

I noticed that a lot of students are very "limit-happy," i.e., many of you like to move limits around without justification. **Starting with Homework 3, I will require that you justify any instances where you move a limit around.** This is especially important if you want to swap $\lim$ with $\max$, $\min$, $\sup$, or $\inf$. (In fact, in many instances, that won't be legal.)

For example, here is a model solution:

<example>

Assume that $\lim_{n\to\infty} x_n = x$ and $\lim_{n\to\infty} y_n = y$. Show that

$$
\lim_{n\to\infty} \p{x_n + y_n}^2 = \p{x + y}^2.
$$

</example>

<solution>

$$
\begin{aligned}
    \lim_{n\to\infty} \p{x_n + y_n}^2
        &= \p{\lim_{n\to\infty} \p{x_n + y_n}}^2
            &&\p{t^2 \text{ is continuous}} \\
        &= \p{x + y}^2
            &&\p{\text{limit law}}
\end{aligned}
$$

</solution>

### Problem 2

While grading this one, I noticed that a lot of you guys wrote something like this:

> $$
> \lim_{n\to\infty} \abs{x_i^{\p{n}}} = 0 \text{ for all } i
> \implies \lim_{n\to\infty} \max_{1 \leq i \leq k}{\abs{x_i^{\p{n}}}} = 0
> $$

Many of you also wrote the equivalent statement

> $$
> \max_{1 \leq i \leq k} \lim_{n\to\infty} \abs{x_i^{\p{n}}} = 0
> \implies \lim_{n\to\infty} \max_{1 \leq i \leq k}{\abs{x_i^{\p{n}}}} = 0
> $$

While it turns out this is true for this problem, it's a non-trivial fact, meaning you have to prove it. What's special in this problem is that $i$ ranges over a _finite_ set, $i \in \set{1, \ldots, k}$. When you take a maximum or supremum over an infinite set, you can no longer switch $\lim$ and $\max$ in general:

<example>

Let

$$
a_i^{\p{n}}
    =
        \begin{cases}
            1 & \text{if } i = n, \\
            0 & \text{otherwise}.
        \end{cases}
$$

In other words, $a^{\p{n}}$ is a sequence which is all $0$'s except at the $n$-th term. For example,

$$
\begin{aligned}
    a^{\p{1}} &= \p{1, 0, 0, 0, \ldots} \\
    a^{\p{2}} &= \p{0, 1, 0, 0, \ldots} \\
    a^{\p{3}} &= \p{0, 0, 1, 0, \ldots} \\
        &\,\,\:\vdots
\end{aligned}
$$

Then

$$
\lim_{n\to\infty} \abs{x_i^{\p{n}}} = 0 \text{ for all } i
\iff \max_i \lim_{n\to\infty} \abs{x_i^{\p{n}}} = 0,
$$

but for each $n$, the maximum coordinate of $x^{\p{n}}$ is $1$, so you also have

$$
\lim_{n\to\infty} \max_i{\abs{x_i^{\p{n}}}}
    = \lim_{n\to\infty} 1
    = 1.
$$

**Moral:** Pointwise convergence (i.e., convergence in each coordinate) does not imply uniform convergence (i.e., convergence of the maximum or supremum) in general.

We'll see more examples of this phenomenon later.

</example>

## Cauchy Sequences and Completeness

If you remember the definition of a Cauchy sequence in $\R$, then this definition should be no surprise:

<definition>

Let $\p{X, d}$ be a metric space. We say a sequence $\set{x_n}_n$ is **Cauchy** if for all $\epsilon > 0$, there exists $N$ such that $d\p{x_n, x_m} < \epsilon$ whenever $n, m \geq N$.

</definition>

Morally, Cauchy sequences "should" converge. In $\p{\R, \abs{\:\cdot\:}}$, a sequence was convergent if and only if it is Cauchy (this is the Bolzano-Weierstrass theorem from MATH 131A). However, this is not true for general metric spaces, which is why we have an additional definition:

<definition>

Let $\p{X, d}$ be a metric space. If every Cauchy sequence converges in $X$, then we say that $X$ is **complete**.

</definition>

<example>

1. $\R$ is complete with respect to the Euclidean metric..
2. $\p{0, 1}$ is not complete with respect to the Euclidean metric.
3. $\br{0, 1}$ is complete with respect to the Euclidean metric..

</example>

<example>

Show that $\p{\R^k, d_{\ell^2}}$ is complete.

</example>

<solution>

To show this, we need to show that any Cauchy sequence $\set{x^{\p{n}}}_n$ in $\R^n$ converges. Each element in our sequence is a vector:

$$
x^{\p{n}} = \p{x^{\p{n}}_1, \ldots, x^{\p{n}}_k}
$$

As you can imagine, we're going to need to use completeness of $\R$ to do this.

Let $\epsilon > 0$. Since $\set{x^{\p{n}}}_n$ is Cauchy, there exists an $N$ such that if $n, m \geq N$, then

$$
\p{\sum_{i=1}^k \abs{x^{\p{n}}_i - x^{\p{m}}_i}^2}^{1/2}
    = d_{\ell^2}\p{x^{\p{n}}, x^{\p{m}}}
    < \epsilon.
$$

Notice that

$$
\abs{x^{\p{n}}_j - x^{\p{m}}_j}
    \leq \p{\sum_{i=1}^k \abs{x^{\p{n}}_i - x^{\p{m}}_i}^2}^{1/2}
    < \epsilon
$$

if $n, m \geq N$, i.e., the components $\set{x^{\p{n}}_j}_n$ is Cauchy in $\R$. Thus, by completeness, there exists $x_j \in \R$ such that $\lim_{n\to\infty} x^{\p{n}}_j = x_j$ for each $1 \leq j \leq k$. The vector $x = \p{x_1, \ldots, x_k}$ will be our candidate for the limit of the sequence. We just need to prove that $\set{x^{\p{n}}}_n$ actually converges to $x$ with respect to $d_{\ell^2}$.

This is easy, though. The sum in $d_{\ell^2}$ is a _finite_ sum, so we can apply our limit laws:

$$
\begin{aligned}
    \lim_{n\to\infty} d_{\ell^2}\p{x^{\p{n}}, x}
        &= \lim_{n\to\infty} \p{\sum_{i=1}^k \abs{x^{\p{n}}_i - x_i}^2}^{1/2} \\
        &= \p{\lim_{n\to\infty} \sum_{i=1}^k \abs{x^{\p{n}}_i - x_i}^2}^{1/2}
            && \p{t^{1/2} \text{ is continuous}} \\
        &= \p{\sum_{i=1}^k \lim_{n\to\infty} \abs{x^{\p{n}}_i - x_i}^2}^{1/2}
            && \p{\text{limit law; sum is finite}} \\
        &= 0
            && \p{t^2 \text{ is continuous; } \lim_{n\to\infty} x^{\p{n}}_i = x_i}
\end{aligned}
$$

Thus, $\set{x^{\p{n}}}_n$ converges to $x$ in $d_{\ell^2}$, so $\p{\R^k, d_{\ell^2}}$ is complete.

</solution>

<example>

Show that $\p{C\p{\br{0,1}}, d}$ is complete, where $d$ is the $\sup$-norm.

</example>

<solution>

As a reminder:

$$
\begin{gathered}
    C\p{\br{0,1}} = \set{\func{f}{\br{0,1}}{\R} \st f \text{ is continuous}} \\
    d\p{f, g} = \sup_{x \in \br{0,1}} \abs{f\p{x} - g\p{x}}
\end{gathered}
$$

Let $\set{f_n}_n$ be a Cauchy sequence. Like in the previous example, we'll first want to find a candidate for the limit of this sequence. Notice that for a fixed $x \in \br{0, 1}$,

$$
\abs{f_n\p{x} - f_m\p{x}}
    \leq \sup_{x \in \br{0,1}} \abs{f_n\p{x} - f_m\p{x}}
    = d\p{f_n, f_m}.
$$

Like before, this estimate implies that $\set{f_n\p{x}}_n$ is Cauchy for each $x$, so by completeness of $\R$, there exists a number $f\p{x} \in \R$ such that $\lim_{n\to\infty} f_n\p{x} = f\p{x}$.

There are two more things to show: (i) that $\set{f_n}_n$ converges to $f$ with respect to $d$, (ii) and that $f$ is actually in $C\p{\br{0,1}}$, i.e., that $f$ is continuous.

To show (i), let $\epsilon > 0$. Because $\set{f_n}_n$ is Cauchy, there exists $N$ such that for any $x \in \br{0, 1}$,

$$
\begin{aligned}
    \abs{f_n\p{x} - f_m\p{x}}
        &\leq \sup_{x \in \br{0,1}} \abs{f_n\p{x} - f_m\p{x}} \\
        &= d\p{f, g} \\
        &< \frac{\epsilon}{2}
\end{aligned}
$$

whenever $n, m \geq N$. If we fix $n \geq N$ and send $m \to \infty$, we get

$$
\begin{gathered}
    \abs{f_n\p{x} - f\p{x}}
        = \lim_{m\to\infty} \abs{f_n\p{x} - f_m\p{x}}
        \leq \frac{\epsilon}{2} \\
    \implies d\p{f_n, f}
        = \sup_{x \in \br{0,1}} \abs{f_n\p{x} - f\p{x}}
        \leq \frac{\epsilon}{2}
        < \epsilon,
\end{gathered}
$$

and this inequality is true for any $n \geq N$. In other words, $\set{f_n}_n$ converges to $f$ with respect to $d$.

Finally, we need to show (ii). But this is immediate: convergence with respect to $d$ is exactly uniform convergence. Thus, $\set{f_n}_n$ is a sequence of continuous functions which converges uniformly to $f$, so $f$ itself must be continuous (this is a fact from MATH 131A).

</solution>

<remark>

When proving (i), you _cannot_ write the following:

> $$
> \begin{aligned}
>   \sup_{x \in \br{0,1}} \abs{f_n\p{x} - f\p{x}}
>       &= \sup_{x \in \br{0,1}} \lim_{m\to\infty} \abs{f_n\p{x} - f_m\p{x}} \\
>       &= \lim_{m\to\infty} \sup_{x \in \br{0,1}} \abs{f_n\p{x} - f_m\p{x}} \\
>       &< \epsilon.
> \end{aligned}
> $$

The second equality is not true in general: Consider $f_n\p{x} = x^n$ on $\pco{0, 1}$. Then

$$
\lim_{n\to\infty} \sup_{x \in \pco{0,1}}{x^n} = 1
\quad\text{but}\quad
\sup_{x \in \pco{0,1}} \lim_{n\to\infty} x^n = 0.
$$

This means that you _cannot_ swap $\sup$ and $\lim$ without additional justification.

</remark>

## Homework Hints

Here's a useful proposition (that's listed as an exercise in Terry's book) for Problem 2, 3(a), and 5:

<proposition> 1.2.5(h)

If $E$ is any subset of $X$, then $\Int{E}$ is open, and given any other open set $V \subseteq E$, we have $V \subseteq \Int{E}$. Similarly, $\cl{E}$ is closed, and given any other closed set $K \supseteq E$, we have $K \supseteq \cl{E}$.

</proposition>

<proof>

There are a number of things to prove:

**$\Int{E}$ is open:**

Let $x \in \Int{E}$. By definition, this means there exists $r > 0$ such that $B\p{x, r} \subseteq E$. We'll show that $B\p{x, r} \subseteq \Int{E}$ also, which shows by definition that $\Int{E}$ is open.

$B\p{x, r}$ is an open set, so given any $y \in B\p{x, r}$, there exists $r' > 0$ such that $B\p{y, r'} \subseteq B\p{x, r} \subseteq E$. In other words, $y \in \Int{E}$, so $B\p{x, r} \subseteq \Int{E}$.

**$\Int{E}$ is the largest open set in $E$:**

Assume $V \subseteq E$ and that $V$ is open. Given $x \in V$, this means there exists $r > 0$ such that $B\p{x, r} \subseteq V \subseteq E$. Thus, $x \in \Int{E}$ by definition, so $V \subseteq \Int{E}$.

**$\cl{E}$ is closed:**

This was proven in lecture.

**$\cl{E}$ is the smallest closed set containing $E$:**

Assume $K \supseteq E$ and $K$ is closed. Given $x \in \cl{E}$ and $r > 0$,

$$
\emptyset
    \neq B\p{x, r} \cap E
    \subseteq B\p{x, r} \cap K.
$$

Moreover, $K$ is closed, so $x \in \cl{K} = K$, which shows that $\cl{E} \subseteq K$.

</proof>

You can use this proposition freely as long as you cite it properly (i.e., write down the proposition number every time you use it).
