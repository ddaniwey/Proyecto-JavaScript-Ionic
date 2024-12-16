let pelicula1 = {
    titulo: 'Has caido en mi trampa',
    anio: 1999,
    duracion: 30
}

let pelicula2 = {
    titulo: ' caido',
    anio: 1950,
    duracion: 50
}


let pelicula3 = {
    titulo: 'Has',
    anio: 1997,
    duracion: 160
}


let pelicula4 = {
    titulo: 'en mi trampa',
    anio: 2000,
    duracion: 100
}

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];

function ordenarAnioyDuracion(peliculas){
    peliculas.sort((p1, p2) => {
        if (p1.anio === p2.anio){
            return p1.duracion - p2.duracion;
        }
       return p1.anio - p2.anio;
    }).forEach(peli => {
        console.log(peli.titulo);
        console.log(peli.anio);
        console.log(peli.duracion);
    });
}

ordenarAnioyDuracion(peliculas);