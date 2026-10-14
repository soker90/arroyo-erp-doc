---
title: Desarrollo local
description: Preparar los repositorios para ejecutar y probar Arroyo en local.
layout: ../../layouts/MainLayout.astro
---
# Desarrollo local

Esta guía está orientada a quienes quieran estudiar el código o contribuir al proyecto. Cada repositorio tiene dependencias y comandos propios.

## Herramientas

- Git.
- Node.js compatible con el componente.
- Corepack y pnpm para cliente y API.
- MongoDB accesible para ejecutar la API.
- Un editor de código.

Comprueba las versiones declaradas en los manifiestos y Dockerfiles. En la API hay una discrepancia entre la versión de Node declarada en package.json y la imagen usada por Docker; conviene resolverla antes de normalizar el entorno de desarrollo.

## Cliente web

Clona el repositorio y ejecuta:

~~~bash
git clone https://github.com/soker90/arroyo-erp-client.git
cd arroyo-erp-client
corepack enable
pnpm install
pnpm start
~~~

El README indica que la aplicación se sirve normalmente en http://localhost:5173 y necesita la API disponible. Para ejecutar con mocks, el comando documentado es:

~~~bash
pnpm dev
~~~

Variables identificadas: VITE_ROUTER_BASE_PATH y VITE_API_HOST.

## API

~~~bash
git clone https://github.com/soker90/arroyo-erp-api.git
cd arroyo-erp-api
corepack enable
pnpm install
pnpm start
~~~

Para desarrollo con recarga automática, el manifiesto define pnpm dev. La API requiere una conexión a MongoDB configurada antes de probar operaciones con datos.

## Modelos

~~~bash
git clone https://github.com/soker90/arroyo-erp-models.git
cd arroyo-erp-models
pnpm install
~~~

La API declara una dependencia del paquete arroyo-erp-models. Al trabajar con cambios coordinados entre repositorios, verifica qué versión de modelos consume la API.

## Pruebas y calidad

- Cliente: pnpm test, pnpm lint y pnpm build.
- API: pnpm test y pnpm lint.
- Modelos: revisa los scripts de prueba y CI del repositorio antes de ejecutarlos.

Ejecuta primero pruebas unitarias y después pruebas de integración con datos desechables. Nunca uses una base de datos de producción como entorno de pruebas.
