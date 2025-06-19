let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = "none";
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    
    let seccionReiniciar = document.getElementById('reiniciar');
    seccionReiniciar.style.display = "none";

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);

    //CREAMOS UNA NUEVA VARIABLE
    let btnReiniciar = document.getElementById('boton-reiniciar');
    btnReiniciar.addEventListener('click', reiniciarJuego);


    let botonReglas = document.getElementById("toggle-reglas");
    let seccionReglas = document.getElementById("seccion-reglas");

    botonReglas.addEventListener("click", () => {
        seccionReglas.style.display = seccionReglas.style.display === "none" ? "block" : "none";
    });

}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = "block"; //mostramos
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje');
    sectionSeleccionarPersonaje.style.display = "none"; //ocultar

    document.getElementById('seccion-reglas').style.display = "none";

    let personajeSeleccionado = "";

    if (inputZuko.checked) {
        personajeSeleccionado = 'Zuko';
    } else if (inputKatara.checked) {
        personajeSeleccionado = 'Katara';
    } else if (inputAang.checked) {
        personajeSeleccionado = 'Aang';
    } else if (inputToph.checked) {
        personajeSeleccionado = 'Toph';
    } else {
        alert('Selecciona un personaje');
        reiniciarJuego();
        return;
        
    }

    spanPersonajeJugador.innerHTML = personajeSeleccionado;

    document.title = "Tu personaje: " + personajeSeleccionado;

    // Elegir personaje enemigo aleatorio
    seleccionarPersonajeEnemigo(personajeSeleccionado);
}

function seleccionarPersonajeEnemigo(personajeJugador) {
    let personajeAleatorio = aleatorio(1, 4)
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if(personajeAleatorio == 1){
        spanPersonajeEnemigo.innerHTML = 'Zuko'
    } else if(personajeAleatorio == 2){
        spanPersonajeEnemigo.innerHTML = 'Katara'
    } else if(personajeAleatorio == 3){
        spanPersonajeEnemigo.innerHTML = 'Aang'
    } else {
        spanPersonajeEnemigo.innerHTML = 'Toph'
    }
}

function ataquePunio(){
    ataqueJugador = 'Punio'
    ataqueAleatorioEnemigo()
    combate()
}

function ataquePatada(){
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueBarrida(){
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    } else{
        ataqueEnemigo = 'Barrida'
    }
}

function combate() {

    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');


    let resultado = "";
    
    if (ataqueJugador === ataqueEnemigo) {
        resultado = "Empate";
    } else if (
        (ataqueJugador === "Punio" && ataqueEnemigo === "Barrida") ||
        (ataqueJugador === "Barrida" && ataqueEnemigo === "Patada") ||
        (ataqueJugador === "Patada" && ataqueEnemigo === "Punio")
    ) {
        resultado = "Ganaste esta ronda!";
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultado = "Perdiste esta ronda!";
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    crearMensaje(resultado);

    //revisar vidas
    revisarVidas();
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        //Ganamos
        crearMensajeFinal('FELICITACIONES HAS GANADO!!')
    }else if (vidasJugador == 0) {
        //Perdimos
        crearMensajeFinal('QUE PENA, HAS PERDIDO! :(')
    }
}



function crearMensajeFinal(resultado){
    let seccionReiniciar =document.getElementById('reiniciar');
    seccionReiniciar.style.display = "block";
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultado;
    
    sectionMensaje.appendChild(parrafo)

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.disabled= true;
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.disabled = true;
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.disabled = true;

}


function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', el personaje del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado 
    
    sectionMensaje.appendChild(parrafo)

}


function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}

window.addEventListener("load", iniciarJuego);
