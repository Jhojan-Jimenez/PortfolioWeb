# ⚡ n8n Automation Engine — Orquestación de Flujos de Trabajo

Este documento es la **guía técnica oficial y manual operativo** de n8n para agentes de IA y desarrolladores. Detalla la configuración de la instancia autohospedada, el servidor MCP, credenciales y workflows activos en producción.

---

## 🎯 Resumen Ejecutivo

* **Subdominio de Producción:** `https://n8n.jhojan.cloud`
* **Contenedor Docker:** `n8n-ooayufs5gbx88mkfeiqbahvo` (Gestionado por Coolify)
* **Puerto Interno:** `5678`
* **Versión:** `v2.40.6` (latest con arquitectura de Task Runners habilitada)
* **Persistencia:** SQLite en volumen Docker persistente montado en `/home/node/.n8n`.
* **MCP Server Integrado:** `https://n8n.jhojan.cloud/mcp-server/http` (Permite a agentes de IA interactuar, consultar y editar workflows mediante protocolo MCP).

---

## 🔄 1. Workflows Activos en Producción

### Workflow: `Bancolombia to Actual Budget Ingestion` (ID: `BancolombiaSync1`)
* **Propósito:** Ingesta desatendida y automática de extractos y comprobantes de compra/transferencia enviados por Bancolombia a Gmail.
* **Nodo Trigger:** `Email Trigger (IMAP)`
  - Servidor: `imap.gmail.com:993` (SSL).
  - Usuario: `jhojanjimene@gmail.com`.
  - Filtro: Correos no leídos (`UNSEEN`) provenientes de `alertasynotificaciones@an.notificacionesbancolombia.com`.
  - Post-procesamiento: Marca el correo como leído inmediatamente para evitar dobles procesamientos.
* **Nodo de Transformación (`Code Node`):**
  - Motor: JavaScript puro.
  - Normaliza fechas al huso horario `America/Bogota` (COT).
  - Extrae monto, tipo de transacción (Transferencia por app, Tarjeta de Crédito, Código QR), comercio o destinatario.
* **Nodo de Envío (`HTTP Request`):**
  - Invoca `POST http://actual-bridge:5008/api/transaction` en la red privada de Docker.

---

## 🔐 2. Credenciales Almacenadas en n8n

* **Credencial IMAP Gmail:**
  - Nombre: `Gmail Alertas Bancolombia`
  - Protocolo: IMAP SSL
  - Tipo de Autenticación: Contraseña de Aplicación de Google (App Password de 16 caracteres).
* **Credenciales de Servicios Internos:**
  - Comunicación con microservicios locales (`actual-bridge`, `vocero-crm`) a través de la red interna de Docker `coolify` sin necesidad de exponer puertos a internet.

---

## 🚀 3. Guía para Crear Nuevos Workflows

Al crear una nueva automatización en n8n:
1. **Comunicación con Servicios Locales:** Usa siempre nombres de host de contenedor en la red `coolify` (ej. `http://actual-bridge:5008` o `http://vocero-crm-app-1:3000`).
2. **Manejo de Errores:** Siempre configura una rama de fallback o nodo *Error Trigger* para notificar fallos por email o webhook antes de detener la ejecución.
3. **Control de Duplicados:** Si procesas webhooks o feeds externos, implementa un identificador único de transacción (`idempotency key`) para evitar inserciones duplicadas en base de datos.

---

## 🛠️ 4. Comandos de Diagnóstico (SSH)

```bash
# 1. Ver logs de ejecución de n8n
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs n8n-ooayufs5gbx88mkfeiqbahvo -f --tail 30"

# 2. Reiniciar n8n desde CLI
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker restart n8n-ooayufs5gbx88mkfeiqbahvo"
```
