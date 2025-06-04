function iniciarjuego() {
    let botonPersonajeJugador = document.getElementById(boton-personaje);
    botonPersonajeJugador.addEventListener(click, seleccionarPersonajeJugador);
}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    // Verificamos cuál está seleccionado y mostramos el nombre
    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else {
        alert('Selecciona un personaje');
        return; // No sigue si no seleccionaste nada
    }

    // Llamamos a la función para que la PC elija su personaje
    aleatoria();
}

function aleatoria() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const numeroAleatorio = Math.floor(Math.random() * personajes.length);
    const personajePC = personajes[numeroAleatorio];

    let spanEnemigo = document.getElementById("personaje-enemigo");
    spanEnemigo.innerHTML = personajePC;
}

window.addEventListener('load', iniciarjuego);
