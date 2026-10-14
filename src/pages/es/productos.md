---
title: Productos y precios
description: Diferencias entre productos de proveedor y productos de cliente, y cómo revisar precios.
layout: ../../layouts/MainLayout.astro
---
# Productos y precios

En la interfaz existen áreas de productos vinculadas a proveedores y un área de **Productos para clientes**. No deben tratarse como si fueran necesariamente el mismo catálogo: revisa desde qué módulo estás trabajando antes de crear o modificar un artículo.

## Productos para clientes

La pantalla **Productos para clientes** muestra una tabla de productos y acciones de alta, edición y eliminación. El formulario de alta utiliza los campos **Código**, **Nombre** y **Precio**.

1. Abre el área de clientes y selecciona **Productos**.
2. Pulsa la acción de crear producto.
3. Introduce código, nombre y precio.
4. Revisa los valores y guarda.
5. Comprueba el nuevo registro en la tabla.

**[CAPTURA PENDIENTE — listado Productos para clientes]**

Mostrar encabezados y acciones reales. Usa códigos y precios ficticios.

**[CAPTURA PENDIENTE — formulario Crear producto]**

Mostrar los campos visibles en la versión actual; no incluir códigos o precios reales.

## Productos de proveedor

Los productos de proveedor se consultan desde la ficha del proveedor y se utilizan en flujos de albaranes. Para revisar o modificar un producto, entra en el proveedor correspondiente y abre el producto desde esa sección. Los campos disponibles pueden diferir del formulario de productos para clientes.

**[CAPTURA PENDIENTE — productos en ficha de proveedor]**

Confirmar las columnas y acciones visibles antes de publicar la imagen.

## Revisar precios y cambios

La interfaz tiene un área **Precios** para cambios de precio y un informe de **Errores de precios**.

- Antes de modificar un precio, comprueba el producto, proveedor o cliente al que pertenece y el valor actual.
- Después del cambio, vuelve a abrir la ficha y comprueba el resultado.
- No des por hecho que cambiar el precio actualiza documentos históricos: verifica el comportamiento con datos de prueba.
- En el informe de errores de precios, revisa cada registro antes de ejecutar una corrección masiva.

**[CAPTURA PENDIENTE — área Precios y errores de precios]**

Usar datos de prueba y ocultar identificadores internos.

## Eliminar un producto o un precio

La API dispone de operaciones para eliminar productos y precios, pero las reglas pueden impedir borrar elementos que ya estén relacionados con documentos. Lee la confirmación y comprueba el alcance de la operación antes de aceptar. Si tienes dudas, consulta a la persona administradora.

## Relación con albaranes

Los productos pueden aparecer como líneas de un albarán. Consulta [Albaranes](./albaranes) para comprobar cantidades, precios y totales antes de guardar o asociar documentos.
