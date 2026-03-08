# GV-02 — Bias

> **The word is used constantly and means different things in different contexts. This card explains what bias is in automated systems, where it comes from, and why eliminating it is harder than it sounds.**

---

## What Is It?

Bias in automated systems is the systematic tendency of a system to produce outputs that favour or disadvantage particular individuals or groups in ways that are not justified by the factors the system is intended to assess.

The word systematic is doing important work in that definition. Every automated system makes errors. Bias is not error in general. It is error that follows a pattern — errors that are more frequent, more severe, or more consequential for some people than for others, in ways that reflect characteristics of those people rather than the quality of the information used to assess them.

Bias in automated systems has multiple sources, each of which produces different patterns of unfair outcome:

**Training data bias** arises when the data used to train a system does not accurately represent the population the system will be applied to. If historical data reflects historical discrimination — lending decisions that denied credit to qualified applicants from particular groups, hiring decisions that excluded qualified candidates on irrelevant grounds — a system trained on that data learns the historical pattern, including the historical bias.

**Measurement bias** arises when the variables used in a system do not measure what they are intended to measure equally well across different populations. A variable that accurately predicts repayment risk for one demographic group but is a poor predictor for another introduces bias through the differential quality of measurement, not through deliberate discrimination.

**Label bias** arises when the outcomes used to define what the system should predict reflect historical human judgments that were themselves biased. If the "correct" answers the system was trained to reproduce were produced by biased human decision-makers, the system has been trained to replicate their bias.

**Feedback loop bias** arises when the system's outputs influence the data that is later used to assess it. A system that predicts high risk for individuals from certain areas produces outcomes — more scrutiny, more refusals, more adverse actions — that generate data confirming the prediction, creating a self-reinforcing cycle.

---

## Why Does It Matter?

Bias converts the scale advantages of automated systems into scale disadvantages for the people the system treats unfairly. A human decision-maker with biased judgment affects the individuals they interact with. An automated system with equivalent bias affects everyone it processes — potentially millions of people — with the same pattern of unfair treatment, at a speed and consistency no human could match.

Bias also matters because it is frequently invisible to the people designing, deploying, and operating biased systems. The patterns that produce biased outcomes are embedded in data, in variable selection, in label construction, and in feedback loops that look like neutral technical choices. Organisations that have not specifically looked for bias frequently believe their systems are unbiased — not because they are, but because the bias has not been measured.

---

## What's the Real Risk?

**Bias that is present but unmeasured.** An organisation that has not assessed its system for bias does not know whether it is biased. The absence of measurement is not evidence of absence. A system that has never been assessed for differential error rates across demographic groups may be producing substantially different outcomes for different populations — producing systematic harm at scale — without the organisation being aware of it.

**Debiasing that addresses one source while leaving others intact.** Technical debiasing interventions typically address specific, identifiable sources of bias — removing a variable, reweighting training data, applying post-processing adjustments. They address what they address. A system that has been debiased with respect to one variable may continue to produce biased outcomes through proxy variables, feedback loops, or measurement differences that the debiasing intervention did not reach.

**Proxy variables that reintroduce removed bias.** Where a protected characteristic — race, gender, age — is removed from a system's inputs, other variables that correlate with that characteristic may serve as proxies, reintroducing through indirect means the bias that was directly removed. Postcode, name, educational institution, and many other seemingly neutral variables can carry demographic information that creates proxy discrimination.

**Bias that emerges or intensifies in deployment.** A system assessed as unbiased before deployment may develop biased patterns in operation — as the deployment population differs from the training population, as feedback loops develop, as the system is applied in contexts its training did not represent. Pre-deployment bias assessment does not guarantee bias-free operation.

---

## Where Does It Appear?

Bias in automated systems is relevant in every context where differential outcomes across demographic groups are legally, ethically, or operationally significant:

- **Financial services** — bias in credit scoring, insurance pricing, and fraud detection that produces differential outcomes by race, gender, age, or other protected characteristics
- **Employment** — bias in automated screening and assessment that disadvantages applicants from protected groups, compounding historical exclusion patterns present in training data
- **Healthcare** — bias in diagnostic and triage systems that produces less accurate outputs for patient populations underrepresented in training data, creating differential quality of care
- **Public services** — bias in eligibility and enforcement systems that produces differential treatment of individuals from different demographic groups
- **Criminal justice** — bias in risk assessment systems used in bail, sentencing, and parole decisions that produces differential outcomes by race or other characteristics
- **Platform and content** — bias in content moderation and recommendation systems that produces differential treatment of users from different groups

---

## What It Means in Practice

An organisation that takes bias seriously must be able to answer these questions at any time:

- Has the organisation assessed its automated systems for bias — specifically examining whether error rates, false positive rates, and false negative rates differ across demographic groups?
- Does the organisation understand the sources of any bias identified — whether it arises from training data, variable selection, label construction, or feedback loops — well enough to address it at its source?
- When bias is detected and technical debiasing is applied, has the organisation verified that the intervention addressed the bias rather than displacing it to a different mechanism?
- Is the system monitored for bias in live operation — not just assessed at deployment — so that bias that emerges or intensifies over time is detected and addressed?
- When bias is identified, does the organisation assess its legal implications — whether the differential outcomes constitute unlawful discrimination — as well as its technical ones?

If those questions cannot be answered, the organisation is operating automated systems whose bias profile it does not know — and may be producing systematically unfair outcomes at scale without awareness of it.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Explicit bias assessment makes visible patterns of unfair treatment that would otherwise remain undetected | No technical debiasing approach addresses all sources of bias simultaneously — interventions address what they address |
| Addressing bias at its source produces more durable improvement than post-processing adjustments | Different definitions of bias can produce conflicting measurement results — a system unbiased by one metric may be biased by another |
| Bias monitoring in live operation detects the emergence of new bias patterns before they cause widespread harm | Proxy variables can reintroduce bias that was directly removed, requiring ongoing assessment of indirect discrimination |
| Documented bias assessment and remediation provides evidence of good governance practice | Complete elimination of bias is frequently not achievable — the governance question becomes what level of bias is acceptable and in what dimensions |
| Regulatory scrutiny of bias drives sector-wide improvement in assessment and remediation practice | Bias assessment requires demographic data about the populations affected by the system, which may be difficult to collect |

---

## The Law

Legal frameworks addressing bias in automated systems exist across equality law, data protection law, and AI-specific legislation — and the legal standard is outcomes-based rather than intent-based in most jurisdictions.

Equality law in most developed economies prohibits both direct discrimination — treating people differently because of a protected characteristic — and indirect discrimination — applying a criterion that produces disproportionate disadvantage for people with a protected characteristic without justification. Automated systems that produce biased outcomes in either sense breach equality law regardless of whether the system was designed to discriminate.

AI-specific legislation is advancing explicit bias assessment requirements for high-risk systems — requiring that deploying organisations assess systems for bias before deployment and monitor for bias in live operation, with defined obligations to address identified bias and report material bias findings.

The practical legal risk is the same as for fairness — because bias and fairness are connected: bias is the mechanism through which unfairness is produced, and the legal obligation is assessed against outcomes. A system that produces discriminatory outcomes through biased processes is in breach of equality law from the moment those outcomes occur, regardless of the sophistication of the bias assessment conducted before deployment.

---

*GV-02 | Bias | Part of the AI Governance Reference Series*
