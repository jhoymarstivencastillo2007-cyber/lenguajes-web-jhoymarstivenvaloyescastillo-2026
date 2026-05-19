"use strict";

/**
 * Sistema de seguridad basado en closures.
 * La clave permanece encapsulada y no puede
 * ser accedida directamente desde el exterior.
 */
const crearSistemaSeguridad = (claveInicial) => {
    let clavePrivada = claveInicial;

    return Object.freeze({
        validarClave: (claveIngresada) =>
            claveIngresada === clavePrivada,

        actualizarClave: (nuevaClave) => {
            clavePrivada = nuevaClave;
            return "Clave actualizada correctamente";
        }
    });
};

// Inicialización del sistema
const sistemaSeguridad = crearSistemaSeguridad("admin123");

// Pruebas del sistema
console.log(sistemaSeguridad.validarClave("admin123"));

console.log(
    sistemaSeguridad.actualizarClave("biblioteca2026")
);

console.log(
    sistemaSeguridad.validarClave("biblioteca2026")
);
