/*
Longitud mínima
contiene letra minuscula
contiene letra mayúscula
contiene numero
contiene caracteres especiales # ó $ ó espacio en blanco
no puede admitir ningún otro caracter
*/
let regexp = RegExp(('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#\\$ ])[a-zA-Z\\d#\\$ ]{8,}$')) ;
let password = 'Patata#1';

console.log(regexp.test(password));