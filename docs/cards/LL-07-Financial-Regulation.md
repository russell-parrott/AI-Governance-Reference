# LL-07 — Financial Regulation

> **Financial services regulation was built around the principle that decisions affecting people's money must be explainable, auditable and made by someone who can be held responsible. AI systems that make those decisions inherit those obligations entirely.**

---

## What It Covers

Financial regulation governs organisations that provide financial services — banking, lending, investment management, insurance, trading, payment services and financial advice. It sets standards for how financial decisions are made, documented and supervised, and it establishes conduct obligations that apply to the systems and processes through which those decisions are delivered.

Major frameworks include the EU Markets in Financial Instruments Directive (MiFID II) and Digital Operational Resilience Act (DORA), the UK Financial Conduct Authority Handbook, US Securities and Exchange Commission regulations and federal banking rules, and equivalent frameworks in every major financial jurisdiction. These frameworks are administered by specialist financial regulators with extensive investigation and enforcement powers.

Financial regulation is among the most developed of the frameworks that AI systems encounter. Financial services were early adopters of algorithmic decision-making, and regulatory frameworks have evolved over several decades to address it. The obligations that apply to AI systems in financial services are therefore more detailed, more operationally demanding and more actively enforced than in most other sectors.

---

## Why AI Systems Trigger It

AI systems trigger financial regulation whenever they are used in the delivery of financial services — a scope that includes credit decisions, trading, investment recommendations, risk assessment, fraud detection, insurance pricing, and a very large range of customer-facing and back-office processes.

**Credit and lending decisions.** AI systems used to assess creditworthiness, set interest rates, approve or decline loan applications, or determine credit limits are making regulated financial decisions. These decisions must meet conduct standards, be explainable to applicants, not discriminate on protected grounds, and be subject to human oversight and review. In most jurisdictions, adverse credit decisions must be accompanied by an explanation that the applicant can act on.

**Algorithmic trading.** AI systems that execute trading decisions — including high-frequency trading systems, algorithmic order routing, and AI-driven portfolio management — are subject to market conduct rules, circuit breaker requirements, and systems and controls obligations. Regulators require that automated trading systems operate within defined parameters, that humans can intervene, and that records of algorithmic decisions be maintained.

**Investment advice and suitability.** AI systems that provide investment recommendations — including robo-advisers and personalised portfolio tools — must meet suitability obligations. The recommendation must be appropriate for the individual customer. The basis for the recommendation must be documented. The system must be able to demonstrate that its outputs met the applicable conduct standard in each case.

**Operational resilience.** Financial regulation increasingly addresses operational resilience — the ability of financial services organisations to continue operating when systems fail. The EU's Digital Operational Resilience Act (DORA) imposes specific requirements on financial organisations' technology systems, including AI systems, covering risk management, testing, incident reporting, and third-party technology provider oversight. Similar requirements exist in most major financial jurisdictions.

**Model risk management.** Banking regulators have developed detailed model risk management frameworks — requirements for validating, monitoring and governing the quantitative models that banks and financial institutions use in risk assessment, pricing and decision-making. AI systems used in these contexts are subject to model risk management obligations that require documentation, validation, ongoing monitoring, and governance of model changes.

---

## Governance Connection

Financial regulation connects directly to several Atlas governance concepts — particularly those concerning explainability, records, human oversight and accountability.

**Explainability** (→ SP-16, RE-10) is a legal requirement in financial services. The obligation to explain credit decisions, investment recommendations and other financial decisions to affected individuals is a conduct standard, not an aspiration. Organisations that cannot produce individual-level explanations of specific decisions are in breach of conduct obligations.

**Audit trails** (→ RE-01, RE-03) are central to financial regulation. Regulators require that the basis for financial decisions be recorded and reconstructable. MiFID II, for example, requires that records of investment decisions be maintained for specified periods and be available for regulatory inspection. Trading records must be complete enough to allow transaction reconstruction.

**Human oversight** (→ AR-03, CS-13) is an explicit requirement in financial services AI governance. Regulators expect that automated systems operate within human-defined parameters, that humans can intervene, and that oversight is genuine rather than nominal. The FCA and other regulators have published expectations for the governance of AI in financial services that map closely to Atlas oversight concepts.

**Third-party risk** (→ SP-18, AR-08) is an active regulatory focus under frameworks like DORA. Financial organisations that rely on third-party technology providers — including AI model providers — must conduct due diligence, maintain contractual protections, and be able to demonstrate oversight of those relationships. The regulator holds the financial organisation accountable for what its technology providers do.

**Accountability** (→ AR-01, AR-06) in financial services is reinforced by individual accountability regimes — the UK Senior Managers and Certification Regime (SMCR) and equivalent frameworks — that require named senior individuals to be accountable for specific business areas, including the use of AI systems. An AI system used in financial services must have an identified, accountable senior individual responsible for it.

---

## Jurisdictions

Financial regulation applies in all jurisdictions in which financial services are provided. The EU MiFID II and DORA frameworks apply across the EU. The UK FCA has published specific guidance on AI governance expectations. US financial regulation is fragmented across federal and state bodies and by type of financial activity. The Basel Committee on Banking Supervision has issued guidance on AI and machine learning in credit risk assessment that influences bank regulatory frameworks globally.

---

*LL-07 | Financial Regulation | Legal Landscape Series*
*This card explains legal concepts relevant to AI governance. It does not constitute legal advice.*
