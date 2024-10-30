// motor.ts

import { puntuacion, sumarPuntos, obtenerPuntosCarta, seleccionarCarta } from "./modelo";
import { actualizarHTML, mostrarBotonNuevaPartida, pintarCartaEnHTML } from "./ui";

export function actualizarPuntuacionTotal(): void {
    actualizarHTML("puntuacionDiv", `Puntuación: ${puntuacion}`);
}

export function verificarPuntuacion(): void {
    if (puntuacion === 7.5) {
        actualizarHTML("mensajeDiv", "¡Lo has clavado! ¡Enhorabuena! Has llegado a 7.5.");
        mostrarBotonNuevaPartida();
    } else if (puntuacion > 7.5) {
        actualizarHTML("mensajeDiv", "¡Game Over! Has superado los 7.5 puntos.");
        mostrarBotonNuevaPartida();
    }
}

export function pedirCarta(): void {
    const nuevaCarta = seleccionarCarta();
    const imagenesCartas: { [key: number]: string } = {
        1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
        2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
        3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
        4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
        5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
        6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
        7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
        10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
        11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
        12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    };

    pintarCartaEnHTML(imagenesCartas[nuevaCarta]);
    const puntosCarta = obtenerPuntosCarta(nuevaCarta);
    sumarPuntos(puntosCarta);
    actualizarPuntuacionTotal();
    verificarPuntuacion();
}

export function obtenerMensajePlantarse(puntos: number): string {
    if (puntos <= 4) return "Has sido muy conservador.";
    if (puntos === 5) return "Te ha entrado el canguelo eh?";
    if (puntos === 6 || puntos === 6.5 || puntos === 7) return "Casi casi...";
    if (puntos === 7.5) return "¡Lo has clavado! ¡Enhorabuena!";
    return "";
}

export function plantarse(): void {
    const mensaje = obtenerMensajePlantarse(puntuacion);
    actualizarHTML("mensajeDiv", mensaje);
    mostrarBotonNuevaPartida();
}
