---
title: Preguntas frecuentes
description: Respuestas rápidas a dudas habituales de usuarios y administradores de Arroyo ERP.
layout: ../../layouts/MainLayout.astro
---
# Preguntas frecuentes

## ¿Cómo consigo una cuenta?

Solicita acceso a la persona que administra la instancia. No presupongas que existe un registro público habilitado. La API actual protege la creación de cuentas con autenticación, así que el procedimiento para crear la primera cuenta debe resolverlo quien despliega el sistema.

## He olvidado la contraseña, ¿cómo la recupero?

Contacta con quien administre la instalación. No compartas tu contraseña por correo, chat ni incidencias. La documentación actual no confirma un flujo público de recuperación automática.

## No puedo iniciar sesión

Comprueba que utilizas la dirección correcta y las credenciales que te proporcionaron. Si aparece un error, envía a la persona administradora el mensaje exacto y la hora aproximada, nunca la contraseña o el token de sesión.

## ¿Por qué no veo un módulo o una acción?

Puede depender de la versión desplegada, del estado del documento o de la configuración de la instancia. Comprueba primero que estás en el módulo correcto. Si la acción no aparece, consulta a la persona administradora en vez de asumir que el documento está dañado.

## ¿Por qué no puedo editar un albarán o una factura?

Algunas operaciones dependen del estado del documento y de sus relaciones con otros documentos. Revisa si está confirmado, numerado o asociado a una factura. No intentes desbloquearlo editando directamente la base de datos.

## Una cifra no coincide con una factura

Abre el documento de origen y comprueba periodo, estado, líneas y pagos relacionados. No tomes las tarjetas de resumen como sustituto de los documentos originales. Si sigue sin cuadrar, registra qué documentos comparaste y pide ayuda antes de modificar datos.

## ¿Puedo borrar una factura o un albarán?

Antes de borrar, revisa sus relaciones con otros documentos y lee la confirmación. La API aplica restricciones para algunos documentos. Si no conoces las consecuencias o el mensaje no es claro, cancela y consulta a la persona administradora.

## No funciona una exportación

Comprueba el periodo y los filtros, espera a que termine la descarga y abre el archivo para verificarlo. Si falla, anota la pantalla, el mensaje y la hora aproximada. No adjuntes exportaciones con datos reales a una incidencia pública.

## ¿Cómo notifico un error?

Incluye los pasos para reproducirlo, la pantalla en la que ocurre, el mensaje exacto, la hora aproximada y la versión o commit desplegado si lo conoces. Elimina credenciales, cookies, tokens y datos personales de capturas o logs.

## ¿Cómo puedo contribuir?

Consulta los repositorios públicos de [cliente](https://github.com/soker90/arroyo-erp-client), [API](https://github.com/soker90/arroyo-erp-api), [modelos](https://github.com/soker90/arroyo-erp-models) y [documentación](https://github.com/soker90/arroyo-erp-doc).
