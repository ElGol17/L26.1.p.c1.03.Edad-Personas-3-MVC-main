import type { I_vGrupo } from "../interfaces/I_vGrupo";
export default class Cl_vGrupoPlain implements I_vGrupo {
    private inEdad;
    private btProcesar;
    private lblPromedio;
    constructor();
    get edad(): number;
    onProcesar(callback: () => void): void;
    reportar(promedio: number): void;
}
//# sourceMappingURL=Cl_vGrupoPlain.d.ts.map