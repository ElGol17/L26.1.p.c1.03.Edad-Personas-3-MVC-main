import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mGrupo {
    personas = [];
    acEdad = 0;
    edadMayor = 0;
    edadMenor = 999;
    nombreMayor = "";
    nombreMenor = "";
    cntMayores18 = 0;
    cntMenores18 = 0;
    procesarPersona(p) {
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
        if (p.edad >= 18)
            this.cntMayores18++;
        else
            this.cntMenores18++;
    }
    promedioEdad() {
        return this.personas.length === 0 ? 0 : this.acEdad / this.personas.length;
    }
    cantidadPersonas() {
        return this.personas.length;
    }
    getEdadMayor() {
        return this.edadMayor;
    }
    getEdadMenor() {
        return this.edadMenor;
    }
    getNombreMayor() {
        return this.nombreMayor;
    }
    getNombreMenor() {
        return this.nombreMenor;
    }
    getMayores18() {
        return this.cntMayores18;
    }
    getMenores18() {
        return this.cntMenores18;
    }
    getPersonas() {
        return this.personas;
    }
}
//# sourceMappingURL=Cl_mGrupo.js.map