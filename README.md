# Multishop Monorepo

This repository contains a monorepo setup for a multishop application. It includes both frontend and backend applications, as well as shared libraries for common functionality.

## Repository Structure

```
├── apps/
│   ├── frontend/                 # Angular 19 application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── environments/
│   │   │   │   ├── environment.ts
│   │   │   │   └── environment.prod.ts
│   │   │   └── index.html
│   │   ├── angular.json
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── backend/                  # NestJS application
│       ├── src/
│       │   ├── app/
│       │   │   ├── app.module.ts
│       │   │   └── main.ts
│       ├── nest-cli.json
│       ├── package.json
│       ├── tsconfig.build.json
│       └── tsconfig.json
├── libs/                         # Shared libraries
│   ├── shared-types/             # Shared TypeScript interfaces
│   │   ├── src/
│   │   │   ├── product.interface.ts
│   │   │   ├── user.interface.ts
│   │   │   └── index.ts
│   │   └── package.json
│   └── shared-utils/             # Shared utilities
│       ├── src/
│       │   ├── api-client.ts
│       │   ├── form-validators.ts
│       │   └── index.ts
│       └── package.json
│
├── package.json                  # Root package.json
├── nx.json                       # Nx workspace configuration
├── tsconfig.base.json            # Base TypeScript config
└── README.md
```

## Setting Up and Running the Applications

### Frontend (Angular 19)

1. Navigate to the `apps/frontend` directory:
   ```sh
   cd apps/frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`.

### Backend (NestJS)

1. Navigate to the `apps/backend` directory:
   ```sh
   cd apps/backend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm start
   ```

4. The backend server will be running at `http://localhost:3000`.

## Using the Shared Libraries

### Shared Types

The shared types library contains TypeScript interfaces that are used across both the frontend and backend applications.

To use the shared types in your code, import them as follows:
```typescript
import { Product } from '@multishop/shared-types';
import { User } from '@multishop/shared-types';
```

### Shared Utils

The shared utils library contains utility functions that are used across both the frontend and backend applications.

To use the shared utils in your code, import them as follows:
```typescript
import { apiClient } from '@multishop/shared-utils';
import { formValidators } from '@multishop/shared-utils';
```
