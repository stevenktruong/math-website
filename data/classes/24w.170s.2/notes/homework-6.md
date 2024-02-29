---
title: Homework 6
date: "2024-02-20"
tags:
    - hypothesis testing
    - means
publish: yes
---

# Homework 6

## Table of Contents

## Problem 1

Let $X$ represent the tire pressure of a Formula 1 car at its peak temperature, measured in PSI. With the current tires, it is known that $X \sim \mathcal{N}\p{32, 4}$. A new brand of tire is being considered, hoping that the PSI at peak temperature will be higher than $32$, such that $X \sim \mathcal{N}\p{\mu > 32, 4}$. Suppose we collect a sample of size $n = 36$ about the peak temperature PSI of the second brand of tires, and we observe $\mean{x} = 35$. We are interested in testing the following hypotheses:

$$
\begin{aligned}
  H_0 &\colon \mu = 32 \\
  H_1 &\colon \mu > 32.
\end{aligned}
$$

1. Derive the $p$-value for this test.
2. Given $\alpha = 0.05$, should we reject or not reject $H_0$?

<solution>

The test statistic for the scenario is

$$
Z = \frac{\mean{X} - \mu}{\sigma/\sqrt{n}} \sim \mathcal{N}\p{0, 1},
$$

since $X$ is normal and the variance is known. The sample test statistic (under $H_0$) is then

$$
z = \frac{35 - 32}{2/\sqrt{36}} = 9.
$$

1. The $p$-value is the probability of observing $\mean{x} = 35$ or something more extreme (i.e., numbers that give _more_ evidence that $\mu > 32$). In this problem, this is

    $$
    \boxed{\P\p{Z \geq 9} \approx 0}.
    $$

2. We reject $H_0$ at $\alpha = 0.05$.

</solution>

## Problem 2

Among the data collected for the WHO air quality monitoring project is a measure of suspended particles, in $\mu g/m^3$. Let $X$ and $Y$ equal the concentration of suspended particles in $\mu g/m^3$ in the city centers of Melbourne and Huston, respectively. Using $n_X = 13$ observations of $X$ and $n_Y = 16$ observations of $Y$, we shall test $H_0 \colon \mu_X = \mu_Y$ against $H_1 \colon \mu_X < \mu_Y$.

1. Define the test statistic and critical region, assuming that the variances are equal. Let $\alpha = 0.05$.
2. If $\mean{x} = 72.9$, $s_X = 25.6$, $\mean{y} = 81.7$, and $s_Y = 28.3$, calculate the value of the test statistic and state your conclusion.

<solution>

1. Since the sample size is small and the variances are unknown but equal, the test statistic is

    $$
    T = \frac{\mean{X} - \mean{Y} - \p{\mu_X - \mu_Y}}{S_p\sqrt{\frac{1}{n_X} + \frac{1}{n_Y}}} \sim t\p{n_X + n_Y - 2},
    $$

    where $S_p$ is the pooled sample standard deviation. We have a one-sided test, so we reject if

    $$
    \boxed{t < -t_\alpha\p{27} = -1.703}.
    $$

2. Under $H_0$, $\mu_X - \mu_Y = 0$, so the sample test statistic is

    $$
    t = \frac{72.9 - 81.7}{s_p\sqrt{\frac{1}{13} + \frac{1}{16}}} = -0.8686.
    $$

    This is not in the critical region, so we do not reject $H_0$ at $\alpha = 0.05$.

</solution>

## Problem 3

Some nurses in county public health conducted a survey of women who had received inadequate prenatal care. They used information from birth certificates to select mothers for the survey. The mothers selected were divided into two groups:

-   Group $A$: mothers who said they had $\leq 5$ prenatal visit.
-   Group $B$: mothers who said they had $\geq 6$ prenatal visits.

Let $X$ be the birth weight of babies from mothers in Group $A$ and $Y$ the birth weight of babies from mothers in Group $B$. Assume that $X \sim \mathcal{N}\p{\mu_X, \sigma_X^2}$ and $Y \sim \mathcal{N}\p{\mu_Y, \sigma_Y^2}$, where $\sigma_X$ and $\sigma_Y$ are unknown but equal. Suppose that the result of the survey is that

-   Birth weight of babies from mothers in Group $A$: $49$, $108$, $110$, $82$, $93$, $114$, $134$, $114$, $96$, $52$, $101$, $114$, $120$, $116$
-   Birth weight of babies from mothers in Group $B$: $133$, $108$, $93$, $119$, $119$, $98$, $106$, $131$, $87$, $153$, $116$, $129$, $97$, $110$

1. Give a $95\%$ confidence interval for $\mu_X − \mu_Y$.
2. Test $H_0 \colon \mu_X = \mu_Y$ against $H_1 \colon \mu_X \neq \mu_Y$ at significance level $0.05$.
3. Compute the associated $p$-value.
4. Redo part (1)-(3), but do not assume $\sigma_X = \sigma_Y$, by pairing up the mothers of the two groups in the order they appear.

<solution>

For parts (1)-(3), since the variances are assumed to be equal, the test statistic is

$$
T = \frac{\mean{X} - \mean{Y} - \p{\mu_X - \mu_Y}}{S_p\sqrt{\frac{1}{n_X} + \frac{1}{n_Y}}} \sim t\p{n_X + n_Y - 2}.
$$

1. A $95\%$ confidence interval is

    $$
    \mean{x} - \mean{y} \pm t_{\frac{\alpha}{2}}\p{26} s_p\sqrt{\frac{1}{n_X} + \frac{1}{n_Y}} = \boxed{\br{-30.7909, 2.7909}}
    $$

2. Since this is a two-sided test, the critical region is

    $$
    t < -t_{\frac{\alpha}{2}}\p{26} = -2.056
    \quad\text{or}\quad t > t_{\frac{\alpha}{2}}\p{26} = 2.056.
    $$

    In our case, the sample test statistic is

    $$
    t = -1.7143,
    $$

    which is not in the critical region. Thus, we do not reject $H_0$ at $\alpha = 0.05$.

3. Since this is a two-sided test, the $p$-value is

    $$
    \begin{aligned}
      \P\p{T \leq -\abs{t} \text{ or } T \geq \abs{t}}
        &= 2\P\p{T \geq \abs{t}} \\
        &= 2\p{1 - \P\p{T \leq \abs{t}}} \\
        &= 2\p{1 - \P\p{T \leq 1.7143}}.
    \end{aligned}
    $$

    From the $t$-table in the book,

    $$
    0.95 < \P\p{T \leq 1.7143} < 0.975,
    $$

    so the $p$-value satisfies

    $$
    \boxed{0.05 < p\text{-value} < 0.10}.
    $$

4. What the problem asks you to do is to treat the samples as differences, e.g., $d_1 = x_1 - y_1 = 49 - 133$, etc. This gives us the following sample:

    $$
    \begin{array}{r|rrrrrrrrrrrrrr}
      d & -84 & 0 &  17 & -37 & -26 & 16 & 28 & -17 & 9 -101 & -15 & -15 & 23 & 6
    \end{array}
    $$

    We need to test the hypotheses

    $$
    \begin{aligned}
      H_0 &\colon \mu_D = 0 \\
      H_1 &\colon \mu_D \neq 0.
    \end{aligned}
    $$

    In this case, we have $n = 14$ differences and the test statistic is now

    $$
    T = \frac{\mean{D} - \p{\mu_X - \mu_Y}}{S_D/\sqrt{n}} \sim t\p{13}.
    $$

    A $95\%$ confidence interval is

    $$
    \mean{d} \pm t_{\frac{\alpha}{2}}\p{13} \frac{s_D}{\sqrt{n}} = \boxed{\br{-36.2270, 8.2270}}.
    $$

    The critical region is

    $$
    t < -t_{\frac{\alpha}{2}}\p{13} = -2.160
    \quad\text{or}\quad t > t_{\frac{\alpha}{2}}\p{13} = 2.160.
    $$

    The test statistic is

    $$
    t = -1.3605,
    $$

    which does not fall into the critical region, so we do not reject $H_0$ at $\alpha = 0.05$. Lastly, the $p$-value is computed like before:

    $$
    p\text{-value} = 2\p{1 - \P\p{T \leq 1.3605}}.
    $$

    From the textbook's $t$-table, $0.90 < \P\p{T \leq 1.3605} < 0.95$, so the $p$-value satisfies

    $$
    \boxed{0.10 < p\text{-value} < 0.20}.
    $$

</solution>

## Problem 4

A stream was studied on $26$ days, half during dry weather ($X$), and the other half immediately after a significant rainfall ($Y$). Assume that the distributions of $X$ and $Y$ are $\mathcal{N}\p{\mu_X, \sigma^2}$ and $\mathcal{N}\p{\mu_Y, \sigma^2}$, respectively. The following turbidities were recorded in units of NTUs (nephelometric turbidity units):

$$
\begin{array}{r|rrrrr}
  x & 2.9 & 14.9 & 1.0 & 12.6 & 9.4 \\
  y & 7.8 & 4.2 & 2.4 & 12.9 & 17.3
\end{array}
$$

Test the null hypothesis $H_0 \colon \mu_X = \mu_Y$ against $H_1 \colon \mu_X > \mu_Y$ at $\alpha = 0.01$. Give bounds for the $p$-value and state your conclusion.

<solution>

Since the sample size is small and the variances are assumed to be equal, our test statistic is

$$
T = \frac{\mean{X} - \mean{Y} - \p{\mu_X - \mu_Y}}{S_p\sqrt{\frac{1}{n_X} + \frac{1}{n_Y}}} \sim t\p{8}.
$$

Our observed test statistic is

$$
t = -0.1970,
$$

so the $p$-value is

$$
\P\p{T \geq -0.1970}
  = 1 - \P\p{T \leq 0.1970}.
$$

From the $t$-table, $\P\p{T \leq 0.1970} < 0.60$, so

$$
\boxed{p\text{-value} > 0.40}.
$$

Thus, we do not reject $H_0$ at $\alpha = 0.01$.

</solution>

## Problem 5

Let $Y \sim \operatorname{Bin}\p{100, p}$. To test $H_0 \colon p = 0.08$ against $H_1 \colon p < 0.08$, we reject $H_0$ and accept $H_1$ if and only if $Y \leq 6$. Determine the significance level $\alpha$ of the test.

<solution>

The significance level $\alpha$ is the probability that we reject $H_0$ given that $H_0$ is true. In other words,

$$
\alpha = \P\p{Y \leq 6}.
$$

We can use the normal approximation to a binomial distribution since $n = 100$ is large:

$$
Z = \frac{\frac{Y}{100} - p}{\sqrt{p\p{1 - p}/100}} \approx \mathcal{N}\p{0, 1}.
$$

Then (with a continuity correction) we get

$$
\begin{aligned}
  \P\p{Y \leq 6}
    &= \P\p{Y \leq 6.5} \\
    &\approx \P\p{Z \leq \frac{\frac{6.5}{100} - 0.08}{\sqrt{0.08\p{1 - 0.08}/100}}} \\
    &\approx \P\p{Z \leq −0.5529} \\
    &= 1 - \P\p{Z \leq 0.5529} \\
    &\approx 1 - 0.7088 \\
    &= \boxed{0.2912}.
\end{aligned}
$$

Alternatively, you can just calculate the binomial sum directly if your calculator is able to compute the binomial coefficients:

$$
\P\p{Y \leq 6} = \sum_{k=0}^6 \binom{100}{k} \p{0.08}^k \p{0.92}^{100-k} = \boxed{0.3032}
$$

</solution>
