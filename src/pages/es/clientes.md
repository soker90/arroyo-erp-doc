---
title: Clientes
description: Consultar, crear y mantener fichas de clientes en Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Clientes

El módulo **Clientes** muestra un listado con las columnas **Nombre**, **Facturas** y **Fac. pendientes**. Desde una fila puedes abrir la ficha del cliente; la interfaz también incluye una acción **Nuevo Cliente**.

## Consultar un cliente

1. Abre **Clientes** desde la navegación.
2. Localiza el registro por el nombre que aparece en la tabla.
3. Selecciona la fila o la acción de edición/visualización para abrir su ficha.
4. Comprueba la información del cliente y los documentos relacionados.

**[CAPTURA PENDIENTE — listado de clientes]**

Mostrar las columnas reales y la acción de alta. Sustituir nombres, identificadores fiscales, direcciones, teléfonos, correos e importes por datos ficticios.

## Crear un cliente

1. En el listado, pulsa **Nuevo Cliente**.
2. Completa el formulario **Crear cliente**.
3. Revisa los datos introducidos.
4. Envía el formulario para guardar.
5. Comprueba que el cliente aparece en el listado y abre su ficha.

La estructura del formulario se define en un componente compartido del cliente web. Los campos obligatorios y sus reglas deben comprobarse en la versión que estés utilizando; no completes datos fiscales inventados en una instalación real.

**[CAPTURA PENDIENTE — formulario Crear cliente]**

Mostrar etiquetas y controles del formulario, pero solo con una empresa de ejemplo y datos sintéticos.

## Abrir y revisar la ficha

La fila permite acceder a una ruta de ficha de cliente. Desde las áreas relacionadas de la aplicación se puede acceder a facturas y productos de cliente.

Antes de crear documentos, comprueba que has abierto el cliente correcto. No uses únicamente el nombre como criterio si existen registros con nombres parecidos.

**[CAPTURA PENDIENTE — ficha de cliente]**

Mostrar las secciones reales disponibles y facturas ficticias; ocultar identificadores internos.

## Facturas de venta

Para consultar o trabajar con facturas de clientes, revisa [Facturas de venta](./facturas-venta) y [Pagos y cobros](./pagos-cobros). Antes de confirmar una factura o aplicar un cobro, revisa el cliente, la fecha, las líneas, el total y el estado del documento.

## Edición y eliminación

Utiliza las acciones que muestre la ficha en tu versión. Antes de eliminar un cliente, comprueba si tiene facturas u otros documentos relacionados. Si la aplicación bloquea la operación o muestra una advertencia, no intentes sortearla modificando la base de datos: consulta a la persona administradora.

**[CAPTURA PENDIENTE — edición y mensaje de confirmación, si existe]**
