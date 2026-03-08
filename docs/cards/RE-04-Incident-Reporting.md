# RE-04 — Incident Reporting

> **Something went wrong. This card explains how that gets formally recorded — and why the report itself matters as much as the response.**

---

## What Is It?

Incident reporting is the formal process of creating an official record when an automated system has produced a harmful, erroneous, or unexpected outcome — a documented account of what happened, when it was identified, who was notified, and what initial response was taken.

An incident report is not an internal note or an email chain. It is a structured, formal record that initiates the organisation's official response to a failure. It creates the starting point from which investigation, escalation, remediation, and — where required — external notification all proceed.

Incident reporting is the moment at which a problem that has been observed becomes a problem that is officially acknowledged. That transition matters. An acknowledged incident triggers obligations. An unacknowledged one does not — but the harm it caused exists regardless.

---

## Why Does It Matter?

Automated systems produce failures that affect real people. When that happens, the organisation has obligations — to investigate what occurred, to address the harm, to notify affected individuals and regulators where required, and to prevent recurrence. None of those obligations can be met without a formal record of the incident that triggered them.

Incident reporting is also the mechanism through which the organisation learns. A pattern of incidents that are formally recorded is a pattern that can be analysed, understood, and addressed. Failures that are absorbed informally — managed quietly, fixed without documentation, never officially acknowledged — are failures that do not contribute to organisational learning. They recur.

---

## What's the Real Risk?

**Incidents managed informally to avoid triggering obligations.** Where incident reporting creates obligations — investigation, escalation, external notification — there is organisational pressure to manage problems below the threshold of formal reporting. Problems are fixed. Records are not created. The harm was real. The incident, officially, never happened.

**Late reporting that compounds the original failure.** Many regulatory frameworks impose timeframes for incident reporting — hours or days, not weeks. An organisation that identifies an incident but delays formal reporting while managing its response internally may breach those timeframes independently of whatever caused the incident in the first place.

**Incomplete reports that undermine investigation.** An incident report that captures only what is known with certainty at the time of reporting — omitting what is suspected, what is unclear, and what has not yet been established — creates a misleading starting point for investigation. The investigation proceeds from an incomplete picture. Findings are shaped by what the initial report included and excluded.

**No consistent threshold for what constitutes an incident.** Where incident reporting thresholds are not defined, different people in the organisation make different judgments about what requires a formal report. Some incidents are reported. Similar ones are not. The reporting record does not reflect the actual pattern of failures — and the organisation cannot analyse what it has not consistently captured.

Responsibility for incident reporting sits with whoever identifies the incident and whoever holds governance authority over the system involved. Neither can defer to the other. Both have obligations.

---

## Where Does It Appear?

Incident reporting obligations arise wherever automated systems operate in contexts with regulatory oversight or significant consequences for individuals:

- **Financial services** — formal reporting of automated system failures that affect customers, produce incorrect decisions, or breach regulatory requirements
- **Healthcare** — incident reporting for automated diagnostic, triage, or clinical decision system failures that affect patient safety or care quality
- **Public services** — formal recording of automated eligibility or enforcement system failures that affect individuals' access to services or legal standing
- **Employment** — incident reporting for automated screening or monitoring failures that affect individuals' employment prospects or rights
- **Platform and content systems** — formal recording of automated moderation or recommendation failures with significant user impact
- **Any organisation subject to data protection, financial services, or sector-specific regulation** — where regulators have defined incident reporting obligations that extend to automated system failures

---

## What It Means in Practice

An organisation that takes incident reporting seriously must be able to answer these questions at any time:

- Is there a defined threshold for what constitutes a reportable incident, and is that threshold consistently understood and applied?
- Is there a formal incident report template that captures what happened, when, who was affected, who was notified, and what initial response was taken?
- Are incident reports created at the time of identification rather than reconstructed after the response has concluded?
- Is there a defined timeframe within which a formal incident report must be created after an incident is identified?
- Are incident reports stored in a way that makes them retrievable and usable for investigation, pattern analysis, and regulatory production?

If those questions cannot be answered, the organisation's incident record does not reflect its actual pattern of failures. What is being learned from is a curated subset of what went wrong. The incidents that were managed quietly are the ones most likely to recur — because they were never formally acknowledged as incidents at all.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Creates a formal starting point for investigation, escalation, and remediation with a documented timeline | Formal reporting obligations can create pressure to manage problems informally to avoid triggering consequences |
| Builds an incident record that enables pattern analysis and supports organisational learning | Inconsistent reporting thresholds produce an incomplete record that does not accurately reflect actual system performance |
| Supports regulatory compliance by initiating the notification and response processes that legal obligations require | Incident reports created under pressure and time constraints may be incomplete in ways that are difficult to correct later |
| Provides evidential documentation that demonstrates the organisation responded formally and appropriately | The act of formally reporting an incident triggers obligations that some organisations find it easier to avoid than to meet |
| Creates accountability — the report records who knew, when, and what was done | Late or incomplete incident reports can become a separate regulatory concern on top of the underlying incident |

---

## The Law

The legal direction across most developed economies is consistent and, in many sectors, highly specific: organisations must report certain categories of automated system failure within defined timeframes, to defined recipients, in defined forms.

Data protection and privacy frameworks in many jurisdictions require notification of personal data breaches — including those caused by automated system failures — within defined periods, typically to regulators and in some cases to affected individuals. Missing those notification windows is a distinct legal breach, separate from the underlying failure.

AI-specific legislation is advancing mandatory incident reporting obligations for high-risk systems, with some frameworks requiring notification to regulatory authorities when automated systems produce serious harm, malfunction in defined ways, or behave unexpectedly in high-risk contexts. The scope and timeframes of those obligations vary but the direction is consistent.

The practical legal risk is direct: an organisation that experienced an incident with its automated system, managed it internally without formal reporting, and later faces investigation will confront two distinct problems — the original incident and the failure to report it. The second is frequently the more serious finding.

---

*RE-04 | Incident Reporting | Part of the AI Governance Reference Series*
