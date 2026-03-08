# CS-06 — Exception Handling

> **Daily running throws up odd cases. This card explains what you do when the system cannot process something.**

---

## What Is It?

Exception handling is the defined process for identifying and managing cases that an automated system cannot process normally — inputs it was not designed for, situations that fall outside its validated scope, or outputs it produces with insufficient confidence to act on without further review.

Every automated system encounters exceptions. A record arrives in an unexpected format. A case combines characteristics the system has never seen together. An input field is missing that the system needs to reach a reliable conclusion. The system's response to these situations — whether it flags them, routes them elsewhere, substitutes a default, or fails silently — is its exception handling behaviour.

Exception handling is not a failure mode. It is a design characteristic. A system with well-defined exception handling manages the unexpected in a controlled, visible, and governable way. A system without it manages the unexpected invisibly — and frequently badly.

---

## Why Does It Matter?

Automated systems are designed for the cases they are expected to encounter. The cases they are not expected to encounter do not disappear. They arrive in the system's input queue alongside everything else, and the system must do something with them.

What the system does with those cases — and whether the people responsible for governance know what it does — is the exception handling question. A system that silently applies a default to a case it cannot reliably process produces an output that looks like every other output. The exception is invisible. The decision stands. The person affected by it has no way of knowing their case was handled differently from the norm.

---

## What's the Real Risk?

**Silent defaults producing consequential decisions.** Many systems handle missing or unexpected inputs by applying a default value or falling back to a standard rule. Those defaults may be technically defensible in aggregate but wrong in individual cases — and the individual affected by a default-driven decision may never know the decision was not based on their actual circumstances.

**Exceptions that accumulate unnoticed.** Where exception handling is not monitored, the volume and pattern of exceptions the system encounters is invisible to governance. A sudden increase in exceptions may signal a change in input quality, a shift in the population being processed, or the beginning of a broader system problem. Without visibility, that signal is lost.

**Exceptions routed to human review without adequate context.** When a system flags a case for human review, it should provide the reviewer with enough information to understand why the case was flagged and what the system was unable to resolve. Exceptions routed to reviewers without that context are difficult to assess — reviewers may resolve them quickly and incorrectly rather than investing the time a genuinely unusual case requires.

**No record of how exceptions were handled.** Where exception handling is not documented — what was flagged, why, and how it was resolved — the organisation cannot demonstrate to a regulator or in litigation that unusual cases were managed appropriately rather than processed through a default that was not fit for the individual's circumstances.

Responsibility for defining exception handling processes and monitoring exception volumes sits with whoever holds governance authority over the system. Technical teams that build exception handling into a system are not the governance function. They are the mechanism.

---

## Where Does It Appear?

Exception handling is a daily operational reality wherever automated systems run at volume:

- **Financial services** — cases where credit or fraud systems encounter incomplete data, unusual transaction patterns, or input combinations outside their training range
- **Healthcare** — patient cases where diagnostic systems produce low-confidence outputs or encounter data formats or clinical presentations outside their validated scope
- **Public services** — benefit or eligibility cases where applicant circumstances do not fit standard categories or where required data is missing or inconsistent
- **Employment** — applications where screening systems encounter CVs, qualifications, or experience profiles outside their normal processing range
- **Platform and content systems** — content that falls outside the clear categories a moderation system was designed to assess, or that combines characteristics in ways the system was not trained to handle
- **Any high-volume automated process** — where the scale of daily operation guarantees a regular flow of cases the system was not specifically designed for

---

## What It Means in Practice

An organisation that takes exception handling seriously must be able to answer these questions at any time:

- Does this system have defined, documented behaviour for cases it cannot process normally?
- Are exceptions visible to governance — is there a record of exception volumes, types, and how they were resolved?
- When exceptions are routed to human review, do reviewers receive sufficient context to assess them properly?
- Is exception volume monitored over time, so that increases or pattern changes are identified and investigated?
- Are the people whose cases were handled as exceptions informed of that fact where it is relevant to their rights?

If those questions cannot be answered, the system's behaviour on unusual cases is ungoverned. The cases that deviate from the norm — often the most vulnerable, the most complex, and the most consequential — are the ones being handled least visibly.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Defined exception handling prevents unusual cases from being silently processed through inappropriate defaults | Designing comprehensive exception handling requires anticipating failure modes that may not be fully known at deployment |
| Exception monitoring creates a signal for emerging data quality problems and input changes | High exception volumes can overwhelm human review capacity, creating pressure to resolve cases quickly rather than carefully |
| Routing exceptions to human review ensures unusual cases receive appropriate scrutiny | Exceptions routed without context produce reviews that are superficial rather than genuinely investigative |
| Documented exception handling demonstrates to regulators that unusual cases were managed deliberately | Exception handling processes require ongoing maintenance as the range of cases the system encounters evolves |
| Visibility of exception patterns supports system improvement over time | Organisations frequently treat exception handling as a technical detail rather than a governance obligation |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that automated decisions — including those produced for unusual or edge cases — were reached through a process that was appropriate for the individual's circumstances.

Data protection and privacy frameworks in many jurisdictions give individuals rights in relation to automated decisions that significantly affect them, including the right to human review in certain circumstances. Where a case was handled as an exception, that right is particularly relevant — and the organisation must be able to explain how the exception was managed.

AI-specific legislation is advancing requirements for documented exception handling as part of broader system governance obligations, particularly for high-risk applications. Regulators examining complaints about automated decisions frequently find that the decision in question was an exception case handled by a default process that was not designed with that individual's circumstances in mind.

The practical legal risk is direct: an organisation that cannot demonstrate how its automated system handled cases outside its normal processing range — what it did, why, and whether that was appropriate — cannot fully account for the decisions it produced. The cases it handled least well are the ones most likely to generate complaints, and complaints are where exception handling is tested.

---

*CS-06 | Exception Handling | Part of the AI Governance Reference Series*
