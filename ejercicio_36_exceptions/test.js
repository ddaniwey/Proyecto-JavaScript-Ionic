function sumar (s1, s2){
    if (typeof(s1) !== 'number'){
        throw new Error ('S1 is not a number'); // Crea y lanza el error
    }
    return s1+s2

}

try{
let resultado = sumar(2, 3); // Puede ejecutar un error
console.log(resultado); // Se ejecuta si no hay error
} catch (fallo){
    console.log('Tratando el error...') // Solo si hay error
console.log('catch: ', fallo);
} finally {
    console.log("Siempre se ejecuta"); // Siempre
}