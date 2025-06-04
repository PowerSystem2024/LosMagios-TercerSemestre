function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
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
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const personajesDisponibles = personajes.filter(p => p !== personajeJugador);
    const numeroAleatorio = Math.floor(Math.random() * personajesDisponibles.length);
    const personajePC = personajesDisponibles[numeroAleatorio];

    let spanEnemigo = document.getElementById("personaje-enemigo");
    spanEnemigo.innerHTML = personajePC;
}

window.addEventListener("load", iniciarJuego);
