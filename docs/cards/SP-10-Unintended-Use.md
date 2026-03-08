# SP-10 — Unintended Use

> **After all this, you realise people might use it wrong. This card explores that risk.**

---

## What Is It?

Unintended use is what happens when an automated system is applied in ways that were not part of its design, authorisation, or validated scope — whether through deliberate repurposing, gradual drift, misunderstanding, or the ingenuity of people finding new applications for available tools.

It is distinct from intended use, which describes what the system was authorised to do, and from system limits, which describes what it can do reliably. Unintended use describes what it is actually being used for — when that departs from both.

Unintended use is not always malicious. It is frequently the result of operational convenience, misplaced confidence, or genuine belief that a system that works well for one purpose will work equally well for a related one. The intention is often good. The governance problem is the same regardless.

---

## Why Does It Matter?

Automated systems attract unintended use precisely because they appear to work. A system producing confident outputs in its intended context will be noticed by people facing adjacent problems. It is available. It is fast. It produces results. The question of whether it was designed and validated for this new purpose is not always asked.

When it is not asked, the organisation finds itself relying on outputs produced by a system operating outside its validated scope — outputs that may be unreliable, unfair, or unlawful in the new context, without any of the people using them knowing that. The system has not changed. Its relationship to the problem it is now solving has.

---

## What's the Real Risk?

**Outputs relied upon in contexts they were never validated for.** A system used outside its intended scope produces outputs of unknown reliability. The people relying on those outputs may have no basis for knowing the system was not designed for their situation. The harm flows from misplaced confidence in results that were never meant to apply.

**Governance structures that do not cover actual use.** The monitoring, oversight, and accountability arrangements in place for a system are designed around its intended use. When the system is used differently, those arrangements may not cover what it is now doing. The system is governed for what it was supposed to be doing, not for what it is actually doing.

**Legal exposure from use the system was never assessed for.** Deploying a system in a context it was not designed for may create legal liability that the original risk assessment never considered. Data processed in new ways may not have been lawfully collected for that purpose. Decisions made in new contexts may not meet the fairness and accuracy requirements that apply there.

**Normalisation of unintended use.** Once a system begins being used outside its intended scope, that use tends to become routine. It becomes part of operational practice. By the time it is formally reviewed — if it ever is — it is entrenched, and the cost of unwinding it is significant.

Responsibility for identifying and addressing unintended use sits with whoever holds governance authority over the system. Unintended use that continues without challenge has, in practice, been permitted.

---

## Where Does It Appear?

Unintended use is a risk in any organisation where automated systems are deployed and access to their outputs is not tightly controlled:

- **Financial services** — fraud detection systems used to inform credit decisions they were not designed or validated for
- **Healthcare** — diagnostic tools applied to patient populations or conditions outside their validated clinical scope
- **Employment** — recruitment screening systems applied to internal promotion, performance management, or redundancy decisions
- **Public services** — eligibility assessment systems used to inform enforcement decisions beyond their original purpose
- **Platforms and content** — moderation systems applied to content categories or languages outside their training and validation
- **Any organisation where system outputs are visible and accessible** — where operational teams find new uses for available tools without formal review

---

## What It Means in Practice

An organisation that takes unintended use seriously must be able to answer these questions at any time:

- Is there a process for identifying when a system is being used in ways not covered by its intended use documentation?
- Are the people with access to a system's outputs aware of what it was and was not designed to do?
- When unintended use is identified, is there a defined process for assessing whether it should be formalised, restricted, or stopped?
- Are there controls on who can access and act on system outputs, to limit the risk of unsanctioned repurposing?
- When was the system's actual use last compared against its documented intended use?

If those questions cannot be answered, the organisation does not have a complete picture of what its system is being used for. A system whose actual use has diverged from its authorised use is, in the places where it diverges, an ungoverned system.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Identifying unintended use reveals governance gaps that formal processes may have missed | Unintended use is often invisible to central governance functions until it is well established |
| Early detection allows assessment of whether the use should be formalised or restricted | Operational teams that have found a system useful are resistant to restrictions on how they use it |
| Protects the organisation from legal and regulatory exposure created by unsanctioned use | Controlling access to system outputs without impeding legitimate use requires careful design |
| Supports honest communication with regulators about how systems are actually being used | The line between intended and unintended use can be genuinely unclear, particularly for systems with broad output types |
| Creates a feedback loop that can improve intended use documentation for future systems | Normalised unintended use can be difficult to unwind once it has become part of operational practice |

---

## The Law

The legal direction across most developed economies is consistent: organisations are accountable for how their automated systems are used — not just how they were designed to be used.

Data protection and privacy frameworks in many jurisdictions require that personal data be processed only for specified, explicit, and legitimate purposes. Unintended use that involves processing personal data for purposes beyond the original specification may breach those requirements regardless of whether the organisation was aware the use was occurring.

AI-specific legislation is advancing requirements for organisations to monitor and control actual system use, not just document intended use. The gap between documented purpose and actual operation is an area of increasing regulatory attention, particularly where that gap involves high-risk decision contexts.

The practical legal risk is direct: an organisation that cannot demonstrate its automated systems are being used only for their authorised purposes — and that it has mechanisms to detect and address departures from that — is exposed to the full consequences of uses it may not have known were happening in its name.

---

*SP-10 | Unintended Use | Part of the AI Governance Reference Series*
