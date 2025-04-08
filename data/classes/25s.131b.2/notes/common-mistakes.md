---
title: Common Mistakes
date: "2025-04-07"
tags:
publish: yes
---

# Common Mistakes

This page contains examples and explanations of common mistakes I see a lot when TAing proof-based classes. They're mainly issues with how the proof is structured rather than the content of the proof itself, so a lot of what's written here also applies to other classes.

## Table of Contents

## Backward "Proofs"

This one is the easiest to explain. The main thing to keep in mind is that proofs have a _direction_. When writing a proof, you should pay attention to the direction of the implication symbol "$\implies$". If you need to prove the statement "if $P$ then $Q$," then your proof needs to be structured like this:

$$
P \implies \cdots \implies Q.
$$

In other words, you assume $P$ is true and write statements that eventually lead you forward to $Q$. I often see students structure their proof as follows:

> $$
> Q \implies \cdots \implies P,
> $$
>
> which is true. Thus, if $P$ then $Q$.

When structured this way, you can only prove $Q \implies P$, which is the [converse](https://www.mathsisfun.com/definitions/converse-logic-.html) of $P \implies Q$.

<example>

Let $n \in \N$. Show that if $n \geq 2$, then $n^2 - 2 \geq 2$.

</example>

**Backward "proof"**:

> $$
> \begin{aligned}
>   n^2 - 2 &\geq 2 \\
>   n^2 &\geq 4 \\
>   n &\geq 2,
> \end{aligned}
> $$
>
> which is true. Therefore $n^2 - 2 \geq 2$ is true.

The "$\implies$" symbols aren't written, but they're there. When you write what's above, you're _really_ saying

$$
\begin{aligned}
  &\phantom{\implies} n^2 - 2 \geq 2 \\
  &\implies n^2 \geq 4 \\
  &\implies n \geq 2.
\end{aligned}
$$

As mentioned above, this means the "proof" is structured like this:

$$
n^2 - 2 \geq 2
\implies \cdots \implies
n \geq 2.
$$

Many times, when you have a backward proof, you can reverse the arrows to turn it into a correct. However, **this doesn't always have to happen**, so take a minute to think about whether the reverse implication is true.

<solution>

**Correct proof**: For this problem, reversing the implications fixes the proof. This is because all the statements below are actually equivalent (for positive integers).

$$
\begin{aligned}
  &\phantom{\implies} n \geq 2 \\
  &\implies n^2 \geq 4 \\
  &\implies n^2 - 2 \geq 2.
\end{aligned}
$$

</solution>

<exercise>

If we replace $n \in \N$ with $x \in \R$ in Example 1, the statements are no longer equivalent. Which of the following statements is no longer equivalent to the rest?

1. $x \geq 2$
2. $x^2 \geq 4$
3. $x^2 - 2 \geq 2$

Your answer should be phrased as "statement (i) is no longer equivalent to statement (j)." You should also be able to give a counter-example (i.e., a specific value of $x$ for which "(i) $\implies$ (j)" or "(j) $\implies$ (i)" is false).

</exercise>

## Giving Dummy Variables Meaning

This mistake is a much more subtle than what I wrote above, and it's easier to explain with an example. First, let's recall a definition.

<definition>

Let $f\colon A \to B$ be a function. Then $f$ is **surjective** if

$$
\forall b \in B\, \exists a \in A : f\p{a} = b.
$$

Or in words, $f$ is surjective if for every $b \in B$, there exists $a \in A$ such that $f\p{a} = b$.

</definition>

In the statement

$$
\forall b \in B\, \exists a \in A : f\p{a} = b, \tag{$*$}
$$

the variables $a, b$ in ($*$) are called [**dummy** (or **bound**) variables](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables#Examples). They are called this way because $a, b$ **only have meaning within the statement above**. This is easier to see once you realize that you can just swap $a, b$ for any symbols you want. For example, the following statements are equivalent to (i.e., have the _exact_ same meaning as) ($*$).

1.  $$
    \forall y \in B\, \exists x \in A : f\p{x} = y
    $$

2.  $$
    \forall \clubsuit \in B\, \exists \spadesuit \in A : f\p{\spadesuit} = \clubsuit
    $$

3.  $$
    \forall 🤯 \in B\, \exists 🤓 \in A : f\p{🤓} = 🤯
    $$

Dummy variables are just _labels_ and only make sense in the statement they appear in. However, I see a lot of students reuse the label for a dummy variable in a different statement, which is not correct.

<example>

Let $f \colon A \to B$ and $g \colon B \to C$ be surjective functions. Show that $g \circ f \colon A \to C$ is also surjective.

</example>

The mistake I'm talking about usually looks like this:

**Wrong "proof"**:

> Since $g$ is surjective,
>
> $$
> \forall c \in C\, \exists b \in B : g\p{b} = c. \tag{1}
> $$
>
> Similarly, because $f$ is surjective,
>
> $$
> \forall b \in B\, \exists a \in A : f\p{a} = b. \tag{2}
> $$
>
> Thus,
>
> $$
> \forall c \in C\, \exists a \in A : g\p{f\p{a}} = g\p{b} = c. \tag{3}
> $$

The issue is that the $b$ in (1), (2), and (3) are **all different**. Actually, (3) is not even a proper statement since $b$ isn't even defined in (3). To drive the message home, remember that we can just relabel dummy variables without changing the meaning, so the above is equivalent to this:

> Since $g$ is surjective,
>
> $$
> \forall \star \in C\, \exists \bigstar \in B : g\p{\bigstar} = \star. \tag{1}
> $$
>
> Similarly, because $f$ is surjective,
>
> $$
> \forall \diamondsuit \in B\, \exists \heartsuit \in A : f\p{\heartsuit} = \diamondsuit. \tag{2}
> $$
>
> Thus,
>
> $$
> \forall \sharp \in C\, \exists \natural \in A : g\p{f\p{\natural}} = g\p{b} = \sharp. \tag{3}
> $$

The correct proof looks similar, but the key difference is that it **uses the assumptions rather than just restating them**. Again, the ideas are correct, but the issue is how the proof is written.

<solution>

**Correct proof**: Let $c \in C$. Since $g$ is surjective, there exists $b \in B$ such that $g\p{b} = c$. Similarly, because $f$ is surjective, there exists $a \in A$ such that $f\p{a} = b$. Thus,

$$
g\p{f\p{a}} = g\p{b} = c.
$$

Since $c$ was arbitrary, we are done.

</solution>
