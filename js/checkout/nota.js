import { inicioMenu, fimMenu } from "../setup/menu.js";

export default function notas() {
    let campo = document.getElementById("FormMain")
    campo.innerHTML = ""
    inicioMenu("modau-menu")
    var menu = document.forms.namedItem("FormMain").id
    $(`#${menu}`).prepend(
        `<input type="text" id="add_nota" placeholder="Nº Nota">` +
        `<button type="button" class="btn btn-success" id="registrar_nota">Registrar</button>`
    )
}
