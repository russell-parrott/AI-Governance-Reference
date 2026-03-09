# MK-03 — AI Engineers

> **AI engineers build and operate the systems that governance frameworks are designed to address. They understand how those systems work better than anyone else in the organisation. They are rarely the people who designed the governance arrangements those systems operate under.**

---

## What This Market Is

AI engineers — including machine learning engineers, data scientists, MLOps engineers and AI developers — are the technical professionals who design, build, train, deploy and maintain automated systems. They appear in technology companies, financial institutions, healthcare organisations, public sector bodies and any organisation that develops or operates AI systems internally.

Their position in the governance structure is typically operational rather than strategic. They make the technical decisions that determine what a system does, how it performs and what it can and cannot be asked to account for. They are rarely involved in the governance decisions that frame the context in which their technical choices are made — and they are rarely the people who answer governance questions when something goes wrong.

---

## Why AI Governance Matters to Them

AI engineers make decisions that have direct governance consequences, often without a governance framework to guide them. The choice of training data determines what the system learns and what biases it encodes. The choice of performance metrics determines what the system is optimised for and what it trades off. The choice of logging architecture determines what can and cannot be reconstructed when a decision is challenged.

These are not purely technical decisions. They are governance decisions made by technical people who may have no governance context. The engineer who decides not to log model inputs because it adds storage costs has made a traceability decision. The engineer who uses available historical data without assessing its representativeness has made a fairness decision. The engineer who deploys a new model version without a governed change process has made an accountability decision.

AI engineers increasingly face professional and personal exposure when the systems they built are examined in regulatory or legal proceedings.

---

## What Questions They Ask

AI engineers approach AI governance through a system design and performance lens:

- What data should the system be trained on, and does it represent the deployment population?
- How should performance be measured, and what metrics matter for this use case?
- What needs to be logged to enable reconstruction of specific decisions?
- How does the system behave at the edges of its training distribution?
- What happens when the system encounters inputs it was not designed to handle?
- Who needs to be informed when the system's behaviour changes after an update?

Engineers ask technical questions that have governance answers — but without governance context, they may not know the governance implications of their technical choices.

---

## What Evidence They Expect

AI engineers produce and rely on technical evidence:

- Model documentation including architecture, training data, performance metrics and known limitations
- Training and evaluation datasets with provenance and quality assessment records
- Version control records showing what changed between model versions
- Performance benchmarks and test results
- System logs and operational monitoring data
- Incident records and root cause analyses

The evidence engineers produce is the technical foundation on which governance accountability is built — but it is frequently produced for technical rather than governance purposes, and may not be in a form that serves governance requirements.

---

## Where They Appear in Investigations

AI engineers appear in governance investigations as technical witnesses. When a system is examined by regulators, auditors or courts, engineers are asked to explain how the system works, what data it was trained on, what it was designed to do, and what the technical record shows about a specific decision or failure.

Engineers who made undocumented technical decisions — who cannot explain why a particular design choice was made, or who built a system without adequate logging — face significant difficulty in investigations. The absence of documentation is not a neutral fact. It is evidence of governance failure.

In serious cases, engineers may face personal professional consequences — regulatory censure, employment action or, in jurisdictions with individual accountability regimes, personal liability.

---

## Governance Concepts Most Relevant to Them

The Atlas concepts most directly relevant to AI engineers are drawn from the System Properties series:

- **Training Data** (→ SP-02) and **Provenance** (→ SP-22) — the data foundation of every system
- **Dataset Bias** (→ SP-06) — the governance implications of training data characteristics
- **System Inputs and Outputs** (→ SP-13, SP-14) — what the system processes and produces
- **Explainability** (→ SP-16) — the technical and governance requirements for decision explanation
- **Model Performance** (→ SP-17) — performance measurement as a governance obligation
- **Data Drift** (→ SP-20) and **Model Drift** (→ SP-21) — ongoing performance governance
- **Feedback Loops** (→ SP-27) — the self-reinforcing failure mode embedded in training cycles
- **Traceability** (→ RE-14) — the logging architecture that makes governance possible

Engineers are the people who determine whether traceability, explainability and monitoring are architecturally possible. Their technical decisions enable or foreclose governance options that organisations may not realise they have lost until they need them.

---

## Typical Failure Points

**Governance blind spots.** Engineers make decisions with governance consequences without knowing they are making governance decisions. Logging choices, data selection, metric design and deployment processes all have governance implications that are invisible without governance context.

**Documentation for developers, not for governance.** Technical documentation describes how a system works for engineering purposes. It does not describe what the system was designed to do, what conditions it was approved under, or what a non-technical reviewer needs to understand it. When a governance investigation begins, engineering documentation does not answer governance questions.

**No change governance.** Model updates, parameter changes and retraining cycles proceed without a governed change process. The operational system diverges from what was approved without anyone in a governance role knowing.

**Performance metrics that optimise for the wrong thing.** Systems are optimised for metrics that engineers can measure — accuracy, precision, recall — without governance input about what the system should optimise for from the perspective of the people it affects.

---

*MK-03 | AI Engineers | Market Profiles*
*This card explains governance concepts relevant to specific professional roles. It does not constitute legal advice.*
