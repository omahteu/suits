import _abertura from "./bloqueios/abertura.js"
import _fundos from "./bloqueios/fundo.js"
import _home from "./bloqueios/home.js"
import _estoque from "./bloqueios/estoque.js"
import _historico from "./exibir/historico_usuarios.js"
import _permissoes from "./permissoes/index.js"
import {_dados} from "./dados/index.js"

$(document).ready(function () {
    var nomeUsuario = localStorage.getItem('nome')
    $("#usuario").val(nomeUsuario)
    _dados()
    _abertura()
    _home()
    _estoque()
    _fundos()
    _historico()
    _permissoes()
})
