---
title: Practice Midterm Problems 1 and 3
date: "2022-04-21"
tags:
publish: yes
---

# Practice Midterm Problems 1 and 3

## Table of Contents

## Problem 1

A bridge hand is found by taking $13$ cards at random and without replacement from a standard deck of $52$ cards. Find the probability of drawing each of the following hands.

1. One in which there are five spades, two hearts, two diamonds, and four clubs.
2. One in which there are at least three spades, at least three hearts, at least three diamonds, and at least three clubs.

<solution>

1. There are $\binom{52}{13}$ ways to pick $13$ cards, and these are all equally likely. There are $13$ cards of each suit, so there are $\binom{13}{5}$ ways to pick five spades, $\binom{13}{2}$ ways to pick two hearts, etc., so the final answer is

    $$
    \boxed{\frac{\binom{13}{5} \binom{13}{2} \binom{13}{2} \binom{13}{4}}{\binom{52}{13}}}.
    $$

2. The condition just tells us that our hand should have $3$ cards for $3$ of the suits, and $4$ cards for the final suit. So, we need to pick the suit that gets $4$ cards, and then pick our cards accordingly. We get

    $$
    \boxed{\binom{4}{1} \frac{\binom{13}{4} \binom{13}{3} \binom{13}{3} \binom{13}{3}}{\binom{52}{13}}}.
    $$

</solution>

## Problem 3

A hospital receives $70\%$ of its flu vaccine from Company Good and the remainder from Company Evil. Each shipment contains a large vial of vaccine. From Company Good,
$10\%$ of the vials are ineffective. From Company Evil, $80\%$ are ineffective. A hospital tests $n = 10$ randomly selected vials from one shipment for their effectiveness.

1. Compute the probability that exactly two of these $10$ vials are ineffective, provided this shipment comes from Company Good.
2. Compute the probability that exactly two of these $10$ vials are ineffective, provided this shipment comes from Company Evil.
3. Compute the probability that exactly two of these $10$ vials are ineffective.
4. Compute the probability that this shipment comes from Company Good, provided exactly two of these $10$ vials are ineffective.

<solution>

Let

$$
\begin{aligned}
    A
        &= \set{\text{exactly }2\text{ vials are ineffective}} \\
    G
        &= \set{\text{the shipment is from Company Good}} \\
    E
        &= \set{\text{the shipment is from Company Evil}}.
\end{aligned}
$$

1.  If we assume $G$, then the number of ineffective vials is a binomial random variable with $10$ trials and success probability $0.1$. Thus, the probability is

    $$
    \boxed{\P\p{A \given G} = \binom{10}{2} \p{0.1}^2 \p{0.9}^8}.
    $$

2.  This is the same as (1), except the success probability is $0.8$ this time, so

    $$
    \boxed{\P\p{A \given E} = \binom{10}{2} \p{0.8}^2 \p{0.2}^8}.
    $$

3.  The shipment can come from either Company Good or Company Evil, so we can split up the event to get

    $$
    \begin{aligned}
        \P\p{A}
            &= \P\p{A \cap G} + \P\p{A \cap E} \\
            &= \P\p{G} \P\p{A \given G} + \P\p{E} \P\p{A \given E} \\
            &= \boxed{0.7 \times \binom{10}{2} \p{0.1}^2 \p{0.9}^8 + 0.3 \times \binom{10}{2} \p{0.8}^2 \p{0.2}^8}.
    \end{aligned}
    $$

4.  We want to calculate $\P\p{G \given A}$, and we already have $\P\p{A \given G}$, so to swap the events, we can use Bayes' rule to get

    $$
    \begin{aligned}
        \P\p{G \given A}
            &= \frac{\P\p{G}\P\p{A \given G}}{\P\p{A}} \\
            &= \boxed{\frac{0.7 \times \binom{10}{2} \p{0.1}^2 \p{0.9}^8}{0.7 \times \binom{10}{2} \p{0.1}^2 \p{0.9}^8 + 0.3 \times \binom{10}{2} \p{0.8}^2 \p{0.2}^8}}.
    \end{aligned}
    $$

</solution>
