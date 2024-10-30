// main.ts

import { pedirCarta, plantarse } from "./motor";
import { reiniciarPuntuacion } from "./modelo";
import { actualizarHTML, pintarCartaEnHTML, ocultarBotonNuevaPartida } from "./ui";

function nuevaPartida(): void {
    reiniciarPuntuacion();
    actualizarHTML("puntuacionDiv", "Puntuación: 0");
    pintarCartaEnHTML("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    actualizarHTML("mensajeDiv", "");
    ocultarBotonNuevaPartida();
}

// Asigna los eventos a los botones
document.getElementById("pedirCartaBtn")?.addEventListener("click", pedirCarta);
document.getElementById("plantarseBtn")?.addEventListener("click", plantarse);
document.getElementById("nuevaPartidaBtn")?.addEventListener("click", nuevaPartida);
