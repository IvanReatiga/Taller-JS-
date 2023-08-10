// Solicitar la cantidad de números a sumar

'use strict';
const n = parseInt(prompt("Ingrese la cantidad de números a sumar:"));

let suma = 0;

// Solicitar y sumar los números ingresados
for (let i = 0; i < n; i++) {
  const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  suma += numero;
}

// Mostrar la suma total
console.log(`La suma de los ${n} números ingresados es: ${suma}`);