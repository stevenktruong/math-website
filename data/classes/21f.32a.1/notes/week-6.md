---
title: Week 6 Discussion Notes
date: "2021-11-07"
tags:
    - traces
    - limits
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Traces

A **vertical trace** of a surface $z = f\p{x, y}$ is its intersection with a plane of the form $x = a$ or $y = b$. A **horizontal trace** is its intersection with a plane of the form $z = c$.

<example>

Describe the traces of $z = x^2 + 2y^2$.

</example>

<solution>

**$x = a$:**

We can just substitute $x = a$ into the equation of the surface to get

$$
z = a^2 + 2y^2.
$$

$a$ is fixed, so this tells us that this trace is a parabola opening upwards, and $a$ simply translates the parabola:

<img src="{{ assetsFolder }}/images/x=a.png" width=80%>

**$y = b$:**

Similarly,

$$
z = x^2 + 2b^2,
$$

so we still get a parabola, but increasing $b$ shifts the parabola more than the above:

<img src="{{ assetsFolder }}/images/y=b.png" width=80%>

**$z = c$:**

This one is a little different from previous ones:

$$
c = x^2 + 2y^2.
$$

Before, the traces gave us one variable as a function of the other, e.g., $z = g\p{x}$ and $z = g\p{y}$. For this one, you can't solve for $x$ or $y$ without breaking things up into cases (i.e., without writing $\pm$ everywhere). But the equation is still something familiar to us: it's the equation of an ellipse:

<img src="{{ assetsFolder }}/images/z=c.png" width=80%>

</solution>

## Limits

When dealing with limits, there are essentially two different problems:

1. You need to show a limit does not exist.
    - You can try to find different limits along different paths.
2. You need to calculate a limit.
    - You can try to plug in numbers using continuity.
    - You can try the squeeze theorem.

<example>

Determine whether the following limit exists or not. If it does, calculate the limit.

$$
\lim_{\p{x,y}\to\p{0,0}} \frac{xy}{3x^2 + 2y^2}
$$

</example>

<solution>

Generally, you want to try a couple paths to get a feel for the problem. If you find two different limits, then the limit doesn't exist, but if every path you try gives you the same answer, you might want to start proving that the limit exists.

I usually try the following paths first: a horizontal line, a vertical line, or a $45^\circ$ line.

**Horizontal line through $\p{0, 0}$:**

You can parametrize this by $\p{x, 0}$, so the limit on this path becomes

$$
\lim_{x\to0} \frac{0}{3x^2}
    = \lim_{x\to0} 0
    = 0.
$$

**Vertical line through $\p{0, 0}$:**

This is $\p{0, y}$, so you get

$$
\lim_{y\to0} \frac{0}{2y^2}
    = \lim_{y\to0} 0
    = 0.
$$

**$45^\circ$ line through $\p{0, 0}$:**

The path is $\p{x, x}$, so you end up with

$$
\lim_{x\to0} \frac{x^2}{3x^2 + 2x^2}
    = \lim_{x\to0} \frac{1}{5}
    = \frac{1}{5}.
$$

We found two paths where the limits don't agree: $\p{x, 0}$ gives $0$ but $\p{x, x}$ gives $\frac{1}{5}$, so

$$
\lim_{\p{x,y}\to\p{0,0}} \frac{xy}{3x^2 + 2y^2} = \boxed{\dne}.
$$

</solution>

<example>

Determine whether the following limit exists or not. If it does, calculate the limit.

$$
\lim_{\p{x,y}\to\p{0,0}} \sqrt{x^2 + y^2} \sin\p{\frac{e^{1/x}}{y}}
$$

</example>

<solution>

Usually, if you see sines or cosines, you can try the squeeze theorem since

$$
\abs{\sin{\theta}} \leq 1
$$

for any $\theta$. In our problem, we get

$$
\begin{aligned}
    0
         \leq \abs{\sqrt{x^2 + y^2} \sin\p{\frac{e^{1/x}}{y}}}
        &= \sqrt{x^2 + y^2} \abs{\sin\p{\frac{e^{1/x}}{y}}} \\
        &\leq \sqrt{x^2 + y^2} \\
        &\xrightarrow{\p{x,y}\to\p{0,0}} 0,
\end{aligned}
$$

since $\sqrt{x^2 + y^2}$ is continuous at $\p{0, 0}$. So, by the squeeze theorem,

$$
\lim_{\p{x,y}\to\p{0,0}} \sqrt{x^2 + y^2} \sin\p{\frac{e^{1/x}}{y}}
    = \boxed{0}.
$$

</solution>
