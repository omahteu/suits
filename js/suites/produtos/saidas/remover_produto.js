import { ll } from "../../../armazem/leitura/produtos.js"
import link from "../../../setup/index.js"
import apagar from "../../../olivia/apaga.js"

$(document).on("click", "#remocaoProduto", function () {
    let suite = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do produto:')
    if (motivo == null) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else if (motivo.length == 0) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else {
        apagar(`${link[5]}${suite}/`)
        ll(suite)
    }
})
