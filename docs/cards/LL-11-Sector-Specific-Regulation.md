# LL-11 — Sector-Specific Regulation

> **Every regulated sector has its own standards for how decisions should be made, documented and reviewed. When AI makes those decisions, it must meet those standards — not instead of the sector regulator's requirements, but in addition to them.**

---

## What It Covers

Sector-specific regulation governs the standards, safety requirements and conduct obligations that apply within defined industries — healthcare, financial services, aviation, transport, telecommunications, insurance, energy and others. These frameworks exist independently of AI regulation and predate it substantially. They apply to AI systems deployed within those sectors because the systems are performing functions that the sector's regulatory framework governs.

The obligations are not uniform across sectors. Healthcare regulation addresses patient safety, clinical evidence and device approval. Aviation regulation addresses airworthiness, operational safety and human factors. Financial regulation addresses market conduct, suitability and prudential standards. Each sector's framework reflects the specific risks and public interests it was designed to protect.

What sector-specific regulation shares across all these domains is the expectation that consequential decisions within the sector are made to a defined standard, can be documented and reviewed, and are subject to oversight by a qualified human who carries professional accountability for the outcome.

---

## Why AI Systems Trigger It

AI systems trigger sector-specific regulation whenever they perform functions that are subject to that regulation — not because they are AI systems, but because they are performing regulated functions.

**Healthcare.** AI systems used in clinical decision support, diagnostic imaging analysis, treatment recommendation, patient triage, drug interaction checking or any other clinical function are operating in a heavily regulated environment. Medical device regulation — including the EU Medical Device Regulation, the US FDA's digital health framework, and equivalent national frameworks — applies to software that performs a medical function. An AI diagnostic system is a medical device. It must meet clinical evidence requirements, be subject to post-market surveillance, and its failures must be reported through defined vigilance systems. Healthcare professionals retain legal and ethical accountability for clinical decisions, regardless of the role AI systems play in reaching them.

**Aviation.** AI systems used in flight operations, air traffic management, maintenance scheduling or safety-critical aviation functions must meet airworthiness standards. Aviation safety regulators — the FAA in the US, EASA in Europe — require that safety-critical software be validated to defined standards, that human operators retain the ability to override automated systems, and that failures be reported through mandatory safety reporting systems. The aviation sector's safety culture — including its emphasis on incident reporting, root cause analysis and systemic learning — is a model that AI governance in other sectors is beginning to adopt.

**Financial services.** Covered separately in LL-07. The point here is that financial sector AI systems face not only general financial regulation but also the specific requirements of their subsector — banking regulation, insurance regulation, investment management regulation, payment services regulation — each of which adds specific obligations.

**Telecommunications.** AI systems used in network management, customer service, pricing and fraud detection within telecommunications operate under sector-specific regulation that includes obligations regarding service continuity, consumer protection and lawful interception that apply to the AI systems used in those functions.

**Insurance.** AI systems used in underwriting, claims assessment, pricing and fraud detection within insurance are subject to insurance regulation that includes requirements for actuarial soundness, fairness in pricing, and the ability to explain decisions to policyholders. Regulatory scrutiny of algorithmic insurance pricing — particularly where it produces outcomes that disadvantage protected groups — is active in multiple jurisdictions.

**Professional accountability.** In many regulated sectors — healthcare, law, accountancy, financial advice — professionals carry personal accountability for the decisions they make. AI systems that support or influence those decisions do not transfer that accountability to the algorithm. The professional who relies on an AI recommendation without applying independent judgement may be in breach of their professional obligations if the recommendation was wrong and the professional should have identified that.

---

## Governance Connection

Sector-specific regulation connects Atlas governance concepts to the specialised standards of particular industries, reinforcing the core governance obligations with sector-specific requirements.

**Human oversight** (→ AR-03, CS-13) is a consistent requirement across regulated sectors. Healthcare regulation requires clinical accountability. Aviation requires human authority to override automated systems. Financial regulation requires human supervision of algorithmic processes. The sector-specific obligation reinforces the Atlas governance requirement and specifies the standard to which that oversight must be conducted.

**Records and evidence** (→ RE-01, RE-07, RE-13) are required in all regulated sectors but to different standards. Medical device regulation requires post-market surveillance records. Aviation requires mandatory occurrence reporting. Financial regulation requires transaction records. The sector regulator defines the minimum standard. Governance that meets only the minimum may still be inadequate when incidents are investigated.

**Risk classification** (→ LR-13) in sector-specific contexts is particularly consequential. A medical AI system classified as a Class III medical device faces pre-market approval requirements that fundamentally shape how it can be developed, validated and deployed. Understanding the sector-specific risk classification of an AI system is a prerequisite for understanding its regulatory obligations.

**System documentation** (→ RE-13, SP-09) requirements in regulated sectors are typically more detailed and more prescriptive than general governance frameworks require. Medical device technical files, aviation safety cases, and financial model risk management documentation all specify what must be recorded, how, and for how long.

**Accountability** (→ AR-01) in regulated sectors is reinforced by professional accountability frameworks — the accountability of clinicians, pilots, financial advisers and other professionals whose decisions AI systems support. These professionals cannot delegate their accountability to an AI system. They carry it personally, and they are required to exercise independent professional judgement even when that judgement is informed by automated analysis.

---

## Jurisdictions

Sector-specific regulation is national and, in many areas, regional — with significant variation in requirements between jurisdictions even within the same sector. The EU has developed sector-specific AI guidance for healthcare, finance and other regulated sectors. The FDA in the US has published a digital health action plan addressing AI in medical devices. EASA has published guidance on AI in aviation. Sector regulators in most jurisdictions are actively developing frameworks that address AI within their areas of responsibility.

---

*LL-11 | Sector-Specific Regulation | Legal Landscape Series*
*This card explains legal concepts relevant to AI governance. It does not constitute legal advice.*
