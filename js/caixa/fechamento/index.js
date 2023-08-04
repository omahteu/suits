import _relatorio from "../fechamento/registro.js"
import _valores from "../fechamento/valores.js"

$("#fecharCaixa").click(function () {
    _relatorio()
    setTimeout(() => {
        _valores()
        localStorage.removeItem("prod")
    }, 200)
})
