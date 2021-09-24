---
title: Week 0 Discussion Notes
date: "2021-09-24"
tags:
    - trig
    - calculus
publish: yes
---

# Week 0 Discussion Notes

## Table of Contents

## Trig

### Unit Circle

The unit circle is a circle with radius $1$. If we have an angle $\theta$, we can draw this picture:

<img src="{{ assetsFolder }}/images/unit-circle.png" width=75% />

In the image above, the coordinate of the black dot is $\p{\cos\theta, \sin\theta}$ _by definition_. Once you have $\cos\theta$ and $\sin\theta$, we can define every other trig function that we care about:

$$
\begin{aligned}
    \tan\theta &= \frac{\sin\theta}{\cos\theta} \\
    \sec\theta &= \frac{1}{\cos\theta} \\
    \csc\theta &= \frac{1}{\sin\theta} \\
    \cot\theta &= \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}
\end{aligned}
$$

So the moral of the story is that if you know what to do with $\cos\theta$ and $\sin\theta$, you essentially know what to do with every trig function.

<example>

Calculate $\tan\frac{2\pi}{3}$.

</example>

<solution>

If you're not comfortable with radians, it'll be helpful to convert things to degrees (though I recommend that you try to get comfortable with radians eventually). $2\pi~\mathrm{rad} = 360^\circ$ (both represent one full rotation), so

$$
\frac{2\pi}{3}~\mathrm{rad} \cdot \frac{360^\circ}{2\pi~\mathrm{rad}}
    = 120^\circ.
$$

This gives us the following triangle:

<img src="{{ assetsFolder }}/images/trig-calc.png" width=100% />

This is a $30, 60, 90$ triangle, which has ratios $1, \sqrt{3}, 2$. Since the hypotenuse is $1$, we need to divide everything by $2$ to get the lengths of the sides of the triangle: $\frac{1}{2}, \frac{\sqrt{3}}{2}, 1$. So, the coordinate of the point is $\p{-\frac{1}{2}, \frac{\sqrt{3}}{2}}$, which means

$$
\begin{aligned}
    \cos\frac{2\pi}{3} &= -\frac{1}{2} \\
    \sin\frac{2\pi}{3} &= \frac{\sqrt{3}}{2}.
\end{aligned}
$$

Looking at the definition above, we can calculate $\tan\frac{2\pi}{3}$ from these:

$$
\tan\frac{2\pi}{3}
    = \frac{\sin\frac{2\pi}{3}}{\cos\frac{2\pi}{3}}
    = \frac{\frac{\sqrt{3}}{2}}{-\frac{1}{2}}
    = \boxed{-\sqrt{3}}.
$$

</solution>

### Identities

From the first picture above, we can use the Pythagorean theorem to get

$$
\cos^2\theta + \sin^2\theta = 1^2.
$$

If we divide everything by $\cos^2\theta$, we then get

$$
1 + \frac{\sin^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta}
\iff \tan^2\theta + 1 = \sec^2\theta.
$$

Similarly, if we divide everything by $\sin^2\theta$, we get the identity

$$
\cot^2\theta + 1 = \csc^2\theta.
$$

These are called the **Pythagorean identities** because they all come from the Pythagorean theorem. In addition to these, we have the double-angle identities:

$$
\begin{aligned}
    \sin{2\theta} &= 2\sin\theta\cos\theta \\
    \cos{2\theta}
        &= 2\cos^2\theta - 1 \\
        &= 1 - 2\sin^2\theta.
\end{aligned}
$$

The first one isn't super useful, but the second one is. If we solve for $\cos^2\theta$ and $\sin^2\theta$, we get

$$
\begin{aligned}
    \cos^2\theta &= \frac{1 + \cos{2\theta}}{2} \\
    \sin^2\theta &= \frac{1 - \cos{2\theta}}{2}.
\end{aligned}
$$

These are _very_ useful identities. When my previous students were stuck on a trig-related integral, these identities were usually what they were missing.

## Calculus

### Differentiation

For this section, I basically followed [my notes from a previous class](../../20f.31b.1/review) up to the Integration section. I added a few examples, though:

<example>

Let $f\p{x} = x^2$. Calculate $f'\p{x}$ using the definition.

</example>

<solution>

We can essentially plug everything into the formula for the definition and simplify:

$$
\begin{aligned}
    f'\p{x}
        &= \lim_{h\to0} \frac{f\p{x + h} - f\p{x}}{h} \\
        &= \lim_{h\to0} \frac{\p{x + h}^2 - x^2}{h} \\
        &= \lim_{h\to0} \frac{x^2 + 2xh + h^2 - x^2}{h} \\
        &= \lim_{h\to0} \frac{2xh + h^2}{h} \\
        &= \lim_{h\to0} \frac{h\p{2x + h}}{h} \\
        &= \lim_{h\to0} \p{2x + h} \\
        &= 2x.
\end{aligned}
$$

For the last "$=$" sign, I used the fact that $2x + h$ is continuous when $h$ is the variable.

</solution>

<example>

Prove the quotient rule from the product and chain rules.

</example>

<solution>

First, I'm going to let $h\p{x} = \frac{1}{x}$ so that

$$
h\p{g\p{x}} = \frac{1}{g\p{x}}
\quad\text{and}\quad
h'\p{x} = -\frac{1}{x^2}.
$$

Then

$$
\begin{aligned}
    \deriv{}{x} \frac{f\p{x}}{g\p{x}}
        &= \deriv{}{x} \p{f\p{x} \cdot \frac{1}{g\p{x}}} \\
        &= \deriv{}{x} \p{f\p{x} \cdot h\p{g\p{x}}} \\
        &= f'\p{x}h\p{g\p{x}} + f\p{x}\p{\deriv{}{x} h\p{g\p{x}}}
            && \p{\text{product rule}} \\
        &= f'\p{x}h\p{g\p{x}} + f\p{x}h'\p{g\p{x}}g'\p{x}
            && \p{\text{chain rule}} \\
        &= f'\p{x} \cdot \frac{1}{g\p{x}} + f\p{x}\p{-\frac{1}{\br{g\p{x}}^2}}g'\p{x} \\
        &= \frac{f'\p{x}}{g\p{x}} \cdot \frac{g\p{x}}{g\p{x}} - \frac{f\p{x}g'\p{x}}{\br{g\p{x}}^2} \\
        &= \frac{f'\p{x}g\p{x} - f\p{x}g'\p{x}}{\br{g\p{x}}^2}.
\end{aligned}
$$

</solution>
