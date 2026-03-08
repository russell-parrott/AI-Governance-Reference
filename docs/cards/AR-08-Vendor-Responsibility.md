# AR-08 — Vendor Responsibility

> **You know the supplier built part of it. Now the question is: what are they actually responsible for?**

---

## What Is It?

Vendor responsibility is the defined scope of obligations a supplier carries in relation to an automated system or component they have built, supplied, or maintain — and the limits of those obligations where accountability passes back to the deploying organisation.

It is not a general statement that vendors are responsible for what they supply. It is a specific, documented allocation of obligations — what the vendor must deliver, maintain, disclose, and remedy, and under what conditions. Without that specificity, vendor responsibility is assumed rather than agreed, and assumed responsibility is the gap through which accountability disputes travel when something goes wrong.

Vendor responsibility does not replace the deploying organisation's accountability. It sits alongside it — defining what the organisation can legitimately expect from its supplier, and what it must govern itself.

---

## Why Does It Matter?

When an automated system causes harm and a vendor supplied part of it, the natural question is whether the vendor is responsible. The honest answer is: it depends on what was agreed, what was disclosed, and how the system was used.

A vendor that supplied a model validated for one purpose is not automatically responsible for harm caused when the organisation deployed it for a different one. A vendor that failed to disclose known limitations in its model carries different responsibility than one that disclosed them fully but was ignored. The allocation of responsibility between vendor and deploying organisation is not determined by instinct or fairness. It is determined by what was documented, what was contracted, and what each party knew at the time.

---

## What's the Real Risk?

**Responsibility gaps where both parties assume the other is accountable.** The most common vendor responsibility failure is not dishonesty — it is ambiguity. The vendor believes the organisation is responsible for deployment decisions. The organisation believes the vendor is responsible for model performance. Neither has been explicit. When harm occurs, both point at the other.

**Contracts that establish relationship but not accountability.** Many vendor contracts cover service levels, pricing, and intellectual property without clearly allocating responsibility for model accuracy, bias, limits, or the consequences of output errors. A contract that does not address these questions does not answer them — it leaves them to be resolved after an incident, under pressure, with legal costs accumulating.

**Vendor limitations not disclosed at procurement.** Where a vendor does not fully disclose its model's limitations, validation methodology, or known failure modes, the deploying organisation makes deployment decisions on incomplete information. When those undisclosed limitations produce harm, the question of who bears responsibility is compounded by the question of what the vendor knew and when.

**Responsibility that evaporates when the vendor relationship ends.** Vendor responsibility is only enforceable while the relationship and its contractual basis remain intact. An organisation that depends on vendor accountability for parts of its governance is exposed if the vendor ceases to operate, terminates the contract, or is acquired.

Responsibility for defining, securing, and maintaining clear vendor accountability sits with the organisation procuring the system. Vendors will not proactively assume obligations that were not contractually required.

---

## Where Does It Appear?

Vendor responsibility questions arise at every stage of the relationship between an organisation and a supplier of automated system components:

- **Pre-procurement** — assessing what obligations a vendor is willing to accept before a contract is signed, and whether those obligations are adequate for the deployment context
- **Contract negotiation** — securing specific commitments on disclosure, notification of changes, audit access, performance standards, and remedies for failure
- **Ongoing operation** — holding vendors to their obligations throughout the system's operational life, not just at deployment
- **Incident response** — establishing quickly what the vendor's obligations are when something goes wrong and what access to information and remediation the organisation is entitled to
- **Regulatory investigation** — demonstrating to regulators what the vendor was responsible for and what the organisation can produce from the vendor in response to inquiries
- **Contract termination** — ensuring that vendor responsibility obligations survive the end of the commercial relationship to the extent needed for ongoing governance and legal exposure

---

## What It Means in Practice

An organisation that takes vendor responsibility seriously must be able to answer these questions at any time:

- Are the vendor's specific responsibilities — for model performance, disclosure, notification, and remediation — documented in the contract rather than assumed?
- Does the organisation have contractual rights to audit information, testing results, and documentation of the vendor's model?
- Is there a defined process for holding the vendor to account when its obligations are not met?
- What is the vendor responsible for if its model produces harmful outputs — and has that been agreed in writing?
- What obligations does the vendor carry if the contract ends, and are those sufficient to protect the organisation's ongoing governance needs?

If those questions cannot be answered, the organisation has a supplier relationship rather than a governance arrangement. Supplier relationships are useful. They are not a substitute for defined, documented, enforceable responsibility allocation.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Clear vendor responsibility allocation reduces ambiguity when problems arise and accelerates resolution | Vendors negotiate contracts to limit their liability — securing adequate responsibility obligations requires effort and leverage |
| Contractual disclosure obligations give the organisation the information it needs to govern the system | Even well-drafted contracts cannot compel a vendor to disclose information it does not hold or has not generated |
| Defined remediation obligations ensure the organisation has recourse when vendor performance falls short | Vendor responsibility is only as valuable as the organisation's willingness and capacity to enforce it |
| Audit rights support the organisation's governance obligations by making vendor documentation accessible | Small or specialist vendors may lack the governance infrastructure to meet the obligations larger organisations require |
| Clarity about the boundary of vendor responsibility makes the organisation's own governance obligations explicit | Responsibility allocation agreed at procurement may not anticipate the full range of situations that arise in operation |

---

## The Law

The legal direction across most developed economies is consistent: the deploying organisation retains primary legal accountability for its automated system's outputs, and must structure its vendor relationships to support — not substitute for — that accountability.

Data protection and privacy frameworks in many jurisdictions impose specific requirements on data processing agreements with third-party suppliers, including obligations around audit rights, sub-processing disclosure, and liability for processing failures. These requirements create a legal baseline for vendor responsibility that contracts must meet — but they do not cap the deploying organisation's own exposure.

AI-specific legislation is advancing supply chain accountability requirements, with some frameworks placing explicit obligations on deploying organisations to obtain and maintain documentation of vendor-supplied components sufficient to meet their own governance and conformity obligations. Regulatory investigations increasingly examine the adequacy of vendor contracts as part of assessing an organisation's overall governance.

The practical legal risk is direct: an organisation that has not secured adequate vendor responsibility obligations — and cannot produce vendor documentation in response to regulatory inquiry — cannot rely on its supplier relationship as a defence. The accountability sits with the organisation. The information it needs to exercise that accountability must be contractually secured from the vendor.

---

*AR-08 | Vendor Responsibility | Part of the AI Governance Reference Series*
