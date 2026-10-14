---
title: Pagos y cobros
description: Consulta de pagos y su relación con facturas.
layout: ../../layouts/MainLayout.astro
---
# Pagos y cobros

Arroyo dispone de un módulo de pagos y operaciones para consultar, combinar o dividir pagos. El flujo exacto depende del documento y de la versión instalada.

## Consultar un pago

Abre la sección de pagos desde la navegación o desde el documento relacionado. Comprueba tercero, fecha, importe y estado antes de modificar nada.

**[CAPTURA PENDIENTE — listado de pagos]**
Usar datos sintéticos; no mostrar cuentas bancarias, referencias reales ni identificadores fiscales.

## Registrar o aplicar un pago

Cuando la interfaz ofrezca una acción para registrar o aplicar un pago:

1. Identifica el documento al que corresponde.
2. Comprueba el tercero y el importe pendiente.
3. Introduce los datos solicitados.
4. Revisa el resumen antes de confirmar.
5. Vuelve al documento y comprueba que el resultado es el esperado.

**[CAPTURA PENDIENTE — formulario real de pago o aplicación a factura]**

## Combinar o dividir pagos

El backend expone operaciones de combinación y división. Antes de utilizarlas, revisa qué registros se seleccionan y qué importes resultarán. Prueba primero con registros de prueba y conserva la referencia de los documentos originales.

**[CAPTURA PENDIENTE — acción de combinar/dividir, si aparece en la interfaz]**

## Incidencias

Si el importe pendiente no coincide, comprueba si existen pagos parciales, documentos duplicados o facturas que no estén en el estado esperado. No corrijas datos directamente en la base de datos sin un procedimiento de recuperación.
