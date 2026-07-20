---
title: "Artificial Hivemind: an interactive guide to the paper"
description: "Notes on 'Artificial Hivemind' (NeurIPS 2025) — why 25 different language models asked an open-ended question tend to give you only two ideas, and why our reward models can't see the difference."
date: 2026-07-20
tags: ["Research"]
draft: false
---

Ask 25 different language models an open-ended question — "write a metaphor about time" — and instead of 25 voices, you get roughly two ideas, repeated with minor rephrasing. That's the subject of [*Artificial Hivemind: The Open-Ended Homogeneity of Language Models (and Beyond)*](https://github.com/liweijiang/artificial-hivemind) (Jiang et al., NeurIPS 2025), which measures this at scale and shows a second, sharper problem: our reward models and LM judges are least reliable exactly where humans genuinely disagree about which answer is better — meaning current alignment pipelines may be training the homogeneity in.

I put together an interactive guide with a live recreation of the paper's clustering figure, an entropy slider for building intuition about annotator disagreement, and a few comprehension checks along the way.

**[Read the interactive guide →](/blog/posts/artificial-hivemind/)**

The short version: single models repeat themselves (79% of queries land above 0.8 self-similarity even under aggressive sampling), different model families converge on each other anyway (0.71–0.82 cross-model similarity, sometimes verbatim), and neither problem goes away with better decoding — it looks like it lives at the training level.
