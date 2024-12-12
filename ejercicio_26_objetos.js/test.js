let nombre = 'Fran';

let alumno = ['Fran', 39, 'Córdoba', true];
let jesus = {
    nombre: 'Jesús',
    edad: 42,
    ciudad: 'Madrid',
    programador: true
}

console.log(typeof jesus) // Object
console.log(typeof alumno) // Object

//JSON - JavaScript Object Notation
let from = {
    titulo: 'from',
    temporadas: 3,
    sinopsis: 'En from, hay un pueblo del cual no puede salir nadie una vez que entra. Pasan sucesos paranormales cuando cae la noche. ¿Qué o ' +
    'quiénes estarán detrás de todo esto?',
    plataforma: 'HBO Max',
    reparto : [
        {
            nombre: 'juliana',
            peronaje: 'Julie Matthews'
        },
        {
            nombre: 'JJ',
            personaje: 'Joselito Cristina Veneno'
        },
        {
            nombre: 'SinDi',
            personaje: 'Selena Milan'
        },
        {
            nombre: 'Samantha hudson',
            personaje: 'Samantita'
        }
    ]

}

console.log(from['sinopsis']);
console.log(from.reparto[0]);
console.log(from.reparto[0].nombre);
// Aceder a array dentro de un objeto
from.reparto.forEach(individuo => {
    console.log(individuo.nombre);
    console.log(individuo.personaje);
});
