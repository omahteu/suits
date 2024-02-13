import historico from "../assets/historico.js";
import usuario from "../assets/usuario.js"

var identificadores = {
    1: "usuario"
}

$(document).ready(() => {
    historico();
    $(`#${identificadores[1]}`).val(usuario())
});
