---
title: Proveedores
description: Consultar y gestionar proveedores, albaranes y datos asociados.
layout: ../../layouts/MainLayout.astro
---

# Proveedores

El módulo de proveedores permite consultar la ficha de cada proveedor y acceder a documentos asociados. La interfaz existente muestra un listado, datos de contacto, anotaciones, albaranes y referencias a facturación.

![Listado de proveedores](/assets/02-proveedores.png)

**[CAPTURA PENDIENTE — listado de proveedores actual]**

- **Qué mostrar:** listado, búsqueda o filtros si están disponibles y acción para crear un proveedor.
- **Anonimización:** nombres, CIF/NIF, teléfonos, direcciones, correos, notas e importes deben ser ficticios.

## Consultar proveedores

Abre el módulo **Proveedores** para ver los registros disponibles. Selecciona uno para entrar en su ficha. El listado existente muestra el nombre y anotaciones guardadas en el proveedor.

## Crear un proveedor

1. Pulsa **Nuevo proveedor**.
2. Completa los campos que solicite el formulario.
3. Revisa los datos y confirma la creación.
4. Comprueba que se abre la ficha del nuevo proveedor.

![Formulario de nuevo proveedor](/assets/02-nuevo-proveedor.png)

**[CAPTURA PENDIENTE — formulario actual de alta]**

- **Qué mostrar:** todos los campos, indicaciones de obligatoriedad y botones de cancelar/guardar.
- **Anonimización:** usar una empresa ficticia y datos de contacto inventados.

La lista exacta de campos y sus validaciones debe confirmarse en la interfaz de la versión desplegada; no introduzcas datos fiscales reales en las capturas de documentación.

## Consultar la ficha

En la ficha puedes consultar información del proveedor y sus documentos relacionados.

![Ficha de proveedor](/assets/proveedores/ver-proveedor.png)

Al pulsar **Mostrar información**, la interfaz documentada muestra información ampliada y datos de facturación del año actual.

![Información ampliada del proveedor](/assets/proveedores/informacion-proveedor.png)

**[CAPTURA PENDIENTE — ficha e información ampliada actuales]**

- **Qué mostrar:** datos de contacto y resumen de facturación.
- **Anonimización:** sustituir identidad, direcciones, identificadores fiscales y cifras por datos ficticios.

## Editar los datos de contacto

En la ficha, el icono de edición de la tarjeta de datos de contacto abre un formulario. Modifica únicamente los campos necesarios y guarda los cambios. Vuelve a la ficha para verificar el resultado.

![Edición de proveedor](/assets/proveedores/editar-proveedor.png)

**[CAPTURA PENDIENTE — formulario de edición actual]**

## Albaranes del proveedor

La pestaña de albaranes permite consultar los documentos asociados. La interfaz existente separa inicialmente los albaranes que no están incluidos en una factura; la acción **Mostrar en factura** permite mostrar también los que ya están asociados a facturas.

![Albaranes del proveedor](/assets/proveedores/albaranes.png)

### Crear un albarán

1. Abre la ficha del proveedor.
2. En la sección de albaranes, pulsa **Nuevo albarán**.
3. Introduce primero la fecha del albarán.
4. Añade los productos que correspondan.
5. Revisa las líneas y los totales antes de guardar.

![Detalle de albarán](/assets/proveedores/ver-albaran.png)

**[CAPTURA PENDIENTE — creación de albarán paso a paso]**

- **Qué mostrar:** fecha, selector de productos, cantidades, precios y totales, si aparecen en la versión actual.
- **Anonimización:** usar proveedor y productos de prueba; ocultar identificadores internos.

## Facturas y productos

La ficha de proveedor se relaciona con albaranes, facturas y productos. La estructura exacta y las acciones disponibles deben verificarse con una instancia actualizada antes de completar esta sección. Consulta también [Productos y precios](./productos) y [Facturas recibidas](./facturas-recibidas).

## Buenas prácticas

- Evita duplicar proveedores; busca primero por nombre u otro dato disponible.
- Mantén los datos de contacto actualizados.
- Revisa la fecha y las líneas de un albarán antes de confirmarlo.
- No presupongas que borrar un documento es reversible. Confirma primero el efecto de la operación.
