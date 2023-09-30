import registrar_pagamento from "./pagamento.js"
import registrando from "./produto.js"
import ocupacao from "./ocupacao.js"
import limpando from "./limpar.js"
// import notas from "../../checkout/nota.js"

$(document).on("click", "#encerrar", function () {
    //notas()

    var cm = $("#selecionaCamareira :selected").text()
    if (cm != "Camareira") {
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
        //setTimeout(() => { window.close() }, 1000)
    } else {
        alert("Selecione uma Camareira")
    }
})
