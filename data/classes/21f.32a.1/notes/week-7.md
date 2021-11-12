---
title: Week 7 Discussion Notes
date: "2021-11-11"
tags:
    - partial derivatives
    - linearization
publish: yes
---

# Week 7 Discussion Notes

## Table of Contents

## Partial Derivatives

Partial derivatives are like usual derivatives, but you just think of the other variables as constants. For example,

$$
\pderiv{}{x} e^{xy}
    = e^{xy} \p{\pderiv{}{x} xy}
    = e^{xy} y.
$$

There's also a useful theorem about mixed partial derivatives:

<theorem> Clairaut's theorem

If the mixed partial derivatives $f_{xy}$ (i.e., you take the $x$-derivative first and then the $y$-derivative second) and $f_{yx}$ ($y$ first and $x$ second) exist and are continuous in an open set around $\p{a, b}$, then

$$
f_{xy}\p{a, b} = f_{yx}\p{a, b}.
$$

</theorem>

In a nutshell, this theorem tells you that for most functions you can write down, you can take the partial derivatives in any order you want. Sometimes, one order is easier than the other:

<example>

Calculate $f_{yyyyx}$, where $f\p{x, y} = e^{y^2\sin{y}} + xy^4$.

</example>

<solution>

As you can imagine, if you take four $y$-derivatives, you will get something very complicated. However, $f$ is differentiable infinitely many times, so you can apply Clairaut's theorem here:

$$
f_{yyyyx}\p{x, y}
    = f_{xyyyy}\p{x, y}
$$

Immediately, you get

$$
f_x\p{x, y} = y^4,
$$

since there's no $x$ in the first term. From here, you can easily take the remaining $y$-derivatives:

$$
f_{xyyyy}\p{x, y} = \boxed{24}.
$$

</solution>

## Linearization

In one variable, the linearization of $f$ is just the tangent line:

$$
f\p{x} \approx f\p{x_0} + f'\p{x_0}\p{x - x_0}
$$

In several variables, a similar formula holds. We don't have "normal" derivatives in several variables, but instead of $f'$, we have the gradient

$$
\nabla f\p{x_0, y_0} = \ang{f_x\p{x_0, y_0}, f_y\p{x_0, y_0}}.
$$

We can't multiply vectors though, but given two vectors, we can get a scalar by using the dot product, so we get

$$
f\p{x, y} \approx f\p{x_0, y_0} + \nabla f\p{x_0, y_0} \cdot \ang{x - x_0, y - y_0}.
$$

The right-hand side is the equation of the tangent plane for $f$ at $\p{x_0, y_0}$, and you can write it as

$$
\begin{aligned}
    z
        &= f\p{x_0, y_0} + \nabla f\p{x_0, y_0} \cdot \ang{x - x_0, y - y_0} \\
        &= f\p{x_0, y_0} + f_x\p{x_0, y_0}\p{x - x_0} + f_y\p{x_0, y_0}\p{y - y_0}.
\end{aligned}
$$

Rearranging, this becomes

$$
f_x\p{x_0, y_0}x + f_y\p{x_0, y_0}y - z = d.
$$

From here, you can read off the normal vector to the tangent plane:

$$
\vec{n} = \ang{f_x\p{x_0, y_0}, f_y\p{x_0, y_0}, -1}.
$$
