---
title: Homework 1
date: "2025-01-20"
tags:
    - induction
    - irrationality
publish: yes
---

# Homework 1

## Table of Contents

## Exercise 1.9

1. Decide for which integers the inequality $2^n > n^2$ is true.
2. Prove your claim in (1) by mathematical induction.

<solution>

1. You can check by hand that $n = 0, 1$ and $n \geq 5$ are the only possible $n$'s that work.
2. We will prove the statement

    $$
    P\p{n} = ``2^n > n^2" \quad \forall n \geq 5.
    $$

    **Base case:** ($n = 5$)

    $2^5 = 32 > 25 = 5^2$, so the base case holds.

    **Inductive step:**

    Assume that $2^n > n^2$. We need to show that $2^{n+1} > \p{n+1}^2$. We start on the left-hand side:

    $$
    2^{n+1}
      = 2 \cdot 2^n
      > 2n^2
    $$

    by the inductive hypothesis. To complete the proof, we need to show that $2n^2 > \p{n+1}^2$. Since $n \geq 5$, we have

    $$
    \begin{aligned}
      2n^2
         = n^2 + n^2
        &\geq n^2 + 5n \\
        &= n^2 + 2n + 3n \\
        &> n^2 + 2n + 1 \\
        &= \p{n + 1}^2.
    \end{aligned}
    $$

    Thus, we have shown $2^{n+1} > \p{n+1}^2$.

### Common Mistakes

Some of the proofs of the inductive step looked like this:

> $$
> 2^{n+1} > \p{n + 1}^2
>   \implies 2n^2 > n^2 + 2n + 1
>   \implies n^2 - 2n - 1 > 0,
> $$
>
> which is true. Thus, $2^{n+1} > \p{n + 1}^2$ is true.

This issue with this is that the proof is structured like this:

$$
\p{\text{what we want to show}} \implies \p{\text{something true}},
$$

but a correct proof must be structured like this:

$$
\p{\text{something true}} \implies \p{\text{what we want to show}}.
$$

In general, these are two completely different statements (they are **converses** of each other). For instance,

$$
1 = -1 \implies 1 = 1^2 = \p{-1}^2 = 1,
$$

but clearly $1 \neq -1$. In particular, we can't reverse the "$\implies$" arrows.

</solution>

## Exercise 2.5

Show $\p{3 + \sqrt{2}}^{\frac{2}{3}}$ is not a rational number.

<solution>

I will present two solutions. Either one is perfectly valid, though it'd be good for you to learn both techniques.

### Solution 1 (by irrationality of $\sqrt{2}$)

Set $x = \p{3 + \sqrt{2}}^{\frac{2}{3}}$. Then

$$
  x^3 = \p{3 + \sqrt{2}}^2 = 11 + 6\sqrt{2}
    \implies \sqrt{2} = \frac{x^3 - 11}{6}.
$$

Thus, $x \in \Q \implies \sqrt{2} \in \Q$, which is not possible, so it must be the case that $x \notin \Q$.

### Solution 2 (by the rational roots theorem)

If we continue the above calculation, then

$$
  x^3 - 11 = 6\sqrt{2}
  \implies x^6 - 22x^3 + 121 = 72
  \implies x^6 - 22x^3 + 49 = 0.
$$

This polynomial has all integer coefficients, so we may apply the rational roots theorem, which tells us that the only possible rational roots are $\pm 1, \pm 7, \pm 49$. It's easy to check that none of these are roots, so the polynomial has no rational roots, which means $x$ must be irrational.

</solution>

## Exercise 2.7

Show $\p{3 + \sqrt{2}}^{\frac{2}{3}}$ is not a rational number.

<solution>

Show the following irrational-looking expressions are actually rational
numbers:

1. $\sqrt{4 + 2\sqrt{3}} − \sqrt{3}$, and
2. $\sqrt{6 + 4\sqrt{2}} − \sqrt{2}$.

<solution>

1. The key is that $4 + 2\sqrt{3} = \p{a + b\sqrt{3}}^2$ for some $a, b \in \R$. This isn't too surprising--we saw in [Exercise 2.5](#exercise-19) that $\p{3 + \sqrt{2}}^2$ is also in the form $c + d\sqrt{2}$. The only problem is figuring out what $a, b$ should be, which we do by working backwards and then checking that our choices of $a, b$ work. This would be considered scratchwork:

    $$
    \p{a + b\sqrt{3}}^2 = 4 + 2\sqrt{3}
    \implies a^2 + 3b^2 + 2ab\sqrt{3} = 4 + 2\sqrt{3}.
    $$

    So we need $a^2 + 3b^2 = 4$ and $2ab = 2$. This system has two solutions: $\p{a, b} = \p{1, 1}$ and $\p{a, b} = \p{-1, -1}$. What this calculation tells us is that _if_ $4 + 2\sqrt{3} = \p{a + b\sqrt{3}}^2$, _then_ the only possible way this could happen is if $\p{a, b} = \p{1, 1}$ or $\p{a, b} = \p{-1, -1}$. It doesn't guarantee that this actually does happen; just that this is the only possibility. To show that this is possible, we just have to check manually that one of them works. We check $\p{a, b} = \p{1, 1}$:

    $$
    \p{1 + \sqrt{3}}^2 = 1 + 2\sqrt{3} + 3 = 4 + 2\sqrt{3},
    $$

    so it thankfully does work. This is where the scratchwork ends, i.e., this is roughly what you should have done to figure out how to write down the proof. Now you can write down the proof:

    Notice that $4 + 2\sqrt{3} = \p{1 + \sqrt{3}}^2$. Then

    $$
    \sqrt{4 + 2\sqrt{3}} − \sqrt{3}
      = \sqrt{\p{1 + \sqrt{3}}^2} - \sqrt{3}
      = 1 + \sqrt{3} - \sqrt{3}
      = 1 \in \Q.
    $$

2. This is exactly the same as in (1), except $\sqrt{6 + 4\sqrt{2}} − \sqrt{2} = 2$ instead.

### Common Mistakes

The most common mistake I saw was trying to apply the rational roots theorem. The argument boils down to this:

> Let $x = \sqrt{4 + 2\sqrt{3}} − \sqrt{3}$. Then
>
> $$
> x^4 - 14x^2 + 24x - 11 = 0.
> $$
>
> Notice that $1$ is a rational root of this polynomial. Therefore, $x$ must be rational.

The issue with this argument is that the polynomial $p\p{a} = a^4 - 14a^2 + 24a - 11$ has three roots other than $1$, so knowing that $p\p{x} = 0$ only tells us that it's _possible_ that $x = 1$, but makes no guarantees. In other words, the rational roots theorem only helps us figure out the rational roots of $p$, but tells us nothing about $x$.

</solution>

<exercise>

In [Exercise 2.7](#exercise-27), I showed that $\p{a, b} = \p{1, 1}$. Show that $\p{a, b} = \p{-1, -1}$ also works. (_Hint_: $\sqrt{\p{-1}^2} = 1$ and is _not_ $-1$.)

</exercise>
