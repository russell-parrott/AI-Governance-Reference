# CS-04 — Intervention Authority

> **Sometimes you need to stop the machine. Who has that power? This card answers that.**

---

## What Is It?

Intervention authority is the formally assigned power to override, modify, suspend, or stop an automated system — the designated right to act on the system itself rather than simply on its outputs.

It is distinct from decision authority, which covers who makes binding determinations about what the system produces. Intervention authority covers who can act on the system when the situation requires it — when outputs are wrong, when behaviour is unexpected, when harm is occurring, or when circumstances require the system to be taken out of operation before normal governance processes have run their course.

Intervention authority is not an emergency power improvised under pressure. It is a defined, documented, pre-assigned capability — held by specific people, exercisable under specific conditions, with specific actions available to them.

---

## Why Does It Matter?

Automated systems run continuously. They do not pause while governance processes deliberate. When something goes wrong — when outputs are harmful, when behaviour has changed unexpectedly, when a failure is in progress — the organisation needs to be able to act on the system in real time, not after a review cycle has completed.

Without pre-assigned intervention authority, the question of who can act becomes the first problem to resolve at the moment when speed matters most. In the time it takes to establish who has the power to intervene, the system continues operating. The harm continues accumulating. Intervention authority exists so that the answer to "who stops this?" is already known before the question needs to be asked.

---

## What's the Real Risk?

**Harm that continues while authority is being established.** When an automated system is producing harmful outputs and no one has pre-assigned intervention authority, the first response is not intervention — it is discussion about who can intervene. Every moment of that discussion is a moment in which the system continues operating. The harm is not paused while governance works out what to do.

**Intervention by people without the authority or knowledge to act safely.** Where intervention authority is undefined, people under pressure act anyway — using whatever technical access they have, without a clear picture of the consequences. An intervention made without authority and without understanding of the system's dependencies can create new problems while attempting to address the original one.

**Authority held by people who are unavailable when needed.** Intervention authority concentrated in a single senior individual is a governance structure that functions only when that individual is reachable. At three in the morning, during a weekend, when the designated person is travelling — intervention authority that cannot be exercised is no authority at all.

**Intervention that creates its own accountability problem.** An intervention made without documented authority, without a record of why it was made and what was done, creates a governance gap on top of the operational problem it was meant to address. How the system was stopped matters as much as that it was stopped.

Responsibility for defining and maintaining intervention authority sits with whoever holds governance authority over the system. It cannot be left to emerge from whoever happens to have technical access when something goes wrong.

---

## Where Does It Appear?

Intervention authority is a governance requirement wherever automated systems operate with consequences significant enough to require the ability to stop them:

- **Financial services** — authority to suspend automated trading, lending, or fraud systems when behaviour falls outside defined parameters or creates regulatory exposure
- **Healthcare** — authority to remove a diagnostic or triage system from clinical use when outputs raise patient safety concerns
- **Public services** — authority to suspend automated eligibility or enforcement systems when errors affecting vulnerable individuals are identified
- **Employment** — authority to halt automated screening or monitoring processes when bias, error, or legal concerns require immediate action
- **Platform and content systems** — authority to suspend recommendation or moderation systems when outputs cause significant user harm or reputational damage
- **Any system where a failure in live operation could cause harm that grows faster than normal governance processes can respond** — which describes most automated systems operating at scale

---

## What It Means in Practice

An organisation that takes intervention authority seriously must be able to answer these questions at any time:

- Who holds intervention authority for this system, and is that formally documented?
- What specific actions does that authority cover — pause, modify, override, suspend, shut down — and under what conditions can each be taken?
- Is intervention authority held by more than one person, so that it can be exercised when the primary holder is unavailable?
- Is there a record created when intervention authority is exercised — what was done, why, by whom, and at what time?
- Does the person holding intervention authority have the knowledge and technical access to exercise it effectively, not just the formal designation?

If those questions cannot be answered, the organisation has automated systems it may not be able to stop when it needs to. That is not a technical risk. It is a governance failure waiting for the operational moment that will expose it.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Enables rapid response when a system is causing harm — the authority to act is already established | Intervention authority concentrated in too few people creates availability risk when the designated holder is unreachable |
| Creates clear accountability for intervention decisions — who acted, under what authority, and when | Broadly distributed intervention authority creates the risk of conflicting interventions or premature action |
| Pre-assignment prevents paralysis at the moment of crisis — the governance question is answered before the operational question arises | People holding intervention authority require sufficient technical understanding of the system to intervene safely |
| Documentation of interventions creates a record that supports subsequent investigation and regulatory response | Intervention authority without clear criteria for when it should be exercised can lead to under-use or over-use |
| Supports regulatory compliance by demonstrating that the organisation retains genuine control over its automated systems | Defining the boundary between operational adjustment and formal intervention requires clarity that many organisations have not established |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate not just that they monitored their automated systems but that they retained the practical ability to act on them — to modify, suspend, or stop them — when circumstances required it.

Data protection and privacy frameworks in many jurisdictions require that organisations be able to respond promptly to processing failures, including halting processing that is causing harm or breaching legal requirements. That obligation presupposes that someone has the authority and practical capability to do so. An organisation that could not stop its system is an organisation that was not in control of it.

AI-specific legislation is advancing explicit requirements for human intervention capability in automated systems, with some frameworks requiring that deploying organisations demonstrate the technical and organisational ability to intervene in system operation at any time. The ability to intervene — not just the intention to — is increasingly a legal requirement.

The practical legal risk is direct: an organisation that allowed harm to continue because no one had the authority or ability to stop the system has not just failed to exercise control. It has demonstrated that control was never genuinely in place — and that is a significantly more serious finding than a single governance failure.

---

*CS-04 | Intervention Authority | Part of the AI Governance Reference Series*
