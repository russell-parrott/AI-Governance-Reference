# GF-10 — Incomplete Decision Reconstruction

> **The organisation cannot reconstruct how a specific decision was produced.**

---

## What This Failure Is

A specific automated decision is challenged. The organisation is asked to explain what the system did — what inputs it received, what model version was running, what the decision logic produced, and why this individual received this outcome. The organisation cannot answer. It can describe how the system generally works. It cannot describe what happened in this specific case.

The decision exists as an outcome in a record somewhere. The chain of causation that produced it — the inputs, the model state, the processing — is not recoverable. The decision is a fact without an explanation.

---

## Where It Occurs

Incomplete decision reconstruction occurs when systems are designed without adequate input logging; when model states at the time of historic decisions are not retained; when system logs are deleted or overwritten before a challenge arises; when multiple system components each log partial information that cannot be reassembled; and when logging was designed for operational rather than governance purposes and does not capture what governance requires.

---

## Why It Matters

Legal rights to explanation of automated decisions — under GDPR Article 22, the EU AI Act and equivalent frameworks — require explanation of the specific decision, not the general system. An organisation that can explain the system but not the decision has not met the obligation. In litigation, the inability to reconstruct a specific decision is an evidentiary failure that may result in adverse findings against the organisation.

---

## How It Is Discovered

Incomplete reconstruction is discovered when a specific decision is challenged and the organisation attempts to produce the decision record. The gap between what investigators ask for and what the organisation can produce is the failure. It is also discovered proactively in audit exercises that test reconstruction capability on sample decisions.

---

## Evidence That Reveals It

Absence of input logs for the period of the decision; model version records that cannot be matched to the decision timestamp; partial logs that cannot be combined to reconstruct the decision chain; and audit trail gaps at the specific point where the challenged decision was made.

---

## Governance Concepts Involved

→ RE-14 (Traceability) — the capability this failure demonstrates is absent
→ RE-01 (Audit Trails) — the records that should enable reconstruction
→ RE-02 (Decision Records) — the specific record type that is missing
→ SP-16 (Explainability) — the technical property that reconstruction depends on
→ GQ-02 (Can You Reconstruct a Specific Decision?) — the governance question this failure fails

---

## What Organisations Often Assume Instead

That being able to explain how the system works satisfies the obligation to explain specific decisions. That general model documentation is equivalent to a decision-level record. That decisions do not need to be individually traceable if the system's logic is documented.

---

*GF-10 | Incomplete Decision Reconstruction | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
