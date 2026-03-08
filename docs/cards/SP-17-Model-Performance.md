# SP-17 — Model Performance

> **"How well does the system actually work?" This card answers that question — and explains why the answer is more complicated than a single number.**

---

## What Is It?

Model performance is the measure of how accurately and reliably an automated system produces the outputs it was designed to produce — how often it is correct, how often it is wrong, what kinds of errors it makes, and how its accuracy varies across the populations and contexts it is applied to.

It is expressed through a set of metrics — numerical measures of specific aspects of system behaviour — that together describe how the system performs. No single metric captures performance completely. Governance conversations that refer to performance as if it were a single number are missing most of what matters.

The metrics most relevant to governance discussions are:

**Accuracy** — the proportion of decisions the system gets right. A system that is correct 95% of the time sounds good. Whether it is good depends entirely on what the 5% errors are, who they affect, and what the consequences of an error are. Accuracy alone is insufficient as a performance measure.

**False positive rate** — the proportion of cases where the system identifies something as true when it is not. A fraud detection system with a high false positive rate flags legitimate transactions as fraudulent. The people flagged incorrectly bear the cost of the system's error.

**False negative rate** — the proportion of cases where the system misses something it should have caught. A fraud detection system with a high false negative rate lets fraudulent transactions through. The organisation bears that cost.

**Performance across subgroups** — how the system's accuracy, false positive rate, and false negative rate vary across different populations. A system that is accurate on average may be significantly less accurate for specific groups — producing more errors for the people it is least able to represent. Aggregate performance measures hide this variation.

---

## Why Does It Matter?

Performance metrics are the evidence base for governance decisions. The question of whether a system should be deployed, whether it should continue to operate, whether it needs to be updated, and whether its governance arrangements are adequate all depend on understanding how the system actually performs — not how it was designed to perform, not how it performed in testing, but how it performs in live operation on real cases.

A system deployed without adequate performance understanding is a system whose governance is based on assumption rather than evidence. Assumptions about performance that turn out to be wrong produce harms that adequate measurement would have identified earlier.

Performance also changes. Systems that performed well at deployment may perform less well as the population they process evolves, as the data environment changes, or as the cases they encounter increasingly differ from the cases they were trained on. Governance that assesses performance at deployment and does not monitor it continuously does not know whether the system's performance today is the same as the performance that justified its deployment.

---

## What's the Real Risk?

**Aggregate accuracy concealing subgroup failure.** A system that is 94% accurate overall may be 97% accurate for one population and 79% accurate for another. The aggregate figure is the one reported. The subgroup figure is the one that reveals discriminatory impact, disproportionate error, and unequal governance. Governance discussions that focus on overall accuracy without examining subgroup performance are missing the measurement that matters most for accountability.

**Testing performance mistaken for operational performance.** Systems are validated against test datasets before deployment. Test performance and operational performance can differ significantly — because test datasets may not represent the full range of cases the system will encounter in live operation, because operational conditions differ from test conditions, and because the system's behaviour may evolve as it processes more data. Governance that relies on pre-deployment test results without operational monitoring is governing on the basis of a performance picture that may have been accurate once and may no longer be.

**Error consequences ignored in performance assessment.** A false positive and a false negative are both errors, but their consequences are not equal. In credit decisions, a false positive may deny credit to someone who would have repaid it; a false negative may extend credit to someone who will not. In healthcare, a missed diagnosis has different consequences from a false alarm. Performance assessment that counts errors without weighing their consequences does not support the governance judgments that error rates are supposed to inform.

**Performance metrics selected to present favourable results.** The choice of which metrics to report is itself a governance decision. An organisation that reports the metrics on which its system performs well and does not report the metrics on which it performs less well is presenting a partial picture. Performance reporting that does not include the metrics most relevant to accountability — subgroup performance, error type rates, performance in the cases where errors are most consequential — is not adequate for governance purposes.

---

## Where Does It Appear?

Model performance is relevant in every governance discussion about whether a system is fit for its purpose:

- **Financial services** — performance of credit, fraud, trading, and advisory systems measured against accuracy, false positive, and false negative rates, with subgroup analysis for fair lending and equality obligations
- **Healthcare** — performance of diagnostic and triage systems measured against clinical accuracy benchmarks, with particular attention to error rates in the patient populations where errors are most consequential
- **Public services** — performance of eligibility and enforcement systems measured against accuracy rates and error distributions across the populations they affect
- **Employment** — performance of screening and assessment systems measured against prediction accuracy and subgroup performance across protected characteristic groups
- **Any governance discussion about whether to deploy, continue operating, or update an automated system** — performance evidence is the foundation of that decision

---

## What It Means in Practice

An organisation that takes model performance seriously must be able to answer these questions at any time:

- Does the organisation understand the key performance metrics for each of its automated systems — not just overall accuracy but error types, error rates, and subgroup performance?
- Is performance monitored continuously in live operation — not just assessed at deployment and assumed to be stable thereafter?
- Are performance metrics reported in governance discussions in a form that supports genuine assessment — including the metrics most relevant to accountability, not only the metrics most favourable to the system?
- When performance degrades — when error rates increase, when subgroup gaps widen, when operational performance diverges from test performance — is there a governance process for assessing whether continued operation is justified?
- Is performance assessed in relation to the consequences of errors — are the error types that produce the most serious harms given disproportionate governance attention?

If those questions cannot be answered, the organisation is governing systems without adequate evidence of how those systems are performing — and making decisions about deployment, continuation, and remediation on the basis of an incomplete performance picture.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Performance metrics provide an objective, evidence-based foundation for governance decisions about automated systems | No single metric captures performance completely — governance requires understanding multiple metrics simultaneously |
| Continuous operational monitoring detects performance degradation before it produces significant harm | Subgroup performance analysis requires data about the populations affected by the system, which may not always be available |
| Subgroup performance analysis reveals discriminatory impact that aggregate measures conceal | Performance benchmarks vary by sector and application — what constitutes adequate performance is context-dependent |
| Standardised metrics enable comparison across systems and over time | Test performance and operational performance can differ significantly, making pre-deployment validation an imperfect predictor |
| Regular performance reporting creates accountability for system quality that governance structures alone cannot produce | The relationship between performance metrics and real-world outcomes is not always straightforward — metrics measure what they measure, not always what matters |

---

## The Law

Regulatory frameworks for automated systems increasingly impose performance obligations — not just requirements to measure performance, but requirements to maintain adequate performance and to take defined action when performance falls below acceptable levels.

Financial services regulation in many jurisdictions imposes model risk management requirements that include performance monitoring, regular validation, and defined processes for addressing performance degradation. Healthcare regulation imposes clinical performance standards that automated systems must meet and maintain.

AI-specific legislation is advancing ongoing performance monitoring requirements for high-risk systems — requiring that deploying organisations monitor system performance in live operation, maintain performance records, report significant performance changes, and take defined action when performance falls below the levels assessed at conformity assessment.

The practical legal risk is direct: a system whose performance has degraded since deployment, and whose deploying organisation did not detect the degradation through adequate monitoring, is a system that has been operating outside the performance envelope that justified its deployment — potentially for a significant period, affecting a significant number of people, without the organisation knowing.

---

*SP-17 | Model Performance | Part of the AI Governance Reference Series*
