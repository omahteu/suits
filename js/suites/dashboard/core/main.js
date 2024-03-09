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
import buscalocacoes from "../assets/buscarLocacoes.js"
import buscasuites from "../assets/buscarSuites.js"
import buscatarefas from "../assets/buscaTarefas.js"

$(document).ready(function() {
    exibirImpressora()
    buscaprecos() // executar por evento
})

$(document).on('click', '[class="card"]', function () {
    padraoDash(this)
})

$(document).on("click", "#registrar_veiculo", function() {
    veiculo()
})

$(document).on("click", "#remocaoVeiculo", function(){
    remover()
})

$(document).on("click", "#imprimir_parcial", function() {
    dadosImpressao()
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
    registraProduto()
})

$(document).on("click", "#remocaoProduto", function () {
    let id = $(this).attr("name")
    removeProduto(id)
})

$(document).on("click", "", function() {
    calculoHoraAdicional('1')
    calculoSuite("1")
    calculoParcial()
    listaComanda()
    atualizaValorSuite("1")
})

setTimeout(() => {
    buscalocacoes()
    buscasuites()
    buscatarefas()
}, 500);
