
//2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos. 
'use strict';

// Solicitar la cantidad de horas trabajadas y el valor de la hora
const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
const valorHora = parseFloat(prompt("Ingrese el valor de la hora en pesos:"));

// Calcular el sueldo
const sueldo = horasTrabajadas * valorHora;

// Mostrar el sueldo a pagar
console.log(`El sueldo a pagar es: $${sueldo}`);