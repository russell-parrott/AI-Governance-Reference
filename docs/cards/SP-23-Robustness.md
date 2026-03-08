# SP-23 — Robustness

> **Robustness is a system's ability to perform reliably under conditions that deviate from the expected — adversarial inputs, edge cases, distributional shift, partial failures. A system that functions well in testing but degrades under real-world stress is not a governed system.**

---

## What Robustness Is

Robustness is the property of an automated system that maintains reliable, safe and governed performance under conditions beyond those it was designed and tested for. A robust system does not simply perform well when conditions are normal. It degrades gracefully, fails safely, and behaves predictably when conditions are abnormal.

Robustness has several distinct dimensions in AI governance:

**Adversarial robustness** — resistance to deliberate attempts to manipulate the system's inputs or outputs. Adversarial attacks — crafted inputs designed to cause misclassification, evasion or manipulation — are a documented threat to AI systems in fraud detection, content moderation, credit assessment and security applications.

**Distributional robustness** — reliable performance when input data differs from the training distribution. Related to data drift (→ SP-20), but specifically addressing the system's designed tolerance for variation rather than its response to gradual change over time.

**Edge case robustness** — consistent, safe behaviour when encountering inputs the system was not specifically designed to handle. Related to system limits (→ SP-03) and exception handling (→ CS-06).

**Operational robustness** — continued governed operation under partial system failures, degraded data quality, or infrastructure disruption. Connects to manual fallback (→ CS-14) and system shutdown (→ CS-11).

---

## Why Robustness Is a Governance Problem

A system that has not been assessed for robustness has been tested for one set of conditions and deployed into all conditions. The gap between what was tested and what the system encounters in production is ungoverned.

Robustness failures tend to manifest at the worst moments — under high load, adversarial pressure, or novel conditions that are precisely the circumstances where reliable automated decision-making matters most. A fraud detection system that degrades under a coordinated attack fails at the moment of greatest need. A credit model that behaves erratically at the edges of its training distribution may affect the most vulnerable applicants — those whose profiles are furthest from the norm.

In regulated sectors, robustness is increasingly an explicit requirement. The EU AI Act requires that high-risk AI systems be designed to be robust to errors, faults and inconsistencies. Financial regulators require that models perform reliably under stress scenarios. Cybersecurity and critical infrastructure regulation requires that systems fail safely.

The governance question robustness raises is not whether the system was tested. It is whether it was tested for the conditions it will actually face — including the conditions that were not anticipated.

---

## What Robustness Governance Requires

**Robustness assessment at deployment** — testing must include adversarial scenarios, edge cases and distributional variation, not only expected-case performance. Assessment results must be documented.

**Defined performance bounds** — governance requires that someone has specified in advance what behaviour is acceptable under abnormal conditions, and what behaviour triggers intervention.

**Ongoing robustness monitoring** — robustness must be reassessed when the system changes, when its operating environment changes, or when new adversarial techniques emerge.

**Failure mode documentation** — the ways in which the system can fail — and the governance responses to each — must be documented and understood by the people responsible for operating it.

**Safe degradation design** — systems operating in high-risk contexts should be designed so that failure produces a safe output — referral to human review, suspension, or a defined default — rather than a harmful automated decision.

---

## Governance Connection

Robustness is a system property that underpins the control systems described elsewhere in the Atlas. System testing (→ CS-08) must include robustness scenarios. Exception handling (→ CS-06) is the operational response to robustness failures. Manual fallback (→ CS-14) is the governance mechanism for when robustness fails entirely. System limits (→ SP-03) define the boundaries that robustness testing must probe. In legal terms, a system that fails under foreseeable conditions may engage product liability (→ LL-05) and regulatory enforcement (→ LR-07) obligations.

---

**See also:** SP-20 (Data Drift), SP-03 (System Limits), CS-06 (Exception Handling), CS-08 (System Testing), CS-11 (System Shutdown), CS-14 (Manual Fallback), LL-05 (Product Safety and Liability)

---

*SP-23 | Robustness | System Properties*
*This card explains conceptual distinctions relevant to AI governance. It does not constitute legal advice.*
