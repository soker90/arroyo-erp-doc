---
title: Base de datos y copias
description: MongoDB, persistencia y recomendaciones de recuperación.
layout: ../../layouts/MainLayout.astro
---
# Base de datos y copias

Arroyo utiliza MongoDB a través de Mongoose. El paquete arroyo-erp-models exporta modelos para cuentas, clientes, facturas de clientes, albaranes, facturas, notas, pagos, precios, cambios de precio, productos, proveedores y recordatorios.

## Nombre y conexión

El nombre de base de datos predeterminado observado en la configuración de API es arroyoErp. La conexión puede configurarse mediante variables de entorno o una URI completa MONGODB. Consulta [Configuración](./configuracion).

## Copias de seguridad

Define una política antes de cargar datos reales:

1. Decide la frecuencia según cuánto dato puedas permitirte perder.
2. Guarda copias fuera del contenedor y, preferiblemente, fuera del servidor principal.
3. Restringe el acceso a los archivos de copia.
4. Cifra las copias si contienen datos personales o comerciales.
5. Establece cuánto tiempo se conservan y cuándo se eliminan.
6. Prueba periódicamente la restauración en una base de datos aislada.

Una copia no se considera válida hasta que se haya probado su restauración.

## Restauración

Plan general, que debe adaptarse al método de despliegue y a la versión de MongoDB:

1. Detén o bloquea las escrituras en la aplicación.
2. Conserva una copia del estado actual antes de restaurar.
3. Restaura la copia en una instancia aislada.
4. Comprueba que la aplicación puede conectar y que los registros principales están presentes.
5. Valida documentos, relaciones y totales con usuarios autorizados.
6. Cambia al estado restaurado solo después de verificarlo.

No ejecutes comandos destructivos de MongoDB copiando ejemplos sin adaptar las rutas y el nombre de base de datos. La documentación del proyecto no fija aún una política oficial de retención.

**[CAPTURA PENDIENTE — proceso de copia/restauración del entorno real]** No mostrar URI, usuarios, contraseñas, nombres de clientes ni contenido de documentos.
