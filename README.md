# Multishop Monorepo Documentation

Welcome to the **Multishop Monorepo**, a repository designed to house both frontend and backend applications for a multishop platform. This repository leverages **Nx** for effective monorepo management and features a well-structured organization with shared libraries to promote code reuse and maintainability.

---

## Table of Contents
- [Monorepo Organization](#monorepo-organization)
- [Frontend: Angular Application](#frontend-angular-application)
- [Backend: NestJS Application](#backend-nestjs-application)
- [Shared Code and Libraries](#shared-code-and-libraries)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)

---

## Monorepo Organization

The monorepo is organized to provide clear separation between different parts of the application and enable code sharing across projects. Here's the structure:

```
apps/
  frontend/       # Angular frontend application
  backend/        # NestJS backend application
libs/
  shared-types/   # Common TypeScript interfaces
  shared-utils/   # Utility functions shared across apps
  ...             # Additional libraries for code reuse
tools/
  ...             # Custom scripts or tools for the monorepo
nx.json           # Nx workspace configuration
tsconfig.base.json # Root-level TypeScript configuration
```

### Key Features of the Monorepo
- **Frontend and Backend Separation:** 
  - Frontend resides in `apps/frontend`
  - Backend resides in `apps/backend`
- **Shared Libraries:** Common code exists in the `libs/` directory for maximum reusability.
- **Centralized Configuration:** Nx workspace and root-level TypeScript configurations ensure consistency across the monorepo.

---

## Frontend: Angular Application

The frontend application is built with **Angular** and adheres to modern best practices, including feature-based organization and standalone components.

### Key Features
- **Feature-Based Organization:** Components and services are grouped by features for scalability and maintainability.
- **Standalone Components:** Where appropriate, components are designed as standalone to reduce dependencies.
- **Domain-Specific Services:** Services are organized by domain (e.g., `auth.service.ts`, `products.service.ts`) to maintain a clean separation of concerns.
- **TypeScript Strict Mode Enabled:** Ensures robust type checking and early detection of errors.

### Directory Structure
```
apps/frontend/
  src/
    app/
      features/
        auth/         # Authentication feature
        products/     # Products feature
        categories/   # Categories feature
      core/
        services/     # Domain services
        guards/       # Route guards
      shared/
        components/   # Shared UI components
        directives/   # Shared directives
```

---

## Backend: NestJS Application

The backend application is powered by **NestJS**, following a modular and domain-driven structure. It uses **Prisma ORM** for database access.

### Key Features
- **Modular Architecture:** Each module encapsulates specific functionality (e.g., `AuthModule`, `ProductsModule`).
- **Domain-Driven Structure:** Modules are organized by domains such as `auth`, `products`, and `categories`.
- **Prisma ORM Integration:** Simplifies database access and management.
- **TypeScript Strict Mode Enabled:** Enforces strong typing for enhanced reliability.

### Directory Structure
```
apps/backend/
  src/
    modules/
      auth/          # Authentication module
      products/      # Products module
      categories/    # Categories module
    shared/
      guards/        # Shared guards
      interceptors/  # Shared interceptors
      pipes/         # Shared pipes
```

---

## Shared Code and Libraries

The `libs/` directory contains shared libraries that enable code reuse between the frontend and backend applications.

### Key Libraries
1. **`shared-types`:**
   - Houses common TypeScript interfaces used across the monorepo.
   - Example: `User`, `Product`, and `Category` interfaces.

2. **`shared-utils`:**
   - Contains utility functions used by both applications.
   - Example: String manipulators, date formatters, and other helpers.

---

## Configuration

The monorepo is configured using **Nx** to streamline development and enforce consistency across the applications.

### Key Configuration Files
1. **`nx.json`:** Configures the Nx workspace, including project dependencies and tasks.
2. **`tsconfig.base.json`:** Root-level TypeScript configuration shared by all apps and libraries.
3. **Environment Configurations:**
   - Environment-specific configurations are maintained for both frontend and backend applications.

---

## Getting Started

Follow these steps to set up the monorepo on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sisovin/multishop-monorepo.git
   cd multishop-monorepo
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Applications:**
   - Start the frontend:
     ```bash
     nx serve frontend
     ```
   - Start the backend:
     ```bash
     nx serve backend
     ```

4. **Build All Projects:**
   ```bash
   nx build
   ```

---

## Development Guidelines

### Best Practices
- **Code Reuse:** Maximize the use of shared libraries in `libs/` to avoid duplication.
- **Feature Isolation:** Keep features isolated to their respective modules or directories.
- **Strict Typing:** Always enable TypeScript strict mode to catch potential issues early.
- **Consistent Naming:** Follow consistent naming conventions for files, directories, and modules.

### Nx Commands
- **Run a specific project:**
  ```bash
  nx serve <project-name>
  ```
- **Build a specific project:**
  ```bash
  nx build <project-name>
  ```
- **Lint all projects:**
  ```bash
  nx lint
  ```
- **Test all projects:**
  ```bash
  nx test
  ```

---

## Conclusion

This monorepo is designed to streamline the development of a multishop platform by providing a well-organized structure, shared libraries, and consistent configurations. By following the guidelines outlined in this documentation, developers can efficiently contribute to the project and ensure high-quality deliverables.
