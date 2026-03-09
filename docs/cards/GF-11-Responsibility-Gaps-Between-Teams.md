# GF-11 — Responsibility Gaps Between Teams

> **Governance failures occur at organisational boundaries where no team owns the issue.**

---

## What This Failure Is

The data team owns the training data. The engineering team owns the model. The business team owns the deployment. The compliance team owns the regulatory framework. The vendor owns the infrastructure. Each team has a defined scope. The governance failure — the gap in controls, the undocumented change, the unassessed risk — sits at the boundary between them, in the space that no team owns.

Responsibility gaps between teams are not failures of individual teams. Each team may be doing its job correctly within its defined scope. The failure is systemic — the governance architecture has not assigned ownership of the spaces between scopes, and the spaces between scopes are where failures accumulate.

---

## Where It Occurs

Inter-team responsibility gaps occur in complex AI deployments involving multiple internal teams; in deployments that span the boundary between internal development and external vendor operation; in organisations where AI governance is distributed across functions — legal, technical, compliance, business — without a defined owner for cross-functional governance; and in organisations where governance frameworks describe what each team does without specifying who owns the interfaces between them.

---

## Why It Matters

When something goes wrong at a team boundary, each team points to the other. The technical team says the governance decision was a business decision. The business team says the technical assessment was not their responsibility. The compliance team says they were not informed. The vendor says the deploying organisation was responsible for deployment governance.

Investigators examining a diffuse accountability structure of this kind must determine whether anyone was responsible — and the governance documentation may not provide an answer. In serious cases, diffuse accountability becomes the central issue in determining whether enforcement action can be taken against a specific individual or whether the failure is systemic.

---

## How It Is Discovered

Inter-team gaps are discovered when incidents cannot be assigned to a single team's governance failure because the failure occurred at a boundary; when investigations reveal that each team assumed another team owned a governance function that none of them did; and during internal audit exercises that map governance responsibilities and find unmapped spaces.

---

## Evidence That Reveals It

Governance documentation that describes team responsibilities without addressing interface governance; incident post-mortems that identify multiple contributing teams without establishing a single accountable function; and the absence of governance records for decisions that required cross-functional input.

---

## Governance Concepts Involved

→ AR-12 (Responsibility Gaps) — the accountability concept this failure exemplifies
→ AR-05 (Role Definition) — the mechanism whose gaps create this failure
→ AR-10 (Internal Governance) — the framework that should define interface ownership
→ AR-08 (Vendor Responsibility) — the most common external boundary where gaps appear

---

## What Organisations Often Assume Instead

That comprehensive team-level governance adds up to comprehensive organisational governance. That the absence of gaps within teams means there are no gaps between them. That accountability for AI systems is a functional question rather than a systems question.

---

*GF-11 | Responsibility Gaps Between Teams | Governance Failures*
*This card describes a structural governance failure pattern. It does not constitute legal advice.*

---
---
