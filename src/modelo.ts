// model.ts

export let puntuacion: number = 0;
export const valoresCartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

export function generarNumeroAleatorio(limite: number): number {
    return Math.floor(Math.random() * limite);
}

export function seleccionarCarta(): number {
    return valoresCartas[generarNumeroAleatorio(valoresCartas.length)];
}

export function obtenerPuntosCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

export function sumarPuntos(puntos: number): void {
    puntuacion += puntos;
}

export function reiniciarPuntuacion(): void {
    puntuacion = 0;
}
