const KEY = '3a302308';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${KEY}&`; //http://www.omdbapi.com/?apikey=3a302308&

// https://www.omdbapi.com/?apikey=3a302308&&s=Resident%20Evil&   ------ RESIDENT EVIL TODAS LAS PELÍCULAS

function processData(pelicula){ 
console.log(pelicula.Title);
console.log(pelicula.Director);
let actores = pelicula.Actors.split(', ');
actores.forEach(actor => console.log(actor));
    
} // Fin function

function doRequest(url){
  fetch(url)
  .then((response) => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
    //  return response.text(); // Si estamos obteniendo texto
      return response.json(); // Si estamos obteniendo el json
  })
  .then((data) => {

      processData(data);
  })
  .catch((error) => console.error("Fetch error:", error));
}
console.log(COMMON_URL + 't=Batman'); // Comprobamos la url
doRequest(COMMON_URL + 't=Batman');


// EJERCICIO 1 
// doRequest(COMMON_REQUEST + 't=Batman')
// MOSTRAR POR PANTALLA EL TITULO, DIRECTOR, ACTORES POR SEPARADO (SPLIT)