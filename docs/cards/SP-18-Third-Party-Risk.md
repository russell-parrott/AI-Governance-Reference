# SP-18 — Third-Party Risk

> **Most automated systems depend on external parties. This card explains what third-party risk is, where it comes from, and why outsourcing a function does not outsource the accountability for it.**

---

## What Is It?

Third-party risk is the exposure an organisation carries as a result of its dependence on external parties — vendors, suppliers, partners, cloud providers, data providers, and any other organisation whose products, services, or data are incorporated into or relied upon by its automated systems.

It is not a single category of risk. It is a family of related exposures that arise whenever the organisation's ability to operate its automated systems safely, compliantly, and accountably depends on something it does not fully control.

The most significant categories in automated system governance are:

**Model and component risk** — the risk that a model, algorithm, or component supplied by a third party contains errors, biases, or limitations that are not visible to the deploying organisation and that produce failures in the deployed system.

**Data supply risk** — the risk that data provided by a third party is inaccurate, incomplete, out of date, or collected in ways that create legal or ethical problems when the data is used in the organisation's systems.

**Operational dependency risk** — the risk that a third party whose services are required for the organisation's automated systems to function — a cloud infrastructure provider, a data processing service — experiences disruption that affects the organisation's systems.

**Accountability gap risk** — the risk that when something goes wrong, accountability cannot be clearly allocated between the organisation and its third parties — and that the gaps between contractual obligations are exactly where the failure occurred.

---

## Why Does It Matter?

Third-party relationships are the dominant model for deploying automated systems. Most organisations do not build their own models from scratch. They use vendor-supplied models, cloud-based AI services, third-party data feeds, and externally developed components. The governance challenge is that the organisation retains accountability for what those external components do — but may have limited visibility into how they work, limited ability to audit them, and limited leverage to require changes when problems are identified.

Regulators do not accept third-party relationships as a transfer of accountability. When an automated system causes harm, the regulator looks to the organisation that deployed it. The fact that a vendor supplied a flawed model, that a data provider supplied inaccurate data, or that a cloud provider experienced an outage is relevant context — but it does not shift the governance obligation away from the organisation that chose to rely on those third parties and deployed the system that depended on them.

Third-party risk management is therefore the governance discipline of ensuring that the organisation's accountability for its automated systems is matched by adequate visibility into, and control over, the third parties on which those systems depend.

---

## What's the Real Risk?

**Vendor limitations that are not disclosed or not understood.** A vendor supplies a model and describes its performance characteristics. The organisation deploys it. The model has limitations in specific contexts — populations not well represented in training data, use cases not covered by the vendor's validation — that the vendor did not disclose or that the organisation did not identify. The limitations produce failures in live operation. The organisation was accountable for a system it did not fully understand.

**Contract terms that allocate risk without allocating accountability.** A contract with a vendor includes liability limitations, indemnities, and warranties that distribute financial risk between the parties. Those provisions address what happens between the organisation and the vendor if something goes wrong. They do not address what happens between the organisation and affected individuals, between the organisation and regulators, or between the organisation and the law. Third-party contracts can redistribute commercial risk. They do not redistribute governance accountability.

**Third-party changes that are not communicated.** A vendor updates a model, changes a data feed, or modifies a service. The organisation's automated system continues to operate, now using a different underlying component from the one it was deployed with. The change was not communicated. The organisation's governance documentation no longer accurately describes what the system is using. The system's performance has changed in ways the organisation has not assessed.

**Concentration risk that is not recognised.** An organisation relies on the same third-party provider for multiple automated systems — the same cloud infrastructure, the same model API, the same data supplier. A failure at the provider level affects all of those systems simultaneously. The organisation's risk assessment examined each system individually and did not identify the concentration that makes a single third-party failure a multiple-system event.

---

## Where Does It Appear?

Third-party risk in automated systems arises wherever the organisation's systems incorporate or depend on external components:

- **Foundation model APIs** — reliance on large language model or other AI services provided via API, where the model's behaviour, limitations, and updates are outside the organisation's control
- **Data supply chains** — use of externally sourced data in automated systems, where data quality, accuracy, and collection practices are the supplier's responsibility but the governance obligation is the organisation's
- **Cloud infrastructure** — dependence on cloud providers for the computational resources that automated systems run on, where availability and security are provided by the infrastructure supplier
- **Vendor-supplied models** — deployment of models built and trained by vendors, where the organisation's understanding of the model's behaviour depends on what the vendor discloses
- **Third-party integrations** — automated systems that incorporate outputs from or feed into third-party systems, where the boundary between systems creates governance gaps
- **Outsourced functions** — governance or compliance functions related to automated systems that are performed by external providers rather than internally

---

## What It Means in Practice

An organisation that takes third-party risk seriously must be able to answer these questions at any time:

- Does the organisation know which third parties each of its automated systems depends on — including indirect dependencies through data supply chains and infrastructure providers?
- Does the organisation have adequate visibility into each third party's relevant practices — the quality of their models, the accuracy of their data, the adequacy of their security — to assess the risk that dependency creates?
- Do contracts with third parties address governance obligations — requiring notification of material changes, supporting audit rights, and allocating responsibilities for defined failure scenarios?
- When third parties change what they supply, does the organisation have a process for identifying and assessing the governance implications of that change?
- Has the organisation assessed concentration risk — the exposure created by dependence on the same third parties across multiple automated systems?

If those questions cannot be answered, the organisation's understanding of its third-party risk is incomplete — and its governance of automated systems that depend on external components is built on a foundation it has not fully examined.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Third-party relationships enable access to capabilities that most organisations could not build internally | Third-party dependence creates governance exposure that cannot be fully managed through contracts alone |
| Vendor-supplied models and services incorporate development investment that individual organisations cannot replicate | Visibility into third-party practices — model training, data collection, security — is often limited and depends on vendor disclosure |
| Established third-party providers may offer governance documentation and audit support that supports the organisation's own compliance | Third-party risk management requires ongoing relationship management that creates administrative overhead |
| Concentration on major providers creates negotiating leverage for governance requirements | Concentration also creates concentration risk — widespread dependence on few providers means failures are sector-wide events |
| Third-party risk frameworks provide structure for assessing and managing external dependencies | The governance obligation remains with the deploying organisation regardless of how well third-party risk is managed — accountability cannot be outsourced |

---

## The Law

The legal direction across most developed economies is consistent: regulatory frameworks treat third-party relationships as the deploying organisation's governance responsibility, not as a transfer of accountability to the supplier.

Financial services regulation has the most developed third-party risk governance requirements — imposing obligations for due diligence, ongoing monitoring, contractual provisions, and exit planning in relation to material outsourcing arrangements that include automated systems. Those requirements reflect the regulatory principle that outsourcing a function does not outsource the regulatory obligation associated with it.

AI-specific legislation is establishing obligations for deploying organisations that explicitly address third-party components — requiring that deployers assess the adequacy of vendor-supplied models for their specific use case, maintain documentation of third-party components, and take responsibility for the governance of systems regardless of how much of the system was built externally.

The practical legal risk is direct and has a specific formulation that applies throughout this series: the regulator does not examine the vendor. It examines the organisation that deployed the system. Third-party relationships are the organisation's governance choices — the choices to rely on specific external components, in specific ways, with specific levels of oversight. Those choices are the organisation's to answer for.

---

*SP-18 | Third-Party Risk | Part of the AI Governance Reference Series*
