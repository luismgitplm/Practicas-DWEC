import { num1,num2 } from "./numerosAleatorios.js";
import { operacionAleatoria } from "./operacionAleatoria.js";

const operacion = operacionAleatoria()
const numero1 = num1
const numero2 = num2

document.getElementById("botonNumeros").addEventListener('click', () => {
    document.getElementById("contenidoNumeros").innerHTML = 
        `Estos son los números: ${numero1} y ${numero2}`
})

document.getElementById("botonOperacion").addEventListener('click', () => {
    document.getElementById("contenidoOperacion").innerHTML =
        `La operación es: ${operacion[0]}`
})

document.getElementById("botonResultado").addEventListener('click', () => {
    document.getElementById("contenidoResultado").innerHTML = 
        `El resultado de la operación con ambos números es: ${operacion[1](numero1,numero2)}`
})