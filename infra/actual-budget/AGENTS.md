# 💳 Actual Budget & Actual Bridge — Finanzas Personales & Automatización Bancolombia

Este documento es la **guía técnica oficial y manual operativo** de Actual Budget y su microservicio de enlace (`actual-bridge`) para agentes de IA y desarrolladores. Detalla la ingesta de correos de Bancolombia vía n8n, el motor de auto-aprendizaje de reglas, la gestión de cuentas en dólares (USD), el spread de DólarApp (-$30 COP) y el scheduler de TRM.

---

## 🎯 Resumen Ejecutivo

* **Subdominio de Producción:** `https://budget.jhojan.cloud`
* **Microservicio Interno:** `http://actual-bridge:5008` (Directorio en servidor: `/opt/actual-bridge`)
* **Stack Tecnológico:**
  - **Servidor:** Actual Server (Node.js / Express + SQLite + CRDT Sync).
  - **Cliente Web / PWA:** React Local-First con persistencia en IndexedDB/SQLite en cliente y sincronización asíncrona.
  - **Bridge Microservice:** Node.js + TypeScript con `@actual-app/api`.
  - **Automatización:** n8n (Workflow `Bancolombia to Actual Budget Ingestion`).

---

## 🏗️ 1. Arquitectura del Flujo de Datos

```text
 ┌────────────────────────────────────────────────────────┐
 │ Correo de Alerta Bancolombia (Gmail IMAP)             │
 │ alertasynotificaciones@an.notificacionesbancolombia.com│
 └──────────────────────────┬─────────────────────────────┘
                            │
                            ▼
 ┌────────────────────────────────────────────────────────┐
 │ n8n Workflow: Bancolombia to Actual Budget Ingestion   │
 │ 1. Trigger IMAP (UNSEEN, marca como leído)             │
 │ 2. Code Node (Regex multiformato: Transferencia/TC/QR) │
 └──────────────────────────┬─────────────────────────────┘
                            │
                            ▼ POST http://actual-bridge:5008/api/transaction
 ┌────────────────────────────────────────────────────────┐
 │ Actual Bridge Microservice (/opt/actual-bridge)        │
 │ 1. Resuelve cuenta (Ahorros *4412 / TC *6874)         │
 │ 2. Convierte pesos a centavos ($1 COP = 100 centavos)  │
 │ 3. Aplica categoría fallback: "Otros / Desconocidos"   │
 │ 4. Sincroniza CRDT con Actual Server                  │
 └──────────────────────────┬─────────────────────────────┘
                            │
                            ▼
 ┌────────────────────────────────────────────────────────┐
 │ Actual Server (https://budget.jhojan.cloud)           │
 │ SQLite (/data) + PWA Offline-First                     │
 └────────────────────────────────────────────────────────┘
```

---

## 🧠 2. Motor de Auto-Aprendizaje de Reglas (`autoLearnRules`)

Para evitar la configuración manual repetitiva de categorías:
1. **Regla Fallback:** Cuando entra una compra de un comercio nuevo, el bridge le asigna automáticamente la categoría `Otros / Desconocidos`.
2. **Detección de Cambios en UI:** Cuando el usuario entra a Actual Budget y reasigna manualmente la categoría de una compra (ej. de *Otros / Desconocidos* a *Food* o *Transporte*), el motor de auto-aprendizaje lo detecta:
   - Consulta el historial de transacciones modificadas.
   - Crea una regla de coincidencia exacta en Actual Budget para ese `Payee`.
   - Sincroniza la regla. Las próximas transacciones de ese comercio se clasificarán automáticamente en la categoría elegida sin intervención humana.
3. **Frecuencia:** Se ejecuta automáticamente tras cada transacción entrante, en un ciclo de background cada 5 minutos, o invocando `GET /api/learn`.

---

## 💵 3. Cuentas en Dólares (USD), Spread DólarApp (-$30 COP) y Scheduler TRM

Para reflejar el Patrimonio Neto real sin distorsionar el presupuesto mensual en COP:

* **Cuentas Tracking (Off-budget):**
  - `Deel (USD)`: Saldo base calibrado $657 USD (~$2.167.844 COP).
  - `DólarApp (USD)`: Saldo base calibrado $2,316 USD (~$7.641.897 COP).
  - Total USD: **$2,973 USD** (~$9.809.741 COP).
* **Fórmula de Spread DólarApp (-$30 COP):**
  La API oficial de la Superfinanciera de Colombia (`datos.gov.co`) entrega la TRM representativa del mercado. Sin embargo, DólarApp liquida a cuentas bancarias colombianas con una comisión de spread de aproximadamente **$30 COP por debajo de la TRM oficial**:
  $$\text{TRM Efectiva} = \text{TRM Oficial} - 30\text{ COP}$$
* **Scheduler Automático en Background:**
  - **Horario:** Corre **cada 2 horas** entre las **8:00 AM y las 5:00 PM** (Hora de Colombia / COT, `America/Bogota`).
  - **Lógica:** Consulta la TRM oficial, calcula la TRM efectiva, evalúa si hubo cambio de cotización respecto al último registro en Actual Budget, y genera la transacción de ajuste por diferencial cambiario de forma silenciosa.
  - **Endpoint Manual (Opcional):** `POST http://actual-bridge:5008/api/sync-trm`.

---

## 🏷️ 4. Matriz de Categorías y Mapeos Oficiales

* **Food vs. Despensa:**
  - Supermercados y abarrotes (`D1`, `Ara`, `Éxito`, `Carulla`) ➔ Categoría `Despensa`.
  - Restaurantes externos (`Presto`, `Mimos`, `La Wafflería`, etc.) ➔ Categoría `Food`.
  - Universidad de La Sabana ➔ Categoría `Food`.
* **Contactos Frecuentes / Transferencias:**
  - `*3203282014` ➔ `Nequi Personal`
  - `*3225206523` ➔ `Pago parqueadero Cicla`
  - `*3224788002` ➔ `Juliana`
  - `*3135276319` ➔ `Julian`
  - `*3222024082` ➔ `Santiago`
  - `*3013453853` ➔ `Daniel`
  - `*3114457098` ➔ `Esteban`
  - `PILA` ➔ `PILA` (Seguridad social).

---

## 📱 5. Instalación como Progressive Web App (PWA)

Actual Budget es una PWA nativa con funcionamiento offline:
* **iOS (Safari):** Abrir `https://budget.jhojan.cloud` ➔ Compartir ➔ *«Añadir a pantalla de inicio»*.
* **Android (Chrome):** Abrir `https://budget.jhojan.cloud` ➔ Menú (3 puntos) ➔ *«Instalar aplicación»*.

---

## 🛠️ 6. Comandos Operativos de Diagnóstico

```bash
# 1. Comprobar salud del microservicio Actual Bridge
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s http://localhost:5008/health"

# 2. Forzar sincronización manual de TRM con spread DólarApp
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s -X POST http://localhost:5008/api/sync-trm"

# 3. Forzar auto-aprendizaje de reglas desde la terminal
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "curl -s http://localhost:5008/api/learn"

# 4. Ver logs de Actual Bridge
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker logs actual-bridge --tail 30"
```
