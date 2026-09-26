# 🤖 Vocero CRM — WhatsApp & Omnichannel Sales AI

Este documento es la **guía técnica oficial y manual operativo** de Vocero CRM para agentes de IA y desarrolladores. Contiene la arquitectura del sistema, credenciales de integración con la Meta Cloud API, y los protocolos para incorporar nuevas líneas de WhatsApp o clientes comerciales.

---

## 🎯 Resumen Ejecutivo

* **Subdominio de Producción:** `https://crm.jhojan.cloud`
* **Directorio en Servidor:** `/opt/vocero-crm`
* **Versión Desplegada:** `1.4.0` (Git commit `b3469f9`)
* **Stack Tecnológico:**
  - **Frontend & Backend:** Next.js 15 (standalone output) + React 19 + Tailwind CSS.
  - **Base de Datos:** PostgreSQL 16 Alpine con Drizzle ORM.
  - **Autenticación:** Better Auth con sesiones persistentes y control de organizaciones (RBAC).
  - **Eventos en Tiempo Real:** Server-Sent Events (SSE) para actualización instantánea del Inbox.
  - **Integración WhatsApp:** Meta Cloud API oficial (Graph API v21+ / v25) con cifrado simétrico AES-256-GCM para almacenamiento de tokens.

---

## 🏗️ 1. Arquitectura de Contenedores y Almacenamiento

El servicio se ejecuta de forma autónoma mediante Docker Compose en la VM ARM64 de Oracle Cloud (`150.136.63.103`):

```text
                                Cloudflare DNS (crm.jhojan.cloud)
                                               │
                                               ▼
                              Traefik Proxy (coolify-proxy :443)
                                 (Let's Encrypt TLS automático)
                                               │
                                        Red: coolify
                                               │
                                               ▼
                     ┌──────────────────────────────────────────────────┐
                     │            vocero-crm-app-1 (Next.js)            │
                     │          Puerto Interno: 3000 (Healthy)          │
                     └─────────────────┬────────────────────────────────┘
                                       │ Red: default
                                       ▼
                     ┌──────────────────────────────────────────────────┐
                     │          vocero-crm-vocero-db-1 (PostgreSQL 16)  │
                     │              Base de datos: vocero               │
                     └─────────────────┬────────────────────────────────┘
                                       │
                        ┌──────────────┴──────────────┐
                        ▼                             ▼
              Volumen: vocero_pg            Volumen: vocero_app_data
            (/var/lib/postgresql/data)     (/data: media, audios, logos)
```

### Variables de Entorno Críticas (`/opt/vocero-crm/.env`)
* `DATABASE_URL`: Conexión interna a `postgresql://postgres:${POSTGRES_PASSWORD}@vocero-db:5432/vocero`.
* `BETTER_AUTH_SECRET`: Secreto criptográfico de 64 caracteres para sesiones web.
* `ENCRYPTION_KEY`: Clave AES de 32 bytes (hex 64 chars) para cifrar los tokens de WhatsApp en base de datos.
* `META_WEBHOOK_VERIFY_TOKEN`: Token de verificación del webhook (`e640e142fdca9f848dfe27d2e995ef0fe73c3878fb737784a196467d5e00070d`).
* `CHANNELS`: `whatsapp,instagram,messenger`
* `AGENDA`: `true` (Conectores de Google Meet / Zoom).

---

## 📱 2. Registro de Integración con Meta Cloud API (WhatsApp)

Toda la infraestructura de WhatsApp opera bajo la cuenta de desarrollador oficial de Jhojan Jimenez vinculada a su Business Portfolio:

| Parámetro | Valor Oficial en Producción |
| :--- | :--- |
| **Nombre de la App en Meta** | `Vocero CRM` |
| **Business Portfolio (Empresa)** | `Zencode` |
| **WhatsApp Business Account ID (WABA ID)** | `1568755024386179` |
| **Phone Number ID (Identificador de Número)** | `1293663623837482` |
| **Número Registrado en Producción** | **`+57 313 4289397`** |
| **Estado en Base de Datos** | `connected` (Verificado en `meta_credentials`) |
| **URL del Webhook de WhatsApp** | `https://crm.jhojan.cloud/api/webhooks/wa/e640e142fdca9f848dfe27d2e995ef0fe73c3878fb737784a196467d5e00070d` |
| **Token de Verificación del Webhook** | `e640e142fdca9f848dfe27d2e995ef0fe73c3878fb737784a196467d5e00070d` |

---

## 👥 3. Organización y Usuario Propietario

* **Propietario Principal:** Jhojan Jimenez (`jhojanjimene@gmail.com`)
* **ID de Organización:** `org_e1o9m6f81i7kx5whazrp`
* **Nombre de Organización:** `Negocio de Jhojan` (slug: `principal`)
* **Política de Registro:** `isPublicSignupAllowed()` bloqueó automáticamente el registro público tras la creación de la primera organización. Nuevos usuarios solo pueden ser invitados por el administrador desde el panel de miembros.

---

## 🚀 4. Protocolo de Operaciones: Incorporación de Nuevos Números y Clientes

Para futuras ampliaciones del sistema, seguir estos procedimientos estandarizados:

### Procedimiento A: Dar de alta un número adicional para Zencode o proyectos internos
1. **Adquisición de la Línea:** Conseguir una nueva SIM o eSIM y colocarla temporalmente en cualquier teléfono para verificar que reciba SMS.
2. **Regla de Exclusión:** **NO instalar ni abrir la app móvil de WhatsApp** con ese número.
3. **Registro en Meta Business Manager:**
   - Ir a [business.facebook.com/settings](https://business.facebook.com/settings) ➔ **Cuentas de WhatsApp** ➔ Seleccionar `Zencode`.
   - Ir a **Números de teléfono** ➔ **«Agregar número de teléfono»**.
   - Asignar nombre público (ej. *Zencode Ventas*), país `Colombia (+57)` y el número de teléfono.
   - Seleccionar verificación por **SMS**, ingresar el código de 6 dígitos recibido.
4. **Vinculación a Vocero CRM:**
   - Meta generará un nuevo `Phone Number ID`.
   - Entrar al panel de Vocero CRM en `https://crm.jhojan.cloud/settings/whatsapp` o insertar las credenciales en la base de datos para la nueva organización.

---

### Procedimiento B: Onboarding de Clientes Externos (Modo Agencia / Tech Provider)
Para conectar los números de clientes de tu agencia sin mezclar activos:

1. **Vía Administrador Comercial (Partnership):**
   - El cliente entra a su Meta Business Manager ([business.facebook.com/settings](https://business.facebook.com/settings)).
   - En **Usuarios** ➔ **Socios (Partners)** ➔ Hace clic en *«Compartir activos con un socio»*.
   - Ingresa el **Identificador de Portfolio Comercial** de `Zencode`.
   - Le concede permisos de **Gestión completa** o **Mensajería** sobre su Cuenta de WhatsApp Business (WABA).
2. **Extracción de Credenciales:**
   - Desde el panel de desarrollador de Zencode, aparecerá la WABA del cliente.
   - Obtener su `WABA ID` y `Phone Number ID`.
   - Generar un **Token de Usuario del Sistema** en `business.facebook.com/settings` ➔ *Usuarios del sistema* con permisos `whatsapp_business_messaging` y `whatsapp_business_management`.
3. **Creación de Organización en Vocero CRM:**
   - En Vocero CRM, crear una nueva organización para ese cliente.
   - En la sección `/settings/whatsapp` de su organización, pegar el `WABA ID`, `Phone Number ID` y el Token del cliente.
   - Suscribir el webhook en Meta con la URL propia de Vocero CRM.

---

### 💡 5. Reglas de Costos y Verificación de Negocio en Meta
* **Tier Inicial (Sin verificación):**
  - Permite hasta **2 números de teléfono**.
  - Permite **1.000 conversaciones iniciadas por el usuario (mensajes entrantes de clientes) GRATIS al mes**.
  - No requiere subir RUT ni Cámara de Comercio para operar y responder mensajes con IA.
* **Verificación de Negocio (Opcional):**
  - Solo se requiere si se necesita la insignia verde (Green Tick) o enviar más de 250 mensajes masivos proactivos de marketing al día. Se completa subiendo la documentación legal de la empresa en *Paso 3: Verificación del negocio*.

---

## 🛠️ 6. Comandos Operativos de Diagnóstico (SSH)

```bash
# 1. Comprobar estado de credenciales de WhatsApp en PostgreSQL
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker exec -t vocero-crm-vocero-db-1 psql -U postgres -d vocero -c 'SELECT id, organization_id, waba_id, phone_number_id, display_phone_number, status FROM meta_credentials;'"

# 2. Ver logs en tiempo real de mensajes entrantes y webhooks
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs vocero-crm-app-1 -f --tail 30"

# 3. Reiniciar el servicio de Vocero CRM tras cambios
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "cd /opt/vocero-crm && sudo docker compose restart app"
```
