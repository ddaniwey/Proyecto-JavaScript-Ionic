class Enemigo {
    constructor (nombre, salud, velocidad){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
    }
    atacar(){
        console.log('atacando como un enemigo');
    }
}

class EnemigoMovil extends Enemigo{
    constructor(nombre, salud, velocidad, posicion){
        super(nombre, salud, velocidad)
        this.posicion = posicion;
    }
    mover(){
        console.log('Moviendo...');
    }
}


let punto2 = new Punto(410, 10);