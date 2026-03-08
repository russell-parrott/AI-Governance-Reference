# LR-13 — Risk Classification

> **The regulator says this system is high risk. This card explains what that means, how it was determined, and why the classification changes what the organisation must do.**

---

## What Is It?

Risk classification is the formal process by which an automated system is assigned to a category of regulatory risk — a classification that determines what legal obligations apply to it, what governance standards it must meet, and in some cases whether it is permitted to operate at all.

Most regulatory frameworks for automated systems organise their requirements around risk tiers. The principle is proportionality: systems that can cause more serious harm to more people are subject to more demanding requirements than systems whose potential for harm is limited. Classification is the mechanism through which that principle is applied — the determination of which tier a specific system falls into and what follows from that.

Classification frameworks vary by jurisdiction and regulatory domain, but most share a common architecture:

**Prohibited systems** — automated systems whose use is forbidden entirely because the risk of harm is considered unacceptable regardless of governance arrangements. The classification is a prohibition, not a requirement set.

**High-risk systems** — automated systems that can cause significant harm to individuals or groups and are therefore subject to the most demanding governance, documentation, oversight, and accountability requirements before and during deployment.

**Limited-risk systems** — automated systems whose risk profile is lower, subject to defined requirements — typically transparency and notification obligations — but not the full suite of high-risk governance demands.

**Minimal-risk systems** — automated systems considered to present negligible risk, subject to general legal obligations but not sector-specific AI governance requirements.

---

## Why Does It Matter?

Classification is not a label. It is a governance trigger. The classification a system receives determines what the organisation must do before deploying it, what it must maintain during operation, and what it must demonstrate to regulators on demand.

A high-risk classification typically requires: a conformity assessment before deployment, technical documentation of defined depth and scope, human oversight arrangements that meet specific standards, ongoing monitoring with defined frequency and coverage, incident reporting obligations, and in some frameworks registration with a regulatory body. These are not optional enhancements. They are legal prerequisites.

An organisation that deploys a system without understanding its classification — or that misclassifies a system and applies inadequate governance as a result — is not operating in a compliance grey area. It is in breach of the requirements that apply to the system's actual classification, from the first day of operation.

---

## What's the Real Risk?

**Misclassification that results in inadequate governance.** An organisation assesses its system as limited-risk and applies limited-risk governance. The system's actual use — the decisions it makes, the populations it affects, the consequences it produces — places it in the high-risk category. The governance is inadequate for the system as deployed. The misclassification was the organisation's own assessment, not a regulator's finding — which means the organisation created the compliance gap itself.

**Classification based on intended use rather than actual use.** A system designed for a limited-risk application is deployed in a high-risk context — used for hiring decisions rather than content recommendation, for benefit eligibility rather than product personalisation. The original classification reflected intended use. The actual deployment is in a different risk category. Classification must reflect what the system does, not only what it was designed for.

**Classification treated as fixed at deployment.** Risk classification is not permanent. A system's risk profile can change — as its use expands, as the population it affects grows, as its outputs become more consequential. An organisation that classified its system at deployment and never revisited the classification may be applying an outdated governance standard to a system whose risk profile has evolved.

**Prohibited use cases embedded in otherwise permitted systems.** A system that is not itself prohibited may include functions or use cases that are. An organisation that has not mapped its system's functions against prohibited use case definitions may be operating prohibited capabilities within a system it classified as permitted.

Responsibility for correct classification sits with the deploying organisation. Vendors may provide guidance, but the organisation that deploys the system carries the obligation to ensure it is classified and governed correctly for its specific deployment context.

---

## Where Does It Appear?

Risk classification is relevant in every sector where AI-specific regulatory frameworks apply:

- **Financial services** — classification of credit scoring, fraud detection, and trading systems against sector-specific risk frameworks and AI legislation requirements
- **Healthcare** — classification of diagnostic, triage, and clinical management systems, typically at the highest risk levels given their potential for patient harm
- **Public services** — classification of benefit eligibility, law enforcement, and administrative decision systems, which frequently fall into high-risk categories due to their impact on fundamental rights
- **Employment** — classification of recruitment, screening, and performance management systems, which AI legislation in multiple jurisdictions specifically identifies as high-risk
- **Education** — classification of assessment and admissions systems, where impact on individuals' life opportunities places them in elevated risk categories
- **Critical infrastructure** — classification of systems managing energy, transport, water, and communications, where failure can affect public safety at scale

---

## What It Means in Practice

An organisation that takes risk classification seriously must be able to answer these questions at any time:

- Has the organisation formally assessed the risk classification of each of its automated systems against the applicable regulatory frameworks — and documented that assessment?
- Does the governance applied to each system reflect its classification — are high-risk systems subject to the requirements that classification imposes?
- When systems are updated or deployed in new contexts, is the classification reviewed to ensure it still reflects the system's actual use and impact?
- Does the organisation understand which use cases are prohibited in its jurisdiction — and has it confirmed that none of its systems fall within those prohibitions?
- Is classification reviewed as regulatory frameworks evolve — as new guidance is issued, as new legislation comes into force, as classification criteria are clarified through enforcement?

If those questions cannot be answered, the organisation is governing its automated systems against a risk picture that may not reflect their actual classification — and may be applying inadequate governance to systems whose classification required more.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Risk classification creates proportionate governance requirements — more demanding obligations for more consequential systems | Classification criteria are not always precise, and borderline cases require legal judgment that many organisations do not have in-house |
| The classification framework provides a structured basis for governance investment decisions — high-risk systems warrant more resource | Classification based on intended use may not reflect actual deployment, requiring ongoing reassessment as use evolves |
| Clear prohibited use cases establish bright lines that simplify some compliance decisions | Multiple overlapping classification frameworks — sector regulation, AI legislation, data protection — can produce complex and occasionally inconsistent requirements |
| Classification requirements create external pressure for governance investment that internal risk assessment alone may not generate | The administrative burden of high-risk classification requirements can be significant, particularly for smaller organisations |
| Published classification criteria provide sector-wide clarity about what governance standards apply to different system types | Classification frameworks are relatively new and continue to evolve — today's classification guidance may be superseded as regulatory frameworks mature |

---

## The Law

Risk classification as a formal governance mechanism is the defining structural feature of AI-specific legislation in most major jurisdictions. The EU AI Act established the tiered risk model that has become the template — prohibited systems, high-risk systems, limited-risk systems, and minimal-risk systems — with detailed criteria for classification and defined requirement sets for each tier.

Equivalent frameworks are developing in multiple jurisdictions, drawing on similar architectures and in some cases incorporating the EU model's classifications explicitly. Financial services regulation, healthcare regulation, and public sector governance frameworks in many countries impose classification-equivalent requirements independently of AI-specific legislation.

The practical legal risk is the most direct this series addresses in the legal context: an organisation that deploys a high-risk automated system without meeting high-risk requirements has not made a governance choice. It has committed a legal breach — one that applies to every day the system has operated without adequate governance, from deployment to the present.

---

*LR-13 | Risk Classification | Part of the AI Governance Reference Series*
