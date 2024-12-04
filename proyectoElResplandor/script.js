function ocultarPeliculas(){
    document.querySelectorAll(".pelicula").forEach((pelicula) =>{
        pelicula.style.display = 'none';
    });
}

function mostrarDrama(){
// DRAMA
document.querySelector('#boton-drama').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".drama").forEach((pelicula) => {
        pelicula.style.display='block';
    });
});
};
function mostrarComedia(){
// COMEDIA
document.querySelector('#boton-comedia').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".comedia").forEach((pelicula) => {
        pelicula.style.display='block';
    });
});
}

function mostrarTerror(){
// TERROR
document.querySelector('#boton-terror').addEventListener("click", ()=>{
    // 1. Ocultar películas
    ocultarPeliculas();
    // 2. Mostrar las películas de su categoría
    document.querySelectorAll(".terror").forEach((pelicula) => {
        pelicula.style.display='block';
    });
});
};