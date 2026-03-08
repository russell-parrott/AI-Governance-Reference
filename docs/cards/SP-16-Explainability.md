# SP-16 — Explainability

> **Regulators ask for it. Directors discuss it. This card explains what it actually requires — and why showing technical details is not the same as explaining a decision.**

---

## What Is It?

Explainability is the capacity of an automated system to provide a meaningful account of why it produced a specific output — an account that connects the inputs it received to the outcome it reached in terms that the person receiving the explanation can understand and use.

It is a property of a system's governance, not only of its technical design. A system is explainable in the governance sense when the organisation deploying it can, for any decision that system made, produce an explanation that tells an affected individual what happened in their case — what information was used, how it influenced the result, and why that result followed.

Explainability operates at two levels that governance discussions frequently conflate. **Model-level explainability** describes how the system works in general — what factors it considers, how it weights them, what its typical behaviour looks like across a population of decisions. **Decision-level explainability** describes what the system did in a specific case — what it saw, what it concluded, and why that individual received that outcome. The first supports governance accountability. The second supports individual rights. Both are required. Neither substitutes for the other.

---

## Why Does It Matter?

Automated systems make consequential decisions. The people they affect have a legitimate need — and in most jurisdictions a legal right — to understand why. Explainability is what makes that understanding possible.

Without it, affected individuals cannot assess whether a decision about them was based on accurate information, cannot identify the basis on which to challenge it, and cannot know what they might do differently to change the outcome. Accountability without explainability is accountability that cannot be exercised — the organisation is nominally responsible for decisions it cannot explain.

For organisations, explainability is also a governance discipline. A system that cannot be explained is a system that cannot be fully overseen. If the organisation cannot explain why a system produced a specific output, it cannot assess whether that output was appropriate, identify failure modes, or understand the conditions under which the system might go wrong. Explainability is not only a right that individuals hold. It is a capability that governance requires.

---

## What's the Real Risk?

**Confusing technical disclosure with genuine explanation.** Showing a person the model's parameters, the feature importance rankings, or the training data distribution gives them access to technical information about the system. It does not explain why they received the outcome they did. Explanation requires meaning — a connection between the individual's specific circumstances and the specific outcome — not access to raw technical data.

**Model-level explanation provided when decision-level explanation is required.** An organisation responds to an individual's request for an explanation by describing how the model works in general. The description is accurate. It does not answer the question the individual asked — why did this happen to me, in my case, with my information. General model behaviour and individual decision explanation are different things, and providing one when the other is required does not meet the obligation.

**Deploying systems that cannot be explained at the decision level.** Some highly complex models produce outputs through processes that cannot be straightforwardly translated into human-interpretable reasoning. Deploying those systems in contexts where decision-level explanation is legally or ethically required creates an explainability gap that cannot be closed after deployment. The gap was created by the deployment decision.

**Explanation that satisfies governance review but not individual understanding.** Explanations written for regulators, auditors, and legal teams may be technically comprehensive and legally adequate while being inaccessible to the individual whose decision they concern. The test of an explanation is whether the person who receives it can understand it — not whether it accurately reflects the system's internal logic.

Responsibility for ensuring that decisions can be explained sits with whoever deployed the system. A vendor whose model cannot produce decision-level explanations has created a constraint on the deploying organisation's ability to meet its governance obligations — but the obligation sits with the deployer.

---

## Where Does It Appear?

Explainability requirements arise wherever automated systems make or influence decisions that affect individuals:

- **Financial services** — explaining why a credit decision, insurance assessment, or fraud flag produced the outcome it did for a specific customer
- **Healthcare** — explaining the basis of an automated diagnostic suggestion or triage classification to a patient or clinician
- **Public services** — explaining why an automated eligibility or enforcement decision produced a particular outcome for a specific individual
- **Employment** — explaining why an automated screening or assessment system produced a particular score or selection outcome for a specific applicant
- **Platform and content systems** — explaining why an automated moderation decision or content recommendation was made for a specific user
- **Any context where an individual asks why an automated system reached the conclusion it did about them**

---

## What It Means in Practice

An organisation that takes explainability seriously must be able to answer these questions at any time:

- Can the organisation explain, in terms a non-specialist can understand, why the automated system produced the specific outcome it did in any given case?
- Does the explanation connect the individual's actual circumstances to the outcome — rather than describing how the system works in general?
- Is decision-level explainability built into the system's design, so that individual explanations can be produced at scale without manual reconstruction for each case?
- When a system cannot produce an adequate decision-level explanation, is that limitation known, documented, and factored into decisions about whether to deploy it in contexts where explanation is required?
- Has the organisation tested whether its explanations are understandable to the people who receive them — not just technically accurate by the standards of those who produced them?

If those questions cannot be answered, the organisation is making decisions it cannot explain — and deploying systems whose accountability to the individuals they affect is structurally limited.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Decision-level explainability enables individuals to understand and challenge decisions that affect them | Highly complex models may produce outputs through processes that cannot be straightforwardly expressed in human-interpretable terms |
| Explainability requirements create pressure toward system designs that can be understood and governed | Producing individual decision explanations at scale requires technical capability that must be designed in from the start |
| The discipline of making systems explainable forces organisations to understand what those systems are actually doing | Explanation quality varies — technically accurate explanations may not be comprehensible to non-specialist audiences |
| Explainability supports individual rights compliance and reduces the risk of legal challenge | Proprietary model details may create tension between vendor confidentiality interests and the organisation's explanation obligations |
| Explainable systems are easier to monitor, audit, and improve over time | Post-hoc explanation methods produce approximations of model reasoning that may not fully reflect the model's actual decision process |

---

## The Law

The legal direction across most developed economies is consistent: individuals have rights to meaningful explanations of automated decisions that significantly affect them — and those rights impose real, operational obligations on the organisations that deploy the systems.

Data protection and privacy frameworks in many jurisdictions give individuals explicit rights in relation to automated decision-making, including the right to an explanation of the logic involved in a specific decision. That right is framed in terms of what the individual can understand — a communicative standard rather than a disclosure one.

AI-specific legislation is advancing explainability requirements that apply specifically to high-risk systems — treating the absence of decision-level explanation capability as a barrier to deployment in consequential contexts rather than a post-deployment governance gap to be managed.

The practical legal risk is direct: a system deployed without decision-level explainability capability was deployed in a state that cannot meet the explanation obligations that apply from its first day of operation. The gap was created at deployment. It cannot be closed by describing the model's general behaviour.

---

*SP-16 | Explainability | Part of the AI Governance Reference Series*
