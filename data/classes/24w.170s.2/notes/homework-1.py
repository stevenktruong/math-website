# %% Load data
data = [
    6.7,
    5.4,
    5.2,
    6.0,
    8.7,
    6.0,
    6.4,
    8.3,
    5.3,
    5.9,
    7.6,
    5.0,
    6.9,
    6.8,
    4.9,
    6.3,
    5.0,
    6.0,
    7.2,
    8.0,
    8.1,
    7.2,
    10.9,
    9.2,
    8.6,
    6.2,
    6.1,
    14.1,
    10.6,
    8.4,
]


# %% Problem 1
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

print("x-bar:", x_bar)
print("s^2:  ", s2)
print("s:    ", s)
print()
print("within  s of mean:", within_s)
print("within 2s of mean:", within_2s)

# %% Problem 3
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

print("pi_25:", pi_25)
print("pi_75:", pi_75)
print("iqr:  ", iqr)
print()
print("pi_10:", pi_10)
print("pi_90:", pi_90)
print()
print("suspected outliers: ", suspected)
print("outliers:           ", outliers)

# %%
from matplotlib import pyplot as plt

plt.boxplot(data, vert=False)
plt.show()

# %%
