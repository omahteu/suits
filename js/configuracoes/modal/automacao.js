import { inicioMenu } from "../../setup/menu.js"

$(document).on("click", "#editar", function () {
    var id_quarto = $(this).attr("name")
    let id = $(this).attr("data-toggle")
    inicioMenu("modau-menu")

    let fm = document.forms[5]
    fm.id = "formAutos"
    fm.action = "../php/configuracoes/automacoes.php"

    $(`#${fm.id}`).html(
        `
        <input type="text" name="idAuto" value="${id}">
        <input type="text" name="quarto" value="${id_quarto}" id="at_quarto">
        <input type="text" name="placa" id="at_ip"placeholder="ip">
        <input type="text" name="rele" id="at_rele" placeholder="rele">
        <button type="submit" class="btn btn-success">Atualizar</button>
        `
    )
})
