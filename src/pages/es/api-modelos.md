---
title: API y modelos
description: Resumen técnico de los recursos del backend y los modelos compartidos.
layout: ../../layouts/MainLayout.astro
---
# API y modelos

## API HTTP

La API está implementada con Node.js y Express. El router agrega controladores para cuentas, facturación, clientes, facturas de cliente, panel, albaranes, facturas, notas, pagos, cambios de precio, productos y proveedores.

El endpoint de comprobación de salud implementado es:

- GET /monit/health — devuelve el texto OK cuando el servidor atiende la petición.

El código del proyecto no incluye actualmente una especificación Swagger/OpenAPI mantenida en el README; de hecho, el README la enumera como una tarea pendiente. No se debe tratar esta página como una especificación exhaustiva de endpoints.

## Áreas de controlador

| Área | Recurso aproximado |
|---|---|
| Cuentas | account |
| Clientes | client |
| Facturas de cliente | clientInvoices |
| Albaranes | deliveryorders |
| Facturas | invoices |
| Facturación agrupada | billings |
| Notas | notes |
| Pagos | payments |
| Cambios de precio | pricechange |
| Productos | products |
| Proveedores | providers |
| Panel | dashboard |

Los nombres de recurso se basan en la organización interna del código; las rutas exactas, métodos HTTP, parámetros, validaciones y permisos deben extraerse de los controladores de la versión desplegada.

## Modelos de datos

El paquete arroyo-erp-models se basa en Mongoose y proporciona modelos para cuentas, facturación, clientes, facturas de clientes, albaranes, facturas, notas, pagos, precios, cambios de precio, productos, proveedores y recordatorios.

## Enlaces para desarrollo

- [Código de la API](https://github.com/soker90/arroyo-erp-api)
- [Código de modelos](https://github.com/soker90/arroyo-erp-models)
- [Código del cliente](https://github.com/soker90/arroyo-erp-client)

**[DIAGRAMA PENDIENTE — recursos y relaciones de datos]** Generar a partir de esquemas Mongoose verificados; no inferir cardinalidades solo a partir de los nombres.
