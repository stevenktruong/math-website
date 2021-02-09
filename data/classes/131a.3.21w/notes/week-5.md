---
title: Week 5 Discussion Notes
date: "2021-02-01"
tags:
    - sequences
    - limits
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Homework Comments

Now that the homework problems are a bit more interesting, I have relatively important comments to make.

### 1.9

This was the problem where you had to prove that $2^n > n^2$ for all $n \geq 5$ by induction. I saw a lot of proofs that looked like this:

$$
\begin{aligned}
    2^{n+1}
        &= 2 \cdot 2^n \\
        &> 2n^2 \\
        &> n^2 + 2n + 1
            && \p{\text{since } n \geq 5} \\
        &= \p{n + 1}^2.
\end{aligned}
$$

I mainly had issue with the third line: while it _is_ true that $n^2 > 2n + 1$ when $n \geq 5$, **you still have to prove it** on your homework. As a general rule of thumb, you should prove all claims you make that weren't proven in lecture, discussion, or the book (unless Professor Jacobs or I say it's okay to take something for granted). That being said, here is one way to prove it: since $n \geq 5 \geq 3$,

$$
n^2
    = n \cdot n
    \geq 3n
    = 2n + n
    > 2n + 1.
$$

### Miscellaneous

Let $P, Q$ be propositional statements. If $P \implies Q$ is true and $Q$ is true, does this mean $P$ is also true? Hopefully, you agree that this is a false statement, and we can check with a logic table:

$$
\begin{array}{ccc}
    P & Q & P \implies Q \\\hline
    1 & 1 & 1 \\
    1 & 0 & 0 \\
    0 & 1 & 1 \\
    0 & 0 & 1 \\
\end{array}
$$

The third row is the important row for this example: $Q$ is true and $P \implies Q$ is true, but $P$ is false. With this in mind, consider the following example:

<example>

What's the problem with the following argument?

> Note that
>
> $$
> \begin{aligned}
>     n^2 - 2n - 1 \geq 0
>     &\implies \p{n - 1}^2 - 2 \geq 0 \\
>     &\implies \p{n - 1}^2 \geq 2.
> \end{aligned}
> $$
>
> This is true if $n \geq 3$. Therefore, $n^2 - 2n - 1 \geq 0$ when $n \geq 3$.

</example>

<solution>

While the conclusion is true, the proof (which is the most important part) is incorrect: set $P = ``n^2 - 2n - 1 \geq 0"$ and $Q = ``\p{n - 1}^2 \geq 2"$, and we assume that $n \geq 3$. Then the incorrect proof is using the following logic:

> $P \implies Q$ is true and $Q$ is true. Therefore $P$ is true.

As we discussed, this logic is not correct. Instead, you should do this in reverse: show that something true implies something else is true. In this case, the proof is correct if we just reverse the order of the steps: for $n \geq 3$,

$$
\begin{aligned}
    \p{n - 1}^2 \geq 2
        &\implies n^2 - 2n + 1 \geq 2 \\
        &\implies n^2 - 2n - 1 \geq 0,
\end{aligned}
$$

and _now_ you can conclude that $n^2 - 2n - 1 \geq 0$ for $n \geq 3$.

</solution>

## Limits

### Limit Laws

<theorem> limit laws

Suppose $\displaystyle\lim_{n\to\infty} a_n = a$ and $\displaystyle \lim_{n\to\infty} b_n = b$. Then:

1. $\displaystyle\lim_{n\to\infty} \p{a_n + b_n} = a + b$.
2. If $c \in \R$, then $\displaystyle\lim_{n\to\infty} ca_n = ca$.
3. $\displaystyle\lim_{n\to\infty} \p{a_nb_n} = ab$.
4. If $b \neq 0$, then $\displaystyle\lim_{n\to\infty} \frac{a_n}{b_n} = \frac{a}{b}$.

</theorem>

This looks like a straightforward theorem, but it can be very easy to misuse it. The most common way I've seen it be used incorrectly is trying to apply it with limits that don't exist.

<example>

If $\displaystyle\lim_{n\to\infty} a_n$ and $\displaystyle\lim_{n\to\infty} b_n$ don't exist, does this mean $a_n + b_n$ doesn't exist?

</example>

<solution>

The following is **wrong**:

> $\displaystyle\lim_{n\to\infty} \p{a_n + b_n} = \displaystyle\lim_{n\to\infty} a_n + \displaystyle\lim_{n\to\infty} b_n$, and these limits don't exist. Therefore, $\displaystyle\lim_{n\to\infty} \p{a_n + b_n}$ doesn't exist either.

The problem is with the first "=" sign: the limits don't exist, so that "=" is invalid. As a counter-example, consider $a_n = \p{-1}^n$ and $b_n = -\p{-1}^n$. Then both limits don't exist, but

$$
\lim_{n\to\infty} \p{a_n + b_n}
    = \lim_{n\to\infty} \p{\p{-1}^n - \p{-1}^n}
    = \lim_{n\to\infty} 0
    = 0,
$$

so it's possible that the sum of two divergent sequences is convergent.

</solution>

<exercise>

Come up with an example where $\set{a_n}_n$ and $\set{b_n}_n$ are divergent, but $\set{a_nb_n}_n$ is divergent.

</exercise>

Limit laws are very useful because if we can use them, then we don't need to do any $\epsilon$ arguments.

<example> (Related to 9.1, 9.3)

Suppose $\displaystyle\lim_{n\to\infty} a_n = a$ and $\displaystyle\lim_{n\to\infty} b_n = b$. Calculate $\displaystyle \lim_{n\to\infty} \frac{2a_n^2 + 1}{b_n^2 + 2}$ and justify all your steps.

</example>

<solution>

This example is basically here to illustrate the amount of detail I expect on 9.1 and 9.3 (if you want full credit).

$\displaystyle\lim_{n\to\infty} a_n = a$, so $\displaystyle\lim_{n\to\infty} \p{2a_n^2 + 1} = 2a^2 + 1$ by (i), (ii), and (iii), and similarly, $\displaystyle\lim_{n\to\infty} \p{b_n^2 + 1} = b^2 + 1$ by (i) and (iii). Since $b^2 + 1 > 0$, we can use (iv) to get

$$
\lim_{n\to\infty} \frac{2a_n^2 + 1}{b_n^2 + 2}
    = \frac{\lim_{n\to\infty} \p{2a_n^2 + 1}}{\lim_{n\to\infty} \p{b_n^2 + 2}}
    = \frac{2a^2 + 1}{b^2 + 2}.
$$

Basically, every "=" needs to be justified (with a few words).

</solution>

Another (very) useful theorem for calculating limits is the squeeze theorem:

<theorem id="squeeze-theorem"> squeeze theorem

Let $\set{a_n}_n$, $\set{b_n}_n$, and $\set{s_n}_n$ be sequences such that $a_n \leq s_n \leq b_n$. If $\displaystyle\lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n = L$, then $\displaystyle \lim_{n\to\infty} s_n = L$ also.

</theorem>

<proof>

Let $\epsilon > 0$. Notice that

$$
s_n - L \leq b_n - L \leq \abs{b_n - L}
\quad\text{and}\quad -\abs{a_n - L} \leq a_n - L \leq s_n - L.
$$

Since $\displaystyle\lim_{n\to\infty} a_n = L$, there exists $N_1 \in \R$ such that

$$
\begin{aligned}
    n > N_1
        &\implies \abs{a_n - L} < \epsilon \\
        &\implies -\epsilon < -\abs{a_n - L} \leq s_n - L.
\end{aligned}
$$

Similarly, because $\displaystyle\lim_{n\to\infty} b_n = L$, there exists $N_2 \in \R$ so that

$$
\begin{aligned}
    n > N_2
        &\implies \abs{b_n - L} < \epsilon \\
        &\implies s_n - L \leq \abs{b_n - L} < \epsilon.
\end{aligned}
$$

These inequalities work for different conditions on $n$, but we want to use them at the same time. If we let $N = \max\,\set{N_1, N_2}$, then whenever $n > N$, $n$ satisfies $n > N_1$ and $n > N_2$ at the same time. Thus,

$$
-\epsilon < s_n - L < \epsilon
\implies \abs{s_n - L} < \epsilon.
$$

</proof>

We generally use the following corollary of the squeeze theorem the most:

<corollary>

Let $\set{s_n}_n$ and $\set{t_n}_n$ be sequences such that $\abs{s_n} \leq t_n$ and $\displaystyle\lim_{n\to\infty} t_n = 0$. Then $\displaystyle\lim_{n\to\infty} s_n = 0$.

</corollary>

<proof>

Observe that $-t_n \leq s_n \leq t_n$. Thus, if we set $a_n = -t_n$ and $b_n = t_n$ as in the theorem, then $a_n \leq s_n \leq b_n$ and

$$
\lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n = 0
\implies \lim_{n\to\infty} s_n = 0.
$$

</proof>

This corollary helps speeds up proofs quite a bit:

<example>

Prove that $\displaystyle \lim_{n\to\infty} \abs{\frac{n + 2}{n^2 + 1}} = 0$.

</example>

<solution>

In light of the squeeze theorem, we just need to find something bigger than $\abs{\frac{n + 2}{n^2 + 1}}$ which goes to $0$:

$$
\abs{\frac{n + 2}{n^2 + 1}}
    \leq \frac{n + n}{n^2}
    \leq \frac{2}{n} \xrightarrow{n\to\infty} 0.
$$

(The arrow can be read as "... which goes to $0$ as $n \to \infty$".)

</solution>

### Proving Divergence

As a quick example (relevant for your homework), here are two problems where you need to show that a limit doesn't exist:

<example>

Let $a_{2n} = 1$ and $a_{2n+1} = 3$. Show that $\displaystyle\lim_{n\to\infty} a_n$ does not exist.

</example>

<solution>

Suppose otherwise and that $\displaystyle\lim_{n\to\infty} a_n = L$. Then given $\epsilon > 0$, there exists $N \in \R$ such that whenever $\abs{a_n - L} < \epsilon$ whenever $n > N$.

Suppose $k > \frac{N}{2}$. Then

$$
2k > N \implies \abs{a_{2k} - L} < \epsilon.
$$

Similarly,

$$
2k + 1 > N \implies \abs{a_{2k+1} - L} < \epsilon.
$$

<img src="{{ assetsFolder }}/images/no-limit.png" height=50px>

Based on these inequalities, if $n$ is big enough, then $L$ is within $\epsilon$ of $1$ and $3$. In the picture, this means that $L$ has to be in both blue parentheses, and this should be impossible if $\epsilon$ is small enough. Based on the picture, we should get a contradiction if we let $\epsilon = 1$:

$$
2
    = \abs{1 - 3}
    = \abs{a_{2k} - a_{2k+1}}
    \leq \abs{a_{2k} - L} + \abs{a_{2k+1} - L}
    < 1 + 1
    = 2.
$$

This is impossible, so no $L$ could have existed to begin with, which completes the proof.

</solution>

<example>

Let $a_n = 2^n$. Prove that $\displaystyle\lim_{n\to\infty} 2^n$ does not exist.

</example>

<solution>

Like before, we're going to assume (for the sake of contradiction) that $\displaystyle\lim_{n\to\infty} a_n = L$.

<img src="{{ assetsFolder }}/images/no-limit-2n.png" height=100px>

We're going to apply the same strategy: we're going to pick $\epsilon$ small enough so that $L$ would have to be in two different places at the same time, which should give us a contradiction. Based on the picture, the distance between $2^n$ and $2^{n+1}$ is $2^n \geq 2$, so $\epsilon = 1$ should work again.

By definition of the limit, there exists $N \in \R$ such that if $n > N$, then $\abs{a_n - L} < 1$. Notice this means that $\abs{a_{n+1} - L} < 1$ as well, so

$$
2^n
    = \abs{a_n - a_{n+1}}
    \leq \abs{a_n - L} + \abs{a_{n+1} - L}
    < 1 + 1
    = 2.
$$

Thus, we get a contradiction, so the limit must not have existed to begin with.

</solution>
