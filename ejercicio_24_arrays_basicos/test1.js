// ********
// ** Declaración de arrays
// ********
let nombres = ['Amanda', 'Guillermo', 'Pablo'];
console.log(typeof nombres); // Object
// ********
// ** Obtención del tamaño del array
// ********
let apellidos1 = new Array(10);
console.log(apellidos1.length);
apellidos1[20] = 'b';
console.log(apellidos1.length); // 21 (Añade un índice más por si acaso)
let apellidos = new Array('Castejón', 'Bonnit', 'Huertas');

// ********
// **Acceso a los elementos
// ********
console.log(apellidos[0]);
console.log(' ');
// FOR EACH
// *********
// ** RECORRER ARRAYS 
// *********

for (let i = 0; i < apellidos.length; i++){
    console.log(apellidos[i]);
}

console.log(' ');
// *********
// ** FUNCIÓN ANÓNIMA
// *********
nombres.forEach(nombre => {
    console.log(nombre);
});

console.log(' ');
// *********
// ** FUNCIÓN TRADICIONAL
// *********
function mostrar(nombre){
    console.log(nombre.toUpperCase());
}
nombres.forEach(mostrar);

//**************** */
console.log(' ');

// *********
// ** ForEach con función anónima (operador flecha), incluye ya el índice 
// *********
nombres.forEach((nombre) /* Aquí va el índice */ => {
    console.log(nombre);
});

