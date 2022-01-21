---
title: Week 3 Discussion Notes
date: "2022-01-20"
tags:
    - triple integrals
    - change of variables
publish: yes
---

# Week 3 Discussion Notes

## Table of Contents

## Triple Integrals

Triple integrals are like double integrals, except now you have one more iterated integral. However, despite this, triple integrals tend to be much harder than double integrals because the regions are harder to visualize, since they're 3-dimensional now.

<example>

Integrate $f\p{x, y, z} = 1$ over the region $\mathscr{W}$ in the first octant bounded by the triangle with vertices $\p{4, 0, 0}$, $\p{0, 4, 0}$, and $\p{0, 0, 6}$.

</example>

<solution>

When approaching these types of problems, you always want to sketch the region first:

<img src="{{ assetsFolder }}/images/triple-integral.png" width=50% />

$\mathscr{W}$ is an example of a **vertically simple** (or **$z$-simple**) region. In other words, $\mathscr{W}$ is a region between two surfaces, meaning you can express $\mathscr{W}$ in the form

$$
\mathscr{W} = \set{\p{x, y, z} \in \R^3 \st \p{x, y} \in \mathscr{D},\ z_1\p{x, y} \leq z \leq z_2\p{x, y}}.
$$

Here, $z = z_1\p{x, y}$ is the lower surface and $z = z_2\p{x, y}$ is the upper surface. For this problem, $z_1\p{x, y} = 0$ is equation of the $xy$-plane, and $z_2\p{x, y} = \frac{3}{2}\p{4 - x - y}$ is the equation of the plane that contains the triangle (you can find the equation, since you're given 3 points on the plane). This means we already have our $z$-bounds:

$$
0 \leq z \leq \frac{3}{2}\p{4 - x - y},
$$

so now, we need to figure out our bounds for $x$ and $y$. If we project the region to the $xy$-plane, we get another triangle:

<img src="{{ assetsFolder }}/images/projection.png" width=50% />

You can express the region as a vertically simple domain:

$$
\mathscr{D} = \set{\p{x, y} \in \R^2 \st 0 \leq x \leq 4,\ 0 \leq y \leq 4 - x}
$$

Now that we have all our bounds, we can set up the integral:

$$
\iiint_\mathscr{W} f\p{x, y, z} \,\diff{V}
    = \int_0^4 \int_0^{4-x} \int_0^{\frac{3}{2}\p{4-x-y}} \diff{z} \,\diff{y} \,\diff{x}
    = \boxed{16}
$$

(I'm going to omit the calculation, since the hardest part of the problem is just setting up the integral.)

</solution>

## Change of Variables

There are three change of variables we've seen so far:

$$
\begin{aligned}
    \diff{A} &= r \,\diff{r} \,\diff{\theta},
        && x = r\cos\theta,\ y = r\sin\theta \\
    \diff{V} &= r \,\diff{z} \,\diff{r} \,\diff{\theta},
        && x = r\cos\theta,\ y = r\sin\theta,\ z = z \\
    \diff{V} &= \rho^2\sin{\phi} \,\diff\rho \,\diff{\phi} \,\diff{\theta},
        && x = \rho\sin\phi\cos\theta,\ y = \rho\sin\phi\sin\theta,\ z = \rho\cos\phi
\end{aligned}
$$

<example>

Use spherical coordinates to find the volume of the region $\mathscr{W}$ bounded below by the plane $z = 1$ and above by the sphere $x^2 + y^2 + z^2 = 4$.

</example>

<solution>

Like always, let's sketch the region first:

<img src="{{ assetsFolder }}/images/change-of-variables.png" width=50% />

This region is symmetric in $\theta$, i.e., if you rotate it about the $z$-axis, you always get the same shape. This means that our bounds can only depend on $\rho$ or $\phi$.

The region is $\rho$-simple, which means that we can write our $\rho$ bounds as

$$
\rho_1\p{\phi} \leq \rho \leq \rho_2\p{\phi}.
$$

Here, $\rho_1\p{\phi}$ is the inner surface (the red one), and $\rho_2\p{\phi}$ is the outer surface (the blue one). The outer surface is the sphere, so $\rho_2\p{\phi} = 2$, the radius of the sphere. For the inner surface, we'll have to do some trig:

<img src="{{ assetsFolder }}/images/trig-1.png" width=50% />

Thus,

$$
\cos\phi = \frac{1}{\rho_2}
\implies \rho_2\p{\phi} = \frac{1}{\cos\phi}.
$$

To finish the problem, we need to find the bounds for $\phi$ and $\theta$. $\phi$ starts at $\phi_1 = 0$, and to find the upper bound $\phi_2$, we need to do more trig:

<img src="{{ assetsFolder }}/images/trig-2.png" width=50% />

So,

$$
\cos\phi_2 = \frac{1}{2}
\implies \phi_2 = \frac{\pi}{3},
$$

which means $0 \leq \phi \leq \frac{\pi}{3}$. Lastly, we're integrating over a full rotation, so $0 \leq \theta \leq 2\pi$. This gives

$$
\iiint_\mathscr{W} \diff{V}
    = \int_0^{2\pi} \int_0^{\pi/3} \int_{1/\cos\phi}^2 \rho^2\sin\phi \,\diff\rho \,\diff\phi \,\diff\theta
    = \boxed{\frac{5\pi}{3}}.
$$

(Like before, the hard part of this problem is setting up the integral, so I'm going to omit the full computation.)

</solution>
