import _relatorio from "../fechamento/registro.js"
import _valores from "../fechamento/valores.js"

var commands = {
    1: "#fecharCaixa"
}

$(document).on("click", commands[1], function () {
    // _relatorio()
    setTimeout(() => {
        _valores()
    }, 200)
})
