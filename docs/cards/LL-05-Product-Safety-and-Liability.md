# LL-05 — Product Safety and Liability

> **When AI is embedded in a product, the product's safety obligations apply to the AI. A defect in the AI is a defect in the product. Harm caused by that defect is the manufacturer's liability.**

---

## What It Covers

Product safety and product liability law governs the obligations of manufacturers, importers and distributors when products they place on the market cause harm. It establishes safety standards that products must meet before they can be sold, and it creates liability for harm caused by products that are defective — whether the defect is in design, manufacture or the information provided to users.

Major frameworks include the EU's revised Product Liability Directive and the Machinery Regulation, the UK Consumer Protection Act 1987, Japan's Product Liability Act, China's Product Quality Law, and US state product liability laws. The EU's revised Product Liability Directive, adopted in 2024, explicitly extends product liability to software and AI systems — closing a gap in the original 1985 directive, which predated software as a mainstream product category.

Product safety law requires that products meet defined safety standards before market entry. Product liability law provides legal recourse for individuals harmed by defective products — without requiring them to prove fault, only to demonstrate that the product was defective and caused the harm.

---

## Why AI Systems Trigger It

AI systems trigger product safety and liability law in two distinct contexts: when AI is embedded in a physical product, and when AI software itself is treated as a product under frameworks that now extend to software.

**AI embedded in physical products.** AI systems embedded in vehicles, medical devices, industrial machinery, consumer electronics, robots and physical infrastructure are components of those products. The product's safety obligations apply to the AI component as they apply to any other component. A self-driving vehicle's AI decision-making system, a medical device's diagnostic algorithm, an industrial robot's motion control system — each is subject to the safety standards applicable to the product it is part of.

**AI software as a product.** The EU's revised Product Liability Directive treats software — including AI software — as a product for liability purposes. This is a significant change from earlier product liability frameworks, which often excluded software or treated it as a service. Under the revised directive, AI software that causes harm because it is defective creates liability for those who developed and distributed it, on the same basis as physical products.

**Defect defined broadly.** Product liability law defines defect by reference to what a person is entitled to expect of the product — not what the manufacturer intended to produce. An AI system that performs accurately in testing but fails in deployment conditions that were foreseeable is defective. A system whose outputs are less safe for certain demographic groups than others may be defective. A system that operates within its technical specifications but causes harm in use may still be defective if a person could legitimately have expected safer behaviour.

**Limitation of liability through documentation.** The adequacy of warnings, instructions and documentation affects liability exposure. A manufacturer who adequately documents a system's limitations, provides appropriate warnings, and defines the conditions of safe use is in a materially different legal position from one who does not. This creates a direct governance incentive for thorough system documentation.

**The supply chain question.** AI systems are frequently assembled from multiple components — foundation models, third-party datasets, pre-built modules — supplied by different entities. Product liability law addresses this through supply chain liability, which allows harmed individuals to bring claims against any entity in the supply chain. Each entity's liability depends on its role and the adequacy of its safety obligations at each stage.

---

## Governance Connection

Product safety and liability law connects the Atlas governance concepts of system documentation, risk assessment and accountability to legally enforceable safety standards.

**System documentation** (→ RE-13, SP-09) is the foundation of both safety compliance and liability defence. Technical documentation that defines what a system is, what it does, what its limitations are, and what conditions of use are safe or unsafe directly affects both regulatory compliance and liability exposure.

**System limits** (→ SP-03) documented before deployment define the boundary of safe use. A system that causes harm within its documented operational envelope is in a different legal position from one that causes harm the documentation acknowledged as possible.

**Risk assessment** (→ GV-N14) under product safety frameworks is a pre-market requirement. It must be conducted, documented and updated when the system changes significantly. A risk assessment conducted once at development and never revisited does not satisfy ongoing safety obligations for systems that learn or update.

**Third-party risk** (→ SP-18, AR-08) is acute in AI product contexts. An organisation that integrates a third-party foundation model into a product bears product liability for the complete product. It cannot transfer that liability to the foundation model provider by contract, though it may have contractual recourse.

**Records and evidence** (→ RE-05, RE-13) are central to product liability proceedings. The documentation trail — what the system was designed to do, how it was tested, what risks were identified, what warnings were provided — determines the legal outcome when harm occurs.

---

## Jurisdictions

Product liability frameworks exist in all major jurisdictions. The EU's revised Product Liability Directive explicitly addresses AI and software. The UK framework derives from EU law and is under review. US product liability is primarily state law with significant variation. Japan, China, Australia and Canada each have product liability frameworks that are being examined for their application to AI systems.

---

*LL-05 | Product Safety and Liability | Legal Landscape Series*
*This card explains legal concepts relevant to AI governance. It does not constitute legal advice.*
