---
title: Facturas recibidas
description: Consulta de facturas y gastos recibidos.
layout: ../../layouts/MainLayout.astro
---
# Facturas recibidas

El backend de Arroyo distingue facturas, facturas de gasto, pagos y facturación agrupada. Usa esta sección como orientación y confirma el flujo exacto en la interfaz de tu instalación.

## Consultar facturas

Abre el módulo de facturas y localiza el documento con los criterios disponibles. Revisa proveedor, fecha, número, importes y estado.

**[CAPTURA PENDIENTE — listado de facturas recibidas]**

## Registrar una factura o gasto

1. Selecciona la acción de alta que ofrezca tu versión.
2. Introduce el proveedor y los datos del documento.
3. Añade conceptos o líneas si el formulario lo solicita.
4. Comprueba fecha, base, impuestos y total.
5. Guarda y vuelve a consultar el documento.

**[CAPTURA PENDIENTE — formulario real de factura recibida o gasto]**

No se deben inferir reglas fiscales ni campos obligatorios solo por el nombre del módulo. Contrasta los valores con el documento original y con las reglas contables de tu organización.

## Relación con albaranes

Si la factura agrupa albaranes, comprueba que los documentos y sus líneas son correctos antes de confirmar. Consulta [Albaranes](./albaranes).

## Correcciones

La API dispone de operaciones de edición, confirmación y borrado para determinados documentos. No todos los cambios tienen por qué estar permitidos en cualquier estado. Si una operación falla, conserva el mensaje de error y consulta al administrador antes de manipular la base de datos.
