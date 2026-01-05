/**********************************************************************
 * ENUNCIADO 1 – PRODUCTOS
 *
 * Dado el siguiente objeto de productos, construye una pipeline funcional
 * que:
 *
 * 1. Elimine los productos sin stock.
 * 2. Elimine los productos con precio menor a 10.
 * 3. Elimine los productos que no pertenezcan a una categoría válida
 *    (categorías válidas: "tech", "home", "food").
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, precio, stock, categoria }
 *
 * Restricciones:
 * - No usar bucles.
 * - No usar if ni switch.
 * - No mutar estructuras originales.
 **********************************************************************/

// const productos = {
//   p1: { precio: 5, stock: 10, categoria: "food" },
//   p2: { precio: 20, stock: 0, categoria: "tech" },
//   p3: { precio: 15, stock: 5, categoria: "home" },
//   p4: { precio: 8, stock: 3, categoria: "tech" },
//   p5: { precio: 30, stock: 2, categoria: "clothing" }
// };

// Resultado esperado:
// [
//   { id: "p3", precio: 15, stock: 5, categoria: "home" }
// ]


/**********************************************************************
 * ENUNCIADO 2 – ESTUDIANTES
 *
 * Dado un objeto de estudiantes, construye una pipeline funcional
 * que:
 *
 * 1. Elimine los estudiantes inactivos.
 * 2. Elimine los estudiantes con promedio menor a 6.
 * 3. Elimine los estudiantes que no estén inscritos en al menos
 *    una materia válida ("math", "science", "history").
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, promedio, activo, materias }
 **********************************************************************/

// const estudiantes = {
//   e1: { promedio: 5, activo: true, materias: ["math"] },
//   e2: { promedio: 8, activo: false, materias: ["science"] },
//   e3: { promedio: 9, activo: true, materias: [] },
//   e4: { promedio: 7, activo: true, materias: ["history", "math"] },
//   e5: { promedio: 6, activo: true, materias: ["art"] }
// };

// Resultado esperado:
// [
//   { id: "e4", promedio: 7, activo: true, materias: ["history", "math"] }
// ]


/**********************************************************************
 * ENUNCIADO 3 – EMPLEADOS
 *
 * Dado el siguiente objeto de empleados, construye una pipeline funcional
 * que:
 *
 * 1. Elimine los empleados inactivos.
 * 2. Elimine los empleados con salario menor a 1000.
 * 3. Elimine los empleados cuyo puesto no sea válido
 *    (puestos válidos: "dev", "designer", "manager").
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, salario, activo, puesto }
 **********************************************************************/

// const empleados = {
//   emp1: { salario: 900, activo: true, puesto: "dev" },
//   emp2: { salario: 1500, activo: false, puesto: "manager" },
//   emp3: { salario: 2000, activo: true, puesto: "designer" },
//   emp4: { salario: 1200, activo: true, puesto: "qa" },
//   emp5: { salario: 1800, activo: true, puesto: "dev" }
// };

// Resultado esperado:
// [
//   { id: "emp3", salario: 2000, activo: true, puesto: "designer" },
//   { id: "emp5", salario: 1800, activo: true, puesto: "dev" }
// ]


/**********************************************************************
 * ENUNCIADO 4 – PEDIDOS
 *
 * Dado un objeto de pedidos, construye una pipeline funcional
 * que:
 *
 * 1. Elimine los pedidos cancelados.
 * 2. Elimine los pedidos con total menor a 50.
 * 3. Elimine los pedidos que no tengan al menos un producto.
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, total, estado, productos }
 **********************************************************************/

// const pedidos = {
//   o1: { total: 40, estado: "completado", productos: ["p1"] },
//   o2: { total: 120, estado: "cancelado", productos: ["p2", "p3"] },
//   o3: { total: 75, estado: "completado", productos: [] },
//   o4: { total: 60, estado: "completado", productos: ["p4"] },
//   o5: { total: 30, estado: "completado", productos: ["p5"] }
// };

// Resultado esperado:
// [
//   { id: "o4", total: 60, estado: "completado", productos: ["p4"] }
// ]


/**********************************************************************
 * ENUNCIADO 5 – CUENTAS BANCARIAS
 *
 * Dado un objeto de cuentas bancarias, construye una pipeline funcional
 * que:
 *
 * 1. Elimine las cuentas inactivas.
 * 2. Elimine las cuentas con saldo negativo.
 * 3. Elimine las cuentas cuyo tipo no sea válido
 *    (tipos válidos: "ahorro", "corriente").
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, saldo, activa, tipo }
 **********************************************************************/

// const cuentas = {
//   c1: { saldo: 500, activa: true, tipo: "ahorro" },
//   c2: { saldo: -50, activa: true, tipo: "corriente" },
//   c3: { saldo: 1000, activa: false, tipo: "ahorro" },
//   c4: { saldo: 300, activa: true, tipo: "inversion" },
//   c5: { saldo: 800, activa: true, tipo: "corriente" }
// };

// Resultado esperado:
// [
//   { id: "c1", saldo: 500, activa: true, tipo: "ahorro" },
//   { id: "c5", saldo: 800, activa: true, tipo: "corriente" }
// ]


/**********************************************************************
 * ENUNCIADO 6 – PUBLICACIONES
 *
 * Dado un objeto de publicaciones, construye una pipeline funcional
 * que:
 *
 * 1. Elimine las publicaciones no publicadas.
 * 2. Elimine las publicaciones con menos de 100 likes.
 * 3. Elimine las publicaciones sin etiquetas válidas
 *    (etiquetas válidas: "js", "css", "html").
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, likes, publicada, tags }
 **********************************************************************/

// const publicaciones = {
//   post1: { likes: 50, publicada: true, tags: ["js"] },
//   post2: { likes: 200, publicada: false, tags: ["css"] },
//   post3: { likes: 150, publicada: true, tags: [] },
//   post4: { likes: 300, publicada: true, tags: ["html", "js"] },
//   post5: { likes: 90, publicada: true, tags: ["design"] }
// };

// Resultado esperado:
// [
//   { id: "post4", likes: 300, publicada: true, tags: ["html", "js"] }
// ]

/**********************************************************************
 * ENUNCIADO 6 – CONTENIDO RELEVANTE
 *
 * Dado un objeto de contenidos, construye una pipeline funcional que:
 *
 * 1. Elimine el contenido no publicado.
 * 2. Elimine el contenido sin tags.
 * 3. Elimine el contenido cuya puntuación media sea menor a 4.
 * 4. Devuelva un array de objetos planos con la forma:
 *    { id, titulo, rating }
 *
 * NOTA: la puntuación media se calcula a partir del array de ratings.
 **********************************************************************/

// const contenidos = {
//   c1: { titulo: "Intro JS", publicado: true, tags: ["js"], ratings: [5, 4, 5] },
//   c2: { titulo: "CSS avanzado", publicado: true, tags: [], ratings: [5, 5] },
//   c3: { titulo: "HTML básico", publicado: false, tags: ["html"], ratings: [4, 4] },
//   c4: { titulo: "Functional JS", publicado: true, tags: ["js"], ratings: [3, 4, 4] }
// };

// Resultado esperado:
// [
//   { id: "c1", titulo: "Intro JS", rating: 4.67 }
// ]