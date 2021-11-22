---
title: Week 7 Discussion Notes
date: "2021-11-11"
tags:
    - Taylor polynomials
    - convergence tests
publish: yes
---

# Week 7 Discussion Notes

## Table of Contents

## Taylor Polynomials

Taylor polynomials are a generalization of the tangent line. If $f\p{x}$ is a differentiable function, then the tangent line to $f$ at $x = a$ is given by

$$
L\p{x} = f\p{a} + f'\p{a}\p{x - a}.
$$

By definition, it's the linear function which passes through the point $\p{a, f\p{a}}$ and has slope $f'\p{a}$ or equivalently, the linear function $L\p{x}$ such that

$$
\begin{aligned}
    L\p{a} &= f\p{a} \\
    L'\p{a} &= f'\p{a}.
\end{aligned}
$$

This leads to the following definition:

<definition> Taylor polynomials

Let $f\p{x}$ be a function. The **$n$-th Taylor polynomial of $f$ centered at $x = a$**, which we denote $T_nf\p{x}$, is the unique $n$-th degree polynomial whose derivatives agree with $f$ at $x = a$:

$$
\begin{aligned}
    T_nf\p{a} &= f\p{a} \\
    \p{T_nf}'\p{a} &= f'\p{a} \\
    \p{T_nf}''\p{a} &= f''\p{a} \\
    &\hspace{5.5pt}\vdots \\
    \p{T_nf}^{\p{n}} &= f^{\p{n}}\p{a}.
\end{aligned}
$$

Here, $f^{\p{n}}\p{a}$ is the $n$-th derivative of $f$ at $x = a$.

</definition>

From the definition, we can derive the formula for the Taylor polynomial:

<proposition>

The $n$-th Taylor polynomial of $f$ centered at $x = a$ is given by the formula

$$
\begin{aligned}
    T_nf\p{x}
        &= \sum_{k=0}^n \frac{f^{\p{n}}\p{a}}{n!} \p{x - a}^n \\
        &= f\p{a} + f'\p{a}\p{x - a} + \frac{f''\p{a}}{2!}\p{x - a}^2 + \cdots + \frac{f^{\p{n}}\p{a}}{n!}\p{x - a}^n.
\end{aligned}
$$

Here, $n! = n\p{n - 1}\p{n - 2} \cdots 2 \cdot 1$ is the factorial of $n$, and note that $0! = 1$.

</proposition>

<example>

The fourth degree Taylor polynomial of $f$ centered at $2$ is $T_4f\p{x} = 1 + \p{x - 2} + 7\p{x - 2}^2 - 4\p{x - 2}^3 + \p{x - 2}^4$. Determine $f^{\p{3}}\p{2}$.

</example>

<solution>

Compare $T_4f\p{x}$ with the formula above:

$$
\begin{aligned}
    T_4f\p{x}
        &= 1 + \p{x - 2} + 7\p{x - 2}^2 - 4\p{x - 2}^3 + \p{x - 2}^4 \\
        &= f\p{2} + f'\p{2}\p{x - 2} + \frac{f''\p{2}}{2}\p{x - 2} + \frac{f^{\p{3}}\p{2}}{6}\p{x - 2}^3 + \frac{f^{\p{4}}\p{2}}{24}\p{x - 2}^4.
\end{aligned}
$$

These have to be the same, so the coefficients of $\p{x - 2}^3$ are the same, i.e.,

$$
-4 = \frac{f^{\p{3}}\p{2}}{6}
\implies f^{\p{3}}\p{2} = \boxed{-24}.
$$

</solution>

<example>

The fourth degree Taylor polynomial of $f$ centered at $x = 1$ is $T_3f\p{x} = 1 + 2x - x^2 + 7x^3 - x^4$. Find $f''\p{1}$.

</example>

<solution>

Be careful **not** to do this:

> The coefficient of $x^2$ is $-1$, so
>
> $$
> \frac{f''\p{1}}{1!} = -1
>   \implies f''\p{1} = -1.
> $$

The Taylor polynomial is centered at $x = 1$, so you can't just compare coefficients because it's not in the right form: the formula tells you what the coefficients of $\p{x - 1}^k$ are, but in our problem, we don't have $\p{x - 1}$ anywhere.

Instead, you need to use the definition of $T_3f$, which says that $\p{T_3f}''\p{1} = f''\p{1}$, so you need to calculate the second derivative of $T_3f$ at $x = 1$.

$$
\begin{aligned}
    \p{T_3f}'\p{x}
        &= 2 - 2x + 21x^2 - 4x^3 \\
    \p{T_3f}''\p{x}
        &= -2 + 42x - 12x^2 \\
    \p{T_3f}''\p{1}
        &= -2 + 42 - 12 \\
    \implies
    f'\p{1}
        &= \boxed{28}. \\
\end{aligned}
$$

</solution>

<example>

Find the third degree Taylor polynomial of $f\p{x} = \sin{x}$ centered at $\pi$.

</example>

<solution>

For these types of problems, you just need to calculate the derivatives of $f$ and plug them into the formula:

$$
\begin{aligned}
    f\p{x} = \sin{x}
        &\implies f\p{\pi} = 0 \\
    f'\p{x} = \cos{x}
        &\implies f'\p{\pi} = -1 \\
    f''\p{x} = -\sin{x}
        &\implies f''\p{\pi} = 0 \\
    f^{\p{3}}\p{x} = -\cos{x}
        &\implies f^{\p{3}}\p{\pi} = 1
\end{aligned}
$$

So you get

$$
\begin{aligned}
    T_3\p{x}
        &= f\p{\pi} + f'\p{\pi}\p{x - \pi} + \frac{f''\p{\pi}}{2}\p{x - \pi}^2 + \frac{f^{\p{3}}\p{\pi}}{6}\p{x - \pi}^3 \\
        &= 0 - 1 \cdot \p{x - \pi} + 0 \cdot \p{x - \pi}^2 + \frac{1}{6}\p{x - \pi}^3 \\
        &= \boxed{-\p{x - \pi} + \frac{1}{6}\p{x - \pi}^3}.
\end{aligned}
$$

</solution>

<example>

Calculate the Maclaurin polynomials for $f\p{x} = \cos{x}$.

</example>

<solution>

A Maclaurin polynomial is another name for a Taylor polynomial centered at $x = 0$.

Like in the previous example, we just need to find the derivatives of $f$ and plug them into the formula, but because the problem doesn't specify which order polynomial to find, we have to find a pattern for the general polynomial:

$$
\begin{aligned}
    f\p{x} = \cos{x}
        &\implies f\p{0} = 1 \\
    f'\p{x} = -\sin{x}
        &\implies f'\p{0} = 0 \\
    f''\p{x} = -\cos{x}
        &\implies f''\p{0} = -1 \\
    f^{\p{3}}\p{x} = \sin{x}
        &\implies f^{\p{3}}\p{0} = 0 \\
    f^{\p{4}}\p{x} = \cos{x}
        &\implies f^{\p{4}}\p{0} = 1 \\
        &\hspace{11pt}\vdots
\end{aligned}
$$

So the derivatives repeat every $4$ times and the pattern is $1, 0, -1, 0$. From here, it's a good idea to write out a bunch of terms for the polynomials to figure out the pattern, and I recommend _not_ multiplying out numbers:

$$
\begin{aligned}
    T_nf\p{x}
        &= f\p{0} + f'\p{0}x + \frac{f''\p{0}}{2!}x^2 + \frac{f^{\p{3}}\p{0}}{3!}x^3 + \frac{f^{\p{4}}\p{0}}{4!}x^4 + \frac{f^{\p{5}}\p{0}}{5!}x^5 + \frac{f^{\p{6}}\p{0}}{6!}x^6 + \cdots \\
        &= 1 + 0 \cdot x - \frac{x^2}{2!} + 0 \cdot x^3 + \frac{x^4}{4!} + 0 \cdot x^5 - \frac{x^6}{6!} x^6 + \cdots \\
        &= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} x^6 + \cdots
\end{aligned}
$$

From here, the pattern shouldn't be too hard to pick out: it alternates, so there's going to be a $\p{-1}^n$ term, and there are only even powers of $x$, so the coefficients are of the form

$$
\p{-1}^k \frac{x^{2k}}{\p{2k}!}.
$$

Also, because the odd terms are $0$, you know that $T_{2n-1}f = T_{2n}f$, so to give the general formula for the Maclaurin polynomials, you only need to give the even order ones:

$$
\boxed{T_{2n-1}f\p{x} = T_{2n}f\p{x} = \sum_{k=0}^n \p{-1}^k \frac{x^{2k}}{\p{2k}!}}
$$

</solution>

## Taylor Series

I didn't talk about this during discussion, but during office hours I ended up doing a couple of examples that I thought would be helpful for the midterm, so I decided to include one in the notes this week.

There are a couple of Taylor series expansions that you want to remember:

$$
\begin{array}{rcllll}
    \hline \\[-2ex]
    f\p{x}
        & =
        & T\p{x} \\[1ex] \hline \\[-2ex]
    \displaystyle\frac{1}{1 - x}
        & =
        & \displaystyle\sum_{n=0}^\infty x^n
        & =
        & \displaystyle 1 + x + x^2 + x^3 + \cdots
        & \text{for } x \in \p{-1, 1} \\[3ex]
    e^x & =
        & \displaystyle\sum_{n=0}^\infty \frac{x^n}{n!}
        & =
        & \displaystyle 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
        & \text{for } x \in \R \\[3ex]
    \sin{x}
        & =
        & \displaystyle\sum_{n=0}^\infty \p{-1}^n\frac{x^{2n+1}}{\p{2n+1}!}
        & =
        & \displaystyle x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
        & \text{for } x \in \R \\[3ex]
    \cos{x}
        & =
        & \displaystyle\sum_{n=0}^\infty \p{-1}^n\frac{x^{2n}}{\p{2n}!}
        & =
        & \displaystyle 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
        & \text{for } x \in \R \\[3ex]\hline
\end{array}
$$

<example>

Find the Taylor series expansion for $f\p{x} = x^3\ln\p{1 + x^2}$ at $x = 0$ and determine its interval of convergence.

</example>

<solution>

Usually, to do these problems, you **don't** want to take derivatives and find patterns. Instead, you want to relate your function to the common Taylor series expansions above using a combination of the following operations:

1. Multiplying by $Cx^k$
2. Plugging in $Cx^k$
3. Differentiating
4. Integrating

Then for our problem, if we can find the Taylor series for $\ln\p{1 + x^2}$, then we can just multiply by $x^3$ to get the one for $f$. Similarly, if we can find it for $\ln\p{1 + x}$, then we can just plug in $x^2$. So, to get $\ln\p{1 + x}$, notice that

$$
\int \frac{1}{1 + x} \,\diff{x}
    = \ln\p{1 + x} + C.
$$

Finally, we can get the Taylor series for $\frac{1}{1 + x}$ by taking the geometric series and plugging in $-x$:

$$
\frac{1}{1 + x}
    = \frac{1}{1 - \p{-x}}
    = \sum_{n=0}^\infty \p{-x}^n
    = \sum_{n=0}^\infty \p{-1}^n x^n
$$

When you have a convergent power series, you can integrate term-by-term, so we get

$$
\begin{aligned}
    \ln\p{1 + x} + C
        &= \int \frac{1}{1 + x} \,\diff{x} \\
        &= \sum_{n=0}^\infty \int \p{-1}^n x^n \,\diff{x} \\
        &= \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} x^{n+1}.
\end{aligned}
$$

To find $C$, you can just plug in the center and solve for it. In our case, if we plug in $x = 0$, we get

$$
\ln{1} + C = \sum_{n=0}^\infty 0
\implies C = 0.
$$

From here, we can plug in $x^2$ for $x$:

$$
\ln\p{1 + x^2}
    = \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} \p{x^2}^{n+1}
    = \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} x^{2n+2}
$$

Finally, we can just multiply by $x^3$ to get

$$
x^3 \ln\p{1 + x^2}
    = x^3 \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} x^{2n+2}
    = \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} x^{2n+5}.
$$

All the operations above don't change the _radius_ of convergence, but the _interval_ of convergence might change. This means the series still converges when $x \in \p{-1, 1}$, but even though the geometric series doesn't converge at the endpoints, it's possible that this new series does. In other words, you have to check the endpoints at the end to find the interval of convergence:

$x = -1$:

$$
\begin{aligned}
    \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} \p{-1}^{2n+5}
        &= \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} \p{-1}^{2n} \p{-1}^5 \\
        &= -\sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1},
\end{aligned}
$$

and this converges by the alternating series test.

$x = 1$:

$$
\begin{aligned}
    \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} 1^{2n+5}
        &= \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1},
\end{aligned}
$$

and like the above, this converges by the alternating series test. Thus, our final answer is

$$
\boxed{
    x^3 \ln\p{1 + x^2}
        = \sum_{n=0}^\infty \frac{\p{-1}^n}{n + 1} x^{2n+5}
        \quad\text{for } x \in \br{-1, 1}
}.
$$

</solution>

## Convergence Tests

<example>

Determine whether $\displaystyle \sum_{n=2}^\infty \frac{1}{\p{\ln{n}}^n}$ converges.

</example>

<solution>

Generally, you want to start with the divergence test, and then try the root or ratio test. The divergence test is inconclusive here, so now we need to decide between the root or ratio test. Because of the $n$ in the exponent, the root test should have an easier limit to calculate:

$$
\lim_{n\to\infty} \abs{a_n}^{1/n}
    = \lim_{n\to\infty} \abs{\frac{1}{\p{\ln{n}}^n}}^{1/n}
    = \lim_{n\to\infty} \frac{1}{\ln{n}}
    = 0
    < 1,
$$

so by the root test, the series converges.

</solution>

<example>

Determine whether $\displaystyle \sum_{n=1}^\infty \sqrt{\frac{16n^3}{4n^5 + 4}}$ converges.

</example>

<solution>

When you have a fraction, it's a good idea to figure out its limiting behavior. When $n$ is large, the $4$ is insignificant, so you get the heuristic

$$
\sqrt{\frac{16n^3}{4n^5 + 4}}
    \approx \sqrt{\frac{16n^3}{4n^5}}
    = \sqrt{\frac{4}{n^2}}
    = \frac{2}{n}.
$$

This tells to try the limit comparison test with $b_n = \frac{2}{n}$:

$$
\begin{aligned}
    \lim_{n\to\infty} \frac{\sqrt{\frac{16n^3}{4n^5 + 4}}}{\frac{2}{n}}
        &= \lim_{n\to\infty} \sqrt{\frac{16n^3}{4n^5 + 4}} \cdot \frac{n}{2} \\
        &= \lim_{n\to\infty} \sqrt{\frac{16n^3}{4n^5 + 4}} \cdot \sqrt{\frac{n^2}{4}} \\
        &= \lim_{n\to\infty} \sqrt{\frac{16n^3}{4n^5 + 4} \cdot \frac{n^2}{4}} \\
        &= \lim_{n\to\infty} \sqrt{\frac{16n^5}{16n^5 + 16}} \\
        &= \sqrt{\frac{16}{16}} \\
        &= 1.
\end{aligned}
$$

$\sum_{n=1}^\infty \frac{1}{n}$ diverges by the $p$-test, and because $1$ is between $0$ and $\infty$, the limit comparison test tells you that $\sum_{n=1}^\infty \sqrt{\frac{16n^3}{4n^5 + 4}}$ also diverges.

</solution>

<example>

Show that $\displaystyle \sum_{n=1}^\infty \frac{\ln{n}}{n^2}$ converges by direct comparison.

</example>

<solution>

If you ever want to use direct comparison with a $\ln{n}$ somewhere, it's a good idea to use the following fact:

$$
\lim_{n\to\infty} \frac{\ln{n}}{n^a} = 0
$$

for _any_ positive number $a$. You can prove this by L'Hôpital's rule:

$$
\lim_{n\to\infty} \frac{\ln{n}}{n^a}
    = \lim_{x\to\infty} \frac{\ln{x}}{x^a}
    = \lim_{x\to\infty} \frac{\frac{1}{x}}{ax^{a-1}}
    = \lim_{x\to\infty} \frac{1}{ax^a}
    = 0.
$$

Since the limit is $0$, this means that eventually, $\frac{\ln{n}}{n^a} \leq 1$. To show that the series converges by direct comparison, we need to find something _bigger_ whose sum converges. We know that eventually, the inequality

$$
0
    \leq \frac{\ln{n}}{n^2}
    \leq \frac{n^a}{n^2}
    = \frac{1}{n^{2-a}}
$$

is true. For the sum of $\frac{1}{n^{2-a}}$ to converge, the $p$-test tells us that we need $2 - a > 1$, or equivalently, we need $a < 1$. Since $a$ needs to be positive, we can pick any $a$ such that $0 < a < 1$, so we can use $a = \frac{1}{2}$.

With this choice of $a$, we know that there exists $N$ such that if $n \geq N$, then $\ln{n} \leq n^{1/2}$, so

$$
0
    \leq \frac{\ln{n}}{n^2}
    \leq \frac{n^{1/2}}{n^2}
    = \frac{1}{n^{3/2}}
$$

if $n \geq N$. By the $p$-test, $\sum_{n=N}^\infty \frac{1}{n^{3/2}}$ converges, so by direct comparison, $\sum_{n=N}^\infty \frac{\ln{n}}{n^2}$ also converges. Thus, the entire series $\sum_{n=1}^\infty \frac{\ln{n}}{n^2}$ converges.

</solution>
