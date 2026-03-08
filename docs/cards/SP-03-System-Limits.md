# SP-03 — System Limits

> **You know what the system produces. This card tells you what it cannot do. That is just as important.**

---

## What Is It?

System limits are the boundaries of what an automated system is capable of doing reliably — the conditions under which its outputs can be trusted, and the conditions under which they cannot.

Every automated system has limits. It was designed for a specific task, trained on specific data, and validated under specific conditions. Outside those conditions — with unfamiliar inputs, in novel contexts, or at the edges of what it was built to handle — its outputs become less reliable. In some cases they become unreliable entirely.

System limits are not failures. They are design characteristics. A system that works well within its limits and poorly outside them is behaving exactly as designed. The governance problem arises when those limits are not documented, not understood, or not respected in deployment.

---

## Why Does It Matter?

Automated systems are frequently deployed by people who understand what they can do but not what they cannot. The capability is visible — the system produces outputs, the outputs look authoritative, the process runs smoothly. The limits are invisible unless someone has specifically identified and documented them.

That invisibility is the problem. A system operating at or beyond its limits continues producing outputs with the same apparent confidence it applies within them. It does not flag uncertainty. It does not signal that a case falls outside its validated range. It decides. And the people relying on those decisions may have no basis for knowing that the system was not designed to handle the situation it just resolved.

---

## What's the Real Risk?

**Misplaced confidence in outputs.** When system limits are not communicated to the people using a system's outputs, those people apply the same level of trust to edge cases as they do to straightforward ones. The system's confidence is uniform. The reliability of its outputs is not.

**Deployment beyond validated scope.** Organisations under operational pressure frequently extend systems into contexts they were not designed for — different populations, different decision types, different data environments. Each extension takes the system further from the conditions under which it was validated, without anyone formally assessing whether it remains reliable there.

**Limits discovered through failure.** Where system limits are not proactively documented and respected, they tend to be discovered when the system fails in a way that causes harm. That is the most expensive way to learn what a system cannot do.

**Vendor limits obscured by commercial framing.** Vendors describing their systems' capabilities have commercial incentives to emphasise what the system does well and understate what it handles poorly. Organisations that rely on vendor claims without independent limit assessment are operating on incomplete information.

Responsibility for identifying, documenting, and respecting system limits sits with whoever deployed the system. A vendor describing capabilities does not transfer that responsibility.

---

## Where Does It Appear?

System limits are relevant at every stage and in every sector where automated systems are deployed:

- **Financial services** — credit systems that perform well on standard applicant profiles but produce unreliable outputs for thin-file or non-standard cases
- **Healthcare** — diagnostic systems validated on specific patient populations that produce less reliable results for demographics underrepresented in training data
- **Public services** — eligibility systems designed for standard cases that handle complex or unusual circumstances poorly
- **Employment** — screening systems validated for specific roles or industries that produce unreliable outputs when applied to different contexts
- **Language and communication systems** — natural language processing tools that perform well in formal English but poorly on regional dialects, non-standard usage, or other languages
- **Any system applied beyond its original validated context** — where the gap between design conditions and deployment conditions has not been formally assessed

---

## What It Means in Practice

An organisation that takes system limits seriously must be able to answer these questions at any time:

- What are the documented limits of this system — the conditions under which its outputs are and are not reliable?
- Are the people using or relying on this system's outputs aware of those limits?
- Is there a process for identifying when a case falls outside the system's validated range and routing it differently?
- Has the system been deployed in any context that goes beyond the conditions under which its limits were assessed?
- When were system limits last reviewed in light of how the system is currently being used?

If those questions cannot be answered, the organisation is using a system as though it has no limits — which is not confidence in its capability. It is ignorance of its design.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Documented limits enable appropriate use — outputs are trusted where reliable and questioned where they are not | Identifying limits requires rigorous testing that many organisations do not conduct before deployment |
| Limit awareness supports better human review — reviewers know which cases warrant more scrutiny | Vendors may not disclose limits fully, leaving deploying organisations without the information they need |
| Prevents deployment into contexts where the system will produce unreliable results | Limits can change as the system is updated or as the environment it operates in evolves |
| Supports honest communication with affected individuals about the basis of decisions | Operational pressure frequently leads organisations to use systems beyond their documented limits without formal review |
| Creates a basis for accountability — what was known about the system's reliability at the time of deployment | Documenting limits can be perceived as undermining confidence in the system, creating internal resistance |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that they understood the limits of their automated systems and deployed them accordingly — not simply that the systems were technically capable of producing outputs.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data be accurate and appropriate for the context in which it is used. Deploying a system beyond its validated limits in ways that produce inaccurate or inappropriate outputs may breach those requirements regardless of the system's general capability.

AI-specific legislation is advancing requirements for organisations to document and disclose system limitations as part of conformity and risk assessment obligations, particularly for high-risk applications. Regulators examining incidents look specifically at whether the system was being used within its documented limits at the time of the failure.

The practical legal risk is direct: an organisation that deployed a system without documenting its limits, or that used a system beyond those limits without reassessment, cannot demonstrate it made an informed decision about the reliability of the outputs it was relying on.

---

*SP-03 | System Limits | Part of the AI Governance Reference Series*
