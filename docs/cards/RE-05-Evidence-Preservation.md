# RE-05 — Evidence Preservation

> **The incident has happened. Now you must protect the evidence. This card explains why that is the first obligation — and how it is done.**

---

## What Is It?

Evidence preservation is the immediate, deliberate act of securing all records, logs, data, and documentation relevant to an incident involving an automated system — protecting them from alteration, deletion, overwriting, or loss before investigation has established what they contain and what they mean.

It is the governance activity that happens in parallel with incident response, not after it. While the operational team is managing the immediate consequences of a failure, evidence preservation ensures that the material needed to understand what happened is secured and cannot be compromised — accidentally or deliberately — by what happens next.

Evidence preservation is not archiving. It is active protection — the recognition that normal operational processes, if left to continue, may destroy the very records that investigation depends on.

---

## Why Does It Matter?

Automated systems generate evidence continuously — logs, records, outputs, input data. In normal operation, that evidence is subject to routine processes: logs are rotated and overwritten, records are updated, data is processed and moved. Those processes are appropriate in normal operation. They are destructive in the aftermath of an incident.

An investigation that begins after normal operational processes have continued unchecked may find that the most relevant evidence has been overwritten, deleted, or altered — not through concealment but through routine activity that nobody stopped because nobody applied a preservation hold in time. The evidence existed. It no longer does. The investigation proceeds without it.

---

## What's the Real Risk?

**Automatic overwriting of system logs.** Many systems are configured to overwrite logs on a rolling basis — retaining only the most recent period of activity. In the aftermath of an incident, logs from the period immediately preceding it may be overwritten before anyone thinks to preserve them. The technical record of what the system was doing when it failed disappears in the normal course of operations.

**Updates and changes that alter the evidential record.** Incident response frequently involves system changes — patches, rollbacks, configuration adjustments. Each of those changes may alter the system state that existed at the time of the incident. A system that has been modified in response to a failure no longer looks the way it looked when the failure occurred. Forensic reconstruction becomes difficult or impossible.

**Preservation that is incomplete.** Evidence preservation that secures some records while missing others produces an incomplete evidential picture. Investigation based on incomplete evidence reaches incomplete conclusions. The gaps in preservation become the gaps in understanding — and potentially the gaps in accountability.

**Deliberate destruction disguised as normal process.** Where evidence preservation obligations are not clearly established, the destruction of relevant records during incident response — even if motivated by a desire to fix the problem rather than conceal it — can be treated as deliberate evidence destruction by regulators and courts. Intent is difficult to establish after the fact. The effect on the investigation is the same regardless.

Responsibility for initiating evidence preservation sits with whoever identifies the incident and whoever holds governance authority over the affected system. It is a first-response obligation, not an investigation-phase one.

---

## Where Does It Appear?

Evidence preservation is relevant in any incident involving an automated system where subsequent investigation, regulatory notification, or legal proceedings are possible:

- **Financial services** — preservation of transaction logs, model outputs, input data, and decision records following automated system failures affecting customers or markets
- **Healthcare** — securing of diagnostic outputs, patient data, system logs, and clinical records following automated system failures with patient safety implications
- **Public services** — preservation of decision records, input data, system logs, and communications following automated system failures affecting individuals' rights or access to services
- **Employment** — securing of screening outputs, application data, and system records following automated system failures with employment consequences
- **Platform and content systems** — preservation of moderation decision records, content logs, and system state data following automated system failures with significant user impact
- **Any organisation facing regulatory investigation, litigation, or significant complaint** — where the evidential record of system behaviour will be required by external parties

---

## What It Means in Practice

An organisation that takes evidence preservation seriously must be able to answer these questions at any time:

- Is there a defined evidence preservation procedure that is initiated at the point of incident identification — not after the response has concluded?
- Does the procedure identify the categories of evidence that must be preserved for any automated system incident, and is it applied consistently?
- Is there a technical mechanism — a preservation hold — that stops normal log rotation, data processing, and record updating for the systems involved in an incident?
- Is the preservation procedure known to and understood by the people most likely to identify incidents — operational staff, monitoring teams, and first responders?
- Is there a record of what was preserved, when, and by whom — so that the completeness of preservation can itself be demonstrated?

If those questions cannot be answered, the organisation's evidence preservation depends on someone remembering to act in the immediate aftermath of an incident — the moment of maximum pressure and minimum process discipline. Evidence that depends on memory to be preserved is evidence that will sometimes not be preserved.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Secures the evidential foundation for investigation before normal operations can compromise it | Preservation holds on live systems can create operational disruption that is difficult to manage during an active incident |
| Demonstrates to regulators and courts that the organisation acted responsibly to protect the record | Defining the scope of preservation — what to hold, for how long — requires judgment that must be exercised quickly under pressure |
| Supports complete and accurate investigation by ensuring the full evidential picture is available | Incomplete preservation — missing categories of evidence — may not be apparent until investigation is underway |
| Protects the organisation from allegations of evidence destruction where records are lost through routine processes | Technical preservation mechanisms require advance design and testing — organisations that build them after an incident have already lost time |
| Creates a documented preservation record that is itself evidence of good-faith response | Over-preservation — holding everything indefinitely — creates data management obligations and may conflict with data protection requirements |

---

## The Law

The legal direction across most developed economies is consistent: organisations facing regulatory investigation or litigation have an obligation to preserve relevant evidence — and the destruction of relevant records, even through routine operational processes, can be treated as a serious legal failing.

Data protection and privacy frameworks in many jurisdictions require organisations to be able to demonstrate the integrity of their processing records following incidents involving personal data. Preservation of those records is a practical prerequisite for meeting that obligation.

Regulatory frameworks in financial services, healthcare, and other regulated sectors impose specific evidence preservation obligations when incidents occur — requiring that records be secured and made available to investigators. Some frameworks treat evidence destruction following an incident, regardless of intent, as an aggravating factor in enforcement.

The practical legal risk is direct: an organisation that fails to preserve evidence following an automated system incident — whether through inadequate procedure, technical failure, or the continuation of normal operations — may find itself unable to defend its conduct, unable to respond to regulatory demands, and facing the additional finding that relevant evidence was not protected. That finding is separate from the original incident and carries its own consequences.

---

*RE-05 | Evidence Preservation | Part of the AI Governance Reference Series*
