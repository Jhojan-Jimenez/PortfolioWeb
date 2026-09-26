# 🛡️ Vaultwarden — Gestor de Contraseñas Seguro Self-Hosted

Este documento es la **guía técnica oficial y manual operativo** de Vaultwarden para agentes de IA y desarrolladores. Detalla la arquitectura de seguridad, almacenamiento de credenciales, configuración de clientes y políticas de respaldo.

---

## 🎯 Resumen Ejecutivo

* **Subdominio de Producción:** `https://vault.jhojan.cloud`
* **Contenedor Docker:** `vaultwarden-80u6tznp6qg7nahrpbxnmmuo` (Gestionado por Coolify)
* **Puerto Interno:** `80` (enlazado a Traefik con TLS obligatorio)
* **Stack Tecnológico:**
  - **Servidor:** Vaultwarden (Implementación alternativa y ultraligera de la API de Bitwarden escrita en Rust).
  - **Base de Datos:** SQLite montada en `/data/db.sqlite3`.
  - **Cifrado:** Zero-Knowledge End-to-End Encryption (E2EE) con AES-CBC 256-bit y PBKDF2 SHA-256 en cliente.

---

## 🔒 1. Políticas de Seguridad Activas

* **Registro Público Desactivado (`SIGNUPS_ALLOWED=false`):**
  Cualquier intento de registro desde la página de inicio devuelve un error `404 Not Found`. La única cuenta autorizada y activa es la cuenta maestra de Jhojan Jimenez.
* **Panel de Administración (`/admin`):**
  Protegido mediante `ADMIN_TOKEN` criptográfico generado por Coolify. Solo accesible para tareas de mantenimiento administrativo.
* **Certificado SSL Estricto:**
  Bitwarden y sus extensiones de navegador **rechazan conexiones HTTP no seguras** por protocolo de seguridad de WebCrypto. Traefik fuerza HTTPS en todas las solicitudes hacia `vault.jhojan.cloud`.

---

## 📲 2. Configuración en Clientes Oficiales

Para conectar la app de Bitwarden (Android, iOS, extensiones de Chrome/Firefox/Safari o app de escritorio):

1. En la pantalla inicial de la app de Bitwarden, hacer clic en el **icono de engranaje (⚙️ Servidor)** antes de iniciar sesión.
2. En el campo **URL del servidor autohospedado**, ingresar:
   ```text
   https://vault.jhojan.cloud
   ```
3. Guardar e iniciar sesión con las credenciales maestras.

---

## 💾 3. Respaldos y Recuperación de la Base de Datos

El archivo maestro de contraseñas cifradas reside en `/data/db.sqlite3` dentro del volumen persistente de Docker.

```bash
# Crear un respaldo inmediato de la base de datos de Vaultwarden
ssh -o StrictHostKeyChecking=no -i ~/.ssh/oracle-key ubuntu@150.136.63.103 \
  "sudo docker exec vaultwarden-80u6tznp6qg7nahrpbxnmmuo sqlite3 /data/db.sqlite3 '.backup /data/backup_\$(date +%Y%m%d).sqlite3'"
```
