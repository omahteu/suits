import { inicioMenu } from "../../setup/menu.js"

$(document).on("click", "#editar_cartoes", function () {

    // Configuração do Formulário Modal
    var fm = document.forms[5]
    fm.id = "modal_cartoes"
    fm.action = "../php/configuracoes/cartoes.php"

    console.log(fm.id)

    // Parseando Dados
    let base = $(this).val()
    let id = String(base).split(",")[0]
    let tipo = String(base).split(",")[1]

    // Abertura do Modal
    inicioMenu("modau-menu")
    $(`#${fm.id}`).html(
        `
        <input type="text" name="idCartao" value="${id}" hidden>
        <input type="text" name="tipo" value="${tipo}" hidden>
        <input type="text" name="nova_taxa" id="nova_taxa" placeholder="Nova Taxa" required>
        <button type="submit" class="btn btn-success">Atualizar</button>
        `
    )
})
