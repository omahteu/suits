import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import { gera_id } from "../../geradores/id.js"
import salvar from "../../olivia/salva.js"
import { RAIZ } from "../../raiz.js"

export default function ocupacao() {
    let suite = $("#suiteEncerrando").text()
    let forma = $("#modo_pagamento").find(':selected').text();
    var box = JSON.parse(sessionStorage.getItem("offs"))
    let codigo_ocupacao = gera_id(5)
    let dadosOCupacao = box.filter(x => x.suite == suite)
    let entrada = dadosOCupacao[0].hora
    localStorage.setItem(`codigo${suite}`, codigo_ocupacao)
    let caixa = 'usuario=' + localStorage.getItem("nome") + '&data=' + data_atual() + '&codigo=' + codigo_ocupacao + '&suite=' + suite + '&entrada=' + entrada + '&saida=' + hora_atual_segundos() + '&total=' + $("#totalGeral").text() + '&forma=' + forma
    console.log(caixa)
    salvar(`http://${RAIZ}/suits/php/suites/ocupacao.php`, caixa)
}
