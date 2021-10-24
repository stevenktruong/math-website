---
title: Week 4 Discussion Notes
date: "2021-10-23"
tags:
    - differentiation
    - arc length
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Differentiation

If $\vec{r}\p{t}$ is a curve, then the tangent **vector** to $\vec{r}$ at $t = a$ is $\vec{r}'\p{a}$. On the other hand, the tangent **line** is the line that passes through $\vec{r}\p{a}$ and has direction vector $\vec{r}'\p{a}$, i.e.,

$$
\vec{L}\p{t} = \vec{r}\p{a} + t\vec{r}'\p{a}
$$

is a parametrization of the tangent line.

## Arc Length

Here's a quick mnemonic to remember the arc-length formula:

From 1D, you should recall that $\Delta f \approx f'\p{x} \,\Delta{x}$. This is just a different way to say that the tangent line to $f$ is the best linear approximation to $f$. With vector-valued functions instead, we end up with

$$
\Delta\vec{r} \approx \vec{r}'\p{t} \,\Delta{t}.
$$

If we take lengths and write $s$ for the arc-length function of $\vec{r}$, then

$$
\Delta{s} \approx \norm{\vec{r}'\p{t}} \,\Delta{t}.
$$

So, in the limit, we end up with

$$
\diff{s} = \norm{\vec{r}'\p{t}} \,\diff{t}
\implies s = \int \norm{\vec{r}'\p{t}} \,\diff{t}.
$$

From here, to actually use the formula, you'll also need to plug in the bounds for the integral.
