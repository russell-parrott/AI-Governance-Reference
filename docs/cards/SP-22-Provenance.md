# SP-22 — Provenance

> **Provenance is the documented history of data — where it came from, who created it, what was done to it before it reached the system. Without provenance, the reliability and legitimacy of a system's outputs cannot be established.**

---

## What Provenance Is

Provenance is the traceable origin and history of the data used to train, test and operate an automated system. It answers the question: where did this data come from, and what happened to it before it was used?

For training data, provenance covers the original source — whether the data was collected directly, purchased, scraped, synthesised or derived from other datasets — the conditions under which it was collected, what consents or licences apply, what transformations were applied, and what quality assessments were performed. For operational data — the inputs fed to a live system — provenance covers the source, the collection method, the timeliness and the chain of handling between collection and use.

Provenance is not simply a record of where data came from. It is a documented chain of custody — a record sufficiently complete that an external party could assess whether the data was legitimately obtained, appropriately processed, and fit for the purpose to which it was applied.

---

## Why Provenance Is a Governance Problem

A system built on data whose provenance is unknown or undocumented is a system whose governance foundations cannot be verified. The organisation cannot confirm that the data was lawfully obtained. It cannot assess whether consent requirements were met. It cannot evaluate whether the data's characteristics — its biases, its gaps, its recency — are appropriate for the decisions the system is making. It cannot respond to a regulatory or legal challenge that requires demonstrating the legitimacy of the training process.

Provenance failures are increasingly a regulatory concern. The EU AI Act requires documentation of training data for high-risk systems, including data sources, collection methods and data characteristics. GDPR and equivalent frameworks impose lawful basis requirements on personal data that extend to training data. Where data was scraped, synthesised or derived from sources with unclear licensing, provenance questions become intellectual property questions as well as governance ones.

The absence of provenance records does not only create legal exposure. It creates an evidential gap that is particularly difficult to close after the fact. Data provenance must be documented at the point of collection and use — reconstructing it later, from incomplete records, is unreliable and routinely challenged.

---

## What Documenting Provenance Requires

**Source identification** — every dataset used in training, testing or validation must be identified by source, including the organisation or system that collected it, the conditions of collection, and any intermediaries in the supply chain.

**Lawful basis documentation** — for data involving personal information, the legal basis for its collection and use must be documented and retained. This includes consent records, legitimate interest assessments and applicable licences.

**Transformation records** — any processing applied to data before use — cleaning, labelling, augmentation, anonymisation, synthesis — must be documented, including who performed it and what methods were used.

**Fitness assessment** — documentation of the assessment of whether the data was appropriate for the specific purpose to which it was applied, including known gaps, biases and limitations.

**Ongoing operational data** — provenance obligations extend to the data fed to a live system during operation. The sources of operational inputs must be documented with sufficient clarity to assess their reliability and legitimacy.

---

## Governance Connection

Provenance connects training data (→ SP-02) to the broader evidentiary obligations of the Atlas. Data quality (→ SP-05) cannot be assessed without provenance. Dataset bias (→ SP-06) cannot be investigated without knowing where the data came from. System documentation (→ RE-13) must include provenance records. Traceability (→ RE-14) depends on provenance as its starting point. Regulators conducting investigations under the EU AI Act, GDPR and equivalent frameworks increasingly treat provenance documentation as a mandatory governance record, not an optional best practice.

---

**See also:** RE-14 (Traceability), SP-02 (Training Data), SP-04 (Data Sources), SP-05 (Data Quality), SP-06 (Dataset Bias), RE-13 (System Documentation), LL-01 (EU AI Act), LL-02 (Data Protection and Privacy)

---

*SP-22 | Provenance | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
