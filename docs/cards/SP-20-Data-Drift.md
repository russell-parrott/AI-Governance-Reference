# SP-20 — Data Drift

> **Data drift occurs when the real-world data a system encounters in production differs materially from the data it was trained on. The system continues to operate. Its outputs become less reliable. Without monitoring, nobody notices.**

---

## What Data Drift Is

Data drift is the gradual or sudden divergence between the statistical properties of a system's training data and the data it encounters when deployed. The system learned patterns from one data distribution. It is now making decisions based on a different one. The model has not changed. The world has.

Drift can be gradual — a slow shift in customer demographics, economic conditions or user behaviour over months or years. It can be sudden — a market shock, a regulatory change, a pandemic that transforms what normal looks like overnight. In either case the system has no mechanism to recognise that its learned patterns no longer reflect current reality. It continues producing outputs with the same apparent confidence.

Data drift is distinct from model drift, which refers to degradation in model performance caused by factors other than input data changes. Both are governance concerns. Both are forms of silent failure — the system continues to operate while its reliability erodes.

---

## Why Data Drift Is a Governance Problem

A system deployed without drift monitoring is a system whose governance degrades silently over time. The accountability arrangements, the documented intended use, the performance benchmarks established at deployment — all of them were calibrated for a data environment that no longer exists.

The governance failure is not that drift occurs. Drift is inevitable in systems that operate over time in changing environments. The failure is deploying a system without the monitoring to detect it and the processes to respond to it.

When drift is undetected, the system continues making decisions that affect people based on patterns that no longer hold. Credit models trained before an economic shift may systematically misclassify applicants. Fraud detection systems trained on one attack pattern may miss a different one. Hiring systems trained on historical data may embed the patterns of a workforce that no longer exists.

---

## What Detecting Data Drift Requires

Drift detection is a monitoring obligation. It requires:

**Baseline documentation** — the statistical properties of the training data must be recorded at deployment, so that deviations can be measured against a defined reference point.

**Input monitoring** — the system's live inputs must be monitored for distributional change. This requires ongoing data collection and comparison against the baseline.

**Output monitoring** — changes in the distribution of outputs — more approvals, fewer flags, different score distributions — are often the first visible signal of upstream drift.

**Defined thresholds** — governance requires that someone has decided in advance what level of drift triggers review, retraining or suspension. Drift detection without defined response thresholds is observation without governance.

**Response procedures** — when drift is detected, the organisation must have a defined process: who is informed, what review is conducted, whether the system continues operating during review, and what constitutes an adequate response.

---

## Governance Connection

Data drift connects directly to the governance obligations established elsewhere in the Atlas. Performance monitoring (→ SP-17) must include drift detection to be meaningful. Monitoring (→ CS-01) must cover input and output distributions, not just system availability. Change management (→ CS-10) must include drift-triggered retraining as a governed change. Documentation (→ RE-07) must record drift detections, investigations and responses.

The specific governance question data drift raises is: at what point does a system that has drifted from its training data become a different system — one that was never tested, approved or governed for the conditions it now operates in?

---

**See also:** SP-21 (Model Drift), SP-02 (Training Data), SP-17 (Model Performance), CS-01 (Monitoring), CS-05 (Operational Monitoring), CS-10 (Change Management)

---

*SP-20 | Data Drift | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
