# RE-08 — Data Retention

> **How long do you keep all this? This card sets the timeline — and explains why the answer is not simply "as long as possible."**

---

## What Is It?

Data retention is the defined policy and practice of keeping governance records, system logs, decision records, and operational data for a specified period — and then disposing of them in a controlled, documented way when that period expires.

It has two equally important components. Retention defines how long records must be kept — long enough to serve their governance, legal, and accountability purposes. Disposal defines what happens when that period ends — records are deleted or destroyed in a controlled way that is itself documented.

Data retention is not a default. It is a decision. An organisation that keeps everything indefinitely has not made a retention decision. It has avoided one — and in doing so has created a different set of problems from the ones it was trying to avoid.

---

## Why Does It Matter?

Governance records serve their purpose across time. A decision record may need to be produced two years after the decision was made, in response to a complaint. A system log may be required three years after an incident, in the course of litigation. An audit trail may be examined five years after the fact by a regulator conducting a retrospective investigation.

If records have been disposed of before they are needed, the organisation cannot meet its obligations. If records have been kept beyond the period for which they serve a legitimate purpose, the organisation is holding data it has no right to retain — creating its own legal exposure in the process. Data retention is the mechanism that keeps the organisation on the right side of both problems simultaneously.

---

## What's the Real Risk?

**Records disposed of before they are needed.** An organisation that deletes governance records on a short cycle may find itself unable to respond to a complaint, investigation, or legal claim that arrives after the records are gone. The inability to produce records that should have existed is not a neutral position. It raises immediate questions about what the organisation was trying to avoid.

**Records kept indefinitely without justification.** Retaining personal data — including the data embedded in decision records and system logs — beyond the period for which there is a legitimate purpose is unlawful in most jurisdictions. An organisation that keeps everything forever is accumulating legal exposure with every passing day.

**Retention periods that do not match legal and regulatory timelines.** Different obligations carry different timeframes. Individual rights claims, regulatory investigations, and civil litigation each operate within their own windows. A retention policy that does not account for all of them will leave some periods uncovered — producing gaps at exactly the moments when records are most needed.

**Disposal that creates suspicion.** Records disposed of in the normal course of a retention policy are unproblematic. Records disposed of shortly before, or during, an investigation raise questions that are very difficult to answer. Retention policies must be consistently applied — and that consistent application must itself be documented.

Responsibility for setting, maintaining, and enforcing data retention policies sits with whoever holds governance authority over the organisation's records. Technical teams that implement deletion schedules are executing a policy. They are not setting it.

---

## Where Does It Appear?

Data retention is a governance requirement across every category of record an automated system generates:

- **Decision records** — retention periods must cover the window during which affected individuals can exercise rights or bring claims in relation to automated decisions
- **System logs** — technical records must be retained long enough to support investigation of incidents that may not surface until after a significant delay
- **Audit trails** — governance records must be kept for the periods that regulators and courts may require access to them
- **Testing and approval records** — documentation of pre-deployment assessments must be retained for as long as the system remains in operation and potentially beyond
- **Incident records** — records of what happened, how it was investigated, and what was done must be retained for the full period during which legal and regulatory consequences may arise
- **Vendor and contract records** — documentation of third-party obligations must be retained beyond the end of the vendor relationship to cover ongoing governance and legal exposure

---

## What It Means in Practice

An organisation that takes data retention seriously must be able to answer these questions at any time:

- Is there a defined retention period for each category of governance record, and is that period based on identified legal, regulatory, and operational requirements?
- Are retention periods consistently applied — are records actually deleted when their retention period expires, not simply forgotten?
- Is disposal itself documented — is there a record of what was deleted, when, and under what policy authority?
- Are retention periods reviewed when legal, regulatory, or operational requirements change?
- Is there a process for placing a retention hold on records when an investigation, litigation, or regulatory inquiry means they must be preserved beyond their normal retention period?

If those questions cannot be answered, the organisation's records are being kept or disposed of without a principled basis. That is not a filing problem. It is a governance problem with legal consequences running in both directions — records kept too long and records disposed of too soon.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Ensures records are available when needed for governance, regulatory, and legal purposes | Setting retention periods requires knowledge of multiple legal and regulatory frameworks that may apply simultaneously |
| Limits legal exposure from retaining personal data beyond legitimate purpose | Consistent application of retention policies across large, complex record sets requires technical infrastructure and ongoing discipline |
| Creates a principled basis for disposal that protects the organisation from suspicion when records no longer exist | Retention holds — preserving records beyond their normal period during investigations — require a process that many organisations have not designed |
| Supports data protection compliance by limiting the accumulation of personal data beyond its justified purpose | Different record categories may require different retention periods, creating complexity in policy design and implementation |
| Demonstrates active record governance to regulators rather than passive accumulation | Organisations frequently discover the inadequacy of their retention policies only when records are needed and no longer exist |

---

## The Law

The legal direction across most developed economies operates in both directions simultaneously: organisations must retain records long enough to meet their accountability obligations, and must not retain personal data beyond the period for which there is a legitimate purpose.

Data protection and privacy frameworks in many jurisdictions impose explicit obligations on both sides — requiring that personal data be kept no longer than necessary for its specified purpose, while also requiring that records supporting accountability and individual rights be available for defined periods. Navigating both requirements simultaneously is the practical challenge of data retention.

Sector-specific regulations in financial services, healthcare, and public administration frequently specify minimum retention periods for particular record categories — sometimes extending to seven years or beyond. Those minimums must be met regardless of the organisation's general data minimisation obligations.

The practical legal risk runs in both directions: an organisation that cannot produce records because they were disposed of too early faces one set of consequences. An organisation found to be retaining personal data beyond its justified purpose faces another. Data retention policy is the mechanism that keeps the organisation between those two exposures — and it must be actively managed, not passively assumed.

---

*RE-08 | Data Retention | Part of the AI Governance Reference Series*
