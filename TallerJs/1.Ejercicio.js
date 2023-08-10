/**
1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas,
 suma, resta, multiplicación, división e imprimir las operaciones.
  Validar la división entre 0(cero). 
  Integrantes Camilo Lopez y Nestor Reatiga 


 */
 
'use strict';

 // Pedir al usuario que ingrese dos números
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Realizar las operaciones
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
let division;

if (num2 !== 0) {
    division = num1 / num2;
} else {
    division = "No es posible dividir entre cero.";
}

// Imprimir los resultados
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);




