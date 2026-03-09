# GF-08 — Change Without Governance

> **Models, data or system parameters change without formal review or approval.**

---

## What This Failure Is

The system that is running today is not the system that was approved. A model was retrained. Parameters were adjusted. A data source was modified. A threshold was changed. Each change was made by a technical team responding to an operational need. None of them passed through a governance checkpoint. The governance documentation describes the approved system. The approved system no longer exists.

This failure is particularly common in organisations with active model development and deployment pipelines, where the pace of technical change outstrips the pace of governance review.

---

## Where It Occurs

Change without governance occurs in model development and MLOps pipelines that are not integrated with governance review processes; in operational parameter adjustments made to address immediate performance problems without governance escalation; in data pipeline modifications that alter the inputs the system receives; and in vendor-driven updates where the deploying organisation is not notified of or does not review model changes.

---

## Why It Matters

The compliance assessment, the risk assessment, the legal analysis and the accountability structure were all established for a specific version of the system. When the system changes without governance review, those assessments are no longer valid. The organisation may be compliant with obligations it assessed for a system that no longer exists, while the system it is actually running has not been assessed at all.

In investigations, the inability to demonstrate that a specific version of a system was in operation at a specific time — because version control is absent or change records are inadequate — is a significant evidentiary problem.

---

## How It Is Discovered

Change without governance is discovered when version control records, change logs and governance approval records are examined together. Where technical change records exist but corresponding governance review records do not, the gap is visible. It is also discovered when the current system's behaviour cannot be explained by the governance documentation, which describes an earlier version.

---

## Evidence That Reveals It

Technical change logs without corresponding governance approval records; model version records that do not match governance documentation; absence of revalidation records for retrained models; vendor change notifications that were not followed by internal governance review; and system behaviour that cannot be explained by the documented system design.

---

## Governance Concepts Involved

→ CS-10 (Change Management) — the control this failure bypasses
→ SP-30 (Deployment Authorisation) — each material change requires its own authorisation
→ RE-13 (System Documentation) — which ceases to reflect the actual system
→ RE-14 (Traceability) — undermined when the version in operation cannot be established
→ SP-21 (Model Drift) — a potential consequence of ungoverned retraining

---

## What Organisations Often Assume Instead

That technical change is an engineering matter rather than a governance matter. That improvements to a system do not require governance review because they make the system better. That retraining on new data is routine maintenance rather than a material change requiring approval.

---

*GF-08 | Change Without Governance | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
