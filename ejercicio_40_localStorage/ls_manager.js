function guardarEnLocalStorage (clave, valor){
    localStorage.setItem(clave, valor);
}

function recuperarDeLocalStorage (clave){
    return localStorage.getItem(clave);
}