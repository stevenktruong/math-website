---
title: Week 2 Discussion Notes
date: "2022-01-11"
tags:
    - double integrals
publish: yes
---

# Week 2 Discussion Notes

## Table of Contents

## Double Integrals

In 1D, the integral represented a (signed) area:

$$
\int_a^b f\p{x} \,\diff{x} = \text{area under } f\p{x} \text{ over } \br{a, b}
$$

<img src="{{ assetsFolder }}/images/single-integral.png" width=80% />

This interpretation of double integrals is basically the same. Instead of area, we have volume:

$$
\iint_\mathscr{D} f\p{x, y} \,\diff{A} = \text{volume under } f\p{x, y} \text{ over } \mathscr{D}
$$

<img src="{{ assetsFolder }}/images/double-integrals.png" width=80% />

You can already see that unlike in 1D, the region you integrate over can get very complicated. In 1D, you mostly integrated over intervals, but in 2D, $\mathscr{D}$ can be a rectangle, a disk, a star, etc. However, despite this, Fubini's theorem tells you that a double integral can be (in a nutshell) calculated as two 1D integrals:

<theorem> Fubini

$$
\begin{aligned}
    \iint_\mathscr{D} f\p{x, y} \,\diff{A}
        &= \iint_\mathscr{D} f\p{x, y} \,\diff{x} \,\diff{y} \\
        &= \iint_\mathscr{D} f\p{x, y} \,\diff{y} \,\diff{x}
\end{aligned}
$$

</theorem>

In other words, Fubini's theorem tells you that you can calculate a double integral as an iterated integral, and that the order of the variables you integrate in doesn't matter.

<example>

Integrate $f\p{x, y} = \p{x + y}^2$ over $\mathscr{R} = \br{0, 2} \times \br{-1, 1}$.

</example>

<solution>

When given a rectangle, the first interval always corresponds to $x$ and the second interval always corresponds to $y$. This gives us the following bounds:

$$
\begin{aligned}
    \iint_\mathscr{R} f\p{x, y} \,\diff{A}
        &= \int_{-1}^1 \int_0^2 \p{x + y}^2 \,\diff{x} \,\diff{y} \\
        &= \int_{-1}^1 \left. \frac{\p{x + y}^3}{3} \right\rvert_{x=0}^{x=2} \,\diff{y} \\
        &= \int_{-1}^1 \frac{\p{y + 2}^3 - y^3}{3} \,\diff{y} \\
        &= \left. \frac{\p{y + 2}^4 - y^4}{12} \right\rvert_{-1}^1 \\
        &= \boxed{\frac{20}{3}}.
\end{aligned}
$$

To illustrate Fubini's theorem, I'll calculate the integral in the other order too:

$$
\begin{aligned}
    \iint_\mathscr{R} f\p{x, y} \,\diff{A}
        &= \int_0^2 \int_{-1}^1 \p{x + y}^2 \,\diff{y} \,\diff{x} \\
        &= \int_0^2 \left. \frac{\p{x + y}^3}{3} \right\rvert_{y=-1}^{y=1} \,\diff{x} \\
        &= \int_0^2 \frac{\p{x + 1}^3 - \p{x - 1}^3}{3} \,\diff{x} \\
        &= \left. \frac{\p{x + 1}^4 - \p{x - 1}^4}{12} \right\rvert_0^2 \\
        &= \frac{20}{3}.
\end{aligned}
$$

</solution>

<example>

Integrate $f\p{x, y} = e^x$ over the region $\mathscr{D}$ bounded by $y = x + 1$, $y = x$, $x = 0$, and $x = 1$.

</example>

<solution>

Unlike the previous example, $\mathscr{D}$ is slightly more complicated than a rectangle. For example, for each $x$ in the interval $\br{0, 1}$, the interval that $y$ lives in changes:

$$
\begin{aligned}
    x = 0 &\implies 0 \leq y \leq 1 \\
    x = 1 &\implies 1 \leq y \leq 2.
\end{aligned}
$$

This means that the bounds of $y$ are a function of $x$:

<img src="{{ assetsFolder }}/images/domain-example.png" width=80% />

For each $x$ in $\br{0, 1}$, $y$ will range over $\br{x, x+1}$, so the integral is

$$
\begin{aligned}
    \iint_\mathscr{D} e^x \,\diff{A}
        &= \int_0^1 \int_x^{x+1} e^x \,\diff{y} \,\diff{x} \\
        &= \int_0^1 \Bigl. ye^x \Bigr\rvert_{y=x}^{y=x+1} \,\diff{x} \\
        &= \int_0^1 e^x \,\diff{x} \\
        &= \boxed{e - 1}.
\end{aligned}
$$

</solution>
