# 12 — API Documentation

## Overview

The Clinic-Schedule-SaaS API is a RESTful backend responsible for managing clinic operations, user authentication, patient records, appointments, user permissions, and dashboard information.

The API is built with Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL.

It follows a modular architecture, with dedicated modules for each business domain, authentication middleware, permission validation, and centralized error handling.

## Base URL

During local development:

```http
http://127.0.0.1:3000
```

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| TypeScript | Static typing |
| Express | HTTP server and routing |
| Prisma ORM | Database access |
| PostgreSQL | Relational database |
| JWT | Authentication |
| bcrypt | Password hashing |

## API Architecture

The API follows a modular structure, separating responsibilities between routes, controllers, middleware, and database access.

```text
backend/
└── src/
    ├── modules/
    │   ├── auth/
    │   ├── patients/
    │   ├── appointments/
    │   ├── users/
    │   └── dashboard/
    │
    ├── middlewares/
    │   ├── auth.middleware.ts
    │   ├── permission.middleware.ts
    │   └── error.middleware.ts
    │
    └── app.ts
```

Each module handles a specific business domain and keeps its responsibilities separated.

## Authentication

The API uses JSON Web Tokens (JWT) to authenticate users and protect restricted resources.

### Register

Creates a new user and clinic.

```http
POST /auth/register
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPassword123",
  "clinicName": "Example Clinic"
}
```

### Login

Authenticates an existing user.

```http
POST /auth/login
```

The authentication endpoint validates user credentials and provides an authentication token.

### Authorization

Protected endpoints require a valid JWT.

Include the token in the HTTP Authorization header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Unauthenticated requests to protected resources must be rejected.

## API Endpoints

### 1. Authentication

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| POST | `/auth/register` | Register a user and clinic | No |
| POST | `/auth/login` | Authenticate a user | No |

### 2. Patients

Responsible for managing patient records.

| Method | Endpoint | Description | Permission |
|---|---|---|---|
| GET | `/patients` | List patients | `patients.read` |
| GET | `/patients/:id` | Get patient details | `patients.read` |
| POST | `/patients` | Create a patient | `patients.create` |
| PUT | `/patients/:id` | Update a patient | `patients.update` |
| DELETE | `/patients/:id` | Delete a patient | `patients.delete` |

Patient records are associated with a clinic through `clinicId`, ensuring tenant-level data isolation.

### 3. Appointments

Responsible for scheduling and managing clinic appointments.

| Method | Endpoint | Description | Permission |
|---|---|---|---|
| GET | `/appointments` | List appointments | `appointments.read` |
| GET | `/appointments/:id` | Get appointment details | `appointments.read` |
| POST | `/appointments` | Create an appointment | `appointments.create` |
| PUT | `/appointments/:id` | Update an appointment | `appointments.update` |
| PATCH | `/appointments/:id/status` | Update appointment status | `appointments.update` |
| DELETE | `/appointments/:id` | Delete an appointment | `appointments.delete` |

#### Appointment Status

The system supports the following appointment statuses:

| Status | Description |
|---|---|
| `scheduled` | Appointment scheduled |
| `confirmed` | Appointment confirmed |
| `completed` | Appointment completed |
| `cancelled` | Appointment cancelled |

Additional validation rules include:

- Default appointment duration: 30 minutes.
- Maximum appointment duration: 480 minutes.
- Date validation using the `YYYY-MM-DD` format.
- Active appointments include `scheduled` and `confirmed` statuses.

### 4. Users

Responsible for managing clinic users and access permissions.

| Method | Endpoint | Description | Permission |
|---|---|---|---|
| GET | `/users/me` | Get authenticated user information | Authentication required |
| GET | `/users` | List clinic users | `users.read` |
| GET | `/users/:id` | Get user details | `users.read` |
| POST | `/users` | Create a user | `users.create` |
| PUT | `/users/:id` | Update a user | `users.update` |
| DELETE | `/users/:id` | Delete a user | `users.delete` |

#### User Roles

The system supports role-based access control (RBAC).

Available roles include:

- `owner`
- `admin`
- `manager`
- `professional`
- `receptionist`
- `financial`

Each role defines which operations a user can perform within the clinic.

### 5. Dashboard

Provides aggregated information about clinic operations.

| Method | Endpoint | Description | Permission |
|---|---|---|---|
| GET | `/dashboard` | Retrieve dashboard statistics | `dashboard.read` |

Dashboard information includes:

- Total registered patients.
- Total appointments.
- Total registered users.

The data is filtered by the authenticated user's `clinicId`.

### 6. Health Check

Provides an endpoint for checking API availability.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Check API health status |

This endpoint can be used for basic service monitoring and availability checks.

## Authorization and Permissions

The API implements Role-Based Access Control (RBAC) to restrict access to protected resources.

Authorization is handled through middleware that validates the authenticated user and checks the permissions associated with their role.

### Permission Structure

| Module | Permissions |
|---|---|
| Patients | `patients.read`, `patients.create`, `patients.update`, `patients.delete` |
| Appointments | `appointments.read`, `appointments.create`, `appointments.update`, `appointments.delete` |
| Users | `users.read`, `users.create`, `users.update`, `users.delete` |
| Dashboard | `dashboard.read` |

The `/users/me` endpoint requires authentication but does not require an additional permission.

## Multi-Tenant Architecture

Clinic-Schedule-SaaS follows a multi-tenant architecture.

Each clinic operates within an isolated data context.

The `clinicId` field associates users, patients, and appointments with their respective clinics.

The backend uses the authenticated user's clinic information to restrict database queries and prevent unauthorized access to data belonging to other clinics.

This architecture supports multiple independent clinics within the same application.

## Request and Response Format

The API uses JSON as its primary data exchange format.

Example request headers:

```http
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example JSON response:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

The exact response structure depends on the endpoint implementation.

## HTTP Status Codes

The API uses standard HTTP status codes to communicate request results.

| Status Code | Description |
|---|---|
| 200 | OK — Request successful |
| 201 | Created — Resource successfully created |
| 204 | No Content — Request successful without response body |
| 400 | Bad Request — Invalid request data |
| 401 | Unauthorized — Authentication required or invalid |
| 403 | Forbidden — Insufficient permissions |
| 404 | Not Found — Resource not found |
| 409 | Conflict — Resource conflict |
| 422 | Unprocessable Entity — Validation error |
| 500 | Internal Server Error — Unexpected server error |

## Error Handling

The API uses centralized error-handling middleware to provide consistent error management.

Errors may occur due to:

- Invalid request data.
- Missing or invalid authentication tokens.
- Insufficient user permissions.
- Resources that do not exist.
- Database operation failures.
- Unexpected server errors.

The backend is responsible for handling errors and returning appropriate HTTP status codes.

## Security Considerations

Security is an important part of the API architecture.

The implementation includes:

- JWT-based authentication.
- Password hashing using bcrypt.
- Role-Based Access Control (RBAC).
- Protected API routes.
- Clinic-level data isolation.
- Permission validation through middleware.
- Request validation.
- Centralized error handling.
- Restricted access to sensitive resources.

The system is designed to support secure clinic management and future compliance requirements related to Brazil's General Data Protection Law (LGPD).

## Future Improvements

The API architecture is designed to support future enhancements, including:

- Advanced appointment scheduling and calendar integration.
- Financial management endpoints.
- Patient medical records.
- Automated notifications and reminders.
- Audit logs and activity tracking.
- Advanced reporting and analytics.
- API documentation with Swagger / OpenAPI.
- Rate limiting and additional security mechanisms.
- Automated integration and end-to-end testing.
- Expanded administrative and clinic configuration endpoints.

## Development

Start the backend development server from the `backend/` directory:

```bash
npm run dev
```

The API will be available at:

```http
http://127.0.0.1:3000
```

## Project

**Clinic-Schedule-SaaS**

A modular clinic management SaaS platform designed to simplify administrative workflows, patient management, appointment scheduling, and clinic operations.

**Author:** Laila de Araújo Mota

**License:** MIT

**Status:** Under Development
