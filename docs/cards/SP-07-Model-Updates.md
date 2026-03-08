# SP-07 — Model Updates

> **Systems change. How? When? This card explains the lifecycle.**

---

## What Is It?

A model update is a deliberate change to an automated system — to its underlying logic, its parameters, its training data, or the rules it applies — that alters how it produces outputs.

Automated systems are not static. They are adjusted, retrained, recalibrated, and improved over time. A model update might correct a known error, improve accuracy on a specific type of case, incorporate new data, or respond to a change in the environment the system operates in.

A model update is not routine maintenance. It is a change to the system's decision-making behaviour. Even a small adjustment to a parameter can shift outputs across thousands of cases. An update that appears minor from a technical perspective may have significant consequences for the people the system affects.

---

## Why Does It Matter?

Every model update changes what the system does. If the system before the update was understood, assessed, and approved, the system after the update is — to some degree — a different system. That difference may be small or substantial, but it exists. And unless the update is governed with the same rigour as the original deployment, the organisation is operating a system that has not been fully assessed.

Updates also reset the baseline. Monitoring data, performance benchmarks, and governance records that applied to the previous version of the system may no longer accurately describe what the updated system does. Without a formal update process, the organisation's understanding of its own system falls progressively out of date.

---

## What's the Real Risk?

**Unassessed changes entering live operation.** Where model updates are not subject to formal review, changes that introduce new errors, new biases, or new behaviours can enter live operation without anyone having assessed their impact. The system changes. The governance does not.

**Cumulative drift through incremental updates.** Small updates, individually judged too minor to require formal review, can accumulate into a system substantially different from what was originally approved. The organisation has been continuously updating a system it stopped formally governing.

**Loss of audit trail.** Where updates are not documented — what changed, why, when, and who approved it — the organisation cannot reconstruct the history of its system. When an incident occurs, it may be impossible to determine which version of the system was responsible.

**Vendor updates outside the organisation's control.** Where a system includes third-party components, the vendor may push updates that change the system's behaviour without the deploying organisation's knowledge or consent. An organisation that does not monitor for vendor-initiated changes cannot govern their impact.

Responsibility for governing model updates sits with whoever holds decision authority over the system. Technical teams that implement updates are not the governance function. They are the mechanism.

---

## Where Does It Appear?

Model updates are a governance concern wherever automated systems are maintained and developed over time:

- **Financial services** — recalibration of credit, fraud, and risk models in response to changing customer behaviour or economic conditions
- **Healthcare** — retraining of diagnostic systems as new clinical evidence or patient data becomes available
- **Public services** — adjustments to eligibility and assessment systems following policy changes or identified errors
- **Employment** — updates to screening systems following bias audits, legal challenges, or changes in job requirements
- **Platform and content systems** — continuous updates to recommendation, moderation, and ranking models in response to user behaviour and policy changes
- **Any system receiving ongoing vendor support** — where the supplier updates components, algorithms, or underlying models as part of a service contract

---

## What It Means in Practice

An organisation that takes model updates seriously must be able to answer these questions at any time:

- Is there a defined process that all model updates must go through before being applied to the live system?
- Is each update documented — what changed, why, who approved it, and when it was applied?
- Is the impact of each update assessed before deployment, including potential effects on output distributions and affected groups?
- Is there a version history that allows the organisation to identify which version of the system was operating at any given time?
- Are vendor-initiated updates to third-party components subject to the same governance as internally developed updates?

If those questions cannot be answered, the organisation's system is evolving without its governance keeping pace. A system that has been updated without formal oversight is not the system that was approved. It is an unassessed version of it.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Enables systems to improve over time as new data and experience become available | Each update introduces the possibility of new errors or unintended behavioural changes |
| Allows correction of known errors and biases identified through monitoring | Frequent updates make it difficult to maintain a stable baseline for performance comparison |
| Keeps systems aligned with changing environments, policies, and legal requirements | Governance processes for updates can slow deployment of necessary corrections |
| Creates a documented history of system development that supports audit and investigation | Vendor updates to third-party components may not be communicated clearly or in time for assessment |
| Demonstrates active management of system quality to regulators and affected individuals | Organisations under operational pressure frequently treat updates as routine rather than subjecting them to formal review |

---

## The Law

The legal direction across most developed economies is consistent: governance obligations that apply to the initial deployment of an automated system continue to apply — and must be re-examined — each time the system is materially updated.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data remain accurate, fair, and lawful throughout its operation. A model update that changes how the system processes personal data may require a fresh assessment of whether those requirements are still met.

AI-specific legislation is advancing explicit requirements for change management in automated systems, with some frameworks requiring that updates to high-risk systems be assessed and documented before implementation. Version control and update history are increasingly treated as baseline governance obligations, not optional good practice.

The practical legal risk is direct: an organisation that cannot identify which version of its system was operating at any given time, or demonstrate that updates were assessed and approved, cannot fully account for the decisions that system produced — and cannot defend them when they are challenged.

---

*SP-07 | Model Updates | Part of the AI Governance Reference Series*
