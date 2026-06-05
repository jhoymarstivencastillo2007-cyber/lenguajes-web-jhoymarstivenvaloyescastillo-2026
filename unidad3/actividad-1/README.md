# Actividad Evaluativa 1 - Sistema de Citas Médicas Veterinarias

## Justificación de Tipos de Datos

- INT AUTO_INCREMENT: utilizado para las claves primarias porque genera identificadores únicos automáticamente.
- VARCHAR: utilizado para nombres, correos, teléfonos y especialidades debido a que almacenan texto de longitud variable.
- DATE: utilizado para la fecha de nacimiento de las mascotas.
- DATETIME: utilizado para registrar fecha y hora exacta de las citas.
- DECIMAL(10,2): utilizado para el costo de la consulta porque permite precisión en valores monetarios.
- TEXT: utilizado para diagnósticos y observaciones médicas por permitir textos extensos.

## Integridad Referencial

### ON DELETE RESTRICT

Impide eliminar registros que estén siendo utilizados por otras tablas. Esto evita la pérdida accidental de información histórica.

### ON UPDATE CASCADE

Si cambia el identificador principal de un registro relacionado, las claves foráneas se actualizan automáticamente manteniendo la consistencia de los datos.

## Restricciones Aplicadas

- PRIMARY KEY para identificar cada registro de forma única.
- FOREIGN KEY para establecer relaciones entre tablas.
- NOT NULL para evitar campos obligatorios vacíos.
- UNIQUE para correo electrónico y licencia profesional.
- CHECK (costo >= 0) para evitar costos negativos.
