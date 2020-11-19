---
title: Quiz 1 Solutions
date: "2020-11-19"
publish: yes
---

# Quiz 1 Solutions

## Table of Contents

## Question 1

Which of the following quantities is undefined?

1.  $\sin^{-1}\p{-\frac{1}{2}}$
2.  $\cos^{-1}\p{-2}$
3.  $\csc^{-1}\p{\frac{1}{2}}$
4.  $\csc^{-1}\p{2}$

<solution>

Only (2) and (3) are undefined.

The range of $\sin{x}$ and $\cos{x}$ is $\br{-1, 1}$, so (1) is defined and (2) is undefined. Similarly, the range of $\csc{x}$ is $\p{-\infty, -1} \cup \p{1, \infty}$, so (3) is undefined and (4) is defined.

</solution>

## Question 2

Which of the following statements is true?

1.  $\log_b\p{a} = \frac{\ln{b}}{\ln{a}}$
2.  $\log_b\p{b^a} = a$
3.  $\ln\p{a + b} = \ln\p{a} + \ln{b}$

<solution>

Only (2) is correct.

(1) _looks like_ the change-of-base formula, but the fraction is flipped, so it's false. (2) is true because $\log_b\p{x}$ is the inverse of $b^x$. (3) is false in general; for example, if $a = b = 1$, then

$$
\ln\p{1 + 1} = \ln\p{2} \neq 0 = \ln{1} + \ln{1}.
$$

So the only true statement is (2).

</solution>

## Question 3

Which of the following equals the slope of the tangent to $f\p{x} = \ln\p{\frac{1}{x}}$ at the point $P\p{e, -1}$?

<solution>

The slope of the tangent line is just the derivative of $f\p{x}$ at $x = e$:

$$
f'\p{e}
    = \lim_{h\to0} \frac{f\p{e + h} - f\p{e}}{h}
    = \boxed{\lim_{h\to0} \frac{\ln\p{\frac{1}{e + h}} + 1}{h}}.
$$

</solution>

## Question 4

Compute $\displaystyle \deriv{}{x} 4^{\sin\p{\pi x}}$.

<solution>

By the chain rule,

$$
\begin{aligned}
    \deriv{}{x} 4^{\sin\p{\pi x}}
        &= \ln\p{4} 4^{\sin\p{\pi x}} \cdot \p{\deriv{}{x} \sin\p{\pi x}} \\
        &= \ln\p{4} 4^{\sin\p{\pi x}} \cdot \p{\pi \cos\p{\pi x}} \\
        &= \boxed{4^{\sin\p{\pi x}} \pi\ln\p{4} \cos\p{\pi x}}.
\end{aligned}
$$

</solution>

## Question 5

Compute $\displaystyle \lim_{x\to1^-} x^{1/\p{1-x}}$.

<solution>

This has the indeterminate form $1^\infty$, so we can try to apply L'Hôpital's. Set $y = x^{1/\p{1-x}}$ so that

$$
\lim_{x\to1^-} \ln{y}
    = \lim_{x\to1^-} \frac{\ln{x}}{1 - x}
    \overset{H}{=} \lim_{x\to1^-} \frac{\frac{1}{x}}{-1}
    = -1.
$$

Thus,

$$
\lim_{x\to1^-} x^{1/\p{1-x}}
    = \lim_{x\to1^-} e^{\ln{y}}
    = e^{\lim_{x\to1^-} \ln{y}}
    = e^{-1}
    = \boxed{\frac{1}{e}}.
$$

</solution>
