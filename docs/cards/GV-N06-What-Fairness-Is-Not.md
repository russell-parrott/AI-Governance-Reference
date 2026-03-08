# GV-N06 — What Fairness Is Not

> **The system treats everyone the same. Now check: is sameness actually fairness — or has fairness been reduced to a formula that misses the point?**

---

## What It Is Not

Fairness is not equal treatment. It is not identical process, uniform criteria, or consistent application of the same rules to every individual regardless of their circumstances. It is not achieved by removing human judgment from decisions to eliminate inconsistency, by applying the same model to every case, or by being able to demonstrate that the system does not distinguish between people on the basis of protected characteristics.

Fairness, properly understood, is the condition in which the process and outcome of an automated decision are appropriate to the individual's actual circumstances — in which like cases are treated alike, but different cases are treated differently in the ways their differences warrant.

What organisations most often have instead is one or more of the following:

**Formal equality substituted for substantive fairness.** A system applies the same criteria to every applicant, every claimant, every individual it assesses. No exceptions are made. No individual circumstances are considered. The process is identical. The outcomes systematically disadvantage people whose circumstances the criteria were not designed to reflect — people whose employment history looks unconventional because they provided unpaid care, whose creditworthiness looks weak because they are recently arrived in a country, whose risk profile looks elevated because of where they live rather than what they have done. The system treated them equally. It did not treat them fairly.

**Statistical fairness at group level presented as individual fairness.** A system is assessed for fairness by examining whether its outcomes are distributed proportionately across demographic groups. The assessment finds no statistically significant disparity. The system is deemed fair. The individual within one of those groups who received an incorrect decision because their circumstances were not represented in the training data has not been treated fairly — even if, in aggregate, people who share their demographic characteristics fared no worse than others.

**Bias removal presented as fairness achievement.** An organisation invests in identifying and removing bias from its automated system. Protected characteristics are not used as inputs. Proxy variables are examined and addressed. The system is assessed as unbiased. Bias removal is a necessary condition for fairness — it is not a sufficient one. A system can be unbiased in the technical sense while producing outcomes that are substantively unfair to individuals whose circumstances fall outside the patterns on which the system was trained.

**Consistency valued above correctness.** A system produces consistent decisions — the same inputs reliably produce the same outputs. Consistency is a property of automated systems that is genuinely valuable. It is not the same as fairness. A system that consistently refuses credit to people with short employment histories, regardless of the reasons for that history, is consistent. It may also be unfair to the person whose short employment history reflects time spent caring for a seriously ill family member.

---

## Why Confusion Matters

When fairness is reduced to equal treatment or statistical parity, the more demanding question — whether the process and outcome were appropriate to this individual's actual circumstances — is never asked. The organisation has a fairness metric. It may not have fair outcomes.

The consequences fall disproportionately on the people the system was least equipped to assess — those whose circumstances are underrepresented in training data, whose situations are complex, whose lives do not fit the patterns the system was designed to recognise. Equal treatment of unequal circumstances is not a neutral governance outcome. It is a choice to treat the system's limitations as the individual's problem.

When regulators and courts examine fairness, the question is not only whether the system applied the same rules to everyone. It is whether the rules were appropriate, whether the outcomes were proportionate, and whether the individuals affected had any means of bringing their individual circumstances to bear on a decision that affected them significantly.

---

## Where Confusion Appears

**Equality impact assessments that examine group outcomes only.** An assessment examines whether the system produces disparate outcomes across protected characteristic groups. It finds no significant disparity. The assessment concludes that the system is fair. The individual-level fairness question — whether the system was appropriate for this person's specific circumstances — was never examined.

**Fairness certifications based on technical bias metrics.** A system is certified as fair on the basis of technical metrics — equalised odds, demographic parity, calibration. The certification is meaningful within its scope. It is not a statement that the system produces fair outcomes for every individual in every circumstance. Organisations that present technical fairness certification as a comprehensive fairness guarantee are representing more than the certification established.

**Automated systems deployed in contexts requiring individual assessment where only standardised assessment is delivered.** Some decisions — benefit eligibility, credit, employment — carry legal or ethical requirements for individual assessment that standardised automated processes cannot meet. Applying a uniform automated process to decisions that require consideration of individual circumstances is not fair treatment. It is the substitution of convenience for appropriateness.

**Fairness framed as a technical problem with a technical solution.** Organisations that treat fairness as an engineering challenge — to be solved through better training data, more sophisticated models, or improved bias detection — may address some dimensions of unfairness while remaining blind to the ones that cannot be resolved at the technical level. Some fairness questions are not technical. They are substantive — about what weight to give different kinds of circumstance, what the appropriate criteria are, and who should be making that judgment.

---

## How To Tell The Difference

Five questions that distinguish genuine fairness from its substitutes:

- Does the organisation's fairness assessment examine individual-level outcomes — whether the process was appropriate for specific individuals — as well as group-level statistical distributions?
- Is there a mechanism for individuals whose circumstances are not well represented by the system's standard criteria to bring those circumstances to bear on the decision about them?
- Does the organisation ask whether the criteria the system applies are appropriate for the population it is applied to — not just whether the system applies those criteria consistently?
- When the system produces outcomes that are statistically fair at group level but unfair in individual cases, does the organisation have a means of identifying and addressing those individual cases?
- Is fairness reviewed as a substantive question — about whether outcomes are appropriate — as well as a technical one about whether the system operates without measurable bias?

---

| Common Substitutes | What Fairness Actually Requires |
|---|---|
| Identical treatment of all individuals regardless of circumstance | Appropriate treatment — like cases treated alike, different cases treated differently as their differences warrant |
| Statistical parity across demographic groups | Individual-level assessment of whether the outcome was appropriate for this person's actual circumstances |
| Absence of measurable bias in technical metrics | Substantive consideration of whether the criteria and outcomes are appropriate for the population assessed |
| Consistency — the same inputs reliably produce the same outputs | Correctness — the right outcome for the right reasons in each individual case |
| A fairness certification based on defined technical metrics | Ongoing assessment of whether outcomes are appropriate, not just whether they are statistically distributed |

---

## The Law

Legal fairness obligations in most jurisdictions require more than equal treatment. Equality law in many jurisdictions recognises indirect discrimination — where a formally neutral criterion produces outcomes that disproportionately disadvantage people with protected characteristics — and requires that such criteria be justified. The justification standard is substantive, not formal.

Data protection frameworks require that automated processing be fair — a standard that regulatory guidance in many jurisdictions interprets as requiring attention to individual circumstances and outcomes, not just consistent process application.

AI-specific legislation is advancing fairness requirements for high-risk automated systems that include explicit obligations to consider the diversity of populations affected, to assess individual-level impacts, and to ensure that systems are appropriate for the contexts in which they are deployed.

The practical legal risk is direct: an organisation that has demonstrated statistical fairness at group level and technical absence of bias has answered some of the fairness questions. It has not answered all of them. The individual who was treated consistently but not appropriately, whose circumstances were not reflected in the system's criteria, whose outcome was statistically unremarkable but personally wrong, has a fairness claim that statistical parity does not address.

---

*GV-N06 | What Fairness Is Not | Part of the AI Governance Reference Series*
