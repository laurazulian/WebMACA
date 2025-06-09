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
    const overlay = document.getElementById('popup-overlay');
    const popup = document.getElementById('popup');
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-content').textContent = content;

    overlay.classList.remove('hidden', 'opacity-0');
    popup.classList.remove('scale-95', 'opacity-0');

    // Foco en el botón para accesibilidad
    document.getElementById('popup-close').focus();
  }

  document.getElementById('popup-close').addEventListener('click', () => {
    const overlay = document.getElementById('popup-overlay');
    const popup = document.getElementById('popup');
    popup.classList.add('scale-95', 'opacity-0');
    overlay.classList.add('opacity-0');

    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
  });

  // Opcional: cerrar popup clickeando fuera del contenido
  document.getElementById('popup-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'popup-overlay') {
      document.getElementById('popup-close').click();
    }
  });

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

  // Reset clases antes de mostrar
  popup.classList.remove('opacity-0', 'scale-95');
  popup.classList.add('opacity-100', 'scale-100');

  popupOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    popupOverlay.classList.add('opacity-100');
    popupOverlay.classList.remove('opacity-0');
  });
}

function closePopup() {
  popupOverlay.classList.remove('opacity-100');
  popupOverlay.classList.add('opacity-0');

  popup.classList.remove('opacity-100', 'scale-100');
  popup.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    popupOverlay.classList.add('hidden');
  }, 300);
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

/*const carousel = document.getElementById('carousel-servicios');
  const cards = carousel.querySelectorAll('div.snap-start');

  let currentIndex = 0;

  function scrollCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= cards.length) currentIndex = cards.length - 1;

    const targetCard = cards[currentIndex];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }*/

const carousel = document.getElementById('carousel-servicios');
  let currentIndex = 0;

  function scrollCarousel(direction) {
    const cards = carousel.querySelectorAll('.snap-start'); // actualizar dinámicamente
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= cards.length) currentIndex = cards.length - 1;

    const card = cards[currentIndex];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
      });
    }
  }