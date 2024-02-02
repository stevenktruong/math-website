# %% Load data
from matplotlib import pyplot as plt
import numpy as np

x = np.array([62, 74, 66, 30, 84, 45, 14, 70, 82, 42])
y = np.array([71, 84, 76, 36, 95, 53, 18, 80, 93, 49])
# %%
x_bar = np.mean(x)
y_bar = np.mean(y)

beta_hat = np.sum((y - y_bar) * (x - x_bar)) / np.sum((x - x_bar) ** 2)
alpha_hat = y_bar - beta_hat * x_bar
sigma2_hat = np.mean((y - alpha_hat - beta_hat * x) ** 2)

# Or without numpy:
# beta_hat = sum([(y[i] - y_bar) * (x[i] - x_bar) for i in range(n)]) / sum(
#     [(x[i] - x_bar) ** 2 for i in range(n)]
# )
# alpha_hat = y_bar - beta_hat * x_bar
# sigma_hat_2 = sum([y[i] - alpha_hat - beta_hat * x[i] for i in range(n)]) / n

print(f"alpha_hat:  {alpha_hat}")
print(f"beta_hat:   {beta_hat}")
print(f"sigma2_hat: {sigma2_hat}")

fig = plt.figure(figsize=(8, 16))

# Plot sample and regression line
ax = fig.add_subplot(2, 1, 1)
ax.set_title(
    f"$\\alpha$ (intercept): {alpha_hat:>.2f}, $\\beta$ (slope): {beta_hat:>.2f}"
)
ax.set_xlim(0, np.max(x))
ax.set_ylim(0, np.max(y))
ax.scatter(x, y, c="black", label="data")
ax.axline((0, alpha_hat), slope=beta_hat, label="regression line", zorder=-1)
ax.legend()

# Plot residuals plot
ax = fig.add_subplot(2, 1, 2)
ax.set_title("residuals")
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
ax.spines["bottom"].set_position("zero")
ax.set_ylim(-1, 1)
ax.set_yticks(np.linspace(-1, 1, 9))
ax.scatter(x, y - (alpha_hat + beta_hat * x), c="black", label="residual")
ax.legend()

# %%
