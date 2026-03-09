# GF-12 — Human Oversight in Name Only

> **A human reviewer exists but lacks information, authority or time to intervene meaningfully.**

---

## What This Failure Is

The governance documentation describes a human oversight process. A human is assigned to review automated decisions. That human exists. They are doing the review. They have thirty seconds per decision. They see a risk score and a recommendation. They do not see the inputs that produced them, the model's confidence level, or the alternative outcomes considered. They have no authority to independently investigate. They have no escalation route that will produce a response before the decision executes.

The human review is real as a process. It is not real as oversight.

---

## Where It Occurs

Human oversight in name only occurs in high-volume decision processes where individual review time is structurally inadequate; in processes where reviewers see only the system's output rather than the information required to evaluate it; in governance structures where the review step was designed to satisfy a regulatory requirement rather than to provide genuine oversight capability; and wherever automation bias (→ SP-28) has been structurally embedded by giving reviewers no practical alternative to deference.

---

## Why It Matters

This failure is directly relevant to regulatory oversight requirements under the EU AI Act and GDPR Article 22, both of which require meaningful human oversight — not nominal human presence. An organisation that presents this failure as adequate human oversight is making a compliance claim it cannot substantiate.

The failure is also practically significant: it means the oversight control that the organisation believes is catching system errors is not catching them. Errors that genuine oversight would have prevented are accumulating uncaught.

---

## How It Is Discovered

This failure is discovered by examining the conditions of review rather than the existence of review: time per decision, information available to the reviewer, the reviewer's authority and escalation options, and override rates. It is also discovered when reviewers are interviewed and describe a process in which genuine evaluation was structurally impossible.

---

## Evidence That Reveals It

Review throughput records showing time per decision inconsistent with genuine evaluation; reviewer interface records showing only system outputs rather than source information; near-zero override rates across high-volume review periods; absence of any record of reviewer-initiated escalation; and reviewer testimony describing a process they did not believe was capable of genuine oversight.

---

## Governance Concepts Involved

→ AR-03 (Human Oversight) — the obligation this failure nominally meets but substantively fails
→ AR-N04 (What Human Oversight Is Not) — the distinction this failure illustrates
→ SP-28 (Automation Bias) — the mechanism that makes deference the inevitable outcome
→ CS-03 (Human Review) — the control that exists in form but not in substance
→ GF-03 (Oversight Without Intervention) — the related failure focused on authority rather than capacity

---

## What Organisations Often Assume Instead

That assigning a human to a review step satisfies a human oversight requirement. That review at any level of depth constitutes meaningful oversight. That the speed of review is an operational matter rather than a governance matter.

---

*GF-12 | Human Oversight in Name Only | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
