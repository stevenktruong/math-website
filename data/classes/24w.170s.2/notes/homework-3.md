---
title: Homework 3
date: "2024-02-02"
tags:
    - estimators
    - confidence intervals
    - Bayesian statistics
publish: yes
---

# Homework 3

## Table of Contents

## Problem 1

Let $X_1, \ldots, X_n$ be a random sample from a uniform distribution on the interval $\p{\theta-1, \theta+1}$, where $-\infty < \theta < \infty$.

1. Find the method of moment estimator for $\theta$.
2. Is your estimator in part 1 an unbiased estimator of $\theta$? Justify your answer.
3. Given the following $n = 5$ observations of $X$, give a point estimate of $\theta$.

$$
\begin{array}{rrrrr}
  6.61 & 7.70 & 6.98 & 8.36 & 7.26
\end{array}
$$

<solution>

1. The mean of the uniform distribution is

    $$
    \E\br{X_i} = \theta,
    $$

    so the method of moment estimate for $\theta$ is given by $\mean{x} = \widehat{\theta}$. Thus, the estimator is

    $$
    \boxed{\widehat{\theta} = \mean{X}}.
    $$

2. Yes. By linearity of expectation,

    $$
    \E\br{\widehat{\theta}}
      = \E\br{\frac{1}{n} \sum_{i=1}^n X_i}
      = \frac{1}{n} \sum_{i=1}^n \E\br{X_i}
      = \theta.
    $$

3. We have

    $$
    \boxed{
    \widehat{\theta}
      = \mean{x}
      = 7.382
    }.
    $$

</solution>

## Problem 2

The heart rate ($\mathrm{bpm}$) of $10$ athletes is measured. The data is given below. Assuming that the distribution from which the data was drawn is normally distributed, find a $95\%$ confidence interval for the mean heart rate.

$$
\begin{array}{rrrrrrrrrr}
  38 & 54 & 42 & 36 & 52 & 44 & 49 & 50 & 62 & 50
\end{array}
$$

<solution>

Assume that the data was pulled from $\mathcal{N}\p{\mu, \sigma^2}$. **Since the population standard deviation is unknown, we need to use a $t$-distribution**. Our test statistic is

$$
T = \frac{\mean{X} - \mu}{S/\sqrt{n}} \sim t\p{n-1}.
$$

Here, $S$ is the sample standard deviation and $t\p{n-1}$ is the $t$-distribution with $n-1$ degrees of freedom. The endpoints for a $100\p{1 - \alpha}\%$ confidence interval are given by

$$
\mean{x} \pm t_{\frac{\alpha}{2}}\p{n-1} \frac{s}{\sqrt{n}},
$$

where $t_{\frac{\alpha}{2}}\p{n-1}$ is the $100\p{1 - \frac{\alpha}{2}}^{\mathrm{th}}$ percentile of a $t\p{n-1}$ distribution. For our problem, the parameters are

$$
\begin{aligned}
  \mean{x} &= 47.7, \\
  s &\approx 7.8323,
  n &= 10, \\
  \alpha &= 0.05.
\end{aligned}
$$

From the textbook's $t$-table,

$$
t_{0.025}\p{6} = 2.262,
$$

so the endpoints are

$$
47.7 \pm 2.262 \cdot \frac{7.8323}{\sqrt{10}}
  \approx \boxed{47.7 \pm 5.6}.
$$

</solution>

## Problem 3

Let $x_1, \ldots, x_n$ be an observed sample drawn independently from an exponential distribution, $\operatorname{Exp}\p{\lambda}$. Assume that the prior on $\lambda$ is characterized by a Gamma distribution, $\Gamma\p{\alpha, \beta}$, with pdf

$$
\pi\p{\lambda} = \frac{\beta^\alpha}{\Gamma\p{\alpha}} \lambda^{\alpha-1} e^{-\beta\lambda},
\quad 0 < x < \infty.
$$

Note that the pdf of an exponential distribution is given by

$$
f\p{x} = \lambda e^{-\lambda x},
\quad 0 < x < \infty.
$$

1. Find the posterior distribution for $\lambda$, $\pi\p{\lambda \given x}$.
2. Calculate the mean of the posterior distribution.

<solution>

1. The starting point for these types of problems is

    $$
    \mathrm{posterior} \propto \mathrm{likelihood} \times \mathrm{prior}.
    $$

    Here, $\propto$ means that the two things only differ by a constant factor. Here, constant means anything that doesn't depend on $\lambda$. We don't lose any information about the distribution when dropping factors without $\lambda$ in them because we can always figure out the normalization constant by integrating with respect to $\lambda$. Actually, we don't even need the normalization constant to figure out the distribution.

    The likelihood is given by

    $$
      f\p{x_1, \ldots, x_n \mid \lambda}
        = \prod_{i=1}^n \lambda e^{-\lambda x_i}
        = \lambda^n e^{-\lambda n\mean{x}}.
    $$

    The prior is

    $$
      \pi\p{\lambda}
        = \frac{\beta^\alpha}{\Gamma\p{\alpha}} \lambda^{\alpha-1} e^{-\beta\lambda}
        \propto \lambda^{\alpha-1} e^{-\beta\lambda}.
    $$

    Putting everything together,

    $$
    \begin{aligned}
      \pi\p{\lambda \given x}
        &\propto \lambda^n e^{-\lambda n\mean{x}}\lambda^{\alpha-1} e^{-\beta\lambda} \\
        &\propto \lambda^{\alpha+n-1} e^{-\lambda\p{\beta+n\mean{x}}}.
    \end{aligned}
    $$

    By comparing to our known distributions, we see that the posterior distribution is

    $$
    \boxed{\Gamma\p{\alpha + n, \beta + n\mean{x}}}.
    $$

2. The mean of a $\Gamma\p{\alpha, \beta}$ distribution (with the notation in the problem) is $\frac{\alpha}{\beta}$, so the mean of the posterior distribution is

    $$
    \boxed{\frac{\alpha + n}{\beta + n\mean{x}}}.
    $$

</solution>

## Problem 4

Assume $y_1, \ldots, y_n$ are independent observations drawn from $\mathcal{N}\p{\beta x_i, \sigma^2}$. The $x_i$'s and $\sigma^2$ are known constants, and $\beta$ is an unknown parameter which has prior distribution $\mathcal{N}\p{\beta_0, \tau^2}$, where $\beta_0$ and $\tau^2$ are known constants. Derive the posterior distribution of $\beta$.

<solution>

We can use the same approach as in Problem 3. Here, constants are any factors that don't have a $\beta$ in them. The likelihood is

$$
\begin{aligned}
  f\p{y_1, \ldots, y_n \given \beta}
    &= \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\p{-\frac{1}{2\sigma^2}\p{y_i - \beta x_i}^2} \\
    &\propto \prod_{i=1}^n \exp\p{-\frac{y_i^2}{2\sigma^2}} \exp\p{\frac{\beta x_iy_i}{\sigma^2} - \frac{\beta^2x_i^2}{2\sigma^2}} \\
    &\propto \exp\p{\sum_{i=1}^n \p{\frac{\beta x_iy_i}{\sigma^2} - \frac{\beta^2x_i^2}{2\sigma^2}}} \\
    &\propto \exp\p{\beta \frac{n\mean{xy}}{\sigma^2} - \beta^2 \frac{n\mean{x^2}}{2\sigma^2}},
\end{aligned}
$$

where I used the shorthands

$$
\mean{xy} = \frac{1}{n} \sum_{i=1}^n x_iy_i,
\quad \mean{x^2} = \frac{1}{n} \sum_{i=1}^n x_i^2.
$$

Similarly, the prior is

$$
\begin{aligned}
  \pi\p{\beta}
    &= \frac{1}{\sqrt{2\pi\tau^2}} \exp\p{-\frac{1}{2\tau^2}\p{\beta - \beta_0}^2} \\
    &\propto \exp\p{-\frac{\beta^2}{2\tau^2} + \frac{2\beta\beta_0}{2\tau^2}} \exp\p{-\frac{\beta_0^2}{2\tau^2}} \\
    &\propto \exp\p{-\frac{\beta^2}{2\tau^2} + \frac{\beta\beta_0}{\tau^2}}.
\end{aligned}
$$

Putting these together, the posterior pdf is

$$
\begin{aligned}
  \pi\p{\beta \given y_1, \ldots, y_n}
    &\propto \exp\p{\beta \frac{n\mean{xy}}{\sigma^2} - \beta^2 \frac{n\mean{x^2}}{2\sigma^2}} \exp\p{-\frac{\beta^2}{2\tau^2} + \frac{\beta\beta_0}{\tau^2}} \\
    &\propto \exp\p{-\frac{1}{2}\p{\frac{n\mean{x^2}}{\sigma^2} + \frac{1}{\tau^2}}\beta^2 + \p{\frac{n\mean{xy}}{\sigma^2} + \frac{\beta_0}{\tau^2}}\beta} \\
    &\propto \exp\p{
      - \frac{1}{2\sigma^2\tau^2}\p{\tau^2n\mean{x^2} + \sigma^2}\beta^2
      + \frac{1}{\sigma^2\tau^2} \p{\tau^2n\mean{xy} + \sigma^2\beta_0}\beta}.
\end{aligned}
$$

Just from looking at this, we know that the posterior distribution is a normal distribution, so we only need to figure out the mean and variance. Let

$$
\begin{aligned}
  a &= \frac{1}{2\sigma^2\tau^2}\p{\tau^2n\mean{x^2} + \sigma^2}, \\
  b &= \frac{1}{\sigma^2\tau^2} \p{\tau^2n\mean{xy} + \sigma^2\beta_0}
\end{aligned}
$$

and recall that we can complete the square:

$$
\begin{aligned}
  \exp\p{-a\beta^2 + b\beta}
    &= \exp\p{-a\p{\beta - \frac{b}{2a}}^2 + \frac{b^2}{4a}} \\
    &= \exp\p{-a\p{\beta - \frac{b}{2a}}^2} \exp\p{\frac{b^2}{4a}} \\
    &\propto \exp\p{-a\p{\beta - \frac{b}{2a}}^2},
\end{aligned},
$$

so the mean will be

$$
\begin{aligned}
  \frac{b}{2a}
    &= \frac{\frac{1}{\sigma^2\tau^2} \p{\tau^2n\mean{xy} + \sigma^2\beta_0}}{2 \cdot \frac{1}{2\sigma^2\tau^2}\p{\tau^2n\mean{x^2} + \sigma^2}} \\
    &= \frac{\tau^2n\mean{xy} + \sigma^2\beta_0}{\tau^2n\mean{x^2} + \sigma^2}.
\end{aligned}
$$

For the variance $\sigma_1^2$, notice that by looking at the pdf for a normal distribution, it must satisfy $\frac{1}{2\sigma_1^2} = a$, so the new variance is

$$
\begin{aligned}
  \frac{1}{2a}
    &= \frac{1}{2 \cdot \frac{1}{2\sigma^2\tau^2}\p{\tau^2n\mean{x^2} + \sigma^2}} \\
    &= \frac{\sigma^2\tau^2}{\tau^2n\mean{x^2} + \sigma^2}.
\end{aligned}
$$

Thus, the posterior distribution is

$$
\boxed{\mathcal{N}\p{\frac{\tau^2\sum_{i=1}^n x_iy_i + \sigma^2\beta_0}{\tau^2\sum_{i=1}^n x_i^2 + \sigma^2}, \frac{\sigma^2\tau^2}{\tau^2\sum_{i=1}^n x_i^2 + \sigma^2}}}.
$$

</solution>

## Problem 5

1. Let $X_1, \ldots, X_n$ be a random sample from a continuous random variable with pdf

$$
f\p{x, \theta} = \theta x^{\theta-1},
\quad 0 < x < 1,
\quad 0 < \theta.
$$

1. Find a sufficient statistic $Y$ for $\theta$.
2. Show that the maximum likelihood estimator $\widehat{\theta}$ is a function of $Y$.
3. Argue that $\widehat{\theta}$ is also a sufficient statistic for $\theta$.

<solution>

1. To find a sufficient statistic, we can factor the likelihood function and eyeball it.

    $$
    f\p{x_1, \ldots, x_n, \theta}
      = \prod_{i=1}^n \theta x_i^{\theta-1}
      = \theta^n \p{\prod_{i=1}^n x_i}^{\theta-1}.
    $$

    So a sufficient statistic is $Y = \prod_{i=1}^n X_i$. We can write down the factorization explicitly:

    $$
    \varphi\p{y, \theta}
      = \theta^n y^{\theta-1},
    \quad
    h\p{x_1, \ldots, x_n} = 1.
    $$

2. From our computation above, the log-likelihood function is

    $$
    \ln L\p{\theta} = n\ln \theta + \p{\theta-1} \ln \prod_{i=1}^n x_i.
    $$

    Taking derivatives and solving for $\theta$ gives the MLE

    $$
    \widehat{\theta}
      = -\frac{n}{\ln \prod_{i=1}^n X_i}
      = -\frac{n}{\ln Y}.
    $$

3. We can solve for $Y$ in terms of $\widehat{\theta}$:

    $$
    Y = \exp\p{-\frac{n}{\widehat{\theta}}},
    $$

    so plugging this into our factorization,

    $$
    f\p{x_1, \ldots, x_n, \theta}
      = \varphi\p{\exp\p{-\frac{n}{\widehat{\theta}}}, \theta} h\p{x_1, \ldots, x_n}.
    $$

    This shows that $\widehat{\theta}$ is a sufficient statistic for $\theta$.

</solution>
