import fs from 'node:fs';//Require package.json
/*
    1. Leer un fichero
    2. Reemplazamos una palabra por otra
    3. Mostrar el resultado

*/

// Función de lectura de ficheros
function leerFichero(nombreFichero){
    const data = fs.readFileSync(nombreFichero, 'utf8');
    return data;
}

function censurar(texto, palabraProhibida, palabraSustitucion){
    const regexp = new RegExp(`/\b${palabraProhibida}\b` , 'gi'); // G-> global (busca todas las palabras del texto), i-> (no tiene case sensitive)
    const textoCensurado = texto.replaceAll(regexp, palabraSustitucion);
    return textoCensurado;
}


try {
    const data = leerFichero('./post.txt', 'utf8');
    data.replaceAll('gilipollas', '*****');
    const data_censurado = data.replaceAll(/\bgilipollas\b/gi, '********');
    console.log(data_censurado);
} catch (err) {
    console.error(err);
}
