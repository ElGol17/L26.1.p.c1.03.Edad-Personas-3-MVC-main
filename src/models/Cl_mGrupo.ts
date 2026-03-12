import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mGrupo {
    private personas: Cl_mPersona[] = [];
    private acEdad: number = 0;

    private edadMayor: number = 0;
    private edadMenor: number = 999;

    private nombreMayor: string = "";
    private nombreMenor: string = "";

    private cntMayores18: number = 0;
    private cntMenores18: number = 0;

    procesarPersona(p: Cl_mPersona): void {
        this.personas.push(p);
        this.acEdad += p.edad;

        if (p.edad > this.edadMayor) {
            this.edadMayor = p.edad;
            this.nombreMayor = p.nombre;
        }

        if (p.edad < this.edadMenor) {
            this.edadMenor = p.edad;
            this.nombreMenor = p.nombre;
        }

        if (p.edad >= 18) this.cntMayores18++;
        else this.cntMenores18++;
    }

    promedioEdad(): number {
        return this.personas.length === 0 ? 0 : this.acEdad / this.personas.length;
    }

    cantidadPersonas(): number {
        return this.personas.length;
    }

    getEdadMayor(): number {
        return this.edadMayor;
    }

    getEdadMenor(): number {
        return this.edadMenor;
    }

    getNombreMayor(): string {
        return this.nombreMayor;
    }

    getNombreMenor(): string {
        return this.nombreMenor;
    }

    getMayores18(): number {
        return this.cntMayores18;
    }

    getMenores18(): number {
        return this.cntMenores18;
    }

    getPersonas(): Cl_mPersona[] {
        return this.personas;
    }
}