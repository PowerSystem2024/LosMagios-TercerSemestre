window.addEventListener('DOMContentLoaded', () => {
  let torres;
  let enEjecucion = false;

  function crearDiscos(n) {
    torres = { A: [], B: [], C: [] };
    const torreA = document.getElementById('A');
    for (let i = n; i >= 1; i--) {
      const disco = document.createElement('div');
      disco.className = 'disco';
      disco.style.width = `${20 + i * 20}px`;
      disco.style.left = `${60 - (10 + i * 10)}px`;
      disco.style.bottom = `${(n - i) * 22}px`;
      disco.dataset.valor = i;
      torreA.appendChild(disco);
      torres.A.push(disco);
    }
  }

  function limpiarTorres() {
    ['A', 'B', 'C'].forEach(id => {
      const torre = document.getElementById(id);
      const discos = torre.querySelectorAll('.disco');
      discos.forEach(d => torre.removeChild(d));
    });
  }

  async function moverDisco(origen, destino) {
    const disco = torres[origen].pop();
    const torreDestino = document.getElementById(destino);

    disco.style.bottom = `${torres[destino].length * 22}px`;
    torreDestino.appendChild(disco);
    torres[destino].push(disco);

    await new Promise(resolve => setTimeout(resolve, 600));
  }

  async function hanoi(n, origen, auxiliar, destino) {
    if (!enEjecucion) return;
    if (n === 1) {
      await moverDisco(origen, destino);
    } else {
      await hanoi(n - 1, origen, destino, auxiliar);
      await moverDisco(origen, destino);
      await hanoi(n - 1, auxiliar, origen, destino);
    }
  }

  window.iniciarJuego = function () {
    if (enEjecucion) return;
    enEjecucion = true;
    const n = parseInt(document.getElementById('numDiscos').value);
    if (n < 1 || n > 7) {
      alert('Elige un número entre 1 y 7');
      return;
    }
    limpiarTorres();
    crearDiscos(n);
    setTimeout(() => hanoi(n, 'A', 'B', 'C').then(() => enEjecucion = false), 500);
  };

  window.reiniciar = function () {
    enEjecucion = false;
    limpiarTorres();
  };

  crearDiscos(3);
});

