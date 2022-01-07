---
title: Week 1 Discussion Notes
date: "2022-01-04"
tags:
    - integration review
publish: yes
---

# Week 1 Discussion Notes

## Table of Contents

## Direct Integration

This "technique" is used when the integrand is the derivative of a function that you already know. Basically, if you remember the common derivatives, then you already know a lot of integrals.

### Power Rule

The derivative of $x^n$ is $nx^{n-1}$, so you immediately get

$$
\int nx^{n-1} \,\diff{x} = x^n + C
\implies \int x^{n-1} \,\diff{x} = \frac{x^n}{n} + C.
$$

(I absorbed the $n$ into the $C$, since $n$ is just a constant.)

### Trig Functions

Recall the derivatives of the trig functions:

$$
\begin{aligned}
    \deriv{}{x} \sin{x} &= \phantom{-}\cos{x} \\
    \deriv{}{x} \cos{x} &= -\sin{x} \\
    \deriv{}{x} \tan{x} &= \phantom{-}\sec^2{x} \\
    \deriv{}{x} \cot{x} &= -\csc^2{x} \\
    \deriv{}{x} \sec{x} &= \phantom{-}\sec{x}\tan{x} \\
    \deriv{}{x} \csc{x} &= -\csc{x}\cot{x}
\end{aligned}
$$

This becomes a list of integrals:

$$
\begin{aligned}
    \int \cos{x} \,\diff{x} &= \phantom{-}\sin{x} + C \\
    \int \sin{x} \,\diff{x} &= -\cos{x} + C \\
    \int \sec^2{x} \,\diff{x} &= \phantom{-}\tan{x} + C \\
    \int \csc^2{x} \,\diff{x} &= -\cot{x} + C \\
    \int \sec{x}\tan{x} \,\diff{x} &= \phantom{-}\sec{x} + C \\
    \int \csc{x}\cot{x} \,\diff{x} &= -\csc{x} + C
\end{aligned}
$$

Beyond these, there are a few weirder ones that don't really fit under direct integration, but are still good to know off the top of your head:

$$
\begin{aligned}
    \int \tan{x} \,\diff{x} &= \phantom{-}\ln{\abs{\sec{x}}} + C \\
    \int \sec{x} \,\diff{x} &= \phantom{-}\ln{\abs{\sec{x} + \tan{x}}} + C \\
    \int \cot{x} \,\diff{x} &= -\ln{\abs{\csc{x}}} + C \\
    \int \csc{x} \,\diff{x} &= -\ln{\abs{\csc{x} + \cot{x}}} + C
\end{aligned}
$$

You can derive the ones for $\tan{x}$ and $\cot{x}$ using $u$-substitution. The ones for $\sec{x}$ and $\csc{x}$ use a trick, though.

### Exponentials and Logarithms

Like before, here are the common derivatives:

$$
\begin{aligned}
    \deriv{}{x} b^x &= b^x \ln{b} \\[2ex]
    \deriv{}{x} \log_b{x} &= \frac{1}{x\ln{b}}
\end{aligned}
$$

The first one gives you the integral

$$
\int b^x \,\diff{x} = \frac{b^x}{\ln{b}} + C.
$$

When $b = e$, the second one gives you

$$
\int \frac{1}{x} \,\diff{x} = \ln{\abs{x}} + C.
$$

The reason for the absolute value is because if $x < 0$, then

$$
\deriv{}{x} \ln\p{-x} = \frac{1}{-x} \cdot -1 = \frac{1}{x}
$$

by the chain rule. So both $\ln{x}$ and $\ln\p{-x}$ are antiderivatives for $\frac{1}{x}$ depending on the sign of $x$.

### Inverse Trig Functions

Here are the derivatives:

$$
\begin{aligned}
    \deriv{}{x} \arcsin{x} &= \phantom{-}\frac{1}{\sqrt{1 - x^2}} \\
    \deriv{}{x} \arctan{x} &= \phantom{-}\frac{1}{1 + x^2} \\
    \deriv{}{x} \arcsec{x} &= \phantom{-}\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
    \deriv{}{x} \arccos{x} &= -\frac{1}{\sqrt{1 - x^2}} \\
    \deriv{}{x} \arccot{x} &= -\frac{1}{1 + x^2} \\
    \deriv{}{x} \arccsc{x} &= -\frac{1}{\abs{x}\sqrt{x^2 - 1}} \\
\end{aligned}
$$

So you have these integrals:

$$
\begin{aligned}
    \int \frac{1}{\sqrt{1 - x^2}} \,\diff{x} &= \arcsin{x} + C \\
    \int \frac{1}{1 + x^2} \,\diff{x} &= \arctan{x} + C \\
    \int \frac{1}{\abs{x}\sqrt{x^2 - 1}} \,\diff{x} &= \arcsec{x} + C
\end{aligned}
$$

## Symmetry

Sometimes, you need to calculate a definite integral, but you "can't" integrate something (i.e., you can't express the antiderivative in terms of trig functions, exponentials, polynomials, etc.). In some cases, you can still write down the answer:

<example>

Calculate $\displaystyle \int_{-2}^2 \sin\p{x^3} \,\diff{x}$.

</example>

<solution>

You won't be able to integrate $f\p{x} = \sin\p{x^3}$ no matter how hard you try. However, this function has a special property-it's an odd function:

$$
f\p{-x}
    = \sin\p{\p{-x}^3}
    = \sin\p{-x^3}
    = -\sin\p{x^3}
    = -f\p{x}.
$$

Moreover, the definite integral we're trying to calculate has symmetric bounds, so the integral of $f$ on $\br{-2, 0}$ will cancel out with the integral on $\br{0, 2}$. In other words,

$$
\int_{-2}^2 \sin\p{x^3} \,\diff{x} = \boxed{0}.
$$

</solution>

## $u$-substitution

$u$-substitution is the "reverse chain rule." This means you'll want to try it when you see a function and its derivative (maybe times a constant).

<example>

Calculate $\displaystyle \int x\sin\p{x^2} \,\diff{x}$.

</example>

<solution>

Here, you can see $x^2$ and basically its derivative $2x$, except we're missing a $2$. This means we'll want to try $u = x^2$, which gives $\diff{u} = 2x \,\diff{x}$, so the integral becomes

$$
\begin{aligned}
    \int x\sin\p{x^2} \,\diff{x}
        &= \int \sin{u} \,\frac{\diff{u}}{2} \\
        &= -\frac{1}{2} \cos{u} + C \\
        &= \boxed{-\frac{1}{2} \cos\p{x^2} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \frac{\diff{x}}{x\ln{x}}$.

</example>

<solution>

We can write the integral as

$$
\int \frac{1}{x} \cdot \frac{1}{\ln{x}} \,\diff{x},
$$

and from here, it's more clear that we see $\ln{x}$ and its derivative, so we can set $u = \ln{x}$ to get

$$
\begin{aligned}
    \int \frac{\diff{x}}{x\ln{x}}
        &= \int \frac{\diff{u}}{u} \\
        &= \ln\abs{u} + C \\
        &= \boxed{\ln\abs{\ln{x}} + C}.
\end{aligned}
$$

</solution>

Here's a fun problem that's similar:

<exercise>

Calculate $\displaystyle \int \frac{\diff{x}}{x\p{\ln{x}}\ln\p{\ln{x}}}$.

</exercise>

## Integration by Parts

Similar to $u$-substitution, integration by parts is a "reverse product rule."

<theorem> integration by parts

$$
\int u \,\diff{v} = uv - \int v \,\diff{u}
$$

</theorem>

Equivalently, you can write this as

$$
\int f\p{x} g'\p{x} \,\diff{x} = f\p{x}g\p{x} - \int f'\p{x}g\p{x} \,\diff{x}.
$$

In other words, integration by parts lets you replace $f\p{x}$ with its derivative $f'\p{x}$, which can sometimes simplify the integral. For example, if $f\p{x} = \ln{x}$, then $f'\p{x} = \frac{1}{x}$, which is generally easier to work with when integrating.

There are two main scenarios where you want to use integration by parts:

1. When you want to integrate a product of two "random" functions.
2. When you want to integrate a "weird" function by itself.

<example>

Calculate $\displaystyle \int x\cos{x} \,\diff{x}$.

</example>

<solution>

Here, we're in scenario 1 above. For this problem, you will want to use the parts $u = x$ and $\diff{v} = \cos{x} \,\diff{v}$, which give

$$
\diff{u} = \diff{x}
\quad\text{and}\quad
v = \sin{x}.
$$

Then

$$
\begin{aligned}
    \int x\cos{x} \,\diff{x}
        &= \int u \,\diff{v} \\
        &= uv - \int v \,\diff{u} \\
        &= x\sin{x} - \int \sin{x} \,\diff{x} \\
        &= \boxed{x\sin{x} + \cos{x} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int \arcsin{x} \,\diff{x}$.

</example>

<solution>

This time, we're in scenario 2. When this happens, we can just let $u = \arcsin{x}$ and $\diff{v} = \diff{x}$, so

$$
\diff{u} = \frac{\diff{x}}{\sqrt{1 - x^2}}
\quad\text{and}\quad
v = x.
$$

Plugging everything in,

$$
\begin{aligned}
    \int \arcsin{x} \,\diff{x}
        &= \int u \,\diff{v} \\
        &= uv - \int v \,\diff{u} \\
        &= x\arcsin{x} - \int \frac{x}{\sqrt{1 - x^2}} \,\diff{x}.
\end{aligned}
$$

So, we just need to calculate this new integral, which can be done using the substitution $w = 1 - x^2$. This gives us $\diff{w} = -2x \,\diff{x}$, so

$$
\begin{aligned}
    \int \frac{x}{\sqrt{1 - x^2}} \,\diff{x}
        &= -\frac{1}{2} \int \frac{\diff{w}}{\sqrt{w}} \\
        &= -\sqrt{w} + C \\
        &= -\sqrt{1 - x^2} + C.
\end{aligned}
$$

Thus,

$$
\int \arcsin{x} \,\diff{x}
    = \boxed{x\arcsin{x} + \sqrt{1 - x^2} + C}.
$$

</solution>

## Trig Substitution

You usually want to try this technique when you see something similar to $1 + x^2$ or $1 - x^2$ and a $u$-substitution doesn't work. When this happens, you'll want to choose your substitution as follows:

$$
\begin{aligned}
    1 - x^2 &\rightsquigarrow x = \sin{\theta} \\
    1 + x^2 &\rightsquigarrow x = \tan{\theta}
\end{aligned}
$$

<example>

Calculate $\displaystyle \int \frac{\diff{x}}{\sqrt{1 + x^2}}$.

</example>

<solution>

Any $u$-substitution you try won't work here since there's no $x$ in the numerator, so we'll have to try a trig substitution. We're in the $1 + x^2$ case, so we can set $x = \tan{\theta}$, which means $\diff{x} = \sec^2{\theta} \,\diff{\theta}$. Then

$$
\begin{aligned}
    \int \frac{\diff{x}}{\sqrt{1 + x^2}}
        &= \int \frac{\sec^2{\theta}}{\sqrt{1 + \tan^2{\theta}}} \,\diff{\theta} \\
        &= \int \frac{\sec^2{\theta}}{\sec{\theta}} \,\diff{\theta} \\
        &= \int \sec{\theta} \,\diff{\theta} \\
        &= \ln\abs{\sec{\theta} + \tan{\theta}} + C.
\end{aligned}
$$

To finish the problem, we need to undo the substitution. We already know that $\tan{\theta} = x$ (this was the substitution we started with), and for $\sec{\theta}$, we can use our trig identities:

$$
\sec^2{\theta}
    = 1 + \tan^2{\theta}
    = 1 + x^2
\implies \sec{\theta} = \sqrt{1 + x^2}.
$$

Substituting everything back in, we get

$$
\int \frac{\diff{x}}{\sqrt{1 + x^2}}
    = \boxed{\ln\abs{\sqrt{1 + x^2} + x} + C}.
$$

</solution>

<example>

Calculate $\displaystyle \int \sqrt{1 - 4x^2} \,\diff{x}$.

</example>

<solution>

If you don't remember your trig identities (like the double-angle identities), then it may be helpful to take a look at [this review sheet](../../21f.31b.3/useful-formulas/) I made for my 31B students last quarter (you can ignore everything starting at Series).

For this problem, we're essentially in the $1 - x^2$ case, though it's not _exactly_ in that form yet. We can write

$$
\sqrt{1 - 4x^2}
    = \sqrt{1 - \p{2x}^2},
$$

so replacing $x$ with $2x$, we get the substitution $2x = \sin{\theta}$. Then $2 \,\diff{x} = \cos{\theta} \,\diff{\theta}$, and we get

$$
\begin{aligned}
    \int \sqrt{1 - 4x^2} \,\diff{x}
        &= \frac{1}{2} \int \sqrt{1 - \sin^2{\theta}} \cos{\theta} \,\diff{\theta} \\
        &= \frac{1}{2} \int \cos^2{\theta} \,\diff{\theta} \\
        &= \frac{1}{2} \int \frac{1 + \cos{2\theta}}{2} \,\diff{\theta}
            && \p{\text{double-angle identity}} \\
        &= \frac{1}{4} \int 1 + \cos{2\theta} \,\diff{\theta} \\
        &= \frac{1}{4} \p{\theta + \frac{1}{2} \sin{2\theta}} + C \\
        &= \frac{1}{4} \theta + \frac{1}{8} \sin{2\theta} + C.
\end{aligned}
$$

Solving for $\theta$ from $2x = \sin{\theta}$, we get $\theta = \arcsin{2x}$. To undo the substitution for the other term, we'll need another identity:

$$
\sin{2\theta} = 2\sin{\theta}\cos{\theta}
$$

We already know $\sin{\theta} = 2x$, and to get $\cos{\theta}$,

$$
\cos{\theta}
    = \sqrt{1 - \sin^2{\theta}}
    = \sqrt{1 - 4x^2},
$$

which means

$$
\sin{2\theta}
    = 2 \cdot 2x \cdot \sqrt{1 - 4x^2}
    = 4x\sqrt{1 - 4x^2}.
$$

Putting everything together, we end up with

$$
\int \sqrt{1 - 4x^2} \,\diff{x}
    = \boxed{\frac{1}{4} \arcsin{2x} + \frac{1}{2} x\sqrt{1 - 4x^2} + C}.
$$

</solution>
