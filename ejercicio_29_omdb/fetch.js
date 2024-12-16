const KEY = '3a302308';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${KEY}&`; //http://www.omdbapi.com/?apikey=3a302308&

// https://www.omdbapi.com/?apikey=3a302308&&s=Resident%20Evil&   ------ RESIDENT EVIL TODAS LAS PELÍCULAS

function processData(pelicula){ 
    console.log(pelicula.Search[0].Title);
    console.log(pelicula.Search[0].Director);
    console.log(pelicula.Search[0].Year);
    
} 

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
 //console.log(COMMON_URL + 's=Star Wars&'); // Comprobamos la url
doRequest(COMMON_URL + 's=Star Wars&');

// doRequest(COMMON_REQUEST + 's=Star Wars')