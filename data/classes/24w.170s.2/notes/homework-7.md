---
title: Homework 7
date: "2024-03-11"
tags:
    - hypothesis testing
    - medians
    - power functions
    - proportions
publish: yes
---

# Homework 7

## Table of Contents

## Problem 1

It is claimed that the median weight $m$ of certain loads of candy is $40000$ pounds.

1. Use the following $13$ observations and the Wilcoxon signed rank statistic to test the null hypothesis $H_0\colon m = 40000$ against the one-sided alternative hypothesis $H_1\colon m < 40000$ at an approximate significance level of $\alpha = 0.05$.

    $$
    \begin{array}{rrrrrrr}
      41195 & 39485 & 38050 & 40890 & 39245 & 31031 & 30906 \\
      41229 & 36840 & 38345 & 34930 & 40780 & 38050 &
    \end{array}
    $$

2. Use the sign test to test the same hypotheses.

<solution>

1. Recall that the Wilcoxon signed rank statistic is

    $$
    W = \sum_{i=1}^n \operatorname{sign}\p{x_i - m} \operatorname{Rank}\p{\abs{x_i - m}}
    $$

    and we use it with

    $$
    Z = \frac{W}{\sqrt{n\p{n+1}\p{2n+1}/6}} \approx \mathcal{N}\p{0, 1}.
    $$

    For a one-sided test, we reject if $z < -z_{0.05} = -1.645$. Computing the signs and ranks gives the following table:

    $$
    \begin{array}{r|rrrrrrrrrrrrr}
      x_i & 41195 & 39485 & 38050 & 40890 & 39245 & 31031 & 30906 & 41229 & 36840 & 38345 & 34930 & 40780 & 38050 \\
      \abs{x_i - m} & 1195 & 515 & 1950 & 890 & 755 & 8969 & 9094 & 1229 & 3160 & 1655 & 5070 & 780 & 1950 \\
      \operatorname{sign}\p{x_i} \operatorname{Rank}\p{\abs{x_i - m}} & 5 & -1 & -8 & 4 & -2 & -12 & -13 & 6 & -10 & -7 & -11 & 3 & -9
    \end{array}
    $$

    Summing the last row, we get $W = -55$, so

    $$
    z = \frac{-55}{\sqrt{\p{13 \cdot 14 \cdot 27} / 6}} = −1.9219
    $$

    Thus, we reject $H_0$ at $\alpha = 0.05$.

2. The sign test statistic is given by

    $$
    Y = \p{\#\ i \text{'s such that } X_i < m} \sim \operatorname{Bin}\p{n, \frac{1}{2}}.
    $$

    There are $9$ of these, so our $p$-value is

    $$
    p\text{-value} = \P\p{Y \geq 9}
      = \sum_{k=9}^{13} \binom{13}{k} \frac{1}{2^{13}}
      = 0.1334,
    $$

    so we fail to reject $H_0$ at $\alpha = 0.05$.

### Python Code

```py
x = np.array([41195, 39485, 38050, 40890, 39245, 31031, 30906, 41229, 36840, 38345, 34930, 40780, 38050])
m = 40000
sign = np.sign(x - m)
rank = np.argsort(np.argsort(np.abs(x - m))) + 1
print(f"w = {np.sum(sign * rank)}") # w = -55
print(f"y = {np.sum(sign < 0)}")    # y = 9
```

</solution>

## Problem 2

Let $X$ equal the number of milliliters of a liquid in a bottle that has a label volume of $350~\mathrm{ml}$. Assume that the distribution of $X$ is $\mathcal{N}\p{\mu, 4}$. To test the null hypothesis $H_0\colon \mu = 355$ against the alternative hypothesis $H_1\colon \mu < 355$, let the critical region be defined by $C = \set{\mean{x} \mid \mean{x} \leq 354.05}$, where $\mean{x}$ is the sample mean of the contents of a random sample of $n = 12$ bottles.

1. Find the power function $K\p{\mu}$ for this test.
2. What is the approximate significance level $\alpha$ of the test?
3. Use the following $12$ observations to state your conclusion from this test:

    $$
    \begin{array}{rrrr}
      350 & 353 & 354 & 356 \\
      353 & 352 & 354 & 355 \\
      357 & 353 & 354 & 355
    \end{array}
    $$

<solution>

1. Recall that

    $$
    K\p{\mu} = \P\p{\text{reject }H_0 \given \mu}.
    $$

    In this problem, we reject $H_0$ if and only if $\mean{X}$ lands in the critical region, so

    $$
    K\p{\mu} = \P\p{\mean{X} \leq 354.05 \mid \mu}.
    $$

    To calculate this probability, we need to carefully figure out the distribution of $\mean{X}$. Recall that

    $$
    Z
      = \frac{\mean{X} - \mu}{\sigma/\sqrt{n}}
      = \frac{\mean{X} - \mu}{2/\sqrt{12}} \sim \mathcal{N}\p{0, 1},
    $$

    so

    $$
    \begin{aligned}
     \mean{X} \leq 354.05
       &\iff \frac{\mean{X} - \mu}{2/\sqrt{12}} \leq \frac{354.05 - \mu}{2/\sqrt{12}}.
    \end{aligned}
    $$

    We get

    $$
    \begin{aligned}
      K\p{\mu}
       &= \P\p{\frac{\mean{X} - \mu}{2/\sqrt{12}} \leq \frac{354.05 - \mu}{2/\sqrt{12}} \given \mu} \\
       &= \P\p{\mathcal{N}\p{0, 1} \leq \frac{354.05 - \mu}{2/\sqrt{12}}} \\
       &= \boxed{\Phi\p{\frac{354.05 - \mu}{2/\sqrt{12}}}},
    \end{aligned}
    $$

    where $\Phi$ is the cdf of a standard normal random variable.

2. We have

    $$
    \begin{aligned}
      \alpha
       &= \P\p{\text{reject }H_0 \given H_0} \\
       &= K\p{355} \\
       &= \Phi\p{\frac{354.05 - 355}{2/\sqrt{12}}} \\
       &= \Phi\p{−1.6454} \\
       &\approx -z_{0.05},
    \end{aligned}
    $$

    so the significance level is roughly $\alpha = 0.05$.

3. Since the critical region is given to us, we do **not** use the $p$-value to make our conclusion. We just check to see if $\mean{x} \in C$ or not.

    $$
    \mean{x} = 353.8333 \leq 354.05,
    $$

    so we reject $H_0$.

</solution>

## Problem 3

In a political campaign, one candidate has a poll taken at random from the voting population. The results of poll are that $311$ out of $400$ voters favor the candidate. Let $p$ be the fraction of the voting population that favors the candidate.

1. Test $H_0\colon p = 0.8$ against $H_1\colon p < 0.8$ at significance level $\alpha = 0.05$.
2. Test $H_0\colon p = 0.8$ against $H_1\colon p < 0.8$ at significance level $\alpha = 0.01$.
3. Compute the associated $p$-value.
4. What is the smallest significance level $\alpha$ for which we can reject $H_0\colon p = 0.8$ in favor of $H_1\colon p < 0.8$?

<solution>

Recall that for one proportion, we use the null hypothesis when computing the standard error:

$$
Z = \frac{\mean{X} - p_0}{\sqrt{\frac{p_0 \p{1 - p_0}}{n}}} \sim \mathcal{N}\p{0, 1}.
$$

For our given data, we get

$$
z = \frac{\frac{311}{400} - 0.8}{\sqrt{\frac{0.8 \p{1 - 0.8}}{400}}} = −1.125.
$$

1. The critical region is $z < -z_{0.05} = -1.645$, so we fail to reject $H_0$.
2. The critical region is smaller than in part 1, so we still fail to reject $H_0$.
3. The $p$-value is (taking the average of $\Phi\p{1.12}$ and $\Phi\p{1.13}$ from the $z$-table)

    $$
    p\text{-value} = \P\p{Z \leq -1.125} = 1 - \P\p{Z \leq 1.125} = 1 - 0.8697 = \boxed{0.1303}.
    $$

4. The smallest significance level for which we can reject $H_0$ in this test is

    $$
    \alpha = p\text{-value} = \boxed{0.1303}.
    $$

</solution>
