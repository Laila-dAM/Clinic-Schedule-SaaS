# 14 — Permissions and Access Control

## 1. Overview

The Permissions and Access Control module defines what each authenticated user can access and which operations they are allowed to perform within Clinic Schedule SaaS.

The platform uses Role-Based Access Control (RBAC) to organize permissions according to user roles.

Each user belongs to a clinic and receives a role that determines their access level.

The main objectives are:

- Protect sensitive clinic information.
- Restrict unauthorized operations.
- Define access according to responsibilities.
- Support different types of clinic staff.
- Ensure tenant-level data isolation.
- Provide centralized permission management.
- Maintain a secure and scalable authorization architecture.

Authorization must always be enforced by the backend. Frontend restrictions are only intended to improve the user experience and must never replace server-side validation.

## 2. Access Control Architecture

The authorization system follows a layered architecture.

```text
+-----------------------------+
|       Next.js Frontend      |
|                             |
|  Pages / Menus / Components |
+--------------+--------------+
               |
               v
+-----------------------------+
|       Express API           |
|                             |
|       Authentication       |
|       Middleware            |
+--------------+--------------+
               |
               v
+-----------------------------+
|       User Context          |
|                             |
|  User ID / Clinic ID / Role |
+--------------+--------------+
               |
               v
+-----------------------------+
|       Permission Check      |
|                             |
|       RBAC Middleware       |
+--------------+--------------+
               |
               v
+-----------------------------+
|       Protected Resource    |
|                             |
|  Controller / Service       |
+--------------+--------------+
               |
               v
+-----------------------------+
|       PostgreSQL            |
|                             |
| Users / Roles / Permissions |
+-----------------------------+
```

### 2.1. Authorization Process

Every protected operation follows these steps:

1. The user sends a request to the API.
2. The authentication middleware validates the JWT.
3. The backend identifies the authenticated user.
4. The backend retrieves the user's clinic and role information.
5. The permission middleware checks the required permission.
6. If access is authorized, the request continues.
7. If access is denied, the API returns HTTP 403.

The backend must not trust role names, permissions, or clinic identifiers supplied directly by the frontend.

## 3. Role-Based Access Control (RBAC)

RBAC associates permissions with roles instead of assigning every permission individually to each user.

A user receives the permissions associated with their assigned role.

This approach simplifies access management and makes the system easier to maintain.

### 3.1. User Roles

The initial platform defines the following roles:

| Role | Description |
|---|---|
| Owner | Clinic owner with full administrative responsibility. |
| Admin | Administrator responsible for managing clinic operations and users. |
| Manager | Manager responsible for supervising operational activities. |
| Professional | Healthcare professional responsible for their clinical activities. |
| Receptionist | Staff member responsible for reception and appointment scheduling. |
| Financial | Staff member responsible for financial operations. |

### 3.2. Owner

The Owner is the primary administrator of the clinic.

Responsibilities:

- Manage clinic information.
- Manage users and roles.
- Access operational dashboards.
- Manage patients and appointments.
- Access financial information.
- Configure clinic settings.
- Manage permissions.
- Control administrative operations.

The owner role must receive the permissions required to administer the clinic.

### 3.3. Admin

The Admin manages the clinic's daily operations.

Responsibilities:

- Manage users when authorized.
- Manage patient records.
- Manage appointments.
- Access dashboards.
- Configure operational settings.
- Supervise clinic activities.

Administrative access must remain subject to the permissions assigned to the role.

### 3.4. Manager

The Manager supervises clinic operations.

Responsibilities:

- View operational information.
- Monitor appointments.
- Access patient information when authorized.
- Coordinate staff activities.
- Access reports and dashboards.
- Support daily clinic management.

The manager role should not automatically receive ownership or unrestricted administrative privileges.

### 3.5. Professional

The Professional performs healthcare-related activities.

Responsibilities:

- View authorized patient information.
- View their appointments.
- Manage appointments when authorized.
- Access relevant patient records.
- Update permitted clinical information.

Access to patient records and clinical information must follow the clinic's authorization rules and applicable privacy requirements.

### 3.6. Receptionist

The Receptionist handles front-desk activities.

Responsibilities:

- Register patients.
- View patient information required for reception.
- Create appointments.
- View scheduling information.
- Update appointments when authorized.
- Manage basic patient registration information.

Receptionists should not automatically have access to sensitive financial or clinical operations.

### 3.7. Financial

The Financial role is responsible for financial activities.

Responsibilities:

- Access financial information.
- View authorized financial records.
- Manage financial operations when implemented.
- Access relevant reports.
- View only the patient information necessary for financial activities.

Financial access must be restricted to the permissions assigned to this role.

## 4. Permission Structure

Permissions represent individual actions that users may perform.

The platform follows a resource-action naming convention.

```text
resource.action
```

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
```

### 4.1. Permission Naming Convention

The first part identifies the resource.

The second part identifies the allowed operation.

| Action | Description |
|---|---|
| read | View or retrieve information. |
| create | Create new records. |
| update | Modify existing records. |
| delete | Remove records. |

Additional actions may be introduced when required by the business logic.

Examples:

- `appointments.update_status`
- `financial.read`
- `reports.export`
- `settings.update`

Permission names must remain consistent throughout the backend and frontend.

## 5. Permission Catalog

The initial permission catalog is organized by application module.

### 5.1. Dashboard

| Permission | Description |
|---|---|
| `dashboard.read` | Access the clinic dashboard. |

### 5.2. Patients

| Permission | Description |
|---|---|
| `patients.read` | View patient records. |
| `patients.create` | Register new patients. |
| `patients.update` | Update patient information. |
| `patients.delete` | Delete patient records when permitted. |

### 5.3. Appointments

| Permission | Description |
|---|---|
| `appointments.read` | View appointments. |
| `appointments.create` | Create appointments. |
| `appointments.update` | Update appointment information. |
| `appointments.delete` | Delete appointments when permitted. |

### 5.4. Users

| Permission | Description |
|---|---|
| `users.read` | View clinic users. |
| `users.create` | Register new users. |
| `users.update` | Update user information. |
| `users.delete` | Remove or deactivate users when permitted. |

### 5.5. Financial

| Permission | Description |
|---|---|
| `financial.read` | View financial information. |
| `financial.create` | Create financial records. |
| `financial.update` | Update financial records. |
| `financial.delete` | Delete financial records when permitted. |

### 5.6. Settings

| Permission | Description |
|---|---|
| `settings.read` | View clinic settings. |
| `settings.update` | Modify clinic settings. |

### 5.7. Roles and Permissions

| Permission | Description |
|---|---|
| `roles.read` | View available roles. |
| `roles.create` | Create custom roles. |
| `roles.update` | Modify role configurations. |
| `roles.delete` | Remove custom roles. |
| `permissions.read` | View available permissions. |
| `permissions.manage` | Assign or modify role permissions. |

These permissions form the planned authorization catalog. Each permission must be registered and associated with the corresponding role before it can be used by the application.

## 6. Role and Permission Matrix

The following matrix represents the proposed default access configuration.

| Module | Owner | Admin | Manager | Professional | Receptionist | Financial |
|---|---|---|---|---|---|---|
| Dashboard | Full | Full | View | View | View | View |
| Patients | Full | Full | View | Authorized | Create / View / Update | Restricted |
| Appointments | Full | Full | Full | Authorized | Full | Restricted |
| Users | Full | Full | View | No access | No access | No access |
| Financial | Full | Full | View | No access | No access | Full |
| Settings | Full | Full | View | No access | No access | No access |
| Roles | Full | Restricted | No access | No access | No access | No access |

**Important:** This matrix represents the intended default policy, not proof that every role-permission combination is already implemented.

The final permissions must be explicitly registered and assigned in the database.

Access to patient and clinical information must also respect the user's professional responsibilities and applicable data protection requirements.

## 7. Database Structure

The permission system uses relational database entities to connect users, roles, and permissions.

### 7.1. User

The User entity represents an authenticated platform user.

Relevant fields:

| Field | Description |
|---|---|
| id | Unique user identifier. |
| name | User's full name. |
| email | User's email address. |
| password | Securely hashed password. |
| clinicId | Clinic associated with the user. |
| roleId | Reference to the assigned role. |

### 7.2. Role

The Role entity represents an authorization profile.

Relevant fields:

| Field | Description |
|---|---|
| id | Unique role identifier. |
| name | Role name. |
| clinicId | Clinic associated with the role, when applicable. |

System-defined roles and clinic-specific custom roles should be distinguished in the database model.

### 7.3. Permission

The Permission entity represents an individual authorization rule.

Relevant fields:

| Field | Description |
|---|---|
| id | Unique permission identifier. |
| name | Permission identifier, such as `patients.read`. |
| description | Explanation of the permission. |

### 7.4. RolePermission

The RolePermission relationship connects roles to permissions.

Relevant fields:

| Field | Description |
|---|---|
| roleId | Reference to the role. |
| permissionId | Reference to the permission. |

This relationship allows each role to have multiple permissions and each permission to be associated with multiple roles.

### 7.5. Relationship Diagram

```text
+------------------+
|      Clinic      |
+--------+---------+
         |
         | 1:N
         v
+------------------+
|       User       |
+--------+---------+
         |
         | N:1
         v
+------------------+
|       Role       |
+--------+---------+
         |
         | 1:N
         v
+------------------+
|  RolePermission  |
+--------+---------+
         |
         | N:1
         v
+------------------+
|    Permission    |
+------------------+
```

The database must enforce valid relationships and prevent users from being associated with roles belonging to another clinic when clinic-specific roles are used.

## 8. Backend Authorization

The backend is responsible for enforcing all authorization rules.

The current architecture uses Express middleware to authenticate users and validate permissions before executing protected controllers.

### 8.1. Authentication Middleware

The authentication middleware identifies the user associated with the request.

Its responsibilities include:

- Extracting the JWT.
- Validating the token.
- Identifying the user.
- Establishing the authenticated request context.
- Rejecting unauthenticated requests.

Authentication must happen before permission validation.

### 8.2. Permission Middleware

The permission middleware checks whether the authenticated user has the required permission.

Example:

```typescript
router.get(
  "/",
  authMiddleware,
  requirePermission("patients.read"),
  patientsController.list
);
```

The middleware should:

1. Receive the required permission.
2. Identify the authenticated user.
3. Retrieve the user using their identifier and clinic context.
4. Load the user's role and associated permissions.
5. Verify whether the required permission exists.
6. Allow or deny the request.

### 8.3. Permission Validation Example

```typescript
const hasPermission = user.roleRef.permissions.some(
  (rolePermission) =>
    rolePermission.permission.name === requiredPermission
);

if (!hasPermission) {
  return res.status(403).json({
    message: "Você não tem permissão para realizar esta ação."
  });
}
```

The exact property names must match the Prisma relations defined in the project schema.

### 8.4. Route Protection

Every restricted route must declare its required permission.

Example:

```typescript
router.get(
  "/",
  authMiddleware,
  requirePermission("users.read"),
  usersController.list
);

router.post(
  "/",
  authMiddleware,
  requirePermission("users.create"),
  usersController.create
);

router.patch(
  "/:id",
  authMiddleware,
  requirePermission("users.update"),
  usersController.update
);

router.delete(
  "/:id",
  authMiddleware,
  requirePermission("users.delete"),
  usersController.remove
);
```

The backend must never rely exclusively on frontend restrictions.

## 9. Frontend Permission Management

The frontend will use permission information to control which pages, menus, buttons, and actions are displayed to each user.

The frontend will be developed using Next.js, React, and TypeScript.

### 9.1. User Interface Restrictions

Examples:

- Hide the user management menu when the user lacks `users.read`.
- Hide the registration button when the user lacks `patients.create`.
- Disable editing actions when the user lacks `appointments.update`.
- Hide financial pages when the user lacks `financial.read`.
- Restrict settings pages when the user lacks `settings.read`.

These restrictions improve usability but do not provide security by themselves.

### 9.2. Permission-Based Rendering

Example:

```tsx
type Permission =
  | "patients.read"
  | "patients.create"
  | "patients.update"
  | "patients.delete";

interface PermissionGuardProps {
  permission: Permission;
  permissions: string[];
  children: React.ReactNode;
}

export function PermissionGuard({
  permission,
  permissions,
  children
}: PermissionGuardProps) {
  if (!permissions.includes(permission)) {
    return null;
  }

  return <>{children}</>;
}
```

Usage:

```tsx
<PermissionGuard
  permission="patients.create"
  permissions={userPermissions}
>
  <button>
    Novo paciente
  </button>
</PermissionGuard>
```

The frontend must obtain permissions from trusted authenticated user information returned by the backend.

### 9.3. Protected Pages

The application should restrict access to pages according to the user's permissions.

Examples:

| Page | Required Permission |
|---|---|
| Dashboard | `dashboard.read` |
| Patients | `patients.read` |
| Appointments | `appointments.read` |
| Users | `users.read` |
| Financial | `financial.read` |
| Settings | `settings.read` |

Users without the required permission should receive an appropriate access-denied experience.

## 10. Multi-Tenant Authorization

Clinic Schedule SaaS is designed as a multi-tenant application.

Each clinic operates within its own data context.

Authorization must consider both user permissions and clinic ownership.

### 10.1. Tenant Isolation Rules

- Every authenticated user must belong to a clinic.
- Every tenant-specific resource must be associated with its clinic.
- Users must only access resources belonging to their clinic.
- Permission checks must use the authenticated user's actual database record.
- Requests must not be allowed to override the user's clinic context.
- Role assignments must be validated against the clinic.
- Cross-clinic access must be rejected.

### 10.2. Query-Level Isolation

Example:

```typescript
const appointments = await prisma.appointment.findMany({
  where: {
    clinicId: authenticatedUser.clinicId
  }
});
```

Checking a user's permission is not enough.

The backend must also verify that the requested resource belongs to the user's clinic.

### 10.3. Resource Ownership Validation

When accessing a specific resource, the backend must validate both its identifier and clinic ownership.

Example:

```typescript
const patient = await prisma.patient.findFirst({
  where: {
    id: patientId,
    clinicId: authenticatedUser.clinicId
  }
});

if (!patient) {
  return res.status(404).json({
    message: "Paciente não encontrado."
  });
}
```

The application should avoid exposing the existence of resources belonging to another clinic.

## 11. Permission Management

Permission management allows authorized administrators to control which actions each role can perform.

### 11.1. Role Management

The planned role management interface should allow authorized users to:

- View available roles.
- Create custom roles.
- Update role information.
- Assign permissions to roles.
- Remove custom roles when permitted.

System-defined roles should have appropriate restrictions to prevent accidental removal or privilege escalation.

### 11.2. Permission Assignment

The permission assignment interface should display permissions grouped by module.

Example:

```text
PATIENTS
[x] View patients
[x] Create patients
[x] Update patients
[ ] Delete patients

APPOINTMENTS
[x] View appointments
[x] Create appointments
[x] Update appointments
[ ] Delete appointments

USERS
[x] View users
[ ] Create users
[ ] Update users
[ ] Delete users

FINANCIAL
[ ] View financial information
[ ] Create financial records
[ ] Update financial records
[ ] Delete financial records
```

The interface must save changes through authorized backend endpoints.

### 11.3. Permission Changes

When permissions are modified:

- The backend must validate the administrator's authorization.
- The changes must be persisted in the database.
- Subsequent authorization checks must use the updated permissions.
- Relevant changes should be recorded in audit logs.
- Users must not be able to modify their own privileges without authorization.

## 12. Security Requirements

The permission system must follow security best practices.

### 12.1. Least Privilege

Users should receive only the permissions necessary to perform their responsibilities.

New roles should not automatically receive unrestricted access.

### 12.2. Deny by Default

If a permission is missing, undefined, or cannot be verified, access must be denied.

### 12.3. Privilege Escalation Prevention

The application must prevent users from:

- Assigning themselves the owner role.
- Modifying their own permissions without authorization.
- Accessing administrative operations without permission.
- Changing their clinic identifier to access another tenant.
- Bypassing backend authorization through direct API requests.
- Modifying role assignments outside their authorized scope.

### 12.4. Sensitive Information

Access to patient records and financial information must be restricted according to the user's responsibilities.

The application must follow applicable LGPD requirements and maintain appropriate confidentiality controls.

### 12.5. Error Handling

The API should use consistent HTTP status codes.

| Status | Description |
|---|---|
| 401 | User is not authenticated. |
| 403 | User does not have the required permission. |
| 404 | Requested resource does not exist or is not accessible within the clinic. |
| 500 | Internal server error. |

Error responses must not expose internal authorization details, database structures, or sensitive information.

## 13. Audit Logging

Relevant permission and role changes should be recorded for security and accountability.

Events include:

- Role creation.
- Role modification.
- Role deletion.
- Permission assignment.
- Permission removal.
- User role changes.
- User activation or deactivation.
- Unauthorized access attempts.

Audit records should include:

- Event identifier.
- User responsible for the action.
- Clinic identifier.
- Action performed.
- Affected resource.
- Timestamp.
- Relevant metadata.

Sensitive information must not be included unnecessarily in audit records.

Audit logs should be protected against unauthorized modification or deletion.

## 14. Testing Strategy

The authorization system must be covered by automated tests.

### 14.1. Unit Tests

Test individual authorization components:

- Permission lookup.
- Permission validation.
- Role identification.
- Default access rules.
- Deny-by-default behavior.
- Clinic context validation.

### 14.2. Integration Tests

Test complete authorization scenarios:

- Authenticated user with the required permission.
- Authenticated user without the required permission.
- Unauthenticated requests.
- Invalid role assignments.
- Unauthorized user management.
- Unauthorized patient operations.
- Unauthorized appointment operations.
- Unauthorized financial access.
- Unauthorized settings access.
- Permission changes.
- Access to another clinic's resources.

### 14.3. Security Tests

Verify that:

- Users cannot escalate their privileges.
- Users cannot access another clinic's data.
- Direct API requests cannot bypass permission checks.
- Missing permissions result in denied access.
- Frontend restrictions are not treated as backend security.
- Role assignments respect clinic ownership.
- Sensitive operations are properly authorized.

## 15. Implementation Status

The authorization system is being developed incrementally.

| Feature | Status |
|---|---|
| User roles in the database | Implemented. |
| User-role relationship | Implemented. |
| Role-permission relationship | Implemented in the current data model. |
| Authentication middleware | Implemented. |
| Permission middleware | Implemented. |
| Permission-protected user routes | Implemented. |
| Permission-protected patient routes | Implemented. |
| Permission-protected appointment routes | Implemented. |
| Dashboard permission protection | Implemented in the route structure. |
| Complete permission catalog | To be validated and expanded. |
| Default role-permission matrix | Planned. |
| Custom role management | Planned. |
| Frontend permission guards | Planned. |
| Permission management interface | Planned. |
| Audit logging for permission changes | To be implemented or expanded. |
| Automated authorization tests | To be expanded. |

The implementation status must be updated as the backend and frontend evolve.

A permission appearing in this document does not mean it has already been registered in the database or assigned to a role.

## 16. Future Improvements

Future improvements may include:

- Custom roles for each clinic.
- More granular permissions.
- Permission inheritance.
- Temporary permissions.
- Time-based access restrictions.
- Advanced audit history.
- Administrative approval for sensitive operations.
- Automatic permission synchronization.
- More detailed access reports.
- Fine-grained restrictions for clinical records.
- Centralized permission management through the frontend.

## 17. Conclusion

The Permissions and Access Control module is essential to the security and organization of Clinic Schedule SaaS.

The RBAC architecture provides a structured way to manage access across different clinic roles and application modules.

By combining authentication, permission validation, tenant isolation, and audit logging, the platform establishes a foundation for secure multi-tenant operations.

The backend remains responsible for enforcing all authorization rules, while the frontend provides a clear and role-aware user experience.

Security, least privilege, privacy, and maintainability must remain priorities throughout the development process.

---

**Document:** 14-permissions.md  
**Project:** Clinic Schedule SaaS  
**Category:** Technical Documentation  
**Status:** Active Development