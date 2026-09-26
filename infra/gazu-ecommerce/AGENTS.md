# 🛍️ Gazu E-commerce — Headless Commerce en Arquitectura Distribuida

Este documento es la **guía técnica oficial y manual operativo** de Gazu E-commerce para agentes de IA y desarrolladores. Detalla la arquitectura de microservicios headless, esquemas GraphQL y entornos de staging y producción.

---

## 🎯 Resumen Ejecutivo

* **Producción:** `https://gazu.jhojan.cloud`
* **Staging / Desarrollo:** `https://dev.gazu.jhojan.cloud`
* **Stack Tecnológico:**
  - **Core Backend:** Vendure v3+ sobre NestJS y Fastify/Express en TypeScript.
  - **Capa de Datos:** PostgreSQL 16 con StatefulSet y extensiones de inventario.
  - **APIs:** GraphQL (Shop API pública y Admin API autenticada con RBAC).
  - **Observabilidad:** OpenTelemetry (OTel traces y métricas) y PostHog para analítica de eventos de usuario.

---

## 🌐 1. Endpoints Clave

### Entorno de Producción (`https://gazu.jhojan.cloud`)
* **Tienda / Catálogo:** `/shop`
* **GraphQL Shop API:** `/shop-api`
* **Panel de Administración:** `/dashboard`
* **Métricas Prometheus:** `/metrics`

### Entorno de Staging (`https://dev.gazu.jhojan.cloud`)
* **GraphiQL Playground:** `/graphiql/shop` (Explorador interactivo de consultas y mutaciones GraphQL).
* **Dashboard Staging:** `/dashboard`
* **Métricas Staging:** `/metrics`

---

## 🛠️ 2. Diagnóstico y Monitoreo

```bash
# Comprobar estado de la API de producción
curl -s -I https://gazu.jhojan.cloud/shop-api | head -n 5

# Comprobar salud del entorno de desarrollo
curl -s -I https://dev.gazu.jhojan.cloud/graphiql/shop | head -n 5
```
