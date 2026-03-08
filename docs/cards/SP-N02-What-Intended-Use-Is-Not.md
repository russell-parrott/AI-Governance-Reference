# SP-N02 — What Intended Use Is Not

> **The system has a purpose. Now check: was that purpose actually defined — or just assumed?**

---

## What It Is Not

Intended use is not a product specification. It is not a capability statement. It is not a marketing claim, a sales presentation, a vendor brochure, or a list of features the system can perform. None of these things defines intended use in the governance sense — and confusing them with it is one of the most common reasons automated systems end up deployed in contexts they were never designed for.

Intended use, properly understood, is the documented, authorised scope of an automated system's deployment — the specific decisions it is permitted to make, about which populations, in which contexts, using which data, within which limits. It is the definition of what the system is for, precise enough that anyone operating it can determine whether a given use falls within scope or outside it.

What organisations most often have instead is one or more of the following:

**Capability statements treated as use definitions.** A vendor demonstrates that a system can assess creditworthiness, identify fraud patterns, or screen job applications. The organisation deploys it to do those things. What the system can do and what it is authorised to do in a specific context are different questions. Capability describes possibility. Intended use describes permission — and permission requires a documented, considered decision about scope, not an assumption that whatever the system can do, it may do.

**Marketing claims as deployment justification.** A vendor markets a system as suitable for hiring decisions. The organisation deploys it for hiring decisions. The marketing claim is not a governance definition of intended use. It is a commercial statement made by a party with an interest in the system being purchased. Intended use requires the deploying organisation to make its own documented assessment of what the system is appropriate for — not to adopt the vendor's characterisation.

**Scope that was implicit but never stated.** An organisation deploys a system for a defined purpose and never formally documents what that purpose is. The scope is understood — or believed to be understood — by the people involved at deployment. As time passes, personnel changes, and the system's use expands or shifts, the implicit scope expands with it. When a question arises about whether a specific use was within scope, there is no document to consult. The answer is whatever each person assumed.

**A scope so broad it excludes nothing.** Intended use definitions that describe the system as suitable for "decision support across the organisation" or "risk assessment in financial services" have not defined scope. They have described a category. Genuine intended use is specific enough to make it possible to identify uses that fall outside it.

---

## Why Confusion Matters

When intended use is not properly defined, the system operates without a boundary. Uses that were never assessed, never validated, and never authorised accumulate over time — each one justified by the assumption that if the system can do it and nobody has said it cannot, it must be within scope.

The governance consequences are direct. A system deployed outside its intended use may be operating on populations its training data did not represent, in contexts its validation did not cover, producing outputs whose reliability in that context was never tested. The harm that results is not a system failure. It is a governance failure — the failure to define and enforce the boundary that would have prevented a use the system was not fit for.

When regulators or courts ask whether a system was used appropriately, the first question is what it was authorised for. An organisation that cannot answer that question with a document — a specific, dated, approved statement of intended use — is in a weak position regardless of how the system performed.

---

## Where Confusion Appears

**Scope creep in deployment.** A system deployed for one purpose is gradually extended to adjacent ones — each extension small enough to seem reasonable, none of them separately authorised. By the time the accumulated scope is examined, the system is being used for purposes its original deployment never contemplated.

**Vendor system deployments.** An organisation buys a system and relies on the vendor's documentation to define what it is for. The vendor's documentation describes capability and typical use cases. It does not constitute a governance decision by the deploying organisation about what this system is authorised to do in its specific context.

**Incident investigations.** An incident reveals that a system was used in a context where its outputs were unreliable. The investigation asks whether that use was within the system's intended scope. The organisation cannot produce a document defining that scope. The investigation proceeds on the basis that scope was undefined — which is the finding.

**Regulatory audits of high-risk systems.** A regulator examining a high-risk automated system asks for the intended use definition. The organisation produces the vendor's product description. The regulator asks for the organisation's own documented assessment of what the system is authorised to do in its deployment context. That document does not exist.

---

## How To Tell The Difference

Five questions that distinguish genuine intended use definition from its substitutes:

- Is there a document — produced by the deploying organisation, not the vendor — that defines specifically what this system is authorised to do, in which contexts, for which populations, and within which limits?
- Is that document dated and approved by someone with the authority to make that determination?
- Is the definition specific enough that it would be possible to identify a use that falls outside it — or is it broad enough to encompass almost anything the system might be asked to do?
- When the system's use has expanded since deployment, has each expansion been assessed and authorised against the original scope definition?
- Do the people operating the system know what its intended use is, and do they have a basis for identifying when a use falls outside it?

---

| Common Substitutes | What Intended Use Actually Requires |
|---|---|
| The vendor's product description | The deploying organisation's own documented assessment of authorised scope |
| A capability demonstration | A governance decision about what the system is permitted to do in this context |
| Marketing materials describing typical use cases | A specific, dated, approved definition narrow enough to have an outside |
| An implicit understanding among the original deployment team | A document that survives personnel change and scope creep |
| "We use it for X" as a verbal description | A written scope definition against which actual use can be assessed |

---

## The Law

Regulatory frameworks for automated systems increasingly require that deploying organisations define and document the intended use of their systems — not as a description of what the vendor designed it for, but as the organisation's own authorised scope for deployment.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data be limited to specified, explicit purposes. That requirement presupposes a definition of those purposes precise enough to make "limited to" meaningful. A scope so broad it excludes nothing does not satisfy the purpose limitation principle.

AI-specific legislation is advancing explicit intended use documentation requirements for high-risk systems — treating the absence of a clear, organisation-defined scope as itself a governance failure. Some frameworks specifically distinguish between the vendor's intended use and the deployer's — placing an independent obligation on the deploying organisation to define and document what the system is authorised for in its specific context.

The practical legal risk is direct: a system used outside its defined intended use is a system whose governance was inadequate from the moment that use began. And a system whose intended use was never defined has been operating outside its governance boundary since its first day of operation — because a boundary that was never drawn cannot be respected.

---

*SP-N02 | What Intended Use Is Not | Part of the AI Governance Reference Series*
