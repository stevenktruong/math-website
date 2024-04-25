---
title: Office Hours Corrections for Homework 3
date: "2024-04-25"
publish: yes
---

# Office Hours Corrections for Homework 3

## Table of Contents

## Problem 1

### Part (b)

I'm not sure what Rowan intended you to do with the cutoff approach, but I found a [solution online](https://math.stackexchange.com/questions/4629828/expansion-of-characteristic-function) that doesn't really use part (a). It actually does involve the Lagrange remainder (which is the one from the mean value theorem), but applied to the real and imaginary parts of our functions separately.

Assume first that $n$ is even so that $i^n \in \R$ and set $f\p{t} = e^{it} = \cos t + i\sin t$. Then there exists $a_\xi \in \p{0, \xi}$ such that

$$
\begin{aligned}
  \Re \p{e^{i\xi X} - \sum_{k=0}^{n-1} \frac{\p{i\xi X}^k}{k!}}
    &= \Re \p{\frac{f^{\p{n}}\p{a_\xi}}{n!} \p{\xi X}^n} \\
    &= \frac{\p{\xi X}^n}{n!} \Re \p{i^n e^{ia_\xi}} \\
    &= \frac{\p{i\xi X}^n}{n!} \cos a_\xi
\end{aligned}
$$

Similarly, there exists $b_\xi \in \p{0, \xi}$ such that

$$
\Im \p{e^{i\xi X} - \sum_{k=0}^{n-1} \frac{\p{i\xi X}^k}{k!}}
  = \frac{\p{i\xi X}^n}{n!} \sin b_\xi.
$$

Putting everything together,

$$
\begin{aligned}
  \E\abs{e^{i\xi X} - \sum_{k=0}^n \frac{\p{i\xi X}^k}{k!}}
    &= \E\abs{e^{i\xi X} - \sum_{k=0}^{n-1} \frac{\p{i\xi X}^k}{k!} - \frac{\p{i\xi X}^n}{n!}} \\
    &= \E\abs{\frac{\p{i\xi X}^n}{n!} \p{\cos a_\xi + i\sin b_\xi - 1}} \\
    &\leq \abs{\xi}^n h\p{\xi},
\end{aligned}
$$

where

$$
h\p{\xi} = \frac{\E\abs{X}^n}{n!} \abs{\cos a_\xi + i\sin b_\xi - 1}.
$$

I'll leave it to you to fill in the case where $n$ is odd, and also how to choose $\delta$ so that $\abs{\xi} < \delta$ implies $h\p{\xi} < \varepsilon$.

### Part (c)

I suspect Rowan wants you to use a result like the one discussed in this [MathOverflow post](https://mathoverflow.net/questions/88501/converse-of-taylors-theorem). For the homework, I won't grade this problem very hard, but you can either:

1. Apply the theorem mentioned in the post (i.e., checking that the conditions are all met and stating the conclusion clearly); or

2. Use the dominated convergence theorem approach I mentioned in discussion.
