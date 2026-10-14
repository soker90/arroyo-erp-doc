---
title: Instalación: visión general
description: Componentes, decisiones previas y rutas para instalar Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Instalación: visión general

Arroyo se distribuye en varios repositorios que forman una aplicación completa. El cliente web es una SPA basada en React y Vite; la API está implementada con Node.js y Express; los modelos usan Mongoose para trabajar con MongoDB.

## Componentes

| Componente | Función | Código |
|---|---|---|
| Cliente web | Interfaz en el navegador | [arroyo-erp-client](https://github.com/soker90/arroyo-erp-client) |
| API | Reglas de aplicación y endpoints HTTP | [arroyo-erp-api](https://github.com/soker90/arroyo-erp-api) |
| Modelos | Modelos de datos y conexión a MongoDB | [arroyo-erp-models](https://github.com/soker90/arroyo-erp-models) |
| Documentación | Manuales y guías | [arroyo-erp-doc](https://github.com/soker90/arroyo-erp-doc) |

## Antes de instalar

- Decide dónde ejecutarás los servicios y quién administrará el servidor.
- Prepara una instancia de MongoDB compatible y una estrategia de copias de seguridad.
- Define el nombre DNS y el certificado TLS del sitio.
- Genera credenciales de administración únicas y guarda los secretos fuera del repositorio.
- Decide cómo se actualizarán los contenedores y cómo se revertirá una actualización defectuosa.

**Importante:** los repositorios contienen Dockerfiles, pero eso no significa que exista una configuración Docker Compose oficial completa ni que todos los valores necesarios estén documentados. Revisa la configuración real de tu versión antes de exponer el servicio a Internet.

## Ruta recomendada

1. Lee [Requisitos y arquitectura](./arquitectura).
2. Prepara los servicios según [Instalación con Docker](./docker) o [Desarrollo local](./desarrollo).
3. Ajusta las variables en [Configuración](./configuracion).
4. Prepara copias de seguridad siguiendo [Base de datos y copias](./base-de-datos).
5. Comprueba seguridad y salud del servicio con [Seguridad y mantenimiento](./seguridad) y [Diagnóstico](./diagnostico).

**[DIAGRAMA PENDIENTE — despliegue real]** Confirmar dónde se ejecutan frontend, API y MongoDB, y qué red los conecta. No publicar direcciones internas, credenciales ni datos de infraestructura sensibles.
