---
title: Quiz 2 Solutions
date: "2020-11-19"
publish: yes
---

# Quiz 2 Solutions

## Table of Contents

## Question 1

Which integral(s) will give the area of a circle of radius $a$?

1.  $\displaystyle \int_0^a \p{a^2 - x^2} \,\diff{x}$
2.  $\displaystyle \int_0^{2\pi} \sqrt{a^2 - x^2} \,\diff{x}$
3.  $\displaystyle 4\int_0^a \sqrt{a^2 - x^2} \,\diff{x}$
4.  $\displaystyle 4\int_a^0 \sqrt{a^2 - x^2} \,\diff{x}$

<solution>

(3) is the only solution.

(1) is a polynomial, so this integral will end up being something like $\p{\text{fraction}} \cdot a^2$, so it won't be able to get $\pi a^2$ from this.

(2) doesn't work in general either. For example, if $a = 1$, then you end up integrating over a region where the function is undefined ($\br{1, 2\pi}$).

(3) _does_ work, and there are two ways to see that. One way is to recall that $x^2 + y^2 = a^2$ is the circle of radius $a$, so if you try solving for $y$, you get $y = \sqrt{a^2 - x^2}$ which is the top-half of the circle. So, if you integrate from $0$ to $a$, then you get $\frac{1}{4}$ of the area of the circle.

The other way is to do the substitution $x = a\sin\theta$ directly: $\diff{x} = a\cos\theta \,\diff\theta$ and $\sqrt{a^2 - x^2} = a\cos\theta$, which means

$$
\begin{aligned}
    4\int_0^a \sqrt{a^2 - x^2} \,\diff{x}
        &= 4\int_0^{\pi/2} a\cos\theta \cdot a\cos\theta \,\diff\theta \\
        &= 4a^2 \int_0^{\pi/2} \cos^2\theta \,\diff\theta \\
        &= 4a^2 \int_0^{\pi/2} \frac{1 - \cos2\theta}{2} \,\diff\theta \\
        &= \left. 2a^2 \p{x - \frac{\sin2\theta}{2}} \right\rvert_0^{\pi/2} \\
        &= 2a^2 \frac{\pi}{2} \\
        &= \pi a^2.
\end{aligned}
$$

(4) doesn't work since you'll end up getting $-\pi a^2$ instead of $\pi a^2$.

</solution>

## Question 2

To evaluate the integral $\displaystyle \int x \sin{x} \cos{x} \,\diff{x}$ using integration by parts, the most convenient choice is

1.  $u = \sin{x}$, $\diff{v} = x \cos{x} \,\diff{x}$
2.  $u = \sin{2x}$, $\diff{v} = x \,\diff{x}$
3.  $u = x \sin{x}$, $\diff{v} = \cos{x} \,\diff{x}$
4.  $u = x$, $\diff{v} = \sin{2x} \,\diff{x}$
5.  $u = x$, $\diff{v} = \cos{2x} \,\diff{x}$

<solution>

(4) is the solution.

It should (hopefully) be clear that $u = x$ and $\diff{u} = \sin{x} \cos{x} \,\diff{x}$ works. All you have to do then is remember that $\frac{1}{2}\sin{2x} = \sin{x} \cos{x}$, which means that (4) is the right answer.

</solution>

## Question 3

For which of the following integrals will reduction formulas be needed, i.e., where substitution does not work?

1.  $\displaystyle \int \sin{x} \cos{x} \,\diff{x}$
2.  $\displaystyle \int \sin^7{x} \cos^2{x} \,\diff{x}$
3.  $\displaystyle \int \sin^6{x} \cos^2{x} \,\diff{x}$
4.  $\displaystyle \int \sin^5{x} \,\diff{x}$

<solution>

(3) is the solution.

Substitution will always work if either the power of $\sin{x}$ or the power of $\cos{x}$ is odd, since you can use the identity $\sin^2{x} + \cos^2{x} = 1$ repeatedly and use $u = \sin{x}$ or $u = \cos{x}$ to get a polynomial. The only integral where the powers are both even is (3), so you would need a reduction formula for that one.

</solution>

## Question 4

Evaluate the integral $\displaystyle \int \frac{\cosh^{-1}\p{3x}}{\sqrt{9x^2 - 1}} \,\diff{x}$.

<solution>

If $u = \cosh^{-1}\p{3x}$, then

$$
\diff{u} = \frac{3}{\sqrt{9x^2 - 1}} \,\diff{x},
$$

so

$$
\int \frac{\cosh^{-1}\p{3x}}{\sqrt{9x^2 - 1}}
    = \frac{1}{3} \int u \,\diff{u}
    = \frac{1}{6} u^2 + C
    = \boxed{\frac{1}{6} \p{\cosh^{-1}\p{3x}}^2 + C}.
$$

</solution>

## Question 5

Find $\displaystyle I = \int \frac{\sin{x}}{\cos^2{x} + 5\cos{x} + 6} \,\diff{x}$.

<solution>

If you use the substituion $u = \cos{x}$, then $\diff{u} = -\sin{x} \,\diff{x}$, which gives you

$$
I = -\int \frac{\diff{u}}{u^2 + 5u + 6}.
$$

We can do this by partial fractions, which gives you

$$
\frac{1}{u^2 + 5u + 6}
    = \frac{1}{\p{u+2}\p{u+3}}
    = \frac{1}{u + 2} - \frac{1}{u + 3}.
$$

So,

$$
\begin{aligned}
    I
        &= -\int \frac{1}{u + 2} - \frac{1}{u + 3} \,\diff{u} \\
        &= -\ln\abs{u + 2} + \ln\abs{u + 3} + C \\
        &= \boxed{-\ln\p{\cos{x} + 2} + \ln\p{\cos{x} + 3} + C}.
\end{aligned}
$$

We can get rid of the absolute values since $\cos{x} + 2 \geq 0$ and $\cos{x} + 3 \geq 0$.

</solution>
