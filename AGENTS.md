# AGENTS.md ? Portfolio Web de Jhojan Jimenez

Este documento sirve como memoria y gu?a arquitect?nica para Antigravity y otros agentes de IA en futuras sesiones de desarrollo sobre este repositorio.

---

## ?? Perfil Profesional y Posicionamiento

* **Nombre:** Jhojan Camilo Jimenez Amaya
* **Titular:** `Software Engineer | Backend & Cloud Architecture`
* **Enfoque de carrera:** Backend puro, Arquitectura Cloud y Sistemas Distribuidos (con capacidad Full Stack complementaria).
* **Experiencia:** +2 a?os de experiencia en producci?n (Blurealty, GovLab, UCTS, TurboCupones).
* **Educaci?n:** B.S. in Computer Engineering (Computational Science) ? Universidad de La Sabana (Promedio: 4.4 / 5.0) ? Graduaci?n 2026 ? ?nfasis en Arquitectura de Software.
* **Logro estrella:** ?? 1er lugar Sabana Hack 2025 (Sistema de alertas en tiempo real con IA para Cruz Roja Colombiana en 24h).
* **Ubicación:** Bogotá, Colombia.
* **Idiomas de trabajo:**
  - **Sitio web:** **Bilingüe (Inglés & Español)** con detección automática por navegador (`navigator.language`), persistencia en `localStorage` (`portfolio_lang`) y selector manual `[ EN | ES ]` en navbar fija y menú móvil.
  - **Conversación con el usuario:** En **Español**.

---

## ??? Stack Tecnol?gico del Proyecto

* **Framework:** Next.js 16+ (Turbopack, App Router, React 19, TypeScript).
* **Estilos:** Tailwind CSS + Variables HSL (Dark Mode por defecto, persistido en `localStorage`).
* **Componentes UI:** Shadcn UI + Radix UI primitives (`components/ui/`).
* **Animaciones:** Framer Motion (`useInView`, transiciones y variantes).
* **Gestor de Paquetes:** `pnpm` (Node v24 en WSL Ubuntu).
* **Formulario de Contacto:** Formspree (`/f/xzzgyber`) + Toastify / Sonner.
* **Despliegue:** Vercel (`https://dev.jhojan.cloud`).

---

## ?? Estructura de Componentes Clave

```
PortfolioWeb/
??? app/
?   ??? layout.tsx         # Root layout, metadata SEO y fuentes
?   ??? page.tsx           # Ensambla la SPA (Hero -> Skills -> Projects -> Experience -> Contact)
?   ??? globals.css        # Tokens de color HSL y clases utilitarias
?   ??? components/
?       ??? Header.tsx     # Navbar fija con scroll adaptativo y Dark Mode toggle
?       ??? Hero.tsx       # Bio, avatar, redes y CTAs principales
?       ??? Skills.tsx     # 5 pilares arquitectónicos (Cloud & K8s, Backend, Data Analytics, AI, Full Stack) + cajón plegable de stack completo
?       ??? Projects.tsx   # Showcase de proyectos (WheelUS, MortShop, Vaccine Rec.)
?       ??? Experience.tsx # CV/Resume downloads + Highlights + Historial laboral + Educaci?n
?       ??? Contact.tsx    # Formulario de contacto Formspree
??? linkedln/
?   ??? main.md            # Perfil optimizado y alineado para LinkedIn
?   ??? Jhojan-Jimenez-CV.docx # Hoja de vida en formato Word editable
?   ??? Jhojan-Jimenez-CV.pdf  # PDF de la hoja de vida
??? public/
?   ??? Me.jpeg            # Foto de perfil
?   ??? projects/          # Capturas de pantalla de proyectos
?   ??? resume/            # PDFs activos descargables desde la web
??? AGENTS.md              # Este archivo de memoria para agentes
```

---

## ?? Directrices para Pr?ximas Sesiones

### 🚀 Arquitectura de Proyectos & Evidence Inspector (`Projects.tsx`)
1. **Modal de Proyecto Minimalista y Visual-First:**
   - **Header Oculto:** Al abrir cualquier modal (`selectedSlug`), se agrega la clase `modal-open` a `body`, haciendo desaparecer completamente el `<header>` fijo de la página (`body.modal-open header { display: none !important; }`).
   - **Visual Primero:** Lo primero que ve el usuario inmediatamente debajo del título es la **captura de pantalla real de la aplicación** (`storefront-ui`), NO diagramas ni bloques de texto denso.
   - **Cero Saturación de Botones:** Máximo 1 botón de acción principal (`Ver Proyecto / Live Demo`) y un enlace sutil al repositorio si aplica. Se eliminaron duplicados y botones redundantes.
   - **Tabs Limpias:** Selector segmentado para alternar entre captura de UI, analítica en vivo (PostHog) y arquitectura cuando aplique.
2. **Arquitectura Verificada de Gazu (Cloud-Native Headless E-Commerce):**
   - **Producción Verificada:** Despliegue en Kubernetes (`k3s`) sobre procesadores ARM64 (Ampere A1 en Oracle Cloud OCI).
   - **GitOps Declarativo:** ArgoCD + Kustomize (overlays dev vs prod) con auto-reparación (self-healing) sin comandos manuales.
   - **Pipeline CI/CD Multi-Arch:** GitLab CI con Docker Buildx y emulación QEMU optimizado para Linux ARM64.
   - **Dominio Único & Anti-CORS:** Traefik Ingress enrutando `/` (Next.js 15 App Router / React 19), `/shop-api` (Vendure / NestJS GraphQL) y `/dashboard` (Back-Office), con certificados TLS automáticos de Cert-Manager (Let's Encrypt).
   - **Separación de Ciclos de Vida:** Frontend y Backend Stateless escalables horizontalmente; PostgreSQL 16 aislado en `StatefulSet` con volúmenes persistentes (PVCs) dedicados.
   - **Observabilidad Integral:** Trazas distribuidas OpenTelemetry (OTel gRPC), métricas de runtime Node.js con Prometheus (`prom-client`) y analítica de producto PostHog mediante proxy inverso en Next.js.
   - **Puntos de Inspección Interactivos:** Enlaces en vivo a Storefront, Playground GraphQL, Dashboard y Prometheus, junto con guía de inspección terminal con comandos `curl` verificables en producción.
   - **Capturas de Pantalla Oficiales:** `public/projects/gazu-collection.png`, `public/projects/gazu-checkout.png`, `public/projects/gazu-order-success.png`.
3. **Arquitectura Verificada de TalentMatch AI (Multimodal Model Casting & Semantic Search):**
   - **Producción Verificada:** Despliegue en VPS (8GB RAM) con Coolify, Docker Compose y Traefik auto-SSL (`https://models.jhojan.cloud/`).
   - **Captura Principal de Alta Conversión:** `public/projects/TalentMatchAI.png` (muestra la barra semántica 'morena ojos claros pasarela alta moda' y el catálogo dinámico de 16 modelos).
   - **Backend Asíncrono:** FastAPI (Python 3.11) + Uvicorn con tareas en segundo plano (`BackgroundTasks`) sin sobrecarga de Celery/Redis (~3.5GB RAM total de stack).
   - **Espacio Latente Unificado:** CLIP ViT-B/32 vía `sentence-transformers` (512 dimensiones) proyectando texto e imágenes al mismo espacio vectorial.
   - **Extracción de Rasgos Físicos:** GPT-4o-mini Vision procesando comp-cards fotográficas para extraer tono de piel, ojos, complexión y medidas corporales.
   - **Recuperación Híbrida en Dos Etapas:**
     1. Filtro duro SQL WHERE (`tez`, `genero`) con pool ampliado a `top_n * 10`.
     2. Re-ranking en Python por permanencia de atributos: `score = 0.45*clip + 0.45*attr_match + 0.10*exp_bonus`, con pesos fijos (`color_ojos: 0.40`, `complexion: 0.30`, `color_cabello: 0.15`, `tipo_cabello: 0.08`, `longitud_cabello: 0.04`, `barba: 0.03`).
   - **Base de Datos & In-Database Vector Search:** PostgreSQL 16 con extensión `pgvector` nativa (`pgvector/pgvector:pg16`), ejecutando distancias coseno sin saltos de red a SaaS externos.
   - **Puntos de Inspección en Vivo:** Enlace al frontend de scouting (`https://models.jhojan.cloud/`) y documentación interactiva Swagger (`https://models.jhojan.cloud/api/docs`).
   - **Capturas Oficiales de Producción:** `public/projects/TalentMatchAI.png` (frame 16:9 optimizado), `public/projects/talentmatch-comp-card.png` (detalle de perfil de modelo y métricas), `public/projects/talentmatch-scouting.png` (portal público de postulación).

### 💼 Arquitectura Híbrida Timeline + Consola de Ingeniería (`Experience.tsx`)
La sección de experiencia profesional implementa la experiencia combinada de **Timeline Cronológico + Consola Técnica de Arquitectura**:
1. **Resume Hub Oficial:** Botones segmentados píldora de descarga y vista previa (`Download CV` en azul y `Download Resume` en verde).
2. **Banners de Hitos:** 2 tarjetas destacadas (1er lugar Sabana Hack 2025 y Sistemas en Producción & GitOps) con caja de ícono violeta `bg-purple-950/40` y acentos `text-purple-300`.
3. **Experiencia Desktop (lg+): Timeline Conectado + Consola Sticky en Vivo:**
   - **Columna Izquierda (Timeline):** Columna vertebral continua con gradiente vertical (`from-purple-500 via-indigo-500 to-purple-900`), nodos circulares con pulso activo y tarjetas compactas con información básica (Empresa, Cargo, Período, Ubicación, estado `Active` y píldora de métrica estrella `✦ {job.highlightMetric}`).
   - **Interactividad Dual (Hover & Click):** Al pasar el cursor (`hover`) o hacer clic (`click`), se inspecciona el rol en tiempo real sin saltos de maquetación (cero layout shifts).
   - **Columna Derecha (Consola Técnica):** Panel fijo `sticky top-24` estilo terminal/IDE (`SYSTEM::CONSOLE // NODE_X`) con animación `AnimatePresence`. Revela de inmediato:
     - Header con empresa, cargo y estado activo.
     - Cuadrícula de 3 tarjetas de métricas de impacto con cifras de gran escala.
     - Resumen ejecutivo del rol (`t.summaryLabel`).
     - Entregables de arquitectura (`achievements` con `[TAG]`).
     - Tecnologías de producción verificadas (`technologies`).
4. **Experiencia Mobile (<lg): Timeline Progresivo con Despliegue de Consola:**
   - Línea de tiempo vertical continua adaptada a pantallas táctiles.
   - Cada tarjeta muestra inicialmente la información básica y al tocarla despliega la consola técnica inline con `Framer Motion`.
5. **Formación Académica:** Tarjeta unificada para el pregrado en Ingeniería Informática en la Universidad de La Sabana.

### 🌐 Arquitectura de Internacionalización (i18n: Inglés & Español)
El sitio cuenta con soporte nativo completo para **Inglés (EN)** y **Español (ES)**:
1. **Detección Automática & Persistencia (`app/context/LanguageContext.tsx`):**
   - Detecta el idioma del sistema del visitante (`navigator.language`) y prioriza español si inicia con `es`.
   - Persiste la preferencia en `localStorage.getItem("portfolio_lang")`.
   - Modifica dinámicamente `<html lang="en|es">`.
2. **Selector de Idioma en UI (`[ EN | ES ]`):**
   - Navbar fija en desktop y drawer responsivo en mobile.
   - Botón toggle de acceso rápido en la cabecera de las páginas de detalle de proyectos (`app/projects/[slug]/page.tsx`).
3. **Diccionario Técnico Unificado (`lib/i18n/translations.ts` y `lib/i18n/projects-es.ts`):**
   - Cobertura 100% en: Navbar, Hero, 5 Pilares de Habilidades, Inventario Full Stack (+40 herramientas), Proyectos (títulos, problemas, soluciones, decisiones arquitectónicas, evidencias), Experiencia (4 roles, logros, métricas, formación académica, Resume Hub) y Formulario de Contacto.

---

## ?? Comandos de Verificaci?n en WSL

```bash
# Compilaci?n limpia con Turbopack
. ~/.nvm/nvm.sh && /home/claude/.local/share/pnpm/bin/pnpm run build

# Servidor de desarrollo
. ~/.nvm/nvm.sh && /home/claude/.local/share/pnpm/bin/pnpm run dev
```


### 📄 Ubicación Oficial de CV y Resumes (Fuente Única de Verdad)
Todos los documentos de hoja de vida / CV y Resume se gestionan **exclusivamente en `public/resume/`**:
* **Español:** `public/resume/Jhojan_JimenezCV.docx` y `public/resume/Jhojan_JimenezCV.pdf`
* **Inglés:** `public/resume/Jhojan_Jimenez_Resume.docx` y `public/resume/Jhojan_Jimenez_Resume.pdf`
* **Regla:** Cualquier modificación futura a la hoja de vida debe realizarse directamente sobre los archivos de `public/resume/` (tanto en español como en inglés). La carpeta `linkedln/` está en `.gitignore` y solo contiene `main.md` para el perfil de LinkedIn.
