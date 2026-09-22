/* =====================================
   ELEMENTOS
===================================== */

const musica = document.getElementById("musica");
const abrirBtn = document.getElementById("abrirBtn");
const pantallaEntrada =
    document.getElementById("pantallaEntrada");

const musicaBtn =
    document.getElementById("musicaBtn");

const popup =
    document.getElementById("mensajePopup");

const textoPopup =
    document.getElementById("textoPopup");

const cerrarPopup =
    document.getElementById("cerrarPopup");


/* =====================================
   ABRIR LA PÁGINA
===================================== */

abrirBtn.addEventListener("click", async () => {

    try {

        musica.volume = 0.65;

        await musica.play();

        musicaBtn.textContent = "🎵";

    } catch (error) {

        console.log(
            "El navegador no pudo reproducir la música."
        );

    }


    pantallaEntrada.classList.add("ocultar");

    crearPetalos(18);

    crearCorazones(8);

});


/* =====================================
   CONTROL DE MÚSICA
===================================== */

let musicaActiva = true;

musicaBtn.addEventListener("click", async () => {

    if (musica.paused) {

        try {

            await musica.play();

            musicaActiva = true;

            musicaBtn.textContent = "🎵";

        } catch (error) {

            console.log(error);

        }

    } else {

        musica.pause();

        musicaActiva = false;

        musicaBtn.textContent = "🔇";

    }

});


/* =====================================
   SCROLL
===================================== */

function irA(id) {

    const elemento =
        document.getElementById(id);

    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================
   MENSAJES DE LAS FLORES
===================================== */

const flores =
    document.querySelectorAll(".flor-mensaje");


flores.forEach(flor => {

    flor.addEventListener("click", () => {

        const mensaje =
            flor.getAttribute("data-mensaje");

        textoPopup.textContent = mensaje;

        popup.classList.add("mostrar");

        crearPetalos(8);

    });

});


/* =====================================
   CERRAR MENSAJE
===================================== */

cerrarPopup.addEventListener("click", () => {

    popup.classList.remove("mostrar");

});


/* =====================================
   PETALOS
===================================== */

function crearPetalos(cantidad) {

    const contenedor =
        document.querySelector(".petalos-container");


    for (let i = 0; i < cantidad; i++) {

        const petalo =
            document.createElement("div");

        petalo.textContent = "🌼";

        petalo.style.position = "fixed";

        petalo.style.left =
            Math.random() * 100 + "vw";

        petalo.style.top = "-40px";

        petalo.style.fontSize =
            14 + Math.random() * 17 + "px";

        petalo.style.zIndex = "200";

        petalo.style.pointerEvents = "none";

        petalo.style.animation =
            `caer ${4 + Math.random() * 4}s linear forwards`;

        contenedor.appendChild(petalo);


        setTimeout(() => {

            petalo.remove();

        }, 9000);

    }

}


/* =====================================
   CORAZONES
===================================== */

function crearCorazones(cantidad) {

    const contenedor =
        document.querySelector(".corazones-container");


    for (let i = 0; i < cantidad; i++) {

        const corazon =
            document.createElement("div");

        corazon.textContent = "💛";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.bottom = "-30px";

        corazon.style.fontSize =
            15 + Math.random() * 15 + "px";

        corazon.style.zIndex = "100";

        corazon.style.pointerEvents = "none";

        corazon.style.animation =
            `subirCorazon ${5 + Math.random() * 3}s linear forwards`;

        contenedor.appendChild(corazon);


        setTimeout(() => {

            corazon.remove();

        }, 9000);

    }

}


/* =====================================
   ANIMACIÓN DINÁMICA DE PÉTALOS
===================================== */

const estiloDinamico =
    document.createElement("style");


estiloDinamico.innerHTML = `

@keyframes caer {

    0% {
        transform:
            translateY(0)
            rotate(0deg);
        opacity: 1;
    }

    100% {
        transform:
            translateY(110vh)
            rotate(360deg);
        opacity: 0;
    }

}

@keyframes subirCorazon {

    0% {
        transform:
            translateY(0)
            scale(.8);
        opacity: 0;
    }

    15% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(-110vh)
            scale(1.3);
        opacity: 0;
    }

}

`;

document.head.appendChild(estiloDinamico);


/* =====================================
   MÁS FLORES AL HACER SCROLL
===================================== */

let ultimaPosicion = 0;

window.addEventListener("scroll", () => {

    const posicion =
        window.scrollY;

    if (
        posicion > ultimaPosicion &&
        posicion > 500
    ) {

        if (Math.random() > 0.93) {

            crearPetalos(2);

        }

    }

    ultimaPosicion = posicion;

});


/* =====================================
   MENSAJE DE CONSOLA
===================================== */

console.log(
    "🌼 Esta página fue hecha especialmente para usted Greverly 💛"
);