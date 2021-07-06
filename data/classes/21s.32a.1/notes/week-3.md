---
title: Week 3 Discussion Notes
date: "2020-04-18"
tags:
    - cross product
publish: yes
---

# Week 3 Discussion Notes

## Table of Contents

## Cross Product

While it might look like a random definition, the cross product is the "best" way to find a vector perpendicular to two vectors. Geometrically, the cross product looks like the following:

<img src="{{ assetsFolder }}/images/cross-product.png" height=300px />

The direction of $\vec{v} \times \vec{w}$ is determined by the right-hand rule, [like the axes](../week-1). If you look at the picture, you'll see that **order matters**! $\vec{v} \times \vec{w}$ and $\vec{w} \times \vec{v}$ point in opposite directions, and you can check that the directions are consistent with the right-hand rule.

Algebraically, you can calculate the cross product with the following determinant formula:

$$
\begin{aligned}
    \vec{v} \times \vec{w}
        &=  \begin{vmatrix}
                \hat{i} & \hat{j} & \hat{k} \\
                v_1 & v_2 & v_3 \\
                w_1 & w_2 & w_3
            \end{vmatrix} \\
        &=
            \begin{vmatrix}
                v_2 & v_3 \\
                w_2 & w_3
            \end{vmatrix}
            \hat{i}
            -
            \begin{vmatrix}
                v_1 & v_3 \\
                w_1 & w_3
            \end{vmatrix}
            \hat{j}
            +
            \begin{vmatrix}
                v_1 & v_2 \\
                w_1 & w_2
            \end{vmatrix}
            \hat{k} \\
        &=
            \p{v_2w_3 - v_3w_2} \hat{i}
            - \p{v_1w_3 - v_3w_1} \hat{j}
            + \p{v_1w_2 - v_2w_1} \hat{k}.
\end{aligned}
$$

Notice that there is an additional minus sign when calculating the $\hat{j}$-coordinate. Lastly, on #6 of this week's worksheet, you will show that the length of $\vec{v} \times \vec{w}$ is the area of parallelogram spanned by $\vec{v}$ and $\vec{w}$:

<img src="{{ assetsFolder }}/images/cross-product-area.png" height=250px />

The area of the parallelogram is the height ($\norm{\vec{w}} \sin\theta$) times the base length ($\norm{\vec{v}}$), which is what #6 tells you:

$$
\norm{\vec{v} \times \vec{w}}
    = \norm{\vec{v}} \norm{\vec{w}} \sin\theta,
$$

where $\theta$ is the angle between $\vec{v}$ and $\vec{w}$ measured in the interval $\br{0, \pi}$ (or $\br{0^\circ, 180^\circ}$ in degrees).

## Triple Product

I made a [GeoGebra graph](https://www.geogebra.org/m/b7hakga5) to help show why $\vec{u} \cdot \p{\vec{v} \times \vec{w}} = 0$ tells you that $\vec{u}, \vec{v}, \vec{w}$ are coplanar.
