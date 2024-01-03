let budget = 5; // Presupuesto inicial de 3 monedas

function spin() {
    if (budget > 0) { // Verifica si hay monedas disponibles
        // Probabilidades ajustadas: symbol1 es el más común y symbol5 es el más inusual
        const symbols = [
            "./img/symbol1.jpeg",
            "./img/symbol2.jpeg",
            "./img/symbol3.jpeg",
            "./img/symbol4.jpeg",
            "./img/symbol5.jpeg"
        ];

        // Reproducir el sonido de tragaperras
        playSlotSound();

        const results = [];

        // Agregar la clase "spin-animation" a las imágenes durante la tirada
        document.getElementById("slot1").innerHTML = '<img class="spin-animation" alt="Symbol 1">';
        document.getElementById("slot2").innerHTML = '<img class="spin-animation" alt="Symbol 2">';
        document.getElementById("slot3").innerHTML = '<img class="spin-animation" alt="Symbol 3">';

        // Mostrar la primera imagen
        setTimeout(function () {
            document.querySelector('#slot1 img').src = getRandomSymbol(symbols);
        }, 500);

        // Mostrar la segunda imagen después de un intervalo de tiempo
        setTimeout(function () {
            document.querySelector('#slot2 img').src = getRandomSymbol(symbols);
        }, 1000);

        // Mostrar la tercera imagen después de un intervalo de tiempo
        setTimeout(function () {
            document.querySelector('#slot3 img').src = getRandomSymbol(symbols);

            // Eliminar la clase "spin-animation" después de la tirada para detener la animación
            document.querySelectorAll('.spin-animation').forEach(img => img.classList.remove('spin-animation'));

            const result1 = document.querySelector('#slot1 img').src.split('/').pop();
            const result2 = document.querySelector('#slot2 img').src.split('/').pop();
            const result3 = document.querySelector('#slot3 img').src.split('/').pop();
            
            if (result1 === result2 && result2 === result3 && result3 === "symbol5.jpeg") {
                // Ganar 20 monedas si aparece el símbolo más inusual en todas las tiradas
                budget += 30;
                alert("¡Felicidades! Ganaste 30 monedas.");
            } else if (result1 === result2 && result2 === result3 && result3 === "symbol4.jpeg") {
                // Ganar 10 monedas si aparece el símbolo 4 en todas las tiradas
                budget += 15;
                alert("¡Excelente! Ganaste 15 monedas.");
            } else if (result1 === result2 && result2 === result3 && result3 === "symbol3.jpeg") {
                // Ganar 5 monedas si aparece el símbolo 3 en todas las tiradas
                budget += 6;
                alert("¡Excelente! Ganaste 6 monedas.");
            } else if (result1 === result2 && result2 === result3 && result3 === "symbol2.jpeg") {
                // Ganar 3 monedas si aparece el símbolo 2 en todas las tiradas
                budget += 4;
                alert("¡Excelente! Ganaste 4 monedas.");
            } else if (result1 === result2 && result2 === result3 && result3 === "symbol1.jpeg") {
                // Ganar 1 moneda si aparece el símbolo 1 en todas las tiradas
                budget += 2;
                alert("¡Excelente! Ganaste 2 monedas.");
            } else if (result1 === "symbol5.jpeg" && result2 === "symbol5.jpeg") {
                // Ganar 8 monedas si aparece el símbolo5 dos veces en la tirada
                budget += 10;
                alert("¡Increíble! Ganaste 10 monedas");
            } else if (result1 === "symbol2.jpeg" && result2 === "symbol2.jpeg") {
                // Ganar 8 monedas si aparece el símbolo5 dos veces en la tirada
                budget += 2;
                alert("¡Increíble! Ganaste 2 monedas");
            } else {
                budget -= 1; // Reducir el presupuesto en 1 moneda
            }

            updateBudgetDisplay(); // Actualiza la visualización del presupuesto

            if (budget === 0) {
                alert("¡Te has quedado sin monedas! Recarga para seguir jugando.");
            }
        }, 2000); // Cambia el valor del tiempo de espera (en milisegundos) según tus preferencias
    } else {
        alert("No tienes monedas suficientes. Recarga para seguir jugando.");
    }
}

function playSlotSound() {
    const slotSound = new Audio('./audio/slot.mp3');
    slotSound.play();
}

function getRandomSymbol(symbols) {
    // Probabilidades ajustadas: symbol1 (más común) tiene 40% de probabilidad, symbol5 (más inusual) tiene 10% de probabilidad
    const probabilities = [0.5, 0.2, 0.15, 0.10, 0.05];
    const randomNum = Math.random();
    let cumulativeProb = 0;

    for (let i = 0; i < symbols.length; i++) {
        cumulativeProb += probabilities[i];
        if (randomNum <= cumulativeProb) {
            return symbols[i];
        }
    }

    // En caso de error, devolver el último símbolo
    return symbols[symbols.length - 1];
}

function updateBudgetDisplay() {
    const budgetDisplay = document.getElementById("budget-display");
    budgetDisplay.textContent = `Tienes ${budget} moneda(s)`;
}

// Función de inicialización para mostrar el presupuesto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    updateBudgetDisplay();
});
