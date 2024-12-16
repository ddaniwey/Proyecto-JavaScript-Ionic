let numeros = [-3, 2, 100, 10, 45];

numeros.sort((a,b) =>{
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
})
/*
    *****   FUNCIONAMIENTO  *****
    Dentro del sort hemos metido una función que coge números y los
    mete en las variables a y b. 
    Compara 2 números y los coloca en un array. 
    [0, 1, 2, 3, 4]; -> En las posiciones
    -3 < 2 así que como es menor lo manda a una posición menos que el 2,
    ahora compara 2 con 100
    2 < 100 por tanto lo manda a una posición más abajo y el 100 más arriba
    así con todos los números hasta tener el array ordenado.

*/

console.log(numeros);