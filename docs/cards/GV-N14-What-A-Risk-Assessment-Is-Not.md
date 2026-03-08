# GV-N14 — What A Risk Assessment Is Not

> **The risk has been assessed. Now check: was that a one-time exercise — and does the organisation understand why that is not enough?**

---

## What It Is Not

A risk assessment is not a permanent record of risk. It is not a guarantee that identified risks have been addressed, a finding that unidentified risks do not exist, or a document that remains accurate as the system, the organisation, and the environment around them change. It is not completed once and then relied upon indefinitely. It is not a defence against liability for risks that materialised after the assessment was conducted.

A risk assessment, properly understood, is a structured examination of the risks present at a specific point in time — what they are, how likely they are to materialise, what their consequences would be, and what controls are in place to address them. It is a snapshot. The risks it identifies are the risks that were visible, understood, and correctly characterised at the moment of assessment. The risks it does not identify may not have existed yet — or may have existed but not been seen.

What organisations most often confuse with a risk assessment is one or more of the following:

**A permanent statement of risk.** A risk assessment conducted at deployment is treated as the definitive account of the risks the system presents — referred to in governance documentation, cited in regulatory responses, and relied upon as evidence of risk management years after it was completed. The system has been updated. The deployment context has changed. New failure modes have been identified in similar systems elsewhere. The risk assessment describes a risk landscape that no longer fully exists.

**A guarantee that identified risks are managed.** A risk assessment identifies risks and recommends controls. The organisation notes the recommendations. It does not implement all of them — some are deprioritised, some are resource-constrained, some are accepted. The risk assessment is complete. The risks it identified remain present, in some cases unmitigated. The completion of the assessment has been confused with the management of the risks it found.

**A finding that unidentified risks are absent.** A risk assessment finds the risks that the assessment methodology, the assessors' knowledge, and the available information allow it to find. Risks outside that perimeter are not found — not because they do not exist, but because the assessment did not reach them. An assessment that identifies ten risks has not established that eleven risks do not exist. It has established that ten were found.

**A one-time exercise rather than a continuous obligation.** Risk is dynamic. Automated systems change. The populations they affect change. The regulatory environment changes. The threat landscape changes. Organisational contexts change. A risk that was low probability at deployment may become high probability as the system's use expands. A risk that was not identified at deployment may become visible as the system encounters cases its training did not represent. Risk assessment that was adequate at a point in time becomes inadequate as that point recedes.

---

## Why Confusion Matters

When a risk assessment is treated as a completed exercise rather than a continuous obligation, the organisation's understanding of its risk position degrades silently. The assessment document remains. The risk landscape it described evolves. The gap between the two grows — invisibly, until something the assessment did not identify, or identified and did not adequately address, produces a failure.

The governance consequence is direct. An organisation that conducted a thorough risk assessment at deployment and relied on it for three years without reassessment has not managed risk for three years. It has managed the risk it understood three years ago. The risk it faces today is a different and larger thing — shaped by system changes, by deployment experience, by the failures of similar systems elsewhere, and by a regulatory environment that has moved on.

---

## Where Confusion Appears

**Deployment risk assessments cited in incident investigations years later.** An automated system causes harm. The investigation examines the organisation's risk management. The organisation produces the risk assessment conducted at deployment. The assessment is four years old, predates three significant system updates, and does not reference risk categories that have emerged in the sector since it was written. The organisation presents it as evidence of risk management. The investigation treats it as evidence of when risk management last occurred.

**Risk registers that record risks without tracking their evolution.** An organisation maintains a risk register that lists the risks identified in the original assessment, updated occasionally when a new risk is formally identified. The register does not reflect the gradual change in existing risks — the probability shifts, the control deterioration, the emergence of new risk dimensions — that occurs between formal reassessments. The register looks current. The risk picture it describes is not.

**Risk assessments scoped to avoid uncomfortable findings.** A risk assessment is conducted with a scope that excludes the areas of greatest uncertainty or concern — framed to assess technical performance while excluding fairness impacts, or to assess operational risks while excluding regulatory ones. The assessment is completed and finds what it was scoped to find. The risks outside the scope remain unassessed.

**Residual risk accepted at deployment treated as permanently acceptable.** A risk assessment identifies risks that the organisation accepts — residual risks that remain after controls are applied and that the organisation has decided to carry. Those acceptances are made in the context of the risk profile at the time of assessment. As the context changes, the accepted risks may grow — in probability, in consequence, or in regulatory significance — while the organisation continues to treat them as acceptable because they were accepted at deployment.

---

## How To Tell The Difference

Five questions that distinguish genuine risk management from risk assessment:

- Is there a defined schedule for reassessing the risks associated with each automated system — and is that schedule calibrated to the pace at which those risks can change?
- When the system changes significantly — through updates, scope expansion, or new deployment contexts — is a risk reassessment triggered rather than assumed to be unnecessary?
- Does the organisation monitor for risk developments in the environment — failures in similar systems, regulatory changes, emerging research on AI risks — and incorporate that intelligence into its risk picture?
- Are risks that were accepted at a previous assessment reviewed periodically to confirm that the acceptance remains appropriate — or are historic acceptances treated as permanent?
- When a risk materialises, does the organisation ask whether the risk assessment should have identified it — and use that question to improve both the assessment methodology and the reassessment schedule?

---

| Common Substitutes | What Risk Assessment Actually Requires |
|---|---|
| A deployment-time assessment relied upon indefinitely | Periodic reassessment calibrated to the pace of change in the system and its environment |
| A completed exercise that demonstrates risk was considered | An ongoing activity that reflects the current risk picture |
| A finding that unidentified risks are absent | A structured examination of identifiable risks — whose scope defines what was found |
| Accepted risks treated as permanently acceptable | Regular review of risk acceptances against the current context |
| A document that satisfies a governance requirement | A genuine understanding of the risks present at this moment, not at the moment of last assessment |

---

## The Law

Regulatory frameworks for automated systems increasingly impose ongoing risk management obligations — not one-time assessment requirements. Data protection impact assessments, model risk reviews, and AI conformity assessments are all subject to review and update requirements that reflect the dynamic nature of risk.

Regulators examining governance failures consistently find that risk assessments were conducted at deployment and not subsequently updated — and treat the failure to maintain a current risk picture as itself a governance failure, distinct from whatever failure the incident represents.

AI-specific legislation is advancing explicit ongoing risk management requirements for high-risk systems — requiring not just initial assessment but continuous monitoring, periodic review, and documented reassessment when defined triggers are met. The one-time assessment model is inconsistent with the governance obligations these frameworks impose.

The practical legal risk is direct: a risk assessment conducted at deployment and not subsequently updated is evidence of the organisation's risk understanding at one moment in time. It is not evidence of risk management. Risk management is the continuous activity of understanding, monitoring, and addressing risk as it exists and evolves. A document from three years ago is not that activity. It is the record of when that activity last occurred — and in a governance investigation, that date matters as much as the document's content.

---

*GV-N14 | What A Risk Assessment Is Not | Part of the AI Governance Reference Series*
