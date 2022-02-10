---
title: Week 6 Discussion Notes
date: "2022-02-10"
tags:
    - connectedness
publish: yes
---

# Week 6 Discussion Notes

## Table of Contents

## Connectedness

<definition>

Let $\p{X, d}$ be a metric space. We say that $X$ is **disconnected** if there exist two disjoint, non-empty, open sets $U, V \subseteq X$ such that $X = U \cup V$.

If $X$ is not disconnected, then we say that $X$ is **connected**.

</definition>

<example>

-   Any interval in $\R$ is connected (with respect to the restricted absolute value metric).

-   $\Q \subseteq \R$ is disconnected (with respect to the restricted absolute value metric).

</example>

<example> (warmup to 2.4.6)

Let $\p{X, d}$ be a metric space and assume $A, B$ are connected sets in $X$ such that $A \cap B = \emptyset$. Show that $A \cup B$ is connected.

</example>

<solution>

Assume that $A \cup B = U \cup V$, where $U, V$ are disjoint, non-empty, open sets in $A \cup B$. By the properties of sub-metric spaces, there exist open sets $U_X, V_X \subseteq X$ in $X$ such that $U = \p{A \cup B} \cap U_X$ and $V = \p{A \cup B} \cap V_X$.

**Claim:** $A \subseteq U$ or $A \subseteq V$.

Suppose otherwise, and that $A \cap U \neq \emptyset$ and $A \cap V \neq \emptyset$. Notice that

$$
A \cap U
    = A \cap \p{A \cup B} \cap U_X
    = A \cap U_X,
$$

i.e., $A \cap U$ is open in $A$ and by symmetry, $A \cap V$ is open in $A$ also. But $A \cup B = U \cup V$, so

$$
\begin{aligned}
    A
        &= A \cap \p{A \cup B} \\
        &= A \cap \p{U \cup V}
            && \p{\text{since }A \cup B = U \cup V} \\
        &= \p{A \cap U} \cup \p{A \cap V}.
\end{aligned}
$$

But $A \cap U$ and $A \cap V$ are disjoint, non-empty, and open sets in $A$, which implies that $A$ is disconnected, a contradiction.

Thus, $A \subseteq U$ or $A \subseteq V$. Without loss of generality, we may assume that $A \subseteq U$. In the other case, we can just replace $U$ with $V$ in the following argument.

Because $A \cap B \neq \emptyset$, this means that $B \cap U \neq \emptyset$. Since $B$ is connected, this means that $B \subseteq U$ as well by using the same argument in the claim, which means that $A \cup B \subseteq U$, so $V = \emptyset$, a contradiction. Thus, no such $U$ and $V$ existed to begin with, i.e., $A \cup B$ is connected.

</solution>

<example>

Let $\p{X, d}$ be a connected metric space and let $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ be a function such that the set

$$
E = \set{ x \in X \st f\p{x} = y}
$$

is non-empty, open, and closed. Show that $f$ is constant.

</example>

<solution>

Assume otherwise, and that $f$ is not constant. Then $E^\comp \neq \emptyset$: since $E \neq \emptyset$, there exists $x \in X$ such that $f\p{x} = y$, but $f$ is not constant, so there exists $x' \in X$ such that $f\p{x'} \neq y$, i.e., $x' \in E^\comp$.

Since $E$ was closed, we know that $E^\comp$ is open, and by definition,

$$
X = E \cup E^\comp.
$$

But $E, E^\comp$ are disjoint (by definition), non-empty, and open, which implies that $X$ is disconnected, a contradiction.

</solution>

### Path-Connectedness

<definition>

Let $\p{X, d}$ be a metric space. Then $X$ is **path-connected** if for any two points $x, y \in X$, there exists a continuous function $\func{\gamma}{\br{0,1}}{X}$ such that $\gamma\p{0} = x$ and $\gamma\p{1} = y$.

</definition>

<remark>

In your homework, you will prove that path-connected $\implies$ connected. However, the converse is not true in general, i.e., there are connected metric spaces which are not path-connected.

</remark>

Sometimes, it's easier to show that a metric space is path-connected than it is to show that it's connected directly.

<example>

Show that

$$
E = \set{f \in C\p{\br{0,1}} \st f\p{0} = 0}
$$

is a connected subset of $C\p{\br{0, 1}}$ with the $\sup$-metric.

</example>

<solution>

We'll show that $E$ is path-connected. Let $f, g \in E$, and define the line segment (or homotopy) between them via $\func{\gamma}{\br{0,1}}{E}$,

$$
\gamma_t\p{x} = \p{1 - t}f\p{x} + tg\p{x}.
$$

For any $t \in \br{0, 1}$, the function $\gamma_t\p{x}$ is continuous since it's a linear combination of the continuous functions $f$ and $g$, and

$$
\gamma_t\p{0}
    = \p{1 - t}f\p{0} + tg\p{0}
    = 0,
$$

so $\gamma$ is well-defined (i.e., it actually gives me functions in $E$).

If $f = g$, then $\gamma$ is constant in $t$, so it's automatically continuous. If $f \neq g$, then let $\epsilon > 0$.

$$
\begin{aligned}
    \abs{\gamma_t\p{x} - \gamma_s\p{x}}
        &= \abs{\p{1 - t}f\p{x} + tg\p{x} - \p{\p{1 - s}f\p{x} + sg\p{x}}} \\
        &= \abs{\p{s - t}f\p{x} + \p{t - s}g\p{x}} \\
        &= \abs{\p{t - s}\p{g\p{x} - f\p{x}}} \\
        &\leq \abs{s - t} \underbrace{\sup_{z \in \br{0, 1}}{\abs{f\p{z} - g\p{z}}}}_{\eqqcolon\:C_{f,g}} \\
    \implies
    \sup_{x \in \br{0, 1}}{\abs{\gamma_t\p{x} - \gamma_s\p{x}}} \\
        &\leq C_{f,g}\abs{t - s}.
\end{aligned}
$$

$C_{f,g}$ exists and is finite because $\abs{f - g}$ is a continuous function on the compact set $\br{0, 1}$. Moreover, $C_{f,g} \neq 0$ since we assumed that $f \neq g$. Thus, we can pick $\delta = \frac{\epsilon}{C_{f,g}}$. Then if $\abs{t - s} < \delta$, we get

$$
\begin{aligned}
    d\p{\gamma_t, \gamma_s}
        &= \sup_{x \in \br{0, 1}}{\abs{\gamma_t\p{x} - \gamma_s\p{x}}} \\
        &\leq C_{f,g}\abs{t - s} \\
        &< C_{f,g} \cdot \frac{\epsilon}{C_{f,g}} \\
        &= \epsilon,
\end{aligned}
$$

so $\gamma$ is continuous in $t$. In other words, $\gamma$ is a valid path between $f$ and $g$, so $E$ is path-connected, hence connected.

</solution>

### Connectedness and Continuity

<proposition>

If $\func{f}{\p{X, d_X}}{\p{Y, d_Y}}$ is continuous and $E \subseteq X$ is connected, then $f\p{E} \subseteq Y$ is connected.

</proposition>

Like with compact sets, we say "the continuous image of a connected set is connected."

This can be a useful way to show that some sets are connected directly.

<example>

Let $\func{f}{\R}{\R}$ be a continuous function. Show that its graph

$$
\Gamma = \set{\p{x, f\p{x}} \st x \in \R}
$$

is a connected subset of $\R^2$.

</example>

<solution>

We can define $\func{F}{\R}{\Gamma}$ by $F\p{x} = \p{x, f\p{x}}$. By construction, $\Gamma = F\p{\R}$, and since $\R$ is connected, if we show that $F$ is continuous, we automatically know that $\Gamma$ is connected.

Let $\epsilon > 0$ and fix $x_0 \in \R$. Recall that

$$
d_{\ell^2}\p{F\p{x}, F\p{x_0}}
    = \sqrt{\p{x - x_0}^2 + \p{f\p{x} - f\p{x_0}}^2}.
$$

Since $f$ is continuous, there exists $\delta > 0$ such that if $\abs{x - y} < \delta$, then $\abs{f\p{x} - f\p{y}} < \frac{\epsilon}{\sqrt{2}}$. Thus, if $\abs{x - y} < \min\set{\delta, \frac{\epsilon}{\sqrt{2}}}$, then

$$
\abs{x - x_0} < \frac{\epsilon}{\sqrt{2}}
\quad\text{and}\quad
\abs{f\p{x} - f\p{x_0}} < \frac{\epsilon}{\sqrt{2}},
$$

so

$$
d_{\ell^2}\p{F\p{x}, F\p{x_0}}
    < \sqrt{\frac{\epsilon^2}{2} + \frac{\epsilon^2}{2}}
    = \epsilon,
$$

so $F$ is continuous, which means $\Gamma$ is connected.

</solution>
