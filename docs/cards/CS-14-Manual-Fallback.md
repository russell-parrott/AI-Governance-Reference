# CS-14 — Manual Fallback

> **Manual fallback is the defined, tested capability to continue operating a process by human means when an automated system fails, is suspended or must be stopped. Without it, system shutdown is not a governance control — it is an operational crisis.**

---

## What Manual Fallback Is

Manual fallback is the pre-designed, documented and tested process by which an organisation continues to make decisions or deliver services when its automated system is unavailable. It defines who does what, using what information, under what authority, and to what standard, when the system cannot be relied upon.

Manual fallback is not improvisation. It is not the assumption that staff will figure something out. It is a governed procedure — designed before it is needed, documented before it is deployed, and tested before it is relied upon.

Manual fallback applies in several distinct scenarios: planned system downtime for maintenance or updates; unplanned system failure or degraded performance; system suspension during an investigation; and exercise of the shutdown capability (→ CS-11) in response to a governance concern. In each case, the organisation must be able to continue making decisions that affect people — decisions that may be legally required to be made, or that carry ongoing obligations regardless of whether the automated system is available.

---

## Why Manual Fallback Is a Governance Problem

An organisation that can stop its automated system but has no fallback is not in control — it is in a dilemma. If stopping the system causes greater harm than continuing to operate it, the shutdown capability that governance requires becomes a theoretical control that cannot be exercised in practice.

This is a structural governance failure. System shutdown (→ CS-11) is the last line of governance control. For it to be a real control rather than a nominal one, the organisation must be able to absorb the consequences of exercising it. Manual fallback is the mechanism that makes that possible.

Manual fallback also matters in regulatory contexts. A regulator ordering a system to stop, or a court granting an injunction, does not pause the organisation's obligations to the people the system was serving. Credit decisions still need to be made. Benefits still need to be assessed. Fraud still needs to be detected. The absence of a fallback does not suspend those obligations — it transfers them to a process that may never have been designed.

---

## What Manual Fallback Requires

**Process documentation** — the manual process must be documented with sufficient detail that a person unfamiliar with it can execute it. Documentation must cover decision criteria, information sources, authority levels and escalation routes.

**Named roles** — manual fallback must assign specific responsibilities to named roles or individuals. Generic references to "staff" or "management" are insufficient — when the system fails, someone must know they are responsible.

**Information availability** — the information a human needs to make the decisions the system was making must be available in the fallback scenario. If that information lives only in the system, the fallback is not functional.

**Authority alignment** — the authority levels that apply to manual decisions must be defined. Decisions made manually must carry the same governance weight — and the same accountability — as decisions made by the automated system.

**Testing** — manual fallback must be tested. A process that has never been executed will not execute cleanly under the pressure of a system failure or regulatory suspension. Testing must be documented and its findings acted upon.

**Capacity** — the organisation must have sufficient human capacity to execute the fallback for a meaningful period. A fallback that exhausts staff capacity within hours is not a sustainable control.

---

## Governance Connection

Manual fallback is the operational complement to system shutdown (→ CS-11). Together they constitute a genuine shutdown capability — the ability to stop the system and continue functioning. Human override (→ CS-13) and human review (→ CS-03) depend on staff having the capacity and procedures to act independently of the system. Incident escalation (→ CS-12) may trigger fallback activation. The existence and testing of fallback procedures should be documented as part of the system's governance record (→ RE-07, RE-13).

---

**See also:** CS-11 (System Shutdown), CS-13 (Human Override), CS-03 (Human Review), CS-12 (Incident Escalation), SP-23 (Robustness), GQ-05 (Can You Stop The System?)

---

*CS-14 | Manual Fallback | Control Systems*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
