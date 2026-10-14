---
title: Requisitos y arquitectura
description: Tecnologías y relaciones entre los componentes de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Requisitos y arquitectura

## Arquitectura lógica

El navegador carga el cliente web, que realiza peticiones HTTP a la API. La API utiliza los modelos compartidos para acceder a MongoDB.

```text
Navegador
   │
   ▼
Cliente web (React / Vite)
   │ peticiones HTTP
   ▼
API (Node.js / Express)
   │ modelos Mongoose
   ▼
MongoDB
```

El diagrama representa la relación lógica; no implica que todos los componentes deban estar en el mismo servidor.

## Tecnologías verificadas en los manifiestos

- Cliente: React, Vite y pnpm.
- API: Node.js, Express y pnpm.
- Modelos: Mongoose y MongoDB.
- Contenedores: existen Dockerfiles para cliente y API.
- API: el endpoint de salud implementado es `/monit/health`, que responde `OK` cuando la aplicación atiende la petición.

## Versiones de Node.js

Hay una discrepancia que debe resolverse antes de publicar una guía de despliegue definitiva: el manifiesto actual de la API declara Node.js 24.x, mientras que su Dockerfile parte de una imagen Node 20.18.3. No asumas que ambas rutas de ejecución son equivalentes. Comprueba CI y las dependencias antes de elegir una versión y actualiza los archivos para que coincidan.

El cliente declara pnpm 9.12.3 y la API pnpm 9.7.1. El Dockerfile del cliente usa Node 22.17.1; el de la API usa Node 20.18.3.

## Requisitos operativos

- Una versión de Node.js compatible con cada componente si se ejecuta fuera de contenedores.
- pnpm/Corepack para instalar dependencias de cliente y API.
- MongoDB accesible desde la API.
- Un proxy web o servidor capaz de servir la SPA y reenviar las peticiones API correctamente.
- HTTPS para cualquier instalación accesible por red no confiable.
- Almacenamiento protegido para copias de seguridad y logs.

Los requisitos mínimos de CPU, memoria y almacenamiento no están especificados por los repositorios; deben medirse con la carga real.

**[DIAGRAMA PENDIENTE — infraestructura de producción]** Completar con el despliegue elegido, puertos, DNS, TLS y límites de red, sin mostrar IP privadas o secretos.
