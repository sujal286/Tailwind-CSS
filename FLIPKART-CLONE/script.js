const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function showSlide(i) {
  const slideWidth = slides.children[0].offsetWidth;
  index = (i + slides.children.length) % slides.children.length;
  slides.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 3000);