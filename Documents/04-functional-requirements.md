CLINICOS  
FUNCTIONAL REQUIREMENTS SPECIFICATION

Document ID: 04-FR  
Version: 1.0  
Status: Draft  
Product: ClinicOS  
Document Type: Functional Requirements Specification  
Author: Laila-dAM  
Creation Date: August 2026  
Last Updated: August 2026  
Confidentiality: Internal Use

Document Control

| Field  | Information  |
| :---- | :---- |
| Document ID  | 04-FR  |
| Document Name  | Functional Requirements Specification  |
| Product  | ClinicOS  |
| Version  | 1.0  |
| Status  | Draft  |
| Document Owner  | Laila-dAM |
| Author  | Laila-dAM |
| Creation Date  | August 2026  |
| Last Updated  | August 2026  |
| Review Status  | Pending  |
| Approval Status  | Pending  |
| Confidentiality  | Internal Use  |

Version History

| Version  | Date  | Author  | Description  |
| :---- | :---- | :---- | :---- |
| 1.0  | August 2026  | Laila-dAM | Initial version  |

Document Ownership and Approval

Document Owner  
The ClinicOS Product Team is responsible for maintaining this document and ensuring that the functional requirements remain aligned with the product strategy, business objectives, user needs, security requirements, and technical evolution of ClinicOS.

Approval

Approval Status: Pending  
This document will become the approved functional requirements baseline after review and validation by the appropriate product, technical, security, and business stakeholders.

Table of Contents  
1\. Introduction  
1.1 Purpose  
1.2 Document Scope  
1.3 Product Overview  
1.4 Intended Audience  
1.5 Requirements Definition Principles  
1.6 Requirement Identification  
1.7 Requirement Prioritization

2\. System Scope  
2.1 In-Scope Features  
2.2 Out-of-Scope Features  
2.3 MVP Scope  
2.4 Future Scope  
2.5 System Boundaries

3\. Actors and Roles  
3.1 Clinic Owner  
3.2 Healthcare Professional  
3.3 Receptionist  
3.4 Clinic Administrator  
3.5 Financial Staff  
3.6 Clinic Manager  
3.7 Patient  
3.8 System Administrator  
3.9 External Services

4\. Authentication and Access Control  
4.1 User Registration  
4.2 Login  
4.3 Logout  
4.4 Password Management  
4.5 Password Recovery  
4.6 Session Management  
4.7 Role-Based Access Control  
4.8 Permission Management  
4.9 Account Status  
4.10 Multi-Clinic Access

5\. Clinic Management  
5.1 Clinic Registration  
5.2 Clinic Profile  
5.3 Clinic Settings  
5.4 Business Information  
5.5 Operating Hours  
5.6 Departments and Specialties  
5.7 Services  
5.8 Locations  
5.9 Clinic Users  
5.10 Clinic Status

6\. User Management  
6.1 Create User  
6.2 View User  
6.3 Update User  
6.4 Deactivate User  
6.5 User Roles  
6.6 User Permissions  
6.7 User Profile  
6.8 User Preferences

7\. Patient Management  
7.1 Patient Registration  
7.2 Patient Profile  
7.3 Patient Identification  
7.4 Contact Information  
7.5 Emergency Contacts  
7.6 Patient Status  
7.7 Patient History  
7.8 Patient Search  
7.9 Patient Timeline  
7.10 Patient Data Management

8\. Appointment Management  
8.1 Appointment Creation  
8.2 Appointment Scheduling  
8.3 Appointment Rescheduling  
8.4 Appointment Cancellation  
8.5 Appointment Confirmation  
8.6 Appointment Status  
8.7 Calendar Management  
8.8 Professional Availability  
8.9 Appointment Conflicts  
8.10 Appointment History

9\. Consultation Management  
9.1 Consultation Creation  
9.2 Consultation Start  
9.3 Consultation Completion  
9.4 Consultation Notes  
9.5 Consultation History  
9.6 Consultation Status  
9.7 Professional Access  
9.8 Consultation Records

10\. Medical Records  
10.1 Medical Record Creation  
10.2 Medical History  
10.3 Clinical Information  
10.4 Attachments  
10.5 Documents  
10.6 Medical Record Timeline  
10.7 Medical Record Search  
10.8 Record Access Control  
10.9 Record Modification History

11\. Financial Management  
11.1 Financial Dashboard  
11.2 Revenue Management  
11.3 Expense Management  
11.4 Payment Registration  
11.5 Payment Status  
11.6 Pending Payments  
11.7 Financial Transactions  
11.8 Financial Reports  
11.9 Financial History

12\. Dashboard and Analytics  
12.1 Owner Dashboard  
12.2 Professional Dashboard  
12.3 Receptionist Dashboard  
12.4 Administrator Dashboard  
12.5 Financial Dashboard  
12.6 Manager Dashboard  
12.7 Operational Indicators  
12.8 Financial Indicators  
12.9 Dashboard Customization  
12.10 Data Visualization

13\. Search and Information Retrieval  
13.1 Global Search  
13.2 Patient Search  
13.3 Appointment Search  
13.4 Medical Record Search  
13.5 Financial Search  
13.6 Filters  
13.7 Sorting  
13.8 Search Permissions

14\. Notifications  
14.1 System Notifications  
14.2 Appointment Notifications  
14.3 Financial Notifications  
14.4 Task Notifications  
14.5 Security Notifications  
14.6 Notification Preferences  
14.7 Notification History

15\. Automation  
15.1 Automation Rules  
15.2 Appointment Automation  
15.3 Administrative Automation  
15.4 Financial Automation  
15.5 Notification Automation  
15.6 Task Automation  
15.7 Automation Monitoring  
15.8 Automation Failure Handling

16\. Artificial Intelligence  
16.1 AI Assistant  
16.2 Natural Language Interaction  
16.3 Intelligent Search  
16.4 Information Summarization  
16.5 Administrative Assistance  
16.6 AI-Generated Content  
16.7 AI Recommendations  
16.8 AI Permissions  
16.9 Human Review  
16.10 AI Limitations  
16.11 AI Usage Monitoring

17\. Reports  
17.1 Operational Reports  
17.2 Appointment Reports  
17.3 Patient Reports  
17.4 Financial Reports  
17.5 User Reports  
17.6 Activity Reports  
17.7 Report Filters  
17.8 Report Export

18\. Audit and Activity History  
18.1 User Activity  
18.2 Patient Activity  
18.3 Medical Record Activity  
18.4 Financial Activity  
18.5 Administrative Activity  
18.6 Security Events  
18.7 Audit Logs

19\. Data Management  
19.1 Data Creation  
19.2 Data Update  
19.3 Data Deletion  
19.4 Data Retention  
19.5 Data Export  
19.6 Data Import  
19.7 Data Migration  
19.8 Data Recovery

20\. Subscription and Billing  
20.1 Subscription Creation  
20.2 Subscription Management  
20.3 Plan Management  
20.4 Billing  
20.5 Payment Status  
20.6 Invoices  
20.7 Upgrades  
20.8 Downgrades  
20.9 Cancellation  
20.10 Subscription History

21\. Customer Support  
21.1 Help Center  
21.2 Support Requests  
21.3 In-App Support  
21.4 Support Ticket Management  
21.5 Support History  
21.6 Customer Communication

22\. External Integrations  
22.1 Integration Architecture  
22.2 Payment Providers  
22.3 Email Services  
22.4 Messaging Services  
22.5 AI Providers  
22.6 Future Integrations  
22.7 API Access

23\. Functional Requirements Specification  
23.1 Requirement Format  
23.2 Requirement IDs  
23.3 Priority Levels  
23.4 Acceptance Criteria  
23.5 Dependencies  
23.6 Business Rules  
23.7 Exception Scenarios

24\. MVP Functional Requirements  
24.1 MVP Authentication  
24.2 MVP User Management  
24.3 MVP Clinic Management  
24.4 MVP Patient Management  
24.5 MVP Appointment Management  
24.6 MVP Consultation Management  
24.7 MVP Medical Records  
24.8 MVP Dashboard  
24.9 MVP Financial Management  
24.10 MVP Search  
24.11 MVP Notifications  
24.12 MVP AI  
24.13 MVP Automation

25\. Future Functional Requirements  
25.1 Telemedicine  
25.2 Mobile Application  
25.3 WhatsApp Integration  
25.4 Digital Signatures  
25.5 Advanced AI  
25.6 Advanced Automation  
25.7 Multi-Location Management  
25.8 API Platform

26\. Requirement Traceability  
26.1 Business Requirements  
26.2 User Requirements  
26.3 Functional Requirements  
26.4 Use Cases  
26.5 User Stories  
26.6 Acceptance Criteria  
26.7 Test Coverage

27\. Functional Requirements Summary  
27.1 MVP Summary  
27.2 Priority Summary  
27.3 Critical Requirements  
27.4 Dependencies  
27.5 Open Questions

28\. Conclusion  
28.1 Summary  
28.2 Implementation Considerations  
28.3 Next Steps

1\. Introduction  
1.1 Purpose  
This document defines the functional requirements of ClinicOS, a cloud-based Software as a Service (SaaS) platform designed to simplify and centralize the management of small healthcare clinics.  
The purpose of this document is to establish a clear and structured definition of what ClinicOS must do from a functional perspective.  
It serves as a reference for:

* Product development.  
* Software engineering.  
* UX/UI design.  
* Quality assurance.  
* Product management.  
* Technical planning.  
* Future integrations.  
* Acceptance testing.

The requirements described in this document should guide the development of ClinicOS while remaining aligned with the product vision, target personas, user journeys, business model, security principles, and MVP strategy.

The primary objective is to ensure that ClinicOS provides a simple, fast, organized, secure, and intelligent experience for small clinics.

1.2 Document Scope  
This document covers the functional behavior expected from the ClinicOS platform.  
It describes the main capabilities required to support clinic operations, including:

* Authentication.  
* User management.  
* Clinic management.  
* Patient management.  
* Appointment management.  
* Consultation management.  
* Medical records.  
* Financial management.  
* Dashboards.  
* Search.  
* Notifications.  
* Automation.  
* Artificial Intelligence.  
* Reports.  
* Audit history.  
* Data management.  
* Subscription management.  
* Customer support.  
* External integrations.

This document focuses primarily on what the system must do, rather than specifying the complete technical implementation of how it will be built.  
Technical architecture, infrastructure, database design, deployment strategy, coding standards, and detailed implementation decisions may be documented separately.

1.3 Product Overview  
ClinicOS is a SaaS platform designed specifically to help small healthcare clinics organize their daily operations in one centralized system.  
The platform aims to replace fragmented workflows, paper-based processes, spreadsheets, disconnected tools, and unnecessary administrative work with a unified digital experience.  
ClinicOS is designed around five fundamental principles:

* Simple — Easy to understand and learn.  
* Fast — Efficient workflows and responsive interactions.  
* Intelligent — Useful automation and practical AI assistance.  
* Secure — Strong protection of clinic and patient information.  
* Reliable — Consistent and dependable daily operation.

The platform is intended to support multiple clinic roles, including:

* Clinic Owners.  
* Healthcare Professionals.  
* Receptionists.  
* Clinic Administrators.  
* Financial Staff.  
* Clinic Managers.

The product should allow these users to work within the same platform while providing role-appropriate experiences and permissions.

1.4 Intended Audience  
This document is intended for everyone involved in defining, building, testing, operating, and evolving ClinicOS.

* Product Team  
  * The Product Team uses this document to define the expected functionality and establish product priorities.  
* Software Engineering Team  
  * Software Engineers use the requirements as a functional reference during implementation.  
* UX/UI Team  
  * Designers use the requirements to design workflows, interfaces, interactions, and user experiences.  
* Quality Assurance Team  
  * QA Engineers use the requirements to create test scenarios and verify that implemented functionality behaves as expected.  
* Technical Leadership  
  * Technical Leads use the requirements to evaluate architectural implications, dependencies, risks, and implementation complexity.  
* Business Stakeholders  
  * Business stakeholders use this document to verify that the product supports the intended business model and customer needs.  
* Future Teams  
  * As ClinicOS grows, this document can also serve as a reference for new engineers, designers, product managers, support teams, and other contributors.

1.5 Requirements Definition Principles  
ClinicOS functional requirements should follow a consistent set of principles.

* Clarity  
  * Each requirement should be understandable without requiring unnecessary interpretation.  
* Specificity  
  * Requirements should describe a clearly identifiable system behavior.  
* Testability  
  * Whenever possible, a requirement should be written so that its implementation can be objectively verified.  
* Consistency  
  * Requirements should not contradict other requirements, business rules, or established product decisions.  
* Traceability  
  * Each requirement should be traceable to a business objective, user need, user journey, use case, or product decision when applicable.  
* User-Centered Design  
  * Requirements should ultimately support real user needs rather than simply increase the number of system features.  
* Simplicity  
  * ClinicOS should avoid unnecessary complexity in workflows and interactions.  
* Security by Design  
  * Security and access control should be considered from the beginning rather than added after implementation.  
* Privacy by Design  
  * Because ClinicOS may process sensitive healthcare information, privacy considerations should be incorporated into functional decisions from the beginning.  
* Scalability  
  * Requirements should support the evolution of ClinicOS from a small initial customer base to a larger SaaS platform.  
* Maintainability  
  * Requirements should be defined in a way that allows the product to evolve without unnecessary disruption.

1.6 Requirement Identification  
Each functional requirement should receive a unique identifier.  
A recommended format is:  
FR-\[MODULE\]-\[NUMBER\]  
Examples:

* FR-AUTH-001  
* FR-CLINIC-001  
* FR-PATIENT-001  
* FR-APPT-001  
* FR-CONSULT-001  
* FR-MEDICAL-001  
* FR-FIN-001  
* FR-AI-001

Where:

* FR \= Functional Requirement.  
* MODULE \= Functional area.  
* NUMBER \= Sequential requirement number.

Example  
FR-PATIENT-001  
Requirement:  
The system shall allow an authorized user to create a new patient record.  
Every requirement should ideally contain:

* Requirement ID.  
* Requirement title.  
* Description.  
* Actor.  
* Preconditions.  
* Main flow.  
* Alternative flows.  
* Exception scenarios.  
* Business rules.  
* Dependencies.  
* Priority.  
* Acceptance criteria.

This structure creates consistency across the entire requirements specification.

1.7 Requirement Prioritization  
ClinicOS will use requirement prioritization to distinguish essential functionality from features that can be implemented later.  
The initial prioritization model will use four levels.

Must Have  
Essential functionality required for the MVP or for the system to operate correctly.  
Examples:

* Authentication.  
* Patient registration.  
* Appointment management.  
* Core medical records.  
* Role-based access control.

Should Have  
Important functionality that significantly improves the product but may not be required for the first release.  
Examples:

* Advanced reporting.  
* Advanced automation.  
* Additional dashboard customization.  
* Advanced search capabilities.

Could Have  
Useful functionality that can be implemented when resources and priorities allow.  
Examples:

* Additional productivity features.  
* Advanced personalization.  
* Additional convenience features.

Future  
Functionality intentionally postponed to a later stage of product evolution.  
Examples:

* Telemedicine.  
* Mobile applications.  
* WhatsApp integration.  
* Digital signatures.  
* Advanced API capabilities.

Priorities may change as ClinicOS receives real-world customer feedback.  
The prioritization model should therefore be reviewed continuously.

2\. System Scope  
2.1 In-Scope Features  
The initial ClinicOS platform is intended to provide the core functionality required to manage the daily operations of small clinics.  
The initial scope includes:

* Authentication and Access  
  * User registration.  
  * Login.  
  * Logout.  
  * Password management.  
  * Password recovery.  
  * Session management.  
  * Role-based access control.  
  * Permission management.  
* Clinic Management  
  * Clinic registration.  
  * Clinic profile.  
  * Clinic settings.  
  * Operating hours.  
  * Services.  
  * Healthcare specialties.  
  * Locations.  
  * Clinic users.  
* User Management  
  * User creation.  
  * User profiles.  
  * Role assignment.  
  * Permission management.  
  * User activation and deactivation.  
  * User preferences.  
* Patient Management  
  * Patient registration.  
  * Patient profiles.  
  * Contact information.  
  * Patient history.  
  * Patient search.  
  * Patient timeline.  
  * Patient status.  
* Appointment Management  
  * Appointment creation.  
  * Scheduling.  
  * Rescheduling.  
  * Cancellation.  
  * Confirmation.  
  * Appointment status.  
  * Calendar management.  
  * Professional availability.  
  * Conflict detection.  
* Consultation Management  
  * Consultation creation.  
  * Consultation records.  
  * Consultation notes.  
  * Consultation status.  
  * Consultation history.  
* Medical Records  
  * Medical record management.  
  * Medical history.  
  * Clinical information.  
  * Documents.  
  * Attachments.  
  * Patient timeline.  
  * Access control.  
  * Modification history.  
* Financial Management  
  * Revenue management.  
  * Expense management.  
  * Payments.  
  * Pending payments.  
  * Financial transactions.  
  * Financial dashboards.  
  * Financial reports.  
* Dashboards  
  * Role-based dashboards.  
  * Operational indicators.  
  * Financial indicators.  
  * Relevant activity information.  
* Search  
  * Global search.  
  * Patient search.  
  * Appointment search.  
  * Medical record search.  
  * Financial search.  
  * Filtering.  
  * Sorting.  
* Notifications  
  * System notifications.  
  * Appointment notifications.  
  * Financial notifications.  
  * Task notifications.  
  * Security notifications.  
* Automation  
  * Appointment automation.  
  * Notification automation.  
  * Administrative automation.  
  * Financial automation.  
  * Task automation.  
* Artificial Intelligence  
  * AI Assistant.  
  * Intelligent search.  
  * Information summarization.  
  * Administrative assistance.  
  * AI-generated content where appropriate.  
  * Human review mechanisms.  
  * AI access control.

2.2 Out-of-Scope Features  
The following capabilities are not considered part of the initial MVP scope unless explicitly prioritized later.

* Telemedicine  
  * Full video consultation and remote healthcare functionality.  
* Native Mobile Applications  
  * Dedicated iOS and Android applications.  
* WhatsApp Integration  
  * Direct patient communication through WhatsApp.  
* Digital Signatures  
  * Advanced digital signature workflows.  
* Advanced API Platform  
  * Public developer APIs and extensive third-party integrations.  
* Internationalization  
  * Full support for multiple countries, currencies, languages, regulations, and healthcare systems.  
* Hospital-Scale Features  
  * Complex hospital workflows designed for large healthcare organizations.

These capabilities may become part of future versions of ClinicOS.

2.3 MVP Scope  
The ClinicOS MVP should focus on validating the core product proposition:  
A simple, fast, and organized system that helps small clinics manage their essential daily operations in one place.  
The MVP should prioritize the smallest set of capabilities necessary to deliver this value.

MVP Core

1. Authentication  
2. Clinic Setup  
3. User Management  
4. Patient Management  
5. Appointment Management  
6. Consultations  
7. Medical Records  
8. Dashboard  
9. Financial Management

MVP Principles  
The MVP should:

* Be easy to learn.  
* Require minimal configuration.  
* Support the primary clinic workflows.  
* Provide a consistent user experience.  
* Protect sensitive information.  
* Be sufficiently fast for daily use.  
* Provide meaningful operational value.  
* Establish a foundation for future expansion.

The MVP should avoid unnecessary features that increase complexity without providing significant customer value.

2.4 Future Scope  
After validating the MVP, ClinicOS may expand into additional capabilities.  
Potential future areas include:

* Communication  
  * WhatsApp integration.  
  * Advanced messaging.  
  * Automated patient communication.  
* Mobility  
  * Native mobile applications.  
  * Mobile-specific workflows.  
* Healthcare Services  
  * Telemedicine.  
  * Additional healthcare workflows.  
  * Advanced specialty-specific functionality.  
* Documents  
  * Digital signatures.  
  * Advanced document management.  
* Artificial Intelligence  
  * More advanced AI assistance.  
  * Predictive operational insights.  
  * Intelligent workflow recommendations.  
  * Advanced automation.  
* Integrations  
  * Payment providers.  
  * External healthcare services.  
  * Accounting systems.  
  * Communication platforms.  
  * Third-party applications.  
* Platform  
  * Public API.  
  * Developer ecosystem.  
  * Advanced integrations.  
  * Multi-location management.  
* Expansion  
  * Medium-sized clinics.  
  * Larger healthcare organizations.  
  * Laboratories.  
  * Hospitals.  
  * International markets.

Future scope should be determined according to customer demand, business opportunity, technical feasibility, regulatory requirements, and strategic priorities.

2.5 System Boundaries  
ClinicOS is intended to function as a centralized clinic management platform.  
The system boundary includes the functionality directly controlled and provided by ClinicOS.  
![][image1]  
ClinicOS may communicate with external services when required.  
Examples include:

* Payment providers.  
* Email providers.  
* Messaging providers.  
* AI providers.  
* Authentication services.  
* Storage services.  
* Future healthcare integrations.

External services remain outside the core ClinicOS system boundary and should be treated as dependencies or integrations.

System Boundary Principles

* Clinic Data Isolation  
  * Data belonging to one clinic must remain logically isolated from data belonging to other clinics.  
* Role-Based Access  
  * Users should only access information and functionality permitted by their role and permissions.  
* Patient Data Protection  
  * Patient information must be handled according to applicable privacy and security requirements.  
* External Service Isolation  
  * Failures in external services should not compromise the integrity of ClinicOS data.  
* Controlled Integrations  
  * External integrations should use clearly defined interfaces and permissions.  
* Future Scalability  
  * The system boundary should allow ClinicOS to introduce additional services and integrations without fundamentally compromising the core platform architecture.

Scope Summary  
The functional scope of ClinicOS is centered on one primary objective:  
Provide small clinics with a centralized, simple, fast, secure, and intelligent platform for managing their essential operations.  
The MVP should focus on solving the most frequent and valuable problems first.  
Future capabilities should expand the platform without compromising its core promise of simplicity.

3\. Actors and Roles  
3.1 Clinic Owner  
The Clinic Owner is the primary business decision-maker within ClinicOS.  
The Clinic Owner is responsible for managing the clinic at a strategic and operational level and may have access to financial, administrative, operational, and management information.

Main Responsibilities

* Manage the clinic profile.  
* Manage clinic settings.  
* Manage users and roles.  
* Monitor appointments and clinic activity.  
* Access financial information.  
* View operational and financial dashboards.  
* Configure services and specialties.  
* Review reports.  
* Monitor clinic performance.  
* Manage the clinic subscription.  
* Configure or approve important system settings.

Expected System Access  
The Clinic Owner should have broad access to clinic information, subject to security policies and applicable privacy restrictions.

3.2 Healthcare Professional  
The Healthcare Professional is a professional who provides healthcare services through the clinic.

Examples include:

* Doctors.  
* Dentists.  
* Psychologists.  
* Physiotherapists.  
* Nutritionists.  
* Veterinarians.  
* Other healthcare professionals supported by the clinic.

Main Responsibilities

* View assigned appointments.  
* Manage professional availability.  
* Access authorized patient information.  
* Conduct consultations.  
* Create and update consultation records.  
* Create and update authorized medical records.  
* Review patient history.  
* Add clinical information.  
* Access relevant documents and attachments.  
* Use authorized AI assistance.  
* Review AI-generated information before use.

Expected System Access  
Healthcare Professionals should primarily access information necessary to provide healthcare services.  
Access to financial, administrative, and other restricted information should be limited according to permissions.

3.3 Receptionist  
The Receptionist is responsible for coordinating the clinic's front-desk and appointment-related activities.

Main Responsibilities

* Register patients.  
* Update patient contact information.  
* Schedule appointments.  
* Reschedule appointments.  
* Cancel appointments.  
* Confirm appointments.  
* Check professional availability.  
* Manage appointment statuses.  
* Search for patients.  
* View authorized patient information.  
* Assist with patient check-in.  
* Manage administrative notifications.

Expected System Access  
Receptionists should have access to operational information required for their daily activities while being restricted from confidential clinical and financial information unless explicitly authorized.

3.4 Clinic Administrator  
The Clinic Administrator manages administrative configuration and operational processes.

Main Responsibilities

* Manage clinic settings.  
* Manage users.  
* Assign roles.  
* Configure permissions.  
* Manage services.  
* Configure operating hours.  
* Manage departments and specialties.  
* Manage clinic locations.  
* Monitor system activity.  
* Generate administrative reports.  
* Support operational workflows.

Expected System Access  
The Clinic Administrator should have broad administrative access but should not automatically receive unrestricted access to clinical or financial information.  
Permissions should be explicitly controlled.

3.5 Financial Staff  
The Financial Staff manages the financial operations of the clinic.

Main Responsibilities

* Register payments.  
* Track payment status.  
* Manage revenue.  
* Register expenses.  
* Monitor pending payments.  
* Manage financial transactions.  
* Generate financial reports.  
* Review financial history.  
* Monitor financial indicators.

Expected System Access  
Financial Staff should primarily access financial information and the operational information necessary to perform financial activities.  
Access to medical records should be restricted unless explicitly authorized.

3.6 Clinic Manager  
The Clinic Manager is responsible for monitoring and improving the clinic's operational performance.

Main Responsibilities

* Monitor clinic operations.  
* Monitor appointment activity.  
* Analyze operational indicators.  
* Monitor staff activity.  
* Review reports.  
* Identify operational inefficiencies.  
* Monitor productivity.  
* Support process improvements.  
* Monitor service performance.

Expected System Access  
The Clinic Manager should have access to operational and management information while respecting restrictions on sensitive clinical and financial data.

3.7 Patient  
The Patient is the individual receiving healthcare services from the clinic.  
The patient is primarily represented as a managed entity within ClinicOS.  
Future versions may provide a dedicated patient-facing experience.

Current Responsibilities  
Depending on the implementation, patients may:

* Provide personal information.  
* Provide contact information.  
* Confirm appointments through supported channels.  
* Receive notifications.  
* Provide information required for their care.

Future Patient Access  
Future versions may allow patients to:

* Access appointments.  
* Request appointments.  
* View authorized information.  
* Receive documents.  
* Communicate with the clinic.  
* Complete forms.  
* Access a patient portal.  
* Participate in telemedicine sessions.

Patient access should always be controlled through explicit permissions and security mechanisms.

3.8 System Administrator  
The System Administrator is responsible for the technical and operational administration of the ClinicOS platform.  
This role belongs to the ClinicOS platform rather than to an individual customer clinic.

Main Responsibilities

* Manage platform-level configuration.  
* Monitor system health.  
* Manage platform users when authorized.  
* Investigate technical issues.  
* Monitor security events.  
* Manage platform-level integrations.  
* Monitor infrastructure-related events.  
* Support customer organizations.  
* Manage platform-wide configurations.

Security Restrictions  
System Administrators should not have unrestricted access to customer clinical data by default.  
Access to customer information should follow the principle of least privilege and should be auditable.

3.9 External Services  
External Services are third-party systems that communicate with ClinicOS.

Examples include:

* Payment providers.  
* Email providers.  
* Messaging providers.  
* AI providers.  
* Cloud storage services.  
* Authentication services.  
* Monitoring services.  
* Future healthcare integrations.

Responsibilities  
External services may:

* Process authorized requests.  
* Send notifications.  
* Process payments.  
* Provide AI capabilities.  
* Store approved files.  
* Exchange authorized information.

Security Requirements  
External services must only receive the minimum information required to perform their intended function.  
Integrations should use secure authentication, controlled permissions, encrypted communication, and appropriate monitoring.

4\. Authentication and Access Control  
Authentication and Access Control define how users identify themselves, access ClinicOS, and interact with information and functionality.  
The system should follow the principles of:

* Least privilege.  
* Role-based access.  
* Secure authentication.  
* Privacy by design.  
* Data isolation.  
* Session security.  
* Auditability.

4.1 User Registration  
ClinicOS shall allow authorized users to create user accounts.

Functional Requirements

* FR-AUTH-001 — Create User Account  
  * The system shall allow an authorized user to create a new user account.  
  * The registration process should collect the minimum information required to create the account.  
  * Possible information includes:  
    * Full name.  
    * Email address.  
    * Phone number, when applicable.  
    * Role.  
    * Clinic association.  
    * Password or authentication method.

Business Rules  
The email address should be unique within the applicable account scope.  
The user must be associated with at least one authorized clinic.  
The assigned role must determine the user's initial permissions.  
Sensitive information should not be exposed during registration.

4.2 Login  
ClinicOS shall allow registered users to authenticate securely.

Functional Requirements

* FR-AUTH-002 — User Login  
  * The system shall allow users to access ClinicOS by providing valid authentication credentials.

Main Flow

1. User opens the login page.  
2. User enters credentials.  
3. System validates the credentials.  
4. System verifies account status.  
5. System identifies the user's clinic and permissions.  
6. System creates an authenticated session.  
7. System redirects the user to the appropriate dashboard.

Exception Scenarios  
If authentication fails, the system shall:

* Reject the authentication attempt.  
* Avoid revealing unnecessary information.  
* Provide an appropriate error message.  
* Allow the user to attempt authentication again.

4.3 Logout  
ClinicOS shall allow authenticated users to terminate their current session.

Functional Requirements

* FR-AUTH-003 — Logout  
  * The system shall allow users to securely log out of ClinicOS.

After logout:

* The current session shall be invalidated according to the session security policy.  
* Protected pages should no longer be accessible through the previous session.  
* The user should be redirected to an appropriate authentication screen.

4.4 Password Management  
ClinicOS shall provide mechanisms for users to manage their passwords securely.

Functional Requirements

* FR-AUTH-004 — Change Password  
  * The system shall allow authenticated users to change their password.

The system should:

* Validate the current password when required.  
* Enforce password security requirements.  
* Prevent reuse of prohibited passwords where applicable.  
* Confirm successful password changes.  
* Invalidate sessions when required by security policy.

4.5 Password Recovery  
ClinicOS shall provide a secure password recovery process.

Functional Requirements

* FR-AUTH-005 — Recover Password  
  * The system shall allow users who have forgotten their password to request a password reset.

Main Flow

1. User selects password recovery.  
2. User provides the registered email address.  
3. System processes the recovery request.  
4. System sends a secure password reset mechanism.  
5. User accesses the reset process.  
6. User creates a new password.  
7. System confirms the password change.

Security Requirements  
Password recovery mechanisms should:

* Use time-limited reset tokens.  
* Prevent token reuse.  
* Protect against unauthorized account discovery.  
* Use secure communication.  
* Log relevant security events.

4.6 Session Management  
ClinicOS shall manage authenticated sessions securely.

Functional Requirements

* FR-AUTH-006 — Secure Session Management  
  * The system shall maintain authenticated sessions according to defined security policies.  
  * Session management should include:  
    * Session creation.  
    * Session validation.  
    * Session expiration.  
    * Logout.  
    * Session invalidation.  
    * Protection against unauthorized session reuse.

Security Requirements  
Sessions should:

* Use secure authentication mechanisms.  
* Use secure cookies or equivalent mechanisms when applicable.  
* Apply appropriate expiration policies.  
* Prevent unauthorized access to protected resources.  
* Support forced session invalidation when required.

4.7 Role-Based Access Control  
ClinicOS shall use Role-Based Access Control (RBAC) to determine what users can access.

Functional Requirements

* FR-AUTH-007 — Role-Based Access  
  * The system shall assign one or more roles to authorized users and use those roles to determine available functionality.  
  * Supported roles include:  
    * Clinic Owner.  
    * Healthcare Professional.  
    * Receptionist.  
    * Clinic Administrator.  
    * Financial Staff.  
    * Clinic Manager.  
    * Patient, where applicable.  
    * System Administrator.

Example  
A Receptionist may:

* Create patients.  
* Schedule appointments.  
* View appointment information.

A Receptionist should not automatically be allowed to:

* View complete medical records.  
* Access sensitive financial reports.  
* Modify restricted clinical information.

4.8 Permission Management  
ClinicOS shall allow authorized administrators to manage user permissions.

Functional Requirements

* FR-AUTH-008 — Permission Management  
  * The system shall allow authorized users to assign, modify, and revoke permissions according to the applicable access-control model.  
  * Permissions may control:  
    * Create.  
    * View.  
    * Update.  
    * Delete.  
    * Export.  
    * Manage.  
    * Approve.  
    * Configure.  
  * Permissions may be applied to resources such as:  
    * Patients.  
    * Appointments.  
    * Consultations.  
    * Medical records.  
    * Financial records.  
    * Reports.  
    * Users.  
    * Clinic settings.

Principle of Least Privilege  
Users should receive only the permissions necessary to perform their responsibilities.

4.9 Account Status  
ClinicOS shall maintain the status of every user account.

Possible Statuses  
Active.  
Inactive.  
Suspended.  
Pending.  
Locked.

Functional Requirements

* FR-AUTH-009 — Account Status Management  
  * The system shall prevent inactive, suspended, or locked users from accessing protected functionality according to the applicable security policy.  
  * Authorized administrators should be able to manage account status.

Business Rules  
Deactivating an account should not automatically delete historical records associated with the user.  
Historical actions should remain auditable.

4.10 Multi-Clinic Access  
ClinicOS shall support controlled access to multiple clinics when required.

Functional Requirements

* FR-AUTH-010 — Multi-Clinic Access  
  * The system shall allow an authorized user to access more than one clinic when the user's account has been explicitly associated with multiple clinics.


The system must ensure that:

* Clinic data remains isolated.  
* The user's permissions are evaluated within the correct clinic context.  
* Data from one clinic cannot be accessed unintentionally from another clinic.  
* Clinic switching is explicit and understandable.  
* The active clinic context is clearly identified.

Example  
A healthcare professional who works at:

* Clinic A  
* Clinic B

may have access to both clinics.  
However, when working within Clinic A, the user should only access information authorized for Clinic A.

Security Principle  
Clinic isolation is mandatory.  
A user must never gain access to another clinic's information merely because the user has an account in ClinicOS.

Authentication and Access Control Summary  
The authentication architecture of ClinicOS should provide a secure foundation for the entire platform.  
The core principles are:  
Authenticate the user.  
Identify the clinic.  
Identify the role.  
Evaluate permissions.  
Allow only authorized actions.  
Record relevant security activity.  
This structure will serve as the foundation for the subsequent functional modules, particularly Patient Management, Medical Records, Financial Management, Audit Logs, AI, and Multi-Tenant Architecture.

5\. Clinic Management

5.1 Clinic Registration  
Clinic registration is the process through which a new clinic is created within ClinicOS.  
The registration process establishes the clinic as an independent tenant and creates the initial owner account responsible for managing the organization.  
The process should be simple and require only the minimum information necessary to begin using the platform.

Primary Actor

* Clinic Owner

Preconditions

* The user does not already have an active clinic associated with the registration process.  
* The user has access to a valid email address.  
* The ClinicOS service is available.

Main Flow

1. User  
2. Start Registration  
3. Enter Clinic Information  
4. Enter Owner Information  
5. Create Account  
6. Validate Information  
7. Create Clinic Tenant  
8. Create Owner User  
9. Configure Default Settings  
10. Clinic Created  
11. Onboarding

Functional Requirements

* FR-CLINIC-001 — Clinic Registration  
  * The system shall allow an authorized user to register a new clinic.  
* FR-CLINIC-002 — Required Information  
  * The system shall require the minimum information necessary to create a clinic account.  
  * Potential information includes:  
    * Clinic name.  
    * Owner name.  
    * Owner email.  
    * Password.  
    * Phone number.  
    * Country.  
    * State.  
    * City.  
* FR-CLINIC-003 — Validation  
  * The system shall validate required registration fields before creating the clinic.  
* FR-CLINIC-004 — Duplicate Prevention  
  * The system should prevent accidental creation of duplicate clinic accounts when sufficient identifying information already exists.  
* FR-CLINIC-005 — Tenant Creation  
  * The system shall create an isolated tenant for each newly registered clinic.  
* FR-CLINIC-006 — Initial Owner  
  * The system shall automatically associate the registering user with the Clinic Owner role.

Business Rules

* A clinic must have at least one owner.  
* A clinic cannot be created without a valid owner account.  
* Clinic data must remain logically isolated from other clinics.  
* Registration must not expose information belonging to other tenants.

Acceptance Criteria

* A valid user can register a clinic.  
* Invalid required fields prevent registration.  
* A clinic tenant is created successfully.  
* The registering user becomes the initial clinic owner.  
* The user can proceed to onboarding after registration.

5.2 Clinic Profile  
The Clinic Profile contains the main identity and descriptive information of the clinic.

It provides a centralized location for authorized users to view and update clinic information.

Functional Requirements

* FR-CLINIC-007 — View Clinic Profile  
  * The system shall allow authorized users to view the clinic profile.  
* FR-CLINIC-008 — Update Clinic Profile  
  * The system shall allow authorized users to update permitted clinic information.  
  * Potential information includes:  
    * Clinic name.  
    * Logo.  
    * Description.  
    * Phone.  
    * Email.  
    * Website.  
    * Address.  
    * Contact information.  
* FR-CLINIC-009 — Logo  
  * The system should allow an authorized user to upload or change the clinic logo.  
* FR-CLINIC-010 — Profile Permissions  
  * Only users with the appropriate permissions shall be able to modify clinic profile information.

Business Rules

* Users without the required permission shall have read-only access or no access.  
* Profile changes should be recorded in the activity history.  
* Uploaded files should comply with supported file formats and size restrictions.

5.3 Clinic Settings  
Clinic settings define how ClinicOS behaves for a particular clinic.  
Settings should be organized logically and should avoid unnecessary complexity.

Settings Categories  
Clinic Settings  
│  
├── General  
│   ├── Clinic Name  
│   ├── Language  
│   └── Time Zone  
│  
├── Scheduling  
│   ├── Appointment Duration  
│   ├── Working Days  
│   └── Cancellation Rules  
│  
├── Notifications  
│   ├── Appointment Notifications  
│   ├── Financial Notifications  
│   └── System Notifications  
│  
├── Security  
│   ├── Session Policies  
│   └── Access Controls  
│  
└── AI  
    ├── AI Availability  
    ├── AI Permissions  
    └── AI Usage Controls

Functional Requirements

* FR-CLINIC-011 — View Settings  
  * The system shall allow authorized users to view clinic settings.  
* FR-CLINIC-012 — Update Settings  
  * The system shall allow authorized users to modify permitted settings.  
* FR-CLINIC-013 — Default Settings  
  * The system shall provide reasonable default settings when a clinic is created.  
* FR-CLINIC-014 — Settings Validation  
  * The system shall validate settings before saving changes.

Business Rules

* Only authorized users may modify clinic-level settings.  
* Invalid settings must not be saved.  
* Changes should take effect according to the specific setting's behavior.

5.4 Business Information  
Business information represents the administrative and organizational information associated with the clinic.

Potential Information

* Legal/business name.  
* Trading name.  
* Tax identification information.  
* Business email.  
* Business phone.  
* Website.  
* Address.  
* Billing information.  
* Registration information.

Functional Requirements

* FR-CLINIC-015 — Business Information  
  * The system shall allow authorized users to register and maintain business information.  
* FR-CLINIC-016 — Information Validation  
  * The system shall validate applicable fields according to their expected format.  
* FR-CLINIC-017 — Restricted Access  
  * Sensitive business information shall only be accessible to authorized users.

Business Rules

* Business information must not automatically become visible to every clinic user.

5.5 Operating Hours  
Operating hours define when the clinic is available for appointments and other scheduled activities.

Example  
Monday       08:00 ───────── 18:00  
Tuesday      08:00 ───────── 18:00  
Wednesday    08:00 ───────── 18:00  
Thursday     08:00 ───────── 18:00  
Friday       08:00 ───────── 17:00  
Saturday     08:00 ───────── 12:00  
Sunday       CLOSED

Functional Requirements

* FR-CLINIC-018 — Configure Operating Hours  
  * The system shall allow authorized users to define clinic operating hours.  
* FR-CLINIC-019 — Multiple Periods  
  * The system should support multiple operating periods within the same day.  
  * Example:  
    * 08:00 ─── 12:00    OPEN  
    * 12:00 ─── 14:00    CLOSED  
    * 14:00 ─── 18:00    OPEN  
* FR-CLINIC-020 — Closed Days  
  * The system shall allow authorized users to mark specific days as closed.  
* FR-CLINIC-021 — Scheduling Integration  
  * Appointment scheduling should respect configured clinic operating hours.

Business Rules

* Appointments should not normally be created outside operating hours unless an authorized override is explicitly supported.

5.6 Departments and Specialties  
ClinicOS may support organizations with multiple departments and healthcare specialties.

Examples include:  
Dentistry.  
Psychology.  
Physiotherapy.  
Nutrition.  
General Medicine.  
Pediatrics.  
Dermatology.

Functional Requirements

* FR-CLINIC-022 — Create Department  
  * Authorized users shall be able to create departments.  
* FR-CLINIC-023 — Update Department  
  * Authorized users shall be able to update department information.  
* FR-CLINIC-024 — Deactivate Department  
  * Authorized users shall be able to deactivate departments without automatically deleting historical records.  
* FR-CLINIC-025 — Create Specialty  
  * Authorized users shall be able to define healthcare specialties.  
* FR-CLINIC-026 — Associate Users  
  * Authorized users shall be able to associate healthcare professionals with appropriate specialties or departments.

Business Rules

* Deactivation should preserve historical appointments, consultations, and records associated with the department or specialty.

5.7 Services  
Services represent the procedures, consultations, or other offerings provided by the clinic.

Example  
Clinic  
  |  
  \+-- Services  
       |  
       \+-- Initial Consultation  
       \+-- Follow-up Consultation  
       \+-- Psychological Evaluation  
       \+-- Physiotherapy Session  
       \+-- Dental Cleaning  
       \+-- Nutrition Consultation  
Service Information  
A service may contain:

* Name.  
* Description.  
* Duration.  
* Price.  
* Specialty.  
* Department.  
* Status.

Functional Requirements

* FR-CLINIC-027 — Create Service  
  * Authorized users shall be able to create clinic services.  
* FR-CLINIC-028 — Update Service  
  * Authorized users shall be able to update service information.  
* FR-CLINIC-029 — Deactivate Service  
  * Authorized users shall be able to deactivate services.  
* FR-CLINIC-030 — Service Scheduling  
  * The system should use service duration when calculating appointment availability.  
* FR-CLINIC-031 — Service Pricing  
  * The system should support a default price for each service where applicable.

Business Rules

* Deactivated services should not be available for new appointments but should remain associated with historical records.

5.8 Locations  
ClinicOS should support the registration of clinic locations.  
The initial implementation may support a primary location while maintaining an architecture capable of supporting multiple locations in future versions.

Functional Requirements

* FR-CLINIC-032 — Create Location  
  * Authorized users shall be able to create a clinic location.  
* FR-CLINIC-033 — Update Location  
  * Authorized users shall be able to update location information.  
* FR-CLINIC-034 — Primary Location  
  * The system shall allow one location to be identified as the primary clinic location.  
* FR-CLINIC-035 — Location Status  
  * Authorized users shall be able to activate or deactivate locations.

Potential Information

* Location name.  
* Address.  
* Phone.  
* Email.  
* Operating hours.  
* Status.

Future Expansion  
Clinic  
│  
├── Location A  
│   ├── Professionals  
│   ├── Patients  
│   └── Appointments  
│  
├── Location B  
│   ├── Professionals  
│   ├── Patients  
│   └── Appointments  
│  
└── Location C  
    ├── Professionals  
    ├── Patients  
    └── Appointments

Multi-location management may become an advanced feature in a future version.

5.9 Clinic Users  
Clinic Users are the people authorized to access the clinic's ClinicOS environment.  
The clinic owner or an authorized administrator should be able to manage users.

Functional Requirements

* FR-CLINIC-036 — View Clinic Users  
  * Authorized users shall be able to view users associated with the clinic.  
* FR-CLINIC-037 — Invite User  
  * Authorized users shall be able to invite new users.  
* FR-CLINIC-038 — Assign Role  
  * Authorized users shall be able to assign an appropriate role to a user.  
* FR-CLINIC-039 — Deactivate User  
  * Authorized users shall be able to deactivate a clinic user.  
* FR-CLINIC-040 — User Search  
  * Authorized users should be able to search and filter clinic users.

Example  
Clinic  
  |  
  \+-- Owner  
  |  
  \+-- Administrator  
  |  
  \+-- Receptionist  
  |  
  \+-- Healthcare Professionals  
  |  
  \+-- Financial Staff  
  |  
  \+-- Managers

User-specific functionality and permissions are defined in Section 6\.

5.10 Clinic Status  
Clinic Status represents the operational state of a clinic within ClinicOS.

Possible States  
![][image2]  
Potential statuses include:

* Active.  
* Trial.  
* Suspended.  
* Cancelled.  
* Closed.

Functional Requirements

* FR-CLINIC-041 — Clinic Status  
  * The system shall maintain the current status of each clinic.  
* FR-CLINIC-042 — Status Restrictions  
  * The system shall apply appropriate access and functionality restrictions according to clinic status.  
* FR-CLINIC-043 — Status History  
  * The system should maintain a history of relevant clinic status changes.

Business Rules

* An inactive or suspended clinic should not operate normally.  
* Historical clinic data should not be automatically deleted because of status changes.  
* Status changes should be restricted to authorized actors or system processes.

6\. User Management  
6.1 Create User  
User creation allows an authorized clinic user to add another person to the clinic's environment.

Main Flow

1. Authorized User  
2. Create / Invite User  
3. Enter User Information  
4. Select Role  
5. Configure Permissions  
6. Validate  
7. Create / Invite Account  
8. User Receives Invitation  
9. Account Activated

Functional Requirements

* FR-USER-001 — Create User  
  * The system shall allow authorized users to create or invite users.  
* FR-USER-002 — Required Information  
  * The system shall collect the minimum information required to create a user.  
  * Potential information:  
    * Full name.  
    * Email.  
    * Phone.  
    * Role.  
    * Specialty.  
    * Department.  
* FR-USER-003 — Role Assignment  
  * The system shall allow an authorized user to assign a role during user creation.  
* FR-USER-004 — Invitation  
  * The system should support sending an invitation to a newly created user.  
* FR-USER-005 — Duplicate Account Prevention  
  * The system shall prevent unintended duplicate user accounts within the same clinic.

6.2 View User  
Authorized users should be able to view user information according to their permissions.

Functional Requirements

* FR-USER-006 — User List  
  * The system shall display users associated with the current clinic.  
* FR-USER-007 — User Details  
  * The system shall allow authorized users to view permitted user details.  
* FR-USER-008 — User Filtering  
  * The system should support filtering users by:  
    * Name.  
    * Role.  
    * Department.  
    * Specialty.  
    * Status.  
* FR-USER-009 — Access Restrictions  
  * Users shall only be able to view information permitted by their role and permissions.

6.3 Update User  
Authorized users should be able to update permitted user information.

Functional Requirements

* FR-USER-010 — Update User  
  * The system shall allow authorized users to update user information.  
* FR-USER-011 — Update Role  
  * Authorized users shall be able to change a user's role when permitted.  
* FR-USER-012 — Update Permissions  
  * Authorized users shall be able to modify additional permissions when the permission model supports it.  
* FR-USER-013 — Validation  
  * The system shall validate updated information before saving.  
* FR-USER-014 — Change History  
  * Important user changes should be recorded in the audit history.

6.4 Deactivate User  
User deactivation removes a user's ability to actively access the clinic environment without necessarily deleting their historical information.

Functional Requirements

* FR-USER-015 — Deactivate User  
  * Authorized users shall be able to deactivate a user.  
* FR-USER-016 — Prevent Login  
  * A deactivated user shall not be able to log in to the clinic environment.  
* FR-USER-017 — Preserve History  
  * Historical records associated with the user shall remain available according to applicable retention rules.  
* FR-USER-018 — Reactivate User  
  * Authorized users should be able to reactivate a previously deactivated user.

Business Rule

* Deactivation should generally be preferred over permanent deletion when historical accountability must be preserved.

6.5 User Roles  
Roles define the general responsibilities and access boundaries of users within ClinicOS.

Initial Roles  
![][image3]  
Core Roles

* Clinic Owner  
  * Clinic configuration.  
  * User management.  
  * Business oversight.  
  * Financial visibility.  
  * Subscription management.  
  * High-level analytics.  
* Healthcare Professional  
  * Managing assigned appointments.  
  * Conducting consultations.  
  * Managing permitted medical records.  
  * Viewing relevant patient information.  
* Receptionist  
  * Scheduling appointments.  
  * Managing patient registration.  
  * Confirming appointments.  
  * Managing front-desk workflows.  
* Clinic Administrator  
  * Operational configuration.  
  * User management.  
  * Administrative workflows.  
  * Clinic settings.  
* Financial Staff  
  * Payments.  
  * Revenue.  
  * Expenses.  
  * Financial transactions.  
  * Financial reports.  
* Clinic Manager  
  * Operational monitoring.  
  * Team performance.  
  * Clinic indicators.  
  * Workflow management.  
* Patient  
  * The patient is primarily an external participant in the healthcare workflow.  
  * Patient-facing functionality may be introduced progressively.

Functional Requirements

* FR-USER-019 — Role Assignment  
  * The system shall associate each clinic user with at least one role.  
* FR-USER-020 — Role-Based Access  
  * The system shall apply access rules according to the assigned role.  
* FR-USER-021 — Role Changes  
  * Authorized users shall be able to change user roles.

6.6 User Permissions  
Permissions provide more granular access control beyond general roles.

Permission Model  
ROLE  
  |  
  \+-- Permissions  
       |  
       \+-- View Patients  
       \+-- Create Patients  
       \+-- Edit Patients  
       \+-- View Medical Records  
       \+-- Edit Medical Records  
       \+-- Manage Appointments  
       \+-- View Finance  
       \+-- Manage Finance  
       \+-- Manage Users  
       \+-- Manage Settings  
       \+-- Use AI

Functional Requirements

* FR-USER-022 — Permission Management  
  * The system shall support permissions associated with user roles.  
* FR-USER-023 — Permission Enforcement  
  * The system shall enforce permissions when users attempt to access protected functionality.  
* FR-USER-024 — Unauthorized Access  
  * The system shall deny access to resources for which the user lacks permission.  
* FR-USER-025 — Permission Changes  
  * Authorized administrators shall be able to modify configurable permissions where supported.

Business Rules

* Permission checks must be enforced server-side and must not rely solely on frontend restrictions.

6.7 User Profile  
Each user should have a personal profile containing information relevant to their identity and use of ClinicOS.

Potential Information

* Full name.  
* Profile photo.  
* Email.  
* Phone.  
* Professional role.  
* Specialty.  
* Department.  
* Professional registration information where applicable.  
* Preferred language.  
* Time zone.

Functional Requirements

* FR-USER-026 — View Own Profile  
  * Users shall be able to view their own profile.  
* FR-USER-027 — Update Own Profile  
  * Users shall be able to update permitted personal information.  
* FR-USER-028 — Profile Photo  
  * The system should allow users to upload a profile photo.  
* FR-USER-029 — Restricted Fields  
  * Sensitive or administrative fields shall only be changeable by authorized users.

6.8 User Preferences  
User preferences allow ClinicOS to adapt the interface and experience to individual users without changing clinic-wide settings.

Potential Preferences  
User Preferences  
│  
├── Appearance  
│   ├── Theme  
│   └── Interface Preferences  
│  
├── Notifications  
│   ├── Email  
│   ├── In-App  
│   └── Alerts  
│  
├── Calendar  
│   ├── Default View  
│   └── Default Duration  
│  
├── Language  
│  
└── Accessibility  
    ├── Text Size  
    └── Display Preferences

Functional Requirements

* FR-USER-030 — User Preferences  
  * The system shall allow users to configure supported personal preferences.  
* FR-USER-031 — Preference Persistence  
  * The system shall save user preferences and apply them when the user returns to the platform.  
* FR-USER-032 — Preference Isolation  
  * Personal preferences shall affect only the respective user unless explicitly configured otherwise.  
* FR-USER-033 — Default Preferences  
  * The system shall provide sensible default preferences for new users.

User Management Security Model  
Because ClinicOS may process sensitive healthcare information, user management must follow a strict access-control model.  
![][image4]  
The authorization model should follow the principle of least privilege:  
Users should receive only the access necessary to perform their responsibilities.

Clinic and User Relationship  
The relationship between clinics and users should support the ClinicOS multi-tenant model.  
The same person may potentially belong to more than one clinic in future versions, but access must always be evaluated within the appropriate clinic context.  
A user's access to Clinic A must never automatically grant access to Clinic B.

Cross-Section Business Rules  
The following rules apply to both Clinic Management and User Management.

* BR-001 — Tenant Isolation  
  * Clinic data must remain logically isolated between tenants.  
* BR-002 — Authorization  
  * Every protected operation must verify that the authenticated user has the necessary permissions.  
* BR-003 — Least Privilege  
  * Users should receive the minimum access necessary for their responsibilities.  
* BR-004 — Historical Integrity  
  * Deactivating users, services, departments, or locations must not unnecessarily destroy historical records.  
* BR-005 — Auditability  
  * Important administrative actions should generate an auditable activity record.  
* BR-006 — Server-Side Enforcement  
  * Access control must be enforced on the server side.  
* BR-007 — Consistent UX  
  * Permission restrictions should be presented clearly to users without exposing sensitive information.  
* BR-008 — Separation of Responsibilities  
  * Clinic administration, healthcare operations, and financial operations should be separable through roles and permissions.  
* BR-009 — Future Scalability  
  * The model should support future expansion to:  
    * Multiple locations.  
    * Additional roles.  
    * Custom permissions.  
    * Larger clinics.  
    * Enterprise organizations.  
    * Advanced integrations.  
* BR-010 — Privacy by Design  
  * Access to patient and medical information must be intentionally restricted according to user responsibilities and applicable privacy requirements.

Functional Requirements Summary

| Module  | Requirement Range  | Main Purpose  |
| :---- | :---- | :---- |
| Clinic Registration  | FR-CLINIC-001–006  | Create clinic and initial owner  |
| Clinic Profile  | FR-CLINIC-007–010  | Manage clinic identity  |
| Clinic Settings  | FR-CLINIC-011–014  | Configure platform behavior  |
| Business Information  | FR-CLINIC-015–017  | Manage business data  |
| Operating Hours  | FR-CLINIC-018–021  | Define scheduling availability  |
| Departments & Specialties  | FR-CLINIC-022–026  | Organize clinic structure  |
| Services  | FR-CLINIC-027–031  | Manage clinic services  |
| Locations  | FR-CLINIC-032–035  | Manage physical locations  |
| Clinic Users  | FR-CLINIC-036–040  | Manage clinic members  |
| Clinic Status  | FR-CLINIC-041–043  | Control clinic lifecycle  |
| Create User  | FR-USER-001–005  | Add users  |
| View User  | FR-USER-006–009  | View users  |
| Update User  | FR-USER-010–014  | Modify users  |
| Deactivate User  | FR-USER-015–018  | Control user lifecycle  |
| User Roles  | FR-USER-019–021  | Define responsibilities  |
| User Permissions  | FR-USER-022–025  | Enforce granular access  |
| User Profile  | FR-USER-026–029  | Manage personal information  |
| User Preferences  | FR-USER-030–033  | Personalize experience  |

Expected Outcome  
After implementing Sections 5 and 6, ClinicOS should provide a clear organizational foundation:  
![][image5]  
The combination of Clinic Management \+ User Management \+ Role-Based Access Control forms the organizational foundation upon which the remaining ClinicOS modules can safely operate.

7\. Patient Management  
Patient Management is a core ClinicOS module responsible for creating, organizing, searching, and maintaining patient information throughout the patient lifecycle.  
The module shall provide a centralized and structured patient record that can be accessed by authorized users according to their roles and permissions.  
The primary objectives are:

* Centralize patient information.  
* Reduce paper-based processes.  
* Reduce duplicate data entry.  
* Make patient information easy to find.  
* Provide a chronological patient history.  
* Support efficient clinical and administrative workflows.  
* Protect sensitive patient information.  
* Maintain traceability of relevant changes.  
* Provide a foundation for consultations, medical records, appointments, financial operations, and AI-assisted workflows.

7.1 Patient Registration  
ClinicOS shall allow authorized users to register new patients.  
The patient registration process should be simple and require only the information necessary to create an initial patient record.

Functional Requirements

* FR-PATIENT-001 — Create Patient  
  * The system shall allow an authorized user to create a new patient record.  
* FR-PATIENT-002 — Required Information  
  * The system shall identify mandatory and optional patient fields.  
  * Mandatory fields should be kept to a minimum in order to reduce registration friction.  
* FR-PATIENT-003 — Duplicate Detection  
  * The system should identify potential duplicate patient records before creating a new record.  
  * Potential matches may be identified using information such as:  
    * Full name.  
    * Date of birth.  
    * National identification information, where applicable.  
    * Email address.  
    * Telephone number.  
* FR-PATIENT-004 — Validation  
  * The system shall validate information entered during registration according to the applicable field format.  
  * Examples include:  
    * Valid date formats.  
    * Valid email formats.  
    * Valid telephone formats.  
    * Required fields.  
    * Character limits.  
* FR-PATIENT-005 — Registration Confirmation  
  * After successful registration, the system shall display a confirmation that the patient record was created.

Registration Flow

1. Authorized User  
2. New Patient  
3. Enter Information  
4. Validate Information  
5. Duplicate Check

Possibility 1:

1. Match  
2. Review Existing Record

Possibility 2:

1. No Match  
2. Create Patient  
3. Patient Profile

7.2 Patient Profile  
ClinicOS shall provide a centralized patient profile containing relevant information associated with the patient.  
The profile should provide a clear overview without overwhelming the user with unnecessary information.

Patient Profile Structure  
![][image6]  
The patient profile may include:

* Personal information.  
* Contact information.  
* Emergency contacts.  
* Appointments.  
* Consultation history.  
* Medical records.  
* Documents.  
* Attachments.  
* Exams.  
* Financial information.  
* Timeline.  
* Relevant administrative information.

Functional Requirements

* FR-PATIENT-006 — View Patient Profile  
  * The system shall allow authorized users to view a patient's profile.  
* FR-PATIENT-007 — Profile Organization  
  * The system shall organize patient information into logical sections or tabs.  
* FR-PATIENT-008 — Role-Based Visibility  
  * The information displayed shall depend on the user's permissions.  
* FR-PATIENT-009 — Patient Overview  
  * The system should provide a concise overview of important patient information.  
* FR-PATIENT-010 — Related Records  
  * The system should provide navigation to records related to the patient.

Examples include:

* Appointments.  
* Consultations.  
* Medical records.  
* Financial transactions.  
* Files.  
* Timeline events.

7.3 Patient Identification  
ClinicOS shall support the identification of patients using relevant identifying information.  
Possible identification fields include:

* Full name.  
* Date of birth.  
* Patient ID.  
* National identification number, where applicable.  
* Email.  
* Telephone number.

Functional Requirements

* FR-PATIENT-011 — Unique Patient Identifier  
  * The system shall assign a unique internal identifier to each patient.  
* FR-PATIENT-012 — Patient Identification  
  * The system shall display the patient's identity consistently throughout the platform.  
* FR-PATIENT-013 — Identification Validation  
  * The system should validate identification information according to applicable business rules.  
* FR-PATIENT-014 — Duplicate Identification  
  * The system should prevent the creation of conflicting identifiers.

The internal patient ID shall remain unique within the applicable clinic environment.

7.4 Contact Information  
ClinicOS shall allow authorized users to store and manage patient contact information.  
Possible information includes:

* Telephone number.  
* Mobile number.  
* Email address.  
* Address.  
* City.  
* State.  
* Postal code.  
* Preferred contact method.

Functional Requirements

* FR-PATIENT-015 — Contact Information  
  * The system shall allow authorized users to create and update patient contact information.  
* FR-PATIENT-016 — Multiple Contacts  
  * The system may support multiple telephone numbers and contact methods.  
* FR-PATIENT-017 — Preferred Contact  
  * The system should allow a preferred contact method to be identified.  
* FR-PATIENT-018 — Contact Validation  
  * The system shall validate contact information according to applicable formats.

7.5 Emergency Contacts  
ClinicOS shall allow authorized users to register emergency contact information when applicable.  
Emergency contacts may include:

* Name.  
* Relationship to patient.  
* Telephone number.  
* Alternative telephone number.  
* Email address.  
* Relevant notes.

Functional Requirements

* FR-PATIENT-019 — Create Emergency Contact  
  * The system shall allow authorized users to add an emergency contact.  
* FR-PATIENT-020 — Update Emergency Contact  
  * The system shall allow authorized users to update emergency contact information.  
* FR-PATIENT-021 — Delete Emergency Contact  
  * The system shall allow authorized users with appropriate permissions to remove an emergency contact.  
* FR-PATIENT-022 — Multiple Emergency Contacts  
  * The system may support more than one emergency contact.

7.6 Patient Status  
ClinicOS shall maintain a patient status indicating the current administrative state of the patient.  
Possible statuses may include:

* Active.  
* Inactive.  
* Archived.  
* Deceased, where legally and operationally appropriate.

The exact status model may evolve according to business and regulatory requirements.

Functional Requirements

* FR-PATIENT-023 — Patient Status  
  * The system shall allow authorized users to view the patient's status.  
* FR-PATIENT-024 — Status Update  
  * The system shall allow authorized users to update the patient's administrative status.  
* FR-PATIENT-025 — Status Restrictions  
  * The system shall apply appropriate restrictions to inactive or archived patient records.  
* FR-PATIENT-026 — Historical Preservation  
  * Changing patient status shall not automatically destroy historical records.

7.7 Patient History  
ClinicOS shall provide a consolidated view of relevant historical information associated with a patient.  
Patient history may include:

* Previous appointments.  
* Completed consultations.  
* Medical records.  
* Exams.  
* Documents.  
* Administrative events.  
* Financial events.  
* Relevant timeline events.

Functional Requirements

* FR-PATIENT-027 — Patient History  
  * The system shall allow authorized users to view patient history.  
* FR-PATIENT-028 — Chronological Organization  
  * Historical events should be presented chronologically when appropriate.  
* FR-PATIENT-029 — Historical Navigation  
  * Users should be able to navigate from historical events to the corresponding record.  
* FR-PATIENT-030 — Access Control  
  * Patient history shall respect the user's access permissions.

7.8 Patient Search  
ClinicOS shall provide efficient patient search functionality.  
Search should prioritize speed and simplicity.  
Users may search by:

* Name.  
* Patient ID.  
* Telephone number.  
* Email.  
* Date of birth.  
* Other permitted identifiers.

Functional Requirements

* FR-PATIENT-031 — Patient Search  
  * The system shall allow authorized users to search for patients.  
* FR-PATIENT-032 — Partial Search  
  * The system should support partial text searches where appropriate.  
* FR-PATIENT-033 — Search Results  
  * Search results shall display enough information to distinguish patients with similar information.  
* FR-PATIENT-034 — Search Permissions  
  * Search results shall only include patients the user is authorized to access.  
* FR-PATIENT-035 — Search Performance  
  * Patient searches should return results quickly under normal operating conditions.

Search Flow

1. User enters query  
2. Validate Search  
3. Apply Permissions  
4. Search Patient DB

Possibility 1:

1. Results  
2. Patient Profile

Possibility 2:

1. None  
2. No Results Message

7.9 Patient Timeline  
ClinicOS shall provide a unified timeline representing relevant events associated with a patient.  
The timeline is intended to provide a chronological overview of the patient's interactions with the clinic.  
Possible events include:

* Patient registration.  
* Appointment creation.  
* Appointment completion.  
* Appointment cancellation.  
* Consultation.  
* Medical record update.  
* Document upload.  
* Exam registration.  
* Payment.  
* Financial event.  
* Administrative event.

Example  
PATIENT TIMELINE  
2026-08-25  
|  
\+-- Appointment scheduled  
|  
2026-08-28  
|  
\+-- Appointment confirmed  
|  
2026-08-30  
|  
\+-- Consultation completed  
|  
\+-- Medical record updated  
|  
\+-- Document uploaded  
|  
2026-09-02  
|  
\+-- Payment registered

Functional Requirements

* FR-PATIENT-036 — Patient Timeline  
  * The system shall provide a chronological patient timeline.  
* FR-PATIENT-037 — Timeline Events  
  * The system shall record relevant events according to configured system rules.  
* FR-PATIENT-038 — Event Details  
  * Users shall be able to view relevant details of permitted timeline events.  
* FR-PATIENT-039 — Timeline Permissions  
  * Timeline visibility shall respect role and permission rules.  
* FR-PATIENT-040 — Timeline Integrity  
  * Historical events should not be silently modified or removed.

7.10 Patient Data Management  
ClinicOS shall provide controlled mechanisms for managing patient information throughout its lifecycle.  
Patient data management shall consider:

* Accuracy.  
* Consistency.  
* Security.  
* Privacy.  
* Access control.  
* Data retention.  
* Auditability.  
* Data export.  
* Data correction.  
* Appropriate deletion or anonymization workflows.

Functional Requirements

* FR-PATIENT-041 — Update Patient  
  * Authorized users shall be able to update permitted patient information.  
* FR-PATIENT-042 — Data Validation  
  * Updated information shall be validated before being saved.  
* FR-PATIENT-043 — Change Tracking  
  * Relevant modifications shall be recorded in the audit history.  
* FR-PATIENT-044 — Controlled Deletion  
  * Patient information shall not be permanently deleted through unrestricted user actions.  
  * Deletion behavior shall follow applicable business, legal, privacy, retention, and regulatory requirements.  
* FR-PATIENT-045 — Data Export  
  * Authorized users shall be able to request or perform patient data export according to applicable permissions and policies.  
* FR-PATIENT-046 — Data Import  
  * The system may support authorized patient data imports.  
* FR-PATIENT-047 — Data Isolation  
  * Patient data shall remain logically isolated between clinics.  
* FR-PATIENT-048 — Access Control  
  * Patient information shall only be accessible to authorized users.

Patient Data Lifecycle

1. Patient Registration  
2. Active Patient  
3. Appointments OR Records OR Financial  
4. Patient History  
5. Inactive / Archived

8\. Appointment Management  
Appointment Management is a core ClinicOS module responsible for organizing the clinic's schedule and coordinating patients, healthcare professionals, services, and available time slots.  
The module shall help clinics reduce scheduling conflicts, administrative work, missed appointments, and unnecessary communication.  
The primary objectives are:

* Centralize appointments.  
* Simplify scheduling.  
* Reduce appointment conflicts.  
* Provide clear calendar visibility.  
* Manage professional availability.  
* Track appointment status.  
* Maintain appointment history.  
* Support automated reminders and notifications.  
* Integrate appointments with patients and consultations.

8.1 Appointment Creation  
ClinicOS shall allow authorized users to create appointments.  
An appointment should associate, at minimum:  
Patient.  
Healthcare professional.  
Date.  
Start time.  
Duration or end time.  
Service or appointment type.  
Location, where applicable.  
Appointment status.

Functional Requirements

* FR-APPT-001 — Create Appointment  
  * The system shall allow authorized users to create an appointment.  
* FR-APPT-002 — Required Appointment Information  
  * The system shall identify required appointment fields.  
* FR-APPT-003 — Patient Association  
  * Every appointment shall be associated with a patient.  
* FR-APPT-004 — Professional Association  
  * Appointments requiring a healthcare professional shall identify the responsible professional.  
* FR-APPT-005 — Validation  
  * The system shall validate appointment information before creation.  
* FR-APPT-006 — Conflict Detection  
  * The system shall check for scheduling conflicts before confirming an appointment.

8.2 Appointment Scheduling  
ClinicOS shall provide a scheduling interface for creating and managing appointments.  
The scheduling experience should minimize the number of steps required to schedule an appointment.

Scheduling Flow

1. Select Patient  
2. Select Professional  
3. Select Service  
4. Select Date & Time  
5. Check Availability

Possibility 1:

1. Available  
2. Confirm Appointment

Possibility 2:

1. Conflict  
2. Choose Another Slot

Functional Requirements

* FR-APPT-007 — Schedule Appointment  
  * The system shall allow authorized users to schedule appointments.  
* FR-APPT-008 — Available Slots  
  * The system should display available time slots based on configured schedules.  
* FR-APPT-009 — Calendar Integration  
  * Scheduled appointments shall appear on the appropriate calendar.  
* FR-APPT-010 — Scheduling Confirmation  
  * The system shall provide confirmation after successful scheduling.  
* FR-APPT-011 — Appointment Association  
  * The appointment shall be linked to the relevant patient and professional.

8.3 Appointment Rescheduling  
ClinicOS shall allow authorized users to reschedule appointments.  
When an appointment is rescheduled, the system shall preserve appropriate historical information.

Functional Requirements

* FR-APPT-012 — Reschedule Appointment  
  * Authorized users shall be able to change the date and/or time of an appointment.  
* FR-APPT-013 — Availability Check  
  * The system shall verify professional availability before accepting the new time.  
* FR-APPT-014 — Conflict Check  
  * The system shall perform conflict detection before rescheduling.  
* FR-APPT-015 — History  
  * The system shall maintain appropriate appointment history after rescheduling.  
* FR-APPT-016 — Notification  
  * The system may notify relevant users when an appointment is rescheduled.

8.4 Appointment Cancellation  
ClinicOS shall allow authorized users to cancel appointments.  
Cancellation should require an appropriate confirmation step to reduce accidental cancellations.

Functional Requirements

* FR-APPT-017 — Cancel Appointment  
  * Authorized users shall be able to cancel an appointment.  
* FR-APPT-018 — Cancellation Confirmation  
  * The system should request confirmation before cancellation.  
* FR-APPT-019 — Cancellation Reason  
  * The system may allow or require a cancellation reason depending on configuration.  
* FR-APPT-020 — Calendar Update  
  * Cancelled appointments shall no longer occupy active availability where applicable.  
* FR-APPT-021 — Cancellation History  
  * The system shall preserve the cancellation event in appointment history.

8.5 Appointment Confirmation  
ClinicOS shall support appointment confirmation workflows.  
Confirmation may occur through:

* Clinic staff.  
* Patient interaction, where supported.  
* Automated workflows.  
* Future external communication integrations.

Functional Requirements

* FR-APPT-022 — Appointment Confirmation  
  * The system shall allow authorized users to mark an appointment as confirmed.  
* FR-APPT-023 — Confirmation Status  
  * The appointment shall store its confirmation state.  
* FR-APPT-024 — Automated Confirmation  
  * The system may support automated confirmation workflows.  
* FR-APPT-025 — Confirmation History  
  * Relevant confirmation events should be recorded.

8.6 Appointment Status  
ClinicOS shall maintain a status for every appointment.  
Possible statuses include:

* Scheduled.  
* Confirmed.  
* In Progress.  
* Completed.  
* Cancelled.  
* No-show.  
* Rescheduled.

Appointment State Model  
![][image7]

Functional Requirements

* FR-APPT-026 — Appointment Status  
  * Every appointment shall have a status.  
* FR-APPT-027 — Status Transitions  
  * The system shall restrict appointment status changes according to defined business rules.  
* FR-APPT-028 — Status History  
  * Relevant status changes shall be recorded.  
* FR-APPT-029 — Status Visibility  
  * Authorized users shall be able to view appointment status.

8.7 Calendar Management  
ClinicOS shall provide calendar functionality for visualizing appointments.  
The calendar should support appropriate views, potentially including:

* Day.  
* Week.  
* Month.  
* Professional.  
* Location.  
* Service.

Functional Requirements

* FR-APPT-030 — Calendar View  
  * The system shall display scheduled appointments in a calendar.  
* FR-APPT-031 — Calendar Filtering  
  * Users shall be able to filter appointments according to their permissions.  
* FR-APPT-032 — Calendar Navigation  
  * Users shall be able to navigate between dates.  
* FR-APPT-033 — Appointment Details  
  * Users shall be able to access permitted appointment details from the calendar.  
* FR-APPT-034 — Visual Status  
  * The interface should provide a clear visual distinction between appointment statuses.

8.8 Professional Availability  
ClinicOS shall allow authorized users to configure and manage professional availability.  
Availability may be based on:

* Working days.  
* Working hours.  
* Breaks.  
* Services.  
* Locations.  
* Time-off periods.  
* Holidays.  
* Exceptions.


Example  
PROFESSIONAL AVAILABILITY

* Monday  
  * 08:00 ───────────── 12:00  
  * 13:00 ───────────── 18:00  
* Tuesday  
  * 08:00 ───────────── 12:00  
  * 13:00 ───────────── 18:00  
* Wednesday  
  * Unavailable  
* Thursday  
  * 08:00 ───────────── 12:00  
  * 13:00 ───────────── 18:00  
* Friday  
  * 08:00 ───────────── 16:00

Functional Requirements

* FR-APPT-035 — Configure Availability  
  * Authorized users shall be able to configure professional availability.  
* FR-APPT-036 — Recurring Schedule  
  * The system should support recurring weekly schedules.  
* FR-APPT-037 — Exceptions  
  * The system should support schedule exceptions.  
* FR-APPT-038 — Time Off  
  * Authorized users shall be able to configure periods when a professional is unavailable.  
* FR-APPT-039 — Availability Calculation  
  * The scheduling system shall consider configured availability when presenting appointment slots.

8.9 Appointment Conflicts  
ClinicOS shall detect conflicts before an appointment is created or rescheduled.  
Potential conflicts include:

* Professional already booked.  
* Clinic room unavailable.  
* Location unavailable.  
* Professional outside working hours.  
* Appointment overlapping another appointment.  
* Service-specific scheduling restrictions.

Conflict Flow

1. Appointment Request  
2. Check Patient  
3. Check Professional  
4. Check Time  
5. Check Location

Possibility 1:

1. No Conflict  
2. Allow

Possibility 2:

1. Conflict  
2. Block/Warn

Functional Requirements

* FR-APPT-040 — Conflict Detection  
  * The system shall detect scheduling conflicts.  
* FR-APPT-041 — Conflict Prevention  
  * The system shall prevent conflicting appointments when the applicable business rules require prevention.  
* FR-APPT-042 — Conflict Warning  
  * Where a conflict may be intentionally overridden, the system should provide a clear warning and require appropriate authorization.  
* FR-APPT-043 — Availability Validation  
  * The system shall validate appointments against configured professional availability.

8.10 Appointment History  
ClinicOS shall maintain a historical record of relevant appointment events.  
Appointment history may include:

* Creation.  
* Rescheduling.  
* Confirmation.  
* Cancellation.  
* Status changes.  
* Completion.  
* No-show.  
* Relevant administrative changes.

Example

* APPOINTMENT HISTORY  
* 09/01/2026 09:15  
  * Appointment created  
* 09/01/2026 09:16  
  * Appointment confirmed  
* 09/03/2026 14:20  
  * Appointment rescheduled  
* 09/05/2026 10:00  
  * Appointment started  
* 09/05/2026 10:45  
  * Appointment completed

Functional Requirements

* FR-APPT-044 — Appointment History  
  * The system shall maintain relevant appointment history.  
* FR-APPT-045 — Historical Events  
  * Relevant appointment events shall include timestamps.  
* FR-APPT-046 — Historical Integrity  
  * Historical appointment events should not be silently modified or removed.  
* FR-APPT-047 — Access Control  
  * Appointment history shall respect user permissions.  
* FR-APPT-048 — Related Records  
  * Users should be able to navigate from an appointment to related patient and consultation information when authorized.

9\. Consultation Management  
Consultation Management is a core ClinicOS module responsible for managing the clinical encounter between a patient and a healthcare professional.  
The module shall connect scheduled appointments with actual consultations, allowing authorized healthcare professionals to initiate, document, complete, and review clinical encounters.  
Consultation Management shall provide a structured workflow while preserving flexibility for different healthcare specialties.

The primary objectives are:

* Connect appointments with consultations.  
* Provide a clear consultation workflow.  
* Allow authorized professionals to document clinical information.  
* Maintain consultation history.  
* Preserve the integrity of clinical records.  
* Control access to sensitive consultation information.  
* Track consultation status and relevant events.  
* Integrate consultations with patients and medical records.  
* Support efficient clinical workflows.  
* Provide a foundation for future AI-assisted clinical and administrative features.

9.1 Consultation Creation  
ClinicOS shall allow an authorized user or healthcare professional to create a consultation associated with a patient and, when applicable, an appointment.  
A consultation should normally originate from a scheduled appointment, but the system may allow authorized users to create consultations without a prior appointment when the clinic's workflow requires it.  
A consultation should contain, at minimum:

* Patient.  
* Healthcare professional.  
* Date and time.  
* Consultation status.  
* Related appointment, when applicable.  
* Creation timestamp.  
* Responsible user.

Functional Requirements

* FR-CONSULT-001 — Create Consultation  
  * The system shall allow authorized users to create a consultation.  
* FR-CONSULT-002 — Patient Association  
  * Every consultation shall be associated with a valid patient.  
* FR-CONSULT-003 — Professional Association  
  * Every consultation shall identify the healthcare professional responsible for the consultation.  
* FR-CONSULT-004 — Appointment Association  
  * The system should allow a consultation to be associated with an existing appointment.  
* FR-CONSULT-005 — Consultation Timestamp  
  * The system shall record the consultation creation date and time.  
* FR-CONSULT-006 — Initial Status  
  * A newly created consultation shall receive an appropriate initial status.  
* FR-CONSULT-007 — Validation  
  * The system shall validate required consultation information before creation.

Consultation Creation Flow

1. Appointment / Authorized User  
2. Select Patient  
3. Select Professional  
4. Create Consultation  
5. Validate Information  
6. Consultation Created  
7. Ready to Start

Business Rules

* A consultation cannot exist without a valid patient.  
* A consultation cannot be assigned to an unauthorized professional.  
* The system shall prevent accidental creation of duplicate consultations for the same appointment when configured business rules prohibit duplicates.  
* Consultation creation shall respect clinic and user permissions.

9.2 Consultation Start  
ClinicOS shall provide a mechanism for an authorized healthcare professional to start a consultation.  
Starting a consultation represents the transition from a pending or scheduled clinical encounter to an active encounter.  
When a consultation starts, the system should record the start timestamp.

Functional Requirements

* FR-CONSULT-008 — Start Consultation  
  * The system shall allow an authorized healthcare professional to start an eligible consultation.  
* FR-CONSULT-009 — Start Timestamp  
  * The system shall record the date and time when the consultation is started.  
* FR-CONSULT-010 — Status Update  
  * Starting a consultation shall update its status to In Progress.  
* FR-CONSULT-011 — Appointment Synchronization  
  * When applicable, starting a consultation should update the related appointment status.  
* FR-CONSULT-012 — Professional Authorization  
  * Only an authorized professional or user with appropriate permissions shall be able to start the consultation.  
* FR-CONSULT-013 — Start Validation  
  * The system shall validate that the consultation is in a state that allows it to be started.

Consultation Start Flow

1. Consultation Ready  
2. Verify Authorization  
3. Start Consultation  
4. Record Start Time  
5. Status: In Progres

Exception Scenarios  
The system should prevent the consultation from being started when:

* The user does not have permission.  
* The consultation has already been completed.  
* The consultation has been cancelled.  
* The consultation does not belong to the current clinic.  
* The associated patient cannot be accessed.  
* The consultation is otherwise in an invalid state.

9.3 Consultation Completion  
ClinicOS shall allow an authorized healthcare professional to complete a consultation after the clinical encounter has been concluded.  
Completion shall indicate that the active consultation has ended and that the relevant information has been recorded.

Functional Requirements

* FR-CONSULT-014 — Complete Consultation  
  * The system shall allow an authorized healthcare professional to complete an active consultation.  
* FR-CONSULT-015 — Completion Timestamp  
  * The system shall record the date and time when the consultation is completed.  
* FR-CONSULT-016 — Status Update  
  * Completing a consultation shall change its status to Completed.  
* FR-CONSULT-017 — Completion Validation  
  * The system should validate required information before allowing completion.  
* FR-CONSULT-018 — Appointment Synchronization  
  * When applicable, completion of the consultation should update the related appointment to Completed.  
* FR-CONSULT-019 — Record Preservation  
  * Completing a consultation shall preserve the information associated with the encounter.  
* FR-CONSULT-020 — Audit Event  
  * The completion event shall be recorded in the relevant activity or audit history.

Completion Flow

1. Consultation \- In Progress  
2. Complete Required \- Information  
3. Validate Information

Option 1:

1. Valid  
2. Complete

Status: Completed

Option 2:

1. Invalid  
2. Show Errors

Business Rules

* Only authorized users may complete a consultation.  
* A completed consultation should not return to In Progress through unrestricted user actions.  
* Corrections to completed consultation information shall follow controlled editing rules.  
* Completion shall not automatically delete or overwrite historical information.

9.4 Consultation Notes  
ClinicOS shall provide authorized healthcare professionals with a structured area for recording consultation notes.  
Consultation notes may vary according to specialty and clinic configuration.  
Possible information may include:

* Chief complaint.  
* Clinical observations.  
* History.  
* Assessment.  
* Diagnosis information, where applicable.  
* Treatment information.  
* Recommendations.  
* Follow-up information.  
* Free-text notes.  
* Structured clinical fields.

The system shall not assume that every healthcare specialty uses the same clinical documentation structure.

Functional Requirements

* FR-CONSULT-021 — Create Consultation Notes  
  * Authorized healthcare professionals shall be able to create consultation notes.  
* FR-CONSULT-022 — Edit Consultation Notes  
  * Authorized users shall be able to edit consultation notes while the consultation is in an editable state.  
* FR-CONSULT-023 — Structured Information  
  * The system should support structured consultation fields where appropriate.  
* FR-CONSULT-024 — Free-Text Notes  
  * The system should support free-text clinical notes.  
* FR-CONSULT-025 — Required Fields  
  * The system may define required clinical fields according to clinic or specialty configuration.  
* FR-CONSULT-026 — Note Validation  
  * The system shall validate applicable fields before saving.  
* FR-CONSULT-027 — Auto-Save  
  * The system may periodically save consultation notes to reduce accidental data loss.  
* FR-CONSULT-028 — Draft State  
  * The system should support an unsaved or draft state before consultation completion when appropriate.  
* FR-CONSULT-029 — Modification Tracking  
  * Relevant changes to consultation notes shall be recorded according to audit policies.

Consultation Notes Model  
![][image8]  
Business Rules

* Consultation notes shall only be accessible to users with appropriate permissions.  
* Clinical information shall not be exposed to unauthorized administrative users.  
* The system shall preserve the integrity of saved clinical information.  
* Editing rules may differ before and after consultation completion.  
* AI-generated clinical content, if introduced, shall remain subject to appropriate human review and authorization.

9.5 Consultation History  
ClinicOS shall provide authorized users with access to the patient's previous consultations.  
Consultation history shall help professionals understand previous encounters without requiring users to navigate through multiple unrelated screens.  
The history may include:

* Consultation date.  
* Healthcare professional.  
* Specialty.  
* Consultation status.  
* Related appointment.  
* Relevant clinical information.  
* Related medical records.  
* Documents and attachments, where authorized.

Functional Requirements

* FR-CONSULT-030 — Consultation History  
  * The system shall allow authorized users to view consultation history.  
* FR-CONSULT-031 — Chronological Ordering  
  * Consultations should be displayed chronologically, with the most recent consultations easily accessible.  
* FR-CONSULT-032 — Historical Navigation  
  * Users should be able to open a permitted previous consultation.  
* FR-CONSULT-033 — Consultation Summary  
  * The system should provide a concise summary of previous consultations.  
* FR-CONSULT-034 — Permission Filtering  
  * Consultation history shall only display information the current user is authorized to access.  
* FR-CONSULT-035 — Related Information  
  * Authorized users should be able to navigate from a consultation to related appointments, medical records, documents, and patient information.

Example  
CONSULTATION HISTORY

2026-09-05  
\+-- Dr. Example  
\+-- General Consultation  
\+-- Completed  
|  
\+-- Clinical Notes  
\+-- Medical Record  
\+-- Related Appointment

2026-08-12  
\+-- Dr. Example  
\+-- Follow-up  
\+-- Completed  
|  
\+-- Clinical Notes  
\+-- Medical Record

2026-07-20  
\+-- Dr. Another  
\+-- Initial Consultation  
\+-- Completed

9.6 Consultation Status  
ClinicOS shall maintain a status representing the current state of each consultation.  
Recommended statuses include:

* Draft.  
* Scheduled.  
* In Progress.  
* Completed.  
* Cancelled.

Additional statuses may be introduced if required by specific clinic workflows.

Consultation State Model  
![][image9]  
Scheduled \-----------------\> Cancelled  
Draft \----------------------\> Cancelled

Functional Requirements

* FR-CONSULT-036 — Consultation Status  
  * Every consultation shall have a status.  
* FR-CONSULT-037 — Valid Status Transitions  
  * The system shall restrict status transitions according to defined business rules.  
* FR-CONSULT-038 — Status History  
  * Relevant status changes shall be recorded.  
* FR-CONSULT-039 — Status Visibility  
  * Authorized users shall be able to view the current consultation status.  
* FR-CONSULT-040 — Invalid Transition Prevention  
  * The system shall prevent unauthorized or invalid status transitions.

Business Rules  
A consultation that has already been completed should not be cancelled through a standard cancellation action.  
Corrections to completed consultations should use controlled workflows rather than unrestricted status manipulation.

9.7 Professional Access  
ClinicOS shall enforce role-based and permission-based access to consultation information.  
Because consultations may contain highly sensitive clinical information, access shall follow the principle of least privilege.  
Access may depend on:

* User role.  
* Healthcare professional relationship.  
* Clinic.  
* Specialty.  
* Patient relationship.  
* Specific permissions.  
* Organizational policies.

Functional Requirements

* FR-CONSULT-041 — Professional Access  
  * Authorized healthcare professionals shall be able to access consultations they are permitted to manage.  
* FR-CONSULT-042 — Role-Based Access  
  * The system shall apply role-based access control to consultation information.  
* FR-CONSULT-043 — Permission-Based Access  
  * Specific consultation actions shall require appropriate permissions.  
* FR-CONSULT-044 — Unauthorized Access Prevention  
  * The system shall prevent unauthorized users from viewing or modifying protected consultation information.  
* FR-CONSULT-045 — Cross-Clinic Isolation  
  * Users shall not access consultations belonging to another clinic unless explicitly authorized by the system's multi-clinic access model.  
* FR-CONSULT-046 — Access Logging  
  * Relevant access and modification events should be recorded.  
* FR-CONSULT-047 — Read-Only Access  
  * The system should support read-only access where a user is permitted to view information but not modify it.

Access Model

1. USER  
2. Authenticate  
3. Verify role  
4. Verify permissions

Option 1:

1. Authorized  
2. Access data

Option 2:

1. Denied  
2. Access blocked

Security Principles  
Consultation access shall follow:

* Least privilege.  
* Role-based access.  
* Permission-based actions.  
* Clinic isolation.  
* Auditability.  
* Secure authentication.  
* Controlled modification.  
* Privacy-by-design principles.

The exact access rules shall be configurable according to clinic policies and applicable privacy and data protection requirements.

9.8 Consultation Records  
ClinicOS shall maintain a persistent record of each consultation and its associated information.  
Consultation records may contain:  
Consultation metadata.  
Patient association.  
Professional association.  
Appointment association.  
Consultation status.  
Start timestamp.  
Completion timestamp.  
Consultation notes.  
Related medical records.  
Attachments.  
Documents.  
Relevant audit events.  
The consultation record shall serve as the historical representation of the clinical encounter.

Functional Requirements

* FR-CONSULT-048 — Consultation Record  
  * The system shall maintain a persistent record for each consultation.  
* FR-CONSULT-049 — Record Integrity  
  * The system shall preserve the integrity and consistency of consultation records.  
* FR-CONSULT-050 — Related Records  
  * The system should allow consultation records to reference related medical records and documents.  
* FR-CONSULT-051 — Record History  
  * Relevant changes to consultation records shall be traceable.  
* FR-CONSULT-052 — Controlled Modification  
  * Modifications to consultation records shall require appropriate authorization.  
* FR-CONSULT-053 — Record Access  
  * Users shall only access consultation records permitted by their roles and permissions.  
* FR-CONSULT-054 — Historical Preservation  
  * Completion or status changes shall not automatically destroy historical consultation information.  
* FR-CONSULT-055 — Data Retention  
  * Consultation records shall be retained according to configured retention policies and applicable legal or regulatory requirements.  
* FR-CONSULT-056 — Export  
  * Authorized users may request consultation data export according to applicable permissions and policies.  
* FR-CONSULT-057 — Auditability  
  * Relevant consultation creation, modification, access, and completion events shall be traceable through the audit system.

Consultation Record Structure  
CONSULTATION RECORD

* Consultation ID  
  * Patient  
  * Professional  
  * Appointment  
  * Date / Time  
  * Status  
* Clinical Notes  
  * Assessment  
  * Treatment  
  * Recommendations  
  * Additional Notes  
* Related Records  
  * Medical Records  
  * Documents  
  * Exams  
  * Attachments  
* Activity / Audit History  
  * Created  
  * Started  
  * Modified  
  * Completed

9.9 Consultation Workflow  
Although not exposed as a separate user-facing feature, the consultation lifecycle should follow a predictable workflow.  
![][image10]  
The workflow should minimize unnecessary administrative steps while maintaining sufficient controls for clinical data integrity and traceability.

9.10 Consultation and Patient Integration  
Consultations shall be directly integrated with Patient Management.  
A patient's profile should provide authorized users with access to relevant consultation information.  
![]()

Cross-Module Requirements

* FR-CONSULT-058 — Patient Integration  
  * Consultations shall be accessible from the corresponding patient profile when authorized.  
* FR-CONSULT-059 — Appointment Integration  
  * Consultations should be linked to their originating appointment when applicable.  
* FR-CONSULT-060 — Medical Record Integration  
  * Relevant consultation information should be associated with the patient's medical record.  
* FR-CONSULT-061 — Timeline Integration  
  * Relevant consultation events should appear in the patient's timeline.  
* FR-CONSULT-062 — Consistency  
  * Changes affecting related entities shall preserve data consistency.  
* FR-CONSULT-063 — Permission Propagation  
  * Cross-module access shall respect the permissions applicable to the underlying information.

9.11 Consultation Auditability  
Because consultations may contain sensitive clinical information, ClinicOS shall maintain appropriate traceability of relevant actions.  
Auditable events may include:

* Consultation creation.  
* Consultation start.  
* Consultation completion.  
* Consultation cancellation.  
* Consultation note creation.  
* Consultation note modification.  
* Consultation record access.  
* Attachment upload.  
* Attachment removal.  
* Status changes.  
* Relevant permission changes.

Functional Requirements

* FR-CONSULT-064 — Audit Events  
  * Relevant consultation events shall generate audit records.  
* FR-CONSULT-065 — User Attribution  
  * Audit records should identify the user responsible for the action.  
* FR-CONSULT-066 — Timestamp  
  * Audit records shall include the date and time of relevant events.  
* FR-CONSULT-067 — Historical Integrity  
  * Audit records shall not be silently modified or removed through normal user workflows.  
* FR-CONSULT-068 — Audit Access  
  * Audit information shall only be accessible to users with appropriate permissions.

9.12 Consultation Error and Exception Handling  
ClinicOS shall provide clear feedback when a consultation operation cannot be completed.  
Potential scenarios include:

* Unauthorized access.  
* Missing patient.  
* Missing professional.  
* Invalid consultation status.  
* Missing required information.  
* Duplicate consultation.  
* Record modification conflict.  
* Session expiration.  
* Temporary system failure.  
* Attempt to access information from another clinic.

Functional Requirements

* FR-CONSULT-069 — Error Messages  
  * The system shall provide clear and understandable error messages.  
* FR-CONSULT-070 — Data Preservation  
  * An error shall not unnecessarily result in loss of previously saved consultation information.  
* FR-CONSULT-071 — Invalid Operation Prevention  
  * The system shall prevent invalid consultation operations.  
* FR-CONSULT-072 — Recovery  
  * Where technically possible, the system should allow users to recover from temporary failures without losing saved information.

9.13 MVP Recommendation  
For the initial ClinicOS MVP, consultation functionality should focus on the essential clinical workflow.

\[Must Have\]  
Consultation Creation  
        |  
        \+-- Patient Association  
        |  
        \+-- Professional Association  
        |  
        \+-- Appointment Association  
        |  
        \+-- Consultation Start  
        |  
        \+-- Consultation Notes  
        |  
        \+-- Consultation Completion  
        |  
        \+-- Consultation Status  
        |  
        \+-- Consultation History  
        |  
        \+-- Role-Based Access  
        |  
        \+-- Basic Auditability

The MVP should avoid excessive customization of clinical forms during the initial release.  
Advanced capabilities may be introduced progressively, including:

* Specialty-specific templates.  
* Advanced clinical forms.  
* AI-assisted documentation.  
* Intelligent consultation summaries.  
* Automated clinical workflows.  
* Voice-to-text documentation.  
* Advanced analytics.  
* External medical systems integration.  
* Digital signatures.  
* Telemedicine workflows.

These capabilities should only be introduced after the core consultation workflow has been validated with real clinic users.

9.14 Functional Acceptance Criteria  
The Consultation Management module should be considered functionally acceptable when:  
Authorized users can create consultations.

* Consultations can be associated with patients.  
* Consultations can be associated with appointments.  
* Authorized professionals can start consultations.  
* Consultation start times are recorded.  
* Professionals can record consultation notes.  
* Consultation notes can be saved without unnecessary data loss.  
* Authorized professionals can complete consultations.  
* Consultation completion is timestamped.  
* Consultation status is correctly maintained.  
* Invalid status transitions are prevented.  
* Authorized users can access consultation history.  
* Unauthorized users cannot access protected consultation information.  
* Consultation records remain associated with the correct patient.  
* Relevant consultation events appear in the patient's history or timeline.  
* Relevant actions are auditable.  
* Consultation data remains logically isolated between clinics.  
* Historical consultation information is preserved according to configured retention policies and applicable requirements.

9.15 Functional Design Principles

* Simplicity  
  * The consultation workflow should minimize administrative actions and allow professionals to focus on the patient.  
* Clinical Usability  
  * The interface should support different healthcare specialties without forcing every professional into an identical documentation workflow.  
* Security  
  * Sensitive consultation information shall only be accessible to authorized users.  
* Privacy  
  * Consultation data shall be handled according to privacy-by-design principles and applicable legal and regulatory requirements.  
* Data Integrity  
  * Clinical information shall be stored consistently and protected against accidental loss or unauthorized modification.  
* Traceability  
  * Important consultation actions should be attributable to a responsible user and timestamped.  
* Human Control  
  * AI-assisted features may support documentation, summarization, or information retrieval in the future, but healthcare professionals shall remain responsible for reviewing and validating clinical information before it becomes part of the official record.  
* Performance  
  * Opening a consultation, saving notes, accessing consultation history, and completing a consultation should remain responsive during normal operating conditions.  
* Consistency  
  * Consultation information should remain synchronized with related patients, appointments, medical records, documents, and timeline events.

10\. Medical Records  
The Medical Records module is responsible for storing, organizing, maintaining, and retrieving the patient's clinical information throughout their relationship with the clinic.  
It provides a structured and secure environment for healthcare professionals to access relevant clinical information, while maintaining appropriate access restrictions, data integrity, traceability, and historical preservation.  
The module connects consultations, patients, documents, attachments, examinations, clinical information, and historical events into a centralized medical record.  
The main objectives are:

* Centralize patient clinical information.  
* Reduce dependence on paper-based records.  
* Improve access to relevant clinical information.  
* Maintain chronological medical history.  
* Preserve clinical information integrity.  
* Support healthcare professionals during consultations.  
* Provide controlled access to sensitive information.  
* Maintain modification and access history.  
* Support future AI-assisted clinical workflows.  
* Integrate clinical information with the patient timeline.

10.1 Medical Record Creation  
A medical record represents the structured collection of clinical information associated with a patient.  
A medical record may be created automatically when a patient is registered or when the first clinical interaction occurs, depending on the clinic configuration.  
The system shall associate the medical record with the correct patient and clinic.

Functional Requirements

* FR-MEDICAL-001 — Create Medical Record  
  * The system shall allow an authorized user or system process to create a medical record for a patient.  
* FR-MEDICAL-002 — Patient Association  
  * Every medical record shall be associated with exactly one patient.  
* FR-MEDICAL-003 — Clinic Association  
  * Every medical record shall belong to the clinic in which the patient record is managed.  
* FR-MEDICAL-004 — Unique Medical Record  
  * The system shall prevent the creation of unintended duplicate medical records for the same patient within the same clinic.  
* FR-MEDICAL-005 — Record Metadata  
  * The system shall store metadata such as:  
    * Medical Record ID  
    * Patient ID  
    * Clinic ID  
    * Creation date  
    * Created by  
    * Last update date  
    * Last updated by  
    * Record status  
* FR-MEDICAL-006 — Initial Record Status  
  * A newly created medical record shall receive an initial status according to system configuration.  
  * Possible statuses may include:  
    * Active  
    * Inactive  
    * Archived

Medical Record Creation Flow  
Patient  
   |  
   v  
Patient Registered  
   |  
   v  
Check Existing Medical Record  
   |  
   \+---- Exists \----\> Open Existing Record  
   |  
   \+---- Does Not Exist  
              |  
              v  
      Create Medical Record  
              |  
              v  
       Associate Patient  
              |  
              v  
        Record Metadata  
              |  
              v  
       Medical Record Ready

Business Rules

* A medical record cannot exist without a valid patient.  
* The record must belong to a valid clinic.  
* Unauthorized users cannot create or modify medical records.  
* Duplicate records should be prevented whenever the system can reliably identify an existing record.  
* Medical records should not be permanently deleted through ordinary user actions.

10.2 Medical History  
The Medical History section provides a consolidated view of relevant historical clinical information.  
It may include information originating from consultations, examinations, diagnoses, procedures, documents, and other clinical events.

Functional Requirements

* FR-MEDICAL-007 — Medical History  
  * The system shall allow authorized healthcare professionals to view the patient's medical history.  
* FR-MEDICAL-008 — Chronological History  
  * Medical history shall be presented in chronological order.  
* FR-MEDICAL-009 — Historical Events  
  * The system shall support historical events such as:  
    * Previous consultations  
    * Diagnoses  
    * Treatments  
    * Examinations  
    * Procedures  
    * Clinical notes  
    * Attachments  
    * Documents  
    * Relevant clinical observations  
* FR-MEDICAL-010 — Event Details  
  * Authorized users shall be able to open an individual historical event and view its available details.  
* FR-MEDICAL-011 — History Filtering  
  * The system should allow filtering by:  
    * Date  
    * Professional  
    * Specialty  
    * Consultation  
    * Event type  
* FR-MEDICAL-012 — Historical Integrity  
  * Historical information shall remain traceable to its original source whenever possible.

Medical History Example  
PATIENT MEDICAL HISTORY  
────────────────────────────────────  
2026-08-20  
Consultation  
Dr. Silva  
General Medicine  
        |  
        \+-- Clinical Notes  
        \+-- Diagnosis  
        \+-- Treatment  
        \+-- Attachments

2026-07-10  
Examination  
Blood Test  
        |  
        \+-- Result Document

2026-06-02  
Consultation  
Dr. Santos  
Cardiology  
        |  
        \+-- Clinical Notes  
        \+-- Recommendations

10.3 Clinical Information  
The Clinical Information section contains structured and unstructured information related to the patient's clinical condition and care.  
The exact fields may vary according to specialty and clinic configuration.

Functional Requirements

* FR-MEDICAL-013 — Clinical Information  
  * The system shall allow authorized healthcare professionals to record clinical information.  
* FR-MEDICAL-014 — Structured Information  
  * The system should support structured clinical fields where appropriate.  
  * Examples include:  
    * Allergies  
    * Medications  
    * Previous conditions  
    * Relevant medical history  
    * Family history  
    * Clinical observations  
    * Diagnoses  
    * Treatments  
    * Recommendations  
* FR-MEDICAL-015 — Free-Text Information  
  * The system shall support free-text clinical notes where appropriate.  
* FR-MEDICAL-016 — Specialty Flexibility  
  * The system should allow clinical information structures to support different healthcare specialties.  
* FR-MEDICAL-017 — Information Validation  
  * The system shall validate required fields, formats, and applicable data constraints.  
* FR-MEDICAL-018 — Clinical Information Updates  
  * Authorized professionals shall be able to update clinical information according to applicable record modification rules.  
* FR-MEDICAL-019 — Source Identification  
  * Where applicable, the system shall identify the professional and consultation associated with clinical information.

Clinical Information Structure  
MEDICAL RECORD  
│  
├── Patient Information  
│  
├── Medical History  
│  
├── Allergies  
│  
├── Medications  
│  
├── Previous Conditions  
│  
├── Family History  
│  
├── Clinical Information  
│  
├── Diagnoses  
│  
├── Treatments  
│  
├── Examinations  
│  
├── Documents  
│  
└── Attachments  
Clinical information should prioritize clarity, consistency, and usability rather than forcing every specialty into an unnecessarily rigid structure.

10.4 Attachments  
Attachments allow authorized users to associate files and other supporting materials with a medical record.

Functional Requirements

* FR-MEDICAL-020 — Upload Attachment  
  * Authorized users shall be able to upload an attachment to a medical record.  
* FR-MEDICAL-021 — Attachment Association  
  * Every attachment shall be associated with a patient and medical record.  
* FR-MEDICAL-022 — Attachment Metadata  
  * The system shall store:  
    * File name  
    * File type  
    * File size  
    * Upload date  
    * Uploaded by  
    * Related patient  
    * Related medical record  
    * Optional description  
* FR-MEDICAL-023 — Attachment Validation  
  * The system shall validate supported file types and applicable file-size restrictions.  
* FR-MEDICAL-024 — Attachment Access  
  * Only authorized users shall be able to access medical record attachments.  
* FR-MEDICAL-025 — Attachment Removal  
  * Attachment removal shall follow controlled permissions and audit rules.  
* FR-MEDICAL-026 — Attachment History  
  * The system should maintain traceability of attachment creation, modification, and removal events.

Attachment Flow  
![][image11]  
10.5 Documents  
Documents represent clinically or administratively relevant files associated with the patient's medical record.  
Examples may include:  
Examination reports  
Referrals  
Prescriptions  
Clinical documents  
External medical reports  
Treatment documents  
Other supporting documentation

Functional Requirements

* FR-MEDICAL-027 — Document Registration  
  * The system shall allow authorized users to register or upload documents associated with a medical record.  
* FR-MEDICAL-028 — Document Classification  
  * Documents should support classification by type.  
* FR-MEDICAL-029 — Document Metadata  
  * The system shall maintain relevant metadata for each document.  
* FR-MEDICAL-030 — Document Preview  
  * Where technically supported, the system should provide document preview.  
* FR-MEDICAL-031 — Document Download  
  * Authorized users shall be able to download permitted documents.  
* FR-MEDICAL-032 — Document Association  
  * Documents shall be associated with the relevant patient, medical record, and optionally consultation or examination.  
* FR-MEDICAL-033 — Document Access Control  
  * Access to documents shall follow the permissions of the associated medical record.

Document Structure  
Patient  
  |  
  \+-- Medical Record  
        |  
        \+-- Consultation  
        |     ├── Clinical Notes  
        |     └── Documents  
        |  
        \+-- Examination  
        |     └── Result Document  
        |  
        \+-- Other Documents

10.6 Medical Record Timeline  
The Medical Record Timeline provides a chronological representation of relevant clinical events.  
It complements the broader Patient Timeline while focusing specifically on clinical information.

Functional Requirements

* FR-MEDICAL-034 — Medical Timeline  
  * The system shall provide a chronological medical record timeline.  
* FR-MEDICAL-035 — Timeline Events  
  * The timeline may include:  
    * Consultations  
    * Clinical notes  
    * Diagnoses  
    * Examinations  
    * Treatments  
    * Documents  
    * Attachments  
    * Procedures  
    * Relevant clinical updates  
* FR-MEDICAL-036 — Timeline Navigation  
  * Authorized users shall be able to select a timeline event and access its available details.  
* FR-MEDICAL-037 — Timeline Filtering  
  * The system should support filtering by event type and date range.  
* FR-MEDICAL-038 — Timeline Source  
  * Each timeline event should maintain a reference to its originating record whenever possible.

Timeline Example  
MEDICAL TIMELINE  
──────────────────────────────────

2026-09-01  
│  
├── Consultation  
│   └── Dr. Silva  
│  
├── Clinical Notes  
│  
└── Treatment Updated  
        │  
2026-08-15  
│  
├── Examination  
│   └── Blood Test  
│  
└── Result Document  
        │  
2026-07-20  
│  
└── Consultation  
    └── Dr. Santos

10.7 Medical Record Search  
The system shall provide mechanisms for authorized users to locate relevant medical information efficiently.

Functional Requirements

* FR-MEDICAL-039 — Medical Record Search  
  * Authorized users shall be able to search medical records according to their permissions.  
* FR-MEDICAL-040 — Search by Patient  
  * Users shall be able to locate a medical record through patient identification.  
* FR-MEDICAL-041 — Search by Date  
  * The system shall support date-based searches.  
* FR-MEDICAL-042 — Search by Professional  
  * Authorized users should be able to filter records by healthcare professional.  
* FR-MEDICAL-043 — Search by Record Type  
  * The system should support filtering by:  
    * Consultation  
    * Examination  
    * Document  
    * Diagnosis  
    * Treatment  
    * Clinical note  
* FR-MEDICAL-044 — Search Results  
  * Search results shall display only information the current user is authorized to access.  
* FR-MEDICAL-045 — Search Performance  
  * Search operations should return results within an acceptable response time under normal operating conditions.

Search Flow  
![][image12]  
10.8 Record Access Control  
Medical records contain highly sensitive information. Access shall therefore be controlled according to user identity, role, permissions, clinic, and applicable organizational policies.

Functional Requirements

* FR-MEDICAL-046 — Record Access Authorization  
  * The system shall verify whether a user is authorized to access a medical record.  
* FR-MEDICAL-047 — Role-Based Access  
  * Access shall support role-based permissions.  
* FR-MEDICAL-048 — Permission-Based Access  
  * Specific medical record actions shall be controlled independently where appropriate.  
  * Possible permissions include:  
    * View record  
    * Create record  
    * Edit record  
    * Upload document  
    * Download document  
    * Delete attachment  
    * Export information  
    * View history  
* FR-MEDICAL-049 — Clinic Isolation  
  * Users shall not access medical records belonging to clinics they are not authorized to access.  
* FR-MEDICAL-050 — Professional Access  
  * Healthcare professionals shall only access records permitted by their role, clinic relationship, and applicable access policies.  
* FR-MEDICAL-051 — Access Logging  
  * Access to sensitive medical information should be auditable.  
* FR-MEDICAL-052 — Unauthorized Access  
  * Unauthorized access attempts shall be denied and may generate a security event.

Access Model

1. USER  
2. Authentication  
3. User Role  
4. Permissions  
5. Clinic Context  
6. Record Authorization

Option 1:

1. Allowed  
2. Open Record

Option 2:

1. Denied  
2. Access Error

Security Principles  
The module should follow:

* Least privilege  
* Role-based access control  
* Permission-based authorization  
* Clinic isolation  
* Authentication  
* Auditability  
* Controlled modification  
* Privacy by design  
* Secure file handling

Access rules should be configurable according to clinic policies and applicable privacy and data-protection requirements.

10.9 Record Modification History  
The system shall maintain a traceable history of relevant modifications to medical records.  
The purpose is to provide visibility into what changed, when it changed, and who performed the action.

Functional Requirements

* FR-MEDICAL-053 — Modification History  
  * The system shall maintain a history of relevant medical record modifications.  
* FR-MEDICAL-054 — Modification Timestamp  
  * Each relevant modification shall include a timestamp.  
* FR-MEDICAL-055 — User Identification  
  * The system shall identify the user responsible for a modification.  
* FR-MEDICAL-056 — Modification Type  
  * The system shall identify the type of action performed.  
  * Examples:  
    * Created  
    * Updated  
    * Attachment added  
    * Document added  
    * Attachment removed  
    * Status changed  
    * Record exported  
    * Access denied  
* FR-MEDICAL-057 — Previous and New Values  
  * Where appropriate and technically feasible, the system should maintain information about previous and new values for modified fields.  
* FR-MEDICAL-058 — Audit Protection  
  * Audit history shall not be freely editable by ordinary users.  
* FR-MEDICAL-059 — Historical Traceability  
  * The system shall allow authorized users to review relevant modification history.


Modification History Example  
MEDICAL RECORD HISTORY  
──────────────────────────────────────

09/06/2026 14:32  
Updated Clinical Information  
User: Dr. Silva

09/06/2026 14:20  
Document Added  
User: Receptionist

08/20/2026 16:45  
Consultation Completed  
User: Dr. Silva

08/20/2026 16:10  
Consultation Started  
User: Dr. Silva

08/01/2026 09:15  
Medical Record Created  
User: System

10.10 Medical Record and Consultation Integration  
Medical Records shall be strongly integrated with the Consultation Management module.

Patient  
   |  
   v  
Appointment  
   |  
   v  
Consultation  
   |  
   \+---- Clinical Notes  
   |  
   \+---- Diagnoses  
   |  
   \+---- Treatment  
   |  
   \+---- Documents  
   |  
   \+---- Attachments  
   |  
   v  
Medical Record  
   |  
   v  
Medical History  
   |  
   v  
Patient Timeline

Functional Requirements

* FR-MEDICAL-060 — Consultation Association  
  * The system shall associate relevant consultation information with the patient's medical record.  
* FR-MEDICAL-061 — Consultation History  
  * Completed consultations shall be accessible from the appropriate medical record history.  
* FR-MEDICAL-062 — Clinical Source  
  * Clinical information should maintain its relationship with the consultation from which it originated.  
* FR-MEDICAL-063 — Patient Timeline Integration  
  * Relevant medical record events shall be available through the patient's timeline.  
* FR-MEDICAL-064 — Record Consistency  
  * The system should prevent inconsistent relationships between patients, consultations, and medical records.

10.11 Medical Record Lifecycle

1. CREATE  
2. ACTIVE

Option 1:

1. UPDATE  
2. HISTORY  
3. ARCHIVE  
4. RETENTION  
5. CONTROLLED DISPOSITION

Option 2:

1. ACCESS  
2. AUDIT LOG

The exact retention and disposition rules should be configurable according to clinic policies and applicable legal and regulatory requirements.

10.12 Error and Exception Handling  
The system shall appropriately handle situations such as:

* Unauthorized access  
* Patient not found  
* Medical record not found  
* Duplicate medical record  
* Invalid document  
* Unsupported attachment  
* File upload failure  
* Insufficient permissions  
* Cross-clinic access attempt  
* Session expiration  
* Record modification conflict  
* Database or storage failure

Errors should provide clear feedback without exposing sensitive information unnecessarily.

10.13 MVP Recommendation  
The MVP should prioritize:

* Medical record creation  
* Patient association  
* Basic medical history  
* Clinical information  
* Consultation integration  
* Document upload  
* Attachment management  
* Medical timeline  
* Medical record search  
* Role-based access control  
* Clinic isolation  
* Basic modification history  
* Auditability

Future Features  
Advanced functionality may include:

* Specialty-specific medical record templates  
* Advanced clinical forms  
* Examination integrations  
* Digital signatures  
* Advanced document management  
* AI-assisted clinical documentation  
* Clinical summaries  
* Voice-to-text  
* Intelligent clinical search  
* Advanced analytics  
* Telemedicine integration  
* External healthcare-system integrations

10.14 Functional Acceptance Criteria  
The Medical Records module shall be considered functionally acceptable when:

* Authorized users can create medical records.  
* Every record is associated with the correct patient.  
* Duplicate records are appropriately prevented.  
* Authorized professionals can view medical history.  
* Clinical information can be stored and retrieved.  
* Documents and attachments can be associated with records.  
* Medical events appear chronologically.  
* Authorized users can search medical information.  
* Unauthorized users are prevented from accessing restricted records.  
* Clinic boundaries are respected.  
* Relevant modifications are traceable.  
* Audit information identifies the responsible user and timestamp.  
* Consultation information is correctly associated with the medical record.  
* Record integrity is preserved throughout the lifecycle.

10.15 Functional Design Principles  
The Medical Records module should follow these principles:

* Security — Sensitive clinical information must be protected.  
* Privacy — Access should follow applicable privacy and data-protection requirements.  
* Integrity — Clinical information should remain accurate and traceable.  
* Usability — Professionals should find relevant information quickly.  
* Consistency — Information should follow predictable structures.  
* Traceability — Important actions should be auditable.  
* Least Privilege — Users should only access what they need.  
* Human Control — Clinical decisions remain under professional responsibility.  
* Performance — Common clinical workflows should be fast.  
* Scalability — The structure should support future specialties and features.

11\. Financial Management  
The Financial Management module is responsible for organizing the clinic's financial operations, including revenues, expenses, payments, pending amounts, transactions, reports, and financial history.  
The module provides clinic owners, administrators, managers, and authorized financial staff with a centralized view of the clinic's financial activity.  
Its main objectives are:

* Centralize financial information.  
* Track clinic revenue.  
* Track clinic expenses.  
* Register and monitor payments.  
* Identify pending payments.  
* Maintain transaction history.  
* Provide financial indicators.  
* Support financial decision-making.  
* Reduce manual administrative work.  
* Connect financial events with patients and appointments.  
* Provide reliable historical information.  
* Support future financial automation.

The Financial Management module should be designed primarily for clarity and operational usefulness, rather than attempting to replace specialized accounting systems.

11.1 Financial Dashboard  
The Financial Dashboard provides an overview of the clinic's financial performance.  
The dashboard should allow authorized users to quickly understand the current financial situation.

Functional Requirements

* FR-FIN-001 — Financial Dashboard  
  * The system shall provide a financial dashboard for authorized users.  
* FR-FIN-002 — Revenue Summary  
  * The dashboard shall display relevant revenue information for the selected period.  
* FR-FIN-003 — Expense Summary  
  * The dashboard shall display relevant expense information.  
* FR-FIN-004 — Net Result  
  * The system should calculate an operational financial result based on registered revenues and expenses.  
  * Net Result \= Total Revenue \- Total Expenses  
* FR-FIN-005 — Pending Payments  
  * The dashboard shall display relevant pending payment information.  
* FR-FIN-006 — Period Selection  
  * Users shall be able to select a financial period.  
  * Possible periods:  
    * Today  
    * This week  
    * This month  
    * Previous month  
    * This year  
    * Custom period  
* FR-FIN-007 — Financial Indicators  
  * The dashboard may display:  
    * Total revenue  
    * Total expenses  
    * Net result  
    * Paid amount  
    * Pending amount  
    * Overdue amount  
    * Number of transactions

Dashboard Example  
FINANCIAL DASHBOARD  
────────────────────────────────────────

Revenue             R\$ 85,000  
Expenses            R\$ 32,000  
Net Result          R\$ 53,000

Pending Payments    R\$ 8,500  
Overdue             R\$ 2,300

────────────────────────────────────────

Revenue by Period  
████████████████████████

Expenses by Category  
██████████████

Recent Transactions  
────────────────────────────────────────  
Payment       Patient A       R\$ 300  
Expense       Supplier B      R\$ 850  
Payment       Patient C       R\$ 450

11.2 Revenue Management  
Revenue Management allows the clinic to register and monitor incoming financial amounts.

Revenue may originate from patient payments, services, consultations, packages, or other clinic-defined sources.

Functional Requirements

* FR-FIN-008 — Revenue Registration  
  * Authorized users shall be able to register revenue.  
* FR-FIN-009 — Revenue Amount  
  * Every revenue transaction shall contain a valid monetary amount.  
* FR-FIN-010 — Revenue Date  
  * The system shall store the relevant transaction date.  
* FR-FIN-011 — Revenue Category  
  * Revenue should support categorization.  
  * Examples:  
    * Consultation  
    * Procedure  
    * Examination  
    * Package  
    * Other service  
* FR-FIN-012 — Patient Association  
  * Where applicable, revenue shall be associated with a patient.  
* FR-FIN-013 — Professional Association  
  * Where applicable, revenue may be associated with the responsible healthcare professional.  
* FR-FIN-014 — Appointment Association  
  * Where applicable, revenue may be associated with an appointment or consultation.  
* FR-FIN-015 — Payment Method  
  * The system shall support configurable payment methods.  
  * Examples:  
    * Cash  
    * Debit card  
    * Credit card  
    * Bank transfer  
    * PIX  
    * Other configured methods  
* FR-FIN-016 — Revenue Validation  
  * The system shall validate required financial information before registration.

Revenue Flow  
![][image13]  
11.3 Expense Management  
Expense Management allows the clinic to register and monitor outgoing financial transactions.  
Examples include:  
Rent  
Salaries  
Supplies  
Software subscriptions  
Utilities  
Maintenance  
Professional services  
Other operating expenses

Functional Requirements

* FR-FIN-017 — Expense Registration  
  * Authorized users shall be able to register an expense.  
* FR-FIN-018 — Expense Amount  
  * Every expense shall contain a valid monetary amount.  
* FR-FIN-019 — Expense Date  
  * The system shall store the relevant expense date.  
* FR-FIN-020 — Expense Category  
  * Expenses shall support categorization.  
* FR-FIN-021 — Expense Description  
  * Users shall be able to provide a description of the expense.  
* FR-FIN-022 — Supplier Information  
  * The system should allow supplier information where applicable.  
* FR-FIN-023 — Recurring Expenses  
  * The system may support recurring expenses.  
* FR-FIN-024 — Expense Status  
  * Expenses may have statuses such as:  
    * Planned  
    * Pending  
    * Paid  
    * Cancelled

Expense Flow  
![][image14]  
11.4 Payment Registration  
The system shall allow authorized users to register payments received from patients or other sources.

Functional Requirements

* FR-FIN-025 — Register Payment  
  * Authorized users shall be able to register a payment.  
* FR-FIN-026 — Payment Amount  
  * The system shall record the amount paid.  
* FR-FIN-027 — Payment Date  
  * The payment date shall be stored.  
* FR-FIN-028 — Payment Method  
  * The system shall record the selected payment method.  
* FR-FIN-029 — Patient Association  
  * Where applicable, the payment shall be associated with a patient.  
* FR-FIN-030 — Related Charge  
  * The system should allow a payment to be associated with a corresponding financial charge.  
* FR-FIN-031 — Partial Payment  
  * The system should support partial payments where configured.  
* FR-FIN-032 — Payment Reference  
  * The system should generate or store a unique payment reference.

Payment Flow

1. Financial Charge  
2. Payment Received  
3. Enter Payment  
4. Validate Amount  
5. Select Payment Method  
6. Register Payment  
7. Update Payment Status  
8.  Update Financial Dashboard

11.5 Payment Status  
Payment Status allows the clinic to understand the state of a financial obligation.  
Possible statuses include:

* Pending  
* Partially Paid  
* Paid  
* Overdue  
* Cancelled  
* Refunded

Functional Requirements

* FR-FIN-033 — Payment Status  
  * The system shall maintain the current status of each applicable payment or financial charge.  
* FR-FIN-034 — Status Calculation  
  * The system should calculate payment status based on registered amounts, due dates, and applicable business rules.  
* FR-FIN-035 — Paid Status  
  * A financial charge shall be considered paid when the applicable amount has been fully settled.  
* FR-FIN-036 — Partial Status  
  * The system shall support a partially paid state where applicable.  
* FR-FIN-037 — Overdue Status  
  * The system should identify payments whose due date has passed and whose applicable amount remains unpaid.  
* FR-FIN-038 — Status History  
  * Changes to payment status should be traceable.

Payment State Model  
![][image15]

11.6 Pending Payments  
The Pending Payments area allows authorized users to identify financial amounts that have not yet been fully settled.

Functional Requirements

* FR-FIN-039 — Pending Payment List  
  * The system shall provide a list of pending financial amounts.  
* FR-FIN-040 — Pending Amount  
  * The system shall display the remaining amount to be paid.  
    * Remaining Amount \= Total Charge \- Total Paid  
* FR-FIN-041 — Due Date  
  * Pending payments should display their applicable due date.  
* FR-FIN-042 — Patient Identification  
  * Where applicable, the system shall identify the associated patient.  
* FR-FIN-043 — Aging  
  * The system should indicate how long a payment has remained pending.  
* FR-FIN-044 — Overdue Filtering  
  * Users shall be able to filter overdue payments.  
* FR-FIN-045 — Payment Registration  
  * Authorized users should be able to register a payment directly from the pending payment view.

Pending Payment Example  
PENDING PAYMENTS  
────────────────────────────────────────

Patient       Charge      Paid       Due  
Maria         R\$ 500      R\$ 300      10/09  
João          R\$ 250      R\$ 0        05/09  
Ana           R\$ 800      R\$ 500      02/09

Remaining:  
Maria         R\$ 200  
João          R\$ 250  
Ana           R\$ 300

11.7 Financial Transactions  
Financial Transactions provide a unified view of money entering and leaving the clinic.

Functional Requirements

* FR-FIN-046 — Transaction Registration  
  * The system shall maintain financial transactions.  
* FR-FIN-047 — Transaction Type  
  * Each transaction shall identify whether it represents:  
  * Revenue  
  * Expense  
  * Payment  
  * Refund  
  * Adjustment  
  * Other configured transaction types  
* FR-FIN-048 — Transaction Amount  
  * Each transaction shall contain a valid monetary amount.  
* FR-FIN-049 — Transaction Date  
  * Each transaction shall have a relevant date.  
* FR-FIN-050 — Transaction Category  
  * Transactions should support categories.  
* FR-FIN-051 — Transaction Description  
  * Users should be able to provide descriptions where applicable.  
* FR-FIN-052 — Related Entity  
  * Transactions may be associated with:  
    * Patient  
    * Appointment  
    * Consultation  
    * Professional  
    * Supplier  
    * Other clinic entity  
* FR-FIN-053 — Transaction Reference  
  * The system should maintain a unique identifier for each transaction.  
* FR-FIN-054 — Transaction History  
  * Financial transactions shall remain traceable through the financial history.

Transaction Model  
FINANCIAL TRANSACTION

Way 1:

1. INFLOW  
2. Revenue  
3. Payment  
4. Refund

Way 2:

1. OUTFLOW  
2. Expense  
3. Supplier  
4. Operating Cost

11.8 Financial Reports  
Financial Reports provide summarized and filtered financial information for management and decision-making.

Functional Requirements

* FR-FIN-055 — Financial Reports  
  * Authorized users shall be able to generate financial reports.  
* FR-FIN-056 — Revenue Report  
  * The system shall support revenue reports.  
* FR-FIN-057 — Expense Report  
  * The system shall support expense reports.  
* FR-FIN-058 — Payment Report  
  * The system shall support payment reports.  
* FR-FIN-059 — Pending Payment Report  
  * The system should support reports of pending and overdue payments.  
* FR-FIN-060 — Financial Result Report  
  * The system should provide a report comparing revenue and expenses.  
* FR-FIN-061 — Date Filtering  
  * Reports shall support date-range filtering.  
* FR-FIN-062 — Category Filtering  
  * Reports should support financial category filtering.  
* FR-FIN-063 — Professional Filtering  
  * Where applicable, reports should support filtering by professional.  
* FR-FIN-064 — Payment Method Filtering  
  * Reports should support filtering by payment method.  
* FR-FIN-065 — Report Export  
  * Authorized users should be able to export supported financial reports.

Possible formats may include:  
PDF  
CSV  
Spreadsheet-compatible formats

Report Flow

* Select Report  
* Select Period  
* Apply Filters  
* Calculate Data  
* Display Results  
  * View  
  * Export

11.9 Financial History  
Financial History provides a chronological and auditable view of financial events.

Functional Requirements

* FR-FIN-066 — Financial History  
  * The system shall maintain financial history.  
* FR-FIN-067 — Historical Transactions  
  * The system shall display historical financial transactions.  
* FR-FIN-068 — Historical Status  
  * Relevant status changes shall be traceable.  
* FR-FIN-069 — User Identification  
  * Financial actions should identify the responsible user.  
* FR-FIN-070 — Timestamp  
  * Relevant financial actions shall contain timestamps.  
* FR-FIN-071 — Historical Filtering  
  * Users shall be able to filter financial history by:  
    * Date  
    * Transaction type  
    * Category  
    * Patient  
    * Professional  
    * Payment method  
    * Status  
* FR-FIN-072 — Financial Auditability  
  * Important financial modifications should remain auditable.

Financial History Example  
FINANCIAL HISTORY  
────────────────────────────────────

06/09/2026 14:30  
Payment Registered  
Patient: Maria  
Amount: R\$ 300  
Method: PIX  
User: Receptionist

06/09/2026 10:15  
Expense Registered  
Category: Supplies  
Amount: R\$ 850  
User: Administrator

05/09/2026 16:40  
Payment Status Changed  
Patient: João  
Pending \-\> Paid  
User: Receptionist

11.10 Financial and Patient Integration  
Financial information should integrate with the patient management system when applicable.

Patient  
   |  
   \+---- Appointment  
   |  
   \+---- Consultation  
   |  
   \+---- Financial Charge  
              |  
              v  
           Payment  
              |  
              v  
      Financial Transaction  
              |  
              v  
      Financial Dashboard

Functional Requirements

* FR-FIN-073 — Patient Financial History  
  * Authorized users shall be able to view applicable patient-related financial history.  
* FR-FIN-074 — Appointment Association  
  * Financial charges may be associated with appointments.  
* FR-FIN-075 — Consultation Association  
  * Financial charges may be associated with consultations or services.  
* FR-FIN-076 — Financial Timeline  
  * Relevant financial events should appear in the patient's broader timeline according to permissions.  
* FR-FIN-077 — Access Separation  
  * Financial permissions shall be independently configurable from clinical permissions.

This is important because a user may need access to scheduling or patient information without necessarily requiring access to financial information.

11.11 Financial Categories  
The system should provide configurable categories for organizing financial information.

Example:  
REVENUE  
├── Consultations  
├── Procedures  
├── Examinations  
├── Packages  
└── Other Services

EXPENSES  
├── Rent  
├── Salaries  
├── Supplies  
├── Utilities  
├── Software  
├── Maintenance  
└── Other Expenses

Functional Requirements

* FR-FIN-078 — Financial Categories  
  * Authorized administrators shall be able to manage applicable financial categories.  
* FR-FIN-079 — Category Status  
  * Categories may be activated or deactivated without necessarily removing historical transactions.  
* FR-FIN-080 — Historical Category Integrity  
  * Historical transactions shall retain their applicable category information even if a category is later deactivated.

11.12 Financial Validation and Business Rules  
The system shall apply validation rules to maintain financial consistency.

Examples include:

* Monetary amounts cannot be invalid.  
* Required transaction information must be provided.  
* Payments should not exceed the applicable balance unless explicitly supported.  
* A paid transaction should not be freely changed to pending without authorization.  
* Financial modifications should be auditable.  
* Cancelled transactions should remain historically traceable.  
* Historical financial information should not be silently overwritten.  
* User permissions must be verified before sensitive financial operations.  
* Financial records must remain isolated between clinics.

Financial Validation Flow  
Financial Action  
      |  
      v  
Validate User Permission  
      |  
      v  
Validate Financial Data  
      |  
      v  
Validate Business Rules  
      |  
      \+---- Invalid \----\> Reject \+ Show Error  
      |  
      v  
Save Transaction  
      |  
      v  
Update Related Records  
      |  
      v  
Create Audit Event

11.13 Financial Security  
Financial information shall be protected through appropriate access-control mechanisms.  
The module should follow:

* Role-based access control  
* Permission-based authorization  
* Least privilege  
* Clinic isolation  
* Authentication  
* Auditability  
* Controlled modifications  
* Secure storage  
* Data consistency

Financial access should be configurable independently from clinical access.

For example:  
Receptionist  
├── View Patient        ✓  
├── Schedule Appointment ✓  
├── Register Payment     ✓  
└── View Financial Reports ✗

Financial Staff  
├── View Patient         ✓  
├── Register Payment     ✓  
├── Manage Expenses      ✓  
└── View Financial Reports ✓

Clinic Owner  
├── View Financial Data  ✓  
├── Manage Expenses      ✓  
├── View Reports         ✓  
└── Configure Categories ✓

The exact permission model should be configurable according to clinic policies and applicable requirements.

11.14 Financial Error and Exception Handling  
The system shall appropriately handle:

* Invalid monetary values  
* Missing required information  
* Duplicate transactions  
* Invalid payment amounts  
* Unauthorized financial actions  
* Payment registration failure  
* Report generation failure  
* Export failure  
* Database errors  
* Integration failures  
* Session expiration  
* Cross-clinic access attempts

The system should provide clear error messages while avoiding unnecessary exposure of sensitive financial information.

11.15 Financial Auditability  
Important financial operations should be traceable.  
Examples include:

* Revenue creation  
* Expense creation  
* Payment registration  
* Payment status changes  
* Refunds  
* Transaction cancellation  
* Financial category changes  
* Report generation where appropriate  
* Data export  
* Financial record modifications

Example:  
Financial Event  
      |  
      \+-- User  
      |  
      \+-- Timestamp  
      |  
      \+-- Action  
      |  
      \+-- Transaction  
      |  
      \+-- Previous State  
      |  
      \+-- New State  
      |  
      v  
   Audit History

11.16 MVP Recommendation  
The MVP should prioritize:

* Financial dashboard  
* Revenue registration  
* Expense registration  
* Payment registration  
* Payment status  
* Pending payments  
* Basic financial transactions  
* Basic financial reports  
* Financial history  
* Patient/appointment financial association  
* Role-based financial permissions  
* Basic auditability  
* Future Features

Future versions may include:

* Automated payment reminders  
* PIX integration  
* Payment gateway integration  
* Online patient payments  
* Automatic recurring charges  
* Subscription billing  
* Advanced financial forecasting  
* Cash-flow forecasting  
* Automated reconciliation  
* Accounting integrations  
* Tax-related integrations  
* Advanced financial analytics  
* AI-powered financial insights  
* Automated expense categorization

11.17 Functional Acceptance Criteria  
The Financial Management module shall be considered functionally acceptable when:

* Authorized users can access the financial dashboard.  
* Revenue can be registered correctly.  
* Expenses can be registered correctly.  
* Payments can be recorded.  
* Payment status is updated correctly.  
* Pending amounts can be identified.  
* Financial transactions are traceable.  
* Reports can be generated using applicable filters.  
* Financial history can be reviewed.  
* Patient-related financial information can be accessed according to permissions.  
* Financial information is isolated between clinics.  
* Unauthorized users cannot perform restricted financial actions.  
* Important financial modifications are auditable.  
* Financial calculations remain consistent.  
* Historical transactions are preserved appropriately.

11.18 Functional Design Principles  
The Financial Management module should follow these principles:

* Clarity — Financial information should be easy to understand.  
* Accuracy — Calculations and transaction states should remain consistent.  
* Traceability — Important financial actions should be auditable.  
* Security — Financial information must be protected.  
* Simplicity — Common financial operations should require few steps.  
* Transparency — Users should understand how financial values are calculated.  
* Separation of Responsibilities — Financial permissions should be independently configurable.  
* Consistency — Financial states and transactions should follow predictable rules.  
* Performance — Dashboards and common queries should respond quickly.  
* Scalability — The module should support future integrations and more advanced financial capabilities.

12\. Dashboard and Analytics  
12.1 Owner Dashboard  
The Owner Dashboard provides the clinic owner with a high-level view of the clinic's operational, financial, and administrative performance.  
The dashboard shall prioritize information that helps the owner understand the current state of the clinic without requiring navigation through multiple modules.

Functional Requirements

* FR-DASH-001 — Owner Dashboard Access  
  * The system shall provide a dedicated dashboard for users with the Clinic Owner role.  
* FR-DASH-002 — Operational Overview  
  * The dashboard shall display relevant operational information, including:  
    * Today's appointments.  
    * Upcoming appointments.  
    * Completed appointments.  
    * Cancelled appointments.  
    * No-show appointments.  
    * Active patients.  
    * Registered professionals.  
    * Pending tasks.  
* FR-DASH-003 — Financial Overview  
  * The dashboard shall display authorized financial indicators, including:  
    * Revenue.  
    * Expenses.  
    * Net result.  
    * Pending payments.  
    * Paid transactions.  
    * Financial activity.  
* FR-DASH-004 — Period Selection  
  * The owner shall be able to select predefined or custom periods for applicable metrics.  
  * Examples:  
    * Today.  
    * This week.  
    * This month.  
    * Previous month.  
    * Custom period.  
* FR-DASH-005 — Quick Actions  
  * The dashboard may provide shortcuts to frequently used actions.  
  * Examples:  
    * Add patient.  
    * Schedule appointment.  
    * View calendar.  
    * View financial activity.  
    * Add user.

Example Dashboard  
\+---------------------------------------------------------------+  
| ClinicOS                                      Owner Dashboard |  
\+---------------------------------------------------------------+  
|                                                               |  
|  TODAY                                                        |  
|  \+------------+  \+------------+  \+------------+              |  
|  | Appointments|  | Patients   |  | Revenue    |              |  
|  |     24     |  |    312     |  | R\$ 4,850   |              |  
|  \+------------+  \+------------+  \+------------+              |  
|                                                               |  
|  APPOINTMENTS                                                  |  
|  \-----------------------------------------------------------  |  
|  09:00  Dr. Silva       Maria S.          Confirmed            |  
|  10:00  Dr. Ana         João P.           Waiting              |  
|  11:00  Dr. Silva       Carla M.          Confirmed            |  
|                                                               |  
|  FINANCIAL OVERVIEW                                            |  
|  \-----------------------------------------------------------  |  
|  Revenue       Expenses       Pending                         |  
|  R\$ 42,500     R\$ 18,200      R\$ 3,400                        |  
|                                                               |  
|  \[Add Patient\] \[Schedule\] \[Financials\] \[Reports\]              |  
\+---------------------------------------------------------------+

12.2 Professional Dashboard  
The Professional Dashboard shall provide healthcare professionals with information relevant to their own clinical workflow.  
The dashboard should avoid unnecessary administrative information.

Functional Requirements

* FR-DASH-006 — Professional Dashboard Access  
  * The system shall provide a role-appropriate dashboard for healthcare professionals.  
* FR-DASH-007 — Daily Schedule  
  * The dashboard shall display:  
    * Today's appointments.  
    * Appointment times.  
    * Patient names.  
    * Appointment status.  
    * Consultation status.  
    * Relevant service information.  
* FR-DASH-008 — Patient Access  
  * Authorized professionals shall be able to access relevant patient information directly from the dashboard.  
* FR-DASH-009 — Consultation Shortcuts  
  * The dashboard shall provide shortcuts for:  
    * Starting a consultation.  
    * Continuing an unfinished consultation.  
    * Viewing patient history.  
    * Accessing medical records.

Example  
\+------------------------------------------------------+  
| ClinicOS                         Professional        |  
\+------------------------------------------------------+  
| Good morning, Dr. Silva                              |  
|                                                      |  
| TODAY                                                |  
|                                                      |  
| 09:00  Maria Silva       Confirmed     \[Open\]       |  
| 10:00  João Santos       Waiting       \[Open\]       |  
| 11:00  Carla Mendes      Confirmed     \[Open\]       |  
|                                                      |  
| QUICK ACTIONS                                        |  
| \[Start Consultation\] \[Patients\] \[Calendar\]           |  
\+------------------------------------------------------+

12.3 Receptionist Dashboard  
The Receptionist Dashboard shall focus on scheduling, patient flow, and administrative tasks.

Functional Requirements

* FR-DASH-010 — Receptionist Dashboard  
  * The system shall provide receptionists with access to relevant operational information.  
* FR-DASH-011 — Appointment Overview  
  * The dashboard shall display:  
    * Today's appointments.  
    * Upcoming appointments.  
    * Waiting patients.  
    * Confirmed appointments.  
    * Cancelled appointments.  
    * No-show appointments.  
* FR-DASH-012 — Quick Patient Actions  
  * The receptionist shall be able to quickly:  
    * Register a patient.  
    * Search for a patient.  
    * Schedule an appointment.  
    * Reschedule an appointment.  
    * Cancel an appointment.  
    * Confirm an appointment.

Example  
\+------------------------------------------------------+  
| Reception                                            |  
\+------------------------------------------------------+  
| TODAY                                                |  
|                                                      |  
| Appointments: 32     Waiting: 3     Confirmed: 24   |  
|                                                      |  
| \[Register Patient\] \[Schedule\] \[Search Patient\]       |  
|                                                      |  
| NEXT APPOINTMENTS                                     |  
| 09:30  Maria S.    Dr. Silva      Confirmed          |  
| 10:00  João P.     Dr. Ana        Waiting            |  
| 10:30  Carla M.    Dr. Silva      Confirmed          |  
\+------------------------------------------------------+

12.4 Administrator Dashboard  
The Administrator Dashboard shall provide administrative visibility into the clinic's system usage and configuration.

Functional Requirements

* FR-DASH-013 — Administrative Overview  
  * The dashboard shall display relevant administrative information.  
  * Examples:  
    * Active users.  
    * Inactive users.  
    * User invitations.  
    * Permission changes.  
    * System notifications.  
    * Recent administrative activity.  
* FR-DASH-014 — Configuration Shortcuts  
  * The administrator may access:  
    * User management.  
    * Roles.  
    * Permissions.  
    * Clinic settings.  
    * Services.  
    * Departments.  
    * Locations.

12.5 Financial Dashboard  
The Financial Dashboard shall provide authorized financial users with an overview of the clinic's financial activity.

Functional Requirements

* FR-DASH-015 — Financial Overview  
  * The dashboard shall display:  
    * Revenue.  
    * Expenses.  
    * Net result.  
    * Pending payments.  
    * Completed payments.  
    * Financial transactions.  
* FR-DASH-016 — Financial Period  
  * Users shall be able to filter financial indicators by period.  
* FR-DASH-017 — Financial Access Control  
  * Financial information shall only be visible to users with the appropriate permissions.

12.6 Manager Dashboard  
The Manager Dashboard shall provide operational information required to monitor clinic performance.

Functional Requirements

* FR-DASH-018 — Manager Dashboard  
  * The dashboard shall display relevant operational indicators.  
  * Examples:  
    * Appointment volume.  
    * Appointment completion.  
    * Cancellation rate.  
    * No-show rate.  
    * Patient volume.  
    * Professional activity.  
    * Operational tasks.  
* FR-DASH-019 — Comparative Analysis  
  * Where authorized, managers may compare operational indicators across periods.

12.7 Operational Indicators  
ClinicOS shall support operational indicators that help users understand clinic activity.

Potential indicators include:

* Total appointments.  
* Completed appointments.  
* Cancelled appointments.  
* No-shows.  
* Active patients.  
* New patients.  
* Consultations completed.  
* Average appointments per professional.  
* Appointment utilization.  
* Pending tasks.

Example  
Operational Indicators

Appointments       248  
Completed          221  
Cancelled           14  
No-shows            13  
New Patients        38  
Active Patients    412

The system shall only expose indicators permitted by the user's role and permissions.

12.8 Financial Indicators  
Authorized users may access financial indicators such as:

* Total revenue.  
* Total expenses.  
* Net result.  
* Pending payments.  
* Paid transactions.  
* Outstanding amounts.  
* Revenue by period.  
* Expenses by period.

Financial indicators shall not be displayed to unauthorized users.

12.9 Dashboard Customization  
ClinicOS should allow appropriate users to customize their dashboard experience.

Functional Requirements

* FR-DASH-020 — Widget Visibility  
  * Users may be able to show or hide available dashboard widgets.  
* FR-DASH-021 — Widget Ordering  
  * Users may be able to reorder widgets according to their preferences.  
* FR-DASH-022 — Role Restrictions  
  * Users shall only be able to customize widgets available to their role.  
* FR-DASH-023 — Default Configuration  
  * Each role shall have a predefined default dashboard.

12.10 Data Visualization  
ClinicOS shall provide visual representations of relevant operational and financial information.  
Supported visualization types may include:

* Cards.  
* Tables.  
* Bar charts.  
* Line charts.  
* Progress indicators.  
* Status indicators.

Visualization should prioritize clarity over visual complexity.

Design Principle  
                 DATA  
                   |  
                   v  
            \+-------------+  
            |   CLINICOS   |  
            \+-------------+  
                   |  
        \+----------+----------+  
        |          |          |  
        v          v          v  
    Operational  Financial   Activity  
        |          |          |  
        \+----------+----------+  
                   |  
                   v  
             Clear Insights

13\. Search and Information Retrieval  
13.1 Global Search  
ClinicOS shall provide a centralized search experience allowing authorized users to locate relevant information without navigating through multiple modules.

Functional Requirements

* FR-SEARCH-001 — Global Search  
  * The system shall provide a global search mechanism.  
  * Depending on permissions, users may search:  
    * Patients.  
    * Appointments.  
    * Consultations.  
    * Medical records.  
    * Financial records.  
    * Users.  
    * Services.  
* FR-SEARCH-002 — Permission-Aware Search  
  * Search results shall only include information the current user is authorized to access.  
* FR-SEARCH-003 — Search Suggestions  
  * The system may provide suggestions while the user types.

Example  
\+------------------------------------------------------+  
| Search ClinicOS...                         \[Ctrl \+ K\] |  
\+------------------------------------------------------+  
| maria silva                                          |  
|                                                      |  
| PATIENTS                                             |  
| \> Maria Silva       ID: 00482                        |  
|                                                      |  
| APPOINTMENTS                                         |  
| \> Maria Silva       Today \- 14:00                    |  
|                                                      |  
| MEDICAL RECORDS                                      |  
| \> Maria Silva       Last updated \- 02/08/2026       |  
\+------------------------------------------------------+

13.2 Patient Search  
ClinicOS shall allow authorized users to search for patients.  
Searchable fields may include:

* Full name.  
* Patient ID.  
* Phone number.  
* Email.  
* National identifier, where applicable and legally permitted.  
* Date of birth.

Functional Requirements

* FR-SEARCH-004 — Patient Search  
  * The system shall return patient records matching authorized search criteria.  
* FR-SEARCH-005 — Partial Matching  
  * The system should support partial text searches.  
* FR-SEARCH-006 — Patient Result  
  * Search results should provide enough information to identify the correct patient without unnecessarily exposing sensitive information.

13.3 Appointment Search  
Authorized users shall be able to search appointments.  
Search criteria may include:

* Patient.  
* Professional.  
* Date.  
* Date range.  
* Status.  
* Service.  
* Location.

Example  
Appointment Search

Patient:      \[Maria Silva\]  
Professional: \[Dr. Silva\]  
Date:         \[01/08/2026 \- 31/08/2026\]  
Status:       \[All\]

\[Search\]

13.4 Medical Record Search  
Authorized healthcare professionals and other permitted users shall be able to locate medical records according to their permissions.  
Search may include:

* Patient.  
* Record date.  
* Professional.  
* Consultation.  
* Record type.

Sensitive clinical content should not be exposed through unauthorized search results.

13.5 Financial Search  
Authorized financial users shall be able to search financial transactions.  
Search criteria may include:

* Transaction ID.  
* Patient.  
* Date.  
* Amount.  
* Transaction type.  
* Payment status.  
* Responsible user.

13.6 Filters  
ClinicOS shall provide filters appropriate to each search context.  
Common filters may include:

* Date.  
* Status.  
* User.  
* Professional.  
* Patient.  
* Service.  
* Location.  
* Category.

Filters should be easy to clear and modify.

Example  
SEARCH RESULTS

\[Patient: Maria\] \[Status: Confirmed\] \[Date: This Month\] \[X\]

Results: 12

1\. Appointment — 05 Aug — Confirmed  
2\. Appointment — 09 Aug — Confirmed  
3\. Appointment — 15 Aug — Confirmed  
...

13.7 Sorting  
Search results shall support sorting where relevant.  
Possible sorting options include:

* Relevance.  
* Date.  
* Name.  
* Status.  
* Amount.  
* Most recent.  
* Oldest.

The default sorting method should depend on the context.

13.8 Search Permissions  
Search functionality shall respect ClinicOS access control.

Security Principle  
                    SEARCH  
                       |  
                       v  
                \+-------------+  
                | User Access |  
                \+-------------+  
                       |  
                       v  
                \+-------------+  
                | Permissions |  
                \+-------------+  
                       |  
              \+--------+--------+  
              |                 |  
            ALLOW              DENY  
              |                 |  
              v                 v  
        Show Results       Hide Results

A user must never receive search results containing information that the user is not authorized to access.

14\. Notifications

14.1 System Notifications  
The system shall notify users about relevant system events.

Examples include:

* Successful operations  
* Failed operations  
* Configuration changes  
* Administrative announcements  
* Important system events

Notifications shall respect user permissions.  
Priority: Must Have

14.2 Appointment Notifications  
The system shall generate notifications for relevant appointment events.  
Examples include:

* Appointment created  
* Appointment confirmed  
* Appointment rescheduled  
* Appointment cancelled  
* Appointment approaching  
* No-show registered  
* Schedule changes

1. Appointment Event  
2. Identify Recipients  
3. Check Preferences  
4. Create Notification  
5. Deliver Notification

Priority: Must Have

14.3 Financial Notifications  
The system shall provide notifications for relevant financial events.  
Examples include:

* Payment received  
* Payment pending  
* Payment overdue  
* Financial record created  
* Financial record updated  
* Expense registered

Only authorized users shall receive financial notifications.  
Priority: Must Have

14.4 Task Notifications  
The system should notify users about relevant tasks.  
Examples include:

* Task assigned  
* Task due soon  
* Task overdue  
* Task completed  
* Task reassigned  
* Task priority changed

Priority: Should Have

14.5 Security Notifications  
The system shall notify users about important security events.  
Examples include:

* New login  
* Password change  
* Password recovery  
* Account activation  
* Account deactivation  
* Role changes  
* Permission changes  
* Suspicious authentication activity

Security notifications shall not expose passwords, tokens, or other secrets.  
Priority: Must Have

14.6 Notification Preferences  
The system should allow users to configure supported notification preferences.  
Users may configure:

* Appointment notifications  
* Task notifications  
* Financial notifications  
* System notifications  
* Notification frequency  
* Supported notification channels

Mandatory security notifications shall remain enabled when required.  
Users shall only configure notifications available to their role.  
Priority: Should Have

14.7 Notification History  
The system shall provide users with access to their notification history.  
Each notification may contain:

* Notification ID  
* Type  
* Title  
* Message  
* Date and time  
* Read/unread status  
* Related record  
* Delivery status  
* Priority

Example:  
\+-------------------------+  
| Notification Center     |  
\+-------------------------+  
| ● Appointment confirmed |  
|   Today, 09:30          |  
\+-------------------------+  
| ● Payment overdue       |  
|   Today, 08:15          |  
\+-------------------------+  
| ○ Task assigned         |  
|   Yesterday, 16:40      |  
\+-------------------------+

The system shall allow users to:

* View notifications  
* Open related information when authorized  
* Mark notifications as read  
* View unread notifications  
* Review notification history  
* Users shall only see their authorized notifications.

Priority: Must Have

14.8 Cross-Module Rules  
Dashboards, Search, and Notifications shall follow the same core ClinicOS security model.

                  \+----------------------+  
                  |     ClinicOS Data    |  
                  \+----------+-----------+  
                             |  
          \+------------------+------------------+  
          |                  |                  |  
          v                  v                  v  
    \+-----------+      \+-----------+      \+-----------+  
    | Dashboard |      |  Search   |      | Notif.    |  
    \+-----------+      \+-----------+      \+-----------+  
          |                  |                  |  
          \+------------------+------------------+  
                             |  
                             v  
                  \+----------------------+  
                  | Access Control      |  
                  | Data Isolation       |  
                  | Privacy & Security   |  
                  \+----------------------+

The system shall ensure that:

* Users only access authorized data.  
* Clinic data remains isolated.  
* Sensitive information is protected.  
* Role and permission rules are applied consistently.  
* Dashboard data and search results use authoritative system data.  
* Notifications do not bypass access control.  
* Relevant security-sensitive actions can be audited.

14.9 Requirement Summary  
\+---------------+----------------------------------+----------+  
| ID            | Requirement                      | Priority |  
\+---------------+----------------------------------+----------+  
| FR-DASH-001   | Owner Dashboard                  | Must     |  
| FR-DASH-002   | Professional Dashboard           | Must     |  
| FR-DASH-003   | Receptionist Dashboard           | Must     |  
| FR-DASH-004   | Administrator Dashboard          | Must     |  
| FR-DASH-005   | Financial Dashboard              | Must     |  
| FR-DASH-006   | Manager Dashboard                | Must     |  
| FR-DASH-007   | Dashboard Customization          | Should   |  
| FR-SEARCH-001 | Global Search                    | Must     |  
| FR-SEARCH-002 | Patient Search                   | Must     |  
| FR-SEARCH-003 | Appointment Search               | Must     |  
| FR-SEARCH-004 | Search Filters                   | Must     |  
| FR-SEARCH-005 | Result Sorting                   | Should   |  
| FR-SEARCH-006 | Search Permissions               | Must     |  
| FR-NOTIF-001  | System Notifications             | Must     |  
| FR-NOTIF-002  | Appointment Notifications        | Must     |  
| FR-NOTIF-003  | Financial Notifications          | Must     |  
| FR-NOTIF-004  | Task Notifications               | Should   |  
| FR-NOTIF-005  | Security Notifications           | Must     |  
| FR-NOTIF-006  | Notification Preferences         | Should   |  
| FR-NOTIF-007  | Notification History             | Must     |  
\+---------------+----------------------------------+----------+  
These requirements define the dashboard, search, information-retrieval, and notification capabilities of ClinicOS while maintaining role-based access, clinic data isolation, privacy, security, and consistent user experience.

15\. Automation  
15.1 Automation Rules  
The system shall allow authorized users to configure supported automation rules.  
Automation rules shall contain:

* Trigger  
* Conditions  
* Action  
* Target user or entity  
* Execution status  
* Optional schedule

Example:

1. Trigge  
2. Condition  
3. Action  
4. Result

The system shall only execute automations within the user's authorized scope.  
Priority: Must Have

15.2 Appointment Automation  
The system shall support automation related to appointments.  
Supported automations may include:

* Appointment reminders  
* Confirmation requests  
* Notifications for cancellations  
* Notifications for rescheduling  
* Follow-up tasks  
* No-show notifications  
* Schedule-related alerts

Example:

1. Appointment  
2. Check Date/Status  
3. Automation Rule  
4. Send Reminder

Priority: Must Have

15.3 Administrative Automation  
The system should automate repetitive administrative activities.  
Examples include:

* Creating recurring tasks  
* Assigning tasks  
* Updating supported statuses  
* Generating alerts  
* Reminding users about pending actions  
* Updating supported records

Automations shall not modify sensitive information without appropriate authorization.  
Priority: Should Have

15.4 Financial Automation  
The system shall support supported financial automations.  
Examples include:

* Payment reminders  
* Overdue payment alerts  
* Recurring financial tasks  
* Financial status notifications  
* Follow-up actions for pending payments

Financial automation shall respect financial permissions.  
Priority: Should Have

15.5 Notification Automation  
The system shall support automatic notification generation based on configured events.  
Examples:

* Appointment reminders  
* Payment reminders  
* Task reminders  
* Security alerts  
* Administrative notifications  
1. Event  
2. Rule  
3. Notify

Notifications shall only be sent to authorized recipients.  
Priority: Must Have

15.6 Task Automation  
The system should support automatic task creation and assignment.  
Examples:

* Create a follow-up task after an appointment.  
* Assign an administrative task to a receptionist.  
* Create a financial follow-up task for overdue payments.  
* Create recurring operational tasks.

The system shall record the source of automatically created tasks.  
Priority: Should Have

15.7 Automation Monitoring  
The system shall provide authorized users with information about automation execution.  
Monitoring may include:

* Automation name  
* Trigger  
* Execution time  
* Status  
* Result  
* Number of executions  
* Last execution  
* Failure information

Example statuses:

1. Scheduled  
2. Running  
3. Success or Failure

Priority: Should Have

15.8 Automation Failure Handling  
The system shall detect and record automation failures.  
When an automation fails, the system should:

* Record the failure.  
* Identify the affected automation.  
* Record the failure reason when available.  
* Notify authorized users when appropriate.  
* Prevent unintended repeated execution.  
* Allow authorized users to retry supported operations.

Critical failures shall not silently modify or delete data.  
Priority: Must Have

16\. Artificial Intelligence  
16.1 AI Assistant  
The system shall provide an AI Assistant for supported ClinicOS tasks.  
The AI Assistant may help users with:

* Information retrieval  
* Summaries  
* Administrative tasks  
* Search  
* Text generation  
* Workflow assistance  
* General ClinicOS questions

The assistant shall operate within the user's permissions.  
Priority: Must Have

16.2 Natural Language Interaction  
The system should allow users to interact with supported ClinicOS functions using natural language.  
Examples:  
User:  
"Show today's appointments."

1. AI Assistant  
2. Check Permissions  
3. Retrieve Data  
4. Natural Response

The AI shall not use natural-language interaction to bypass normal permissions.  
Priority: Should Have

16.3 Intelligent Search  
The AI system may provide intelligent search capabilities.  
Users may search using natural language instead of exact keywords.  
Examples:

* "Find patients scheduled for tomorrow."  
* "Show overdue payments."  
* "Find consultations from last month."

The system shall apply normal authorization rules before returning results.  
Priority: Should Have

16.4 Information Summarization  
The AI may summarize authorized information.  
Supported summaries may include:

* Patient information  
* Consultation information  
* Appointment history  
* Administrative records  
* Financial information  
* Activity history

Summaries shall clearly represent the underlying information and shall not intentionally introduce unsupported facts.  
Sensitive medical information shall only be summarized for authorized users.  
Priority: Must Have for supported basic summaries.

16.5 Administrative Assistance  
The AI Assistant may help with administrative activities.  
Examples include:

* Creating task drafts  
* Summarizing pending activities  
* Drafting reminders  
* Organizing information  
* Explaining system information  
* Suggesting administrative next steps

AI-generated actions that modify data should require appropriate confirmation when necessary.  
Priority: Should Have

16.6 AI-Generated Content  
The system may generate content such as:

* Administrative messages  
* Appointment reminders  
* Internal notes  
* Task descriptions  
* Summaries  
* Draft communications

Generated content shall be identified as AI-generated where appropriate.  
Users shall be able to review content before using it in sensitive or external contexts.  
Priority: Should Have

16.7 AI Recommendations  
The AI may provide recommendations based on authorized ClinicOS data.  
Examples include:

* Administrative follow-ups  
* Appointment reminders  
* Operational actions  
* Task prioritization  
* Identification of possible administrative issues

Recommendations shall be presented as suggestions rather than mandatory decisions.  
The AI shall not replace professional clinical judgment.  
Priority: Future / Should Have depending on the specific feature.

16.8 AI Permissions  
The AI system shall follow the same access-control model as the rest of ClinicOS.  
The AI shall:

* Identify the authenticated user.  
* Respect the user's role.  
* Respect clinic boundaries.  
* Respect patient-data permissions.  
* Respect financial permissions.  
* Prevent unauthorized data retrieval.  
* Avoid exposing restricted information in responses.  
1. User  
2. Permissions  
3. AI Request  
4. Authorized  
5. Data Only

Priority: Must Have

16.9 Human Review  
AI-generated information shall remain subject to human review when appropriate.  
Human review shall be required or strongly recommended for:

* Clinical information  
* Sensitive patient information  
* External communications  
* Financial decisions  
* Important administrative actions  
* Data-changing actions

The final decision shall remain with the authorized human user.  
Priority: Must Have

16.10 AI Limitations  
The AI system shall have clearly defined limitations.  
The AI shall not:

* Make clinical diagnoses on behalf of professionals.  
* Replace professional judgment.  
* Make unauthorized financial decisions.  
* Access restricted information.  
* Perform unauthorized actions.  
* Claim certainty when information is incomplete.  
* Invent unavailable patient or clinic information.

AI responses may contain errors and shall be treated accordingly.  
Priority: Must Have

16.11 AI Usage Monitoring  
The system should monitor AI usage for operational, security, and quality purposes.  
Monitoring may include:

* User  
* Date and time  
* AI feature used  
* Request type  
* Execution status  
* Relevant system errors  
* Usage volume  
* Action performed

Where appropriate, AI activity shall be auditable.  
Sensitive information shall not be unnecessarily stored in AI logs.  
Priority: Should Have

17\. Reports  
17.1 Operational Reports  
The system shall provide reports related to clinic operations.  
Reports may include:  
Appointment volume  
Completed appointments  
Cancellations  
No-shows  
Patient activity  
Professional activity  
Service utilization  
Operational performance  
Users shall only access reports permitted by their roles.  
Priority: Must Have

17.2 Appointment Reports  
The system shall provide appointment reports.  
Reports may include:  
Appointments by period  
Appointments by professional  
Appointments by service  
Appointments by status  
Cancellations  
No-shows  
Attendance rate  
Users shall be able to select supported reporting periods.  
Priority: Must Have

17.3 Patient Reports  
The system shall provide authorized patient-related reports.  
Reports may include:  
Total patients  
New patients  
Active patients  
Inactive patients  
Patients by period  
Patient activity  
Patient distribution by supported criteria  
Sensitive patient information shall only be included when authorized.  
Priority: Must Have

17.4 Financial Reports  
The system shall provide financial reports for authorized users.  
Reports may include:  
Revenue  
Expenses  
Payments  
Pending payments  
Overdue payments  
Net result  
Revenue by service  
Revenue by professional  
Revenue by payment method  
Financial activity by period  
Financial reports shall follow the same access-control rules as financial records.  
Priority: Must Have

17.5 User Reports  
The system should provide reports about clinic users.  
Reports may include:  
Active users  
Inactive users  
Users by role  
User activity  
Account status  
Relevant system actions  
Only authorized administrators and managers should access restricted user information.  
Priority: Should Have

17.6 Activity Reports  
The system should provide reports about relevant clinic and system activity.  
Reports may include:  
User actions  
Record creation  
Record updates  
Record status changes  
Appointment activity  
Financial activity  
Security-related events  
Activity information shall respect privacy and access-control requirements.  
Priority: Should Have

17.7 Report Filters  
The system shall provide filters for supported reports.  
Common filters may include:  
\+----------------------+  
| Report Filters       |  
\+----------------------+  
| Date / Period        |  
| Professional         |  
| Patient              |  
| Service              |  
| Status               |  
| Location             |  
| Payment Method       |  
\+----------------------+  
The available filters shall depend on the report type.  
Users shall be able to:  
Apply filters  
Combine compatible filters  
Clear filters  
Identify the selected period  
Priority: Must Have

17.8 Report Export  
The system should allow authorized users to export supported reports.  
Supported formats may include:  
PDF  
CSV  
Spreadsheet-compatible formats  
Exported reports shall:  
Reflect the selected filters.  
Reflect the selected reporting period.  
Contain only authorized information.  
Preserve basic report structure.  
Identify the report and generation date.  
Example:  
\+------------------+  
| Report           |  
\+--------+---------+  
         |  
         v  
\+------------------+  
| Apply Filters    |  
\+--------+---------+  
         |  
         v  
\+------------------+  
| Generate Report  |  
\+--------+---------+  
         |  
         v  
\+------------------+  
| Export           |  
\+--------+---------+  
Priority: Should Have

17.9 Cross-Module Rules  
Automation, AI, and Reports shall integrate with the rest of ClinicOS.  
The system shall ensure that:  
Automations respect user permissions.  
AI respects user permissions.  
Reports contain only authorized information.  
Sensitive patient and financial information is protected.  
Automated actions are traceable where required.  
AI actions and generated content can be reviewed when appropriate.  
Reports use reliable ClinicOS data.  
Failed automations do not silently produce incorrect results.  
                 \+----------------+  
                 |   ClinicOS     |  
                 |     Data       |  
                 \+-------+--------+  
                         |  
          \+--------------+--------------+  
          |              |              |  
          v              v              v  
    \+-----------+   \+-----------+   \+-----------+  
    | Automation|   |     AI    |   | Reports   |  
    \+-----------+   \+-----------+   \+-----------+  
          |              |              |  
          \+--------------+--------------+  
                         |  
                         v  
                \+----------------+  
                | Access Control |  
                \+----------------+

17.10 Requirement Summary  
\+---------------+--------------------------------------+----------+  
| ID            | Requirement                          | Priority |  
\+---------------+--------------------------------------+----------+  
| FR-AUTO-001   | Automation Rules                    | Must     |  
| FR-AUTO-002   | Appointment Automation              | Must     |  
| FR-AUTO-003   | Administrative Automation            | Should   |  
| FR-AUTO-004   | Financial Automation                | Should   |  
| FR-AUTO-005   | Notification Automation             | Must     |  
| FR-AUTO-006   | Task Automation                     | Should   |  
| FR-AUTO-007   | Automation Monitoring               | Should   |  
| FR-AUTO-008   | Automation Failure Handling         | Must     |  
| FR-AI-001     | AI Assistant                        | Must     |  
| FR-AI-002     | Natural Language Interaction        | Should   |  
| FR-AI-003     | Intelligent Search                  | Should   |  
| FR-AI-004     | Information Summarization            | Must     |  
| FR-AI-005     | Administrative Assistance            | Should   |  
| FR-AI-006     | AI-Generated Content                | Should   |  
| FR-AI-007     | AI Recommendations                  | Future   |  
| FR-AI-008     | AI Permissions                      | Must     |  
| FR-AI-009     | Human Review                        | Must     |  
| FR-AI-010     | AI Limitations                      | Must     |  
| FR-AI-011     | AI Usage Monitoring                 | Should   |  
| FR-REPORT-001 | Operational Reports                 | Must     |  
| FR-REPORT-002 | Appointment Reports                 | Must     |  
| FR-REPORT-003 | Patient Reports                     | Must     |  
| FR-REPORT-004 | Financial Reports                   | Must     |  
| FR-REPORT-005 | User Reports                        | Should   |  
| FR-REPORT-006 | Activity Reports                    | Should   |  
| FR-REPORT-007 | Report Filters                      | Must     |  
| FR-REPORT-008 | Report Export                       | Should   |  
\+---------------+--------------------------------------+----------+

These requirements define the automation, artificial intelligence, and reporting capabilities of ClinicOS. All features shall operate within the platform's authentication, authorization, data-isolation, privacy, security, and auditability principles.

18\. Audit and Activity History  
18.1 User Activity  
The system shall record relevant user activities performed within ClinicOS.  
Activities may include:  
Login and logout  
Profile updates  
Record creation  
Record updates  
Record deletion  
Appointment actions  
Financial actions  
Permission changes  
Administrative actions  
The system shall record activity according to the user's authorized scope.  
Priority: Must Have

18.2 Patient Activity  
The system shall maintain a history of relevant patient-related activities.  
Activities may include:  
Patient registration  
Patient information updates  
Status changes  
Appointment activity  
Consultation activity  
Record access  
Patient data export  
Patient data deletion where permitted  
The system shall protect sensitive patient information in activity records.  
Priority: Must Have

18.3 Medical Record Activity  
The system shall record relevant activities involving medical records.  
Activities may include:  
Record creation  
Record updates  
Record access  
Record status changes  
Record export  
Authorized deletion  
Medical record activity shall be restricted to authorized users.  
Access to sensitive medical information should be traceable.  
Priority: Must Have

18.4 Financial Activity  
The system shall record relevant financial activities.  
Activities may include:  
Transaction creation  
Transaction updates  
Payment registration  
Payment status changes  
Expense registration  
Invoice generation  
Financial record export  
Authorized deletion or reversal  
Financial activity shall only be accessible to authorized users.  
Priority: Must Have

18.5 Administrative Activity  
The system shall record relevant administrative activities.  
Examples include:  
User creation  
User deactivation  
Role changes  
Permission changes  
Clinic configuration changes  
Service changes  
Operating-hour changes  
Subscription changes  
Administrative activity shall be associated with the user who performed the action.  
Priority: Must Have

18.6 Security Events  
The system shall record relevant security events.  
Examples include:  
Successful login  
Failed login  
Logout  
Password change  
Password recovery  
Account activation  
Account deactivation  
Permission changes  
Role changes  
Suspicious authentication activity  
Security events shall not store passwords or other sensitive authentication secrets.  
Priority: Must Have

18.7 Audit Logs  
The system shall maintain audit logs for relevant system activities.  
An audit record may contain:  
\+-----------------------+  
| Audit Record          |  
\+-----------------------+  
| User                  |  
| Action                |  
| Resource              |  
| Date and Time         |  
| Result                |  
| IP / Context\*         |  
| Previous Value\*       |  
| New Value\*            |  
\+-----------------------+  
\* Only when applicable and appropriate.  
Audit logs shall:  
Identify the action.  
Identify the responsible user or system process.  
Identify the affected resource when applicable.  
Record date and time.  
Record success or failure where applicable.  
Protect sensitive information.  
Be accessible only to authorized users.  
Audit records should not be editable through normal application workflows.  
Priority: Must Have

19\. Data Management  
19.1 Data Creation  
The system shall allow authorized users and system processes to create supported records.  
Examples include:  
Patients  
Appointments  
Consultations  
Medical records  
Financial records  
Users  
Tasks  
Services  
The system shall validate required fields before creating records.  
\+--------+  
| Input  |  
\+---+----+  
    |  
    v  
\+--------+  
|Validate|  
\+---+----+  
    |  
    v  
\+--------+  
| Create |  
\+---+----+  
    |  
    v  
\+--------+  
| Record |  
\+--------+  
Priority: Must Have

19.2 Data Update  
The system shall allow authorized users to update supported records.  
The system shall:  
Validate updated information.  
Apply permission rules.  
Preserve data consistency.  
Record relevant changes in the activity history.  
Sensitive records shall require appropriate authorization.  
Priority: Must Have

19.3 Data Deletion  
The system shall provide controlled deletion mechanisms for supported records.  
Deletion shall:  
Require appropriate authorization.  
Validate whether deletion is permitted.  
Prevent deletion when required by business rules.  
Record the deletion when applicable.  
Protect related records from unintended data loss.  
Where permanent deletion is not appropriate, the system may use a logical deletion or inactive status.  
Request Delete  
      |  
      v  
Check Permission  
      |  
      v  
Check Business Rules  
      |  
   \+--+--+  
   |     |  
 Allowed Blocked  
   |     |  
   v     v  
Delete  Reject  
Priority: Must Have

19.4 Data Retention  
The system shall support defined data-retention rules.  
Retention policies shall consider:  
Data type  
Business requirements  
Security requirements  
Applicable privacy requirements  
Legal or regulatory requirements where applicable  
Account or subscription status  
Sensitive information shall not be retained longer than necessary under the applicable retention policy.  
Priority: Must Have

19.5 Data Export  
The system shall allow authorized users to export supported data.  
Export may include:  
Patient data  
Appointments  
Financial records  
Reports  
Activity records  
Clinic information  
The system shall:  
Apply access permissions.  
Apply selected filters.  
Generate supported formats.  
Prevent unauthorized data export.  
Record sensitive exports when appropriate.  
Priority: Should Have

19.6 Data Import  
The system should allow authorized users to import supported data.  
Possible import sources include:  
CSV files  
Spreadsheet-compatible files  
Supported system exports  
The import process shall:  
Validate the file.  
Validate required fields.  
Identify invalid records.  
Prevent duplicate data where applicable.  
Provide an import result.  
\+-----------+  
| File      |  
\+-----+-----+  
      |  
      v  
\+-----------+  
| Validate  |  
\+-----+-----+  
      |  
      v  
\+-----------+  
| Import    |  
\+-----+-----+  
      |  
      v  
\+-----------+  
| Result    |  
\+-----------+  
Priority: Should Have

19.7 Data Migration  
The system shall support controlled data migration when required.  
Migration may be used for:  
Importing data from another system  
Database structure changes  
Platform upgrades  
Customer migration  
Migration processes shall include:  
Validation  
Data mapping  
Error handling  
Data integrity checks  
Migration status  
Recovery procedures when necessary  
Priority: Should Have

19.8 Data Recovery  
The system shall provide mechanisms for recovering data from supported backups or recovery processes.  
Recovery procedures shall:  
Protect data integrity.  
Restrict access to authorized personnel.  
Record recovery activities.  
Minimize data loss.  
Avoid unintended overwriting of valid data.  
The technical implementation shall define backup frequency and recovery objectives.  
Priority: Must Have

20\. Subscription and Billing  
20.1 Subscription Creation  
The system shall allow a clinic to create a subscription to an available ClinicOS plan.  
The subscription process may include:  
Plan selection  
Billing cycle selection  
Customer information  
Payment information  
Confirmation  
Subscription activation  
\+------------+  
| Select Plan|  
\+-----+------+  
      |  
      v  
\+------------+  
| Billing    |  
| Information|  
\+-----+------+  
      |  
      v  
\+------------+  
| Payment    |  
\+-----+------+  
      |  
      v  
\+------------+  
| Activate   |  
| Subscription|  
\+------------+  
The system shall confirm the subscription status after the process.  
Priority: Must Have

20.2 Subscription Management  
The system shall allow authorized users to manage the clinic's subscription.  
Supported actions may include:  
View current plan  
View billing cycle  
View subscription status  
Update billing information  
Change payment method  
View next billing date  
Access subscription history  
Upgrade or downgrade the plan  
Priority: Must Have

20.3 Plan Management  
The system shall maintain available ClinicOS subscription plans.  
Each plan may define:  
Price  
Billing cycle  
Included features  
Usage limits  
User limits  
AI capabilities  
Storage limits  
Support level  
Example:  
\+----------------+  
| ClinicOS Plan  |  
\+----------------+  
| Price          |  
| Features       |  
| Limits         |  
| AI Access      |  
| Support        |  
\+----------------+  
Plan information shall be clearly presented before subscription or plan changes.  
Priority: Must Have

20.4 Billing  
The system shall manage recurring billing according to the selected subscription plan.  
Billing shall support:  
Billing cycle  
Amount due  
Billing date  
Payment status  
Payment method  
Billing history  
Applicable taxes or charges where required  
The system shall use the configured billing provider or payment infrastructure.  
Priority: Must Have

20.5 Payment Status  
The system shall maintain subscription payment statuses.  
Supported statuses may include:  
Pending  
Paid  
Failed  
Overdue  
Refunded  
Cancelled  
Example:  
Pending  
   |  
   \+----\> Paid  
   |  
   \+----\> Failed  
             |  
             v  
          Overdue  
Payment status changes shall be recorded in subscription history.  
Priority: Must Have

20.6 Invoices  
The system shall provide invoices or billing records for applicable subscription charges.  
Invoices may contain:  
Invoice number  
Customer information  
Subscription plan  
Billing period  
Amount  
Payment status  
Issue date  
Due date  
Payment information  
Authorized users shall be able to view available invoices.  
Priority: Must Have

20.7 Upgrades  
The system shall allow authorized users to upgrade their subscription when supported.  
An upgrade may change:  
Available features  
Usage limits  
User limits  
AI capabilities  
Billing amount  
The system shall clearly display the new plan and applicable billing changes before confirmation.  
Priority: Must Have

20.8 Downgrades  
The system should allow authorized users to downgrade their subscription when supported.  
Before a downgrade, the system shall inform the user of relevant changes, including:  
Features that may become unavailable  
Usage limitations  
User limits  
AI limitations  
Billing changes  
If the current usage exceeds the new plan's limits, the system shall provide appropriate instructions before completing the downgrade.  
Priority: Should Have

20.9 Cancellation  
The system shall allow authorized users to cancel a subscription.  
The cancellation process shall:  
Require confirmation.  
Display the applicable cancellation terms.  
Display the expected subscription status.  
Record the cancellation.  
Update the subscription status.  
Preserve relevant billing history.  
Example:  
\+------------+  
| Active     |  
\+-----+------+  
      |  
      v  
\+------------+  
| Cancel     |  
| Request    |  
\+-----+------+  
      |  
      v  
\+------------+  
| Confirm    |  
\+-----+------+  
      |  
      v  
\+------------+  
| Cancelled  |  
\+------------+  
The system shall follow the configured cancellation and billing rules.  
Priority: Must Have

20.10 Subscription History  
The system shall maintain a history of subscription-related events.  
History may include:  
Subscription creation  
Plan changes  
Upgrades  
Downgrades  
Payment events  
Invoice generation  
Payment failures  
Cancellations  
Reactivations  
Each history entry should contain:  
Event type  
Date and time  
Previous status or plan when applicable  
New status or plan when applicable  
Responsible user or system process  
Example:  
\+--------------------------------+  
| Subscription History           |  
\+--------------------------------+  
| Aug 01 | Plan Created          |  
| Aug 15 | Payment Completed     |  
| Sep 01 | Plan Upgraded         |  
| Oct 01 | Payment Completed     |  
\+--------------------------------+  
Subscription history shall be protected from unauthorized modification.  
Priority: Must Have

20.11 Cross-Module Rules  
Subscription and billing functionality shall integrate with the rest of ClinicOS.  
The system shall ensure that:  
Subscription status can determine access to paid features.  
Plan limits are enforced consistently.  
Billing information is protected.  
Payment events can generate notifications.  
Subscription changes are recorded in activity history.  
Unauthorized users cannot modify subscription information.  
Billing history remains available according to applicable retention rules.  
                 \+------------------+  
                 |  Subscription    |  
                 \+--------+---------+  
                          |  
             \+------------+------------+  
             |            |            |  
             v            v            v  
        \+---------+  \+---------+  \+-----------+  
        | Billing |  | Features|  | Invoices  |  
        \+---------+  \+---------+  \+-----------+  
             |            |  
             \+------------+  
                  |  
                  v  
          \+---------------+  
          | Access Control|  
          \+---------------+

20.12 Requirement Summary  
\+---------------+--------------------------------------+----------+  
| ID            | Requirement                          | Priority |  
\+---------------+--------------------------------------+----------+  
| FR-AUDIT-001  | User Activity                       | Must     |  
| FR-AUDIT-002  | Patient Activity                    | Must     |  
| FR-AUDIT-003  | Medical Record Activity              | Must     |  
| FR-AUDIT-004  | Financial Activity                  | Must     |  
| FR-AUDIT-005  | Administrative Activity             | Must     |  
| FR-AUDIT-006  | Security Events                     | Must     |  
| FR-AUDIT-007  | Audit Logs                          | Must     |  
| FR-DATA-001   | Data Creation                       | Must     |  
| FR-DATA-002   | Data Update                         | Must     |  
| FR-DATA-003   | Data Deletion                       | Must     |  
| FR-DATA-004   | Data Retention                      | Must     |  
| FR-DATA-005   | Data Export                         | Should   |  
| FR-DATA-006   | Data Import                         | Should   |  
| FR-DATA-007   | Data Migration                      | Should   |  
| FR-DATA-008   | Data Recovery                       | Must     |  
| FR-BILL-001   | Subscription Creation               | Must     |  
| FR-BILL-002   | Subscription Management             | Must     |  
| FR-BILL-003   | Plan Management                     | Must     |  
| FR-BILL-004   | Billing                             | Must     |  
| FR-BILL-005   | Payment Status                      | Must     |  
| FR-BILL-006   | Invoices                            | Must     |  
| FR-BILL-007   | Upgrades                            | Must     |  
| FR-BILL-008   | Downgrades                          | Should   |  
| FR-BILL-009   | Cancellation                        | Must     |  
| FR-BILL-010   | Subscription History                | Must     |  
\+---------------+--------------------------------------+----------+  
These requirements define the audit, data-management, subscription, and billing capabilities of ClinicOS. All operations shall respect authentication, authorization, clinic data isolation, privacy, security, data integrity, and auditability requirements.

21\. Customer Support  
21.1 Help Center  
The system shall provide a Help Center containing information to help users understand and use ClinicOS.  
The Help Center may include:  
Getting started guides  
Feature documentation  
Frequently asked questions  
Tutorials  
Troubleshooting guides  
Account and subscription information  
Security and privacy information  
Content shall be organized by topic and searchable where supported.  
Priority: Must Have

21.2 Support Requests  
The system shall allow authorized users to submit support requests.  
A support request may contain:  
Subject  
Description  
Category  
Priority  
Related feature  
Attachments where supported  
Date and time  
Request status  
Example:  
\+----------------+  
| Support Request|  
\+-------+--------+  
        |  
        v  
\+----------------+  
| Category       |  
\+-------+--------+  
        |  
        v  
\+----------------+  
| Description    |  
\+-------+--------+  
        |  
        v  
\+----------------+  
| Submit         |  
\+----------------+  
The system shall provide confirmation after submission.  
Priority: Must Have

21.3 In-App Support  
The system should provide support directly within ClinicOS.  
Supported options may include:  
Help Center access  
Frequently asked questions  
Contact support  
Support request creation  
Links to relevant documentation  
Contextual help  
The support interface should be accessible without requiring the user to leave the application.  
Priority: Should Have

21.4 Support Ticket Management  
The system shall allow support personnel to manage submitted support requests.  
Support personnel may:  
View tickets  
Assign tickets  
Change ticket status  
Change priority  
Add responses  
Add internal notes  
Request additional information  
Close tickets  
Reopen tickets when appropriate  
Possible statuses:  
\+---------+  
| Open    |  
\+----+----+  
     |  
     v  
\+---------+  
| Assigned|  
\+----+----+  
     |  
     v  
\+---------+  
| Pending |  
\+----+----+  
     |  
     v  
\+---------+  
| Resolved|  
\+----+----+  
     |  
     v  
\+---------+  
| Closed  |  
\+---------+  
Priority: Must Have

21.5 Support History  
The system shall maintain the history of support requests.  
History may include:  
Ticket ID  
Requester  
Creation date  
Category  
Priority  
Status  
Assigned support user  
Messages  
Status changes  
Resolution  
Closing date  
Users shall only access support history authorized for them.  
Priority: Must Have

21.6 Customer Communication  
The system shall support communication between authorized users and support personnel.  
Communication may include:  
Ticket messages  
Support responses  
Requests for additional information  
Resolution messages  
Support notifications  
Messages shall be associated with the relevant support request.  
The system shall prevent unauthorized access to customer support communications.  
Priority: Must Have

22\. External Integrations  
22.1 Integration Architecture  
ClinicOS shall use a controlled integration architecture for communication with external services.  
External integrations may include:  
Payment providers  
Email services  
Messaging services  
AI providers  
Future third-party services  
Basic architecture:  
\+-------------+  
|  ClinicOS   |  
\+------+------+  
       |  
       v  
\+-------------+  
| Integration |  
|    Layer    |  
\+------+------+  
       |  
   \+---+---+---+  
   |   |   |   |  
   v   v   v   v  
Payment Email AI Messaging  
Provider Service Provider Service  
The integration layer shall:  
Isolate external services from core business logic where appropriate.  
Manage authentication credentials securely.  
Handle external service failures.  
Validate external responses.  
Prevent unauthorized data transmission.  
Support replacement or addition of providers.  
Priority: Must Have

22.2 Payment Providers  
ClinicOS shall support integration with payment providers for subscription and billing operations.  
Supported operations may include:  
Payment processing  
Payment status verification  
Recurring billing  
Refund processing where supported  
Payment notifications  
Invoice-related information  
Payment credentials and sensitive payment information shall be handled according to the provider's supported security mechanisms.  
The system shall not expose sensitive payment credentials to unauthorized users.  
Priority: Must Have

22.3 Email Services  
ClinicOS should support integration with an external email service.  
Possible uses include:  
Account verification  
Password recovery  
Appointment notifications  
Financial notifications  
Support notifications  
Administrative messages  
System alerts  
Email delivery status should be tracked where supported.  
If the external email service fails, the system should record the failure and apply appropriate retry or error-handling rules.  
Priority: Must Have

22.4 Messaging Services  
ClinicOS may support external messaging services for future communication workflows.  
Possible uses include:  
Appointment reminders  
Confirmation messages  
Support communication  
Administrative notifications  
Messaging integrations shall:  
Require appropriate authorization.  
Respect user preferences.  
Protect sensitive information.  
Follow applicable privacy requirements.  
Handle delivery failures.  
Priority: Future

22.5 AI Providers  
ClinicOS may integrate with external AI providers to support AI functionality.  
Possible uses include:  
AI Assistant  
Summarization  
Natural language processing  
Intelligent search  
Content generation  
The integration shall:  
Protect provider credentials.  
Apply access-control rules before sending data.  
Minimize unnecessary data transmission.  
Handle provider failures.  
Validate responses where appropriate.  
Prevent unauthorized access to clinic information.  
\+-------------+  
|   ClinicOS  |  
\+------+------+  
       |  
       v  
\+-------------+  
| AI Service  |  
| Integration |  
\+------+------+  
       |  
       v  
\+-------------+  
| AI Provider |  
\+-------------+  
Sensitive information shall only be transmitted when necessary and authorized for the specific feature.  
Priority: Must Have

22.6 Future Integrations  
The architecture should support future integrations without requiring major changes to the core application.  
Potential integrations may include:  
Calendar services  
Accounting systems  
Healthcare services  
Communication platforms  
Storage providers  
Analytics platforms  
Identity providers  
Other healthcare software  
Future integrations shall follow the same security and authorization principles.  
Priority: Future

22.7 API Access  
ClinicOS should provide controlled API access for supported integrations.  
The API may provide access to:  
Patients  
Appointments  
Professionals  
Services  
Financial information  
Reports  
Other supported resources  
API access shall include:  
Authentication  
Authorization  
Request validation  
Rate limiting where appropriate  
Error handling  
Activity logging  
Data isolation  
Example:  
\+-------------+  
| External App|  
\+------+------+  
       |  
       v  
\+-------------+  
| ClinicOS API|  
\+------+------+  
       |  
       v  
\+-------------+  
| Authentication|  
\+------+------+  
       |  
       v  
\+-------------+  
| Authorization|  
\+------+------+  
       |  
       v  
\+-------------+  
| ClinicOS Data|  
\+-------------+  
API access shall not bypass the permissions applied to normal ClinicOS users.  
Priority: Future

23\. Functional Requirements Specification  
23.1 Requirement Format  
Functional requirements define what ClinicOS shall do and how the system shall behave under defined conditions.  
Each requirement should contain the following information:  
Requirement ID  
Requirement Title  
Description  
Actor  
Preconditions  
Main Behavior  
Business Rules  
Dependencies  
Priority  
Acceptance Criteria  
Exception Scenarios  
The standard structure is:  
Requirement  
    |  
    \+-- ID  
    \+-- Title  
    \+-- Description  
    \+-- Actor  
    \+-- Preconditions  
    \+-- Main Behavior  
    \+-- Business Rules  
    \+-- Dependencies  
    \+-- Priority  
    \+-- Acceptance Criteria  
    \+-- Exception Scenarios  
Requirements shall describe observable system behavior and shall be sufficiently clear to support implementation and testing.

23.2 Requirement IDs  
Each functional requirement shall have a unique identifier using the following format:  
FR-\[MODULE\]-\[NUMBER\]  
Examples:  
FR-AUTH-001  
FR-CLINIC-001  
FR-USER-001  
FR-PATIENT-001  
FR-APPT-001  
FR-CONSULT-001  
FR-MEDICAL-001  
FR-FIN-001  
FR-AI-001  
The identifier rules are:  
IDs shall be unique.  
IDs shall identify the functional module.  
Numbers shall normally be sequential.  
Existing IDs shall not be reused for a different requirement.  
Removed requirements shall remain traceable in historical documentation.  
New requirements shall receive new identifiers.  
Requirement IDs shall be referenced in tests, implementation tasks, and documentation when applicable.  
Main module prefixes include:  
AUTH — Authentication and Access Control  
CLINIC — Clinic Management  
USER — User Management  
PATIENT — Patient Management  
APPT — Appointment Management  
CONSULT — Consultation Management  
MEDICAL — Medical Records  
FIN — Financial Management  
DASH — Dashboard and Analytics  
SEARCH — Search  
NOTIF — Notifications  
AUTO — Automation  
AI — Artificial Intelligence  
REPORT — Reports  
AUDIT — Audit and Activity History  
DATA — Data Management  
BILL — Subscription and Billing  
SUPPORT — Customer Support  
INT — External Integrations

23.3 Priority Levels  
Each requirement shall have a defined priority.  
Must Have  
Requirements that are essential for the system to operate correctly or for the MVP to provide its core functionality.  
Examples:  
User authentication  
Access control  
Patient registration  
Appointment management  
Consultation records  
Medical records  
Core financial management  
Should Have  
Requirements that provide important operational value but are not essential for the minimum viable product.  
Examples:  
Advanced filters  
Additional reports  
Advanced notification preferences  
Extended dashboard customization  
Could Have  
Requirements that provide additional convenience or optimization when resources and development capacity allow.  
Examples:  
Additional automation options  
Advanced visualization  
Additional integrations  
Optional productivity features  
Future  
Requirements intentionally planned for later product phases.  
Examples:  
Telemedicine  
Mobile applications  
WhatsApp integration  
Digital signatures  
Advanced AI  
Public API platform  
Priority model:  
Must Have  
    |  
    \+-- Required for core operation  
    |  
Should Have  
    |  
    \+-- Important enhancement  
    |  
Could Have  
    |  
    \+-- Optional improvement  
    |  
Future  
    |  
    \+-- Planned for later phases

23.4 Acceptance Criteria  
Acceptance criteria define the conditions that must be satisfied for a requirement to be considered complete.  
Acceptance criteria shall be:  
Clear  
Specific  
Testable  
Observable  
Relevant  
Consistent with the requirement  
Independent where possible  
Example:  
Requirement:  
FR-PATIENT-001 — Patient Registration  
Acceptance Criteria:  
1\. An authorized user can create a patient.  
2\. Required fields are validated.  
3\. Invalid information is rejected.  
4\. A unique patient record is created.  
5\. The action is recorded in the activity history.  
6\. Unauthorized users cannot create patients.  
Acceptance criteria shall be used as a basis for functional testing and requirement validation.

23.5 Dependencies  
Requirements may depend on other modules, services, or system capabilities.  
Typical dependency flow:  
Authentication  
      |  
      v  
Access Control  
      |  
      v  
Clinic Management  
      |  
      \+------\> User Management  
      |  
      v  
Patient Management  
      |  
      v  
Appointment Management  
      |  
      v  
Consultation Management  
      |  
      v  
Medical Records  
      |  
      \+------\> Dashboard  
      \+------\> Search  
      \+------\> Reports  
      \+------\> AI  
Common dependencies include:  
Authentication before protected functionality  
Access control before sensitive data access  
Clinic configuration before operational use  
User management before assigning professionals and staff  
Patient management before appointments and consultations  
Appointments before consultation workflows  
Consultation data before related medical records  
Financial records before financial dashboards and reports  
Subscription status before paid functionality  
Notification services before automated notifications  
AI authorization before AI access  
Dependencies shall be documented when they affect implementation, testing, or system behavior.

23.6 Business Rules  
Business rules define operational constraints that must be respected by ClinicOS.  
Core business rules include:  
Users shall only access information authorized for their role and clinic.  
Clinic data shall remain logically isolated between tenants.  
Sensitive patient information shall require appropriate permissions.  
Appointment conflicts shall be detected according to configured scheduling rules.  
Financial information shall only be accessible to authorized users.  
Medical records shall be protected from unauthorized modification or access.  
AI features shall follow the same access-control principles as the underlying data.  
AI shall not bypass role or permission restrictions.  
AI-generated information shall not replace professional clinical judgment.  
Subscription plans shall determine access to plan-specific features and limits.  
Automated actions shall execute only when their configured conditions are satisfied.  
Data deletion shall follow authorization, integrity, retention, and applicable privacy requirements.  
Sensitive activities shall be recorded in the audit history where appropriate.  
Reports shall only include data the requesting user is authorized to access.  
External integrations shall not receive unauthorized clinic or patient information.  
System failures shall not silently create inconsistent or unauthorized records.  
Business rules shall be applied consistently across the relevant modules.

23.7 Exception Scenarios  
ClinicOS shall handle expected and unexpected exception scenarios without compromising data integrity.  
Common scenarios include:  
Invalid input  
Missing required information  
Duplicate records  
Unauthorized access  
Expired session  
Appointment conflict  
Invalid status transition  
Payment failure  
External service failure  
Notification delivery failure  
Automation failure  
AI service failure  
Network failure  
Database failure  
Invalid import data  
Insufficient subscription permissions  
Invalid authentication  
Unsupported operation  
The system should:  
Detect the exception.  
Prevent invalid operations when possible.  
Display a clear and understandable message.  
Preserve data integrity.  
Record the event when appropriate.  
Avoid exposing sensitive technical information.  
Allow retry or recovery when supported.  
Prevent duplicate or unintended operations.

24\. MVP Functional Requirements  
The MVP shall provide the minimum functional foundation required for a small clinic to operate its primary administrative and clinical workflows through ClinicOS.

The MVP focuses on:

Authentication  
      |  
      v  
Clinic \+ Users  
      |  
      v  
Patients  
      |  
      v  
Appointments  
      |  
      v  
Consultations  
      |  
      v  
Medical Records  
      |  
      \+------\> Dashboard  
      |  
      \+------\> Financial  
      |  
      \+------\> Search  
      |  
      \+------\> Notifications  
      |  
      \+------\> AI  
      |  
      \+------\> Automation  
MVP requirements shall prioritize simplicity, security, usability, data integrity, and operational value.

24.1 MVP Authentication  
The MVP shall provide secure authentication and basic access control.  
The system shall:  
Allow authorized users to register or be invited.  
Allow users to log in securely.  
Validate credentials.  
Support logout.  
Support password recovery.  
Support password changes.  
Manage authenticated sessions.  
Expire invalid or inactive sessions according to configured security policies.  
Enforce role-based access control.  
Prevent unauthorized access to protected resources.  
Protect authentication credentials.  
Record relevant authentication events.  
MVP actors include:  
Clinic Owner  
Clinic Administrator  
Healthcare Professional  
Receptionist  
Financial Staff  
Clinic Manager  
Priority: Must Have

24.2 MVP User Management  
The MVP shall allow authorized clinic users to be managed.  
The system shall support:  
User creation  
User invitation  
User profile management  
Role assignment  
Permission enforcement  
User activation  
User deactivation  
User status viewing  
User preference management  
Basic user activity tracking  
The Clinic Owner or authorized administrator shall be able to manage clinic users according to permissions.  
Deactivated users shall not be able to access protected clinic functionality.  
Priority: Must Have

24.3 MVP Clinic Management  
The MVP shall allow the clinic to configure essential operational information.  
The system shall support:  
Clinic registration  
Clinic name  
Contact information  
Business information  
Address  
Operating hours  
Departments  
Specialties  
Services  
Locations where applicable  
Basic clinic settings  
Clinic status  
The clinic configuration shall provide the foundation for appointment, patient, consultation, and financial workflows.  
Clinic data shall remain isolated from other clinics.  
Priority: Must Have

24.4 MVP Patient Management  
The MVP shall provide centralized patient management.  
The system shall support:  
Patient registration  
Patient identification  
Contact information  
Date of birth  
Emergency contacts  
Patient status  
Patient profile  
Patient history  
Patient search  
Patient timeline  
Authorized patient data updates  
The system shall validate required information and prevent unauthorized access.  
Patient information shall be available to other modules only according to the user's permissions.  
Priority: Must Have

24.5 MVP Appointment Management  
The MVP shall provide appointment scheduling and management.  
The system shall support:  
Appointment creation  
Appointment scheduling  
Appointment rescheduling  
Appointment cancellation  
Appointment confirmation  
Appointment status  
Calendar visualization  
Professional availability  
Appointment conflict detection  
Appointment history  
Appointment statuses may include:  
Scheduled  
Confirmed  
Completed  
Cancelled  
No-show  
Rescheduled  
The system shall prevent invalid scheduling conflicts according to configured rules.  
Priority: Must Have

24.6 MVP Consultation Management  
The MVP shall support the basic consultation workflow.  
The system shall allow authorized healthcare professionals to:  
View scheduled consultations.  
Access the required patient information.  
Start a consultation.  
Record consultation information.  
Add relevant observations and notes.  
Associate the consultation with the patient.  
Associate the consultation with the appointment.  
Complete the consultation.  
Review consultation history when authorized.  
Consultation information shall only be accessible to authorized users.  
The system shall maintain a relationship between:  
Patient  
   |  
   v  
Appointment  
   |  
   v  
Consultation  
   |  
   v  
Medical Record

Priority: Must Have

24.7 MVP Medical Records  
The MVP shall provide secure medical record management.  
The system shall support:  
Creation of medical records  
Updating authorized records  
Viewing authorized records  
Consultation history  
Record categorization  
Record timestamps  
Professional association  
Patient association  
Activity history  
Controlled record deletion where permitted  
Medical records shall be protected using role-based permissions.  
The system shall maintain traceability for relevant record access and changes.  
Priority: Must Have

24.8 MVP Dashboard  
The MVP shall provide role-based dashboards with essential operational information.  
The dashboard shall support relevant indicators such as:  
Today's appointments  
Upcoming appointments  
Completed appointments  
Cancelled appointments  
No-shows  
Patient activity  
Consultation activity  
Revenue  
Pending payments  
Overdue payments  
Operational alerts  
Dashboard information shall be filtered according to user permissions.  
Example:  
\+--------------------------------------+  
|             ClinicOS                 |  
\+--------------------------------------+  
| Appointments | Patients | Revenue    |  
|      24      |   486    | R\$ 18,450 |  
\+--------------------------------------+  
| Upcoming Appointments                |  
| 09:00  Patient A                     |  
| 10:30  Patient B                     |  
| 14:00  Patient C                     |  
\+--------------------------------------+  
| Alerts                               |  
| 3 pending payments                   |  
| 1 appointment cancellation           |  
\+--------------------------------------+  
Priority: Must Have

24.9 MVP Financial Management  
The MVP shall provide basic financial management.  
The system shall support:  
Financial transaction creation  
Revenue records  
Expense records  
Payment registration  
Payment status  
Pending payments  
Overdue payments  
Payment methods  
Financial history  
Basic financial summaries  
Financial search  
Basic financial reports  
Payment statuses shall include, where applicable:  
Pending  
Paid  
Failed  
Overdue  
Refunded  
Cancelled  
Financial information shall only be available to authorized users.  
Priority: Must Have

24.10 MVP Search  
The MVP shall provide centralized search for essential clinic information.  
The system shall support search for:  
Patients  
Appointments  
Professionals  
Services  
Consultations  
Medical records  
Financial records  
Supported search criteria may include:  
Name  
Identifier  
Date  
Status  
Professional  
Service  
Patient  
Transaction identifier  
Search results shall respect user permissions and clinic data isolation.  
The system shall not expose restricted information through search.  
Priority: Must Have

24.11 MVP Notifications  
The MVP shall provide essential internal notifications.  
The system shall support notifications for:  
Appointment creation  
Appointment confirmation  
Appointment changes  
Appointment cancellation  
Upcoming appointments  
No-shows  
Payment events  
Pending payments  
Overdue payments  
Assigned tasks  
Security events  
Important system events  
Users shall be able to view notification history and mark notifications as read.  
Security-related notifications shall remain enabled when required by the system's security policies.  
Priority: Must Have

24.12 MVP AI  
The MVP shall provide limited AI-assisted functionality.  
The initial AI capabilities may include:  
Natural language search  
Administrative assistance  
Information summarization  
Basic generated text  
Task assistance  
Basic workflow guidance  
Example:  
User:  
"Show today's appointments that are still pending."  
        |  
        v  
     AI Layer  
        |  
        v  
Permission Check  
        |  
        v  
Clinic Data  
        |  
        v

Filtered Results  
The AI shall:  
Respect user permissions.  
Respect clinic data isolation.  
Avoid unauthorized information retrieval.  
Clearly distinguish generated information when appropriate.  
Avoid autonomous clinical decisions.  
Not replace healthcare professional judgment.  
Require human review for sensitive or consequential information.  
Handle unavailable or incomplete information transparently.  
The MVP AI shall be treated as an assistant rather than an autonomous decision-maker.  
Priority: Should Have / MVP

24.13 MVP Automation  
The MVP shall provide basic workflow automation.  
Supported automation may include:  
Appointment reminders  
Appointment status notifications  
Payment reminders  
Overdue payment alerts  
Basic task creation  
Basic task assignment  
Scheduled administrative reminders  
Automation shall follow:  
Trigger  
   |  
   v  
Conditions  
   |  
   v  
Action  
   |  
   v  
Result  
   |  
   v  
Activity History  
The system shall:  
Validate automation conditions.  
Execute authorized actions.  
Record execution results.  
Detect failures.  
Prevent unintended repeated execution.  
Provide basic retry or recovery where supported.  
Respect user and clinic permissions.  
Priority: Should Have / MVP

# 25\. Future Functional Requirements

Future functional requirements define capabilities planned for later versions of ClinicOS. These features are outside the initial MVP but provide a roadmap for product expansion.

Future development shall consider:

* Customer demand  
* Business value  
* Technical feasibility  
* Security  
* Privacy  
* Scalability  
* Regulatory and contractual requirements where applicable  
* Infrastructure maturity  
* Operational complexity  
* Maintenance cost

Future functionality shall integrate with the existing ClinicOS architecture without compromising the security, performance, or reliability of the core platform.

---

## 25.1 Telemedicine

ClinicOS may support telemedicine workflows in a future release.

Potential functionality includes:

* Online consultation scheduling  
* Virtual consultation rooms  
* Video consultations  
* Audio consultations  
* Patient access links  
* Professional access controls  
* Consultation status  
* Session notifications  
* Consultation history  
* Integration with external telemedicine providers  
* Association of virtual consultations with appointments  
* Association of consultation information with authorized medical records

Expected workflow:

Appointment  
    |  
    v  
Telemedicine Session  
    |  
    v  
Patient \+ Professional  
    |  
    v  
Consultation  
    |  
    v  
Medical Record

The system should:

* Verify that the patient and professional are authorized.  
* Generate or retrieve a secure session link.  
* Restrict session access to authorized participants.  
* Record relevant session events.  
* Handle session failures.  
* Preserve the relationship between appointment and consultation.  
* Respect applicable privacy and security requirements.

Telemedicine functionality shall not introduce unauthorized access to medical information.

Priority: Future

---

## 25.2 Mobile Application

ClinicOS may provide a mobile application for authorized users.

Potential functionality includes:

* Secure authentication  
* Dashboard  
* Appointment management  
* Calendar  
* Patient access  
* Consultation support  
* Notifications  
* Tasks  
* Financial summaries  
* AI assistant  
* User profile management  
* Basic clinic information

The mobile application should use the same core authorization model as the web application.

Expected architecture:

Mobile Application  
        |  
        v  
   API / Backend  
        |  
        v  
Authentication  
        |  
        v  
Authorization  
        |  
        v  
ClinicOS Services  
        |  
        v  
     Database

The system shall:

* Authenticate mobile users securely.  
* Apply role-based permissions.  
* Protect sensitive information.  
* Maintain clinic data isolation.  
* Synchronize relevant information with the main platform.  
* Handle connectivity failures.  
* Prevent unauthorized local or remote access.  
* Support secure application updates.

Priority: Future

---

## 25.3 WhatsApp Integration

ClinicOS may integrate with WhatsApp through an authorized messaging provider.

Potential functionality includes:

* Appointment reminders  
* Appointment confirmations  
* Cancellation notifications  
* Rescheduling communication  
* Payment reminders  
* Administrative messages  
* Support communication  
* Automated notifications

Expected workflow:

ClinicOS Event  
      |  
      v  
Notification Rule  
      |  
      v  
Messaging Provider  
      |  
      v  
WhatsApp  
      |  
      v  
Patient / User

The integration should support:

* Message templates where required  
* Delivery status  
* Failure status  
* Retry handling  
* Communication preferences  
* User consent where applicable  
* Message history  
* Notification configuration

The system shall:

* Authenticate requests to the messaging provider.  
* Protect provider credentials.  
* Prevent unauthorized messages.  
* Respect user communication preferences.  
* Avoid sending sensitive information unnecessarily.  
* Record relevant delivery events.  
* Handle provider failures without corrupting ClinicOS data.

Priority: Future

---

## 25.4 Digital Signatures

ClinicOS may provide digital signature functionality for supported documents and workflows.

Potential functionality includes:

* Document preparation  
* Signature requests  
* Signer identification  
* Signature status  
* Signature notifications  
* Completed document storage  
* Signature history  
* Document verification information  
* Audit trail

Expected workflow:

Document  
    |  
    v  
Signature Request  
    |  
    v  
Signer Identification  
    |  
    v  
Signature  
    |  
    v  
Completed Document  
    |  
    v  
Audit History

The system should:

* Identify the document being signed.  
* Identify the intended signer.  
* Track signature status.  
* Prevent unauthorized signature actions.  
* Preserve document integrity.  
* Store relevant signature information.  
* Record significant signature events.

Implementation shall consider applicable legal, identity, security, and document-integrity requirements.

Priority: Future

---

## 25.5 Advanced AI

Future versions of ClinicOS may provide advanced AI capabilities beyond the MVP.

Potential functionality includes:

* Advanced natural language search  
* Context-aware AI assistance  
* Advanced information summarization  
* Document analysis  
* Intelligent administrative workflows  
* AI-generated operational reports  
* Personalized operational insights  
* Advanced recommendations  
* Workflow optimization  
* Multi-step AI task execution  
* Context-aware task assistance

Potential workflow:

User Request  
     |  
     v  
AI Understanding  
     |  
     v  
Permission Check  
     |  
     v  
Relevant Data  
     |  
     v  
AI Processing  
     |  
     v  
Result / Suggestion  
     |  
     v  
Human Review

Advanced AI shall:

* Respect user permissions.  
* Respect clinic data isolation.  
* Minimize unnecessary sensitive-data processing.  
* Clearly distinguish generated content when appropriate.  
* Avoid presenting uncertain information as confirmed fact.  
* Maintain human oversight for sensitive operations.  
* Prevent unauthorized changes.  
* Record relevant AI activity.  
* Handle AI provider failures safely.

AI shall not independently diagnose patients, replace healthcare professionals, or make autonomous clinical decisions.

Priority: Future

---

## 25.6 Advanced Automation

ClinicOS may provide an advanced workflow automation engine.

Potential functionality includes:

* Multi-step workflows  
* Conditional branching  
* Scheduled workflows  
* Event-based workflows  
* Cross-module automation  
* Recurring tasks  
* Automated follow-ups  
* Notification workflows  
* Workflow templates  
* Automation analytics  
* Retry policies  
* Failure recovery

Example:

Event  
  |  
  v  
Condition A  
  |  
  \+---- No \----\> End  
  |  
 Yes  
  |  
  v  
Action A  
  |  
  v  
Condition B  
  |  
  \+---- No \----\> Action C  
  |  
 Yes  
  |  
  v  
Action B  
  |  
  v  
Audit Log

The automation engine shall:

* Validate configured rules.  
* Validate user permissions.  
* Execute only authorized actions.  
* Prevent conflicting workflows.  
* Avoid unintended repeated execution.  
* Record execution results.  
* Detect failures.  
* Support controlled retries.  
* Provide failure information.  
* Allow authorized users to enable, disable, or modify automations.

Critical automated actions should require appropriate safeguards before execution.

Priority: Future

---

## 25.7 Multi-Location Management

ClinicOS may support organizations operating multiple physical clinic locations.

Potential functionality includes:

* Multiple locations under one organization  
* Location-specific users  
* Location-specific professionals  
* Location-specific services  
* Location-specific schedules  
* Location-specific appointments  
* Location-specific financial information  
* Location-specific dashboards  
* Consolidated dashboards  
* Consolidated reports  
* Cross-location search  
* Location-based permissions

Potential organizational structure:

Organization  
    |  
    \+---- Location A  
    |       |  
    |       \+-- Users  
    |       \+-- Patients  
    |       \+-- Appointments  
    |       \+-- Financial Data  
    |  
    \+---- Location B  
    |       |  
    |       \+-- Users  
    |       \+-- Patients  
    |       \+-- Appointments  
    |       \+-- Financial Data  
    |  
    \+---- Consolidated View

The system shall:

* Associate records with the appropriate location.  
* Restrict location-specific information according to permissions.  
* Support users with access to one or multiple locations.  
* Prevent unauthorized cross-location access.  
* Support consolidated reporting for authorized users.  
* Maintain organization-level configuration where applicable.  
* Preserve auditability of location-specific actions.

Priority: Future

---

## 25.8 API Platform

ClinicOS may provide a public or partner API platform in a future phase.

Potential API resources include:

* Organizations  
* Clinics  
* Locations  
* Users  
* Professionals  
* Patients  
* Appointments  
* Consultations  
* Medical records  
* Services  
* Financial records  
* Notifications  
* Tasks  
* Reports

Potential API capabilities include:

* Authentication  
* Authorization  
* Resource management  
* Data retrieval  
* Data creation  
* Data updates  
* Controlled deletion  
* Filtering  
* Pagination  
* Versioning  
* Rate limiting  
* Error handling  
* Monitoring  
* Logging

Expected architecture:

External Application  
        |  
        v  
     API Layer  
        |  
        v  
Authentication  
        |  
        v  
Authorization  
        |  
        v  
Business Logic  
        |  
        v  
ClinicOS Services  
        |  
        v  
     Database

The API shall:

* Require authentication.  
* Validate incoming requests.  
* Enforce authorization.  
* Apply clinic and location isolation.  
* Apply rate limits.  
* Return controlled error responses.  
* Protect sensitive information.  
* Record relevant API activity.  
* Support API versioning.  
* Prevent API clients from bypassing application permissions.

The API platform should be introduced only when ClinicOS has sufficient security, documentation, scalability, and operational maturity.

Priority: Future

---

# 26\. Requirement Traceability

Requirement traceability ensures that business objectives, user needs, functional requirements, implementation, and testing remain connected throughout the product lifecycle.

The traceability chain is:

Business Requirements  
        |  
        v  
User Requirements  
        |  
        v  
Functional Requirements  
        |  
        v  
Use Cases / User Stories  
        |  
        v  
Acceptance Criteria  
        |  
        v  
Test Cases  
        |  
        v  
Test Results

Traceability shall help identify missing requirements, incomplete implementation, untested functionality, and changes that may affect other parts of the system.

---

## 26.1 Business Requirements

Business requirements describe the primary business objectives that ClinicOS must support.

Core business requirements include:

* Simplify clinic management.  
* Reduce administrative complexity.  
* Centralize clinic information.  
* Improve appointment organization.  
* Improve patient information management.  
* Support efficient consultation workflows.  
* Provide secure medical record management.  
* Support basic financial management.  
* Reduce repetitive administrative work.  
* Provide useful operational visibility.  
* Protect sensitive information.  
* Provide a scalable SaaS foundation.  
* Support future automation and AI capabilities.

Business requirements should be assigned identifiers when formally documented.

Example:

BR-001  
Reduce administrative complexity.

BR-002  
Centralize clinic information.

BR-003  
Improve appointment management.

BR-004  
Protect sensitive clinic and patient information.

Each business requirement should be traceable to one or more functional requirements.

---

## 26.2 User Requirements

User requirements describe what users need to accomplish through ClinicOS.

Examples include:

### Clinic Owner

* Manage the clinic.  
* Manage users.  
* Monitor operational performance.  
* Monitor financial performance.  
* Control access to sensitive information.

### Healthcare Professional

* View scheduled appointments.  
* Access authorized patient information.  
* Conduct consultations.  
* Maintain authorized medical records.

### Receptionist

* Register patients.  
* Schedule appointments.  
* Confirm appointments.  
* Reschedule appointments.  
* Manage cancellations.

### Financial Staff

* Record payments.  
* Manage financial transactions.  
* Monitor pending and overdue payments.  
* Generate financial information.

### Clinic Manager

* Monitor operations.  
* Review performance indicators.  
* Manage operational activities.

User requirements may use identifiers such as:

UR-001  
UR-002  
UR-003  
...

Each user requirement should be mapped to the functional requirements that support it.

---

## 26.3 Functional Requirements

Functional requirements describe the system capabilities that implement business and user needs.

Examples:

BR-003  
   |  
   v  
UR-005  
   |  
   \+----\> FR-APPT-001  
   \+----\> FR-APPT-002  
   \+----\> FR-APPT-003  
   \+----\> FR-APPT-004

Functional requirements shall:

* Have unique IDs.  
* Have defined priorities.  
* Have acceptance criteria.  
* Have identified dependencies where applicable.  
* Be testable.  
* Be traceable to relevant business or user requirements.

A functional requirement may support multiple user requirements, and a user requirement may depend on multiple functional requirements.

---

## 26.4 Use Cases

Use cases describe interactions between actors and ClinicOS.

Core use cases include:

* Register user  
* Log in  
* Configure clinic  
* Create user  
* Register patient  
* Search patient  
* Schedule appointment  
* Reschedule appointment  
* Cancel appointment  
* Confirm appointment  
* Start consultation  
* Record consultation  
* Access medical record  
* Register payment  
* View dashboard  
* Search clinic information  
* Receive notification  
* Use AI assistant  
* Execute automation

Example:

Actor  
  |  
  v  
Use Case  
  |  
  \+----\> Preconditions  
  |  
  \+----\> Main Flow  
  |  
  \+----\> Alternative Flow  
  |  
  \+----\> Exceptions  
  |  
  \+----\> Result

Each important use case should reference the functional requirements necessary to support it.

---

## 26.5 User Stories

User stories may be used to translate requirements into implementation-ready user needs.

Standard format:

As a \[user\],  
I want to \[action\],  
so that \[benefit\].

Examples:

### Appointment

As a receptionist,  
I want to schedule an appointment,  
so that the patient's visit is organized.

### Patient Management

As a receptionist,  
I want to register a patient,  
so that the clinic has the patient's basic information.

### Medical Records

As a healthcare professional,  
I want to access an authorized patient's medical history,  
so that I can review relevant information during a consultation.

### Financial Management

As a financial staff member,  
I want to register a payment,  
so that the clinic's financial information remains accurate.

User stories should be linked to one or more functional requirements.

---

## 26.6 Acceptance Criteria

Acceptance criteria provide the validation layer between requirements and implementation.

Example:

Requirement:  
FR-APPT-001 — Appointment Creation

Acceptance Criteria:

1\. An authorized user can create an appointment.  
2\. A patient must be selected.  
3\. A professional must be selected.  
4\. A valid date and time must be provided.  
5\. Required information must be validated.  
6\. Conflicts must be detected.  
7\. A valid appointment is stored.  
8\. The action is recorded when required.

Acceptance criteria shall be sufficiently specific to allow objective testing.

The relationship should be:

Requirement  
    |  
    v  
Acceptance Criteria  
    |  
    v  
Test Case  
    |  
    v  
Pass / Fail

---

## 26.7 Test Coverage

Every critical functional requirement should have corresponding test coverage.

Test coverage may include:

* Unit tests  
* Integration tests  
* API tests  
* Functional tests  
* End-to-end tests  
* Security tests  
* Permission tests  
* Data validation tests  
* Regression tests  
* User acceptance tests

Example:

FR-PATIENT-001  
      |  
      \+---- Unit Test  
      |  
      \+---- Integration Test  
      |  
      \+---- Functional Test  
      |  
      \+---- Permission Test  
      |  
      \+---- Acceptance Test

Test coverage should verify:

* Expected behavior  
* Invalid input  
* Authorization  
* Permissions  
* Error handling  
* Data integrity  
* Relevant business rules  
* Important dependencies

Critical security and data-protection requirements should receive appropriate test coverage before release.

---

# 27\. Functional Requirements Summary

This section summarizes the main functional requirements defined throughout the specification.

---

## 27.1 MVP Summary

The MVP shall provide the core capabilities required for a small clinic to operate its primary workflows.

\+--------------------------------------+  
|             ClinicOS MVP             |  
\+--------------------------------------+  
| Authentication                       |  
| User Management                      |  
| Clinic Management                    |  
| Patient Management                   |  
| Appointment Management               |  
| Consultation Management              |  
| Medical Records                      |  
| Dashboard                            |  
| Financial Management                 |  
| Search                               |  
| Notifications                        |  
| AI Assistance                        |  
| Basic Automation                     |  
\+--------------------------------------+

The MVP shall establish the foundation for future capabilities without requiring unnecessary complexity in the initial release.

---

## 27.2 Priority Summary

The main priority distribution is:

Must Have  
  |  
  \+-- Authentication  
  \+-- Access Control  
  \+-- User Management  
  \+-- Clinic Management  
  \+-- Patient Management  
  \+-- Appointment Management  
  \+-- Consultation Management  
  \+-- Medical Records  
  \+-- Dashboard  
  \+-- Financial Management  
  \+-- Core Search  
  \+-- Core Notifications  
  |  
Should Have  
  |  
  \+-- MVP AI Assistance  
  \+-- Basic Automation  
  \+-- Advanced Search  
  \+-- Additional Reports  
  |  
Could Have  
  |  
  \+-- Additional productivity features  
  \+-- Additional visualization  
  \+-- Additional automation options  
  |  
Future  
  |  
  \+-- Telemedicine  
  \+-- Mobile Application  
  \+-- WhatsApp Integration  
  \+-- Digital Signatures  
  \+-- Advanced AI  
  \+-- Advanced Automation  
  \+-- Multi-Location  
  \+-- API Platform

Priorities may change as product validation and implementation progress.

---

## 27.3 Critical Requirements

The following areas are considered critical to the operation and integrity of ClinicOS:

### Authentication and Authorization

The system must prevent unauthorized access to protected functionality and data.

### Data Isolation

Clinic data must remain logically isolated between tenants.

### Patient Data Protection

Sensitive patient information must be accessible only to authorized users.

### Medical Records

Medical information must be protected and traceable.

### Appointment Integrity

Appointment creation and modification must preserve scheduling consistency.

### Financial Integrity

Financial records must remain accurate and protected from unauthorized modification.

### Auditability

Important actions should be traceable through activity and audit history.

### AI Safety

AI functionality must respect permissions and must not replace professional clinical judgment.

### Data Integrity

System operations must avoid inconsistent or corrupted records.

### Error Handling

Failures must be handled without silently creating invalid data or unauthorized actions.

---

## 27.4 Dependencies

The principal system dependencies are:

Authentication  
      |  
      v  
Authorization  
      |  
      v  
Clinic Configuration  
      |  
      v  
User Management  
      |  
      v  
Patient Management  
      |  
      v  
Appointment Management  
      |  
      v  
Consultation Management  
      |  
      v  
Medical Records  
      |  
      \+----\> Dashboard  
      \+----\> Search  
      \+----\> Reports  
      \+----\> AI  
      \+----\> Automation  
      \+----\> Notifications

Additional dependencies include:

* Subscription status → feature availability  
* Payment provider → subscription billing  
* Email provider → email notifications  
* Messaging provider → future messaging functionality  
* AI provider → AI functionality  
* Database → core data persistence  
* Authentication service → protected system access  
* Audit system → traceability  
* Notification service → automated notifications

Dependencies shall be reviewed whenever requirements or architecture change.

---

## 27.5 Open Questions

The following questions should be resolved during product discovery, architecture definition, or implementation planning.

### Product

* Which features are mandatory for the first production release?  
* Which user roles should be available in the first version?  
* Which clinic types should be supported initially?  
* Which workflows require the highest level of customization?

### Security and Privacy

* What specific security policies will govern sensitive data?  
* Which retention periods will apply to each data category?  
* Which privacy requirements apply to each processing activity?  
* Which audit events must be retained?

### AI

* Which AI provider or providers will be used?  
* Which AI capabilities belong in the MVP?  
* Which information may be processed by external AI services?  
* Which AI actions require mandatory human confirmation?

### Billing

* Which payment provider will be used?  
* Which billing cycles will be supported?  
* How will failed payments affect feature access?  
* Which invoicing requirements apply?

### Integrations

* Which email provider will be selected?  
* Which messaging provider may support future WhatsApp integration?  
* Which external systems should receive API access first?

### Architecture

* What infrastructure will be used?  
* What database architecture will support multi-tenancy?  
* What backup and recovery strategy will be implemented?  
* What scalability targets should be tested before production?

Open questions shall be tracked and resolved before the affected functionality is considered production-ready.

---

# 28\. Conclusion

## 28.1 Summary

This Functional Requirements Specification defines the functional foundation of ClinicOS as a cloud-based clinic management platform.

The specification covers:

* Authentication and access control  
* Clinic management  
* User management  
* Patient management  
* Appointment management  
* Consultation management  
* Medical records  
* Financial management  
* Dashboards and analytics  
* Search  
* Notifications  
* Automation  
* Artificial intelligence  
* Reports  
* Audit and activity history  
* Data management  
* Subscription and billing  
* Customer support  
* External integrations  
* MVP functionality  
* Future functionality  
* Requirement traceability

The requirements are structured to support a secure, modular, scalable, and maintainable product.

---

## 28.2 Implementation Considerations

Implementation should prioritize:

### Security

Access control, authentication, authorization, sensitive-data protection, and auditability should be implemented as core platform capabilities rather than optional additions.

### Data Integrity

All critical operations should validate input, enforce business rules, and preserve consistent relationships between records.

### Scalability

The architecture should support the transition from a small initial customer base to a larger multi-tenant SaaS platform.

### Maintainability

Modules should remain logically separated and use consistent interfaces, validation rules, and error-handling patterns.

### User Experience

The product should maintain its core principles:

* Simple  
* Fast  
* Clear  
* Consistent  
* Minimal  
* Easy to learn

### AI Governance

AI functionality should remain controlled, permission-aware, transparent, and subject to human oversight for sensitive or consequential operations.

### Observability

Important operations should provide sufficient logging, monitoring, and audit information to support troubleshooting and operational control without unnecessarily exposing sensitive information.

---

## 28.3 Next Steps

The recommended next steps are:

Functional Requirements  
        |  
        v  
Architecture Definition  
        |  
        v  
Database Design  
        |  
        v  
API / Backend Design  
        |  
        v  
Frontend Design  
        |  
        v  
MVP Implementation  
        |  
        v  
Automated Testing  
        |  
        v  
Security Validation  
        |  
        v  
User Acceptance Testing  
        |  
        v  
Production Release  
        |  
        v  
Monitoring \+ Iteration

The implementation process should begin by validating the highest-priority MVP requirements and their dependencies.

The next documentation and development activities should include:

1. Finalize open functional questions.  
2. Validate MVP scope.  
3. Define the technical architecture.  
4. Define the database model.  
5. Define API contracts.  
6. Define authentication and authorization architecture.  
7. Convert functional requirements into development tasks.  
8. Create test cases from acceptance criteria.  
9. Implement the MVP incrementally.  
10. Validate the system with representative clinic workflows.  
11. Perform security and privacy reviews.  
12. Prepare production infrastructure.  
13. Deploy the MVP.  
14. Monitor usage and collect feedback.  
15. Refine future requirements based on validated product needs.

The Functional Requirements Specification should remain a living document and should be updated whenever approved product behavior, business rules, architecture, or scope changes.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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UBw2Z8DhamYcduvWLf9YfPHFF7r40EMP5TeVfivlvffek6V6Jf7vSokZpHKXgq+++kpWc3RT0/64iDiMiDxdUBbRxWHB70G1014vjBgxwq27VwS9bP6Vnal37NjRLGht27a13WwHo1OnTm79+uuvN3Wne3n4E4f60Y0bN05WHY16+LrzHXfcIauOrXZIsWbGofn55JNPiroZUvcwnXPOOaZunHfeeW7/r7/+2m21Taa1WNOBBx4oWt0Oeq4VrLvF22+/3dbDIw4j0ohZjfCiiMPPPvvMnVQuW3cn3muvveaumtb58+fbbn369DH1ww8/XHQTq7fccovbVOzZbjN5EofXXHONGIF8pVvLrrGbCxpe7n1WljgU46NXJ+XY+kcffeT26d27t7sq7sFdLdF0//336+Xq6mqzumnTJrdVvwzVy998841ZbdWqlbjP5nz5AHEYkcZNM4QURRya6SerObY+depUd9a5byXNnj1bTEizbCvPPPOMXRZN7g3dpvLyJA71Y/zvf/9b8JGOGTNm8eLFyhmHOXPm6J/33HPPmWeeaf+EbsiQIdOnTzfLpo9+8aFy/wt6zZo1upt+peK+LLAdtM2bN19yySU33HCDWdXPaXSr3pz++cYbb5jO+ue1115rFrSrrrpq5MiRq1atMqum/8CBA20HTb/YFf81Qrd++eWXur506VK3HrPmx6E+b92DdeGFF5rViy++2NYXLlzojoZqeCbr5blz57qr7vF1b7jffvvZJrdbfiXIvY8iWu2CuGFjEYcRadZRQTFRxOEjjzxSbBa5dXfW6ZdxQf1Hb1q3bl1iQurVP/zhD3bZbTrhhBPcG7pN5eVPHOqf++67b2VlpS3W1taaQdNP882bYLaztvvuu5uFe++9V/889NBDzartY74NR79eOfXUU/XqscceW7CDWd5tt93MwdJRMWrUqP79++tl/fPKK6+0W9ROO+20Dz74wDSde+65esF0MP179OihF/SqOQeC+p3U+Wo3VFVVpX/++te/NpVEND8OzYIeNLusR08vDBs2zHawHnvsMfHCUeVu8vbbb7ur+Td86KGH9K169erlblR0cyv591Diho1FHEakWUcFxUQRhyo3kRYsWCCrDeeeXtYvQWx2mvdwTN3mTf6EDOrj8NlnnzWtgu3m3qq8fIhD/QB/+tOf2mW3fuONN7qrYkE7++yzxU3sgo1D94vd8zvss88+9rMe+kWP/S6ugnercq9dPvvss/ymwHmzNHBe94s+M2fOtPWklCUOa2pqzPItt9xii+Zpgdu5bdu28+fP16+/zarbVCwO+/XrF+TeZTGfl/nud7/rDqB+3mNvZSpua778bk1DHEakWUcFxUQXh/n/3kVfpt3ZNWHCBPOWzpFHHmkqptXtkz8hg/o4XL9+fYm5WqKp+TyJQ3fZvsGYP1z59fzXHHbBxqH7Uiy/g3kNqg+fOH8K3q2hX/qfddZZQT3bx41D29msmiu7XvDhmxzKEod22R0ENw71rMkfB3e5WBwGuRfftknEYf59uq1ukyv/ho1FHEakWUcFxUQUhwcddFD+RNKVqVOniorbTS9fcskloiLuJ2j4ZukLL7zgtlr5Wy8jT+JQsHXRLb/e/Dg0rr32WrNp+8qv4N1qQ4cO1avvv/++aApKxqH5ZViQrjjs0qXLrrvu6o6kG4dmPG1n8wayXQ1KxuH48eNtU2VlpW1yPx1jiBvusssubqvldmsa4jAizToqKCaiOFT1c+lf//qXXn7wwQcLTi1RNKvDhw8v1sFU3DgMGn6yxnYWtyqvxOPw6KOPdt9XVM7j1Qsff/xxwbotNj8O3U9tTJw4seBWxLL7h2tufzcO7ecbRZ80xaFZdStuHN5+++16+ZVXXtHLV199tegZlIzDoP7Qb7/99vk3tKvm06p2dd26dXpZn1Fm9aKLLrJN4k6agDiMSLOOCoqJLg5V/XSyZHOuQ/v27e2q+cCF015gQgZOHCpn5gd5f3dol8su8TjMf3Q77rjjv//9b70wcOBA26pfiNhl9ybNj8PWrVtPmTLFFM3nXETP/OWzzjrLLIuPSumrs1l2P11cUVHh9klfHI4ePdquit8dVldXB/U+//xz/dN+pDYoHod2Nch9QmfatGluk57mttWyrWeccUbBulhtAuIwIs06Kigm0jhMq2TjUPwK1rLFm2++Oaj/3a0tujdpfhxqp59+urlc3nbbbbbnrFmzdOXggw92b2WYdwjNZynF1u3qwoULzeo999zjdmjpcegbPaRHHHGErEaAOIxIgfmP5iMOmyDZOEQiWm4cmq+Cs6sl/g6q7IjDiMR0/LKGOGwC4jCDWm4cqvqX4NbPfvYz2SMaxGFEiMNIlP6mYBTUnK+tQgtVW1srSy3Ne++9J77yJmqXX365LKEciMNIrFixQpawNeZLyCLl/tE6tsp8jChSdXV1soStcb8RAmVEHEYlhksJGot3mRplzJgxshSBGTNmyBJKWr58uSyhHIjDqJx99tmyhOLcj8hHJ7YPO6RDPMO1xx57yBKK++Mf/yhLKJM4TvdsiudSkhrxDFc8W0mNeIYrnq2kBsMVHUY2KqNGjZIlFDd48GBZisDChQtlCcXFM1w1NTWyhOJ4MR0d4jBCLeVfsCZu7NixshQZPuUUUpy/oOrVq5csoZAHHnhAllA+xGGE8v/7BArabrvtZCkyvNcUUpwDxSuekOI8KBnE4EaL03er4h+inj17yhIa6tGjhyxFLP7ToMVhiKLG+EZu0KBBsoREzZs3L4a/cWy5Fi9ePH36dFmN3oYNG2QJ9Wpqat577z1ZRVkRh5F74oknZAn1knrC269fP1lCvfhfGhqVlZWyhHr2f0UhOslcjLImqYu+55Idls6dO8sSlNphhx1kKUatWrWSJSQ9U7KDUY5JslcZD8X58Zli9t13X1nKNh8GpGfPnnyXnossjA0DHSt9Zn/xxReymjFeTe/a2lqv9icpehC8+jbtbbbZRpYyZuPGjZyZMWO442b+TVoGPzVgpvd1110nGzwwb948vW8Z/HzN66+/rh/4n//8Z9nggfvvv1/v26effiobMkA/8I8//lhWETHiMBlr1qzp0aOHPun79OkzMdUOOeQQ/TC7du26evVqOQr+adeund7bk08+WT6MdOnfv79+mPrBysfvperqar23vXr1kg8jRc4888yOHTvqh3nUUUfJx4+4EIdZoWfal19+KasAgBziMCuIQwAogTjMCuIQAEogDrOCOASAEojDrCAOAaAE4jAriEMAKIE4zAriEABKIA6zgjgEgBKIw6wgDgGgBOIwK4hDACiBOMwK4hAASiAOs4I4BIASiMOsIA4BoATiMCuIQwAogTjMCuIQAEogDrOCOASAEojDrCAOAaAE4jAriEMAKIE4zAriEABKIA5D6dChQwAALVB1dbW8oqEQ4jCU4cOH67NKVpGoRYsWcVC8og/HG2+8IatIlD4o55xzjqyiEK4moRCHHiIOfUMceog4DI+rSSjEoYeIQ98Qhx4iDsPjahIKcegh4tA3xKGHiMPwuJqEQhx6iDj0DXHoIeIwPK4moRCHHiIOfUMceog4DI+rSSjEoYeIQ98Qhx4iDsPjahIKcegh4tA3xKGHiMPwuJqEQhx6iDj0DXHoIeIwPK4moRCHHiIOfUMceog4DI+rSSjEoYeIQ98Qhx4iDsPjahIKcegh4tA3xKGHiMPwuJqEQhx6iDj0DXHoIeIwPK4moRCHHiIOfUMceog4DI+rydZts802Qb3Ro0fLZiTBHhHttddek82I1yuvvOIeEdmM5ATEYWicuFvXtm1bO8/r6upkM5Lw7aWXi68fOCK+adOmDQelURijUMz5NGbMGNmA5JiDsmLFCtmAJOgDwWXXN+aIaIsWLZJtyMO5G8oPf/hD5rlv+N2hb7jseojnKOG1sGHasGFDdXW1fcqTbocddtimTZvkEPhnxowZlZWVcu9Tql+/fkuXLpVD4KURI0bIvU+pTp06Pf744/Lx++fpp5/u3r273PuU2n///RcsWCCHwG8tJg4HDx6sh3jNmjWyIe06dOhw1113yaofJk2aFGTviefy5cv1o77wwgtlgx+GDBmid+/DDz+UDWmnH/UNN9wgq36444479FNGWU271atX64NyxhlnyAZftYBrWVVVlSxlzwsvvLDDDjvIanK22WabDz74QFYzZv369ccee6ysJqdXr156l2Q1Y5YtW6ZPTllNjp628+bNk9XsaRGXcd/jMIMvPkoIPPjkyLp16zgoLk9Gw5Pd8IQeDX2iymq8Nm/ezEFx+T8aXu+f/8MXv27duslSvPr16ydLmZf4iZr4DnjosMMOk6V49ezZU5Yyz/MT1d+d83zgEpTgyCS4ac8lODIJbtpzCY5Mgpv2nM8j4+me+TxkPmjbtq0sRY+DUloi45PIRluQRMandevWsgRHIgclDB9365e//KUsIc+uu+4qS1Fq3769LCFPzPM85s21UDGfuocffrgsIY+fF3kfp9Oee+4pS8hzySWXyFJkNm/e/Mgjj8gq8ixbtkyWohTz5lqo+++/X5aidPnll8sS8uy2226y5AHv4nDYsGGyhCJ22mknWYqGV59c91xNTY0sRWPChAmyhCJiO4E7deokSyjivPPOk6WkeReHvP8T3l577SVL0Rg5cqQsoYjYTuDYNpQCsV15q6urZQlFeHgC+7VDdXV1K1eulFUUF8Nf+Pr5Lr+3ZsyYIUvRmDVrliyhuJtuukmWym3OnDmyhOJWrFixZcsWWU2UX3EY25O41Nh5551lqdw8fBLnuenTp8tSucX2lmxqxHAax/bLi9Tw7YIf+SnSKDGcsikTw4jFsImUiWHEYthEysQwYjFsImV8GzHP9saz0fFfDB8iP/XUU2UJJcVwGsewiZQ56aSTZKncYnirJmV8O4092xvPRsd/BxxwgCyV249//GNZQkkxnMYxbCJlLrjgAlkqt8S/Fq7F8e009mxvPBsd//3f//2fLJXbVVddJUsoKYbTOIZNpEwMf5dy/PHHyxJK8u009mxvPBsd/xGHHorhNI5hE37q0qVL0z67SxwW89xzzwU5JSoRiWETjeLZ3sQ7OvPmzZs5c6astijEoYdiOI2btok5c+aYy5xgWt3lmFVWVobctO724IMPymoIaYrDyy+/3D182tq1a2WncLbffnt98/nz54uK0yVCsW0oJM/2JvTouKdC074Jwt5cNjSevpPyfmI4/F55FYfTpk2zo1pRUfHiiy/KHhELP26uxYsXN+2GxZT33gpq2iZMHMqqH0J+4VyQ+Th8/PHH9SC88847tmJmnLt69tln29XSxG0LVqIT24ZC8mxvQo+O7vm73/1uTo55rnTttdfKTiWF39ZWDR8+3D07my/8vnkYh+agfO9739PL+pmm7FRu7lh17drVaQlry5YtBx98sKw6xo4dG/6IqMYcviZr2iZ8jsOQgszH4f/CKu8gupWgkXF44IEHlq5EJ/+BJMuzvQk9OkHusmtXn3zyyfC31Z544olG9Y9Z+H3zMA7t6tdffx3+gTRZDJvISBzqJvsp4iBnv/32Mwvaxo0bRWdL1FXuN3ymSTxBWbduXcEb6u26q3V1dbbPtttua+sqd//EoTtWxqRJkz799FM7aKJP3759bfHuu+82Rf0k3un7v875lajFs5XwPNub0KMTNIxDU7EL7uHs3r27rXz11Veiz49+9CO9+vrrr9uKDZjnn3/eFn/1q1+ZontbO9X18mWXXWaW58+fbzuccMIJtkOfPn1sfcqUKaZumgx32gehx8HnOFTOA9m8ebN9pA8//LDbwbLFiooKUbzhhhucjkH//v11UY+5rdh7s3fybe+GRXfOm+Lbb79tl82LWqN3797F7qe08D2brGmbaEIc6uV33nlHPHx3tWDTaaedpuovr+4f/JnWlStXfvHFF+4NRRzq5TZt2uiFb775xu1mmjIeh9dff70ehNdee0021Asavjp0B/Co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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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JNxdfBV6sVq2bDl06NCw6q1ChTOwazB7aazaWK0nDg0bNnTP2BdffCGbO/drNWfrX//610cffXRYzTXZj0NnypQp3s4c3OT7778/rFZZkicOg+fWjbt16+btL66g9cUXX+ztzM1NW7JkiYy3b9/+3nvvldldrQq8yh988IGM77jjDrdZq1atslOKK3jVCmvWrNnVV18dVnNdq9g1mb1SVm2s1hMH93QtXbo0qNxzzz1+xUzO167AjTKoBHG4Q4l5HPqbAwcOrNCjrSK/V1LxOCy2Aq+yxqHjItnySUuJwxrG7JWyamO1njjs8OmS24FwbxG0+Oabb2pd31wG8/3i9OnTtbhw4cJ803SsCtwog4ofh5MmTdLx999/n22XrfTt2zdblJkrV650/61Xr96ll17q72rVqpW/KZJccXjeeee5e2VQ9I/1u7slS/G1115zmxdccIHu0vlpriU8+uij/pyf//znuimDZ555JnvUkUceqZWTTz5Z5yu32a5dOxmIanm0vgKvsh+HUvHHOc/p1/WiDeparF27tn9xOu6F9mdq/fzzz9dK79699QyqQnH43XffufrXX38tm27cvHlzHau2bdtKceTIkX49KTlnsCk6deqkRbc6rWOH/KexqKzaWK0nAtu2bSv8dLm9Xbt2lXHLli11sv/ll288ePDgoL5mzRrdHD16tI47dOigYxn4Ctwog0q+OHQDd/vWcZ06dXTsvzt0m+vXr9exf7jjbl66+dVXX+m4f//+MlZJrjh0xcmTJwdF9X//93/aTt4AyQOTgGnfvr3scuO6devqeNOmTTqWw3cYhzrWd4fjxo3TXfJ9gz9N3x36cVhdj9ZX4FX243DYsGF6rH+efOOmTZv69QMPPDA7xwVG4l2cQ4YM0V1vvfWWzvS/WL755hs3dhXZVBWKQ8dFnew69thjdc7bb7/tz9exxOHdd9+tdefZZ5/VzRdeeCE4JBhjh8yeLqs2VuuJwCeffFL46Qr26qZflzcc2bq/6QbuTu3vUu7ume9wUeBGmZPsDeLws88+k7G718yYMUPrGofuRnn66afL2HH3bv/wL7/8Uncl3nfcOseX5IlDvVtlub1+d3dXlTNLwGjdfWviPyqtu9XJoioRhwG367bbbtNxzjisrkfrK/AqDxo0yCXBiBEjmjRp4jb//ve/665gZoH6gAEDsnXJM/dq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hzPKeuihhyyvww0bNuRs54qvvPJKWM2QRT3//PPhDkPuARx11FFhFbCV8+uoGKzaWK0HNcSyZcvcRbVmzRqtuM0hQ4Z4U0JViUMJp7BaUNXjMCwVn3wUdlgFdiqza9KqjdV6UEOccMIJwUVVu3Ztv/Kf//znl7/85d/+9jetZOPwgQceuPrqq/2KGDly5OjRo3VzxowZEodu8NOkNL3mmmv884uJEyeec845K1asKE8cygnfeeed00477ZFHHpHip59+Kh1nlPjxsDRdtWpVz549P/roI62kpWf44x//eNlll+nm22+/feaZZ95xxx0y5+6773YHZt9ouqPcNxDffvutbLqj3IOXvm+++WZacralS5f6h1x55ZW///3v/Yqbs2DBAje49tprx48f7+8CqkXOr6NisGpjtR7UENOnT3cX1aZNm8IdJSS9unbt6v5bq1YtKfpxuG3bNpkjHn/8cakPHz5cDpH6qaeeqmcTMm3QoEFuXKdOHb/otGrVSmfutdde/i6VeHGok0XdunVd8fLLL/eL/sz27dv7xeAM2RP279/f39SfJ3/wwQdS2Xfffd1/+/bt64rydIkOHTrI2caOHSuHyBtH+Z7DGTBggD6AU045RQ9Mci0ZqAqzi8qqjdV6UHNIaLm3YkH98MMP9683N167dm1aNg7d4Mgjj5Sxe4fk1zViXXj49eCcW7du1bHEmIx1zvHHH5/zsk/KxuHq1atlPG3atKCFjg855JBgl266wRNPPOHvclEn440bN7rNOXPmyOarr77qH9W9e3cZv/HGG1oPfliaeHHo11966SX/VMEhOgaqhdlFZdXGaj2oUVatWiW3Y2fWrFlSdOORI0fqnKQ0+TQO5W9wdILMCQZCzyMtZNyiRQt/2vjx42WzV69efr08PyzN9zCy45tvvlk3J0+enO8BV2hTaT1fHN52223ZU/Xu3VsGnTt39usPPvjgT/OAKst33VY7qzZW60HN1KFDB3eNTZ8+PS252LJSLw5feOGFcHfJO0gnyXOhyhx/HEhL363qIdUbh+vWrdNNqQSDim5KqCsp5otD9/1E9lRSSTJxeP/99/80D6iy4NorHqs2VutBDdGtW7frr7/erxx00EF6g3744Yf9XULjcMGCBfkuyAJ13eWPfcFPR6s3DvW3m87q1av9B6P18m+6wdSpU7P1fHEov87Uuuw64ogjZEAcoqiCa694rNpYrQc1RFIiZyXYtXHjRhkEvzscN26czpk9e7bWtehv+ud86qmngmlixYoVfv2ee+7JOS2pVBzm2yxwhgKbbqBPy7vvvqv19957L2iU83eHsim/PU2IQxRZcO0Vj1Ubq/Wg5vhfJiTJrbfeOmrUKBnrP0OUTXdzlz9AXb9+fVo2DkePHu3GV1xxxZIlS+QPRP0D77rrLvfmScZS79Spkxs/9thj/rR//vOfcv727dv79SeeeOLYY4/1D/clFY9D2WzcuLFL3H322afwtPJsymMbOnRox44dZezPGTRo0IQJE2Sscei6u8133nnnlltuSby/102IQxRZcBkXj1Ubq/WgRhk4cKDczX/2s58Fu7p06SK7tm3bJpXg3x1+++23MuG3v/2tFh253ScloejXpaibd9xxh1Q0I4UU27ZtK2N/l0gqFYdOvXr1XLFly5Z+scAZCm/26dPHbbZr107q+rNT+TckDRs2lLrGoXPwwQf/b22lv6MVCXGIIst+LRSJVRur9QAAYmIWH1ZtrNYDAIiJWXxYtbFaDwAgJmbxYdXGaj0AgJiYxYdVG6v1AABiYhYfVm2s1gMAiIlZfFi1sVoPACAmZvFh1cZqPQCAmJjFh1Ubq/UAAGJiFh9WbazWAwCIiVl8WLWxWg8AICZm8WHVxmo9AICYmMWHVRur9QAAYmIWH1ZtrNYDAIiJWXxYtbFaDwAgJmbxYdXGaj0AgJiYxYdVG6v1AABiYhYfVm2s1gMAiIlZfFi1sVoPACAmZvFh1cZqPQCAmJjFh1Ubq/UAAGJiFh9WbazWAwCIiVl8WLWxWg8AICZm8WHVxmo9AICYmMWHVRur9QAAYmIWH1ZtrNYDAIiJWXxYtbFaDwAgJmbxYdXGaj0AgJiYxYdVG6v1AABiYhYfVm2s1gMAiIlZfFi1sVoPACAmZvFh1cZqPQCAmJjFh1WbJFm4cGFYBQAgv48//ji2OGzevLnZkgAAcXDBceihh4bV4rCLKOIQAFAhlsFh2ClJLrnkkrAKAEAu/fr1izMOX375ZcuFAQB2ay4yPvzww7BaNKb55NZWr169sAoAQFlJibBaTKbN0pIVTpgwIawCAFDqnnvuMc7C1D4O05JEbNGiRVgFAGDn/UuEndAyLUnEP//5z2EVAFCzjRkzZqdkYbqz4jAtScS6deuGVQBATVWnTp2dlYXpTozDtPQ3pVdffXW4AwBQk1x55ZX2fzsT2Jm9nZkzZ8pT0LRp06+++ircDQCIl7vtN2nSRFLgjTfeCHfb2slxqJYvX96yZUt5UgAANcFBBx20atWqMA92kl0lDgEA2ImIQwAAiEMAAIhDAABS4hAAgJQ4BAAgJQ4BAEiJQwAAUuIQAICUOAQAICUOAQBIiUMAAFLiEACAlDgEACAlDgEASIlDAABS4hAAgJQ4BAAgJQ4BAEiJQwAAUuIQAICUOAQAICUOAQBIiUMAAFLiEACAlDgEACAlDgEASIlDAABS4hAAgJQ4BAAgJQ4BAEiJQwAAUuIQAICUOAQAwPl/IyIJGhsulZ0AAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>

[image9]: <data:image/png;base64,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>

[image10]: <data:image/png;base64,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>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAFTCAIAAABu3jXoAAAkXklEQVR4Xu3dfdwVc/7H8Ws9qnVFd5RK2Sgl5CYqdyGJaCt3LVLuyQrrLtGqXZserDY3DytsrXJTslk9EEmx9bAUclNKuhFJJZSorlpF39/3dz57fXf6XNd1OufMzDlnZl7PP85jzmfmmjPzvb4z75kz58wpMQAAJF6JLgAAkDzEIQAAxCEAAMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwOQzDhs0aFBSUtKxY8cpU6asWLFCjy4+H3/88YgRI+rXr28Xe9asWXp0HjVr1swuw1FHHTV58uTly5fr0cVn4cKFDzzwQOPGje1iv/baa3p0Ho0ZM8YuQ/PmzUeNGrV48WI9uvgsW7bs6aefPvTQQ+1iH3HEEXp0HtnmsstQq1atYcOGzZ8/X48uPitXrpw2bdrJJ59sF7t27dp6NLAz+YhD2zt1KYJ69ux5zDHH6GrIbNM9+eSTuho1vXv3PuSQQ3Q1ZPY4ZsCAAboaNffee2/+N5+uXbu2adNGVyPINt3mzZt1FahCuFua7Y6zZ8/W1Shr2bLl0KFDdTUEpaWlL730kq5GWbt27W6++WZdDcGJJ55oA1hXo2zEiBH77befroZg5MiRDRo00NUoW7JkSf6PJxBRYXWU3/zmN/bAVlfjIuwN7NZbb9WluNhtt910KVD77ruvLsXF6aefrkuBCrtXF9CUKVNOOukkXQV2FNYG8OWXX+pSvIS372jatKkuxUt4TRfenItEeCsY3pyLRFlZ2Zo1a3QV8AhlG9hrr710KY7C2IPUrFlTl+IojKYLY55FKIzVDGOeRaht27a6BHgEvxkkZNMSHTt21CUfEtV0Bx98sC75kJDDCBFsP7nmmmt0Kb6CbTrETMCdI2lv0E+YMEGXcnXppZfqUqy9+eabupSrFStWrF+/Xldj7YknntClXMX4QnWl9tlnH10CUoKMw82bNydtr2TVqlVLl3ISiS8UBmvvvffWpZyce+65uhR3Tz31lC7lJJlnS6tWrdIlINg4TOamFYjENp3/jx+feuqpupQMderU0SVkJrGbG9ILslvcddddupQMjz76qC5l6be//a0u5ZfaQbRs2dL7NDz+d0z+5xBR/i++Pv/887qUDC+//LIuAQHG4ejRo3UpMXzukV999VVdClOrVq0qLnCh4vCZZ57RpSytXr1al5CZit0gOf7whz/oEhIvsO0hyZvWscceq0vZyHPT2ZerW7eue9q5c2e7/G4Zqlevbk8a8haHKKBdd91VlxIjzxsdIiGwPpHk7jV58mRdykaem07uqT148GCT+kTGJ598YsqXQR5//PFH4jASfH46d9iwYbqUGHne6BAJgfWJkO6lIr1227ZtesSOwrjRYlYbjJ87BWf1Qj5dcMEFJeWM52Ox3jg0eXyz1Fq6dKkuZSzY95mrur+un3/QF198YfzNIY0zzjhDl7IR3ufAK11fP50q8Gb89a9/rUtIvMC613HHHadLVfN2a7drrpSM2unHyr1xKH/y1ltvpZltJrL6848++kiXMpbPL0K5lZoyZcr777//5JNPLliwwNXlMc9nhy+++KIueUj3+Omnn/SIlHHjxulSTuz85cig0n96pUUv7wQbN270flz2zjvvVBMEaKf39bavO3bsWF0NglujrVu3nnXWWTuO/O/YN954w1us2KnSNIttRu/TwJuxf//+uoTEC6x7nXDCCbpUtT/96U9uuFq1atLL77//fjtw3333Sd0On3nmmTKqfv36JvWhiZLUD7DJBHXr1nWbR8U4NJ5Pojdq1Mhd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SoYvv/xSl7IUs2/cZ2XGjBm6hMTzu1d1/O+go+vYY4/VpWxk23R2S165cqX7q88++6zE86vidrhVq1YyPGDAAPv0p59+kqctW7Z0fyWXKqdPn24rs2bNkj+UsQsXLrQDZ555pkxpUpdbvv/+e5lm3bp1MiCPS5cudX9o47BOnTq33Xab+0MUs1133VWXEsNtCIATWJ9IcveaPHmyLmUj26aT6XfZZRfv09NPP90+7r777ib1Y3L2nMme6klGygT169eX6atXr27K47Bbt25ugvXr1z/zzDN2oFq1aiZ18vHII4/In1innHKKjdWZM2c2adLEPh0yZIj7Q7f88i34bFcHOfP56dxhw4bpUmLQS1FRYH1ijz320CVkJtstc++997aPGzdufPjhh+3AxIkT7RxeffVVGWuHH3jgATtwwgknSEWeqleROLz++utLUownDqVi2bNJN7192q5dOxkYNGiQK7pHU/5mqXqhnfr66691KWMJf8vroosu0qVsrFq1SpcSo1OnTrqExMtuz5VG27ZtdSknO92ZenfBf/vb39QoceCBB3rr6QVyS+7PPvtMlzK255576lJmpBEkErp27eqGN2zYcNVVV9kUXLt2rX267777uolN+fpKHPbt29eNcnHYp08fmdJLGtYO3HjjjW5WMuCe5haHaSJtp7N69tlndalq8s6wPaseN26cyen/7l2eV155ZaeLp0ydOlWXcloMJ82Nx4499thsFy8H3peo+HsvmS+A91OyAwcOlM7m7V2ZzypDF198sS4h8QLrZO5cxA97uDpr1qyq3sP5+eefzY4bRvv27f83emfbzPLly93w9u3bN23aJMPp/ypDc+bM0aVyo0eP1qUdZfVjBd4bfsresEGDBvZQV9ZiwoQJsh+xK2hSq3bccccdddRRMr192rBhQ/nJG4lDW+nQoYNrATuwZcsWG89NmjSxsbFt2zapW3fddVf//v3dZN6B6tWry0vkFof27FaXjLH/HVkRPWJHTz31lC5VTS22d+bvvvuuG7Y++eQTk3rPWbqc4/2AvnfxFi5c6OqObUnXx0zqCzneOHQ3y/YuRrY//7LXXnvpUoos205bzz/vS7g4fP/99yuOlUvOwh54/fjjj+5pWVmZikM37LhZebdiPxL4DWnsVGAbTCBxKJ3edf2RI0faR/mdoxo1alScpmIcdkmxw7fccosU5VrXxo0bZQL3+GaKe+pTpXFoz9Iy2StlFYfxUzEO16xZI+2mqMlMlnE4f/58O5N33nlHnsoMbR+T3fftt9/+ww8/uFdxA94LqG4xvv32W3uKKcOVXmqVTii++OKLUaNG2QH5kJEbJX/uXkjOWStdzapUGoeykMoHH3ygpwtCiWdpbRyef/759n9ndryK7KaRAbf6V1xxhf33yZFH586dpWhScTg0RX472jsTebTHKP6/KUEcoqIstr30AolD6eWvv/66PPXGodqo5LFiHHqfHn300bIbmjlzpuwUvH9rj/3lvVb1V7mpGIcuCxU1mSEOK8ShCefsULz44osyW++j6NOnj3vq/l/qAur+++8vA/Jod82VTvnxxx9L0R6Hue+fyNmhPXF3f+JmZVK3YnDFDFUah8az8HpE0LwvIXEow7NmzZIW8E4j17BffvllWTY7vXyqy1R4s9QNmx3/TW693DxzRhyiIr+9yvEfh/IJEfH888/bxz//+c/GRxxWtdlIMew4NKmLdlUtg1d4cWibURZgp8uQXiA3QKlKpXEodrrYWcWhm5sMyOM555wjxcWLF48dO1ZNo0ixe/fuco80eVrVpVYZsHFoY0BuqSpxWOli2HPWRYsWecdmoqo4NHm/drh169YhQ4a4OJQb8HpX0FS4hm3j0DV+hnHYtGlT7yg/iENUFNgGU/FCera8W6/bBg477LAjjzzSlL+BVq1aNe/mYfeG3vu5lJSTo87XXnvNfcu7JPU+qvdvvXG4ZcsWN5PczJ07V5dSPvjgA3m5NALcyBUbh5LTn3766ZgxY6TovR62fPlyd4Hwp59+ksuKwu7gZEBd2gmcHPrkJqtbqF9xxRXSheSaa79+/dypnj2u8vYN6+2337bDnTp18l5AVdPIgLrUKn2vtLS0VatWdgJ5J9YOHHXUUXL01rdv35o1a5akyCi5RZ8daNy4sZt5JoK6c2nO5FunbrFtHNoBu8F6G8puXHagRo0acoG5JNXatgVky7VPDznkEO9xbZo4bNu2be3atevUqeP/zojXXnutLiHxstj20mvYsKEuJYn3kwLZymoPmBUXhzb4J0+evH379tatW69atcr7jp/c1cWeob733nuuaB/feOMN79P/zTRo8+bN06WMJfaGpeLkk0/WpWx8++23uuSPOzssfjncQQmxF9huLtQ9ZpHzc35jwmw6u2CjRo2yp1DyKQ85txb26SWXXOKmdMsg71/JUxufDz74oAn5zVLkbMqUKbqUjTvuuEOX/EnzvnexCW+jQ3QF1ieS3L06dOigS9kIr+nc2aG8xNlnn+0dW7t2bRmQz4PIsNzsxj2V98CJw1jiJm2AV2B94rHHHtOlxPC5aU2bNk2XAuLicN26daeccopJLWqnTp0uv/xyO9yjR49mzZrJwi9fvjx10lji/WK+SX2pUV3aCZbcWMcPP++1JpzPfhtpAwYM0CUkXpDbQ6Xfn00CeUfRj969e+tSMvjfI/ufQ0T5/wTW2LFjdSkZnn76aV0Cgo3DxO6Y/Ets091zzz26lCXvN7gTZbfddtMlZCaxmxvSC7JbbN68OYE3BQ5q06r0m4vxJvcu8e/UU0/Vpbjz/4aECKr3RktQd3pDzAS8MYR3kak43XfffbqUq/POO0+XYi2ru2+ntyxFV2NN7ugWCJ8/ixE5zZs31yUgJeA4NAk73jzppJN0yYdENd1BBx2kSz4kqumCXdlEHcIG23SImVA6h/sEf7yFsWmFMc8iFMZqhjHPIhTGaoYxzyLUokULXQI8wtoMVq9erUvxEt4epOB33gpbeE0X3pyLRHjfFIx901ny859AVcLaBvr06TN+/HhdjYuw9x3y0zaxtMcee+hSoLy/Bxkz/n/VKL2we3UBvfXWWz7vlYEkCHcDaNKkie2IuhplBxxwQKW/aR641q1bT5o0SVejzO6PAvwASBpDhgyRmwnExvDhw7t3766rIZg7d26jRo10NcoWLVqUkGs38C/cOBTxOOrs1q1b/g8wbdOFd8+avDn//POD/eBMJurXrx+D+0KMHj06/5tP165d5Wdkos42XVlZma4CVcjflmZ3T7Z3Dh48eNOmTXpcsXrvvfd69eplF7uw57j2JNsuw6BBg3744Qc9rljNmzevd+/edrGnT5+ux+XRE088YZfhsssuW7JkiR5XrFavXn3TTTeVlP/wU6EsWLDALkOPHj0K2/mzNWzYMLvYnBEiB/mLQwAAihZxCAAAcQgAAHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAACGOAQAwBCHAAAY4hAAAEMcAgBgiEMAAAxxCACAIQ4BADDEIQAAhjgEAMAQhwAAGOIQAABDHAIAYIhDAAAMcQgAgCEOAQAwxCEAAIY4BADAEIcAABjiEAAAQxwCAGCIQwAADHEIAIAhDgEAMMQhAADW/wHlTN9c3zlT0wAAAABJRU5ErkJggg==>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAFTCAIAAABu3jXoAAAvzUlEQVR4Xu3deXhURdYG8CYCA8gSNpEZ/VAZQBFBEBBUVDQjqIjgAogICMqWR0BEhhGUTUEHEFwAGRiDwrApCuKCIxKRCLIZVmUcZd9CkJ1ACMn9alKTmsrp7qS701X3JPf9/ZGn7rnVd+m6XW+6093xOQAAAJ7nowUAAADvQRwCAAAgDgEAABCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAACncMXhc88958s2YsSIX3/9la6GcGzZsuXll1++9NJLxf350Ucf0dX8fPnll5dccok42hdffHHTpk1paWm0B4Rs165dYtAbN24s7s/evXvT1fwcOXKkVq1a4mi7dOmyevXqo0eP0h4QspSUlFWrVtWrV0/cn02aNDl79izt4VWFIw5/97vfTZw4kVYheq677rq2bdvSKg89e/a8/PLLaRWiZ8aMGTExMbTKQ2Jiopi1T548SVdAlBw4cEDcw7TqSdzvhcWLF5cqVYpWwYxKlSolJCTQqqvwQLVm3rx5U6dOpVX3ZGZmYvStGT169DXXXEOrHsP6aqtYseKGDRtoFUz6+eefmSTiqlWrqlWrRqtg0s6dO0uXLk2rLmnQoAEtgWEe//2D78kXK1aMlsCKv/3tb0OHDqVVu8Qx9OjRg1bBCtfnxKysLNePwbO8fM8zPXO8QOqumTNnvv3227Rqy9q1a7t3706rYJG7c6K7ewfP3v8cT5vJi3Ued/To0W7dutGqeWL0N2/eTKtgnVtzYo0aNWgJrHNr9N3F8ZyvuOIKWgI3NG7cmJbMw5tIvcybszBDp06dmjdvHq0WdewuvuLFi9MSuMfy9HTw4EFaAvdYHv3ExERaAvdYHn0O2J3wM888Q0vgnjfeeIOWTPLgI5CzGTNm0JJJGH1uRowYQUtFGq/rr1WrVrQEbsvKyqIlY+bOnUtL4Cqbn3XZuXMnLYGrvPYLCq+zrVSpEi2B26w9JGJjY2kJ3BYXF0dLZiQnJ9MSMHDu3DlaKroszXQhwofuGbIWh9Z2BKETs2FmZiatGmDzaSiE7o477qCloovRBLRmzRpaAgbi4+NpyYwWLVrQEjAwadIkWjIAvwzx5KlxYXSq1qZdCMsPP/xAS2bMmjWLloCBOnXq0JIBnpp2CxFPjQujU8X7aHiy9v9f8PIAT3YmRDt7gXB5alwYnWqzZs1oCbxkx44dtAQM2JkQ8UYqnuyMPhOMThVx6HGIQ57sTIiIQ57sjD4TjE4VcehxiEOe7EyIiEOe7Iw+E4xOFXHocYhDnuxMiIhDnuyMPhOMThVx6HGIQ57sTIiIQ57sjD4TjE4VcehxiEOe7EyIiEOe7Iw+E4xOFXHocYhDnuxMiIhDnuyMPhOMThVx6HGIQ57sTIiIQ57sjD4TjE4VcehxiEOe7EyIiEOe7Iw+E4xOFXHocdGNw88++ywhIYFWo0TMERMnTqTVaFMzUQT/d/D222+P1kQWre3kDXHIk53RZ4LRqSIOPS5acVinTh3xGL7yyitLlCghGocPH6Y9CizfOPRlI8VVq1b5F/OgOotGuF+VhziEqLAz+kwwOlXEocdFKw7JA9jE4zmUOIyJiWnbti0phnUwYXUmEIcQFXZGnwlGp4o49DhDcaikpqbKQBJ2794ti1WrVlXFESNGyKJo16xZU/x888035aKiOowdO5YUdaKYmZmprzpx4gTp3KNHD/8tqErt2rVVPWAHVUxJSVEV9d96EYcQFXZGnwlGp4o49LhoxaF8jfThhx8mdfXAlslEinpbNAYNGqTaN954o2xPmDBhyJAhsqh3vvLKK2VbkWvJxsU2VUWcrGr/6U9/KlmypGjoCbpz507/gxSNd955R7ZFYJ88eVIWT506RXoiDiEq7Iw+E4xOFXHocdGKQ+HAgQO+HLIyatQo/YEd8EGup45/UUpMTJRF9WJpr169/LcmK+PGjVu0aJFe0XfRuXPnnO7/rTdo0OD8+fOkGLAhbd26VV90tA6IQ4gKO6PPBKNTRRx6XBTjUImPj5eP5yZNmvhy27Nnj5P9HEsvylupBmnrRRWHvXv39u9DNvXEE0/Ihl4n9LWqT7CGTj7R1LfjIA4hSuyMPhOMThVx6HFRicO4uLj77rtPr8jHc4cOHQI+sPWiagcs6nxhxqEv+0+JpD569Oic7v9Vrlw5fdH/ePx3RIqqjTiEqLAz+kwwOlXEocdFJQ7T09PFA1h/FVHPEvLSpd545JFH/IuyXb16ddnu16/fCy+8IIshxuHUqVN92Uh9165d+q1KlSpFOixdutT/VqIhdifb1apVO3TokCyeOXOG9EQcQlTYGX0mGJ0q4tDjohKHwm+//SYTSMrKypL1kydPquLYsWNlUVXEc0qfX/yQPnqHEONQto8ePepfl3/OlPQO0tChQ1Vn/VaqQ4kSJWRl2LBhqigsW7bMQRy66t1331VvXfb3yy+/0FJoIr5hQdgZfSYYnWqhiMM5c+aQ68NTl4tR0YpDiC47V7jRONR/XZBoD01cXNxTTz1Fq6GRG7/sssvy2Iuo33vvvbKtPhgTCv2G1gQ7iyKJ0akiDj0OcciTnSvcdBxWqFCBVoMQnRs2bEirIbjlllv0+6p48eL53nX5dnAd/yOMIkanWgTiMOBvhY899pgsnjhxQlZE+9tvvxU/k5OT9Z5FkjjNb775hlYDQRzyVJAJ0RdytNiPQ/kq95NPPqk/ZmVbr7z33ntycfny5apPz549xc9HHnlEVlQ9IyODVFRDfhxWtocMGfLffWTT+0vyFf59+/aJdpcuXWQfX/YNZc/BgwfLnjfddJO6uQn64RV5jE61sMehaMiPRZPiq6++6l/88MMPZbvIkw9aX85bK/OAOOSpIBOiGv0PPviArsvNdByWLVs2MYf8/Yz80Ve1fVqEly5dWr2RStTlX+/kGcmiLmBRIjtSqRbwAFRbxqE+q8gbLlu2TH3/XxT/SByQ0Y1zw+hUi0Ac9u3bV18li3r72WefJcUiwBcyesvcEIc85T1w8iOVoaC3zM10HOrku5BCiUO9Q7du3eSi+NmuXTtVV/TOBNmRfxympaVVq1ZN7+PkxKFeVDdUtm7dmsd+C+4/91c0lC9fvlOnTseOHaM74MTg/Riuwh6Hsi3JxePHj6uKVKdOHXKTIk+eeExMDF3hB3HIU0EuV3Xl0xV+TMdhsBdL1aJq+3LHISGLUY/DxYsX59pNfnHo39kQsqOo6N69O90NDwbvx3AVijhcvny5L3gcSocPH1ZF/7XBikWVONmRI0fSaiCIQ54Kcrn6sp8W0GogbONQdVB8weMwPT2dVEhDtv3jcPPmzf7vMg0Wh/Hx8fPnz5dFC88Oaalgtm3bJrZ5ww030BUMRPlUC6JQxKGT+/rIysoKdsWrxoYNG2Q7JSWFrAUd4pAnO5crnzgsUaJE/fr1VdE/+QIWhZIlS+obvOKKK4JNDv5xSNorVqxwgsdhvXr11AdVW7dubXSADG1cbPbqq6+mVbcZOdXIFJY4dLLHUlFF/Wuj5T8GIp3Fw0NV1FpQPBuHAwcO9H9mwIedy9V0HBKpqanB4vDixYuyj1yUn5fQK74gcShMmTJFdVb/L8zxiz3ymqf8dqFPPvlE3bZ58+ZO8DhUNxT279+v94k6cxsXW+Y255s61Qhwu2vAMiZxqCYaibx13oSWLVuam3QKzs6xGY1DiJi50d++fbu5jUeG0dEgDj2OTxyq9u7duy08YhGHDuKQK6Oj79M+jc2BwVMNF+LQ4xjGoVxcuHChWnz88cfVB0mV7t27jxo1ihTj4+PV121LiYmJe/fuVZ8YO3v2bOfOndPT00kcDhs2TH5ROBNGJ0QFcciT0dH3aV9Jz4HBUw0X4tDj2MbhypUrVfv+++8vW7as6jNz5kzRjouLa9OmjS/njYXyTz716tVr1aqVvjVfDtFesmSJaDzzzDPy/Reqmy/771IiMkVjy5Yt6rYu0k/BHMQhT0ZHX2z8+uuvp1X3GDzVcCEOPY5hHH733Xd6UPXr10+2//CHP9SsWVMW1X/MmD9/vuwsfi5YsEAW9Tf+6VsW7a+//lq21VsQk5OT1Tc5jBkzxuhMFDo7h4E45Mno6IuN/9///R+tusfgqYYLcehxfOIwLgcJMEIW/3fLHKSoFvW63tZfLJVbtv+PC/IQ8ByjDnHIk9HR9yEOg0EcehyfOMy3HVYxrDh0sj/MevPNN4vKoEGDVNFFAc8x6hCHPBkdfcRhUIhDj2MYh+fOndPDbNGiRWqVKqr22bNn5aL4eerUKVmcOnVqsDg8f/68bKs4bN26teqwevVqozNR6OwcBuKQJ6OjjzgMCnHocQzjUC7Kfynw/fffq3bx4sWvvfZa0Shfvrwv+x00GRkZojF79mxR7NChg2gfPHhQfqB7zZo1alNqsyoCly5d6ssm2keOHFF9fDmfxXYduUMMQRzyZHT0fYjDYBCHHsczDvV3hx49elRG17x581SH+Ph4WUxKSlLF5ORkWfztt99UkWz5vvvuE5WHHnpo7NixatXw4cPlDfVPd7iLHLYhiEOejI6+D3EYDOLQ45jEIRBGJ0QFcciT0dFHHAaFOPQ4xCFPRidEBXHIk9HRRxwGhTj0OMQhT0YnRAVxyJPR0UccBoU49DjEIU9GJ0QFcciT0dFHHAaFOPQ4xCFPRidEBXHIk9HRRxwGhTj0OMQhT0YnRAVxyJPR0UccBoU49DjEIU9GJ0QFcciT0dFHHAaFOPQ4xCFPRidEBXHIk9HRRxwGhTj0OMQhT0YnRAVxyJPR0UccBoU49DjEIU9GJ0QFcciT0dFHHAZ155130hJ4yaZNm2gJGDA6ISqlSpWiJWDA6OgjDoN65plnaAkY2Lx5My2ZIb//GripW7cuLRlgdNqFiBkdF8RhUD/88AMtAQP9+/enJTPw8gBP06ZNoyUDjE67EDGj44I4zMvGjRtpCdxm9PGgs7YjYKhOnTq0BAw8+OCDtBQ9iMO8lC1blpbAbcWKFaMlM6666ipaArdZe4Pbvn37aAkYyMrKoqXoQRzmpVy5crQEbktOTqYlMy5cuKD+iTwwgafsXmb6/U2Iw3z06dOHlsA948ePpyWTMPmyMmXKFFoyCaPPTUJCAi1FFeIwHxUrVqQlcI+1V0qltLQ0WgL3WB79X3/9FS8P8GHhtxPEYf6qVKlCS+CGevXq0ZJ5+Di2l1mYgiEUR48eXb9+Pa1GG+Iwf2vXrqUlsG7//v2TJk2iVfPE6CclJdEqWOdWMlWrVo2WwLoSJUrQkgGIw5C49VAEpUyZMrRkS9OmTWkJ7HLxAbh9+/aXX36ZVsGi1q1b05IZiMNQufiAhJiYGFqyC+8xdpHrD73Zs2fPmjWLVsGKHj16WHt9DnEYhrvvvnvBggW0CiatWrVq27ZttOqGw4cPly5dmlbBpDVr1vD5OHz16tVpCQyz/JsQ4jA8mZmZlkfIy8Rdff78eVp1FUbfmj59+pw5c4ZWXRUTE3P8+HFaBQPuuusu++8VQBxG4vrrr2/ZsiWtQpScO3dOXJevv/46XcHDnDlzxOEdO3aMroAoad++fY0aNWiVh5MnT4rRX7RoEV0BUTJt2jS3fulEHEZuzZo1vmwvvvhiIhTYmDFjSpUq5dYjIQI33nijONrhw4fTM4HwLVmypFmzZuL+/PTTT+kdzVLv3r3F0T7xxBP0TCAiDRs2FPfn4MGD6R1tEeIQAAAAcQgAAIA4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcRgthw4d2gWR2r17d0pKysWLF+ndWkikpqbu2bOHnhWE7ODBgydPnqR3ayFx7Nix/fv301OCkIl7T9yH9G51A+Iwcr///e/F3Tdy5Ei6AiI1efJkcZe2bduWruDnz3/+szjUVq1a0RUQqS+//FLcpcWLF09PT6frmElKShKH+vDDD//00090HURkyZIlIorEvfrNN9/QdbYgDsM2evToiRMn0ipE21133XXHHXfQqtvGjx9fpUoVWoVoW79+vZibaNVtv/32G8OjKpKKFStGS+YhDsODB4NlrO7wmjVr0hKYJEafz0voFStW/O6772gVjKlfv/4HH3xAqyYhDkN1/vx5VlOzdzC525kchtc0btx4zZo1tGpd06ZNaQnMS05OFqFIq8YgDkOSkZHRqFEjWgVbXI8i1w/AyyZMmLB27VpatahevXq0BBZZe1UGcRiSypUr0xLY5WIgubhrkLp06XLq1ClatULs+vjx47QKFp05cyYzM5NWDUAc5q9bt260BG6IjY2lJfMGDBhAS+AGV34puXDhwksvvUSrYJ2d0Ucc5mPHjh343ZAP++F09OhRWgKX9O7dm5YMu+mmm2gJXGIhERGH+bAwBhA6yx9y6NixIy2Be2rUqEFLJtWqVYuWwD27d+9OS0uj1ahCHOYlJSWFlsBLqlevTkvgqhEjRtCSMe3ataMlcJXpJyeIw7y48lFQyJu1CRG/DDFkekIEzgYNGkRLUYU4zMvll19OS+A2axOiK+/cgbxZ+0Ko5ORkWgIGEhMTaSl6EIdQyMTHx9OSGdZyF8KSkJBASwZg9HkyOi6Iw6C+//57WgIGNm3aREtm9OzZk5aAgQYNGtCSAUanXYiY0XFBHAa1YMECWgIe7Hwm96233qIlYMDohKjY2QuEy+i4IA6DevPNN2kJeDh79iwtGfD555/TEjBgdEJU7OwFwmV0XBCHQSEO2Tpz5gwtGfDFF1/QEjBgdEJU7OwFwmV0XBCHQSEO2UIcepnRCVGxsxcIl9FxQRwGhThkC3HoZUYnRMXOXiBcRscFcRgU4pAtxKGXGZ0QFTt7gXAZHRfEYVCIQ7YQh15mdEJU7OwFwmV0XBCHQSEO2UIcepnRCVGxsxcIl9FxQRwGhThkC3HoZUYnRMXOXiBcRscFcRgU4pAtxKGXGZ0QFTt7gXAZHRfEYVCIQ7YQh15mdEJU7OwFwmV0XBCHQSEO2UIcepnRCVGxsxd33X777YXuNI0eMOIwKMQhW4hDLzM6ISp29lJAvmy0GjLEIYE4DApxyBbi0MuMToiKnb0UkIzDd999l64IDeKQQBwGhThkC3HoZUYnRMXOXgrihhtuuPbaa53ch9qnT5+YmBgZk8K6detkXVUkWVRxqCpCjRo19EVujB6bD3EYDOKQLcShlxmdEBU7eykIdYSikZqaKtu9e/dW9fHjx+t9MjIyVDsuLs7R4nDgwIETJ05Ua1NSUmSbIaPjgjgMCnHIFuLQy4xOiIqdvRSEOsJ+/fqpth6Heh+9+Omnn8pF/cVS/wZPRg8PcRgU4pAtxKGXGZ0QFTt7idhXX33Vq1cvtZhHHCYlJekdVN0JFIcdOnQoW7as3pMbo+OCOAwKccgW4tDLjE6Iip29RMznR9b945A0hP3798tFEocTJ04UPy9evKh6MqSfSNT5EIfBIA7ZQhweOXJE/vnHJvt7DMjohKjY2UvEyOEtWrSoU6dOTmhxWK5cueLFizu543D16tW+bKobT0aPUGy8du3atOoeg6caLsQhW8zj8NixY+JxJWacJk2aiEbdunVpjwLbt29f3vNCy5Yt5ewm9e/fn/bILTk5Od+0y3uP1tg5DDt7iYy4tGJjY0lRHrCMQyUrK0utrVevniyql0PJBy1Ee9SoUWqRJ/2Ao05sfOzYsbTqHoOnGi7EIVvM41A8qObPn68vioDU1kdBiHGoFkU7Pj5eW08lJibmvUHH8EwUOjuHYWcvUUeeHSoBi0QofVxn9CCNbjwCjI7GaBxmZGT4chPXsZM9HidPnpSNzz77jN4sHOfOnVMbf+CBB86fP097RMrn9kXDPw7Fna8WxbOuCRMmyPZ7770nR2T58uWqg/hNXxZFJsmKaM+aNUv8fOONN1RFkosyDv/5z3/K4oULF2RdIXF49OhRfbFEiRL61v67aa0i33woDBkyRN1KLNaqVUvWjx8/ruo1a9aUxczMTFUcOHCgLO7du1cVb7nlFlmcPn26KobLF9rlp+7MyIS4F24ijkM5XrTKj7mDrFSpkrmNR4bR0ViIw0TNjh07RL1Ro0ayg0+Lw8gGScah3Hjbtm1Fu379+rRTRNTxjB49OrJjKyDmcVi5cmVxt4gEIvXXXntN3l27du1S95toiLtRtVVDmD17tloU6Sgaixcvln1kHN50001Odtz6jwKJQyf3xmUYp6WlqWKi9uxw6dKlemf1Appof/jhh6LRt29fvcODDz6o2rLx7LPP6scpixs2bKhSpYponD592pc7O8Pif7L+KlSoEEq3PBTw5m6JLA592WiVJUPHuXHjRl+gXyvdZeRUI2MhDmlV44tSHKpF8aQzsu34U9vhHIcNGjQo4LFFHIfC0KFD5RTTqlUrVdSPp2HDhqVKlVKLkuogGiI7ZbtJkybyjQ96H/Jiqf+Z5hGHAYt6HOratGmjH5Wqi/Zzzz2nFlVRNdq1ayfbYst79uzR1woDBgwIuLtQ5HtDX44ReaI3yy3fvYArwh2X9PT0UG4i+owcOZJW3Zb/cVvjShyKovjdWTZEHP70008yctQTCPnC1JNPPil+iolS3UpS23H84tDJPVsJ8lf48uXLq2JsbKwsbtmyRVTeeOMNfQv6zZ3sLJTPS+SxHTp0yJc9CcpnoupWJuQdhx988IE8QeHOPNFb5laQOFTi4+P1+41wtJclVUX21L8lxP/P+wWJQ7E1/z2SONS/6EvV9Q5NmzaVIb1jxw7/nk7Od30J4lBlRe8mqc5hyfeGavs0AHOjN8st372AK8IaF3Ul3BGIeuU/rG3axOiwLMThaI2s+3LHoSqqGwZsBxxOEof6qPtvJDk5WRXHjBkj23nHoZP72aFo9O3bV7WjkiXB5B2HzZo1kyebL3rL3CI7BTGy5C2aYkddu3aVDb0u6UXV9uWOw/vuu0/1kcKNQ/nLimwHvKEeh76cl2GFTp06Bbvh/fff719UbWnz5s2iuHXr1oBrIxPKdsST71C65aGANwdDwhoXX35uu+22bdu20ZuxEcapmmYhDuM0su7LMw7bt2/v0/7iqOqqodPfSuPTsur111/v379/wI00aNBAf8dNWHE4ZMgQ0Z40aZJcNCrvOBT+/e9/y7OmK8IRWRw62feP/odDX857ZHzaS4j6Wv+2T4tD+e4b0ifcOBRt+XaegwcPBrzhqlWr9L0/++yzsi2fJpLOsr1z507/omqoe8CX834c0Th16pTqHDH/kw1IfY1nZELcC1gW7rj4stFqIcHouC3EIa1mD14ecdi4cWM5usquXbv0Djr92WHZsmXVX6rky6E6dZOePXvqlbDiULh48WL16tV92guwhuQbh5J+bBGIOA43bNgg78Y777xTvz+d7EMqUaKEGA6fNtA61U3FoeojfpMVP0VuOSHHoTJ48GC1Sq/7cm9E/lomNy5VrFhR9ZEV9eQ74Nbktz+vXbtWtCtXriyvh5w9/LezfKuRfEE+AvoGzbGzFwhXBOMycOBAWiokwj5VcxjG4UsvvRTsVrQU6MVS2Vi+fHnHjh1V3V/Xrl1l55kzZwbcgmqQOFRE8cUXX6TV6AkxDgso4jiUVqxY8eqrr/p/5ZV4tvevf/1Lr2zfvn3evHl6xV9aWprYWrROfN26dUuWLCHFzMxM+f2W0rRp0/TPSCjiqvjll1/0ivid7O9//7tekebPn+9/+gsWLNi4cSMphiXgJRd1dvYC4fLUuDA6VYZxKNty8aOPPvLPJx2Jww8//FDv36JFC9FYuXKlLB45csSX89/RRKN58+aq59SpU+U78v13p7/WWrVqVb1DFD/m6C9aqZC3AsYhGBLwao86C3uRjymFri6YmJiY999/n1bzJI5BvgeYs6jfUZwxOlU+cUg+MyCyypf9lUuqEnBTAd9Z2r17d9kuU6aMWLzsssvUWpEx8mG5cOFCVZQfzyhdurSj7UXfbJUqVdTi8OHD5RbUV0MZgjj0soBXe9RZ2Iu+C/lZTG0lBOape4nRqRqNQygIxKGX2ZkQLeyF7EIsTp48WS22bdt2zpw5alG+G6tfv36HsolF8atq586d1S+vXbt2ff3111X/jRs36q9Uv/LKK1OmTFGLwi+//NKhQwf9VW65C+Xpp58mX3UrO4wfP169L08Sv9y3adNm6dKletEQC+PCB6NTRRyyhTj0MjsTooW9+MehfPFG/gMm+YlV1Ue2heTkZPkFfrVr1+7Vq5dolCpVSvxUr83I/i1atJCvM4lQFMV77rlHf1uT/ODNc889J2+rdiEbst28efNbb71VNObOnauKvuwPPctvA5dFEbSiPWzYMLlWbcEQC7vgg9GpIg7ZQhx6mZ0J0cJeyC7EYnp6umzId4zL9owZM2RD9ZRxKNtZWVn6KtVWcVixYsXrr79erf3LX/6id5NteamrYkxMTMmSJWVbfxU34I5E48CBA/4dDLGwCz4YnSrikC3EoZfZmRAt7MWXm/w+WFnP+VRwYrNmzapVqyaL6oZ6HJJVqq3iUH7tEfkGMvkpYf2NxE7uhFN5LBfluwEC7qh8+fKkv1H6MRR5jE4VccgW4tDL7EyIFvYSbBcB63oxrDhU5L8x0R878uOh6ib+DbUo/0NZwB1J8+bN0zdljoVd8MHoVBGHbCEOvczOhGhhL8F2Ier+n9fUO4cVh3FxcfK7EYRy5cpVr15dFnNu8Z+bPPbYY7KhKnfffbfegTT0NtmU6e88C3anFUmMThVxyBbi0MvsTIgW9hJsF+3atfNlvz559uxZ0Xj77bedAsShCDa5NflXxl9//dXJ/pTwww8/7OT8ky/5KWF1W/Fc0Jf9jXpy7ZVXXkk2rrdFQ0bs+vXr9Q6GWNgFH4xOFXHIFuLQy+xMiBb2kscuPvvsM1829QVAeuew4lCYPn26qMfExIh8VT3l/8YpXbq0+pSwvp3MzEx5APpn+QPuSHjggQd82f8aWlXM0fdb5DE6VcQhW4hDL7MzIdrZC4TLU+PC6FQRh2whDr3MzoRoZy8QLk+NC6NTRRyyhTj0MjsTop29QLg8NS6MThVxyBbi0MvsTIh29gLh8tS4MDpVxCFbiEMvszMh2tkLhMtT48LoVBGHbCEOvczOhGhnLxAuT40Lo1NFHLKFOPQyOxOinb1AuDw1LoxOFXHIFuLQy+xMiHb2AuHy1LgwOlXEIVuIQy+zMyHa2QuEy1PjwuhUEYdsIQ69zM6EaGcvEC5PjQujU01ISKAl4CEzM5OWDHj33XdpCRiwMyHa2QuEy1PjwuhUV6xYQUvAwJ49e2jJjIEDB9ISMFClShVaMsBT024h4qlx4XWq8r98ASuPPPIILZnhqQdeIfLxxx/TkgEYfZ48NS68TlX/p1/AhLXHg7UdQeiWLl1KS2bgbyU8TZo0iZaKLl4TECZEhm6++WZaMmPevHm0BG7DQ9LLPvnkE1oq0nhd63ZelgG2OnbsSEvgqjvuuIOWjJk8eTItgau89ssQu7MtV64cLYF7+vXrR0smVaxYkZbAPYMHD6Ylk7w2+fLntc8+sbv+UlNTN2/eTKvgkmnTptGSYUlJSbQELrH/d6PY2FhaApd48LcTjid8ySWX0BK4wZXHA0afiVtvvZWWzEtISDh06BCtgnWVK1emJQ9wYb4LxYABA2gJ7HLxVWtXYhh027Ztc+utnmXKlKElsG7dunW05AFM552333579uzZtAq2XH311efOnaNVi5CILkpNTW3atCmtWoTRd5dn73++pz1u3LjevXvTKpgnnhempKTQqnWefUy6a/Xq1TfccAOtWofRd4uX73nWZ/7jjz96eWxcIZ4XZmVl0apLMPqW1apVa+LEibTqEoy+ZZ9//nnVqlVp1UsKwQW3ZcuWyy67jFYh2sTsM336dFp1288//ywO7PTp03QFRNXdd9996aWX0ioDYvTxdxPT5s6dW6NGDVr1nkIQh9LQoUPFA2PQoEF0BRSMeDYg7tjFixfTFZzIUKxbt+7Zs2fpOiiAyZMnizv2gQceoCuYqVChAp4sRt3q1avFvcrz1yBXFL4rbNmyZS1btvRBgTVq1Ej8VkjvX95OnDghnsfQM4HwlSlT5sUXX6T3L2/79u178skn6ZlARMaNG0fvX88rfHFYKIirrXXr1rQKAABcIQ6NQBwCABQuiEMjEIcAAIUL4tAIxCEAQOGCODQCcQgAULggDo1AHAIAFC6IQyMQhwAAhQvi0AjEIQBA4YI4NAJxCABQuCAOjUAcAgAULohDIxCHAACFC+LQCMQhAEDhgjg0AnEIAFC4IA6NQBwCABQuiEMjEIcAAIUL4tAIxCEAQOGCODQCcQgAULggDo1AHAIAFC6IQyMQhwAAhQvi0AjEYdSdPn26YcOG4o697bbbJk+e/PnnnydCpBISEvr37+/L9o9//IPe1wCehDg0AnEYRbNnzxb355kzZ+gKiJLHH3/8qquuolUAj0EcGoE4jBZxT9ISmNGpU6dNmzbRKoBnYK4xAnFYcIcPH0YWWrZgwYJatWrRKoA3YLoxAnFYQLGxsbQEtuC3EPAmXPdGIA4LomnTprQEdiERwYNw0RuBOIzYunXrNm/eTKtgHRIRvAZXvBGIw4hdfvnltAQAYB7i0AjEYWRSU1NpCdxzySWX0BJA0YU4NAJxGBm8QMfKjBkzaAmg6MLsYwTiMAIXLlw4d+4crYKr8AsKeAeudSMQhxGoUaMGLYHb4uLiaAmgiEIcGoE4jACeiDCE5+vgHZiAjEAcRqBFixa0BAxMmjSJlgCKIsShEYjDCMyaNYuWgIG6devSEkBRhDg0AnEYAXz6nie8iA0egQvdCMRhBHbs2EFLrvJlK1eu3PPPP6/Xu3XrFsG7fnyF9n9UIQ7BI3ChG4E4jADDOExMTPzqq6+aNWsm2lOnTpX1lStXjh07Nnff/CEOAZjDhW4E4jACDOMwj8VwIQ4BmMOFbgTiMAL847BmzZpO9jtg1SqfRlbq1q0bFxeniupr53w5cXjx4kW19oorrhCVH3/8Ud1c9lRtDrgdD4AhuNCN8CEOw8c8Dh999FFZ0eOwePHistG1a1dZvO6669TaCxcuqLYvJw5FY/369aqoGiImRePjjz/mFj/cjgfAEFzoRiAOI8A8Dl955RX/OBSNkSNH6t1EHFaoUEEt+sehtGLFitGjR4viTz/9JBZ79uwpe4qfmzZtUt04QByCR+BCNwJxGAHmcXjVVVf5x6FQv359X7a0tDQnhDhs3769aItwTUxMVHGoejLMHoaHBGACLnQjEIcRYB6HYnHfvn2OXxxKM2fOlMV841C/LYnDZcuWxcTEqLVM+J8sQJGEC90IxGEEOMehL5tsqzhcuHDhjTfeKIt6HKqe58+fDxiHW7duVcV169bJ9vvvvy8Wjx07Jhf5QByCR+BCNwJxGAGGcai8/PLLqp73O0vls0NSlD1lHC5atOh/t/H5XnjhBb2PavPB86gAog4XuhE+xGH4uMVhZMiLpaHLyMjgGTw8jwog6nChG4E4jICX41C+1rp8+XK6ggHEIXgELnQjEIcRKBpx+NZbb40bN45W8xMTE/PRRx/RKg+IQ/AIXOhGIA4jUDTisOhBHIJH4EI3AnEYAcQhT4hD8Ahc6EYgDiOAOOQJcQgegQvdCDGDtGjRglYhT4hDnhCH4BG40I0oWbIkJpFwIQ55wpUMHoEL3Yjp06djEglXIYrDCRMmxMXF0aoV9veLKxk8Ahe6KWISOX36NK1CcG7FoRipAwcO0GqeevfuHXFIRHxDqYA3j4D9PQK4Ahe6KZdeeinmkbC4EoddunQpVapUKCMl/wGFbBckDgvI/n7t7xHAFbjQDYqJiSmqU0lWVlavXr1otWBciUM5QGSY9EXVQXFy4rBfv36qoveX5L+/kJVZs2apnqq/6qlWCXv27JGL5cuXlxVhw4YNsijudtXTGvt7BHAFLnSzihUrViRnk6lTp+qTeFS4GIctWrSoXr06KZK2/7ND+b3epUuXVnXxC1CPHj1EY/v27aKYnp4utyDMnj1b9vG/02rXrq2KopGamioa1apVK1GihComJSWJRvHixf1vbpr9PQK4Ahe6cS+99JKcEIsqesKRsh+Hr7zyytKlS2VbP5GAbf849O+jF1u3bi0Xxc/XXntN1ck9tmnTJlV55513pk+frlbJemxsbMmSJUnRJvt7BHAFLnRLZs6cKZ8EFD30VCNlPw71gxftb7/9NmBdNvKNwyVLlujF06dPy0Xxc+LEiaSzvqi/rErIoohtvb9q22F/jwCuwIUOkZgyZYqar6PFlTgkVF3vIxv5xuFXX32lF48dOyYXfcHjULSbNm0acJVeDHZzO+zvEcAVuNAhQlH/v+2W41DM8h07diQV0tDbq1atyjsO9YZs//GPf5SNgHn2+OOPN2zYUNWFnTt36lsYOXKk+CnfsCMrrvxPRPt7BHAFLnTgwn4ckkpsbKx8G4svW+PGjWVDdRBt+Sn4YHG4ePFi0b755pv1G/qCxKHso8hPqcp2ixYtZEPveeutt+pFa+zvEcAVuNCBC8txmLdTp059+eWXpJiZmSnf4Zm3v/71r+fPn6fVkO3atevNN98kxa+//vrTTz8lRTsQh+ARuNCBC1ZxCAriEDwCFzpwgTjkCXEIHoELHbhAHPKEOASPwIUOXCAOeUIcgkfgQgcuEIc8IQ7BI3ChAxeIQ54Qh+ARuNCBC8QhT4hD8Ahc6MAF4pAnxCF4BC504IJJHMpvflEyMjJoj2gTe2nSpAmtsoE4BI/AhQ5c8IlD1d69e7eFMEAcAnCACx24YBiHcnHhwoVq8dFHH50yZYq2/j+6d+8+atQoUnz66af79++vVxITE/fu3du2bVu5eOTIEdFB/oN7PQ6HDRv2wgsvqEXXIQ7BI3ChAxds43DlypVO9heWinbnzp31f0k/c+ZMX/b3erdp00Y00tPTRXH58uWi3bx5c/ml2/qmJNEeNGiQaDz//POyouJQtNu1ayciUzS2bNmibusi/RQAijBc6MAFwzj87rvv1KJozJs3T7WfeOIJ2RBP72Rx/vz5srP4efDgQVmsWrWqvgXZkO0TJ06otozD5OTkvn37yuKYMWOY5BCTwwAwDRc6cMEnDuNykAAjZPF/t8wmQo4U1aJeJ2392aFw7733qrWu8z9HgCIJFzpwwScO823nUZSvqeqVsOJQEE835X9MHDRokCq6yP8cAYokXOjABcM4PHfunB5me/fuVatUUbXPnj0rF/XiY489Fnoctm7dWhVXr17NJIeYHAaAabjQgQuGcSgXT548KRqTJk3yZb9ZRj7/69ChgyiWL19eFjMyMkRj9uzZolinTh3RPnXqVFpami/33wjVZitXriwXZ8yYoeLwyJEjqo8v+804qr+LEIfgEbjQgQuecdiqVStV2b59uy/bqlWrVIf4+HhZTEpKUsWFCxfKonyvqUS23KhRI1EZM2aMeFKoXiwdPny4vKH+6Q53kcMGKKpwoQMXTOIQCMQheAQudODi+++/pyVgAHEIHoELHbiYO3cuLQEDderUoSWAoghxCFzcc889tAQMTJo0iZYAiiLEIXCBF+V4Ul+7A1C0YQICLipVqkRL4LZWrVrREkARhTgERr744gtaAlddc801tARQRCEOgRG8XsrKkiVLaAmg6MLsA4wcOHCAlsA9+O0EPAWXO/CCt/UDgCsQh8BLQkLC/v37aRWsw1ND8Bpc8cDO2rVrBwwYQKtgEbIQPAgXPXA0Z86chx56iFbBCmQheBOue2AqKSmpdOnStAomrVmzBlkInoVLH1jD7GxNnz59Nm3aRKsAnoG5Brh76qmnRCgeO3aMroAoad++fbFixWgVwGMQh1A4pKSkyP+L+9BDD7333ntIx4L45ptvnn/++Zo1a4r7UzToagBPQhwCAAAgDgEAABCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAABzEIQAAgIM4BAAAcBCHAAAADuIQAADAQRwCAAA4iEMAAAAHcQgAAOAgDgEAAIT/B9qGBGwn8vweAAAAAElFTkSuQmCC>

[image13]: <data:image/png;base64,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>

[image14]: <data:image/png;base64,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>

[image15]: <data:image/png;base64,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>