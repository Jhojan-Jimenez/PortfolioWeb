# 🎯 TalentMatch AI — Búsqueda Vectorial Multimodal & Scouting con IA

Este documento es la **guía técnica oficial y manual operativo** de TalentMatch AI para agentes de IA y desarrolladores. Detalla la arquitectura de inferencia con modelos de visión y lenguaje, la indexación vectorial y su despliegue en producción.

---

## 🎯 Resumen Ejecutivo

* **Subdominio de Producción:** `https://models.jhojan.cloud`
* **Stack Tecnológico:**
  - **Framework API:** FastAPI (Python 3.11+ / Uvicorn).
  - **Modelo de Visión/Texto:** OpenAI CLIP (ViT-B/32) para proyección de imágenes y texto al mismo espacio latente de 512 dimensiones.
  - **Base de Datos Vectorial:** PostgreSQL 16 con extensión nativa `pgvector` e índices HNSW (Hierarchical Navigable Small World).
  - **LLM Vision:** GPT-4o-mini Vision para extracción estructurada de rasgos y evaluación cualitativa de perfiles.

---

## 🔍 1. Endpoints Clave

* **Health Check:**
  `GET https://models.jhojan.cloud/api/health` (Retorna estado del servicio y verificación del modelo CLIP en memoria).
* **Demo Search:**
  `GET https://models.jhojan.cloud/admin/search?demo=true` (Interfaz interactiva de búsqueda semántica y multimodal de perfiles).
* **Vector Search API:**
  `POST https://models.jhojan.cloud/api/v1/search` (Recibe texto o imagen, calcula embedding y ejecuta consulta SQL por distancia coseno `<=>`).

---

## 🛠️ 2. Diagnóstico y Monitoreo

```bash
# Comprobar salud del microservicio
curl -s https://models.jhojan.cloud/api/health

# Ver logs de inferencia en la VM
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs \$(sudo docker ps -q --filter 'name=talentmatch') --tail 30"
```
