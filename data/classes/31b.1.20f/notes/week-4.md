---
title: Week 4 Discussion Notes
date: "2020-10-29"
publish: yes
---

# Week 4 Discussion Notes

## Table of Contents

## Midterm Review

### Selected Practice Exam Questions

<example>

Calculate $\displaystyle\int_{\sqrt{\pi/6}}^{\sqrt{\pi/4}} \frac{x\ln\p{\tan{x^2}}}{\sin{2x^2}} \,\diff{x}$.

</example>

<solution>

First, we want to get rid of the $2$ in the sine term so that all the angles match up. If you remember your trig identities,

$$
\sin{2x^2} = 2\sin\p{x^2}\cos\p{x^2}.
$$

Let $u = \ln\p{\tan{x^2}}$, which gives

$$
\begin{aligned}
    \diff{u}
         = \frac{1}{\tan{x^2}} \cdot \sec^2{x^2} \cdot 2x \,\diff{x}
        &= \frac{\cos{x^2}}{\sin{x^2}} \cdot \frac{1}{\cos^2{x^2}} \cdot 2x \,\diff{x} \\
        &= \frac{2x}{\sin\p{x^2}\cos\p{x^2}} \,\diff{x}.
\end{aligned}
$$

Our new bounds will be

$$
\begin{aligned}
    u\p{\sqrt{\frac{\pi}{6}}}
        &= \ln\p{\tan\frac{\pi}{6}}
         = \ln\frac{1}{\sqrt{3}}
         = -\frac{1}{2}\ln{3} \\
    u\p{\sqrt{\frac{\pi}{4}}}
        &= \ln\p{\tan\frac{\pi}{4}}
         = \ln{1}
         = 0.
\end{aligned}
$$

Now we can do our substitution:

$$
\begin{aligned}
    \int_{\sqrt{\pi/6}}^{\sqrt{\pi/4}} \frac{x\ln\p{\tan{x^2}}}{\sin{2x^2}} \,\diff{x}
        &= \int_{\sqrt{\pi/6}}^{\sqrt{\pi/4}} \frac{x\ln\p{\tan{x^2}}}{2\sin\p{x^2}\cos\p{x^2}} \,\diff{x} \\
        &= \int_{\sqrt{\pi/6}}^{\sqrt{\pi/4}} \ln\p{\tan{x^2}} \cdot \frac{2}{2} \cdot \frac{x}{2\sin\p{x^2}\cos\p{x^2}} \,\diff{x} \\
        &= \int_{\sqrt{\pi/6}}^{\sqrt{\pi/4}} \frac{\ln\p{\tan{x^2}}}{4} \cdot \frac{2x}{\sin\p{x^2}\cos\p{x^2}} \,\diff{x} \\
        &= \int_{-\frac{1}{2}\ln{3}}^0 \frac{u}{4} \,\diff{u} \\
        &= \left. \frac{u^2}{8} \right\rvert_{-\frac{1}{2}\ln{3}}^0 \\
        &= -\frac{1}{8}\p{-\frac{\ln{3}}{2}}^2 \\
        &= \boxed{-\frac{\p{\ln{3}}^2}{32}}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle\int_0^{\pi/8} \cos^{-1}\p{\sin{2x}} \,\diff{x}$.

</example>

<solution>

This is actually a trig problem in disguise. It becomes a very easy problem if you remember that

$$
\sin{\theta} = \cos\p{\frac{\pi}{2} - \theta}.
$$

You can either draw a picture or use the angle-sum identity to prove it. So, the integral becomes

$$
\begin{aligned}
    \int_0^{\pi/8} \cos^{-1}\p{\sin{2x}} \,\diff{x}
        &= \int_0^{\pi/8} \cos^{-1}\p{\cos\p{\frac{\pi}{2} - 2x}} \,\diff{x} \\
        &= \int_0^{\pi/8} \frac{\pi}{2} - 2x \,\diff{x} \\
        &= \left. \p{\frac{\pi x}{2} - x^2} \right\rvert_0^{\pi/8} \\
        &= \frac{\pi^2}{16} - \frac{\pi^2}{64} \\
        &= \boxed{\frac{3\pi^2}{64}}.
\end{aligned}
$$

</solution>

<exercise>

Calculate $\displaystyle\int_0^{\pi/2} \sin^{-1}\p{\cos{x}} \,\diff{x}$.

</exercise>

<example>

Calculate $\displaystyle\lim_{x\to\infty} x\sin\frac{1}{e^x}$.

</example>

<solution>

After a glance, this is of the form $\infty \cdot 0$. So, we can rewrite it and apply L'Hôpital's:

$$
\begin{aligned}
    \lim_{x\to\infty} x\sin\frac{1}{e^x}
        &= \lim_{x\to\infty} \frac{\sin{e^{-x}}}{\frac{1}{x}} \\
        &\overset{H}{=} \lim_{x\to\infty} \frac{-e^{-x}\cos{e^{-x}}}{-\frac{1}{x^2}} \\
        &= \lim_{x\to\infty} \cos{e^{-x}} \cdot \frac{x^2}{e^x} \\
        &= \p{\lim_{x\to\infty} \cos{e^{-x}}}\p{\lim_{x\to\infty} \frac{x^2}{e^x}} \\
        &= 1 \cdot 0 \\
        &= \boxed{0}.
\end{aligned}
$$

</solution>

### L'Hôpital's Rule Examples

<example>

Calculate $\displaystyle \lim_{x\to0} \frac{2\sin{x} - \sin{2x}}{\sin{x} - x\cos{x}}$.

</example>

<solution>

The limit has the form $\frac{0}{0}$, so we can apply L'Hôpital's straight away:

$$
\lim_{x\to0} \frac{2\sin{x} - \sin{2x}}{\sin{x} - x\cos{x}}
    \overset{H}{=} \lim_{x\to0} \frac{2\cos{x} - 2\cos{2x}}{\cos{x} - \cos{x} + x\sin{x}}
    = \lim_{x\to0} \frac{2\cos{x} - 2\cos{2x}}{x\sin{x}}.
$$

You might be tempted to use L'Hôpital's again, but if you look ahead, you should see that you basically get your original limit back, so it won't be of any help. This means we have to try to calculate the limit as is. Like one of the problems before, we want to get rid of the $2x$ is the cosine in the numerator. If you recall, $\cos{2x} = 2\cos^2{x} - 1$, so the numerator becomes $2\cos{x} - 4\cos^2{x} + 2$. We're going to want to factor this, so if we let $u = \cos{x}$,

$$
\begin{aligned}
    2\cos{x} - 4\cos^2{x} + 2
        &= -4u^2 + 2u + 2 \\
        &= -2\p{2u^2 - u - 1} \\
        &= -2\p{u - 1}\p{2u + 1} \\
        &= -2\p{\cos{x} - 1}\p{2\cos{x} + 1}.
\end{aligned}
$$

So, the limit becomes

$$
\lim_{x\to0} \frac{2\cos{x} - 2\cos{2x}}{x\sin{x}}
    = \lim_{x\to0} \frac{-2\p{\cos{x} - 1}\p{2\cos{x} + 1}}{x\sin{x}}.
$$

The $2\cos{x} + 1$ term goes to $3$, so it's harmless here, which means we want to turn our attention to the other terms:

$$
\begin{aligned}
    \lim_{x\to0} \frac{\cos{x} - 1}{x\sin{x}} \cdot \frac{\cos{x} + 1}{\cos{x} + 1}
        &= \lim_{x\to0} \frac{-\sin^2{x}}{x\p{\cos{x} + 1}\sin{x}} \\
        &= \lim_{x\to0} -\frac{\sin{x}}{x} \cdot \frac{1}{\cos{x} + 1} \\
        &= -\p{\lim_{x\to0} \frac{\sin{x}}{x}} \p{\lim_{x\to0} \frac{1}{\cos{x} + 1}} \\
        &= -1 \cdot \frac{1}{2} \\
        &= -\frac{1}{2}.
\end{aligned}
$$

Finally, we can calculate our limit:

$$
\begin{aligned}
    \lim_{x\to0} \frac{-2\p{\cos{x} - 1}\p{2\cos{x} + 1}}{x\sin{x}}
        &= \lim_{x\to0} -2 \cdot \frac{\cos{x} - 1}{x\sin{x}} \cdot \p{2\cos{x} + 1} \\
        &= -2 \p{\lim_{x\to0} \frac{\cos{x} - 1}{x\sin{x}}} \p{\lim_{x\to0} 2\cos{x} + 1} \\
        &= -2 \cdot -\frac{1}{2} \cdot 3 \\
        &= \boxed{3}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x\to0^+} \p{\csc{x}}^{\p{\cos^{-1}\p{x}}/\ln{x}}$.

</example>

<solution>

This is of the form $\infty^0$, so let $y = \displaystyle \p{\csc{x}}^{\p{\cos^{-1}{x}}/\ln{x}}$, which gives

$$
\ln{y}
    = \frac{\cos^{-1}{x}}{\ln{x}} \ln\p{\csc{x}}.
$$

The $\cos^{-1}{x}$ term is harmless since it goes to $\frac{\pi}{2}$, so we need to look at the other terms.

$$
\begin{aligned}
\lim_{x\to0^+} \frac{\ln\p{\csc{x}}}{\ln{x}}
    = \lim_{x\to0^+} -\frac{\ln\p{\sin{x}}}{\ln{x}}
    &\overset{H}{=} \lim_{x\to0^+} -\frac{\frac{\cos{x}}{\sin{x}}}{\frac{1}{x}} \\
    &= \lim_{x\to0^+} -\cos{x} \cdot \frac{x}{\sin{x}} \\
    &= -\p{\lim_{x\to0^+} \cos{x}} \p{\lim_{x\to0^+} \frac{x}{\sin{x}}} \\
    &= -1 \cdot 1 \\
    &= -1.
\end{aligned}
$$

So, this means

$$
\begin{aligned}
    \lim_{x\to0^+} \ln{y}
        &= \lim_{x\to0^+} \frac{\cos^{-1}{x}}{\ln{x}} \ln\p{\csc{x}} \\
        &= \p{\lim_{x\to0^+} \cos^{-1}{x}} \p{\lim_{x\to0^+} \frac{\ln\p{\csc{x}}}{\ln{x}}} \\
        &= \frac{\pi}{2} \cdot -1 \\
        &= -\frac{\pi}{2}.
\end{aligned}
$$

Going back to our original limit, continuity of $e^x$ gives

$$
\begin{aligned}
    \lim_{x\to0^+} y
        &= \lim_{x\to0^+} e^{\ln{y}} \\
        &= e^{\lim_{x\to0^+} \ln{y}} \\
        &= \boxed{e^{-\pi/2}}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x\to0^+} \frac{\ln{x}}{\cot{x}}$.

</example>

<solution>

The limit has the indeterminate form $\frac{\infty}{\infty}$, so we can use L'Hôpital's right away.

$$
\begin{aligned}
    \lim_{x\to0^+} \frac{\ln{x}}{\cot{x}}
        &\overset{H}{=} \lim_{x\to0^+} \frac{\frac{1}{x}}{-\csc^2{x}} \\
        &= \lim_{x\to0^+} -\frac{\sin{x}}{x} \cdot \sin{x} \\
        &= -\p{\lim_{x\to0^+} \frac{\sin{x}}{x}} \p{\lim_{x\to0^+} \sin{x}} \\
        &= -1 \cdot 0 \\
        &= \boxed{0}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x\to0^+} \p{\frac{\sin{x}}{x}}^{1/x^2}$.

</example>

<solution>

This is of the form $1^\infty$, so like before, we're gonna set $y = \p{\frac{\sin{x}}{x}}^{1/x^2}$. Then

$$
\ln{y}
    = \frac{1}{x^2} \ln\p{\frac{\sin{x}}{x}}
    = \frac{\ln\p{\frac{\sin{x}}{x}}}{x^2}.
$$

When $x \to 0^+$, we get the indeterminate form $\frac{0}{0}$, so by L'Hôpital's

$$
\begin{aligned}
    \lim_{x\to0^+} \ln{y}
        = \lim_{x\to0^+} \frac{\ln\p{\frac{\sin{x}}{x}}}{x^2}
        &= \lim_{x\to0^+} \frac{\ln{\sin{x} - \ln{x}}}{x^2} \\
        &\overset{H}{=} \lim_{x\to0^+} \frac{\frac{\cos{x}}{\sin{x}} - \frac{1}{x}}{2x} \\
        &= \lim_{x\to0^+} \frac{\frac{x\cos{x}}{x\sin{x}} - \frac{\sin{x}}{x\sin{x}}}{2x} \\
        &= \lim_{x\to0^+} \frac{x\cos{x} - \sin{x}}{2x^2\sin{x}} \\
        &\overset{H}{=} \lim_{x\to0^+} \frac{\cos{x} - x\sin{x} - \cos{x}}{4x\sin{x} + 2x^2\cos{x}} \\
        &= \lim_{x\to0^+} \frac{-x\sin{x}}{4x\sin{x} + 2x^2\cos{x}} \\
        &= \lim_{x\to0^+} \frac{-\sin{x}}{4\sin{x} + 2x\cos{x}} \cdot \frac{\frac{1}{x}}{\frac{1}{x}}\\
        &= \lim_{x\to0^+} \frac{-\frac{\sin{x}}{x}}{4\frac{\sin{x}}{x} + 2\cos{x}} \\
        &= \frac{-1}{4 + 2} \\
        &= -\frac{1}{6}.
\end{aligned}
$$

Finally, going back to the original limit, we get

$$
\begin{aligned}
    \lim_{x\to0^+} y
        &= \lim_{x\to0^+} e^{\ln{y}} \\
        &= e^{\lim_{x\to0^+} \ln{y}} \\
        &= \boxed{e^{-1/6}}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \lim_{x\to0} \frac{\sin^{-1}{x}}{x^2\csc{x}}$.

</example>

<solution>

First, we're going to rewrite the limit as

$$
\lim_{x\to0} \frac{\sin^{-1}{x}}{x^2\csc{x}}
    = \lim_{x\to0} \frac{\sin^{-1}{x}}{x} \cdot \frac{\sin{x}}{x}.
$$

We know that $\lim_{x\to0} \frac{\sin{x}}{x} = 1$, so we only have to worry about the other factor. It has the form $\frac{0}{0}$, so we can use L'Hôpital's:

$$
\lim_{x\to0} \frac{\sin^{-1}{x}}{x}
    \overset{H}{=} \lim_{x\to0} \frac{\frac{1}{\sqrt{1 - x^2}}}{1}
    = 1.
$$

So, we get

$$
\lim_{x\to0} \frac{\sin^{-1}{x}}{x} \cdot \frac{\sin{x}}{x}
    = \p{\lim_{x\to0} \frac{\sin^{-1}{x}}{x}} \p{\lim_{x\to0} \frac{\sin{x}}{x}}
    = 1 \cdot 1
    = \boxed{1}.
$$

</solution>

## Integration By Parts

### Statement

I don't think this is on the midterm, but I covered some of it anyway (if we had enough time). As a quick review, here's the statement of integration by parts:

<theorem>

###### Theorem (integration by parts)

If $u$ and $v$ are functions, then

$$
\int u \,\diff{v} = uv - \int v \,\diff{u}.
$$

</theorem>

Given an integral, you're free to choose $u$ and $\diff{v}$ however you like. However, the main issue after applying the formula is the integral term $\int v \,\diff{u}$, so before you start, try to think about what $v \,\diff{u}$ looks like.

The way I remember the formula is that you pick one thing to differentiate ($u$) and one thing to integrate ($\diff{v}$). Then you integrate first to get $uv$ and then differentiate after to get $v \,\diff{u}$.

### Examples

<example>

Calculate $\displaystyle \int \cos^{-1}{x} \,\diff{x}$.

</example>

<solution>

Even though there's only one term, we can still use integration by parts because $\cos^{-1}{x} = \cos^{-1}{x} \cdot 1$. Choose $\diff{v} = \cos^{-1}{x} \,\diff{x}$ isn't going to do anything for us because we don't know how to integrate it (yet), so we need to let $u = \cos^{-1}{x}$ and $\diff{v} = \diff{x}$ instead. Then

$$
\diff{u} = -\frac{\diff{x}}{\sqrt{1 - x^2}}
\quad\text{and}\quad
v = x.
$$

So if we integrate by parts, we get

$$
\begin{aligned}
    \int \cos^{-1}{x} \,\diff{x}
        &= x\cos^{-1}{x} - \int -\frac{x}{\sqrt{1 - x^2}} \,\diff{x} \\
        &= x\cos^{-1}{x} + \int \frac{x}{\sqrt{1 - x^2}} \,\diff{x} \\
        &= \boxed{x\cos^{-1}{x} - \sqrt{1 - x^2} + C}.
\end{aligned}
$$

(To calculate the integral, you can use $u = 1 - x^2$.)

</solution>

<example>

Calculate $\displaystyle \int \frac{\ln{x}}{x^3} \,\diff{x}$.

</example>

<solution>

I want to differentiate $\ln{x}$ because it gives me $\frac{1}{x}$, which plays nicely with all the other terms. So, we want to choose $u = \ln{x}$ and $\diff{v} = \frac{1}{x^3} \,\diff{x}$, which gives

$$
\diff{u} = \frac{\diff{x}}{x}
\quad\text{and}\quad
v = -\frac{1}{2x^2}.
$$

Then the integral becomes

$$
\begin{aligned}
    \int \frac{\ln{x}}{x^3} \,\diff{x}
        &= -\frac{\ln{x}}{2x^2} - \int -\frac{\diff{x}}{2x^3} \\
        &= -\frac{\ln{x}}{2x^2} + \int \frac{\diff{x}}{2x^3} \\
        &= -\frac{\ln{x}}{2x^2} - \frac{1}{4x^2} + C \\
        &= \boxed{-\p{\frac{2\ln{x} - 1}{4x^2}} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int e^{2x} \sin{x} \,\diff{x}$.

</example>

<solution>

This is one of those problems that requires multiple uses of integration by parts and a trick. Here, your choice of $u$ and $\diff{v}$ don't really matter, so I'm going to set $u = e^{2x}$ and $\diff{v} = \sin{x} \,\diff{x}$, which gives

$$
\diff{u} = 2e^{2x} \,\diff{x}
\quad\text{and}\quad
v = -\cos{x}.
$$

After the first application of integration by parts, we get

$$
\begin{aligned}
    \int e^{2x} \sin{x} \,\diff{x}
        &= -e^{2x} \cos{x} - \int -2e^{2x} \cos{x} \,\diff{x} \\
        &= -e^{2x} \cos{x} + \int 2e^{2x} \cos{x} \,\diff{x}.
\end{aligned}
$$

We're gonna do the same thing, except with $\diff{v} = \cos{x} \,\diff{x}$ this time, so we get

$$
\begin{aligned}
    \colorbox{red}{$\displaystyle\int e^{2x} \sin{x} \,\diff{x}$}
        &= -e^{2x} \cos{x} + \p{2e^{2x} \sin{x} - \int 4e^{2x} \sin{x} \,\diff{x}} \\
        &= -e^{2x} \cos{x} + 2e^{2x} \sin{x} - 4\colorbox{red}{$\displaystyle\int e^{2x} \sin{x} \,\diff{x}$}.
\end{aligned}
$$

Notice that we get the same integral on both sides, so we can just solve for it. If we add $4\int e^{2x} \sin{x} \,\diff{x}$ to both sides, we get

$$
\begin{aligned}
    5\int e^{2x} \sin{x} \,\diff{x} &= -e^{2x} \cos{x} + 2e^{2x} \sin{x} + C \\
    \implies \int e^{2x} \sin{x} \,\diff{x} &= \boxed{-\frac{1}{5}e^{2x}\cos{x} + \frac{2}{5}e^{2x}\sin{x} + C}.
\end{aligned}
$$

</solution>

<example>

Calculate $\displaystyle \int x \sin{x} \cos{x} \,\diff{x}$.

</example>

<solution>

This problem can be made a lot easier if you remember your trig identities:

$$
\sin{2x} = 2\sin{x} \cos{x} \implies \sin{x}\cos{x} = \frac{\sin{2x}}{2},
$$

so the integral becomes

$$
\int x \sin{x} \cos{x} \,\diff{x}
    = \frac{1}{2} \int x \sin{2x} \,\diff{x}.
$$

When doing integration by parts, we don't want to set $\diff{v} = x \,\diff{x}$ because we'll end up with something like $x^2 \cos{2x}$, which is harder. Instead, we'll set $u = x$ and $\diff{v} = \sin{2x} \,\diff{x}$, which gives

$$
\diff{u} = \diff{x}
\quad\text{and}\quad
v = -\frac{\cos{2x}}{2}.
$$

So, the integral becomes

$$
\begin{aligned}
    \frac{1}{2} \int x \sin{2x} \,\diff{x}
        &= \frac{1}{2} \p{-\frac{1}{2} x\cos{2x} - \int -\frac{1}{2}\cos{2x} \,\diff{x}} \\
        &= \frac{1}{2} \p{-\frac{1}{2} x\cos{2x} + \int \frac{1}{2}\cos{2x} \,\diff{x}} \\
        &= \frac{1}{2} \p{-\frac{1}{2} x\cos{2x} + \frac{1}{4}\sin{2x}} + C \\
        &= \boxed{-\frac{1}{4} x\cos{2x} + \frac{1}{8}\sin{2x} + C}.
\end{aligned}
$$

</solution>
