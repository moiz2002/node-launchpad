# 🚀 Node.js + Express + Prisma 7 (MySQL) Docker Starter Kit

A production-ready, feature-packed backend boilerplate designed to jumpstart Node.js microservices and Web APIs without wasting hours setting up folder structures, Prisma configurations, and multi-stage Docker builds.

---

## ✨ Features

- **Runtime & Language:** Node.js (v20+) with TypeScript & hot-reloading (`tsx watch`).
- **ORM:** Prisma 7 with Native Driver Adapters (`@prisma/adapter-mariadb` / MySQL).
- **Database Architecture:** Clean snake_case mapping (`@@map` & `@map`) for standard SQL tables.
- **Docker Ready:**
  - Fast local development with volume mounting (`Dockerfile.dev`).
  - Production-ready Multi-Stage build (`Dockerfile`) for minimal image footprint.
- **Architecture:** Clean Layered Architecture (`Routes` ➔ `Controllers` ➔ `Services` ➔ `Repositories`).
- **Error Handling:** Global uncaught exception and unhandled rejection listeners to prevent container crash silent loops.

---

## 🛠️ Project Structure

```text
├── .env.development
├── .env.production
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
├── prisma/
│   ├── schema.prisma
│   └── prisma.config.ts
├── src/
│   ├── config/
│   │   └── db.ts             # Centralized Prisma Adapter Instance
│   ├── modules/
│   │   └── products/         # Example Modular Domain
│   │       ├── ProductController.ts
│   │       ├── ProductRepository.ts
│   │       ├── ProductRoutes.ts
│   │       └── ProductService.ts
│   └── index.ts              # Express App Entrypoint
├── tsconfig.json
└── package.json