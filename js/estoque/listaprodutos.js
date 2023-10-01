import {RAIZ} from "../raiz.js"

$(window).on("load", function() {
    relatorioProdutos()
})

async function relatorioProdutos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(item => {
            $('#lista_produtos').append(`<option value="${item.codigo}">${item.descricao}</option>`)
        });
    }
}