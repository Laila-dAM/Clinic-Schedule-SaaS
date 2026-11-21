# 13 — Authentication

## 1. Overview

Authentication is a core component of Clinic Schedule SaaS. It ensures that only authorized users can access the platform and that each user can interact exclusively with the resources permitted by their role and clinic membership.

The authentication system is designed to provide a secure, reliable, and straightforward experience for clinic owners, administrators, healthcare professionals, receptionists, and financial staff.

The system uses:

- **Frontend:** Next.js, React, and TypeScript.
- **Backend:** Node.js, Express.js, and TypeScript.
- **Database:** PostgreSQL.
- **ORM:** Prisma.
- **Authentication:** JSON Web Tokens (JWT).
- **Password hashing:** bcrypt.
- **Authorization:** Role-Based Access Control (RBAC).
- **Communication:** REST API over HTTPS.

## 2. Authentication Objectives

The authentication module must:

- Allow users to securely access their accounts.
- Allow new clinics and their owners to register.
- Validate user credentials.
- Protect private application routes.
- Manage authenticated sessions.
- Support password recovery.
- Enforce role-based permissions.
- Isolate data between different clinics.
- Prevent unauthorized access to sensitive information.
- Provide clear feedback for authentication errors.

## 3. User Roles

The platform uses Role-Based Access Control (RBAC) to determine which features and resources each user can access.

The initial roles include:

| Role | Description |
|---|---|
| Owner | Clinic owner with administrative control over the clinic. |
| Admin | Administrator responsible for managing the clinic and its users. |
| Manager | Manager responsible for operational activities. |
| Professional | Healthcare professional who manages their appointments and patient information according to assigned permissions. |
| Receptionist | Receptionist responsible for scheduling and patient registration. |
| Financial | Staff member responsible for financial operations. |

### 3.1. Role Permissions

Each role receives a set of permissions that determines which actions can be performed.

Examples of permissions:

- `dashboard.read`
- `patients.read`
- `patients.create`
- `patients.update`
- `patients.delete`
- `appointments.read`
- `appointments.create`
- `appointments.update`
- `appointments.delete`
- `users.read`
- `users.create`
- `users.update`
- `users.delete`

Permissions must be validated by the backend.

Hiding buttons or pages in the frontend is not sufficient to protect restricted operations.

## 4. Authentication Architecture

The authentication process follows a client-server architecture.

```text
+---------------------------+
|       Next.js Frontend    |
|                           |
|  Login / Register / Reset |
+-------------+-------------+
              |
              | HTTPS Request
              v
+---------------------------+
|       Express API         |
|                           |
|    Authentication Routes |
+-------------+-------------+
              |
              v
+---------------------------+
|   Authentication Logic   |
|                           |
|  1. Validate Credentials |
|  2. Verify Password      |
|  3. Generate JWT         |
+-------------+-------------+
              |
              v
+---------------------------+
|       PostgreSQL          |
|                           |
|  Users / Clinics / Roles  |
|       Permissions         |
+---------------------------+
```

### 4.1. Authentication Flow

The standard login process follows these steps:

1. The user accesses the login page.
2. The user enters their email and password.
3. The frontend sends the credentials to the authentication API.
4. The backend validates the submitted information.
5. The backend searches for the user in the database.
6. The password is verified using bcrypt.
7. If the credentials are valid, the backend generates an authentication token.
8. The frontend establishes the authenticated session.
9. The user is redirected to the dashboard.

If the credentials are invalid, the API returns an appropriate error response.

## 5. Login

The login page allows registered users to access the platform.

### 5.1. Required Fields

| Field | Type | Validation |
|---|---|---|
| Email | Email | Required and valid email format. |
| Password | Password | Required. |

### 5.2. Login Endpoint

**Method:** `POST`

**Route:**

```http
/auth/login
```

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Expected Responsibilities:**

- Validate the request body.
- Check whether the email exists.
- Verify the password using bcrypt.
- Generate a JWT after successful authentication.
- Return the authenticated user's information.
- Reject invalid credentials.

### 5.3. Login Error Handling

The application must handle the following situations:

- Invalid email or password.
- Missing required fields.
- Invalid email format.
- User not found.
- Account or session restrictions.
- Internal server errors.

For security reasons, login errors should not reveal whether an email address is registered.

## 6. Registration

Registration allows a new clinic to create an account and establish its initial administrative user.

The first registered user becomes the clinic owner.

### 6.1. Registration Fields

| Field | Type | Validation |
|---|---|---|
| Full Name | Text | Required. |
| Email | Email | Required and unique within the applicable account system. |
| Password | Password | Required and validated against password security rules. |
| Clinic Name | Text | Required. |

### 6.2. Registration Endpoint

**Method:** `POST`

**Route:**

```http
/auth/register
```

**Request Body:**

```json
{
  "name": "Clinic Owner",
  "email": "owner@example.com",
  "password": "SecurePassword123",
  "clinicName": "Example Clinic"
}
```

### 6.3. Registration Process

The registration process must:

1. Validate all required fields.
2. Check whether the email is already registered.
3. Validate password requirements.
4. Create the clinic record.
5. Find the appropriate owner role.
6. Hash the password using bcrypt.
7. Create the initial user associated with the clinic.
8. Associate the owner role with the user.
9. Return an appropriate registration response.

The clinic and its initial owner must be created within a database transaction to prevent incomplete registrations.

### 6.4. Registration Security

- Passwords must never be stored as plain text.
- Email uniqueness must be enforced by the database.
- Passwords must be hashed before persistence.
- The initial user must receive the owner role.
- The clinic must be created with its own unique identifier.
- Registration must not allow users to assign themselves privileged roles.
- Database operations must preserve clinic ownership relationships.

## 7. Password Security

Passwords are protected using bcrypt.

### 7.1. Password Hashing

The backend must hash passwords before storing them in PostgreSQL.

Example:

```typescript
import bcrypt from "bcrypt";

const saltRounds = 12;

const hashedPassword = await bcrypt.hash(
  password,
  saltRounds
);
```

### 7.2. Password Verification

During login, bcrypt compares the submitted password with the stored hash.

```typescript
const isValidPassword = await bcrypt.compare(
  password,
  user.password
);
```

The original password must never be returned by the API.

### 7.3. Password Requirements

The application should enforce the following minimum requirements:

- At least 8 characters.
- At least one uppercase letter.
- At least one lowercase letter.
- At least one number.
- Additional protection against commonly used passwords.

Password requirements must be consistent between frontend validation and backend validation.

The backend remains the final authority.

## 8. JWT Authentication

JSON Web Tokens are used to authenticate requests to protected API endpoints.

### 8.1. Token Generation

After successful authentication, the backend generates a signed JWT.

The token should contain the minimum information required to identify the authenticated user.

Example payload:

```json
{
  "sub": "user-id",
  "clinicId": "clinic-id",
  "iat": 1790000000,
  "exp": 1790604800
}
```

The token must not contain passwords, password hashes, medical records, or other sensitive personal information.

### 8.2. Token Validation

Protected requests must include a valid authentication token.

Example:

```http
Authorization: Bearer <access_token>
```

The authentication middleware must:

1. Extract the token from the request.
2. Verify its signature.
3. Validate its expiration.
4. Identify the authenticated user.
5. Confirm that the user still exists and belongs to the expected clinic context.
6. Attach the authenticated user information to the request.
7. Allow the request to continue.

Invalid, missing, or expired tokens must be rejected.

### 8.3. Token Expiration

Authentication tokens must have a defined expiration time.

The current backend configuration uses a limited token lifetime. The frontend must handle expired sessions and redirect users to the login page when reauthentication is required.

For future improvements, the platform may introduce:

- Short-lived access tokens.
- Refresh tokens.
- Token rotation.
- Session revocation.
- Multiple-device session management.

### 8.4. Token Storage

The preferred production approach is to store authentication tokens in secure, HTTP-only cookies.

Cookie configuration should consider:

- `HttpOnly`.
- `Secure` in production.
- Appropriate `SameSite` policy.
- Restricted cookie scope.
- CSRF protection when required by the authentication architecture.

Sensitive authentication tokens should not be stored in localStorage.

## 9. Protected Routes

Private API routes require authentication.

The backend uses authentication middleware to validate requests before allowing access to protected resources.

### 9.1. Public Routes

The following routes are publicly accessible:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new clinic and owner. |
| POST | `/auth/login` | Authenticate an existing user. |
| GET | `/health` | Check API availability. |

Password recovery endpoints will be added when the recovery module is implemented.

### 9.2. Protected Routes

Examples of protected endpoints:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/me` | Retrieve the authenticated user's information. |
| GET | `/users` | List clinic users. |
| GET | `/patients` | List patients. |
| GET | `/appointments` | List appointments. |
| GET | `/dashboard` | Retrieve dashboard information. |

Protected endpoints must validate the user's identity and permissions before executing restricted operations.

## 10. Authorization and RBAC

Authentication confirms who the user is.

Authorization determines what the authenticated user can do.

The platform uses RBAC to manage access to application resources.

### 10.1. Authorization Process

```text
+----------------------+
| Incoming API Request |
+----------+-----------+
           |
           v
+----------------------+
| Authentication      |
| Middleware           |
+----------+-----------+
           |
           v
+----------------------+
| Identify User        |
| and Clinic           |
+----------+-----------+
           |
           v
+----------------------+
| Permission Check     |
+----------+-----------+
           |
           v
     +-----+-----+
     |           |
     v           v
  Allowed     Denied
     |           |
     v           v
 Execute     HTTP 403
 Request     Forbidden
```

### 10.2. Permission Validation

Each protected operation must validate the required permission.

Example:

```typescript
router.get(
  "/",
  authMiddleware,
  requirePermission("users.read"),
  usersController.list
);
```

### 10.3. Access Rules

- Users must only access resources allowed by their permissions.
- Users must not access another clinic's data.
- The backend must validate permissions on every protected operation.
- Frontend visibility rules must not replace backend authorization.
- Privileged operations must be restricted to authorized roles.
- Permission changes must be reflected in subsequent authorization checks.

## 11. Multi-Tenant Security

Clinic Schedule SaaS is a multi-tenant application.

Each clinic represents an independent tenant.

Users, patients, appointments, and other clinic resources must be associated with the appropriate `clinicId`.

### 11.1. Clinic Isolation

Every tenant-specific database query must enforce clinic ownership.

Example:

```typescript
const patients = await prisma.patient.findMany({
  where: {
    clinicId: authenticatedUser.clinicId
  }
});
```

### 11.2. Isolation Requirements

- Every clinic must have an independent identifier.
- Users must be associated with a clinic.
- Tenant-specific resources must contain a clinic relationship.
- Database queries must enforce clinic filtering.
- Users must not be able to select another clinic by modifying request parameters.
- Clinic ownership must be validated by the backend.
- Access to resources from another tenant must be denied.

The `clinicId` used for authorization must come from the authenticated server-side context, not from an untrusted client request.

## 12. Password Recovery

Password recovery allows users to regain access to their accounts when they forget their passwords.

This functionality is part of the planned authentication experience.

### 12.1. Recovery Flow

```text
+----------------------+
| Login Page           |
+----------+-----------+
           |
           v
+----------------------+
| Forgot Password      |
+----------+-----------+
           |
           v
+----------------------+
| Enter Email          |
+----------+-----------+
           |
           v
+----------------------+
| Backend Generates    |
| Secure Recovery Token|
+----------+-----------+
           |
           v
+----------------------+
| Send Recovery Email  |
+----------+-----------+
           |
           v
+----------------------+
| Open Recovery Link   |
+----------+-----------+
           |
           v
+----------------------+
| Set New Password     |
+----------+-----------+
           |
           v
+----------------------+
| Validate Token       |
| and Update Password  |
+----------+-----------+
           |
           v
+----------------------+
| Return to Login      |
+----------------------+
```

### 12.2. Recovery Requirements

The implementation must:

- Accept the user's registered email address.
- Generate a cryptographically secure recovery token.
- Store only a secure hash of the recovery token.
- Associate the token with the correct user.
- Define a short expiration period.
- Allow each token to be used only once.
- Invalidate expired or previously used tokens.
- Update the password using bcrypt.
- Avoid revealing whether an email address exists.
- Invalidate existing sessions when appropriate.

### 12.3. Recovery Endpoints

The following endpoints are planned:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/forgot-password` | Request a password recovery email. |
| POST | `/auth/reset-password` | Set a new password using a valid recovery token. |

These endpoints are planned functionality and must not be considered implemented until added to the backend.

## 13. Frontend Authentication Module

The frontend authentication module will be developed using Next.js, React, and TypeScript.

It will provide a consistent and accessible interface for account management.

### 13.1. Authentication Screens

The module includes:

| Screen | Description |
|---|---|
| Login | Allows registered users to access the platform. |
| Registration | Allows new clinics and owners to create an account. |
| Forgot Password | Allows users to request password recovery. |
| Reset Password | Allows users to define a new password. |

### 13.2. Login Interface

The login screen should include:

- Clinic Schedule SaaS branding.
- Email field.
- Password field.
- Password visibility control.
- Remember-me option, if supported by the session architecture.
- Forgot password link.
- Login button.
- Registration link.
- Form validation.
- Loading state.
- Authentication error messages.

### 13.3. Registration Interface

The registration screen should include:

- Full name field.
- Email field.
- Password field.
- Password confirmation field.
- Clinic name field.
- Terms and privacy acceptance.
- Registration button.
- Form validation.
- Loading state.
- Success and error feedback.

### 13.4. Password Recovery Interface

The password recovery screen should include:

- Email field.
- Send recovery link button.
- Confirmation feedback.
- Link to return to login.

The reset password screen should include:

- New password field.
- Password confirmation field.
- Password validation feedback.
- Submit button.
- Success and error feedback.

### 13.5. Frontend Authentication Responsibilities

The frontend must:

- Validate form inputs.
- Communicate with the authentication API.
- Manage authenticated application state.
- Handle loading and error states.
- Protect private pages.
- Redirect unauthenticated users to login.
- Handle expired sessions.
- Display features according to user permissions.
- Avoid storing sensitive authentication information in insecure browser storage.

The frontend must never be considered the final security boundary.

## 14. API Response Standards

Authentication endpoints should return consistent JSON responses.

### 14.1. Successful Response

Example:

```json
{
  "message": "Autenticação realizada com sucesso.",
  "user": {
    "id": "user-id",
    "name": "Clinic Owner",
    "email": "owner@example.com",
    "clinicId": "clinic-id",
    "role": "owner"
  }
}
```

The actual response structure must match the token delivery strategy adopted by the backend.

### 14.2. Error Response

Example:

```json
{
  "message": "Credenciais inválidas."
}
```

### 14.3. HTTP Status Codes

| Status | Description |
|---|---|
| 200 | Authentication successful. |
| 201 | Account successfully created. |
| 400 | Invalid request data. |
| 401 | Missing or invalid authentication. |
| 403 | Insufficient permissions. |
| 404 | Resource not found. |
| 409 | Conflict, such as an existing email. |
| 422 | Validation error, when adopted by the API. |
| 429 | Too many requests. |
| 500 | Internal server error. |

## 15. Security Requirements

Authentication and authorization must follow security best practices.

### 15.1. General Security

- Use HTTPS in production.
- Hash passwords with bcrypt.
- Never store plain-text passwords.
- Keep JWT signing secrets outside the source code.
- Use environment variables for sensitive configuration.
- Validate all incoming request data.
- Protect authentication endpoints against brute-force attacks.
- Implement rate limiting.
- Avoid exposing sensitive information in API responses.
- Keep dependencies updated.
- Apply secure CORS configuration.
- Use secure HTTP headers.
- Avoid logging passwords, tokens, or sensitive personal information.

### 15.2. Session Security

- Validate tokens on protected requests.
- Enforce token expiration.
- Prevent unauthorized session reuse.
- Support session invalidation.
- Use secure cookie settings when cookies are adopted.
- Consider CSRF protection for cookie-based authentication.

### 15.3. LGPD Considerations

The platform handles personal information and must follow applicable Brazilian data protection requirements.

Authentication-related requirements include:

- Collect only necessary personal information.
- Restrict access to personal data.
- Protect credentials and session information.
- Maintain appropriate access controls.
- Record relevant security events.
- Provide secure account management.
- Avoid exposing patient or user information to unauthorized parties.

## 16. Audit and Monitoring

Authentication events should be recorded to support security monitoring and troubleshooting.

Relevant events include:

- Successful login.
- Failed login attempts.
- Account registration.
- Password recovery requests.
- Password changes.
- Permission changes.
- User activation or deactivation.
- Session invalidation.

Audit records should include relevant metadata, such as the user identifier, clinic identifier, event type, and timestamp.

Passwords, password hashes, JWTs, and recovery tokens must never be stored in audit logs.

## 17. Testing Strategy

The authentication module must be covered by automated tests.

### 17.1. Unit Tests

Test individual authentication functions:

- Password hashing.
- Password comparison.
- JWT generation.
- JWT validation.
- Input validation.
- Permission verification.

### 17.2. Integration Tests

Test the complete authentication flow:

- Successful registration.
- Registration with an existing email.
- Successful login.
- Login with invalid credentials.
- Access to protected routes.
- Requests without a token.
- Requests with an expired token.
- Requests with an invalid token.
- Access denied by permissions.
- Clinic data isolation.
- Password recovery and reset when implemented.

### 17.3. Security Tests

Verify that:

- Users cannot access another clinic's resources.
- Users cannot assign privileged roles during registration.
- Passwords are never returned by the API.
- Authentication secrets are not exposed.
- Protected endpoints reject unauthorized requests.
- Permission checks are enforced by the backend.
- Recovery tokens cannot be reused.

## 18. Implementation Status

The authentication module is developed incrementally.

| Feature | Status |
|---|---|
| User registration | Implemented in backend. |
| Clinic registration | Implemented in backend registration flow. |
| Password hashing with bcrypt | Implemented in backend. |
| User login | Implemented in backend. |
| JWT authentication | Implemented in backend. |
| Authentication middleware | Implemented in backend. |
| Protected API routes | Implemented in backend. |
| Role-based access control | Implemented in backend. |
| Permission middleware | Implemented in backend. |
| Clinic data isolation | Implemented in backend queries and authorization flow; requires continued validation. |
| Login frontend | Planned. |
| Registration frontend | Planned. |
| Forgot password | Planned. |
| Password reset | Planned. |
| Secure refresh-token flow | Future improvement. |
| Session management | Future improvement. |
| Automated security tests | To be expanded. |

## 19. Future Improvements

Future authentication improvements may include:

- Refresh token rotation.
- Multi-factor authentication (MFA).
- Email verification.
- Account activation and deactivation.
- Session management across devices.
- Login history.
- Suspicious login detection.
- Password expiration policies when justified.
- Single Sign-On (SSO).
- OAuth 2.0 integrations.
- Advanced security monitoring.

## 20. Conclusion

Authentication is a fundamental part of Clinic Schedule SaaS.

The combination of JWT, bcrypt, RBAC, protected routes, and clinic-level data isolation establishes the foundation for a secure multi-tenant platform.

The frontend authentication module will provide a simple and consistent user experience while the backend remains responsible for credential validation, session verification, and authorization.

Security, privacy, scalability, and compliance with applicable LGPD requirements must remain priorities throughout the development process.

---

**Document:** 13-authentication.md  
**Project:** Clinic Schedule SaaS  
**Category:** Technical Documentation  
**Status:** Active Development