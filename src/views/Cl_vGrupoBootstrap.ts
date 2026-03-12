import type { I_vGrupo } from "../interfaces/I_vGrupo.js";

export default class Cl_vGrupoBootstrap implements I_vGrupo {
    private inNombre: HTMLInputElement;
    private inEdad: HTMLInputElement;

    private btProcesar: HTMLButtonElement;
    private btNuevaPersona: HTMLButtonElement;

    private salida: HTMLElement;
    private modal: any;

    constructor() {
        this.inNombre = document.getElementById("inNombre") as HTMLInputElement;
        this.inEdad = document.getElementById("inEdad") as HTMLInputElement;
        this.btProcesar = document.getElementById("btProcesar") as HTMLButtonElement;
        this.btNuevaPersona = document.getElementById("btNuevaPersona") as HTMLButtonElement;

        this.salida = document.getElementById("salida") as HTMLElement;

        this.modal = new (window as any).bootstrap.Modal(
            document.getElementById("modalPersona")
        );

        this.btNuevaPersona.onclick = () => {
            this.modal.show();
        };
    }

    get nombre(): string {
        return this.inNombre.value;
    }

    get edad(): number {
        return +this.inEdad.value;
    }

    onProcesar(callback: () => void): void {
        this.btProcesar.onclick = () => {
            // Validación
            if (!this.nombre.trim()) {
                alert("Ingresa un nombre válido");
                return;
            }
            if (isNaN(this.edad) || this.edad <= 0) {
                alert("Ingresa una edad válida mayor a 0");
                return;
            }

            callback();

            this.modal.hide();
            this.inNombre.value = "";
            this.inEdad.value = "";
        };
    }

    reportar(
        cantidad: number,
        promedio: number,
        edadMayor: number,
        nombreMayor: string,
        edadMenor: number,
        nombreMenor: string,
        mayores18?: number,
        menores18?: number
    ): void {
        this.salida.innerHTML = `
        <div class="alert alert-info mt-3">
            <p><b>Total de personas registradas:</b> ${cantidad}</p>
            <p><b>Edad promedio:</b> ${promedio.toFixed(0)} años</p>
            <p><b>Persona de mayor edad:</b> ${nombreMayor} tiene ${edadMayor} años</p>
            <p><b>Persona de menor edad:</b> ${nombreMenor} tiene ${edadMenor} años</p>
            ${mayores18 !== undefined ? `<p><b>Mayores de 18 años:</b> ${mayores18}</p>` : ""}
            ${menores18 !== undefined ? `<p><b>Menores de 18 años:</b> ${menores18}</p>` : ""}
        </div>`;
    }

    reportarListado(personas: { nombre: string; edad: number }[]): void {
        if (!personas || personas.length === 0) return;

        const tabla = `
        <table class="table table-striped mt-3">
            <thead><tr><th>Nombre</th><th>Edad</th></tr></thead>
            <tbody>
                ${personas.map(p => `<tr><td>${p.nombre}</td><td>${p.edad}</td></tr>`).join("")}
            </tbody>
        </table>`;
        this.salida.innerHTML += tabla;
    }
}