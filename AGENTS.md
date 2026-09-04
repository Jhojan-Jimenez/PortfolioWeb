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
* **Ubicaci?n:** Bogot?, Colombia.
* **Idiomas de trabajo:**
  - **Sitio web:** Estrictamente en **Ingl?s** (redacci?n t?cnica, moderna y orientada a reclutadores globales).
  - **Conversaci?n con el usuario:** En **Espa?ol**.

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
?       ??? Skills.tsx     # 5 categor?as de ingenier?a (Backend, Cloud, DBs, AI, Frontend)
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

### ?? Pr?xima Sesi?n: Remodelaci?n de la Secci?n de Proyectos (`Projects.tsx`)
La siguiente conversaci?n abordar? a fondo la secci?n de proyectos:
1. **Evaluaci?n e integraci?n de proyectos:**
   - Analizar la inclusi?n o vinculaci?n del proyecto `3D-Car` (Three.js / scroll 3D showcase).
   - Reevaluar los proyectos actuales: WheelUS, MortShop, Vaccine Recommender.
2. **Elevaci?n de la arquitectura visual:**
   - Tarjetas interactivas con est?tica moderna (Bento grid, spotlight effects, terminal previews).
   - M?tricas t?cnicas de backend (latencia, APIs creadas, esquemas de BD, volumen de requests o impacto).
   - Enlaces a c?digo fuente (GitHub) y demos en vivo activos (`*.jhojan.cloud`).
3. **Reglas de redacci?n:**
   - Mantener descripciones en ingl?s enfocadas en decisiones de ingenier?a, backend y nube.

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
