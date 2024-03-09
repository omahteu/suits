import exibe_suites from "../assets/suites.js";
import receber from "../../../../quartos/auxiliares/funcao4.js";
import restaurarEstado from "../assets/estados.js";
import contador from "../assets/contadores.js";
import menu from "../assets/menu.js";
import startManutencao from "../assets/manutencao.js";
import startLocacao from "../assets/locacao.js";
import startFaxina from "../assets/faxina.js"
import startRevisao from "../assets/revisao.js";
import monitoramento from "../assets/tarefas.js";
import submenu from "../assets/subMenu.js";
import substituir from "../assets/substituicao.js";


$(document).ready(function() {
    const delay = (fn, time) => new Promise(resolve => setTimeout(() => resolve(fn()), time));

    const exibirSuites = () => exibe_suites();
    const restaurarEstados = () => {
        let base = receber("offs");
        base.forEach(e => {
            try {
                restaurarEstado(e.suite, e.tipo);
            } catch (jqXHR) {
                console.log(jqXHR);
            }
        });
    };

    delay(exibirSuites, 1000)
        .then(() => delay(restaurarEstados, 1000))
        .then(() => delay(contador, 1000));
});

$(document).on('click', '#context', function () {
    menu($(this))
})

$(document).on("click", ".manutencao", function () {
    startManutencao()
})

$(document).on("click", ".locado", function () {
    startLocacao()
})

$(document).on("click", ".faxina", function () {
    startFaxina()
})

$(document).on("click", ".revisao", function () {
    startRevisao()
})

setInterval(() => {
    monitoramento()
}, 2000);

$(document).on("click", ".inferior", function () {
    let status = $(this).val();
    let suite = $("#quarto_painel").text();
    submenu(status, suite);
});

$(document).on("click", "#substituir", function () {
    substituir()
})
