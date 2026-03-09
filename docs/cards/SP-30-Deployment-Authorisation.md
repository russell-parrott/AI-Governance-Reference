# SP-30 — Deployment Authorisation

> **Someone put this system into operation. Who? When? On what basis? In many organisations, the honest answer is: nobody formally decided. It just started running.**

---

## What Is It?

Deployment authorisation is the formal, recorded decision to put an automated system into operational use — documenting who approved it, what they reviewed, what conditions were attached, and what the system was authorised to do.

It is the governance act that transforms a system from a development or procurement exercise into an operational commitment. Without it, the system is running without anyone having formally taken responsibility for starting it.

Many organisations deploy AI systems without a formal authorisation step. Systems move from pilot to production through operational momentum. A team builds a model and begins using it. A vendor tool is procured and configured without governance sign-off. An existing system is extended to new use cases without anyone formally approving the extension. The result is authority ambiguity — no record of who decided the system should run, under what conditions, or whether anyone assessed whether it should.

---

## Why Does It Matter?

Deployment authorisation matters because accountability requires a starting point. The governance question — who is responsible for this system — cannot be answered without a record of who decided to deploy it and what they knew at the time.

Without a deployment authorisation record, the accountability chain has no anchor. When something goes wrong, investigators cannot establish whether anyone exercised meaningful governance over the decision to deploy. The organisation cannot demonstrate that the system was approved — only that it was operating.

Deployment authorisation also defines the scope of approved operation. It creates a documented baseline against which subsequent changes can be measured. A system operating beyond its authorised scope, or after material changes that were not separately authorised, has drifted outside its governance.

---

## What's the Real Risk?

**No accountability anchor when harm occurs.** When a harmful automated decision is challenged, the first question is who approved this system and on what basis. An organisation that cannot answer that question has no defensible starting point for its governance narrative.

**Systems running without anyone knowing they were approved.** In large organisations, systems can operate for years through inherited arrangements — nobody who currently works there was present when the system started, and nobody can identify who authorised it. The system is ungoverned by default.

**Scope drift without governance.** Without a documented authorisation defining what a system is approved to do, extensions to new populations, use cases or geographies cannot be measured against any approved baseline. Every expansion is ungoverned because there is nothing to expand beyond.

**Informal deployment normalised.** Organisations where systems routinely reach production without formal authorisation develop a culture in which the governance step is seen as optional. Each informal deployment reinforces the pattern.

---

## Where Does It Appear?

Deployment authorisation failures are a governance concern wherever systems reach operational use without a formal approval process:

- **Technology-led organisations** — where technical teams have authority to deploy models without governance sign-off from legal, compliance or senior management
- **Procurement without governance** — where third-party AI tools are purchased and configured by operational teams without formal assessment and approval
- **Pilot-to-production transitions** — where systems developed for limited testing enter full operational use without a formal go-live decision
- **System expansions** — where models approved for one use case, population or geography are extended without reauthorisation
- **Inherited systems** — where responsibility for systems deployed under previous management arrangements has never been formally reassigned

---

## What It Means in Practice

An organisation that takes deployment authorisation seriously must be able to answer these questions at any time:

- Is there a defined process that every automated system must go through before entering operational use?
- Can the organisation produce a documented authorisation record for each system currently in operation?
- Does each authorisation record identify who approved the deployment, what they reviewed, and what conditions were attached?
- Is expansion to new populations, use cases or geographies treated as a separate authorisation event?
- Are authorisation records retained for the operational lifetime of the system and beyond?

If those questions cannot be answered, the organisation is operating systems whose governance provenance cannot be established — and cannot be defended.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Creates an accountability anchor that identifies who approved what and on what basis | Formal authorisation processes can slow deployment timelines, creating pressure to treat them as obstacles |
| Defines the scope of approved operation as a documented baseline for subsequent governance | Retrospectively authorising systems already in operation requires reconstructing decisions that were never formally made |
| Enables scope drift to be detected by measuring operation against the documented authorisation | Organisations with large portfolios of legacy systems may face significant resource requirements to establish authorisation records |
| Provides a defensible governance record when deployments are examined by regulators or in litigation | Authorisation requirements may be seen as bureaucratic overhead in organisations where technical agility is prioritised |
| Creates organisational discipline around the deployment decision as a consequential governance act | Clear authorisation requirements make visible the frequency with which governance has been bypassed, which may be uncomfortable |

---

## The Law

The legal direction across most developed economies is that organisations must be able to demonstrate meaningful governance over the automated systems they operate. That demonstration begins with the deployment decision. An organisation that cannot show it formally decided to deploy a system — and assessed whether it should — has a fundamental gap in its governance record.

Data protection and privacy frameworks require that automated processing of personal data be authorised, documented and assessed before it begins. The requirement to conduct a Data Protection Impact Assessment before high-risk automated processing is effectively a deployment authorisation obligation for systems that process personal data.

AI-specific legislation formalises this further. The EU AI Act requires that high-risk systems undergo conformity assessment before being placed on the market or put into service. That assessment is a mandatory authorisation step. The practical legal risk is direct: an organisation that cannot demonstrate it formally authorised its systems to operate is in a weak position before any regulator examining whether those systems were properly governed.

---

*SP-30 | Deployment Authorisation | Part of the AI Governance Reference Series*
