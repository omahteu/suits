import desligar_luz from "../../../../automacao/desligar.js";
import ligar_luz from "../../../../automacao/ligar.js";
import disponibizandoSuite from "../../../../suites/operacao/operacoes/disponibilizar_suite.js";
import comecandoFaxina from "../../../../suites/operacao/operacoes/iniciar_faxina.js";
import comecandoLimpeza from "../../../../suites/operacao/operacoes/iniciar_limpeza.js";
import modalTrocandoSuite from "../../../../suites/operacao/operacoes/trocar_suite.js";
import { encerrandoSuite } from "../../../../suites/operacao/operacoes/encerrar.js";
import { encerrandoSuiteEsperandoPagamento } from "../../../../suites/operacao/operacoes/encerrar.js";
import encerrandoLimpeza from "../../../../suites/operacao/operacoes/encerrar_limpeza.js";
import encerrandoCicloLocacao from "../../../../suites/operacao/operacoes/encerrar_registro.js";
import modalEncerrandoFaxina from "../../../../suites/operacao/operacoes/encerrar_faxina.js";
import encerrandoFaxina from "../../../../suites/operacao/operacoes/encerrar_registro2.js";
import modalEncerrandoRevisao from "../../../../suites/operacao/operacoes/encerrar_revisoes.js"
import { RAIZ } from "../../../../raiz.js";
import salvar from "../../../../olivia/salva.js";
import apagar from "../../../../olivia/apaga.js";


export default function submenu(status, suite) {
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
}
