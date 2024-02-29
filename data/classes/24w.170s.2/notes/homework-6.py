# %%
import numpy as np

# %% Problem 2
m_X = 72.9
s_X = 25.6
m_Y = 81.7
s_Y = 28.3
n_X = 13
n_Y = 16

s_p = np.sqrt(((n_X - 1) * s_X**2 + (n_Y - 1) * s_Y**2) / (n_X + n_Y - 2))
t = (m_X - m_Y) / (s_p * np.sqrt(1 / n_X + 1 / n_Y))
print(t)

# %% Problem 3
x = np.array([49, 108, 110, 82, 93, 114, 134, 114, 96, 52, 101, 114, 120, 116])
y = np.array([133, 108, 93, 119, 119, 98, 106, 131, 87, 153, 116, 129, 97, 110])

m_X = np.mean(x)
m_Y = np.mean(y)
n_X = len(x)
n_Y = len(y)
s_p = np.sqrt(
    ((n_X - 1) * np.var(x, ddof=1) + (n_Y - 1) * np.var(y, ddof=1)) / (n_X + n_Y - 2)
)
t_a = 2.056

print(
    m_X - m_Y - t_a * s_p * np.sqrt(1 / n_X + 1 / n_Y),
    m_X - m_Y + t_a * s_p * np.sqrt(1 / n_X + 1 / n_Y),
)

print((m_X - m_Y) / (s_p * np.sqrt(1 / n_X + 1 / n_Y)))

# %% Problem 3(iv)
x = np.array([49, 108, 110, 82, 93, 114, 134, 114, 96, 52, 101, 114, 120, 116])
y = np.array([133, 108, 93, 119, 119, 98, 106, 131, 87, 153, 116, 129, 97, 110])
d = x - y

m_D = np.mean(d)
n_D = len(d)
s_D = np.sqrt(np.var(d, ddof=1))
t_a = 2.160

print(m_D - t_a * s_D / np.sqrt(n_D), m_D + t_a * s_D / np.sqrt(n_D))
print(m_D / (s_D / np.sqrt(n_D)))

# %% Problem 4
x = [2.9, 14.9, 1.0, 12.6, 9.4]
y = [7.8, 4.2, 2.4, 12.9, 17.3]

m_X = np.mean(x)
m_Y = np.mean(y)
n_X = len(x)
n_Y = len(y)
s_p = np.sqrt(
    ((n_X - 1) * np.var(x, ddof=1) + (n_Y - 1) * np.var(y, ddof=1)) / (n_X + n_Y - 2)
)
t_a = 2.896

print((m_X - m_Y) / (s_p * np.sqrt(1 / n_X + 1 / n_Y)))

# %%
