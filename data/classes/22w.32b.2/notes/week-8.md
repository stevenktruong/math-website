---
title: Week 8 Discussion Notes
date: "2022-02-22"
tags:
    - Green's Theorem
publish: yes
---

# Week 8 Discussion Notes

## Table of Contents

## Green's Theorem

<theorem>

Let $\mathscr{D}$ be a domain whose boundary, denoted $\partial\mathscr{D}$, is a simple closed curve (i.e., a loop that doesn't intersect itself) oriented counter-clockwise. If $F_1$ and $F_2$ are continuously differentiable in an open set containing $\mathscr{D}$, then

$$
\oint_{\partial\mathscr{D}} F_1 \,\diff{x} + F_2 \,\diff{y} = \iint_{\mathscr{D}} \pderiv{F_2}{x} - \pderiv{F_1}{y} \,\diff{A}
$$

or equivalently,

$$
\oint_{\partial\mathscr{D}} \vec{F} \cdot \diff\vec{r} = \iint_{\mathscr{D}} \curl_z{\vec{F}} \,\diff{A}.
$$

</theorem>

Green's Theorem is a **fundamental theorem of calculus**. Compare it with the fundamental theorem of calculus in 1D:

$$
\int_a^b f'\p{x} \,\diff{x} = f\p{b} - f\p{a}
$$

This relates an integral of a derivative on the whole domain ($f'$ on the interval $\br{a, b}$) to an "integral" on the boundary of the function ($f$ at the points $a$ and $b$).

Green's Theorem is a generalization of this: it relates an integral of a "derivative" on the whole domain ($\curl_z{\vec{F}}$ on $\mathscr{D}$) to an integral of the function on the boundary ($\vec{F}$ on $\partial\mathscr{D}$). Every integral theorem we'll see in this class (i.e., Stokes' Theorem and the divergence theorem) will be in this form.

<example>

Using Green's Theorem, calculate $\displaystyle\oint_{\mathscr{C}} x^2y \,\diff{x}$ where $\mathscr{C}$ is the unit circle centered at the origin oriented counterclockwise.

</example>

<solution>

In this problem, $\mathscr{C} = \partial\mathscr{D}$, where $\mathscr{D}$ is the unit ball:

<img src="{{ assetsFolder }}/images/boundary-disk.png" width=40%>

Also, $F_1 = x^2y$ and $F_2 = 0$, so Green's Theorem tells us

$$
\begin{aligned}
    \oint_{\mathscr{C}} x^2y \,\diff{x}
        &= \iint_{\mathscr{D}} -\pderiv{}{y} \p{x^2y} \,\diff{A} \\
        &= \iint_{\mathscr{D}} -x^2 \,\diff{A} \\
        &= \int_0^{2\pi} \int_0^1 -r^2\cos^2\theta \cdot r \,\diff{r} \,\diff\theta \\
        &= \boxed{-\frac{\pi}{4}}.
\end{aligned}
$$

(As usual, the hardest part of the problem was figuring out which integral you need to calculate, i.e., figuring out how to use Green's Theorem.)

</solution>

<example>

Let $\mathscr{D}$ be the domain and $\mathscr{C}_1, \mathscr{C}_2$ be the curves in the following figure:

<img src="{{ assetsFolder }}/images/greens-theorem-1.png" width=80%>

Assume that

$$
\oint_{\mathscr{C}_2} \vec{F} \cdot \diff\vec{r} = 12
\quad\text{and}\quad
\pderiv{F_2}{x} - \pderiv{F_1}{y} = -3 \text{ on } \mathscr{D}.
$$

Using Green's Theorem, calculate $\oint_{\mathscr{C}_1} \vec{F} \cdot \diff\vec{r}$.

</example>

<solution>

In our statement of Green's Theorem, we need $\partial\mathscr{D}$ to be a single simple closed curve, but in this problem, $\partial\mathscr{D}$ comprises of two such curves: $\partial\mathscr{D} = \mathscr{C}_1 - \mathscr{C}_2$. So, we can't apply Green's Theorem right away, but we can use the following trick: divide $\mathscr{D}$ like so:

<img src="{{ assetsFolder }}/images/greens-theorem-2.png" width=80%>

We can apply Green's Theorem on both halves $\mathscr{D}_1$ and $\mathscr{D}_2$ of the domain to get

$$
\begin{aligned}
    \iint_{\mathscr{D}_1} \pderiv{F_2}{x} - \pderiv{F_1}{y} \,\diff{A}
        &= \oint_{\partial\mathscr{D}_1} \vec{F} \cdot \diff\vec{r} \\
    \iint_{\mathscr{D}_2} \pderiv{F_2}{x} - \pderiv{F_1}{y} \,\diff{A}
        &= \oint_{\partial\mathscr{D}_2} \vec{F} \cdot \diff\vec{r}.
\end{aligned}
$$

Notice also that $\partial\mathscr{D}_1 + \partial\mathscr{D}_2 = \partial\mathscr{D} = \mathscr{C}_1 - \mathscr{C}_2$, so if we add everything up,

$$
\iint_{\mathscr{D}} \pderiv{F_2}{x} - \pderiv{F_1}{y} \,\diff{A}
    = \oint_{\mathscr{C}_1} \vec{F} \cdot \diff\vec{r} - \oint_{\mathscr{C}_2} \vec{F} \cdot \diff\vec{r}.
$$

Plugging in the numbers we know, we get

$$
\begin{aligned}
    \oint_{\partial\mathscr{C}_1} \vec{F} \cdot \diff\vec{r}
        &= \iint_{\mathscr{D}} \pderiv{F_2}{x} - \pderiv{F_1}{y} \,\diff{A} + \oint_{\partial\mathscr{C}_2} \vec{F} \cdot \diff\vec{r} \\
        &= \iint_{\mathscr{D}} -3 \,\diff{A} + 12 \\
        &= -3 \cdot \operatorname{area}\p{\mathscr{D}} + 12 \\
        &= \boxed{-3\p{60 - 4\pi} + 12}.
\end{aligned}
$$

</solution>
