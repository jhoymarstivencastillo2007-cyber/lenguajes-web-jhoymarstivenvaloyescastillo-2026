// Clase base
class CuentaBancaria {
    #saldo;
    #titular;

    constructor(titular, saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo");
        }

        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    // Getters
    getTitular() {
        return this.#titular;
    }

    getSaldo() {
        return this.#saldo;
    }

    // Método protegido para modificar saldo
    _actualizarSaldo(valor) {
        this.#saldo += valor;
    }

    // Depositar dinero
    depositar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor a 0");
        }

        this.#saldo += monto;

        console.log(`Depósito realizado. Nuevo saldo: ${this.#saldo}`);
    }

    // Retirar dinero
    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor a 0");
        }

        if (monto > this.#saldo) {
            throw new Error("Fondos insuficientes");
        }

        this.#saldo -= monto;

        console.log(`Retiro realizado. Nuevo saldo: ${this.#saldo}`);
    }
}

// Clase CuentaAhorros
class CuentaAhorros extends CuentaBancaria {
    #saldoMinimo;

    constructor(titular, saldoInicial, saldoMinimo) {
        super(titular, saldoInicial);

        this.#saldoMinimo = saldoMinimo;
    }

    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto debe ser mayor a 0");
        }

        if ((this.getSaldo() - monto) < this.#saldoMinimo) {
            throw new Error(
                "No se puede retirar porque el saldo quedaría por debajo del mínimo permitido"
            );
        }

        super.retirar(monto);
    }
}

// Clase CuentaCorriente
class CuentaCorriente extends CuentaBancaria {
    #limiteSobregiro;
    #comision;

    constructor(titular, saldoInicial, limiteSobregiro, comision) {
        super(titular, saldoInicial);

        this.#limiteSobregiro = limiteSobregiro;
        this.#comision = comision;
    }

    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto debe ser mayor a 0");
        }

        const saldoDisponible =
            this.getSaldo() + this.#limiteSobregiro;

        if (monto > saldoDisponible) {
            throw new Error("Se excede el límite de sobregiro");
        }

        // Si usa sobregiro
        if (monto > this.getSaldo()) {
            const total = monto + this.#comision;

            super._actualizarSaldo(-total);

            console.log(
                `Se utilizó sobregiro. Comisión aplicada: ${this.#comision}`
            );

            console.log(`Nuevo saldo: ${this.getSaldo()}`);
        } else {
            super.retirar(monto);
        }
    }
}

// Exportar clases
module.exports = {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
};
