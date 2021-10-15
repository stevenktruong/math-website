---
title: Week 3 Discussion Notes
date: "2021-10-14"
tags:
    - sequences
publish: yes
---

# Week 3 Discussion Notes

## Table of Contents

## Sequences

<definition>

A **sequence** $\p{a_n}_n$ is an infinitely long ordered list of numbers.

</definition>

When working with sequences, we're most interested in the limiting behavior, i.e., what happens as $n \to \infty$.

## Limits of Sequences

<definition>

Let $\p{a_n}_n$ be a sequence. Then we say that $\p{a_n}_n$ **converges** if $\lim_{n\to\infty} a_n$ exists, and we say that it **diverges** if the limit does not exist.

</definition>

A lot of times, you can just replace $n$ with $x$ and calculate limits like you usually do:

<example>

Calculate $\displaystyle\lim_{n\to\infty} \frac{n^2 + 1}{3n^2 + 4}$.

</example>

<solution>

Technically, we can't use L'Hôpital's rule yet. We need differentiable functions to use it, but functions of $n$ are not differentiable. This is because to take a derivative, you need to take a limit that looks like this:

$$
f'\p{x} = \lim_{h\to0} \frac{f\p{x + h} - f\p{x}}{h},
$$

but sequences are only defined on whole numbers, whereas $h$ can take on fractional values as $h \to 0$. However, if you replace $n$ with $x$ **and the resulting limit exists**, then it's the same as the original limit:

$$
\lim_{n\to\infty} \frac{n^2 + 1}{3n^2 + 4}
    = \lim_{x\to\infty} \frac{x^2 + 1}{3x^2 + 4}
    = \lim_{x\to\infty} \frac{2x}{6x}
    = \boxed{\frac{1}{3}}.
$$

</solution>

The bolded part of the sentence above is important: if the limit with $x$ doesn't exist, then you run into trouble.

<example>

Calculate $\displaystyle\lim_{n\to\infty} \sin\p{n\pi}$.

</example>

<solution>

Let's try to replace $n$ with $x$ (the following thing is _wrong_):

> $$
> \lim_{n\to\infty} \sin\p{n\pi} = \lim_{x\to\infty} \sin\p{\pi x} = \dne.
> $$

You can't write the first equals sign because the resulting limit does not exist. In this example, the limit with $x$ doesn't exist, but the limit with $n$ does: $\sin\p{n\pi} = 0$ for every integer $n$, so

$$
\lim_{n\to\infty} \sin\p{n\pi}
    = \lim_{n\to\infty} 0
    = \boxed{0}.
$$

(For this example, the fact that $n$ is an integer is very important.)

</solution>

### Bounded Monotone Sequences

<theorem> bounded monotone sequences converge

Let $\p{a_n}_n$ be a sequence.

1. If $\p{a_n}_n$ is bounded above and is increasing, then $\p{a_n}_n$ converges.
1. If $\p{a_n}_n$ is bounded below and is decreasing, then $\p{a_n}_n$ converges.

</theorem>

As a rule of thumb, this theorem is mainly useful when dealing with recursive sequences.

<example>

Let $a_1 = 4$ and $a_n = \frac{1}{2} \p{a_{n-1} + 8}$ for $n \geq 2$. Show that $\p{a_n}_n$ converges and calculate its limit.

</example>

<solution>

To solve this problem, we'll be using [induction](https://www.mathsisfun.com/algebra/mathematical-induction.html) a lot. Basically, induction says that to prove something is true for every $n$, we just need to prove two things:

1. **Base case:** Prove it's true for the first case, usually $n = 1$.
2. **Inductive step:** Assume it's true for $n = k$ and prove it's true for $n = k + 1$ (i.e., if one case is true, then so is the next one).

We're going to try to use the theorem above to prove that this sequence converges, so we need to show that it's bounded and that it's increasing or decreasing. To figure that out, it's a good idea to write out the first couple terms and make an educated guess:

$$
\begin{aligned}
    a_1 &= 4 \\
    a_2 &= \frac{1}{2} \p{a_1 + 8} = 6 \\
    a_3 &= \frac{1}{2} \p{a_2 + 8} = 7 \\
    a_4 &= \frac{1}{2} \p{a_3 + 8} = 7.5.
\end{aligned}
$$

Based on these terms, we're going to make the guess that $a_n \leq 10$ and that $\p{a_n}_n$ is increasing.

**_Proof that $a_n \leq 10$:_**

As mentioned above, we're going to use induction here.

**Base case:** ($n = 1$)

$a_1 = 4 \leq 10$, so the base case is true.

**Inductive step:**

To do this step, we need to assume that $a_k \leq 10$ and then prove that $a_{k+1} \leq 10$ also. If we use the recursive formula for $a_{k+1}$, we get

$$
a_{k+1} = \frac{1}{2} \p{a_k + 8}.
$$

Since $a_k \leq 10$, we can replace $a_k$ with $10$ and get something bigger overall:

$$
\begin{aligned}
    a_{k+1}
        &= \frac{1}{2} \p{a_k + 8} \\
        &\leq \frac{1}{2} \p{10 + 8} \\
        &= 9 \\
        &\leq 10,
\end{aligned}
$$

which finishes the inductive step.

Since the base case and inductive step are both true, this means that $a_n \leq 10$ for every $n$.

**_Proof that $\p{a_n}_n$ is increasing:_**

$\p{a_n}_n$ increasing means that $a_n \leq a_{n+1}$ for every $n$. Like above, we're going to prove this by induction:

**Base case:** ($n = 1$)

$a_1 = 4$ and $a_2 = 6$, so $a_1 \leq a_2$, which means the base case is true.

**Inductive step:**

Like before, we're going to assume that $a_k \leq a_{k+1}$, and we need to prove that $a_{k+1} \leq a_{k+2}$ also. As a tip, it's almost always easier to move all the terms to one side, i.e., prove that $a_{k+1} - a_{k+2} \leq 0$ instead:

$$
\begin{aligned}
    a_{k+1} - a_{k+2}
        &= \frac{1}{2} \p{a_k + 8} - \frac{1}{2} \p{a_{k+1} + 8} \\
        &= \frac{1}{2} \underbrace{\p{a_k - a_{k+1}}}_{\leq 0\text{ by assumption}} \\
        &\leq 0.
\end{aligned}
$$

This proves that $a_{k+1} \leq a_{k+2}$, so by induction, $\p{a_n}_n$ is increasing.

**_Finishing the problem:_**

We've shown that $\p{a_n}_n$ is bounded above (by $10$) and is increasing, so by the theorem, we know that the sequence converges. So, the limit $L = \lim_{n\to\infty} a_n$ exists. To complete the problem, we just need to figure out what $10$ is. We can do this via the recursive relation:

$$
a_n = \frac{1}{2} \p{a_{n-1} + 8}.
$$

Because we know that $\lim_{n\to\infty} a_n$ exists, we're now allowed to take limits on both sides:

$$
\lim_{n\to\infty} a_n
    = \lim_{n\to\infty} \frac{1}{2} \p{a_{n-1} + 8}
    = \frac{1}{2} \p{\lim_{n\to\infty} a_{n-1} + 8}.
$$

The sequence $\p{a_{n-1}}_n$ is just the sequence $\p{a_n}_n$, but shifted one term over. This means that they're essentially the same sequence, which means they have the same limit, i.e., $\lim_{n\to\infty} a_{n-1} = L$ also. Thus,

$$
\begin{aligned}
    L = \frac{1}{2} \p{L + 8}
    &\implies 2L = L + 8 \\
    &\implies \boxed{L = 8}.
\end{aligned}
$$

</solution>

### Squeeze Theorem

<theorem> squeeze theorem

Let $\p{a_n}_n, \p{b_n}_n, \p{c_n}_n$ be sequences. If:

1. $a_n \leq b_n \leq c_n$
2. $\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = L$

Then $\lim_{n\to\infty} b_n = L$ as well.

</theorem>

In general, this theorem is pretty hard to use because you have to figure out what $a_n$ and $c_n$ need to be.

<example>

Prove that $\displaystyle\lim_{n\to\infty} \frac{R^n}{n!} = 0$ when $R > 0$.

</example>

<solution>

Since $R > 0$, there exists an integer $M$ such that $M \leq R \leq M + 1$. Since $R > 0$ and $n! > 0$, we already know that $0 \leq \frac{R^n}{n!}$. On the other hand,

$$
\begin{aligned}
    \frac{R^n}{n!}
        &= \frac{R}{n} \cdot \underbrace{\underbrace{\frac{R}{n - 1}}_{\leq\,1} \cdots \underbrace{\frac{R}{M + 2}}_{\leq\,1} \cdot \underbrace{\frac{R}{M + 1}}_{\leq\,1}}_{\leq\,1} \cdot \underbrace{\frac{R}{M} \cdots \frac{R}{2} \cdot \frac{R}{1}}_{=\,C} \\
        &\leq \frac{R}{n} \cdot 1 \cdot C.
\end{aligned}
$$

Thus, if we let $a_n = 0$ and $c_n = \frac{RC}{n}$, then

$$
a_n \leq \frac{R^n}{n!} \leq c_n.
$$

Moreover, $\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = 0$, so by the squeeze theorem, $\lim_{n\to\infty} \frac{R^n}{n!}$ as well.

</solution>

<example>

<img src="{{ assetsFolder }}/images/squeeze-game.jpg" width=100% />

</example>

<solution>

Like before, we already know that $0 \leq \frac{n!}{n^n}$. We're going to use the same trick as before, where we write out each term in the product:

$$
\begin{aligned}
    \frac{n!}{n^n}
        &= \underbrace{\frac{n}{n}}_{=\,1} \cdot \underbrace{\frac{n - 1}{n}}_{\leq\,1} \cdots \underbrace{\frac{2}{n}}_{\leq\,1} \cdot \frac{1}{n} \\
        &\leq \frac{1}{n}.
\end{aligned}
$$

So, letting $a_n = 0$ and $c_n = \frac{1}{n}$, then

$$
a_n \leq \frac{n!}{n^n} \leq c_n
$$

with $\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = 0$, so $\lim_{n\to\infty} \frac{n!}{n^n}$ by the squeeze theorem.

</solution>

## Other Problems

<example>

Calculate $\displaystyle\deriv{}{x} \log_x{e}$.

</example>

<solution>

By the change-of-base formula,

$$
\begin{aligned}
    \deriv{}{x} \log_x{e}
        &= \deriv{}{x} \frac{\ln{e}}{\ln{x}} \\
        &= -\frac{1}{\p{\ln{x}}^2} \cdot \frac{1}{x} \\
        &= \boxed{-\frac{1}{x\p{\ln{x}}^2}}.
\end{aligned}
$$

</solution>
