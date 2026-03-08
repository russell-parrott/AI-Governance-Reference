# CS-09 — Operational Reviews

> **Not just watching. This card explains the formal meetings where performance is examined and decisions are made.**

---

## What Is It?

An operational review is a scheduled, structured examination of an automated system's performance — a formal occasion at which responsible people come together, assess evidence of how the system has been operating, and make considered judgments about whether it remains fit for purpose.

It is not a monitoring activity. Monitoring is continuous and observational. An operational review is periodic and deliberative. It takes the data that monitoring has produced and asks: what does this tell us? Is the system performing as it should? Have there been problems, and have they been resolved? Are there patterns that require attention before they become incidents?

An operational review produces a record — of what was examined, what was concluded, what was decided, and who was present. That record is governance documentation, not meeting minutes.

---

## Why Does It Matter?

Day-to-day monitoring generates observations. Alert systems generate notifications. Escalation procedures move problems upward. But none of these activities, individually, produces the kind of considered, documented assessment of overall system performance that governance requires.

Operational reviews fill that gap. They are the mechanism by which an organisation steps back from the continuous flow of daily operational activity and asks the larger question: is this system, taken as a whole and over time, doing what we need it to do, in the way we need it to be done? That question requires time, evidence, and deliberation. It cannot be answered on the fly.

---

## What's the Real Risk?

**Governance that exists only in continuous activity.** An organisation that monitors daily but never formally reviews has activity without assessment. The data exists. The judgment — the considered conclusion about what it means and what should be done — does not. When a regulator asks whether the system was reviewed, activity logs are not the same as review records.

**Performance problems that are visible in data but never formally acknowledged.** Patterns that appear in monitoring data but are never brought to a formal review can persist indefinitely. Each observation is noted. No meeting reaches a conclusion. No decision is made. The problem continues because no formal occasion required anyone to address it.

**Reviews that happen but produce no decisions.** An operational review that examines evidence and produces no conclusions — no actions, no escalations, no changes, no formal sign-off that performance is acceptable — is a meeting, not a review. The governance value of a review lies in the decisions it produces and the record it creates, not in the fact of gathering.

**Intervals that are too long for the system's risk level.** A review schedule designed for a low-risk system applied to a high-risk one means that significant performance problems can develop and persist for months between formal examinations. Review frequency should reflect the system's risk profile, not administrative convenience.

Responsibility for convening, conducting, and acting on operational reviews sits with whoever holds management accountability for the system. Reviews that are delegated entirely to technical teams without senior involvement do not produce the governance accountability that the review is meant to create.

---

## Where Does It Appear?

Operational reviews are a governance requirement wherever automated systems operate with significant consequences and ongoing accountability obligations:

- **Financial services** — regular formal review of model performance, output distributions, and compliance indicators for credit, fraud, and pricing systems
- **Healthcare** — scheduled clinical and operational review of diagnostic and triage system performance against defined quality and safety standards
- **Public services** — periodic formal assessment of eligibility and assessment system accuracy, fairness, and alignment with policy intent
- **Employment** — structured review of screening and monitoring system outputs for consistency, bias indicators, and alignment with intended use
- **Platform and content systems** — regular review of moderation and recommendation system performance against defined content policy and user impact metrics
- **Any organisation subject to regulatory oversight** — where evidence of periodic formal review may be required as part of demonstrating active governance

---

## What It Means in Practice

An organisation that takes operational reviews seriously must be able to answer these questions at any time:

- Is there a defined review schedule for this system, and is it appropriate for the system's risk level?
- Does each review examine evidence — monitoring data, exception volumes, alert histories, incident records — rather than relying on verbal reports?
- Does each review produce a documented record of findings, conclusions, and decisions?
- Are actions arising from reviews assigned to named individuals with defined completion timeframes?
- Is there a process for escalating findings from operational reviews to senior management or board level when performance raises concerns that exceed operational authority to resolve?

If those questions cannot be answered, the organisation has monitoring without assessment and activity without conclusion. Governance requires both. Watching is not the same as reviewing, and reviewing is not the same as deciding.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Creates a structured occasion for considered assessment of system performance across time | Review schedules that are too infrequent allow problems to persist and grow between formal examinations |
| Produces governance documentation — a record of what was examined, concluded, and decided | Reviews conducted without adequate preparation and evidence become superficial rather than substantive |
| Provides a mechanism for identifying patterns that daily monitoring registers but does not formally assess | Senior attendance at reviews is difficult to sustain consistently, reducing the governance weight of findings |
| Enables accountability — named individuals attend, reach conclusions, and are on record for decisions made | Actions arising from reviews require follow-through that must itself be tracked and verified |
| Supports regulatory compliance by demonstrating periodic formal oversight, not just continuous activity | Review records that document attendance and agenda but not findings and decisions are of limited governance value |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate periodic formal assessment of their automated systems' performance — not just continuous operational activity.

Data protection and privacy frameworks in many jurisdictions require that organisations periodically reassess whether automated processing of personal data remains lawful, accurate, and appropriate. Operational reviews are the mechanism through which that reassessment is conducted and documented. A monitoring record without review documentation does not satisfy that requirement.

AI-specific legislation is advancing explicit periodic review obligations for high-risk systems, with some frameworks specifying minimum review frequencies, documentation standards, and requirements for senior involvement. Regulators examining governance failures look specifically for evidence of formal review activity — and its absence is treated as a significant finding regardless of what daily monitoring may have produced.

The practical legal risk is direct: an organisation that monitored its system continuously but never formally reviewed its performance cannot demonstrate it exercised the considered, periodic judgment that governance requires. Continuous observation is not a substitute for formal assessment. Both are necessary. Neither replaces the other.

---

*CS-09 | Operational Reviews | Part of the AI Governance Reference Series*
