# RE-01 — Audit Trails

> **Documentation in practice. A step-by-step log of who did what, when, and why.**

---

## What Is It?

An audit trail is a chronological, sequential record of the actions, decisions, and events associated with an automated system — a log that captures who did what, when they did it, and what the result was.

Where documentation records what was decided and why, an audit trail records the sequence of events that led to and followed from each decision. It is not a summary. It is a traceable record — one that allows a reviewer to follow the history of a system, a decision, or an incident step by step, from beginning to end, without gaps.

An audit trail answers the question: if we needed to reconstruct exactly what happened — what the system received, what it produced, what people did with those outputs, and what changed over time — could we? An adequate audit trail means the answer is yes.

---

## Why Does It Matter?

Automated systems make decisions at speed and at scale. In the normal run of operations, there is no reason to examine most of those decisions individually. But when a question arises — a complaint, an incident, a regulatory inquiry — the ability to reconstruct what happened is essential.

Without an audit trail, reconstruction depends on memory, inference, and whatever fragments of information happen to have been preserved. That is not a reliable basis for accountability. An audit trail replaces reconstruction with retrieval — the record exists, it is complete, and it can be produced.

---

## What's the Real Risk?

**Incidents that cannot be investigated.** When something goes wrong with an automated system and there is no audit trail, the investigation cannot establish with confidence what happened, when, or why. Findings become speculative. Remediation addresses symptoms rather than causes. Regulators and courts draw adverse inferences from the absence of records.

**Accountability that cannot be traced.** An audit trail is what connects an outcome to the person or process responsible for it. Without it, accountability exists in principle — someone is nominally responsible — but cannot be demonstrated in practice. When responsibility cannot be traced, it cannot be enforced.

**Changes that cannot be verified.** Where an audit trail does not cover system changes, the organisation cannot confirm that changes were made as documented, that approvals were obtained before implementation, or that the live system at any given time matched the version that was approved. The change management process exists on paper. The audit trail is what confirms it was followed in practice.

**Gaps exploited after the fact.** The absence of an audit trail does not just hinder investigation. It creates space for disputed accounts of what happened. When records do not exist, competing narratives fill the gap — and the organisation without records is rarely the one whose account prevails.

Responsibility for ensuring audit trails exist, are complete, and are maintained sits with whoever holds governance authority over the system. Technical teams that build logging capability into a system are not the governance function. Governance is responsible for requiring it and verifying it works.

---

## Where Does It Appear?

Audit trails are a governance requirement wherever automated systems make consequential decisions or are subject to regulatory oversight:

- **Financial services** — transaction logs, decision records, and access histories for automated lending, fraud, and trading systems
- **Healthcare** — records of system inputs, diagnostic outputs, clinical actions taken, and any overrides of automated recommendations
- **Public services** — logs of eligibility determinations, supporting data received, decisions produced, and any human interventions in the automated process
- **Employment** — records of what application data was processed, what outputs were produced, and what human actions followed each automated assessment
- **Platform and content systems** — logs of content decisions, moderation actions, appeals received, and outcomes of those appeals
- **Any system subject to individual rights claims** — where an affected person may request to know what happened in their case and on what basis

---

## What It Means in Practice

An organisation that takes audit trails seriously must be able to answer these questions at any time:

- Does this system produce a complete, chronological record of inputs received, outputs produced, and actions taken?
- Are audit trail records stored securely and in a way that prevents alteration after the fact?
- Is the audit trail sufficiently detailed that an individual decision can be reconstructed from it without reliance on memory or inference?
- Does the audit trail cover not just the system's automated activity but human interventions — reviews, overrides, and escalations?
- Can the audit trail be retrieved and produced in a usable form within the timeframes that regulatory and legal obligations may require?

If those questions cannot be answered, the organisation has a system that makes decisions it cannot trace. When those decisions are challenged — and some will be — the absence of an audit trail is not a procedural inconvenience. It is an evidentiary crisis.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Enables complete reconstruction of individual decisions and system events without reliance on memory | Comprehensive audit trail generation adds processing and storage overhead that grows with system volume |
| Provides the evidential foundation for regulatory compliance, litigation defence, and incident investigation | Audit trails that capture events without sufficient context — what the data meant, why the action was taken — are difficult to interpret |
| Creates accountability over time — actions can be traced to specific people, systems, and moments | Audit trail integrity depends on technical controls that prevent alteration — without those controls, the record cannot be trusted |
| Supports individual rights — people affected by automated decisions can be shown what happened in their case | High-volume systems generate audit trail data at a scale that requires structured storage and retrieval systems to remain usable |
| Demonstrates active governance to regulators — the trail shows not just what happened but that the organisation was in control | Organisations frequently discover the inadequacy of their audit trails only when they need to produce them — by which point it is too late |

---

## The Law

The legal direction across most developed economies is consistent: organisations must maintain records of automated decision-making activity sufficient to allow reconstruction, explanation, and regulatory examination — and those records must be produced on demand.

Data protection and privacy frameworks in many jurisdictions give individuals rights to access information about how automated decisions affecting them were reached. Meeting those rights requires an audit trail detailed enough to support a meaningful explanation of individual cases. A system that cannot produce that information is in breach of those rights regardless of whether the decision itself was correct.

AI-specific legislation is advancing explicit audit trail requirements for high-risk systems, with some frameworks specifying the content, format, and retention period of records, and requiring that they be made available to regulators on request. Audit trail adequacy is increasingly treated as a substantive governance obligation, not a technical detail.

The practical legal risk is direct: an organisation that cannot produce a complete, reliable audit trail for its automated system faces a compounded problem in any investigation — not only must it address the underlying issue, it must do so without the records that would allow it to understand what happened, demonstrate what controls were in place, and show that those controls functioned as intended.

---

*RE-01 | Audit Trails | Part of the AI Governance Reference Series*
