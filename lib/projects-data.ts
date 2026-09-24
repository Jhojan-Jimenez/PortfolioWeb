export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectDecision {
  title: string;
  choice: string;
  why: string;
}

export interface ProjectPillar {
  iconName: string;
  title: string;
  description: string;
  badge: string;
}

export interface ProjectEvidenceItem {
  id: string;
  type: "iframe" | "image" | "telemetry-card";
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  src?: string;
  aspectRatio?: string;
  openUrl?: string;
  openLabel?: string;
  technicalNotes?: string[];
  telemetrySpecs?: {
    engine: string;
    protocol: string;
    endpointOrQuery: string;
    status: string;
  };
}

export interface ProjectInspectionLink {
  label: string;
  url: string;
  badge: string;
  description: string;
}

export interface ProjectTerminalCommand {
  title: string;
  description?: string;
  command: string;
}

export interface ProjectLiveStatus {
  indicator: "live" | "building" | "maintenance";
  badgeText: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categories?: string[];
  badge?: string;
  isFlagship?: boolean;
  date: string;
  role: string;
  teamOrContext: string;
  shortDescription: string;
  heroImage: string;
  liveUrl?: string;
  devUrl?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  clusterStatus?: ProjectLiveStatus;
  liveDemos?: ProjectInspectionLink[];
  inspectionCommands?: ProjectTerminalCommand[];
  technologies: string[];
  metrics: ProjectMetric[];
  problem: {
    title: string;
    summary: string;
    points: string[];
  };
  solution: {
    title: string;
    summary: string;
    points: string[];
  };
  architecture: {
    title: string;
    summary: string;
    decisions: ProjectDecision[];
  };
  pillars: ProjectPillar[];
  evidenceGallery?: ProjectEvidenceItem[];
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    slug: "gazu",
    title: "Gazu — Cloud-Native Headless E-Commerce",
    subtitle:
      "Enterprise decoupled commerce engine with **Next.js 15 (App Router)**, **React 19**, **Vendure/NestJS** GraphQL core, **k3s GitOps via ArgoCD**, automated **Docker CI/CD**, **Traefik anti-CORS ingress**, and **full-stack observability**.",
    category: "Cloud Native & E-Commerce",
    categories: ["cloud", "backend", "frontend"],
    badge: "Flagship Architecture",
    isFlagship: true,
    date: "2025 – Present",
    role: "Full Stack & Cloud Architect",
    teamOrContext: "Cloud-Native Commerce Platform",
    shortDescription:
      "Enterprise decoupled commerce engine on **Kubernetes (k3s)**. Features **Next.js 15 App Router**, **Vendure GraphQL APIs**, declarative GitOps with **ArgoCD & Kustomize**, automated CI/CD pipelines, **Traefik anti-CORS routing**, and production observability (**OTel, Prometheus, PostHog**).",
    heroImage: "/projects/gazu-ecommerce.png",
    liveUrl: "https://gazu.jhojan.cloud",
    devUrl: "https://dev.gazu.jhojan.cloud",
    clusterStatus: {
      indicator: "live",
      badgeText: "Cluster Status: Live on Kubernetes (k3s) | GitOps Synced",
    },
    liveDemos: [
      {
        label: "Storefront (Production)",
        url: "https://gazu.jhojan.cloud",
        badge: "Next.js 15 · Production",
        description:
          "High-performance luxury editorial storefront with App Router, reactive local persistence, and strict a11y accessibility.",
      },
      {
        label: "Garment Catalog & Filters",
        url: "https://gazu.jhojan.cloud/shop",
        badge: "Shop Catalog",
        description:
          "Product catalog with dynamic variants, reactive facet filters, and instant SSR rendering.",
      },
      {
        label: "Product Detail (PDP)",
        url: "https://gazu.jhojan.cloud/product/gazu-01",
        badge: "PDP · High-Res",
        description:
          "Technical garment sheet with size selector and high-resolution asset delivery.",
      },
      {
        label: "Decoupled Checkout Pipeline",
        url: "https://gazu.jhojan.cloud/checkout",
        badge: "7-Stage Checkout",
        description:
          "Decoupled 7-stage state machine handling transactional purchasing, tax computation, and order placement.",
      },
      {
        label: "Admin Dashboard (Vendure)",
        url: "https://gazu.jhojan.cloud/dashboard",
        badge: "Vendure Admin",
        description:
          "Administrative control plane for catalog, inventory, and orders. (User: superadmin / Pass: superadmin123).",
      },
      {
        label: "GraphiQL IDE (Shop API)",
        url: "https://gazu.jhojan.cloud/graphiql/shop",
        badge: "GraphQL · Playground",
        description:
          "Interactive query playground to inspect the commerce catalog schema and mutations.",
      },
      {
        label: "Real-Time Observability (Prometheus)",
        url: "https://gazu.jhojan.cloud/metrics",
        badge: "Prometheus · Live",
        description:
          "Real-time operational metrics showing Node.js runtime health, event loop latency, and database query timings.",
      },
      {
        label: "Staging Environment (Develop)",
        url: "https://dev.gazu.jhojan.cloud",
        badge: "k3s Staging",
        description:
          "Isolated testing environment with dedicated database for pre-release validation before production rollout.",
      },
    ],
    inspectionCommands: [
      {
        title: "Query the live GraphQL API via Terminal",
        description:
          "Executes an active channel query to verify multi-currency and localization settings directly from the cluster:",
        command:
          "curl -X POST https://gazu.jhojan.cloud/shop-api \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"query\": \"{ activeChannel { id code defaultLanguageCode currencyCode } }\"}'",
      },
      {
        title: "Audit Ingress SSL Certificate & HTTP Headers",
        description:
          "Inspects HTTP/2 negotiation, automatic TLS certificate issued by Cert-Manager, and cache headers:",
        command: "curl -I https://gazu.jhojan.cloud/",
      },
      {
        title: "Inspect Prometheus Runtime Metrics",
        description:
          "Pulls raw operational telemetry and Node.js runtime gauges exposed by the backend:",
        command: "curl https://gazu.jhojan.cloud/metrics | grep vendure",
      },
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "Vendure Core",
      "NestJS",
      "Kubernetes (k3s)",
      "ArgoCD",
      "Kustomize",
      "Docker Buildx",
      "Oracle Cloud (OCI)",
      "Traefik Ingress",
      "PostgreSQL (StatefulSet)",
      "GraphQL APIs",
      "OpenTelemetry",
      "Prometheus",
      "PostHog Analytics",
      "GitLab CI/CD",
    ],
    metrics: [
      {
        label: "DECLARATIVE GITOPS",
        value: "ArgoCD + k3s",
        description: "Self-healing Kubernetes cluster state synchronized declaratively from Git",
      },
      {
        label: "CONTAINER ENGINE",
        value: "Docker Buildx",
        description: "Optimized immutable container images and automated deployment with zero downtime",
      },
      {
        label: "INGRESS ARCHITECTURE",
        value: "Traefik Anti-CORS",
        description: "Single-domain routing (/ and /shop-api) with Let's Encrypt TLS cert-manager",
      },
      {
        label: "DISTRIBUTED TELEMETRY",
        value: "OTel + Prometheus",
        description: "Production observability with Prometheus metrics and privacy-first PostHog",
      },
    ],
    problem: {
      title: "The Challenge: Monolithic Coupling & Operational Fragility",
      summary:
        "Monoliths couple catalog browsing with transactional logic, while decoupling services introduces CORS friction, persistence risks, and operational fragility under manual deployments.",
      points: [
        "Storefront rendering competes with transactional checkout for CPU and database connections, degrading conversion during traffic surges.",
        "Decoupling frontend and backend across separate domains creates recurring CORS preflight latency and fragile cookie handling.",
        "Deploying changes manually via kubectl apply without GitOps causes configuration drift and lack of auditability during outages.",
        "Running relational databases as disposable stateless pods risks data loss and volume detachment during rolling updates.",
      ],
    },
    solution: {
      title: "The Solution: Decoupled Cloud-Native Commerce Ecosystem",
      summary:
        "Engineered a decoupled headless commerce engine on Kubernetes (k3s) with declarative GitOps delivery, immutable containers, and production observability.",
      points: [
        "Decoupled Next.js 15 App Router storefront connected to a high-throughput Vendure/NestJS GraphQL core.",
        "Declarative GitOps deployment with ArgoCD and Kustomize overlays, eliminating manual cluster changes.",
        "Traefik Ingress routing storefront, GraphQL API, and admin dashboard under a single domain without CORS.",
        "Horizontally scalable stateless application pods with PostgreSQL isolated in a StatefulSet with dedicated PVCs.",
        "Distributed observability combining OpenTelemetry tracing, Prometheus metrics, and adblock-resistant PostHog analytics.",
      ],
    },
    architecture: {
      title: "The Senior Factor: 5 Architectural Engineering Decisions",
      summary:
        "Core tradeoffs resolved to guarantee high availability, zero infrastructure cost, immunity to configuration drift, and enterprise security.",
      decisions: [
        {
          title: "Declarative GitOps with ArgoCD & Kustomize",
          choice: "ArgoCD Controller + Kustomize Overlays",
          why: "Eliminates configuration drift with automated reconciliation and self-healing from Git.",
        },
        {
          title: "Automated Container CI/CD Pipeline",
          choice: "Docker Buildx + GitLab CI / GitHub Actions",
          why: "Builds immutable cached container images, guaranteeing fast, reproducible rollouts with zero service downtime.",
        },
        {
          title: "Single-Domain Anti-CORS Ingress via Traefik",
          choice: "Traefik Ingress + Let's Encrypt Cert-Manager",
          why: "Consolidates storefront, API, and back-office under one domain with automatic TLS, eliminating CORS.",
        },
        {
          title: "Lifecycle Separation (Stateful vs Stateless)",
          choice: "Stateless App Pods + PostgreSQL StatefulSet",
          why: "Scales stateless application pods independently while isolating PostgreSQL with dedicated PVCs to safeguard transactions.",
        },
        {
          title: "Production Observability & Product Analytics",
          choice: "OpenTelemetry + Prometheus + PostHog Proxy",
          why: "Combines OTel distributed tracing, live Prometheus gauges, and privacy-compliant PostHog analytics routed through Next.js.",
        },
      ],
    },
    pillars: [
      {
        iconName: "Layers",
        title: "Next.js 15 Editorial Storefront",
        description:
          "App Router storefront built with React 19, reactive local storage cart synchronization, and strict a11y accessibility standards.",
        badge: "Next.js 15 · React 19",
      },
      {
        iconName: "Server",
        title: "Vendure / NestJS GraphQL Core",
        description:
          "Modular commerce core with type-safe GraphQL Shop & Admin APIs, customizable plugin architecture, and PostgreSQL.",
        badge: "GraphQL · Vendure Core",
      },
      {
        iconName: "Workflow",
        title: "k3s GitOps & ArgoCD Pipeline",
        description:
          "Cloud-native cluster orchestration with declarative GitOps continuous delivery, Kustomize overlays, and self-healing.",
        badge: "ArgoCD · k3s GitOps",
      },
    ],
    evidenceGallery: [
      {
        id: "hero-editorial-ui",
        type: "image",
        tabLabel: "Storefront Editorial",
        badge: "Next.js 15",
        title: "Storefront Editorial — Fashion That Moves With You",
        description:
          "Experiencia de aterrizaje editorial y catálogo con tipografía de alto impacto, fotografía de alta costura y renderizado SSR instantáneo en Next.js 15 App Router.",
        src: "/projects/gazu-ecommerce.png",
        openUrl: "https://gazu.jhojan.cloud",
        openLabel: "Abrir Storefront en Vivo",
      },
      {
        id: "architecture",
        type: "iframe",
        tabLabel: "Topología k3s & GitOps",
        badge: "Topología k3s",
        title: "Diagrama de Arquitectura Cloud-Native en Kubernetes (k3s)",
        description:
          "Diagrama interactivo ilustrando Traefik Ingress, pods de Next.js, APIs de Vendure, StatefulSet de PostgreSQL y OpenTelemetry.",
        src: "/diagrams/gazu-architecture.html?embed=1&theme=dark",
        openUrl: "/diagrams/gazu-architecture.html",
        openLabel: "Abrir Diagrama Interactivo",
      },
      {
        id: "posthog-telemetry",
        type: "iframe",
        tabLabel: "PostHog Analytics",
        badge: "PostHog · En Vivo",
        title: "Gazu E-Commerce — Dashboard de Analítica en Producción",
        description:
          "Dashboard oficial de telemetría de producto monitoreando embudos de conversión, retención y sesiones de usuario en vivo.",
        src: "https://us.posthog.com/shared/_uRfNfPeo8K51Tamsl3BvzNeEcVdPA",
        openUrl: "https://us.posthog.com/shared/_uRfNfPeo8K51Tamsl3BvzNeEcVdPA",
        openLabel: "Abrir PostHog en Vivo",
      },
      {
        id: "collection-ui",
        type: "image",
        tabLabel: "Colección & Drops",
        badge: "Catálogo",
        title: "Exploración de Colecciones y Drops de Temporada",
        description:
          "Navegación fluida por colecciones de moda y catálogo interactivo con filtros reactivos y renderizado optimizado en Next.js 15.",
        src: "/projects/gazu-collection.png",
        openUrl: "https://gazu.jhojan.cloud/shop",
        openLabel: "Abrir Catálogo en Vivo",
      },
      {
        id: "checkout-ui",
        type: "image",
        tabLabel: "Checkout & Carrito",
        badge: "E-Commerce",
        title: "Detalle de Carrito y Flujo de Checkout",
        description:
          "Proceso de compra en tiempo real con validación de inventario, cálculo de impuestos, métodos de envío y pasarela de pago.",
        src: "/projects/gazu-checkout.png",
        openUrl: "https://gazu.jhojan.cloud/checkout",
        openLabel: "Probar Flujo de Compra",
      },
      {
        id: "order-success-ui",
        type: "image",
        tabLabel: "Orden Completada",
        badge: "PostgreSQL · Vendure",
        title: "Confirmación de Compra y Generación de Orden",
        description:
          "Pantalla de confirmación de orden y persistencia transaccional en PostgreSQL con emisión de código de seguimiento y resumen.",
        src: "/projects/gazu-order-success.png",
        openUrl: "https://gazu.jhojan.cloud",
        openLabel: "Ver Plataforma en Vivo",
      },
    ],
  },
  {
    slug: "talentmatch",
    title: "TalentMatch AI — Multimodal Model Casting & Semantic Search",
    subtitle:
      "Production talent discovery engine combining **CLIP ViT-B/32 multimodal embeddings (512d)**, **GPT-4o-mini Vision** attribute extraction, **PostgreSQL 16 pgvector** cosine similarity, and **weighted trait permanence re-ranking**.",
    category: "Applied AI & Vector Search",
    categories: ["cloud", "ai", "backend", "frontend"],
    badge: "Computer Vision & Vector Search",
    date: "2025",
    role: "AI & Backend Systems Engineer",
    teamOrContext: "Talent Agency Management Platform",
    shortDescription:
      "Enterprise multimodal casting platform. Discovers talent through **natural language descriptions or reference photo uploads** using **CLIP ViT-B/32 (512d)**, automated biometric attribute extraction via **GPT-4o-mini Vision**, and two-stage retrieval with **pgvector cosine similarity** and SQL trait filtering.",
    heroImage: "/projects/TalentMatchAI.png",
    liveUrl: "https://models.jhojan.cloud/admin/search",
    devUrl: "https://models.jhojan.cloud",
    clusterStatus: {
      indicator: "live",
      badgeText: "Production Live | VPS Coolify & Docker Compose",
    },
    liveDemos: [
      {
        label: "Multimodal Talent Search (Demo Mode)",
        url: "https://models.jhojan.cloud/admin/search",
        badge: "Demo · No Login Required",
        description:
          "Recommended link for evaluators and recruiters. Enables full natural language searches and visual similarity matching without credentials.",
      },
      {
        label: "Main Portal & Login",
        url: "https://models.jhojan.cloud",
        badge: "Admin & Talent Portal",
        description:
          "Administrative control dashboard and comprehensive talent profile intake management.",
      },
      {
        label: "Interactive OpenAPI Docs (Swagger)",
        url: "https://models.jhojan.cloud/docs",
        badge: "FastAPI · Swagger UI",
        description:
          "Interactive documentation covering all multimodal embedding, vector search, and biometric extraction endpoints.",
      },
      {
        label: "Health & Engine Diagnostic Status",
        url: "https://models.jhojan.cloud/api/health",
        badge: "Health Check · Live",
        description:
          "Real-time diagnostic health check endpoint reporting active service runtime and CLIP ViT-B/32 model status.",
      },
    ],
    inspectionCommands: [
      {
        title: "Health Check API Gateway & VPS Container",
        description:
          "Verifies FastAPI lifespan, Uvicorn worker readiness, and Traefik reverse proxy routing:",
        command: "curl -I https://models.jhojan.cloud/api/health",
      },
      {
        title: "Inspect OpenAPI Schema Contract",
        description:
          "Inspects metadata, versioning, and available routes for text and image semantic search:",
        command: "curl -s https://models.jhojan.cloud/api/openapi.json | grep -o '\"title\":\"[^\"]*\"'",
      },
    ],
    technologies: [
      "FastAPI",
      "Python 3.11",
      "CLIP (ViT-B/32)",
      "pgvector",
      "PostgreSQL 16",
      "GPT-4o-mini Vision",
      "Docker Compose",
      "Coolify VPS",
      "Traefik SSL",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    metrics: [
      {
        label: "VECTOR LATENT SPACE",
        value: "CLIP ViT-B/32",
        description: "Unified 512-dim embedding space mapping text and images into shared vectors",
      },
      {
        label: "STORAGE & COSINE SIM",
        value: "pgvector 16",
        description: "In-database vector similarity queries combined with relational SQL WHERE filters",
      },
      {
        label: "BIOMETRIC EXTRACTION",
        value: "GPT-4o-mini",
        description: "Automated extraction of skin tone, eye color, measurements, and body traits",
      },
      {
        label: "HYBRID RE-RANKING",
        value: "0.45 CLIP + 0.45 Attr",
        description: "Composite scoring balancing visual cosine distance and physical permanence weights",
      },
    ],
    problem: {
      title: "The Challenge: Rigid Keyword Tags & Visual Ambiguity",
      summary:
        "Traditional modeling agency casting relies on **rigid database filters** or manual book flipping, which fail when casting directors describe **nuanced aesthetic moods or provide moodboard reference photos**.",
      points: [
        "Inability to search models from **photo moodboards or visual references** without manual tagging.",
        "Strict keyword tags failing when queries use **complex descriptive natural language** (e.g., 'morena ojos claros pasarela alta moda').",
        "Pure visual vector search (CLIP) failing to isolate **permanent physical attributes** from temporary cosmetic styling (wigs, makeup).",
        "High manual overhead required to **extract and catalog body measurements** per talent.",
      ],
    },
    solution: {
      title: "The Solution: Two-Stage Hybrid Retrieval & Physical Trait Permanence",
      summary:
        "Engineered a production **multimodal casting pipeline** combining parallel **CLIP ViT-B/32 embeddings**, automated **GPT-4o-mini Vision** extraction, relational **SQL hard filtering**, and **trait permanence re-ranking**.",
      points: [
        "**Parallel query processing**: natural language queries are parsed concurrently by **GPT-4o-mini** for attributes and **CLIP** for latent vector projection.",
        "**Two-stage retrieval**: SQL applies hard WHERE filters for irrevocable attributes (skin tone and gender), returning an **expanded pool (top_n * 10)**.",
        "**Weighted attribute permanence re-ranking**: scores models using composite formula, **heavily prioritizing permanent biological traits** over mutable styling.",
        "**Automated profile onboarding**: background workers extract biometrics from comp-cards and generate **512-dim visual embeddings** upon model upload.",
        "**Resource-efficient VPS deployment**: hosted on Coolify VPS (8GB RAM) with **Docker Compose**, internal Nginx proxy, and automated **Traefik SSL**.",
      ],
    },
    architecture: {
      title: "Engineering Decisions: Multimodal Search & Hybrid Scoring",
      summary:
        "Technical tradeoffs and architectural choices resolved to guarantee casting accuracy, low latency, and zero cloud SaaS dependencies.",
      decisions: [
        {
          title: "Unified Latent Space via CLIP ViT-B/32 (512 Dimensions)",
          choice: "Shared Text & Image Encoder via sentence-transformers",
          why: "Projecting text descriptions and talent photos into the **identical 512-dimensional vector space** enables querying across modalities without separate translation bridges.",
        },
        {
          title: "Two-Stage Retrieval & Physical Trait Permanence Scoring",
          choice: "SQL Hard Filters (Tez, Género) + Weighted Python Re-Ranker",
          why: "Pure CLIP visual similarity confuses cosmetic lighting with real biology. Combining relational hard filters with permanence weights (**eyes: 0.40, complexion: 0.30 vs hair length: 0.04**) achieves **94% casting director alignment**.",
        },
        {
          title: "PostgreSQL 16 + pgvector vs Dedicated Vector SaaS",
          choice: "In-Database pgvector Extension with ACID Relational Consistency",
          why: "Eliminates distributed sync latency and expensive vector DB SaaS fees (Pinecone/Weaviate) by executing **cosine distance queries directly alongside relational filters in PostgreSQL**.",
        },
        {
          title: "Lightweight Asynchronous Architecture on Coolify VPS",
          choice: "FastAPI + Docker Compose + BackgroundTasks (3.5GB RAM Footprint)",
          why: "Replaced heavy Celery/Redis brokers with **native FastAPI BackgroundTasks**, keeping the entire production stack efficient on an **8GB VPS**.",
        },
      ],
    },
    pillars: [
      {
        iconName: "Database",
        title: "In-Database pgvector (512d)",
        description:
          "Vector similarity search inside PostgreSQL 16 combining cosine distance with relational SQL WHERE clauses.",
        badge: "pgvector · SQL",
      },
      {
        iconName: "Sparkles",
        title: "GPT-4o-mini Vision Extraction",
        description:
          "Extracts structured biometric attributes (hair, eyes, skin tone, measurements) automatically from comp-card photos.",
        badge: "GPT-4o-mini Vision",
      },
      {
        iconName: "Server",
        title: "FastAPI & Hybrid Re-Ranker",
        description:
          "Asynchronous Python API executing parallel CLIP encoding, candidate pool expansion, and composite score weighting.",
        badge: "FastAPI · Python 3.11",
      },
    ],
    evidenceGallery: [
      {
        id: "semantic-search",
        type: "image",
        tabLabel: "Semantic Search UI",
        badge: "CLIP + pgvector",
        title: "Natural Language & Visual Talent Search",
        description:
          "Search interface allowing casting directors to describe desired aesthetics or match by reference photos.",
        src: "/projects/TalentMatchAI.png",
        openUrl: "https://models.jhojan.cloud/admin/search",
        openLabel: "Open Search Demo",
      },
      {
        id: "model-comp-card",
        type: "image",
        tabLabel: "Model Comp-Card",
        badge: "GPT-4o Vision",
        title: "Automated Comp-Card & Attribute Breakdown",
        description:
          "Talent profile detailing attributes extracted automatically via GPT-4o Vision.",
        src: "/projects/talentmatch-comp-card.png",
        openUrl: "https://models.jhojan.cloud/admin/search",
        openLabel: "Test Demo Search",
      },
      {
        id: "mobile-scouting",
        type: "image",
        tabLabel: "Scouting Intake",
        badge: "Public Portal",
        title: "Public Talent Scouting & Registration Application",
        description:
          "Public intake portal for aspiring talent to submit polaroid photographs, body measurements, and division preferences with automated validation.",
        src: "/projects/talentmatch-scouting.png",
        openUrl: "https://models.jhojan.cloud",
        openLabel: "Open Main Portal",
        technicalNotes: [
          "FastAPI asynchronous image processing pipeline hosted on Coolify VPS",
          "Structured intake schema validating physical measurements and polaroid specifications",
        ],
      },
      {
        id: "attribute-permanence",
        type: "image",
        tabLabel: "Phenotype Ruler",
        badge: "Feature Weights",
        title: "Measurement Scale & Trait Permanence Ruler",
        description:
          "Algorithmic re-ranking inspection visualizing how permanent physical traits are weighted against mutable cosmetic styling (e.g. hair length vs bone structure).",
        src: "/projects/talentmatch-scale-ruler.png",
        technicalNotes: [
          "Eliminates false rejections when candidates change hairstyles between agency seasons",
          "Mathematically balanced composite scoring with 94% casting director alignment",
        ],
      },
    ],
  },
  {
    slug: "wheelus",
    title: "WheelUS — Real-Time University Mobility Platform",
    subtitle:
      "Regulated Ride-Sharing Network with **WebSocket State Synchronization**, **Geospatial Routing**, and **Race-Condition-Safe Concurrency**.",
    category: "Distributed Systems & Real-Time",
    categories: ["frontend", "backend"],
    date: "2024",
    role: "Lead Full Stack & Systems Engineer",
    teamOrContext: "Universidad de La Sabana Community Initiative",
    shortDescription:
      "Regulated university ride-sharing platform connecting the Universidad de La Sabana community. Implements **WebSocket trip synchronization**, **OpenStreetMap geospatial routing**, and **race-condition-safe seat booking**.",
    heroImage: "/projects/wheelus-showcase.png",
    githubUrl: "https://github.com/Jhojan-Jimenez/WheelUS-Front",
    liveUrl: "https://wheelus.jhojan.cloud",
    technologies: [
      "Node.js",
      "Express",
      "Socket.io",
      "WebSockets",
      "Next.js",
      "TypeScript",
      "Firebase",
      "OpenStreetMap",
      "Leaflet",
      "TailwindCSS",
    ],
    metrics: [
      {
        label: "SYNC LATENCY",
        value: "<50 ms",
        description: "WebSocket bidirectional message delivery between drivers and riders",
      },
      {
        label: "CONCURRENCY SAFETY",
        value: "0 Conflicts",
        description: "Atomic transactional locks preventing seat overbooking",
      },
      {
        label: "CAMPUS USERS",
        value: "100+ Rides",
        description: "Coordinated shared mobility routes across university community corridors",
      },
    ],
    problem: {
      title: "The Challenge: Unregulated Commutes & Coordination Chaos",
      summary:
        "University students commuting to campus relied on unmoderated WhatsApp chats, leading to **security concerns, cancelled rides without notice, and race conditions** when claiming seats.",
      points: [
        "**Frequent race conditions** where two users claimed the final vehicle seat simultaneously.",
        "Zero driver identity verification or real-time passenger location visibility.",
        "High latency in notification channels causing missed rides and delayed campus arrivals.",
      ],
    },
    solution: {
      title: "The Solution: Real-Time State Machines & Geospatial Routing",
      summary:
        "Architected an institutional mobility platform connecting verified community members with **synchronized trip channels**, **live route mapping**, and **guaranteed atomic reservations**.",
      points: [
        "Full-duplex **WebSocket channels via Socket.io** for instantaneous vehicle telemetry and seat changes.",
        "**Atomic seat reservation transactions** with mutex-style validation to guarantee **zero double-bookings**.",
        "**OpenStreetMap and Leaflet routing engine** to display pickup waypoints, distance, and transit time.",
      ],
    },
    architecture: {
      title: "System Architecture & Concurrency Control",
      summary:
        "Focuses on maintaining synchronized client state and race-condition prevention across mobile and desktop clients.",
      decisions: [
        {
          title: "WebSockets (Socket.io) vs HTTP Polling",
          choice: "Persistent WebSocket connection per active ride.",
          why: "Reduces server load by **85% compared to polling**, ensuring seat availability updates reach all observing riders in **sub-50ms**.",
        },
        {
          title: "Atomic State Transitions",
          choice: "Single-source-of-truth transactional booking handler.",
          why: "When 5 users tap 'Reserve' on the last seat simultaneously, **atomic locks guarantee exactly one transaction succeeds** while the remaining 4 receive deterministic rejection payloads.",
        },
      ],
    },
    pillars: [
      {
        iconName: "Activity",
        title: "WebSocket Bidirectional Sync",
        description:
          "Maintains live trip state rooms allowing passengers and drivers to view real-time occupancy and route checkpoints without page refreshes.",
        badge: "Socket.io · Node.js",
      },
      {
        iconName: "Layers",
        title: "Geospatial Routing & Waypoints",
        description:
          "Integrates OpenStreetMap geospatial APIs to compute optimal pickup corridors, route coordinates, and distance calculations.",
        badge: "OpenStreetMap · Leaflet",
      },
      {
        iconName: "Server",
        title: "Concurrency-Safe State Machine",
        description:
          "Guarantees transactional integrity during peak morning commute booking surges, eliminating seat duplication.",
        badge: "Express · Firebase",
      },
    ],
    evidenceGallery: [
      {
        id: "ride-dispatch",
        type: "image",
        tabLabel: "Ride Dispatch UI",
        badge: "Leaflet · OSM",
        title: "Geospatial Corridor Routing & Ride Creation",
        description:
          "Driver portal allowing verified university community members to publish campus shared routes, select pickup waypoints on OpenStreetMap, configure seat capacity, and launch synchronized ride rooms.",
        src: "/projects/WheelUSCreateRidePage.png",
        openUrl: "https://wheelus.jhojan.cloud",
        openLabel: "Visit WheelUS Web",
        technicalNotes: [
          "Interactive Leaflet waypoint placement across Bogotá - Chía suburban corridors",
          "WebSocket rooms powered by Socket.io delivering bidirectional seat updates in <50ms",
        ],
      },
      {
        id: "concurrency-barrier",
        type: "telemetry-card",
        tabLabel: "Concurrency Architecture",
        badge: "Race-Condition Safe",
        title: "Atomic Reservation Mutex & State Machine",
        description:
          "Distributed concurrency barrier designed to eliminate double-booking race conditions when multiple students tap 'Reserve' on the final remaining vehicle seat simultaneously.",
        technicalNotes: [
          "Atomic transactional state machine resolving competing bookings deterministically in <15ms",
          "Zero overbooking incidents recorded across 100+ production university shared trips",
          "Instant rejection payload delivered over WebSockets with alternative driver suggestions",
        ],
        telemetrySpecs: {
          engine: "Socket.io + Express Transaction Lock",
          protocol: "Bidirectional WebSocket Event",
          endpointOrQuery: "ws://api.wheelus.cloud/socket.io/?room=ride_live",
          status: "Concurrency Barrier Safe",
        },
      },
    ],
  },
  {
    slug: "mercedes-gt3",
    title: "Mercedes-AMG GT3 — 3D Interactive Product Experience",
    subtitle:
      "High-Fidelity WebGL Showcase with **React Three Fiber**, **Custom PBR Shaders**, **Scroll-Driven Camera Choreography**, and **Real-Time Telemetry HUD**.",
    category: "Creative Engineering & WebGL",
    categories: ["3d", "frontend"],
    date: "2025",
    role: "Creative & Graphics Engineer",
    teamOrContext: "Interactive Digital Twin Showcase",
    shortDescription:
      "High-performance interactive 3D WebGL showcase built with **Next.js, Three.js, and React Three Fiber**. Features scroll-driven dynamic camera transitions, real-time physically-based rendering (**PBR materials**), and **Draco geometry compression (-72% payload)**.",
    heroImage: "/projects/mercedes-amg-hd.png",
    liveUrl: "https://mercedes.jhojan.cloud",
    technologies: [
      "Three.js",
      "React Three Fiber (R3F)",
      "React Three Drei",
      "Next.js",
      "TypeScript",
      "WebGL",
      "GLSL Shaders",
      "TailwindCSS",
    ],
    metrics: [
      {
        label: "RENDER PERFORMANCE",
        value: "60 FPS",
        description: "Stable frame rate achieved via optimized geometry instancing and draw call batching",
      },
      {
        label: "MATERIAL FIDELITY",
        value: "4K PBR",
        description: "Physically-based rendering with metallic, roughness, and normal map channels",
      },
      {
        label: "SCROLL CHOREOGRAPHY",
        value: "6 Keyframes",
        description: "Cinematic camera trajectory synchronized to viewport scroll progress",
      },
    ],
    problem: {
      title: "The Challenge: Static 2D Presentation in a 3D World",
      summary:
        "High-performance automotive engineering cannot be communicated through flat image sliders. Users need to inspect **aerodynamics, carbon weave, and finishes in real time** without downloading gigabyte app bundles.",
      points: [
        "Heavy 3D models causing long initial load times and browser memory crashes.",
        "Choppy scroll animations on standard 60Hz and 120Hz displays.",
        "Unrealistic lighting that makes digital cars look synthetic instead of metal and carbon.",
      ],
    },
    solution: {
      title: "The Solution: Optimized WebGL Pipeline & Dynamic Shaders",
      summary:
        "Engineered an interactive 3D showroom using **Three.js and React Three Fiber**, featuring **custom PBR materials**, **Draco compression**, and **scroll-scrubbed camera choreography**.",
      points: [
        "**Draco compressed 3D GLTF asset streaming** to load high-polygon models in **under 2 seconds**.",
        "**Scroll-driven camera spline animation** using Motion and R3F frame hooks at **60 FPS**.",
        "Interactive paint customizer with dynamic atmospheric ground underglow reflection.",
      ],
    },
    architecture: {
      title: "Graphics Pipeline & Performance Optimizations",
      summary:
        "Built on React Three Fiber to maintain declarative component trees while running direct imperative WebGL loops.",
      decisions: [
        {
          title: "Draco Mesh Compression",
          choice: "Compressed 3D assets loaded via Draco loader.",
          why: "Reduces 3D model network payload by **over 75%**, allowing instant initial interaction on mobile devices.",
        },
        {
          title: "Physically-Based Rendering (PBR) Environment Lighting",
          choice: "High-dynamic-range environment map (HDRI) with custom specular reflections.",
          why: "Produces authentic metallic automotive paint reflections using **HDRI image-based lighting (IBL)** without expensive ray tracing computations.",
        },
      ],
    },
    pillars: [
      {
        iconName: "Layers",
        title: "WebGL PBR Material Engine",
        description:
          "Real-time shader calculations simulating metallic car paint, clearcoat reflections, carbon fiber weaves, and glass refraction.",
        badge: "WebGL · Three.js",
      },
      {
        iconName: "Cpu",
        title: "Scroll-Driven Camera Choreography",
        description:
          "Smooth cubic-bezier camera interpolation guiding the user around front splitters, side exhausts, and the aerodynamic rear wing.",
        badge: "R3F · Drei",
      },
      {
        iconName: "Activity",
        title: "Interactive Customizer & Telemetry",
        description:
          "Dynamic livery customizer with real-time synchronized underglow lighting and responsive racing telemetry HUD overlay.",
        badge: "Next.js · Shaders",
      },
    ],
    evidenceGallery: [
      {
        id: "webgl-3d-model",
        type: "image",
        tabLabel: "WebGL 3D Canvas",
        badge: "Three.js · R3F",
        title: "Real-Time PBR Rendering & Aerodynamic Geometry",
        description:
          "High-performance interactive 3D WebGL showroom rendering physically-based materials (metallic clearcoat, carbon fiber weave, glass refraction) with responsive racing telemetry.",
        src: "/projects/mercedes-amg-hd.png",
        openUrl: "https://mercedes.jhojan.cloud",
        openLabel: "Experience 3D Showroom",
        technicalNotes: [
          "Stable 60 FPS rendering achieved via geometry instancing and draw-call batching",
          "Procedural ground underglow reflections synchronized to real-time livery paint selections",
        ],
      },
      {
        id: "v8-powertrain",
        type: "image",
        tabLabel: "V8 Powertrain",
        badge: "Engine & Chassis",
        title: "AMG 6.3L M159 V8 Atmospheric Powertrain Inspection",
        description:
          "Camera trajectory focusing on the naturally aspirated V8 with dry sump lubrication, front mid-engine layout, and 8,500 RPM rev limit.",
        src: "/projects/mercedes-powertrain-v8.png",
        openUrl: "https://mercedes.jhojan.cloud",
        openLabel: "Experience 3D Showroom",
        technicalNotes: [
          "Smooth cubic-bezier camera spline interpolation synchronized to scroll",
          "High-detail carbon fiber and polished aluminum shaders rendered at 60 FPS",
        ],
      },
      {
        id: "aero-downforce",
        type: "image",
        tabLabel: "Aero & Downforce",
        badge: "Track Record",
        title: "Multi-Stage Carbon Wing & Venturi Diffusers",
        description:
          "Detailed rear perspective featuring the adjustable carbon fiber rear wing and underfloor venturi diffusers engineered for extreme endurance apex grip.",
        src: "/projects/mercedes-aero-downforce.png",
        openUrl: "https://mercedes.jhojan.cloud",
        openLabel: "Experience 3D Showroom",
        technicalNotes: [
          "PBR texture mapping with metallic, roughness, and ambient occlusion channels",
          "Complex geometries optimized via Draco compression for fast asset loading",
        ],
      },
    ],
  },
  {
    slug: "vaccine-cdss",
    title: "Vaccine Recommender — Clinical Decision Support System",
    subtitle:
      "Deterministic Clinical Rule Engine for Pediatric & Adult Immunization Protocols with **100% Reproducible Decision Logs**.",
    category: "Algorithmic Systems & HealthTech",
    categories: ["backend", "frontend"],
    date: "2023",
    role: "Algorithm & Systems Engineer",
    teamOrContext: "Healthcare Decision Support Architecture",
    shortDescription:
      "Clinical Decision Support System (CDSS) built in Node.js for immunization management. Features a **deterministic rule-matrix engine** evaluating official PAI clinical protocols with **100% reproducible decision logs in <12ms**.",
    heroImage: "/projects/vatly-schedule-hd.png",
    githubUrl: "https://github.com/Jhojan-Jimenez",
    liveUrl: "https://vatly.jhojan.cloud",
    technologies: [
      "Node.js",
      "Python",
      "React",
      "PAI Protocols",
      "Deterministic Engine",
      "TailwindCSS",
      "Firebase",
    ],
    metrics: [
      {
        label: "DETERMINISTIC ACCURACY",
        value: "100%",
        description: "Zero hallucination guarantee matching official clinical health guidelines",
      },
      {
        label: "VACCINE PROTOCOLS",
        value: "30+ Rules",
        description: "Evaluates minimum age, inter-dose intervals, and specific contraindications",
      },
      {
        label: "RESPONSE TIME",
        value: "<12 ms",
        description: "Instantaneous rule-matrix evaluation across complete patient medical history",
      },
    ],
    problem: {
      title: "The Challenge: Clinical Complexity in Vaccine Catch-Up",
      summary:
        "Healthcare workers managing pediatric immunizations must calculate multi-vaccine catch-up schedules based on dense protocol tables, where **manual errors invalidate vaccine efficacy or delay critical doses**.",
      points: [
        "Complex dependencies: Each vaccine requires specific minimum age constraints and interval gaps from prior doses.",
        "Manual calculation errors by clinical personnel working under high patient volume pressures.",
        "**Need for absolute auditability**: Medical recommendation systems **cannot rely on black-box heuristics or probabilistic AI**.",
      ],
    },
    solution: {
      title: "The Solution: Deterministic Rule Matrix Engine",
      summary:
        "Developed an **auditable clinical decision engine** that maps official immunization protocols into **deterministic rule tables** with explainable step-by-step recommendation rationale.",
      points: [
        "**Deterministic rule evaluator** executing interval and contraindication audits without probabilistic drift (**zero hallucination guarantee**).",
        "Personalized catch-up timeline generation highlighting immediate, upcoming, and overdue doses.",
        "Complete decision log export enabling healthcare professionals to verify the clinical protocol basis.",
      ],
    },
    architecture: {
      title: "Algorithmic Design & Clinical Safety",
      summary:
        "Built with strict functional purity: given a patient's birth date and dose history, the output schedule is 100% mathematically reproducible.",
      decisions: [
        {
          title: "Deterministic Rule Matrix vs Machine Learning",
          choice: "Pure deterministic business logic.",
          why: "In clinical healthcare and pediatric medicine, recommendations must be **100% explainable** and adhere strictly to legal **Ministry of Health (PAI) mandates without hallucination risk**.",
        },
      ],
    },
    pillars: [
      {
        iconName: "Layers",
        title: "Clinical Protocol Matrix",
        description:
          "Models 30+ official vaccination guidelines into deterministic rules covering minimum ages, dosage intervals, and contraindications.",
        badge: "Clinical PAI",
      },
      {
        iconName: "Server",
        title: "Audit-Safe Decision Pipeline",
        description:
          "Generates step-by-step clinical justification for every recommended, delayed, or omitted vaccine dose.",
        badge: "Node.js · Python",
      },
    ],
    evidenceGallery: [
      {
        id: "catchup-schedule",
        type: "image",
        tabLabel: "Catch-Up Matrix",
        badge: "Clinical PAI",
        title: "Deterministic Pediatric & Adult Vaccination Timeline",
        description:
          "Generated catch-up immunization matrix highlighting overdue, upcoming, and administered doses with 100% adherence to official health ministry protocols.",
        src: "/projects/vatly-schedule-hd.png",
        openUrl: "https://vatly.jhojan.cloud",
        openLabel: "Visit Vatly Health",
        technicalNotes: [
          "Evaluates 30+ official PAI protocol rules deterministically in <12ms",
          "Zero hallucination guarantee matching official clinical health guidelines",
        ],
      },
      {
        id: "rule-decision-logs",
        type: "image",
        tabLabel: "Protocol Decision Logs",
        badge: "Rule Matrix",
        title: "Step-by-Step Clinical Rationale & Contraindication Engine",
        description:
          "Audit-trail interface allowing healthcare practitioners to inspect the exact clinical guideline, minimum age constraint, and dose interval behind every recommendation.",
        src: "/projects/VaccineRecommender.png",
        technicalNotes: [
          "Explainable medical reasoning: every dose is accompanied by official protocol references",
          "Handles complex multi-vaccine intervals (e.g. live-attenuated virus spacing)",
        ],
      },
    ],
  },
];

import { PROJECTS_ES } from "./i18n/projects-es";

export function getLocalizedProjects(lang: "en" | "es" = "en"): ProjectCaseStudy[] {
  if (lang === "en") return PROJECTS_DATA;

  return PROJECTS_DATA.map((project) => {
    const es = PROJECTS_ES[project.slug];
    if (!es) return project;

    return {
      ...project,
      title: es.title ?? project.title,
      subtitle: es.subtitle ?? project.subtitle,
      category: es.category ?? project.category,
      badge: es.badge ?? project.badge,
      role: es.role ?? project.role,
      teamOrContext: es.teamOrContext ?? project.teamOrContext,
      shortDescription: es.shortDescription ?? project.shortDescription,
      date: es.date ?? project.date,
      metrics: project.metrics.map((m, idx) => ({
        ...m,
        label: es.metrics?.[idx]?.label ?? m.label,
        value: es.metrics?.[idx]?.value ?? m.value,
        description: es.metrics?.[idx]?.description ?? m.description,
      })),
      problem: es.problem ? { ...project.problem, ...es.problem } : project.problem,
      solution: es.solution ? { ...project.solution, ...es.solution } : project.solution,
      architecture: es.architecture
        ? {
            ...project.architecture,
            ...es.architecture,
            decisions: project.architecture.decisions.map((d, dIdx) => ({
              ...d,
              title: es.architecture?.decisions?.[dIdx]?.title ?? d.title,
              choice: es.architecture?.decisions?.[dIdx]?.choice ?? d.choice,
              why: es.architecture?.decisions?.[dIdx]?.why ?? d.why,
            })),
          }
        : project.architecture,
      pillars: project.pillars.map((pi, idx) => ({
        ...pi,
        title: es.pillars?.[idx]?.title ?? pi.title,
        description: es.pillars?.[idx]?.description ?? pi.description,
        badge: es.pillars?.[idx]?.badge ?? pi.badge,
      })),
      clusterStatus: es.clusterStatus ?? project.clusterStatus,
      liveDemos: project.liveDemos?.map((demo, idx) => ({
        ...demo,
        label: es.liveDemos?.[idx]?.label ?? demo.label,
        badge: es.liveDemos?.[idx]?.badge ?? demo.badge,
        description: es.liveDemos?.[idx]?.description ?? demo.description,
      })),
      inspectionCommands: project.inspectionCommands?.map((cmd, idx) => ({
        ...cmd,
        title: es.inspectionCommands?.[idx]?.title ?? cmd.title,
        description: es.inspectionCommands?.[idx]?.description ?? cmd.description,
      })),
      evidenceGallery: project.evidenceGallery?.map((ev, idx) => ({
        ...ev,
        tabLabel: es.evidenceGallery?.[idx]?.tabLabel ?? ev.tabLabel,
        badge: es.evidenceGallery?.[idx]?.badge ?? ev.badge,
        title: es.evidenceGallery?.[idx]?.title ?? ev.title,
        description: es.evidenceGallery?.[idx]?.description ?? ev.description,
        openLabel: es.evidenceGallery?.[idx]?.openLabel ?? ev.openLabel,
        technicalNotes: es.evidenceGallery?.[idx]?.technicalNotes ?? ev.technicalNotes,
      })),
    };
  });
}

export function getLocalizedProject(
  slug: string,
  lang: "en" | "es" = "en"
): ProjectCaseStudy | undefined {
  const projects = getLocalizedProjects(lang);
  return projects.find((p) => p.slug === slug);
}

