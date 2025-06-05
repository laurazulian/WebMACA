    document.addEventListener('DOMContentLoaded', function() {
  // Manejo del formulario contacto
  document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }

    // Simula un envío exitoso (aquí podrías hacer fetch al backend)
    document.getElementById('mensaje-exito').classList.remove('hidden');
    this.reset();
  });

  // Variables para el popup
  const popupOverlay = document.getElementById('popup-overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');

  function showPopup(title, content) {
    popupTitle.textContent = title;
    popupContent.textContent = content;
    popupOverlay.classList.remove('hidden');
    popupOverlay.classList.add('flex');
  }

  function closePopup() {
    popupOverlay.classList.add('hidden');
    popupOverlay.classList.remove('flex');
  }

  popupClose.addEventListener('click', closePopup);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  // Hacemos que showPopup sea accesible globalmente para el onclick inline
  window.showPopup = showPopup;
});
const popupOverlay = document.getElementById('popup-overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');

  function showPopup(title, content) {
    popupTitle.textContent = title;
    popupContent.textContent = content;
    popupOverlay.classList.remove('hidden');
    popupOverlay.classList.add('flex');
  }

  function closePopup() {
    popupOverlay.classList.add('hidden');
    popupOverlay.classList.remove('flex');
  }

  popupClose.addEventListener('click', closePopup);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  // Toggle menu mobile
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  });