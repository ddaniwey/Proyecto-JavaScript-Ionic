const KEY = '3a302308';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${KEY}&`; //http://www.omdbapi.com/?apikey=3a302308&

// https://www.omdbapi.com/?apikey=3a302308&&s=Resident%20Evil&   ------ RESIDENT EVIL TODAS LAS PELÍCULAS


function processDataExcercise01(pelicula){ 
    console.log(pelicula.Title);
    console.log(pelicula.Director);
    let actores = pelicula.Actors.split(", ");
    actores.forEach(actor => console.log(actor));
} 

function processDataExcercise02(searchObject){ 
    const peliculas = searchObject.Search;
    peliculas   
        .filter(peli => parseInt(peli.Year) >= 2000)
        .map(peli => `Película: ${peli.Title} - Año: ${peli.Year}`)
        .forEach(peli => console.log(peli))
} 


function doRequest(url, funcionProcesarDatos){
  fetch(url)
  .then((response) => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
    //  return response.text(); // Si estamos obteniendo texto
      return response.json(); // Si estamos obteniendo el json
  })
  .then((data) => {

      funcionProcesarDatos(data);
  })
  .catch((error) => console.error("Fetch error:", error));
}

const URL_REQUEST01 = COMMON_URL +'t=Batman' ;
const URL_REQUEST02 =  COMMON_URL + 's=Star Wars';
 //console.log(COMMON_URL + 's=Star Wars&'); // Comprobamos la url
doRequest(URL_REQUEST01, processDataExcercise01);
doRequest(URL_REQUEST02, processDataExcercise02);
// doRequest(COMMON_REQUEST + 's=Star Wars')