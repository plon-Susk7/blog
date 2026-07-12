---
title: "Starting this blog"
description: "Why I'm writing here: weekly research notes, project logs, and things I learn while experimenting with AI."
date: 2026-07-12
tags: ["Learning"]
draft: false
---

I work as an AI developer at FNZ, and outside of work I spend a lot of time experimenting — fine-tuning small models, building side projects, reading papers, breaking things and figuring out why. Most of that ends up in scratch notebooks and never goes anywhere. This blog is an attempt to fix that.

The plan is simple: roughly once a week, write up something I've been working on. That could be:

- **Research** — notes on papers, experiments, or ideas I'm chewing on.
- **Project** — logs from hobby and more serious side projects.
- **Learning** — smaller things I picked up and didn't want to forget.
- **Hobby** — whatever doesn't fit the above but is worth writing down.

Every post gets tagged with one or more of those, and you can filter by tag from the [tags page](/blog/tags/). No comments, no accounts, no tracking — just a static feed I update by writing a Markdown file and pushing to `main`.

A short code sample, just to confirm syntax highlighting works end to end:

```python
def next_post_topic(backlog: list[str]) -> str:
    return backlog[0] if backlog else "whatever I broke this week"
```

More soon.
