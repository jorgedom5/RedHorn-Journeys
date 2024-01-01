// Definir un objeto que contiene información sobre las cartas
const cartas = [
    { nombre: 'Momentos Dificiles', descripcion: '"Entre las sombras de la infancia, donde el alcohol gobernaba, Toro Rojo forjó su determinación, transformando las heridas del pasado en un brindis por un presente que él mismo ha moldeado."', imagen: './img/carta1.png', probabilidad: 0.35 },
    { nombre: 'Sin Mirar Atrás', descripcion: '"Con una maleta vacía y sueños cargados de esperanza, Toro Rojo dejó atrás un pasado sombrío, emprendiendo un viaje hacia un futuro lleno de posibilidades y autodeterminación."', imagen: './img/carta2.png', probabilidad: 0.2 },
    { nombre: 'Vía de escape', descripcion: '"En las precarias condiciones de su hogar, Toro Rojo encontró en el alcohol un escape ante la adversidad, marcando el inicio de una senda desafiante hacia su propia redención."', imagen: './img/carta3.png', probabilidad: 0.1 },
    { nombre: 'En el Fondo', descripcion: '"En el abismo de su desesperación, Toro Rojo tocó fondo, durmiendo en las calles tras perder su hogar, una dolorosa consecuencia de su batalla contra el alcoholismo."', imagen: './img/carta4.png', probabilidad: 0.1 },
    { nombre: 'El Descubrimiento', descripcion: '"Entre sombras de desdicha, Toro Rojo encontró un destello de luz en el fascinante mundo de los datos; una revelación que transformaría su vida y lo convertiría en un prodigio de la información."', imagen: './img/carta5.png', probabilidad: 0.1 },
    { nombre: 'Campeón', descripcion: '"Con determinación inquebrantable, Toro Rojo conquistó un prestigioso DataProject que no solo cambió su destino, sino que lo catapultó hacia la cima como uno de los profesionales más destacados en su campo."', imagen: './img/carta6.png', probabilidad: 0.1 },
    { nombre: 'RedHorn Journeys', descripcion: '"Motivado por su propia experiencia, Toro Rojo fundó RedHorn Journeys con la misión de proporcionar filtros justos para los viajes del IMSERSO, convirtiendo su éxito en una plataforma para brindar oportunidades a los jubilados que merecen descubrir el mundo."', imagen: './img/carta7.png', probabilidad: 0.1 },
    { nombre: 'Triunfador', descripcion: '"Transformando sueños en realidad, Toro Rojo dirige con éxito RedHorn Journeys, no solo como un triunfador en los negocios y viajes, sino como un líder cuya visión ha dejado una huella imborrable en la industria y en la vida de aquellos que ha tocado."', imagen: './img/carta8.png', probabilidad: 0.05 },
    { nombre: 'Él es el Pueblo', descripcion: '"En el corazón del pueblo, Toro Rojo es amado por los jubilados gracias a sus filtros justos, mientras que su éxito en la fiesta y los negocios le ha brindado no solo admiración, sino también abundancia en cada rincón de su vida."', imagen: './img/carta9.png', probabilidad: 0.05 },
    { nombre: 'Inmortal', descripcion: '"Con cada filtro justo, Toro Rojo ha trascendido el tiempo; su legado es inmortal, y en el futuro, se preguntarán con orgullo quién es el arquitecto de la equidad y la grandeza."', imagen: './img/carta10.png', probabilidad: 0.05 },
];

let cartera = 500; // Inicializar el presupuesto en 500 monedas

function comprarSobre() {
    const precioSobre = 100;

    // Verificar si el jugador tiene suficientes monedas para comprar un sobre
    if (cartera >= precioSobre) {
        // Actualizar la cartera
        cartera -= precioSobre;
        actualizarCartera();

        // Obtener una carta aleatoria del conjunto de cartas
        const cartaAleatoria = obtenerCartaAleatoria();

        // Mostrar la imagen de la carta y su descripción
        mostrarCarta(cartaAleatoria);

        // Reproducir el sonido de la carta
        reproducirSonidoCarta();
    } else {
        alert('No tienes suficientes monedas para comprar un sobre.');
    }
}

function mostrarCarta(carta) {
    const sobreImagen = document.getElementById('sobre-imagen');
    sobreImagen.style.display = 'none'; // Oculta la imagen del sobre cerrado

    const cartaContainer = document.getElementById('carta-container');
    const cartaImagen = document.getElementById('carta-imagen');
    cartaImagen.src = carta.imagen; // Establece la imagen de la carta

    // Agrega la clase "mostrar" para activar la animación
    cartaContainer.classList.add('mostrar');

    const cartaDescripcion = document.getElementById('carta-descripcion');
    cartaDescripcion.textContent = `${carta.nombre}: ${carta.descripcion}`;
}

function obtenerCartaAleatoria() {
    // Generar un número aleatorio entre 0 y 1
    const probabilidadAleatoria = Math.random();

    // Inicializar las variables de probabilidad acumulativa y la carta seleccionada
    let probabilidadAcumulativa = 0;
    let cartaSeleccionada;

    // Iterar sobre las cartas para determinar cuál se selecciona
    for (const carta of cartas) {
        probabilidadAcumulativa += carta.probabilidad;

        if (probabilidadAleatoria <= probabilidadAcumulativa) {
            cartaSeleccionada = carta;
            break;
        }
    }

    return cartaSeleccionada;
}

function actualizarCartera() {
    const carteraElemento = document.getElementById('cartera');
    carteraElemento.textContent = cartera;
}

function reproducirSonidoCarta() {
    const sonidoCarta = document.getElementById('sonidoCarta');
    sonidoCarta.play();
}
