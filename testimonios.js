document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos de testimonios
    var testimonios = document.querySelectorAll('.testimonio');

    // Inicializar el índice actual
    var currentIndex = 0;

    // Mostrar el testimonio actual
    mostrarTestimonio(currentIndex);

    // Manejar clic en el botón de siguiente
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % testimonios.length;
        mostrarTestimonio(currentIndex);
    });

    // Manejar clic en el botón de anterior
    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + testimonios.length) % testimonios.length;
        mostrarTestimonio(currentIndex);
    });

    // Función para mostrar el testimonio actual y ocultar los demás
    function mostrarTestimonio(index) {
        testimonios.forEach(function (testimonio, i) {
            testimonio.style.display = i === index ? 'block' : 'none';
        });
    }
});