# SP-08 — System Scope

> **After people, back to the system. Where are its boundaries? What is inside the decision and what is outside?**

---

## What Is It?

System scope is the defined boundary of what an automated system acts on, decides, and affects. It describes what is inside the system's reach and what sits outside it.

Every automated system operates within limits. It takes in certain inputs, applies a defined process, and produces outputs that affect specific decisions or actions. Scope defines those limits formally — what data the system uses, what decisions it makes or influences, which people or transactions it touches, and where its authority ends.

Scope is not the same as intended use, which describes what the system was designed to do. Scope describes the actual extent of what it does — the boundary between the system's territory and everything beyond it.

---

## Why Does It Matter?

An automated system without a defined scope is ungovernable. If the boundaries of a system are not clearly established, it is impossible to know what it is affecting, who is responsible for those effects, or where oversight needs to be applied.

Systems that are poorly scoped tend to expand in practice. A system introduced to handle one type of decision quietly begins influencing adjacent ones. Data that was collected for one purpose gets pulled into another process. Outputs that were meant to inform a human decision start replacing it. Each step is small. Collectively they move the system well beyond what was originally authorised — without anyone having made that decision deliberately.

---

## What's the Real Risk?

**Silent expansion.** Without defined scope, systems grow incrementally into areas that were never assessed, authorised, or governed. By the time the expansion is noticed, it may have been operating outside its boundaries for months.

**Accountability gaps.** Governance roles are assigned based on what a system was understood to do. If the system's actual scope is wider than anyone documented, the roles assigned to it do not cover what it is actually doing. The gap is ungoverned.

**Compounding errors.** A system operating beyond its defined scope is producing outputs in territory it was not designed or validated for. Errors in that territory may never be detected because no one is monitoring what no one knew the system was doing.

**Regulatory and legal exposure.** Regulators examining an incident will ask what the system's scope was and whether its operation stayed within that scope. An organisation that cannot answer either question is in a significantly weakened position.

Ownership of scope definition sits with whoever authorised the system's deployment — not the team that operates it day to day.

---

## Where Does It Appear?

System scope is relevant at every stage of an automated system's life:

- **Design and procurement** — scope must be defined before a system is built or bought, not after it is running
- **Deployment sign-off** — confirming that the system as deployed matches the scope that was authorised
- **Integration with other systems** — where one system feeds data to another, scope defines what crosses the boundary and what does not
- **Vendor-supplied components** — where a third party provides part of the system, scope determines what the vendor's component is permitted to affect
- **Audit and review** — scope is the reference point against which actual system behaviour is checked
- **Incident investigation** — establishing whether the system was operating within scope at the time of an incident is a standard first step in any investigation

---

## What It Means in Practice

An organisation that takes system scope seriously must be able to answer these questions at any time:

- What data does this system take in, and what is explicitly excluded from its inputs?
- What decisions or actions does this system make or directly influence?
- Which people, transactions, or processes fall within the system's reach?
- Has the system's actual operation been checked against its documented scope recently?
- Who is responsible for identifying and acting on scope drift if it occurs?

If those questions cannot be answered, the organisation does not have a clear picture of what its system is doing. Governing a system whose boundaries are unknown is not governance. It is assumption.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Creates a clear reference point for oversight and audit | Defining scope requires detailed knowledge of the system that organisations often do not have at deployment |
| Prevents unauthorised expansion into areas that have not been assessed or governed | Scope documentation written at deployment becomes outdated as systems and processes evolve |
| Supports accountability by ensuring governance roles cover what the system actually does | In complex systems, scope boundaries can be technically difficult to establish and maintain |
| Enables meaningful incident investigation — was the system within scope when it failed? | Scope drift can occur gradually and remain invisible until an incident forces a review |
| Provides a basis for assessing whether a system change requires a new authorisation | Organisations under operational pressure may resist formal scope review as an overhead |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to describe what their automated systems do and demonstrate that their operation stays within defined and authorised boundaries.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data be limited to specified purposes. A system operating beyond its documented scope may be processing data in ways that were never authorised, creating a direct breach of those requirements.

AI-specific legislation is increasingly requiring organisations to document system boundaries as part of conformity and risk assessment obligations, particularly for high-risk applications. Operating beyond documented scope is becoming a distinct regulatory concern, separate from whether the system itself performed correctly.

The practical legal risk is clear: an organisation that cannot define its system's scope, and demonstrate that the system operates within it, cannot credibly claim to be in control of what it has deployed.

---

*SP-08 | System Scope | Part of the AI Governance Reference Series*
