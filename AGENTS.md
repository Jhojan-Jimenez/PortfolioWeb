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
