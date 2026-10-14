# Documentación de Arroyo ERP

Manual en español para usuarios y administradores de Arroyo ERP. El sitio está construido con Astro y publica páginas Markdown desde `src/pages/es/`.

## Contenido

- **Guía de usuario:** primeros pasos, panel principal, clientes, proveedores, productos, albaranes, facturas, pagos, informes, recordatorios y preguntas frecuentes.
- **Guía técnica:** arquitectura, instalación, Docker, configuración, base de datos, desarrollo, API, modelos, seguridad y diagnóstico.
- **Capturas:** las páginas marcan explícitamente las imágenes pendientes y el protocolo para anonimizar datos.

## Desarrollo local

Requiere Node.js y npm. Desde la raíz del repositorio:

```bash
npm install
npm run dev
```

Para comprobar la compilación estática:

```bash
npm run build
npm run preview
```

## Añadir o editar páginas

1. Crea o edita un archivo Markdown en `src/pages/es/`.
2. Incluye el frontmatter `title`, `description` y el layout utilizado por las páginas existentes.
3. Añade el enlace en el menú `SIDEBAR` de `src/config.ts`.
4. Ejecuta la compilación y comprueba los enlaces.
5. No publiques capturas con información real de clientes, proveedores, usuarios o infraestructura.

## Repositorios relacionados

- [Cliente web](https://github.com/soker90/arroyo-erp-client)
- [API](https://github.com/soker90/arroyo-erp-api)
- [Modelos](https://github.com/soker90/arroyo-erp-models)

## Estado de precisión

La documentación distingue entre comportamientos descritos por las páginas existentes y secciones que aún necesitan validación visual. Los marcadores **[CAPTURA PENDIENTE]** deben sustituirse por capturas reales, anonimizadas y verificadas contra la versión que se vaya a publicar.
