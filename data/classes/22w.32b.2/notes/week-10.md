---
title: Week 10 Discussion Notes
date: "2022-03-10"
tags:
    - divergence theorem
publish: yes
---

# Week 10 Discussion Notes

## Table of Contents

## Divergence Theorem

Recall Stokes' Theorem:

$$
\iint_{\mathscr{S}} \p{\nabla \times \vec{F}} \cdot \diff\vec{S}
    = \oint_{\partial\mathscr{S}} \vec{F} \cdot \diff\vec{r}
$$

This relates an integral on the surface to an integral on the boundary. The divergence theorem has a similar form:

$$
\iiint_{\mathscr{W}} \nabla \cdot \vec{F} \,\diff{V}
    = \oiint_{\partial\mathscr{W}} \vec{F} \cdot \diff\vec{S}
$$

It relates an integral on a solid region to an integral on the boundary.

These theorems are helpful since many times, a region or surface is complicated, but its boundary is very simple or vice versa. For example, the boundary of a (solid) cube is complicated since it's made up of $6$ different surfaces, but the cube itself is a simple region to integrate over.

<example>

Let $\mathscr{W}$ be the region between the sphere of radius $4$ and the cube of side length $1$, both centered at the origin. Calculate the flux through the boundary $\mathscr{S} = \partial\mathscr{W}$ of a vector field $\vec{F}$ whose divergence has constant value $\nabla \cdot \vec{F} = -4$.

</example>

<solution>

At first, the problem looks like it shouldn't be possible since we don't have a formula for $\vec{F}$. However, because of the divergence theorem, we actually have enough information to do this problem:

$$
\begin{aligned}
    \iint_{\partial\mathscr{W}} \vec{F} \cdot \diff\vec{S}
        &= \iiint_{\mathscr{W}} \nabla \cdot \vec{F} \,\diff{V} \\
        &= \iiint_{\mathscr{W}} -4 \,\diff{V} \\
        &= -4 \cdot \operatorname{vol}\p{\mathscr{W}} \\
        &= \boxed{-4 \cdot \p{\frac{4}{3} \pi \cdot 4^3 - 1}}.
\end{aligned}
$$

</solution>
