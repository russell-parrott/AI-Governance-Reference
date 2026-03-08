# CS-08 — System Testing

> **Before a change goes live, you test. This card explains how you check it still works.**

---

## What Is It?

System testing is the structured process of checking an automated system — or a proposed change to it — against defined criteria before it is permitted to operate in a live environment or return to live operation after modification.

Testing is not using the system and seeing what happens. It is a deliberate, controlled examination of specific aspects of the system's behaviour under defined conditions, producing documented evidence of whether the system performs as expected.

A test has defined inputs, defined expected outputs, and a recorded result. It is conducted by someone with the knowledge to interpret what the results mean. And it produces evidence — not confidence, not reassurance, but a documented record of what was checked, what was found, and what conclusion was reached.

---

## Why Does It Matter?

Automated systems can appear to work correctly while producing outputs that are wrong, biased, or unreliable in specific circumstances. A system that passes a cursory check in normal conditions may fail significantly in edge cases, on under-represented populations, or when inputs differ from what it was trained on.

Testing is the mechanism that finds those failures before they affect real people. It creates a controlled environment in which the system's behaviour can be examined without the consequences of live operation. A failure found in testing is a finding. A failure found in live operation is an incident.

---

## What's the Real Risk?

**Untested changes entering live operation.** A change that has not been tested may introduce new errors, new biases, or unexpected interactions with other parts of the system. Those problems do not announce themselves. They surface through outputs that are wrong — often affecting real people before anyone identifies the cause.

**Testing that is too narrow.** Testing conducted only on standard cases in normal conditions may confirm that the system works well for the cases it handles most often while missing failures in edge cases, unusual inputs, or specific subpopulations. A system that passes narrow testing has not been shown to work broadly. It has been shown to work in the conditions tested.

**No documented evidence of testing.** Where testing is conducted informally — checks performed by the team making the change, results not recorded — the organisation has no evidence it can produce in an audit or investigation. Testing that cannot be demonstrated is, for governance purposes, testing that did not happen.

**Testing as a formality.** Where testing is required by process but treated as a box to check rather than a genuine examination, it provides false assurance. A system that passed a perfunctory test has a test record. It does not have a safety record.

Responsibility for ensuring that testing is genuine, sufficiently broad, and properly documented sits with whoever holds governance authority over the system — not with the technical team that built the change.

---

## Where Does It Appear?

System testing is a governance requirement wherever automated systems are deployed or modified:

- **Financial services** — testing of updated credit, fraud, and pricing models before deployment to confirm outputs remain accurate and compliant
- **Healthcare** — clinical validation of diagnostic and triage systems before changes are applied to patient-affecting processes
- **Public services** — testing of eligibility and assessment system changes to confirm accuracy across the range of cases the system will encounter
- **Employment** — bias and accuracy testing of screening system updates before they affect candidate populations
- **Platform and content systems** — testing of changes to recommendation, moderation, and ranking systems to assess behavioural impact before wide release
- **Any system subject to regulatory oversight** — where evidence of pre-deployment testing may be required as a condition of compliance

---

## What It Means in Practice

An organisation that takes system testing seriously must be able to answer these questions at any time:

- Is there a defined testing requirement that applies to all changes before they enter live operation?
- Does testing cover not just standard cases but edge cases, unusual inputs, and the full range of populations the system affects?
- Is there a documented record of each test — what was tested, under what conditions, what was found, and who reviewed the results?
- Who has the authority to confirm that testing is sufficient and to approve the system for live deployment on that basis?
- What happens when testing identifies a problem — is there a defined process for resolving it before deployment proceeds?

If those questions cannot be answered, changes are entering the live system on the basis of the developer's confidence rather than documented evidence. Confidence that a system works is not the same as evidence that it does — and when something goes wrong, only evidence protects the organisation.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Identifies failures before they affect real people and produce real harm | Testing can only find problems in the conditions and cases it was designed to examine |
| Produces documented evidence of due diligence that can be produced in audit or investigation | Comprehensive testing of complex systems requires significant time, resource, and expertise |
| Creates a quality gate that prevents untested changes from entering live operation | Testing conducted by the same team that built the change is subject to confirmation bias |
| Supports accountability — testing records show what was known before deployment | Passing a test confirms the system behaved correctly in test conditions, not that it will do so in all live conditions |
| Enables comparison across versions — testing results can be tracked over time to identify trends | Organisations under time pressure frequently compress testing to the point where it provides limited assurance |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to demonstrate that automated systems — and changes to them — were tested before deployment and that testing produced documented evidence of fitness for purpose.

Data protection and privacy frameworks in many jurisdictions require that automated processing of personal data be accurate and appropriate for its purpose. Pre-deployment testing is a practical requirement for meeting those obligations — an organisation that cannot show it tested its system before exposing individuals to its outputs is in a weak position when those outputs are challenged.

AI-specific legislation is advancing formal testing and validation requirements for high-risk systems, with some frameworks specifying testing methodologies, documentation standards, and independent verification requirements. Test records are increasingly treated as core governance documentation, not supplementary technical material.

The practical legal risk is direct: an organisation that deployed or updated an automated system without documented testing cannot demonstrate it took reasonable steps to confirm the system was fit for the decisions it was making — and that absence of evidence is itself evidence of inadequate governance.

---

*CS-08 | System Testing | Part of the AI Governance Reference Series*
