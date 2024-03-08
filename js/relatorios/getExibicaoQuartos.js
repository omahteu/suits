import { hora_atual_segundos } from "../geradores/hora.js";


$(document).on('click', '[class="card"]', function () {
    var passo = $(this)
    var passo2 = $(passo[0].children[0])
    var passo3 = $(passo2[0].children[1])
    var passo4 = passo3.text()
    var cor = $(passo[0]).css("background-color")
    if (cor == 'rgb(75, 192, 192)') {
        $("#vh_painel").text('0')
        $("#vq_painel").text('0')
        $("#consumo_painel").text('0')
        $("#parcial_painel").text('0')
        var tab = document.getElementById('listaProdutosComprados')
        tab.innerHTML = ''
        var pat = document.getElementById('listaveiculosguardados')
        pat.innerHTML = ''
    }
    $("#quarto_painel").text(passo4)
    $("#suiteE").attr("value", passo4)
    $("#hora").attr("value", hora_atual_segundos())
})
