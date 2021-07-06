---
title: Week 3 Discussion Notes
date: "2020-10-22"
tags:
    - inverse trig functions
    - interest rates
    - L'Hôpital's rule
publish: yes
---

# Week 3 Discussion Notes

## Table of Contents

## Inverse Trigonometric Functions

### Defining Them

In order to define inverse trig functions, we need to find domains so that they are one-to-one without changing their ranges. Because trig functions oscillate, there are a lot of intervals like these, so which one do we take? $0$ is a nice number, so we are going to look for a domain containing $0$ which doesn't change the range of our function.

Take a look at the graph of $\sin{x}$:

<img src="{{ assetsFolder }}/images/sinx.png" height=300px>

As you can see, $\br{-\frac{\pi}{2}, \frac{\pi}{2}}$ does the trick. On this interval, $\sin{x}$ passes the horizontal line test and it hits every point in its range, $\br{-1, 1}$.

Now look at $\cos{x}$:

<img src="{{ assetsFolder }}/images/cosx.png" height=300px>

There are two intervals in this case: $\br{-\pi, 0}$ and $\br{0, \pi}$. Hopefully, you agree that $\br{0, \pi}$ is "nicer" than the other one since it contains only positive numbers, so we're going to restrict $\cos{x}$ to $\br{0, \pi}$ when defining the inverse.

The last one we're going to look at is $\tan{x}$:

<img src="{{ assetsFolder }}/images/tanx.png" height=300px>

As in the case with $\cos{x}$, we have multiple choices, but I think it's clear that $\p{-\frac{\pi}{2}, \frac{\pi}{2}}$ is the "nicest" interval we can use.

We can play the same game with the rest of the trig functions, and what we get are the following inverse functions:

<definition id="inverse-trig"> inverse trigonometric functions

We define the inverses of trig functions via the following tables:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
    f\p{x} & f^{-1}\p{x} & \text{range} \\ \hline
    \sin{x} & \arcsin{x} & \br{-\frac{\pi}{2}, \frac{\pi}{2}} \\
    \csc{x} & \arccsc{x} & \left\lbrack -\frac{\pi}{2}, 0 \right\rparen \cup \left\lparen 0, \frac{\pi}{2} \right\rbrack \\
    \tan{x} & \arctan{x} & \p{-\frac{\pi}{2}, \frac{\pi}{2}}
\end{array}
$$

$$
\def\arraystretch{1.5}
\begin{array}{lll}
    f\p{x} & f^{-1}\p{x} & \text{range} \\ \hline
    \cos{x} & \arccos{x} & \br{0, \pi} \\
    \sec{x} & \arcsec{x} & \left\lbrack 0, \frac{\pi}{2} \right\rparen \cup \left\lparen \frac{\pi}{2}, \pi \right\rbrack \\
    \cot{x} & \arccot{x} & \p{0, \pi}
\end{array}
$$

</definition>

We get the range of $f^{-1}\p{x}$ by swapping the domain and range of $f\p{x}$.

<exercise>

Figure out the domains of the inverse trig functions.

</exercise>

One thing to notice is how I arranged the tables. If you look at the top table, the ranges are all $\br{-\frac{\pi}{2}, \frac{\pi}{2}}$ with some points removed, i.e., the range of $\arcsin{x}$ with some points removed. Similarly, the bottom table ranges are all the range of $\arccos{x}$ with some points removed.

The way I remember how to group them are as follows: if $\sin{x}$ is the "main" function (e.g., $\csc{x} = \frac{1}{\sin{x}}$), then the range is related to $\arcsin{x}$. Similarly, if $\cos{x}$ is the "main" function, then the range will be related to $\arccos{x}$.

### Their Derivatives

Now that we have the inverses, let's talk about their derivatives. They are given in the following theorem:

<theorem>

$$
\begin{aligned}
    &\deriv{}{x} \arcsin{x} &=& \phantom{-}\frac{1}{\sqrt{1 - x^2}} \\
    &\deriv{}{x} \arccos{x} &=& -\frac{1}{\sqrt{1 - x^2}} \\
    &\deriv{}{x} \arctan{x} &=& \phantom{-}\frac{1}{1 + x^2} \\
    &\deriv{}{x} \arcsec{x} &=& \phantom{-}\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    &\deriv{}{x} \arccsc{x} &=& -\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    &\deriv{}{x} \arccot{x} &=& -\frac{1}{1 + x^2} \\
\end{aligned}
$$

</theorem>

These are all done by implicit differentiation, and I'll show one of them:

<example>

Prove that $\deriv{}{x} \arcsec{x} = \frac{1}{\abs{x}\sqrt{x^2 - 1}}$.

</example>

<solution>

To start, I'm going to set $y = \arcsec{x}$. Since $\arcsec{x}$ and $\sec{x}$ are inverses, we can apply $\sec{\theta}$ to both sides to get $\sec{y} = x$. Now we can take derivatives on both sides to get

$$
\p{\sec{y}\tan{y}} y' = 1
\implies
y' = \frac{1}{\sec{y}\tan{y}}.
$$

To finish the problem, we need to get the right-hand side in terms of $x$. We already know that $\sec{y} = x$, so we need to handle $\tan{y}$. We can use the following trig identity to relate $\tan{y}$ to $\sec{y} = x$:

$$
\begin{aligned}
    \tan^2{y} + 1 = \sec^2{y} = x^2
    &\implies \tan^2{y} = x^2 - 1 \\
    &\implies \tan{y} = \pm\sqrt{x^2 - 1}.
\end{aligned}
$$

We need to figure out when the sign is positive and when the sign is negative, so we need to break it into two cases:

**Case 1:** $\sec{y} = x > 0$

Since $y = \arcsec{x}$, $y$ is in the range of $\arcsec{x}$, so $y$ is in the first or second quadrant.

<img src="{{ assetsFolder }}/images/arcsecx-range.png" height=300px>

Since $\sec{y} > 0$, this means that $\cos{y} > 0$, which means that $y$ must be in Quadrant I. In this quadrant, $\tan{y} > 0$, so $\tan{y} = \sqrt{x^2 - 1}$ in this case.

**Case 2:** $\sec{y} = x < 0$

We can use the same argument: in this case, $\cos{y} < 0$, so $y$ is in Quadrant II, which means that $\tan{y} < 0$. Thus, $\tan{y} = -\sqrt{x^2 - 1}$ in this case.

Now that we have established the signs of $\tan{y}$, we just need to plug it back into our original function. There are two cases, so we end up with a piecewise function:

$$
\begin{aligned}
    y'
        &= \frac{1}{x\tan{y}} \\
        &= \begin{cases}
             \dfrac{1}{\phantom{-}x\sqrt{x^2 - 1}} & \text{if } x > 0 \\[2ex]
             \dfrac{1}{-x\sqrt{x^2 - 1}} & \text{if } x < 0
           \end{cases} \\
        &= \frac{1}{\abs{x}\sqrt{x^2 - 1}}.
\end{aligned}
$$

The last equality comes from the fact that $\abs{x} = x$ if $x > 0$ and $-x$ if $x < 0$.

</solution>

<exercise>

Prove the rest of the derivatives.

</exercise>

## Compounding Interest Monthly

This is the setup: we have an initial amount of money (the principal) $P_0$, an interest rate $r$ which is compounded $n$ times a year, and we want to know how much money we have after $t$ years.

"Compunded $n$ times a year" means that we calculate interest with the rate $\frac{r}{n}$ a total of $n$ times each year. So, after the first compounding, we get $P_0\p{\frac{r}{n}}$ dollars in interest, which brings our total to $P_0 + P_0\p{\frac{r}{n}} = P_0\p{1 + \frac{r}{n}}$.

After the second time, we get $P_0\p{1 + \frac{r}{n}}\frac{r}{n}$ in interest, which gives us $P_0\p{1 + \frac{r}{n}}^2$ total, etc. You should be able to see the pattern: after $1$ year, you will have compounded interest $n$ times, so you end up with $P_0\p{1 + \frac{r}{n}}^n$. Since we want to know how much we have in $t$ years, we get the formula

$$
P\p{t} = P_0\p{1 + \frac{r}{n}}^{nt}.
$$

If we compound monthly, we compound $12$ times a year, so you use the formula $n = 12$. And, for example, if we compound biannually, then we compound twice a year, so you would use the formula with $n = 2$.

As $n$ gets very, very large, we essentially compound interest every moment, i.e., we're compounding interest continuously. So, it's no surprise that

$$
\lim_{n\to\infty} P_0\p{1 + \frac{r}{n}}^{nt} = P_0e^{rt},
$$

i.e., we get the formula for continuously compounded interest.

<exercise>

Prove the limit, e.g., using L'Hôpital's rule or by using the limit definition of $e$.

</exercise>

## L'Hôpital's Rule

This rule will probably be the one thing you remember from this class:

<theorem> L'Hôpital's rule

Suppose $f$ and $g$ satisfy the following conditions:

1.  $f$ and $g$ are differentiable in an open interval around $a$
2.  $\lim_{x \to a} f\p{x} = \lim_{x \to a} g\p{x} = 0$ or $\lim_{x \to a} f\p{x} = \lim_{x \to a} g\p{x} = \pm\infty$ (they are allowed to have different signs)
3.  $g'\p{x} \neq 0$ in an open interval around $a$ except possibly at $x = a$
4.  $\lim_{x \to a} \frac{f'\p{x}}{g'\p{x}}$ exists or is infinite

Then

$$
\lim_{x \to a} \frac{f\p{x}}{g\p{x}} = \lim_{x \to a} \frac{f'\p{x}}{g'\p{x}}.
$$

</theorem>

Assumpion (i) is there just so you can take derivatives, and (iii) is just there to make sure that the limit makes sense. For example, what is $\lim_{x \to 0} \frac{x}{0}$? It's a meaningless expression, which is what we want to avoid.

So, the only assumptions that really make a difference are (ii) and (iv).

### Pitfalls

It can be relatively easy to make mistakes when using L'Hôpital's, and the worst part is that they don't look like mistakes most of the time. So, here are a couple common pitfalls:

**Don't use the quotient rule!**

For example, L'Hôpital's rule **does not** tell you that

$$
\lim_{x \to \infty} \frac{x}{e^x} = \lim_{x \to \infty} \frac{e^x - xe^x}{e^{2x}}.
\quad\text{(wrong)}
$$

Instead, it tells you

$$
\lim_{x \to \infty} \frac{x}{e^x} = \lim_{x \to \infty} \frac{1}{e^x} = 0.
\quad\text{(right)}
$$

**Check assumptions!**

Make sure you are allowed to use L'Hôpital's before actually using it. This seems obvious, but it happens more than you think. Before you take derivatives, it's good to build the habit of checking that you have an indeterminate form. Here's an example that doesn't satisfy condition (ii):

$$
\lim_{x \to 0} \frac{x^2}{\cos{x}} = \lim_{x \to 0} -\frac{2x}{\sin{x}} = -2.
\quad\text{(wrong)}
$$

This is incorrect because you don't have an indeterminate form, but it doesn't even look like a mistake, which it's why it's so important to be careful when using the rule. Instead, for this problem, you can plug in $x = 0$ directly to get $0$.

Here's another example which satisfies condition (ii) but violates condition (iv):

$$
\lim_{x \to \infty} \frac{x + \sin{x}}{x} = \lim_{x \to \infty} \frac{1 + \cos{x}}{1} = \mathrm{DNE}.
$$

This does **not** mean that the limit does not exist; instead, it only tells you that L'Hôpital's rule is inconclusive here. Indeed, even though the limit of the derivatives does not exist, the original limit _does_ exist:

$$
\lim_{x \to \infty} \frac{x + \sin{x}}{x} \cdot \frac{\frac{1}{x}}{\frac{1}{x}}
    = \lim_{x \to \infty} \frac{1 + \frac{\sin{x}}{x}}{1}
    = 1.
$$

**L'Hôpital's does not mean that old techniques are useless now!**

Consider this limit:

$$
\lim_{x \to \infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}
    = \lim_{x \to \infty} \frac{e^x + e^{-x}}{e^x - e^{-x}}
    = \lim_{x \to \infty} \frac{e^x - e^{-x}}{e^x + e^{-x}}
    = \cdots
$$

As you can see, repeatedly using L'Hôpital's doesn't do anything for you, since you just end up with the original limit again. Instead, you can multiply and divide by $e^{-x}$, which gives

$$
\lim_{x \to \infty} \frac{e^x - e^{-x}}{e^x + e^{-x}} \cdot \frac{e^{-x}}{e^{-x}}
    = \lim_{x \to \infty} \frac{1 - e^{-2x}}{1 + e^{-2x}}
    = 1.
$$

### Examples

<example>

Calculate $\lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sqrt{1 - \cos^2{x}}}$.

</example>

<solution>

Before using L'Hôpital's, you should always take a minute to see if you can simplify anything. In this problem, if you don't do that, you end up with a horrible derivative in the denominator. But if you do simplify, you will just get $\sin{x}$ in the bottom—much nicer! If you use L'Hôpital's after this, you just get

$$
\lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sqrt{1 - \cos^2{x}}}
    = \lim_{x \to 0^+} \frac{\sin{x} - x^2}{\sin{x}}
    = \lim_{x \to 0^+} \frac{\cos{x} - 2x}{\cos{x}}
    = \boxed{1}.
$$

</solution>

<example>

Calculate $\lim_{x \to 0^+} x^{2\sqrt{x}}$.

</example>

<solution>

Here, we're going to want to use logarithms to bring the exponent down, so first set $y = x^{2\sqrt{x}}$. Then we simply need to calculate $\lim_{x \to 0^+} \ln{y}$: (I will put an $H$ when I use L'Hôpital's rule)

$$
\begin{aligned}
    \lim_{x \to 0^+} \ln{y}
         = \lim_{x \to 0^+} 2\sqrt{x} \ln{x}
        &= \lim_{x \to 0^+} \frac{2\ln{x}}{\frac{1}{\sqrt{x}}} \\
        &= \lim_{x \to 0^+} \frac{2\ln{x}}{x^{-1/2}} \\
        &\overset{H}= \lim_{x\to0^+} \frac{\frac{2}{x}}{-\frac{1}{2}x^{-3/2}} \\
        &= \lim_{x\to0^+} -\frac{4}{x} \cdot x^{3/2} \\
        &= \lim_{x\to0^+} -4x^{1/2} \\
        &= 0.
\end{aligned}
$$

Finally, we need to evaluate the original limit:

$$
\lim_{x \to 0^+} y
    = \lim_{x \to 0^+} e^{\ln{y}}
    = e^{\lim_{x \to 0^+} \ln{y}}
    = e^0
    = \boxed{1}.
$$

</solution>

<example>

Calculate $\lim_{x \to \infty} \abs{\frac{x + 1}{x - 2}}^{\sqrt{x^2 - 4}}$.

</example>

<solution>

Like in the previous example, we're going to set $y = \abs{\frac{x + 1}{x - 2}}^{\sqrt{x^2 - 4}}$. Then

$$
\begin{aligned}
    \lim_{x \to \infty} \ln{y}
        &= \lim_{x \to \infty} \sqrt{x^2 - 4}\ln\p{\frac{x + 1}{x - 2}} \\
        &= \lim_{x \to \infty} \frac{\ln\p{\frac{x + 1}{x - 2}}}{\frac{1}{\sqrt{x^2 - 4}}} \\
        &= \lim_{x \to \infty} \frac{\ln\p{x + 1} - \ln\p{x - 2}}{\p{x^2 - 4}^{-1/2}} \\
        &\overset{H}{=} \lim_{x \to \infty} \frac{\frac{1}{x+1} - \frac{1}{x-2}}{-x\p{x^2 - 4}^{-3/2}} \\
        &= \lim_{x \to \infty} \frac{\frac{x-2}{\p{x+1}\p{x-2}} - \frac{x+1}{\p{x+1}\p{x-2}}}{-x} \cdot \p{x^2 - 4}^{3/2} \\
        &= \lim_{x \to \infty} \frac{-3\p{x^2 - 4}^{3/2}}{-x\p{x+1}\p{x-2}} \\
        &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2}}{x\p{x+1}\p{x-2}}
\end{aligned}
$$

When $x$ is large, $\p{x^2 - 4}^{3/2}$ is roughly $\p{x^2}^{3/2} = x^3$, and the denominator is also roughly $x^3$. So, we will multiply and divide by $\frac{1}{x^3}$. Notice that $x^3 = \p{x^2}^{3/2}$, which gives

$$
\begin{aligned}
    &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2}}{x\p{x+1}\p{x+2}} \cdot \frac{\frac{1}{x^3}}{\frac{1}{x^3}} \\
    &= \lim_{x \to \infty} \frac{3\p{x^2 - 4}^{3/2} \p{\frac{1}{x^2}}^{3/2}}{\frac{x\p{x+1}\p{x-2}}{x^3}} \\
    &= \lim_{x \to \infty} \frac{3\p{\frac{x^2 - 4}{x^2}}^{3/2}}{\frac{x}{x} \frac{x+1}{x} \frac{x-2}{x}} \\
    &= \lim_{x \to \infty} \frac{3\p{1 - \frac{4}{x^2}}^{3/2}}{\p{1 + \frac{1}{x}}\p{1 - \frac{2}{x}}} \\
    &= 3.
\end{aligned}
$$

Finally, we just need to go back to the original limit. By continuity,

$$
\lim_{x \to 0^+} y
    = \lim_{x \to 0^+} e^{\ln{y}}
    = e^{\lim_{x \to 0^+} \ln{y}}
    = \boxed{e^3}.
$$

</solution>

<exercise>

Find $a$ and $b$ so that

$$
\lim_{x \to 0} \p{\frac{\sin{2x}}{x^3} + \frac{a}{x^2} + b} = 1.
$$

_Hint:_ If you find the value of $b$ before finding the value of $a$, you did not check the assumptions before using L'Hôpital's rule!

</exercise>
