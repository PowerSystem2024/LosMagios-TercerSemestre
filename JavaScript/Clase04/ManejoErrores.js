'use strict';
// Veamos como evitar este error

try {
    let x = 10; //  Lo traemos con Alt + flecha haia arriba o hacia abajo 
    miFuncion(); //  Capturamos el error de la funcion
    throw'Mi Error'; // Manea tipo
}
catch ( error ){
    console.log( typeof(error) );
}
finally {
    console.log('Termina la revision de errores');
}

// La ejecucion ahora continua..
console.log('Continuamos...'); // Esto no se llega a ver poque esta bloqueado

let resultado = -5;

try {
    y = 5;
    if (isNaN(resultado)) throw'No es un numero';
    else if( resultado === '') throw'Es cadena vacia';
    else if( resultado >= 0) throw'Valor positivo';
    else if( resultado <= 0) throw'Valor negativo';
}
catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.menssage);
}
finally {
    console.log('Termina la revision de errores')
}
