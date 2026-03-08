# AR-02 — Approval Processes

> **Decisions need formal sign-off. This card explains the gate something must pass through.**

---

## What Is It?

An approval process is the formal sequence of steps an automated system — or a significant change to one — must complete before it is authorised to operate or to change how it operates.

It is a gate. Before a system goes live, before its parameters are adjusted, before it is applied to a new context, or before a significant modification is made, the approval process requires that defined conditions are met, defined people have reviewed and agreed, and that agreement is documented.

An approval process is not a conversation or an informal nod from a senior person. It is a structured procedure with defined inputs, defined participants, and a recorded outcome. The gate either opens or it does not — and that decision is traceable.

---

## Why Does It Matter?

Automated systems deployed without formal approval are systems whose risks have not been assessed by anyone with the authority to say they are acceptable. They may work correctly. They may not. The organisation does not know, because it did not require anyone to find out before the system went live.

Approval processes exist to force that question before consequences arise rather than after. They create a point at which the system's purpose, scope, data, risks, and governance arrangements are examined — not by the people who built it and want it deployed, but by people with the authority and independence to say no.

---

## What's the Real Risk?

**Unassessed risk in live operation.** A system that bypasses formal approval may be operating with risks that were never identified, let alone managed. Those risks do not disappear because no one looked for them. They surface in operations, in complaints, and in regulatory investigations.

**No documented baseline.** Without a formal approval record, there is no documented statement of what the system was understood to do, what risks were accepted, and who accepted them. When something goes wrong, the organisation cannot point to a moment at which it made an informed, considered decision to proceed.

**Change without control.** Where approval processes do not apply to modifications — only to initial deployment — systems can evolve significantly through incremental changes, none of which individually triggered review but collectively produce a system quite different from what was originally approved.

**Accountability gaps.** Approval processes create a record of who said yes. Without them, accountability for a system's deployment is diffuse and deniable. Everyone was involved in some way. No one made the call.

Responsibility for designing and enforcing approval processes sits with the organisation's leadership. A process that can be bypassed under operational pressure is not a process. It is a suggestion.

---

## Where Does It Appear?

Approval processes for automated systems arise at every point where a consequential decision about the system must be made:

- **Initial deployment** — formal sign-off before a system is permitted to operate in a live environment
- **Scope changes** — approval required when the system is applied to a new population, context, or decision type not covered by original authorisation
- **Model updates** — sign-off before changes to the system's underlying logic, parameters, or training data are implemented
- **Data source changes** — approval when new data sources are added or existing ones are modified in ways that could affect outputs
- **Vendor changes** — formal review when a third-party component of the system changes provider, version, or configuration
- **Post-incident reinstatement** — approval required before a suspended system is returned to operation following an incident

---

## What It Means in Practice

An organisation that takes approval processes seriously must be able to answer these questions at any time:

- Is there a defined approval process for this system, and does it apply to both initial deployment and subsequent changes?
- Does the approval process require evidence — of testing, risk assessment, and governance arrangements — before sign-off is given?
- Is the outcome of each approval process documented, including who approved, what they reviewed, and when?
- Can the approval process be bypassed, and if so, under what conditions and with what additional controls?
- When was the approval process last reviewed to confirm it remains appropriate for the system's current risk profile?

If those questions cannot be answered, the organisation is operating systems that someone decided to deploy without a formal, traceable basis for that decision. Authority without process is not governance. It is confidence — and confidence is not evidence.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Creates a documented baseline of what was known, assessed, and accepted at the point of deployment | Poorly designed approval processes become bureaucratic obstacles that people route around |
| Forces risk assessment before consequences arise rather than after | Approval processes that apply only to initial deployment miss the risks introduced by incremental change |
| Establishes clear accountability — a named person or body said yes | Under time pressure, approval processes are frequently compressed or bypassed without adequate documentation |
| Provides a reference point for subsequent audit, review, and incident investigation | Approval given without genuine scrutiny creates a record that implies control without providing it |
| Supports regulatory compliance by demonstrating that deployment decisions were made formally | Complex systems may require multiple parallel approvals, creating coordination challenges and potential gaps |

---

## The Law

The legal direction across most developed economies is consistent: formal approval processes for automated systems — particularly high-risk ones — are moving from good practice to legal requirement.

Data protection and privacy frameworks in many jurisdictions require that the processing of personal data, especially through automated decision-making, be subject to prior assessment of risks and a documented basis for proceeding. An approval process is the practical mechanism through which those requirements are met.

AI-specific legislation is advancing formal conformity assessment and approval obligations for high-risk systems, requiring organisations to complete defined steps — testing, documentation, risk assessment, human review — before deployment is permitted. In some frameworks, those steps must be independently verified.

The practical legal risk is direct: an organisation that deployed an automated system without a formal, documented approval process cannot demonstrate it made an informed decision to proceed. That is not simply a procedural gap. It is evidence that the organisation did not know what it was deploying — and chose not to find out.

---

*AR-02 | Approval Processes | Part of the AI Governance Reference Series*
