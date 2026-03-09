# GF-13 — Monitoring Without Context

> **Operational data is collected but not interpreted in a way that reveals governance risk.**

---

## What This Failure Is

The monitoring infrastructure is running. Metrics are collected. Dashboards show system performance. The data exists. But the metrics being collected are not the metrics that would reveal governance risk. Accuracy is tracked but not disaggregated by protected group. Volume is measured but not compared to the authorised scope. Alerts are generated for system errors but not for performance deterioration. The monitoring is producing data that confirms operation rather than data that reveals governance condition.

---

## Where It Occurs

Monitoring without context occurs when monitoring frameworks are designed by technical teams optimising for operational reliability rather than governance visibility; when performance metrics are selected for ease of measurement rather than governance relevance; when monitoring outputs are reviewed by operational teams without governance expertise; and when the connection between monitoring data and governance obligations has never been explicitly made.

---

## Why It Matters

An organisation that has monitoring data but cannot extract governance-relevant signals from it has the infrastructure of oversight without the function of oversight. When investigators examine the monitoring record, they may find extensive data that does not address the governance questions they are asking — and the organisation cannot claim it monitored for governance risk when its monitoring was not designed to detect it.

---

## How It Is Discovered

This failure is discovered when investigators examine monitoring records and find that governance-relevant signals — bias indicators, drift signals, scope anomalies, oversight failures — are not present in the data despite the monitoring infrastructure existing. It is also discovered in audit exercises that test whether monitoring outputs are connected to governance decisions.

---

## Evidence That Reveals It

Monitoring dashboards that show operational metrics without governance-relevant disaggregation; absence of bias or fairness metrics despite the system making decisions affecting protected groups; performance data that shows aggregate accuracy without the population-level breakdown that would reveal disparate impact; and monitoring outputs that have never been connected to a governance decision or action.

---

## Governance Concepts Involved

→ CS-01 (Monitoring) — the control that is present but misaligned
→ CS-05 (Operational Monitoring) — the specific mechanism whose scope is too narrow
→ SP-17 (Model Performance) — performance measurement that requires governance framing
→ SP-19 (Fairness) — the governance value that monitoring without context fails to track
→ SP-27 (Feedback Loops) — a failure mode that monitoring without context will not detect

---

## What Organisations Often Assume Instead

That collecting operational data satisfies the monitoring obligation. That tracking system uptime and error rates constitutes governance monitoring. That the absence of flagged issues in monitoring data means no governance issues exist.

---

*GF-13 | Monitoring Without Context | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
