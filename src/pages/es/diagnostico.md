---
title: Diagnóstico de problemas
description: Comprobaciones iniciales para incidencias habituales.
layout: ../../layouts/MainLayout.astro
---
# Diagnóstico de problemas

Registra siempre el mensaje exacto, el momento aproximado, la pantalla afectada y los pasos para reproducir el problema. No adjuntes contraseñas, cookies, tokens ni datos reales.

## La web no carga

1. Comprueba la dirección y la conexión.
2. Comprueba que el contenedor o proceso del cliente está activo.
3. Revisa los logs del servidor web.
4. Si solo falla una ruta interna, comprueba la configuración de fallback a index.html de la SPA.

## La web carga, pero no aparecen datos

1. Comprueba que la API está en ejecución.
2. Desde un entorno autorizado, verifica GET /monit/health; debe responder OK si la API está disponible.
3. Comprueba que VITE_API_HOST y la configuración de /api apuntan al entorno correcto.
4. Revisa la consola del navegador y los logs de la API.
5. Comprueba que la API puede conectar con MongoDB.

El endpoint de salud confirma que el servidor HTTP responde, pero no garantiza por sí solo que todas las consultas a la base de datos funcionen.

## Error de conexión a MongoDB

Revisa host, puerto, nombre de base de datos, credenciales y URI MONGODB. Comprueba también la conectividad de red desde el contenedor de la API. No publiques la URI completa en una incidencia.

## No puedo iniciar sesión

Comprueba la dirección y solicita al administrador que verifique el usuario y el estado de la API. Nunca envíes tu contraseña ni tokens de sesión.

## Los importes no cuadran

Abre los documentos originales y comprueba fecha, líneas, estado y pagos relacionados. No realices cambios directos en MongoDB como primer recurso.

## Una actualización rompe el sistema

Detén nuevas modificaciones si hay riesgo para los datos, conserva logs, comprueba la copia de seguridad y sigue el procedimiento de reversión del administrador.

## Información que incluir en un informe

- Versión o commit desplegado.
- Navegador y sistema operativo, cuando afecten al problema.
- Pasos exactos para reproducirlo.
- Resultado esperado y resultado observado.
- Mensaje de error sin secretos ni datos personales.
