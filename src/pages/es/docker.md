---
title: Instalación con Docker
description: Qué proporcionan los Dockerfiles existentes y cómo utilizarlos con precaución.
layout: ../../layouts/MainLayout.astro
---
# Instalación con Docker

Los repositorios de cliente y API incluyen Dockerfiles. El cliente se compila y sirve con Nginx; la API se ejecuta con Node.js y escucha en el puerto 3008 por defecto.

## Imágenes existentes

Los README enlazan imágenes publicadas bajo el espacio de Docker Hub `soker90`. Comprueba las etiquetas y la fecha de publicación antes de utilizarlas; no uses automáticamente una etiqueta mutable `latest` para una instalación crítica.

- [Imágenes del cliente](https://hub.docker.com/r/soker90/arroyo-erp-client)
- API: comprueba la imagen publicada y sus etiquetas en el registro configurado por el proyecto.

## Configuración del cliente

El manifiesto documenta estas variables de compilación:

- `VITE_ROUTER_BASE_PATH`: prefijo de rutas del cliente.
- `VITE_API_HOST`: host configurado para la API.

El cliente también usa `/api` como base de sus rutas de API en el código actual. Comprueba la configuración de proxy del despliegue: el Dockerfile copia una configuración de Nginx que sirve la SPA, pero no documenta por sí sola un proxy inverso a la API.

## Configuración de la API

El Dockerfile de API expone el puerto 3008. La configuración lee `PORT`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_ROOT_USERNAME`, `DATABASE_ROOT_PASSWORD` y, si está definida, `MONGODB`.

No publiques MongoDB directamente en Internet. Sitúa la base de datos en una red privada accesible solo desde los servicios que la necesiten.

## Compose

No se ha verificado en el repositorio una configuración Compose oficial que conecte y configure los tres componentes. Por ello, esta guía no presenta un `docker-compose.yml` inventado como si fuese mantenido por el proyecto.

**[CAPTURA PENDIENTE — despliegue real en Docker]** Añadir captura de contenedores/servicios con nombres ficticios. Ocultar variables de entorno, volúmenes sensibles, IP y credenciales.

Antes de actualizar, guarda copia de seguridad, fija las versiones de las imágenes y comprueba el proceso de reversión.
