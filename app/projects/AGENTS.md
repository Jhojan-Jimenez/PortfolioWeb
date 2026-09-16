# Guía de Proyectos — Portfolio Web de Jhojan Jimenez

Este documento contiene los lineamientos, convenciones y el procedimiento paso a paso que cualquier agente de IA o desarrollador debe seguir para **añadir, modificar o auditar proyectos** en este portfolio.

---

## 🧭 Principio Rector: "Evidence-First & Visual-First"

El portfolio no es una lista genérica de repositorios o proyectos de juguete; es una **vitrina técnica de ingeniería verificable en producción**.
* **Visual Primero:** Lo primero que ve el usuario/reclutador al abrir un proyecto es la **captura de pantalla real en producción** de la interfaz o producto (`storefront-ui`, `dashboard`, `3D viewport`), NO diagramas abstractos ni bloques de texto densos.
* **Evidencia Verificable:** Cada proyecto debe respaldarse con métricas cuantificadas, decisiones de arquitectura justificadas (*Trade-offs*), enlaces a entornos en vivo (demos, Swagger `/docs`, GraphQL playground) y comandos terminales `curl` que demuestren que el sistema realmente existe o existió en producción.
* **Cero Saturación:** Máximo 1 botón de acción principal (`Live Demo / Ver Aplicación`) y 1 enlace secundario (`Repositorio` si es público o `Repositorio Privado`). Evitar botones redundantes o duplicados.

---

## 🗂️ Arquitectura de Archivos de Proyectos

Al añadir un nuevo proyecto con slug `<nuevo-proyecto>`, se deben sincronizar los siguientes archivos:

```
PortfolioWeb/
├── lib/
│   ├── projects-data.ts          # Fuente de verdad en INGLÉS (metadata, métricas, tabs, decisiones)
│   └── i18n/
│       └── projects-es.ts        # Traducción espejo al ESPAÑOL (100% de paridad con EN)
├── app/
│   ├── components/
│   │   └── Projects.tsx          # Showcase en Home (grid principal, selector de tags y modal rápido)
│   └── projects/
│       ├── AGENTS.md             # Este documento de lineamientos
│       └── [slug]/
│           └── page.tsx          # Página de caso de estudio detallado (/projects/<slug>)
└── public/
    └── projects/                 # Capturas reales optimizadas (16:9 o 4:3 en .png o .webp)
```

---

## 📐 Estructura de Datos (`ProjectCaseStudy`)

Cada proyecto implementa la interfaz `ProjectCaseStudy` en `lib/projects-data.ts`:

```typescript
export interface ProjectCaseStudy {
  slug: string;                      // Identificador único URL (kebab-case, ej: "gazu", "talentmatch")
  title: string;                     // Nombre del producto/proyecto
  tagline: string;                   // Titular de impacto técnico de 1 línea
  badge: string;                     // Categoría o estado (ej: "ARM64 PRODUCTION K8S", "MULTIMODAL AI")
  category: "cloud" | "backend" | "ai" | "data" | "fullstack"; // Pilar principal
  period: string;                    // Fechas de desarrollo/producción (ej: "2025 – Present")
  featured: boolean;                 // true si se muestra en el showcase prioritario
  liveStatus: {
    indicator: "live" | "building" | "maintenance"; // Semáforo de estado
    badgeText: string;               // Texto de la píldora (ej: "OCI ARM64 K3S CLUSTER")
  };
  metrics: ProjectMetric[];          // 3-4 tarjetas de métricas cuantificadas (value, label, description)
  problem: string;                   // El reto de ingeniería, cuello de botella o necesidad técnica
  solution: string;                  // La solución arquitectónica implementada
  decisions: ProjectDecision[];      // 3-4 decisiones con trade-off (title, choice, why)
  architecturePillars: ProjectPillar[]; // 3-4 pilares tecnológicos clave
  technologies: string[];            // Lista de tecnologías tags (ej: ["FastAPI", "Docker", "pgvector"])
  evidenceItems: ProjectEvidenceItem[]; // Tabs del Evidence Inspector (UI, Telemetría, Arquitectura)
  inspectionLinks: ProjectInspectionLink[]; // Enlaces directos a producción (Storefront, Swagger, etc.)
  terminalInspection?: ProjectTerminalCommand[]; // Comandos curl para inspeccionar headers/APIs en vivo
  repoUrl?: string;                  // Enlace GitHub si es público (o undefined si es privado)
  liveUrl?: string;                  // URL de la aplicación en vivo
}
```

---

## 🖼️ Estándares para Activos Visuales (`public/projects/`)

1. **Resolución y Formato:**
   * Las capturas deben estar en `public/projects/` en formato `.png` o `.webp`.
   * Proporción recomendada: **16:9** (ej. 1920x1080 o 1280x720) para encajar perfectamente en el visor del modal y página de detalle.
   * Compresión: Mantener el tamaño de archivo por debajo de **800 KB** para garantizar carga instantánea con Next.js `<Image>`.
2. **Convención de Nombres:**
   * `<slug>-hero.png` o `<slug>.png` (Captura de pantalla principal de la aplicación en acción).
   * `<slug>-dashboard.png` (Panel administrativo o interfaz secundaria).
   * `<slug>-architecture.png` o `.html` (Diagrama interactivo o topología si aplica).

---

## 🌐 Lineamientos Bilingües (i18n: Inglés & Español)

El sitio es **100% bilingüe**. Todo nuevo proyecto **debe existir en ambos idiomas**:

1. **Inglés (Fuente de verdad):** Añadir el objeto completo a `PROJECTS_CASE_STUDIES` en `lib/projects-data.ts`.
2. **Español:** Añadir la traducción espejo completa a `PROJECTS_ES` en `lib/i18n/projects-es.ts` con el **mismo slug**.
3. **Vocabulario técnico defensible:**
   * Mantener nombres de tecnologías sin traducir (`FastAPI`, `pgvector`, `Docker`, `PostgreSQL`).
   * Redactar descripciones de decisiones con la justificación del *por qué*:
     - ❌ *"Usamos FastAPI porque es rápido."*
     - 🟢 *"Seleccionamos FastAPI (Python 3.11) por su soporte asíncrono nativo (ASGI) y validación en tiempo de ejecución con Pydantic, permitiendo un throughput de +1,200 req/s con solo 350MB de memoria base."*

---

## 🔬 El Evidence Inspector (Tabs de Evidencia)

El visor interactivo (`evidenceItems`) permite al reclutador inspeccionar diferentes facetas del sistema:

* **Tab 1 — `type: "image"`:** Interfaz de usuario real (`src: "/projects/<slug>.png"`). Debe ser la pestaña activa por defecto.
* **Tab 2 — `type: "telemetry-card"` o `type: "iframe"`:** Observabilidad o métricas en vivo (ej. trazas OpenTelemetry, eventos PostHog, Prometheus).
* **Tab 3 — `type: "iframe"` o `type: "image"`:** Diagrama de arquitectura o flujo de datos interactivo si aporta valor tangible.

---

## ✅ Checklist para Añadir un Nuevo Proyecto

Al crear un nuevo proyecto en el portfolio:

- [ ] **1. Activo visual:** Guardar captura de producción 16:9 en `public/projects/<slug>.png`.
- [ ] **2. Datos en Inglés:** Registrar el proyecto en `lib/projects-data.ts` con sus métricas, decisiones, pilares y enlaces.
- [ ] **3. Traducción al Español:** Registrar la versión espejo en `lib/i18n/projects-es.ts` con el mismo slug.
- [ ] **4. Enlaces de Inspección:** Incluir URLs verificables (`liveUrl`, Swagger `/docs`, o repositorio GitHub).
- [ ] **5. Comandos Terminal (Opcional):** Si el backend está desplegado, añadir comandos `curl -I` para permitir inspección técnica.
- [ ] **6. Verificación de Compilación:** Ejecutar build con Turbopack:
  ```bash
  . ~/.nvm/nvm.sh && /home/claude/.local/share/pnpm/bin/pnpm run build
  ```
- [ ] **7. Prueba Visual:** Abrir el modal en `/` y la ruta dinámica `/projects/<slug>`, comprobando que el header se oculte al abrir el modal y que las pestañas alternen fluidamente.
