---
title: Seguridad y mantenimiento
description: Recomendaciones operativas para proteger una instalación de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Seguridad y mantenimiento

Esta guía recoge medidas operativas generales y cuestiones detectadas en el código. No sustituye una auditoría de seguridad.

## Secretos y credenciales

- No publiques archivos .env, contraseñas, tokens ni URI de MongoDB.
- No uses credenciales vacías en producción.
- Sustituye cualquier secreto predeterminado por un valor único y aleatorio.
- Usa un usuario de MongoDB con privilegios mínimos necesarios.
- No introduzcas secretos en variables VITE_*, ya que se incorporan al cliente web.
- Si un secreto se ha publicado en Git, considera que está comprometido: revócalo y genera uno nuevo.

## Red y HTTPS

- Publica la aplicación mediante HTTPS.
- Mantén MongoDB en una red privada; no lo expongas directamente a Internet.
- Restringe el acceso administrativo a los servicios.
- Configura correctamente el proxy entre el cliente y la API.
- Mantén las imágenes base y dependencias actualizadas.

## Cuentas y permisos

El inicio de sesión utiliza un flujo de autenticación basado en tokens en el cliente. El README del cliente señala que el endpoint para crear usuarios no está habilitado por defecto. Define un procedimiento seguro para crear cuentas y recuperar accesos antes de abrir la instancia a otros usuarios.

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

**[CAPTURA PENDIENTE — configuración de seguridad del despliegue]** Mostrar solo nombres de opciones, sin secretos, tokens, direcciones privadas ni información de clientes.
