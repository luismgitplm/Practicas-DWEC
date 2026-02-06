const operaciones = {
    suma: (a,b) => a+b,
    resta: (a,b) => a-b,
    multiplicacion: (a,b) => a*b,
    division: (a,b) => a/b
}

const operacionAleatoria = () => Object.entries(operaciones)[Math.floor(Math.random() * 4)]

export {operacionAleatoria}