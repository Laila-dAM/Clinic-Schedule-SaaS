# 7. Use Cases

## 7.1 Purpose

This document defines the primary use cases of ClinicOS and describes how actors interact with the platform to accomplish operational, administrative, clinical, financial, and management objectives.

Use cases provide a behavioral view of the system.

While functional requirements describe what ClinicOS must provide, use cases describe how users and external actors interact with those capabilities.

The use case documentation provides a bridge between:

```text
Business Requirements
        |
        v
User Requirements
        |
        v
Functional Requirements
        |
        v
Use Cases
        |
        v
User Stories
        |
        v
Acceptance Criteria
        |
        v
Test Cases
```

Each important use case should be traceable to one or more functional requirements and should eventually be associated with acceptance criteria and test scenarios.

---

# 7.2 Use Case Scope

ClinicOS use cases cover the core workflows required to operate a small healthcare clinic.

The main areas are:

```text
ClinicOS
│
├── Authentication
│   ├── Register User
│   ├── Log In
│   ├── Log Out
│   ├── Recover Password
│   └── Manage Session
│
├── Clinic Management
│   ├── Configure Clinic
│   ├── Manage Clinic Profile
│   ├── Configure Settings
│   ├── Configure Operating Hours
│   ├── Manage Services
│   └── Manage Specialties
│
├── User Management
│   ├── Create User
│   ├── Update User
│   ├── Assign Role
│   ├── Manage Permissions
│   └── Activate / Deactivate User
│
├── Patient Management
│   ├── Register Patient
│   ├── Search Patient
│   ├── View Patient
│   ├── Update Patient
│   └── View Patient Timeline
│
├── Appointment Management
│   ├── Schedule Appointment
│   ├── View Appointment
│   ├── Reschedule Appointment
│   ├── Confirm Appointment
│   ├── Cancel Appointment
│   └── Manage Appointment Status
│
├── Consultation Management
│   ├── Start Consultation
│   ├── Record Consultation
│   ├── Update Consultation
│   └── View Consultation History
│
├── Medical Records
│   ├── Access Medical Record
│   ├── Add Clinical Information
│   ├── Update Medical Record
│   ├── Manage Documents
│   └── View Patient History
│
├── Financial Management
│   ├── Register Payment
│   ├── Manage Revenue
│   ├── Register Expense
│   ├── Monitor Pending Payments
│   ├── View Financial History
│   └── Generate Financial Reports
│
├── Dashboard
│   ├── View Operational Dashboard
│   ├── View Financial Indicators
│   └── View Role-Relevant Information
│
├── Search
│   ├── Global Search
│   ├── Search Patients
│   ├── Search Appointments
│   ├── Search Medical Records
│   └── Search Financial Information
│
├── Notifications
│   ├── Receive System Notification
│   ├── Receive Appointment Notification
│   ├── Receive Financial Notification
│   └── Receive Security Notification
│
├── Artificial Intelligence
│   ├── Use AI Assistant
│   ├── Search Information with AI
│   ├── Summarize Information
│   ├── Generate Administrative Content
│   └── Review AI-Generated Information
│
└── Automation
    ├── Execute Appointment Automation
    ├── Execute Notification Automation
    ├── Execute Administrative Automation
    ├── Execute Financial Automation
    └── Execute Task Automation
```

Some of these use cases belong to the MVP, while others may be implemented in later stages according to product priorities, technical feasibility, customer validation, and business strategy.

---

# 7.3 Actors

## 7.3.1 Clinic Owner

The Clinic Owner is the primary business decision-maker and economic buyer.

The Clinic Owner may:

- Manage the clinic profile.
- Configure clinic settings.
- Manage users and roles.
- Monitor appointments.
- View operational dashboards.
- Access authorized financial information.
- Configure services and specialties.
- Review reports.
- Monitor clinic performance.
- Manage the clinic subscription.
- Approve important system settings.

The Clinic Owner generally has broad access, subject to security, privacy, and permission policies.

---

## 7.3.2 Healthcare Professional

The Healthcare Professional provides healthcare services through the clinic.

Examples include:

- Physicians.
- Dentists.
- Psychologists.
- Physiotherapists.
- Nutritionists.
- Veterinarians.
- Other supported healthcare professionals.

The Healthcare Professional may:

- View assigned appointments.
- Manage professional availability.
- Access authorized patient information.
- Conduct consultations.
- Create consultation records.
- Update authorized medical records.
- Review patient history.
- Add clinical information.
- Access authorized documents.
- Use authorized AI assistance.
- Review AI-generated information before use.

---

## 7.3.3 Receptionist

The Receptionist is responsible for front-desk and appointment-related operations.

The Receptionist may:

- Register patients.
- Update patient contact information.
- Schedule appointments.
- Reschedule appointments.
- Cancel appointments.
- Confirm appointments.
- Check professional availability.
- Manage appointment statuses.
- Search for patients.
- View authorized patient information.
- Assist with patient check-in.
- Manage administrative notifications.

The Receptionist should not automatically have access to restricted clinical or financial information.

---

## 7.3.4 Clinic Administrator

The Clinic Administrator manages administrative configuration and operational processes.

The Clinic Administrator may:

- Manage clinic settings.
- Manage users.
- Assign roles.
- Configure permissions.
- Manage services.
- Configure operating hours.
- Manage departments and specialties.
- Manage clinic locations.
- Monitor system activity.
- Generate administrative reports.
- Support operational workflows.

Administrative access does not automatically imply unrestricted clinical or financial access.

---

## 7.3.5 Financial Staff

Financial Staff manage the clinic's financial operations.

The Financial Staff may:

- Register payments.
- Track payment status.
- Manage revenue.
- Register expenses.
- Monitor pending payments.
- Manage financial transactions.
- Generate financial reports.
- Review financial history.
- Monitor financial indicators.

Financial permissions should be independently controlled from clinical permissions.

---

## 7.3.6 Clinic Manager

The Clinic Manager focuses on operational performance and management.

The Clinic Manager may:

- Monitor clinic operations.
- Review performance indicators.
- View operational dashboards.
- Review reports.
- Monitor productivity.
- Analyze operational information.
- Support operational improvements.

---

## 7.3.7 Patient

The Patient is not initially the primary direct user of the ClinicOS management platform.

Patient-facing functionality may be introduced in future stages.

Potential patient interactions include:

- Scheduling appointments.
- Confirming appointments.
- Receiving notifications.
- Accessing documents.
- Using a patient portal.
- Communicating with the clinic.

Patient-facing functionality is subject to future product validation.

---

## 7.3.8 System Administrator

The System Administrator is responsible for platform-level administration.

Potential responsibilities include:

- Managing platform-level configuration.
- Supporting system security.
- Managing platform-wide operational issues.
- Managing system-level accounts.
- Monitoring platform-level activity.

System Administrator access must remain separated from ordinary clinic-level permissions.

---

## 7.3.9 External Services

External services may participate indirectly in selected workflows.

Examples include:

- Payment providers.
- Email providers.
- Messaging providers.
- AI providers.
- Authentication services.
- Storage services.
- Future healthcare integrations.

External services remain outside the core ClinicOS system boundary.

```text
                 +----------------------+
                 |       ClinicOS       |
                 |                      |
                 |  Core Application    |
                 +----------+-----------+
                            |
            +---------------+---------------+
            |               |               |
            v               v               v
      Payment Service   Email Service   AI Provider
            |
            v
      External Systems
```

External integrations must use controlled interfaces and permissions.

---

# 7.4 Actor-to-Use-Case Overview

```text
+-------------------------+----------------------------------------------+
| Actor                   | Main Use Cases                               |
+-------------------------+----------------------------------------------+
| Clinic Owner            | Configure clinic, manage users, dashboards,  |
|                         | reports, financial management, subscription  |
+-------------------------+----------------------------------------------+
| Healthcare Professional | Appointments, consultations, medical        |
|                         | records, patient history, authorized AI      |
+-------------------------+----------------------------------------------+
| Receptionist            | Patients, scheduling, rescheduling,          |
|                         | confirmation, cancellation, search           |
+-------------------------+----------------------------------------------+
| Clinic Administrator    | Settings, users, roles, permissions,         |
|                         | services, operating hours, reports           |
+-------------------------+----------------------------------------------+
| Financial Staff         | Payments, revenue, expenses, reports,        |
|                         | financial history                             |
+-------------------------+----------------------------------------------+
| Clinic Manager          | Dashboard, indicators, reports, operations   |
+-------------------------+----------------------------------------------+
| Patient                 | Future portal, appointments, notifications   |
+-------------------------+----------------------------------------------+
| System Administrator    | Platform-level administration and security   |
+-------------------------+----------------------------------------------+
| External Services       | Payments, messaging, email, AI, storage      |
+-------------------------+----------------------------------------------+
```

---

# 7.5 General Use Case Rules

All protected use cases must follow the ClinicOS authorization model.

The following principles apply:

1. The actor must be authenticated when authentication is required.
2. The actor must belong to the appropriate clinic context.
3. The actor must have the required role and/or permission.
4. Clinic data must remain isolated between tenants.
5. Sensitive information must require appropriate permissions.
6. AI access must follow the same permissions as the underlying information.
7. Reports must only contain information the requesting user is authorized to access.
8. External services must not receive unauthorized information.
9. Important activities should be recorded in the activity or audit history.
10. Invalid operations must not create inconsistent records.
11. Deactivated or unauthorized accounts must not access protected functionality.
12. Business rules must be consistently enforced across modules.

---

# 7.6 Use Case Format

Each detailed use case follows this structure:

```text
Use Case ID
Name
Primary Actor
Supporting Actors
Goal
Priority
Scope
Preconditions
Trigger
Main Flow
Alternative Flows
Exception Flows
Postconditions
Business Rules
Related Requirements
```

---

# 7.7 Authentication Use Cases

## UC-AUTH-001 — Register User

**Primary Actor:** User

**Goal:** Create a ClinicOS user account.

**Priority:** Must Have

**Preconditions:**

- The registration process is available.
- Required registration information is provided.

**Trigger:**

The user submits the registration form.

**Main Flow:**

1. The user opens the registration process.
2. The system displays the required fields.
3. The user enters the required information.
4. The system validates the information.
5. The system checks for conflicts such as an existing account.
6. The system creates the user account.
7. The system creates or associates the appropriate clinic context when applicable.
8. The system confirms successful registration.

**Alternative Flows:**

- The user provides optional information.
- The user is associated with an existing clinic.
- Additional verification may be required.

**Exception Flows:**

- Required information is missing.
- Information has an invalid format.
- The account already exists.
- The registration service is unavailable.

**Postconditions:**

- A valid account exists.
- The account has the appropriate status.
- Relevant registration activity may be recorded.

**Related Requirements:**

- FR-AUTH
- User Management
- Clinic Management

---

## UC-AUTH-002 — Log In

**Primary Actor:** User

**Goal:** Authenticate and access ClinicOS.

**Priority:** Must Have

**Preconditions:**

- The user has an account.
- The account is eligible for authentication.

**Trigger:**

The user submits login credentials.

**Main Flow:**

1. The user opens the login page.
2. The user enters authentication credentials.
3. The system validates the credentials.
4. The system verifies the account status.
5. The system establishes an authenticated session.
6. The system identifies the user's clinic context.
7. The system evaluates the user's roles and permissions.
8. The system provides access to authorized functionality.

**Alternative Flows:**

- The user belongs to multiple clinics.
- Additional authentication mechanisms may be required.

**Exception Flows:**

- Invalid credentials.
- Inactive account.
- Suspended account.
- Locked account.
- Expired authentication mechanism.
- Authentication service failure.

**Postconditions:**

- A valid authenticated session exists.
- The user can access authorized functionality.

---

## UC-AUTH-003 — Log Out

**Primary Actor:** Authenticated User

**Goal:** End the current authenticated session.

**Priority:** Must Have

**Main Flow:**

1. The user selects the logout option.
2. The system invalidates or terminates the session.
3. The system removes access to protected resources.
4. The system returns the user to an unauthenticated state.

**Postconditions:**

- The current session is no longer valid.

---

## UC-AUTH-004 — Recover Password

**Primary Actor:** User

**Goal:** Recover access to an account after forgetting the password.

**Priority:** Must Have

**Main Flow:**

1. The user selects password recovery.
2. The user provides the required account information.
3. The system processes the recovery request.
4. The system sends a secure reset mechanism.
5. The user accesses the reset process.
6. The user creates a new password.
7. The system validates the new password.
8. The system confirms the password change.

**Security Rules:**

- Reset tokens should be time-limited.
- Reset tokens must not be reusable.
- The system should protect against unauthorized account discovery.
- Relevant security events should be recorded.

---

## UC-AUTH-005 — Manage Session

**Primary Actor:** System

**Goal:** Maintain secure authenticated sessions.

**Main Flow:**

1. The system creates a session after successful authentication.
2. The system validates the session when protected resources are accessed.
3. The system applies session expiration policies.
4. The system invalidates expired or revoked sessions.
5. The system prevents unauthorized session reuse.

---

# 7.8 Clinic Management Use Cases

## UC-CLINIC-001 — Configure Clinic

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Configure the clinic for operational use.

**Priority:** Must Have

**Preconditions:**

- The actor is authenticated.
- The actor has the required permissions.

**Main Flow:**

1. The actor opens clinic configuration.
2. The system displays available settings.
3. The actor updates permitted information.
4. The system validates the changes.
5. The system saves valid settings.
6. The system applies the settings according to their behavior.
7. The system records relevant changes.

**Possible Configuration Areas:**

```text
Clinic Configuration
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
│
├── Security
│
└── AI
    ├── Availability
    ├── Permissions
    └── Usage Controls
```

---

## UC-CLINIC-002 — Manage Clinic Profile

**Primary Actor:** Clinic Owner / Authorized Administrator

**Goal:** Maintain clinic identification and contact information.

**Main Flow:**

1. The actor opens the clinic profile.
2. The system displays permitted information.
3. The actor updates the information.
4. The system validates the information.
5. The system saves the changes.
6. The system records the modification where applicable.

Possible information includes:

- Clinic name.
- Logo.
- Description.
- Phone.
- Email.
- Website.
- Address.
- Contact information.

---

## UC-CLINIC-003 — Configure Operating Hours

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Define when the clinic operates.

**Main Flow:**

1. The actor opens operating hours.
2. The system displays the current schedule.
3. The actor defines opening and closing periods.
4. The actor may define multiple periods for a day.
5. The actor may mark specific days as closed.
6. The system validates the configuration.
7. The system saves the operating hours.
8. Scheduling uses the configured hours.

Example:

```text
Monday       08:00 ───────── 18:00
Tuesday      08:00 ───────── 18:00
Wednesday    08:00 ───────── 18:00
Thursday     08:00 ───────── 18:00
Friday       08:00 ───────── 17:00
Saturday     08:00 ───────── 12:00
Sunday       CLOSED
```

---

## UC-CLINIC-004 — Manage Services

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Configure services provided by the clinic.

**Main Flow:**

1. The actor opens service management.
2. The system displays existing services.
3. The actor creates or updates a service.
4. The system validates the information.
5. The system saves the service.
6. The service becomes available to authorized workflows.

---

## UC-CLINIC-005 — Manage Specialties

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Configure healthcare specialties.

**Main Flow:**

1. The actor opens specialty management.
2. The actor creates or updates a specialty.
3. The system validates the information.
4. The system saves the specialty.
5. Authorized professionals may be associated with it.

Deactivation should preserve historical records associated with the specialty.

---

# 7.9 User Management Use Cases

## UC-USER-001 — Create User

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Add a user to the clinic.

**Preconditions:**

- The actor is authenticated.
- The actor has user-management permission.

**Main Flow:**

1. The actor opens user management.
2. The actor selects create user.
3. The actor enters the required user information.
4. The actor selects an appropriate role.
5. The system validates the information.
6. The system creates the user.
7. The system associates the user with the clinic.
8. The system applies the configured role and permissions.
9. The system confirms the operation.

**Exception Flows:**

- Invalid information.
- Existing account conflict.
- Unauthorized role assignment.
- Insufficient permissions.

---

## UC-USER-002 — Update User

**Primary Actor:** Clinic Owner / Clinic Administrator

**Goal:** Update authorized user information.

**Main Flow:**

1. The actor searches for the user.
2. The system displays authorized information.
3. The actor modifies permitted fields.
4. The system validates the changes.
5. The system saves the changes.
6. The system records relevant activity.

---

## UC-USER-003 — Assign Role

**Primary Actor:** Authorized Administrator

**Goal:** Assign an appropriate role to a user.

**Main Flow:**

1. The administrator selects a user.
2. The system displays available roles.
3. The administrator selects a permitted role.
4. The system validates the administrator's authority.
5. The system updates the user's role.
6. The system applies the corresponding permissions.

**Business Rule:**

Users should receive only the permissions necessary for their responsibilities.

---

## UC-USER-004 — Manage Permissions

**Primary Actor:** Authorized Administrator

**Goal:** Configure access permissions.

Permissions may control:

```text
Create
View
Update
Delete
Export
Manage
Approve
Configure
```

Permissions may apply to:

```text
Patients
Appointments
Consultations
Medical Records
Financial Records
Reports
Users
Clinic Settings
```

**Main Flow:**

1. The administrator selects a user or role.
2. The system displays configurable permissions.
3. The administrator changes permitted permissions.
4. The system validates authorization.
5. The system saves the changes.
6. Future access decisions use the updated permissions.

---

## UC-USER-005 — Activate or Deactivate User

**Primary Actor:** Authorized Administrator

**Goal:** Control account availability.

**Main Flow:**

1. The administrator selects a user.
2. The administrator changes the account status.
3. The system validates authorization.
4. The system updates the account status.
5. The system prevents unauthorized access when the account becomes inactive, suspended, or locked.

Historical records associated with the user must not automatically be deleted.

---

# 7.10 Patient Management Use Cases

## UC-PAT-001 — Register Patient

**Primary Actor:** Receptionist / Authorized User

**Goal:** Create a patient record.

**Priority:** Must Have

**Preconditions:**

- The actor is authenticated.
- The actor has permission to create patients.

**Main Flow:**

1. The actor opens patient registration.
2. The actor enters patient information.
3. The system validates required information.
4. The system validates applicable formats.
5. The system checks for relevant conflicts or duplicates.
6. The system creates the patient record.
7. The system associates the patient with the clinic.
8. The system records the action where required.
9. The system confirms successful registration.

**Exception Flows:**

- Missing required information.
- Invalid information.
- Duplicate or conflicting record.
- Unauthorized operation.

---

## UC-PAT-002 — Search Patient

**Primary Actor:** Receptionist / Healthcare Professional / Authorized User

**Goal:** Quickly locate a patient.

**Main Flow:**

1. The actor enters a search term.
2. The system searches authorized patient information.
3. The system applies access restrictions.
4. The system returns matching patients.
5. The actor selects the required patient.

**Possible Search Criteria:**

- Name.
- Contact information.
- Patient identifier.
- Other authorized patient attributes.

---

## UC-PAT-003 — View Patient

**Primary Actor:** Authorized User

**Goal:** View permitted patient information.

**Main Flow:**

1. The actor selects a patient.
2. The system verifies authorization.
3. The system retrieves the permitted information.
4. The system displays the patient profile.

Sensitive information must not be displayed to unauthorized users.

---

## UC-PAT-004 — Update Patient

**Primary Actor:** Authorized User

**Goal:** Update patient information.

**Main Flow:**

1. The actor opens the patient profile.
2. The system verifies permissions.
3. The actor changes permitted information.
4. The system validates the changes.
5. The system saves the information.
6. The system records the relevant activity.

---

## UC-PAT-005 — View Patient Timeline

**Primary Actor:** Authorized User

**Goal:** View a chronological history of relevant patient activity.

The timeline may contain, according to permissions:

```text
Patient
   |
   +-- Appointment
   |
   +-- Consultation
   |
   +-- Medical Record
   |
   +-- Examination
   |
   +-- Document
   |
   +-- Prescription
   |
   +-- Financial Event
   |
   +-- Other Relevant Activity
```

**Main Flow:**

1. The actor opens the patient profile.
2. The actor opens the timeline.
3. The system verifies access.
4. The system retrieves authorized historical events.
5. The system orders events chronologically.
6. The system displays the timeline.

---

# 7.11 Appointment Management Use Cases

## UC-APPT-001 — Schedule Appointment

**Primary Actor:** Receptionist / Authorized User

**Goal:** Create an appointment for a patient.

**Priority:** Must Have

**Preconditions:**

- The actor is authenticated.
- The actor has appointment-creation permission.
- The patient exists.
- Required clinic scheduling information is available.

**Main Flow:**

1. The actor selects a patient.
2. The actor selects the appointment date.
3. The actor selects the appointment time.
4. The actor selects the service.
5. The system validates the information.
6. The system verifies the patient belongs to the correct clinic.
7. The system checks for scheduling conflicts.
8. The system checks applicable scheduling rules.
9. The system creates the appointment.
10. The system assigns the initial appointment status.
11. The system confirms the appointment creation.

**Alternative Flows:**

- The actor selects another available time.
- The actor selects another professional.
- The actor selects another service.

**Exception Flows:**

- Patient does not exist.
- Invalid date.
- Invalid time.
- Missing service.
- Appointment conflict.
- Outside configured operating hours.
- Insufficient permission.

---

## UC-APPT-002 — View Appointment

**Primary Actor:** Authorized User

**Goal:** View appointment information.

**Main Flow:**

1. The actor opens the appointment.
2. The system verifies authorization.
3. The system retrieves the appointment.
4. The system displays permitted appointment information.

Possible information includes:

- Patient.
- Date.
- Time.
- Service.
- Status.
- Relevant operational information.

---

## UC-APPT-003 — Reschedule Appointment

**Primary Actor:** Receptionist / Authorized User

**Goal:** Change an existing appointment.

**Main Flow:**

1. The actor selects an appointment.
2. The system verifies access.
3. The actor selects a new date and/or time.
4. The system validates the new schedule.
5. The system checks for conflicts.
6. The system updates the appointment.
7. The system records the change.
8. Relevant notifications may be generated.

**Exception Flows:**

- New time conflicts with another appointment.
- New time violates scheduling rules.
- Appointment no longer exists.
- User lacks permission.

---

## UC-APPT-004 — Confirm Appointment

**Primary Actor:** Receptionist / Authorized User

**Goal:** Confirm that an appointment is confirmed.

**Main Flow:**

1. The actor selects an appointment.
2. The system verifies authorization.
3. The actor confirms the appointment.
4. The system validates the status transition.
5. The system updates the appointment status.
6. The system records the status change.
7. Relevant notifications may be generated.

---

## UC-APPT-005 — Cancel Appointment

**Primary Actor:** Receptionist / Authorized User

**Goal:** Cancel an appointment.

**Main Flow:**

1. The actor selects an appointment.
2. The system verifies authorization.
3. The actor requests cancellation.
4. The system validates the cancellation.
5. The system updates the appointment status.
6. The system records the cancellation.
7. Relevant notifications may be generated.

---

## UC-APPT-006 — Manage Appointment Status

**Primary Actor:** Authorized User

**Goal:** Update an appointment status according to permitted workflow transitions.

Possible statuses include:

```text
Scheduled
    |
    +----> Confirmed
    |
    +----> Cancelled

Confirmed
    |
    +----> Completed
    |
    +----> Cancelled
```

The exact valid transitions must be controlled by business rules.

Invalid status transitions must be rejected.

---

# 7.12 Consultation Management Use Cases

## UC-CONS-001 — Start Consultation

**Primary Actor:** Healthcare Professional

**Goal:** Begin a consultation associated with an appointment.

**Preconditions:**

- The professional is authenticated.
- The professional has access to the appointment.
- The appointment is eligible for consultation.

**Main Flow:**

1. The professional opens the appointment.
2. The system verifies authorization.
3. The professional starts the consultation.
4. The system creates or opens the consultation record.
5. The consultation receives the appropriate status.
6. The professional can record consultation information.

---

## UC-CONS-002 — Record Consultation

**Primary Actor:** Healthcare Professional

**Goal:** Record information generated during a consultation.

**Main Flow:**

1. The professional opens the consultation.
2. The system verifies authorization.
3. The professional enters consultation information.
4. The system validates the information.
5. The system saves the consultation record.
6. The system associates the consultation with the patient and applicable appointment.
7. The system records relevant activity.

---

## UC-CONS-003 — Update Consultation

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Update an existing consultation record.

**Main Flow:**

1. The professional opens an authorized consultation.
2. The system verifies permissions.
3. The professional updates permitted information.
4. The system validates the changes.
5. The system saves the updated record.
6. The system records the modification.

Sensitive clinical information must not be modified by unauthorized users.

---

## UC-CONS-004 — View Consultation History

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Review previous consultation information.

**Main Flow:**

1. The professional opens the patient's authorized history.
2. The system retrieves consultation records the professional may access.
3. The system displays the records chronologically.
4. The professional reviews the information.

---

# 7.13 Medical Record Use Cases

## UC-MED-001 — Access Medical Record

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Access authorized clinical information.

**Main Flow:**

1. The professional selects a patient.
2. The system verifies clinical permissions.
3. The system retrieves authorized medical information.
4. The system displays the information.

**Business Rule:**

Medical records must be protected from unauthorized access.

---

## UC-MED-002 — Add Clinical Information

**Primary Actor:** Healthcare Professional

**Goal:** Add authorized clinical information to a patient record.

**Main Flow:**

1. The professional opens the patient's medical record.
2. The system verifies permissions.
3. The professional enters clinical information.
4. The system validates the information.
5. The system stores the information.
6. The system records the responsible user and relevant timestamp.

---

## UC-MED-003 — Update Medical Record

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Update authorized medical information.

**Main Flow:**

1. The professional selects an existing record.
2. The system verifies authorization.
3. The professional updates permitted information.
4. The system validates the change.
5. The system saves the modification.
6. The system records the modification history.

---

## UC-MED-004 — Manage Medical Documents

**Primary Actor:** Authorized User

**Goal:** Store and access authorized patient documents and attachments.

**Main Flow:**

1. The actor opens the patient's document area.
2. The system verifies permissions.
3. The actor uploads or selects a document.
4. The system validates supported file types and restrictions.
5. The system stores the document.
6. The system associates the document with the patient.
7. The system records relevant activity.

---

# 7.14 Financial Management Use Cases

## UC-FIN-001 — Register Payment

**Primary Actor:** Financial Staff / Authorized User

**Goal:** Record a patient or clinic payment.

**Main Flow:**

1. The actor opens the financial module.
2. The actor selects the applicable patient, appointment, or charge.
3. The actor enters payment information.
4. The system validates the information.
5. The system records the payment.
6. The system updates the applicable payment status.
7. The system records the responsible user and timestamp.
8. The system updates relevant financial information.

---

## UC-FIN-002 — Register Expense

**Primary Actor:** Financial Staff / Authorized User

**Goal:** Record a clinic expense.

**Main Flow:**

1. The actor opens financial management.
2. The actor selects expense registration.
3. The actor enters expense information.
4. The system validates the information.
5. The system records the expense.
6. The system associates the expense with the appropriate category.
7. The system records the responsible user and timestamp.

---

## UC-FIN-003 — Manage Revenue

**Primary Actor:** Financial Staff / Authorized User

**Goal:** Manage clinic revenue information.

The use case may include:

- Recording revenue.
- Categorizing revenue.
- Reviewing revenue.
- Updating permitted information.
- Viewing historical revenue.

All financial modifications must follow authorization and auditability rules.

---

## UC-FIN-004 — Monitor Pending Payments

**Primary Actor:** Financial Staff

**Goal:** Identify payments that remain pending or overdue.

**Main Flow:**

1. The actor opens financial information.
2. The system retrieves authorized pending transactions.
3. The actor applies filters if required.
4. The system displays the results.
5. The actor may review individual transactions.

---

## UC-FIN-005 — View Financial History

**Primary Actor:** Financial Staff / Authorized User

**Goal:** Review historical financial activity.

The system may allow filtering by:

```text
Date
Transaction Type
Category
Patient
Professional
Payment Method
Status
```

Relevant financial activities should include:

- Responsible user.
- Timestamp.
- Status changes.
- Transaction information.

---

## UC-FIN-006 — Generate Financial Report

**Primary Actor:** Financial Staff / Clinic Owner / Authorized Manager

**Goal:** Generate financial information for a selected period.

**Main Flow:**

1. The actor selects a financial report.
2. The actor selects a period.
3. The actor applies available filters.
4. The system calculates authorized data.
5. The system displays the results.
6. The actor may export the report if permitted.

Possible export formats include:

- PDF.
- CSV.
- Spreadsheet-compatible formats.

---

# 7.15 Dashboard Use Cases

## UC-DASH-001 — View Operational Dashboard

**Primary Actor:** Authorized User

**Goal:** Obtain a quick overview of relevant clinic activity.

**Main Flow:**

1. The actor opens the dashboard.
2. The system authenticates the actor.
3. The system identifies the actor's clinic context.
4. The system evaluates permissions.
5. The system retrieves relevant indicators.
6. The system displays information appropriate to the actor's role.

Possible information includes:

```text
Operational Dashboard
│
├── Patients
├── Appointments
├── Appointment Status
├── Daily Activity
├── Relevant Tasks
├── Notifications
└── Other Authorized Indicators
```

Different profiles should receive information relevant to their responsibilities.

---

## UC-DASH-002 — View Financial Indicators

**Primary Actor:** Clinic Owner / Financial Staff / Authorized Manager

**Goal:** View authorized financial indicators.

The system must not expose financial information to users without the required permissions.

---

## UC-DASH-003 — View Role-Relevant Dashboard

**Primary Actor:** Authorized User

**Goal:** Provide a personalized dashboard based on the user's role.

Example:

```text
Clinic Owner
    |
    +--> Operations
    +--> Financial Indicators
    +--> Appointments
    +--> Users
    +--> Performance

Healthcare Professional
    |
    +--> Assigned Appointments
    +--> Patients
    +--> Consultations
    +--> Relevant Clinical Information

Receptionist
    |
    +--> Agenda
    +--> Patients
    +--> Appointment Status
    +--> Notifications

Financial Staff
    |
    +--> Payments
    +--> Revenue
    +--> Expenses
    +--> Financial Indicators

Clinic Manager
    |
    +--> Operational Indicators
    +--> Performance
    +--> Reports
```

The dashboard must respect the same authorization model used by the underlying modules.

---

# 7.16 Search Use Cases

## UC-SEARCH-001 — Global Search

**Primary Actor:** Authorized User

**Goal:** Find relevant information from a single search interface.

Possible searchable information includes:

- Patients.
- Appointments.
- Medical records.
- Documents.
- Financial information.
- Other authorized information.

**Main Flow:**

1. The actor enters a search query.
2. The system identifies searchable resources.
3. The system applies authorization rules.
4. The system searches permitted information.
5. The system returns relevant results.
6. The actor selects a result.

The system must never expose information simply because it matches a search query if the actor is not authorized to access it.

---

## UC-SEARCH-002 — Search Patient

**Primary Actor:** Receptionist / Healthcare Professional / Authorized User

**Goal:** Find an authorized patient record.

---

## UC-SEARCH-003 — Search Appointment

**Primary Actor:** Receptionist / Healthcare Professional / Authorized User

**Goal:** Find an authorized appointment.

---

## UC-SEARCH-004 — Search Medical Record

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Find relevant clinical information.

Clinical search results must respect medical-record permissions.

---

## UC-SEARCH-005 — Search Financial Information

**Primary Actor:** Financial Staff / Authorized User

**Goal:** Find authorized financial transactions or information.

Financial search results must respect financial permissions.

---

# 7.17 Notification Use Cases

## UC-NOTIF-001 — Receive System Notification

**Primary Actor:** Authorized User

**Goal:** Receive relevant system information.

Notifications may include:

- System events.
- Tasks.
- Security events.
- Operational information.

---

## UC-NOTIF-002 — Receive Appointment Notification

**Primary Actor:** Authorized User / Potentially Patient

**Goal:** Receive relevant appointment information.

Possible events include:

- Appointment creation.
- Confirmation.
- Rescheduling.
- Cancellation.
- Reminders.

Notification behavior depends on configured workflows and available notification services.

---

## UC-NOTIF-003 — Receive Financial Notification

**Primary Actor:** Authorized Financial User

**Goal:** Receive relevant financial information.

Possible events include:

- Payment events.
- Pending payments.
- Financial status changes.
- Other configured financial events.

---

# 7.18 Artificial Intelligence Use Cases

## UC-AI-001 — Use AI Assistant

**Primary Actor:** Authorized User

**Goal:** Use AI to assist with permitted tasks.

Possible capabilities include:

- Summarizing information.
- Finding information.
- Organizing information.
- Generating administrative content.
- Supporting repetitive workflows.

**Main Flow:**

1. The actor opens an authorized AI feature.
2. The system verifies AI permissions.
3. The actor submits a request.
4. The system determines which information may be accessed.
5. The system processes the request.
6. The AI generates a response.
7. The system displays the result.
8. The user reviews the result.
9. The user decides whether to use the generated information.

**Critical Business Rules:**

- AI must not bypass access controls.
- AI must not access unauthorized patient information.
- AI-generated information must not replace professional clinical judgment.
- Human review must be maintained where appropriate.

---

## UC-AI-002 — Intelligent Search

**Primary Actor:** Authorized User

**Goal:** Find authorized information using natural-language interaction.

**Main Flow:**

1. The user submits a natural-language request.
2. The system identifies the intended information.
3. The system verifies authorization.
4. The system searches permitted information.
5. The system returns relevant results.

---

## UC-AI-003 — Summarize Information

**Primary Actor:** Authorized User

**Goal:** Produce a concise summary of authorized information.

Potential sources include:

- Medical records.
- Consultation information.
- Administrative information.
- Other permitted content.

The system must preserve access-control restrictions.

---

## UC-AI-004 — Generate Administrative Content

**Primary Actor:** Authorized User

**Goal:** Reduce repetitive administrative writing.

Potential examples include:

- Administrative messages.
- Internal summaries.
- Structured text.
- Other permitted content.

Generated content must be reviewed by the user before being used where appropriate.

---

## UC-AI-005 — Review AI-Generated Information

**Primary Actor:** Healthcare Professional / Authorized User

**Goal:** Review AI-generated content before relying on it.

**Main Flow:**

1. The AI generates information.
2. The system presents the generated content.
3. The user reviews the content.
4. The user accepts, modifies, rejects, or ignores the output.
5. The final decision remains with the authorized human user.

---

# 7.19 Automation Use Cases

## UC-AUTO-001 — Execute Appointment Automation

**Primary Actor:** System

**Supporting Actor:** Authorized User

**Goal:** Automatically perform configured appointment-related actions.

Possible actions include:

- Notifications.
- Reminders.
- Status-related actions.
- Administrative tasks.

**Main Flow:**

1. A configured condition occurs.
2. The system evaluates the automation rule.
3. The system verifies that the conditions are satisfied.
4. The system executes the configured action.
5. The system records the execution where appropriate.

---

## UC-AUTO-002 — Execute Notification Automation

**Primary Actor:** System

**Goal:** Automatically send configured notifications.

The system must verify:

- Trigger conditions.
- Recipient eligibility.
- Required permissions.
- Availability of the notification service.

---

## UC-AUTO-003 — Execute Administrative Automation

**Primary Actor:** System

**Goal:** Reduce repetitive administrative work.

Automation must only execute configured and authorized actions.

---

## UC-AUTO-004 — Execute Financial Automation

**Primary Actor:** System

**Goal:** Perform configured financial-related automation.

Financial automation must respect financial permissions, validation rules, and audit requirements.

---

## UC-AUTO-005 — Execute Task Automation

**Primary Actor:** System

**Goal:** Automatically execute configured operational tasks.

The system must:

1. Detect the configured trigger.
2. Validate the configured conditions.
3. Execute the permitted action.
4. Record relevant activity.
5. Report failures when execution is unsuccessful.

---

# 7.20 Subscription and Billing Use Cases

## UC-SUB-001 — Manage Subscription

**Primary Actor:** Clinic Owner

**Goal:** Manage the clinic's ClinicOS subscription.

Potential actions include:

- View current plan.
- Upgrade plan.
- Downgrade plan.
- Cancel subscription.
- Review subscription history.

Subscription functionality is subject to the applicable business model and implementation stage.

---

## UC-SUB-002 — Enforce Plan Permissions

**Primary Actor:** System

**Goal:** Ensure users can only access functionality included in the applicable subscription plan.

**Main Flow:**

1. The user requests a plan-controlled feature.
2. The system identifies the clinic's subscription.
3. The system checks the applicable feature limits.
4. The system either permits or rejects the operation.
5. The system displays an appropriate message when access is unavailable.

---

# 7.21 Audit and Activity Use Cases

## UC-AUDIT-001 — Record User Activity

**Primary Actor:** System

**Goal:** Maintain traceability of relevant user actions.

Activities may include:

- Authentication events.
- Patient modifications.
- Appointment changes.
- Medical-record modifications.
- Financial operations.
- Administrative changes.
- Security events.

---

## UC-AUDIT-002 — Review Activity History

**Primary Actor:** Authorized Administrator / Clinic Owner

**Goal:** Review relevant historical activity.

The system should display, when applicable:

```text
Timestamp
User
Action
Resource
Previous State
New State
Context
```

Sensitive activity should remain auditable according to applicable policies.

---

# 7.22 Cross-Module Use Cases

## UC-CROSS-001 — Manage Patient Appointment

**Primary Actor:** Receptionist

**Goal:** Register or select a patient and schedule an appointment.

```text
Receptionist
    |
    v
Search / Register Patient
    |
    v
Select Patient
    |
    v
Check Availability
    |
    v
Select Date and Time
    |
    v
Select Service
    |
    v
Validate Conflict
    |
    v
Create Appointment
    |
    v
Confirm / Notify
```

---

## UC-CROSS-002 — Conduct Patient Consultation

**Primary Actor:** Healthcare Professional

**Goal:** Conduct a consultation using authorized patient information.

```text
Healthcare Professional
          |
          v
View Appointment
          |
          v
Select Patient
          |
          v
Access Authorized History
          |
          v
Start Consultation
          |
          v
Record Consultation
          |
          v
Update Medical Record
          |
          v
Finish Consultation
```

---

## UC-CROSS-003 — Register Appointment Payment

**Primary Actor:** Financial Staff

**Goal:** Associate a payment with an applicable clinic activity.

```text
Appointment
    |
    v
Charge / Financial Event
    |
    v
Payment
    |
    v
Financial Transaction
    |
    v
Financial History
    |
    v
Financial Dashboard
```

Financial information must remain independently protected by permissions.

---

## UC-CROSS-004 — Use AI With Patient Information

**Primary Actor:** Authorized Healthcare Professional

**Goal:** Use AI assistance while preserving patient-data permissions.

```text
Healthcare Professional
          |
          v
AI Request
          |
          v
Permission Check
          |
          v
Authorized Data
          |
          v
AI Processing
          |
          v
Generated Result
          |
          v
Human Review
          |
          v
Professional Decision
```

The AI must never bypass the access restrictions applied to the underlying patient information.

---

# 7.23 Global Preconditions

The following preconditions apply to most protected use cases:

1. The user must be authenticated.
2. The account must be active and eligible for access.
3. The user must operate within an authorized clinic context.
4. The user must have the required permissions.
5. Required related entities must exist.
6. Required information must satisfy validation rules.
7. Subscription restrictions must be satisfied when applicable.

---

# 7.24 Global Exception Scenarios

ClinicOS must handle common exceptions consistently.

Common exceptions include:

```text
Invalid Input
      |
      v
Missing Required Information
      |
      v
Duplicate Record
      |
      v
Unauthorized Access
      |
      v
Expired Session
      |
      v
Appointment Conflict
      |
      v
Invalid Status Transition
      |
      v
Payment Failure
      |
      v
External Service Failure
      |
      v
Notification Failure
      |
      v
Automation Failure
      |
      v
AI Service Failure
      |
      v
Network Failure
      |
      v
Database Failure
```

The system should:

1. Detect the exception.
2. Prevent the invalid operation whenever possible.
3. Display a clear and understandable message.
4. Preserve data integrity.
5. Record the event when appropriate.
6. Avoid exposing sensitive technical information.
7. Allow retry or recovery when supported.

---

# 7.25 Authorization Model

ClinicOS uses role-based and permission-based access control.

The general authorization flow is:

```text
User
 |
 v
Authentication
 |
 v
Account Status
 |
 v
Clinic Context
 |
 v
Role
 |
 v
Permission
 |
 v
Resource Access
 |
 v
Business Rules
 |
 v
Operation
```

An authenticated user is not automatically authorized to perform every operation.

For example:

```text
Receptionist
    |
    +--> Register Patient       [Allowed]
    +--> Schedule Appointment   [Allowed]
    +--> Search Patient         [Allowed]
    +--> View Full Medical     [Restricted]
    +--> Financial Reports      [Restricted]
```

Authorization must be evaluated consistently by all protected modules.

---

# 7.26 Multi-Tenant Isolation

ClinicOS is designed as a multi-tenant SaaS platform.

A user's access must remain associated with the appropriate clinic context.

```text
Clinic A
│
├── Users
├── Patients
├── Appointments
├── Consultations
├── Medical Records
└── Financial Data

Clinic B
│
├── Users
├── Patients
├── Appointments
├── Consultations
├── Medical Records
└── Financial Data
```

Data belonging to Clinic A must not become accessible to Clinic B merely because both clinics use the same platform.

This rule applies to:

- Patients.
- Appointments.
- Medical records.
- Financial information.
- Users.
- Reports.
- Search results.
- AI requests.
- Dashboard information.
- External integrations.

---

# 7.27 Use Case Dependencies

ClinicOS use cases have logical dependencies.

```text
Authentication
      |
      v
Access Control
      |
      v
Clinic Management
      |
      +------> User Management
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
      +------> Dashboard
      |
      +------> Search
      |
      +------> Reports
      |
      +------> AI
      |
      +------> Automation
```

Common dependencies include:

- Authentication before protected functionality.
- Access control before sensitive-data access.
- Clinic configuration before operational use.
- User management before assigning users and professionals.
- Patient management before appointments.
- Appointments before consultation workflows.
- Consultation data before related medical-record workflows.
- Financial records before financial dashboards and reports.
- Notification services before automated notifications.
- AI authorization before AI access.
- Subscription status before plan-controlled functionality.

---

# 7.28 MVP Use Cases

The initial MVP should prioritize the most essential clinic-management workflows.

The primary MVP use cases are:

```text
MVP
│
├── Authentication
│   ├── Register User
│   ├── Log In
│   └── Log Out
│
├── Clinic
│   └── Configure Clinic
│
├── Users
│   ├── Create User
│   └── Manage Permissions
│
├── Patients
│   ├── Register Patient
│   ├── Search Patient
│   ├── View Patient
│   └── Update Patient
│
├── Appointments
│   ├── Schedule Appointment
│   ├── View Appointment
│   ├── Reschedule Appointment
│   ├── Confirm Appointment
│   └── Cancel Appointment
│
├── Consultations
│   ├── Start Consultation
│   └── Record Consultation
│
├── Medical Records
│   ├── Access Medical Record
│   └── Add Clinical Information
│
├── Dashboard
│   └── View Role-Relevant Dashboard
│
├── Financial
│   └── Basic Financial Management
│
├── Search
│   └── Basic Search
│
├── Notifications
│   └── Core Notifications
│
├── AI
│   └── Initial AI Capabilities
│
└── Automation
    └── Core Automation
```

The exact MVP boundary may change according to customer validation and product priorities.

---

# 7.29 Future Use Cases

The following use cases may be implemented in later product stages:

```text
Future
│
├── Telemedicine
├── Patient Portal
├── Mobile Application
├── WhatsApp Integration
├── Digital Signatures
├── Advanced AI
├── Predictive Operational Insights
├── Advanced Automation
├── Multi-Location Management
├── Public API
└── Advanced External Integrations
```

Future functionality should only be promoted into the active product scope when supported by customer demand, business value, technical feasibility, security, and strategic priorities.

---

# 7.30 Use Case Traceability

Use cases must remain connected to requirements.

Example:

```text
Business Requirement
BR-003
Improve appointment management
          |
          v
User Requirement
UR-005
Receptionist needs to manage appointments
          |
          v
Functional Requirements
FR-APPT-001
FR-APPT-002
FR-APPT-003
FR-APPT-004
          |
          v
Use Cases
UC-APPT-001 Schedule Appointment
UC-APPT-003 Reschedule Appointment
UC-APPT-004 Confirm Appointment
UC-APPT-005 Cancel Appointment
          |
          v
Acceptance Criteria
          |
          v
Test Cases
```

Each important use case should identify the functional requirements that support it.

---

# 7.31 Use Case Acceptance Principles

A use case should be considered successfully implemented when:

1. The authorized actor can initiate the workflow.
2. Preconditions are correctly evaluated.
3. Required information is validated.
4. Authorization rules are enforced.
5. Business rules are enforced.
6. The main flow produces the expected result.
7. Alternative flows are handled correctly.
8. Exception scenarios do not compromise data integrity.
9. Relevant activity is recorded.
10. Unauthorized actors cannot bypass the workflow.
11. Sensitive information remains protected.
12. The resulting state is consistent with the applicable functional requirements.

---

# 7.32 Example Acceptance Scenario

### UC-PAT-001 — Register Patient

**Scenario:** Authorized receptionist registers a new patient.

```text
Given:
    The receptionist is authenticated.
    The receptionist has patients.create permission.
    The receptionist belongs to Clinic A.

When:
    The receptionist submits valid patient information.

Then:
    The system validates the information.
    The system creates the patient.
    The patient is associated with Clinic A.
    The patient becomes available to authorized users.
    The operation is recorded when required.
```

### Unauthorized Scenario

```text
Given:
    The user is authenticated.
    The user does not have patients.create permission.

When:
    The user attempts to register a patient.

Then:
    The system rejects the operation.
    No patient is created.
    The system returns an appropriate authorization error.
```

---

# 7.33 General Use Case Quality Criteria

Every production-ready use case should be:

- Clear.
- Testable.
- Traceable.
- Role-aware.
- Permission-aware.
- Consistent with business rules.
- Consistent with functional requirements.
- Consistent with multi-tenant isolation.
- Explicit about exceptional behavior.
- Independent of implementation-specific details where possible.

Use cases should describe **what the system and actors do**, rather than unnecessarily describing specific programming languages, frameworks, database queries, or implementation techniques.

---

# 7.34 Conclusion

The ClinicOS use case model represents the principal interactions between the platform and its users.

The central operational flow can be summarized as:

```text
Authenticate
    |
    v
Configure Clinic
    |
    v
Manage Users and Permissions
    |
    v
Register / Search Patients
    |
    v
Schedule Appointments
    |
    v
Conduct Consultations
    |
    v
Maintain Medical Records
    |
    +-------------------+
    |                   |
    v                   v
Dashboard            Financial
    |                   |
    +---------+---------+
              |
              v
           Search
              |
              v
       Notifications
              |
              v
       Automation / AI
```

The use case model establishes the behavioral foundation for ClinicOS development.

It should be continuously updated as:

- Functional requirements evolve.
- Business rules evolve.
- User feedback is collected.
- The MVP is validated.
- New modules are introduced.
- Security requirements evolve.
- AI capabilities expand.
- External integrations are introduced.

The ultimate objective is to ensure that every important ClinicOS capability can be understood from the perspective of the actor using it, traced back to a requirement, validated through acceptance criteria, and verified through testing.