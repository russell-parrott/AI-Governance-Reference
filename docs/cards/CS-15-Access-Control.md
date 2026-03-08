# CS-15 — Access Control

> **Access control is the governance of who can interact with an automated system — who can read its outputs, change its parameters, retrain its model, access its data, or override its decisions. Without defined and enforced access controls, accountability cannot be established.**

---

## What Access Control Is

Access control is the set of policies, mechanisms and records that govern who is authorised to perform specific actions on an automated system. It operates across several levels:

**Data access** — who can read, modify or delete the data the system uses, including training data, operational inputs and decision records.

**Model access** — who can view, copy, modify, retrain or deploy the model itself.

**Output access** — who can see the system's decisions and recommendations, and in what form.

**Configuration access** — who can change the system's parameters, thresholds, rules or operating conditions.

**Override access** — who has the authority and technical ability to reverse or modify a system decision after it has been made.

**Audit access** — who can access logs, records and documentation for review, investigation or compliance purposes.

Access control is not primarily a technical security concept in the governance context. It is a governance concept: the technical controls that enforce access restrictions are the mechanism through which accountability, role definition and authority structures become operational. If anyone can change the system, nobody is accountable for it.

---

## Why Access Control Is a Governance Problem

Accountability requires that the actions taken in relation to a system can be attributed to specific individuals. That attribution depends on access controls being enforced, access being logged, and the logs being retained and reviewed.

Without access controls, the governance record is unreliable. Changes to a system cannot be attributed to the person responsible. Decisions cannot be confirmed as the system's outputs rather than the result of post-hoc modification. The audit trail (→ RE-01) is only as reliable as the controls that protect it from alteration.

Access control failures take several forms in practice. Shared credentials mean that actions cannot be attributed to individuals. Overly broad access means that staff who should not be able to change the system can do so. Lack of logging means that changes cannot be detected. Lack of review means that unauthorised access goes unnoticed. Each failure weakens the governance foundation that accountability depends on.

In regulated contexts, access control is a specific obligation. Financial regulators require that changes to models can be attributed to authorised individuals. Data protection law requires that personal data is accessible only to those with a defined need and authorisation. The EU AI Act requires that access to high-risk system logs is restricted to authorised parties.

---

## What Access Control Governance Requires

**Role-based access** — access to each category of system interaction must be defined by role, with named individuals authorised for each role. Generic or shared access credentials are inconsistent with accountability governance.

**Least privilege** — individuals should have access only to the system functions they need to perform their specific responsibilities. Broad access granted for convenience is a governance risk.

**Access logging** — all significant access events — logins, data access, configuration changes, model modifications, override actions — must be logged with sufficient detail to identify who did what and when.

**Log integrity** — access logs must be protected from modification. A log that can be altered by the person whose actions it records is not a governance record.

**Access review** — access rights must be reviewed regularly and revoked when roles change, employment ends or the need for access ceases. Stale access rights are among the most common access control failures.

**Documentation** — the access control policy, the role definitions, the authorised access list and the access review records must be maintained as part of the system's governance documentation.

---

## Governance Connection

Access control is the mechanism that makes role definition (→ AR-05) and decision authority (→ AR-04) operational. Without enforced access controls, documented accountability structures are aspirational rather than real. Audit trails (→ RE-01) depend on access logging for their integrity. Change management (→ CS-10) requires that changes can be attributed to authorised individuals. Vendor relationships (→ AR-08, SP-18) require that vendor access to the system is defined, controlled and audited. Internal governance (→ AR-10) includes access control as a foundational component.

---

**See also:** AR-04 (Decision Authority), AR-05 (Role Definition), AR-08 (Vendor Responsibility), RE-01 (Audit Trails), CS-10 (Change Management), AR-10 (Internal Governance)

---

*CS-15 | Access Control | Control Systems*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
