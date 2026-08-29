// Carrusel principal (usado en index.html)
// Controla el desplazamiento de las fotos con los botones < >

let current = 0;

function move(dir) {
  const slidesContainer = document.getElementById('slides');
  if (!slidesContainer) return;

  const totalSlides = document.querySelectorAll('#slides .slide').length;
  current = (current + dir + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
}

// Autoplay cada 5 segundos, con pausa al pasar el mouse por encima
let carouselTimer = setInterval(() => move(1), 5000);

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(carouselTimer));
    carousel.addEventListener('mouseleave', () => {
      carouselTimer = setInterval(() => move(1), 5000);
    });
  }
});
