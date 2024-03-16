import { leituraObservacoes } from "../leitura/observacao.js"
// import link from "../../setup/index.js"
import salvar from "../../olivia/salva.js"

export function registroObservacao(){
    var quarto =  $("#quarto_painel").text()
    var pessoas = $("#pes").val()
    var obs = $("#obs").val()
    dados = {quarto: quarto, pessoas: pessoas, texto: obs}
    salvar(link[14], dados)
    leituraObservacoes()
    document.getElementById('painel').reset()
}
