---
title: Calculus Review
date: 9/1/20
publish: no
---

## Calculus Review

### Differentiation

<definition id="derivative-definition">

**Definition** Let $f$ be a function, and define the limit

$$
f'\p{x} = \lim_{h\to0} \frac{f\p{x + h} - f\p{x}}{h}.
$$

If this limit exists, then we say that $f$ is **differentiable at $x$** and we call $f'$ the **derivative of $f$**. $f'$ is also written as $\deriv{}{x} f\p{x}$ or $\deriv{f}{x}$.

</definition>

<proposition id="derivative-properties">

**Properties of the Derivative** Let $f, g$ be differentiable functions and $c$ be a real number. Then the following hold:

1.  $\deriv{}{x}$ is **linear**, that is,

    $$
    \deriv{}{x} \p{f\p{x} + g(x)} = \deriv{}{x} f\p{x} + \deriv{}{x} g\p{x}
    \quad\text{and}\quad
    \deriv{}{x} cf\p{x} = c \deriv{}{x} f\p{x}.
    $$

2.  The **product rule**:

    $$
    \deriv{}{x} f\p{x}g\p{x} = f'\p{x}g\p{x} + f\p{x}g'\p{x}
    $$

3.  The **chain rule**:

    $$
    \deriv{}{x} f\p{g\p{x}} = f'\p{g\p{x}}g'\p{x}
    $$

</proposition>

Another commonly used property is the **quotient rule**:

$$
\deriv{}{x} \frac{f\p{x}}{g\p{x}} = \frac{f'\p{x}g\p{x} - g'\p{x}f\p{x}}{\br{g'\p{x}}^2},
$$

when $g\p{x}$ and $g'\p{x}$ are both non-zero.

<exercise>

By writing $\frac{f\p{x}}{g\p{x}} = f\p{x}\br{g\p{x}}^{-1}$, derive the quotient rule using the product rule and the chain rule.

</exercise>

<proposition id="derivative-table">

**Common Derivatives**

$$
\begin{aligned}
    &\deriv{}{x} x^n &=& \phantom{-}nx^{n-1} \\[2ex]
    &\deriv{}{x} \sin{x} &=& \phantom{-}\cos{x} \\[2ex]
    &\deriv{}{x} \cos{x} &=& -\sin{x} \\[2ex]
    &\deriv{}{x} \tan{x} &=& \phantom{-}\sec^2{x} \\[2ex]
    &\deriv{}{x} \cot{x} &=& -\csc^2{x} \\[2ex]
    &\deriv{}{x} \sec{x} &=& \phantom{-}\sec{x}\tan{x} \\[2ex]
    &\deriv{}{x} \csc{x} &=& -\csc{x}\cot{x} \\[2ex]
    &\deriv{}{x} e^x     &=& \phantom{-}e^x \\[2ex]
    &\deriv{}{x} \log{x} &=& \phantom{-}\frac{1}{x}
\end{aligned}
$$

Note that $\log{x}$ is base $e$, $\textbf{not}$ base $10$.

</proposition>

<example>

Calculate $\deriv{}{x} \log_a{x}$, where $a > 0$ and $a \neq 1$.

</example>

<solution>

By the [change of base formula](https://proofwiki.org/wiki/Change_of_Base_of_Logarithm), we have $\log_a{x} = \frac{\log{x}}{\log{a}}$. Referring to the table above, we get

$$
\deriv{}{x} \log_a{x}
    = \deriv{}{x} \frac{\log{x}}{\log{a}}
    = \boxed{\frac{1}{x\log{a}}}.
$$

</solution>

<exercise>

Calculate $\deriv{}{x} b^x$, where $b > 0$. (Hint: $b = e^{\log{b}}$)

</exercise>

### Integration

<definition id="integral-definition">

**Definition** Let $f$ be continuous. If $F$ is a function which satisfies $F' = f$, then $F$ is called an **antiderivative** or **integral** of $f$. Furthermore, **indefinite integral of $f$ with respect to $x$** is

$$
\int f\p{x} \,\diff{x} = F\p{x} + C,
$$

where $C$ is a constant.

</definition>

<proposition id="integral-properties">

**Properties of the Integral** Let $f, g$ be integrable functions and $c$ be a real number. Then the following hold:

1.  Integration is **linear**, that is,

    $$
    \int f\p{x} + g\p{x} \,\diff{x} = \int f\p{x} \,\diff{x} + \int g\p{x} \,\diff{x}
    \quad\text{and}\quad
    \int cf\p{x} \,\diff{x} = c \int f\p{x} \,\diff{x}.
    $$

2.  $\int_a^b f\p{x} \,\diff{x} = -\int_b^a f\p{x} \,\diff{x}$
3.  $\int_a^b f\p{x} \,\diff{x} + \int_b^c f\p{x} \,\diff{x} = \int_a^c f\p{x} \,\diff{x}$

</proposition>

<theorem id="fundamental-theorem-of-calculus">

**Theorem (the fundamental theorem of calculus)** Let $F$ be an antiderivative of $f$. Then

1. $\int_a^b f\p{x} \,\diff{x} = F\p{b} - F\p{a}$
2. $\deriv{}{x} \int_a^x f\p{t} \,\diff{t} = f\p{x}$

</theorem>

Notice that in (ii), we replaced $x$ with $t$ as the variable of integration because the bounds contain $x$. Depending on who you ask, using $x$ as a bound and the variable of integration at the same time may be considered incorrect (i.e., if you do this, you might lose points on exams!). Either way, it can become a big source of confusion, so it's good to get in the habit of doing this.

The variable of integration ($x$ in (i) and $t$ in (ii)) is called a **dummy variable**, which just means that the symbol you put in their place doesn't matter as long as it isn't used in the bounds. For example, it's perfectly valid to write

$$
\deriv{}{x} \int_a^x f\p{😊} \,\diff{😊} = f\p{x},
$$

and you should avoid writing anything like

$$
\int_a^😢 f\p{😢} \,\diff{😢}.
$$

Integration can be thought of as the inverse of differentiation. For example,

$$
\deriv{}{x} x^n = nx^{n-1}
\implies
\int nx^{n-1} \,\diff{x} = x^n + C.
$$

<exercise>

Transform the [derivative table](#derivative-table) into an integration table.

</exercise>

<example>

Calculate $\int \tan{x} \,\diff{x}$.

</example>

<solution>

Recall that $\tan{x} = \frac{\sin{x}}{\cos{x}}$. We'll use [$u$-substitution](https://www.mathsisfun.com/calculus/integration-by-substitution.html): set $u = \cos{x}$, which gives $\diff{u} = -\sin{x} \,\diff{x}$. Then

$$
\begin{aligned}
    \int \tan{x} \,\diff{x}
        &= \int \frac{\sin{x}}{\cos{x}} \,\diff{x} \\[2ex]
        &= \int \frac{1}{\cos{x}} \sin\p{x} \,\diff{x} \\[2ex]
        &= -\int \frac{1}{\colorbox{red}{$\cos{x}$}} \colorbox{yellow}{$-\sin\p{x} \,\diff{x}$} \\[2ex]
        &= -\int \frac{1}{\colorbox{red}{$u$}} \colorbox{yellow}{$\,\diff{u}$} \\[2ex]
        &= -\log{\abs{u}} + C \\[2ex]
        &= \boxed{-\log{\abs{\cos{x}}} + C}.
\end{aligned}
$$

</solution>

<exercise>

Calculate $\int \cot{x} \,\diff{x}$.

</exercise>
