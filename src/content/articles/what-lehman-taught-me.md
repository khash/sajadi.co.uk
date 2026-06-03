---
title: What Lehman Taught Me About Systems
description: Trading floors, fixed income, and the quiet physics of fragile machines.
pubDate: 2025-11-02
kind: Essay
---

Before I built developer tools, I built trading systems. For a few years I was a VP at Lehman Brothers, working on fixed-income infrastructure — the deeply unglamorous plumbing that moves enormous amounts of money without anyone noticing.

Then, famously, someone noticed.

## Systems fail the way they were built to fail

The lesson was not that the systems were bad. Many of them were excellent. The lesson was that a system encodes the assumptions of the people who built it, and when the world stops matching those assumptions, the system does not bend. It breaks.

A trading system that assumes liquidity will always be there is not wrong on a normal Tuesday. It is only wrong once. But once is enough.

## What I carried into Cloud 66

When we started Cloud 66, I was almost allergic to systems that hid their own fragility. I wanted tools that told you the truth about their state — that made the assumptions visible instead of burying them under a confident green checkmark.

- Make the failure modes legible.
- Assume the unusual day will arrive.
- Trust the operator with the bad news, not just the good.

None of this is original. Every good engineer learns it eventually. I just had the misfortune — and the education — of learning it on a trading floor.
