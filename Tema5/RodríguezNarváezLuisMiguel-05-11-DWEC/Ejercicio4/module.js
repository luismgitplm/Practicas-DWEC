const datos = {
    Luis: {Codigo: 'abc', Ciudad: 'Benalmádena'},
    Antonio: {Codigo: 'def', Ciudad: 'Torremolinos'},
    Lara: {Codigo: 'hij', Ciudad: 'Fuengirola'}
}

const arrayDatos = () => Object.entries(datos).map(([clave,{Codigo,Ciudad}]) => `${clave}: Código - ${Codigo} ; Ciudad - ${Ciudad}`) 

const numAleatorio = () => Math.floor(Math.random() * 100)

export {arrayDatos, numAleatorio}