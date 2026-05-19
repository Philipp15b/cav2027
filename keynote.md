---
layout: page
title: Keynotes
---

## Deriving Test Oracles for Verification Infrastructure

July 27: _[Maria Christakis](https://mariachris.github.io), TU Wien, Austria_

<img src="https://conferences.i-cav.org/2026/assets/img/maria-tuwien.jpg" alt="Maria" width="300">

**Abstract:**
Program analyzers and solvers are increasingly trusted as infrastructure
for software correctness: they prove safety properties, find bugs,
discharge verification conditions, and support automated-reasoning
pipelines. Yet these tools are themselves complex software systems.
Fully verifying modern analyzers and solvers in the verification stack
is rarely realistic, which raises a complementary question: how do we
test the tools that verify our programs?

The central obstacle is the oracle problem. For many interesting inputs,
we do not know in advance what the tool should report. This talk
presents a journey through techniques for deriving such oracles. I will
start with specification-based testing of analyzer components, then
discuss program generation, differential testing, and metamorphic
testing as ways to derive expected results when full specifications or
ground truth are unavailable. I will then focus on interrogation
testing, which makes testing adaptive by using previous answers to
generate follow-up queries and expose contradictions.

I will close by showing how the same oracle-centric view extends beyond
analyzers to zero-knowledge systems, secure multiparty computation
compilers, and machine-learning models. Across these domains, the goal
is to make correctness claims testable by turning the artifacts that
systems expose into oracles.

**Bio:** Maria Christakis is a full professor at TU Wien, where she leads the
Software Engineering research unit. Her work focuses on developing
innovative techniques and tools for writing, specifying, verifying,
analyzing, testing, and debugging software. Her goal is to make programs
more robust while enhancing the developer experience.

Before joining TU Wien in 2022, Maria conducted research at the Max
Planck Institute for Software Systems (Germany), the University of Kent
(UK), Microsoft Research (USA), and ETH Zurich (Switzerland). Since
then, she was awarded an ERC Starting grant, WWTF and FWF grants, a
Google Research Scholar award, an Amazon Research award, and she was
elected member of the Young Academy of the Austrian Academy of Sciences.

## July 29: Guy Katz

<img src="https://conferences.i-cav.org/2026/assets/img/guy-katz.jpg" alt="Guy" width="300">

_[Guy Katz](https://www.katz-lab.com), Hebrew University of Jerusalem, Israel_

**Bio:**
Guy Katz is an Associate Professor at the Hebrew University of
Jerusalem, Israel. He earned his Ph.D. from the Weizmann Institute of
Science in 2015. His research bridges the gap between Formal Methods and
Software Engineering, with a specific focus on applying formal
verification to systems incorporating neural networks and Large Language
Models (LLMs). Prof. Katz is a recipient of the Krill Prize (2021) and
the CAV Award (2024), and his work is supported by an ERC grant.
