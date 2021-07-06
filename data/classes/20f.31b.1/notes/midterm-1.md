---
title: Midterm 1 Solutions
date: "2020-11-19"
publish: yes
---

# Midterm 1 Solutions

## Table of Contents

## Question 1

True or false:

1. The line tangent to $f\p{x} = a^x$ at $0$ has a slope equal to $1$ for all $a > 0$ and $a \neq 1$.
2. The graph of the inverse function is the reflection of the graph of $y = f\p{x}$ through the line $y = 0$.

<solution>

(1) is false and (2) is false.

For (1), $f'\p{x} = \ln\p{a} a^x \implies f'\p{0} = \ln\p{a}$, which might not always be $1$, e.g., $a = 4$.

For (2), the graph of the inverse function is the reflection along the line $y = x$, not $y = 0$.

</solution>

## Question 2

Give one example of:

1. A one-to-one and increasing function defined on the interval $\br{-2, 2}$.
2. Two real-valued functions $h$ and $f$ such that $h \ll f$ as $x \to \infty$.

<solution>

For (1), $f\p{x} = x$ (restricted to $\br{-2, 2}$) works.

For (2), $h\p{x} = 1$ and $f\p{x} = x$ works.

</solution>

## Question 3

Consider the function $\displaystyle f\p{x} = \frac{\sqrt{1 - x^2}}{x + 1}$.

1. Find the largest domain on which $f$ is one-to-one and determine a formula for $f^{-1}$.
2. Find $\displaystyle \deriv{}{x} f^{-1}\p{1}$ using the definition of the derivative of $f^{-1}$ and (1).

<solution>

For (1), $f\p{x}$ is only defined on $\left\lparen -1, 1 \right\rbrack$. On this domain, $x > -1 \implies x + 1 > 0$, so

$$
\begin{aligned}
    f'\p{x}
        &= \frac{-x\p{1 - x^2}^{-1/2}\p{x + 1} - \sqrt{1 - x^2}}{\p{x + 1}^2} \\
        &= \frac{-x\p{x + 1} - \p{1 - x^2}}{\p{x + 1}^2\sqrt{1 - x^2}} \\
        &= -\frac{x + 1}{\p{x + 1}^2\sqrt{1 - x^2}} < 0.
\end{aligned}
$$

So, $f\p{x}$ is strictly decreasing on this interval, which means that it's one-to-one on $\left\lparen -1, 1 \right\rbrack$.

For the inverse:

$$
\begin{aligned}
    x &= \frac{\sqrt{1 - y^2}}{y + 1} \\
    xy + x &= \sqrt{1 - y^2} \\
    x^2y^2 + 2x^2y + x^2 &= 1 - y^2 \\
    \p{x^2 + 1}y^2 + 2x^2y + \p{x^2 - 1} &= 0.
\end{aligned}
$$

To solve for $y$, you can use the quadratic formula, so there are two possibilities:

$$
y
    = \frac{-2x^2 \pm \sqrt{4x^4 - 4\p{x^2 + 1}}}{2\p{x^2 + 1}}
    = \frac{-2x^2 \pm 2}{2x^2 + 2}
    = \frac{1 - x^2}{1 + x^2} \quad\text{or}\quad -1.
$$

The domain of $f\p{x}$ doesn't include $-1$, so $-1$ is not possible. Thus,

$$
f^{-1}\p{x} = \boxed{\frac{1 - x^2}{1 + x^2}}.
$$

For (2), there's the formula

$$
\p{f^{-1}}'\p{1}
    = \frac{1}{f'\p{f^{-1}\p{1}}}
    = \frac{1}{f'\p{0}}
    = \boxed{-1}.
$$

I calculated $f'\p{x}$ above.

</solution>

## Question 4

A population is modeled by a function $P = P\p{t}$. Initially, the population counts $1000$. The rate of change of the population is proportional to $P$. Find the population at time $t = 17$ years given that the doubling time is $8$ years.

1. Explain your solving process step-by-step without doing any computation.
2. Show full work.

<solution>

I will omit (1).

If the rate of change of the population is proportional to $P$, then $P$ satisfies $P' = kP$ for some constant $k$. This means that $P\p{t} = P_0 e^{kt}$. We're given that the initial population is $1000$, so $P\p{0} = P_0 = 1000$. The doubling time is $8$ years, which means that after $8$ years, the population doubles to $2000$, so

$$
P\p{8} = 1000 e^{8k} = 2000
    \implies e^{8k} = 2
    \implies k = \frac{\ln{2}}{8}.
$$

Plugging everything in,

$$
P\p{17} = 1000 e^{17\p{\ln{2}}/8} \approx \boxed{4362}.
$$

</solution>

## Question 5

Find the limits using L'Hôpital's rule.

1. $\displaystyle \lim_{t\to1} \p{t - 1}\ln\p{\frac{1}{\p{t - 1}^2}}$.
2. $\displaystyle \lim_{x\to0} \frac{\sin^{-1}\p{2x}}{3x}$.

<solution>

(1) is of the form $0 \cdot \infty$, so

$$
\begin{aligned}
    \lim_{t\to1} \br{\p{t - 1}\ln\p{\frac{1}{\p{t - 1}^2}}}
        &= \lim_{t\to1} \frac{\ln\p{\frac{1}{\p{t - 1}^2}}}{\frac{1}{t - 1}} \\
        &= \lim_{t\to1} \frac{-2\ln\p{t - 1}}{\frac{1}{t - 1}} \\
        &\overset{H}{=} \lim_{t\to1} \frac{-\frac{2}{t - 1}}{-\frac{1}{\p{t - 1}^2}} \\
        &= \lim_{t\to1} 2\p{t - 1} \\
        &= \boxed{0}.
\end{aligned}
$$

(2) has the form $\displaystyle \frac{0}{0}$, so we can use L'Hôpital's directly:

$$
\lim_{x\to0} \frac{\sin^{-1}\p{2x}}{3x}
    \overset{H}{=} \lim_{x\to0} \frac{\frac{2}{\sqrt{1 - 4x^2}}}{3}
    = \lim_{x\to0} \frac{2}{3\sqrt{1 - 4x^2}}
    = \boxed{\frac{2}{3}}.
$$

</solution>

## Question 6

Consider the region $\mathcal{R}$ enclosed by $y = \tan^{-1}{x}$, $y = x$, $x = 0$, and $x = \sqrt{3}$.

1. Sketch the region $\mathcal{R}$.
2. Find the area of $\mathcal{R}$.

<solution>

For (1), the region looks like

<img src="{{ assetsFolder }}/images/area-r.png" width="800px">

So for (2), you get

$$
\int_0^{\sqrt{3}} x - \tan^{-1}{x} \,\diff{x}.
$$

To calculate $\int \tan^{-1}{x} \,\diff{x}$, you can integrate by parts with $u = \tan^{-1}{x}$ and $\diff{v} = \diff{x}$, which gives

$$
\diff{u} = \frac{\diff{x}}{1 + x^2} \,\diff{x}
\quad\text{and}\quad
v = x.
$$

So,

$$
\int \tan^{-1}{x} \,\diff{x}
    = x\tan^{-1}{x} - \int \frac{x}{1 + x^2} \,\diff{x}
    = x\tan^{-1}{x} - \frac{1}{2}\ln\p{1 + x^2} + C.
$$

The area is then given by

$$
\begin{aligned}
    \int_0^{\sqrt{3}} x - \tan^{-1}x \,\diff{x}
        &= \left. \p{\frac{x^2}{2} - x\tan^{-1}{x} + \frac{1}{2}\ln\p{1 + x^2}} \right\rvert_0^{\sqrt{3}} \\
        &= \frac{3}{2} - \sqrt{3}\tan^{-1}\sqrt{3} + \frac{1}{2}\ln{4} \\
        &= \frac{3}{2} - \frac{\pi\sqrt{3}}{3} + \frac{\ln{2^2}}{2} \\
        &= \boxed{\frac{9 - 2\pi\sqrt{3}}{6} - \ln{2}}.
\end{aligned}
$$

</solution>
