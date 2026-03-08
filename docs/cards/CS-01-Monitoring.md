# CS-01 — Monitoring

> **Oversight is people. Monitoring is the activity those people do. This card explains the task.**

---

## What Is It?

Monitoring is the systematic, ongoing observation of an automated system's behaviour and outputs to confirm it is operating as intended and to detect problems when they arise.

It is not a one-time check at deployment. It is a continuous activity — structured, scheduled, and assigned to specific people — that runs for as long as the system is in operation.

Monitoring covers what the system is producing, how consistently it is producing it, whether its outputs have changed over time, and whether those outputs are having the effects the organisation expected. It is the practical activity through which human oversight becomes real rather than nominal.

---

## Why Does It Matter?

An automated system that is not monitored is a system the organisation has released and forgotten. It will continue producing outputs regardless of whether those outputs remain accurate, fair, or consistent with what was originally authorised. Nothing in the system itself will signal that something has gone wrong. Only monitoring provides that signal.

The need for monitoring does not diminish once a system is established. It increases. Systems operate in environments that change. The populations they process shift. The data they receive evolves. The patterns they learned become less reliable. Each of these changes can degrade output quality without any visible failure in the system itself. Monitoring is what makes those changes visible before they become harmful.

---

## What's the Real Risk?

**Silent degradation.** Without monitoring, a system's performance can deteriorate gradually and invisibly. By the time the problem surfaces through complaints or an external audit, the degraded outputs may have affected a large number of people.

**No basis for intervention.** Monitoring is what triggers action. Without it, the organisation has no mechanism for identifying when the system needs to be reviewed, adjusted, or stopped. Problems that would have been caught early instead run to their natural conclusion.

**False confidence.** An organisation that deployed a well-designed system and has not monitored it since may believe the system is still performing as it did at launch. That belief is not evidence. It is assumption. Regulators and courts do not accept assumption as a substitute for demonstrated control.

**Compounding liability.** Where a system has been producing harmful outputs and monitoring would have caught it earlier, the absence of monitoring does not reduce liability. It extends it — demonstrating that the organisation failed to maintain control it was responsible for maintaining.

Responsibility for monitoring sits with whoever holds operational accountability for the system. It cannot be delegated to the system itself.

---

## Where Does It Appear?

Monitoring is a requirement wherever automated systems operate with real consequences:

- **Financial services** — tracking outputs of automated lending, fraud, and pricing systems for accuracy, consistency, and unexpected patterns
- **Healthcare** — reviewing outputs of diagnostic and triage systems to confirm they remain reliable across the patient populations they serve
- **Public services** — checking automated eligibility and assessment decisions for errors, drift, and disproportionate impact on specific groups
- **Employment** — reviewing automated screening and performance monitoring outputs to ensure consistency and fairness over time
- **Retail and platforms** — tracking recommendation, pricing, and moderation system outputs for unintended patterns or shifts in behaviour
- **Any high-volume automated process** — where the scale of output makes individual review impractical, monitoring focuses on patterns, distributions, and statistical signals

---

## What It Means in Practice

An organisation that takes monitoring seriously must be able to answer these questions at any time:

- What is being monitored, at what frequency, and by whom?
- What would a monitoring review look for, and how would a problem be recognised when found?
- Is there a record of monitoring activity that could be produced in an audit or investigation?
- How does monitoring connect to action — what happens when a problem is identified?
- When was monitoring last reviewed to confirm it remains appropriate for the system's current scope and risk level?

If those questions cannot be answered, the organisation has oversight in name and monitoring in neither name nor practice. A system without monitoring is not under control. It is under assumption.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Provides early warning of performance problems before they cause significant harm | Effective monitoring requires clear criteria for what good performance looks like — which is not always defined |
| Creates a documented record of system behaviour over time | Monitoring generates data that must itself be reviewed — adding overhead that organisations may under-resource |
| Enables evidence-based intervention rather than reactive crisis management | High-volume systems produce monitoring data at a scale that can obscure problems rather than surface them |
| Demonstrates active control to regulators and affected individuals | Monitoring focused on the wrong indicators can create false assurance |
| Supports accountability by connecting outputs to the people responsible for reviewing them | Monitoring roles assigned without adequate time or authority become box-ticking rather than genuine oversight |

---

## The Law

The legal direction across most developed economies is consistent: deploying an automated system creates an ongoing obligation to monitor its behaviour — not just a one-time duty to assess it at launch.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data remain accurate, fair, and fit for purpose throughout its operation. That obligation cannot be met without monitoring. A system that was lawful at deployment but has since drifted may no longer be compliant, and an organisation without monitoring will not know.

AI-specific legislation is advancing explicit monitoring requirements for high-risk systems, with some frameworks specifying minimum frequencies, documentation standards, and reporting obligations. Regulators examining incidents consistently look for evidence of monitoring activity — not just monitoring policy.

The practical legal risk is direct: an organisation that cannot produce records of active, structured monitoring for its automated systems cannot demonstrate it maintained the control it was legally required to maintain.

---

*CS-01 | Monitoring | Part of the AI Governance Reference Series*
