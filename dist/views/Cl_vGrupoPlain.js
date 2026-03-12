export default class Cl_vGrupoPlain {
    inEdad;
    btProcesar;
    lblPromedio;
    constructor() {
        this.inEdad = document.getElementById("inEdad");
        this.btProcesar = document.getElementById("btProcesar");
        this.lblPromedio = document.getElementById("lblPromedio");
    }
    get edad() {
        return +this.inEdad.value;
    }
    onProcesar(callback) {
        this.btProcesar.onclick = callback;
    }
    reportar(promedio) {
        this.lblPromedio.innerHTML = promedio.toFixed(0);
    }
}
//# sourceMappingURL=Cl_vGrupoPlain.js.map