---
title: Week 5 Discussion Notes
date: "2020-11-03"
tags:
  - trig substitution
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Trig Substitution

<example>

Calculate $\displaystyle \int \frac{\diff{x}}{x^2 + 4}$.

</example>

<solution>

In general, for trig substitution problems, your goal is to get rid of everything next to the $x^2$. So for this one, you want to replace $x$ with something so that $x^2 + 4$ is no longer a sum. We know that $\tan^2\theta + 1 = \sec^2\theta$, which means that $4\tan^2\theta + 4 = 4\sec^2\theta$, so we can try setting

$$
x = 2\tan\theta \implies \diff{x} = 2\sec^2\theta \,\diff\theta.
$$

Also, $x^2 + 4 = 4\sec^2\theta$, which transforms the integral into

$$
\int \frac{\diff{x}}{x^2 + 4}
    = \int \frac{2\sec^2\theta}{4\sec^2\theta} \,\diff\theta
    = \int \frac{1}{2} \,\diff\theta
    = \frac{1}{2} \theta + C.
$$

All that's left to do is turn everything back into terms of $x$. Since $x = 2\tan\theta$, we get $\theta = \arctan\frac{x}{2}$, so our final answer is

$$
\boxed{\frac{1}{2}\arctan\frac{x}{2} + C}.
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{\diff{x}}{\sqrt{x^2 + 1}}$.

</example>

<solution>

Like before, we want to turn the $x^2 + 1$ into something without a sum, so we can use $x = \tan\theta$ again. As before, this gives

$$
\diff{x} = \sec^2\theta \,\diff\theta
\quad\text{and}\quad
x^2 + 1 = \tan^2\theta + 1 = \sec^2\theta,
$$

so the integral becomes

$$
\int \frac{\diff{x}}{\sqrt{x^2 + 1}}
    = \int \frac{\sec^2\theta}{\sec\theta} \,\diff\theta
    = \int \sec\theta \,\diff\theta
    = \ln\abs{\sec\theta + \tan\theta} + C.
$$

We have to do a little bit more work this time to get everything back into terms of $x$. We already have $x = \tan\theta$, so we just need to figure out what $\sec\theta$ is:

$$
x^2 + 1 = \sec^2\theta \implies \sec\theta = \sqrt{x^2 + 1},
$$

so in the end, we get

$$
\ln\abs{\sec\theta + \tan\theta} + C
    = \boxed{\ln\abs{\sqrt{x^2 + 1} + x} + C}.
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{\diff{x}}{x^2\sqrt{x^2 - 9}}$.

</example>

<solution>

Same idea as before, but this time $x = 3\tan\theta$ does **not** work. Instead, if you notice that $\sec^2\theta - 1 = \tan^2\theta$, this should tell you that $x = 3\sec\theta$ will do the trick. We get

$$
\diff{x} = 3\sec\theta\tan\theta \,\diff\theta
\quad\text{and}\quad
x^2 - 9 = 9\sec^2\theta - 9 = 9\tan^2\theta
$$

and

$$
\begin{aligned}
    \int \frac{\diff{x}}{x^2\sqrt{x^2 - 9}}
         = \int \frac{3\sec\theta\tan\theta}{9\sec^2\theta \cdot 3\tan\theta} \,\diff\theta
        &= \frac{1}{9} \int \frac{\diff\theta}{\sec\theta} \\
        &= \frac{1}{9} \int \cos\theta \,\diff\theta \\
        &= \frac{1}{9} \sin\theta + C.
\end{aligned}
$$

From our substitution,

$$
\begin{aligned}
    x = 3\sec\theta
        &\implies \frac{x}{3} = \frac{1}{\cos\theta} \\
        &\implies \cos\theta = \frac{3}{x} \\
        &\implies \cos^2\theta = \frac{9}{x^2} \\
        &\implies \sin^2\theta = 1 - \cos^2\theta = 1 - \frac{9}{x^2} = \frac{x^2 - 9}{x^2} \\
        &\implies \sin\theta = \frac{\sqrt{x^2 - 9}}{x}.
\end{aligned}
$$

So the integral is

$$
\frac{1}{9} \sin\theta + C
    = \boxed{\frac{\sqrt{x^2 - 9}}{9x} + C}.
$$

</solution>

<example>

Calculate $\displaystyle \int \sqrt{x^2 + 2x} \,\diff{x}$.

</example>

<solution>

If we want to use a trig substitution, we need to get it in the form $u^2 + a^2$, where $u$ is some function of $x$ and $a$ is a constant. The way to do this is to [complete the square](https://www.mathsisfun.com/algebra/completing-square.html):

$$
x^2 + 2x = \p{x + 1}^2 - 1.
$$

So, we can use $x + 1 = \sec\theta$ here, which gives $\diff{x} = \sec\theta\tan\theta \,\diff{\theta}$ and $\p{x + 1}^2 - 1 = \sec^2\theta - 1 = \tan^2\theta$. Substituting into the integral, it becomes

$$
\begin{aligned}
    \int \sqrt{x^2 + 2x} \,\diff{x}
         = \int \sqrt{\p{x + 1}^2 - 1} \,\diff{x}
        &= \int \sqrt{\tan^2\theta} \sec\theta\tan\theta \,\diff\theta \\
        &= \int \sec\theta\tan^2\theta \,\diff\theta.
\end{aligned}
$$

From here, we're going to end up using the same trick as calculating something like $\int e^x \sin{x} \,\diff{x}$: integrate by parts and solve for the integral. We're going to let

$$
\begin{aligned}
    u = \tan\theta
        &\implies \diff{u} = \sec^2\theta \,\diff\theta \\
    \diff{v} = \sec\theta\tan\theta \,\diff\theta
        &\implies v = \sec\theta,
\end{aligned}
$$

which turns the integral into

$$
\begin{aligned}
    \int \sec\theta\tan^2\theta \,\diff\theta
        &= \sec\theta\tan\theta - \int \sec^3\theta \,\diff\theta \\
        &= \sec\theta\tan\theta - \int \sec\theta\p{\tan^2\theta + 1} \,\diff\theta \\
        &= \sec\theta\tan\theta - \int \sec\theta \,\diff\theta - \int \sec\theta\tan^2\theta \,\diff\theta \\
    \implies
    2\int \sec\theta\tan^2\theta \,\diff\theta
        &= \sec\theta\tan\theta - \ln\abs{\sec\theta + \tan\theta} + C \\
    \implies
    \int \sec\theta\tan^2\theta \,\diff\theta
        &= \frac{1}{2}\sec\theta\tan\theta - \frac{1}{2}\ln\abs{\sec\theta + \tan\theta} + C.
\end{aligned}
$$

Finally, we need to undo the substitution. We know that $x + 1 = \sec\theta$, and this tells us that

$$
\p{x + 1}^2 - 1 = \tan^2\theta
\implies \tan\theta = \sqrt{\p{x + 1}^2 - 1} = \sqrt{x^2 + 2x}.
$$

Substituting these in, we get

$$
\begin{aligned}
    \int \sqrt{x^2 + 2x} \,\diff{x}
        &= \frac{1}{2}\sec\theta\tan\theta - \frac{1}{2}\ln\abs{\sec\theta + \tan\theta} + C \\
        &= \boxed{\frac{1}{2}\p{x + 1}\sqrt{x^2 + 2x} - \frac{1}{2}\ln\abs{x + 1 + \sqrt{x^2 + 2x}} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{x^2 + 1}{\p{x^2 - 2x + 2}^2}$.

</example>

<solution>

Like before, we want to complete the square. $x^2 - 2x + 2 = \p{x - 1}^2 + 1$, so we can let $x - 1 = \tan\theta$, which gives

$$
\begin{aligned}
    \diff{x}
        &= \sec^2\theta \,\diff\theta \\
    x^2 - 2x + 2
        &= \p{x - 1}^2 + 1 = \sec^2\theta \\
    x^2 + 1
        &= \p{\tan\theta + 1}^2 + 1 = \tan^2\theta + 2\tan\theta + 2.
\end{aligned}
$$

Substituting into the integral,

$$
\begin{aligned}
    \int \frac{x^2 + 1}{\p{x^2 - 2x + 2}^2}
        &= \int \frac{\tan^2\theta + 2\tan\theta + 2}{\sec^4\theta} \sec^2\theta \,\diff\theta \\
        &= \int \frac{\tan^2\theta + 2\tan\theta + 2}{\sec^2\theta} \,\diff\theta \\
        &= \int \p{\frac{\sin^2\theta}{\cos^2\theta} + 2\frac{\sin\theta}{\cos\theta} + 2} \cos^2\theta \,\diff\theta \\
        &= \int \sin^2\theta + 2\sin\theta\cos\theta + 2\cos^2\theta \,\diff\theta \\
        &= \int \frac{1 - \cos{2\theta}}{2} + 2\sin\theta\cos\theta + \p{1 + \cos{2\theta}} \,\diff\theta \\
        &= \frac{1}{2}\theta - \frac{1}{4} \sin{2\theta} + \sin^2\theta + \theta + \frac{1}{2} \sin{2\theta} + C \\
        &= \frac{3}{2}\theta + \frac{1}{4} \sin{2\theta} + \sin^2\theta + C \\
        &= \frac{3}{2}\theta + \frac{1}{2} \sin\theta\cos\theta + \sin^2\theta + C.
\end{aligned}
$$

From our substitution, $x - 1 = \tan\theta \implies \theta = \arctan\p{x - 1}$,

$$
\begin{aligned}
    x^2 - 2x + 2 = \sec^2\theta
        &\implies \cos^2\theta = \frac{1}{x^2 - 2x + 2} \\
        &\implies \cos\theta = \frac{1}{\sqrt{x^2 - 2x + 2}},
\end{aligned}
$$

and

$$
\begin{aligned}
    \sin^2\theta
        &= 1 - \cos^2\theta = 1 - \frac{1}{x^2 - 2x + 2} = \frac{x^2 - 2x + 1}{x^2 - 2x + 2} \\
    \implies
    \sin\theta
        &= \sqrt{\frac{x^2 - 2x + 1}{x^2 - 2x + 2}} = \sqrt{\frac{\p{x - 1}^2}{x^2 - 2x + 2}} = \frac{x - 1}{\sqrt{x^2 - 2x + 2}}
\end{aligned}
$$

So, substituting all of these into our integral,

$$
\begin{aligned}
    &\frac{3}{2}\theta + \frac{1}{2} \sin\theta\cos\theta + \sin^2\theta + C \\
        ={}& \frac{3}{2} \arctan\p{x - 1} + \frac{1}{2} \frac{1}{\sqrt{x^2 - 2x + 2}}\frac{x - 1}{\sqrt{x^2 - 2x + 2}} + \frac{x^2 - 2x + 1}{x^2 - 2x + 2} + C \\
        ={}& \frac{3}{2} \arctan\p{x - 1} + \frac{x - 1}{2\p{x^2 - 2x + 2}} + \frac{x^2 - 2x + 1}{x^2 - 2x + 2} + C \\
        ={}& \frac{3}{2} \arctan\p{x - 1} + \frac{x - 1}{2\p{x^2 - 2x + 2}} + \frac{2x^2 - 4x + 2}{2\p{x^2 - 2x + 2}} + C \\
        ={}& \boxed{\frac{3}{2} \arctan\p{x - 1} + \frac{2x^2 - 3x + 1}{2x^2 - 4x + 4} + C}.
\end{aligned}
$$

</solution>

## Homework

Here are some hints for the problems this week:

### 8.1.69

This is just a [volume of solids of revolution](https://www.mathsisfun.com/calculus/solids-revolution-disk-washer.html) problem. You end up needing to calculate

$$
\int_0^\pi x^2 \sin{x} \,\diff{x},
$$

which you can do by integrating by parts twice.

### 8.1.97

For (a), you should end up with

$$
\begin{aligned}
    I_n
        &= \frac{1}{2} x^{n-1} \sin{x^2} - \frac{n - 1}{2} J_{n-2} \\
    J_n
        &= -\frac{1}{2} x^{n-1} \cos{x^2} + \frac{n - 1}{2} I_{n-2}.
\end{aligned}
$$

The idea for (b) is this: if you can calculate $I_1$, then you can calculate $J_3$, and if you can calculate $J_1$, then you can calculate $I_3$. Using the reduction formulas, you get the "chain" of calculations:

$$
\begin{aligned}
    I_1 \to J_3 \to I_5 \to J_7 \to \cdots \\
    J_1 \to I_3 \to J_5 \to I_7 \to \cdots
\end{aligned}
$$

So, if you can calculate $I_1$ and $J_1$, you can calculate $I_n$ and $J_n$ if $n$ is odd. Why can you calculate $I_1$ and $J_1$?

### 8.2.23

For this, you can try the reduction formulas, or you can just use the trig identity

$$
\cos^2\theta = \frac{1 + \cos{2\theta}}{2}
$$

twice. For example, after using it once, you get

$$
\begin{aligned}
    \int \cos^4\p{3x + 2} \,\diff{x}
        &= \int \p{\frac{1 + \cos\p{6x + 4}}{2}}^2 \,\diff{x} \\
        &= \frac{1}{4} \int 1 + 2\cos\p{6x + 4} + \cos^2\p{6x + 4} \,\diff{x}.
\end{aligned}
$$
