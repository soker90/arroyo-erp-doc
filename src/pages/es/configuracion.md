---
title: Configuración
description: Variables de entorno y parámetros de conexión de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Configuración

Esta página resume parámetros observados en el código. Los valores concretos dependen de cada instalación; no copies secretos de producción en documentación, incidencias o repositorios.

## API

| Variable | Uso | Valor predeterminado observado |
|---|---|---|
| `PORT` | Puerto HTTP del servidor | 3008 |
| `DATABASE_HOST` | Host de MongoDB | 127.0.0.1 |
| `DATABASE_NAME` | Nombre de la base de datos | arroyoErp |
| `DATABASE_ROOT_USERNAME` | Usuario de conexión a MongoDB | Vacío |
| `DATABASE_ROOT_PASSWORD` | Contraseña de conexión a MongoDB | Vacío |
| `MONGODB` | URI completa de conexión; si se define, tiene prioridad sobre la URI construida por separado | No definida por defecto |

La configuración construye una URI de MongoDB con autenticación contra la base de datos `admin` cuando se proporcionan usuario y contraseña. Si se define `MONGODB`, la aplicación utiliza esa URI.

No uses credenciales vacías en una instalación expuesta. Crea un usuario de MongoDB con los permisos mínimos necesarios y almacena los secretos en variables protegidas o en el gestor de secretos de la plataforma.

## Cliente web

El proyecto identifica estas variables de compilación:

- `VITE_ROUTER_BASE_PATH`: prefijo de rutas del cliente.
- `VITE_API_HOST`: host de la API.

El cliente utiliza `/api` como base para sus peticiones. El proxy o servidor frontal debe configurarse para que ese prefijo llegue a la API correcta.

Las variables `VITE_*` se incorporan al código que recibe el navegador. **Nunca** incluyas en ellas contraseñas, claves privadas ni tokens permanentes.

## Secreto de firma de los tokens: limitación importante

En el código actual de la API, el secreto JWT se obtiene de `config.session.secret`, definido como una cadena fija en `config/index.js`. No se observa una variable de entorno para sobrescribirlo.

Por tanto, **no basta con configurar una variable de entorno para cambiar ese secreto en la versión actual**. Antes de usar esta API en producción, el equipo que la despliega debe modificar y probar la configuración para leer un secreto aleatorio desde un mecanismo seguro, rechazar el arranque si falta y no mantener un secreto por defecto conocido. Hasta aplicar ese cambio, no consideres segura una instalación expuesta solo por haber configurado las variables de MongoDB.

La duración del token está configurada en el código como `2h`. Comprueba el comportamiento de la versión desplegada antes de definir procedimientos de sesión.

## Lista de comprobación

- [ ] URI de MongoDB comprobada desde el entorno de la API.
- [ ] Usuario de base de datos con privilegios mínimos.
- [ ] Secretos de base de datos fuera del control de versiones.
- [ ] Secreto JWT predeterminado eliminado mediante un cambio de código probado.
- [ ] Host y prefijo de API correctos en el cliente.
- [ ] HTTPS habilitado en el punto de entrada.
- [ ] No se exponen logs ni endpoints de depuración.
- [ ] Existe un procedimiento documentado para crear la primera cuenta de forma segura.
