# %%
import numpy as np

# %% Problem 1
x = np.array(
    [
        41195,
        39485,
        38050,
        40890,
        39245,
        31031,
        30906,
        41229,
        36840,
        38345,
        34930,
        40780,
        38050,
    ]
)

m = 40000
sign = np.sign(x - m)
rank = np.argsort(np.argsort(np.abs(x - m))) + 1
print(f"w = {np.sum(sign * rank)}")
print(f"y = {np.sum(sign < 0)}")

# %% Problem 2
x = np.array([350, 353, 357, 353, 352, 353, 354, 354, 354, 356, 355, 355])
print(np.mean(x))
