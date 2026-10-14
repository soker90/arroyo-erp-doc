---
title: Seguridad y mantenimiento
description: Recomendaciones operativas y limitaciones detectadas en el código de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Seguridad y mantenimiento

Esta guía reúne medidas operativas y limitaciones identificadas en el código. No sustituye una auditoría de seguridad.

## Secretos y credenciales

- No publiques archivos `.env`, contraseñas, tokens ni URI de MongoDB.
- No uses credenciales vacías en producción.
- Usa un usuario de MongoDB con privilegios mínimos necesarios.
- No introduzcas secretos en variables `VITE_*`: se incorporan al cliente web.
- Si un secreto se ha publicado en Git, considéralo comprometido, revócalo y genera uno nuevo.

### Secreto JWT predeterminado

La API actual define el secreto de firma JWT como una cadena fija en `config/index.js`; el código de autenticación lo utiliza para firmar y verificar tokens. No hay una variable de entorno de sustitución en la configuración consultada.

Esto requiere una corrección antes de exponer la API en producción: modificar la aplicación para leer un secreto aleatorio desde configuración segura y fallar de forma explícita si no está definido. No es suficiente crear una variable de entorno con un nombre arbitrario, porque el código actual no la lee. Tras cambiarlo, hay que probar el inicio de sesión y la verificación de tokens.

## Red y HTTPS

- Publica la aplicación mediante HTTPS.
- Mantén MongoDB en una red privada; no lo expongas directamente a Internet.
- Restringe el acceso administrativo a los servicios.
- Configura correctamente el proxy entre el cliente y la API.
- Mantén las imágenes base y dependencias actualizadas.
- No des por hecho que el Dockerfile configura el proxy inverso del prefijo `/api`; verifica la configuración del servidor frontal.

## Cuentas y permisos

El middleware de autenticación espera un token Bearer y comprueba que la cuenta siga existiendo. La ruta de creación de cuenta de la API está protegida por autenticación; no se ofrece como registro público normal.

Antes de instalar Arroyo para varios usuarios, define y prueba cómo se crea la primera cuenta y cómo se recupera el acceso. No habilites un endpoint de alta pública sin diseñar sus controles.

## Actualizaciones

1. Lee los cambios de versión.
2. Haz una copia de seguridad verificable.
3. Prueba la actualización en un entorno separado.
4. Ejecuta las pruebas y comprueba el inicio de sesión y los flujos principales.
5. Despliega en una ventana controlada.
6. Comprueba logs y salud del servicio.
7. Mantén un procedimiento de reversión.

## Datos personales

Las capturas, logs, copias y exportaciones pueden contener datos personales o comerciales. Anonimízalos antes de compartirlos y limita el acceso según las responsabilidades de cada persona.

**[CAPTURA PENDIENTE — configuración de seguridad del despliegue]** Mostrar solo opciones no sensibles. No mostrar secretos, tokens, direcciones privadas ni datos de clientes.
