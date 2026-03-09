# RE-13 — System Documentation

> **Governance discussions refer to it constantly. This card explains the different kinds of documentation, what each one is for, and why having one does not mean you have the others.**

---

## What Is It?

System documentation is the collective term for the written records that describe an automated system — what it is, how it was built, how it operates, and how it is governed. It is not a single document. It is a family of records, each serving a different purpose, directed at a different audience, and required by a different set of obligations.

Three categories are most commonly referred to in governance discussions, and most commonly confused with each other:

**Internal operational records** are the records the organisation creates and maintains for its own governance purposes — decision logs, audit trails, incident reports, monitoring records, review minutes, and accountability documentation. These records exist to support oversight, enable investigation, and demonstrate that governance activities occurred. Their primary audience is internal — the people responsible for governing the system — though they must be producible to regulators and courts when required.

**Technical documentation** describes the system itself — how it was designed, what data it was trained on, how it was tested, what its performance characteristics are, what its known limitations are, and how it is intended to be used. Technical documentation is produced primarily by the people who built the system — the development team or the vendor — and is directed at the people responsible for deploying and governing it, as well as at regulators who need to assess the system's adequacy.

**Regulatory documentation** is the documentation required by specific legal or regulatory frameworks — conformity assessments, data protection impact assessments, model risk management documentation, and the records that must be maintained and produced under defined legal obligations. Regulatory documentation may draw on and reference both internal records and technical documentation, but it is structured around regulatory requirements rather than operational or technical ones.

---

## Why Does It Matter?

Each category serves a purpose the others cannot fully substitute for. Internal records demonstrate that governance happened — that monitoring occurred, that reviews were conducted, that accountability was exercised. Technical documentation establishes what the system is and whether it was adequate for its purpose. Regulatory documentation provides the framework that connects both to legal obligations.

An organisation that has comprehensive technical documentation but inadequate internal records can describe its system in detail but cannot demonstrate that it governed it. One that has thorough internal records but inadequate technical documentation can show that governance activities occurred but cannot explain what those activities were governing. One that has both but has not translated them into the required regulatory documentation may be unable to satisfy legal obligations that require records in a defined form.

The gaps between categories are where governance failures hide. Documentation that looks comprehensive from one direction is frequently incomplete from another.

---

## What's the Real Risk?

**Vendor technical documentation accepted as the organisation's own documentation.** An organisation that deploys a vendor's system and relies on the vendor's technical documentation to satisfy its own documentation obligations has documentation of what the vendor built — not documentation of what the organisation deployed, in which context, for which purposes, with which governance arrangements. Those are different things.

**Internal records that document activity without documenting adequacy.** Records that show monitoring occurred, reviews were held, and incidents were reported do not establish that those activities were conducted with appropriate rigour. An internal record that documents a review that was cursory, a monitoring process that was inadequate, or an incident response that missed the significance of what happened is a record that demonstrates governance activity occurred — not that it was adequate.

**Regulatory documentation that references underlying records that do not exist.** A conformity assessment or data protection impact assessment that references technical documentation and internal records assumes those underlying documents exist in the form referenced. Where they do not — where the assessment was produced without the supporting records it implies — the regulatory documentation is inaccurate, and the compliance it appears to establish is not real.

**Documentation that was accurate at deployment but has not been maintained.** System documentation becomes outdated. Systems are updated. Governance arrangements change. Regulatory requirements evolve. Documentation that accurately described the system and its governance at deployment degrades in accuracy as time passes without update. The documentation exists. It no longer reflects the system it purports to describe.

---

## Where Does It Appear?

System documentation obligations and expectations arise across all dimensions of automated system governance:

- **Technical documentation** — produced at development, reviewed at deployment, updated as systems change, and produced to regulators under AI legislation, sector regulation, and conformity assessment frameworks
- **Internal operational records** — maintained continuously through system operation, produced in response to investigations, regulatory examinations, and legal proceedings
- **Regulatory documentation** — produced in compliance with specific legal requirements including data protection impact assessments, conformity assessments, model risk documentation, and records required under sector regulation
- **Incident documentation** — a category that spans all three, recording what happened, what the system was doing, and what the governance response was
- **Vendor and third-party documentation** — the documentation provided by vendors and third parties that the deploying organisation must assess, maintain, and supplement with its own records

---

## What It Means in Practice

An organisation that takes system documentation seriously must be able to answer these questions at any time:

- Does the organisation hold, or have reliable access to, technical documentation adequate to understand what each of its automated systems is, how it works, and what its limitations are?
- Are internal operational records maintained at a level of completeness and accuracy that supports governance, investigation, and regulatory production?
- Has the organisation identified its regulatory documentation obligations and ensured that the required documents exist in the required form?
- When systems change, are all three categories of documentation updated to reflect the change — not just the category most immediately affected?
- Is the organisation's documentation position assessed periodically against its actual obligations — rather than assumed to be adequate because some documentation exists?

If those questions cannot be answered, the organisation's documentation is likely complete in some dimensions and deficient in others — and does not know which is which. Documentation gaps are invisible until they are consequential.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Comprehensive system documentation provides the evidentiary foundation for governance, investigation, and regulatory accountability | Maintaining three categories of documentation simultaneously requires significant and ongoing resource investment |
| Technical documentation enables informed governance — organisations that understand their systems can govern them | Documentation maintenance is often neglected after deployment, producing records that become progressively less accurate |
| Regulatory documentation requirements create external structure for documentation investment decisions | Vendor documentation varies widely in quality and completeness, creating variable foundations for deploying organisations |
| Well-maintained documentation demonstrates governance maturity to regulators in ways that assertions cannot | The volume of documentation required for comprehensive compliance can become an end in itself, displacing the governance it is meant to support |
| Consistent documentation across all three categories ensures that governance, technical, and regulatory pictures are aligned | Different documentation standards across jurisdictions create complexity for organisations operating internationally |

---

## The Law

Documentation requirements for automated systems exist across every regulatory framework that governs them — and the requirements are specific, enforceable, and expanding.

Data protection frameworks require records of processing activities, impact assessments, and responses to individual rights requests. Financial services regulation requires model documentation, validation records, and governance decision records. AI-specific legislation requires technical documentation of defined scope, conformity assessment records, and post-market monitoring records — all available to regulatory authorities on demand.

The consistent legal theme across all frameworks is that documentation must exist before it is requested — it cannot be produced in response to a regulatory inquiry if it was not created and maintained during the system's operation. Documentation produced retrospectively is not the same as documentation created contemporaneously. Regulators know the difference.

The practical legal risk is direct: an organisation whose documentation is incomplete, inaccurate, or unavailable when a regulator requests it has not just a documentation problem. It has a compliance problem — because the documentation was required, and its absence is itself a breach of the obligations that required it.

---

*RE-13 | System Documentation | Part of the AI Governance Reference Series*
