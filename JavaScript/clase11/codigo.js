document.addEventListener('DOMContentLoaded', () => {

  const form      = document.querySelector('form');
  const userField = form.querySelector('input[type="text"]');
  const passField = form.querySelector('input[type="password"]');
  const submitBtn = form.querySelector('input[type="submit"]');
  const squares   = document.querySelectorAll('.square');


  const showMessage = (msg, ok = false) => {
    let note = document.querySelector('.note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'note';
      form.appendChild(note);
    }
    note.textContent   = msg;
    note.style.color   = ok ? '#0f0' : '#ff6b6b';
    note.style.opacity = 1;
    setTimeout(() => (note.style.opacity = 0), 3000);
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const user = userField.value.trim();
    const pass = passField.value.trim();

    if (!user || !pass) {
      showMessage('Completa usuario y contraseña');
      shakeForm();
      return;
    }

    if (user === 'admin' && pass === '1234') {
      showMessage('¡Bienvenido!', true);
      boomSquares();

    } else {
      showMessage('Credenciales incorrectas');
      shakeForm();
    }
  });


  const shakeForm = () => {
    form.classList.add('shake');
    setTimeout(() => form.classList.remove('shake'), 400);
  };

  const boomSquares = () => {
    squares.forEach((sq, i) => {
      sq.animate(
        [
          { transform: 'scale(1) translateY(0)' },
          { transform: `scale(${1 + i * 0.3}) translateY(-100vh)` }
        ],
        { duration: 800, easing: 'ease-out', fill: 'forwards' }
      );
    });
  };


  document.addEventListener('mousemove', e => {
    const { innerWidth, innerHeight } = window;
    const xRatio = (e.clientX / innerWidth) - 0.5;
    const yRatio = (e.clientY / innerHeight) - 0.5;

    squares.forEach((sq, i) => {
      const speed = (i + 1) * 10;
      sq.style.transform = `translate(${xRatio * speed}px, ${yRatio * speed}px)`;
    });
  });
});

const style = document.createElement('style');
style.textContent = `
  .note {
    margin-top: 10px;
    text-align: center;
    font-weight: 600;
    transition: opacity .4s;
  }
  .shake {
    animation: nudge .4s;
  }
  @keyframes nudge {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-8px); }
    40%, 80% { transform: translateX(8px); }
  }
`;
document.head.appendChild(style);
