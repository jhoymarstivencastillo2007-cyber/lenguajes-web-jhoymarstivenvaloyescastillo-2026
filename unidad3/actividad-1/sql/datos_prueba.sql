USE gestion_veterinaria;

INSERT INTO duenos (nombre_completo, correo, telefono)
VALUES
('Juan Perez', 'juan@gmail.com', '3001111111'),
('Maria Gomez', 'maria@gmail.com', '3002222222'),
('Carlos Rodriguez', 'carlos@gmail.com', '3003333333');

INSERT INTO mascotas (nombre, especie, fecha_nacimiento, id_dueno)
VALUES
('Max', 'Perro', '2020-05-10', 1),
('Michi', 'Gato', '2021-03-15', 2),
('Piolin', 'Ave', '2022-08-20', 3);

INSERT INTO veterinarios (nombre_completo, especialidad, licencia_profesional)
VALUES
('Laura Martinez', 'Medicina General', 'VET12345'),
('Andres Torres', 'Cirugia', 'VET67890');

INSERT INTO citas (fecha_hora, costo, diagnostico, id_mascota, id_veterinario)
VALUES
('2026-06-01 09:00:00', 120000.00, 'Chequeo general', 1, 1),
('2026-06-02 10:30:00', 85000.00, 'Vacunacion', 2, 1),
('2026-06-03 14:00:00', 150000.00, 'Revision postoperatoria', 3, 2);
