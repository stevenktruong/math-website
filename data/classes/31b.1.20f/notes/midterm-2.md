---
title: Midterm 2 Solutions
date: "2020-12-02"
publish: yes
---

# Midterm 2 Solutions

## Table of Contents

## Question 1

True or false:

1. The convergent sequences $\set{a_n}$ and $\set{b_n}$ differ in their first $100$ terms, but $a_n = b_n$ for $n > 100$. It follows that $\displaystyle \lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n$.
2. If the sequence $\set{a_n}$ converges, then the sequence $\set{\p{-1}^n a_n}$ converges.

<solution> (1) is true and (2) is false.

1. If two convergent sequences differ for only finitely many terms, then they have the same limit.
2. If $a_n = 1$, then $a_n$ converges to $1$, but $\p{-1}^na_n = \p{-1}^n$ diverges.

</solution>

## Question 2

1. If an infinite series converges conditionally, then the value of the series depends on the order of the summation. Give one example of such an infinite series and explain.
2. Give an example of an antiderivative that can be found using a trigonometric reduction formula.

<solution>

1. $\displaystyle \sum_{n=1}^\infty \frac{\p{-1}^n}{n}$ converges by the alternating series test, but $\displaystyle \sum_{n=1}^\infty \frac{1}{n}$ diverges because of the $p$-series theorem.
2. A reduction formula can be used for integrals involving powers of $\sin{x}$ and $\cos{x}$, e.g., $\displaystyle \int \sin^2{x}\cos^{4}{x} \,\diff{x}$.

</solution>

## Question 3

Evaluate the integrals using the specified technique.

1. $\displaystyle \int \frac{\sqrt{x^2 + 16}}{x^4} \,\diff{x}$ (trig substitution)
2. $\displaystyle \int e^x\cos{x} \,\diff{x}$ (integration by parts)

<solution>

1. Set $x = 4\tan\theta \implies \diff{x} = 4\sec^2\theta \,\diff\theta$. Then

    $$
    \begin{aligned}
        \int \frac{\sqrt{x^2 + 16}}{x^4} \,\diff{x}
            &= \int \frac{4\sec\theta}{256\tan^4\theta} \cdot 4\sec^2\theta \,\diff\theta \\
            &= \frac{1}{16} \int \frac{\sec^3\theta}{\tan^4\theta} \,\diff\theta \\
            &= \frac{1}{16} \int \frac{1}{\cos^3\theta} \cdot \frac{\cos^4\theta}{\sin^4\theta} \,\diff\theta \\
            &= \frac{1}{16} \int \frac{\cos\theta}{\sin^4\theta} \,\diff\theta.
    \end{aligned}
    $$

    If we set $v = \sin\theta$, then $\diff{v} = \cos\theta \,\diff\theta$ and we get

    $$
    \begin{aligned}
        \frac{1}{16} \int \frac{\cos\theta}{\sin^4\theta} \,\diff\theta
            &= \frac{1}{16} \int \frac{\diff{v}}{v^4} \\
            &= -\frac{1}{48} \frac{1}{v^3} \\
            &= -\frac{1}{48} \frac{1}{\sin^3\theta} + C.
    \end{aligned}
    $$

    To undo the substitution,

    $$
    \begin{aligned}
        x^2 + 16
            &= 16\tan^2\theta + 16 \\
            &= 16\sec^2\theta \\
        \cos^2\theta
            &= \frac{16}{x^2 + 16} \\
        1 - \sin^2\theta
            &= \frac{16}{x^2 + 16} \\
        \sin^2\theta
            &= \frac{x^2}{x^2 + 16} \\
        \sin^3\theta
            &= \p{\frac{x^2}{x^2 + 16}}^{3/2} \\
            &= \frac{x^3}{\p{x^2 + 16}^{3/2}}.
    \end{aligned}
    $$

    So in the end, we get

    $$
    \boxed{-\frac{\p{x^2 + 16}^{3/2}}{48x^3} + C}.
    $$

2. Integrate by parts with $u = e^x$ and $\diff{v} = \cos{x} \,\diff{x}$, which gives

    $$
    \diff{u} = e^x \,\diff{x}
    \quad\text{and}\quad
    v = \sin{x}.
    $$

    So, the integral becomes

    $$
    \int e^x\cos{x} \,\diff{x}
        = e^x\sin{x} - \int e^x\sin{x} \,\diff{x}.
    $$

    Integrate by parts again with $u = e^x$ and $\diff{v} = \sin{x} \,\diff{x}$, so

    $$
    \diff{u} = e^x \,\diff{x}
    \quad\text{and}\quad
    v = -\cos{x},
    $$

    which turns the integral into

    $$
    \begin{aligned}
        \int e^x\cos{x} \,\diff{x}
            &= e^x\sin{x} - \p{-e^x\cos{x} + \int e^x\cos{x} \,\diff{x}} \\
            &= e^x\sin{x} + e^x\cos{x} - \int e^x\cos{x} \,\diff{x} \\
        \implies
        2\int e^x\cos{x} \,\diff{x}
            &= e^x\sin{x} + e^x\cos{x} + C
    \end{aligned}
    $$

    by solving for the integral. Dividing by $2$ and absorbing constants into $C$, we get

    $$
    \int e^x\cos{x} \,\diff{x} = \boxed{\frac{e^x}{2}\p{\sin{x} + \cos{x}} + C}.
    $$

</solution>

## Question 4

Determine whether each integral is convergent or divergent. Evaluate those that are convergent.

1. $\displaystyle \int_1^\infty \frac{x}{x^3 + 1} \,\diff{x}$
2. $\displaystyle \int_0^1 \frac{\diff{x}}{\sqrt{1 - x^2}}$

<solution>

1. We can factor [sums of cubes](https://www.purplemath.com/modules/specfact2.htm), so $x^3 + 1 = \p{x + 1}\p{x^2 - x + 1}$. We can then do partial fractions:

    $$
    \begin{aligned}
        \frac{x}{\p{x + 1}\p{x^2 - x + 1}} &= \frac{A}{x + 1} + \frac{Bx + C}{x^2 - x + 1} \\
        \implies x &= A\p{x^2 - x + 1} + \p{Bx + C}\p{x + 1} \\
        \implies 0 &= Ax^2 - Ax + A + Bx^2 + Bx + Cx + C - x \\
        \implies 0 &= \p{A + B}x^2 + \p{-A + B + C - 1}x + A + C
    \end{aligned}
    $$

    For the right-hand side to be $0$ for every $x$, all the coefficients need to be $0$. So, we get the system

    $$
    \begin{cases}
        A + B &= 0 \\
        -A + B + C - 1 &= 0 \\
        A + C &= 0.
    \end{cases}
    $$

    If we subtract the first equation from the second equation, we get $-2A + C - 1 = 0$, so if we combine that with the third equation,

    $$
    3C - 1 = 0 \implies C = \frac{1}{3}.
    $$

    Then

    $$
    A + C = 0 \implies A = -\frac{1}{3}
    \quad\text{and}\quad
    A + B = 0 \implies B = \frac{1}{3},
    $$

    so the decomposition is

    $$
    \frac{x}{x^3 + 1} = \frac{1}{3} \p{-\frac{1}{x + 1} + \frac{x + 1}{x^2 - x + 1}}.
    $$

    The integral of the first term in the parentheses is just $-\ln\abs{x + 1} + C$, so we need to worry about the second term. We want to use the substitution $u = x^2 - x + 1 \implies \diff{u} = 2x - 1 \,\diff{x}$, so we need to separate the second term based on that:

    $$
    \begin{aligned}
        \frac{x + 1}{x^2 - x + 1} \cdot \frac{2}{2}
             = \frac{1}{2} \frac{2x + 2}{x^2 - x + 1}
            &= \frac{1}{2} \frac{2x - 1 + 3}{x^2 - x + 1} \\
            &= \frac{1}{2} \frac{2x - 1}{x^2 - x + 1} + \frac{3}{2} \frac{1}{x^2 - x + 1}.
    \end{aligned}
    $$

    Using the $u$-substitution, the integral of the first term here is $\frac{1}{2}\ln\abs{x^2 - x + 1} + C$. So, we just need to work on the last term. If we complete the square, $x^2 - x + 1 = \p{x - \frac{1}{2}}^2 + \frac{3}{4}$, so the substitution $x - \frac{1}{2} = \frac{\sqrt{3}}{2}\tan\theta$ works:

    $$
    \begin{aligned}
        \frac{3}{2} \int \frac{\diff{x}}{x^2 - x + 1}
            &= \frac{3}{2} \int \frac{\diff{x}}{\p{x - \frac{1}{2}}^2 + \frac{3}{4}} \\
            &= \frac{3}{2} \int \frac{\frac{\sqrt{3}}{2}\sec^2\theta}{\frac{3}{4}\sec^2\theta} \,\diff\theta \\
            &= \sqrt{3} \int \,\diff\theta \\
            &= \sqrt{3} \theta + C \\
            &= \sqrt{3} \arctan\p{\frac{x - \frac{1}{2}}{\frac{\sqrt{3}}{2}}} + C \\
            &= \sqrt{3} \arctan\p{\frac{2x - 1}{\sqrt{3}}} + C.
    \end{aligned}
    $$

    Putting everything together,

    $$
    \int \frac{x}{x^3 + 1} \,\diff{x}
        = \frac{1}{3}\p{-\ln\abs{x + 1} + \frac{1}{2}\ln\abs{x^2 - x + 1} + \sqrt{3} \arctan\p{\frac{2x - 1}{\sqrt{3}}}} + C.
    $$

    To finish the problem, we need to evaluate the integral at the bounds. The lower bound is given at $x = 1$:

    $$
    \frac{1}{3}\p{-\ln{2} + \sqrt{3}\arctan\p{\frac{1}{\sqrt{3}}}}
        = -\frac{\ln{2}}{3} + \frac{\sqrt{3}}{3} \frac{\pi}{6}
        = \frac{\pi\sqrt{3} - 6\ln{2}}{18}.
    $$

    For the upper bound, we need to take a limit:

    $$
    \begin{aligned}
        &\lim_{R\to\infty} \frac{1}{3}\p{-\ln\abs{R + 1} + \frac{1}{2}\ln\abs{R^2 - R + 1} + \sqrt{3} \arctan\p{\frac{2R - 1}{\sqrt{3}}}} \\
        ={}& \lim_{R\to\infty} \frac{1}{3}\p{\ln\abs{\frac{\sqrt{R^2 - R + 1}}{R + 1}} + \sqrt{3} \arctan\p{\frac{2R - 1}{\sqrt{3}}}} \\
        ={}& \frac{1}{3}\p{\ln{1} + \sqrt{3} \frac{\pi}{2}} \\
        ={}& \frac{\pi\sqrt{3}}{6}.
    \end{aligned}
    $$

    So the final answer is

    $$
    \int_1^\infty \frac{x}{x^3 + 1} \,\diff{x}
        = \frac{\pi\sqrt{3}}{6} - \frac{\pi\sqrt{3} - 6\ln{2}}{18}
        = \boxed{\frac{\pi\sqrt{3} + 3\ln{2}}{9}}.
    $$

2. We can integrate directly:

    $$
    \begin{aligned}
        \int_0^1 \frac{\diff{x}}{\sqrt{1 - x^2}}
             = \lim_{t\to1^-} \int_0^t \frac{\diff{x}}{\sqrt{1 - x^2}}
            &= \lim_{t\to1^-} \Bigl. \arcsin{x} \Bigr\rvert_0^t \\
            &= \lim_{t\to1^-} \arcsin{t} \\
            &= \arcsin{1} \\
            &= \boxed{\frac{\pi}{2}}.
    \end{aligned}
    $$

</solution>

## Question 5

Assume the function $f$ has an inverse on its domain.

1. Let $y = f^{-1}\p{x}$ and show that $\displaystyle \int f^{-1}\p{x} \,\diff{x} = \int yf'\p{y} \,\diff{y}$.
2. Use (i) to prove that $\displaystyle \int f^{-1}\p{x} \,\diff{x} = yf\p{y} - \int f\p{y} \,\diff{y}$.
3. Use (ii) to evaluate $\displaystyle \int \ln{x} \,\diff{x}$.

<solution>

1. If $y = f^{-1}\p{x}$, then $x = f\p{y} \implies \diff{x} = f'\p{y} \,\diff{y}$, so

    $$
    \int f^{-1}\p{x} \,\diff{x} = \int yf'\p{y} \,\diff{y}.
    $$

2. We can integrate by parts with $u = y$ and $\diff{v} = f'\p{y} \,\diff{y}$, which gives

    $$
    \diff{u} = \diff{y}
    \quad\text{and}\quad
    v = f\p{y},
    $$

    so we get

    $$
    \int f^{-1}\p{x} \,\diff{x}
        = yf\p{y} - \int f\p{y} \,\diff{y}.
    $$

3. If $y = f^{-1}\p{x} = \ln{x}$, then $f\p{y} = e^y$, so

    $$
    \begin{aligned}
        \int \ln{x} \,\diff{x}
            &= yf\p{y} - \int f\p{y} \,\diff{y} \\
            &= \ln{x} \cdot e^{\ln{x}} - \int e^y \,\diff{y} \\
            &= x\ln{x} - e^y + C \\
            &= x\ln{x} - e^{\ln{x}} + C \\
            &= \boxed{x\ln{x} - x + C}.
    \end{aligned}
    $$

</solution>

## Question 6

Determine whether the series is convergent or divergent. If it is convergent, find its sum (if possible).

1. $\displaystyle \sum_{n=1}^\infty 3^{n+1} 4^{-n}$
2. $\displaystyle \sum_{n=2}^\infty \frac{1}{n\p{\ln{n}}^2}$

<solution>

1. This is a geometric series:

    $$
    \sum_{n=1}^\infty 3^{n+1} 4^{-n}
        = \sum_{n=1}^\infty 3 \cdot \frac{3^n}{4^n}
        = 3 \sum_{n=1}^\infty \p{\frac{3}{4}}^n
        = 3 \cdot \frac{\frac{3}{4}}{1 - \frac{3}{4}}
        = \boxed{9}.
    $$

2. If $f\p{x} = \frac{1}{x\p{\ln{x}}^2}$, then if $x > e^2$,

    $$
    f'\p{x}
        = -\frac{\p{\ln{x}}^2 - \frac{2x\ln{x}}{x}}{\p{x\p{\ln{x}}^2}^2}
        = -\frac{\p{\ln{x} - 2}\ln{x}}{\p{x\p{\ln{x}}^2}^2} < 0,
    $$

    so $f$ is continuous, non-negative, and decreasing on $x > e^2$. So, we can apply the integral test: let $u = \ln{x} \implies \diff{u} = \frac{\diff{x}}{x}$, and we get

    $$
    \int_2^\infty \frac{\diff{x}}{x\p{\ln{x}}^2}
        = \int_{\ln{2}}^\infty \frac{\diff{u}}{u^2}.
    $$

    Since $\ln{2} > 0$, this converges because this is a $p$-integral with $p > 1$, so by the integral test, $\displaystyle \sum_{n=2}^\infty \frac{1}{n\p{\ln{n}}^2}$ converges, but we can't calculate its sum.

</solution>

## Question 7

Find the sum of the series, if it converges.

1. $\displaystyle \sum_{n=3}^\infty \frac{1}{\p{n-2}\p{n-1}}$
2. $\displaystyle \sum_{n=1}^\infty \ln\p{\frac{n+1}{n}}$

<solution>

1. By partial fractions,

    $$
    \frac{1}{\p{n-2}\p{n-1}} = \frac{1}{n - 2} - \frac{1}{n - 1},
    $$

    so we have a telescoping series:

    $$
    \begin{aligned}
        \sum_{n=3}^N \p{\frac{1}{n - 2} - \frac{1}{n - 1}}
            &= \sum_{n=3}^N \frac{1}{n - 2} - \sum_{n=3}^N \frac{1}{n - 1} \\
            &= \p{\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{N - 2}} \\
                &\qquad - \p{\frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{N - 2} + \frac{1}{N - 1}} \\
            &= 1 - \frac{1}{N - 1}.
    \end{aligned}
    $$

    So,

    $$
    \begin{aligned}
        \sum_{n=3}^\infty \frac{1}{\p{n-2}\p{n-1}}
            &= \lim_{N\to\infty} \sum_{n=3}^N \frac{1}{\p{n-2}\p{n-1}} \\
            &= \lim_{N\to\infty} \p{1 - \frac{1}{N - 1}} \\
            &= \boxed{1}.
    \end{aligned}
    $$

2. This series diverges. Here are two ways to prove this:

    $$
    \sum_{n=1}^N \ln\p{\frac{n+1}{n}}
        = \sum_{n=1}^N \p{\ln\p{n+1} - \ln{n}}
        = \ln\p{N+1},
    $$

    which diverges as $N \to \infty$. Alternatively, you can use the limit test with $\frac{1}{n}$:

    $$
    \begin{aligned}
        \lim_{n\to\infty} \frac{\ln\p{\frac{n+1}{n}}}{\frac{1}{n}}
            &= \lim_{n\to\infty} \ln\p{1 + \frac{1}{n}}^n \\
            &= \ln\p{\lim_{n\to\infty} \p{1 + \frac{1}{n}}^n} \\
            &= \ln{e} \\
            &= 1 > 0.
    \end{aligned}
    $$

    By the limit test, because $\displaystyle \sum_{n=1}^\infty \frac{1}{n}$ diverges, so does $\displaystyle \sum_{n=1}^\infty \ln\p{\frac{n+1}{n}}$.

</solution>
