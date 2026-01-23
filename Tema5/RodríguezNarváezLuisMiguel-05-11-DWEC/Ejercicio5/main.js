import { num1,num2 } from "./numerosAleatorios.js";
import { operacionAleatoria } from "./operacionAleatoria.js";

document.getElementById("botonNumeros").addEventListener('click', () => {
    document.getElementById("contenidoNumeros").innerHTML = 
        `Estos son los números: ${num1()} y ${num2()}`
})

document.getElementById("botonOperacion").addEventListener('click', () => {
    document.getElementById("contenidoOperacion").innerHTML =
        `La operación es: ${operacionAleatoria()[0]}`
})

document.getElementById("botonResultado").addEventListener('click', () => {
    document.getElementById("contenidoResultado").innerHTML = 
        `El resultado de la operación con ambos números es: ${operacionAleatoria[1]}`
})