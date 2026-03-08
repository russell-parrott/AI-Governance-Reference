# RE-10 — System Explanations

> **Someone demands to know why a decision was made. This card explains what an explanation requires — and why producing one is harder than it sounds.**

---

## What Is It?

A system explanation is a meaningful account of why an automated system produced a specific output — what information it used, how that information influenced the result, and why that result followed from the inputs the system received.

It is not a description of how the system works in general. It is an account of a specific decision, for a specific person, in terms that allow them to understand what happened in their case — what factors mattered, which way they pointed, and what the outcome was and why.

A system explanation serves the person who received the decision. It gives them the basis to understand it, to assess whether it was correct, and to know what they would need to challenge it. An explanation that does not serve those purposes — however technically accurate — is not an explanation in the governance sense of the word.

---

## Why Does It Matter?

Automated decisions affect people's lives. A refused loan. A rejected job application. A benefit denied. A flag that triggers an investigation. The person on the receiving end of that decision has a legitimate interest in knowing why it happened. Not because they are entitled to a different outcome. Because they are entitled to understand the basis of what was done to them.

That entitlement is not only moral. In most developed jurisdictions it is legal. And meeting it requires more than pointing to the existence of a system. It requires producing an account of what that system did in this case — specific, intelligible, and honest about the factors that drove the result.

---

## What's the Real Risk?

**Explanations that describe the system rather than the decision.** Telling someone that a credit decision was produced by a model that assesses risk across multiple factors does not explain why they were refused. A general description of the system's operation is not an explanation of the individual outcome. It is a way of appearing to explain without doing so.

**Opaque models that cannot be explained at the individual level.** Some automated systems — particularly complex machine learning models — produce outputs through processes that are genuinely difficult to explain in human terms. A system that cannot produce an individual-level explanation may be technically sophisticated and operationally effective while being fundamentally incompatible with the legal and governance obligation to explain what it decided and why.

**Explanations that are accurate but unintelligible.** A technically correct explanation expressed in terms that a non-specialist cannot understand does not meet the obligation to explain. The test of an explanation is whether the person who receives it can understand it — not whether it accurately reflects the system's internal logic in technical terms.

**Explanations produced for compliance rather than understanding.** Where the obligation to explain is treated as a box to check rather than a genuine communication obligation, explanations are produced that satisfy the formal requirement while telling the affected person nothing meaningful. That approach satisfies neither the spirit of the obligation nor, increasingly, its letter.

Responsibility for ensuring that system explanations can be produced sits with whoever deployed the system. A system that cannot generate individual-level explanations was deployed without the capability to meet a governance obligation that the deploying organisation carries.

---

## Where Does It Appear?

The obligation to explain automated decisions arises wherever those decisions significantly affect individuals:

- **Financial services** — explaining why a credit application was refused, why a fraud flag was raised, or why an insurance premium was set at a particular level
- **Healthcare** — explaining the basis of an automated diagnostic suggestion or triage classification to a patient or clinician who needs to understand it
- **Public services** — explaining why an automated eligibility assessment produced a particular outcome to the individual whose access to services depends on it
- **Employment** — explaining why an automated screening system produced a rejection or a score that affected a candidate's progress
- **Platform and content systems** — explaining why automated moderation removed content, restricted an account, or produced a classification that affected a user
- **Any context where an individual asks why an automated system reached the conclusion it did about them** — which describes most significant automated decision contexts

---

## What It Means in Practice

An organisation that takes system explanations seriously must be able to answer these questions at any time:

- Can this system produce an explanation of any individual decision it has made, in terms that the affected person can understand?
- Does the explanation identify the specific factors that influenced the outcome in this case — not just the factors the system considers in general?
- Is the explanation honest about uncertainty — does it acknowledge where the system's confidence was lower or where factors were given significant weight?
- Is there a process for producing explanations on request within a timeframe that respects the affected person's rights?
- Where the system cannot produce an adequate individual-level explanation, is that limitation known, documented, and factored into decisions about whether and how to deploy it?

If those questions cannot be answered, the organisation is making consequential decisions about people that it cannot explain to them. That is not a technical limitation to be managed. It is an accountability failure with legal consequences in most jurisdictions where automated decision-making is regulated.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Enables affected individuals to understand and where appropriate challenge decisions that affect them | Complex models produce outputs through processes that are genuinely difficult to explain at the individual level |
| Supports legal compliance with individual rights to explanation in many jurisdictions | Explanations that are technically accurate may not be intelligible to non-specialists without significant translation effort |
| Creates accountability pressure on system design — systems that cannot be explained should not be deployed | The obligation to explain can conflict with vendor confidentiality claims about proprietary model logic |
| Builds trust with affected individuals by demonstrating transparency about how decisions are reached | Producing individual explanations at scale for high-volume systems requires technical capability that must be designed in from the start |
| Identifies cases where model logic is producing outputs that cannot be justified in human terms | Explanations produced to satisfy formal obligations without genuine communication intent provide legal cover but not genuine accountability |

---

## The Law

The legal direction across most developed economies is consistent and well established: individuals have rights to meaningful explanations of automated decisions that significantly affect them — and those rights impose real obligations on the organisations that deploy the systems.

Data protection and privacy frameworks in many jurisdictions give individuals explicit rights in relation to automated decision-making, including the right to obtain an explanation of the logic involved and the likely consequences. Those rights apply regardless of whether the system is technically capable of producing the explanation — the legal obligation sits with the deploying organisation, not with the system's architecture.

AI-specific legislation is advancing explainability requirements further, with some frameworks requiring that systems deployed in high-risk contexts be designed with explanation capability from the outset — treating systems that cannot be explained as systems that should not be deployed in those contexts.

The practical legal risk is direct: an organisation that cannot produce a meaningful, individual-level explanation of an automated decision affecting a specific person cannot meet its legal obligations to that person — and a system deployed without explanation capability was deployed in a state of non-compliance with those obligations from its first day of operation.

---

*RE-10 | System Explanations | Part of the AI Governance Reference Series*
