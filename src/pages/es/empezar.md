---
title: Primeros pasos
description: Acceso inicial y orientación para empezar a utilizar Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---

# Primeros pasos

Esta guía explica cómo acceder a una instalación de Arroyo y reconocer los elementos iniciales. Los nombres y la disponibilidad de algunas opciones pueden variar según la versión desplegada.

## 1. Acceder a la aplicación

Abre en el navegador la dirección web que te haya facilitado quien administra Arroyo. La aplicación muestra una pantalla de inicio de sesión.

![Pantalla de inicio de sesión de Arroyo ERP](/assets/01-login.png)

Introduce tu usuario y contraseña y envía el formulario. Si no tienes credenciales, solicítalas al administrador: el registro público de cuentas no debe darse por disponible, ya que en el backend actual la creación de usuarios no se ofrece como un flujo público normal.

**[CAPTURA PENDIENTE — inicio de sesión actual]**

- **Qué mostrar:** formulario completo, incluyendo los nombres de los campos y el botón de acceso.
- **Anonimización:** no mostrar contraseñas, correos personales, URL internas ni tokens.
- **Formato recomendado:** PNG o WebP, resolución suficiente para leer los textos.

### Si no puedes iniciar sesión

1. Comprueba que la dirección corresponde a la instalación correcta.
2. Verifica el usuario y la contraseña con el administrador.
3. Comprueba si la aplicación muestra un mensaje de error.
4. Si persiste, envía al administrador el texto del error y la hora aproximada. No envíes tu contraseña ni cookies de sesión.

## 2. Reconocer el panel principal

Tras iniciar sesión se muestra el panel principal. En él se agrupa información de resumen y una zona de recordatorios.

![Panel principal de Arroyo ERP](/assets/01-dashboard.png)

**[CAPTURA PENDIENTE — panel principal actual]**

- **Qué mostrar:** navegación, tarjetas de resumen y zona de recordatorios.
- **Anonimización:** sustituir nombres de clientes/proveedores, importes reales y cualquier dato de actividad por datos ficticios.
- **Comprobación:** confirmar que las tarjetas siguen apareciendo en esta versión.

## 3. Navegar por los módulos

Utiliza la navegación de la aplicación para abrir el módulo correspondiente. Entre los módulos identificados en el código se encuentran clientes, proveedores, productos, albaranes, facturas, pagos e informes. No todas las instalaciones tienen necesariamente los mismos permisos o datos.

## 4. Recomendaciones para empezar

1. Pide al administrador que confirme qué datos puedes consultar y modificar.
2. Familiarízate primero con registros de prueba.
3. Antes de borrar o confirmar documentos, revisa el mensaje de confirmación y el efecto de la operación.
4. No utilices datos reales en una instalación de pruebas sin una política de protección y borrado definida.

Siguiente paso: [Panel principal](./panel).
