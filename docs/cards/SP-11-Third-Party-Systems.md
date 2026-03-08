# SP-11 — Third-Party Systems

> **Often the system talks to other systems. This card introduces dependency risk.**

---

## What Is It?

A third-party system is any automated system, platform, data feed, or technical component that an organisation's own automated system connects to, receives from, or depends on — and that is owned, operated, or controlled by another party.

Most automated systems do not operate in isolation. They receive data from external feeds. They pass outputs to other platforms. They rely on components built and maintained by vendors. They connect to shared infrastructure. Each of those connections is a dependency — a point at which the organisation's system relies on something outside its direct control to function as expected.

Third-party systems are not a technical detail. They are a governance boundary. Everything beyond that boundary operates under someone else's decisions, someone else's standards, and someone else's priorities.

---

## Why Does It Matter?

An organisation is accountable for what its automated system does. That accountability does not reduce because part of the system — or something the system depends on — belongs to someone else. When a third-party component fails, changes, or produces unreliable outputs, the organisation's system is affected. The people the organisation's system makes decisions about do not experience a third-party problem. They experience a decision that was wrong.

Dependency on third-party systems creates accountability without control. The organisation answers for outcomes it cannot fully govern because the parts of the process that produced those outcomes sit outside its boundary.

---

## What's the Real Risk?

**Failures that originate outside the organisation's control.** A third-party system that goes down, produces incorrect data, or changes its outputs can cascade into the organisation's own system immediately and without warning. The organisation may not know a problem exists until its own outputs have already been affected.

**Changes made without notice.** Third-party systems are updated, reconfigured, and modified according to their owners' schedules and priorities. Those changes can alter what the organisation's system receives or how it behaves — without the organisation being informed in time to assess the impact or adjust its governance.

**Accountability gaps at the boundary.** When something goes wrong in a system with third-party dependencies, establishing where the failure occurred — and therefore who is responsible — can be genuinely complex. That complexity does not protect the organisation. Regulators hold the deploying organisation accountable for its outputs regardless of where in the chain the failure originated.

**Undocumented dependencies.** Organisations frequently do not have a complete picture of all the third-party systems their automated processes depend on. Dependencies accumulate through integration decisions made at different times by different teams. An undocumented dependency is an unmanaged risk.

Responsibility for identifying, documenting, and managing third-party dependencies sits with whoever holds governance authority over the system. The existence of a contract with a vendor does not constitute governance of the dependency.

---

## Where Does It Appear?

Third-party system dependencies are present in most automated systems operating at scale:

- **Financial services** — credit reference agencies, payment networks, market data feeds, and fraud intelligence platforms that supply data to automated decision systems
- **Healthcare** — diagnostic imaging platforms, pharmacy systems, and patient record databases that automated clinical tools depend on
- **Public services** — identity verification services, tax and benefits databases, and shared government platforms that eligibility systems connect to
- **Employment** — background check providers, skills assessment platforms, and HR system integrations that feed automated screening tools
- **Retail and platforms** — logistics systems, payment processors, inventory databases, and advertising networks connected to automated customer-facing processes
- **Any organisation using cloud infrastructure or SaaS components** — where core processing or data storage sits outside the organisation's direct control

---

## What It Means in Practice

An organisation that takes third-party system dependencies seriously must be able to answer these questions at any time:

- Is there a documented map of all third-party systems that this system depends on or connects to?
- For each dependency, what is the impact if that third-party system fails, changes, or produces incorrect outputs?
- Are contractual arrangements with third-party providers sufficient to ensure notification of changes and access to information needed for governance?
- Is there monitoring in place to detect when a third-party system's behaviour has changed in ways that affect this system's outputs?
- What happens operationally if a critical third-party dependency becomes unavailable?

If those questions cannot be answered, the organisation has dependencies it has not mapped and risks it has not assessed. A system whose dependencies are unknown is a system whose failure modes are unknown — and unknown failure modes are not managed risks. They are waiting incidents.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Third-party systems provide access to data, capability, and infrastructure the organisation could not build or maintain alone | Dependencies on third-party systems create accountability exposure for failures outside the organisation's control |
| Specialist third-party components can improve system quality and reliability | Third-party systems change on their owners' schedules, which may not align with the organisation's governance processes |
| Documented dependencies create a basis for contingency planning and resilience assessment | Complete dependency mapping is technically complex and frequently incomplete in practice |
| Contractual arrangements can establish notification obligations and governance standards for third parties | Contracts establish obligations but cannot guarantee third-party compliance or prevent unexpected changes |
| Shared infrastructure and platforms can reduce duplication and operational cost | Concentration of dependencies in a small number of large third-party providers creates systemic risk |

---

## The Law

The legal direction across most developed economies is consistent: organisations cannot use third-party dependencies to dilute their accountability for automated decisions — they remain responsible for what their systems do, regardless of where components or data originate.

Data protection and privacy frameworks in many jurisdictions impose specific obligations on organisations that transfer personal data to or receive it from third parties, including requirements for contractual safeguards, data processing agreements, and ongoing oversight of third-party compliance. A third-party data or processing failure does not transfer legal liability away from the organisation.

AI-specific legislation is advancing supply chain obligations for automated systems, with some frameworks requiring organisations to document and assess dependencies on third-party components as part of their governance and conformity obligations. Third-party risk is increasingly treated as the deploying organisation's risk to manage, not to disclaim.

The practical legal risk is direct: an organisation that cannot identify its third-party dependencies, demonstrate it has assessed their risks, and show it maintains appropriate oversight of them, cannot fully account for its automated system's behaviour — and cannot credibly claim control of a system whose components it has not mapped.

---

*SP-11 | Third-Party Systems | Part of the AI Governance Reference Series*
