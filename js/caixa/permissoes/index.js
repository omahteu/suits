import _caixa from "./caixa.js"
import _adm from "./adm.js"
import _aberto from "./aberto.js"
import _fechado from "./fechado.js"

export default function _permissoes() {
    let i1 = localStorage.getItem("usuarioLogado")
    let i2 = localStorage.getItem('caixa')

    i1 == "caixa" ? _caixa() :
    i1 == "admin" ? _adm() : ""

    i2 == "aberto" ? _aberto() : 
    i2 == "fechado" ? _fechado() : ""

}
