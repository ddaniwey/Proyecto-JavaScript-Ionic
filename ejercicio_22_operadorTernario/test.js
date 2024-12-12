// condición ? expresión : expresión2

const CALIFICACION_MINIMA = 5;
let aprobado;
let calificacion = 6;

if(calificacion >= CALIFICACION_MINIMA){
    aprobado = true;
} else {
    aprobado = false;
}

calificacion>=CALIFICACION_MINIMA ? aprobado=true : aprobado=false;

console.log(aprobado);