import { ll } from "../../../armazem/leitura/produtos.js"
// import link from "../../../setup/index.js"
import apagar from "../../../olivia/apaga.js"
import { RAIZ } from "../../../raiz.js"

$(document).on("click", "#remocaoProduto", function () {
    let suite = $("#quarto_painel").text()
    let id = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do produto:')
    if (motivo == null) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else if (motivo.length == 0) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else {
        let dados = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
        console.log(dados, suite)
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        ll(suite)
    }
})
