---
title: Week 8 Discussion Notes
date: "2020-11-24"
tags:
    - sequences
    - induction
    - convergence of infinite series
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Sequences

### Squeeze Theorem

This should be familiar from the squeeze theorem for functions:

<theorem> squeeze theorem for sequences

Let $\set{a_n}, \set{b_n}, \set{c_n}$ be sequences such that $b_n \leq a_n \leq c_n$ for all $n \geq 1$. Then

$$
\lim_{n\to\infty} b_n = \lim_{n\to\infty} c_n = L \implies \lim_{n\to\infty} a_n = L.
$$

Note that this works even if $L = \pm\infty$.

</theorem>

Generally, this is hard to apply since it's hard to find the "squeezing" sequences. Usually, we use this to show that something goes to $0$. For example:

<example>

Show that $\displaystyle \lim_{n\to\infty} \frac{\sin{n}}{n} = 0$.

</example>

<solution>

To show that something goes to $0$, we can just show that its absolute value goes to $0$. So, since $\abs{\sin{n}} \leq 1$,

$$
0 \leq \abs{\frac{\sin{n}}{n}} \leq \frac{1}{n}.
$$

So, if we use the squeeze theorem with $b_n = 0$ and $c_n = \frac{1}{n}$, we get

$$
\lim_{n\to\infty} \abs{\frac{\sin{n}}{n}} = 0
\implies \lim_{n\to\infty} \frac{\sin{n}}{n} = \boxed{0}.
$$

</solution>

### Bounded Monotone Sequences

<theorem>

Let $\set{a_n}$ be a sequence.

1. If $\set{a_n}$ is monotone increasing and bounded from above, then $\set{a_n}$ converges.
1. If $\set{a_n}$ is monotone decreasing and bounded from below, then $\set{a_n}$ converges.

</theorem>

Notice that this just tells you that the sequences converges, but it doesn't tell you what it converges to. It can still be used to calculate limits though, especially for recursively defined sequences:

<example  id="11.1.88(c)"> (11.1.88(c))

Consider the sequence defined by

$$
a_0 = 0
\quad\text{and}\quad
a_{n+1} = \sqrt{2 + a_n}.
$$

Determine $\displaystyle \lim_{n\to\infty} a_n$.

</example>

<solution>

In part (a) and (b), you will show that $\set{a_n}$ is an increasing sequence bounded from above. By the theorem above, you know that there exists a (finite) number $L$ such that $\displaystyle \lim_{n\to\infty} a_n = L$. Now that we know that the limit exists, we can apply limit laws:

$$
\begin{aligned}
    \lim_{n\to\infty} a_{n+1} = \lim_{n\to\infty} \sqrt{2 + a_n}
        &\implies \lim_{n\to\infty} a_{n+1} = \sqrt{2 + \lim_{n\to\infty} a_n} \\
        &\implies L = \sqrt{2 + L}.
\end{aligned}
$$

From here, you can solve for $L$ using the quadratic formula. (This is a homework problem, so I don't want to do the problem entirely.)

</solution>

## Induction

An important proof technique for sequences is **induction**. The theorem statement is a little technical, so I think it's easier to just describe it.

### Process

Let's say you want to prove something for natural numbers $n$, e.g., an inequality like $n^2 \leq 2^n$ for $n \geq 2$. We'll represent the statement we want to prove by $P\p{n}$. There are two steps to use mathematical induction to prove it:

**Base Case**

You need to establish $P\p{n}$ for some concrete $n$, usually smallest possible value of $n$. For example, if $P\p{n}$ is the statement "$n^2 \leq 2^n$", we want to prove $P\p{2}$ first, i.e., prove the inequality is true when we set $n = 2$.

**Inductive Step**

Next, you need to prove that $P\p{k} \implies P\p{k+1}$, i.e., prove that if the statement is true for some number $k$, then it's true for the next number, $k + 1$. In our example, this means that we need to assume that $k^2 \leq 2^k$, and somehow use this to show that $\p{k+1}^2 \leq 2^{k+1}$. In this step, we call $P\p{k}$ the **inductive hypothesis**.

After you complete both steps, you set up an "implication chain" like this:

$$
P\p{1} \implies P\p{2} \implies P\p{3} \implies \cdots \implies P\p{k} \implies P\p{k+1} \implies \cdots
$$

You can think of it as dominoes: the inductive step is putting the dominoes next to each other, and the base case is knocking over the first domino. Once you do both, you will end up knocking over every dominoes.

<example id="11.1.88(a)"> (11.1.88(a))

Consider the sequence defined by

$$
a_0 = 0
\quad\text{and}\quad
a_{n+1} = \sqrt{2 + a_n}.
$$

Show that $a_n < 2$ for all $n \geq 1$.

</example>

<solution>

Here, the statement we want to prove is "$a_n < 2$", and we will do this by induction.

**Base case:** $n = 0$

We already know that $a_0 = 0 < 2$, so we have established the base case.

**Inductive step:** $P\p{k} \implies P\p{k+1}$

To prove an implication, we assume $P\p{k}$ is true, and we need to show that $P\p{k+1}$ is true. In this example, we assume $a_k < 2$, and we need to show that $a_{k+1} < 2$ also. Whenever you have a recursively defined sequence, it's always a good idea to write out the recursion:

$$
a_{k+1} = \sqrt{2 + a_k} < \sqrt{2 + 2} = \sqrt{4} = 2.
$$

This proves $P\p{k+1}$, so the inductive step is complete.

It doesn't look like we did anything, but we've prove that $a_n < 2$ for all $n \geq 1$.

</solution>

## Infinite Series

### Definition

Infinite series are a lot like improper integrals. For instance, they're both defined through limits:

<definition>

Let $\set{a_n}$ be a sequence, and consider the sequence $\set{S_N}$ defined by

$$
S_N = \sum_{n=0}^N a_n = a_0 + a_1 + \cdots + a_N.
$$

If $\set{S_N}$ converges, then we say that $\displaystyle \sum_{n=0}^\infty a_n$ **converges**, and we write

$$
\sum_{n=0}^\infty a_n = \lim_{N\to\infty} S_N.
$$

Otherwise, if $\set{S_N}$ diverges, we say that the infinite series **diverges**.

</definition>

The main example we have is the geometric series:

<example> (Geometric series)

Determine when $\displaystyle \sum_{n=0}^\infty cr^n$ converges, and calculate the sum when it does.

</example>

<solution>

Whenever you need to calculate the sum explicitly, it's a good idea to look at the partial sums first:

$$
\begin{aligned}
    S_N &= \sum_{n=0}^N cr^n = c + cr + cr^2 + \cdots + cr^N \\
    rS_N &= \sum_{n=0}^N cr^{n+1} = cr + cr^2 + cr^3 + \cdots + cr^N + cr^{N+1}.
\end{aligned}
$$

If we subtract these, we get

$$
\begin{aligned}
    S_N - rS_N = c - cr^{N+1}
        &\implies \p{1 - r}S_N = c\p{1 - r^{N+1}} \\
        &\implies S_N = c\p{\frac{1 - r^{N+1}}{1 - r}}.
\end{aligned}
$$

From here, there are several cases:

$\abs{r} < 1$: $\displaystyle \lim_{N\to\infty} r^{N+1} = 0 \implies \lim_{N\to\infty} S_n = \frac{c}{1 - r}$.

$r = 1$: Our calculation doesn't apply here. Instead, we just get $S_N = cN$, which diverges.

$r = -1$: $\displaystyle \lim_{N\to\infty} r^{N+1}$ doesn't exist in this case, so $\set{S_N}$ diverges.

$\abs{r} > 1$: $\displaystyle \lim_{N\to\infty} r^{N+1}$ doesn't exist in this case, either.

In summary, the series converges only if $\abs{r} < 1$, in which case

$$
\sum_{n=0}^\infty cr^n = \boxed{\frac{c}{1 - r}}.
$$

</solution>

As a warning, the starting index is very important when calculating the sum of a geometric series. For example,

$$
\sum_{n=2}^\infty \frac{1}{2^n}
    = \p{\sum_{n=0}^\infty \frac{1}{2^n}} - 1 - \frac{1}{2}
    = \frac{1}{1 - \frac{1}{2}} - 1 - \frac{1}{2}
    = \frac{1}{2}.
$$

### Divergence Test

<theorem> divergence test for series

If $\displaystyle \sum_{n=0}^\infty a_n$ converges, then $\displaystyle \lim_{n\to\infty} a_n = 0$.

</theorem>

The [contrapositive](https://www.mathwords.com/c/contrapositive.htm) is usually how you'll use this, i.e., if $\displaystyle \lim_{n\to\infty} a_n \neq 0$ or doesn't exist, then the series diverges.

<example>

Determine whether $\displaystyle \sum_{n=0}^\infty e^{1/n}$ converges or not.

</example>

<solution>

Notice that $\lim_{n\to\infty} e^{1/n} = 1 \neq 0$, so by the divergence test, the series diverges.

</solution>

**Warning:** If $\displaystyle \lim_{n\to\infty} a_n = 0$, this does **not** mean that the series converges. For example,

$$
\lim_{n\to\infty} \frac{1}{n} = 0, \text{ but } \sum_{n=1}^\infty \frac{1}{n} \text{ diverges}.
$$

### Telescoping Series

Telescoping series are series where a lot of terms cancel out. Generally, they'll be rational functions with linear factors in the denominator.

<example id="11.2.14"> (slightly modified 11.2.14)

Calculate $\displaystyle \sum_{n=1}^\infty \frac{1}{n\p{n+2}}$.

</example>

<solution>

Whenever you run into something like this, you'll want to start off with partial fraction decomposition:

$$
\frac{1}{n\p{n+2}} = \frac{1}{2}\p{\frac{1}{n} - \frac{1}{n + 2}}.
$$

Then if we look at the partial sums,

$$
\begin{aligned}
    S_N
        &= \sum_{n=1}^N \frac{1}{2}\p{\frac{1}{n} - \frac{1}{n + 2}} \\
        &= \frac{1}{2} \p{\sum_{n=1}^N \frac{1}{n} - \sum_{n=1}^N \frac{1}{n + 2}} \\
        &= \frac{1}{2} \br{1 + \frac{1}{2} + \colorbox{red}{$\displaystyle \frac{1}{3} + \frac{1}{4} + \cdots + \frac{1}{N}$} - \p{\colorbox{red}{$\displaystyle \frac{1}{3} + \frac{1}{4} + \cdots + \frac{1}{N}$} + \frac{1}{N + 1} + \frac{1}{N + 2}}} \\
        &= \frac{1}{2} \p{1 + \frac{1}{2} - \frac{1}{N + 1} - \frac{1}{N + 2}}.
\end{aligned}
$$

The highlighted terms cancel each other out, so in the end, we get

$$
\lim_{N\to\infty} S_N
    = \lim_{N\to\infty} \frac{1}{2} \p{1 + \frac{1}{2} - \frac{1}{N + 1} - \frac{1}{N + 2}}
    = \frac{1}{2} \p{1 + \frac{1}{2}}
    = \boxed{\frac{3}{4}}.
$$

</solution>

### Integral Test

Another very useful convergence test is the integral test:

<theorem> integral test

Let $\set{a_n}$ be a sequence and suppose that there is a function $f$ such that $f\p{n} = a_n$ for all $n \geq 1$. If $f\p{x}$ is positive, decreasing, and continuous on $\pco{1, \infty}$, then

$$
\sum_{n=1}^\infty a_n \text{ converges} \iff \int_1^\infty f\p{x} \,\diff{x} \text{ converges}.
$$

</theorem>

The "$\iff$" symbol means "if and only if", and in this case, this means that the infinite series and the improper integral converge together or diverge together. In other words, if one converges, then the other converges, and if one diverges, then the other diverges also. The picture looks like this:

<img src="{{ assetsFolder }}/images/integral-test.png" width=800px>

On $\br{0, 1}$, you can see that $a_2 \leq f\p{x} \leq a_1$, so if you integrate both sides from $1$ to $2$, you get

$$
\int_1^2 a_2 \,\diff{x} \leq \int_1^2 f\p{x} \,\diff{x} \leq \int_1^2 a_1 \,\diff{x}
\implies a_2 \leq \int_1^2 f\p{x} \,\diff{x} \leq a_1.
$$

As you can imagine, on a general interval $\br{n, n+1}$, you get

$$
a_{n+1} \leq \int_n^{n+1} f\p{x} \,\diff{x} \leq a_n.
$$

If you add everything up, you end up with

$$
\sum_{n=2}^\infty a_n = \sum_{n=1}^\infty a_{n+1} \leq \int_1^\infty f\p{x} \,\diff{x} \leq \sum_{n=1}^\infty a_n.
$$

From here, if you use comparison, it shouldn't be too hard to see why the integral test is true.

<example>

Determine whether $\displaystyle \sum_{n=2}^\infty \frac{1}{n\ln{n}}$.

</example>

<solution>

Here, $\displaystyle f\p{x} = \frac{1}{x\ln{x}}$. For $x \geq 3$, $f\p{x} > 0$, so it's positive. It's also continuous, and

$$
f'\p{x} = \frac{1}{x\ln{x}} = -\frac{\ln{x} - 1}{\p{x\ln{x}}^2} \leq 0,
$$

so it's a decreasing function. This means we can apply the integral test:

$$
\sum_{n=3}^\infty \frac{1}{n\ln{n}} \text{ converges} \iff \int_3^\infty \frac{\diff{x}}{x\ln{x}} \text{ converges}.
$$

We can use the substitution $u = \ln{x}$ to turn the integral into

$$
\int_3^\infty \frac{\diff{x}}{x\ln{x}}
    = \int_{\ln{3}}^\infty \frac{\diff{u}}{u},
$$

and this diverges since it's a $p$-integral with $p = 1$. So,

$$
\sum_{n=3}^\infty \frac{1}{n\ln{n}} \text{ diverges} \implies \sum_{n=2}^\infty \frac{1}{n\ln{n}} \text{ diverges}.
$$

</solution>

## Homework

### 11.1.72

See [#156](https://campuswire.com/c/G6D8D17EE/feed/156).

### 11.1.88

I covered [(a)](<#11.1.88(a)>) and [(c)](<#11.1.88(c)>).

### 11.2.14

I solved a [slightly modified version](#11.2.14) of this problem.
