---
title: Capturas para la documentación
description: Protocolo para obtener capturas reales y publicarlas sin datos sensibles.
layout: ../../layouts/MainLayout.astro
---
# Capturas para la documentación

Las capturas deben proceder de una instancia real de Arroyo, preferiblemente un entorno de demostración con datos sintéticos. No deben reconstruirse como imágenes ficticias ni editarse de forma que cambien el significado de la interfaz.

## Cómo preparar la captura

1. Usa una instancia de pruebas.
2. Crea registros con nombres, direcciones, números e importes inventados.
3. Cierra notificaciones personales y otras ventanas que no formen parte de la aplicación.
4. Ajusta el navegador para que se lean los textos y no aparezcan datos fuera del área necesaria.
5. Captura la pantalla completa de la aplicación o la sección relevante.
6. Envía la imagen original para revisar qué debe anonimizarse.

## Datos que siempre deben revisarse

- Nombre y razón social.
- CIF/NIF y otros identificadores.
- Direcciones, teléfonos y correos.
- IBAN, cuentas bancarias y referencias de pago.
- Tokens, cookies, URL privadas, nombres de host e IP.
- Nombres de usuario y avatares personales.
- Importes reales, referencias de facturas y notas que puedan identificar a alguien.

**No basta con difuminar un dato si sigue siendo legible.** La opción preferible es sustituir los datos por registros ficticios antes de capturar. Si hay que anonimizar una imagen ya tomada, la edición debe ocultar completamente la información, conservando intactos los controles y textos funcionales.

## Formato y nombres

Preferir PNG o WebP con resolución suficiente para leer los textos. Usa nombres descriptivos y estables, por ejemplo:

- usuarios/inicio-sesion.png
- usuario/panel-principal.png
- usuario/clientes-listado.png
- usuario/proveedores-ficha.png
- usuario/albaran-edicion.png
- tecnico/arquitectura-despliegue.png

Evita incluir nombres de personas o empresas reales en el nombre del archivo.

## Marcadores de captura pendientes

En las páginas se usa el formato **[CAPTURA PENDIENTE — descripción]**. Cada marcador indica qué pantalla hace falta y qué datos deben anonimizarse. Cuando se incorpore la captura final:

1. Comprueba que corresponde a la versión actual.
2. Anonimiza todos los datos personales y comerciales.
3. Guarda la imagen en public/assets o en una subcarpeta organizada.
4. Sustituye el marcador por una imagen con texto alternativo descriptivo.
5. Revisa que la imagen no permita recuperar datos ocultos.
