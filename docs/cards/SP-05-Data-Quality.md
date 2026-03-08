# SP-05 — Data Quality

> **You know where the data comes from. Now the next question: is it any good?**

---

## What Is It?

Data quality is the degree to which data is accurate, complete, consistent, and fit for the purpose it is being used for.

High-quality data reflects reality reliably. It contains what it claims to contain. It covers the population it is supposed to represent. It is consistent across records and over time. And it is appropriate for the specific task the automated system is performing.

Poor-quality data is not simply imperfect data. It is data that produces unreliable outputs when an automated system acts on it — outputs that may appear confident and authoritative while being built on information that is wrong, incomplete, or unsuitable.

---

## Why Does It Matter?

Automated systems apply their logic to every piece of data they receive. They do not pause to question whether a record looks suspicious or a field appears incomplete. They process what they are given and produce a result. If the data is poor, the result is unreliable — but the system will not say so.

This is the core problem. A human reviewing a thin or inconsistent file might flag it for further investigation. An automated system will typically process it anyway and deliver an output with the same apparent certainty it would apply to a complete and accurate record. Poor data quality is therefore not just a data problem. It is a decision quality problem.

---

## What's the Real Risk?

**Confident wrong answers.** Automated systems produce outputs that look authoritative regardless of the quality of the data behind them. Poor data quality does not produce visible uncertainty. It produces invisible error.

**Systematic harm to specific groups.** Data quality problems are rarely random. Gaps and inaccuracies tend to cluster around particular populations — those who are less frequently represented in administrative records, those whose circumstances are harder to capture in standard data fields, or those who have historically been under-served by the systems that generated the data. Poor quality data harms those groups disproportionately.

**Compounding errors across systems.** Where one automated system feeds data to another, quality problems propagate. An error in an upstream dataset becomes an error in every downstream decision that relies on it.

**Investigation and audit failure.** When an automated decision is challenged, the quality of the underlying data is one of the first things examined. An organisation that has not assessed and documented data quality has no basis on which to defend or explain the decision.

Ownership of data quality sits with whoever deployed the system. Receiving data from an external source does not transfer responsibility for its fitness for purpose.

---

## Where Does It Appear?

Data quality is a concern wherever automated systems process information to reach decisions:

- **Financial services** — incomplete or outdated customer records affecting credit, fraud, and risk decisions
- **Healthcare** — missing, inconsistent, or incorrectly coded patient data affecting diagnostic or triage outputs
- **Public services** — gaps in administrative records affecting eligibility assessments and benefit decisions
- **Employment** — incomplete or inconsistently formatted application data affecting screening outcomes
- **Insurance** — inaccurate or stale data affecting pricing and claims decisions
- **Any system using historical data** — where records from the past are incomplete, the system's understanding of patterns will be distorted

---

## What It Means in Practice

An organisation that takes data quality seriously must be able to answer these questions at any time:

- Has the data feeding this system been assessed for accuracy, completeness, and consistency?
- Are there known gaps or weaknesses in the data, and has the system's behaviour been examined in light of them?
- Does the data adequately represent all the groups the system makes decisions about?
- Is there a process for identifying and correcting data quality problems on an ongoing basis?
- If a decision is challenged, can the organisation demonstrate the quality of the data that produced it?

If those questions cannot be answered, the organisation is running a system on data it has not verified. The outputs of that system carry a level of risk the organisation has not measured and cannot defend.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Good quality data produces more reliable and defensible outputs | Assessing data quality across large datasets requires significant time and resource |
| Quality assessment identifies problems before they produce harmful decisions | Quality problems are often only discovered after harm has occurred |
| Documented quality standards create a basis for ongoing monitoring | Data quality degrades over time as circumstances change and records become outdated |
| Supports audit and regulatory review with evidence of due diligence | Third-party data quality is difficult to verify independently |
| Protects against disproportionate harm to under-represented groups | Fixing quality problems in legacy datasets can be technically complex and costly |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that the data underpinning automated decisions is accurate and fit for purpose — not just that the system itself was technically sound.

Data protection and privacy frameworks in many jurisdictions impose explicit accuracy obligations on the processing of personal data. Where automated decisions are based on inaccurate or incomplete data, those decisions may be unlawful regardless of whether the system performed correctly.

Equality and non-discrimination obligations in many jurisdictions apply to outcomes, not just intentions. Where poor data quality produces decisions that disproportionately harm particular groups, legal exposure follows even where no discriminatory intent existed.

The practical legal risk is direct: an organisation that cannot demonstrate it assessed and monitored the quality of its data cannot credibly claim it exercised appropriate control over the decisions its system produced.

---

*SP-05 | Data Quality | Part of the AI Governance Reference Series*
