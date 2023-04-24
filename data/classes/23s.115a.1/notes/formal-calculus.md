---
title: Formal Calculus
date: "2023-04-24"
tags:
    - linearity
publish: yes
---

# Formal Calculus

"Formal" here means that you're not actually doing calculus (i.e., you're not taking any limits), but you're pretending that you can. This is what's happening in the following problem:

<example>

Let $\func{T}{\mathbb{F}\br{x}}{\mathbb{F}\br{x}}$ be defined by

$$
T\p{f} = \int_0^x f\p{t} \,\diff{t}.
$$

Show that $T$ is linear.

</example>

<solution>

By definition,

$$
T\p{\sum_{i=0}^n a_ix^i} = \sum_{i=0}^n \frac{a_i}{i+1} x^{i+1}.
$$

Let's show that $T\p{f + g} = T\p{f} + T\p{g}$. Let $f = \sum_{i=0}^n a_ix^i$ and $g = \sum_{i=0}^m b_ix^i$. Let $p = \max\set{n, m}$, and set $a_i = 0$ if $i > n$ or $b_i = 0$ if $i > m$. (In the following, I'll mark a line with $\p{T}$ if I use the definition of $T$, and I'll mark it with a $\p{V}$ if I use any definition related to $\mathbb{F}\br{x}$. You don't need to do this in your own proofs--the marks are there to help you understand what I'm writing.)

$$
\begin{aligned}
  T\p{f + g}
    &= T\p{\sum_{i=0}^n a_ix^i + \sum_{i=0}^m b_ix^i} \\
    &= T\p{\sum_{i=0}^p \p{a_i + b_i}x^i}
        && \p{V} \\
    &= \sum_{i=0}^p \frac{a_i + b_i}{i+1} x^{i+1}
        && \p{T} \\
    &= \sum_{i=0}^n \frac{a_i}{i+1} x^i + \sum_{i=0}^m \frac{b_i}{i+1} x^i
        && \p{V} \\
    &= T\p{f} + T\p{g}.
        && \p{T} \\
\end{aligned}
$$

Now let's show that $T\p{cf} = cT\p{f}$ for any scalar $c \in \mathbb{F}$. I'll use the same marks as I did above.

$$
\begin{aligned}
  T\p{cf}
    &= T\p{\sum_{i=0}^n ca_i x^i}
        && \p{V} \\
    &= \sum_{i=0}^n \frac{ca_i}{i+1} x^{i+1}
        && \p{T} \\
    &= c\sum_{i=0}^n \frac{a_i}{i+1} x^{i+1}
        && \p{V} \\
    &= cT\p{f}.
        && \p{T}
\end{aligned}
$$

Thus, $T$ is linear.

</solution>

If your solution doesn't include almost if not all of the things I wrote, then I can guarantee you that your solution is incorrect as a result of misinterpreting the meaning of $T$.

Even though we're using the integral symbol, this does _not_ mean that we're using the Riemann integral to define $T$. Remember that the Riemann integral is defined by taking the limit of a Riemann sum of a function $\func{f}{\br{a,b}}{\R}$. To differentiate between these two, I will use $T_{\mathrm{Riemann}}$ to denote the Riemann integral. In this instance, $\func{T_{\mathrm{Riemann}}}{\set{\text{polynomial functions}}}{\set{\text{polynomial functions}}}$, with

$$
T_{\mathrm{Riemann}}\p{f} = \int_0^x f\p{t} \,\diff{t} = \lim_{\abs{\mathcal{P}}\to0} \sum_{t_i \in \mathcal{P}} f(t_i)\p{t_{i+1} - t_i}.
$$

(You don't need to pay that much attention to the limit part. It's just there to remind you of how little $T$ uses when compared to $T_{\mathrm{Riemann}}$.)

$T$ and $T_{\mathrm{Riemann}}$ may look the same, but **they are actually very different.** $T$ is a map between things that we call formal polynomials, which essentially means that we don't think of $x$ as a variable, but as just a (mostly meaningless) symbol. On the other hand, $T_{\mathrm{Riemann}}$ is defined between polynomial _functions_, which means that we think of $x$ as a variable that we can plug things into.

The most common issue I saw was that students confused $T$ with $T_{\mathrm{Riemann}}$, which is understandable, but still a big mistake in this class. It's true that $T_{\mathrm{Riemann}}$ is linear, but it doesn't tell you anything about linearity of $T$ because $T$ is defined _formally_ instead of with Riemann sums. Like I said at the beginning, "formally" means you're only pretending you can do calculus. If you _could_ do calculus on $\mathbb{F}\br{x}$ (which you can never actually do), then given a polynomial $f = \sum_{i=0}^n a_i x^i$, the only reasonable meaning of the integral is

$$
\int_0^x f\p{t} \,\diff{t}
  = \left. \sum_{i=0}^n \frac{a_i}{i+1} t^{i+1} \right\rvert_{t=0}^{t=x}
  = \sum_{i=0}^n \frac{a_i}{i+1} x^{i+1}.
$$

So, the actual definition of $T$ (and how you're supposed to interpret the problem) is

$$
T\p{\sum_{i=0}^n a_ix^i} = \sum_{i=0}^n \frac{a_i}{i+1} x^{i+1},
$$

i.e., it's what you get if you _could_ apply the fundamental theorem of calculus. But we can't _actually_ use it, which is why $T$ is called **formal integration**.

**Correctly interpreting problems is a skill you have to learn in math**, so it's important to take a step back and think about whether what you write down makes sense. For example, you could ask yourself:

> If $\mathbb{F} = \Z_2$, then does it make sense to use the fundamental theorem of calculus?

Hopefully, you would answer no, because calculus can only be done if you can take limits, which you can't do in $\Z_2$ (or most fields, for that matter). This means that the only _reasonable_ interpretation of the integral in $T$ is to compute it formally.

To test your understanding, you can re-try part (b):

<exercise>

Let $\func{T}{\mathbb{F}\br{x}}{\mathbb{F}\br{x}}$ be defined by

$$
T\p{f} = \frac{\mathrm{d}f}{\mathrm{d}x}.
$$

1. Write down the precise definition of $T$.
2. Show that $T$ is linear.

</exercise>

Like in the example, $T$ is called **formal differentiation** because the usual derivative is defined as

$$
\frac{\mathrm{d}f}{\mathrm{d}x}\p{x} = \lim_{h\to0} \frac{f\p{x + h} - f\p{x}}{h},
$$

and similarly, this is not well-defined in an arbitrary field since we usually can't take limits. However, we still know what the derivative of a polynomial _should_ be.
