# LL-08 — Cybersecurity and Critical Infrastructure

> **Critical infrastructure regulation exists because some systems failing is not a commercial problem — it is a public safety problem. AI systems embedded in essential services inherit the obligations that apply to those services.**

---

## What It Covers

Cybersecurity and critical infrastructure law governs the security, resilience and continuity of systems that society depends on — energy, water, transport, healthcare, financial services, telecommunications and public administration. It imposes obligations on operators of essential services to manage cyber risks, implement security measures, report incidents, and maintain operational resilience.

Major frameworks include the EU NIS2 Directive, which significantly expanded the scope and obligations of the original NIS Directive, the US Cybersecurity Information Sharing Act and Critical Infrastructure Protection rules enforced across sixteen defined critical infrastructure sectors, the UK Network and Information Systems Regulations, and Singapore's Cybersecurity Act. Most developed jurisdictions have equivalent frameworks at national level, often developed in consultation with national security agencies.

Cybersecurity law in this context is not primarily about data breaches — it is about operational failure. The question it addresses is whether essential services can continue to function when systems are attacked, fail or are compromised.

---

## Why AI Systems Trigger It

AI systems trigger critical infrastructure and cybersecurity law in two primary ways: when they are deployed within essential service organisations, and when they themselves constitute infrastructure that others depend on.

**AI deployed within essential services.** An AI system used by an energy grid operator, a hospital network, a water treatment facility, a financial market operator or a public transport authority is deployed within critical infrastructure. The cybersecurity and resilience obligations that apply to the organisation's technology systems apply to the AI system. Those obligations include risk assessment, security by design, incident detection and response, business continuity planning, and regulatory reporting of significant incidents.

**AI as dependency-creating infrastructure.** AI systems — particularly foundation models and large-scale AI platforms — are increasingly infrastructure that other organisations depend on. A hospital that deploys clinical decision support AI, or a financial institution that uses a third-party AI platform for core operations, has created a dependency. When the AI system fails, their operations fail. Regulators are paying increasing attention to the concentration risk created when multiple essential service operators depend on the same AI infrastructure.

**Adversarial vulnerability.** AI systems have specific adversarial vulnerabilities that traditional software does not. Adversarial inputs — carefully constructed data designed to cause AI systems to fail in specific ways — can be used to manipulate AI-controlled systems in critical infrastructure contexts. AI systems used in security-sensitive applications face threat vectors that require specific risk assessment and mitigation.

**Incident reporting obligations.** NIS2 and equivalent frameworks impose mandatory reporting obligations for significant cybersecurity incidents affecting essential services. An AI system failure that disrupts essential service operations is a reportable incident. Organisations that experience such failures and do not report them face regulatory consequences that add to the operational impact.

**Supply chain security.** Critical infrastructure operators are increasingly required to assess the security of their technology supply chains — including AI model providers, cloud infrastructure providers, and software vendors. An AI system that incorporates components from suppliers with inadequate security practices creates supply chain risk that the deploying organisation is required to address.

---

## Governance Connection

Cybersecurity and critical infrastructure law connects Atlas governance concepts to the specific obligations that apply when AI systems are part of essential services.

**System documentation** (→ RE-13, SP-09) is a security and regulatory requirement. Understanding what a system does, what it depends on, and what its failure modes are is a prerequisite for both security risk management and regulatory compliance. Organisations that cannot document their AI systems cannot adequately assess their security risks.

**System shutdown** (→ CS-11, GQ-05) is a critical capability in essential service contexts. The ability to take a system offline — safely, quickly, without cascading failure — is a resilience requirement, not just a governance aspiration. Regulators expect that this capability exists and has been tested.

**Monitoring** (→ CS-01, CS-05, CS-07) in critical infrastructure contexts must be capable of detecting not just performance degradation but adversarial manipulation. Anomaly detection capable of identifying unusual system behaviour — behaviour that might indicate compromise rather than mere malfunction — is a security requirement.

**Third-party risk** (→ SP-18, AR-08) is specifically addressed in frameworks like DORA and NIS2. The obligations apply to the essential service operator regardless of how much of its technology is supplied by third parties. The operator cannot transfer its resilience obligations to a cloud provider or AI model vendor.

**Incident records** (→ RE-04, RE-05, RE-06) are regulatory requirements in critical infrastructure contexts. Incident reports submitted to regulators must be accurate and based on documented evidence of what occurred. The records made in the immediate aftermath of an incident are the foundation of regulatory reporting, root cause analysis, and any subsequent legal proceedings.

---

## Jurisdictions

Critical infrastructure and cybersecurity regulation applies in all major jurisdictions. The EU NIS2 Directive came into force in 2023 and significantly expanded its predecessor's scope. The UK is reviewing its NIS Regulations framework. The US applies sector-specific requirements across sixteen critical infrastructure sectors. Singapore's Cybersecurity Act provides a model for Asia-Pacific jurisdictions. Critical infrastructure designation and the specific obligations attached to it vary by jurisdiction and sector.

---

*LL-08 | Cybersecurity and Critical Infrastructure | Legal Landscape Series*
*This card explains legal concepts relevant to AI governance. It does not constitute legal advice.*
