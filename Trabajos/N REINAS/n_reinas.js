const N = 8;
let posiciones = [];

function posicionValida(fila, col) {
  for (let i = 0; i < fila; i++) {
    const otraCol = posiciones[i];
    if (
      otraCol === col ||
      Math.abs(otraCol - col) === fila - i 
    ) {
      return false;
    }
  }
  return true;
}

function resolver(fila = 0) {
  if (fila === N) return true;

  for (let col = 0; col < N; col++) {
    if (posicionValida(fila, col)) {
      posiciones[fila] = col;
      if (resolver(fila + 1)) return true;
    }
  }
  return false;
}

resolver();

// Mostramos el tablero
console.log("Tablero final:");
for (let i = 0; i < N; i++) {
  let fila = Array(N).fill('.');
  fila[posiciones[i]] = 'R';
  console.log(fila.join(' '));
}

console.log("Posiciones de las reinas:");
console.log(posiciones.map((col, fila) => [fila, col]));