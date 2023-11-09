import receber from "../quartos/auxiliares/funcao4.js"
import { hora_atual_segundos } from "../geradores/hora.js";

setTimeout(() => {
    busca_e_exibe_quartos()
}, 1500);

async function busca_e_exibe_quartos() {
    let base = receber("dados_suites")
    base.forEach(e => {
        var indice = e.numeroSuite
        var nome = e.nomeSuite
        $(".cardBox").append(
            `
            <li class="card">
                <div>
                    <h3 id="contador">
                        <span id="hora${indice}">00</span>:<span id="minuto${indice}">00</span>:<span id="segundo${indice}">00</span>
                    </h3>
                    <div class="cardName" id="suite">${indice}</div>
                    <h4 id="tipo_suite${indice}">${nome}</h4>
                </div>
                <a id="context">
                    <div class="iconBx">
                        <i class="fa fa-gear"></i>
                    </div>
                </a>
            </li>
            `
        )
    });
}

$(document).on('click', '[class="card"]', function () {
    var passo = $(this)
    var passo2 = $(passo[0].children[0])
    var passo3 = $(passo2[0].children[1])
    var passo4 = passo3.text()
    var cor = $(passo[0]).css("background-color")
    $("#quarto_painel").text(passo4)
    $("#suiteE").attr("value", passo4)
	$("#hora").attr("value", hora_atual_segundos())
    if (cor == 'rgb(255, 255, 255)' || cor == 'rgb(255, 255, 0)') {
        setTimeout(() => {
            $("#vh_painel").text('0')
            $("#vq_painel").text('0')
            $("#consumo_painel").text('0')
            $("#parcial_painel").text('0')
            var tab = document.getElementById('listaProdutosComprados')
            tab.innerHTML = ''
            var pat = document.getElementById('listaveiculosguardados')
            pat.innerHTML = ''
        }, 1000);
    }
})
