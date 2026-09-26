# ☁️ Infraestructura Cloud & Servicios Autohospedados (Oracle Cloud Infrastructure)

Este documento es el **punto de entrada general** para la arquitectura de infraestructura autohospedada gestionada por Jhojan Jimenez. Sirve como memoria técnica y manual operativo para agentes de IA (Antigravity, etc.) y desarrolladores que necesiten operar, diagnosticar, desplegar o escalar servicios en este cluster.

---

## 🗺️ Mapa de Documentación por Servicio

Cada servicio y funcionalidad cuenta con su propia guía técnica detallada (`AGENTS.md`):

| Servicio / Módulo | Subdominio Oficial | Guía Técnica Especializada | Stack Tecnológico |
| :--- | :--- | :--- | :--- |
| **Vocero CRM** | `https://crm.jhojan.cloud` | [vocero-crm/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/vocero-crm/AGENTS.md) | Next.js 15 + React 19 + PostgreSQL 16 + Meta Cloud API |
| **Actual Budget & Bridge** | `https://budget.jhojan.cloud` | [actual-budget/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/actual-budget/AGENTS.md) | Actual Server + `@actual-app/api` Bridge + SQLite |
| **n8n Automation** | `https://n8n.jhojan.cloud` | [n8n/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/n8n/AGENTS.md) | Node.js n8n v2.40.6 + IMAP Gmail + Task Runners |
| **Vaultwarden** | `https://vault.jhojan.cloud` | [vaultwarden/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/vaultwarden/AGENTS.md) | Rust (Bitwarden API) + SQLite |
| **TalentMatch AI** | `https://models.jhojan.cloud` | [talentmatch-ai/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/talentmatch-ai/AGENTS.md) | FastAPI + CLIP ViT-B/32 + PostgreSQL 16 pgvector |
| **Gazu E-commerce** | `https://gazu.jhojan.cloud` | [gazu-ecommerce/AGENTS.md](file:///home/claude/Workspace/Portafolio/CV/PortfolioWeb/infra/gazu-ecommerce/AGENTS.md) | Vendure (NestJS) + GraphQL + PostgreSQL 16 |

---

## 🖥️ 1. Servidor Físico / VM (Oracle Cloud Infrastructure)

* **Proveedor:** Oracle Cloud Infrastructure (OCI) — Free Tier Always On.
* **Instancia:** `VM.Standard.A1.Flex` (Arquitectura **ARM64 / aarch64** - Ampere Altra).
* **Especificaciones de Hardware:**
  - **vCPU:** 4 OCPUs (Cores dedicados ARM64).
  - **RAM:** 24 GB de memoria.
  - **Almacenamiento:** 200 GB NVMe Boot Volume.
* **Sistema Operativo:** Ubuntu 24.04 LTS (Kernel aarch64).
* **IP Pública:** `150.136.63.103`
* **Acceso SSH (desde WSL / Entorno Local):**
  ```bash
  ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103
  ```
* **DNS & CDN:** Gestionado mediante **Cloudflare** para la zona `jhojan.cloud`.
  - Todos los subdominios de servicios (`crm`, `budget`, `n8n`, `vault`, `models`, `gazu`, `dev.gazu`) tienen registros tipo `A` apuntando a `150.136.63.103`.

---

## 🕹️ 2. Orquestador Coolify v4 & Traefik Reverse Proxy

La instancia utiliza **Coolify v4** como orquestador de contenedores sobre Docker nativo.

* **Panel Web Interno de Coolify:** `http://localhost:8000` (disponible por SSH Tunnel o mediante API).
* **Reverse Proxy:** **Traefik** (contenedor oficial `coolify-proxy`).
  - Escucha en puertos `80` (HTTP) y `443` (HTTPS).
  - **Terminación SSL/TLS:** Emisión automática y renovación de certificados válidos mediante **Let's Encrypt** (ACME challenge HTTP-01).
  - **Red Interna Docker:** Los servicios conectados a la red externa `coolify` son descubiertos por Traefik mediante etiquetas (`labels`) en Docker Compose.
* **API REST de Coolify:**
  - Endpoint base: `http://localhost:8000/api/v1`
  - Token de autenticación: `1|coolify-antigravity-token-xyz123`
  - Cabecera: `Authorization: Bearer 1|coolify-antigravity-token-xyz123`

---

## 🌐 3. Topología de Redes Docker en la VM

Existen dos categorías de despliegue en la máquina:

1. **Servicios Gestionados por Coolify:**
   - Desplegados a través del panel o la API de Coolify.
   - Pertenecen a la red Docker externa `coolify` y a sus redes internas de proyecto (`ooayufs5gbx88mkfeiqbahvo`, etc.).
   - Ejemplos: `n8n`, `actual-server`, `vaultwarden`, `talentmatch-ai`.

2. **Servicios Docker Compose Nativos Autónomos:**
   - Ubicados en `/opt/<servicio>` (ej. `/opt/vocero-crm`, `/opt/actual-bridge`).
   - Se conectan a su red local de base de datos (`default`) y a la red externa `coolify` para ser expuestos vía Traefik sin pasar por el panel web si se requiere un control granular del build en ARM64.

### ⚠️ Regla de Oro: Resolución de Nombres de Base de Datos
En la red `coolify`, el contenedor `coolify-db` tiene el alias `postgres`. **Nunca** nombres un contenedor o servicio secundario como `postgres: ...` en Docker Compose porque causará colisiones de DNS interno (`10.0.2.2`). Usa siempre nombres específicos como `vocero-db` o `custom-pg`.

---

## 🛠️ 4. Cheat Sheet Operativo para Agentes de IA

Para ejecutar diagnósticos y operaciones directas en la VM desde la terminal local:

```bash
# 1. Ver estado general de contenedores y consumo de recursos
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

# 2. Ver logs de Traefik para diagnosticar certificados SSL
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs coolify-proxy --tail 30"

# 3. Reiniciar el proxy si se añadieron nuevos registros DNS en Cloudflare
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker restart coolify-proxy"

# 4. Comprobar uso de disco y memoria RAM
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "df -h / && free -m"
```
