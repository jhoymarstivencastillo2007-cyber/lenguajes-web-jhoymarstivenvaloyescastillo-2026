# Reflexión - Arquitectura de Objetos y Modelado de Dominio

## 1. Análisis de Paradigmas

El enfoque basado en clases permite representar de manera clara los distintos productos financieros del sistema. Gracias a la herencia, las clases derivadas pueden reutilizar comportamientos comunes y modificar únicamente las reglas específicas de cada cuenta.

En comparación con un enfoque funcional o basado en objetos literales, la Programación Orientada a Objetos ofrece una mejor organización del código, facilita el mantenimiento y permite modelar entidades reales como cuentas bancarias, créditos o inversiones.

Además, el uso de clases mejora la escalabilidad del sistema, ya que nuevas funcionalidades pueden añadirse sin alterar significativamente la estructura existente.

---

## 2. Seguridad de Datos

El uso de miembros privados es fundamental para garantizar la integridad financiera del sistema. Los atributos privados impiden que otras partes del programa modifiquen directamente valores sensibles como el saldo o el titular de una cuenta.

Gracias a esto, todas las operaciones deben realizarse mediante métodos controlados, donde se aplican validaciones y reglas de negocio. Esto evita inconsistencias, errores y posibles manipulaciones indebidas de la información financiera.

---

## 3. Escalabilidad

La estructura basada en herencia permite integrar nuevos productos financieros de manera sencilla. Por ejemplo, se podrían crear clases como Credito o Inversion heredando de CuentaBancaria.

Cada nueva clase podría implementar sus propias reglas de negocio reutilizando funcionalidades comunes ya existentes, como depósitos, retiros o validaciones básicas.

Este enfoque reduce la duplicación de código y mantiene la estabilidad del sistema, ya que las modificaciones se realizan de manera aislada sin afectar otras clases existentes.
