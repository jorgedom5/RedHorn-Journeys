// game.js
const adivinanzas = [
    { pregunta: "De día se viste de negocios, de noche se transforma en el rey de los vicios. ¿Quién es?", respuesta: "Toro Rojo" },
    { pregunta: "Camina de fiesta en fiesta, su vida es una locura perfecta. ¿A quién me refiero?", respuesta: "Toro Rojo" },
    { pregunta: "Lleva el rojo en el nombre, en sus noches el alcohol es su renombre. ¿Qué figura es esta?", respuesta: "Toro Rojo" },
    { pregunta: "En la jungla de la diversión es el rey, con astucia y carisma, siempre listo para el buey. ¿Quién es?", respuesta: "Toro Rojo" },
    { pregunta: "Su vida es un viaje de datos y jolgorio, en RedHorn Journeys es el dueño del desvarío. ¿De quién hablamos?", respuesta: "Toro Rojo" },
    { pregunta: "En su pasado, las adversidades no frenaron su paso. Hoy, en el mundo de la fiesta, es un trazo. ¿Cómo se llama este personaje?", respuesta: "Toro Rojo" },
    { pregunta: "De día, un líder en la batalla de los datos; de noche, en la fiesta, no hay quien lo desate. ¿Quién tiene este doble papel?", respuesta: "Toro Rojo" },
    { pregunta: "Su vida es una mezcla de números y placer, en cada viaje, deja una marca difícil de entender. ¿De quién estamos hablando?", respuesta: "Toro Rojo" },
    { pregunta: "En la pista de baile, se desata con destreza; su figura roja es sinónimo de fiesta. ¿Quién es el rey de la algarabía?", respuesta: "Toro Rojo" },
    { pregunta: "Su vida es una leyenda que se escribe con alegría, en cada rincón del mundo, su nombre es sinónimo de utopía. ¿De quién estamos hablando?", respuesta: "Toro Rojo" },
    { pregunta: "En su juventud, las espinas del amor le pincharon el corazón, pero en la pista de baile, encontró su redención. ¿Quién es este romántico empedernido?", respuesta: "Toro Rojo" },
    { pregunta: "En el laberinto del desamor, perdió algunas veces la razón, pero con una copa de rojo elixir, ahogó la desilusión. ¿De quién hablamos?", respuesta: "Toro Rojo" },
    { pregunta: "De niño, sus sueños eran como cometas, pero la tormenta de la vida los hizo trizas. Ahora, en la noche, su espíritu resplandece. ¿Quién es este héroe de la adversidad?", respuesta: "Toro Rojo" },
    { pregunta: "En sus días oscuros, el alcohol era su consuelo; pero en las luces de la fiesta, encontró un destello. ¿Cuál es el nombre de este navegante entre sombras?", respuesta: "Toro Rojo" },
    { pregunta: "En el carnaval de la vida, sus penas son disfraces que cambia con agilidad. ¿Quién es el mago de la sonrisa oculta?", respuesta: "Toro Rojo" },
    { pregunta: "Aunque el pasado le lanzó tormentas, hoy baila en la lluvia con alegría. ¿Quién es este danzarín bajo el cielo de su propia historia?", respuesta: "Toro Rojo" },
    { pregunta: "En su infancia, la soledad fue su sombra, pero ahora, en la fiesta, baila con ella y la transforma. ¿De quién hablamos?", respuesta: "Toro Rojo" },
    { pregunta: "Entre los suspiros del pasado y los brindis del presente, su vida es una melodía con notas intensas. ¿Cuál es el nombre de este compositor de experiencias?", respuesta: "Toro Rojo" },
    { pregunta: "Caminó por caminos empedrados de desafíos, pero en sus noches, el pavimento es de luces de colores. ¿Quién es este viajero de la dualidad?", respuesta: "Toro Rojo" },
    { pregunta: "En la ruleta del destino, apostó con coraje; aunque a veces perdió, su sonrisa siempre fue su traje. ¿De quién hablamos?", respuesta: "Toro Rojo" },
];

function cargarAdivinanzaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * adivinanzas.length);
    const adivinanzaElemento = document.getElementById("adivinanza");
    adivinanzaElemento.textContent = adivinanzas[indiceAleatorio].pregunta;
}

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
    const adivinanzaActual = adivinanzas.find(adivinanza => adivinanza.pregunta.toLowerCase() === document.getElementById("adivinanza").textContent.toLowerCase());
    const resultadoTextoElemento = document.getElementById("resultado-texto");

    if (adivinanzaActual && respuestaUsuario === adivinanzaActual.respuesta.toLowerCase()) {
        mostrarResultado("¡GENIAL! TORO ROJO TE AMA CON LOCURA", "./img/pass.jpeg");
    } else {
        mostrarResultado("HAS FALLADO, ERES UNA VERGÜENZA PARA TORO ROJO", "./img/failed.jpeg");
    }
}

function mostrarResultado(texto, imagenSrc) {
    const resultadoTextoElemento = document.getElementById("resultado-texto");
    const imagenResultadoElemento = document.getElementById("imagen-resultado");

    resultadoTextoElemento.textContent = texto;
    imagenResultadoElemento.src = imagenSrc;
    imagenResultadoElemento.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    cargarAdivinanzaAleatoria();
});
