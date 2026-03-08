# SP-21 — Model Drift

> **Model drift is the degradation of a system's performance over time — not because the inputs have changed, but because the relationships the model learned no longer hold. The system produces outputs. They are increasingly wrong.**

---

## What Model Drift Is

Model drift is the progressive deterioration of a deployed system's predictive accuracy or decision quality over time. Unlike data drift — which arises from changes in the input data distribution — model drift refers to the erosion of the model's underlying learned relationships. The patterns the system was trained to detect have weakened, shifted or disappeared. The model's parameters remain unchanged. Its usefulness does not.

The causes of model drift are varied. Behavioural adaptation — where the people or systems the model acts on change their behaviour in response to the model's decisions — is one common cause. A fraud detection system trains fraudsters to change their tactics. A credit scoring model changes borrower behaviour in ways that alter the risk profile of borrowers who score well. The model's learned patterns become self-undermining.

Conceptual drift — where the underlying real-world relationship the model was trained to capture changes — is another cause. What predicted creditworthiness in 2018 may not predict it in 2025. What indicated fraud five years ago may not indicate it today. The concept has shifted. The model has not.

---

## Why Model Drift Is a Governance Problem

A system suffering from model drift continues to produce outputs. It continues to affect people. The organisation deploying it continues to rely on those outputs for decisions. The governance failure is not the drift — it is the absence of the monitoring that would detect it and the processes that would respond.

Model drift is particularly insidious because it is gradual and invisible without active measurement. There is no error message. No system failure. The outputs simply become progressively less reliable — a credit model approving more bad loans, a fraud system missing more fraud, a hiring system selecting less suitable candidates. Each individual decision looks like a decision. The pattern of deterioration is only visible across a population of decisions, over time, with the right monitoring in place.

In regulated contexts, model drift creates specific liability. A financial institution relying on a credit model that has drifted materially from its validated performance is relying on a model that was never validated for its current performance level. The validation that supported its regulatory approval is no longer applicable.

---

## What Governing Model Drift Requires

**Performance benchmarking at deployment** — the system's performance must be measured and documented at the point of deployment, against defined metrics, to provide a reference point for future comparison.

**Ongoing performance monitoring** — the system's accuracy, error rates and decision quality must be measured continuously against the deployment benchmark. Periodic snapshot reviews are insufficient for systems making consequential decisions.

**Drift thresholds and triggers** — governance requires that someone has defined in advance what level of performance degradation triggers mandatory review, retraining or suspension. A system operating below its approved performance level without a governance response is an ungoverned system.

**Model validation on retraining** — when drift triggers retraining, the retrained model must be validated as if it were a new system. Retraining is a governed change, not a routine maintenance task.

**Documentation** — drift detections, performance reviews, retraining decisions and revalidation results must be documented and retained as part of the system's governance record.

---

## Governance Connection

Model drift sits at the intersection of system properties and control systems. Performance monitoring (→ SP-17) is the primary detection mechanism. Data drift (→ SP-20) is a related but distinct phenomenon — both can occur independently or together. Change management (→ CS-10) governs the response when drift is detected. Operational reviews (→ CS-09) should include drift assessment as a standing agenda item. Records of drift detection and response belong in the system's governance documentation (→ RE-07, RE-13).

---

**See also:** SP-20 (Data Drift), SP-17 (Model Performance), SP-02 (Training Data), CS-01 (Monitoring), CS-09 (Operational Reviews), CS-10 (Change Management), RE-13 (System Documentation)

---

*SP-21 | Model Drift | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
