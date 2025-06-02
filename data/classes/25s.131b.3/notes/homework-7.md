---
title: Homework 7
date: "2025-06-01"
tags:
    - trigonometric functions
publish: yes
---

# Homework 7

## Table of Contents

## Exercise 4.7.3

Prove Theorem 4.7.5. (Hint: for (iii), you may wish to first compute $\sin\p{\frac{\pi}{2}}$ and $\cos\p{\frac{\pi}{2}}$, and then link $\cos\p{x}$ to $\sin\p{x + \frac{\pi}{2}}$.)

<theorem> 4.7.5

Let $x$ be a real number.

1. We have $\cos\p{x + \pi} = -\cos\p{x}$ and $\sin\p{x + \pi} = −\sin\p{x}$. In particular we have $\cos\p{x + 2\pi} = \cos\p{x}$ and $\sin\p{x + 2\pi} = \sin\p{x}$, i.e., $\sin$ and $\cos$ are periodic with period $2\pi$.
2. We have $\sin\p{x} = 0$ if and only if $\frac{x}{\pi}$ is an integer.
3. We have $\cos\p{x} = 0$ if and only if $\frac{x}{\pi}$ is an integer plus $\frac{1}{2}$.

</theorem>

<solution>

1. By the angle-sum identities (proven in Theorem 4.7.2(d)),

    $$
    \cos\p{x + \pi}
      = \cos\p{x}\cos\p{\pi} - \sin\p{x}\sin\p{\pi}
      = -\cos\p{x}.
    $$

    Here, we have used $\cos\p{\pi} = -1$ and $\sin\p{\pi} = 0$, which we know since we have proven $e^{i\pi} + 1 = 0$. Similarly,

    $$
    \sin\p{x + \pi}
      = \sin\p{x}\cos\p{\pi} + \cos\p{x}\sin\p{\pi}
      = -\sin\p{x}.
    $$

    We get $2\pi$-periodicity by applying these identities twice.

2. "$\implies$"

    Assume $\sin\p{x} = 0$ but $\frac{x}{\pi} \notin \Z$. Then there exist $k \in \Z$ and $r \in \p{0, 1}$ such that $\frac{x}{\pi} = k + r$. Applying (i) $k$ times (i.e., by induction), we get

    $$
    0
      = \abs{\sin\p{x}}
      = \abs{\sin\p{k\pi + r\pi}}
      = \abs{\sin\p{r\pi}}.
    $$

    But $0 < r\pi < \pi$ and $\pi$ is the smallest positive zero of $\sin$, so this is not possible.

    $\impliedby$

    By applying (i) $k$ times (i.e., by induction),

    $$
    \abs{\sin\p{k\pi}}
     = \abs{\sin\p{0}}
     = 0.
    $$

3. Note that $0 = \sin\p{\pi} = 2\sin\p{\frac{\pi}{2}} \cos\p{\frac{\pi}{2}}$ and $\sin\p{\frac{\pi}{2}}$ by definition of $\pi$, so $\cos\p{\frac{\pi}{2}} = 0$. Since $\cos^2\p{\frac{\pi}{2}} + \sin^2\p{\frac{\pi}{2}} = 1$, we have $\sin\p{\frac{\pi}{2}} \in \set{1, -1}$. We have already shown that $\sin\p{x} > 0$ on $\p{0, \pi}$, so necessarily $\sin\p{\frac{\pi}{2}} = 1$. In particular,

    $$
    \sin\p{x + \frac{\pi}{2}}
      = \sin\p{x}\cos\p{\frac{\pi}{2}} + \cos\p{x}\sin\p{\frac{\pi}{2}}
      = \cos\p{x}.
    $$

    Using this and part (ii),

    $$
    \cos\p{x} = 0
      \iff \sin\p{x + \frac{\pi}{2}} = 0
      \iff \frac{x + \frac{\pi}{2}}{\pi} = k \text{ for some } k \in \Z.
    $$

    Finally, we note that

    $$
    \frac{x + \frac{\pi}{2}}{\pi} = k
      \iff \frac{x}{\pi} = k - \frac{1}{2}
      \iff \frac{x}{\pi} = \p{k - 1} + \frac{1}{2}.
    $$

### Common Mistakes

The main mistake I saw was students writing something like this:

> $e^{ix} = 1 \implies x = 2\pi k$ for some $k \in \Z$.

While this is a true statement, we have not yet proven it. In fact, proving the above line (which is the content of Exercise 4.7.5) hinges on this exercise, so the reasoning is circular.

In a similar vein, I also saw a lot of students write this:

> Since $e^{ix}$ is $2\pi$-periodic, we have $e^{ix} = e^{i0} \iff x = 2\pi k$ for some $k \in \Z$.

Just being $2\pi$-periodic is not enough to conclude this. For example, $f\p{x} = 0$ is also $2\pi$-periodic (it's $T$-periodic for any $T > 0$), but clearly the statement

$$
f\p{x} = f\p{0} \iff x = 2\pi k \text{ for some } k \in \Z
$$

is false. What this illustrates is that a correct proof has to use much more than just $2\pi$-periodicity.

</solution>

## Exercise 4.7.5

Show that if $r, s > 0$ are positive real numbers, and $\theta, \alpha$ are real numbers such that $re^{i\theta} = se^{i\alpha}$, then $r = s$ and $\theta = \alpha + 2\pi k$ for some integer $k$.

<solution>

By taking magnitudes on both sides,

$$
r = \abs{re^{i\theta}} = \abs{se^{i\theta}} = s.
$$

Dividing through by $r$, we get

$$
e^{i\theta} = e^{i\alpha}
  \implies e^{i\p{\theta-\alpha}} = 1 + 0i
  \implies \cos\p{\theta - \alpha} = 1 \text{ and } \sin\p{\theta - \alpha} = 0.
$$

By Exercise 4.7.3(ii) above, the second equality implies $\theta - \alpha = k\pi$ for some integer $k$. If $k = 2\ell + 1$ is odd, then by $2\pi$-periodicity,

$$
1
  = \cos\p{\theta - \alpha}
  = \cos\p{2\pi \ell + \pi}
  = \cos\p{\pi}
  = -1,
$$

which is not possible. Thus, $k$ must be even, so $\theta = \alpha + 2\pi k$ for some integer $k$.

</solution>
