document.addEventListener('DOMContentLoaded', () => {
  const burguer = document.getElementById('burguer');
  const submenu = document.getElementById('submenu');

  if (burguer && submenu) {
    burguer.addEventListener('click', () => {
      submenu.classList.toggle('active');
    });
  } else {
    console.warn("Elemento 'burguer' o 'submenu' no encontrado en el DOM.");
  }
});