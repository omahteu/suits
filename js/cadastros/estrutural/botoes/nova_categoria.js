import { inicioMenu } from "../../../setup/menu.js"

$(document).on("click", "#nova_categoria", function(){
    let campo = document.getElementById("FormMain")
    campo.innerHTML = ""
    inicioMenu("modau-menu")
    let fm = document.forms[7]
    fm.action = "../php/cadastros/categoria.php"
    var menu = document.forms.namedItem("FormMain").id
    $(`#${menu}`).prepend(
        `<input type="text" name="categoria" id="categoria" placeholder="Categoria" required>`+
        `<button type="submit" class="btn btn-success">Cadastrar</button>`
    )
})
