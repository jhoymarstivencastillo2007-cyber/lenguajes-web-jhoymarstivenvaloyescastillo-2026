const {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
} = require("./finanzas");

// PRUEBAS CUENTA BANCARIA
console.log("=== CUENTA BANCARIA ===");

const cuenta1 = new CuentaBancaria("Carlos", 1000);

console.log(cuenta1.getTitular());
console.log(cuenta1.getSaldo());

cuenta1.depositar(500);

cuenta1.retirar(300);

console.log("Saldo final:", cuenta1.getSaldo());


// PRUEBAS CUENTA AHORROS
console.log("\n=== CUENTA AHORROS ===");

const ahorro = new CuentaAhorros("Ana", 2000, 500);

console.log("Saldo inicial:", ahorro.getSaldo());

ahorro.retirar(1000);

console.log("Saldo después del retiro:", ahorro.getSaldo());

try {
    ahorro.retirar(600);
} catch (error) {
    console.log("Error:", error.message);
}


// PRUEBAS CUENTA CORRIENTE
console.log("\n=== CUENTA CORRIENTE ===");

const corriente = new CuentaCorriente(
    "Luis",
    1000,
    500,
    50
);

console.log("Saldo inicial:", corriente.getSaldo());

corriente.retirar(1200);

console.log("Saldo final:", corriente.getSaldo());

try {
    corriente.retirar(1000);
} catch (error) {
    console.log("Error:", error.message);
}
