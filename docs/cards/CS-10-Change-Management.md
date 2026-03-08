# CS-10 — Change Management

> **Updates need control. Who says yes to a change? This card explains the process.**

---

## What Is It?

Change management is the formal process by which proposed changes to an automated system are assessed, approved, implemented, and recorded before they take effect in live operation.

It is the governance layer that sits between the identification of a potential change and its deployment. A proposed update — however minor it appears — does not enter the live system until it has passed through a defined sequence of steps: assessment of its impact, review by appropriate people, formal sign-off from someone with the authority to give it, and documentation of what was decided and why.

Change management is not an obstacle to improvement. It is the mechanism that ensures improvements are genuine, their consequences are understood, and accountability for the decision to proceed is clear.

---

## Why Does It Matter?

Every change to an automated system is a decision about a system that is making consequential decisions. The person proposing the change may be certain it is an improvement. They may be right. But certainty is not assessment, and good intentions are not governance.

Without change management, systems evolve through the accumulated decisions of technical teams, vendors, and operational staff — each acting on local knowledge and immediate priorities. No single change is necessarily wrong. But the absence of a governing process means no one has a complete picture of what the system has become, who authorised it, or whether the combined effect of multiple changes has taken it somewhere it was never approved to go.

---

## What's the Real Risk?

**Changes that create new problems while fixing old ones.** A change designed to correct one issue can introduce another. Without formal impact assessment before deployment, new problems enter live operation at the same moment the original one is resolved — and may not be detected until they have caused harm.

**The sum of small changes.** Individual changes that each appear too minor to require formal review can accumulate into a substantially different system. Change management catches this; the absence of it does not.

**No record of what changed and when.** Where changes are implemented without formal documentation, the organisation cannot reconstruct its system's history. When an incident occurs, it may be impossible to determine whether a recent change was responsible — and if so, who authorised it.

**Vendor changes entering without review.** Third-party components of a system may be updated by vendors as part of routine service delivery. Without a change management process that covers vendor updates, those changes can alter live system behaviour without the deploying organisation's knowledge or approval.

Responsibility for change management sits with whoever holds decision authority over the system. Technical teams that propose and implement changes are subject to the process. They do not own it.

---

## Where Does It Appear?

Change management is relevant wherever automated systems are maintained, developed, or supported over time:

- **Financial services** — governance of changes to credit, fraud, and pricing models to ensure regulatory compliance and output stability
- **Healthcare** — controlled update processes for diagnostic and triage systems to ensure clinical safety is maintained across versions
- **Public services** — formal approval for changes to eligibility and assessment systems, particularly where policy or legal requirements are involved
- **Employment** — governed updates to screening and monitoring systems to ensure changes do not introduce or amplify bias
- **Technology and platforms** — change control for recommendation, moderation, and ranking systems where behavioural changes affect large user populations
- **Any organisation using vendor-supplied systems** — where third-party updates can change live system behaviour without internal initiative

---

## What It Means in Practice

An organisation that takes change management seriously must be able to answer these questions at any time:

- Is there a defined process that every proposed change to this system must go through before implementation?
- Does the process require impact assessment — what will change in the system's behaviour, and for whom?
- Is there a documented record of every change made, including what was assessed, who approved it, and when it was applied?
- Does the change management process cover vendor-initiated updates, not just internally developed ones?
- Is there a rollback procedure — a defined way to reverse a change if it produces unexpected problems after deployment?

If those questions cannot be answered, changes are entering the live system on the basis of technical judgment alone, without governance oversight. A system managed that way is not under organisational control. It is under the control of whoever last touched it.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Ensures changes are assessed before they affect live outputs and the people those outputs concern | Formal change processes add time and overhead that organisations under pressure may seek to reduce |
| Creates a documented history of system development that supports audit and incident investigation | Poorly designed change processes become bureaucratic bottlenecks rather than genuine quality controls |
| Prevents the accumulation of undocumented incremental changes that collectively alter system behaviour | Defining what constitutes a change requiring formal review — versus routine maintenance — requires clear criteria |
| Covers vendor updates alongside internal changes, maintaining consistent governance | Vendors may resist change management requirements that slow their standard update and release cycles |
| Provides a rollback capability — changes can be reversed when they produce unexpected problems | Change management without adequate technical logging produces approval records that cannot be verified against what actually changed |

---

## The Law

The legal direction across most developed economies is consistent: governance obligations that apply to an automated system at deployment continue to apply each time the system changes — and change management is the mechanism through which that continuity is maintained.

Data protection and privacy frameworks in many jurisdictions require that processing of personal data remain lawful, accurate, and fair throughout its operation. A change that alters how a system processes personal data may require fresh assessment of whether those requirements are still met, regardless of whether the change was intended to improve or merely maintain the system.

AI-specific legislation is advancing explicit change management requirements for high-risk systems, with some frameworks treating undocumented changes as governance failures independent of their technical impact. Regulators examining incidents routinely ask what changed before the incident and who approved it.

The practical legal risk is direct: an organisation that cannot produce a complete, accurate record of changes made to its automated system — what changed, when, who approved it, and what impact was assessed — cannot fully account for the system's behaviour at any given point in its operational life.

---

*CS-10 | Change Management | Part of the AI Governance Reference Series*
