import registrar_pagamento from "./pagamento.js"
import registrando from "./produto.js"
import ocupacao from "./ocupacao.js"
import limpando from "./limpar.js"
import aguardando from "../../tags/aguardo.js"
// import notas from "../../checkout/nota.js"
import alterar from "../../olivia/altera.js"
import {RAIZ} from "../../raiz.js"

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
        /*
        setTimeout(() => {
            let id = localStorage.getItem("last")
            desligar_luz(id)
            localStorage.setItem("luz", "desligada")
        }, 400)*/
        setTimeout(() => { limpando() }, 900)
        setTimeout(() => { window.close() }, 1000)
    } else {
        alert("Selecione uma Camareira")
    }
})
