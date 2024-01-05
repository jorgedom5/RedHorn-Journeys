document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalImages = gallery.children.length;
    let intervalId;

    function showImage(index) {
        const translateValue = -index * 100 + "vw";
        gallery.style.transition = "transform 0.5s ease";
        gallery.style.transform = "translateX(" + translateValue + ")";
    }

    function updateButtonsState() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalImages - 1;
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        showImage(currentIndex);
        updateButtonsState();
    }

    function nextImage() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showImage(currentIndex);
        updateButtonsState();
    }

    prevBtn.addEventListener("click", function () {
        prevImage();
    });

    nextBtn.addEventListener("click", function () {
        nextImage();
    });

    gallery.addEventListener("transitionend", function () {
        gallery.style.transition = "none";
    });

    function startInterval() {
        intervalId = setInterval(function () {
            nextImage();
        }, 7000); // Cambiar 1000 a la cantidad de milisegundos que desees
    }

    // Iniciar el intervalo al cargar la página
    startInterval();
    // Actualizar el estado de los botones al cargar la página
    updateButtonsState();
});
