class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }  
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Agregamos la sobreescritura de metodo
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
        console.log(tipo._departamento); 
    }
    else if(tipo instanceof Object){ //El orden siempre es jerarquico
        console.log("Es un objeto de tipo Object");// Clase padre de todas las clases
    }
}

let empleado1 = new Empleado("Juan", 3000);
imprimir(empleado1);
    

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
imprimir(gerente1);
imprimir(empleado1);
