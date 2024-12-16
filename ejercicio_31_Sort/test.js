/* 
PELICULAS:
TITULO
AÑO
DURACION
array de pelis
- Ordenar por año
- Ordenar por duración

*/
const KEY = '3a302308';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${KEY}&`; //http://www.omdbapi.com/?apikey=3a302308&

// https://www.omdbapi.com/?apikey=3a302308&&s=Resident%20Evil&   ------ RESIDENT EVIL TODAS LAS PELÍCULAS


function processDataExcercise01(searchObject){ 
    const peliculas = searchObject.Search;
    peliculas.sort((pelicula1, pelicula2) =>{
        if (parseInt(pelicula1.Year) > parseInt(pelicula2.Year)) return 1;
        if (parseInt(pelicula1.Year) < parseInt(pelicula2.Year)) return -1;
        return 0;
    })
    peliculas.forEach(pelicula => {
        console.log(pelicula.Title);
        console.log(pelicula.Year);
    })
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

 const URL_REQUEST01 =  COMMON_URL + 's=Resident Evil';
// console.log(COMMON_URL + 's=Resident Evil'); // Comprobamos la url
doRequest(URL_REQUEST01, processDataExcercise01);
doRequest(URL_REQUEST01, processDataExcercise02);
