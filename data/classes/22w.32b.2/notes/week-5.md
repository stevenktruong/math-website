---
title: Week 5 Discussion Notes
date: "2022-02-03"
tags:
    - potential functions
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Potential Functions

A **potential function** for a vector-valued function $\vec{F}$ is a scalar-valued function $f$ such that

$$
\nabla f = \ang{f_x, f_y, f_z} = \vec{F}.
$$

<example>

Find a potential function for $\vec{F} = \ang{yz, xz, y}$ or show that one doesn't exist.

</example>

<solution>

When approaching these types of problems, the first thing you should do is check the mixed partials. If there _were_ a potential function $f$, then we would need to have

$$
f_z = y
\quad\text{and}\quad
f_x = yz.
$$

But this would mean

$$
f_{zx} = 0
\quad\text{and}\quad
f_{xz} = y,
$$

which contradicts Clairaut's theorem. This means that no potential function exists.

</solution>

<example>

Find a potential function for $\vec{F} = \ang{2xze^{x^2}, 0, e^{x^2}}$ or show that one doesn't exist.

</example>

<solution>

Like before, you can check all the mixed partials, and you'll see that they actually agree. For example,

$$
\pderiv{}{x} e^{x^2} = 2xe^{x^2}
\quad\text{and}\quad
\pderiv{}{z} 2xze^{x^2} = 2xe^{x^2}.
$$

When t his happens, you'll want to start looking for a potential function, and you can usually just eyeball it. For example, $f_z = e^{x^2}$, so $f$ would need to look something like $ze^{x^2}$, and this works.

$$
\boxed{f\p{x, y, z} = ze^{x^2}}
$$

</solution>
