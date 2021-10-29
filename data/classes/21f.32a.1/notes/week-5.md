---
title: Week 5 Discussion Notes
date: "2021-10-28"
tags:
    - curvature
publish: yes
---

# Week 5 Discussion Notes

## Table of Contents

## Notation

Here's a quick table with the main definitions/notation used:

$$
\def\arraystretch{1.5}
\begin{array}{cll}
    \hline
    \text{quantity} &\hspace{1em}& \text{description} \\\hline
    \vec{r}\p{t}
        && \text{position} \\
    \vec{r}'\p{t}
        && \text{velocity} \\
    \norm{\vec{r}'\p{t}}
        && \text{speed} \\
    \displaystyle s\p{t} = \int_a^t \norm{\vec{r}'\p{u}} \,\diff{u}
        && \text{arc length} \\[2ex]
    \displaystyle \vec{T}\p{t} = \frac{\vec{r}'\p{t}}{\norm{\vec{r}'\p{t}}} = \deriv{\vec{r}}{s}
        && \text{unit tangent} \\[2ex]
    \displaystyle \vec{N}\p{t} = \frac{\vec{T}'\p{t}}{\norm{\vec{T}'\p{t}}}
        && \text{unit normal} \\[3.5ex]
    \hline
\end{array}
$$

## Formulas for Curvature

Normally, to calculate the curvature $\kappa$ from the definition, you need to calculate $\deriv{\vec{T}}{s}$, which would involve finding the arc-length parametrization. However, using the chain rule, there are formulas that let you calculate it straight from any parametrization $\vec{r}\p{t}$:

$$
\begin{gathered}
    \kappa\p{t}
        = \norm{\deriv{\vec{T}}{\vec{s}}}
        = \norm{\deriv{\vec{T}}{\vec{t}} \deriv{t}{s}}
        = \frac{1}{\norm{\vec{r}'\p{t}}} \norm{\deriv{\vec{T}}{\vec{t}}} \\
    \kappa\p{t}
        = \frac{\norm{\vec{r}'\p{t} \times \vec{r}''\p{t}}}{\norm{\vec{r}'\p{t}}^3}
\end{gathered}
$$

Generally, the second one is more useful, but sometimes the calculation using the first one is easier. Either way, you'll get the same answer.

### Other Formulas

If you read the book, there are other formulas for curvature, but they're all special cases of the second formula above. For example, if you have a parametrization $\ang{x\p{t}, y\p{t}}$, the book tells you the curvature is

$$
\kappa\p{t} = \frac{\abs{x'\p{t}y''\p{t} - y'\p{t}x''\p{t}}}{\p{x'\p{t}^2 + y'\p{t}^2}^{3/2}}.
$$

To derive it, all you have to do is set $\vec{r}\p{t} = \ang{x\p{t}, y\p{t}, 0}$ and plug it into the formula:

$$
\begin{aligned}
    \vec{r}'\p{t} &= \ang{x'\p{t}, y'\p{t}} \\
    \vec{r}''\p{t} &= \ang{x''\p{t}, y''\p{t}},
\end{aligned}
$$

and we get

$$
\begin{aligned}
    \norm{\vec{r}'\p{t}}
        &= \p{x'\p{t}^2 + y'\p{t}^2}^{1/2} \\
    \norm{\vec{r}'\p{t} \times \vec{r''}\p{t}}
        &= \norm{\ang{0, 0, x'\p{t}y''\p{t} - y'\p{t}x''\p{t}}} \\
        &= \abs{x'\p{t}y''\p{t} - y'\p{t}x''\p{t}}.
\end{aligned}
$$

Putting it all together,

$$
\kappa\p{t}
    = \frac{\norm{\vec{r}'\p{t} \times \vec{r}''\p{t}}}{\norm{\vec{r}'\p{t}}^3}
    = \frac{\abs{x'\p{t}y''\p{t} - y'\p{t}x''\p{t}}}{\p{x'\p{t}^2 + y'\p{t}^2}^{3/2}}.
$$
