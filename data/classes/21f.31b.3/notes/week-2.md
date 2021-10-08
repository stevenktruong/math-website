---
title: Week 2 Discussion Notes
date: "2021-10-07"
tags:
    - L'Hôpital's rule
    - integrals
publish: yes
---

# Week 2 Discussion Notes

## Table of Contents

## L'Hôpital's Rule

Here's an abridged statement of L'Hôpital's rule:

<theorem> L'Hôpital's rule

Let $f\p{x}, g\p{x}$ be functions such that

1.  $\lim_{x\to a} f\p{x} = \lim_{x\to a} g\p{x} = 0$ or $\lim_{x\to a} f\p{x}$ and $\lim_{x\to a} g\p{x}$ are both infinite.
2.  $\lim_{x\to a} \frac{f'\p{x}}{g'\p{x}}$ exists or is infinite.

Then

$$
\lim_{x\to a} \frac{f\p{x}}{g\p{x}}
    = \lim_{x\to a} \frac{f'\p{x}}{g'\p{x}}.
$$

</theorem>

It's slightly different from the textbook's definition because I wanted to focus on what I think are the more interesting conditions.

### Pitfalls

**Don't use the quotient rule!**

<example>

Calculate $\displaystyle \lim_{x\to \infty} \frac{x}{e^x}$.

</example>

<solution>

As $x \to \infty$, the numerator and denominator both go to $\infty$ also, so we can apply L'Hôpital's rule. Sometimes, students will write something like this:

> $$
> \lim_{x\to\infty} \frac{x}{e^x}
>   = \lim_{x\to\infty} \frac{e^x - xe^x}{e^{2x}}
>   = 0.
> $$

The problem with this is that instead of taking the derivative of the numerator and denominator separately, this is the derivative of the entire fraction, which is wrong. Instead, you should end up with

$$
\lim_{x\to\infty} \frac{x}{e^x}
    = \lim_{x\to\infty} \frac{1}{e^x}
    = \boxed{0}.
$$

</solution>

**Assumptions matter!**

<example>

Calculate $\displaystyle \lim_{x\to0} \frac{x^2}{\cos{x}}$.

</example>

<solution>

The following thing is _wrong:_

> $$
> \lim_{x\to0} \frac{x^2}{\cos{x}}
>   = \lim_{x\to0} \frac{2x}{-\sin{x}}
>   = \lim_{x\to0} -\frac{2}{\frac{\sin{x}}{x}}
>   = -2.
> $$

The problem here is that we didn't check condition (i) before applying L'Hôpital's rule. If we go back, you'll see that as $x \to 0$, the numerator goes to $0$ but the denominator goes to $1$, so we could've just plugged in to begin with:

$$
\lim_{x\to0} \frac{x^2}{\cos{x}}
    = \boxed{0}.
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x\to\infty} \frac{x + \sin{x}}{x}$.

</example>

<solution>

This is also wrong:

> $$
> \lim_{x\to\infty} \frac{x + \sin{x}}{x}
>   = \lim_{x\to0} \frac{1 + \cos{x}}{1}
>   = \dne.
> $$

This is because condition (ii) failed: the limit of $\frac{f'\p{x}}{g'\p{x}}$ doesn't exist here, so you can't write the first equals sign. This means we need to try something else:

$$
\lim_{x\to\infty} \frac{x + \sin{x}}{x}
    = \lim_{x\to\infty} \p{1 + \frac{\sin{x}}{x}}
    = \boxed{1}.
$$

</solution>

**Your old techniques are still useful!**

Even though L'Hôpital's rule is really useful, this doesn't mean that you can just forget all your old techniques for calculating limits. Example 3 above is one instance of this, and we also have this one:

<example>

Calculate $\displaystyle \lim_{x\to\infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}$.

</example>

<solution>

The numerator and denominator both go to $\infty$ as $x \to \infty$, so we can apply L'Hôpital's rule:

$$
\lim_{x\to\infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}
    = \lim_{x\to\infty} \frac{e^x + e^{-x}}{e^x - e^{-x}}.
$$

Same thing happens with the new limit, so you try it again:

$$
\lim_{x\to\infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}
    = \lim_{x\to\infty} \frac{e^x + e^{-x}}{e^x - e^{-x}}
    = \lim_{x\to\infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}
    = \cdots.
$$

Hopefully you realize that after two tries that L'Hôpital's isn't going to get you anywhere. This means that you will have to try one of your old techniques to calculate it. For this problem, you'll want to divide everything by the fastest growing function, which is $e^x$ in this case:

$$
\lim_{x\to\infty} \frac{e^x - e^{-x}}{e^x + e^{-x}} \cdot \frac{\frac{1}{e^x}}{\frac{1}{e^x}}
    = \lim_{x\to\infty} \frac{1 - e^{-2x}}{1 + e^{-2x}}
    = \boxed{1}.
$$

</solution>

### Examples

<example>

Calculate $\displaystyle \lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sqrt{1 - \cos^2{x}}}$.

</example>

<solution>

Before using L'Hôpital's, you should always take a minute to see if you can simplify anything. In this problem, if you don't do that, you end up with a horrible derivative in the denominator. But if you do simplify, you will just get $\sin{x}$ in the bottom—much nicer! If you use L'Hôpital's after this, you just get

$$
\lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sqrt{1 - \cos^2{x}}}
    = \lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sin{x}}
    = \lim_{x \to 0^+} \frac{\cos{x} - 2x}{\cos{x}}
    = \boxed{1}.
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x \to 0^+} x^{2\sqrt{x}}$.

</example>

<solution>

Here, we're going to want to use logarithms to bring the exponent down, but we need to make sure we undo it so that we don't change the function:

$$
\lim_{x \to 0^+} x^{2\sqrt{x}}
    = \lim_{x \to 0^+} e^{\ln{x^{2\sqrt{x}}}}
    = e^{\lim_{x \to 0^+} 2\sqrt{x}\ln{x}}.
$$

The second equality comes from continuity of $e^x$. It's somewhat technical (you need to do some $\epsilon$-$\delta$ stuff to prove it), so I'll just gloss over the details since they won't be important for our class.

To finish the problem, we just need to calculate $\lim_{x \to 0^+} 2\sqrt{x}\ln{x}$. If we want to use L'Hôpital's rule, we need a fraction, but thankfully, we can always turn a product into a quotient:

$$
2\sqrt{x}\ln{x}
    = \frac{2\ln{x}}{\frac{1}{\sqrt{x}}}.
$$

I could've moved $\ln{x}$ to the denominator instead, but then we'd have to calculate the derivative of $\frac{1}{\ln{x}}$ which will get messy, so it'll be easier to keep $\ln{x}$ in the numerator. Then

$$
\begin{aligned}
    \lim_{x \to 0^+} 2\sqrt{x} \ln{x}
        &= \lim_{x \to 0^+} \frac{2\ln{x}}{\frac{1}{\sqrt{x}}} \\
        &= \lim_{x \to 0^+} \frac{2\ln{x}}{x^{-1/2}} \\
        &= \lim_{x\to0^+} \frac{\frac{2}{x}}{-\frac{1}{2}x^{-3/2}} \\
        &= \lim_{x\to0^+} -\frac{4}{x} \cdot x^{3/2} \\
        &= \lim_{x\to0^+} -4x^{1/2} \\
        &= 0.
\end{aligned}
$$

Finally, we need to evaluate the original limit:

$$
\lim_{x \to 0^+} x^{2\sqrt{x}}
    = e^{\lim_{x \to 0^+} 2\sqrt{x}\ln{x}}
    = e^0
    = \boxed{1}.
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x \to \infty} \abs{\frac{x + 1}{x - 2}}^{\sqrt{x^2 - 4}}$.

</example>

<solution>

Like in the previous example, we're going to take a logarithm to bring the exponent down:

$$
\lim_{x \to \infty} \abs{\frac{x + 1}{x - 2}}^{\sqrt{x^2 - 4}}
    = e^{\lim_{x \to \infty} \sqrt{x^2 - 4}\ln\abs{\frac{x + 1}{x - 2}}}.
$$

Then to calculate the limit in the exponent,

$$
\begin{aligned}
    \lim_{x \to \infty} \sqrt{x^2 - 4}\ln\abs{\frac{x + 1}{x - 2}}
        &= \lim_{x \to \infty} \frac{\ln\abs{\frac{x + 1}{x - 2}}}{\frac{1}{\sqrt{x^2 - 4}}} \\
        &= \lim_{x \to \infty} \frac{\ln\abs{x + 1} - \ln\abs{x - 2}}{\p{x^2 - 4}^{-1/2}} \\
        &= \lim_{x \to \infty} \frac{\frac{1}{x+1} - \frac{1}{x-2}}{-x\p{x^2 - 4}^{-3/2}} \\
        &= \lim_{x \to \infty} \frac{\frac{x-2}{\p{x+1}\p{x-2}} - \frac{x+1}{\p{x+1}\p{x-2}}}{-x} \cdot \p{x^2 - 4}^{3/2} \\
        &= \lim_{x \to \infty} \frac{-3\p{x^2 - 4}^{3/2}}{-x\p{x+1}\p{x-2}} \\
        &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2}}{x\p{x+1}\p{x-2}}
\end{aligned}
$$

When $x$ is large, $\p{x^2 - 4}^{3/2}$ is roughly $\p{x^2}^{3/2} = x^3$, and the denominator is also roughly $x^3$. So, we will multiply and divide by $\frac{1}{x^3}$. Notice that $x^3 = \p{x^2}^{3/2}$, which gives

$$
\begin{aligned}
    &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2}}{x\p{x+1}\p{x+2}} \cdot \frac{\frac{1}{x^3}}{\frac{1}{x^3}} \\
    &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2} \p{\frac{1}{x^2}}^{3/2}}{\frac{x\p{x+1}\p{x-2}}{x^3}} \\
    &= \lim_{x \to \infty} \frac{3\p{\frac{x^2 - 4}{x^2}}^{3/2}}{\frac{x}{x} \frac{x+1}{x} \frac{x-2}{x}} \\
    &= \lim_{x \to \infty} \frac{3\p{1 - \frac{4}{x^2}}^{3/2}}{\p{1 + \frac{1}{x}}\p{1 - \frac{2}{x}}} \\
    &= 3.
\end{aligned}
$$

Finally, we just need to go back to the original limit:

$$
\lim_{x \to \infty} \abs{\frac{x + 1}{x - 2}}^{\sqrt{x^2 - 4}}
    = e^{\lim_{x \to \infty} \sqrt{x^2 - 4}\ln\abs{\frac{x + 1}{x - 2}}}
    = \boxed{e^3}.
$$

</solution>

## Integrals

<example>

Calculate $\displaystyle \int e^{e^x+x} \,\diff{x}$.

</example>

<solution>

Usually, it's a good idea to get rid of addition in the exponent since multiplication is easier to work with:

$$
\int e^{e^x+x} \,\diff{x}
    = \int e^{e^x} e^x \,\diff{x}.
$$

One choice of $u$ is $u = e^x$, which means $\diff{u} = e^x \,\diff{x}$. Then

$$
\int e^{e^x} e^x \,\diff{x}
    = \int e^u \,\diff{u}
    = e^u + C
    = \boxed{e^{e^x} + C}.
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{e^{2x} - 1}{e^{2x} + 1} \,\diff{x}$.

</example>

<solution>

This one is basically a trick. You want to turn everything into terms of $e^x$, so you can do

$$
\int \frac{e^{2x} - 1}{e^{2x} + 1} \cdot \frac{\frac{1}{e^x}}{\frac{1}{e^x}} \,\diff{x}
    = \int \frac{e^x - e^{-x}}{e^x + e^{-x}} \,\diff{x}.
$$

From here, $u = e^x + e^{-x}$ works since $\diff{u} = \p{e^x - e^{-x}} \,\diff{x}$, which is exactly the numerator, so

$$
\int \frac{e^x - e^{-x}}{e^x + e^{-x}} \,\diff{x}
    = \int \frac{\diff{u}}{u}
    = \ln{\abs{u}} + C
    = \boxed{\ln{\abs{e^x - e^{-x}}} + C}.
$$

</solution>

<exercise>

To see if you understand the trick, try calculating these:

1. $\displaystyle \int \frac{e^{4x} - 1}{e^{4x} + 1} \,\diff{x}$
2. $\displaystyle \int \frac{e^{3x} - 1}{e^{3x} + 1} \,\diff{x}$

</exercise>

<example>

Calculate $\displaystyle \int \sin^2{x} \,\diff{x}$.

</example>

<solution>

This is basically a problem testing to see if you remember the double-angle identities:

$$
\int \sin^2{x} \,\diff{x}
    = \int \frac{1 - \cos{2x}}{2} \,\diff{x}
    = \boxed{\frac{x}{2} - \frac{\sin{2x}}{4} + C}.
$$

</solution>
