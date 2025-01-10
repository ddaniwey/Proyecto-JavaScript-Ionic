
document.querySelector('#b-enviar').addEventListener('click', () => {
    let numero1 = parseInt(document.querySelector('#numero1').value);
    let numero2 = parseInt(document.querySelector('#numero2').value);

    console.log(sumar(numero1, numero2));
    console.log(restar(numero1, numero2));

})


function sumar(n1, n2){
    if(!isNaN(n1) && !isNaN(n2)){
        return n1 + n2;
    } else{
        console.error('Error, los números no son válidos');
    }
}

function restar(n1, n2){
    if(!isNaN(n1) && !isNaN(n2)){
        return n1 + n2;
    } else{
        console.error('Error, los números no son válidos');
    }
}