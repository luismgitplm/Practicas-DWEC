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