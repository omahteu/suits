import registraLimiteDesistencia from "../../tarefas/registros/desistencia.js"
import tempo_pausado from "../../../quartos/ajax/post/decorrido.js"
import atualiza_status from "../../../setup/atualiza.js"
// import { stop } from "../../../setup/stop_relogios.js"
import desfazer from "../../../tags/desfazer.js"
import { fimMenu } from "../../../setup/menu.js"
import ag_pagamento from "../../../tags/apagamento.js"
import { para } from "../../../contadores/relogio.js"

export function encerrandoSuite(h, m, s, suite) {
    if (confirm(`Encerrar a Suíte ${suite}?`)) {
        localStorage.setItem("last", suite)
        setTimeout(() => { registraLimiteDesistencia(suite, "d", "desistencia") }, 100)
        setTimeout(() => { tempo_pausado(h, m, s, suite) }, 300)
        // setTimeout(() => { stop[suite]() }, 400)
        setTimeout(() => { para(suite) }, 400)
        setTimeout(() => { desfazer(suite) }, 500)
        setTimeout(() => { fimMenu() }, 600)
        setTimeout(() => { ag_pagamento(suite) }, 700)
        setTimeout(() => { atualiza_status(suite, "apagamento"), 800 })
        setTimeout(() => { window.open('../html/checkout.html', '_blank') }, 1000)
    }
}

export function encerrandoSuiteEsperandoPagamento(h, m, s, suite) {
    if (confirm(`Encerrar a Suíte ${suite}?`)) {
        localStorage.setItem("last", suite)
        setTimeout(() => { tempo_pausado(h, m, s, suite) }, 300)
        setTimeout(() => { para(suite) }, 400)
        setTimeout(() => { desfazer(suite) }, 500)
        setTimeout(() => { fimMenu() }, 600)
        setTimeout(() => { ag_pagamento(suite) }, 700)
        setTimeout(() => { atualiza_status(suite, "apagamento"), 800 })
        setTimeout(() => { window.open('../html/checkout.html', '_blank') }, 1000)
    }
}