import registrar_pagamento from "./pagamento.js"
import registrando from "./produto.js"
import ocupacao from "./ocupacao.js"
import limpando from "./limpar.js"
import aguardando from "../../tags/aguardo.js"
// import notas from "../../checkout/nota.js"
import alterar from "../../olivia/altera.js"
import {RAIZ} from "../../raiz.js"
import desligar_luz from "../../automacao/desligar.js"
import apagar from "../../olivia/apaga.js"

$(document).on("click", "#encerrar", function () {
    //notas()

    var cm = $("#selecionaCamareira :selected").text()
    if (cm != "Camareira") {

        var suite = localStorage.getItem('last')
        var dados = 'suite=' + suite + '&tipo=' + 'aguardando'
        alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados)

        setTimeout(() => { registrar_pagamento() }, 300)
        setTimeout(() => { registrando() }, 500)
        setTimeout(() => { ocupacao() }, 800)
        setTimeout(() => {
            desligar_luz(suite)
            var vai = 'tabela=' + 'acoes' + '&coluna=' + 'suite' + '&valor=' + suite
            apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai)
        }, 650)
        setTimeout(() => { limpando() }, 900)
        setTimeout(() => { window.close() }, 1000)
    } else {
        alert("Selecione uma Camareira")
    }
})
