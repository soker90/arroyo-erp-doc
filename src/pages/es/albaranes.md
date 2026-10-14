---
title: Albaranes
description: Consulta de albaranes, líneas y relaciones con facturas.
layout: ../../layouts/MainLayout.astro
---
# Albaranes

Arroyo incluye operaciones para crear y actualizar albaranes, gestionar sus líneas de producto y relacionarlos con facturas.

## Consultar albaranes

Abre el módulo de albaranes o la sección correspondiente de la ficha de proveedor. Revisa fecha, tercero, líneas y totales.

**[CAPTURA PENDIENTE — listado general de albaranes]**

## Crear un albarán de proveedor

La interfaz de proveedores documentada sigue este orden:

1. Abre la ficha del proveedor.
2. Pulsa **Nuevo albarán**.
3. Introduce la fecha.
4. Añade los productos y revisa las cantidades.
5. Comprueba precios y totales.
6. Guarda y vuelve a abrir el documento para verificarlo.

**[CAPTURA PENDIENTE — fecha, selección de productos y líneas]**
Usar proveedor y productos de prueba; ocultar identificadores internos.

## Editar líneas

Si necesitas cambiar un producto o una cantidad, revisa la línea antes de guardar. La API contiene operaciones para añadir, editar y eliminar productos de albarán.

**[CAPTURA PENDIENTE — edición de líneas de albarán]**

## Relación con facturas

La ficha del proveedor permite distinguir albaranes que no están incluidos en una factura de los que ya están asociados. La acción documentada es **Mostrar en factura**.

No presupongas que una asociación es reversible ni que no afecta a los totales. Comprueba las opciones y confirmaciones de tu versión antes de continuar.

**[CAPTURA PENDIENTE — albaranes incluidos y no incluidos en factura]**
