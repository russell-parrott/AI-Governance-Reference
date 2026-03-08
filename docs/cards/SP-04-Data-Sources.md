# SP-04 — Data Sources

> **Training data comes from somewhere. Where? This card traces back to origin.**

---

## What Is It?

Data sources are the origins of the information that feeds an automated system — both the data used to train it and the data it processes when making decisions.

Every piece of data an automated system uses came from somewhere. It was collected, purchased, scraped, generated, or inherited from another system. It may have come from one source or dozens. It may have been gathered recently or years ago. It may have been collected with the knowledge of the people it describes, or without it.

A data source is not simply a location or a database. It is a point of origin that carries its own history — how the data was collected, under what conditions, for what original purpose, and what happened to it before it arrived in its current form.

---

## Why Does It Matter?

The quality, fairness, and legal status of an automated system's outputs depend directly on the quality, fairness, and legal status of the data it was built on and continues to use. Those properties are not visible in the data itself. They must be traced back to the source.

Data that was collected for one purpose and repurposed for another may no longer be lawfully usable. Data drawn from a source that systematically under-represents certain populations will produce unreliable outputs for those populations. Data purchased from a third-party provider may contain errors, gaps, or biases that the organisation has never examined. None of these problems are apparent from looking at the data. They only become visible when the source is interrogated.

---

## What's the Real Risk?

**Unlawful data use.** Data collected for one purpose and fed into an automated system for a different purpose may breach data protection and privacy law, regardless of whether the organisation knew this at the time.

**Inherited problems from third-party sources.** Organisations frequently purchase or licence data from external providers without examining its provenance. If that data contains errors, gaps, or legally problematic content, the organisation inherits those problems along with the data.

**Untraceable errors.** When an automated system produces harmful outputs and the investigation traces the problem to the data, an organisation that cannot identify and document its data sources cannot demonstrate what went wrong, when, or why. That makes remediation difficult and defence before a regulator nearly impossible.

**Supply chain exposure.** Data sources, like software, create supply chains. A problem originating in a data provider three steps removed from the organisation can surface in the organisation's automated decisions — with the organisation carrying the accountability.

Ownership of data source documentation sits with whoever deployed the system. The fact that data came from an external provider does not transfer accountability for its contents.

---

## Where Does It Appear?

Data source questions arise at every point where information enters an automated system:

- **Internal records** — historical transaction data, customer records, employee data, operational logs generated within the organisation
- **Purchased or licensed data** — demographic, financial, or behavioural data acquired from commercial data providers
- **Public data** — information drawn from government records, public registers, or openly available datasets
- **Third-party feeds** — real-time or periodic data supplied by partners, vendors, or connected systems
- **User-generated data** — information provided directly by individuals through applications, forms, or interactions
- **Scraped or derived data** — information collected automatically from websites or other sources, or derived by combining other datasets

Each type carries different legal, quality, and governance considerations.

---

## What It Means in Practice

An organisation that takes data sources seriously must be able to answer these questions at any time:

- For each data source feeding this system, do we know where it came from and how it was collected?
- Was the data collected with appropriate permissions for the way it is now being used?
- Has each data source been assessed for quality, completeness, and potential bias?
- If data comes from a third-party provider, what do we know about how that provider collected and processed it?
- Is there a documented record of data sources that could be produced in an investigation or audit?

If those questions cannot be answered, the organisation is operating a system built on foundations it has not examined. The outputs of that system carry risks the organisation cannot assess because it does not know where the inputs came from.

---

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Documented sources make it possible to assess data quality and fitness for purpose | Tracing data back to origin is time-consuming and often deprioritised at deployment |
| Enables legal compliance checks — was this data collected and used lawfully? | Third-party data providers may not disclose full provenance, limiting what an organisation can verify |
| Supports incident investigation — problems can be traced to their origin | Data sources change over time, and documentation that was accurate at deployment may become outdated |
| Allows bias assessment — does this source systematically under-represent certain groups? | Organisations often inherit systems with undocumented data sources and no clear route to reconstruct them |
| Creates accountability for data supply chains, not just system outputs | The volume and variety of data sources in complex systems can make comprehensive documentation difficult |

---

## The Law

The legal direction across most developed economies is consistent: organisations must be able to account for the origin of the data their automated systems use, not just the outputs those systems produce.

Data protection and privacy frameworks in many jurisdictions require that personal data be collected for specified purposes and used only in ways consistent with those purposes. Where data has been repurposed — collected for one reason and used in an automated system for another — legal exposure follows regardless of intent.

Regulations governing automated systems increasingly require documentation of data provenance as a baseline governance obligation. The inability to identify data sources is itself a compliance gap, separate from any harm the data may have caused.

The practical legal risk is direct: an organisation that cannot identify where its data came from, demonstrate it was lawfully obtained, and show it was fit for the purpose it was used for, cannot defend the outputs its system produced on the basis of that data.

---

*SP-04 | Data Sources | Part of the AI Governance Reference Series*
