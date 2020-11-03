---
title: Week 5 Discussion Notes (Preliminary)
date: "2020-11-03"
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Trig Substitution

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
