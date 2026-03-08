# SP-24 — Deployment Context

> **Deployment context is the specific environment in which an automated system operates in practice — the population it affects, the conditions it encounters, the decisions it influences and the infrastructure it runs on. A system is not governed in the abstract. It is governed where it is deployed.**

---

## What Deployment Context Is

Deployment context is the complete description of the real-world conditions under which an automated system operates. It includes the population whose data the system processes and whose lives its decisions affect; the organisational setting in which the system operates; the infrastructure and data environment it relies on; the decisions it influences or makes; and the regulatory and legal environment that applies to those decisions in that setting.

Deployment context is distinct from intended use (→ SP-09), which describes what the system was designed to do. A system may have a precisely defined intended use that is deployed in a context that alters its governance implications entirely. A general-purpose risk scoring model deployed in a consumer credit context inherits the full weight of consumer credit regulation. The same model deployed in an internal resource allocation context carries different obligations. The system is the same. The governance is not.

Deployment context captures the difference between a system as designed and a system as used — in a specific place, for a specific purpose, affecting specific people, under specific law.

---

## Why Deployment Context Is a Governance Problem

Most AI governance failures involve a mismatch between the context a system was designed and tested for and the context it is actually deployed in. That mismatch takes several forms:

**Population mismatch** — the system was trained on one population and deployed against another. A model trained on applicant data from one country deployed in another. A model trained on adult data used to assess minors. A model trained on historical data applied to a demographic group underrepresented in that history.

**Regulatory mismatch** — the system was designed without reference to the regulatory requirements of the deployment context. A system deployed in financial services encounters conduct obligations its designers never considered. A system deployed in healthcare encounters medical device regulation that was not anticipated.

**Organisational mismatch** — the governance arrangements designed for the system do not match the organisational reality of the deployment. Accountability roles that made sense in one organisational structure do not transfer to another. Escalation processes designed for one team do not work in a different operating model.

**Infrastructure mismatch** — the system was tested in one technical environment and deployed in another. Performance assumptions do not hold. Integration points behave differently. Data quality in production differs from data quality in testing.

---

## What Deployment Context Governance Requires

**Context documentation before deployment** — the deployment context must be explicitly documented before a system goes live. This includes the population, the decision types, the regulatory environment and the organisational setting. Assumptions about context must be made explicit so they can be tested.

**Context assessment** — the documented deployment context must be assessed against the system's designed intended use, its training data, its tested performance and its governance arrangements. Significant mismatches must be resolved before deployment.

**Regulatory mapping** — the legal and regulatory obligations that apply in the specific deployment context must be identified and documented. Generic compliance assessments that do not address the specific context are insufficient.

**Change-triggered reassessment** — when the deployment context changes — new populations, new use cases, new regulatory requirements, new organisational structures — the system's governance must be reassessed against the new context. Context change is a governed change.

**Ongoing context monitoring** — deployment contexts evolve. Regulatory environments change. Populations shift. Organisational structures transform. Governance must include ongoing monitoring of the context, not just the system.

---

## Governance Connection

Deployment context frames every other governance concept in the Atlas. Intended use (→ SP-09) is only meaningful relative to a specific deployment context. Risk classification (→ LR-13) depends entirely on context — the same system may be low-risk in one deployment and high-risk in another. Accountability (→ AR-01) must be assigned relative to the specific context. Jurisdiction obligations (→ JX-00 through JX-13) are determined by where the system is deployed and whom it affects. A system that has been governed in isolation from its deployment context has not been governed at all.

---

**See also:** SP-09 (Intended Use), SP-10 (Unintended Use), LR-13 (Risk Classification), AR-01 (Accountability), JX-00 (Jurisdiction Series), SP-03 (System Limits), SP-06 (Dataset Bias)

---

*SP-24 | Deployment Context | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
