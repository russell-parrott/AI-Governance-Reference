# SP-09 — Intended Use

> **Before you judge a system, you need to know what it was designed to do. This sets the baseline.**

---

## What Is It?

Intended use is the documented statement of what an automated system was built to do, in what circumstances, and for what purpose.

Every automated system is designed with a specific task in mind. A system built to flag potentially fraudulent transactions is not the same as one built to approve credit applications, even if both process similar data. The difference lies in what the system was designed to decide, who it was designed to affect, and under what conditions it was expected to operate.

Intended use is not a description of what a system can do. It is a statement of what it was authorised to do. Without that record, there is no baseline against which to measure whether a system is being used appropriately.

---

## Why Does It Matter?

Automated systems are frequently capable of being applied beyond the purpose they were designed for. That technical flexibility creates a governance problem. A system validated in one context does not automatically produce reliable outputs in another.

When a system is used outside its intended purpose — even with good intentions — the organisation is operating without validated evidence that the system works correctly in that context. The decisions it produces may be unreliable. The risks it creates may never have been assessed. And the people affected by those decisions have no way of knowing that the system was never designed for their situation.

---

## What's the Real Risk?

The consequences of ignoring intended use are concrete:

**Wrong decisions at scale.** A system applied beyond its validated scope produces outputs that were never tested for that context. Errors multiply across every case the system touches before anyone notices.

**Regulatory exposure.** Regulators and courts ask one question first: was this system being used for its authorised purpose? If the answer is no, the organisation has no credible defence, regardless of whether the system itself was well built.

**Wasted investment.** A system procured for one purpose and quietly repurposed for another was never the right tool for the second job. When it fails, the cost is not just the incident — it is everything spent on a system that should never have been deployed in that context.

**Reputational damage.** When automated systems produce harmful outcomes and it emerges that the system was operating outside its intended scope, the question becomes not just what went wrong, but who knew and why nothing was done.

Ownership of intended use typically sits with whoever commissioned or deployed the system — not the technical team that built it. That is where accountability lands when things go wrong.

---

## Where Does It Appear?

The question of intended use becomes critical at specific points most organisations will recognise:

- **Procurement** — confirming that a vendor's system matches the organisation's planned deployment before any contract is signed
- **Repurposing** — when a system built for one task is applied to a related but different one, such as using a hiring screening tool to evaluate internal promotions
- **Audit and review** — when a regulator or internal reviewer asks what the system was authorised to do and how that was recorded
- **Incident investigation** — when something goes wrong and the investigation needs a baseline to determine whether the system was being used as designed
- **High-risk deployments** — in healthcare, financial services, and public administration, where regulators increasingly require documented intended use before a system goes live

---

## What It Means in Practice

An organisation that takes intended use seriously must be able to answer these questions at any time:

- What is this system documented as being designed to do?
- Is the current deployment consistent with that documentation?
- Who signed off on the deployment, and when?
- Has the system been applied to any context not covered by its original intended use?
- If the system has changed, has the intended use documentation been updated to match?

If those questions cannot be answered, the organisation may be running a system in a context its designers never validated. That is not a technical oversight. It is a governance failure.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Provides a clear baseline for evaluating whether a system is performing correctly | Documentation is often written loosely, making the baseline too vague to be useful |
| Makes accountability traceable — who authorised this use, and when | Intended use is frequently documented once and never revisited |
| Supports procurement by making vendor claims checkable | Vendors may state intended use broadly to maximise commercial flexibility |
| Enables meaningful audit — reviewers have something specific to check against | Systems routinely drift beyond their documented purpose without triggering a review |
| Reduces the risk of misapplication by establishing clear scope boundaries | Boundaries are only effective if someone is responsible for enforcing them |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that automated systems are deployed only for purposes that have been assessed, authorised, and documented.

Data protection and privacy law in many jurisdictions requires that personal data be processed for specified, explicit purposes. Using an automated system beyond its original intended use may breach those requirements, even if the underlying data processing was originally lawful.

AI-specific legislation is advancing in multiple regions, with intended use becoming a formal requirement for high-risk applications. Deploying a system outside its documented purpose is increasingly treated as a distinct compliance failure — separate from whether the system itself performed correctly.

The practical risk is straightforward: an organisation that cannot show what its system was designed to do, and confirm it is being used accordingly, has no credible basis for defending the decisions that system produces.

---

*SP-09 | Intended Use | Part of the AI Governance Reference Series*
