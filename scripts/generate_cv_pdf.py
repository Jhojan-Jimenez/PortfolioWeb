import pypdf
from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf_es(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=28
    )

    PRIMARY = colors.HexColor("#0f172a")    # Slate 900
    SECONDARY = colors.HexColor("#475569")  # Slate 600
    BORDER_COL = colors.HexColor("#94a3b8") # Slate 400

    style_name = ParagraphStyle(
        'Name', fontName='Helvetica-Bold', fontSize=15, leading=17, alignment=1, textColor=PRIMARY
    )
    style_title = ParagraphStyle(
        'Title', fontName='Helvetica-Bold', fontSize=9.5, leading=12, alignment=1, textColor=SECONDARY
    )
    style_contact = ParagraphStyle(
        'Contact', fontName='Helvetica', fontSize=8.3, leading=10.5, alignment=1, textColor=SECONDARY
    )
    style_section = ParagraphStyle(
        'SectionHeading', fontName='Helvetica-Bold', fontSize=9.8, leading=12, textColor=PRIMARY,
        spaceBefore=6, spaceAfter=1.5, keepWithNext=True
    )
    style_body = ParagraphStyle(
        'Body', fontName='Helvetica', fontSize=8.6, leading=10.8, textColor=PRIMARY, spaceAfter=2
    )
    style_role = ParagraphStyle(
        'RoleHeader', fontName='Helvetica', fontSize=9.1, leading=11.5, textColor=PRIMARY,
        spaceBefore=3, spaceAfter=1.2, keepWithNext=True
    )
    style_bullet = ParagraphStyle(
        'Bullet', fontName='Helvetica', fontSize=8.5, leading=10.6, textColor=PRIMARY,
        leftIndent=11, firstLineIndent=-11, spaceAfter=1.5
    )

    def section_header(title):
        return [
            Paragraph(f"<b>{title.upper()}</b>", style_section),
            HRFlowable(width="100%", thickness=0.6, color=BORDER_COL, spaceBefore=1, spaceAfter=2)
        ]

    story = []

    # 1. Header
    story.append(Paragraph("<b>JHOJAN JIMENEZ</b>", style_name))
    story.append(Paragraph("Software Engineer | Backend &amp; Cloud Architecture | Full Stack Capabilities", style_title))
    story.append(Spacer(1, 1))
    story.append(Paragraph("jhojanjimene@gmail.com &nbsp;&bull;&nbsp; +57 320 328 2014 &nbsp;&bull;&nbsp; linkedin.com/in/jhojan-jimenez-dev &nbsp;&bull;&nbsp; dev.jhojan.cloud &nbsp;&bull;&nbsp; Bogotá, Colombia", style_contact))

    # 2. Perfil Profesional
    story.extend(section_header("Perfil Profesional"))
    story.append(Paragraph(
        "Ingeniero de Software enfocado en desarrollo Backend, Arquitectura Cloud y Sistemas de Datos con más de 2 años de experiencia en producción. "
        "Especializado en Python (FastAPI, Django), Node.js/TypeScript, Java y desarrollo Full Stack complementario (React, Next.js). "
        "Experiencia integrando pipelines de ingesta y analítica de datos operativos (SQL, Pandas, ETL), despliegues contenerizados en GCP/AWS con Docker y CI/CD, "
        "y sistemas multiagente con OpenAI y búsqueda vectorial. Primer lugar en Sabana Hack 2025.",
        style_body
    ))

    # 3. Experiencia Laboral
    story.extend(section_header("Experiencia Laboral"))

    # Blurealty
    story.append(Paragraph(
        "<b>Desarrollador Backend &amp; Cloud</b> — <b>Blurealty</b> &nbsp;|&nbsp; <i>Julio 2025 – Actualidad &nbsp;|&nbsp; Remoto</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Diseñé e implementé</b> la arquitectura cloud en GCP (Cloud Run, Cloud SQL) para sistema multiagente con OpenAI, integrando Vector Storage y similitudes cosenoidales para recuperación semántica de documentos en flujos de Q&amp;A y captura de leads.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Estructuré</b> pipelines de CI/CD automatizado con GitHub Actions y Docker multi-stage builds, eliminando discrepancias de entorno y garantizando despliegues continuos sin tiempo de inactividad (zero-downtime).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Modelé</b> esquemas relacionales en PostgreSQL con Alembic, implementando optimización de consultas e indexación para ingesta y análisis de datos operativos con alta concurrencia.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Lideré</b> el desarrollo frontend full stack en React/TypeScript elevando el puntaje de accesibilidad de 3.4 a 9.2 (auditoría WAVE / ADA) e instrumenté telemetría de eventos para analítica de conversión.",
        style_bullet
    ))

    # GovLab
    story.append(Paragraph(
        "<b>Desarrollador Backend &amp; Sistemas de Datos</b> — <b>GovLab</b> &nbsp;|&nbsp; <i>Febrero 2025 – Julio 2025 &nbsp;|&nbsp; Remoto</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Construí</b> la plataforma centralizada de analítica e ingesta de datos agrícolas para Corpohass con FastAPI y PostgreSQL, consolidando datasets de producción, hectáreas y siembra para toma de decisiones y reportes estadísticos.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Diseñé</b> APIs RESTful y flujos de transformación de datos (ETL) aplicando validación estricta con Pydantic, SQLAlchemy y mitigación de vulnerabilidades OWASP con migraciones Alembic.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Implementé</b> pipelines asíncronos de ingesta documental en AWS S3 con URLs pre-firmadas y despachadores de notificaciones transaccionales vía Twilio y SendGrid.",
        style_bullet
    ))

    # Centro de Innovación UCTS
    story.append(Paragraph(
        "<b>Desarrollador de Software &amp; Datos Clínicos</b> — <b>Centro de Innovación UCTS</b> &nbsp;|&nbsp; <i>Enero 2025 – Junio 2025 &nbsp;|&nbsp; Presencial</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Desarrollé</b> un motor clínico determinista de recomendación en Node.js/TypeScript, creando algoritmos de evaluación matricial sobre datasets del PAI (edades, contraindicaciones y patologías crónicas).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Traduje</b> directrices normativas de salud pública y epidemiología en modelos lógicos de datos y reglas algorítmicas de cero ambigüedad, optimizando además el sitio web institucional.",
        style_bullet
    ))

    # TurboCupones
    story.append(Paragraph(
        "<b>Desarrollador Web &amp; Backend (Full Stack)</b> — <b>TurboCupones</b> &nbsp;|&nbsp; <i>Junio 2024 – Octubre 2024 &nbsp;|&nbsp; Remoto</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Desarrollé</b> APIs REST con Django REST Framework para plataforma de cupones de alto tráfico, implementando autenticación JWT y optimización de consultas SQL con paginación por cursor (<100ms de latencia).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Colaboré</b> en equipo ágil Scrum construyendo interfaces interactivas con Next.js y consumiendo microservicios backend con flujos de integración continua.",
        style_bullet
    ))

    # 4. Logros Destacados
    story.extend(section_header("Logros Destacados"))
    story.append(Paragraph(
        "&bull;&nbsp; <b>1er Lugar — Sabana Hack 2025 (Universidad de La Sabana):</b> Diseñé e implementé en equipo, en 24 horas, un sistema de alertas en tiempo real con IA para la Cruz Roja Colombiana, procesando variables climáticas para mitigación de emergencias.",
        style_bullet
    ))

    # 5. Habilidades Técnicas
    story.extend(section_header("Habilidades Técnicas"))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Backend:</b> Python (FastAPI, Django REST Framework), Node.js, TypeScript, Java, NestJS, Express.js",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Frontend:</b> React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, consumo de APIs RESTful",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Bases de Datos &amp; Analítica:</b> PostgreSQL, SQL, Pandas, Modelado de Datos, Pipelines ETL, Vector Storage (Embeddings, Similitud Cosenoidal)",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Cloud &amp; DevOps:</b> GCP (Cloud Run, Cloud SQL), AWS S3, Docker, CI/CD (GitHub Actions), Railway",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Herramientas &amp; Entornos:</b> Linux, Git, Postman, JWT, Pydantic, Alembic, Scrum, APIs RESTful",
        style_bullet
    ))

    # 6. Educación & Idiomas
    story.extend(section_header("Educación &amp; Idiomas"))
    story.append(Paragraph(
        "<b>Grado en Ingeniería Informática</b> — <b>Universidad de La Sabana</b> &nbsp;|&nbsp; <i>2022 – 2026 &nbsp;|&nbsp; Chía, Colombia</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Beca &amp; Rendimiento:</b> Beneficiario de <b>Beca de Excelencia Académica del 80%</b> &nbsp;&bull;&nbsp; Promedio acumulado: <b>4.4 / 5.0</b> (Énfasis en Arquitectura de Software y Sistemas Distribuidos).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Idiomas:</b> Español (Nativo) &nbsp;&bull;&nbsp; Inglés (B2 — Competencia profesional técnica y comunicación fluida).",
        style_bullet
    ))

    doc.build(story)
    print("PDF ES built successfully.")

def generate_pdf_en(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=28
    )

    PRIMARY = colors.HexColor("#0f172a")
    SECONDARY = colors.HexColor("#475569")
    BORDER_COL = colors.HexColor("#94a3b8")

    style_name = ParagraphStyle(
        'Name', fontName='Helvetica-Bold', fontSize=15, leading=17, alignment=1, textColor=PRIMARY
    )
    style_title = ParagraphStyle(
        'Title', fontName='Helvetica-Bold', fontSize=9.5, leading=12, alignment=1, textColor=SECONDARY
    )
    style_contact = ParagraphStyle(
        'Contact', fontName='Helvetica', fontSize=8.3, leading=10.5, alignment=1, textColor=SECONDARY
    )
    style_section = ParagraphStyle(
        'SectionHeading', fontName='Helvetica-Bold', fontSize=9.8, leading=12, textColor=PRIMARY,
        spaceBefore=6, spaceAfter=1.5, keepWithNext=True
    )
    style_body = ParagraphStyle(
        'Body', fontName='Helvetica', fontSize=8.6, leading=10.8, textColor=PRIMARY, spaceAfter=2
    )
    style_role = ParagraphStyle(
        'RoleHeader', fontName='Helvetica', fontSize=9.1, leading=11.5, textColor=PRIMARY,
        spaceBefore=3, spaceAfter=1.2, keepWithNext=True
    )
    style_bullet = ParagraphStyle(
        'Bullet', fontName='Helvetica', fontSize=8.5, leading=10.6, textColor=PRIMARY,
        leftIndent=11, firstLineIndent=-11, spaceAfter=1.5
    )

    def section_header(title):
        return [
            Paragraph(f"<b>{title.upper()}</b>", style_section),
            HRFlowable(width="100%", thickness=0.6, color=BORDER_COL, spaceBefore=1, spaceAfter=2)
        ]

    story = []

    # 1. Header
    story.append(Paragraph("<b>JHOJAN JIMENEZ</b>", style_name))
    story.append(Paragraph("Software Engineer | Backend &amp; Cloud Architecture | Full Stack Capabilities", style_title))
    story.append(Spacer(1, 1))
    story.append(Paragraph("jhojanjimene@gmail.com &nbsp;&bull;&nbsp; +57 320 328 2014 &nbsp;&bull;&nbsp; linkedin.com/in/jhojan-jimenez-dev &nbsp;&bull;&nbsp; dev.jhojan.cloud &nbsp;&bull;&nbsp; Bogotá, Colombia", style_contact))

    # 2. Professional Summary
    story.extend(section_header("Professional Summary"))
    story.append(Paragraph(
        "Software Engineer focused on Backend Development, Cloud Architecture, and Data Systems with 2+ years of production experience. "
        "Proficient in Python (FastAPI, Django), Node.js/TypeScript, Java, and complementary Full Stack development (React, Next.js). "
        "Hands-on experience engineering data ingestion &amp; operational analytics pipelines (SQL, Pandas, ETL), containerized GCP/AWS deployments with Docker and CI/CD, "
        "and multi-agent AI systems with OpenAI and vector search. 1st place at Sabana Hack 2025.",
        style_body
    ))

    # 3. Work Experience
    story.extend(section_header("Work Experience"))

    # Blurealty
    story.append(Paragraph(
        "<b>Backend &amp; Cloud Infrastructure Engineer</b> — <b>Blurealty</b> &nbsp;|&nbsp; <i>July 2025 – Present &nbsp;|&nbsp; Remote</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Architected and deployed</b> cloud infrastructure on GCP (Cloud Run, Cloud SQL) for an OpenAI multi-agent system, integrating Vector Storage and cosine similarity for semantic document retrieval in Q&amp;A and lead-capture pipelines.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Structured</b> automated CI/CD pipelines with GitHub Actions and Docker multi-stage builds, eliminating environment drift and ensuring zero-downtime continuous delivery.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Modeled</b> relational PostgreSQL schemas with Alembic, optimizing SQL queries and indexing to handle high-concurrency ingestion and operational data analysis.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Led</b> full-stack frontend refactoring in React/TypeScript, elevating web accessibility audit score from 3.4 to 9.2 (WAVE / ADA) and instrumenting telemetry events for conversion analytics.",
        style_bullet
    ))

    # GovLab
    story.append(Paragraph(
        "<b>Backend &amp; Data Systems Engineer</b> — <b>GovLab</b> &nbsp;|&nbsp; <i>February 2025 – July 2025 &nbsp;|&nbsp; Remote</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Built</b> the centralized agricultural data analytics and ingestion platform for Corpohass using FastAPI and PostgreSQL, consolidating production, acreage, and harvest datasets for operational decision-making.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Engineered</b> production RESTful APIs and ETL data transformations applying strict Pydantic validation, SQLAlchemy, and OWASP vulnerability mitigation with Alembic migrations.",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Implemented</b> asynchronous document ingestion pipelines on AWS S3 via pre-signed URLs and automated transactional notification dispatchers via Twilio and SendGrid.",
        style_bullet
    ))

    # UCTS
    story.append(Paragraph(
        "<b>Software &amp; Health Data Engineer</b> — <b>UCTS Innovation Center</b> &nbsp;|&nbsp; <i>January 2025 – June 2025 &nbsp;|&nbsp; On-site</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Engineered</b> a deterministic clinical recommendation engine in Node.js/TypeScript, developing multidimensional matrix evaluation algorithms over complex PAI datasets (ages, contraindications, pathologies).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Translated</b> public health regulations alongside epidemiologists into zero-ambiguity logical data models, while modernizing institutional web architecture.",
        style_bullet
    ))

    # TurboCupones
    story.append(Paragraph(
        "<b>Web &amp; Backend Engineer (Full Stack)</b> — <b>TurboCupones</b> &nbsp;|&nbsp; <i>June 2024 – October 2024 &nbsp;|&nbsp; Remote</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Developed</b> high-throughput REST APIs with Django REST Framework for a coupon platform, implementing JWT authentication, SQL query tuning, and cursor-based pagination (<100ms response times).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Collaborated</b> in an agile Scrum team delivering responsive Next.js interfaces consuming backend microservices under continuous integration workflows.",
        style_bullet
    ))

    # 4. Key Achievements
    story.extend(section_header("Key Achievements"))
    story.append(Paragraph(
        "&bull;&nbsp; <b>1st Place — Sabana Hack 2025 (Universidad de La Sabana):</b> Architected and implemented in 24 hours an AI-powered real-time emergency alert system for the Colombian Red Cross, processing environmental data for disaster risk mitigation.",
        style_bullet
    ))

    # 5. Technical Skills
    story.extend(section_header("Technical Skills"))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Backend:</b> Python (FastAPI, Django REST Framework), Node.js, TypeScript, Java, NestJS, Express.js",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Frontend:</b> React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, RESTful API consumption",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Databases &amp; Analytics:</b> PostgreSQL, SQL, Pandas, Data Modeling, ETL Pipelines, Vector Storage (Embeddings, Cosine Similarity)",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Cloud &amp; DevOps:</b> GCP (Cloud Run, Cloud SQL), AWS S3, Docker, CI/CD (GitHub Actions), Railway",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Tools &amp; Environments:</b> Linux, Git, Postman, JWT, Pydantic, Alembic, Scrum, RESTful APIs",
        style_bullet
    ))

    # 6. Education & Languages
    story.extend(section_header("Education &amp; Languages"))
    story.append(Paragraph(
        "<b>B.S. in Computer Engineering</b> — <b>Universidad de La Sabana</b> &nbsp;|&nbsp; <i>2022 – 2026 &nbsp;|&nbsp; Chía, Colombia</i>",
        style_role
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Scholarship &amp; Academic Merit:</b> Recipient of <b>80% Academic Excellence Scholarship</b> &nbsp;&bull;&nbsp; Cumulative GPA: <b>4.4 / 5.0</b> (Emphasis on Software Architecture and Distributed Systems).",
        style_bullet
    ))
    story.append(Paragraph(
        "&bull;&nbsp; <b>Languages:</b> Spanish (Native) &nbsp;&bull;&nbsp; English (B2 — Professional working proficiency &amp; technical documentation).",
        style_bullet
    ))

    doc.build(story)
    print("PDF EN built successfully.")

if __name__ == '__main__':
    generate_pdf_es('public/resume/Jhojan_JimenezCV.pdf')
    generate_pdf_en('public/resume/Jhojan_Jimenez_Resume.pdf')
    
    # Check page counts
    for path in ['public/resume/Jhojan_JimenezCV.pdf', 'public/resume/Jhojan_Jimenez_Resume.pdf']:
        r = pypdf.PdfReader(path)
        print(f"{path}: {len(r.pages)} page(s)")
