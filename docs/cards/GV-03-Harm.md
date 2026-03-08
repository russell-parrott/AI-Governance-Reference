# GV-03 — Harm

> **Risk classification depends on it. Liability follows from it. Regulatory frameworks are structured around it. This card explains what harm means in automated system governance — and why the concept is wider than most organisations assume.**

---

## What Is It?

Harm, in the context of automated system governance, is the adverse effect on an individual, a group, or society that results from an automated system's operation — whether through the decisions it makes, the outputs it produces, the data it processes, or the failures it experiences.

It is the foundational concept behind risk classification, liability, and regulatory intervention. Governance frameworks are structured around harm because harm is what governance exists to prevent, detect, and remedy. A system that cannot cause harm requires less governance than one that can. A system that has caused harm requires investigation, remediation, and accountability. Harm is the reason the governance architecture this series has described exists at all.

Harm in automated system governance takes several forms that are legally and operationally distinct:

**Individual harm** is the adverse effect on a specific person — a credit refusal that denies someone access to housing, a benefit denial that leaves someone without income, a diagnostic error that results in incorrect treatment, an employment decision that excludes a qualified candidate. Individual harm is direct, attributable, and often the basis of individual legal claims.

**Group harm** is the adverse effect on a category of people — the systematic disadvantage produced by a biased system that affects everyone with a particular characteristic. Group harm is often not visible at the individual level — each individual case may appear unremarkable — but becomes visible through distributional analysis across the affected population.

**Societal harm** is the broader damage to social structures, institutions, and public trust produced by automated systems that operate unfairly, undermine accountability, or concentrate power inappropriately. Societal harm operates at a different scale and over different timeframes from individual or group harm, and is less easily attributed to specific decisions.

**Consequential harm** is harm that results not from a decision itself but from the consequences that flow from it — the job not obtained, the opportunity not available, the treatment not received. In automated systems that make decisions whose downstream effects extend well beyond the immediate output, consequential harm can significantly exceed the harm of the decision itself.

---

## Why Does It Matter?

Harm is the unit in which governance consequences are measured. The severity of regulatory response, the scale of liability, the urgency of remediation — all of these are calibrated to the harm caused or risked. Understanding what harm is, what forms it takes, and how it arises from automated system operation is a prerequisite for governing those systems proportionately.

Harm also matters because it connects governance to purpose. The governance structures this series has described — accountability, oversight, documentation, controls — exist because automated systems can cause harm to real people. Governance that loses sight of that connection — that becomes an exercise in documentation, compliance, and certification — has mistaken the instrument for the objective. The objective is to prevent, detect, and remedy harm. The governance structures are the means.

---

## What's the Real Risk?

**Harm that occurs below the threshold of individual visibility.** Many automated systems cause harm that is distributed across a large population in amounts too small to produce individual complaints but substantial in aggregate. A pricing algorithm that charges slightly more to less price-sensitive customers, a recommendation system that steers users toward lower-quality options, an eligibility system that applies slightly stricter criteria to applicants from certain postcodes — each individual effect may be below the threshold that prompts a complaint. The aggregate effect is a systematic transfer of disadvantage that governance focused on individual complaints will never see.

**Harm that is caused by inaction rather than action.** Automated systems that determine access to services can cause harm through what they deny as much as through what they decide. A system that incorrectly classifies a medical condition as low-priority causes harm through the treatment that is not received. A credit system that incorrectly assesses someone as high-risk causes harm through the opportunities that are not available. Governance that focuses on the harms caused by positive decisions may miss the harms caused by the negative ones.

**Harm that is indirect or delayed.** The harm caused by an automated decision may not manifest immediately. A decision that affects someone's credit record affects their ability to obtain housing, employment, and financial services for years afterward. A diagnostic error that goes uncorrected affects treatment outcomes over time. Governance that assesses harm in the immediate aftermath of a decision may underestimate the total harm caused.

**Harm whose cause is not attributed to the automated system.** Individuals affected by automated system decisions frequently do not know the decision was automated, do not know what information was used, and cannot connect the outcome they experienced to the system that produced it. Harm that is not attributed to its cause is harm that does not appear in complaint data, does not generate individual legal claims, and does not trigger the governance responses that visible harm produces. It is the harm that the governance architecture is least equipped to see.

---

## Where Does It Appear?

Harm from automated systems arises across every domain where those systems make or influence consequential decisions:

- **Financial services** — harm from incorrect credit decisions, discriminatory pricing, and false fraud flags that deny individuals access to services and damage their financial standing
- **Healthcare** — harm from diagnostic errors, triage failures, and clinical decision support that produces incorrect or inappropriate care
- **Public services** — harm from incorrect eligibility decisions, wrongful enforcement actions, and benefit denials that leave individuals without essential support
- **Employment** — harm from discriminatory screening and assessment that excludes qualified individuals and reinforces existing patterns of disadvantage
- **Criminal justice** — harm from risk assessment tools that produce incorrect predictions with severe consequences for individuals' liberty and life opportunities
- **Platform and content** — harm from content moderation decisions that suppress legitimate speech, and recommendation systems that amplify harmful content or expose vulnerable individuals to inappropriate material

---

## What It Means in Practice

An organisation that takes harm seriously must be able to answer these questions at any time:

- Has the organisation assessed the types and severity of harm its automated systems can cause — across individual, group, and societal dimensions — as the basis for its governance investment decisions?
- Does the organisation's harm assessment include harm caused by incorrect negative decisions — denials, refusals, exclusions — as well as harm caused by incorrect positive ones?
- Is the organisation monitoring for harm in live operation — including the forms of harm that do not generate individual complaints and are only visible through distributional analysis?
- When harm is identified, is the governance response proportionate to its severity — and does that response include both remediation of the harm caused and prevention of its recurrence?
- Does the organisation understand the indirect and consequential harms that flow from its automated decisions — the downstream effects that extend beyond the immediate output of the system?

If those questions cannot be answered, the organisation's understanding of the harm its automated systems cause is incomplete — and its governance is calibrated to the harm it can see, not the harm that exists.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Harm-centred governance connects governance structures to their purpose — preventing, detecting, and remedying real adverse effects | Harm that is distributed in small amounts across large populations is difficult to detect and measure |
| Explicit harm assessment provides a basis for proportionate governance investment — systems with greater harm potential warrant more governance | Attribution of harm to a specific automated decision is often difficult, particularly for indirect and consequential harms |
| Distributional harm analysis reveals systematic problems invisible at the individual level | The full extent of consequential harm — the downstream effects of automated decisions — may not be assessable within normal governance timeframes |
| Harm-based risk classification creates external pressure for governance investment that internal risk assessment alone may not generate | Different stakeholders have different tolerances for different types of harm, creating governance tensions that technical frameworks cannot resolve |
| Regulatory frameworks structured around harm provide clear external standards for governance adequacy | Harm that individuals do not attribute to automated systems does not appear in complaint data, creating systematic gaps in harm visibility |

---

## The Law

Harm is the organising concept of AI regulation across most developed economies. Risk classification frameworks tier systems by the severity of harm they can cause. Liability frameworks attach consequences to harm caused. Enforcement frameworks are activated by harm occurring or being risked.

The EU AI Act's risk classification — prohibited systems, high-risk systems, limited-risk systems — is explicitly structured around harm potential. The more severe and widespread the potential harm, the more demanding the governance requirements. The clearest prohibited use cases are those where the potential for harm is considered unacceptable regardless of governance arrangements.

Data protection law, equality law, consumer protection law, and healthcare regulation all impose obligations that are ultimately grounded in harm prevention — protecting individuals from the adverse effects of data processing, discrimination, unfair commercial practices, and unsafe clinical systems. AI-specific legislation adds a layer of explicit harm governance on top of those existing frameworks.

The practical legal risk is foundational: harm is what regulators are organised to prevent and respond to. An organisation whose governance does not centre on understanding, monitoring, and preventing the harm its automated systems can cause has governance that is directed at the wrong objective. The governance structures exist to prevent harm. An organisation that builds governance around documentation, compliance, and certification rather than around harm has the means without the end.

---

*GV-03 | Harm | Part of the AI Governance Reference Series*
