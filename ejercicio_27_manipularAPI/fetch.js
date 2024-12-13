const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';

function processData(data){ // data en este caso es un array, por lo tanto puedo hacer un bucle para recorrerlo
    /*
    data.forEach(consola => {
        console.log(consola.name);
    });
    */
   // Filtramos las búsquedas y después iteramos para imprimir las búsquedas filtradas

   /*
  const consolasVerticales = 
            data.filter(consola => {
            return consola.orientation === 'portrait';
  })
  consolasVerticales.forEach(consola => {
    console.log(consola.name);
  });

  //*****************
  // *** NUEVA BÚSQUEDA***
  //******************
  const playStation =
  data.filter((consola) => {
    return consola.name.toLowerCase().includes('playstation');
  })
  playStation.forEach(consola => {
    console.log(consola.name);
  });
  const nintendo = 
  data.filter((consola) => {
    return consola.name.toLowerCase().includes('nintendo');
  })
  nintendo.forEach(consola => {
    console.log(consola.name);
  });
  */
 /*
    data.filter(consola => consola.name.toUpperCase().includes('NINTENDO'));
    forEach(element => {
      console.log(element.name);
    });
  */

    const consolas = data.map(consola => {
      const sql = `INSERT INTO T_CONSOLAS set (name, value, orientation) VALUES ('${consola.name})', '${consola.value}', '${consola.orientation}')`;
      return sql;
    })
    console.log(consolas); // Da undefined los valores


  const datos = data.map();
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
    // En este punto es donde teneos los datos que nos proporciona el servidor
      processData(data);
  })
  .catch((error) => console.error("Fetch error:", error));
}

doRequest(URL);