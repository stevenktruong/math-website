---
title: Homework 4
date: "2024-02-17"
tags:
    - confidence intervals
    - difference of means
publish: yes
---

# Homework 4

## Table of Contents

## Problem 1

To determine whether the bacteria count was lower in the west basin of Lake Macatawa than in the east basin, $n = 37$ samples of water were taken from the west basin and the number of bacteria colonies in $100$ milliliters of water was counted. The sample characteristics were $\mean{x} = 11.95$ and $s = 11.80$, measured in hundreds of colonies. Find an approximate $95\%$ confidence interval for the mean number of colonies (say, $\mu_W$) in $100$ milliliters of water in the west basin.

<solution>

While the true standard deviation is unknown, the sample size is large enough to allow us to use the central limit theorem, so the confidence interval will be

$$
11.95 \pm z_{0.025} \frac{11.80}{\sqrt{37}}
  = \boxed{\br{8.15, 15.75}}.
$$

</solution>

## Problem 2

A leakage test was conducted to determine the effectiveness of a seal designedto keep the inside of a plug airtight. An air needle was inserted into the plug, and the plug and needlewere placed under water. The pressure was then increased until leakage was observed. Let $X$ equal the pressure in pounds per square inch. Assume that the distribution of $X$ is $\mathcal{N}\p{\mu, \sigma^2}$. The following $n = 10$ observations of $X$ were obtained:

$$
\begin{array}{rrrrr}
3.1 & 3.3 & 4.5 & 4.2 & 3.5 \\
3.5 & 3.7 & 4.2 & 3.9 & 3.3
\end{array}
$$

Use the observations to:

1. Find a point estimate of $\mu$.
2. Find a point estimate of $\sigma$.
3. Find a $95\%$ one-sided confidence interval for $\mu$ that provides an upper bound for $\mu$.

<solution>

1.  $$
    \boxed{\mean{x} \approx 3.72}
    $$

2.  $$
    \boxed{s \approx 0.46}
    $$

3.  Since the sample is small and the variance is unknown, we need to use a $t$-distribution with $10 - 1 = 9$ degrees of freedom:

    $$
    T = \frac{\mean{X} - \mu}{S/\sqrt{10}} \sim t\p{9}
    $$

    For a $95\%$ one-sided confidence interval, we use

    $$
    \P\p{T \leq t_{0.05}\p{9}} = 0.95.
    $$

    This gives the one-sided interval

    $$
    \mu \leq \mean{x} + t_{0.05}\p{9} \frac{s}{\sqrt{10}}
     = \boxed{\poc{-\infty, 3.99}}.
    $$

</solution>

## Problem 3

Students in a semester-long health-fitness program have their percentage of body fat measured at the beginning of the semester and at the end of the semester. The following measurements give these percentages for $9$ men and for $8$ women:

$$
\begin{array}{cc}
  \text{Males} & \text{Females} \\\hline \\[-2ex]
  \begin{array}{cc}
    \text{Pre-program (\%)} & \text{Post-program (\%)} \\\hline \\[-2ex]
       11.10 & \phantom{1}9.97  \\
       19.50 & 15.80 \\
       14.00 & 13.02 \\
       \phantom{1}8.30  & 9.28  \\
       12.40 & 11.51 \\
       \phantom{1}7.89  & \phantom{1}7.40  \\
       12.10 & 10.70 \\
       \phantom{1}8.30  & 10.40 \\
       12.31 & 11.40
  \end{array} &
 \begin{array}{cc}
    \text{Pre-program (\%)} & \text{Post-program (\%)} \\\hline \\[-2ex]
      22.90 & 22.89 \\
      31.60 & 33.47 \\
      27.70 & 25.75 \\
      21.70 & 19.80 \\
      19.36 & 18.00 \\
      25.03 & 22.33 \\
      26.90 & 25.26 \\
      25.75 & 24.90 \\
      \phantom{s}
  \end{array}
\end{array}
$$

1. Let $X$ be the change in percentage of body fat for females before and after the program. Assume $X \sim \mathcal{N}\p{\mu_X, \sigma_X^2}$ for some unknown $\sigma_X^2$. Construct a $90\%$ confidence interval for $\mu_X$.

2. Let $Y$ be the change in percentage of body fat for males before and after the program. Assume $Y \sim \mathcal{N}\p{\mu_Y, \sigma_Y^2}$ for some unknown $\sigma_Y^2$. Construct a $90\%$ confidence interval for $\mu_Y$.

3. Assume $\sigma_X^2 = \sigma_Y^2 = \sigma^2$ for some unknown $\sigma^2$. Construct a $90\%$ confidence interval for $\mu_X - \mu_Y$.

4. Is the program effective in reducing percentage of body fat? Is it more effective for males or for females?

<solution>

1. Since the sample size is small and the variance is unknown, we use a $t$-distribution for our confidence interval. Our sample for $X$ is

    $$
    \begin{array}{rrrr}
      -0.01 & 1.87 & -1.95 & -1.90 \\
      -1.36 & -2.70 & -1.64 & -0.85
    \end{array}
    $$

    Thus, our confidence interval is

    $$
    \mean{y} \pm t_{0.05}\p{7} \frac{s_Y}{\sqrt{8}}
      = \boxed{\br{-2.03, -0.11}}.
    $$

2. Similarly, our sample for $Y$ is

    $$
    \begin{array}{rrrrr}
       -1.13 & -3.70 & -0.98 & 0.98 & -0.89 \\
       -0.49 & -1.40 & 2.10 & -0.91
    \end{array}
    $$

    We get the confidence interval

    $$
    \mean{x} \pm t_{0.05}\p{8} \frac{s_X}{\sqrt{9}}
      = \boxed{\br{-1.70, 0.28}}.
    $$

3. Since the variances are the same, we will use a $t$-distribution with degrees of freedom $9 + 8 - 2 = 15$. Recall the pooled sample variance:

    $$
    S_p^2 = \frac{\p{n_X-1} S_X^2 + \p{n_Y-1} S_Y^2}{n_X + n_Y - 2}.
    $$

    The final confidence interval will be

    $$
    \mean{x} - \mean{y} \pm t_{0.05}\p{15} s_p \sqrt{\frac{1}{9} + \frac{1}{8}}
      = \boxed{\br{-0.94, 1.65}}.
    $$

4. Based on the samples and confidence intervals, the program seems to be effective for females, but inconclusive for males (since it contains $0$). Similarly, based on the confidence interval for the difference of the means, there is no evidence that the program is more effective for a particular sex.

</solution>

## Problem 4

Let $X_1, \ldots, X_5$ be a random sample of SAT mathematics scores, assumed to be $\mathcal{N}\p{\mu_X, \sigma^2}$, and let $Y_1, \ldots Y_5$ be an independent random sample of SAT verbal scores, assumed to be $\mathcal{N}\p{\mu_Y , \sigma^2}$. If the following data are observed:

$$
\begin{aligned}
   x_1 &= 644, & x_2 &= 493, & x_3 &= 532, & x_4 &= 462, & x_5 &= 565 \\
   y_1 &= 632, & y_2 &= 472, & y_3 &= 492, & y_4 &= 661, & y_5 &= 540,
\end{aligned}
$$

find a $90\%$ confidence interval for $\mu_X - \mu_Y$.

<solution>

Because the sample size is small and the variances are unknown, we use a $t$-distribution with degrees of freedom $5 + 5 - 2 = 8$. The confidence interval is

$$
\mean{x} - \mean{y} \pm t_{0.05}\p{8} s_p \sqrt{\frac{1}{5} + \frac{1}{5}}
  = \boxed{\br{-111.27, 70.87}}.
$$

Alternatively, you can also view the problem as $n = 5$ samples from

$$
X - Y = \mathcal{N}\p{\mu_X - \mu_Y, 2\sigma^2},
$$

in which case, you use a $t$-distribution with degrees of freedom $5 - 1 = 4$, which gives

$$
\mean{x} - \mean{y} \pm t_{0.05}\p{4} \frac{s}{\sqrt{5}}
  = \boxed{\br{-115.98, 75.58}}.
$$

</solution>

## Problem 5

Let $X$ and $Y$ be the life time (in hours) of two types of light bulbs, respectively. Assume $X \sim \mathcal{N}\p{\mu_X, 689}$ and $Y \sim \mathcal{N}\p{\mu_Y , 735}$. Suppose a random sample of $23$ type $X$ light bulbs yields an average life time of $956.2$ hours, and a random sample of $28$ type $Y$ light bulbs yields an average life time of $978.6$ hours. Construct a $95\%$ confidence interval for $\mu_X - \mu_Y$.

<solution>

The variances are known, so we can use a normal distribution.

$$
\mean{x} - \mean{y} \pm z_{0.025} \sqrt{\frac{\sigma_X^2}{23} + \frac{\sigma_Y^2}{28}}
  = \boxed{\br{-37.09, -7.71}}.
$$

</solution>
