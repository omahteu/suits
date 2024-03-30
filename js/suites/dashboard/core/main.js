import padraoDash from "../assets/padrao.js"
import veiculo from "../assets/registrarVeiculo.js"
import remover from "../assets/removerVeiculo.js"
import exibirImpressora from "../assets/impressora.js"
import dadosImpressao from "../assets/impressao.js"
import estoqueDisponivel from "../assets/produtosDisponiveis.js";
import registraProduto from "../assets/registroSaida.js"
import removeProduto from "../assets/removerSaida.js"
import calculoHoraAdicional from "../assets/calculoHoraAdicional.js"
import calculoSuite from "../assets/calculoValorSuite.js"
import calculoParcial from "../assets/calculoParcial.js"
import listaComanda from "../assets/listaComanda.js"
import atualizaValorSuite from "../assets/valorSuite.js"
import buscaprecos from "../assets/buscarPrecos.js"
// import buscalocacoes from "../assets/buscarLocacoes.js"
// import buscasuites from "../assets/buscarSuites.js"
// import buscatarefas from "../assets/buscaTarefas.js"
import calculo from "../assets/comandaSoma.js"

var suiteCurrent = $("#quarto_painel").text()

$(document).ready(function() {
    exibirImpressora()
    buscaprecos() // executar por evento
})

$(document).on('click', '[class="card"]', function () {
    padraoDash(this)
})

$(document).on("click", "#registrar_veiculo", function() {
    suiteCurrent = $("#quarto_painel").text()
    veiculo(suiteCurrent)
})

$(document).on("click", "#remocaoVeiculo", function(){
    suiteCurrent = $("#quarto_painel").text()
    remover(suiteCurrent)
})

$(document).on("click", "#imprimir_parcial", function() {
    suiteCurrent = $("#quarto_painel").text()
    dadosImpressao(suiteCurrent)
})

$(document).ready(function () {
    estoqueDisponivel('r', "");
});

$(document).on('keydown', "#codigo_produto", function (e) {
    if (e.which === 9) {
        const codigoProduto = $(this).val();
        estoqueDisponivel("i", codigoProduto);
        $("#checkbox_produto").hide();
    }
});

$(document).on("click", "#registrar_produto", function() {
    suiteCurrent = $("#quarto_painel").text()
    registraProduto(suiteCurrent)
})

$(document).on("click", "#remocaoProduto", function () {
    let id = $(this).attr("name")
    removeProduto(id)
})

$(document).on("click", '[class="card"]', function() {
    suiteCurrent = $("#quarto_painel").text()
    calculoHoraAdicional(suiteCurrent)
    calculoSuite(suiteCurrent)
    calculoParcial()
    listaComanda(suiteCurrent)
    atualizaValorSuite(suiteCurrent)
    calculo(suiteCurrent)
})

// setTimeout(() => {
//     buscalocacoes()
//     buscasuites()
//     buscatarefas()
// }, 500);
