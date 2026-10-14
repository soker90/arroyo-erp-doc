---
title: Configuración
description: Variables de entorno y parámetros de conexión de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Configuración

Esta página resume los parámetros observados en el código. Los valores concretos dependen de cada instalación; no copies secretos de producción en documentación, tickets o repositorios.

## API

| Variable | Uso | Valor predeterminado observado |
|---|---|---|
| PORT | Puerto HTTP del servidor | 3008 |
| DATABASE_HOST | Host o hosts de MongoDB | 127.0.0.1 |
| DATABASE_NAME | Nombre de la base de datos | arroyoErp |
| DATABASE_ROOT_USERNAME | Usuario usado para conectar a MongoDB | Vacío |
| DATABASE_ROOT_PASSWORD | Contraseña de conexión | Vacío |
| MONGODB | URI completa de conexión; sustituye la URI construida por separado | No definida por defecto |

La configuración construye una URI MongoDB con autenticación contra la base de datos admin cuando se usan usuario y contraseña. Si se define MONGODB, esa URI tiene prioridad.

**Seguridad:** no uses credenciales vacías en una instalación expuesta. Guarda los secretos en el gestor de secretos de la plataforma o en variables de entorno protegidas.

## Cliente web

El README del cliente identifica VITE_ROUTER_BASE_PATH (prefijo base del router) y VITE_API_HOST (host de la API).

Las variables VITE_* se incorporan al código del navegador durante la compilación. No coloques contraseñas, claves privadas ni tokens permanentes en ellas.

El cliente declara /api como base de rutas API. El proxy o servidor frontal debe configurarse de acuerdo con el entorno elegido.

## Parámetros internos

La configuración de la API contiene un secreto de sesión predeterminado en el código fuente. Antes de desplegar, debe sustituirse por un valor aleatorio y único mediante una configuración segura; no publiques ni reutilices el valor del repositorio. Verifica cómo se aplica ese secreto en la versión desplegada.

## Lista de comprobación

- [ ] URI de MongoDB comprobada desde el contenedor de la API.
- [ ] Usuario de base de datos con privilegios mínimos.
- [ ] Secretos únicos y fuera del control de versiones.
- [ ] Host y prefijo de API correctos en el cliente.
- [ ] HTTPS habilitado en el punto de entrada.
- [ ] No se exponen logs ni endpoints de depuración.
