function testDoor01(){
    console.log("Chequeando la puerta 01...");
    return false;
}
function testDoor02(){
    console.log("Chequeando la puerta 02...");
    return true;
}

if(testDoor01() === true && testDoor02() === true){
    console.log('Todo OK');
} else {
    console.log('ALGUNA PUERTA ESTÁ EN ERROR');
}
console.log('');

if(testDoor01() === true & testDoor02() === true){
    console.log('Todo OK');
} else {
    console.log('ALGUNA PUERTA ESTÁ EN ERROR');
}

console.log('');

if(testDoor01() === true ^ testDoor02() === true){
    console.log('Todo OK');
} else {
    console.log('ALGUNA PUERTA ESTÁ EN ERROR');
}

