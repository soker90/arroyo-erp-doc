---
title: API y modelos
description: Recursos HTTP verificados en el código y modelos compartidos de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# API y modelos

## API HTTP

La API está implementada con Node.js y Express. Los controladores se registran desde `api/controllers/v0`; las rutas descritas abajo se han contrastado con los módulos de rutas de la rama principal de [arroyo-erp-api](https://github.com/soker90/arroyo-erp-api).

El endpoint de comprobación de salud implementado es:

- `GET /monit/health` — devuelve `OK` cuando el servidor atiende la petición.

No hay una especificación Swagger/OpenAPI exhaustiva mantenida en el repositorio. Esta tabla sirve como referencia inicial y no sustituye la lectura del código de la versión desplegada.

## Convenciones y autenticación

- Salvo el inicio de sesión, las rutas enumeradas aquí incluyen el middleware de autenticación de la API.
- El middleware espera la cabecera HTTP `Authorization: Bearer <token>`. El token se emite en la cabecera de respuesta `Token` al iniciar sesión y también puede renovarse en respuestas de rutas autenticadas.
- `GET /account/me` responde sin contenido cuando el token se acepta; no es una ruta de diagnóstico de MongoDB.
- La creación de cuentas (`POST /account/createAccount`) está protegida por autenticación. El procedimiento para crear la primera cuenta debe resolverse antes del despliegue y no debe suponerse que existe un alta pública.
- Los métodos y rutas se muestran tal como se declaran en los módulos de rutas. La URL pública completa puede depender de cómo se publique o proxifique el servidor.
- `:id`, `:index`, `:deliveryOrder` y otros segmentos con dos puntos son parámetros de ruta, no texto literal.
- Los cuerpos JSON, parámetros de consulta, códigos de error y reglas de negocio deben comprobarse en el controlador y validador correspondientes antes de integrar un cliente externo.

## Rutas verificadas

### Cuenta

| Método | Ruta | Uso |
|---|---|---|
| POST | `/account/login` | Iniciar sesión y obtener el token de autenticación |
| GET | `/account/me` | Comprobar la sesión actual |
| POST | `/account/createAccount` | Crear una cuenta desde una sesión autenticada |

### Clientes y proveedores

| Método | Ruta | Uso |
|---|---|---|
| GET | `/clients/` | Consultar clientes |
| POST | `/clients/` | Crear cliente |
| GET | `/clients/:id` | Consultar un cliente |
| PUT | `/clients/:id` | Editar cliente |
| GET | `/providers/` | Consultar proveedores |
| POST | `/providers/` | Crear proveedor |
| GET | `/providers/:id` | Consultar proveedor |
| PUT | `/providers/:id` | Editar proveedor |

### Productos y precios

| Método | Ruta | Uso |
|---|---|---|
| GET | `/products/` | Consultar productos |
| POST | `/products/` | Crear producto |
| PUT | `/products/:id` | Editar producto |
| GET | `/products/:id` | Consultar producto |
| DELETE | `/products/:id` | Eliminar producto, sujeto a las reglas de negocio |
| POST | `/products/clients/` | Crear productos asociados a clientes |
| GET | `/products/wrong` | Consultar precios marcados como incorrectos |
| PATCH | `/products/wrong` | Corregir precios marcados |
| GET | `/products/last-delivery-order/:id` | Consultar el último albarán de un producto |
| GET | `/products/export-provider/:id` | Exportar productos y precios de un proveedor |
| DELETE | `/products/:id/prices/:priceId` | Eliminar un precio de un producto |

### Albaranes de proveedor

| Método | Ruta | Uso |
|---|---|---|
| GET | `/deliveryorders/` | Consultar albaranes |
| POST | `/deliveryorders/` | Crear albarán |
| GET | `/deliveryorders/:id` | Consultar albarán |
| PATCH | `/deliveryorders/:id` | Editar albarán |
| DELETE | `/deliveryorders/:id` | Eliminar albarán si las reglas lo permiten |
| POST | `/deliveryorders/:id/product` | Añadir producto al albarán |
| PUT | `/deliveryorders/:id/product/:index` | Actualizar una línea de producto |
| DELETE | `/deliveryorders/:id/product/:index` | Eliminar una línea de producto |
| GET | `/deliveryorders/countfree/:year` | Consultar el recuento de albaranes libres por año |

### Facturas recibidas y pagos a proveedores

| Método | Ruta | Uso |
|---|---|---|
| GET | `/invoices/` | Consultar facturas |
| POST | `/invoices/` | Crear factura |
| GET | `/invoices/:id` | Consultar factura |
| PATCH | `/invoices/:id` | Editar factura |
| DELETE | `/invoices/:id` | Eliminar factura si las reglas lo permiten |
| PATCH | `/invoices/:id/confirm` | Confirmar factura |
| POST | `/invoices/expense/` | Crear factura de gasto |
| GET | `/invoices/short` | Obtener un listado reducido |
| GET | `/invoices/export` | Exportar facturas |
| GET | `/invoices/totals` | Consultar totales |
| GET | `/invoices/cheques` | Consultar facturas relacionadas con cheques |
| PATCH | `/invoices/swap/:a/:b` | Intercambiar posiciones/orden de facturas |

### Facturas de cliente, cobros y facturación

El recurso de facturas de cliente utiliza el prefijo `/client/invoices`.

| Método | Ruta | Uso |
|---|---|---|
| GET | `/client/invoices/` | Consultar facturas de cliente |
| POST | `/client/invoices/` | Crear factura de cliente |
| GET | `/client/invoices/:id` | Consultar factura de cliente |
| PATCH | `/client/invoices/:id` | Editar factura de cliente |
| DELETE | `/client/invoices/:id` | Eliminar factura de cliente si las reglas lo permiten |
| GET | `/client/invoices/short` | Listado reducido de facturas |
| PATCH | `/client/invoices/:id/confirm` | Confirmar factura de cliente |
| POST | `/client/invoices/:id/deliveryOrder` | Asociar un albarán a una factura |
| PATCH | `/client/invoices/:id/deliveryOrder/:deliveryOrder` | Editar la asociación de albarán |
| DELETE | `/client/invoices/:id/deliveryOrder/:deliveryOrder` | Quitar un albarán de la factura |
| POST | `/client/invoices/:id/deliveryOrder/:deliveryOrder/product` | Añadir producto a una línea de albarán de la factura |
| PATCH | `/client/invoices/:id/deliveryOrder/:deliveryOrder/product/:product` | Editar producto de la factura |
| DELETE | `/client/invoices/:id/deliveryOrder/:deliveryOrder/product/:product` | Quitar producto de la factura |
| GET | `/client/invoices/billing` | Consultar facturación |
| GET | `/client/invoices/billing/export` | Exportar facturación |
| PATCH | `/client/invoices/payments/:id` | Aplicar un pago |
| GET | `/client/invoices/export` | Exportar facturas de cliente |

### Pagos, facturación agrupada y cambios de precio

| Método | Ruta | Uso |
|---|---|---|
| GET | `/payments/` | Consultar pagos pendientes |
| PATCH | `/payments/:id/confirm` | Confirmar pago |
| POST | `/payments/merge` | Agrupar pagos |
| PUT | `/payments/divide/:id` | Dividir un pago agrupado |
| GET | `/payments/export` | Exportar pagos |
| GET | `/billings/` | Consultar facturación agrupada |
| GET | `/billings/export` | Exportar facturación agrupada |
| POST | `/billings/recalc` | Recalcular facturación |
| GET | `/pricechanges/` | Consultar cambios de precio |
| GET | `/pricechanges/unread/count` | Contar cambios sin leer |
| PATCH | `/pricechanges/:id` | Marcar/cambiar estado de lectura |
| DELETE | `/pricechanges/:id` | Eliminar cambio de precio |
| POST | `/pricechanges/deletemany` | Eliminar varios cambios de precio |

### Panel y notas

| Método | Ruta | Uso |
|---|---|---|
| GET | `/dashboard/` | Obtener datos del panel |
| POST | `/dashboard/createReminder` | Crear recordatorio |
| DELETE | `/dashboard/deleteReminder/:id` | Eliminar recordatorio |
| GET | `/notes/` | Consultar notas |
| POST | `/notes/` | Crear nota |
| GET | `/notes/:id` | Consultar nota |
| PUT | `/notes/:id` | Editar nota |
| DELETE | `/notes/:id` | Eliminar nota |

## Modelos de datos

El paquete [arroyo-erp-models](https://github.com/soker90/arroyo-erp-models) utiliza Mongoose y contiene modelos para cuentas, facturación, clientes, facturas de cliente, albaranes, facturas, notas, pagos, precios, cambios de precio, productos, proveedores y recordatorios.

La API delega parte de la validación y las reglas de negocio en servicios y validadores; los modelos por sí solos no describen todo el comportamiento de una operación.

## Enlaces para desarrollo

- [Código de la API](https://github.com/soker90/arroyo-erp-api)
- [Código de modelos](https://github.com/soker90/arroyo-erp-models)
- [Código del cliente](https://github.com/soker90/arroyo-erp-client)

**[DIAGRAMA PENDIENTE — recursos y relaciones de datos]** Generar a partir de esquemas Mongoose verificados; no inferir cardinalidades solo a partir de los nombres.
