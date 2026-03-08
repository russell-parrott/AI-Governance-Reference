# JX-03 — China

> **China has built one of the most detailed AI regulatory frameworks in the world — layered, specific, and enforced. It operates on different principles from Western frameworks but imposes comparable governance demands on organisations that deploy AI systems within its jurisdiction.**

---

## The Framework

China's approach to AI regulation is sector-by-sector and use-case-specific rather than a single comprehensive statute. Multiple regulations have been enacted since 2021, each addressing a specific type of AI application. Together they constitute a detailed and enforceable framework.

The major instruments currently in force include:

**Algorithmic Recommendation Regulation (2022)** — governs systems that use algorithms to recommend content, goods, services or information to users. Requires transparency about recommendation logic, gives users rights to opt out of personalised recommendations, and prohibits using algorithms to exploit user behaviour or engage in discriminatory pricing.

**Deep Synthesis Regulation (2022)** — governs synthetic media including deepfakes, AI-generated images, audio and video. Requires labelling of synthetic content and prohibits use for deception or harm.

**Generative AI Measures (2023)** — governs generative AI services offered to users in China, including large language models. Requires content safety assessments before deployment, security evaluations for services with significant public reach, and ongoing content monitoring.

**Personal Information Protection Law (PIPL, 2021)** — China's primary data protection law, broadly equivalent in structure to the GDPR. Governs how personal data is collected, processed and used by AI systems. Includes provisions on automated decision-making and individual rights.

**Cybersecurity Law and Data Security Law** — establish the broader framework within which AI systems must operate, including data localisation requirements and critical information infrastructure protections.

A comprehensive AI Law is under development and expected to provide an overarching framework consolidating and extending existing instruments.

---

## Key Regulators

**Cyberspace Administration of China (CAC)** — the primary regulator for internet-related AI services, including algorithmic recommendations, generative AI and deep synthesis. Has enforcement authority under most of the major AI-specific regulations.

**Ministry of Industry and Information Technology (MIIT)** — industrial AI, AI in manufacturing and industrial applications.

**National Financial Regulatory Administration (NFRA)** — AI in financial services, banking and insurance.

**National Health Commission** — AI in healthcare applications.

**State Administration for Market Regulation (SAMR)** — competition, consumer protection, algorithmic pricing.

---

## What Triggers Obligations

**Algorithmic recommendations** trigger the Algorithmic Recommendation Regulation whenever a system uses user data to personalise content or product recommendations. Organisations must disclose that recommendations are personalised, allow users to understand the main factors driving recommendations, and provide options to adjust or disable personalisation.

**Generative AI services** trigger the Generative AI Measures when deployed for public-facing use in China. Pre-deployment security assessments are required for services with significant reach. Content must comply with Chinese law and socialist core values — a requirement with no direct equivalent in Western frameworks.

**Personal data processing** triggers PIPL obligations. Automated decision-making using personal data requires that individuals be informed, that they have rights to explanation and correction, and that decisions with significant effects on individuals allow for human review.

**Synthetic media** triggers the Deep Synthesis Regulation whenever AI-generated or AI-manipulated audio, video or images are produced or distributed. Labelling obligations apply.

**Critical information infrastructure** — AI systems embedded in designated critical infrastructure face additional security assessment requirements under the Cybersecurity Law.

---

## Governance Connection

China's regulatory framework imposes governance obligations that map directly to Atlas concepts, though the enforcement context and underlying values differ from Western frameworks.

**Transparency** (→ SP-15, GV-N05) is a specific legal requirement under the Algorithmic Recommendation Regulation. Users must be informed that recommendations are algorithmic and given meaningful information about the logic applied. Opacity is not a permissible design choice for consumer-facing recommendation systems.

**Human oversight** (→ AR-03, CS-13) is required under PIPL for automated decisions with significant effects on individuals. The right to human review of algorithmic decisions is a legal right, not a governance aspiration.

**Explainability** (→ SP-16, LL-02) is required under PIPL. Individuals subject to automated decisions have the right to an explanation and the right to contest decisions. Organisations must be able to produce that explanation for specific decisions on demand.

**Records** (→ RE-07, RE-13) are required under PIPL and the Cybersecurity Law. Processing records must be maintained and made available to regulators. The CAC has broad powers to demand documentation and conduct inspections.

**System documentation** (→ RE-13, SP-09) is specifically required under the Generative AI Measures. Security assessments must be documented and submitted to the CAC before deployment. Post-deployment monitoring records are also required.

**Third-party risk** (→ SP-18, AR-08) is particularly significant in China because PIPL data localisation requirements constrain where data processed by AI systems can be stored and transferred. Organisations using cross-border AI services face specific compliance obligations.

---

*JX-03 | China | Jurisdiction Series*
*This card explains legal and regulatory concepts relevant to AI governance. It does not constitute legal advice.*
