# CS-02 — Escalation Procedures

> **The reviewer has found a problem. Who do they tell? This card explains the path upward.**

---

## What Is It?

Escalation procedures are the defined routes by which a problem identified at one level of an organisation is formally passed to a higher level with the authority, resource, or expertise to act on it.

In the context of automated systems, escalation is what happens after a human reviewer finds something that exceeds their authority or competence to resolve. It is the mechanism that connects the person who spotted the problem to the person or body that can do something about it.

An escalation procedure is not an informal conversation or a vague instruction to "raise concerns." It is a defined path — specifying who receives the escalation, in what form, within what timeframe, and what happens next.

---

## Why Does It Matter?

Problems identified at the operational level of an organisation are not always resolvable at that level. A reviewer who finds a pattern of erroneous outputs may not have the authority to pause the system. A monitoring team that detects unexpected drift may not have the resource to investigate its cause. A frontline operator who suspects a system is behaving outside its intended scope may not know who to tell.

Without defined escalation procedures, those problems stay where they were found. They may be noted, discussed informally, or simply absorbed into daily operations without reaching anyone in a position to act. The organisation is nominally aware of a problem it has not actually addressed.

---

## What's the Real Risk?

**Problems that never reach decision-makers.** Without a defined escalation path, problems identified at operational level are filtered, delayed, or lost before reaching anyone with the authority to respond. By the time leadership becomes aware, the problem has grown significantly.

**Unclear ownership during escalation.** When a problem is passed upward without a defined procedure, it is often unclear who has taken ownership of it at each stage. The problem moves but no one is formally responsible for it. It can stall indefinitely in the gap between the person who raised it and the person who should act on it.

**Chilling effect on reporting.** Where escalation procedures are unclear, burdensome, or culturally discouraged, people with genuine concerns do not raise them. The organisation loses the early warning system that escalation is meant to provide.

**Regulatory exposure.** When an incident investigation asks why a known problem was not acted on sooner, the answer frequently involves a failed escalation — a problem that was identified at operational level but never reached anyone with the authority to stop the harm.

Responsibility for designing and maintaining escalation procedures sits with the organisation's leadership. A procedure that exists on paper but is not used, not understood, or not supported from the top is not a procedure. It is a document.

---

## Where Does It Appear?

Escalation procedures for automated systems are relevant across every sector and operational context:

- **Financial services** — escalation routes for automated fraud flags, model anomalies, and compliance concerns that exceed front-line authority to resolve
- **Healthcare** — defined paths for escalating concerns about automated diagnostic or triage outputs that a clinician cannot resolve independently
- **Public services** — formal escalation routes for caseworkers who identify patterns of error in automated benefit or enforcement decisions
- **Employment** — routes for HR and management to escalate concerns about automated screening or monitoring outputs to senior leadership or legal teams
- **Technology and platforms** — escalation paths for content moderation, trust and safety, and engineering teams when automated systems behave unexpectedly
- **Any organisation operating high-risk automated systems** — where the consequences of unresolved problems are significant enough to require senior attention

---

## What It Means in Practice

An organisation that takes escalation procedures seriously must be able to answer these questions at any time:

- Is there a defined escalation path for problems identified with this system, and does everyone involved know what it is?
- Does the escalation path reach someone with the authority and resource to act on the problem?
- Is there a record of escalations made, received, and resolved that could be produced in an investigation?
- What is the expected timeframe for each stage of escalation, and is that timeframe being met?
- Are people confident that escalating a concern will be taken seriously rather than discouraged?

If those questions cannot be answered, the organisation has a review process that identifies problems and a leadership structure that remains unaware of them. The gap between those two things is where preventable harm accumulates.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Ensures problems identified at operational level reach people with the authority to act | Escalation procedures that are poorly communicated are not used when they are most needed |
| Creates a documented record of when problems were raised and how they were handled | In practice, escalation is often culturally discouraged — people fear being seen as raising problems |
| Provides a structured response mechanism that does not depend on individual initiative | Complex organisations may have multiple escalation routes that create confusion about which applies |
| Connects frontline awareness to leadership accountability | Escalation without defined response timeframes can result in problems sitting unresolved at higher levels |
| Supports regulatory compliance by demonstrating that problem identification leads to action | A procedure that exists but is rarely used provides little protection when an incident is investigated |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that problems identified within their automated systems were escalated, acted upon, and documented — not simply identified.

Data protection and privacy frameworks in many jurisdictions impose obligations to respond to processing failures within defined timeframes. Meeting those obligations requires functioning escalation procedures that move problems from detection to decision quickly enough to limit harm and meet reporting deadlines.

AI-specific legislation is advancing requirements for internal escalation and governance structures as baseline obligations for high-risk systems. Regulators examining incidents look specifically at whether escalation procedures existed, whether they were used, and whether they reached the right people in time.

The practical legal risk is direct: an organisation that identified a problem with its automated system but cannot demonstrate that the problem was escalated, owned, and acted upon is in a significantly weaker position than one that can show a clear, documented path from detection to resolution.

---

*CS-02 | Escalation Procedures | Part of the AI Governance Reference Series*
