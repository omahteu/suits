import { data_atual } from "../../geradores/data.js"
import salvar from "../../olivia/salva.js"
import { RAIZ } from "../../raiz.js"
import { hora_atual_segundos } from "../../geradores/hora.js"

export default function registrar_pagamento(codigo, suite) {
    let metodo_pagamento = $("#modo_pagamento :selected").text()
    let parcelas = $("#numero_parcelas").val()
    let pagamento = $("#totalGeral").text()

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
    '&permanencia' + '' +
    '&consumo' + '' 
    salvar(`http://${RAIZ}/suits/php/suites/pagamento.php`, dados)
}
