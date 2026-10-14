---
title: Primeros pasos
description: Acceso inicial, navegación y comprobaciones básicas para empezar a utilizar Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---

# Primeros pasos

Esta guía te ayuda a entrar en Arroyo y orientarte en sus módulos. Los nombres de algunas opciones pueden variar entre versiones; si no ves una acción descrita, comprueba la versión instalada o consulta a quien la administra.

## 1. Acceder

1. Abre en el navegador la dirección que te haya facilitado la persona administradora.
2. En la pantalla **Login**, introduce las credenciales que te hayan proporcionado.
3. Envía el formulario y espera a que cargue la aplicación.

No hay que asumir que existe un registro público. Si no tienes cuenta o has perdido el acceso, contacta con la persona administradora. No compartas tu contraseña, cookies ni tokens.

**[CAPTURA PENDIENTE — pantalla Login]**

- Mostrar los campos y el botón de acceso tal como aparecen en la versión actual.
- No mostrar credenciales, direcciones privadas ni información del navegador que identifique a una persona.

## 2. Entender la navegación

Tras iniciar sesión, la aplicación entra en el área de trabajo. En el código actual, la ruta inicial del área de aplicación redirige al informe de inicio. Las áreas principales identificadas en la interfaz son:

| Área | Para qué sirve |
|---|---|
| Informes | Panel inicial, informes de productos, facturación, albaranes y pagarés, y avisos de precios incorrectos |
| Proveedores | Consultar proveedores y acceder a sus fichas, albaranes, gastos y facturas |
| Clientes | Consultar clientes, productos de cliente y facturas de venta |
| Pagos | Revisar y gestionar pagos pendientes |
| Precios | Consultar cambios de precio |
| Notas | Consultar y mantener notas |
| Gastos | Acceder a la gestión de gastos y facturas asociadas |

La disponibilidad y el contenido de cada pantalla dependen de la versión desplegada y de los datos existentes.

**[CAPTURA PENDIENTE — navegación completa]**

Mostrar el menú que aparece en la instalación actual. Sustituir nombres, importes, indicadores y datos de actividad por valores sintéticos.

## 3. Flujo recomendado para empezar

1. Familiarízate con el panel de inicio antes de modificar datos.
2. Abre un cliente o proveedor existente y reconoce su ficha.
3. Consulta productos y precios antes de registrar documentos.
4. Si vas a crear un albarán o una factura, comprueba primero el tercero, la fecha, las líneas y los importes.
5. Después de guardar, vuelve a abrir el documento y confirma que los cambios se han guardado correctamente.

Para practicar, utiliza un entorno de pruebas y datos ficticios. No crees facturas ni confirmes pagos reales para aprender a usar la interfaz.

## 4. Si algo no funciona

- **No puedes entrar:** confirma que usas la dirección y la cuenta correctas con la persona administradora.
- **La pantalla queda cargando o no muestra datos:** anota la hora, la pantalla y los pasos que has seguido; consulta [Diagnóstico de problemas](./diagnostico).
- **No encuentras una opción:** revisa si estás en el módulo correcto y si la versión de tu instalación coincide con la documentación.
- **Los importes no coinciden:** no corrijas datos directamente. Comprueba los documentos relacionados y solicita ayuda antes de confirmar operaciones.

## 5. Antes de guardar o confirmar

Comprueba siempre:

- Tercero correcto (cliente o proveedor).
- Fecha y número del documento.
- Líneas, cantidades, precios y totales.
- Documentos asociados y pagos relacionados.
- Estado final que muestra la aplicación.

**[CAPTURA PENDIENTE — ejemplo de revisión antes de guardar]** Usar un documento ficticio y mostrar dónde se revisan los datos sin incluir información real.
