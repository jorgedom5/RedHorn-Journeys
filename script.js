document.addEventListener("DOMContentLoaded", function () {
    const testimonios = document.querySelectorAll('.testimonio');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;

    function showTestimonio(index) {
        testimonios.forEach(testimonio => testimonio.style.display = 'none');
        testimonios[index].style.display = 'block';
    }

    function nextTestimonio() {
        currentIndex++;
        if (currentIndex >= testimonios.length) {
            currentIndex = 0;
        }
        showTestimonio(currentIndex);
    }

    function prevTestimonio() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonios.length - 1;
        }
        showTestimonio(currentIndex);
    }

    nextBtn.addEventListener('click', nextTestimonio);
    prevBtn.addEventListener('click', prevTestimonio);

    // Muestra el primer testimonio al cargar la página
    showTestimonio(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalImages = gallery.children.length;

    function showImage(index) {
        const translateValue = -index * 100 + "vw";
        gallery.style.transition = "transform 0.5s ease"; // Cambiado ease-in-out por ease
        gallery.style.transform = "translateX(" + translateValue + ")";
    }

    function updateButtonsState() {
        // Deshabilita el botón "prev" si estamos en la primera imagen
        prevBtn.disabled = currentIndex === 0;
        // Deshabilita el botón "next" si estamos en la última imagen
        nextBtn.disabled = currentIndex === totalImages - 1;
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
        updateButtonsState();
    }

    function nextImage() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
        updateButtonsState();
    }

    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    gallery.addEventListener("transitionend", function () {
        gallery.style.transition = "none";
    });

    // Actualiza el estado de los botones al cargar la página
    updateButtonsState();
});
