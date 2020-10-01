---
title: Week 0 Discussion Notes
date: "2020-10-01"
publish: yes
---

# Week 0 Discussion Notes

Since this discussion was before the first lecture, we just reviewed some trigonometry and integration.

<example>

Calculate $\displaystyle \int \sec^3 x \tan x \,\diff{x}$.

</example>

<solution>

We will solve this in two different ways.

Method 1: $u = \sec x \implies \diff{u} = \sec x \tan x \,\diff{x}$.

$$
\begin{aligned}
    \int \sec^3 x \tan x \,\diff{x}
        &= \int \p{\sec^2 x} \p{\sec x \tan x} \,\diff{x} \\
        &= \int u^2 \,\diff{u} \\
        &= \frac{1}{3} u^3 + C \\
        &= \boxed{\frac{1}{3} \sec^3 x + C}
\end{aligned}
$$

Method 2: $u = \cos x \implies \diff{u} = -\sin x \,\diff{x}$.

$$
\begin{aligned}
    \int \sec^3 x \tan x \,\diff{x}
        &= \int \frac{\sin x}{\cos^4 x} \,\diff{x} \\
        &= -\int \frac{\diff{u}}{u^4} \\
        &= -\p{-\frac{1}{3}u^{-3}} + C \\
        &= \frac{1}{3} \frac{1}{\cos^3 x} + C \\
        &= \boxed{\frac{1}{3} \sec^3 x + C}
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \sec^4 x \,\diff{x}$.

</example>

<solution>

Recall the identity $\tan^2 x + 1 = \sec^2 x$. This gives

$$
\int \sec^4 x \,\diff{x}
    = \int \p{\tan^2 x + 1} \sec^2 x \,\diff{x}.
$$

Let $u = \tan x \implies \diff{u} = \sec^2 x \,\diff{x}$. Then

$$
\begin{aligned}
    \int \sec^4 x \,\diff{x}
        &= \int \p{\tan^2 x + 1} \sec^2 x \,\diff{x} \\
        &= \int \p{u^2 + 1} \,\diff{u} \\
        &= \frac{1}{3} u^3 + u + C \\
        &= \boxed{\frac{1}{3} \tan^3 x + \tan x + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \tan^2 x \,\diff{x}$.

</example>

<solution>

Using the same identity as in Example 2, we get

$$
\int \tan^2 x \,\diff{x}
    = \int \sec^2 x - 1 \,\diff{x}
    = \boxed{\tan x - x + C}.
$$

</solution>
