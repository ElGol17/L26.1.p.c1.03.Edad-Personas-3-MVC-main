import Cl_vGrupoBootstrap from "./views/Cl_vGrupoBootstrap.js";
import Cl_cGrupo from "./controllers/Cl_cGrupo.js";


window.addEventListener("DOMContentLoaded", () => {
    const vista = new Cl_vGrupoBootstrap();
    new Cl_cGrupo(vista);
});