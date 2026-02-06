import { arrayDatos, numAleatorio } from "./module.js";

document.getElementById("boton1").addEventListener('click', () => {
    document.getElementById("arrayDatos").innerHTML = 
      `<h1>${arrayDatos().join('<br>')}</h1>`
})

document.getElementById("boton2").addEventListener('click', () => {
    document.getElementById("numAleatorio").innerHTML =
       `<h1>${numAleatorio()}</h1>`
})