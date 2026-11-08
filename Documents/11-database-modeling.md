# 11 — Database Modeling

## 1. Overview

ClinicOS uses a relational database architecture designed to support a secure, scalable, and maintainable healthcare management SaaS platform.

The database is responsible for storing and managing information related to clinics, users, patients, appointments, medical records, financial operations, and other application resources.

The primary database technology is **PostgreSQL**, with **Prisma ORM** responsible for database access, schema management, and migrations.

The database architecture follows these principles:

- **Data Integrity:** Maintain accurate and consistent information through relationships and constraints.
- **Multi-Tenancy:** Isolate each clinic's data from other clinics.
- **Security:** Protect sensitive information through access restrictions and controlled operations.
- **Scalability:** Support future growth in clinics, users, and records.
- **Maintainability:** Keep database structures organized and easy to evolve.
- **Performance:** Use appropriate indexes and efficient queries.
- **Extensibility:** Allow new modules and integrations without unnecessary changes to existing structures.

---

## 2. Database Technology

| Technology | Purpose |
|---|---|
| PostgreSQL | Primary relational database |
| Prisma ORM | Database access and schema management |
| Prisma Migrate | Database migration management |
| SQL | Relational data querying and manipulation |

### Database Responsibilities

The database must support:

- Clinic registration and configuration.
- User accounts and authentication data.
- Role and permission management.
- Patient registration and information.
- Appointment scheduling and management.
- Medical record organization.
- Financial transactions and billing information.
- Operational dashboards and reports.
- Audit logs and activity tracking.

---

## 3. Database Architecture

ClinicOS follows a relational database model.

Entities are organized into tables and connected through primary keys and foreign keys.

The architecture uses a clinic-level ownership model to ensure that business records belong to the appropriate clinic.

### Main Relationship Structure

```text
                    ┌──────────────────┐
                    │      Clinic      │
                    │                  │
                    │ id               │
                    │ name             │
                    │ createdAt        │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐   ┌──────────┐   ┌──────────────┐
        │  Users   │   │ Patients │   │ Appointments │
        │          │   │          │   │              │
        │ clinicId │   │ clinicId │   │ clinicId     │
        └──────────┘   └──────────┘   └──────────────┘
              │              │              │
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐   ┌──────────────┐  ┌──────────────┐
        │  Roles   │   │MedicalRecords│  │ Professionals│
        │          │   │              │  │              │
        │          │   │ patientId    │  │ userId       │
        └──────────┘   └──────────────┘  └──────────────┘
```

This diagram represents the conceptual organization of the system. The final implementation may use additional tables and relationships.

---

## 4. Core Database Entities

The following entities represent the main data structures planned for ClinicOS.

### 4.1 Clinic

The `Clinic` entity represents a healthcare organization registered on the platform.

Each clinic has its own users, patients, appointments, and operational data.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique clinic identifier |
| name | VARCHAR | Clinic name |
| email | VARCHAR | Contact email |
| phone | VARCHAR | Contact phone number |
| address | TEXT | Clinic address |
| createdAt | TIMESTAMP | Registration date |
| updatedAt | TIMESTAMP | Last update date |

**Relationships:**

- One clinic can have multiple users.
- One clinic can have multiple patients.
- One clinic can have multiple appointments.
- One clinic can have multiple financial records.
- One clinic can have multiple configuration records.

### 4.2 User

The `User` entity represents individuals who can access the application.

Users belong to a clinic and receive permissions according to their assigned roles.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique user identifier |
| clinicId | UUID | Associated clinic |
| name | VARCHAR | User's full name |
| email | VARCHAR | Unique login email |
| password | VARCHAR | Hashed password |
| roleId | UUID | Associated role identifier |
| role | VARCHAR | User role or legacy role field, if retained |
| isActive | BOOLEAN | Account status |
| createdAt | TIMESTAMP | Account creation date |
| updatedAt | TIMESTAMP | Last update date |

**Relationships:**

- Each user belongs to a clinic.
- Each user can be associated with a role.
- Each user can have multiple appointments as a professional.
- Each user can generate audit log entries.

Passwords must never be stored as plain text.

### 4.3 Role

The `Role` entity defines the access level and responsibilities of users.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique role identifier |
| name | VARCHAR | Role name |
| description | TEXT | Role description |
| createdAt | TIMESTAMP | Creation date |
| updatedAt | TIMESTAMP | Last update date |

**Planned Roles:**

- Owner
- Administrator
- Manager
- Professional
- Receptionist
- Financial

Roles determine which operations users can perform.

### 4.4 Permission

The `Permission` entity represents individual access permissions.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique permission identifier |
| name | VARCHAR | Permission name |
| description | TEXT | Permission description |

Examples:

```text
users.read
users.create
users.update
users.delete

patients.read
patients.create
patients.update
patients.delete

appointments.read
appointments.create
appointments.update
appointments.delete

dashboard.read
```

**Relationships:**

- A role can have multiple permissions.
- A permission can belong to multiple roles.

This relationship requires a junction table, such as `RolePermission`.

### 4.5 Patient

The `Patient` entity stores information about individuals receiving healthcare services.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique patient identifier |
| clinicId | UUID | Associated clinic |
| name | VARCHAR | Patient's full name |
| email | VARCHAR | Contact email |
| phone | VARCHAR | Contact phone number |
| birthDate | DATE | Date of birth |
| document | VARCHAR | Identification document, when required |
| address | TEXT | Patient address |
| createdAt | TIMESTAMP | Registration date |
| updatedAt | TIMESTAMP | Last update date |

**Relationships:**

- Each patient belongs to a clinic.
- A patient can have multiple appointments.
- A patient can have multiple medical records.
- A patient can have multiple financial records, when applicable.

Patient information must be accessible only to authorized users within the associated clinic.

### 4.6 Appointment

The `Appointment` entity represents scheduled healthcare services.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique appointment identifier |
| clinicId | UUID | Associated clinic |
| patientId | UUID | Associated patient |
| professionalId | UUID | Responsible professional |
| date | DATE | Appointment date |
| startTime | TIME | Appointment start time |
| endTime | TIME | Appointment end time |
| status | VARCHAR | Appointment status |
| notes | TEXT | Additional appointment information |
| createdAt | TIMESTAMP | Creation date |
| updatedAt | TIMESTAMP | Last update date |

**Planned Appointment Statuses:**

- Scheduled
- Confirmed
- Completed
- Cancelled
- No-show

**Relationships:**

- Each appointment belongs to a clinic.
- Each appointment is associated with a patient.
- Each appointment can be assigned to a professional.
- An appointment may be associated with a medical record.

The application must validate appointment conflicts and prevent unauthorized access to scheduling information.

### 4.7 MedicalRecord

The `MedicalRecord` entity stores clinical information associated with a patient.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique medical record identifier |
| clinicId | UUID | Associated clinic |
| patientId | UUID | Associated patient |
| professionalId | UUID | Responsible professional |
| appointmentId | UUID | Related appointment, when applicable |
| description | TEXT | Clinical information |
| diagnosis | TEXT | Diagnosis information |
| treatment | TEXT | Treatment information |
| createdAt | TIMESTAMP | Record creation date |
| updatedAt | TIMESTAMP | Last update date |

**Relationships:**

- Each medical record belongs to a clinic.
- Each medical record is associated with a patient.
- Each medical record is associated with an authorized professional.
- A medical record may reference an appointment.

Medical records contain sensitive health information and require strict access controls, traceability, and appropriate data protection measures.

### 4.8 FinancialRecord

The `FinancialRecord` entity is planned to support clinic financial operations.

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique financial record identifier |
| clinicId | UUID | Associated clinic |
| patientId | UUID | Related patient, when applicable |
| appointmentId | UUID | Related appointment, when applicable |
| description | VARCHAR | Transaction description |
| amount | DECIMAL | Transaction amount |
| type | VARCHAR | Income or expense |
| status | VARCHAR | Payment status |
| dueDate | DATE | Payment due date |
| paidAt | TIMESTAMP | Payment date |
| createdAt | TIMESTAMP | Creation date |
| updatedAt | TIMESTAMP | Last update date |

**Planned Financial Types:**

- Income
- Expense

**Planned Financial Statuses:**

- Pending
- Paid
- Overdue
- Cancelled

Financial operations will be introduced in a later development phase.

---

## 5. Entity Relationships

The database uses one-to-many and many-to-many relationships to represent the connections between entities.

### 5.1 One-to-Many Relationships

| Relationship | Description |
|---|---|
| Clinic → Users | One clinic can have multiple users |
| Clinic → Patients | One clinic can have multiple patients |
| Clinic → Appointments | One clinic can have multiple appointments |
| Patient → Appointments | One patient can have multiple appointments |
| Patient → Medical Records | One patient can have multiple medical records |
| User → Appointments | One professional can be assigned multiple appointments |
| Role → Users | One role can be assigned to multiple users |

### 5.2 Many-to-Many Relationships

| Relationship | Junction Table | Description |
|---|---|---|
| Roles ↔ Permissions | RolePermission | A role can have multiple permissions, and a permission can belong to multiple roles |

### 5.3 Relationship Considerations

- Foreign keys must maintain referential integrity.
- Required relationships must not allow invalid references.
- Optional relationships must allow null values when appropriate.
- Deletion behavior must be explicitly defined.
- Sensitive records should not be automatically deleted when a related user account is removed.
- Clinic ownership must be validated for related records.

---

## 6. Multi-Tenant Database Architecture

ClinicOS follows a multi-tenant architecture.

A tenant represents an individual clinic using the platform.

The database must ensure that each clinic can access only its own information.

### Tenant Isolation Model

```text
                    ClinicOS Platform
                           |
             ┌─────────────┴─────────────┐
             |                           |
             ▼                           ▼
       ┌────────────┐              ┌────────────┐
       │  Clinic A  │              │  Clinic B  │
       └─────┬──────┘              └─────┬──────┘
             |                           |
      ┌──────┼──────┐             ┌──────┼──────┐
      |      |      |             |      |      |
      ▼      ▼      ▼             ▼      ▼      ▼
    Users Patients Appointments  Users Patients Appointments
```

### Isolation Requirements

1. Every tenant-owned record must contain a `clinicId` reference.
2. The authenticated user's clinic must determine the data access scope.
3. Database queries must apply clinic-level restrictions.
4. Related records must be validated against the same clinic.
5. Users must not access records belonging to another clinic by manipulating identifiers.
6. Authorization must be enforced on the backend.
7. Automated tests must verify tenant isolation.

### Important Security Consideration

Filtering records by `clinicId` is essential, but it must be applied consistently across all relevant operations.

For stronger protection, PostgreSQL Row-Level Security (RLS) may be considered as an additional database-level security layer in the future.

---

## 7. Database Normalization

The database should follow relational normalization principles to reduce unnecessary duplication and improve data consistency.

### First Normal Form (1NF)

- Each field must contain a single value.
- Repeating groups should be avoided.
- Every record must be identifiable through a primary key.

### Second Normal Form (2NF)

- The database must satisfy 1NF.
- Non-key attributes must depend on the entire candidate key.

### Third Normal Form (3NF)

- The database must satisfy 2NF.
- Non-key attributes should not depend on other non-key attributes.

### Normalization Objectives

- Reduce duplicated information.
- Improve consistency.
- Simplify updates.
- Prevent insertion, update, and deletion anomalies.
- Maintain clear relationships between entities.

Denormalization may be considered later for specific reporting or performance requirements, provided data consistency is preserved.

---

## 8. Primary Keys and Foreign Keys

### Primary Keys

Every main entity must have a primary key that uniquely identifies each record.

UUIDs are the preferred identifier format for the database design.

Example:

```text
id: UUID
```

### Foreign Keys

Foreign keys establish relationships between database tables.

Examples:

```text
User.clinicId → Clinic.id

Patient.clinicId → Clinic.id

Appointment.clinicId → Clinic.id

Appointment.patientId → Patient.id

Appointment.professionalId → User.id

MedicalRecord.patientId → Patient.id
```

### Referential Integrity

The database must prevent invalid references.

Deletion and update behavior must be defined according to the business requirements.

For example:

- A clinic should not be deleted while dependent records require retention.
- A patient with historical medical records should not be permanently removed through an ordinary deletion operation.
- A user referenced by historical records should be deactivated or anonymized when legally appropriate rather than automatically deleted.

Retention, deletion, and anonymization policies must be defined in accordance with applicable legal requirements.

---

## 9. Indexing and Query Performance

Indexes improve query performance by reducing the amount of data PostgreSQL must scan.

ClinicOS should prioritize indexes for frequently accessed fields and common filtering operations.

### Recommended Indexes

| Table | Field | Purpose |
|---|---|---|
| User | email | Login and account lookup |
| User | clinicId | Clinic-level user filtering |
| Patient | clinicId | Clinic-level patient filtering |
| Appointment | clinicId | Clinic-level appointment filtering |
| Appointment | patientId | Patient appointment lookup |
| Appointment | professionalId | Professional scheduling lookup |
| Appointment | date | Date-based scheduling queries |
| MedicalRecord | patientId | Patient medical history lookup |
| MedicalRecord | clinicId | Clinic-level record filtering |
| FinancialRecord | clinicId | Financial record filtering |

### Composite Indexes

Composite indexes may improve performance for queries that frequently filter by multiple fields.

Examples:

```text
Appointment(clinicId, date)

Appointment(clinicId, professionalId, date)

Patient(clinicId, name)
```

Indexes should be based on actual query patterns and measured performance.

Excessive indexing should be avoided because indexes also increase storage requirements and the cost of database writes.

---

## 10. Data Types and Validation

Appropriate data types must be selected for each database field.

| Data Category | Recommended Type |
|---|---|
| Unique identifiers | UUID |
| Names and emails | VARCHAR |
| Descriptions | TEXT |
| Monetary values | DECIMAL |
| Boolean values | BOOLEAN |
| Calendar dates | DATE |
| Time values | TIME |
| Date and time events | TIMESTAMP or TIMESTAMPTZ |
| Structured metadata | JSONB, when appropriate |

### Validation Requirements

- Required fields must not accept null values.
- Email addresses must follow valid formatting rules.
- Monetary values must use appropriate decimal precision.
- Dates and times must be validated.
- Status values must follow defined application rules.
- Foreign key references must exist.
- Unique constraints must prevent duplicate values where required.

Application-level validation should be complemented by database constraints whenever appropriate.

---

## 11. Audit Logs and Data Traceability

ClinicOS is expected to implement audit logging for important operations.

Audit logs help identify who performed an action, when it happened, and which records were affected.

### Planned AuditLog Structure

| Field | Suggested Type | Description |
|---|---|---|
| id | UUID | Unique audit log identifier |
| clinicId | UUID | Associated clinic |
| userId | UUID | User who performed the action |
| action | VARCHAR | Operation performed |
| entity | VARCHAR | Affected entity |
| entityId | UUID | Identifier of the affected record |
| metadata | JSONB | Additional contextual information |
| createdAt | TIMESTAMP | Event timestamp |

### Examples of Audited Operations

- User creation.
- Permission changes.
- Patient registration.
- Patient information updates.
- Appointment creation.
- Appointment cancellation.
- Medical record modifications.
- Financial record updates.

Audit logs should be protected against unauthorized modification and deletion.

Sensitive personal and health information should not be unnecessarily duplicated in audit metadata.

---

## 12. LGPD and Data Protection

ClinicOS is intended for the Brazilian healthcare market and must consider the requirements of the Lei Geral de Proteção de Dados Pessoais (LGPD).

Healthcare information may constitute sensitive personal data under Brazilian data protection law.

### Data Protection Principles

- Data minimization.
- Purpose limitation.
- Access control.
- Secure data storage.
- Controlled information sharing.
- Retention policies.
- Appropriate deletion or anonymization procedures.
- Traceability of relevant operations.
- Protection against unauthorized access.

### Sensitive Data Considerations

Medical records, diagnoses, treatments, and other healthcare information require additional protection.

Access must be limited to authorized users with a legitimate operational need.

The system must not expose sensitive information through public endpoints, unnecessary logs, or unrestricted administrative interfaces.

LGPD compliance requires organizational and legal measures in addition to technical controls.

---

## 13. Backup and Recovery Strategy

Database backups are essential to protect application data against accidental deletion, corruption, and infrastructure failures.

### Planned Backup Strategy

- Automated database backups.
- Secure backup storage.
- Restricted backup access.
- Defined retention periods.
- Periodic recovery testing.
- Monitoring of backup operations.

### Recovery Objectives

The production environment should eventually define:

- **Recovery Point Objective (RPO):** The maximum acceptable amount of data loss measured in time.
- **Recovery Time Objective (RTO):** The maximum acceptable time required to restore the service.

Specific RPO and RTO targets will be determined according to production requirements.

Backups must be protected with appropriate encryption and access controls.

---

## 14. Database Migrations and Versioning

Prisma Migrate will be used to manage database schema changes.

Migrations provide a controlled way to evolve the database as the application grows.

### Migration Principles

- Every schema change must be documented through a migration.
- Migrations must be version-controlled.
- Production changes must follow a controlled deployment process.
- Destructive changes must be reviewed carefully.
- Existing data must be preserved whenever possible.
- Migration failures must be handled safely.

### Typical Workflow

```text
Modify Prisma Schema
        |
        ▼
Create Migration
        |
        ▼
Review SQL Changes
        |
        ▼
Apply Migration
        |
        ▼
Validate Database
        |
        ▼
Update Application
```

Database schema changes should remain compatible with the application version during deployment whenever possible.

---

## 15. Data Integrity and Business Rules

The database and backend must work together to enforce important business rules.

Examples include:

### User Management

- Every user must belong to a valid clinic.
- User emails must follow the application's uniqueness rules.
- Inactive users must not authenticate.
- Role assignments must reference valid roles.

### Patient Management

- Every patient must belong to a valid clinic.
- Patient information must be validated before storage.
- Patient records must not be exposed across clinics.
- Historical medical information must be handled according to retention policies.

### Appointment Management

- Every appointment must reference a valid patient.
- The assigned professional must belong to the same clinic.
- Appointment dates and times must be valid.
- Appointment status transitions must follow business rules.
- Scheduling conflicts must be checked.
- Appointment duration must follow configured limits.

### Financial Management

- Monetary values must use decimal precision.
- Financial records must belong to the correct clinic.
- Payment status changes must be validated.
- Financial history must remain traceable.

---

## 16. Future Database Improvements

As ClinicOS evolves, the database architecture may incorporate additional capabilities.

Planned improvements include:

- PostgreSQL Row-Level Security.
- Advanced audit logging.
- Database performance monitoring.
- Read replicas when justified by workload.
- Automated archival strategies.
- Advanced financial reporting.
- Analytics-oriented data structures.
- Notification history.
- External integration records.
- Document and file metadata management.
- More advanced backup and disaster recovery procedures.

These improvements will be introduced according to actual application requirements.

---

## 17. Database Modeling Summary

| Area | Technology or Approach |
|---|---|
| Database Engine | PostgreSQL |
| ORM | Prisma |
| Schema Management | Prisma Schema |
| Migrations | Prisma Migrate |
| Data Model | Relational |
| Primary Identifiers | UUID |
| Relationships | One-to-One, One-to-Many, Many-to-Many |
| Tenant Isolation | Clinic-Level Data Ownership |
| Authorization | Role-Based Access Control |
| Data Integrity | Constraints and Foreign Keys |
| Performance | Indexes and Query Optimization |
| Auditability | Audit Logs |
| Data Protection | LGPD-Oriented Practices |
| Backup | Automated Backup Strategy |

---

## 18. Implementation Status

This document describes the database architecture and intended data model for ClinicOS. The conceptual model and planned entities do not necessarily represent the complete current Prisma schema.

Implementation will follow an incremental approach.

| Component | Status |
|---|---|
| PostgreSQL Integration | In Development |
| Prisma ORM | In Development |
| Clinic Entity | Existing Foundation |
| User Entity | Existing Foundation |
| Role Management | Existing Foundation |
| Permission Management | Existing Foundation |
| Patient Entity | Existing Foundation |
| Appointment Entity | Existing Foundation |
| Medical Records | Planned |
| Financial Records | Planned |
| Audit Logs | Planned |
| Advanced Tenant Isolation | Planned |
| Database Index Optimization | Planned |
| Automated Backups | Planned |
| Recovery Procedures | Planned |

Implementation status must be updated as the actual database schema and application capabilities evolve.

---

## 19. Final Considerations

The ClinicOS database model establishes the foundation for a secure, organized, and scalable healthcare management platform.

PostgreSQL provides relational data storage, while Prisma simplifies database access, schema management, and migrations.

The architecture prioritizes clinic-level data isolation, referential integrity, controlled access, and protection of sensitive information.

As the platform evolves, the database will expand to support additional modules, reporting capabilities, financial operations, integrations, and future AI-powered features.

The ultimate goal is to maintain a reliable data foundation that supports the operational needs of healthcare organizations while protecting the privacy and integrity of their information.