import registraLimiteTroca from "../../suites/tarefas/registros/locacao.js"

import ligar_luz from "../../automacao/ligar.js"
import desligar_luz from "../../automacao/desligar.js"

import tempo_pausado from "../../quartos/ajax/post/decorrido.js"
import { registra_troca } from "../../quartos/ajax/post/troca.js"

import alterar from "../../olivia/altera.js"

import encerrar_tarefas from "../../limpar/tarefas.js"

import receber from "../../quartos/auxiliares/funcao4.js"

import { tick } from "../../setup/box.js"
import link from "../../setup/index.js"
import { fimModalTroca } from "../../setup/troca.js"
import { play } from "../../setup/start_relogios.js"
import { stop } from "../../setup/stop_relogios.js"

import locado from "../../tags/locacao.js"
import aguardando from "../../tags/aguardo.js"
import desfazer from "../../tags/desfazer.js"

import {RAIZ} from "../../raiz.js"



$(document).on("click", "#substituir", function () {
    let suite = $("#quarto_antigo").val()
    let novo = $("#quartos_disponiveis").val()
    let usuario = $("#usuario_sistema").text()
    let hora = $(`#hora${suite}`).text()
    let minuto = $(`#minuto${suite}`).text()
    let segundo = $(`#segundo${suite}`).text()
    trocaComanda(suite, novo)
    trocaPatio(suite, novo)
    trocaCofre(suite, novo)
    setTimeout(() => { registra_troca(usuario, suite, novo) }, 100)
    setTimeout(() => { tempo_pausado(hora, minuto, segundo, suite) }, 100)
    setTimeout(() => {desligar_luz(suite)}, 500)
    setTimeout(() => {registraLimiteTroca(novo, "a", "troca")}, 600)
    setTimeout(() => {encerrar_tarefas(suite)}, 700)
    setTimeout(() => { iniciando(suite, novo, hora, minuto, segundo) }, 1000)
    setTimeout(() => { finalizando(suite) }, 1500)
    setTimeout(() => {ligar_luz(novo)}, 2000)
})

function iniciando(antigo, suite, hora, minuto, segundo) {
    var p = [hora, minuto, segundo]
    setTimeout(() => { locado(suite) }, 200)
    setTimeout(() => { play[suite](suite, p[0], p[1], p[2]) }, 300)
    setTimeout(() => { fimModalTroca() }, 400)
    setTimeout(() => {
        let base = receber("offs")
        var dados = base.filter(item => item.suite === antigo)
        dados.forEach(e => {
            sessionStorage.setItem("ficha", JSON.stringify(e))
        })

    }, 500)
    setTimeout(() => {
        var card = JSON.parse(sessionStorage.getItem("ficha"))
        var ficha = 'hora=': card.datahora, '&valor=': card.valor, '&suite=': suite, '&tipo=': "locado"
        // $.post(link[11], ficha, () => {  })

        var xhr = new XMLHttpRequest();
        xhr.open("POST", `http://${RAIZ}/suits/php/suites/informacoes.php`, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
                sessionStorage.removeItem("ficha")
            }
        };
        xhr.send(ficha);
    }, 700)
}

function finalizando(suite) {
    let flags = tick[`${suite}`]
    stop[suite]()
    setTimeout(() => { desfazer(suite) }, 200)
    setTimeout(() => { aguardando(suite) }, 300)
    setTimeout(() => {
        let base = receber("offs")
        var dados = base.filter(item => item.suite === suite)
        dados.forEach(e => {
            sessionStorage.setItem("fichas", JSON.stringify(e))
        })
    }, 500)
    setTimeout(() => {
        var card = JSON.parse(sessionStorage.getItem("fichas"))
        var id = card.id
        let ficha2 = 'tipo=' + 'aguardando' + '&id=' + id
        alterar(`http://${RAIZ}/suits/php/suites/editarinfos.php`, ficha2, false, "", false, "")
        sessionStorage.removeItem("fichas")
    }, 700)
}

async function trocaComanda(antigo, novo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"].filter(item => item.suite === antigo)
        dados.forEach(el => {
            var dados = 'antigo=' + el.id + '&novo=' + novo
            alterar(`http://${RAIZ}/suits/php/suites/editarcomanda.php`, dados, 'comanda', false, "", false, "")
        })
    }
}

async function trocaPatio(antigo, novo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"].filter(item => item.suite === antigo)
        dados.forEach(e => {
            var dados = 'antigo=' + el.id + '&novo=' + novo
            alterar(`http://${RAIZ}/suits/php/suites/editarpatio.php`, dados, 'patio', false, "", false, "")
        })
    }
}

async function trocaCofre(suite, novo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"].filter(x => x.suite == suite)
        dados.forEach(e => {
            var dados = 'antigo=' + e.id + '&novo=' + novo
            alterar(`http://${RAIZ}/suits/php/suites/editarcofre.php`, dados, false, "", false, "")
        });
    }
}
