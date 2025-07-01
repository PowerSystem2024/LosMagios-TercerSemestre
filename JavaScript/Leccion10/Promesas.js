let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        //resolver('Resolvió corrctamente');
    } else{
        //rechazar('Se produjo un error');
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//    .then( calor => console.log(valor))
//    .catch(error => console.log(error));

let promesa = new Promise( (resolver) => {
    //console.log('Inicio promesa')
    setTimeout(() => resolver('Saludos desde promesa, callback, función flecha y setTimeout'),3000);
    //console.log('Final promesa')
});

//El llamado a la promesa utilizando setTimeout
//promesa.then( valor => console.log(valor));

//async indica que una funcion regresa una promesa 
async function miFuncionConPromesa(){
    return 'Saludos con promesas y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    })
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise (resolver => {
        console.log('Inicio función');
        setTimeout(()=> resolver('Promesa con await y Timeout'),3000);
        console.log('Final función');
    });
    console.log(await miPromesa);
}

//Llamamos a la función
funcionConPromesaAwaitTimeout();