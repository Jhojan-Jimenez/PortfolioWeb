export const PROJECTS_ES: Record<string, any> = {
  gazu: {
    title: "Gazu — E-Commerce Headless Cloud-Native",
    subtitle:
      "Motor de comercio desacoplado empresarial con **Next.js 15 (App Router)**, **React 19**, núcleo GraphQL en **Vendure/NestJS**, GitOps en **k3s vía ArgoCD**, CI/CD multi-arquitectura **ARM64**, **Traefik anti-CORS** y **observabilidad integral**.",
    category: "Cloud Native & E-Commerce",
    badge: "Arquitectura Flagship",
    date: "2025 – Presente",
    role: "Arquitecto Cloud & Ingeniero Full Stack",
    teamOrContext: "Plataforma de Comercio Cloud-Native",
    shortDescription:
      "Motor de comercio empresarial desacoplado en **Kubernetes (k3s)**. Incluye **Next.js 15 App Router**, APIs GraphQL de **Vendure**, GitOps declarativo con **ArgoCD y Kustomize**, pipelines multi-arch **ARM64 en Oracle Cloud**, enrutamiento **Traefik anti-CORS** y observabilidad con **OTel, Prometheus y PostHog**.",
    clusterStatus: {
      indicator: "live",
      badgeText: "Estado del Clúster: En Vivo en Kubernetes (k3s) | GitOps Sincronizado",
    },
    liveDemos: [
      {
        label: "Storefront Editorial (Frontend)",
        url: "https://dev.gazu.jhojan.cloud/",
        badge: "Next.js 15 · React 19",
        description:
          "Tienda editorial de alto rendimiento con App Router, persistencia reactiva en cliente y estándares de accesibilidad a11y.",
      },
      {
        label: "GraphQL Shop API (Playground Interactivo)",
        url: "https://dev.gazu.jhojan.cloud/shop-api",
        badge: "GraphQL · Interactivo",
        description:
          "Playground interactivo para ejecutar queries reales de catálogo y pedidos directamente contra el motor de comercio.",
      },
      {
        label: "Back-Office / Panel Administrativo",
        url: "https://dev.gazu.jhojan.cloud/dashboard",
        badge: "Vendure Admin",
        description:
          "Panel administrativo para gestión de catálogo, inventario en tiempo real, canales de venta y procesamiento de órdenes.",
      },
      {
        label: "Observabilidad en Tiempo Real (Métricas Prometheus)",
        url: "https://dev.gazu.jhojan.cloud/metrics",
        badge: "Prometheus · En Vivo",
        description:
          "Muestra de métricas vivas del runtime de Node.js, latencias de consultas y consumo de memoria del backend.",
      },
    ],
    inspectionCommands: [
      {
        title: "Consultar la API GraphQL vía terminal",
        description:
          "Ejecuta una consulta al canal activo para auditar configuración multimoneda y localización directamente desde el clúster:",
      },
      {
        title: "Auditar el certificado SSL y headers HTTP del Ingress",
        description:
          "Inspecciona negociación HTTP/2, certificado TLS emitido automáticamente por Cert-Manager y headers de caché:",
      },
      {
        title: "Inspeccionar métricas de telemetría de Prometheus",
        description:
          "Extrae telemetría operativa en crudo y métricas del runtime de Node.js expuestas por el backend:",
      },
    ],
    metrics: [
      {
        label: "GITOPS DECLARATIVO",
        value: "ArgoCD + k3s",
        description: "Estado del clúster sincronizado declarativamente desde Git con auto-reparación",
      },
      {
        label: "PIPELINE MULTI-ARCH",
        value: "Linux ARM64",
        description: "Docker Buildx + QEMU en Oracle Cloud Ampere A1 para eficiencia de costo cero",
      },
      {
        label: "ARQUITECTURA INGRESS",
        value: "Traefik Anti-CORS",
        description: "Enrutamiento de dominio único (/ y /shop-api) con TLS automático de Let's Encrypt",
      },
      {
        label: "TELEMETRÍA DISTRIBUIDA",
        value: "OTel + Prometheus",
        description: "Observabilidad de producción con métricas Prometheus y PostHog con privacidad GDPR",
      },
    ],
    problem: {
      title: "El Desafío: Cuellos de Botella Monolíticos y Operaciones Frágiles",
      summary:
        "Las plataformas monolíticas tradicionales acoplan la interfaz visual con la lógica transaccional, generan **fricciones de CORS**, dependen de **despliegues manuales propensos a error** y arriesgan la **persistencia con estado**.",
      points: [
        "Renderizado de catálogo compitiendo directamente con la **base de datos transaccional**, degradando la conversión de compra.",
        "Comandos manuales `kubectl apply` en clústeres de producción provocando **desvío de configuración (drift)** y caídas.",
        "Arquitecturas desacopladas multi-dominio que originan **bloqueos de CORS** y mecanismos vulnerables de cookies.",
        "Bloqueadores de anuncios de clientes que distorsionan los **embudos críticos de conversión y analítica**.",
      ],
    },
    solution: {
      title: "La Solución: Arquitectura de Comercio Cloud-Native Desacoplada",
      summary:
        "Diseño e implementación de un ecosistema **headless en Kubernetes (k3s)**, con entrega continua mediante **GitOps declarativo**, compilación **multi-arquitectura ARM64** y **telemetría distribuida** de producción.",
      points: [
        "Storefront desacoplado en **Next.js 15 App Router** comunicándose con el núcleo GraphQL de **Vendure/NestJS**.",
        "Pipeline de GitOps declarativo con **ArgoCD y Kustomize**, eliminando modificaciones manuales en el clúster.",
        "Ingress **Traefik** que consolida storefront (`/`), API (`/shop-api`) y panel (`/dashboard`) bajo un **único host sin CORS**.",
        "Separación estricta: pods de aplicación **stateless escalables** y **PostgreSQL aislado en StatefulSet** con PVCs dedicados.",
        "Observabilidad de extremo a extremo integrando trazas distribuidas con **OpenTelemetry**, métricas con **Prometheus** y analítica con **PostHog**.",
      ],
    },
    architecture: {
      title: "The Senior Factor: 5 Decisiones Clave de Ingeniería",
      summary:
        "Decisiones arquitectónicas y compromisos de ingeniería resueltos para garantizar alta disponibilidad, costo cero de infraestructura, inmunidad ante desvíos de configuración y seguridad empresarial.",
      decisions: [
        {
          title: "GitOps Declarativo con ArgoCD y Kustomize",
          choice: "Controlador ArgoCD + Overlays de Kustomize (dev vs prod)",
          why: "El clúster no se modifica con `kubectl apply`; todo el estado deseado reside en Git. **ArgoCD provee auto-reparación (self-healing)** si un pod se desvía y **separación estricta de entornos**.",
        },
        {
          title: "Pipeline CI/CD Multi-Arch (Linux ARM64)",
          choice: "Docker Buildx + Emulación QEMU en GitLab CI",
          why: "Optimizado específicamente para procesadores **ARM64 (Ampere A1 en Oracle Cloud)**, reduciendo los **costos de infraestructura a cero** mientras maximiza el **throughput por ciclo**.",
        },
        {
          title: "Dominio Único y Arquitectura Anti-CORS vía Traefik",
          choice: "Traefik Ingress + Cert-Manager (Let's Encrypt automático)",
          why: "Enruta en un solo dominio: `/` hacia Next.js, y `/shop-api` & `/dashboard` hacia Vendure. **Elimina problemas de CORS**, permite cookies seguras `SameSite=Lax/Strict` y reutiliza un **solo certificado TLS**.",
        },
        {
          title: "Separación de Ciclos de Vida (Stateful vs Stateless)",
          choice: "Pods Stateless + PostgreSQL en StatefulSet con PVCs dedicados",
          why: "El frontend y backend se escalan horizontalmente **sin riesgo**. La base de datos PostgreSQL está blindada en **volúmenes persistentes dedicados (PVC)** ante cualquier fallo de despliegue.",
        },
        {
          title: "Observabilidad de Grado de Producción",
          choice: "OpenTelemetry (OTel gRPC) + Prometheus (prom-client) + Proxy PostHog",
          why: "**Trazas distribuidas con OTel**, métricas operativas vivas en **Prometheus** y analítica de producto con **PostHog vía proxy inverso** en Next.js para resistir bloqueadores y cumplir **GDPR**.",
        },
      ],
    },
    pillars: [
      {
        title: "Storefront Editorial en Next.js 15",
        description:
          "Tienda con App Router, React 19, persistencia local reactiva del carrito y estándares de accesibilidad a11y.",
        badge: "Next.js 15 · React 19",
      },
      {
        title: "Núcleo Vendure / NestJS GraphQL",
        description:
          "Motor de comercio modular con APIs GraphQL tipadas, arquitectura extensible de plugins y persistencia en PostgreSQL.",
        badge: "GraphQL · Vendure Core",
      },
      {
        title: "GitOps en k3s con ArgoCD",
        description:
          "Orquestación de clúster con despliegues declarativos, auto-reparación y separación de entornos dev/prod con Kustomize.",
        badge: "ArgoCD · k3s GitOps",
      },
    ],
    evidenceGallery: [
      {
        tabLabel: "Storefront Editorial",
        badge: "Next.js 15",
        title: "Storefront Editorial — Fashion That Moves With You",
        description:
          "Experiencia de aterrizaje editorial y catálogo con tipografía de alto impacto, fotografía de alta costura y renderizado SSR instantáneo en Next.js 15 App Router.",
        openLabel: "Abrir Storefront en Vivo",
      },
      {
        tabLabel: "Topología k3s & GitOps",
        badge: "Topología k3s",
        title: "Diagrama de Arquitectura Cloud-Native en Oracle Cloud ARM64",
        description:
          "Diagrama interactivo ilustrando Traefik Ingress, pods de Next.js, APIs de Vendure, StatefulSet de PostgreSQL, ArgoCD y OpenTelemetry.",
        openLabel: "Abrir Diagrama Interactivo",
      },
      {
        tabLabel: "Analítica PostHog",
        badge: "PostHog · En Vivo",
        title: "Gazu E-Commerce — Dashboard de Analítica en Producción",
        description:
          "Dashboard oficial de telemetría de producto monitoreando embudos de conversión, retención y sesiones de usuario en vivo.",
        openLabel: "Abrir PostHog en Vivo",
      },
      {
        tabLabel: "Colección & Drops",
        badge: "Catálogo",
        title: "Exploración de Colecciones y Drops de Temporada",
        description:
          "Navegación fluida por colecciones de moda y catálogo interactivo con filtros reactivos y renderizado optimizado en Next.js 15.",
        openLabel: "Abrir Colección en Vivo",
      },
      {
        tabLabel: "Checkout & Carrito",
        badge: "E-Commerce",
        title: "Detalle de Carrito y Flujo de Checkout",
        description:
          "Proceso de compra en tiempo real con validación de inventario, cálculo de impuestos, métodos de envío y pasarela de pago.",
        openLabel: "Probar Flujo de Compra",
      },
      {
        tabLabel: "Orden Completada",
        badge: "PostgreSQL · Vendure",
        title: "Confirmación de Compra y Generación de Orden",
        description:
          "Pantalla de confirmación de orden y persistencia transaccional en PostgreSQL con emisión de código de seguimiento y resumen.",
        openLabel: "Ver Plataforma en Vivo",
      },
    ],
  },

  talentmatch: {
    title: "TalentMatch AI — Casting Multimodal & Búsqueda Semántica de Modelos",
    subtitle:
      "Motor de descubrimiento de talentos en producción que combina embeddings multimodales **CLIP ViT-B/32 (512d)**, extracción de atributos con **GPT-4o-mini Vision**, similitud coseno con **pgvector en PostgreSQL 16** y **re-ranking ponderado** por permanencia de rasgos físicos.",
    category: "IA Aplicada & Búsqueda Vectorial",
    badge: "Visión & Búsqueda Vectorial",
    date: "2025",
    role: "Ingeniero de Sistemas de IA & Backend",
    teamOrContext: "Plataforma de Gestión para Agencia de Modelaje",
    shortDescription:
      "Plataforma empresarial de casting multimodal. Descubre talentos a partir de descripciones en **lenguaje natural o fotos de referencia** mediante **CLIP ViT-B/32 (512d)**, extracción automatizada de biometría con **GPT-4o-mini Vision** y recuperación en dos etapas con **similitud coseno en pgvector** y filtros relacionales SQL.",
    clusterStatus: {
      indicator: "live",
      badgeText: "Producción En Vivo | VPS Coolify & Docker Compose",
    },
    liveDemos: [
      {
        label: "Talent Discovery Studio (Frontend)",
        url: "https://models.jhojan.cloud/",
        badge: "React · Vite · En Vivo",
        description:
          "Interfaz interactiva de scouting con filtros biométricos en tiempo real, barra de búsqueda semántica y comp-cards dinámicas.",
      },
      {
        label: "API de Búsqueda Semántica & Computer Vision",
        url: "https://models.jhojan.cloud/api/docs",
        badge: "FastAPI · Swagger",
        description:
          "Documentación interactiva OpenAPI para endpoints de consulta multimodal, embeddings CLIP y workers de atributos en background.",
      },
    ],
    inspectionCommands: [
      {
        title: "Health Check del API Gateway y Contenedor en VPS",
        description:
          "Verifica el ciclo de vida de FastAPI, trabajadores de Uvicorn y enrutamiento del proxy inverso Traefik:",
      },
      {
        title: "Inspeccionar Contrato del Esquema OpenAPI",
        description:
          "Examina metadatos, versión del servicio y rutas disponibles para búsqueda semántica por texto e imagen:",
      },
    ],
    metrics: [
      {
        label: "ESPACIO VECTORIAL",
        value: "CLIP ViT-B/32",
        description: "Espacio latente unificado de 512 dimensiones mapeando texto e imagen en vectores compartidos",
      },
      {
        label: "ALMACENAMIENTO & SIMILITUD",
        value: "pgvector 16",
        description: "Consultas de distancia coseno en base de datos combinadas con filtros relacionales SQL WHERE",
      },
      {
        label: "EXTRACCIÓN BIOMÉTRICA",
        value: "GPT-4o-mini",
        description: "Extracción automatizada de tono de piel, color de ojos, medidas corporales y rasgos fisonómicos",
      },
      {
        label: "RE-RANKING HÍBRIDO",
        value: "0.45 CLIP + 0.45 Atributos",
        description: "Scoring compuesto que balancea distancia coseno visual con pesos según permanencia física",
      },
    ],
    problem: {
      title: "El Desafío: Filtros Rígidos y Ambigüedad Visual",
      summary:
        "El casting tradicional depende de **filtros rígidos de base de datos** o revisión manual de comp-cards impresas, los cuales fallan al buscar **estilos estéticos complejos o descripciones en lenguaje natural**.",
      points: [
        "Incapacidad de buscar modelos a partir de **moodboards o fotos de referencia visual** sin etiquetado manual previo.",
        "Filtros estrictos por etiquetas que fallan cuando las consultas usan **lenguaje descriptivo matizado** (ej. 'morena ojos claros pasarela alta moda').",
        "La búsqueda puramente visual de CLIP confunde **iluminación y estilo cosmético temporal** (peinados, maquillaje) con fisionomía real.",
        "Alto costo operativo para **catalogar manualmente medidas corporales** (busto, cintura, cadera) por cada talento registrado.",
      ],
    },
    solution: {
      title: "La Solución: Recuperación Híbrida en Dos Etapas & Permanencia de Rasgos",
      summary:
        "Diseño e implementación de un **pipeline multimodal en producción** combinando embeddings paralelos **CLIP ViT-B/32**, extracción con **GPT-4o-mini Vision**, filtros duros **SQL WHERE** y **re-ranking ponderado**.",
      points: [
        "**Procesamiento paralelo**: las consultas de texto se envían concurrentemente a **GPT-4o-mini** para extraer atributos y a **CLIP** para proyección vectorial.",
        "**Recuperación en dos etapas**: SQL aplica filtros duros WHERE para rasgos permanentes (tono de piel y género), retornando un **pool ampliado (top_n * 10)**.",
        "**Re-ranking por permanencia física**: scoring compuesto que balancea distancia coseno visual con pesos según **permanencia biológica de los rasgos**.",
        "**Onboarding automatizado**: background workers extraen características biométricas de comp-cards y generan **vectores CLIP de 512d** al registrar modelos.",
        "**Despliegue eficiente en VPS**: orquestado en Coolify VPS (8GB RAM) con **Docker Compose**, proxy interno y certificados SSL automáticos con **Traefik**.",
      ],
    },
    architecture: {
      title: "Decisiones de Ingeniería: Búsqueda Multimodal & Scoring Híbrido",
      summary:
        "Compromisos técnicos y decisiones arquitectónicas resueltas para asegurar precisión en casting, latencia sub-segundo y cero dependencia de SaaS vectoriales costosos.",
      decisions: [
        {
          title: "Espacio Latente Unificado con CLIP ViT-B/32 (512 Dimensiones)",
          choice: "Codificador Compartido de Texto e Imagen vía sentence-transformers",
          why: "Proyectar tanto descripciones de texto como fotos en el **mismo espacio vectorial de 512 dimensiones** permite buscar indistintamente por **texto o fotos de referencia** sin puentes de traducción.",
        },
        {
          title: "Recuperación en Dos Etapas y Ponderación por Permanencia de Rasgos",
          choice: "Filtros Duros SQL (Tez, Género) + Re-Ranker Ponderado en Python",
          why: "La similitud pura de CLIP confunde iluminación con rasgos biológicos. Combinar filtros relacionales con pesos de permanencia (**ojos: 0.40, complexión: 0.30 vs cabello: 0.04**) logró un **94% de concordancia con directores de casting**.",
        },
        {
          title: "PostgreSQL 16 + pgvector vs Base de Datos Vectorial SaaS",
          choice: "Extensión Nativa pgvector con Consistencia ACID Relacional",
          why: "Elimina latencias de red y costos de SaaS externos al ejecutar **consultas de distancia coseno y filtros relacionales SQL en la misma transacción ACID**.",
        },
        {
          title: "Arquitectura Asíncrona Ligera sobre VPS Coolify",
          choice: "FastAPI + Docker Compose + BackgroundTasks (Consumo ~3.5GB RAM)",
          why: "Se priorizaron **BackgroundTasks nativas de FastAPI**, optimizando los recursos del VPS de 8GB para que **CLIP (~600MB) y PostgreSQL operen con máxima holgura**.",
        },
      ],
    },
    pillars: [
      {
        title: "pgvector Nativo en PostgreSQL (512d)",
        description:
          "Búsqueda por similitud vectorial dentro de PostgreSQL 16 combinando distancia coseno con cláusulas relacionales SQL WHERE.",
        badge: "pgvector · SQL",
      },
      {
        title: "Extracción Biométrica con GPT-4o-mini Vision",
        description:
          "Extrae rasgos físicos estructurados (cabello, ojos, tez, medidas) de forma desatendida a partir de fotos de comp-cards.",
        badge: "GPT-4o-mini Vision",
      },
      {
        title: "FastAPI & Re-Ranker Híbrido Ponderado",
        description:
          "Backend asíncrono en Python que orquesta codificación CLIP paralela, expansión del pool de candidatos y cálculo del score compuesto.",
        badge: "FastAPI · Python 3.11",
      },
    ],
    evidenceGallery: [
      {
        tabLabel: "Búsqueda Semántica UI",
        badge: "CLIP + pgvector",
        title: "Casting de Talentos por Lenguaje Natural e Imagen",
        description:
          "Interfaz de búsqueda que permite describir estéticas deseadas o buscar por fotos de referencia.",
        openLabel: "Abrir Live Studio",
      },
      {
        tabLabel: "Comp-Card con GPT-4o",
        badge: "GPT-4o Vision",
        title: "Comp-Card Automatizada y Desglose de Atributos",
        description:
          "Perfil de talento detallando atributos extraídos automáticamente mediante GPT-4o Vision.",
      },
      {
        tabLabel: "Portal de Scouting",
        badge: "Convocatoria Pública",
        title: "Portal Público de Postulación y Scouting de Talentos",
        description:
          "Interfaz de registro para nuevos aspirantes donde suben sus fotografías polaroids y medidas corporales para evaluación automatizada.",
      },
      {
        tabLabel: "Regla Fenotípica",
        badge: "Pesos de Atributos",
        title: "Escala de Medidas y Regla de Permanencia de Rasgos",
        description:
          "Inspección del re-ranking algorítmico que visualiza cómo los rasgos biológicos permanentes tienen mayor peso que el estilismo cosmético mutable.",
      },
    ],
  },

  wheelus: {
    title: "WheelUS — Plataforma de Carpooling Universitario en Tiempo Real",
    subtitle:
      "Sistema de transporte universitario seguro y distribuido con **geolocalización en tiempo real**, **reserva de asientos atómica (0 sobreventas)** y **verificación institucional**.",
    category: "Sistemas Distribuidos & Geolocalización",
    badge: "Concurrencia & Geoespacial",
    date: "2024 – 2025",
    role: "Arquitecto de Backend & Co-Fundador",
    teamOrContext: "Iniciativa de Movilidad Sostenible · Universidad de La Sabana",
    shortDescription:
      "Plataforma integral de movilidad colaborativa para comunidades universitarias. Resuelve congestión vehicular mediante **geolocalización sobre OpenStreetMap/Leaflet**, barreras atómicas de concurrencia con **SELECT FOR UPDATE en PostgreSQL** y verificación estricta de identidad institucional.",
    metrics: [
      {
        label: "CONCURRENCIA ATÓMICA",
        value: "0 Sobrereservas",
        description: "Bloqueos pesimistas en transacciones PostgreSQL para reservas de cupos",
      },
      {
        label: "ACTUALIZACIÓN GEO",
        value: "Sub-segundo",
        description: "Ruteo geoespacial interactivo y cálculo de rutas punto a punto",
      },
      {
        label: "VERIFICACIÓN SEGURA",
        value: "100% Validado",
        description: "Autenticación ligada a credenciales y correos institucionales verificados",
      },
      {
        label: "DISPONIBILIDAD",
        value: "99.9% Uptime",
        description: "Arquitectura contenerizada con despliegue automatizado",
      },
    ],
    problem: {
      title: "El Desafío: Inseguridad, Congestión y Rutas Informales",
      summary:
        "Los estudiantes universitarios que viajan entre Bogotá y los campus en Sabana Norte enfrentan transporte costoso y grupos informales de chat propensos a **fraudes, cancelaciones de último momento y condiciones de carrera** en reservas.",
      points: [
        "Inseguridad y falta de trazabilidad en grupos de mensajería no regulados.",
        "**Condiciones de carrera críticas**: Múltiples pasajeros intentando reservar el último cupo disponible en el mismo milisegundo.",
        "Ausencia de cálculo dinámico de rutas y paradas optimizadas en tiempo real.",
      ],
    },
    solution: {
      title: "La Solución: Ecosistema Georreferenciado con Reserva Atómica",
      summary:
        "Desarrollo de un backend transaccional en **Django REST y PostgreSQL**, con **bloqueos pesimistas atómicos**, geocodificación sobre **OpenStreetMap** y autenticación federada institucional.",
      points: [
        "Barrera transaccional atómica con **`SELECT FOR UPDATE` en PostgreSQL**, garantizando **cero sobrereservas** bajo alta concurrencia.",
        "Ruteo y geolocalización punto a punto sobre **Leaflet y OSRM/OpenStreetMap** sin dependencias de APIs propietarias costosas.",
        "Validación de usuarios ligada a **correos y credenciales universitarias oficiales** para máxima seguridad.",
      ],
    },
    architecture: {
      title: "Arquitectura Transaccional & Decisiones de Diseño",
      summary:
        "Arquitectura centrada en consistencia de datos ACID, integridad de inventario de asientos en tiempo real y privacidad de trayectos.",
      decisions: [
        {
          title: "Transacciones Atómicas con SELECT FOR UPDATE",
          choice: "Bloqueo pesimista a nivel de fila durante la confirmación de la reserva.",
          why: "Los bloqueos a nivel de fila (`SELECT FOR UPDATE`) garantizan **atomicidad transaccional ACID estricta**, impidiendo race conditions incluso con decenas de peticiones concurrentes.",
        },
        {
          title: "OpenStreetMap + Leaflet vs Google Maps Platform",
          choice: "Pila geoespacial de código abierto.",
          why: "Uso de **OpenStreetMap y Leaflet** para autonomía técnica total, reduciendo a **costo cero** las consultas de mapas y cálculos de rutas.",
        },
      ],
    },
    pillars: [
      {
        title: "Integridad de Concurrencia Transaccional",
        description:
          "Garantía de cero sobrereservas mediante aislamiento de transacciones PostgreSQL y bloqueos a nivel de fila.",
        badge: "PostgreSQL · ACID",
      },
      {
        title: "Ruteo Geoespacial & Mapas",
        description:
          "Cálculo de trayectos, estimación de paradas y visualización en tiempo real con OpenStreetMap y Leaflet.",
        badge: "OSM · Leaflet",
      },
      {
        title: "Autenticación & Gobernanza de Seguridad",
        description:
          "Verificación obligatoria de dominio universitario, hashing de credenciales y tokens JWT de sesión.",
        badge: "JWT · RBAC",
      },
      {
        title: "Optimización de Movilidad Universitaria",
        description:
          "Impacto ambiental positivo al reducir la huella de carbono y el número de vehículos particulares en tránsito.",
        badge: "Movilidad Sostenible",
      },
    ],
    evidenceGallery: [
      {
        tabLabel: "Ruteo Geoespacial",
        badge: "Leaflet · OSM",
        title: "Trazado y Asignación de Rutas en Tiempo Real",
        description:
          "Mapa interactivo para definir rutas entre campus y municipios aledaños con cálculo de paradas estratégicas seguras.",
        openLabel: "Ver Repositorio",
        technicalNotes: [
          "Cálculo de polilíneas y puntos de parada optimizados para transporte compartido",
          "Renderizado vectorizado en el navegador con Leaflet a 60 FPS",
        ],
      },
      {
        tabLabel: "Barrera Atómica",
        badge: "PostgreSQL · ACID",
        title: "Arquitectura de Bloqueo de Asientos Sin Carreras",
        description:
          "Implementación de transacciones aisladas para garantizar que dos usuarios simultáneos nunca puedan reservar el mismo asiento en un vehículo.",
        openLabel: "Ver Repositorio",
        technicalNotes: [
          "Uso de bloqueos pesimistas SELECT FOR UPDATE en PostgreSQL",
          "Tiempos de confirmación transaccional inferiores a 45ms",
        ],
      },
    ],
  },

  "mercedes-amg": {
    title: "Mercedes-AMG GT3 — Experiencia Interactiva de Producto 3D",
    subtitle:
      "Configurador 3D WebGL de alto rendimiento con **shaders PBR personalizados**, **compresión Draco de geometría (-72% peso)** y renderizado constante a **60 FPS**.",
    category: "Gráficos 3D & Ingeniería Frontend",
    badge: "WebGL 3D · Three.js",
    date: "2024",
    role: "Ingeniero de Gráficos Web & Frontend",
    teamOrContext: "Desarrollo Creativo & Simulación Visual Interactiva",
    shortDescription:
      "Showcase interactivo de renderizado 3D para el vehículo de carreras Mercedes-AMG GT3. Diseñado en **React Three Fiber y Three.js** con materiales físicamente realistas (**PBR**), compresión **Draco** para carga ultrarrápida en **<1.2s** y controles orbitales de cámara fluidos a **60 FPS**.",
    metrics: [
      {
        label: "TASA DE FRAMES",
        value: "60 FPS",
        description: "Rendimiento constante en dispositivos móviles y de escritorio",
      },
      {
        label: "COMPRESIÓN DRACO",
        value: "-72% Peso",
        description: "Optimización de geometrías complejas para descarga instantánea",
      },
      {
        label: "MATERIALES PBR",
        value: "Realistas",
        description: "Mapas de rugosidad, metalicidad y reflejos ambientales IBL",
      },
      {
        label: "TIEMPO DE CARGA",
        value: "<1.2s",
        description: "Pipeline de precarga progresiva de texturas y shaders",
      },
    ],
    problem: {
      title: "El Desafío: Renderizado 3D Pesado y Caídas de Rendimiento Web",
      summary:
        "Las experiencias 3D en la web sufren frecuentemente de **archivos CAD de cientos de megabytes**, tiempos de carga frustrantes y **caídas severas de framerate** en GPUs integradas o dispositivos móviles.",
      points: [
        "Geometrías CAD complejas que sobrecargan el **bus de memoria de la GPU** sin optimización previa.",
        "Materiales poco realistas que no reflejan la estética de vehículos deportivos de alta competición.",
        "Bloqueo del hilo principal de JavaScript durante la **compilación de shaders y texturas**.",
      ],
    },
    solution: {
      title: "La Solución: Compresión Draco, React Three Fiber & Shaders PBR",
      summary:
        "Pipeline gráfico optimizado con **compresión geométrica Draco**, mapas de entorno HDR con **iluminación basada en imágenes (IBL)** y decodificación en **Web Workers secundarios**.",
      points: [
        "Compresión Draco reduciendo el tamaño del archivo GLTF en **más del 70%** sin pérdida visual.",
        "Ecosistema **React Three Fiber (R3F)** para control declarativo reactivo del árbol de escena.",
        "Materiales PBR avanzados con **reflejos ambientales IBL y sombras de contacto optimizadas**.",
      ],
    },
    architecture: {
      title: "Pipeline de Renderizado 3D & Optimización",
      summary:
        "Técnicas clave de ingeniería gráfica aplicadas para mantener 60 FPS sin comprometer el realismo.",
      decisions: [
        {
          title: "React Three Fiber (R3F) sobre Three.js Vanilla",
          choice: "Ecosistema R3F con Drei para gestión de recursos.",
          why: "Permite enlazar reactivamente la interacción del usuario con la escena 3D y **reutilizar ciclos de vida y reconciliación de React**.",
        },
        {
          title: "Geometría Draco & Texturas WebP",
          choice: "Descompresión en Web Workers dedicados.",
          why: "Descomprime geometría en **hilos secundarios (Web Workers)**, evitando congelamientos de la interfaz durante la inicialización.",
        },
      ],
    },
    pillars: [
      {
        title: "Renderizado Fotorrealista PBR",
        description: "Simulación precisa de pintura automotriz, fibra de carbono y cristal templado.",
        badge: "PBR Materials",
      },
      {
        title: "Optimización de GPU & WebGL",
        description: "Técnicas de culling y reducción de draw calls para mantener 60 FPS sólidos.",
        badge: "WebGL · 60 FPS",
      },
      {
        title: "Interacción de Cámara & Escena",
        description: "Controles orbitales suaves con amortiguación inercial y límites de rotación ergonómicos.",
        badge: "Orbit Controls",
      },
      {
        title: "Compresión de Activos 3D",
        description: "Empaquetado Draco de alta compresión decodificado en workers secundarios.",
        badge: "Draco GLTF",
      },
    ],
    evidenceGallery: [
      {
        tabLabel: "Canvas 3D WebGL",
        badge: "Three.js · R3F",
        title: "Showcase Interactivo del Mercedes-AMG GT3",
        description:
          "Experiencia visual en tiempo real que permite rotar, inspeccionar detalles aerodinámicos y alternar vistas con iluminación dinámica a 60 FPS.",
        openLabel: "Ver Proyecto",
        technicalNotes: [
          "Compresión Draco aplicada a todas las mallas de la carrocería e interiores",
          "Iluminación basada en imágenes (IBL) para reflejos realistas de estudio",
        ],
      },
    ],
  },

  "vaccine-recommender": {
    title: "Vaccine Recommender — Motor de Decisión Clínica PAI Colombia",
    subtitle:
      "Motor determinista de evaluación matricial para esquemas nacionales de vacunación bajo **directrices PAI y normativas epidemiológicas oficiales**.",
    category: "Ingeniería de Datos de Salud & Algoritmos",
    badge: "Algoritmos Clínicos PAI",
    date: "2025",
    role: "Ingeniero de Sistemas Algorítmicos & Salud",
    teamOrContext: "UCTS Innovation Center · Salud Pública",
    shortDescription:
      "Motor algorítmico **100% determinista** que evalúa historiales de vacunación y codifica las directrices epidemiológicas del **PAI (Programa Ampliado de Inmunizaciones)** de Colombia. Genera recomendaciones clínicas precisas en **<15ms** según edad, patologías crónicas y contraindicaciones.",
    metrics: [
      {
        label: "DETERMINISMO CLÍNICO",
        value: "100% Preciso",
        description: "Matriz lógica de cero ambigüedades validada por epidemiólogos",
      },
      {
        label: "REGLAS EPIDEMIOLÓGICAS",
        value: "30+ Biológicos",
        description: "Protocolos PAI integrales para todas las etapas del ciclo vital",
      },
      {
        label: "TIEMPO DE EVALUACIÓN",
        value: "<15 ms",
        description: "Cálculo matricial instantáneo en Node.js/TypeScript",
      },
      {
        label: "CUMPLIMIENTO NORMATIVO",
        value: "100% PAI",
        description: "Adherencia estricta a directrices del Ministerio de Salud",
      },
    ],
    problem: {
      title: "El Desafío: Ambigüedad en Protocolos Complejos de Inmunización",
      summary:
        "El personal de salud en puntos de vacunación maneja manuales impresos de cientos de páginas con reglas complejas y cambiantes, provocando **errores humanos de dosificación, retrasos en atención y oportunidades perdidas**.",
      points: [
        "Riesgo de errores en intervalos mínimos requeridos entre dosis biológicas distintas.",
        "Incertidumbre al evaluar pacientes con **esquemas incompletos, atrasados o patologías crónicas**.",
        "Falta de sistemas automatizados que ofrezcan **trazabilidad y justificación normativa oficial inmediata**.",
      ],
    },
    solution: {
      title: "La Solución: Motor de Evaluación Matricial Determinista",
      summary:
        "Diseño de un **motor clínico determinista en TypeScript** que evalúa vectores de estado del paciente contra matrices lógicas de biológicos en **<15 ms con explicabilidad médica total**.",
      points: [
        "Lógica formal determinista: **Cero alucinaciones o incertidumbres probabilísticas** en decisiones clínicas críticas.",
        "Salida clínica explicable: Cada dosis recomendada incluye el **artículo normativo y fundamento epidemiológico oficial**.",
        "Diseñado para operar **offline y en brigadas rurales** sin dependencia de conexión a internet.",
      ],
    },
    architecture: {
      title: "Arquitectura Algorítmica & Seguridad de Datos Médicos",
      summary:
        "Estructura diseñada bajo principios de trazabilidad clínica, determinismo estricto y protección de datos sensibles de pacientes.",
      decisions: [
        {
          title: "Algoritmos Deterministas vs Modelos de IA Probabilísticos",
          choice: "Lógica matricial formal y determinista en TypeScript.",
          why: "En prescripción clínica y salud pública **no se pueden tolerar alucinaciones o respuestas probabilísticas**; la normativa debe cumplirse con **100% de determinismo**.",
        },
        {
          title: "Arquitectura Ligera y Desacoplada",
          choice: "Módulo desacoplado evaluable en servidor o en cliente sin conexión.",
          why: "Módulo desacoplado evaluable sin conexión, habilitando su uso en **brigadas rurales con conectividad intermitente**.",
        },
      ],
    },
    pillars: [
      {
        title: "Matrices Clínicas Deterministas",
        description: "Evaluación matemática de intervalos biológicos y esquemas de vacunación.",
        badge: "Algoritmos Clínicos",
      },
      {
        title: "Alineación Normativa PAI",
        description: "Codificación fiel de las directrices del Ministerio de Salud y Cruz Roja.",
        badge: "PAI Colombia",
      },
      {
        title: "Trazabilidad & Explicabilidad Médica",
        description: "Cada recomendación incluye citas normativas y justificación técnica.",
        badge: "Auditoría Médica",
      },
      {
        title: "Diseño para Salud Pública",
        description: "Impacto directo en la reducción del rezago de esquemas de vacunación en comunidades.",
        badge: "Salud Pública",
      },
    ],
    evidenceGallery: [
      {
        tabLabel: "Matriz Clínica PAI",
        badge: "Algoritmos Clínicos",
        title: "Motor de Evaluación y Matriz de Recomendación",
        description:
          "Interfaz clínica que calcula el esquema pendiente del paciente y alerta sobre intervalos mínimos requeridos entre dosis según lineamientos PAI.",
        openLabel: "Ver Repositorio",
        technicalNotes: [
          "100% Determinista: lógica formal basada en reglas sanitarias oficiales",
          "Evaluación instantánea en menos de 15ms sin latencia de red",
        ],
      },
      {
        tabLabel: "Logs de Auditoría Médica",
        badge: "Trazabilidad PAI",
        title: "Fundamento Normativo y Registro de Decisiones",
        description:
          "Generación de reportes clínicos con la justificación legal y epidemiológica de cada dosis sugerida para el expediente del paciente.",
        openLabel: "Ver Repositorio",
        technicalNotes: [
          "Exportación estructurada de recomendaciones en formatos estándar de salud",
          "Respaldado con citas de circulares epidemiológicas del Ministerio de Salud",
        ],
      },
    ],
  },
};

// Aliases for slug compatibility with PROJECTS_DATA
PROJECTS_ES["mercedes-gt3"] = PROJECTS_ES["mercedes-amg"];
PROJECTS_ES["vaccine-cdss"] = PROJECTS_ES["vaccine-recommender"];
