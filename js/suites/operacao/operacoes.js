import desligar_luz from "../../automacao/desligar.js";
import ligar_luz from "../../automacao/ligar.js";
import suite_fica_disponivel from "./operacoes/disponibilizar_suite.js";
import comecar_faxina from "./operacoes/iniciar_faxina.js";
import comecar_limpeza from "./operacoes/iniciar_limpeza.js";
import trocando_suite from "./operacoes/trocar_suite.js";
import {encerrando_suite} from "./operacoes/encerrar.js";
import {encerrando_suitex} from "./operacoes/encerrar.js";
import encerrando_limpeza from "./operacoes/encerrar_limpeza.js";
import encerrando_registro from "./operacoes/encerrar_registro.js";
import encerrando_faxina from "./operacoes/encerrar_faxina.js";
import encerrando_registro2 from "./operacoes/encerrar_registro2.js";
import erevisao from "./operacoes/encerrar_revisoes.js"
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
    let usuario = String($("#saudacao_usuario").text()).split(",")[1].trim();

    if (status == "Disponibilizar Quarto") {
        suite_fica_disponivel(suite, usuario, tempo);
    } else if (status == "Iniciar Faxina") {
        comecar_faxina(suite, usuario, tempo);
    } else if (status == "Iniciar Limpeza") {
        comecar_limpeza(suite);
    } else if (status == "Trocar Suíte") {
        trocando_suite();
    } else if (status == "Encerrar") {
        encerrando_suite(h, m, s, suite);
    } else if (status == "Encerrar Limpeza") {
        encerrando_limpeza(suite, usuario, tempo);
    } else if (status == "OK") {
        encerrando_registro(suite);
    } else if (status == "Apagar Luz") {
        $("#acoes3").val("Ligar Luz");
        setTimeout(() => {
            desligar_luz(suite);
            var vai =
                "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite;
            apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai);
            localStorage.setItem(`*${suite}`, "off");
        }, 650);
    } else if (status == "Ligar Luz") {
        $("#acoes3").val("Apagar Luz");
        setTimeout(() => {
            ligar_luz(suite);
            let vai = "suite=" + suite + "&situacao=" + "on";
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
            localStorage.setItem(`*${suite}`, "on");
        }, 500);
    } else if (status == "Encerrar Faxina") {
        encerrando_faxina(suite, usuario, tempo);
    } else if (status == "Selecionar") {
        encerrando_registro2(suite);
    } else if (status == "Finalizar") {
        encerrando_suitex(h, m, s, suite);
    } else if (status == 'Encerrar revisão') {
        erevisao(suite, usuario)
    }
}
