function* generadorAleatorios(magnitud){
    while(true){ // for(;;) -> BUCLE INFINITO
    yield parseInt(Math.random() * magnitud); // Es como un setTimeout
    }
}

let generador = generadorAleatorios(100);
let valor;

while(valor = generador.next()){
    console.log(valor.value);
    if (valor.value == 13) break;
}

