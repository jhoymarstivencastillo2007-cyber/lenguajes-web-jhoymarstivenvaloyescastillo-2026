CREATE DATABASE IF NOT EXISTS gestion_veterinaria;

USE gestion_veterinaria;

CREATE TABLE duenos (
    id_dueno INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL
);

CREATE TABLE mascotas (
    id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_dueno INT NOT NULL,

    CONSTRAINT fk_mascota_dueno
    FOREIGN KEY (id_dueno)
    REFERENCES duenos(id_dueno)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE veterinarios (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    licencia_profesional VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE citas (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    fecha_hora DATETIME NOT NULL,
    costo DECIMAL(10,2) NOT NULL CHECK (costo >= 0),
    diagnostico TEXT,

    id_mascota INT NOT NULL,
    id_veterinario INT NOT NULL,

    CONSTRAINT fk_cita_mascota
    FOREIGN KEY (id_mascota)
    REFERENCES mascotas(id_mascota)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fk_cita_veterinario
    FOREIGN KEY (id_veterinario)
    REFERENCES veterinarios(id_veterinario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);
