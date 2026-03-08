# SP-13 — System Inputs

> **Back to the system itself. What specific information does it need to run?**

---

## What Is It?

System inputs are the specific pieces of information an automated system receives in order to produce its outputs — the data it needs to function, in the form it needs to receive it.

Every automated system operates on inputs. A credit scoring system receives financial history, income data, and personal identifiers. A medical triage system receives patient symptoms, age, and vital signs. A recruitment screening system receives application forms, CVs, and assessment results. The system takes those inputs, processes them, and produces an output.

System inputs are not simply raw data. They are defined, structured feeds of specific information that the system was designed to receive. What information is included, how it is formatted, and whether it is complete and current all directly determine what the system can produce.

---

## Why Does It Matter?

An automated system can only work with what it receives. If the inputs are wrong, incomplete, out of date, or different from what the system was designed to process, the outputs will be unreliable — regardless of how well the system itself was built.

The inputs a system receives define the ceiling of its accuracy. A perfectly designed system fed poor inputs produces poor outputs. And because the system processes inputs automatically and at scale, input problems propagate across every decision the system makes until someone identifies and corrects them.

---

## What's the Real Risk?

**Garbage in, garbage out — at scale.** Input errors are not isolated. Every case processed while a faulty input is in place receives a decision influenced by that fault. The problem is not one bad decision. It is a systematic pattern of bad decisions that persists until the input problem is found and fixed.

**Inputs changing without the system knowing.** The data feeds that supply an automated system can change in format, content, or completeness without anyone formally notifying the system's operators. The system continues processing on the assumption that its inputs are what they were designed to be. They may no longer be.

**Missing inputs handled silently.** Many systems are designed to handle missing data by substituting defaults or omitting fields. That handling may not be visible in the output. A decision produced without a critical piece of input data looks the same as one produced with all inputs present — but the underlying basis is fundamentally different.

**Input manipulation.** Where inputs can be influenced by the people or entities being assessed, there is a risk that inputs are gamed to produce desired outputs. A system that does not monitor for unusual input patterns is vulnerable to manipulation that its outputs alone will not reveal.

Responsibility for defining, validating, and monitoring system inputs sits with whoever holds operational accountability for the system — not the team supplying the data feeds.

---

## Where Does It Appear?

System inputs are a governance concern wherever automated systems process information to reach decisions:

- **Financial services** — income data, credit history, transaction records, and identity information feeding automated lending and fraud systems
- **Healthcare** — patient demographics, symptom data, test results, and medical history feeding diagnostic and triage systems
- **Public services** — application data, income and household records, and compliance history feeding eligibility and assessment systems
- **Employment** — CV data, assessment scores, and application form responses feeding automated screening systems
- **Insurance** — vehicle, property, or health data feeding automated pricing and risk assessment systems
- **Any system receiving data from external or third-party sources** — where the organisation does not fully control what it receives

---

## What It Means in Practice

An organisation that takes system inputs seriously must be able to answer these questions at any time:

- What specific information does this system require as inputs, and is that formally documented?
- How does the system behave when inputs are missing, incomplete, or outside expected parameters?
- Are input feeds monitored for changes in format, content, or completeness that could affect output quality?
- Is there a process for validating inputs before they are processed by the system?
- When were the system's input requirements last reviewed against what it is actually receiving?

If those questions cannot be answered, the organisation does not have a complete picture of what its system is working with. Outputs that cannot be traced to verified inputs cannot be relied upon — and cannot be defended when they are challenged.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Defined input requirements create a clear standard against which actual inputs can be validated | Input requirements defined at deployment become outdated as data sources and formats evolve |
| Input monitoring enables early detection of data quality problems before they affect outputs | Changes to upstream data feeds may not be communicated to system operators in time to prevent impact |
| Documented inputs support incident investigation — problems can be traced to their source | Complex systems may receive inputs from many sources simultaneously, making comprehensive monitoring difficult |
| Clear input specifications support vendor and data supplier accountability | Systems designed to handle missing data gracefully may obscure input problems from operational view |
| Enables meaningful audit — reviewers can check what the system actually received against what it should have | Input validation adds processing overhead that organisations under operational pressure may reduce or remove |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to account for the information their automated systems acted on — not just the decisions those systems produced.

Data protection and privacy frameworks in many jurisdictions require that personal data processed by automated systems be accurate and fit for purpose. Where inaccurate or incomplete inputs produce incorrect outputs that affect individuals, legal exposure follows regardless of whether the system itself was correctly designed.

AI-specific legislation is advancing requirements for input documentation and validation as baseline obligations for high-risk systems. Regulators examining incidents increasingly look at what information the system received, not just what it decided — treating input quality as an integral part of system governance.

The practical legal risk is direct: an organisation that cannot describe what its system received as inputs, confirm those inputs were validated, and demonstrate they were appropriate for the decisions the system made, cannot fully account for the outputs that system produced.

---

*SP-13 | System Inputs | Part of the AI Governance Reference Series*
