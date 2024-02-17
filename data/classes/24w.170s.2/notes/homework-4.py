# %%
import numpy as np

# %% Problem 2
x = [3.1, 3.5, 3.3, 3.7, 4.5, 4.2, 4.2, 3.9, 3.5, 3.3]
print(np.mean(x))
print(np.sqrt(np.var(x, ddof=1)))
print()

# %% Problem 3
x = [
    -11.10 + 9.97,
    -19.50 + 15.80,
    -14.00 + 13.02,
    -8.30 + 9.28,
    -12.40 + 11.51,
    -7.89 + 7.40,
    -12.10 + 10.70,
    -8.30 + 10.40,
    -12.31 + 11.40,
]
y = [
    -22.90 + 22.89,
    -31.60 + 33.47,
    -27.70 + 25.75,
    -21.70 + 19.80,
    -19.36 + 18.00,
    -25.03 + 22.33,
    -26.90 + 25.26,
    -25.75 + 24.90,
]

print(x)
print(y)
print()
print(np.mean(x))
print(np.sqrt(np.var(x, ddof=1)))
print()
print(np.mean(y))
print(np.sqrt(np.var(y, ddof=1)))
print()

n_X = len(x)
n_Y = len(y)
s_p2 = ((n_X - 1) * np.var(x, ddof=1) + (n_Y - 1) * np.var(y, ddof=1)) / (n_X + n_Y - 2)

print(np.mean(x) - np.mean(y))
print(np.sqrt(s_p2))
print()

# %% Problem 4
x = np.array([644, 493, 532, 462, 565])
y = np.array([632, 472, 492, 661, 540])

n_X = len(x)
n_Y = len(y)
s_p2 = ((n_X - 1) * np.var(x, ddof=1) + (n_Y - 1) * np.var(y, ddof=1)) / (n_X + n_Y - 2)

print(np.mean(x) - np.mean(y))
print(np.sqrt(s_p2))
print()
print(np.sqrt(np.var(x - y, ddof=1)))


# %%
