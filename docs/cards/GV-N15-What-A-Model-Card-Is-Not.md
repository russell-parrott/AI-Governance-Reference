# GV-N15 — What A Model Card Is Not

> **The model card exists. Now check: what has it actually documented — and what remains unrecorded beneath it?**

---

## What It Is Not

A model card is not full documentation. It is not a technical specification, a governance record, a risk assessment, an audit trail, or a complete account of what a model does, how it was built, and what its limitations are. It is not a substitute for the underlying records that genuine accountability requires. It is not proof that a system is safe, fair, or fit for a specific purpose. It is not the documentation. It is a summary of some of it.

A model card, properly understood, is a standardised short-form document — typically produced by a model developer or deploying organisation — that describes a model's intended use, performance characteristics, training data, known limitations, and evaluation results in a structured, accessible format. It is a communication tool. It distils selected information about a model into a form that can be read quickly and compared across systems.

What organisations most often confuse with a model card is one or more of the following:

**The full documentation record.** A model card summarises. Behind every summary is a selection — of what to include, what to emphasise, what to abbreviate, and what to leave out. The underlying training data records, evaluation datasets, validation methodology, failure mode analysis, and governance decisions that shaped the model exist — or should exist — separately from the card. The card describes them in accessible form. It does not replace them. An organisation that has a model card and treats it as its documentation record has the summary without the substance.

**A governance record.** Model cards describe technical and performance characteristics. They are not records of governance decisions — who approved deployment, what risk assessment was conducted, what oversight arrangements are in place, what escalation procedures exist. A model card that is technically comprehensive may contain no governance information at all. Governance records and model documentation serve different purposes. A model card is the latter, not the former.

**An independent assessment.** Model cards are produced by the people who built or deployed the model — the developer, the vendor, or the deploying organisation. They describe the model as its creators understand and choose to present it. They are not independent assessments of the model's adequacy, safety, or fitness for purpose. A model card that describes a model favourably is a self-assessment, not a third-party finding. Its value as assurance is limited by the interests of whoever produced it.

**A current description of a deployed system.** Model cards are produced at a point in time — typically at the point of model release or deployment. After that point, the model may be updated, retrained, fine-tuned, or deployed in new contexts. The model card may not be updated to reflect those changes. A model card that accurately described the model at release may be materially incomplete or misleading as a description of the model as it currently operates. The card exists. Its accuracy has not been maintained.

**A substitute for individual-level explanation.** Model cards describe model behaviour in aggregate — performance across defined evaluation sets, characteristics of training data, general limitations. They do not explain individual decisions. An organisation that directs an affected individual to its model card in response to a request for an explanation of why a specific decision was made has provided general model information in response to an individual rights request. Those are different things, and the card does not meet the latter obligation.

---

## Why Confusion Matters

When model cards are mistaken for full documentation, the investment in producing them substitutes for the investment in maintaining the underlying records they are meant to summarise. The card is updated. The records are not. The summary becomes increasingly disconnected from the substance it purports to describe.

The deeper problem is that model cards, as a documentation format, have become associated with responsible AI practice — their existence signals that the organisation has thought carefully about its models. That signal is valuable when it is accurate. It is misleading when the card exists and the underlying documentation, governance records, and ongoing maintenance it implies do not. The card has become a credential rather than a summary — and the credential has been detached from what it was meant to represent.

---

## Where Confusion Appears

**Model cards produced for external audiences without corresponding internal records.** An organisation publishes model cards for its deployed systems — describing training data, performance metrics, and known limitations. The cards are well-produced and accessible. The underlying documentation they summarise is incomplete, outdated, or does not exist in the form the card implies. The card represents an aspiration about what is documented, not a summary of what is.

**Model cards treated as sufficient documentation in regulatory submissions.** An organisation responds to a regulatory request for documentation of its automated systems by providing model cards. The cards are relevant and useful. The regulator asks for the underlying records — training data documentation, validation methodology, governance decision records. The organisation's response is that the model card contains what is available. The card summarised. The summary was the totality.

**Model cards that describe intended use without documenting actual use.** A model card describes the contexts for which the model was designed and validated. The model is deployed in additional contexts — similar enough that no one thought to update the card, different enough that the card's description of intended use no longer reflects actual deployment. The card describes what was intended. The deployment reflects what occurred. The difference between them is undocumented.

**Vendor model cards accepted as deploying organisation documentation.** An organisation deploys a vendor-supplied model and relies on the vendor's model card as its primary documentation. The vendor's card describes the model as the vendor built and validated it. It does not describe the deploying organisation's deployment decisions, its assessment of the model's fitness for its specific context, or its governance arrangements for the deployed system. The vendor's documentation and the deployer's obligations are different things.

---

## How To Tell The Difference

Five questions that distinguish genuine documentation from model cards:

- Does the organisation maintain the underlying records that the model card summarises — training data documentation, validation records, evaluation datasets, governance decision records — separately from the card itself?
- When the model is updated or deployed in new contexts, is the model card updated to reflect those changes — and are the underlying records updated at the same time?
- Does the organisation's documentation include governance records — deployment decisions, risk assessments, oversight arrangements — that model cards are not designed to capture?
- When an affected individual requests an explanation of a decision, does the organisation have individual-level decision records to draw on — or only the general model information the card contains?
- Is the model card treated as a communication tool — a summary for external audiences — rather than as the documentation record it summarises?

---

| Common Substitutes | What Full Documentation Actually Requires |
|---|---|
| A model card describing training data and performance | Underlying training data records, validation methodology, and evaluation datasets |
| A model card describing intended use | Governance records of deployment decisions, risk assessments, and authorisation |
| A vendor's model card for a deployed system | The deploying organisation's own assessment of fitness for its specific context |
| A model card produced at release | Current documentation maintained as the model and its deployment evolve |
| General model information in response to rights requests | Individual-level decision records that can support case-specific explanation |

---

## The Law

Regulatory documentation requirements for automated systems are not satisfied by model cards alone. Data protection impact assessments, conformity documentation under AI legislation, and record-keeping obligations in regulated sectors all require underlying records of a depth and specificity that model cards do not provide.

AI-specific legislation in multiple jurisdictions specifies documentation requirements for high-risk systems that include technical documentation, training data records, validation methodology, ongoing monitoring records, and governance decision records — a documentation standard that model cards summarise in part and replace in none.

Regulators examining documentation compliance assess whether the required records exist in the required form and depth. A model card is relevant context. It is not the documentation. Where the required documentation does not exist behind the card, the card's existence does not satisfy the obligation — it identifies the gap between what was summarised and what was recorded.

The practical legal risk is direct — and it is the closing observation of this series: a summary without substance is a description of something that may not exist. A model card without underlying documentation is a signal without a referent — it implies records, governance, and accountability that the card itself cannot establish. The card says "this is documented." The investigation asks to see the documentation. If the card was the documentation, the answer to that question is the finding.

---

*GV-N15 | What A Model Card Is Not | Part of the AI Governance Reference Series*
