document.addEventListener("DOMContentLoaded", function () {
    const toroRojo = document.getElementById("toro-rojo");
    const mensajeContainer = document.getElementById("mensaje-container");

    toroRojo.addEventListener("click", verificarPosicion);

    function verificarPosicion(event) {
        const x = event.clientX;
        const y = event.clientY;

        // Coordenadas aproximadas de la posición de Toro Rojo en la imagen
        const toroRojoX = 550;
        const toroRojoY = 464;
        const radioAceptable = 750;

        const distancia = calcularDistancia(x, y, toroRojoX, toroRojoY);

        if (distancia <= radioAceptable) {
            mostrarMensaje("¡TORO ROJO NUNCA SE ESCONDE, ESO ES DE COBARDES Y ÉL NO LO ES!");
        } else {
            mostrarMensaje("ESTÁS CIEGO, TE VAMOS A REGALAR UN VIAJE COMO SIGAS ASÍ EH");
        }
    }

    function calcularDistancia(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function mostrarMensaje(mensaje) {
        mensajeContainer.textContent = mensaje;

        // Eliminar el mensaje después de unos segundos (opcional)
        setTimeout(() => {
            mensajeContainer.textContent = "";
        }, 10000); // 3000 milisegundos (3 segundos)
    }
});
