---
title: Week 10 Discussion Notes
date: "2021-12-03"
tags:
    - integration
publish: yes
---

# Week 10 Discussion Notes

## Table of Contents

## Integration Techniques

As a quick summary, here are the main techniques we learned in the past week:

-   Integration by parts
-   Trig integrals (essentially just trig identities and integration by parts)
-   Trig substitution (basically a $u$-substitution combined with trig integrals)
-   Partial fractions

From this list, the only real new one this week is the method of partial fractions.

## Partial Fractions

You usually want to use partial fractions when you want to integrate a rational function, i.e., a function of the form

$$
\frac{P\p{x}}{Q\p{x}},
$$

where $P$ and $Q$ are polynomials such that $\deg{P} < \deg{Q}$ (if this isn't the case, then you have to do long division first). For example, the result of partial fractions looks something like

$$
\frac{1}{\p{x - 1}\p{x - 2}} = \frac{1}{x - 2} - \frac{1}{x - 1}.
$$

As you can imagine, the left side is hard to integrate, but the right side is a lot easier to integrate.

### Process

When setting up the partial fractions, you want to look at the factors of $q$. Here're the rules for the setup:

**Linear Factors**

For every factor of $Q$ of the form $\p{x + a}^n$, you need to include the following terns:

$$
\frac{A_1}{x + a} + \frac{A_2}{\p{x + a}^2} + \cdots + \frac{A_N}{\p{x + a}^N}.
$$

**Quadratic Factors**

For factors of the form $\p{x^2 + ax + b}^M$, you need

$$
\frac{A_1x + B_1}{x^2 + ax + b} + \frac{A_2x + B_2}{\p{x^2 + ax + b}^2} + \cdots + \frac{A_Mx + B_M}{\p{x^2 + ax + b}^M}.
$$

Once you have the setup, you need to solve for all the constants.

<example>

Calculate $\displaystyle \int \frac{x^2}{\p{x+1}\p{x^2+1}} \,\diff{x}$.

</example>

<solution>

As you might guess, we're going to want to perform partial fractions first before integrating. We have a factor of $\p{x + 1}$ and $\p{x^2 + 1}$, so our decomposition looks like

$$
\begin{gathered}
    \frac{x^2}{\p{x+1}\p{x^2+1}}
        = \frac{A}{x+1} + \frac{Bx+C}{x^2+1} \\
    x^2 = A\p{x^2 + 1} + \p{Bx + C}\p{x + 1}.
\end{gathered}
$$

I multiplied both sides by $\p{x+1}\p{x^2+1}$ to get to the second line. From here, there are two main ways to solve for the coefficients:

**Method 1:** Expand and match coefficients.

If you expand the right-hand side and collect like terms, you get

$$
\begin{aligned}
    x^2
        &= Ax^2 + A + Bx^2 + Bx + Cx + C \\
    x^2 + 0x + 0
        &= \p{A + B}x^2 + \p{B + C}x + A + C.
\end{aligned}
$$

The equation is true for every value of $x$, and this means that the coefficients have to be the same, so you get the system

$$
\begin{cases}
    A + B = 1 \\
    B + C = 0 \\
    A + C = 0
\end{cases}
$$

and you can solve for $A, B, C$ from here.

**Method 2:** Plug in values for $x$.

Like before, the equation is true for _any_ $x$, so you can plug in convenient values to get equations for your coefficients:

$$
\begin{aligned}
    x = -1
        &\implies 1 = 2A \\
        &\implies A = \frac{1}{2} \\
    x = 0
        &\implies 0 = A + C \\
        &\implies C = -\frac{1}{2} \\
    x = 1
        &\implies 1 = 2A + 2\p{B + C} \\
        &\implies B = \frac{1}{2}.
\end{aligned}
$$

You can use either method (or even both at the same time), and you should get the same numbers each time. Our calculations tell us that

$$
\frac{x^2}{\p{x+1}\p{x^2+1}}
    = \frac{\frac{1}{2}}{x+1} + \frac{\frac{1}{2}x - \frac{1}{2}}{x^2+1}.
$$

Now, to integrate this, we just have to integrate all the terms on the right. You'll usually want to split things up at this point:

$$
\int \frac{\frac{1}{2}}{x+1} \,\diff{x}
    = \frac{1}{2} \ln{\abs{x+1}} + C.
$$

For the second one, we can use the substitution $u = x^2 + 1$, which gives $\diff{u} = 2x \,\diff{x}$. Then

$$
\begin{aligned}
    \int \frac{\frac{1}{2}x}{x^2 + 1} \,\diff{x}
        &= \frac{1}{4} \int \frac{2x}{x^2 + 1} \,\diff{x} \\
        &= \frac{1}{4} \int \frac{\diff{u}}{u} \\
        &= \frac{1}{4} \ln{\abs{u}} + C \\
        &= \frac{1}{4} \ln{\abs{x^2+1}} + C.
\end{aligned}
$$

Finally, the third one is

$$
\int \frac{-\frac{1}{2}}{x^2+1} \,\diff{x}
    = -\frac{1}{2} \arctan{x} + C.
$$

Putting these all together, you get

$$
\int \frac{x^2}{\p{x+1}\p{x^2+1}} \,\diff{x}
    = \boxed{\frac{1}{2}\ln{\abs{x+1}} + \frac{1}{4}\ln{\abs{x^2+1}} - \frac{1}{2}\arctan{x} + C}.
$$

</solution>

### Examples

<example>

Calculate $\displaystyle\int x3^x \,\diff{x}$.

</example>

<solution>

When you see two "unrelated" functions multiplied with each other, usually integration by parts is the way to go. Here, we'll use $u = x$ and $\diff{v} = 3^x \,\diff{x}$. Then

$$
\diff{u} = \diff{x}
\quad\text{and}\quad
v = \frac{3^x}{\ln{3}},
$$

so we get

$$
\begin{aligned}
    \int x3^x \,\diff{x}
        &= \frac{x3^x}{\ln{3}} - \int \frac{3^x}{\ln{3}} \,\diff{x} \\
        &= \boxed{\frac{x3^x}{\ln{3}} - \frac{3^x}{\p{\ln{3}}^2} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle\int_0^{\pi/4} \tan^5{x} \,\diff{x}$.

</example>

<solution>

If you have a definite integral, I recommend just calculating the indefinite integral first, and then applying the bounds at the end.

Usually, it's a good idea to use the identity $\tan^2{x} + 1 = \sec^2{x}$ and see what happens:

$$
\begin{aligned}
    \int \tan^5{x} \,\diff{x}
        &= \int \p{\sec^2{x} - 1}\tan^3{x} \,\diff{x} \\
        &= \int \tan^3{x}\sec^2{x} \,\diff{x} - \int \tan^3{x} \,\diff{x}.
\end{aligned}
$$

We can take care of the first integral with the substitution $u = \tan{x}$, which gives $\diff{u} = \sec^2{x} \,\diff{x}$, so

$$
\int \tan^3{x} \sec^2{x} \,\diff{x}
    = \int u^3 \,\diff{u}
    = \frac{u^4}{4} + C
    = \frac{\tan^4{x}}{4} + C.
$$

For the second integral, we can use the trig identity again to get

$$
\begin{aligned}
    \int \tan^3{x} \,\diff{x}
        &= \int \p{\sec^2{x} - 1}\tan{x} \,\diff{x} \\
        &= \int \tan{x}\sec^2{x} \,\diff{x} - \int \tan{x} \,\diff{x}.
\end{aligned}
$$

We can use $u = \tan{x}$ again for the first term, and we already know the second one:

$$
\begin{aligned}
    \int \tan{x}\sec^2{x} \,\diff{x}
        &= \frac{\tan^2{x}}{2} + C \\
    \int \tan{x} \,\diff{x}
        &= \ln{\abs{\sec{x}}} + C.
\end{aligned}
$$

Putting these all together, we get

$$
\int \tan^5{x} \,\diff{x}
    = \frac{\tan^4{x}}{4} - \frac{\tan^2{x}}{2} + \ln{\abs{\sec{x}}} + C.
$$

Now we can apply the bounds. When $x = \frac{\pi}{4}$, we get

$$
\begin{aligned}
    \frac{\tan^4{\frac{\pi}{4}}}{4} - \frac{\tan^2{\frac{\pi}{4}}}{2} + \ln{\abs{\sec{\frac{\pi}{4}}}}
        &= \frac{1}{4} - \frac{1}{2} + \ln{\sqrt{2}} \\
        &= -\frac{1}{4} + \ln{\sqrt{2}}.
\end{aligned}
$$

When $x = 0$, we get

$$
\frac{\tan^4{0}}{4} - \frac{\tan^2{0}}{2} + \ln{\abs{\sec{0}}}
    = \ln{1}
    = 0.
$$

Thus,

$$
\int_0^{\pi/4} \tan^5{x} \,\diff{x}
    = \boxed{-\frac{1}{4} + \ln{\sqrt{2}}}.
$$

</solution>

<example>

Calculate $\displaystyle\int x^7\cos{\p{x^4}} \,\diff{x}$.

</example>

<solution>

Like in the first example, we _should_ integrate by parts. However, if you try it right away, it might get a little complicated. What you can do instead is start with a substitution: let $w = x^4$ so $\diff{w} = 4x^3 \,\diff{x}$ and

$$
\begin{aligned}
    \int x^7 \cos{\p{x^4}} \,\diff{x}
        &= \frac{1}{4} \int x^4 \cos{\p{x^4}} 4x^3 \,\diff{x} \\
        &= \frac{1}{4} \int w\cos{w} \,\diff{w}.
\end{aligned}
$$

Now it's more clear what parts we should use: $u = w$ and $\diff{v} = \cos{w} \,\diff{w}$, which gives $\diff{u} = \diff{w}$ and $v = \sin{w}$, so

$$
\frac{1}{4} \int w\cos{w} \,\diff{w}
    = \frac{w\sin{w}}{4} - \frac{1}{4} \int \sin{w} \,\diff{w}
    = \frac{w\sin{w}}{4} + \frac{\cos{w}}{4} + C.
$$

Undoing the substitution,

$$
\int x^7 \cos{\p{x^4}} \,\diff{x}
    = \boxed{\frac{x^4\sin{\p{x^4}}}{4} + \frac{\cos{\p{x^4}}}{4} + C}.
$$

</solution>

<example>

Calculate $\displaystyle\int e^x\tan^2{\p{e^x}} \,\diff{x}$.

</example>

<solution>

Hopefully, your first instinct is to do $u = e^x$, which gives us $\diff{u} = e^x \,\diff{x}$, so

$$
\begin{aligned}
    \int e^x\tan^2{\p{e^x}} \,\diff{x}
        &= \int \tan^2{u} \,\diff{u} \\
        &= \int \sec^2{u} - 1 \,\diff{u} \\
        &= \tan{u} - u + C \\
        &= \boxed{\tan{\p{e^x}} - e^x + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle\int \frac{\diff{x}}{\sqrt{x^2 - 4x + 8}}$.

</example>

<solution>

When you see a quadratic under a square root, you will usually want to use a trig substitution. However, right now, it's not clear what substitution to make, but it'll be more clear after completing the square:

$$
x^2 - 4x + 8
    = \p{x - 2}^2 + 4.
$$

With this, we get

$$
\begin{aligned}
    \int \frac{\diff{x}}{\sqrt{x^2 - 4x + 8}}
        &= \int \frac{\diff{x}}{\sqrt{\p{x-2}^2 + 4}} \\
        &= \int \frac{\diff{x}}{\sqrt{4\p{\frac{\p{x-2}^2}{4} + 1}}} \\
        &= \int \frac{\diff{x}}{2\sqrt{\p{\frac{x-2}{2}}^2 + 1}}.
\end{aligned}
$$

The thing in the square root looks like the trig identity $\tan^2{\theta} + 1 = \sec^2{\theta}$, which suggests the substitution

$$
\frac{x-2}{2} = \tan{\theta}
\implies \frac{\diff{x}}{2} = \sec^2{\theta} \,\diff{\theta}.
$$

We get

$$
\begin{aligned}
    \int \frac{\diff{x}}{2\sqrt{\p{\frac{x-2}{2}}^2 + 1}}
        &= \int \frac{\sec^2{\theta}}{\sqrt{\tan^2{\theta} + 1}} \,\diff{\theta} \\
        &= \int \frac{\sec^2{\theta}}{\sec{\theta}} \,\diff{\theta} \\
        &= \int \sec{\theta} \,\diff{\theta} \\
        &= \ln{\abs{\sec{\theta} + \tan{\theta}}} + C.
\end{aligned}
$$

($\int \sec{\theta} \,\diff{\theta}$ is an integral you should just know.)

To finish up, we need to undo the substitution. We already know that $\tan{\theta} = \frac{x-2}{2}$, and for $\sec{\theta}$, we can use the trig identity

$$
\begin{aligned}
    \sec^2{\theta}
        &= \tan^2{\theta} + 1 \\
    \implies
    \sec{\theta}
        &= \sqrt{\tan^2{\theta} + 1} \\
        &= \sqrt{\p{\frac{x-2}{2}}^2 + 1}.
\end{aligned}
$$

Plugging everything in, we get

$$
\ln{\abs{\sec{\theta} + \tan{\theta}}} + C
    = \boxed{\ln{\abs{\sqrt{\p{\frac{x-2}{2}}^2 + 1} + \frac{x-2}{2}}} + C}.
$$

</solution>
