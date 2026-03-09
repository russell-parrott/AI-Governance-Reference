# SP-27 — Feedback Loops

> **The system predicts. Its predictions shape outcomes. Those outcomes feed the next version of the system. It is now learning, in part, from itself.**

---

## What Is It?

A feedback loop occurs when the outputs of an automated system re-enter the data environment in a way that influences the system's future training, evaluation or behaviour. The system is no longer learning from the world as it is. It is learning, in part, from the consequences of its own previous decisions.

The mechanism is straightforward. A risk-scoring system identifies a group as high risk and triggers increased monitoring or intervention. The additional scrutiny generates more recorded incidents in that group — not because the group is more risky, but because they are watched more closely. Those incidents feed into the next round of training data, reinforcing the model's original assessment. The model retrained on this data strengthens the same pattern.

Feedback loops are not hypothetical. They have been documented in predictive policing systems, recidivism risk tools, credit models, content recommendation systems and healthcare resource allocation. In each context the structural condition is the same: the system's outputs shaped the outcomes the system was trained to predict.

---

## Why Does It Matter?

Standard performance metrics will not detect feedback loops. If a model predicts high risk and the individual is therefore monitored more closely and more likely to be recorded as a subsequent incident, the model's prediction may appear validated. The numbers look correct. The underlying problem — that the outcome was partly produced by the prediction — is invisible in the data.

This means feedback loops can entrench and amplify bias while appearing to improve performance. A model that systematically over-predicts risk for certain groups generates outcomes that appear to confirm those predictions, which strengthens the model's parameters in the same direction. The bias becomes self-reinforcing precisely because it appears self-validating.

Feedback loops also contaminate the evidential record. When harm occurs, the organisation may be unable to determine whether the model was responding to genuine patterns in the world or to patterns it helped create.

---

## What's the Real Risk?

**Bias amplification that looks like accuracy.** Feedback loops can cause differential treatment of protected groups to worsen with each retraining cycle while performance metrics remain stable or improve. The governance signal points the wrong way.

**Contaminated training data.** Where system outputs have shaped outcomes in the world, data collected from that world is not independent ground truth. Retraining on contaminated data encodes the system's past errors as future parameters.

**Invisible discrimination.** Groups that received more adverse treatment from an earlier model generate data that makes the next model more likely to treat them adversely. The discrimination compounds invisibly across model generations.

**Metrics that measure the loop, not the world.** An organisation evaluating a system's performance against outcomes the system itself influenced is not measuring accuracy — it is measuring self-consistency. The two can diverge dramatically without any indicator in the standard metrics.

---

## Where Does It Appear?

Feedback loops are a governance concern wherever system outputs influence the data environment that will be used to evaluate or retrain the system:

- **Predictive policing** — risk scores direct patrol resources, generating more arrests in scored areas, which appear to validate the scores
- **Credit and lending** — credit denials reduce financial activity, generating data patterns that appear to confirm the original risk assessment
- **Recruitment** — hiring models trained on historical patterns reinforce those patterns by selecting candidates who resemble past hires
- **Content recommendation** — recommendation systems trained on engagement data reinforce engagement patterns by showing more of what users have already engaged with
- **Healthcare resource allocation** — systems directing resources away from certain groups generate worse health outcomes that appear to justify the original allocation

---

## What It Means in Practice

An organisation that takes feedback loops seriously must be able to answer these questions at any time:

- Has the system been assessed for whether its outputs can influence the data used to evaluate or retrain it?
- Is training data assessed for contamination by previous system outputs before retraining proceeds?
- Is performance evaluated against outcomes that are measured independently of the system's own interventions where possible?
- Is monitoring in place to detect whether disparate outcomes for different groups are increasing across model generations?
- Is retraining treated as a governed change that includes explicit assessment of feedback contamination?

If those questions cannot be answered, the organisation may be retraining a system on its own past decisions without knowing it.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Identifying feedback loops before deployment enables governance design that mitigates them | Feedback loops are structurally difficult to detect because contaminated metrics appear valid |
| Outcome independence monitoring provides genuine performance signal rather than self-validation | Independent outcome measurement may require randomised holdout groups or external benchmarks that are operationally complex |
| Explicit retraining governance prevents contaminated data from entering model parameters unexamined | Distinguishing feedback-contaminated outcomes from genuine signal requires analytical capability many organisations lack |
| Documentation of feedback assessment creates an audit record that supports regulatory scrutiny | Some feedback effects are diffuse and long-term, making detection within normal monitoring cycles difficult |
| Awareness of the mechanism allows human reviewers to challenge apparently validating metrics | The incentive to accept metrics that show system performance improving works against scrutiny of feedback contamination |

---

## The Law

The legal direction across most developed economies requires that automated systems produce fair and accurate outcomes and that organisations actively monitor for discriminatory effects. Feedback loops create a specific legal exposure: the organisation may be producing and deepening discriminatory outcomes through its own data practices while its internal metrics show nothing wrong.

Data protection and privacy frameworks require that automated processing be accurate and that organisations take steps to prevent systematic errors from propagating. A system that is retrained on outcomes shaped by its own discriminatory outputs may be compounding inaccuracy and discrimination through each iteration.

Equality and non-discrimination law in most jurisdictions applies to outcomes, not intentions. A feedback loop that amplifies differential treatment of protected groups produces discriminatory outcomes regardless of whether the organisation intended that result or was aware it was occurring. Ignorance of the loop does not reduce the legal exposure it creates.

---

*SP-27 | Feedback Loops | Part of the AI Governance Reference Series*
