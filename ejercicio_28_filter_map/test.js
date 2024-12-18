const playa_1 = {
    nombre : 'Famara',
    pais : 'España',
    dificultad : 'Principiante'
}

const playa_2 = {
    nombre : 'Nazaré',
    pais : 'Portugal',
    dificultad : 'Experto'
}

const playa_3 = {
    nombre : 'Pipeline',
    pais : 'Estados Unidos',
    dificultad : 'Experto'
}

const playa_4 = {
    nombre : 'Somo',
    pais : 'España',
    dificultad : 'Intermedio'
}

let playas = new Array();
playas.push(playa_1);//Agrega al final
playas.push(playa_2);
playas.push(playa_3);
console.log(playas);//Famara, Nazare, Pipeline
playas.unshift(playa_4);//Agrega al principio
console.log(playas);//Somo, Famara, Nazare, Pipeline


//1. Filter de las playas de dificultad Experto
let playasExperto = playas.filter(playa => {
    return playa.dificultad.toLowerCase().includes('experto');
}).forEach(playa => {
    console.log(playa.nombre);
});

console.log('');

//2. Filter de las playas de España
let playasEspanna = playas.filter(playa => {
    return playa.pais.toLowerCase() === 'españa';
}).forEach(playa => {
    console.log(playa.nombre);
});

console.log('');

let playasEspanna2 = 
playas.filter(playa => playa.pais.toLowerCase() === 'españa');
playas.forEach(playa => console.log(playa.nombre));

//3. Obtención del código HTML que representa una playa

const divs = playas.map ( playa => {
    return `<div class="playa">${playa.nombre}<div></div><div>País:${playa.pais}</div></div>`
}).forEach (div => {

})

console.log('');

playas  
    .map(playa => `<div class="playa">${playa.nombre}<div></div><div>País:${playa.pais}</div></div>` )
    .forEach(div => console.log(div));

console.log('');

playas 
    .filter(playa => playa.dificultad.toLowerCase() === 'experto')
    .map(playa =>  `<div class="playa">${playa.nombre}<div></div><div>País:${playa.pais}</div></div>`)
    .forEach (div => console.log(div));