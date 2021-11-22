---
title: Week 8 Discussion Notes
date: "2021-11-21"
tags:
    - directional derivatives
    - chain rule
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Directional Derivatives

In 1D, if you had a function $f\p{x}$, then the derivative $\deriv{f}{x}$ tells you how much $f$ (the "height") changes when you move a little bit in the positive $x$ direction.

With multiple variables, though, you have a lot more directions to work with, but the interpretation is the same:

$$
D_{\vec{u}}f\p{a, b} = \nabla f\p{a, b} \cdot \frac{\vec{u}}{\norm{\vec{u}}}
$$

$D_{\vec{u}}f\p{a, b}$ tells you how much $f$ (the "height") changes when you move a little bit in the direction specified by the vector $\vec{u}$. Since this is a dot product, you already have another, more geometric formula for the directional derivative:

$$
D_{\vec{u}}f\p{a, b} = \norm{\nabla f\p{a, b}} \cos{\theta}.
$$

$\theta$ is the angle between $\nabla f\p{a, b}$ and the vector $\vec{u}$. Recall that $\cos{\theta}$ is between $-1$ and $1$, where $\cos{0} = 1$ and $\cos{\pi} = -1$. So, you immediately get two interesting interpretations of the gradient:

1. The maximum rate of **increase** is in the direction $\nabla f\p{a, b}$.
2. The maximum rate of **decrease** is in the direction $-\nabla f\p{a, b}$.

Another interesting case is when $\cos{\theta} = 0$, where $\theta = \frac{\pi}{2}$, i.e., when $\nabla f\p{a, b}$ is orthogonal to $\vec{u}$. In this case, $D_{\vec{u}}f\p{a, b} = 0$, i.e., if you move a little bit in a direction orthogonal to $\nabla f\p{a, b}$, then $f$ (essentially) stays constant. However, if you stay at the same height, that means you're moving along a level curve. This tells you another interpretation of the gradient:

> The gradient of $f$ is orthogonal to the level curves of $f$.

These pictures gives a rough summary of the concepts:

<img src="{{ assetsFolder }}/images/gradient-3d.png" width=80% />

<img src="{{ assetsFolder }}/images/gradient-2d.png" width=80% />

Using the interpretation that the gradient is orthogonal to level curves, you'll be able to find normal vectors for tangent planes much more easily.

<example>

If a surface is defined by $F\p{x, y, z} = c$, i.e., is a level curve of the function $F$, then you already know that $\nabla F$ will be orthogonal to this surface. Thus, you can use

$$
\vec{n} = \nabla F
$$

as your normal vector.

</example>

<example>

As a special case, if you have a surface defined by $z = f\p{x, y}$, then you can view it as a level curve:

$$
F\p{x, y, z} = f\p{x, y} - z = 0
$$

Then as in the previous example, you can use

$$
\vec{n} = \nabla F = \ang{\pderiv{f}{x}, \pderiv{f}{y}, -1},
$$

which coincides with the normal vector we've been using for surfaces.

</example>

<example>

Find a normal vector to the surface $x^2 + y^2 + z^2 = 1$ at the point $\p{a, b, c}$.

</example>

<solution>

In this problem, $F\p{x, y, z} = x^2 + y^2 + z^2$ and the surface is a level surface of $F$. Thus, we can use

$$
\vec{n}
    = \nabla F\p{a, b, c}
    = \boxed{\ang{2a, 2b, 2c}}.
$$

</solution>

## Chain Rule

<theorem>

Let $f\p{x, y}$ be differentiable, and suppose $x = x\p{s, t}$ and $y = y\p{s, t}$. Then

$$
\pderiv{f}{s}
    = \pderiv{f}{x} \pderiv{x}{s} + \pderiv{f}{y} \pderiv{y}{s}.
$$

</theorem>

So to find $\pderiv{f}{s}$, you just need to find all the variables of $f$ that depend on $s$ and multiply out the partial derivatives. This generalizes to more complicated situations:

<example>

Let $f\p{x, y, z}$ be differentiable, $x = x\p{s, t}$, and $z = z\p{s}$ (so $y$ is independent of $s, t$). Calculate the partial derivatives

$$
\pderiv{f}{s} \quad\text{and}\quad \pderiv{f}{t}.
$$

</example>

<solution>

For $\pderiv{f}{s}$, only $x$ and $z$ depend on $s$, so we get

$$
\boxed{\pderiv{f}{s} = \pderiv{f}{x} \pderiv{x}{s} + \pderiv{f}{z} \pderiv{z}{s}}.
$$

Similarly, for $\pderiv{f}{t}$, only $x$ depends on $t$, so

$$
\boxed{\pderiv{f}{t} = \pderiv{f}{x} \pderiv{x}{t}}.
$$

</solution>

<example>

Derive the formula

$$
\deriv{}{t} f\p{\vec{r}\p{t}} = \nabla f\p{\vec{r}\p{t}} \cdot \vec{r}'\p{t}.
$$

</example>

<solution>

We can write

$$
\vec{r}\p{t} = \ang{x\p{t}, y\p{t}},
$$

so this becomes finding the derivative $\deriv{}{t} f\p{x, y}$ with $x = x\p{t}$ and $y = y\p{t}$:

$$
\begin{aligned}
    \deriv{}{t} f\p{x, y}
        &= \pderiv{f}{x} \deriv{x}{t} + \pderiv{f}{y} \deriv{y}{t} \\
        &= \ang{\pderiv{f}{x}, \pderiv{f}{y}} \cdot \ang{\deriv{x}{t}, \deriv{y}{t}} \\
        &= \nabla f\p{\vec{r}\p{t}} \cdot \vec{r}'\p{t}.
\end{aligned}
$$

</solution>
