# SP-25 — System Architecture

> **The governance questions that apply to an automated system depend on what kind of system it is. Accountability, explainability, reconstruction and oversight each mean something different depending on the architecture. Governing "AI" as a single category produces governance designed for a system that does not exist.**

---

## What System Architecture Means for Governance

System architecture is the structural design of an automated system — the combination of components, methods and data flows that determines how it produces outputs. For governance purposes, architecture is not a technical detail. It determines which governance obligations are straightforward to satisfy, which require additional mechanisms, and which may be structurally difficult or impossible to satisfy with current methods.

The governance implications of system architecture are most acute in five areas: explainability, reconstruction, accountability for outputs, third-party risk, and the meaning of human oversight. Each of these governance concepts — defined elsewhere in the Atlas — operates differently depending on what kind of system is being governed.

---

## Rules-Based Systems

Rules-based systems produce outputs by applying defined logical rules to inputs. The rules are explicit, the logic is deterministic, and the same inputs will always produce the same outputs.

**Governance implications:** Reconstruction is straightforward — the rules applied to the inputs can be documented and the output followed step by step. Explainability is achievable — the specific rules that produced a specific output can be identified and communicated. Audit trails can capture the complete decision logic. Bias may still exist in the rules themselves, but it is auditable and correctable.

Rules-based systems are the most governable form of automated decision system. Their governance challenge is not architecture — it is maintenance: ensuring that rules are reviewed, updated and documented as conditions change.

---

## Machine Learning Models

Machine learning models produce outputs by applying patterns learned from training data. The decision logic is not explicit — it is encoded in statistical parameters derived from training. The model generalises from examples rather than following defined rules.

**Governance implications:** Reconstruction is possible if inputs and model state are retained, but the causal chain from input to output runs through parameters that cannot be read as logical rules. Explainability is partial — techniques such as feature importance can indicate which inputs influenced an output, but they describe correlation rather than cause. The training data determines what the model learned, making provenance (→ SP-22) and dataset bias (→ SP-06) acute governance concerns. Data drift (→ SP-20) and model drift (→ SP-21) are ongoing governance obligations.

---

## Large Language Models and Foundation Models

Large language models (LLMs) and other foundation models are trained on vast datasets to perform general-purpose tasks. They are probabilistic and non-deterministic — the same input may produce different outputs at different times. Their internal representations are not interpretable by current methods.

**Governance implications:** Reconstruction in the full Atlas sense — reproducing the exact output from documented inputs — is architecturally compromised by non-determinism. Explainability at the level of specific decisions is not currently achievable through the model's internal mechanisms. Accountability for outputs is real but requires specific governance design: the deploying organisation is accountable for what the model produces regardless of the model's opacity. Human oversight (→ AR-03) must be designed to compensate for the absence of mechanical auditability. The boundary between intended use (→ SP-09) and unintended use (→ SP-10) is particularly unstable with general-purpose models.

This does not mean LLMs cannot be governed. It means they require governance mechanisms specifically designed for their architecture — not governance frameworks designed for deterministic systems applied without modification.

---

## Retrieval-Augmented Generation (RAG) Systems

RAG systems combine a language model with a retrieval mechanism. When a query is received, the system retrieves relevant content from a defined knowledge base and uses it to ground the model's output. The output depends on both what was retrieved and how the model used it.

**Governance implications:** RAG systems have two distinct failure modes that require separate governance. Retrieval failure — the wrong content retrieved, outdated content retrieved, or relevant content not retrieved — produces outputs that are factually incorrect or misleading regardless of the model's behaviour. Generation failure — the model misuses or misrepresents retrieved content — produces outputs that may be harmful even when the retrieval was correct. Provenance of retrieved content (→ SP-22) is a specific governance obligation. The knowledge base is a governed component that requires its own documentation, version control and quality assurance. Third-party content in the knowledge base creates third-party risk (→ SP-18) obligations.

---

## Fine-Tuned Models

Fine-tuned models are foundation models that have been further trained on proprietary or domain-specific data to adapt their behaviour for a specific context or task. The deploying organisation typically owns the fine-tuning process and its data.

**Governance implications:** Fine-tuning creates specific ownership of the training data provenance question. The organisation cannot defer to the foundation model provider for governance of the fine-tuning data — that data is the organisation's responsibility. The interaction between the foundation model's pre-trained behaviour and the fine-tuned behaviour creates explainability challenges that exceed those of either component alone. Changes to the underlying foundation model (→ SP-07) may alter the fine-tuned model's behaviour in ways that are not anticipated or tested.

---

## Embedded and API-Accessed Models

Many organisations deploy AI capabilities by accessing external models through APIs — using a model built and operated by a third party, integrated into the organisation's own systems and workflows. The deploying organisation controls neither the model nor its updates.

**Governance implications:** Third-party risk (→ SP-18) is the primary architecture-specific concern. The organisation is accountable for what the model produces (→ AR-08) but may have limited visibility into how it works, what it was trained on, or when and how it changes. Vendor model governance (→ SP-12) must address the gap between the accountability the organisation holds and the control it actually has. Model updates by the API provider are changes to the governed system (→ CS-10) that the organisation may not be notified of in advance.

---

## Hybrid and Composite Systems

Many deployed AI systems combine multiple architectures — a rules-based pre-filter feeding a machine learning model, an LLM augmented by retrieval, a fine-tuned model accessed via API and integrated with deterministic business logic. Governance must address the system as a whole, not only its most visible component.

**Governance implications:** The accountability question — who is responsible for the full system's outputs — cannot be answered by mapping responsibility to individual components. Accountability attaches to the organisation that deployed the composite system (→ AR-01). The governance documentation (→ RE-13) must describe the complete architecture and the governance arrangements for each component. The weakest governance component determines the governance quality of the whole.

---

**See also:** SP-09 (Intended Use), SP-12 (Vendor Models), SP-16 (Explainability), SP-18 (Third-Party Risk), SP-20 (Data Drift), SP-21 (Model Drift), SP-22 (Provenance), AR-01 (Accountability), AR-08 (Vendor Responsibility), CS-10 (Change Management), RE-13 (System Documentation)

---

*SP-25 | System Architecture | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
