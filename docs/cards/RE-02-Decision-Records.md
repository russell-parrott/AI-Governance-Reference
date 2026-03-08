# RE-02 — Decision Records

> **Not just what the system did. This card explains the specific logs of what it decided — and why that record is different from everything else.**

---

## What Is It?

A decision record is a documented account of a specific output produced by an automated system — capturing what the system decided, on what basis, using what information, at what point in time.

Where an audit trail records the sequence of events around a system's operation, a decision record focuses on the individual outcome. It is the record of a single automated decision — a credit refusal, a benefit determination, a fraud flag, a content removal — that allows that specific decision to be retrieved, examined, and explained independently of the surrounding operational context.

A decision record is the unit of accountability for an automated system. Each decision the system makes should, in principle, be traceable to a record that answers the questions: what was decided, about whom, on the basis of what information, and under what version of the system.

---

## Why Does It Matter?

Automated systems make decisions about people. Those people have an interest in knowing what was decided and why. Organisations have an obligation to be able to explain it. Regulators have the authority to require it. Courts can compel it.

None of those obligations can be met without decision records. A system that makes thousands of decisions per day but retains no record of individual outcomes has no basis for responding to a challenge about any one of them. The decision happened. The evidence of how and why it was reached does not exist. That is not a technical limitation. It is an accountability failure.

---

## What's the Real Risk?

**Individual decisions that cannot be explained or defended.** When an affected person challenges an automated decision — through a complaint, a legal claim, or a regulatory right — the organisation must be able to explain what was decided and why. Without a decision record, that explanation is impossible. The organisation cannot defend a decision it cannot describe.

**Patterns of harm that cannot be identified.** Decision records in aggregate are the data set from which patterns of systematic error or bias are identified. Without them, analysis is impossible. An organisation that retains no individual decision records cannot demonstrate that its system's outputs are fair, accurate, or consistent — because it has no records to examine.

**Rights that cannot be exercised.** In many jurisdictions, individuals have legal rights to obtain information about automated decisions that significantly affect them. Those rights are hollow without decision records. The right exists. The information to exercise it does not.

**Investigations that stall at the first question.** When a regulatory investigation or litigation turns to an individual decision as its starting point, the decision record is the first document required. An investigation that cannot access decision records for individual cases cannot proceed. The absence of records does not close the investigation. It opens a new and more serious line of inquiry.

Responsibility for ensuring decision records are created, retained, and retrievable sits with whoever holds governance authority over the system. The volume of decisions a system makes does not reduce that responsibility. It increases the importance of having automated record creation built into the system's design.

---

## Where Does It Appear?

Decision records are required wherever automated systems produce outputs that affect individuals or carry regulatory significance:

- **Financial services** — records of individual credit decisions, fraud determinations, insurance pricing outcomes, and account actions
- **Healthcare** — records of diagnostic outputs, triage classifications, and automated clinical recommendations for individual patients
- **Public services** — records of individual eligibility determinations, benefit calculations, and compliance assessments
- **Employment** — records of individual screening outcomes, assessment scores, and selection or rejection decisions
- **Platform and content systems** — records of individual content moderation decisions, account actions, and the basis for each
- **Any system producing decisions that individuals can challenge or request information about** — which in most regulated contexts includes most automated decision systems

---

## What It Means in Practice

An organisation that takes decision records seriously must be able to answer these questions at any time:

- For each decision this system produces, is there a record that captures what was decided, on what basis, and using what information?
- Are decision records stored in a way that allows individual decisions to be retrieved by reference to the person or case they concern?
- Do decision records capture the version of the system that produced the decision, so that changes over time can be accounted for?
- Is the retention period for decision records sufficient to cover the period during which challenges, complaints, or regulatory inquiries are likely to arise?
- Can an individual decision record be produced and explained to a non-specialist — an affected person, a regulator, or a court — in terms they can understand?

If those questions cannot be answered, the organisation is making consequential decisions about people that it cannot account for individually. At scale that may seem manageable. It remains, for each person affected, an accountability failure.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Enables individual decisions to be retrieved, explained, and defended when challenged | High-volume systems produce decision records at a scale that requires automated creation and structured storage |
| Provides the data set for detecting patterns of systematic error or bias across the system's outputs | Decision records that capture outcomes without capturing the basis for them are of limited explanatory value |
| Supports individual rights — affected people can be provided with a meaningful account of what was decided about them | Retaining individual decision records for large populations over long periods creates significant data management obligations |
| Creates an evidential foundation for regulatory compliance and litigation defence | Records created automatically by a system may not capture human interventions or overrides that affected the final outcome |
| Enables version tracking — the system state at the time of each decision can be reconstructed | Decision records that cannot be retrieved in a timely and usable form do not serve their governance purpose however complete they are |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to produce records of individual automated decisions — not just aggregate evidence that a system operated within acceptable parameters.

Data protection and privacy frameworks in many jurisdictions give individuals explicit rights to obtain information about automated decisions that significantly affect them, including the logic involved and the likely consequences. Those rights require decision records of sufficient detail to support a meaningful individual explanation. Systems designed without that capability are not compliant by design.

AI-specific legislation is advancing individual decision record requirements for high-risk systems, with some frameworks specifying minimum content standards — what information each record must capture — and retention periods aligned with the timeframes during which individuals can exercise their rights.

The practical legal risk is direct: an organisation that cannot produce a decision record for an individual automated decision — showing what was decided, on what basis, and under what system — cannot meet its legal obligations to that individual, cannot defend that decision before a regulator, and cannot demonstrate the accountability that the law increasingly requires.

---

*RE-02 | Decision Records | Part of the AI Governance Reference Series*
