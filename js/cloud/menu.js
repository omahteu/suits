import {inicioMenu} from "../setup/menu.js"


$(document).on("click", "#menu_cloud", function() {
    let id = $(this).attr("data-toggle").split(",")[0]

    inicioMenu("modau-menu")

    let fmu = document.forms[0]
    fmu.id = "formCloud"
    fmu.action = "../php/cloud/automacoes.php"

    $(`#${fmu.id}`).html(
        `
            <input type="text" name="id" value="${id}" readonly>
            <select name="acao" id="acao">
                <option value="1">Ativar</option>
                <option value="0">Desativar</option>
            </select>
            <button type="button" class="btn btn-primary" id="kds">Atualizar</button>
        `
    )
})
