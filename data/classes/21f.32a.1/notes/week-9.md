---
title: Week 9 Discussion Notes
date: "2021-11-28"
tags:
    - second partials test
    - optimization
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Second Partials Test

If $f\p{x, y}$ is a twice differentiable function, then a point $\p{a, b}$ is a **critical point** if $\nabla f\p{a, b} = \vec{0}$. The **discriminant** of $f$ at $\p{a, b}$ is

$$
D\p{a, b} = f_{xx}\p{a, b} f_yy\p{a, b} - f_{xy}^2\p{a, b}.
$$

With the definitions out of the way, we have this nice result that helps you classify critical points:

<theorem> second partials test

Assume that $\p{a, b}$ is a critical point of $f\p{x, y}$. Then we have the following chart:

$$
\begin{array}{ccl}
    \\[-4ex]\hline\\[-2ex]
    D\p{a, b} & f_{xx}\p{a, b} & \text{classification} \\[1ex]\hline\\[-1.75ex]
    > 0 & > 0 & \text{local minimum} \\
    > 0 & < 0 & \text{local maximum} \\
    < 0 &     & \text{saddle point} \\
    = 0 &     & \text{inconclusive} \\[1ex]\hline
\end{array}
$$

</theorem>

<remark>

When $D\p{a, b} > 0$, you can check the sign of either $f_{xx}\p{a, b}$ or $f_{yy}\p{a, b}$ to figure out if it's a local minimum or local maximum.

Also, if you're curious, the discriminant is

$$
D\p{a, b}
    = \det
        \begin{pmatrix}
            f_{xx}\p{a, b} & f_{xy}\p{a, b} \\
            f_{yx}\p{a, b} & f_{yy}\p{a, b}
        \end{pmatrix}
$$

and the matrix above is called the **Hessian** of $f$ at $\p{a, b}$.

</remark>

## Optimization

Generally, if you want to optimize a function $f\p{x, y}$ on some domain $D$, there are two steps:

1. Optimize on the boundary of $D$.
    - You can do this by parametrizing the boundary with $\vec{r}\p{t}$, and then optimizing the 1D function $f\p{\vec{r}\p{t}}$.
    - Later, you'll learn that you can do this with Lagrange multipliers.
2. Optimize on the interior of $D$.
    - To do this, you'll want to find the critical points of $f$ that lie in $D$.

<example>

Optimize $f\p{x, y} = x^2 + y^2 + x$ on the domain $x^2 + y^2 \leq 1$, and classify the critical points of $f$ in this interior of the domain.

</example>

<solution>

Let's follow the two steps. The domain here is the disk of radius $1$, so its boundary is the unit circle.

**Boundary:**

To parametrize the unit circle, we can use $\vec{r}\p{t} = \ang{\cos{t}, \sin{t}}$. Then we need to optimize

$$
f\p{\vec{r}\p{t}}
    = \cos^2{t} + \sin^2{t} + \cos{t}
    = 1 + \cos{t}.
$$

$\cos{t}$ is maximized when $t = 0$ and minimized when $t = \pi$, so these give the critical points

$$
\vec{r}\p{0} = \ang{1, 0}
\quad\text{and}\quad
\vec{r}\p{\pi} = \ang{-1, 0}.
$$

**Interior:**

For the interior, we'll want to use the second partials test. The gradient of $f$ is

$$
\nabla f\p{x, y}
    = \ang{2x + 1, 2y}
    = \ang{0, 0}.
$$

This gives the critical point $\p{a, b} = \p{-\frac{1}{2}, 0}$.

To find the global minimum and maximum, we just need to try all the critical points:

$$
\begin{aligned}
    f\p{1, 0} &= 2 \\
    f\p{-1, 0} &= 0 \\
    f\p{-\frac{1}{2}, 0} &= -\frac{1}{4},
\end{aligned}
$$

so the global minimum is $-\frac{1}{4}$ at $\p{-\frac{1}{2}, 0}$ and the global maximum is $2$ at $\p{1, 0}$.

Lastly, the problem wants us to classify the critical point $\p{-\frac{1}{2}, 0}$. We just need to calculate the discriminant:

$$
\begin{aligned}
    f_{xx}\p{x, y} &= 2 \\
    f_{yy}\p{x, y} &= 2 \\
    f_{xy}\p{x, y} &= 0.
\end{aligned}
$$

so for this problem,

$$
D\p{-\frac{1}{2}, 0} = 4 > 0
\quad\text{and}\quad f_{xx}\p{-\frac{1}{2}, 0} = 2 > 0.
$$

Thus, by the second partials test, $\p{-\frac{1}{2}, 0}$ is a local minimum of $f$.

</solution>
