miFuncion();
function miFuncion(){
    console.log('Saludos desde mi funcion')

}

miFuncion(); 

let myFuncion = function () {
    console.log('Saludos desde la funcion anonima')
}

//Ahoras vamos a acrear una funcion flecha

let miFuncionFlecha = ()  => {
    console.log('Saludos desde mi funcion flecha');

}
// hasy mas variantes para funcion flecha que vamos a ir viendo 
miFuncionFlecha();

//Lo hacemos en una linea

const saludar = () => console.log('Saludos a todos desde esta funcion flecha');
console.log(saludar);

//otro ejemplo 
const saludar2 = () => {
return 'Saludos desde la funcion flecha dos';
}

console.log(saludar2);

//Simplicamos la funcion enterior 
const saludar3 = () => 'Saludos desde la funcion flecha tres'

console.log(saludar3);

//Continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: 'juan', apellido: 'Lara'});

console.log(regresaObjeto());

//funciones flecha que reciben parametros 
const funcionParametros = (mensaje) => console.log(mensaje );

funcionParametros('Saludos desde esta funcion con parametros');

//Una funcion clasica 

const funcionParametrosClasica = function(mensaje){
    console.log(mensaje);
}

funcionParametrosClasica('Saludos desde la funcion clasica');

//Se pueden omitir los parentesis en la funcion flecha de la siguinete manera 
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('Otra forma de trabajar con funcion flecha');

//Ahora vemos funciones flecha con varios parametros 
//Podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2 = (op1, op2) =>{ 
    let resultado = op1 + op2;
    return resultado;
}

console.log(funcionConParametros2(3,5));
