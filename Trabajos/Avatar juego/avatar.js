let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)

}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

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
    let resultado = "";
    
    if (ataqueJugador === ataqueEnemigo) {
        resultado = "Empate";
    } else if (
        (ataqueJugador === "Punio" && ataqueEnemigo === "Barrida") ||
        (ataqueJugador === "Barrida" && ataqueEnemigo === "Patada") ||
        (ataqueJugador === "Patada" && ataqueEnemigo === "Punio")
    ) {
        resultado = "Ganaste esta ronda!";
    } else {
        resultado = "Perdiste esta ronda!";
    }

    alert("Tu ataque: " + ataqueJugador + "\nAtaque enemigo: " + ataqueEnemigo + "\n" + resultado);
}



function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}

window.addEventListener("load", iniciarJuego);
