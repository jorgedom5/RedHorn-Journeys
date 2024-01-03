document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const imagenElement = document.getElementById('imagen');
    const tituloElement = document.getElementById('titulo');
    const descripcionElement = document.getElementById('descripcion');
    let audioElement = new Audio(); // Audio inicialmente vacío

    const imagenes = [
        { src: './img/wildproject.jpeg', audio: './audio/jordiwild.wav', titulo: 'The Wild Project', descripcion: 'Jordi Wild mencionó una joya de experiencia de viaje: RedHorn Journeys, la empresa del IMSERSO creada por Toro Rojo. Recomendó encarecidamente a su audiencia que considerara esta opción para los viajes de sus padres. ¡Imagina la diversión con el toro rojo cool y fiestero al timón!' },
        { src: './img/cr7.jpeg', audio: './audio/cr7.wav', titulo: 'Cristiano Ronaldo', descripcion: 'Cristiano Ronaldo mencionó en una entrevista reciente que su madre ha estado utilizando los servicios de RedHorn Journeys para sus viajes, y está muy contento con la experiencia. El futbolista internacional elogió la calidad de los servicios proporcionados por la empresa, destacando la comodidad y el profesionalismo.' },
        { src: './img/f1.jpeg', audio: './audio/lobato.wav', titulo: 'Mención en la F1', descripcion: 'En un emocionante día de competición de Fórmula 1, el comentarista destacó una historia conmovedora: el piloto, al volante de un coche patrocinado por Toro Rojo, había logrado la pole position llevando consigo la solidaridad de la iniciativa que ofrecía viajes gratuitos a jubilados. La hazaña no solo resaltó la destreza del piloto en la pista, sino también su compromiso con la comunidad.' },
        { src: './img/simpsons.jpeg', audio: './audio/homer.wav', titulo: 'Mención y Aparición en Los Simpsons', descripcion: 'En un capítulo de Los Simpsons, Homer Simpson sorprendió a todos cuando, en un arranque de paternalismo, amenazó a su propio padre con quitarle los privilegiados viajes de RedHorn Journeys si continuaba molestando a Lisa. Con gesto serio, Homer dejó claro que la diversión del toro rojo cool y fiestero no estaría disponible para el abuelo si persistía en su comportamiento. ¡Una inusual pero efectiva táctica para mantener la armonía en la familia Simpson!' },
        { src: './img/auron.jpeg', audio: './audio/auron.wav', titulo: 'Reacción de Auronplay', descripcion: 'En un video épico, AuronPlay reaccionó a los mejores momentos de los viajes de RedHorn Journeys. Entre risas y comentarios sarcásticos, el popular creador de contenido destacó la singularidad de cada experiencia, desde la llegada del toro rojo cool y fiestero hasta las situaciones más hilarantes que los viajeros vivieron en el camino.' },
        { src: './img/cemen.jpeg', audio: './audio/mil.wav', titulo: 'Especial 1000 Maneras de Morir', descripcion: 'En un episodio impactante de "Mil Maneras de Morir", se narró la trágica historia de una anciana que, tras pasar la noche con Toro Rojo, sufrió un destino inesperado. La narrativa surrealista llevó al espectador por un giro inusual y cómico, explorando las consecuencias inimaginables de compartir una velada con el toro rojo cool y fiestero. Este inolvidable capítulo sirvió como recordatorio de que incluso las situaciones más extravagantes pueden tener consecuencias sorprendentes.' },
        { src: './img/chicote.jpeg', audio: './audio/chicote.wav', titulo: 'Mención Pesadilla en la Cocina', descripcion: 'El programa destacó cómo Toro Rojo se había asociado con chefs expertos para ofrecer menús deliciosos y nutritivos a los jubilados, demostrando que la marca no solo era sinónimo de fiesta, sino también de generosidad.' },
        { src: './img/xavi.jpeg', audio: './audio/xavi.wav', titulo: 'Toro Rojo Compra el Barça', descripcion: 'Tras una derrota desafiante del Barça, Xavi sorprendió a todos en una rueda de prensa anunciando que Toro Rojo, el emblemático dueño cool y fiestero, había adquirido la mitad del equipo debido a problemas económicos. Explicó que esta asociación inusual no solo buscaba estabilidad financiera, sino también inyectar una nueva energía al equipo. La noticia generó una mezcla de incredulidad y expectación entre los aficionados, dejando a todos preguntándose cómo la presencia de Toro Rojo cambiaría el rumbo del club.' },
        { src: './img/noticias.jpeg', audio: './audio/matias.wav', titulo: 'Mención en las noticias', descripcion: 'En un segmento destacado de las noticias, se resaltó la impactante labor de Toro Rojo al regalar viajes a jubilados como parte de una iniciativa solidaria. La historia inspiradora reveló cómo la marca del toro rojo cool y fiestero estaba haciendo una diferencia significativa en la vida de aquellos que habían dedicado muchos años al trabajo.' },
        { src: './img/USA.jpeg', audio: './audio/trump.wav', titulo: 'Halago de Trump', descripcion: 'En un tuit sorprendente, Donald Trump expresó su admiración por el enfoque innovador de Toro Rojo y su deseo de ver más empresas con una mentalidad similar en Estados Unidos. El expresidente elogió la creatividad de la marca, destacando cómo el toro rojo cool y fiestero se había convertido en un símbolo no solo de energía, sino también de emprendimiento audaz.' }
        // Agrega más imágenes y sus respectivos archivos de audio según sea necesario
    ];

    let currentIndex = 0;

    function actualizarContenido() {
        const imagenActual = imagenes[currentIndex];
        imagenElement.src = imagenActual.src;
        tituloElement.textContent = imagenActual.titulo;
        descripcionElement.textContent = imagenActual.descripcion;

        // Actualizar el archivo de audio
        audioElement.src = imagenActual.audio;
        // Pausar la reproducción si está en curso
        audioElement.pause();
        playButton.textContent = 'Reproducir';
    }

    playButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            playButton.textContent = 'Pausar';
        } else {
            audioElement.pause();
            playButton.textContent = 'Reproducir';
        }
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        actualizarContenido();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        actualizarContenido();
    });

    // Mostrar contenido inicial
    actualizarContenido();
});
