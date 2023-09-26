import { vv } from "../../../armazem/leitura/veiculos.js"
// import link from "../../../setup/index.js"
import apagar from "../../../olivia/apaga.js"
import {RAIZ} from "../../../raiz.js"

$(document).on("click", "#remocaoVeiculo", function(){
    let suite = $("#quarto_painel").text()
    let id = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do veículo?:')
    if (motivo == null) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else if (motivo.length == 0) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else {
        let dados = 'tabela=' + 'patio' + '&coluna=' + 'id' + '&valor=' + id
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        vv(suite)
    }
})
