console.log("hola");

document.querySelector('#aceptar').addEventListener("click", () => {
    console.log('oK!');
    let texto = document.querySelector('#texto').value;
    let numero = parseInt(document.querySelector('#numero').value);
    let sino = document.querySelector('#sino').checked;

    console.log(texto);
    console.log(numero);
    console.log(sino);
    console.log(typeof texto);
    console.log(typeof numero);
    console.log(typeof sino);

    // Convertir de número a cadena
    let numero2 = 1234;
    let numeroACadena = numero2.toString();
    console.log(numeroACadena)
    console.log(typeof numeroACadena);
    });
