---
title: "MTBF, MTTR and availability: what these numbers actually tell you"
description: "Three maintenance metrics, how they are calculated, and more importantly what each one hides. How to read them without drawing the wrong conclusion."
date: "2026-08-07"
slug: "mtbf-mttr-availability"
topic: "Metrics"
category: "Definitions"
audience: "Leadership"
author: "MainteNeat"
image: "/images/blog/maintenance-kpis.webp"
related: "features/kpi-dashboard"
---

Three acronyms turn up in every conversation about maintenance performance. They are simple to calculate and easy to misread.

## MTBF — mean time between failures

> MTBF = running time / number of failures

A machine that runs 1,000 hours and fails 5 times has an MTBF of 200 hours.

MTBF measures **reliability**: how often the equipment lets you down. It rises as failures spread further apart.

**What it hides.** It is an average, so it flattens the extremes. A machine with four inconsequential micro-stops and one catastrophic failure reports the same MTBF as a machine with five moderate ones. Those are not the same situation and they do not call for the same response.

MTBF also only means anything over a period when the machine actually ran. Equipment idle for three months does not become reliable.

## MTTR — mean time to repair

> MTTR = total repair time / number of repairs

MTTR measures **your responsiveness**, not the quality of the equipment. It depends on things you control: was the part in stock, was a technician free, did the documentation exist.

**What it hides.** Everything depends on when you start the clock. At the actual failure? At the moment it was reported? When a technician was assigned? An MTTR measured from assignment ignores the six hours during which nobody reported the machine was down — and that gap is frequently where the real problem lives.

Which is an argument for starting the clock at the report, and for making reporting easy enough that it happens immediately.

## Availability

> Availability = uptime / (uptime + downtime)

This is the one production understands, because it answers the only question they care about: was the machine there when I needed it?

It combines the other two. High MTBF with a high MTTR can produce the same availability as low MTBF with fast repairs.

**What it hides.** Planned and unplanned stops do not weigh the same. An overhaul announced three weeks ahead, which production planned around, does not cost what a breakdown on a Tuesday morning costs. Separating the two in your history is not bookkeeping pedantry: without that split the number means nothing.

## The underlying mistake

All three describe the past. None of them tells you what is about to break.

They are good for two things: spotting machines that consume a disproportionate share of your time, and checking whether a decision made six months ago had the effect you expected. Added a preventive plan to a compressor? Compare its MTBF before and after. That is where these numbers start earning their keep.

## The precondition

None of these calculations is better than the data feeding it. If half your jobs are never logged, your MTBF is wrong — and wrong in the flattering direction, which is the worst case.

That is the main argument for frictionless reporting. A fault reported in thirty seconds from a QR code on the machine enters the calculation; the same fault behind an account and six screens does not.

In MainteNeat the reports are built from jobs already logged: nobody maintains a metrics spreadsheet alongside the real work. It is the only way to get numbers you can act on.
