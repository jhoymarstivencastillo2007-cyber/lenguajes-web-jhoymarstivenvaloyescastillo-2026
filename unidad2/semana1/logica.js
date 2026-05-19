"use strict";

const libros = [
    { titulo: "El Aleph", autor: "Borges", ventas: 500, stock: 10 },
    { titulo: "Rayuela", autor: "Cortázar", ventas: 1200, stock: 2 },
    { titulo: "Ficciones", autor: "Borges", ventas: 850, stock: 5 },
    { titulo: "100 años de soledad", autor: "García Márquez", ventas: 3000, stock: 0 },
];

/**
 * Obtiene títulos con ventas superiores a 1000 unidades.
 */
const obtenerLibrosPopulares = (coleccionLibros) =>
    coleccionLibros
        .filter(({ ventas }) => ventas > 1000)
        .map(({ titulo }) => titulo);

/**
 * Calcula la suma total de ventas de un autor.
 */
const calcularVentasPorAutor = (coleccionLibros, autor) =>
    coleccionLibros
        .filter((libro) => libro.autor === autor)
        .reduce((acumulador, { ventas }) => acumulador + ventas, 0);

/**
 * Genera inventario con disponibilidad ordenado por ventas.
 */
const generarInventario = (coleccionLibros) =>
    coleccionLibros
        .map(({ titulo, stock, ventas }) => ({
            titulo,
            disponibilidad: stock === 0 ? "Agotado" : "Disponible",
            ventas
        }))
        .sort((a, b) => b.ventas - a.ventas);

const librosPopulares = obtenerLibrosPopulares(libros);
const ventasBorges = calcularVentasPorAutor(libros, "Borges");
const inventarioOrdenado = generarInventario(libros);

console.log("Libros populares:");
console.log(librosPopulares);

console.log("\nVentas totales de Borges:");
console.log(ventasBorges);

console.log("\nInventario ordenado:");
console.log(inventarioOrdenado);
