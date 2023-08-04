// Imports listados por ordem alfabética das pastas
// import { registraLimiteManutencao, registraLimiteDesistencia, registraLimiteLimpeza } from "../../qwertyu.js"

// import desligar_luz from "../automacao/desligar.js"
// import ligar_luz from "../automacao/ligar.js"

// import ultima_limpeza from "../botoes/limpar.js"

// import envia_dados_limpeza from "../caixa/limpeza.js"
// import envia_dados_faxina from "../caixa/faxina.js"
// import envia_dados_manutencao from "../caixa/manutencao.js"

// import { data_atual } from "../geradores/data.js"
// import { hora_atual } from "../geradores/hora.js"

// import fechar_cofre from "../limpar/cofre.js"
// import encerrar_tarefas from "../limpar/tarefas.js"

// import tempo_pausado from "../quartos/ajax/post/decorrido.js"
// import { abrirMenu, fecharMenu } from "../quartos/estrutural/caixas.js"
// import camareira_faxina from "../quartos/estrutural/camareira_faxina.js"
// import listar_camareiras from "../quartos/estrutural/lista_camareiras.js"

// import Suitesdisponiveis from "../relatorios/quartosDisponiveis.js"

// import { fimModal } from "../setup/camareiras.js"
// import atualiza_status from "../setup/atualiza.js"
// import { inicioModalTroca } from "../setup/troca.js"
import { acao } from "../../setup/box.js"
// import { play } from "../setup/start_relogios.js"
// import { stop } from "../setup/stop_relogios.js"
// import { clean } from "../setup/clean_relogios.js"

// import aguardando from "../tags/aguardo.js"
// import desfazer from "../tags/desfazer.js"
// import faxina from "../tags/faxina.js"
// import limpeza from "../tags/limpeza.js"
// import camareiras from "../tags/camareira.js"

import suite_fica_disponivel from "./operacoes/disponibilizar_suite.js"
import comecar_faxina from "./operacoes/iniciar_faxina.js"
import comecar_limpeza from "./operacoes/iniciar_limpeza.js"
import trocando_suite from "./operacoes/trocar_suite.js"
import encerrando_suite from "./operacoes/encerrar.js"
import encerrando_limpeza from "./operacoes/encerrar_limpeza.js"
import encerrando_registro from "./operacoes/encerrar_registro.js"


import encerrando_faxina from "./operacoes/encerrar_faxina.js"
import encerrando_registro2 from "./operacoes/encerrar_registro2.js"

$(document).on("click", ".inferior", function () {
    let status = $(this).val()
    let suite = $("#quarto_painel").text()
    reacao(status, suite)
})

function reacao(status, suite) {
    let h = $(`#hora${suite}`).text()
    let m = $(`#minuto${suite}`).text()
    let s = $(`#segundo${suite}`).text()
    let tempo = `${h}:${m}:${s}`
    let usuario = String($("#saudacao_usuario").text()).split(",")[1].trim()

    if (status == acao[0]) {
        suite_fica_disponivel(suite, usuario, tempo)
    } else if (status == acao[1]) {
        comecar_faxina(suite, usuario, tempo)
    } else if (status == acao[2]) {
        comecar_limpeza(suite)
    } else if (status == acao[3]) {
        trocando_suite()
    } else if (status == acao[4]) {
        encerrando_suite(h, m, s, suite)
    } else if (status == acao[5]) {
        encerrando_limpeza(suite, usuario, tempo)
    } else if (status == acao[6]) {
        encerrando_registro(suite)
    } else if (status == acao[7]) {
        // $("#acoes3").val("Ligar Luz")
        // desligar_luz(suite)
        // localStorage.setItem("status_botao", "desligado")
        // localStorage.setItem("luz", "desligada")
    } else if (status == acao[8]) {
        // registraLimiteManutencao(suite, "a", "manutencao")
        // $("#acoes").val("Apagar Luz")
        // ligar_luz(suite)
        // localStorage.setItem("status_botao", "ligado")
        // localStorage.setItem("luz", "ligada")
    } else if (status == acao[9]) {
        encerrando_faxina(suite, usuario, tempo)
    } else if (status == acao[10]) {
        encerrando_registro2(suite)
    }
}
