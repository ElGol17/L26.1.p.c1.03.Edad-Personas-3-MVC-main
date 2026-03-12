import type { I_vGrupo } from "../interfaces/I_vGrupo.js";
export default class Cl_vGrupoBootstrap implements I_vGrupo {
    private inNombre;
    private inEdad;
    private btProcesar;
    private btNuevaPersona;
    private salida;
    private modal;
    constructor();
    get nombre(): string;
    get edad(): number;
    onProcesar(callback: () => void): void;
    reportar(cantidad: number, promedio: number, edadMayor: number, nombreMayor: string, edadMenor: number, nombreMenor: string, mayores18?: number, menores18?: number): void;
    reportarListado(personas: {
        nombre: string;
        edad: number;
    }[]): void;
}
//# sourceMappingURL=Cl_vGrupoBootstrap.d.ts.map