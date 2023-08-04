import registrar_pagamento from "./pagamento.js"
import registrando from "./produto.js"
import ocupacao from "./ocupacao.js"
import limpando from "./limpar.js"
import notas from "../../checkout/nota.js"

$(document).on("click", "#encerrar", function () {
    let sinal = $("#confirma_parcelas").attr("disabled")
    if (sinal == undefined) {
        alert("Defina as opções de pagamento!")
    } else {

        //notas()

        setTimeout(() => { registrar_pagamento() }, 100)
        setTimeout(() => { registrando() }, 200)
        setTimeout(() => { ocupacao() }, 300)
        /*
        setTimeout(() => {
            let id = localStorage.getItem("last")
            desligar_luz(id)
            localStorage.setItem("luz", "desligada")
        }, 400)*/
        setTimeout(() => { limpando() }, 500)
        setTimeout(() => { window.close() }, 600)
    }
})
