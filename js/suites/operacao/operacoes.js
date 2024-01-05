import desligar_luz from "../../automacao/desligar.js";
import ligar_luz from "../../automacao/ligar.js";
import disponibizandoSuite from "./operacoes/disponibilizar_suite.js";
import comecandoFaxina from "./operacoes/iniciar_faxina.js";
import comecandoLimpeza from "./operacoes/iniciar_limpeza.js";
import modalTrocandoSuite from "./operacoes/trocar_suite.js";
import { encerrandoSuite } from "./operacoes/encerrar.js";
import { encerrandoSuiteEsperandoPagamento } from "./operacoes/encerrar.js";
import encerrandoLimpeza from "./operacoes/encerrar_limpeza.js";
import encerrandoCicloLocacao from "./operacoes/encerrar_registro.js";
import modalEncerrandoFaxina from "./operacoes/encerrar_faxina.js";
import encerrandoFaxina from "./operacoes/encerrar_registro2.js";
import modalEncerrandoRevisao from "./operacoes/encerrar_revisoes.js"
import { RAIZ } from "../../raiz.js";
import salvar from "../../olivia/salva.js";
import apagar from "../../olivia/apaga.js";

$(document).on("click", ".inferior", function () {
    let status = $(this).val();
    let suite = $("#quarto_painel").text();
    reacao(status, suite);
});

function reacao(status, suite) {
    let h = $(`#hora${suite}`).text();
    let m = $(`#minuto${suite}`).text();
    let s = $(`#segundo${suite}`).text();
    let tempo = `${h}:${m}:${s}`;
    let usuario = localStorage.getItem('nome');

    switch (status) {
        case "Apagar Luz":
            $("#acoes3").val("Ligar Luz");
            setTimeout(() => {
                desligar_luz(suite);
                var vai =
                    "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite;
                apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai);
                localStorage.setItem(`*${suite}`, "off");
            }, 650);
            break;

        case "Disponibilizar Quarto":
            disponibizandoSuite(suite, usuario, tempo)
            break;

        case "Encerrar":
            encerrandoSuite(h, m, s, suite)
            break;

        case "Encerrar Faxina":
            modalEncerrandoFaxina(suite, usuario, tempo)
            break;

        case "Encerrar Limpeza":
            encerrandoLimpeza(suite, usuario, tempo)
            break;

        case 'Encerrar revisão':
            modalEncerrandoRevisao(suite, usuario)
            break;

        case "Finalizar":
            encerrandoSuiteEsperandoPagamento(h, m, s, suite)
            break;

        case "Iniciar Faxina":
            comecandoFaxina(suite, usuario, tempo)
            break;

        case "Iniciar Limpeza":
            comecandoLimpeza(suite)
            break;

        case "Ligar Luz":
            $("#acoes3").val("Apagar Luz");
            setTimeout(() => {
                ligar_luz(suite);
                let vai = "suite=" + suite + "&situacao=" + "on";
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
                localStorage.setItem(`*${suite}`, "on");
            }, 500);
            break;

        case "OK":
            encerrandoCicloLocacao(suite)
            break;

        case "Selecionar":
            encerrandoFaxina(suite)
            break;

        case "Trocar Suíte":
            modalTrocandoSuite()
            break;
            
        default:
            break;
    }

    // if (status == "Disponibilizar Quarto") {
    //     disponibizandoSuite(suite, usuario, tempo);
    // } else if (status == "Iniciar Faxina") {
    //     comecandoFaxina(suite, usuario, tempo);
    // } else if (status == "Iniciar Limpeza") {
    //     comecandoLimpeza(suite);
    // } else if (status == "Trocar Suíte") {
    //     modalTrocandoSuite();
    // } else if (status == "Encerrar") {
    //     encerrandoSuite(h, m, s, suite);
    // } else if (status == "Encerrar Limpeza") {
    //     encerrandoLimpeza(suite, usuario, tempo);
    // } else if (status == "OK") {
    //     encerrandoCicloLocacao(suite);
    // } else if (status == "Apagar Luz") {
    //     $("#acoes3").val("Ligar Luz");
    //     setTimeout(() => {
    //         desligar_luz(suite);
    //         var vai =
    //             "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite;
    //         apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai);
    //         localStorage.setItem(`*${suite}`, "off");
    //     }, 650);
    // } else if (status == "Ligar Luz") {
    //     $("#acoes3").val("Apagar Luz");
    //     setTimeout(() => {
    //         ligar_luz(suite);
    //         let vai = "suite=" + suite + "&situacao=" + "on";
    //         salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
    //         localStorage.setItem(`*${suite}`, "on");
    //     }, 500);
    // } else if (status == "Encerrar Faxina") {
    //     modalEncerrandoFaxina(suite, usuario, tempo);
    // } else if (status == "Selecionar") {
    //     encerrandoFaxina(suite);
    // } else if (status == "Finalizar") {
    //     encerrandoSuiteEsperandoPagamento(h, m, s, suite);
    // } else if (status == 'Encerrar revisão') {
    //     modalEncerrandoRevisao(suite, usuario)
    // }
}
