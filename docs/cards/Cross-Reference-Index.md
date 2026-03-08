# AI Governance Reference Series — Cross-Reference Index

This index shows the key conceptual connections between cards. Each entry lists the cards most directly relevant to understanding, extending, or challenging the subject of that card. Cross-references are not exhaustive — they identify the connections that matter most in practice.

---

## How To Use This Index

**Following a concept** — if a card introduces a term that another card examines in depth, the cross-reference points there.

**Finding the negation** — definition cards cross-reference their negation counterparts and vice versa.

**Tracing accountability** — cards in the AR series cross-reference the governance question cards (GQ) that test whether accountability is real.

**Following an incident** — start at CS-12 and follow the cross-references through the response, evidence, legal, and enforcement chain.

---

## Part One: Card-by-Card Cross-References

---

### System Properties (SP)

**SP-01 Automated Decision Making**
SP-02 Training Data · SP-03 System Limits · SP-08 System Scope · SP-09 Intended Use · SP-14 System Outputs · LR-01 Automated Decision Rights · AR-01 Accountability · CS-03 Human Review

**SP-02 Training Data**
SP-04 Data Sources · SP-05 Data Quality · SP-06 Dataset Bias · SP-07 Model Updates · GV-02 Bias · RE-13 System Documentation

**SP-03 System Limits**
SP-08 System Scope · SP-09 Intended Use · SP-10 Unintended Use · CS-06 Exception Handling · GV-03 Harm · SP-17 Model Performance

**SP-04 Data Sources**
SP-02 Training Data · SP-05 Data Quality · SP-11 Third-Party Systems · LR-10 Data Protection Duties · RE-13 System Documentation

**SP-05 Data Quality**
SP-02 Training Data · SP-04 Data Sources · SP-06 Dataset Bias · RE-09 Record Accuracy · GV-02 Bias · LR-10 Data Protection Duties

**SP-06 Dataset Bias**
GV-02 Bias · SP-02 Training Data · SP-05 Data Quality · SP-19 Fairness · GV-N06 What Fairness Is Not · GV-03 Harm

**SP-07 Model Updates**
CS-10 Change Management · CS-08 System Testing · SP-02 Training Data · RE-07 Documentation · RE-13 System Documentation

**SP-08 System Scope**
SP-09 Intended Use · SP-10 Unintended Use · SP-03 System Limits · SP-N02 What Intended Use Is Not · LR-13 Risk Classification

**SP-09 Intended Use**
SP-08 System Scope · SP-10 Unintended Use · SP-N02 What Intended Use Is Not · SP-03 System Limits · LR-13 Risk Classification · SP-01 Automated Decision Making

**SP-10 Unintended Use**
SP-09 Intended Use · SP-08 System Scope · SP-N02 What Intended Use Is Not · CS-06 Exception Handling · GV-03 Harm · AR-12 Responsibility Gaps

**SP-11 Third-Party Systems**
SP-12 Vendor Models · AR-08 Vendor Responsibility · SP-18 Third-Party Risk · SP-04 Data Sources · LR-04 Liability

**SP-12 Vendor Models**
SP-11 Third-Party Systems · AR-08 Vendor Responsibility · SP-18 Third-Party Risk · GV-02 Bias · RE-13 System Documentation

**SP-13 System Inputs**
SP-14 System Outputs · SP-04 Data Sources · SP-05 Data Quality · RE-02 Decision Records · SP-01 Automated Decision Making

**SP-14 System Outputs**
SP-13 System Inputs · SP-16 Explainability · RE-02 Decision Records · CS-01 Monitoring · SP-15 Transparency

**SP-15 Transparency**
SP-16 Explainability · GV-N05 What Transparency Is Not · LR-01 Automated Decision Rights · RE-10 System Explanations · AR-01 Accountability · LR-10 Data Protection Duties

**SP-16 Explainability**
SP-15 Transparency · GV-N07 What Explainability Is Not · LR-01 Automated Decision Rights · RE-10 System Explanations · SP-14 System Outputs · CS-13 Human Override

**SP-17 Model Performance**
CS-01 Monitoring · CS-05 Operational Monitoring · GV-02 Bias · SP-19 Fairness · RE-11 Internal Reviews · GV-N14 What A Risk Assessment Is Not

**SP-18 Third-Party Risk**
SP-11 Third-Party Systems · SP-12 Vendor Models · AR-08 Vendor Responsibility · LR-04 Liability · AR-01 Accountability

**SP-19 Fairness**
GV-02 Bias · GV-N06 What Fairness Is Not · SP-06 Dataset Bias · GV-03 Harm · LR-01 Automated Decision Rights · SP-16 Explainability · SP-17 Model Performance

---

### Accountability and Roles (AR)

**AR-01 Accountability**
AR-05 Role Definition · AR-07 Management Responsibility · AR-N01 What Accountability Is Not · GQ-04 Is Responsibility Formally Assigned · LR-04 Liability · AR-12 Responsibility Gaps

**AR-02 Approval Processes**
AR-04 Decision Authority · CS-03 Human Review · AR-01 Accountability · RE-02 Decision Records · CS-10 Change Management

**AR-03 Human Oversight**
CS-03 Human Review · AR-N04 What Human Oversight Is Not · CS-13 Human Override · GQ-01 Can A Real Person Override · AR-04 Decision Authority

**AR-04 Decision Authority**
AR-09 Delegated Authority · AR-01 Accountability · CS-04 Intervention Authority · GQ-01 Can A Real Person Override · AR-03 Human Oversight

**AR-05 Role Definition**
AR-01 Accountability · AR-09 Delegated Authority · GQ-04 Is Responsibility Formally Assigned · AR-12 Responsibility Gaps · AR-N01 What Accountability Is Not

**AR-06 Board Responsibility**
AR-07 Management Responsibility · AR-10 Internal Governance · AR-01 Accountability · AR-09 Delegated Authority · LR-04 Liability

**AR-07 Management Responsibility**
AR-06 Board Responsibility · AR-08 Vendor Responsibility · AR-01 Accountability · AR-09 Delegated Authority · CS-12 Incident Escalation

**AR-08 Vendor Responsibility**
SP-11 Third-Party Systems · SP-12 Vendor Models · SP-18 Third-Party Risk · AR-01 Accountability · LR-04 Liability

**AR-09 Delegated Authority**
AR-01 Accountability · AR-05 Role Definition · AR-12 Responsibility Gaps · AR-04 Decision Authority · GQ-04 Is Responsibility Formally Assigned

**AR-10 Internal Governance**
AR-06 Board Responsibility · AR-07 Management Responsibility · AR-09 Delegated Authority · AR-01 Accountability · GV-N09 What A Framework Is Not

**AR-11 Policy vs Practice**
AR-N11 What A Policy Is Not · AR-12 Responsibility Gaps · RE-07 Documentation · GV-N09 What A Framework Is Not · GR-00 What Governance Is Not

**AR-12 Responsibility Gaps**
AR-01 Accountability · AR-11 Policy vs Practice · AR-05 Role Definition · AR-09 Delegated Authority · AR-N01 What Accountability Is Not

---

### Controls and Oversight (CS)

**CS-01 Monitoring**
CS-05 Operational Monitoring · CS-07 Alert Systems · GV-01 Audit · SP-17 Model Performance · CS-09 Operational Reviews · RE-03 System Logs

**CS-02 Escalation Procedures**
CS-12 Incident Escalation · CS-04 Intervention Authority · AR-04 Decision Authority · RE-04 Incident Reporting

**CS-03 Human Review**
AR-03 Human Oversight · CS-13 Human Override · AR-N04 What Human Oversight Is Not · LR-01 Automated Decision Rights · GQ-01 Can A Real Person Override

**CS-04 Intervention Authority**
CS-11 System Shutdown · CS-13 Human Override · AR-04 Decision Authority · GQ-01 Can A Real Person Override · GQ-05 Can You Stop The System

**CS-05 Operational Monitoring**
CS-01 Monitoring · CS-07 Alert Systems · CS-09 Operational Reviews · SP-17 Model Performance · RE-03 System Logs

**CS-06 Exception Handling**
CS-03 Human Review · SP-10 Unintended Use · SP-03 System Limits · GV-03 Harm · RE-02 Decision Records

**CS-07 Alert Systems**
CS-01 Monitoring · CS-05 Operational Monitoring · CS-02 Escalation Procedures · RE-04 Incident Reporting

**CS-08 System Testing**
SP-07 Model Updates · CS-10 Change Management · RE-07 Documentation · SP-17 Model Performance · RE-13 System Documentation

**CS-09 Operational Reviews**
CS-01 Monitoring · CS-05 Operational Monitoring · RE-11 Internal Reviews · GV-01 Audit · SP-17 Model Performance

**CS-10 Change Management**
SP-07 Model Updates · CS-08 System Testing · RE-07 Documentation · AR-02 Approval Processes · RE-13 System Documentation

**CS-11 System Shutdown**
CS-04 Intervention Authority · LR-12 System Suspension · GQ-05 Can You Stop The System · CS-13 Human Override · AR-04 Decision Authority

**CS-12 Incident Escalation**
CS-02 Escalation Procedures · RE-04 Incident Reporting · RE-05 Evidence Preservation · LR-06 Regulatory Investigation · AR-01 Accountability · LR-11 Regulatory Reporting

**CS-13 Human Override**
CS-03 Human Review · AR-03 Human Oversight · AR-N04 What Human Oversight Is Not · LR-01 Automated Decision Rights · GQ-01 Can A Real Person Override · CS-04 Intervention Authority

---

### Records and Evidence (RE)

**RE-01 Audit Trails**
RE-02 Decision Records · RE-03 System Logs · GQ-02 Can You Reconstruct A Decision · LR-05 Record-Keeping Duties · GV-01 Audit

**RE-02 Decision Records**
RE-01 Audit Trails · RE-09 Record Accuracy · GQ-02 Can You Reconstruct A Decision · LR-01 Automated Decision Rights · SP-16 Explainability

**RE-03 System Logs**
RE-01 Audit Trails · RE-02 Decision Records · CS-01 Monitoring · GQ-02 Can You Reconstruct A Decision · RE-07 Documentation

**RE-04 Incident Reporting**
CS-12 Incident Escalation · RE-05 Evidence Preservation · LR-11 Regulatory Reporting · RE-06 Investigation Records · CS-07 Alert Systems

**RE-05 Evidence Preservation**
RE-04 Incident Reporting · RE-06 Investigation Records · LR-06 Regulatory Investigation · GQ-02 Can You Reconstruct A Decision · RE-01 Audit Trails

**RE-06 Investigation Records**
RE-05 Evidence Preservation · LR-06 Regulatory Investigation · RE-04 Incident Reporting · GV-01 Audit · RE-12 External Investigation

**RE-07 Documentation**
RE-13 System Documentation · AR-N11 What A Policy Is Not · GV-N09 What A Framework Is Not · GQ-03 Do You Keep Proper Records · RE-09 Record Accuracy

**RE-08 Data Retention**
LR-05 Record-Keeping Duties · RE-01 Audit Trails · RE-02 Decision Records · LR-10 Data Protection Duties · RE-07 Documentation

**RE-09 Record Accuracy**
RE-02 Decision Records · RE-07 Documentation · SP-05 Data Quality · GQ-03 Do You Keep Proper Records · RE-01 Audit Trails

**RE-10 System Explanations**
SP-16 Explainability · SP-15 Transparency · LR-01 Automated Decision Rights · RE-02 Decision Records · GV-N07 What Explainability Is Not

**RE-11 Internal Reviews**
CS-09 Operational Reviews · GV-01 Audit · GV-N13 What An Audit Is Not · RE-07 Documentation · SP-17 Model Performance

**RE-12 External Investigation**
LR-06 Regulatory Investigation · RE-05 Evidence Preservation · RE-06 Investigation Records · LR-07 Enforcement Powers · GQ-02 Can You Reconstruct A Decision

**RE-13 System Documentation**
RE-07 Documentation · GV-N15 What A Model Card Is Not · LR-05 Record-Keeping Duties · SP-16 Explainability · SP-07 Model Updates

---

### Legal and Regulatory (LR)

**LR-01 Automated Decision Rights**
SP-16 Explainability · SP-15 Transparency · CS-13 Human Override · LR-N03 What Automated Decision Rights Are Not · GQ-01 Can A Real Person Override · LR-10 Data Protection Duties

**LR-02 Regulatory Oversight**
LR-06 Regulatory Investigation · LR-07 Enforcement Powers · LR-03 Compliance Duties · AR-01 Accountability · LR-11 Regulatory Reporting

**LR-03 Compliance Duties**
LR-02 Regulatory Oversight · LR-N12 What Compliance Is Not · GV-N08 What A Standard Is Not · AR-01 Accountability · LR-13 Risk Classification

**LR-04 Liability**
LR-08 Legal Challenges · AR-01 Accountability · GV-03 Harm · LR-07 Enforcement Powers · SP-18 Third-Party Risk · AR-08 Vendor Responsibility

**LR-05 Record-Keeping Duties**
RE-01 Audit Trails · RE-08 Data Retention · LR-03 Compliance Duties · GQ-03 Do You Keep Proper Records · RE-13 System Documentation

**LR-06 Regulatory Investigation**
RE-12 External Investigation · LR-07 Enforcement Powers · RE-05 Evidence Preservation · AR-01 Accountability · LR-02 Regulatory Oversight

**LR-07 Enforcement Powers**
LR-06 Regulatory Investigation · LR-12 System Suspension · LR-04 Liability · LR-02 Regulatory Oversight · CS-11 System Shutdown

**LR-08 Legal Challenges**
LR-04 Liability · LR-01 Automated Decision Rights · RE-02 Decision Records · GV-03 Harm · LR-07 Enforcement Powers

**LR-09 Consumer Protection**
LR-01 Automated Decision Rights · SP-15 Transparency · GV-03 Harm · LR-04 Liability · SP-19 Fairness

**LR-10 Data Protection Duties**
LR-01 Automated Decision Rights · RE-08 Data Retention · SP-15 Transparency · LR-03 Compliance Duties · SP-04 Data Sources

**LR-11 Regulatory Reporting**
LR-02 Regulatory Oversight · RE-04 Incident Reporting · LR-03 Compliance Duties · CS-12 Incident Escalation · RE-07 Documentation

**LR-12 System Suspension**
LR-07 Enforcement Powers · CS-11 System Shutdown · GQ-05 Can You Stop The System · LR-06 Regulatory Investigation · AR-01 Accountability

**LR-13 Risk Classification**
LR-02 Regulatory Oversight · GV-03 Harm · SP-09 Intended Use · LR-03 Compliance Duties · SP-08 System Scope

---

### Governance Concepts (GV)

**GV-01 Audit**
GV-N13 What An Audit Is Not · CS-09 Operational Reviews · RE-11 Internal Reviews · RE-01 Audit Trails · LR-06 Regulatory Investigation

**GV-02 Bias**
SP-06 Dataset Bias · SP-19 Fairness · GV-N06 What Fairness Is Not · GV-03 Harm · SP-17 Model Performance · SP-02 Training Data

**GV-03 Harm**
GV-02 Bias · SP-19 Fairness · LR-04 Liability · LR-13 Risk Classification · GV-N06 What Fairness Is Not · LR-08 Legal Challenges

---

## Part Two: Negation Series Cross-References

**GR-00 What Governance Is Not**
GV-N09 What A Framework Is Not · AR-N01 What Accountability Is Not · GV-N08 What A Standard Is Not · GV-N10 What Certification Is Not · AR-N11 What A Policy Is Not · GQ-01 through GQ-05 (all five governance questions)

**AR-N01 What Accountability Is Not**
AR-01 Accountability · AR-05 Role Definition · AR-08 Vendor Responsibility · GQ-04 Is Responsibility Formally Assigned · AR-12 Responsibility Gaps · LR-04 Liability

**SP-N02 What Intended Use Is Not**
SP-09 Intended Use · SP-08 System Scope · SP-10 Unintended Use · LR-13 Risk Classification · SP-03 System Limits

**LR-N03 What Automated Decision Rights Are Not**
LR-01 Automated Decision Rights · CS-13 Human Override · AR-N04 What Human Oversight Is Not · SP-16 Explainability · LR-10 Data Protection Duties

**AR-N04 What Human Oversight Is Not**
AR-03 Human Oversight · CS-03 Human Review · CS-13 Human Override · GQ-01 Can A Real Person Override · AR-01 Accountability

**GV-N05 What Transparency Is Not**
SP-15 Transparency · SP-16 Explainability · LR-01 Automated Decision Rights · RE-10 System Explanations · GV-N07 What Explainability Is Not

**GV-N06 What Fairness Is Not**
SP-19 Fairness · GV-02 Bias · GV-03 Harm · SP-06 Dataset Bias · SP-17 Model Performance

**GV-N07 What Explainability Is Not**
SP-16 Explainability · SP-15 Transparency · RE-10 System Explanations · LR-01 Automated Decision Rights · GV-N05 What Transparency Is Not

**GV-N08 What A Standard Is Not**
GV-N09 What A Framework Is Not · GV-N10 What Certification Is Not · LR-03 Compliance Duties · GR-00 What Governance Is Not · LR-N12 What Compliance Is Not

**GV-N09 What A Framework Is Not**
GV-N08 What A Standard Is Not · GV-N10 What Certification Is Not · AR-N11 What A Policy Is Not · GR-00 What Governance Is Not · AR-11 Policy vs Practice

**GV-N10 What Certification Is Not**
GV-N08 What A Standard Is Not · GV-N09 What A Framework Is Not · GV-01 Audit · AR-N11 What A Policy Is Not · LR-03 Compliance Duties

**GV-N13 What An Audit Is Not**
GV-01 Audit · CS-09 Operational Reviews · RE-11 Internal Reviews · AR-N11 What A Policy Is Not · GV-N14 What A Risk Assessment Is Not

**GV-N14 What A Risk Assessment Is Not**
CS-01 Monitoring · CS-05 Operational Monitoring · GV-N13 What An Audit Is Not · LR-13 Risk Classification · SP-17 Model Performance

**GV-N15 What A Model Card Is Not**
RE-13 System Documentation · RE-07 Documentation · SP-16 Explainability · GV-N07 What Explainability Is Not · LR-05 Record-Keeping Duties

**LR-N12 What Compliance Is Not**
LR-03 Compliance Duties · GV-03 Harm · SP-19 Fairness · GR-00 What Governance Is Not · GV-N08 What A Standard Is Not

**AR-N11 What A Policy Is Not**
AR-11 Policy vs Practice · RE-07 Documentation · GV-N09 What A Framework Is Not · GR-00 What Governance Is Not · AR-01 Accountability

---

## Part Three: Governance Questions Cross-References

**GQ-01 Can A Real Person Override An AI Decision?**
CS-13 Human Override · CS-04 Intervention Authority · AR-03 Human Oversight · AR-N04 What Human Oversight Is Not · CS-03 Human Review · LR-01 Automated Decision Rights

**GQ-02 Can You Reconstruct A Specific Decision After The Fact?**
RE-01 Audit Trails · RE-02 Decision Records · RE-03 System Logs · GQ-03 Do You Keep Proper Records · SP-16 Explainability · LR-08 Legal Challenges

**GQ-03 Do You Keep Proper Records Of Decisions And Complaints?**
RE-07 Documentation · RE-09 Record Accuracy · RE-04 Incident Reporting · GQ-02 Can You Reconstruct A Decision · LR-05 Record-Keeping Duties · RE-08 Data Retention

**GQ-04 Is Responsibility Formally Assigned In Writing?**
AR-01 Accountability · AR-05 Role Definition · AR-N01 What Accountability Is Not · AR-12 Responsibility Gaps · GQ-01 Can A Real Person Override

**GQ-05 Can You Stop The System If You Need To?**
CS-11 System Shutdown · CS-04 Intervention Authority · LR-12 System Suspension · GQ-01 Can A Real Person Override · AR-04 Decision Authority

---

## Part Four: Thematic Clusters

These clusters group cards by the governance situation or question they address most directly. A card may appear in more than one cluster.

---

### When Something Goes Wrong

*The incident response chain — from first identification to regulatory consequence.*

CS-07 Alert Systems → CS-02 Escalation Procedures → CS-12 Incident Escalation → RE-04 Incident Reporting → RE-05 Evidence Preservation → RE-06 Investigation Records → LR-11 Regulatory Reporting → LR-06 Regulatory Investigation → RE-12 External Investigation → LR-07 Enforcement Powers → LR-04 Liability

---

### Individual Rights

*What an affected individual is entitled to — and what the organisation must be able to deliver.*

LR-01 Automated Decision Rights · LR-N03 What Automated Decision Rights Are Not · SP-15 Transparency · SP-16 Explainability · CS-13 Human Override · CS-03 Human Review · RE-10 System Explanations · LR-09 Consumer Protection · LR-10 Data Protection Duties

---

### Accountability — Real And Nominal

*Who is actually answerable, and the difference between that and who is named.*

AR-01 Accountability · AR-N01 What Accountability Is Not · AR-05 Role Definition · AR-09 Delegated Authority · AR-12 Responsibility Gaps · AR-11 Policy vs Practice · GQ-04 Is Responsibility Formally Assigned · AR-06 Board Responsibility · AR-07 Management Responsibility

---

### Evidence And Records

*What must be recorded, how, and what happens when it is not.*

RE-01 Audit Trails · RE-02 Decision Records · RE-03 System Logs · RE-07 Documentation · RE-08 Data Retention · RE-09 Record Accuracy · RE-13 System Documentation · LR-05 Record-Keeping Duties · GQ-02 Can You Reconstruct A Decision · GQ-03 Do You Keep Proper Records · GV-N15 What A Model Card Is Not

---

### Fairness, Bias And Harm

*The substantive consequences of automated systems for the people they affect.*

SP-19 Fairness · GV-02 Bias · GV-03 Harm · SP-06 Dataset Bias · GV-N06 What Fairness Is Not · LR-09 Consumer Protection · LR-08 Legal Challenges · SP-17 Model Performance

---

### Human Control

*The mechanisms that keep humans in the loop — and the tests of whether they are real.*

AR-03 Human Oversight · AR-N04 What Human Oversight Is Not · CS-03 Human Review · CS-13 Human Override · CS-04 Intervention Authority · CS-11 System Shutdown · GQ-01 Can A Real Person Override · GQ-05 Can You Stop The System · LR-12 System Suspension

---

### Third Parties And Vendors

*The governance obligations that persist regardless of who built or supplies the system.*

SP-11 Third-Party Systems · SP-12 Vendor Models · AR-08 Vendor Responsibility · SP-18 Third-Party Risk · LR-04 Liability · AR-N01 What Accountability Is Not

---

### Regulatory Exposure

*What regulators can do, when they show up, and what the organisation needs to be able to demonstrate.*

LR-02 Regulatory Oversight · LR-03 Compliance Duties · LR-06 Regulatory Investigation · LR-07 Enforcement Powers · LR-11 Regulatory Reporting · LR-12 System Suspension · RE-12 External Investigation · AR-01 Accountability

---

### Governance Substitutes — The Things That Look Like Governance But Are Not

*The negation series in one cluster.*

GR-00 What Governance Is Not · AR-N01 What Accountability Is Not · SP-N02 What Intended Use Is Not · LR-N03 What Automated Decision Rights Are Not · AR-N04 What Human Oversight Is Not · GV-N05 What Transparency Is Not · GV-N06 What Fairness Is Not · GV-N07 What Explainability Is Not · GV-N08 What A Standard Is Not · GV-N09 What A Framework Is Not · GV-N10 What Certification Is Not · AR-N11 What A Policy Is Not · LR-N12 What Compliance Is Not · GV-N13 What An Audit Is Not · GV-N14 What A Risk Assessment Is Not · GV-N15 What A Model Card Is Not

---

### The Five Governance Tests

*The questions an organisation must be able to answer at any time.*

GQ-01 Can A Real Person Override An AI Decision?
GQ-02 Can You Reconstruct A Specific Decision After The Fact?
GQ-03 Do You Keep Proper Records Of Decisions And Complaints?
GQ-04 Is Responsibility Formally Assigned In Writing?
GQ-05 Can You Stop The System If You Need To?

---

### System Design And Scope

*What the system is, what it is for, and what it should not be used for.*

SP-01 Automated Decision Making · SP-08 System Scope · SP-09 Intended Use · SP-10 Unintended Use · SP-N02 What Intended Use Is Not · SP-03 System Limits · SP-13 System Inputs · SP-14 System Outputs · LR-13 Risk Classification

---

*AI Governance Reference Series — Cross-Reference Index*
*Total cards indexed: 99*
