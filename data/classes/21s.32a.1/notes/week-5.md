---
title: Week 5 Discussion Notes
date: "2020-04-30"
tags:
    - arc length
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Arc Length

Here's a mnemonic to help you remember the formula for arc length: from calculus, you should recognize the "formula"

$$
\Delta f \approx f'\p{t} \,\Delta t.
$$

This still works for vector functions:

$$
\Delta \vec{r} \approx \vec{r}'\p{t} \,\Delta t
\implies \Delta s \approx \norm{\vec{r}'\p{t}} \,\Delta t,
$$

after taking magnitudes. Thus, this becomes

$$
\diff{s} = \norm{\vec{r}'\p{t}} \,\diff{t}
\implies L = \int_0^L \diff{s} = \int_a^b \norm{\vec{r}'\p{t}} \,\diff{t}
$$

after integrating both sides. This should hopefully give a little intuition on why arc length is defined the way it is.

## Arc Length Parametrization

A big source of confusion for me when I first learned the material is the difference between $t$ and $s$. This is because when we write $\vec{r}'\p{s}$, we really mean $\deriv{\vec{r}}{s}\p{s}$ and **not** $\deriv{\vec{r}}{t}\p{s}$ (notice that the first derivative is taken with respect to arc length, $s$, instead of $t$).

The distinction is really important when doing certain calculations. For example, to calculate curvature, you have

$$
\kappa
    = \norm{\deriv{\vec{T}}{s}}
    \neq \norm{\deriv{\vec{T}}{t}}.
$$

If you want to use the $t$-derivative to calculate arc length, then you will want to sue the chain rule instead:

$$
\kappa
    = \norm{\deriv{\vec{T}}{s}}
    = \norm{\deriv{\vec{T}}{t} \deriv{t}{s}}
    = \frac{\norm{\deriv{\vec{T}}{t}}}{\norm{\vec{r}'}}.
$$
