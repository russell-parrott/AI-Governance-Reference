# SP-02 — Training Data

> **Once you know the boundaries, you ask: what built this thing? Data is the foundation.**

---

## What Is It?

Training data is the collection of information used to build an automated system. It is the raw material from which the system learns what to do.

Most automated systems do not follow rules written by hand. They learn patterns from examples. A system designed to assess credit risk is trained on records of past borrowers — who repaid, who defaulted, and what their circumstances looked like at the time. A system designed to screen job applications is trained on records of past hires — who was selected, who was not, and what their profiles looked like. The system identifies patterns in that historical data and applies them to new cases.

Training data is therefore not a technical detail. It is the origin of every decision the system will ever make.

---

## Why Does It Matter?

An automated system can only reflect what it was taught. If the data it was trained on is incomplete, unrepresentative, or contains historical patterns of bias or error, the system will reproduce those patterns at scale — consistently, automatically, and without any individual choosing to do so.

The problem is compounded by invisibility. Unlike a human decision-maker whose reasoning can be questioned, a system's training data is not visible in its outputs. The system produces a result. The result looks clean. The historical patterns embedded in the data that produced it are not apparent unless someone goes looking for them.

---

## What's the Real Risk?

**Inherited bias.** If historical decisions embedded in the training data reflected discrimination — by race, gender, age, or any other characteristic — the system will reproduce that discrimination systematically. It does not intend to. It has simply learned from biased examples.

**Unreliable outputs in new contexts.** A system trained on one population or time period may produce unreliable outputs when applied to a different population or a changed environment. The patterns it learned may not hold. The system does not know this and will not flag it.

**Silent, scalable harm.** Because the system applies its learned patterns to every case it processes, errors embedded in training data are not occasional. They are structural. Every person who fits the pattern the system learned incorrectly is affected.

**Accountability difficulty.** When training data problems surface — often through complaints or external audit — the organisation must explain decisions made by a system whose learning process may be poorly documented. That is a difficult position before a regulator or in litigation.

Ownership of training data quality sits with whoever commissioned or deployed the system. A vendor providing the data does not transfer that responsibility.

---

## Where Does It Appear?

Training data is the foundation of any system that learns from historical examples rather than following hand-coded rules:

- **Credit and insurance** — trained on historical customer data, repayment records, and claims histories
- **Recruitment** — trained on records of past hiring decisions, application outcomes, and employee performance
- **Healthcare** — trained on patient records, diagnostic histories, and treatment outcomes
- **Fraud detection** — trained on records of confirmed fraudulent and legitimate transactions
- **Public services** — trained on historical case outcomes, benefit decisions, and compliance records
- **Content moderation** — trained on examples of content previously flagged or approved by human reviewers

In every case, the system's future behaviour is shaped by the data it learned from.

---

## What It Means in Practice

An organisation that takes training data seriously must be able to answer these questions at any time:

- What data was this system trained on, and where did it come from?
- Does that data accurately represent the population the system now makes decisions about?
- Has the training data been examined for historical bias or systematic error?
- Is the training data documented well enough that it could be reviewed in an investigation?
- If the system was supplied by a vendor, has the organisation obtained and reviewed information about the training data used?

If those questions cannot be answered, the organisation is operating a system whose foundations it has not examined. Every decision the system makes rests on data that has not been verified. That is not a technical gap. It is a governance gap.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Allows systems to learn complex patterns that would be impossible to code manually | The system learns whatever the data contains — including errors, gaps, and bias |
| Can draw on large volumes of historical evidence to improve accuracy | Historical data reflects past decisions, which may themselves have been flawed or discriminatory |
| Enables systems to improve over time as new data becomes available | More data does not mean better data — volume does not correct for systematic problems |
| Produces consistent outputs based on learned patterns | Consistency means errors are applied uniformly, not occasionally |
| Can capture subtle relationships that human decision-makers might miss | Those same subtle relationships may reflect correlations that are unfair or legally impermissible |

---

## The Law

The legal direction across most developed economies is moving toward explicit requirements for organisations to understand, document, and be able to account for the data their automated systems were trained on.

Data protection and privacy frameworks in many jurisdictions require that automated systems processing personal data be fair, accurate, and not discriminatory. Where training data contains historical bias, systems built on it may breach those requirements regardless of whether the organisation intended harm.

Equality and non-discrimination law in many jurisdictions applies to automated decisions that produce discriminatory outcomes, regardless of the mechanism that produced them. The origin of the discrimination — in training data — does not provide a defence.

The practical legal risk is direct: an organisation that cannot describe what its system was trained on, and demonstrate that the training data was examined for quality and fairness, is exposed when a discriminatory or erroneous output is challenged.

---

*SP-02 | Training Data | Part of the AI Governance Reference Series*
