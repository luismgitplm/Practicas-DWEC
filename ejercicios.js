const usuarios = {
    u1: { edad: 17, activo: true, roles: ["user"] },
    u2: { edad: 25, activo: false, roles: ["admin"] },
    u3: { edad: 30, activo: true, roles: [] },
    u4: { edad: 22, activo: true, roles: ["editor", "user"] },
    u5: { edad: 19, activo: true, roles: ["guest"] }
};

const rolesValidos = ['admin','user','editor'];
const resultado = Object.entries(usuarios)
    .filter(([_,valor]) => valor.activo)
    .filter(([_,valor]) => valor.edad > 18)
    .filter(([_,valor]) => rolesValidos.some(rol => valor.roles.includes(rol)))
    .reduce((acc,[clave,valor]) => {
        acc.push({id: clave, edad: valor.edad, activo: valor.activo, roles: valor.roles});
        return acc;
    },[])

console.log(resultado);

// Ej 1:

const categoriasValidas = ['tech','home','food'];
const productos = {
   p1: { precio: 5, stock: 10, categoria: "food" },
   p2: { precio: 20, stock: 0, categoria: "tech" },
   p3: { precio: 15, stock: 5, categoria: "home" },
   p4: { precio: 8, stock: 3, categoria: "tech" },
   p5: { precio: 30, stock: 2, categoria: "clothing" }
};

const resultado2 = Object.entries(productos)
    .filter(([,{stock}]) => stock > 0)
    .filter(([,{precio}]) => precio > 10)
    .filter(([,{categoria}]) => categoriasValidas.some((categoriaValida) => categoria == categoriaValida))
    .map(([id,{precio,stock,categoria}]) => ({id,precio,stock,categoria}))

console.log(resultado2);

// Ej 2:

const estudiantes = {
   e1: { promedio: 5, activo: true, materias: ["math"] },
   e2: { promedio: 8, activo: false, materias: ["science"] },
   e3: { promedio: 9, activo: true, materias: [] },
   e4: { promedio: 7, activo: true, materias: ["history", "math"] },
   e5: { promedio: 6, activo: true, materias: ["art"] }
};

const materiasValidas = ['math','science','history'];
const resultado3 = Object.entries(estudiantes)
    .filter(([,{activo}]) => activo)
    .filter(([,{promedio}]) => promedio >= 6)
    .filter(([,{materias}]) => materiasValidas.some(materia => materias.includes(materia)))
    .map(([id,{promedio,activo,materias}]) => ({id,promedio,activo,materias}));

console.log(resultado3);


// Ej 3:

const empleados = {
   emp1: { salario: 900, activo: true, puesto: "dev" },
   emp2: { salario: 1500, activo: false, puesto: "manager" },
   emp3: { salario: 2000, activo: true, puesto: "designer" },
   emp4: { salario: 1200, activo: true, puesto: "qa" },
   emp5: { salario: 1800, activo: true, puesto: "dev" }
};

const puestosValidos = ['dev','designer','manager'];
const resultado4 = Object.entries(empleados)
    .filter(([,{activo}]) => activo)
    .filter(([,{salario}]) => salario >= 1000)
    .filter(([,{puesto}]) => puestosValidos.includes(puesto))
    .map(([id,{salario,activo,puesto}]) => ({id,salario,activo,puesto}));

console.log(resultado4);

//

const contenidos = {
   c1: { titulo: "Intro JS", publicado: true, tags: ["js"], ratings: [5, 4, 5] },
   c2: { titulo: "CSS avanzado", publicado: true, tags: [], ratings: [5, 5] },
   c3: { titulo: "HTML básico", publicado: false, tags: ["html"], ratings: [4, 4] },
   c4: { titulo: "Functional JS", publicado: true, tags: ["js"], ratings: [3, 4, 4] }
};

const promedio = arrayNums => arrayNums.reduce((acc,num) => acc + num,0) / arrayNums.length

const contenidosRelevantes = Object.entries(contenidos)
    .filter(([,{publicado}]) => publicado)
    .filter(([,{tags}]) => tags.length > 0)
    .filter(([,{ratings}]) => promedio(ratings) >= 4)
    .map(([id,{titulo,ratings}]) => ({id,titulo,rating: promedio(ratings).toFixed(2)}))

console.log(contenidosRelevantes);

