let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Esconde todas as slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // Mostra a slide atual
    slides[currentIndex].classList.add("active");
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Inicializa o slider mostrando a primeira imagem
showSlide(currentIndex);

// Para avançar automaticamente (opcional)
setInterval(() => {
    moveSlide(1);
}, 5000);
