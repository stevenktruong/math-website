---
title: Homework 5
date: "2024-02-20"
tags:
    - confidence intervals
    - proportions
publish: yes
---

# Homework 5

## Table of Contents

## Problem 1

Out of $1000$ welds that have been made on a tower, it is suspected that $15\%$ are defective. To estimate $p$, the proportion of defective welds, how many welds must be inspected to have approximately $95\%$ confidence that the maximum error of the estimate of $p$ is $0.04$?

<solution>

Since we have a strong prior belief about the true proportion, we may use $\widehat{p} = 0.15$ in the confidence interval. The confidence interval in question is

$$
\widehat{p} \pm z_{\frac{\alpha}{2}} \sqrt{\frac{\widehat{p}\p{1-\widehat{p}}}{n}}
  = \widehat{p} \pm \underbrace{1.960 \sqrt{\frac{0.15\p{1-0.15}}{n}}}_{\text{standard error}}.
$$

For the standard error of the estimate to be at most $0.04$, we need to solve

$$
\begin{gathered}
  1.960 \sqrt{\frac{0.15\p{1-0.15}}{n}} \leq 0.04 \\
  \implies n \geq \p{\frac{1.960}{0.04}}^2 \cdot 0.15\p{1 - 0.15} = 306.1275.
\end{gathered}
$$

Thus, the smallest $n$ that works is

$$
\boxed{n = 307}.
$$

</solution>

## Problem 2

If $\mean{X}$ and $\mean{Y}$ are the respective means of two independent random samples of the same size $n$, find $n$ if we want $\mean{x} - \mean{y} \pm 4$ to be an approximate $90\%$ confidence interval for $\mu_X - \mu_Y$. Assume that the standard deviations are known to be $\sigma_X = 15$ and $\sigma_Y = 25$.

<solution>

The confidence interval will be

$$
\mean{x} - \mean{y} \pm z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_X^2}{n} + \frac{\sigma_Y^2}{n}}
  = \mean{x} - \mean{y} \pm 1.645 \sqrt{\frac{15^2}{n} + \frac{25^2}{n}}.
$$

For $\mean{x} - \mean{y} \pm 4$ to be an approximate $90\%$ confidence interval, we need the standard error to be at most $4$, so we get

$$
\begin{gathered}
  1.645 \sqrt{\frac{15^2}{n} + \frac{25^2}{n}} \leq 4 \\
  \implies n \geq \p{\frac{1.645}{4}}^2 \cdot 850 = 143.757578125 \\
  \boxed{n = 144}
\end{gathered}
$$

</solution>

## Problem 3

A manufacturer sells a light bulb that has a mean life of $1450$ hours with a standard deviation of $33.7$ hours. A new manufacturing process is being tested, and there is interest in knowing the mean life of the new bulbs. How large a sample is required so that $\br{\mean{x} - 5, \mean{x} + 5}$ is a $95\%$ confidence interval for $\mu$? You may assume that the change in the standard deviation is minimal.

<solution>

Since the change in the standard deviation is minimal, we can use $\sigma = 33.7$ in the confidence interval and use a normal distribution. Like before, we need the standard error to be at most $5$:

$$
z_{0.025} \frac{\sigma}{\sqrt{n}} \leq 5
\implies n \geq \p{\frac{1.960}{5}}^2 \cdot 1135.69 = 174.51466816,
$$

so we use

$$
\boxed{n = 175}.
$$

</solution>

## Problem 4

For a public opinion poll for a close presidential election, let $p$ denote the proportion of voters who favor candidate $A$. How large a sample should be taken if we want the maximum error of the estimate of $p$ to be equal to

1. $0.03$ with approximate $95\%$ confidence?
2. $0.02$ with approximate $95\%$ confidence?

<solution>

We have no information or guess on the true parameter $p$, so use the upper bound $p\p{1 - p} \leq \frac{1}{4}$. We can bound

$$
z_{0.025} \sqrt{\frac{p\p{1 - p}}{n}} \leq 1.960 \sqrt{\frac{1}{4n}}.
$$

To have the maximum error be less than some given $\varepsilon > 0$, we need

$$
\begin{aligned}
  1.960\sqrt{\frac{1}{4n}} \leq \varepsilon \\
  n \geq \p{\frac{1.960}{\varepsilon}}^2 \cdot \frac{1}{4}.
\end{aligned}
$$

1. In this case, $\varepsilon = 0.03$, which gives

    $$
    n \geq 1067.11111111 \implies \boxed{n = 1068}.
    $$

2. Similarly, $\varepsilon = 0.02$, so

    $$
    n \geq 2401 \implies \boxed{n = 2401}.
    $$

</solution>

## Problem 5

For $n = 12$ year-$2007$ model sedans whose horse-power is between $290$ and $390$, the following measurements give the time in seconds for the car to go from $0$ to $60~\mathrm{mph}$:

$$
\begin{array}{rrrrrrrrrrrr}
    6.0 & 6.3 & 5.0 & 6.0 & 5.7 & 5.9 & 6.8 & 5.5 & 5.4 & 4.8 & 5.4 & 5.8
\end{array}
$$

1. Find a $96.14\%$ confidence interval for the median, $m$.
2. The interval $\p{y_1, y_7}$ could serve as a confidence interval for $\pi_{0.3}$. Find it and give its confidence level.

<solution>

First, we need to sort the data to get the sample order statistics $y_1, \ldots, y_{12}$:

$$
\begin{array}{rrrrrrrrrrrr}
  4.8 & 5.0  & 5.4 & 5.4 & 5.5 & 5.7 & 5.8 & 5.9 & 6.0 & 6.0 & 6.3 & 6.8 \\\hline
  y_1 & y_2 & y_3 & y_4 & y_5 & y_6 & y_7 & y_8 & y_9 & y_{10} & y_{11} & y_{12}
\end{array}
$$

1. From the textbook (or just from brute force), we know $\p{i, j} = \p{3, 10}$ works.

    $$
    \p{y_3, y_{10}} = \boxed{\p{5.4, 6.0}}
    $$

2. The interval is

    $$
    \p{y_1, y_7} = \boxed{\p{4.8, 5.8}}.
    $$

    The confidence level is the probability the interval $\p{Y_1, Y_7}$ contains $\pi_{0.3}$:

    $$
    \P\p{Y_1 < \pi_{0.3} < Y_7}
      = \sum_{k=1}^6 \binom{12}{k} \p{0.3}^k \p{0.7}^{12-k}
      = \boxed{94.76\%}
    $$

</solution>
