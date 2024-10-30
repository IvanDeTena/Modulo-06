// ui.ts

export function actualizarHTML(id: string, contenido: string): void {
    const elemento = document.getElementById(id);
    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLElement) {
        elemento.innerHTML = contenido;
    }
}

export function pintarCartaEnHTML(urlCarta: string): void {
    const cartaImg = document.getElementById("cartaImg");
    if (cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = urlCarta;
    }
}

export function mostrarBotonNuevaPartida(): void {
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "inline";
    }
}

export function ocultarBotonNuevaPartida(): void {
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "none";
    }
}
