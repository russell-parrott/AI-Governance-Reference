# GV-N07 — What Explainability Is Not

> **The system's workings have been shown. Now check: has anything actually been explained — or has access to data been mistaken for explanation?**

---

## What It Is Not

Explainability is not access to code. It is not a list of input variables, a set of model parameters, a feature importance ranking, a SHAP value chart, or a technical specification of the algorithm that produced a decision. It is not satisfied by showing a person the mathematics behind a model, the weights assigned to different factors, or the training data the system was built on.

Explainability, properly understood, is the condition in which a person affected by an automated decision can understand why that decision was reached — in terms that connect the inputs to the outcome in a way that is meaningful to them, not merely accurate in a technical sense.

What organisations most often have instead is one or more of the following:

**Technical access presented as explanation.** An individual asks why they were refused a loan. The organisation provides a list of the variables the model uses, their relative weights, and the individual's scores across each dimension. The information is accurate. It describes what the system considered and how it combined those considerations. The individual still does not understand why they were refused. Technical access is the raw material of explanation. It is not explanation itself.

**Feature importance that explains the model rather than the decision.** A system is described as explainable because it produces feature importance scores — rankings of which inputs had the greatest influence on the model's outputs in general. Those scores describe how the model behaves across its population of decisions. They do not explain why this individual, with this combination of characteristics, received this outcome. General model behaviour and individual decision explanation are different things.

**Post-hoc rationalisation presented as genuine explanation.** Some explanation methods work by constructing an approximation of the model's behaviour around a specific decision — a simplified account of what the model appeared to consider in this case. Those approximations may be accurate enough to be useful. They are not the same as the model's actual reasoning, because complex models do not reason in ways that can be fully represented in human terms. Presenting a post-hoc approximation as a definitive explanation of why the decision was made overstates what the explanation actually shows.

**Explanation that satisfies governance review rather than individual understanding.** Explanation documents produced for regulatory compliance, governance review, or audit purposes are frequently written for a sophisticated audience — regulators, legal teams, technical reviewers. They may be accurate and comprehensive for that audience while being inaccessible to the individual whose decision is being explained. An explanation that satisfies a governance reviewer but not the affected person has met one standard and missed the one that matters most.

**The claim that a complex system cannot be explained, used to avoid the obligation.** Some organisations, faced with the genuine difficulty of explaining complex model outputs, conclude that explanation is not possible and proceed without it. The difficulty of explanation is real. It is a governance constraint on the use of certain systems in certain contexts — not a reason to deploy unexplainable systems and accept the resulting accountability gap.

---

## Why Confusion Matters

When technical access is mistaken for explanation, the governance obligation to explain is believed to be met while remaining practically unfulfilled. The individual who was refused, rejected, or flagged receives information they cannot use. Their right to understand what happened to them — and to assess whether it was correct — is not served by data they cannot interpret.

The deeper consequence is systemic. Organisations that treat technical access as explanation deploy increasingly complex systems on the basis that they are explainable — when what they mean is that their workings can be disclosed. The two are not the same. A system whose outputs cannot be explained in terms a non-specialist can understand is a system whose accountability to the individuals it affects is fundamentally limited, regardless of how much technical data can be produced about it.

Explainability that exists for governance purposes but not for affected individuals is explainability in name only. The governance record shows that explanations were provided. The individuals who received those explanations cannot describe what they were told.

---

## Where Confusion Appears

**Technical explanation documents provided in response to individual rights requests.** An individual invokes their right to an explanation. The organisation provides a technical document describing the system's logic. The individual cannot understand it. The organisation considers the right to have been met. The right required a meaningful explanation — one the individual could use to understand their situation and assess whether to challenge it. A document they cannot interpret does not meet that standard.

**"Explainable AI" tools used to satisfy governance requirements.** A range of technical tools exist that generate explanations of model outputs — highlighting which features were most influential, constructing local approximations of model behaviour, or producing visual representations of decision logic. These tools are valuable. Their output is not the same as an explanation in the governance sense — particularly when that output is expressed in forms that require technical expertise to interpret.

**Model transparency presented as decision transparency.** Publishing documentation about how a model was built, what data it was trained on, and how its performance was validated is valuable for governance accountability. It does not explain individual decisions to the individuals affected by them. Model transparency and individual decision explanation serve different purposes and different audiences.

**Complexity used as justification for opacity.** The genuine technical difficulty of explaining complex model outputs in human terms is sometimes used to justify deploying systems whose decisions cannot be explained — on the basis that the difficulty is inherent rather than a governance choice. The difficulty is real. The conclusion it is used to support — that unexplainable decisions are acceptable — is a governance choice, not a technical inevitability.

---

## How To Tell The Difference

Five questions that distinguish genuine explainability from its substitutes:

- Can the organisation explain to a specific individual, in terms they can understand without technical training, why the automated system produced the outcome it did in their case?
- Does the explanation connect the individual's actual circumstances to the outcome in a way that is meaningful — not just a list of factors the system considers?
- If the individual disputes the explanation — says the information the system used was wrong, or that their circumstances were misrepresented — does the explanation provide a basis for that dispute to be pursued?
- Has the organisation tested whether its explanations achieve understanding in the people they are directed at — by asking affected individuals whether the explanation made sense to them?
- When a system cannot produce an explanation that meets these standards, does the organisation treat that as a constraint on its deployment in consequential contexts — or as an acceptable limitation?

---

| Common Substitutes | What Explainability Actually Requires |
|---|---|
| A list of input variables and their weights | An account of why this individual's combination of characteristics produced this outcome |
| Feature importance scores describing general model behaviour | An explanation of the specific decision, not the general model |
| A post-hoc approximation of model reasoning | Honest acknowledgment of what can and cannot be said about why the decision was reached |
| A technical document that satisfies governance review | A communication that enables the affected individual to understand and if necessary challenge what happened |
| The claim that complex models cannot be explained | A governance decision about whether unexplainable systems should be deployed in contexts where explanation is required |

---

## The Law

Legal explanation obligations for automated decisions are framed in terms of what the affected individual can understand — not in terms of what technical information can be produced. Data protection frameworks in many jurisdictions require that explanations of automated decisions be meaningful — a standard that regulators interpret as requiring comprehensibility to the person receiving the explanation, not just technical accuracy.

Regulatory guidance consistently distinguishes between producing technical information about a system and providing a meaningful explanation of a specific decision. The standard is functional: the explanation must put the individual in a position to understand and assess the decision that affected them.

AI-specific legislation is advancing explainability requirements that are increasingly specific about the content, form, and audience of explanations — moving toward a standard that requires demonstrated comprehensibility rather than demonstrated disclosure.

The practical legal risk is direct: an organisation that provided technical information in response to an explanation request, on the basis that the information accurately described the system's operation, has not met the explanation obligation if the individual could not understand it. Accuracy is a necessary property of explanation. It is not a sufficient one. An accurate account that cannot be understood is not an explanation. It is data.

---

*GV-N07 | What Explainability Is Not | Part of the AI Governance Reference Series*
