# CS-13 — Human Override

> **The system reached a conclusion. This card explains what it means for a person to override it — and what override capability actually requires.**

---

## What Is It?

Human override is the operational capability to have a person — with defined authority, adequate information, and genuine independence from the automated system's output — review a specific decision and replace it with a different one.

It is distinct from human oversight, which is the broader governance activity of monitoring and supervising a system's operation. Override is a specific act: a person looking at a specific decision and concluding it should be different, then having the authority and the means to make it different.

Override capability has three components that must be present simultaneously. **Authority** — the person conducting the override has the organisational standing to change the decision, not merely to flag a concern or recommend a review. **Independence** — the override involves genuine assessment of the decision on its merits, not a confirmation of what the system concluded. **Operability** — the mechanism for implementing the override exists, functions, and can be used within a timeframe that matters for the affected individual.

Remove any one of those components and the override capability is incomplete. A person who can recommend but not decide has no authority. A person who confirms the system's conclusion without independent assessment is not overriding. A process that can eventually change a decision but takes weeks to complete does not function as override for decisions that are immediately consequential.

---

## Why Does It Matter?

Automated systems make errors. They make predictable errors in cases their training did not represent well, and unpredictable errors in cases that fall outside any pattern the system was designed to recognise. Human override is the mechanism through which those errors can be corrected — the point at which the system's output is checked against human judgment and changed when that judgment identifies a problem.

Without override capability, an automated system's errors are uncorrectable at the decision level. They can be identified, analysed, and used to improve the system — but the individual who was incorrectly assessed by this system on this occasion has no path to a different outcome. The error persists. The harm it causes is not remedied.

Override capability is also the practical expression of human accountability for automated decisions. If a person is accountable for what an automated system does, they must be able to influence what it does in specific cases. Accountability without the power to act is a governance description, not a governance reality.

---

## What's the Real Risk?

**Override that exists in policy but not in operation.** Many governance frameworks specify that automated decisions can be reviewed and overridden by a human. The specification exists in documentation. When an individual requests override, the organisation discovers that no process exists, that the people designated to conduct reviews do not have access to the necessary information, or that the technical mechanism for changing a decision requires vendor involvement that takes weeks. The capability was described. It was not built.

**Override conducted without genuine independence.** A reviewer looking at an automated decision and the system's reasoning, framed within the system's interface and presented with the system's recommendation, is systematically influenced toward confirming the system's conclusion. Genuine independence requires that the reviewer form their own view of the case — ideally before seeing the system's output, or with deliberate effort to assess the case on its merits rather than the system's characterisation of them.

**Override authority that is too narrow to be useful.** A person designated to conduct overrides may have authority to change a decision in defined circumstances but not others — able to reverse a refusal if specific factual errors are identified, but not if the concern is that the system's criteria were inappropriate for this case. Narrow override authority produces review that cannot address the full range of reasons a decision might be wrong.

**Override rates that are never examined.** An override process that consistently confirms the system's decisions — that produces a different outcome in a very small fraction of cases — may be functioning correctly, or may be functioning as rubber-stamping. The organisation that does not examine its override rates, does not ask why override leads to a different outcome so rarely, and does not assess whether the review process is functioning with genuine independence, does not know which it has.

---

## Where Does It Appear?

Human override capability is relevant wherever automated systems make decisions that significantly affect individuals:

- **Financial services** — override of automated credit refusals, fraud flags, and insurance decisions, where the affected individual has a right to human review and the organisation has an obligation to conduct it genuinely
- **Healthcare** — override of automated diagnostic suggestions and triage classifications by qualified clinicians who carry professional responsibility for patient care decisions
- **Public services** — override of automated benefit eligibility and enforcement decisions, where the consequences for affected individuals are significant and the obligation to consider individual circumstances is strong
- **Employment** — override of automated screening and assessment decisions, particularly where protected characteristics may have influenced the outcome
- **Platform and content systems** — override of automated account actions and content moderation decisions, where affected users exercise their rights to review
- **Any context where an individual has a right to human review of an automated decision that affected them**

---

## What It Means in Practice

An organisation that takes human override seriously must be able to answer these questions at any time:

- Is there a defined, operational process for overriding any automated decision — with named authority, clear access to the information needed, and a mechanism for implementing the changed decision?
- Does the person conducting an override have genuine independence — the means and the standing to reach a conclusion different from the system's without organisational pressure toward confirmation?
- Is the timeframe for override calibrated to the urgency of the decisions involved — can override occur fast enough to prevent or remedy harm in the cases where harm is most immediate?
- Does the organisation track and examine override rates — and does it ask, when override rarely produces a different outcome, whether the process is functioning as genuine review?
- When an override produces a different outcome, does that inform governance — is the case examined to understand whether it reveals a pattern in the system's errors that warrants broader remediation?

If those questions cannot be answered, the organisation has override capability in description but may not have it in operation. Override is the governance mechanism that makes human accountability for automated decisions real. Without it, accountability is asserted but cannot be exercised.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Human override enables correction of individual automated errors without requiring system-level change | Override at scale requires significant operational capacity — genuine review of large volumes of decisions requires proportionate resource |
| Override capability demonstrates genuine human control, satisfying regulatory requirements for human involvement in high-stakes decisions | Override quality depends entirely on the independence, knowledge, and authority of the person conducting it |
| The existence of an override process creates a feedback mechanism — override cases provide intelligence about system errors and failure patterns | Systematic bias in an automated system may also affect the humans conducting overrides, reducing the independence override is meant to provide |
| Genuine override provides affected individuals with a meaningful rights mechanism — not just a formal process but a real prospect of a different outcome | Override processes that are resource-constrained produce review that is nominal — the form of assessment without its substance |
| Override rates and outcomes, properly analysed, are governance intelligence about system performance that monitoring alone cannot provide | The boundary between override and rubber-stamping depends on governance culture and individual reviewer independence — both are difficult to mandate and measure |

---

## The Law

Human override is a legal requirement — not just a governance best practice — in multiple regulatory frameworks across most jurisdictions where automated systems make significant decisions about individuals.

Data protection frameworks in many jurisdictions give individuals the explicit right to human intervention in automated decisions that produce significant effects — a right that requires a genuine override capability, not a process that provides the appearance of review without the substance. Regulators have found that nominal review processes that do not meet the standard of genuine human assessment do not satisfy this right.

AI-specific legislation is advancing human oversight requirements that address the quality of override as well as its existence — specifying that human reviewers must have the competence, the information, and the authority to conduct genuine assessment, and that override processes must be designed to enable real independence rather than systematic confirmation.

The practical legal risk is direct: an individual who exercised their right to human review and received a process incapable of genuine independent assessment has experienced a breach of that right — regardless of whether the outcome changed. The right is to genuine review. The process must deliver it.

---

*CS-13 | Human Override | Part of the AI Governance Reference Series*
