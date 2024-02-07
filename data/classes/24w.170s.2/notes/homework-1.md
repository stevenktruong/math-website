---
title: Homework 1
date: "2024-01-31"
tags:
    - sample statistics
    - order statistics
publish: yes
---

# Homework 1

## Table of Contents

## Problem 1

Suppose we have the following sample of daily weekday afternoon (3 to 7pm) lead concentrations (in micrograms per cubic meter, $\mu g/m^3$) recorded by an air-monitoring station near the San Diego Freeway in Los Angeles during the fall of 1976:

$$
\begin{array}{rrrrrrrrrr}
  6.7 & 5.4 & 5.2 & 6.0 & 8.7 & 6.0 & 6.4 & 8.3 & 5.3 & 5.9 \\
  7.6 & 5.0 & 6.9 & 6.8 & 4.9 & 6.3 & 5.0 & 6.0 & 7.2 & 8.0 \\
  8.1 & 7.2 & 10.9 & 9.2 & 8.6 & 6.2 & 6.1 & 14.1 & 10.6 & 8.4 \\
\end{array}
$$

1. Calculate the sample mean $\mean{x}$, sample variance $s^2$, and sample standard deviation $s$.
2. How many observations lie within one standard deviation from the mean? How many lie within two standard deviations from the mean?

<solution>

1. This is a straightforward computation. Just keep in mind that to calculate $s^2$, you use $\frac{1}{n-1}$ instead of $\frac{1}{n}$.

    $$
    \boxed{
    \begin{aligned}
      \mean{x} &\approx 7.2 \\
      s^2 &\approx 4.2 \\
      s &\approx 2.0
    \end{aligned}
    }
    $$

2. There are $24$ observations (strictly) within one standard deviation from the mean, and $29$ (strictly) within two standard deviations from the mean. An efficient way to do this by hand is to calculate the range the observations need to lie in. For instance, for $x$ to be within one standard deviation from the mean, $x$ needs to satisfy

    $$
    \mean{x} - s \leq x \leq \mean{x} + s.
    $$

### Python Code

```py
data = [6.7, 5.4,  5.2, 6.0, 8.7, 6.0, 6.4,  8.3,  5.3, 5.9,
        7.6, 5.0,  6.9, 6.8, 4.9, 6.3, 5.0,  6.0,  7.2, 8.0,
        8.1, 7.2, 10.9, 9.2, 8.6, 6.2, 6.1, 14.1, 10.6, 8.4]

def sample_mean(data):
    n = len(data)
    return sum(data) / n


def sample_variance(data):
    x_bar = sample_mean(data)
    n = len(data)
    return sum([(x - x_bar) ** 2 for x in data]) / (n - 1)


def sample_standard_deviation(data):
    return sample_variance(data) ** 0.5


x_bar = sample_mean(data)
s2 = sample_variance(data)
s = sample_standard_deviation(data)

within_s = len([x for x in data if abs(x - x_bar) <= s])
within_2s = len([x for x in data if abs(x - x_bar) <= 2 * s])

print("x-bar:", x_bar)  # 7.233333333333333
print("s^2:  ", s2)     # 4.182298850574712
print("s:    ", s)      # 2.0450669550346543
print()
print("within  s of mean:", within_s)   # 24
print("within 2s of mean:", within_2s)  # 29
```

</solution>

## Problem 2

Suppose that a linear transformation is applied to each of the observations $x_1, x_2, \ldots, x_n$ in a set of data; that is, a transformed data set $y_1, y_2, \ldots, y_n$ is created from the original data via the equation

$$
y_i = ax_i + b,
\quad i = 1, 2, \ldots, n,
\quad a, b \in \R.
$$

Show that if $\mean{x}$ and $s_x^2$ are the sample mean and sample variance of the original data, then the sample mean and sample variance of the transformed data are given by

$$
\begin{aligned}
  \mean{y} &= a\mean{x} + b \\
  s_y^2 &= a^2 s_x^2.
\end{aligned}
$$

<solution>

For the mean,

$$
\begin{aligned}
  \mean{y}
    &= \frac{1}{n} \sum_{i=1}^n y_i \\
    &= \frac{1}{n} \sum_{i=1}^n \p{ax_i + b} \\
    &= a\p{\frac{1}{n} \sum_{i=1}^n x_i} + \frac{1}{n} \sum_{i=1}^n b \\
    &= a\mean{x} + b.
\end{aligned}
$$

For the sample variance,

$$
\begin{aligned}
  s_y^2
    &= \frac{1}{n-1} \sum_{i=1}^n \p{y_i - \mean{y}}^2 \\
    &= \frac{1}{n-1} \sum_{i=1}^n \p{ax_i + b - \p{a\mean{x} + b}}^2 \\
    &= \frac{1}{n-1} \sum_{i=1}^n \p{ax_i - a\mean{x}}^2 \\
    &= a^2\p{\frac{1}{n-1} \sum_{i=1}^n \p{x_i - \mean{x}}^2} \\
    &= a^2 s_x^2.
\end{aligned}
$$

</solution>

## Problem 3

Given the data set provided in Problem 1, calculate:

1. the first and third sample quartiles $\widetilde{\pi}_{0.25}, \widetilde{\pi}_{0.75}$, and the interquartile range $\mathrm{IQR}$;
2. the $10^{\mathrm{th}}$ and $90^{\mathrm{th}}$ sample percentiles;
3. are there any suspected outliers or outliers in the sample?

<solution>

When sorted, the data is

$$
\begin{array}{rrrrrrrrrr}
  4.9 & 5.0 & 5.0 & 5.2 & 5.3 & 5.4 & 5.9 &  6.0 &  6.0 &  6.0 \\
  6.1 & 6.2 & 6.3 & 6.4 & 6.7 & 6.8 & 6.9 &  7.2 &  7.2 &  7.6 \\
  8.0 & 8.1 & 8.3 & 8.4 & 8.6 & 8.7 & 9.2 & 10.6 & 10.9 & 14.1
\end{array}
$$

Recall that to compute $\widetilde{\pi}_p$, we first decompose $\p{n+1}p = d + r$, where $d$ is an integer and $0 \leq r < 1$. In our case, $n = 30$, so

$$
\p{30 + 1} \cdot 0.25 = 7 + 0.75.
$$

Thus, $\widetilde{\pi}_{0.25} = y_d + 0.75\p{y_{d+1} - y_d} = 5.9 + 0.75 \cdot \p{6.0 - 5.9} = 5.975$. The remaining percentiles are calculated similarly:

$$
\boxed{
\begin{aligned}
  \widetilde{\pi}_{0.25} &= 5.975 \\
  \widetilde{\pi}_{0.75} &= 8.325 \\
  \widetilde{\pi}_{0.1} &= 5.02 \\
  \widetilde{\pi}_{0.9} &= 10.46
\end{aligned}
}
$$

$$
  \boxed{\mathrm{IQR} = \widetilde{\pi}_{0.75} - \widetilde{\pi}_{0.25} = 2.35}
$$

Suspected outliers are the ones that satisfy

$$
\begin{aligned}
  \widetilde{\pi}_{0.25} - 3\mathrm{IQR}
    &\leq x
     \leq \widetilde{\pi}_{0.25} - 1.5\mathrm{IQR},\quad\text{or} \\
  \widetilde{\pi}_{0.75} + 1.5\mathrm{IQR}
    &\leq x
     \leq \widetilde{\pi}_{0.75} + 3\mathrm{IQR},
\end{aligned}
$$

and outliers satisfy

$$
\begin{aligned}
  x &< \widetilde{\pi}_{0.25} - 3\mathrm{IQR},\quad\text{or} \\
  x &> \widetilde{\pi}_{0.75} + 3\mathrm{IQR}.
\end{aligned}
$$

You can check by hand that $14.1$ is the only suspected outlier and that there are no outliers.

### Python Code

```py
import math


def sample_percentile(y, p):
    x = (len(data) + 1) * p
    d = math.floor(x)
    r = x - d

    # y[d] = y_{d+1} since arrays start at 0
    return y[d - 1] + r * (y[d] - y[d - 1])


y = sorted(data)

pi_25 = sample_percentile(y, 0.25)
pi_75 = sample_percentile(y, 0.75)
iqr = pi_75 - pi_25

pi_10 = sample_percentile(y, 0.1)
pi_90 = sample_percentile(y, 0.9)

suspected = [
    x
    for x in data
    if (pi_25 - 3 * iqr <= x and x <= pi_25 - 1.5 * iqr)
    or (pi_75 + 1.5 * iqr <= x and x <= pi_75 + 3 * iqr)
]

outliers = [x for x in data if x < pi_25 - 3 * iqr or pi_75 + 3 * iqr < x]

print("pi_25:", pi_25)  # 5.975
print("pi_75:", pi_75)  # 8.325000000000001
print("iqr:  ", iqr)    # 2.3500000000000014
print()
print("pi_10:", pi_10)  # 5.0200000000000005
print("pi_90:", pi_90)  # 10.460000000000003
print()
print("suspected outliers: ", suspected)  # [14.1]
print("outliers:           ", outliers)   # []
```

</solution>

## Problem 4

Let $Y_1 < Y_2 < \cdots < Y_8$ be the order statistics of eight independent observations from a continuous-type distribution with $70^{\mathrm{th}}$ percentile $\pi_{0.7} = 27.3$.

1. Determine $\P\p{Y_7 < 27.3}$.
2. Find $\P\p{Y_5 < 27.3 < Y_8}$.

<solution>

First recall that being the $70^{\mathrm{th}}$ percentile means

$$
\P\p{X_1 < \pi_{0.7}} = 0.7.
$$

1. We need at least $7$ of the $X_i$'s to be less than $27.3$, so

$$
\begin{aligned}
  \P\p{Y_7 < 27.3}
    &= \sum_{k=7}^8 \P\p{X_1 < 27.3}^k \p{1 - \P\p{X_1 < 27.3}}^{8-k} \\
    &= \boxed{\sum_{k=7}^8 \binom{8}{k} \p{0.7}^k \p{0.3}^{8-k}}.
\end{aligned}
$$

2. We need at least $5$ of the $X_i$'s to be less than $27.3$, and strictly fewer than $8$ of the $X_i$'s to be greater than $Y_8$, so

$$
\begin{aligned}
  \P\p{Y_5 < 27.3 < Y_8}
    &= \sum_{k=5}^{8-1} \P\p{X_1 < 27.3}^k \p{1 - \P\p{X_1 < 27.3}}^{8-k} \\
    &= \boxed{\sum_{k=5}^7 \binom{8}{k} \p{0.7}^k \p{0.3}^{8-k}}.
\end{aligned}
$$

</solution>

## Problem 5

Let $W_1 < W_2 < \cdots < W_n$ be the order statistics of $n$ independent observations from a uniform distribution $U\p{0, 1}$.

1. Show that

    $$
    \E\br{W_r^2} = \frac{r\p{r+1}}{\p{n+1}\p{n+2}}.
    $$

2. Find the variance of $W_r$.

<solution>

1. Recall that the cdf of the order statistic $W_r$ is

    $$
    F_{W_r}\p{w} = \P\p{W_r \leq w} = \sum_{k=r}^n \binom{n}{k} F\p{w}^k \p{1 - F\p{w}}^{n-k} f\p{w},
    $$

    where $F, f$ are the cdf, pdf of the original random variables. In this case, $f\p{x} = 1$ for $0 < x < 1$ and $F\p{x} = x$ for $0 < x < 1$, so the cdf of $W_r$ is

    $$
    F_{W_r}\p{w} = \sum_{k=r}^n \binom{n}{k} w^k \p{1 - w}^{n-k}.
    $$

    The last step is a computation. There are two ways to do it: (i) by using the pdf given, or (ii) from the cdf alone. I'll do it via (ii) since I prefer using the cdf, and I think the computation will be a good review. (i) will be easier, however, and will just require step (1) below.

    I'll number the harder steps and explain them afterwards. If $f_{W_r}$ is the pdf, then

    $$
    \begin{aligned}
      \E\br{W_r^2}
        &= \int_0^1 w^2 f_{W_r}\p{w} \,\diff{w} \\
        &= \left. w^2 F_{W_r}\p{w} \right\rvert_0^1 - 2 \int_0^1 wF_{W_r}\p{w} \,\diff{w}
          && \p{1} \\
        &= 1 - 2 \int_0^1 \sum_{k=r}^n \binom{n}{k} w^{k+1} \p{1 - w}^{n-k} \,\diff{w} \\
        &= 1 - 2 \sum_{k=r}^n \binom{n}{k} \int_0^1 w^{\p{k+2}-1} \p{1 - w}^{\p{n-k+1}-1} \,\diff{w} \\
        &= 1 - 2 \sum_{k=r}^n \binom{n}{k} \frac{\Gamma\p{k + 2} \Gamma\p{n - k + 1}}{\Gamma\p{n + 3}}
          && \p{2} \\
        &= 1 - 2 \sum_{k=r}^n \frac{n!}{k!\p{n - k}!} \frac{\p{k + 1}!\p{n - k}!}{\p{n + 2}!} \\
        &= 1 - 2 \sum_{k=r}^n \frac{k + 1}{\p{n + 2}\p{n + 1}} \\
        &= 1 - \frac{2}{\p{n + 1}\p{n + 2}} \sum_{k=r}^n \p{k + 1}
          && \p{3} \\
        &= 1 - \frac{2}{\p{n + 1}\p{n + 2}} \frac{\p{n + r + 2}\p{n - r + 1}}{2} \\
        &= \frac{r\p{r + 1}}{\p{n + 1}\p{n + 2}}.
    \end{aligned}
    $$

    (1) is integration by parts with

    $$
    \begin{cases}
      u = w^2 \\
      \diff{v} = f_{W_r}\p{w} \,\diff{w} \\
    \end{cases}
    \implies
    \begin{cases}
      \diff{u} = 2w \,\diff{w} \\
      v = F_{W_r}\p{w}.
    \end{cases}
    $$

    (2) is from the pdf of a $\operatorname{Beta}\p{\alpha, \beta}$ distribution, which tells us

    $$
    \int_0^1 x^{\alpha-1} \p{1 - x}^{\beta-1} \,\diff{x} = \frac{\Gamma\p{\alpha} \Gamma\p{\beta}}{\Gamma\p{\alpha + \beta}},
    $$

    where $\Gamma\p{n} = \p{n-1}!$ for **positive integers** $n$.

    (3) is the [sum of an arithmetic sequence](https://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html). The result is a little different than what's there since the sum starts at $k = r$ instead of $k = 0$, but you can fix that by using

    $$
    \sum_{k=r}^n a_k = \sum_{k=0}^n a_k - \sum_{k=0}^{r-1} a_k.
    $$

2. Recall that for any random variable $X$,

    $$
    \Var X = \E\br{X^2} - \p{\E\br{X}}^2.
    $$

    We already know that $\E\br{W_r} = \frac{r}{n+1}$ and we computed the second moment in part 1, so plugging everything in,

    $$
    \Var W_r
      = \frac{r\p{r+1}}{\p{n+1}\p{n+2}} - \p{\frac{r}{\p{n+1}}}^2
      = \boxed{\frac{r\p{n-r+1}}{\p{n+1}^2\p{n+2}}}.
    $$

    (Side note: The expectation and variance of $W_r$ agree with those of a $\operatorname{Beta}\p{r, n - r + 1}$ random variable!)

</solution>
