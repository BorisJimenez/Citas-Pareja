


const citas = [
    'Cena en un restaurante romántico',
    'Paseo por un parque o jardín',
    'Concierto o espectáculo',
    'Noche de juegos de mesa o cartas',
    'Cena a la luz de las velas en casa',
    'Massaje o spa para dos',
    'Paseo en bote o catamarán',
    'Cena en un mirador',
    'Noche de karaoke',
    'Escalada, senderismo o ciclismo',
    'Pasa el día en el campo o la playa',
    'Clase de baile o cocina',
    'Viaje de un día a una ciudad cercana',
    'Excursión de un día a la naturaleza',
    'Prueba de un nuevo deporte extremo',
    'Visita a un museo o galería de arte',
    'Cena en un restaurante de comida internacional',
    'Noche de juegos de rol',
    'Cena en un restaurante con temática',
    'Clase de baile o comedia',
    'Visita a un parque de diversiones o un zoológico',
    'Cena en casa con comida preparada por ambos',
    'Noche de juegos de mesa o cartas con amigos',
    'Cena en un restaurante con servicio a la habitación',
    'Paseo por un barrio nuevo',
    'Cena en un restaurante con vista',
    'Noche de cine en casa con palomitas de maíz y mantas'
]
const indiceAleatorio = Math.floor(Math.random() * citas.length);
const citaAleatoria = citas[indiceAleatorio];
document.querySelector(".cita-actual h2").textContent = citaAleatoria;


// Función para actualizar la cita actual
function actualizarCitaActual() {
    const indiceAleatorio = Math.floor(Math.random() * citas.length);
    const nuevaCita = citas[indiceAleatorio];
    document.querySelector("#citaActual").textContent = nuevaCita;
}

// Declaramos las variables
let contadorCumplida = 0;
let contadorNoCumplida = 0;

// Obtenemos las casillas de verificación
const inputCumplida = document.querySelector("#citaCumplida");
const inputNoCumplida = document.querySelector("#citaNoCumplida");

// Escuchamos el evento submit del formulario
document.querySelector("form").addEventListener("submit", (e) => {
    // Evitamos que el formulario se envíe
    e.preventDefault();

    // Validamos que se haya seleccionado al menos una casilla de verificación
    if (!inputCumplida.checked && !inputNoCumplida.checked) {
        alert("Debe seleccionarse al menos una casilla de verificación");
        return;
    }

    // Validamos que no se hayan seleccionado ambas casillas de verificación
    if (inputCumplida.checked && inputNoCumplida.checked) {
        alert("No se pueden seleccionar ambas casillas de verificación");
        return;
    }

    // Aumentamos el contador correspondiente según la casilla de verificación seleccionada
    if (inputCumplida.checked) {
        contadorCumplida++;
    } else if (inputNoCumplida.checked) {
        contadorNoCumplida++;
    }

    // Actualizamos el contador
    document.querySelector(".contador .contador-cumplida").textContent = contadorCumplida;
    document.querySelector(".contador .contador-noCumplida").textContent = contadorNoCumplida;

    // Después de actualizar el contador, llamamos a la función para cambiar la cita actual
    actualizarCitaActual();
});