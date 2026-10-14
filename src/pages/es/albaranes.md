---
title: Albaranes
description: Consultar albaranes, editar líneas y entender su asociación con facturas.
layout: ../../layouts/MainLayout.astro
---
# Albaranes

Los albaranes se gestionan principalmente desde la ficha del proveedor. El flujo de la interfaz diferencia los albaranes que todavía no están incluidos en una factura de los que ya están asociados.

## Abrir un albarán

1. Abre **Proveedores**.
2. Selecciona el proveedor correspondiente.
3. Entra en su área general y localiza la sección de albaranes.
4. Abre el albarán que quieras consultar.

**[CAPTURA PENDIENTE — ficha general de proveedor y sección de albaranes]**

Mostrar solo datos ficticios y ocultar identificadores internos.

## Crear o completar un albarán

El detalle de un albarán muestra los datos del proveedor, la fecha, las líneas de producto y los totales. Las acciones disponibles dependen del estado del documento.

1. Comprueba que el proveedor es correcto.
2. Introduce o revisa la fecha.
3. Añade los productos disponibles para ese proveedor.
4. Revisa cantidades, precios, posibles datos adicionales de la línea y totales.
5. Guarda los cambios y vuelve a abrir el albarán para comprobarlos.

**[CAPTURA PENDIENTE — detalle de albarán con líneas y totales]**

Usar un proveedor y productos ficticios.

## Editar o eliminar líneas

El detalle permite añadir productos y, cuando el estado lo permite, editar o eliminar líneas. La interfaz trata los albaranes con número de orden como documentos de solo lectura para ciertas operaciones.

Antes de modificar una línea:

- Comprueba el producto y la cantidad.
- Revisa cómo afecta al total.
- Si no aparecen las acciones de edición, no presupongas que se trata de un error: el documento puede estar bloqueado por su estado.

**[CAPTURA PENDIENTE — acciones disponibles en una línea de albarán]**

## Asociar albaranes a una factura

En la ficha general del proveedor, la sección de albaranes permite ver los documentos no incluidos en factura. El botón **Mostrar en factura** alterna la visualización de los albaranes que ya están incluidos.

1. Comprueba el proveedor y selecciona únicamente los albaranes correctos.
2. Revisa el resumen de selección y los importes.
3. Sigue el flujo de facturación que muestre la interfaz.
4. Después, vuelve a revisar qué albaranes figuran como incluidos.

No asumas que una asociación se puede deshacer libremente ni que no cambia totales. Antes de confirmar una operación, lee las advertencias de la aplicación.

**[CAPTURA PENDIENTE — secciones de albaranes libres y en factura]**

## Si el albarán no se puede modificar

Comprueba su estado, si tiene número de orden y si está asociado a una factura. Si no sabes cómo revertir la operación, detente y consulta a la persona administradora en vez de modificar MongoDB directamente.
