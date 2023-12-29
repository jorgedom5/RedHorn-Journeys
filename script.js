document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalImages = gallery.children.length;

    function showImage(index) {
        const translateValue = -index * 100 + "vw";
        gallery.style.transition = "transform 0.5s ease-in-out";
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
