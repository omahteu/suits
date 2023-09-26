import receber from "../quartos/auxiliares/funcao4.js"
import { hora_atual_segundos } from "../geradores/hora.js";

// $(window).on("load", function () {
//     busca_e_exibe_quartos()
// })

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
    $("#quarto_painel").text(passo4)
    $("#suiteE").attr("value", passo4)
	$("#hora").attr("value", hora_atual_segundos())
	$("#vs").attr("value", $("#vq_painel").text())
    // var fm = document.forms['botoes']
    // var el = fm.elements
    // el[0].setAttribute("name", passo4)
    // el[1].setAttribute("name", passo4)
    // el[2].setAttribute("name", passo4)
    // el[3].setAttribute("data-toggle", passo4)
    // el[4].setAttribute("data-toggle", passo4)
    // el[5].setAttribute("data-toggle", passo4)
})
