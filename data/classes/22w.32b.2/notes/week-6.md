---
title: Week 6 Discussion Notes
date: "2022-02-10"
tags:
    - line integrals
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Line Integrals

Line integrals are usually of the form

$$
\int_{\mathscr{C}} f\p{x, y, z} \,\diff{s}
\quad\text{or}\quad
\int_{\mathscr{C}} \vec{F}\p{x, y, z} \cdot \diff{\vec{r}}
\quad\text{or}\quad
\int_{\mathscr{C}} F_1 \,\diff{x} + F_2 \,\diff{y} + F_3 \,\diff{z},
$$

where $\mathscr{C}$ is a curve. To calculate these, there are three main steps:

1. Parametrize $\mathscr{C}$, which gives you a parametrization $\vec{r}\p{t} = \ang{x\p{t}, y\p{t}, z\p{t}}$.

2. Plug in $\vec{r}\p{t}$ into the integrand, differential, and bounds.

    To plug in $\vec{r}\p{t}$ into the integrand, you replace $x$ with $x\p{t}$, $y$ with $y\p{t}$, and $z$ with $z\p{t}$ to get $f\p{\vec{r}\p{t}}$ or $\vec{F}\p{\vec{r}\p{t}}$.

    For the differential, it's basically like a $u$-substitution from 1D: $u = u\p{x} \implies \diff{u} = u'\p{x} \,\diff{x}$, but instead, you can have vector quantities:

    $$
    \vec{r} = \vec{r}\p{t}
    \implies \diff{\vec{r}} = \vec{r}'\p{t} \,\diff{t} \quad\text{and}\quad \diff{s} = \norm{\vec{r}'\p{t}} \,\diff{t}.
    $$

    For the third line integral above, though, it will look slightly different:

    $$
    \begin{aligned}
        x = x\p{t}
            &\implies \diff{x} = x'\p{t} \,\diff{t} \\
        y = y\p{t}
            &\implies \diff{y} = y'\p{t} \,\diff{t} \\
        z = z\p{t}
            &\implies \diff{z} = z'\p{t} \,\diff{t}.
    \end{aligned}
    $$

    The bounds will depend on the parametrization, too.

3. Integrate like normal.

<example>

Compute

$$
\int_{\mathscr{C}} \ang{1 + x^2, xy^2} \cdot \diff{\vec{r}},
$$

where $\mathscr{C}$ is the line segment from $\p{0, 0}$ to $\p{1, 3}$.

</example>

<solution>

You can always parametrize line segments like so:

$$
\vec{r}\p{t}
    = \p{1 - t}\ang{0, 0} + t\ang{1, 3}
    = \ang{t, 3t},
\quad 0 \leq t \leq 1.
$$

Note that $\vec{r}\p{0} = \ang{0, 0}$ and $\vec{r}\p{1} = \ang{1, 3}$, so this is the correct direction ($\mathscr{C}$ starts at $\p{0, 0}$ and ends at $\p{1, 3}$).

Now we just plug everything in:

$$
\begin{gathered}
    \vec{F}\p{\vec{r}\p{t}}
        = \ang{1 + t^2, t \cdot \p{3t}^2}
        = \ang{1 + t^2, 9t^3} \\
    \diff\vec{r} = \ang{1, 3} \,\diff{t},
\end{gathered}
$$

which gives

$$
\begin{aligned}
    \int_{\mathscr{C}} \ang{1 + x^2, xy^2} \cdot \diff{\vec{r}}
        &= \int_0^1 \ang{1 + t^2, 9t^3} \cdot \ang{1, 3} \,\diff{t} \\
        &= \int_0^1 1 + t^2 + 27t^3 \,\diff{t} \\
        &= \boxed{\frac{97}{12}}.
\end{aligned}
$$

(Like with double/triple integrals, the hardest part is almost always just setting it up, i.e., the first equals sign above was the hardest step.)

</solution>
