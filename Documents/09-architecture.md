# 09. System Architecture

**Project:** ClinicOS  
**Document:** System Architecture  
**Version:** 1.0  
**Status:** Draft  
**Last Updated:** November 2026

---

## 1. Overview

ClinicOS is a cloud-oriented, multi-tenant SaaS platform designed to simplify the operational management of small healthcare clinics, private practices, and multidisciplinary healthcare centers.

The system follows a modular architecture designed to support maintainability, security, scalability, and future expansion.

The architecture prioritizes:

- Modular organization.
- Separation of responsibilities.
- Secure authentication and authorization.
- Multi-tenant data isolation.
- Reliable data persistence.
- Consistent API communication.
- Maintainable business logic.
- Gradual infrastructure evolution.

The primary architectural principle is to keep the technical implementation manageable while providing users with a simple and consistent experience.

## 2. Architectural Principles

ClinicOS follows these fundamental principles.

### 2.1 Modularity

The application is organized into independent functional modules.

Each module is responsible for a specific business domain and should maintain clear boundaries between its responsibilities.

### 2.2 Separation of Concerns

The system separates:

- HTTP communication.
- Business logic.
- Authentication.
- Authorization.
- Data persistence.
- Infrastructure configuration.
- User interface.

This separation improves maintainability and makes future modifications easier.

### 2.3 Multi-Tenancy

ClinicOS is designed as a multi-tenant platform.

Each clinic represents an independent tenant with its own users, patients, and appointments.

Tenant isolation is enforced through clinic identification and access-control checks.

### 2.4 Security by Design

Security must be considered throughout the architecture rather than added after implementation.

Important principles include:

- Authentication for protected resources.
- Role-Based Access Control (RBAC).
- Least-privilege access.
- Password hashing.
- Secure token validation.
- Tenant isolation.
- Input validation.
- Protection of sensitive healthcare information.
- Auditability of important operations.

### 2.5 Scalability

The architecture should support gradual growth without introducing unnecessary infrastructure complexity.

The initial implementation uses a modular monolithic backend. Distributed services may be considered only when justified by actual operational requirements.

### 2.6 Maintainability

The system should use consistent naming conventions, predictable module structures, reusable middleware, and centralized configuration.

Changes should minimize unnecessary dependencies between modules.

---

## 3. High-Level Architecture

ClinicOS follows a client-server architecture.

The frontend communicates with the backend through HTTP requests using a REST API.

The backend validates requests, authenticates users, checks permissions, executes business rules, and communicates with the PostgreSQL database through Prisma ORM.

### 3.1 Architecture Diagram

```text
                  CLINICOS PLATFORM
                         |
          +--------------+--------------+
          |                             |
          v                             v
    FRONTEND CLIENT                FUTURE CLIENTS
    Web Application                Mobile Application
          |                             |
          +--------------+--------------+
                         |
                         v
                  REST API / HTTP
                         |
                         v
              EXPRESS BACKEND
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
     Authentication  Authorization   API Routes
       Middleware       (RBAC)       & Controllers
          |              |              |
          +--------------+--------------+
                         |
                         v
                  BUSINESS LOGIC
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
      Patients      Appointments      Users
       Module          Module         Module
          |              |              |
          +--------------+--------------+
                         |
                         v
                    PRISMA ORM
                         |
                         v
                   POSTGRESQL
                         |
                         v
                   CLINICOS DATA
```

**Architecture note:** The backend modules are currently organized within a single Express application. Future clients and external integrations are architectural possibilities, not currently implemented components.

---

## 4. Technology Stack

### 4.1 Backend

The current backend uses:

| Technology | Responsibility |
|---|---|
| Node.js | JavaScript runtime |
| TypeScript | Application development and type safety |
| Express 5 | HTTP server and routing |
| Prisma ORM | Database access and schema management |
| PostgreSQL | Relational database |
| JSON Web Token (JWT) | Authentication |
| bcryptjs | Password hashing |
| CORS | Cross-origin request handling |
| dotenv | Environment configuration |
| Vitest | Automated testing |
| Supertest | HTTP endpoint testing |

### 4.2 Frontend

The frontend has not yet been implemented.

The planned frontend direction includes:

- React.
- Next.js.
- TypeScript.
- Tailwind CSS.
- Lucide React.
- Axios or an equivalent HTTP client.

Final frontend technologies and implementation details will be confirmed during the frontend architecture and design phases.

### 4.3 Database

PostgreSQL is the primary relational database.

Prisma ORM provides:

- Database schema definition.
- Type-safe database queries.
- Relationship management.
- Database migrations.
- Data persistence.

Database changes must be managed through version-controlled Prisma migrations.

---

## 5. Backend Architecture

### 5.1 Architectural Style

The backend follows a modular monolithic architecture.

This means that the application runs as one backend service while its business responsibilities are separated into functional modules.

This approach provides:

- Simpler deployment.
- Lower infrastructure complexity.
- Easier local development.
- Centralized authentication.
- Shared database access.
- Clear module boundaries.
- A foundation for future service extraction if necessary.

ClinicOS does not currently use a microservices architecture.

### 5.2 Backend Structure

Current backend organization:

```text
backend/
|
+-- prisma/
|   +-- migrations/
|   +-- schema.prisma
|   +-- seed.ts
|
+-- src/
|   |
|   +-- middleware/
|   |   +-- auth.middleware.ts
|   |   +-- error.middleware.ts
|   |   +-- permission.middleware.ts
|   |   +-- role.middleware.ts
|   |
|   +-- modules/
|   |   |
|   |   +-- auth/
|   |   |   +-- auth.controller.ts
|   |   |   +-- auth.routes.ts
|   |   |
|   |   +-- patients/
|   |   |   +-- patients.controller.ts
|   |   |   +-- patients.routes.ts
|   |   |
|   |   +-- appointments/
|   |   |   +-- appointments.controller.ts
|   |   |   +-- appointments.routes.ts
|   |   |
|   |   +-- users/
|   |   |   +-- users.controller.ts
|   |   |   +-- users.routes.ts
|   |   |
|   |   +-- dashboard/
|   |       +-- dashboard.controller.ts
|   |       +-- dashboard.routes.ts
|   |
|   +-- app.ts
|   +-- server.ts
|   +-- prisma.ts
|
+-- tests/
+-- package.json
+-- tsconfig.json
+-- .gitignore
```

The structure may evolve as additional modules are introduced.

### 5.3 Application Entry Points

**server.ts**

Responsible for starting the HTTP server.

**app.ts**

Responsible for:

- Creating the Express application.
- Registering global middleware.
- Mounting API routes.
- Exposing the health-check endpoint.
- Handling unknown routes.
- Registering centralized error handling.

**prisma.ts**

Provides the Prisma Client instance used by backend modules.

---

## 6. Functional Modules

ClinicOS organizes its business capabilities into functional modules.

### 6.1 Authentication Module

Responsible for user authentication and account registration.

Current responsibilities:

- User registration.
- Clinic creation during registration.
- Password hashing.
- User login.
- Credential verification.
- JWT generation.

The authentication system uses JWT-based authentication.

The current token expiration is seven days.

### 6.2 User Management Module

Responsible for managing clinic users.

Current capabilities:

- List clinic users.
- Retrieve an individual user.
- Retrieve the authenticated user's profile.
- Create users.
- Update user information.
- Change user roles.
- Delete users.

All user management operations must respect clinic boundaries and the applicable permissions.

### 6.3 Patient Management Module

Responsible for maintaining patient information.

Current capabilities:

- Register patients.
- List patients.
- Retrieve patient details.
- Update patient information.
- Delete patients.

Patient records are associated with a clinic.

### 6.4 Appointment Management Module

Responsible for clinic scheduling.

Current capabilities:

- Create appointments.
- List appointments.
- Retrieve appointment details.
- Update appointments.
- Change appointment status.
- Delete appointments.
- Associate appointments with patients.
- Associate appointments with professionals.
- Define appointment duration.
- Validate appointment time intervals.
- Prevent overlapping active appointments for the same professional.

Appointments currently support the following operational statuses:

- scheduled
- confirmed
- completed
- cancelled

The appointment module is responsible for enforcing scheduling business rules.

### 6.5 Dashboard Module

Responsible for providing an operational overview of clinic information.

Current metrics include:

- Total patients.
- Total appointments.
- Total users.

Dashboard information is retrieved using clinic-scoped database queries.

Access is protected by the `dashboard.read` permission. This permission is part of the approved permission policy and must be included in the database seed configuration.

### 6.6 Future Modules

The architecture may progressively incorporate:

- Medical records.
- Consultation management.
- Financial management.
- Notifications.
- Reports and analytics.
- Task management.
- Automation.
- Artificial intelligence.
- Subscription and billing management.
- External integrations.

These modules are planned capabilities and are not considered implemented solely by their inclusion in this document.

---

## 7. API Architecture

### 7.1 Communication Standard

The backend exposes a RESTful HTTP API.

The API uses JSON for request and response payloads.

HTTP status codes communicate the result of each operation.

### 7.2 Current API Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a clinic and its owner |
| POST | `/auth/login` | Authenticate a user |
| GET | `/health` | Check API availability |
| GET | `/me` | Retrieve authenticated user information |
| GET | `/patients` | List patients |
| POST | `/patients` | Create a patient |
| GET | `/patients/:id` | Retrieve a patient |
| PUT | `/patients/:id` | Update a patient |
| DELETE | `/patients/:id` | Delete a patient |
| GET | `/appointments` | List appointments |
| POST | `/appointments` | Create an appointment |
| GET | `/appointments/:id` | Retrieve an appointment |
| PUT | `/appointments/:id` | Update an appointment |
| PATCH | `/appointments/:id/status` | Update appointment status |
| DELETE | `/appointments/:id` | Delete an appointment |
| GET | `/users` | List users |
| POST | `/users` | Create a user |
| GET | `/users/:id` | Retrieve a user |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |
| GET | `/users/me` | Retrieve current user information |
| GET | `/dashboard` | Retrieve dashboard metrics |

All protected endpoints require authentication.

Authorization requirements are defined by each route.

### 7.3 API Request Flow

```text
CLIENT REQUEST
      |
      v
EXPRESS ROUTER
      |
      v
AUTHENTICATION
      |
      v
USER IDENTIFICATION
      |
      v
PERMISSION CHECK
      |
      v
INPUT VALIDATION
      |
      v
BUSINESS RULES
      |
      v
PRISMA ORM
      |
      v
POSTGRESQL
      |
      v
JSON RESPONSE
```

Not every route uses every stage. Public authentication routes, for example, do not require an authenticated session.

---

## 8. Database Architecture

### 8.1 Database Model

ClinicOS uses a relational database model.

The current Prisma schema includes the following entities:

- Clinic
- User
- Patient
- Appointment
- Role
- Permission

### 8.2 Core Relationships

```text
CLINIC
  |
  +---- USERS
  |       |
  |       +---- ROLE
  |               |
  |               +---- PERMISSIONS
  |
  +---- PATIENTS
  |       |
  |       +---- APPOINTMENTS
  |
  +---- APPOINTMENTS
          |
          +---- PROFESSIONAL (USER)
```

### 8.3 Entity Responsibilities

**Clinic**

Represents a tenant and the organizational boundary for clinic data.

**User**

Represents an authenticated person associated with a clinic and a role.

**Patient**

Stores patient registration information belonging to a clinic.

**Appointment**

Stores scheduling information, including date, time, duration, status, patient, and professional.

**Role**

Defines a user's access role.

**Permission**

Defines an individual authorization capability.

### 8.4 Data Integrity

The database uses:

- UUID identifiers.
- Relational foreign keys.
- Unique constraints where applicable.
- Required fields.
- Default values.
- Prisma migrations.

Business rules must be validated by the backend in addition to database constraints.

Tenant consistency between related records must also be verified by application-level checks. The current relational schema does not independently enforce that every related record belongs to the same clinic.

---

## 9. Multi-Tenant Architecture

### 9.1 Tenant Model

Each clinic is an independent tenant.

The `Clinic` entity represents the tenant, while related records contain a `clinicId` identifying their associated clinic.

Current tenant-scoped entities include:

- User.
- Patient.
- Appointment.

### 9.2 Tenant Isolation

Every protected operation involving clinic-owned data must use the authenticated user's clinic context.

The backend obtains the clinic identifier from the authenticated user rather than trusting a clinic identifier supplied by the client.

Example:

```ts
const clinicId = req.user!.clinicId;

const patients = await prisma.patient.findMany({
  where: {
    clinicId,
  },
});
```

This ensures that a user retrieves records associated with their own clinic.

### 9.3 Isolation Requirements

The architecture must ensure that:

- Users cannot access another clinic's patients.
- Users cannot access another clinic's appointments.
- Users cannot manage another clinic's users.
- Appointment relationships are validated against the current clinic.
- Dashboard metrics are calculated within the current clinic.
- Unauthorized cross-tenant operations are rejected.

Tenant isolation must be applied consistently across every module.

### 9.4 Future Multi-Tenant Expansion

Future versions may introduce:

- Multiple clinic memberships.
- Controlled clinic switching.
- Centralized tenant administration.
- Tenant-specific configurations.
- Tenant-level subscription management.

These capabilities require additional data modeling and authorization rules.

---

## 10. Authentication and Authorization

### 10.1 Authentication

ClinicOS uses JSON Web Tokens for authenticated API access.

The current authentication flow is:

```text
USER LOGIN
    |
    v
CREDENTIAL VALIDATION
    |
    v
PASSWORD VERIFICATION
    |
    v
JWT GENERATION
    |
    v
CLIENT RECEIVES TOKEN
    |
    v
PROTECTED API REQUEST
    |
    v
TOKEN VERIFICATION
    |
    v
USER RETRIEVAL
    |
    v
REQUEST AUTHORIZED
```

Passwords are hashed using bcryptjs before storage.

The JWT secret is supplied through the environment variable `JWT_SECRET`.

### 10.2 Role-Based Access Control

ClinicOS implements Role-Based Access Control (RBAC).

The current roles are:

| Role | Responsibility |
|---|---|
| owner | Clinic ownership and full administration |
| admin | Administrative management |
| manager | Operational management |
| professional | Healthcare professional activities |
| receptionist | Patient registration and scheduling |
| financial | Financial-related responsibilities |

### 10.3 Permission Model

Permissions follow the resource-action convention.

Examples:

```text
patients.read
patients.create
patients.update
patients.delete

appointments.read
appointments.create
appointments.update
appointments.delete

users.read
users.create
users.update
users.delete

dashboard.read
```

Permissions are associated with roles through the Role-Permission relationship.

The backend checks the required permission before allowing protected operations.

### 10.4 Permission Assignment

The initial permission policy is:

| Role | Access Policy |
|---|---|
| owner | All current permissions |
| admin | All current permissions |
| manager | Patient and appointment management; user reading |
| professional | Patient reading/updating and appointment management |
| receptionist | Patient registration/reading/updating and appointment management |
| financial | Patient and appointment reading |

The `dashboard.read` permission is intended to be available to all six roles because the current dashboard exposes aggregate operational counts.

This policy must be maintained in the Prisma seed configuration.

### 10.5 Authorization Principles

The authorization model follows:

- Least privilege.
- Explicit permission checks.
- Clinic-level data isolation.
- Server-side authorization.
- Role-controlled administrative operations.
- Protection against privilege escalation.

Frontend visibility must never be considered a replacement for backend authorization.

---

## 11. Security Architecture

Security is a fundamental requirement because ClinicOS handles healthcare-related information.

### 11.1 Authentication Security

The system must:

- Hash passwords before storing them.
- Validate authentication tokens.
- Reject expired or invalid tokens.
- Protect private API endpoints.
- Keep JWT secrets outside source control.
- Avoid exposing sensitive authentication information.

### 11.2 Authorization Security

The system must:

- Validate permissions on the backend.
- Enforce clinic-level isolation.
- Prevent unauthorized role assignment.
- Protect administrative endpoints.
- Apply access restrictions consistently.

### 11.3 Data Protection

Future production implementation must consider:

- HTTPS for all external communication.
- Encryption at rest where applicable.
- Secure secret management.
- Database access restrictions.
- Secure backups.
- Data retention policies.
- Sensitive-data minimization.
- Auditing of important operations.

### 11.4 Input Validation

All API inputs must be validated before business operations are executed.

Validation should cover:

- Required fields.
- Data types.
- String lengths.
- Email formats.
- Date and time formats.
- Appointment duration.
- Resource ownership.
- Valid status transitions.
- Related record existence.

### 11.5 LGPD Considerations

ClinicOS must be designed with the Brazilian General Data Protection Law (LGPD) in mind.

The architecture should support:

- Appropriate access restrictions.
- Purpose limitation.
- Data minimization.
- Secure processing.
- Controlled data retention.
- Data subject rights.
- Incident response.
- Traceability of sensitive operations.

Applicable legal and regulatory requirements must be validated before production deployment.

### 11.6 Security Improvements

The following improvements remain part of the technical roadmap:

- Centralized environment validation.
- Rate limiting for authentication endpoints.
- Restricted production CORS configuration.
- Security headers.
- Stronger input validation.
- Secure session and token invalidation strategies.
- Improved audit logging.
- Automated security testing.

---

## 12. Error Handling and Logging

### 12.1 Error Handling

ClinicOS uses centralized Express error middleware.

The objective is to provide consistent API error responses while preventing internal implementation details from being exposed to clients.

Expected HTTP status categories include:

| Status | Meaning |
|---|---|
| 200 | Successful request |
| 201 | Resource created |
| 400 | Invalid request |
| 401 | Authentication required or invalid |
| 403 | Permission denied |
| 404 | Resource not found |
| 409 | Resource conflict |
| 422 | Validation failure |
| 500 | Internal server error |

The exact mapping should be standardized as the API evolves.

### 12.2 Logging

The backend currently uses console-based logging.

Future production logging should support:

- Application errors.
- Authentication events.
- Authorization failures.
- Important administrative actions.
- Integration failures.
- Operational events.

Sensitive information, passwords, tokens, and unnecessary patient data must never be included in logs.

### 12.3 Auditability

An audit system is planned for future versions.

Potential audit events include:

- User creation.
- Role changes.
- Patient updates.
- Appointment modifications.
- Permission changes.
- Sensitive administrative operations.

Audit records should preserve relevant actor, action, resource, timestamp, and clinic context.

---

## 13. Testing Architecture

Automated testing is necessary to maintain system reliability.

### 13.1 Current Testing Stack

- Vitest.
- Supertest.
- Mocked Prisma Client operations.

### 13.2 Current Test Coverage

The existing test suite primarily covers appointment functionality.

Current coverage includes:

- Appointment creation.
- Input validation.
- Date and time validation.
- Duration validation.
- Overlapping appointment prevention.
- Appointment updates.
- Status transitions.
- Appointment deletion.
- Missing resources.
- Clinic isolation scenarios.

The current test suite contains 41 passing tests.

### 13.3 Testing Strategy

Future testing should expand to include:

**Unit Tests**

- Business rules.
- Input validation.
- Permission evaluation.
- Utility functions.

**Integration Tests**

- Authentication endpoints.
- Patient operations.
- Appointment operations.
- User management.
- Dashboard access.
- Multi-tenant isolation.

**Security Tests**

- Unauthorized access.
- Invalid JWTs.
- Cross-clinic access attempts.
- Privilege escalation.
- Permission enforcement.

**Database Tests**

- Referential integrity.
- Migration consistency.
- Transaction behavior.
- Unique constraints.
- Concurrent scheduling operations.

Mocked tests should be complemented by tests using a real test database for database-specific guarantees.

---

## 14. Performance and Scalability

ClinicOS should prioritize efficient data access and predictable application behavior.

### 14.1 Database Performance

Potential improvements include:

- Indexing frequently queried fields.
- Optimizing clinic-scoped queries.
- Pagination for large collections.
- Efficient relational queries.
- Avoiding unnecessary database requests.
- Monitoring slow queries.

### 14.2 Appointment Scheduling Performance

Appointment validation must remain reliable when multiple users schedule appointments simultaneously.

The current implementation checks for overlapping active appointments at the application level.

Future improvements should consider transaction strategies and database-level concurrency protection to prevent simultaneous requests from creating conflicting schedules.

### 14.3 Application Scalability

The initial architecture uses a single backend application.

Future scalability improvements may include:

- Horizontal application scaling.
- Database connection management.
- Background job processing.
- Caching.
- Dedicated notification services.
- Monitoring and alerting.
- Object storage for uploaded files.

These capabilities should be introduced according to actual product requirements.

---

## 15. Deployment Architecture

### 15.1 Current Development Environment

The backend is developed locally using:

- Node.js.
- TypeScript.
- Express.
- Prisma.
- PostgreSQL.
- Environment variables.

The current development server uses port `3000`.

### 15.2 Planned Production Environment

Production infrastructure has not yet been selected.

The future deployment architecture should include:

```text
             USERS
               |
               v
         HTTPS / DOMAIN
               |
               v
        FRONTEND HOSTING
               |
               v
          REST API
               |
               v
       BACKEND HOSTING
               |
        +------+------+
        |             |
        v             v
    POSTGRESQL     EXTERNAL
     DATABASE      SERVICES
```

### 15.3 Deployment Requirements

Production deployment should provide:

- HTTPS.
- Secure environment variables.
- Database access restrictions.
- Database backups.
- Migration management.
- Application monitoring.
- Error logging.
- Health checks.
- Recovery procedures.
- Controlled deployment processes.

### 15.4 Environment Configuration

Sensitive configuration must be supplied through environment variables.

Current environment variables include:

```env
DATABASE_URL=
JWT_SECRET=
```

Future configuration may include:

```env
PORT=
NODE_ENV=
CORS_ORIGIN=
```

Actual secret values must never be committed to version control.

---

## 16. Integrations and External Services

The architecture should support future integrations through clearly defined interfaces.

Potential integrations include:

- Email providers.
- WhatsApp messaging providers.
- Payment gateways.
- AI providers.
- External calendar services.
- Telemedicine providers.
- Healthcare-related APIs.

Integrations should remain isolated from core business logic whenever possible.

External services must not bypass ClinicOS authentication, authorization, or tenant isolation requirements.

No specific external provider has been selected as a mandatory part of the current architecture.

---

## 17. Artificial Intelligence Architecture

Artificial intelligence is part of the long-term ClinicOS product vision.

AI functionality should be introduced as an independent capability integrated with authorized application services.

Potential use cases include:

- Administrative assistance.
- Appointment-related automation.
- Patient communication support.
- Operational insights.
- Data analysis.
- Workflow automation.

### 17.1 AI Integration Principles

AI functionality must:

- Respect user permissions.
- Respect clinic data isolation.
- Minimize sensitive data exposure.
- Provide understandable results.
- Avoid unauthorized actions.
- Maintain human oversight where necessary.
- Follow applicable privacy requirements.

AI should assist users rather than independently make sensitive clinical decisions.

### 17.2 Future Architecture

```text
USER
 |
 v
CLINICOS FRONTEND
 |
 v
BACKEND API
 |
 v
AUTHENTICATION
 |
 v
AUTHORIZATION
 |
 v
AI SERVICE LAYER
 |
 +-------> AI PROVIDER
 |
 +-------> BUSINESS DATA
 |
 v
VALIDATION
 |
 v
HUMAN REVIEW
 |
 v
AUTHORIZED ACTION
```

AI providers and infrastructure remain subject to future technical and security decisions.

---

## 18. Architecture Evolution

ClinicOS should evolve incrementally.

### Phase 1 — Technical Foundation

Current focus:

- Express backend.
- TypeScript.
- PostgreSQL.
- Prisma ORM.
- Authentication.
- RBAC.
- Multi-tenant data model.
- Core API modules.

### Phase 2 — Frontend Development

Planned:

- UX and UI design.
- Design system.
- Authentication screens.
- Dashboard.
- Patient management.
- Appointment management.
- User management.
- Backend integration.

### Phase 3 — Core Platform Expansion

Planned:

- Improved dashboard metrics.
- Advanced scheduling.
- Consultation workflows.
- Medical records.
- Financial management.
- Audit history.
- Expanded automated testing.

### Phase 4 — Operational Maturity

Planned:

- Production deployment.
- Monitoring.
- Automated backups.
- Improved security controls.
- Performance optimization.
- CI/CD.
- Operational documentation.

### Phase 5 — Advanced Capabilities

Future possibilities:

- Notifications.
- WhatsApp integration.
- Automation.
- AI assistance.
- Advanced analytics.
- Patient portal.
- Telemedicine.
- Mobile application.

---

## 19. Architectural Decisions and Open Questions

The following decisions are currently established:

| Area | Decision |
|---|---|
| Backend architecture | Modular monolith |
| Backend framework | Express 5 |
| Programming language | TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| API style | REST |
| Authentication | JWT |
| Password hashing | bcryptjs |
| Authorization | RBAC |
| Tenant model | Clinic-based multi-tenancy |
| Testing | Vitest and Supertest |
| Frontend | Not yet implemented |

The following decisions remain open:

- Frontend hosting provider.
- Backend hosting provider.
- Production database hosting.
- Backup and recovery policy.
- CI/CD platform.
- Logging and monitoring provider.
- Email and messaging providers.
- AI provider.
- Payment provider.
- Production session and token management strategy.
- Advanced audit retention policies.

Architectural decisions should be documented and reviewed whenever significant changes affect the system.

---

## 20. Architectural Quality Attributes

The architecture should be evaluated against the following quality attributes.

| Attribute | Objective |
|---|---|
| Security | Protect users and clinic information |
| Reliability | Maintain consistent application behavior |
| Maintainability | Keep modules easy to understand and modify |
| Scalability | Support gradual business growth |
| Performance | Provide responsive operations |
| Availability | Minimize service interruptions |
| Usability | Support simple and efficient workflows |
| Extensibility | Allow future modules and integrations |
| Data Integrity | Preserve valid relationships and business rules |
| Privacy | Protect personal and healthcare information |

These attributes should guide technical decisions throughout development.

---

## 21. Conclusion

The ClinicOS architecture establishes the technical foundation for a modern, modular, and secure clinic management SaaS platform.

The current implementation uses a modular monolithic backend built with Express, TypeScript, Prisma, and PostgreSQL.

Authentication, authorization, clinic-based data separation, patient management, appointment scheduling, user management, and dashboard functionality form the current technical foundation.

Future development should preserve the established architectural principles while progressively introducing frontend capabilities, additional business modules, production infrastructure, automation, and intelligent services.

The central architectural philosophy is:

**Build a simple and reliable foundation first. Introduce complexity only when the product genuinely needs it.**

ClinicOS should remain modular, secure, maintainable, and scalable while delivering an intuitive experience for healthcare clinics.