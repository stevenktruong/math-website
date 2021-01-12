---
title: Week 2 Discussion Notes
date: "2021-01-11"
tags:
    - truth tables
    - proof strategies
    - natural numbers
publish: yes
---

# Week 2 Discussion Notes

## Table of Contents

## Truth Tables

<definition>

A **proposition** is a statement that is either true or false, but not both. Given two propositions $P, Q$, we have the following **logical operations**:

-   $P \vee Q$ (read "$P$ or $Q$") is the statement which is true if at least one of $P$ or $Q$ is true and false if both are false.
-   $P \wedge Q$ (read "$P$ and $Q$) is the statement which is true if both $P$ and $Q$ are true and false if either is false.
-   $\neg P$ (read "not $P$") is the statement which is true if $P$ is false and false if $P$ is true.
-   $P \implies Q$ (read "if $P$ then $Q$") is the statement $\neg P \vee Q$.

If two statements $P$ and $Q$ always evaluate to the same truth value, then we say that they are **equivalent** and write $P \equiv Q$.

</definition>

Propositional logic looks a lot like set theory: if $A, B$ are sets, then compare the following:

$$
\begin{aligned}
    P \vee Q    &\longleftrightarrow A \cup B \\
    P \wedge Q  &\longleftrightarrow A \cap B \\
    \neg P      &\longleftrightarrow A^\comp
\end{aligned}
$$

If you're comfortable with set theory, then it might help you remember the symbols. The way I tell the difference between "$\vee$" and "$\wedge$" is that "$\vee$" looks like a union, "$\cup$", and "$\wedge$" looks like an intersection, "$\cap$".

It's also not surprising that De Morgan's laws apply to propositional logic as well:

<theorem> De Morgan's laws

Let $P, Q$ be statements. Then

1. $\neg \p{P \vee Q} \equiv \neg P \wedge \neg Q$
2. $\neg \p{P \wedge Q} \equiv \neg P \vee \neg Q$

</theorem>

<proof>

To prove equivalences of statements, we'll want to use a truth table.

For (i), we have

$$
\begin{array}{ccccccc}
    P & Q & \neg P & \neg Q & P \vee Q & \neg \p{P \vee Q} & \neg P \wedge \neg Q \\\hline
    1 & 1 & 0 & 0 & 1 & 0 & 0 \\
    1 & 0 & 0 & 1 & 1 & 0 & 0 \\
    0 & 1 & 1 & 0 & 1 & 0 & 0 \\
    0 & 0 & 1 & 1 & 0 & 1 & 1 \\\hline
\end{array}
$$

From the table, we see that $\neg\p{P \vee Q}$ and $\neg P \wedge \neg Q$ always evaluate to the same true value, so they are equivalent.

Similarly, for (ii),

$$
\begin{array}{ccccccc}
   P & Q & \neg P & \neg Q & P \wedge Q & \neg \p{P \wedge Q} & \neg P \vee \neg Q \\\hline
   1 & 1 & 0 & 0 & 1 & 0 & 0 \\
   1 & 0 & 0 & 1 & 0 & 1 & 1 \\
   0 & 1 & 1 & 0 & 0 & 1 & 1 \\
   0 & 0 & 1 & 1 & 0 & 1 & 1 \\\hline
\end{array}
$$

So $\neg\p{P \wedge Q} \equiv \neg P \vee \neg Q$ also.

</proof>

<remark>

Compare these with De Morgan's laws for sets:

-   $\neg \p{P \vee Q} \equiv \neg P \wedge \neg Q \longleftrightarrow \p{A \cup B}^\comp = A^\comp \cap B^\comp$
-   $\neg \p{P \wedge Q} \equiv \neg P \vee \neg Q \longleftrightarrow \p{A \cap B}^\comp = A^\comp \cup B^\comp$

</remark>

Something that's surprising is that if $P$ is false, then "$P \implies Q$" is true. For example, the statement "if pigs can fly, then I like math" is a true statement, regardless of whether you like math or not. This is another example of a vacuous truth like we saw [last week](../week-1)).

The intuition is as follows: how would you prove "$P \implies Q$" wrong?

<example>

Let's consider the following statement:

> If I procrastinate, then I won't finish my homework.

In this case, $P = ``\text{I procrastinate}"$ and $Q = ``\text{I won't finish my homework}"$. To disprove this, you would need to procrastinate ($P$ is true) _and_ still finish your homework ($Q$ is false). In other words,

$$
\neg\p{P \implies Q} \equiv P \wedge \neg Q
$$

So by De Morgan's laws,

$$
P \implies Q \equiv \neg\p{P \wedge \neg Q} \equiv \neg P \vee Q.
$$

</example>

To finish this section, we'll look at another truth table example.

<example>

Evaluate the truth table for $Q \vee \p{P \implies \p{\neg Q \vee \neg P}}$.

</example>

<solution>

First, it might be a good idea to rewrite the implication in terms of $\vee$, $\wedge$, and $\neg$. To make things easier to see, let $R \equiv \p{\neg Q \vee \neg P}$. Then

$$
P \implies \p{\neg Q \vee \neg P}
\equiv P \implies R
\equiv \neg P \vee R
\equiv \neg P \vee \p{\neg Q \vee \neg P},
$$

so

$$
Q \vee \p{P \implies \p{\neg Q \vee \neg P}}
\equiv Q \vee \p{\neg P \vee \p{\neg Q \vee \neg P}}
\equiv Q \vee \neg P \vee \neg Q \vee \neg P,
$$

since parentheses don't matter with $\vee$'s. This gives the following truth table:

$$
\begin{array}{ccccc}
    P & Q & \neg P & \neg Q & \neg Q \vee \neg P & Q \vee \neg P \vee \neg Q \vee \neg P \\\hline
    1 & 1 & 0 & 0 & 0 & 1 \\
    1 & 0 & 0 & 1 & 1 & 1 \\
    0 & 1 & 1 & 0 & 1 & 1 \\
    0 & 0 & 1 & 1 & 1 & 1 \\\hline
\end{array}
$$

Thus, the original statement always evaluates to true.

</solution>

## Proof Strategies

Let's say we want to prove something in the form $P \implies Q$. We have three main strategies:

### Directly

With this strategy, we assume $P$ is true and try to logically conclude that $Q$ is also true.

<example>

Let $x \in \R$ be non-zero. Show that $x^2 > 0$.

</example>

<solution>

Since $x$ is not zero, there are two cases: $x > 0$ and $x < 0$. If $x$ is positive, then multiplying by $x$ on both sides of $x > 0$ doesn't flip the inequality:

$$
x \cdot x > x \cdot 0
\implies x^2 > 0.
$$

If $x < 0$, then $-x > 0$, so we can do the same thing with this:

$$
\p{-x \cdot -x} > 0 \cdot \p{-x}
\implies x^2 > 0.
$$

</solution>

### By Contrapositive

<definition>

The **contrapositive** of $P \implies Q$ is $\neg Q \implies \neg P$.

</definition>

<proposition>

$\p{P \implies Q} \equiv \p{\neg Q \implies \neg P}$.

</proposition>

<proof>

Just by expanding out the definition of implication,

$$
\begin{aligned}
\p{\neg Q \implies \neg P}
    &\equiv \neg\p{\neg Q} \vee \neg P \\
    &\equiv Q \vee \neg P \\
    &\equiv \neg P \vee Q \\
    &\equiv \p{P \implies Q}
\end{aligned}
$$

</proof>

What we've shown is that proving $P \implies Q$ is exactly the same as proving its contrapositive $\neg Q \implies \neg P$. As simple as it is, some proofs are a lot easier when you prove the contrapositive instead of proving it directly.

<example>

Let $n, m \in \N$ be such that $n$ is odd. Show that if $mn$ is even, then $m$ is even.

</example>

<solution>

Here, $P = ``mn \text{ is even}"$ and $Q = ``m \text{ is even}"$. To prove this by contrapositive, we need to assume $\neg Q$ (i.e., $m$ is odd) and prove $\neg P$ (i.e., $mn$ is odd).

If $m$ is odd, then we can write it in the form $m = 2k + 1$, where $k \in \Z$ (being odd means that you're $1$ away from an even number). Then

$$
mn
    = \p{2k + 1}n
    = \underbrace{2kn}_\text{odd} + \underbrace{n}_\text{even}.
$$

An odd number plus an even number is odd, so $mn$ is odd, which proves $\neg P$, and we're done.

</solution>

### By Contradiction

The third main way we can prove things is by contradiction. This means assuming $P \implies Q$ is false and trying to arrive at a contradiction, i.e., something that goes against a fact that we know.

<example>

Show that if $a, b \in \Z$, then $18a + 6b \neq 1$.

</example>

<solution>

To prove this by contradiction, we need to assume that the statement is false. In this case, $P = ``a, b \in \Z"$ and $Q = ``18a + 6b \neq 1"$. The negation of $P \implies Q$ is $P \wedge \neg Q$, i.e., $a, b \in \Z$, but $18a + 6b = 1$.

If we divide both sides by $6$, we get $3a + b = \frac{1}{6}$. But $a$ and $b$ are integers, which means that $3a + b$ must be an integer. However, this implies that $3a + b = \frac{1}{6}$ is an integer, which is impossible. Thus, $\neg\p{P \implies Q}$ is false, i.e., $P \implies Q$ is true, which completes the proof.

</solution>

## The Natural Numbers $\N$

<definition> Peano axioms

The set of **natural numbers**, denoted $\N$, is defined via the following axioms:

-   (N1) $1 \in \N$.

-   (N2) If $n \in \N$, then it has a **successor** $n + 1 \in \N$.

-   (N3) $1$ is not the successor of any element.

-   (N4) If $n$ and $m$ have the same successor, i.e., $n + 1 = m + 1$, then $n = m$.

-   (N5) Suppose $S \subseteq \N$ is a subset satisfying the following properties:

    1. $1 \in S$
    2. If $n \in S$, then $n + 1 \in S$

    Then $S = \N$.

</definition>

Let's try to understand these one-by-one:

-   (N1) just says that $\N \neq \emptyset$.
-   (N2) basically says that you can add natural numbers.
-   (N3) says that $1$ is the first natural number.
-   (N4) basically tells you that there are no "loops" in $\N$. To illustrate, I'm going to represent $\N$ with numbers and arrows to represent successors, e.g., since $3$ is the successor of $2$, I'm going to draw $2 \to 3$.

    With (N4), we get what we expect:

    <img src="{{ assetsFolder }}/images/peano.png" width=800px />

    Without (N4), then for example, $5$ and $2$ could have the same successor:

    <img src="{{ assetsFolder }}/images/no-peano.png" width=600px />

    As you can see, we just end up with a loop, which is _not_ how the natural numbers behave—they go on forever and never repeat.

-   (N5) is the **principle of mathematical induction**. Intuitively, this should be true: (i) tells you that $1 \in S$. Then (ii) lets you conclude $1 \in S \implies 2 \in S$. If we use (ii) again, you see $3 \in S$, $4 \in S$, etc., so $S$ has to be all of $\N$.

In summary, (N1) through (N4) just means $\N$ is what you expect it to be. (N5) is the one that you'll be using a lot to prove things.

### Mathematical Induction

Suppose we have a sequence of statements, i.e., for each $n \in \N$, we have a statement $P_n$. In light of (N5), to prove that $P_n$ is true for any $n$, we just need to prove two things:

-   $P_1$ is true (base case)
-   If $P_n$ is true, then $P_{n+1}$ is true (inductive step)

When proving $P_n \implies P_{n+1}$, $P_n$ is called the **inductive hypothesis**.

<example>

Let $r \in \R$. Show that

$$
1 + r + r^2 + \cdots + r^n = \frac{1 - r^{n+1}}{1 - r}
$$

for all $n \in \N$.

</example>

<solution>

In this problem, $P_n$ is $``1 + r + r^2 + \cdots + r^n = \frac{1 - r^{n+1}}{1 - r}"$.

**Base case:** We need to prove $P_1$, which is the statement $1 + r = \frac{1 - r^2}{1 - r}$. By factoring,

$$
\frac{1 - r^2}{1 - r}
    = \frac{\p{1 - r}\p{1 + r}}{1 -r}
    = 1 + r,
$$

so $P_1$ is true.

**Inductive step:** Let's assume that $P_n$ is true, i.e., we will assume that

$$
1 + r + r^2 + \cdots + r^n = \frac{1 - r^{n+1}}{1 - r}.
$$

We need to prove that $P_{n+1}$ is true:

$$
\begin{aligned}
    \p{1 + r + r^2 + \cdots + r^n} + r^{n+1}
        &= \frac{1 - r^{n+1}}{1 - r} + r^{n+1}
            && (P_n) \\
        &= \frac{1 - r^{n+1} + \p{1 - r}r^{n+1}}{1 - r} \\
        &= \frac{1 - r^{n+2}}{1 - r}.
\end{aligned}
$$

This shows that $P_n \implies P_{n+1}$, so by mathematical induction, $P_n$ is true for all $n \in \N$.

</solution>
