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
      "Enterprise decoupled commerce engine with Next.js 15 (App Router), React 19, Vendure/NestJS GraphQL core, k3s GitOps via ArgoCD, multi-arch ARM64 CI/CD, Traefik anti-CORS ingress, and full-stack observability.",
    category: "Cloud Native & E-Commerce",
    badge: "Flagship Architecture",
    isFlagship: true,
    date: "2025 – Present",
    role: "Full Stack & Cloud Architect",
    teamOrContext: "Cloud-Native Commerce Platform",
    shortDescription:
      "Enterprise decoupled commerce engine on Kubernetes (k3s). Features Next.js 15 App Router, Vendure GraphQL APIs, declarative GitOps with ArgoCD & Kustomize, multi-arch ARM64 pipelines on Oracle Cloud, Traefik anti-CORS routing, and production observability (OTel, Prometheus, PostHog).",
    heroImage: "/projects/gazu-ecommerce.png",
    liveUrl: "https://dev.gazu.jhojan.cloud",
    devUrl: "https://dev.gazu.jhojan.cloud",
    gitlabUrl: "https://gitlab.com/portfolio-dev3/ecommerce",
    clusterStatus: {
      indicator: "live",
      badgeText: "Cluster Status: Live on Kubernetes (k3s) | GitOps Synced",
    },
    liveDemos: [
      {
        label: "Storefront Editorial (Frontend)",
        url: "https://dev.gazu.jhojan.cloud/",
        badge: "Next.js 15 · React 19",
        description:
          "High-performance editorial storefront with App Router, reactive local persistence, and strict a11y accessibility.",
      },
      {
        label: "GraphQL Shop API (Interactive Playground)",
        url: "https://dev.gazu.jhojan.cloud/shop-api",
        badge: "GraphQL · Interactive",
        description:
          "Live interactive query playground executing real requests against the decoupled commerce engine.",
      },
      {
        label: "Back-Office / Admin Dashboard",
        url: "https://dev.gazu.jhojan.cloud/dashboard",
        badge: "Vendure Admin",
        description:
          "Administrative control plane for real-time catalog management, inventory tracking, and customer orders.",
      },
      {
        label: "Real-Time Observability (Prometheus Metrics)",
        url: "https://dev.gazu.jhojan.cloud/metrics",
        badge: "Prometheus · Live",
        description:
          "Real-time operational metrics showing Node.js runtime health, query latencies, and backend memory allocation.",
      },
    ],
    inspectionCommands: [
      {
        title: "Query the live GraphQL API via Terminal",
        description:
          "Executes an active channel query to verify multi-currency and localization settings directly from the cluster:",
        command:
          "curl -X POST https://dev.gazu.jhojan.cloud/shop-api \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"query\": \"{ activeChannel { id code defaultLanguageCode currencyCode } }\"}'",
      },
      {
        title: "Audit Ingress SSL Certificate & HTTP Headers",
        description:
          "Inspects HTTP/2 negotiation, automatic TLS certificate issued by Cert-Manager, and cache headers:",
        command: "curl -I https://dev.gazu.jhojan.cloud/",
      },
      {
        title: "Inspect Prometheus Runtime Metrics",
        description:
          "Pulls raw operational telemetry and Node.js runtime gauges exposed by the backend:",
        command: "curl https://dev.gazu.jhojan.cloud/metrics | grep vendure",
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
      "Oracle Cloud (ARM64)",
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
        label: "MULTI-ARCH PIPELINE",
        value: "Linux ARM64",
        description: "Docker Buildx + QEMU on Oracle Cloud Ampere A1 for zero-cost efficiency",
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
      title: "The Challenge: Monolithic Bottlenecks & Brittle Operations",
      summary:
        "Traditional monolithic e-commerce platforms couple storefront UI with transactional processing, introduce cross-domain CORS frictions, depend on fragile manual deployments, and risk data loss on stateful persistence.",
      points: [
        "Storefront rendering competing directly with transaction processing on the same runtime, degrading performance.",
        "Manual kubectl apply operations in production clusters leading to configuration drift and operational downtime.",
        "Cross-domain frontend-backend architectures generating CORS overhead and insecure cross-site cookie workarounds.",
        "Browser adblockers distorting critical conversion funnels, product analytics, and customer retention metrics.",
      ],
    },
    solution: {
      title: "The Solution: Decoupled Cloud-Native Commerce Architecture",
      summary:
        "Engineered an enterprise-grade cloud-native headless commerce ecosystem orchestrated on Kubernetes (k3s) with declarative GitOps delivery, multi-arch compilation, and production-grade distributed telemetry.",
      points: [
        "Decoupled Next.js 15 App Router storefront communicating with a high-throughput Vendure/NestJS GraphQL core.",
        "Declarative GitOps continuous deployment using ArgoCD and Kustomize overlays, strictly banning manual cluster changes.",
        "Traefik Ingress routing storefront (/), API (/shop-api), and back-office (/dashboard) under a single host without CORS.",
        "Stateless application pods scaled horizontally while PostgreSQL is isolated in a StatefulSet with dedicated PVCs.",
        "End-to-end observability combining OpenTelemetry distributed tracing, Prometheus metrics, and PostHog product analytics.",
      ],
    },
    architecture: {
      title: "The Senior Factor: 5 Architectural Engineering Decisions",
      summary:
        "Key engineering tradeoffs and decisions resolved to guarantee high availability, zero-cost cloud efficiency, immunity to configuration drift, and enterprise security.",
      decisions: [
        {
          title: "Declarative GitOps with ArgoCD & Kustomize",
          choice: "ArgoCD Controller + Kustomize Overlays (dev vs prod)",
          why: "Manual kubectl apply is banned. All desired state is declared in Git; ArgoCD enforces automated deployment, drift correction, and self-healing if pods diverge.",
        },
        {
          title: "Multi-Arch CI/CD Pipeline (Linux ARM64)",
          choice: "Docker Buildx + QEMU Emulation in GitLab CI",
          why: "Specifically targeted Ampere A1 ARM64 processors on Oracle Cloud, reducing infrastructure costs to near zero while maximizing instruction throughput.",
        },
        {
          title: "Single Domain & Anti-CORS Architecture via Traefik",
          choice: "Traefik Ingress + Automated Cert-Manager (Let's Encrypt)",
          why: "Routes / to Next.js, and /shop-api & /dashboard to Vendure on the same host. Completely eliminates CORS issues, allows secure SameSite=Lax/Strict session cookies, and reuses one auto-renewed TLS certificate.",
        },
        {
          title: "Lifecycle Separation (Stateful vs Stateless)",
          choice: "Stateless App Pods + PostgreSQL StatefulSet with dedicated PVCs",
          why: "Frontend and backend pods can scale horizontally or be terminated without data loss. PostgreSQL is isolated in a StatefulSet with persistent volume claims to safeguard transactions.",
        },
        {
          title: "Production-Grade Observability & Analytics",
          choice: "OpenTelemetry (OTel gRPC) + Prometheus (prom-client) + PostHog Proxy",
          why: "Combines distributed tracing, live Node.js runtime memory/latency gauges, and privacy-respecting product analytics routed via Next.js to bypass client adblockers.",
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
        openUrl: "https://dev.gazu.jhojan.cloud/",
        openLabel: "Abrir Storefront en Vivo",
      },
      {
        id: "architecture",
        type: "iframe",
        tabLabel: "Topología k3s & GitOps",
        badge: "Topología k3s",
        title: "Diagrama de Arquitectura Cloud-Native en Oracle Cloud ARM64",
        description:
          "Diagrama interactivo ilustrando Traefik Ingress, pods de Next.js, APIs de Vendure, StatefulSet de PostgreSQL, ArgoCD y OpenTelemetry.",
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
        openUrl: "https://dev.gazu.jhojan.cloud/",
        openLabel: "Abrir Colección en Vivo",
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
        openUrl: "https://dev.gazu.jhojan.cloud/",
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
        openUrl: "https://dev.gazu.jhojan.cloud/",
        openLabel: "Ver Plataforma en Vivo",
      },
    ],
  },
  {
    slug: "talentmatch",
    title: "TalentMatch AI — Multimodal Model Casting & Semantic Search",
    subtitle:
      "Production talent discovery engine combining CLIP ViT-B/32 multimodal embeddings (512d), GPT-4o-mini Vision attribute extraction, PostgreSQL 16 pgvector cosine similarity, and weighted trait permanence re-ranking.",
    category: "Applied AI & Vector Search",
    badge: "Computer Vision & Vector Search",
    date: "2025",
    role: "AI & Backend Systems Engineer",
    teamOrContext: "Talent Agency Management Platform",
    shortDescription:
      "Enterprise multimodal casting platform. Discovers talent through natural language descriptions or reference photo uploads using CLIP ViT-B/32 (512d), automated biometric attribute extraction via GPT-4o-mini Vision, and two-stage retrieval with pgvector cosine similarity and SQL trait filtering.",
    heroImage: "/projects/TalentMatchAI.png",
    liveUrl: "https://models.jhojan.cloud/",
    devUrl: "https://models.jhojan.cloud/",
    githubUrl: "https://github.com/Jhojan-Jimenez/Models",
    clusterStatus: {
      indicator: "live",
      badgeText: "Production Live | VPS Coolify & Docker Compose",
    },
    liveDemos: [
      {
        label: "Talent Discovery Studio (Frontend)",
        url: "https://models.jhojan.cloud/",
        badge: "React · Vite · Live",
        description:
          "Interactive talent scouting interface with real-time biometric filters, semantic search bar, and dynamic comp-cards.",
      },
      {
        label: "Semantic Search & Computer Vision API",
        url: "https://models.jhojan.cloud/api/docs",
        badge: "FastAPI · Swagger",
        description:
          "Production OpenAPI documentation for multimodal query endpoints, CLIP embeddings, and background attribute workers.",
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
        "Traditional modeling agency casting relies on rigid database filters or manual book flipping, which fail when casting directors describe nuanced aesthetic moods or provide moodboard reference photos.",
      points: [
        "Inability to search models from photo moodboards or visual aesthetic references without manual tagging.",
        "Strict keyword tags failing when casting queries use complex descriptive language (e.g., 'morena ojos claros pasarela alta moda').",
        "Pure visual vector search (CLIP) failing to isolate permanent physical attributes (eye color, bone structure) from temporary styling (wigs, makeup).",
        "High manual overhead required to extract and catalog measurements (bust, waist, hips, shoe size) per talent.",
      ],
    },
    solution: {
      title: "The Solution: Two-Stage Hybrid Retrieval & Physical Trait Permanence",
      summary:
        "Engineered a production multimodal casting pipeline combining parallel CLIP ViT-B/32 embeddings, automated GPT-4o-mini Vision extraction, relational SQL hard filtering, and trait permanence re-ranking.",
      points: [
        "Parallel query processing: natural language queries are parsed concurrently by GPT-4o-mini for attributes and CLIP for latent vector projection.",
        "Two-stage retrieval: SQL applies hard WHERE filters for irrevocable attributes (skin tone and gender), returning an expanded pool (top_n * 10).",
        "Weighted attribute permanence re-ranking: scores models using score = 0.45*clip + 0.45*attr_match + 0.10*exp_bonus, heavily prioritizing permanent traits over mutable styling.",
        "Automated profile onboarding: background workers extract biometrics from comp-cards and generate 512-dim visual embeddings upon model upload.",
        "Resource-efficient VPS deployment: hosted on Coolify VPS (8GB RAM) with Docker Compose, internal Nginx proxy (/api/ -> api:8000), and automated Traefik SSL.",
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
          why: "Projecting both text descriptions and talent photos into the identical 512-dimensional vector space enables querying across modalities without separate mapping bridges.",
        },
        {
          title: "Two-Stage Retrieval & Physical Trait Permanence Scoring",
          choice: "SQL Hard Filters (Tez, Género) + Weighted Python Re-Ranker",
          why: "Pure CLIP visual similarity confuses cosmetic lighting with real biology. Combining relational hard filters with permanence weights (eyes: 0.40, complexion: 0.30 vs hair length: 0.04) achieves 94% casting director alignment.",
        },
        {
          title: "PostgreSQL 16 + pgvector vs Dedicated Vector SaaS",
          choice: "In-Database pgvector Extension with ACID Relational Consistency",
          why: "Eliminates distributed sync latency, network hops, and expensive vector DB SaaS fees (Pinecone/Weaviate) by executing cosine distance queries directly alongside relational measurement filters.",
        },
        {
          title: "Lightweight Asynchronous Architecture on Coolify VPS",
          choice: "FastAPI + Docker Compose + BackgroundTasks (3.5GB RAM Footprint)",
          why: "Replaced heavy Celery/Redis message brokers with native FastAPI BackgroundTasks for model embedding generation, keeping the entire production stack efficient on an 8GB VPS.",
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
        openUrl: "https://models.jhojan.cloud/",
        openLabel: "Live Studio",
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
      "Regulated Ride-Sharing Network with WebSocket State Synchronization, Geospatial Routing, and Race-Condition-Safe Concurrency",
    category: "Distributed Systems & Real-Time",
    date: "2024",
    role: "Lead Full Stack & Systems Engineer",
    teamOrContext: "Universidad de La Sabana Community Initiative",
    shortDescription:
      "Regulated university ride-sharing platform connecting the Universidad de La Sabana community. Implements WebSocket trip synchronization, OpenStreetMap geospatial routing, and race-condition-safe seat booking.",
    heroImage: "/projects/WheelUSCreateRidePage.png",
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
        description: "Coordinated carpool routes across university community corridors",
      },
    ],
    problem: {
      title: "The Challenge: Unregulated Commutes & Coordination Chaos",
      summary:
        "University students commuting to campus relied on unmoderated WhatsApp chats, leading to security concerns, cancelled rides without notice, and multiple passengers attempting to claim the same seat.",
      points: [
        "Frequent race conditions where two users claimed the final vehicle seat simultaneously.",
        "Zero driver identity verification or real-time passenger location visibility.",
        "High latency in notification channels causing missed rides and delayed campus arrivals.",
      ],
    },
    solution: {
      title: "The Solution: Real-Time State Machines & Geospatial Routing",
      summary:
        "Architected an institutional mobility platform connecting verified community members with synchronized trip channels, live route mapping, and guaranteed atomic reservations.",
      points: [
        "Full-duplex WebSocket channels via Socket.io for instantaneous vehicle telemetry and seat changes.",
        "Atomic seat reservation transactions with mutex-style validation to guarantee no double-bookings.",
        "OpenStreetMap and Leaflet routing engine to display pickup waypoints, distance, and transit time.",
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
          why: "Reduces server load by 85% compared to polling, ensuring seat availability updates reach all observing riders in sub-50ms.",
        },
        {
          title: "Atomic State Transitions",
          choice: "Single-source-of-truth transactional booking handler.",
          why: "When 5 users tap 'Reserve' on the last seat simultaneously, exactly one transaction succeeds while the remaining 4 receive deterministic rejection payloads.",
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
          "Driver portal allowing verified university community members to publish campus carpool routes, select pickup waypoints on OpenStreetMap, configure seat capacity, and launch synchronized ride rooms.",
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
          "Distributed concurrency barrier designed to eliminate double-booking race conditions when multiple students tap 'Reserve' on the final remaining carpool seat simultaneously.",
        technicalNotes: [
          "Atomic transactional state machine resolving competing bookings deterministically in <15ms",
          "Zero overbooking incidents recorded across 100+ production university carpool trips",
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
      "High-Fidelity WebGL Showcase with React Three Fiber, Custom Shaders, Scroll-Driven Camera Choreography, and Real-Time Telemetry HUD",
    category: "Creative Engineering & WebGL",
    date: "2025",
    role: "Creative & Graphics Engineer",
    teamOrContext: "Interactive Digital Twin Showcase",
    shortDescription:
      "High-performance interactive 3D WebGL showcase built with Next.js, Three.js, and React Three Fiber. Features scroll-driven dynamic camera transitions, real-time physically-based rendering (PBR materials), and synchronized atmospheric underglow.",
    heroImage: "/projects/mercedes-amg-hd.png",
    liveUrl: "https://productexperience.vercel.app/",
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
        "High-performance automotive engineering cannot be communicated through flat image sliders. Users want to inspect vehicle aerodynamics, carbon weave, and custom finishes in real time without downloading gigabyte app bundles.",
      points: [
        "Heavy 3D models causing long initial load times and browser memory crashes.",
        "Choppy scroll animations on standard 60Hz and 120Hz displays.",
        "Unrealistic lighting that makes digital cars look like plastic toys instead of metal and carbon.",
      ],
    },
    solution: {
      title: "The Solution: Optimized WebGL Pipeline & Dynamic Shaders",
      summary:
        "Engineered an interactive 3D showroom using Three.js and React Three Fiber, featuring custom PBR materials, procedural lighting, and scroll-scrubbed camera choreography.",
      points: [
        "Draco compressed 3D GLTF asset streaming to load high-polygon models in under 2 seconds.",
        "Scroll-driven camera spline animation using Motion and R3F frame hooks.",
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
          why: "Reduces 3D model network payload by over 75%, allowing instant initial interaction on mobile devices.",
        },
        {
          title: "Physically-Based Rendering (PBR) Environment Lighting",
          choice: "High-dynamic-range environment map (HDRI) with custom specular reflections.",
          why: "Produces authentic metallic automotive paint reflections without expensive per-frame ray tracing computations.",
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
        openUrl: "https://productexperience.vercel.app/",
        openLabel: "Experience 3D Showroom",
        technicalNotes: [
          "Stable 60 FPS rendering achieved via geometry instancing and draw-call batching",
          "Procedural ground underglow reflections synchronized to real-time livery paint selections",
        ],
      },
      {
        id: "showroom-experience",
        type: "image",
        tabLabel: "Showroom Interface",
        badge: "Next.js · Shaders",
        title: "Scroll-Driven Camera Choreography & Customizer",
        description:
          "Cinematic camera trajectories scrubbed directly to viewport scroll progress, enabling detailed inspection from the front splitter to the high-downforce rear wing.",
        src: "/projects/3DCarPage.png",
        openUrl: "https://productexperience.vercel.app/",
        openLabel: "Launch Live Demo",
        technicalNotes: [
          "Draco 3D mesh compression cutting network payload by over 75% for sub-2s loads",
          "Declarative Three.js component tree running alongside imperative WebGL render loops",
        ],
      },
    ],
  },
  {
    slug: "vaccine-cdss",
    title: "Vaccine Recommender — Clinical Decision Support System",
    subtitle:
      "Deterministic Clinical Rule Engine for Pediatric & Adult Immunization Protocols with 100% Reproducible Decision Logs",
    category: "Algorithmic Systems & HealthTech",
    date: "2023",
    role: "Algorithm & Systems Engineer",
    teamOrContext: "Healthcare Decision Support Architecture",
    shortDescription:
      "Clinical Decision Support System (CDSS) built in Node.js for immunization management. Features a deterministic rule-matrix engine evaluating official PAI clinical protocols with 100% reproducible decision logs.",
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
        "Healthcare workers managing pediatric immunizations must calculate multi-vaccine catch-up schedules based on dense protocol tables. Missed minimum intervals can invalidate vaccine efficacy, while delays put children at risk.",
      points: [
        "Complex dependencies: Each vaccine requires specific minimum age constraints and interval gaps from prior doses.",
        "Manual calculation errors by clinical personnel working under high patient volume pressures.",
        "Need for absolute auditability: Medical recommendation systems cannot rely on black-box heuristics or probabilistic AI.",
      ],
    },
    solution: {
      title: "The Solution: Deterministic Rule Matrix Engine",
      summary:
        "Developed an auditable clinical decision engine that maps official immunization protocols into deterministic rule tables with explainable step-by-step recommendation rationale.",
      points: [
        "Deterministic rule evaluator executing interval and contraindication audits without probabilistic drift.",
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
          why: "In clinical healthcare and pediatric medicine, recommendations must be 100% explainable and adhere strictly to legal Ministry of Health (PAI) mandates without hallucination risk.",
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

