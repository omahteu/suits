// import desligar_luz from "../../../automacao/desligar.js"
import registraLimiteDesistencia from "../../tarefas/registros/desistencia.js"
import tempo_pausado from "../../../quartos/ajax/post/decorrido.js"
import atualiza_status from "../../../setup/atualiza.js"
import { stop } from "../../../setup/stop_relogios.js"
import aguardando from "../../../tags/aguardo.js"
import desfazer from "../../../tags/desfazer.js"
import { fimMenu } from "../../../setup/menu.js"

export default function encerrando_suite(h, m, s, suite) {

    
    if (confirm(`Encerrar a Suíte ${suite}?`)) {

        localStorage.setItem("last", suite)
        //desligar_luz(suite)

        setTimeout(() => { registraLimiteDesistencia(suite, "a", "desistencia") }, 100)

        setTimeout(() => { tempo_pausado(h, m, s, suite) }, 200)

        setTimeout(() => { stop[suite]() }, 300);

        setTimeout(() => { desfazer(suite) }, 400)

        setTimeout(() => { fimMenu() }, 500)

        setTimeout(() => { aguardando(suite) }, 600)

        setTimeout(() => { atualiza_status(suite, "aguardando"), 700 })

        setTimeout(() => { window.open('../html/checkout.html', '_blank') }, 800)
    }
}
