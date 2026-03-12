import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mGrupo {
    private personas;
    private acEdad;
    private edadMayor;
    private edadMenor;
    private nombreMayor;
    private nombreMenor;
    private cntMayores18;
    private cntMenores18;
    procesarPersona(p: Cl_mPersona): void;
    promedioEdad(): number;
    cantidadPersonas(): number;
    getEdadMayor(): number;
    getEdadMenor(): number;
    getNombreMayor(): string;
    getNombreMenor(): string;
    getMayores18(): number;
    getMenores18(): number;
    getPersonas(): Cl_mPersona[];
}
//# sourceMappingURL=Cl_mGrupo.d.ts.map