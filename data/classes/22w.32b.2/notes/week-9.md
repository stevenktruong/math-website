---
title: Week 9 Discussion Notes
date: "2022-03-01"
tags:
    - surface integral
publish: yes
---

# Week 9 Discussion Notes

## Table of Contents

## Surface Integrals

Surface integrals are similar to line integrals: line integrals are integrals on 1D curves, and surface integrals are integrals on 2D "curves" (i.e., on 2D surfaces). The steps for calculating a surface integral are basically the same, except things are harder just because surfaces live in 3D space.

A vector surface integral is called a **flux integral** and looks like

$$
\iint_{\mathscr{S}} \vec{F} \cdot \diff\vec{S}
$$

where $\mathscr{S}$ is an oriented surface, and the steps to calculate one are:

1. Parametrize $\mathscr{S}$ via a function $G\p{u, v}$ with domain $\mathscr{D}$.

2. Calculate the normal vector $\vec{N}\p{u, v}$, which is either

    $$
    G_u \times G_v \quad\text{or}\quad G_v \times G_u
    $$

    depending on the orientation of $\mathscr{S}$. (Note that $G_u \times G_v = -G_v \times G_u$, so based on the orientation, you may or may not need to multiply your cross product by $-1$.)

3. Plug in everything to get a 2D integral:

    $$
    \iint_{\mathscr{S}} \vec{F} \cdot \diff{\vec{S}}
        = \iint_{\mathscr{D}} \vec{F}\p{G\p{u, v}} \cdot \vec{N}\p{u, v} \,\diff{u} \,\diff{v}.
    $$

4. Integrate like normal.

<example>

Calculate $\displaystyle\iint_{\mathscr{S}} \vec{F} \cdot \diff\vec{S}$, with $\vec{F}\p{x, y, z} = \ang{0, 3, x}$ and $\mathscr{S}$ is the part of the sphere $x^2 + y^2 + z^2 = 9$ where $x \geq 0$, $y \geq 0$, and $z \geq 0$, with outward pointing normal.

</example>

<solution>

First, we need to parametrize this region. Since it's a part of a sphere, we can base our parametrization on spherical coordinates:

$$
G\p{\theta, \phi} = \ang{\rho\sin\phi\cos\theta, \rho\sin\phi\sin\theta, \rho\cos\phi}
$$

The sphere has radius $3$, so $\rho = 3$. To get $x \geq 0$ and $y \geq 0$, we need $0 \leq \theta \leq \frac{\pi}{2}$, and to get $z \geq 0$, we need $0 \leq \phi \leq \frac{\pi}{2}$, so the parametrization is

$$
\begin{cases}
    G\p{\theta, \phi} = \ang{3\sin\phi\cos\theta, 3\sin\phi\sin\theta, 3\cos\phi}, \\
    \mathscr{D} = \set{\p{\theta, \phi} \st 0 \leq \theta \leq \frac{\pi}{2},\ 0 \leq \phi \leq \frac{\pi}{2}}.
\end{cases}
$$

Next, let's calculate $\vec{N}$:

$$
\begin{aligned}
    G_\theta
        &= \ang{-3\sin\phi\sin\theta, 3\sin\phi\cos\theta, 0} \\
    G_\phi
        &= \ang{3\cos\phi\cos\theta, 3\cos\phi\sin\theta, -3\sin\phi} \\
    G_\theta \times G_\phi
        &= \ang{-9\sin^2\phi\cos\theta, -9\sin^2\phi\sin\theta, -9\sin\phi\cos\phi}
\end{aligned}
$$

To figure out what $\vec{N}$ is, we need to figure out whether $G_\theta \times G_\phi$ points inwards or outwards, which we can do by just testing it at a point. We can test it at the point $\p{x, y, z} = \p{3, 0, 0}$, which corresponds to $\p{\theta, \phi} = \p{0, \frac{\pi}{2}}$, so

$$
G_\theta\p{0, \frac{\pi}{2}} \times G_\phi\p{0, \frac{\pi}{2}}
    = \ang{-9, 0, 0},
$$

which points inwards. This means we need to reverse it to get an outward pointing normal, i.e.,

$$
\vec{N}
    = -G_\theta \times G_\phi
    = \ang{9\sin^2\phi\cos\theta, 9\sin^2\phi\sin\theta, 9\sin\phi\cos\phi}.
$$

Finally, we just plug everything in:

$$
\begin{aligned}
    \iint_{\mathscr{S}} \vec{F} \cdot \diff\vec{S}
        &= \iint_{\mathscr{D}} \vec{F}\p{G\p{\theta, \phi}} \cdot \vec{N}\p{\theta, \phi} \,\diff\theta \,\diff\phi \\
        &= \int_0^{\frac{\pi}{2}} \int_0^{\frac{\pi}{2}} \ang{0, 3, 3\sin\phi\cos\theta} \cdot \ang{9\sin^2\phi\cos\theta, 9\sin^2\phi\sin\theta, 9\sin\phi\cos\phi} \,\diff\theta \,\diff\phi \\
        &= \int_0^{\frac{\pi}{2}} \int_0^{\frac{\pi}{2}} 27\sin^2\phi\sin\theta + 26\sin^2\phi\cos\phi\cos\theta \,\diff\theta \,\diff\phi \\
        &= \boxed{\frac{27}{12}\p{3\pi + 4}}.
\end{aligned}
$$

(Like always, the hardest part of the problem is getting to the second line, i.e., writing down the exact integral you need to calculate.)

</solution>
