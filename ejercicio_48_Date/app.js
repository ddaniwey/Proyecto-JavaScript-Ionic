function enredar(){
    console.log('Enredando...');
    for (let i; i<10000000000000000000000000000000 ; i ++){

    }
}

let inicio = Date.now();
enredar();
let fin = Date.now();
let tiempo = fin - inicio;
console.log('Hay tardado: ' + tiempo + ' segundos');