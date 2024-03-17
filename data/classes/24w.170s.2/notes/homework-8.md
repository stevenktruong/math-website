---
title: Homework 8
date: "2024-03-17"
tags:
    - best critical regions
    - likelihood ratio test
    - goodness-of-fit
publish: yes
---

# Homework 8

## Table of Contents

## Problem 1

Let $X$ be a Bernoulli random variable with success probability $p$. Consider the null hypothesis $H_0\colon p = \frac{1}{2}$ and alternative hypothesis $H_1\colon p = \frac{1}{3}$. For a sample size $n = 5$, find $C$, the best critical region of size $\alpha = 0.1875$. Find the power of the test associated with $C$.

<solution>

To find best critical regions, we need to:

1. Write down the likelihood ratio $\frac{L\p{\theta_0}}{L\p{\theta_1}}$.
2. Rewrite the inequality $\frac{L\p{\theta_0}}{L\p{\theta_1}} \leq k$ in terms of $u \leq c$ or $u \geq c$, where $u = u\p{X_1, \ldots, X_n}$ is some statistic (for example, $\sum_{i=1}^n X_i$). We typically take logs at this step.
3. If given $\alpha$, you need to solve for $c$ in

    $$
    \P\p{u \leq c \given H_0} = \alpha
    \quad\text{or}\quad
    \P\p{u \geq c \given H_0} = \alpha
    $$

    using the distribution of $u$. The direction of the inequality is exactly the same as what you got in step 2.

First, let's write down the likelihood ratio.

$$
\frac{L\p{\frac{1}{2}}}{L\p{\frac{1}{3}}}
  = \frac{\prod_{i=1}^5 \p{\frac{1}{2}}^{x_i} \p{1 - \frac{1}{2}}^{1-x_i}}{\prod_{i=1}^5 \p{\frac{1}{3}}^{x_i} \p{1 - \frac{1}{3}}^{1-x_i}}
  = \frac{\p{\frac{1}{2}}^5}{\p{\frac{1}{3}}^{\sum_{i=1}^5 x_i} \p{\frac{2}{3}}^{5-\sum_{i=1}^5 x_i}}.
$$

I will use the notation $y = \sum_{i=1}^5 x_i$ for brevity. Next, we take logs on both sides of $\frac{L\p{\frac{1}{2}}}{L\p{\frac{1}{3}}} \leq k$, which gives

$$
\begin{aligned}
  \frac{\p{\frac{1}{2}}^5}{\p{\frac{1}{3}}^{\sum_{i=1}^5 x_i} \p{\frac{2}{3}}^{5-\sum_{i=1}^5 x_i}} \leq k
    &\iff 5\ln\p{\frac{1}{2}} - y \ln\p{\frac{1}{3}} - \p{5 - y} \ln\p{\frac{2}{3}}
      \leq \ln k \\
    &\iff  y\ln 2
      \leq \ln k - 5\ln\p{\frac{1}{2}} + 5\ln\p{\frac{2}{3}}
        && \p{*} \\
    &\iff  y
      \leq \frac{\ln k - 5\ln\p{\frac{1}{2}} + 5\ln\p{\frac{2}{3}}}{\ln 2} = c.
\end{aligned}
$$

This means that a best critical region is of the form $Y = \sum_{i=1}^5 X_i \leq c$. Recall that a sum of $5$ independent Bernoulli trials (with the same success probability) has distribution $\operatorname{Bin}\p{5, p}$, so we need to solve

$$
\P\p{Y \leq c \given p = \frac{1}{2}} = 0.1875
$$

for $c$. Using the binomial cdf table, we get

$$
\boxed{c = 1}.
$$

The power is

$$
\begin{aligned}
  K\p{\frac{1}{3}}
    &= \P\p{Y \leq 1 \given p = \frac{1}{3}} \\
    &= \sum_{k=0}^1 \binom{5}{k} \p{\frac{1}{3}}^k \p{1 - \frac{1}{3}}^{5-k} \\
    &= \boxed{0.4609}.
\end{aligned}
$$

</solution>

## Problem 2

Let $X$ have an exponential distribution with a mean of $\theta$; that is, the pdf of X is

$$
f\p{x; \theta} = \frac{1}{\theta} e^{-\frac{x}{\theta}}, \quad 0 < x < \infty.
$$

Let $X_1, \ldots, X_n$ be a random sample from this distribution.

1. Show that a best critical region for testing $H_0\colon \theta = 3$ against $H_1\colon \theta = 5$ can be based on the statistic $\sum_{i=1}^n X_i$.
2. If $n = 12$, use the fact that $\frac{2}{\theta} \sum_{i=1}^{12} X_i$ is $\chi^2\p{24}$ to find a best critical region of size $\alpha = 0.1$.

<solution>

1. The likelihood is

    $$
    L\p{\theta}
      = \prod_{i=1}^n \frac{1}{\theta} e^{-\frac{x_i}{\theta}}
      = \frac{1}{\theta^n} e^{-\frac{1}{\theta} \sum_{i=1}^n x_i}.
    $$

    Thus,

    $$
    \frac{L\p{3}}{L\p{5}}
      = \p{\frac{5}{3}}^n \exp\p{\p{-\frac{1}{3} + \frac{1}{5}} \sum_{i=1}^n x_i}.
    $$

    We get

    $$
    \begin{aligned}
      \p{\frac{5}{3}}^n \exp\p{\p{-\frac{1}{3} + \frac{1}{5}} \sum_{i=1}^n x_i} \leq k
        &\iff n\ln\p{\frac{5}{3}} + \p{-\frac{1}{3} + \frac{1}{5}} \sum_{i=1}^n x_i \leq \ln k \\
        &\iff \p{-\frac{1}{3} + \frac{1}{5}} \sum_{i=1}^n x_i \leq \ln k - n\ln\p{\frac{5}{3}} \\
        &\iff \sum_{i=1}^n x_i \geq \frac{\ln k - n\ln\p{\frac{5}{3}}}{-\frac{1}{3} + \frac{1}{5}} = c.
    \end{aligned}
    $$

    Note that because $-\frac{1}{3} + \frac{1}{5} < 0$ that the inequality flips.

2. From part 1, we need to solve

    $$
    \P\p{\sum_{i=1}^n X_i \geq c \given \theta = 3} = 0.1.
    $$

    Here, we don't know the distribution of $\sum_{i=1}^{12} X_i$, but we do know the distribution of $\frac{2}{\theta} \sum_{i=1}^{12} X_i$, so we write

    $$
    \begin{gathered}
      \P\p{\sum_{i=1}^{12} X_i \geq c \given \theta = 3}
        = \P\p{\frac{2}{3} \sum_{i=1}^{12} X_i \geq \frac{2c}{3} \given \theta = 3}
        = 0.1 \\
      \implies
        \P\p{\frac{2}{3} \sum_{i=1}^{12} X_i \leq \frac{2c}{3} \given \theta = 3}
          = 0.9.
    \end{gathered}
    $$

    When using the chi-square table, you have to read it carefully. Even though this is equal to $0.9$, we will need to use $\chi^2_{0.1}\p{24} = 33.20$, so

    $$
    c = \frac{3 \chi^2_{0.1}\p{24}}{2} = 49.8.
    $$

    Thus, a best critical region is

    $$
    \boxed{\sum_{i=1}^{12} X_i \geq 49.8}.
    $$

</solution>

## Problem 3

(If you finished your homework early, note that the problem was changed to use a two-sided alternative and one of the parts was removed.)

Let $X_1, \ldots, X_n$ be a random sample of size $n$ from a normal distribution $\mathcal{N}\p{\mu, 100}$.

1. To test $H_0\colon \mu = 230$ against $H_1\colon \mu \neq 230$, what is the critical region specified by the likelihood ratio test?
2. If a random sample of $n = 16$ yielded $\mean{x} = 232.6$, is $H_0$ accepted at a significance level of $\alpha = 0.1$?

<solution>

1. The likelihood is

    $$
    \begin{aligned}
      L\p{\mu}
        &= \prod_{i=1}^n \frac{1}{\sqrt{2\pi \sigma^2}} \exp\p{-\frac{1}{2\sigma^2} \p{x_i - \mu}^2} \\
        &= \frac{1}{\p{2\pi\sigma^2}^{\frac{n}{2}}} \exp\p{-\frac{1}{2\sigma^2} \sum_{i=1}^n \p{x_i - \mu}^2}.
    \end{aligned}
    $$

    To perform a likelihood ratio test, we need to optimize it, so we essentially need to find the MLE. We can optimize the log-likelihood like usual.

    $$
    \ln L\p{\mu}
      = -\frac{n}{2} \ln\p{2\pi \sigma^2} - \frac{1}{2\sigma^2} \sum_{i=1}^n \p{x_i - \mu}^2 \\
    \implies \frac{\partial}{\partial \mu} \ln L\p{\mu}
      = \frac{1}{\sigma^2} \sum_{i=1}^n \p{x_i - \mu}.
    $$

    Setting it equal to $0$ and solving gives $\widehat{\mu} = \mean{x}$. Thus,

    $$
    \begin{aligned}
      \lambda
        &= \frac{L\p{230}}{L\p{\mean{x}}} \\
        &= \exp\p{-\frac{1}{2\sigma^2} \sum_{i=1}^n \p{\p{x_i - 230}^2 - \p{x_i - \mean{x}}^2}} \\
        &= \exp\p{-\frac{1}{2\sigma^2} \sum_{i=1}^n \p{x_i - 230 - \p{x_i - \mean{x}}} \p{x_i - 230 + \p{x_i - \mean{x}}}} \\
        &= \exp\p{-\frac{1}{2\sigma^2} \p{\mean{x} - 230} \sum_{i=1}^n \p{2x_i - 230 - \mean{x}}} \\
        &= \exp\p{-\frac{1}{2\sigma^2} \p{\mean{x} - 230} \p{2n\mean{x} - 230n - n\mean{x}}} \\
        &= \exp\p{-\frac{n}{2\sigma^2} \p{\mean{x} - 230}^2}.
    \end{aligned}
    $$

    We get

    $$
    \begin{aligned}
      \lambda \leq k
        &\iff \exp\p{-\frac{n}{2\sigma^2} \p{\mean{x} - 230}^2} \leq k \\
        &\iff -\frac{n}{2\sigma^2} \p{\mean{x} - 230}^2 \leq \ln k \\
        &\iff \p{\mean{x} - 230}^2 \geq -\frac{2\sigma^2 \ln k}{n} \\
        &\iff \abs{\mean{x} - 230} \geq \sqrt{-\frac{2\sigma^2 \ln k}{n}} = c'.
    \end{aligned}
    $$

    (I write $c'$ here because we're going to replace the constant one more time.)

    Note that the inequality flips and that $-\ln k \geq 0$, so the negative in the square root looks funny, but isn't actually a problem. This tells us that our critical region has the form

    $$
    \abs{\mean{X} - 230} \geq c'.
    $$

    Recall that under $H_0$,

    $$
    Z = \frac{\mean{X} - 230}{10/\sqrt{16}} \sim \mathcal{N}\p{0, 1}
    $$

    and that $\abs{\mean{X} - 230} \geq c'$ is equivalent to $\abs{Z} = \frac{\abs{\mean{X} - 230}}{10/\sqrt{16}} \geq \frac{c'}{10/\sqrt{16}} = c$. Thus, to ensure that the test has significance level $\alpha$, we need

    $$
    \begin{gathered}
      \P\p{\abs{\mean{X} - 230} \geq c'}
        = \P\p{\abs{Z} \geq c}
        = \alpha \\
      \implies c = z_{\frac{\alpha}{2}},
    \end{gathered}
    $$

    so the critical region is

    $$
    \boxed{\abs{Z} \geq z_{\frac{\alpha}{2}}}.
    $$

2. From the $z$-table, we have $z_{\frac{0.05}{2}} = 1.645$, so we reject if $\abs{z} \geq 1.645$. The observed $z$-statistic is

    $$
    \abs{z} = \frac{\abs{232.6 - 230}}{10/\sqrt{16}} = 1.04,
    $$

    so we fail to reject $H_0$ at $\alpha = 0.1$.

</solution>

## Problem 4

Let $X$ equal the number of female children in a three-child family. We shall use a chi-square goodness-of-fit statistic to test the null hypothesis that the distribution of $X$ is $\operatorname{Bin}\p{3, \frac{1}{2}}$.

1. Define the test statistic and critical region, using an $\alpha = 0.05$ significance level.
2. Among students who were taking a statistics course, $52$ came from families with three children. Let $x = 0, 1, 2$ and $3$ represent the number of female children, and for these $52$ families the frequencies for each possible outcome are $5, 17, 24$, and $6$, respectively. Calculate the value of the test statistic and state your conclusion.

<solution>

1. Testing the goodness-of-fit of this model means we need to test the hypothesis

    $$
    H_0\colon p_i = p_{i0},
    \quad p_{i0} = \P\p{\operatorname{Bin}\p{3, \frac{1}{2}} = i},
    \quad 0 \leq i \leq 3.
    $$

    These are

    $$
    p_{00} = \frac{1}{8},
    \quad p_{10} = \frac{3}{8},
    \quad p_{20} = \frac{3}{8},
    \quad p_{30} = \frac{1}{8}.
    $$

    There are $4$ probabilities to test, so $k = 4$. The test statistic is

    $$
    Q_{k-1}
      = Q_3
      = \sum_{i=0}^3 \frac{\p{x_i - np_{i0}}^2}{np_{i0}},
    $$

    and we reject if $q_3 \geq \chi^2_{0.05}\p{3} = 7.815$.

2. Our observed test statistic is

    $$
    q_3
      = \frac{\p{5 - 52 \cdot \frac{1}{8}}^2}{52 \cdot \frac{1}{8}}
        + \frac{\p{17 - 52 \cdot \frac{3}{8}}^2}{52 \cdot \frac{3}{8}}
        + \frac{\p{24 - 52 \cdot \frac{3}{8}}^2}{52 \cdot \frac{3}{8}}
        + \frac{\p{6 - 52 \cdot \frac{1}{8}}^2}{52 \cdot \frac{1}{8}}
      = 1.7436,
    $$

    so we fail to reject $H_0$ at $\alpha = 0.05$.

</solution>

## Problem 5

In the Michigan Lottery Daily3 Game, twice a day a three-digit integer is generated one digit at a time. Let $p_i$ denote the probability of generating digit $i$, $i = 0, 1, \ldots, 9$. Let $\alpha = 0.05$, and use the following 50 digits to test $H_0\colon p_0 = p_1 = \cdots = p_9 = \frac{1}{10}$.

$$
\begin{array}{rrrrrrrrrr}
  1 & 6 & 9 & 9 & 3 & 8 & 5 & 0 & 6 & 7 \\
  4 & 7 & 5 & 9 & 4 & 6 & 5 & 6 & 4 & 4 \\
  4 & 8 & 0 & 9 & 3 & 2 & 1 & 5 & 4 & 5 \\
  7 & 3 & 2 & 1 & 4 & 6 & 7 & 1 & 3 & 4 \\
  4 & 8 & 8 & 6 & 1 & 6 & 1 & 2 & 8 & 8
\end{array}
$$

<solution>

We have $10$ probabilities to test, so $k = 10$. Thus, our test statistic is $Q_{k-1} = Q_9$ and we reject if $q_9 \geq \chi^2_{0.05}\p{9} = 16.92$. From counting the numbers in the list, our observed values are given by the following table.

$$
\begin{array}{r|rrrrrrrrrr}
  x & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
  \text{count} & 2 & 6 & 3 & 4 & 9 & 5 & 7 & 4 & 6 & 4
\end{array}
$$

For each $p_i$, the expected number of observations is $5$, so

$$
q_9 = \frac{\p{2 - 5}^2}{5} + \frac{\p{6 - 5}^2}{5} + \cdots + \frac{\p{4 - 5}^2}{5} = 7.6.
$$

Thus, we fail to reject $H_0$ at $\alpha = 0.05$.

</solution>
