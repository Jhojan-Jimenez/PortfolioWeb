# 🎬 Guía Maestra: Opciones y Herramientas para Presentaciones y Videos

Este documento resume todas las capacidades, herramientas y flujos de trabajo disponibles en este entorno para crear **presentaciones ejecutivas, diagramas de arquitectura interactivos y producción de video profesional** (tanto programático como asistido por IA).

---

## 📑 Índice Rápido

1. [Presentaciones y Visual Storytelling](#1-presentaciones-y-visual-storytelling)
2. [Video Programático con Código (React, Manim & Screen Recording)](#2-video-programático-con-código)
3. [Generación de Video y Avatares con IA](#3-generación-de-video-y-avatares-con-ia)
4. [Diseño Sonoro, Voces y Música (Audio Stack)](#4-diseño-sonoro-voces-y-música)
5. [Edición, Conversión y Postproducción Local](#5-edición-conversión-y-postproducción-local)
6. [Flujos de Trabajo Recomendados por Caso de Uso](#6-flujos-de-trabajo-recomendados-por-caso-de-uso)

---

## 1. Presentaciones y Visual Storytelling

### A. Slides Web & Pitch Decks Interactivos (HTML/React + Tailwind)
* **Qué hace:** Crea presentaciones basadas en la web como SPAs interactivas (slides a pantalla completa con navegación por teclado, animaciones fluidas con Framer Motion y componentes React reales).
* **Ventajas:** Permite incrustar demos funcionales en vivo, gráficos interactivos y modo oscuro/claro nativo sin las limitaciones estáticas de PowerPoint o PDF.

### B. Archify (`archify`)
* **Qué hace:** Genera diagramas técnicos interactivos de arquitectura de sistemas, topología cloud, flujos de datos (ETL) y secuencias API.
* **Formatos de salida:** HTML standalone explorable con SVG en línea, animación de trazas de datos en movimiento (*trace motion*), temas Dark/Light y exportación a **PNG, SVG o WebM**.
* **Uso ideal:** Documentar arquitecturas para entrevistas técnicas, pitch a inversionistas o explicar la infraestructura de tus proyectos (Kubernetes, Postgres pgvector, Traefik).

### C. Brandkit & Visual Style (`brandkit` & `visual-style`)
* **Qué hace:** Diseña guías visuales portables (`visual-style.md`), paletas de color, tipografía editorial y boards de identidad de producto para que las presentaciones y videos mantengan una estética de marca unificada.

### D. Visualización de Datos Avanzada (`d3-viz`) y 3D en Tiempo Real (`threejs`)
* **D3.js:** Gráficos de dispersión, grafos de red interactivos y análisis de métricas.
* **Three.js:** Modelos 3D interactivos navegables en el navegador (como el showroom 3D de Mercedes-AMG GT3).

### E. Diseño en Lienzo con Penpot vía MCP (`penpot`)
* **Qué hace:** Creación y modificación programática de tableros de diseño, componentes SVG y layouts directamente sobre el lienzo colaborativo de Penpot.

---

## 2. Video Programático con Código

### A. Remotion (`remotion` & `remotion-best-practices`)
* **Qué hace:** Motor de video donde cada fotograma se renderiza como un componente de **React y TypeScript**.
* **Capacidades:** Control exacto al milisegundo de animaciones, tipografía cinética (*kinetic typography*), transiciones geométricas y composición de audio.
* **Uso ideal:** Videos promocionales de proyectos, trailers para LinkedIn/X, intros animadas y visualización dinámica de métricas.

### B. Manim (`manimce-best-practices` & `manimgl-best-practices` & `manim-composer`)
* **Qué hace:** El motor de animación en Python creado por Grant Sanderson (*3Blue1Brown*).
* **Capacidades:** Visualización de conceptos matemáticos, transformaciones de matrices, grafos, redes neuronales y algoritmos.
* **Uso ideal:** Explicar cómo funciona la búsqueda vectorial (`pgvector`), los embeddings de CLIP ViT-B/32 o la orquestación distribuida en Kubernetes.

### C. Website-to-Video (`website-to-video`)
* **Qué hace:** Toma una URL (como `dev.jhojan.cloud` o `crm.jhojan.cloud`), captura secuencias y componentes con Chromium headless y ensambla automáticamente un video tour o clip para redes.

### D. Grabación de Pantalla Automática y Terminales Sintéticos
* **Playwright Recording (`playwright-recording`):** Graba flujos e interacciones en vivo dentro de una aplicación web real (haciendo clics, llenando formularios y navegando).
* **Synthetic Screen Recording (`synthetic-screen-recording`):** Simula grabaciones fluidas de terminales CLI ejecutando comandos bash/docker/k8s para Remotion.

### E. Animación de Personajes 2D y SVG (`svg-character-animation` & `pose-library-design`)
* **Qué hace:** Rigs de personajes 2D en vectores SVG animados con GSAP o Remotion para videos explicativos estilo caricatura técnica.

---

## 3. Generación de Video y Avatares con IA

### A. HeyGen (`avatar-video`, `create-video`, `video-translate`)
* **Avatares realistas:** Genera videos con presentadores virtuales a partir de texto o audio, con sincronización labial (*lip-sync*) y soporte para fondos personalizados.
* **Doblaje y traducción (`video-translate`):** Dobla videos existentes a múltiples idiomas adaptando el movimiento de los labios.

### B. Motores Cinemáticos de Video Generativo
* **ByteDance Seedance 2.5 / 2.0 (`seedance-2-5`):** Genera tomas cinemáticas con audio nativo sincronizado (diálogos, efectos de sonido y ambiente) y soporte multi-toma.
* **MiniMax H3 / Hailuo 3.0 (`minimax-h3`):** Generación de video de alta definición 2K con animación de primer y último fotograma.
* **Google Gemini Omni Flash (`gemini-omni`):** Generación y edición conversacional de video en lenguaje natural (*"elimina el fondo y cambia el tono"*).
* **LTX-2.3 22B (`ltx2`):** Generación rápida de clips y b-roll animado.
* **Kling AI (`kling-official`):** Video hiperrealista con alto realismo físico.

---

## 4. Diseño Sonoro, Voces y Música

* **ElevenLabs (`elevenlabs`, `speech-to-text`, `sound-effects`, `music`):**
  - **Voces:** Locuciones hiperrealistas con entonación humana y clonación de voz.
  - **SFX:** Generación de efectos de sonido a partir de prompts de texto (clicks de interfaz, impactos cinemáticos, ambiente).
  - **Música:** Creación de pistas de fondo o jingles instrumentales.
* **Azure AI Speech (`azure-text-to-speech` / `azure-speech-to-text`):** Locución multilingüe rápida y transcripción precisa.
* **Doubao TTS (`doubao-tts`) & Fish Audio (`fish-audio-tts`):** Modelos alternativos de alta expresividad y transcripción con timestamps a nivel de palabra para subtítulos sincronizados.
* **Google Lyria 3 (`lyria`) & ACE-Step (`acestep`):** Motores especializados en composición musical y generación de soundtracks adaptados a la duración exacta del video.

---

## 5. Edición, Conversión y Postproducción Local

* **Video Edit (`video-edit` con FFmpeg):**
  - Recortar, concatenar y combinar clips.
  - Ajuste de relación de aspecto (16:9 horizontal para YouTube/LinkedIn vs 9:16 vertical para TikTok/Reels/Shorts).
  - Compresión optimizada para la web (H.264/H.265/AV1).
* **Video Download (`video-download` con yt-dlp):** Descarga de referencias, videos o extracción de audio desde cualquier plataforma.
* **Video Understand (`video-understand`):** Extracción local de fotogramas clave y transcripción con Whisper offline sin gastar tokens de APIs de pago.

---

## 6. Flujos de Trabajo Recomendados por Caso de Uso

| Objetivo | Stack Sugerido | Pasos Clave |
| :--- | :--- | :--- |
| **Demo de un Proyecto para LinkedIn** | `playwright-recording` + `remotion` + `elevenlabs` | 1. Grabar interacción web.<br>2. Montar en Remotion con layout elegante.<br>3. Agregar locución explicativa y captions. |
| **Diagrama de Arquitectura Interactivo** | `archify` + SVG animado | 1. Definir componentes del sistema.<br>2. Generar HTML standalone con trace motion.<br>3. Exportar a WebM/SVG para el portafolio. |
| **Explicar un Algoritmo / Deep Tech** | `manimce-best-practices` | 1. Planificar escenas con `manim-composer`.<br>2. Programar las transformaciones en Python.<br>3. Renderizar en 60fps MP4. |
| **Pitch Deck para Inversionistas / Clientes** | HTML Slides (React) + `brandkit` | 1. Definir diseño con `visual-style`.<br>2. Crear slides interactivos en código.<br>3. Desplegar en un subdominio o exportar a PDF/WebM. |
| **Showcase Automático de tu Portafolio** | `website-to-video` + FFmpeg | 1. Capturar `dev.jhojan.cloud` automáticamente.<br>2. Crear video con transiciones y música de fondo.<br>3. Adaptar a 9:16 vertical y 16:9 horizontal. |
