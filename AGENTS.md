# AGENTS.md — Portfolio Web de Jhojan Jimenez

Este documento sirve como memoria y guía arquitectónica para Antigravity y otros agentes de IA en futuras sesiones de desarrollo sobre este repositorio.

---

## 🎯 Perfil Profesional y Posicionamiento

* **Nombre:** Jhojan Camilo Jimenez Amaya
* **Titular:** `Software Engineer | Backend & Cloud Architecture | Full Stack Capabilities`
* **Email de contacto:** `jhojanjimene@gmail.com`
* **Teléfono:** `+57 320 328 2014`
* **Ubicación:** Bogotá, Colombia.
* **Enfoque de carrera:** Backend puro, Arquitectura Cloud y Sistemas Distribuidos (con capacidad Full Stack complementaria y manejo de pipelines de datos).
* **Experiencia:** +2 años de experiencia en producción (Blurealty, GovLab, UCTS, TurboCupones).
* **Educación:** Grado en Ingeniería Informática (Computational Science) — Universidad de La Sabana (Promedio acumulado: 4.4 / 5.0) — Graduación 2026 — Énfasis en Arquitectura de Software y Sistemas Distribuidos.
* **Beca:** Beneficiario de **Beca de Excelencia Académica del 80%** (otorgada al ingreso por mérito).
* **Logro estrella:** 🏆 1er lugar Sabana Hack 2025 (Sistema de alertas en tiempo real con IA para Cruz Roja Colombiana en sprint de 24h).
* **Idiomas de trabajo:**
  - **Español:** Nativo.
  - **Inglés:** **B2** (Competencia profesional técnica y comunicación fluida).
  - **Sitio web:** **Bilingüe (Inglés & Español)** con detección automática por navegador (`navigator.language`), persistencia en `localStorage` (`portfolio_lang`) y selector manual `[ EN | ES ]` en navbar fija y menú móvil.
  - **Conversación con el usuario:** En **Español**.

---

## 🛠️ Stack Tecnológico del Proyecto

* **Framework:** Next.js 16+ (Turbopack, App Router, React 19, TypeScript).
* **Estilos:** Tailwind CSS + Variables HSL (Dark Mode por defecto, persistido en `localStorage`).
* **Componentes UI:** Shadcn UI + Radix UI primitives (`components/ui/`).
* **Animaciones:** Framer Motion (`useInView`, transiciones y variantes).
* **Gestor de Paquetes:** `pnpm` (Node v24 en WSL Ubuntu).
* **Formulario de Contacto:** Formspree (`/f/xzzgyber`) + Toastify / Sonner.
* **Despliegue:** Vercel (`https://dev.jhojan.cloud`).

---

## 🏗️ Estructura de Componentes Clave

```
PortfolioWeb/
├── app/
│   ├── layout.tsx         # Root layout, metadata SEO y fuentes
│   ├── page.tsx           # Ensambla la SPA (Hero -> Projects -> Experience -> Skills -> Contact)
│   ├── globals.css        # Tokens de color HSL y clases utilitarias
│   ├── components/
│   │   ├── Header.tsx     # Navbar fija con scroll adaptativo y Dark Mode toggle
│   │   ├── Hero.tsx       # Bio, avatar, redes y CTAs principales
│   │   ├── Skills.tsx     # 5 pilares arquitectónicos (Cloud & K8s, Backend, Data Analytics, AI, Full Stack) + cajón plegable
│   │   ├── Projects.tsx   # Showcase de proyectos y modal Evidence Inspector
│   │   ├── Experience.tsx # CV/Resume downloads + Highlights + Historial laboral + Educación
│   │   └── Contact.tsx    # Formulario de contacto Formspree
│   └── projects/
│       ├── AGENTS.md      # GUÍA OFICIAL PARA AÑADIR/MODIFICAR PROYECTOS
│       └── [slug]/
│           └── page.tsx   # Página de caso de estudio detallado
├── lib/
│   ├── projects-data.ts   # Fuente de verdad de proyectos en INGLÉS
│   └── i18n/
│       ├── translations.ts # Diccionario bilingüe global (UI, Skills, Experience, Contact)
│       └── projects-es.ts  # Traducciones al ESPAÑOL de casos de estudio
├── public/
│   ├── profile.png        # Foto de perfil oficial (HD)
│   ├── Me.jpeg            # Foto de perfil anterior (backup)
│   ├── projects/          # Capturas de pantalla de proyectos
│   └── resume/            # CVs y Resumes oficiales (DOCX y PDF en 1 sola página)
├── scripts/
│   ├── generate_cv_docx.py # Generador programático de DOCX optimizado para ATS (1 página)
│   └── generate_cv_pdf.py  # Generador de PDFs de 1 página estricta con ReportLab
└── AGENTS.md              # Este archivo de memoria principal para agentes
```

---

## 📄 Ubicación Oficial de CV y Resumes (Fuente Única de Verdad)

Todos los documentos de hoja de vida / CV y Resume se gestionan **exclusivamente en `public/resume/`**:
* **Español:** `public/resume/Jhojan_JimenezCV.docx` y `public/resume/Jhojan_JimenezCV.pdf` (Alias: `Jhojan_Jimenez_CV.pdf`).
* **Inglés:** `public/resume/Jhojan_Jimenez_Resume.docx` y `public/resume/Jhojan_Jimenez_Resume.pdf` (Alias: `Jhojan_Jimenez_Resume_EN.pdf`).

### Reglas estrictas de formato para el CV:
1. **Estrictamente 1 sola página:** Márgenes de 28 pt (top/bottom) y 36 pt (left/right). Sin saltos huérfanos.
2. **Formato 100% ATS-Compliant:** Monocolumna, sin tablas complejas de maquetación, sin cajas de texto flotantes, fuentes estándar (Arial 8.6–9.3 pt para cuerpo, 10 pt para secciones, 15.5 pt para nombre).
3. **Fórmula de Google (XYZ):** Todas las viñetas de experiencia inician con verbos de acción fuertes en pasado/primera persona (*Diseñé*, *Construí*, *Modelé*, *Implementé*, *Refactoricé*, *Desarrollé*).
4. **Honestidad técnica:**
   - **Excluidos del CV:** Kustomize, Traefik Ingress, Cert-Manager / TLS (el usuario no los domina a fondo para entrevistas).
   - **Incluidos y respaldados:** Python (FastAPI, Django), Node.js, TypeScript, **Java**, Docker, GCP (Cloud Run, Cloud SQL), AWS S3, CI/CD con GitHub Actions, PostgreSQL, **Vector Storage**, **Linux**, **Frontend (React, Next.js, Tailwind CSS)** y **Analítica de Datos (Pandas, SQL, ETL)**.
5. **Educación:**
   `Beneficiario de Beca de Excelencia Académica del 80% · Promedio acumulado: 4.4 / 5.0 (Énfasis en Arquitectura de Software y Sistemas Distribuidos).`
6. **Idiomas:**
   `Español (Nativo) • Inglés (B2 — Competencia profesional técnica y comunicación fluida).`
7. **Regeneración:** Cualquier cambio se compila con:
   ```bash
   python3 scripts/generate_cv_docx.py && python3 scripts/generate_cv_pdf.py && cp public/resume/Jhojan_JimenezCV.pdf public/resume/Jhojan_Jimenez_CV.pdf && cp public/resume/Jhojan_Jimenez_Resume.pdf public/resume/Jhojan_Jimenez_Resume_EN.pdf
   ```

---

## 🚀 Lineamientos para Proyectos (`app/projects/AGENTS.md`)

Para añadir o editar proyectos en el portfolio web, consultar la guía detallada en [app/projects/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/app/projects/AGENTS.md).

### Puntos clave:
1. **Modal de Proyecto Visual-First:**
   - Al abrir cualquier modal (`selectedSlug`), se agrega la clase `modal-open` a `body` para ocultar el `<header>` fijo (`body.modal-open header { display: none !important; }`).
   - Lo primero visible es la **captura de pantalla real de la aplicación en producción** (16:9, <800 KB en `public/projects/`).
   - Máximo 1 botón de acción principal (`Ver Proyecto / Live Demo`) y enlace sutil al repositorio.
2. **Paridad Bilingüe Obligatoria:**
   - Registrar en `lib/projects-data.ts` (Inglés).
   - Registrar traducción espejo en `lib/i18n/projects-es.ts` (Español).
3. **Casos de Estudio Activos en Producción:**
   - **Gazu:** Headless E-commerce en Kubernetes ARM64 (OCI k3s), PostgreSQL 16 StatefulSet, OpenTelemetry y PostHog.
   - **TalentMatch AI:** Scouting multimodal con CLIP ViT-B/32, GPT-4o-mini Vision, FastAPI y búsqueda vectorial in-database con `pgvector` sobre PostgreSQL 16.
   - **WheelUS:** Plataforma de movilidad universitaria con Next.js y backend Node.js/Express.
   - **Mercedes-AMG GT3:** Experiencia de producto 3D en tiempo real y telemetría.
   - **Vaccine CDSS:** Motor determinista de recomendación clínica con evaluación matricial sobre protocolos PAI.

---

## 💼 Arquitectura Híbrida Timeline + Consola de Ingeniería (`Experience.tsx`)

1. **Resume Hub Oficial:** Píldoras segmentadas con descarga y preview de CV (ES) y Resume (EN).
2. **Columna Izquierda (Timeline):** Eje vertical continuo con nodos activos y tarjetas compactas con métrica estrella (`✦ {job.highlightMetric}`).
3. **Columna Derecha (Consola Técnica):** Panel fijo `sticky top-24` estilo terminal/IDE (`SYSTEM::CONSOLE // NODE_X`) con animación `AnimatePresence`. Revela métricas de impacto, resumen ejecutivo, entregables etiquetados (`[TAG]`) y tecnologías verificadas.
4. **Mobile (<lg):** Timeline interactivo que expande la consola inline al tocar la tarjeta.

---

## 🌐 Arquitectura de Internacionalización (i18n)

1. **Detección Automática & Persistencia (`app/context/LanguageContext.tsx`):**
   - Detecta `navigator.language`, persiste en `localStorage.getItem("portfolio_lang")` y actualiza dinámicamente `<html lang="en|es">`.
2. **Selector en UI:** `[ EN | ES ]` en navbar fija y drawer móvil.
3. **Diccionario:** Cobertura 100% en `lib/i18n/translations.ts` y `lib/i18n/projects-es.ts`.

---

## ⚡ Comandos de Verificación en WSL

```bash
# Compilación limpia con Turbopack
. ~/.nvm/nvm.sh && /home/claude/.local/share/pnpm/bin/pnpm run build

# Servidor de desarrollo
. ~/.nvm/nvm.sh && /home/claude/.local/share/pnpm/bin/pnpm run dev
```

---

## 📊 Integración con Notion & Módulo de Postulaciones (`/Postulaciones`)

* **Directorio de Trabajo:** [Postulaciones/](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/Postulaciones) (Guía detallada en [Postulaciones/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/Postulaciones/AGENTS.md)).
* **Base de Datos Conectada:** `Tracker de Postulaciones Tech` dentro de la página `Postulaciones` del usuario.
* **Database ID:** `3d861441-36a5-8109-a603-f4d024e6738a`
* **Script de Automatización:** [Postulaciones/notion_client.py](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/Postulaciones/notion_client.py)
* **Carpeta de CVs Personalizados:** `Postulaciones/tailored_resumes/`
* **Capacidades del Agente:**
  - Registrar nuevas vacantes con empresa, rol, URL, salario/beneficios, stack técnico, fecha y notas.
  - Consultar y listar vacantes activas.
  - Actualizar el estado de postulación (`Por Postular`, `Postulado`, `Prueba Técnica`, `Entrevista Final`, `Oferta`, `Rechazado`).
* **Flujo Operativo:** Cuando el usuario pase una vacante en cualquier sesión, el agente puede insertarla directamente en su Notion y generar el CV adaptado en PDF en un solo paso sin tocar los CVs maestros de `public/resume/`.

---

## ☁️ Infraestructura Cloud & Servicios Autohospedados (Coolify v4 en Oracle Cloud ARM64)

Esta sección consolida la arquitectura de servidores, red y servicios en producción para que cualquier agente de IA en futuras sesiones pueda operar, diagnosticar o desplegar nuevas aplicaciones sin fricción.

### 🖥️ 1. Servidor Físico / VM (Oracle Cloud Infrastructure)

* **Proveedor:** Oracle Cloud Infrastructure (OCI) — Free Tier Always On.
* **Instancia:** VM.Standard.A1.Flex (Arquitectura **ARM64 / aarch64**).
* **Especificaciones:** 4 OCPUs, 24 GB de memoria RAM, disco NVMe de 200 GB.
* **Sistema Operativo:** Ubuntu 24.04 LTS.
* **IP Pública:** `150.136.63.103`
* **Acceso SSH desde el entorno local (WSL):**
  ```bash
  ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103
  ```
* **DNS & CDN:** Gestionado a través de **Cloudflare** para el dominio raíz `jhojan.cloud`.
  - Registros de tipo `A` apuntando a `150.136.63.103`.

---

### 🕹️ 2. Orquestador Coolify v4 & Traefik Proxy

* **Plataforma:** Coolify v4 autohospedado en Docker.
* **Panel Web Interno:** `http://localhost:8000` (accesible mediante túnel SSH o API).
* **Reverse Proxy:** **Traefik** (contenedor `coolify-proxy`).
  - Gestiona automáticamente la terminación SSL/TLS con certificados de Let's Encrypt para todos los subdominios `*.jhojan.cloud`.
  - Enrutamiento por cabeceras `Host` hacia los contenedores de aplicación en la red interna de Docker (`coolify`).
* **API REST de Coolify:** `http://localhost:8000/api/v1`
* **Token de Autenticación de la API:**
  ```text
  1|coolify-antigravity-token-xyz123
  ```
* **Cabecera requerida:** `Authorization: Bearer 1|coolify-antigravity-token-xyz123`

---

### 📦 3. Registro Central de Servicios Desplegados

| Servicio | Subdominio Oficial | Tipo / Stack | Contenedor Docker / Identificadores | Estado & Endpoints Clave |
| :--- | :--- | :--- | :--- | :--- |
| **Vaultwarden** | `https://vault.jhojan.cloud` | Rust (Bitwarden API) + SQLite | Contenedor: `vaultwarden-80u6tznp6qg7nahrpbxnmmuo`<br>Service UUID: `80u6tznp6qg7nahrpbxnmmuo`<br>App UUID: `cffq6jsrid3qr2ucxcwrelwr` | **Producción activa.**<br>Admin: `/admin`<br>Health: HTTP 200.<br>`SIGNUPS_ALLOWED=false` (Blindado). |
| **Actual Budget** | `https://budget.jhojan.cloud` | Node.js / React (Local-First) + SQLite | Contenedor: `emursazvdsphob5jhsmp1zfm-*`<br>Project UUID: `tbgwta7ym6nukwsa9uejqpst`<br>App UUID: `emursazvdsphob5jhsmp1zfm` | **Desplegado y activo (Port 5006).**<br>Volumen: `/data`<br>Requiere DNS A `budget` -> `150.136.63.103`. |
| **Actual Bridge** | `http://actual-bridge:5008` (Interno) | Node.js (`@actual-app/api`) Microservice | Contenedor: `actual-bridge`<br>Red: `coolify` + `ooayufs5gbx88mkfeiqbahvo` | **Producción activa.**<br>Endpoints: `/health`, `/accounts`, `/api/transaction`<br>Mapea cuentas ahorros/crédito y convierte pesos a centavos automáticamente. |
| **n8n Automation** | `https://n8n.jhojan.cloud` | Node.js (n8n v2.40.6 latest) + Task Runners + SQLite | Contenedor: `n8n-ooayufs5gbx88mkfeiqbahvo`<br>Project UUID: `fcw3szspldgurwd8jdg063y8`<br>Service UUID: `ooayufs5gbx88mkfeiqbahvo` | **Desplegado y activo (Port 5678).**<br>MCP Server: `https://n8n.jhojan.cloud/mcp-server/http`<br>Workflow activo: `Bancolombia to Actual Budget Ingestion`. |
| **TalentMatch AI** | `https://models.jhojan.cloud` | FastAPI + CLIP ViT-B/32 + PostgreSQL 16 pgvector | Docker App gestionada por Coolify | **Producción activa.**<br>Health: `/api/health`<br>Demo Search: `/admin/search?demo=true` |
| **Gazu E-commerce (Prod)** | `https://gazu.jhojan.cloud` | Vendure (NestJS) + PostgreSQL 16 StatefulSet | K3s / Coolify Docker stack | **Producción activa.**<br>Tienda: `/shop`<br>API: `/shop-api`<br>Admin: `/dashboard`<br>Métricas: `/metrics` |
| **Gazu E-commerce (Dev)** | `https://dev.gazu.jhojan.cloud` | Vendure (NestJS) + GraphiQL Playground | Coolify Docker stack | **Staging activo.**<br>GraphiQL: `/graphiql/shop`<br>Dashboard: `/dashboard`<br>Métricas: `/metrics` |
| **Portfolio Web** | `https://dev.jhojan.cloud` | Next.js 16 + React 19 + Tailwind CSS | Vercel Edge Network | **Producción activa.**<br>Repositorio local: `PortfolioWeb/` |

---

### 💳 4. Pipeline de Automatización Bancolombia ➔ Actual Budget

* **Objetivo:** Ingesta automática de movimientos bancarios (Transferencias de Cuenta de Ahorros y Compras con Tarjeta de Crédito) desde correos de alertas de Bancolombia hacia Actual Budget.
* **Remitente Monitoreado:** `alertasynotificaciones@an.notificacionesbancolombia.com`
* **Workflow en n8n:** `Bancolombia to Actual Budget Ingestion` (ID: `BancolombiaSync1`)
* **Arquitectura del Flujo:**
  1. **Email Trigger (IMAP):** Conexión con Gmail vía App Password (`s3AllFKmktIHF0yZ`). Monitorea correos `UNSEEN` del remitente oficial de Bancolombia y marca como leídos tras procesar.
  2. **Parse Bancolombia Email (Code Node):** Regex multiformato en JavaScript puro. Extrae:
     - Transferencias (`Transferiste $X desde tu cuenta *4412 a la cuenta *Y...`): Mapea a `Bancolombia Ahorros`, genera monto negativo en pesos y centavos, fecha ISO y notas detalladas.
     - Compras TC (`Compraste COP X en COMERCIO con tu T.Cred *6874...`): Mapea a `Bancolombia Tarjeta Credito (*6874)`, extrae el comercio como Payee, monto negativo y fecha ISO.
     - Pagos Código QR (`pagaste $X por codigo QR desde tu cuenta *4412 a la llave Y...`): Mapea a `Bancolombia Ahorros`, Payee `Pago QR (Llave Y)`, y categoría inicial `Otros / Desconocidos`.
  3. **Send to Actual Budget (HTTP Request):** Invoca `POST http://actual-bridge:5008/api/transaction` en la red privada de Docker.
  4. **Actual Bridge Microservice:** Servicio ultraligero Node.js (`/opt/actual-bridge` en la VM) usando `@actual-app/api` con sesión permanente autenticada. Resuelve cuentas por alias o crea la tarjeta de crédito automáticamente, convierte pesos a centavos y ejecuta la sincronización CRDT contra Actual Server.
     - **Regla Fallback:** Si una transacción entra de un comercio desconocido sin reglas previas, se le asigna automáticamente la categoría `Otros / Desconocidos` para mantener los balances e informes 100% íntegros sin registros huérfanos.
     - **Motor de Auto-Aprendizaje (`autoLearnRules`):** Monitorea transacciones modificadas en la UI de Actual Budget. Si el usuario reasigna la categoría de una compra (ej. de *Otros / Desconocidos* a *Food* o *Transporte*), el bridge detecta el cambio automáticamente, genera la regla en Actual Budget y la sincroniza. Las futuras compras en ese comercio heredan la nueva categoría en automático sin intervención manual. Corre en cada inserción de transacción y cada 5 minutos en background (o vía `GET /api/learn`).
  5. **Informes Nativos Creados en Actual Budget:**
     - **Gastos por Lugar / Beneficiario:** Vista de barras agrupada por `Payee` para comparar gastos en cada comercio individualmente.
     - **Gastos por Categoría:** Vista Donut / Torta agrupada por `Category` para control macro del presupuesto.
  6. **PWA & Acceso Móvil (Progressive Web App):**
     - Actual Budget es una **PWA nativa** Local-First con soporte offline y base de datos SQLite sincronizada por CRDT.
     - **Instalación en iOS (Safari):** Abrir `https://budget.jhojan.cloud`, presionar icono *Compartir* -> *Añadir a pantalla de inicio*.
     - **Instalación en Android (Chrome):** Abrir `https://budget.jhojan.cloud`, presionar menú 3 puntos -> *Instalar aplicación* o *Añadir a pantalla principal*.
     - Se ejecuta a pantalla completa como una app nativa, con icono oficial y rendimiento instantáneo.
  7. **Reglas y Mapeos Oficiales Configurados:**
     - **Categorías activas:** `Food`, `Despensa`, `Salud`, `Pagos`, `Suscripciones`, `Compra Random`, `Transporte`, `Universidad & Campus`, `Bills`, `Otros / Desconocidos`.
     - **Diferenciación Food vs. Despensa:** Tiendas de abarrotes y supermercados (`D1`, `Ara`, `Éxito`, `Carulla`) ➔ Categoría `Despensa`. Restaurantes externos (Presto, Mimos, La Wafflería, etc.) ➔ Categoría `Food`.
     - **Universidad de La Sabana:** Todos los movimientos de la Sabana ➔ Categoría `Food`.
     - **Mapeo de Transferencias / Contactos Personales:**
       - `*3203282014` ➔ Payee: `Nequi Personal`
       - `*3225206523` ➔ Payee: `Pago parqueadero Cicla`
       - `*3224788002` ➔ Payee: `Juliana`
       - `*3135276319` ➔ Payee: `Julian`
       - `*3222024082` ➔ Payee: `Santiago`
       - `*3013453853` ➔ Payee: `Daniel`
       - `*3114457098` ➔ Payee: `Esteban`
       - `PILA` ➔ Payee: `PILA`
  8. **Cuentas en Dólares (USD), Spread DólarApp (-$30 COP) y Scheduler Automático:**
     - **Cuentas configuradas:** `Deel (USD)` y `DólarApp (USD)` (Tracking / Off-budget para no contaminar el presupuesto mensual en COP y reflejar el Patrimonio Neto real).
     - **Saldos calibrados:**
       - `Deel (USD)`: $657 USD (Saldo actual: ~$2.167.844 COP).
       - `DólarApp (USD)`: $2,316 USD (Saldo actual: ~$7.641.897 COP).
       - Total: $2,973 USD (Patrimonio neto actual: ~$9.809.741 COP).
     - **Spread Real DólarApp:** Al valor oficial de la TRM de la Superfinanciera se le resta automáticamente **$30 COP** (`effectiveTRM = officialTRM - 30`) para igualar exactamente la cotización real de liquidación / venta de DólarApp al transferir a cuentas colombianas.
     - **Scheduler Automático en Background (`actual-bridge`):**
       - **Horario activo:** Corre **cada 2 horas** entre las **8:00 AM y las 5:00 PM** (Hora de Colombia / COT, `America/Bogota`).
       - **Comportamiento:** Consulta la API de la Superfinanciera (`datos.gov.co`), aplica el spread de -$30 COP, evalúa los saldos de Deel y DólarApp, y si hay variación registra el ajuste y sincroniza con Actual Server automáticamente.
       - **Cero intervención manual:** 100% automático, transparente y desatendido.
     - **Endpoint API Manual (Opcional):** `POST /api/sync-trm` en la red privada de Docker.

---

### 🛡️ 5. Configuración Específica de Vaultwarden

* **Subdominio:** `https://vault.jhojan.cloud`
* **Base de datos:** SQLite en `/data/db.sqlite3` montada en volumen persistente de Docker.
  - Variable crítica en Coolify: `VAULTWARDEN_DB_URL=sqlite:///data/db.sqlite3`
* **Políticas de Seguridad Activas:**
  - `SIGNUPS_ALLOWED=false`: Registro público desactivado; cualquier intento devuelve `404 Not Found`. Solo la cuenta maestra de Jhojan tiene acceso.
  - `ADMIN_TOKEN`: Token de 64 caracteres generado automáticamente por Coolify para `/admin`.
* **Clientes:** Compatible con las apps oficiales de Bitwarden (Android, iOS, extensión de navegadores y Desktop) configurando el servidor como *Self-hosted* con la URL `https://vault.jhojan.cloud`.

---

### 🛠️ 6. Cheat Sheet de Comandos Operativos para Agentes

Para cualquier futuro agente que necesite consultar, reiniciar o diagnosticar servicios en el servidor:

```bash
# 1. Listar todos los servicios configurados en Coolify
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s -H 'Authorization: Bearer 1|coolify-antigravity-token-xyz123' http://localhost:8000/api/v1/services"

# 2. Consultar variables de entorno de un servicio por su UUID
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s -H 'Authorization: Bearer 1|coolify-antigravity-token-xyz123' http://localhost:8000/api/v1/services/<SERVICE_UUID>/envs"

# 3. Reiniciar un servicio de Coolify vía API
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s -X POST -H 'Authorization: Bearer 1|coolify-antigravity-token-xyz123' http://localhost:8000/api/v1/services/<SERVICE_UUID>/restart"

# 4. Ver contenedores Docker activos y consumo de memoria/CPU
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

# 5. Ver logs en tiempo real de cualquier contenedor
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs --tail 50 -f <CONTAINER_NAME>"

# 6. Regla crítica de compilación Docker en este servidor:
# La arquitectura del procesador es ARM64 (aarch64). Si se compilan imágenes custom,
# deben soportar linux/arm64 o usar bases multi-arch (ej. python:3.11-slim, node:20-alpine).
```

---

## 🎨 Integración de Diseño UI/UX con Penpot vía MCP (Model Context Protocol)

Este repositorio y entorno de desarrollo cuentan con integración en tiempo real con **Penpot** (la herramienta open-source de diseño basada en estándares web SVG/CSS) para flujos de diseño asistido por IA (Agentic UI).

### 🔌 1. Configuración de Conexión
* **Archivo de Configuración:** `~/.gemini/config/mcp_config.json`.
* **Transporte:** Remote SSE (Server-Sent Events) contra la nube oficial de Penpot (`https://design.penpot.app`).
* **Servidor MCP:** Registrado como `penpot`.
* **Herramientas activas:**
  - `execute_code`: Ejecución programática de JavaScript en el lienzo del proyecto abierto mediante la API de plugins de Penpot (`penpot.createBoard()`, `penpot.createText()`, `penpot.createRectangle()`, etc.).
  - `export_shape`: Exportación de capas, vectores y assets a formatos estándar.
  - `penpot_api_info`: Inspección en tiempo de ejecución de tipos, métodos e interfaces disponibles en la API de Penpot.
  - `high_level_overview`: Guía arquitectónica y contratos de diseño de Penpot.

### 📐 2. Flujo de Trabajo Híbrido Diseño ➔ Código
1. **Pestaña activa en Penpot:** Para que el agente ejecute cambios en vivo en el lienzo, el usuario debe tener el proyecto abierto en su navegador en `design.penpot.app` con el plugin/modal de MCP visible (para mantener el WebSocket activo y evitar la suspensión del navegador).
2. **Generación de Prototipos:** El agente puede maquetar interfaces desktop y mobile completas, carruseles, tablas, tipografías y sistemas de color desde un prompt o a partir de capturas de pantalla de referencia.
3. **Conversión 1:1 a Producción:** Dado que Penpot almacena las geometrías en SVG y CSS nativos, el agente puede inspeccionar las capas generadas en Penpot y traducirlas con fidelidad exacta a componentes de **React 19 / Next.js + Tailwind CSS** dentro de `PortfolioWeb/` o cualquier proyecto futuro.

