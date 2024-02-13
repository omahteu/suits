import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import fazerRequisicaoAjax from "../../tools/ajax.js"
import make_url from "../../tools/urls.js"

export default function pagamento(codigo, suite) {
    let url = make_url("checkout", "salvar_pagamento.php")
    let metodo_pagamento = $("#modo_pagamento :selected").text()
    let parcelas = $("#numero_parcelas").val()
    let pagamento = $("#totalGeral").text()
    let permanencia = $("#valor_addPermanencia").text()
    let consumo = $("#valorItens").text()

    var box = JSON.parse(sessionStorage.getItem("offs"))
    let dadosOCupacao = box.filter(x => x.suite == suite)
    let entrada = dadosOCupacao[0].hora

    let dados = 'total=' + parseFloat(pagamento).toFixed(2) + 
    '&forma=' + metodo_pagamento + 
    '&parcelas=' + parcelas + 
    '&data=' + data_atual() + 
    '&usuario=' + localStorage.getItem("nome") + 
    '&codigo=' + codigo +
    '&suite=' + suite +
    '&entrada=' + entrada +
    '&saida=' + hora_atual_segundos() +
    '&permanencia' + permanencia +
    '&consumo' + consumo

    console.log(dados)

    fazerRequisicaoAjax(url, "POST", dados, function() {
        console.log('Registro de Pagamento | OK')
    }, function(erro) {
        console.log(erro)
    })
}
