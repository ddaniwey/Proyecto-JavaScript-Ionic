let cuenta = 'ES6000491500051234567892'; // (24) Cuenta del B. Santander
// Mostrar las diferentes secciones del número de cuenta

// Usaremos substring
let pais = cuenta.substring(0, 2);
let codigoControl = cuenta.substring(2,4);
let entidad = cuenta.substring(4,8);
let oficina = cuenta.substring(8,12);
let codigoControl2 = cuenta.substring(12,14);
let numeroDeCuenta = cuenta.substring(14,24);

console.log(pais, codigoControl, entidad, oficina, codigoControl2, numeroDeCuenta);