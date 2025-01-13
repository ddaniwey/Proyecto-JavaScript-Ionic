class Pelicula {
    constructor(id, nombre, director, anio, genero, calificacion){
        this.id = id;
        this.nombre = nombre;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
        this.calificacion = calificacion;
    }
    mostrar(){
        return this.id;
    }

}