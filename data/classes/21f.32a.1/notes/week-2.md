---
title: Week 2 Discussion Notes
date: "2021-10-07"
tags:
    - dot product
    - cross product
publish: yes
---

# Week 2 Discussion Notes

## Table of Contents

## Dot Product

The **dot product** of two vectors $\vec{v} = \ang{v_1, v_2, v_3}$ and $\vec{w} = \ang{w_1, w_2, w_3}$ is defined by

$$
\vec{v} \cdot \vec{w}
    = v_1w_1 + v_2w_2 + v_3w_3.
$$

### Properties

**Commutativity**

Notice that multiplication is commutative (i.e., $ab = ba$), so

$$
\begin{aligned}
    \vec{v} \cdot \vec{w}
        &= v_1w_1 + v_2w_2 + v_3w_3 \\
        &= w_1v_1 + w_2v_2 + w_3v_3 \\
        &= \vec{w} \cdot \vec{v}.
\end{aligned}
$$

This means the dot product is commutative or in other words, the order does _not_ matter when you compute it.

**Relationship to vector lengths**

$$
\vec{v} \cdot \vec{v}
    = v_1^2 + v_2^2 + v_3^2
    = \norm{\vec{v}}^2,
$$

which looks _almost_ like $x \cdot x = x^2$ for scalars.

**Linearity**

If $\vec{u}, \vec{v}, \vec{w}$ are vectors and $a, b$ are scalars, then

$$
\vec{u} \cdot \p{a\vec{v} + b\vec{w}}
    = a\vec{u} \cdot \vec{v} + b\vec{u} \cdot \vec{w},
$$

so you can distribute similar to regular addition and multiplication. Because the dot product is commutative, this is also true in the first slot of the dot product:

$$
\p{a\vec{v} + b\vec{w}} \cdot \vec{u}
    = a\vec{v} \cdot \vec{u} + b\vec{w} \cdot \vec{u}.
$$

**Cosine formula**

If $\theta$ is in the angle (chosen to be between $0$ and $\pi$) between the vectors $\vec{v}$ and $\vec{w}$, then

$$
\vec{v} \cdot \vec{w} = \norm{\vec{v}} \norm{\vec{w}} \cos\theta.
$$

You can [derive this using the law of cosines](https://proofwiki.org/wiki/Cosine_Formula_for_Dot_Product) (you can ignore Case 2).

**Relationship to orthogonality**

We say that $\vec{v}$ and $\vec{w}$ are **orthogonal** (or **perpendicular**) if the angle between them is $\frac{\pi}{2}$ (i.e., they make a right angle to each other). We can use the dot product to test for orthogonality, since if $\vec{v}$ and $\vec{w}$ are non-zero, then by the cosine formula,

$$
\vec{v} \cdot \vec{w} = \norm{\vec{v}} \norm{\vec{w}} \cos\theta = 0
\implies \cos\theta = 0.
$$

Since $\theta$ is between $0$ and $\pi$, this means that if $\vec{v} \cdot \vec{w} = 0$, then $\theta = \frac{\pi}{2}$. This means that if the dot product of two non-zero vectors is $0$, then they are orthogonal to each other.

### Projections

Given vectors $\vec{u}$ and $\vec{v}$, we can draw this picture:

<img src="{{ assetsFolder }}/images/projection.png" width=60% />

The green vector is the **projection of $\vec{u}$ along $\vec{v}$** and is parallel to $\vec{v}$, so there exists a scalar $\lambda$ such that

$$
\vec{u}_{\parallel\vec{v}} = \lambda \frac{\vec{v}}{\norm{\vec{v}}}.
$$

I'm using a unit vector here because I care about the direction of $\vec{v}$ (which is encapsulated in its unit vector) but I don't care about the length.

The red vector is perpendicular to $\vec{v}$, meaning $\vec{u}_{\perp\vec{v}} \cdot \vec{v} = 0$. From the picture, you can also see that

$$
\vec{u}
    = \vec{u}_{\parallel\vec{v}} + \vec{u}_{\perp\vec{v}}
    = \lambda \frac{\vec{v}}{\norm{\vec{v}}} + \vec{u}_{\perp\vec{v}},
$$

so to solve for $\lambda$, we can take the dot product with $\vec{v}$ on both sides:

$$
\begin{aligned}
    \vec{u} \cdot \vec{v}
        &= \p{\lambda \frac{\vec{v}}{\norm{\vec{v}}} + \vec{u}_{\perp\vec{v}}} \cdot \vec{v} \\
        &= \lambda \frac{\vec{v} \cdot \vec{v}}{\norm{\vec{v}}} + \vec{u}_{\perp\vec{v}} \cdot \vec{v} \\
        &= \lambda \norm{\vec{v}} \\
    \implies
    \lambda
        &= \frac{\vec{u} \cdot \vec{v}}{\norm{\vec{v}}}.
\end{aligned}
$$

$\lambda$ above is called the **scalar component of $\vec{u}$ along $\vec{v}$**, and we can use this to write down the formula for the projection of $\vec{u}$ along $\vec{v}$:

$$
\vec{u}_{\parallel\vec{v}}
    = \p{\frac{\vec{u} \cdot \vec{v}}{\norm{\vec{v}}}} \frac{\vec{v}}{\norm{\vec{v}}}
$$

## Cross Product

Unlike the dot product, which gives you a scalar, the cross product of two vectors $\vec{v}$ and $\vec{w}$ give you another vector, denoted $\vec{v} \times \vec{w}$. Geometrically, $\vec{v} \times \vec{w}$ is orthogonal to both $\vec{v}$ and $\vec{w}$, and it follows the [right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule):

<img src="{{ assetsFolder }}/images/cross-product.png" width=60% />

In the picture, $\vec{v}$ points to the right, and $\vec{w}$ points into the webpage. From the picture, you can already see that the cross product is _not_ commutative.

### Geometric Interpretation

Calculating the cross product is best understood by specifying its direction and magnitude. The direction is given by the right-hand rule, and the magnitude is given by the formula

$$
\norm{\vec{v} \times \vec{w}} = \norm{\vec{v}} \norm{\vec{w}} \abs{\sin\theta},
$$

there $\theta$ is the angle between $\vec{v}$ and $\vec{w}$. There's a nice geometric interpretation of this formula:

<img src="{{ assetsFolder }}/images/cross-product-area.png" width=60% />

The area of a parallelogram is $\mathrm{base} \times \mathrm{height}$. In the picture above, the base is $\norm{\vec{v}}$, the length of $\vec{v}$, and the height is $\norm{\vec{w}} \sin\theta$, so $\norm{\vec{v} \times \vec{w}}$ is the area of the parallelogram spanned by $\vec{v}$ and $\vec{w}$.

### Determinant Formula

If you want to calculate $\vec{v} \times \vec{w}$ algebraically, then you can use the determinant formula:

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

**Warning:** Notice that there's a minus sign on $\hat{j}$.

### Properties

**Anticommutativity**

From the picture above, you should be able to tell that $\vec{w} \times \vec{v} = -\vec{v} \times \vec{w}$.

**Linearity**

Like the dot product, you can distribute the cross product, but you have to make sure you keep things in order:

$$
\vec{u} \times \p{a\vec{v} + b\vec{w}}
    = a\vec{u} \times \vec{v} + b\vec{u} \times \vec{w}.
$$

This works in the first slot too:

$$
\p{a\vec{v} + b\vec{w}} \times \vec{u}
    = a\vec{v} \times \vec{u} + b\vec{w} \times \vec{u}.
$$

**Relationship with parallel vectors**

From either the formula for $\norm{\vec{v} \times \vec{w}}$ or the determinant formula, you can show that

$$
\vec{v} \times \vec{v} = \vec{0}.
$$

In fact, because the cross product is linear, given any scalar $\lambda$, you also get

$$
\vec{v} \times \lambda\vec{v}
    = \lambda\p{\vec{v} \times \vec{v}}
    = \vec{0}.
$$

This means that the cross product of two parallel vectors is always the zero vector $\vec{0}$.
