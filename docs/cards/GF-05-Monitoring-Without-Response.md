# GF-05 — Monitoring Without Response

> **System monitoring exists but alerts and signals do not trigger meaningful action.**

---

## What This Failure Is

The monitoring infrastructure exists. Dashboards are populated. Alerts are generated. Reports are produced. Nobody acts on them. Alerts are acknowledged and closed. Performance signals that indicate deteriorating accuracy are reviewed and filed. Anomalies are noted and not investigated. The monitoring loop is open: signals go in, responses do not come out.

This failure is distinct from having no monitoring. It is more insidious — because the organisation believes its monitoring is a functioning governance control when it is producing data that nobody uses.

---

## Where It Occurs

Monitoring without response occurs when monitoring is implemented to satisfy a governance requirement rather than to drive operational decisions; when monitoring outputs are routed to teams that lack the authority or mandate to act on them; when performance thresholds for mandatory response have not been defined; and when the volume of monitoring alerts has become so high that triage has replaced response as the operational norm.

---

## Why It Matters

An organisation that monitored its system and did not act on what the monitoring revealed is in a significantly worse position than an organisation that did not monitor. The governance record shows that the organisation was aware of the signals and chose not to respond. Awareness without response is not a governance control — it is documented negligence.

In regulatory proceedings, monitoring records that show signals were generated and not acted on are among the most damaging forms of governance evidence.

---

## How It Is Discovered

Monitoring without response is discovered when investigators examine monitoring records alongside operational response records. The monitoring record shows the signal. The operational record shows no corresponding action. The gap between them is the failure.

---

## Evidence That Reveals It

Monitoring logs showing repeated alerts with no documented response; performance records showing sustained deterioration without intervention; absence of escalation records corresponding to monitoring signals; and operational logs showing continued system operation through periods when monitoring indicated governance concern.

---

## Governance Concepts Involved

→ CS-01 (Monitoring) — the control that exists but does not function
→ CS-05 (Operational Monitoring) — the specific mechanism that is producing unused outputs
→ CS-09 (Operational Reviews) — the process that should be using monitoring outputs
→ SP-29 (Silent Degradation) — the failure mode that monitoring without response allows to persist
→ CS-12 (Incident Escalation) — the response mechanism that is not being engaged

---

## What Organisations Often Assume Instead

That monitoring is governance. That generating alerts satisfies the monitoring obligation. That the absence of escalated incidents means the monitoring is working rather than that the escalation mechanism is not.

---

*GF-05 | Monitoring Without Response | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
