# Módulo-06 🍋

**Bootcamp JS 2 - Laboratorio Módulo 6 - Imports**

---

##  Imports y Exports

En JavaScript, los import y export permiten modularizar el código, es decir, dividirlo en distintos archivos y reutilizar funciones, variables, u objetos entre ellos. Esto es especialmente útil en proyectos grandes donde cada archivo puede concentrarse en una funcionalidad específica.

### Export

* export nombrado: Permite exportar múltiples elementos del archivo. Ejemplo:


><pre>export const nombre = "Juan";
>export function saludar() {
>console.log("¡Hola!");
>}

* export default: Exporta un solo valor como el "predeterminado" del archivo. Solo se permite un default por archivo.


><pre>export default function despedir() {
>console.log("¡Adiós!");
>}

### Import

* Para importar elementos nombrados, se usan llaves { }, indicando explícitamente qué elementos se desean importar:


><pre>import { nombre, saludar } from "./archivo.js";


* Para el export default, no se usan llaves y puedes asignarle cualquier nombre:


><pre>import despedida from "./archivo.js";


Estos mecanismos facilitan la organización del código y mejoran la mantenibilidad en proyectos complejos.