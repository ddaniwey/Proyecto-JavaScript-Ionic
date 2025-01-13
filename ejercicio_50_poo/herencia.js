class Vehiculo {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    arrancar(){
        console.log("Estoy arrancando");
    }
}

class Automovil extends Vehiculo{
    constructor (nombre, color, marca, modelo){
        super(nombre, color)
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar(){
        console.log("Soy un automovil y estoy arrancando");
    }
}

class Barco extends Vehiculo{
    constructor (nombre, color, marca, modelo, eslora, manga){
        super(nombre, color, marca, modelo)
        this.eslora = eslora;
        this.manga = manga;
    }
    arrancar(){
        // super.arrancar();
        console.log("Soy un barco y estoy arrancando");
    }
}

let barco1 = new Barco();
barco1.arrancar();

let automovil1 = new Automovil();
automovil1.arrancar();

console.log(barco1 instanceof Vehiculo);
console.log(automovil1 instanceof Automovil);
console.log(barco1 instanceof Automovil);
console.log(automovil1 instanceof Barco);