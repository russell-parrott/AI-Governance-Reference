# RE-03 — System Logs

> **Technical records of system activity. Not what was decided — what the system itself did.**

---

## What Is It?

A system log is a technical record of an automated system's internal activity — the continuous, machine-generated record of what the system processed, how it behaved, what errors it encountered, and how it performed over time.

Where decision records capture individual outputs — what the system decided about a specific person or case — system logs capture the operational behaviour of the system itself. They record events at the technical level: processes that ran, inputs that were received, errors that were generated, performance metrics that were recorded, and changes to system state that occurred.

System logs are not produced for human readers in the first instance. They are produced by the system, about the system, as a byproduct of its operation. Their value for governance lies in what they can reveal when something needs to be investigated, diagnosed, or demonstrated.

---

## Why Does It Matter?

Decision records show what a system decided. System logs show how it behaved when it decided. That distinction matters when the question is not just what outcome was produced but whether the system was functioning correctly, operating within its expected parameters, and behaving consistently with its design at the time the outcome was reached.

System logs are the technical evidence layer beneath the governance record. When an incident investigation needs to establish whether a system failure contributed to a harmful output, the system log is where that question is answered. When a regulator asks whether the system was operating normally at a specific time, the system log is the evidence. When a change is suspected of having altered system behaviour, the system log is where that is confirmed or refuted.

---

## What's the Real Risk?

**Incidents that cannot be technically diagnosed.** When a system produces unexpected outputs and there is no system log, the investigation cannot determine whether the cause was a technical failure, a data problem, an input error, or a design issue. The outcome is visible. The mechanism that produced it is not.

**System failures that go undetected.** System logs are a source of operational signals — error rates, processing anomalies, performance degradation — that monitoring systems and operational reviewers can use to detect emerging problems. Without logs, those signals do not exist. Failures that would have been caught early instead run until their effects become externally visible.

**Changes whose impact cannot be verified.** When a system is updated and something subsequently goes wrong, the question is whether the change caused the problem. System logs before and after the change provide the technical basis for answering that question. Without them, the investigation cannot distinguish between a pre-existing condition and a change-induced failure.

**Log integrity that cannot be assured.** System logs are only useful as evidence if they are reliable — if they accurately reflect what the system did and have not been altered after the fact. Logs held in environments where they can be modified, deleted, or overwritten are not a trustworthy evidential record, regardless of their technical completeness.

Responsibility for ensuring system logs exist, are complete, and are protected sits with whoever holds governance authority over the system. Technical teams that configure logging capability are not the governance function. Governance is responsible for requiring appropriate logging and verifying that it is in place and functioning.

---

## Where Does It Appear?

System logs are a technical governance requirement wherever automated systems operate in environments where their behaviour may need to be examined:

- **Financial services** — transaction processing logs, model execution records, and error logs for automated lending, fraud, and trading systems
- **Healthcare** — system performance records, processing error logs, and integration event records for diagnostic and clinical decision systems
- **Public services** — processing records, system error events, and performance metrics for automated eligibility and assessment systems
- **Employment** — execution records, input processing logs, and error events for automated screening and monitoring systems
- **Platform and content systems** — processing logs, classification event records, and system error histories for moderation and recommendation systems
- **Any system subject to technical audit or regulatory examination** — where the question of how the system behaved at a specific time may need to be answered from technical records

---

## What It Means in Practice

An organisation that takes system logs seriously must be able to answer these questions at any time:

- Does this system generate logs of sufficient detail to support technical investigation of its behaviour at any point in its operation?
- Are system logs stored securely and in a way that prevents alteration or deletion — either accidental or deliberate?
- Is the retention period for system logs sufficient to cover the period during which technical investigation of past behaviour might be required?
- Are system logs monitored as part of operational oversight — not just preserved for future use but actively reviewed for signals of emerging problems?
- Can system logs be interpreted by people with appropriate technical knowledge within the timeframes that investigations and regulatory inquiries require?

If those questions cannot be answered, the organisation has a system whose technical behaviour cannot be examined after the fact. Decision records show what was decided. Audit trails show what people did. System logs show whether the system itself was working correctly when all of that happened — and without them, that question has no reliable answer.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Provide the technical evidence layer needed to investigate system failures and unexpected outputs | System logs generated at high volume require significant storage infrastructure and structured management |
| Enable detection of operational anomalies — error rates, performance degradation, and processing failures | Raw system logs require technical expertise to interpret — their governance value depends on having people who can use them |
| Support change impact assessment — behaviour before and after a change can be compared | Logs that capture events without sufficient context — system state, input conditions, configuration — are difficult to use in investigation |
| Protect the organisation in technical disputes — what the system did is recorded, not reconstructed | Log integrity requires active technical controls — logs that can be altered or deleted are not reliable evidence |
| Provide a signal source for operational monitoring — anomalies visible in logs can trigger alerts and reviews | Retention of detailed system logs creates data management obligations that organisations frequently underestimate at deployment |

---

## The Law

The legal direction across most developed economies is consistent: organisations must maintain technical records of automated system activity sufficient to support investigation, audit, and regulatory examination — not just governance records of decisions and processes.

Data protection and privacy frameworks in many jurisdictions require organisations to be able to demonstrate the technical integrity of their automated processing — that systems operated as documented and that personal data was processed correctly. System logs are the technical evidence that supports those demonstrations.

AI-specific legislation is advancing specific logging requirements for high-risk systems, with some frameworks specifying minimum log content, retention periods, and access conditions. Technical logging is increasingly treated as a substantive legal requirement, not an operational choice.

The practical legal risk is direct: an organisation that cannot produce system logs showing how its automated system behaved at a specific time — during an incident, following a change, or across a period under investigation — cannot provide the technical foundation that governance, regulatory, and legal accountability increasingly require.

---

*RE-03 | System Logs | Part of the AI Governance Reference Series*
