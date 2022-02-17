---
title: Week 7 Discussion Notes
date: "2022-02-15"
tags:
    - conservative vector fields
publish: yes
---

# Week 7 Discussion Notes

## Table of Contents

## Conservative Vector Fields

A vector field $\vec{F}$ is **conservative** on a domain $\mathscr{D}$ if there is a scalar-valued function $f$ such that $\nabla f = \vec{F}$ on all of $\mathscr{D}$.

If $\vec{F}$ is conservative with potential function $f$, you can calculate line integrals really quickly. If $\mathscr{C}$ is a curve starting at a point $\vec{Q}$ and ending at $\vec{P}$, then

$$
\int_{\mathscr{C}} \vec{F} \cdot \diff\vec{r}
    = f\p{\vec{P}} - f\p{\vec{Q}}.
$$

In particular, if $\mathscr{C}$ is a **closed curve** (i.e., a curve that starts and ends at the same point), then $\int_{\mathscr{C}} \vec{F} \cdot \diff\vec{r} = 0$.

<example>

Calculate $\int_{\mathscr{C}} \ang{x, y} \cdot \diff\vec{r}$, where $\mathscr{C}$ is the curve below:

<img src="{{ assetsFolder }}/images/line-integral.png" width=80% />

</example>

<solution>

When you see a very complicated curve like the one above, you almost _never_ want to try to parametrize and integrate over each segment. Instead, you'll hope that there's a potential function and integrate using that instead. You can eyeball a potential function for $\ang{x, y}$ here:

$$
f\p{x, y} = \frac{x^2 + y^2}{2}.
$$

So, $\ang{x, y}$ is conservative, which means we can calculate the line integral using the endpoints:

$$
\int_{\mathscr{C}} \ang{x, y} \cdot \diff\vec{r}
    = f\p{1, 0} - f\p{0, 0}
    = \boxed{\frac{1}{2}}.
$$

</solution>

The domain is very important when determining whether a vector field is conservative or not.

<example>

Recall the vortex field:

$$
\vec{F}\p{x, y}
    = \nabla\arctan\p{\frac{y}{x}}
    = \frac{\ang{-y, x}}{x^2 + y^2}
$$

Be careful, though: $\arctan\p{\frac{y}{x}}$ isn't even continuous on all of $\R^2 \setminus \set{\p{0, 0}}$. $\arctan\p{\frac{y}{x}}$ is the angle of $\p{x, y}$ measured from the positive real axis, so

$$
\lim_{y\to0^+} \arctan\p{\frac{y}{1}} = 0
\quad\text{but}\quad
\lim_{y\to0^-} \arctan\p{\frac{y}{1}} = 2\pi.
$$

$\vec{F}$ is _not conservative_ on $\R^2 \setminus \set{\p{0, 0}}$, since if $\mathscr{C}$ is the unit circle oriented counter-clockwise, then parametrizing it via $\vec{r}\p{\theta} = \ang{\cos\theta, \sin\theta}$,

$$
\begin{aligned}
    \int_\mathscr{C} \vec{F} \cdot \diff\vec{r}
        &= \int_0^{2\pi} \frac{\ang{-\sin\theta, \cos\theta}}{\cos^2\theta + \sin^2\theta} \cdot \ang{-\sin\theta, \cos\theta} \,\diff\theta \\
        &= \int_0^{2\pi} \sin^2\theta + \cos^2\theta \,\diff\theta \\
        &= \int_0^{2\pi} \diff\theta \\
        &= 2\pi.
\end{aligned}
$$

(Remember that if you integrate a conservative vector field over a closed curve, you should get $0$.)

Because $\arctan\p{\frac{y}{x}}$ is the angle, though, you can calculate line integrals of the vortex field just by counting the number of times the curve loops around the origin:

<img src="{{ assetsFolder }}/images/vortex-field.png" width=90% />

</example>
