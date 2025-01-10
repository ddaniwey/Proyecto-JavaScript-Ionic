let pregunta1 = document.querySelector('#pregunta1');
let pregunta2 = document.querySelector('#pregunta2');
let pregunta3 = document.querySelector('#pregunta3');
let cronometro = document.querySelector('#cronometro');
const TIEMPO_RESPUESTA = 0;
const TIEMPO_PASO = 1000;
let preguntaActual = 1;
const NUMERO_PREGUNTAS = 3;
let crono;

document.querySelector('#comenzar').addEventListener("click", () => {
    document.getElementById('div-portada').style.left = '-100%';
    document.getElementById('pregunta1').style.display = 'block';
    iniciarCronometro();
}) // Fin evento botón comenzar

function mostrarPregunta(numero){
    document.querySelector('#pregunta'+ numero).style.display = 'none';
    document.querySelector('#pregunta' + (numero + 1)).style.display = 'block';
    iniciarCronometro();
    ++preguntaActual;
}

function iniciarCronometro(){
   let segundos = TIEMPO_RESPUESTA;
   crono =  setInterval(() => {
        segundos++;
        cronometro.innerHTML = `${segundos}`;

    if (segundos==5){
        clearInterval(crono);
    
    if (preguntaActual<NUMERO_PREGUNTAS) {
        mostrarPregunta(preguntaActual);
    } else {
        document.querySelector('#pregunta3').style.display = 'none';
        document.querySelector('#resultado').style.display = 'block';

        calcularResultado();
    }}

    function calcularResultado(){
        
    }// Fin calcularResultado()
    let botones = Array.from(document.querySelectorAll('#b-siguiente'));
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            clearInterval(crono);
            mostrarPregunta(preguntaActual);
            
    });
    })
}, TIEMPO_PASO);
}