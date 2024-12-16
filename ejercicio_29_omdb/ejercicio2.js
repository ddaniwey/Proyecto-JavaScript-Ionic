const KEY = '3a302308';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${KEY}&`; //http://www.omdbapi.com/?apikey=3a302308&

// https://www.omdbapi.com/?apikey=3a302308&&s=Resident%20Evil&   ------ RESIDENT EVIL TODAS LAS PELÍCULAS

function processData(pelicula){ 
pelicula    
.filter(peli => parseInt(peli.Year) >= 2000)
.map(peli => `Película: ${peli.Title} - Año: ${peli.Year}`)
.forEach(peli => console.log(peli))
    
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

      processData(data.Search);
  })
  .catch((error) => console.error("Fetch error:", error));
}
//console.log(COMMON_URL + 's=Star Wars'); // Comprobamos la url
// doRequest(COMMON_URL + 's=Star Wars');


// EJERCICIO 2
// doRequest(COMMON_REQUEST + 's=Star Wars');
// MOSTRAR EL TITULO Y AÑO de las películas estrenadas en el 2000 y sucesivas