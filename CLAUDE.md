# CLAUDE.md ? Portfolio Web de Jhojan Jimenez

Contexto completo del proyecto para sesiones futuras.

---

## Qui?n es el due?o del proyecto

**Jhojan Jimenez** ? Software Engineer | Backend & Cloud Architecture
- Email: jhojanjimene@gmail.com
- Tel?fono: +57 320 328 2014
- LinkedIn: https://www.linkedin.com/in/jhojan-jimenez-dev/
- Portfolio desplegado: https://dev.jhojan.cloud
- GitHub: https://github.com/Jhojan-Jimenez
- Ubicaci?n: Bogot?, Colombia
- Idiomas: Español (nativo), Inglés B2
- Educación: B.S. in Computer Engineering — Universidad de La Sabana (Promedio: 4.4 / 5.0) — Graduación 2026 (Énfasis en Arquitectura de Software)

**Objetivo profesional:** Roles de Backend puro, Cloud Architecture e Infraestructura, con capacidad FullStack complementaria. Prefiere trabajo remoto o h?brido.

---

## Qu? es este proyecto

Portafolio web personal profesional que sirve como carta de presentaci?n para reclutadores t?cnicos y hiring managers.
- Secci?n Hero con presentaci?n personal enfocada en Backend & Cloud.
- Secci?n Skills con habilidades t?cnicas estructuradas (Backend, Cloud, Databases, AI, Frontend).
- Secci?n Projects con proyectos destacados (foco de la pr?xima sesi?n).
- Secci?n Experience con historial laboral completo (+2 a?os de experiencia en producci?n) y logros clave.
- Secci?n Contact con formulario funcional Formspree.
- Descarga del CV en espa?ol e ingl?s.

---

## Stack tecnol?gico

- **Framework:** Next.js 16+ (React 19, TypeScript, Turbopack)
- **Estilos:** Tailwind CSS + CSS variables HSL (dark/light mode)
- **Componentes:** ShadcnUI + Radix UI
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Formspree
- **?conos:** Lucide React
- **Deploy:** Vercel

---

## Estado Actual y Pr?xima Sesi?n

- Todo el sitio web est? sincronizado en **Ingl?s** con los datos de LinkedIn y la hoja de vida m?s reciente.
- **Pr?xima sesi?n:** Remodelaci?n y mejora de la secci?n de proyectos (`Projects.tsx`), evaluando la integraci?n o muestra del proyecto `3D-Car`.


### 📄 Ubicación Oficial de CV y Resumes (Fuente Única de Verdad)
Todos los documentos de hoja de vida / CV y Resume se gestionan **exclusivamente en `public/resume/`**:
* **Español:** `public/resume/Jhojan_JimenezCV.docx` y `public/resume/Jhojan_JimenezCV.pdf`
* **Inglés:** `public/resume/Jhojan_Jimenez_Resume.docx` y `public/resume/Jhojan_Jimenez_Resume.pdf`
* **Regla:** Cualquier modificación futura a la hoja de vida debe realizarse directamente sobre los archivos de `public/resume/` (tanto en español como en inglés). La carpeta `linkedln/` está en `.gitignore` y solo contiene `main.md` para el perfil de LinkedIn.

---

## ☁️ Infraestructura Cloud & Servicios Activos (Coolify v4 en Oracle Cloud)

* **Servidor OCI (ARM64):** `150.136.63.103` (4 OCPU, 24 GB RAM, Ubuntu 24.04).
* **Acceso SSH:** `ssh -i ~/.ssh/oracle-key ubuntu@150.136.63.103`.
* **Orquestador:** Coolify v4 + Traefik Proxy (SSL automático vía Let's Encrypt / Cloudflare).
* **Servicios desplegados y operativos:**
  - **Vaultwarden (Password Manager):** `https://vault.jhojan.cloud` (SQLite, `SIGNUPS_ALLOWED=false`).
  - **Actual Budget (Personal Finance):** `https://budget.jhojan.cloud` (Node.js/React + SQLite).
  - **Actual Bridge (Microservice):** `http://actual-bridge:5008` (Ingesta interna HTTP para n8n con `@actual-app/api`).
  - **n8n Automation (Workflows):** `https://n8n.jhojan.cloud` (Node.js + Task Runners + Workflow `BancolombiaSync1` activo para ingesta de alertas bancarias hacia Actual Budget).
  - **TalentMatch AI:** `https://models.jhojan.cloud` (FastAPI + pgvector + CLIP).
  - **Gazu E-commerce (Prod):** `https://gazu.jhojan.cloud` (Vendure NestJS + Postgres).
  - **Gazu E-commerce (Dev):** `https://dev.gazu.jhojan.cloud` (Playground GraphiQL).
  - **Portfolio Web:** `https://dev.jhojan.cloud` (Next.js en Vercel).
* **Automatización Bancolombia ➔ Actual Budget:** Flujo activo que monitorea correos de `alertasynotificaciones@an.notificacionesbancolombia.com`, parsea transferencias de ahorros (*4412) y compras con tarjeta de crédito (*6874), y las sincroniza en tiempo real en Actual Budget.
* **Diseño UI/UX con IA (Penpot MCP & n8n MCP):** Conexión activa en tiempo real vía `~/.gemini/config/mcp_config.json`.
* *Para especificaciones detalladas, variables y comandos de API, ver sección correspondiente en `AGENTS.md`.*

