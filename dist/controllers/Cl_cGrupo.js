import Cl_mGrupo from "../models/Cl_mGrupo.js";
import Cl_mPersona from "../models/Cl_mPersona.js";
export default class Cl_cGrupo {
    mGrupo;
    vGrupo;
    constructor(vista) {
        this.mGrupo = new Cl_mGrupo();
        this.vGrupo = vista;
        this.vGrupo.onProcesar(() => this.procesarPersona());
    }
    procesarPersona() {
        const persona = new Cl_mPersona({
            nombre: this.vGrupo.nombre,
            edad: this.vGrupo.edad
        });
        this.mGrupo.procesarPersona(persona);
        this.vGrupo.reportar(this.mGrupo.cantidadPersonas(), this.mGrupo.promedioEdad(), this.mGrupo.getEdadMayor(), this.mGrupo.getNombreMayor(), this.mGrupo.getEdadMenor(), this.mGrupo.getNombreMenor(), this.mGrupo.getMayores18(), this.mGrupo.getMenores18());
        if (this.vGrupo.reportarListado) {
            this.vGrupo.reportarListado(this.mGrupo.getPersonas().map(p => ({ nombre: p.nombre, edad: p.edad })));
        }
    }
}
//# sourceMappingURL=Cl_cGrupo.js.map