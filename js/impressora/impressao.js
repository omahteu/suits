import salvar from "../olivia/salva.js"
import {RAIZ} from "../raiz.js"

$(document).on("click", "#imprimir_parcial", function() {

    let base = JSON.parse(sessionStorage.getItem('offs'))

    let suite = $("#quarto_painel").text()

    let fsuits = base.filter(z => z.suite == suite)

    let inicio = fsuits[0].hora
    let fim = "00:00:00"
    let tipo = fsuits[0].tipo

    var hora = $(`#hora${suite}`).text()
    var minuto = $(`#minuto${suite}`).text()
    var segundo = $(`#segundo${suite}`).text()
    let tempo = `${hora}:${minuto}:${segundo}`

    let vsuite = $("#vq_painel").text()
    let consumo = $("#consumo_painel").text()
    let add = $("#vh_painel").text()
    let total = $("#parcial_painel").text()
    let receber = `R$ 00.00`

    let dados = 'suite=' + suite + '&inicio=' + inicio + '&fim=' + fim + '&tempo=' + tempo + '&tipo=' + tipo + '&vsuite=' + vsuite + '&vconsumo=' + consumo + '&vadd=' + add + '&total=' + total + '&receber=' + receber
    salvar(`http://${RAIZ}/suits/php/suites/impressao.php`, dados)

})